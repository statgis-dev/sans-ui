import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { generateColorRamp, generateFocusRing } from './colorUtils';

export type Theme = 'light' | 'dark';
export type RadiusPreset = 'sharp' | 'balanced' | 'rounded' | 'pill';
export type ElevationPreset = 'flat' | 'subtle' | 'high-contrast';
export type DensityMode = 'compact' | 'comfortable' | 'spacious';
export type FontScale = 'sm' | 'md' | 'lg';

export interface ThemeColorsConfig {
  primary?: string;   // Single HEX code (e.g. "#00B5D9")
  secondary?: string; // Single HEX code (e.g. "#005F96")
}

export interface ThemeFonts {
  sans?: string;
  display?: string;
  mono?: string;
}

export interface ThemeConfig {
  colors?: ThemeColorsConfig;
  radius?: RadiusPreset;
  elevation?: ElevationPreset;
  density?: DensityMode;
  fontScale?: FontScale;
  fonts?: ThemeFonts;
}

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  config: ThemeConfig;
  setConfig: (updater: ThemeConfig | ((prev: ThemeConfig) => ThemeConfig)) => void;
  setPrimaryColor: (hex: string) => void;
  setSecondaryColor: (hex: string) => void;
  setDensity: (density: DensityMode) => void;
  setRadius: (radius: RadiusPreset) => void;
  setElevation: (elevation: ElevationPreset) => void;
  setFontScale: (fontScale: FontScale) => void;
  setFonts: (fonts: ThemeFonts | undefined) => void;
  fonts?: ThemeFonts;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  targetElement?: HTMLElement | null;
  fonts?: ThemeFonts;
  config?: ThemeConfig;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'sans-ui-theme',
  targetElement,
  fonts: fontsProp,
  config: configProp,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey) as Theme | null;
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
      } catch {
        // ignore
      }
    }
    return defaultTheme;
  });

  const [config, setConfigState] = useState<ThemeConfig>(() => ({
    radius: 'balanced',
    elevation: 'subtle',
    density: 'comfortable',
    fontScale: 'md',
    ...configProp,
    fonts: configProp?.fonts || fontsProp,
  }));

  // Sync prop changes
  useEffect(() => {
    if (configProp || fontsProp) {
      setConfigState((prev) => ({
        ...prev,
        ...configProp,
        fonts: configProp?.fonts || fontsProp || prev.fonts,
      }));
    }
  }, [configProp, fontsProp]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // ignore
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const setConfig = useCallback((updater: ThemeConfig | ((prev: ThemeConfig) => ThemeConfig)) => {
    setConfigState((prev) => (typeof updater === 'function' ? updater(prev) : updater));
  }, []);

  const setPrimaryColor = useCallback((hex: string) => {
    setConfigState((prev) => ({
      ...prev,
      colors: { ...prev.colors, primary: hex },
    }));
  }, []);

  const setSecondaryColor = useCallback((hex: string) => {
    setConfigState((prev) => ({
      ...prev,
      colors: { ...prev.colors, secondary: hex },
    }));
  }, []);

  const setDensity = useCallback((density: DensityMode) => {
    setConfigState((prev) => ({ ...prev, density }));
  }, []);

  const setRadius = useCallback((radius: RadiusPreset) => {
    setConfigState((prev) => ({ ...prev, radius }));
  }, []);

  const setElevation = useCallback((elevation: ElevationPreset) => {
    setConfigState((prev) => ({ ...prev, elevation }));
  }, []);

  const setFontScale = useCallback((fontScale: FontScale) => {
    setConfigState((prev) => ({ ...prev, fontScale }));
  }, []);

  const setFonts = useCallback((fonts: ThemeFonts | undefined) => {
    setConfigState((prev) => ({ ...prev, fonts }));
  }, []);

  // Synchronize data-theme attribute
  useEffect(() => {
    const el = targetElement || (typeof document !== 'undefined' ? document.documentElement : null);
    if (el) {
      el.setAttribute('data-theme', theme);
    }
  }, [theme, targetElement]);

  // Synchronize all dynamic CSS Variables on root / targetElement
  useEffect(() => {
    const el = targetElement || (typeof document !== 'undefined' ? document.documentElement : null);
    if (!el) return;

    // 1. Primary Colors & Focus Ring
    if (config.colors?.primary) {
      const primaryRamp = generateColorRamp(config.colors.primary);
      for (const [step, hex] of Object.entries(primaryRamp)) {
        el.style.setProperty(`--color-primary-${step}`, hex);
      }
      el.style.setProperty('--border-focus', config.colors.primary);
      el.style.setProperty('--shadow-focus', generateFocusRing(config.colors.primary));
    } else {
      for (const step of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
        el.style.removeProperty(`--color-primary-${step}`);
      }
      el.style.removeProperty('--border-focus');
      el.style.removeProperty('--shadow-focus');
    }

    // 2. Secondary Colors
    if (config.colors?.secondary) {
      const secondaryRamp = generateColorRamp(config.colors.secondary);
      for (const [step, hex] of Object.entries(secondaryRamp)) {
        el.style.setProperty(`--color-secondary-${step}`, hex);
      }
    } else {
      for (const step of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
        el.style.removeProperty(`--color-secondary-${step}`);
      }
    }

    // 3. Radius Preset Mapping
    if (config.radius === 'sharp') {
      el.style.setProperty('--radius-none', '0px');
      el.style.setProperty('--radius-xs', '0px');
      el.style.setProperty('--radius-sm', '2px');
      el.style.setProperty('--radius-md', '4px');
      el.style.setProperty('--radius-lg', '6px');
      el.style.setProperty('--radius-xl', '8px');
      el.style.setProperty('--radius-full', '9999px');
    } else if (config.radius === 'rounded') {
      el.style.setProperty('--radius-none', '0px');
      el.style.setProperty('--radius-xs', '6px');
      el.style.setProperty('--radius-sm', '10px');
      el.style.setProperty('--radius-md', '16px');
      el.style.setProperty('--radius-lg', '24px');
      el.style.setProperty('--radius-xl', '32px');
      el.style.setProperty('--radius-full', '9999px');
    } else if (config.radius === 'pill') {
      el.style.setProperty('--radius-none', '0px');
      el.style.setProperty('--radius-xs', '4px');
      el.style.setProperty('--radius-sm', '9999px');
      el.style.setProperty('--radius-md', '9999px');
      el.style.setProperty('--radius-lg', '20px');
      el.style.setProperty('--radius-xl', '28px');
      el.style.setProperty('--radius-full', '9999px');
    } else {
      // Balanced (default)
      el.style.removeProperty('--radius-none');
      el.style.removeProperty('--radius-xs');
      el.style.removeProperty('--radius-sm');
      el.style.removeProperty('--radius-md');
      el.style.removeProperty('--radius-lg');
      el.style.removeProperty('--radius-xl');
      el.style.removeProperty('--radius-full');
    }

    // 4. Elevation Preset Mapping
    if (config.elevation === 'flat') {
      el.style.setProperty('--shadow-xs', 'none');
      el.style.setProperty('--shadow-sm', 'none');
      el.style.setProperty('--shadow-md', 'none');
      el.style.setProperty('--shadow-lg', 'none');
      el.style.setProperty('--shadow-xl', 'none');
    } else if (config.elevation === 'high-contrast') {
      el.style.setProperty('--shadow-xs', '0 1px 3px 0 rgba(15, 23, 42, 0.15)');
      el.style.setProperty('--shadow-sm', '0 2px 6px 0 rgba(15, 23, 42, 0.18), 0 1px 3px 0 rgba(15, 23, 42, 0.12)');
      el.style.setProperty('--shadow-md', '0 6px 12px -1px rgba(15, 23, 42, 0.22), 0 3px 6px -2px rgba(15, 23, 42, 0.15)');
      el.style.setProperty('--shadow-lg', '0 14px 24px -3px rgba(15, 23, 42, 0.25), 0 6px 10px -4px rgba(15, 23, 42, 0.18)');
      el.style.setProperty('--shadow-xl', '0 24px 38px -5px rgba(15, 23, 42, 0.30), 0 12px 18px -6px rgba(15, 23, 42, 0.20)');
    } else {
      // Subtle (default)
      el.style.removeProperty('--shadow-xs');
      el.style.removeProperty('--shadow-sm');
      el.style.removeProperty('--shadow-md');
      el.style.removeProperty('--shadow-lg');
      el.style.removeProperty('--shadow-xl');
    }

    // 5. Density Mapping
    if (config.density === 'compact') {
      el.style.setProperty('--spacing-none', '0px');
      el.style.setProperty('--spacing-xs', '2px');
      el.style.setProperty('--spacing-sm', '4px');
      el.style.setProperty('--spacing-md', '8px');
      el.style.setProperty('--spacing-lg', '16px');
      el.style.setProperty('--spacing-xl', '24px');
      el.style.setProperty('--spacing-2xl', '36px');
    } else if (config.density === 'spacious') {
      el.style.setProperty('--spacing-none', '0px');
      el.style.setProperty('--spacing-xs', '6px');
      el.style.setProperty('--spacing-sm', '12px');
      el.style.setProperty('--spacing-md', '24px');
      el.style.setProperty('--spacing-lg', '36px');
      el.style.setProperty('--spacing-xl', '48px');
      el.style.setProperty('--spacing-2xl', '64px');
    } else {
      // Comfortable (default)
      el.style.removeProperty('--spacing-none');
      el.style.removeProperty('--spacing-xs');
      el.style.removeProperty('--spacing-sm');
      el.style.removeProperty('--spacing-md');
      el.style.removeProperty('--spacing-lg');
      el.style.removeProperty('--spacing-xl');
      el.style.removeProperty('--spacing-2xl');
    }

    // 6. Font Scale Mapping
    if (config.fontScale === 'sm') {
      el.style.setProperty('--font-size-xs', '0.6875rem');
      el.style.setProperty('--font-size-sm', '0.75rem');
      el.style.setProperty('--font-size-md', '0.875rem');
      el.style.setProperty('--font-size-lg', '1rem');
      el.style.setProperty('--font-size-xl', '1.125rem');
      el.style.setProperty('--font-size-h1', '2.5rem');
      el.style.setProperty('--font-size-h2', '1.875rem');
      el.style.setProperty('--font-size-h3', '1.5rem');
      el.style.setProperty('--font-size-h4', '1.25rem');
      el.style.setProperty('--font-size-h5', '1.125rem');
      el.style.setProperty('--font-size-h6', '1rem');
    } else if (config.fontScale === 'lg') {
      el.style.setProperty('--font-size-xs', '0.8125rem');
      el.style.setProperty('--font-size-sm', '0.9375rem');
      el.style.setProperty('--font-size-md', '1.125rem');
      el.style.setProperty('--font-size-lg', '1.25rem');
      el.style.setProperty('--font-size-xl', '1.375rem');
      el.style.setProperty('--font-size-h1', '3.5rem');
      el.style.setProperty('--font-size-h2', '2.625rem');
      el.style.setProperty('--font-size-h3', '2rem');
      el.style.setProperty('--font-size-h4', '1.75rem');
      el.style.setProperty('--font-size-h5', '1.375rem');
      el.style.setProperty('--font-size-h6', '1.25rem');
    } else {
      // Md (default)
      el.style.removeProperty('--font-size-xs');
      el.style.removeProperty('--font-size-sm');
      el.style.removeProperty('--font-size-md');
      el.style.removeProperty('--font-size-lg');
      el.style.removeProperty('--font-size-xl');
      el.style.removeProperty('--font-size-h1');
      el.style.removeProperty('--font-size-h2');
      el.style.removeProperty('--font-size-h3');
      el.style.removeProperty('--font-size-h4');
      el.style.removeProperty('--font-size-h5');
      el.style.removeProperty('--font-size-h6');
    }

    // 7. Fonts Family Mapping
    const fonts = config.fonts;
    if (fonts?.sans) {
      el.style.setProperty('--font-sans', fonts.sans);
    } else {
      el.style.removeProperty('--font-sans');
    }

    if (fonts?.display) {
      el.style.setProperty('--font-display', fonts.display);
    } else {
      el.style.removeProperty('--font-display');
    }

    if (fonts?.mono) {
      el.style.setProperty('--font-mono', fonts.mono);
    } else {
      el.style.removeProperty('--font-mono');
    }
  }, [config, targetElement]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      config,
      setConfig,
      setPrimaryColor,
      setSecondaryColor,
      setDensity,
      setRadius,
      setElevation,
      setFontScale,
      setFonts,
      fonts: config.fonts,
    }),
    [
      theme,
      config,
      setConfig,
      setPrimaryColor,
      setSecondaryColor,
      setDensity,
      setRadius,
      setElevation,
      setFontScale,
      setFonts,
    ]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
ThemeProvider.displayName = 'ThemeProvider';
