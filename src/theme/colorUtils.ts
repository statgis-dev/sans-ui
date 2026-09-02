/**
 * Pure TypeScript Color Calculation Utilities for sans-ui Dynamic Theming.
 * Zero external runtime dependencies.
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number; // 0 - 360
  s: number; // 0 - 100
  l: number; // 0 - 100
}

/**
 * Parses a 3, 4, 6, or 8 digit hex color code into standard RGB (0-255).
 */
export function hexToRgb(hex: string): RGB {
  let cleanHex = hex.replace(/^#/, '').trim();

  if (cleanHex.length === 3 || cleanHex.length === 4) {
    cleanHex = cleanHex
      .split('')
      .slice(0, 3)
      .map((c) => c + c)
      .join('');
  }

  const num = parseInt(cleanHex.slice(0, 6), 16);
  if (isNaN(num)) {
    return { r: 0, g: 181, b: 217 }; // Fallback to sans-ui cyan
  }

  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Converts RGB (0-255) to 6-digit uppercase hex string (e.g. "#00B5D9").
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  const toHex = (val: number) => clamp(val).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Converts a hex color code to HSL values.
 */
export function hexToHsl(hex: string): HSL {
  const { r: r255, g: g255, b: b255 } = hexToRgb(hex);

  const r = r255 / 255;
  const g = g255 / 255;
  const b = b255 / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Converts HSL values to a 6-digit hex string.
 */
export function hslToHex(h: number, s: number, l: number): string {
  const hNorm = ((h % 360) + 360) % 360;
  const sNorm = Math.max(0, Math.min(100, s)) / 100;
  const lNorm = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((hNorm / 60) % 2) - 1));
  const m = lNorm - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (hNorm < 60) {
    r = c; g = x; b = 0;
  } else if (hNorm < 120) {
    r = x; g = c; b = 0;
  } else if (hNorm < 180) {
    r = 0; g = c; b = x;
  } else if (hNorm < 240) {
    r = 0; g = x; b = c;
  } else if (hNorm < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

/**
 * Generates a full 100–900 color ramp from a single base HEX color (set at step 500).
 */
export function generateColorRamp(hex: string): Record<number, string> {
  const { h, s } = hexToHsl(hex);

  // Standard target lightness scale (0 - 100)
  const targetLightness: Record<number, number> = {
    100: 95,
    200: 88,
    300: 76,
    400: 62,
    500: hexToHsl(hex).l, // Keep original lightness for 500
    600: Math.max(8, Math.round(hexToHsl(hex).l * 0.82)),
    700: Math.max(6, Math.round(hexToHsl(hex).l * 0.68)),
    800: Math.max(4, Math.round(hexToHsl(hex).l * 0.52)),
    900: Math.max(2, Math.round(hexToHsl(hex).l * 0.38)),
  };

  const ramp: Record<number, string> = {};

  // For very light shades (100-200), slightly moderate saturation if base is very intense
  for (const step of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
    if (step === 500) {
      ramp[500] = hex.toUpperCase();
    } else {
      const stepSat = step <= 200 ? Math.max(20, Math.min(s, 70)) : s;
      ramp[step] = hslToHex(h, stepSat, targetLightness[step]);
    }
  }

  return ramp;
}

/**
 * Computes an accessible focus ring box-shadow string from a HEX color.
 */
export function generateFocusRing(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return `0 0 0 3px rgba(${r}, ${g}, ${b}, 0.35)`;
}
