import { jsx as l, jsxs as k, Fragment as Be } from "react/jsx-runtime";
import Lt, { createContext as We, useState as Y, useEffect as q, useCallback as Xe, useMemo as wn, useContext as Te, forwardRef as G, useRef as we, useId as Ye, useLayoutEffect as Sn, isValidElement as xn, cloneElement as Mn } from "react";
import { createPortal as at } from "react-dom";
import { useMap as lt } from "react-map-gl/maplibre";
function jt(e) {
  let t = e.replace(/^#/, "").trim();
  (t.length === 3 || t.length === 4) && (t = t.split("").slice(0, 3).map((o) => o + o).join(""));
  const n = parseInt(t.slice(0, 6), 16);
  return isNaN(n) ? { r: 0, g: 181, b: 217 } : {
    r: n >> 16 & 255,
    g: n >> 8 & 255,
    b: n & 255
  };
}
function Nn(e, t, n) {
  const o = (s) => Math.max(0, Math.min(255, Math.round(s))), r = (s) => o(s).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`.toUpperCase();
}
function Bt(e) {
  const { r: t, g: n, b: o } = jt(e), r = t / 255, s = n / 255, a = o / 255, i = Math.max(r, s, a), c = Math.min(r, s, a), u = i - c;
  let _ = 0, m = 0;
  const f = (i + c) / 2;
  if (u !== 0)
    switch (m = f > 0.5 ? u / (2 - i - c) : u / (i + c), i) {
      case r:
        _ = ((s - a) / u + (s < a ? 6 : 0)) * 60;
        break;
      case s:
        _ = ((a - r) / u + 2) * 60;
        break;
      case a:
        _ = ((r - s) / u + 4) * 60;
        break;
    }
  return {
    h: Math.round(_),
    s: Math.round(m * 100),
    l: Math.round(f * 100)
  };
}
function Cn(e, t, n) {
  const o = (e % 360 + 360) % 360, r = Math.max(0, Math.min(100, t)) / 100, s = Math.max(0, Math.min(100, n)) / 100, a = (1 - Math.abs(2 * s - 1)) * r, i = a * (1 - Math.abs(o / 60 % 2 - 1)), c = s - a / 2;
  let u = 0, _ = 0, m = 0;
  return o < 60 ? (u = a, _ = i, m = 0) : o < 120 ? (u = i, _ = a, m = 0) : o < 180 ? (u = 0, _ = a, m = i) : o < 240 ? (u = 0, _ = i, m = a) : o < 300 ? (u = i, _ = 0, m = a) : (u = a, _ = 0, m = i), Nn((u + c) * 255, (_ + c) * 255, (m + c) * 255);
}
function Xt(e) {
  const { h: t, s: n } = Bt(e), o = {
    100: 95,
    200: 85,
    300: 72,
    400: 58,
    500: Bt(e).l,
    // Preserve base color lightness for step 500
    600: 42,
    700: 32,
    800: 22,
    900: 13
  }, r = {};
  for (const s of [100, 200, 300, 400, 500, 600, 700, 800, 900])
    if (s === 500)
      r[500] = e.toUpperCase();
    else {
      const a = s <= 200 ? Math.max(15, Math.min(n, 65)) : n;
      r[s] = Cn(t, a, o[s]);
    }
  return r;
}
function $t(e) {
  const { r: t, g: n, b: o } = jt(e);
  return `0 0 0 3px rgba(${t}, ${n}, ${o}, 0.35)`;
}
const qt = We(void 0), Pn = ({
  children: e,
  defaultTheme: t = "light",
  storageKey: n = "sans-ui-theme",
  targetElement: o,
  fonts: r,
  config: s
}) => {
  const [a, i] = Y(() => {
    if (typeof window < "u")
      try {
        const d = localStorage.getItem(n);
        if (d === "light" || d === "dark")
          return d;
      } catch {
      }
    return t;
  }), [c, u] = Y(() => ({
    radius: "balanced",
    elevation: "subtle",
    density: "comfortable",
    fontScale: "md",
    ...s,
    fonts: s?.fonts || r
  }));
  q(() => {
    (s || r) && u((d) => ({
      ...d,
      ...s,
      fonts: s?.fonts || r || d.fonts
    }));
  }, [s, r]);
  const _ = (d) => {
    if (i(d), typeof window < "u")
      try {
        localStorage.setItem(n, d);
      } catch {
      }
  }, m = () => {
    _(a === "light" ? "dark" : "light");
  }, f = Xe((d) => {
    u((v) => typeof d == "function" ? d(v) : d);
  }, []), p = Xe((d) => {
    u((v) => ({
      ...v,
      colors: { ...v.colors, primary: d }
    }));
  }, []), h = Xe((d) => {
    u((v) => ({
      ...v,
      colors: { ...v.colors, secondary: d }
    }));
  }, []), b = Xe((d) => {
    u((v) => ({ ...v, density: d }));
  }, []), g = Xe((d) => {
    u((v) => ({ ...v, radius: d }));
  }, []), x = Xe((d) => {
    u((v) => ({ ...v, elevation: d }));
  }, []), N = Xe((d) => {
    u((v) => ({ ...v, fontScale: d }));
  }, []), O = Xe((d) => {
    u((v) => ({ ...v, fonts: d }));
  }, []);
  q(() => {
    const d = o || (typeof document < "u" ? document.documentElement : null);
    d && d.setAttribute("data-theme", a);
  }, [a, o]), q(() => {
    const d = o || (typeof document < "u" ? document.documentElement : null);
    if (!d) return;
    if (c.colors?.primary) {
      const w = Xt(c.colors.primary);
      if (a === "dark")
        d.style.setProperty("--color-primary-100", w[900]), d.style.setProperty("--color-primary-200", w[800]), d.style.setProperty("--color-primary-300", w[600]), d.style.setProperty("--color-primary-400", w[500]), d.style.setProperty("--color-primary-500", w[400]), d.style.setProperty("--color-primary-600", w[300]), d.style.setProperty("--color-primary-700", w[200]), d.style.setProperty("--color-primary-800", w[100]), d.style.setProperty("--color-primary-900", "#ffffff"), d.style.setProperty("--border-focus", w[400]), d.style.setProperty("--shadow-focus", $t(w[400]));
      else {
        for (const [V, re] of Object.entries(w))
          d.style.setProperty(`--color-primary-${V}`, re);
        d.style.setProperty("--border-focus", c.colors.primary), d.style.setProperty("--shadow-focus", $t(c.colors.primary));
      }
    } else {
      for (const w of [100, 200, 300, 400, 500, 600, 700, 800, 900])
        d.style.removeProperty(`--color-primary-${w}`);
      d.style.removeProperty("--border-focus"), d.style.removeProperty("--shadow-focus");
    }
    if (c.colors?.secondary) {
      const w = Xt(c.colors.secondary);
      if (a === "dark")
        d.style.setProperty("--color-secondary-100", w[900]), d.style.setProperty("--color-secondary-200", w[800]), d.style.setProperty("--color-secondary-300", w[700]), d.style.setProperty("--color-secondary-400", w[500]), d.style.setProperty("--color-secondary-500", w[400]), d.style.setProperty("--color-secondary-600", w[300]), d.style.setProperty("--color-secondary-700", w[200]), d.style.setProperty("--color-secondary-800", w[100]), d.style.setProperty("--color-secondary-900", "#ffffff");
      else
        for (const [V, re] of Object.entries(w))
          d.style.setProperty(`--color-secondary-${V}`, re);
    } else
      for (const w of [100, 200, 300, 400, 500, 600, 700, 800, 900])
        d.style.removeProperty(`--color-secondary-${w}`);
    c.radius === "sharp" ? (d.style.setProperty("--radius-none", "0px"), d.style.setProperty("--radius-xs", "0px"), d.style.setProperty("--radius-sm", "2px"), d.style.setProperty("--radius-md", "4px"), d.style.setProperty("--radius-lg", "6px"), d.style.setProperty("--radius-xl", "8px"), d.style.setProperty("--radius-full", "9999px")) : c.radius === "rounded" ? (d.style.setProperty("--radius-none", "0px"), d.style.setProperty("--radius-xs", "6px"), d.style.setProperty("--radius-sm", "10px"), d.style.setProperty("--radius-md", "16px"), d.style.setProperty("--radius-lg", "24px"), d.style.setProperty("--radius-xl", "32px"), d.style.setProperty("--radius-full", "9999px")) : c.radius === "pill" ? (d.style.setProperty("--radius-none", "0px"), d.style.setProperty("--radius-xs", "4px"), d.style.setProperty("--radius-sm", "9999px"), d.style.setProperty("--radius-md", "9999px"), d.style.setProperty("--radius-lg", "20px"), d.style.setProperty("--radius-xl", "28px"), d.style.setProperty("--radius-full", "9999px")) : (d.style.removeProperty("--radius-none"), d.style.removeProperty("--radius-xs"), d.style.removeProperty("--radius-sm"), d.style.removeProperty("--radius-md"), d.style.removeProperty("--radius-lg"), d.style.removeProperty("--radius-xl"), d.style.removeProperty("--radius-full")), c.elevation === "flat" ? (d.style.setProperty("--shadow-xs", "none"), d.style.setProperty("--shadow-sm", "none"), d.style.setProperty("--shadow-md", "none"), d.style.setProperty("--shadow-lg", "none"), d.style.setProperty("--shadow-xl", "none")) : c.elevation === "high-contrast" ? a === "dark" ? (d.style.setProperty("--shadow-xs", "0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.12)"), d.style.setProperty("--shadow-sm", "0 2px 6px 0 rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.14)"), d.style.setProperty("--shadow-md", "0 6px 14px -1px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.16)"), d.style.setProperty("--shadow-lg", "0 14px 28px -3px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.2)"), d.style.setProperty("--shadow-xl", "0 24px 44px -5px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.25)")) : (d.style.setProperty("--shadow-xs", "0 1px 3px 0 rgba(15, 23, 42, 0.15)"), d.style.setProperty("--shadow-sm", "0 2px 6px 0 rgba(15, 23, 42, 0.18), 0 1px 3px 0 rgba(15, 23, 42, 0.12)"), d.style.setProperty("--shadow-md", "0 6px 12px -1px rgba(15, 23, 42, 0.22), 0 3px 6px -2px rgba(15, 23, 42, 0.15)"), d.style.setProperty("--shadow-lg", "0 14px 24px -3px rgba(15, 23, 42, 0.25), 0 6px 10px -4px rgba(15, 23, 42, 0.18)"), d.style.setProperty("--shadow-xl", "0 24px 38px -5px rgba(15, 23, 42, 0.30), 0 12px 18px -6px rgba(15, 23, 42, 0.20)")) : (d.style.removeProperty("--shadow-xs"), d.style.removeProperty("--shadow-sm"), d.style.removeProperty("--shadow-md"), d.style.removeProperty("--shadow-lg"), d.style.removeProperty("--shadow-xl")), c.density === "compact" ? (d.style.setProperty("--spacing-none", "0px"), d.style.setProperty("--spacing-xs", "2px"), d.style.setProperty("--spacing-sm", "4px"), d.style.setProperty("--spacing-md", "8px"), d.style.setProperty("--spacing-lg", "16px"), d.style.setProperty("--spacing-xl", "24px"), d.style.setProperty("--spacing-2xl", "36px")) : c.density === "spacious" ? (d.style.setProperty("--spacing-none", "0px"), d.style.setProperty("--spacing-xs", "6px"), d.style.setProperty("--spacing-sm", "12px"), d.style.setProperty("--spacing-md", "24px"), d.style.setProperty("--spacing-lg", "36px"), d.style.setProperty("--spacing-xl", "48px"), d.style.setProperty("--spacing-2xl", "64px")) : (d.style.removeProperty("--spacing-none"), d.style.removeProperty("--spacing-xs"), d.style.removeProperty("--spacing-sm"), d.style.removeProperty("--spacing-md"), d.style.removeProperty("--spacing-lg"), d.style.removeProperty("--spacing-xl"), d.style.removeProperty("--spacing-2xl")), c.fontScale === "sm" ? (d.style.setProperty("--font-size-xs", "0.6875rem"), d.style.setProperty("--font-size-sm", "0.75rem"), d.style.setProperty("--font-size-md", "0.875rem"), d.style.setProperty("--font-size-lg", "1rem"), d.style.setProperty("--font-size-xl", "1.125rem"), d.style.setProperty("--font-size-h1", "2.5rem"), d.style.setProperty("--font-size-h2", "1.875rem"), d.style.setProperty("--font-size-h3", "1.5rem"), d.style.setProperty("--font-size-h4", "1.25rem"), d.style.setProperty("--font-size-h5", "1.125rem"), d.style.setProperty("--font-size-h6", "1rem")) : c.fontScale === "lg" ? (d.style.setProperty("--font-size-xs", "0.8125rem"), d.style.setProperty("--font-size-sm", "0.9375rem"), d.style.setProperty("--font-size-md", "1.125rem"), d.style.setProperty("--font-size-lg", "1.25rem"), d.style.setProperty("--font-size-xl", "1.375rem"), d.style.setProperty("--font-size-h1", "3.5rem"), d.style.setProperty("--font-size-h2", "2.625rem"), d.style.setProperty("--font-size-h3", "2rem"), d.style.setProperty("--font-size-h4", "1.75rem"), d.style.setProperty("--font-size-h5", "1.375rem"), d.style.setProperty("--font-size-h6", "1.25rem")) : (d.style.removeProperty("--font-size-xs"), d.style.removeProperty("--font-size-sm"), d.style.removeProperty("--font-size-md"), d.style.removeProperty("--font-size-lg"), d.style.removeProperty("--font-size-xl"), d.style.removeProperty("--font-size-h1"), d.style.removeProperty("--font-size-h2"), d.style.removeProperty("--font-size-h3"), d.style.removeProperty("--font-size-h4"), d.style.removeProperty("--font-size-h5"), d.style.removeProperty("--font-size-h6"));
    const v = c.fonts;
    v?.sans ? d.style.setProperty("--font-sans", v.sans) : d.style.removeProperty("--font-sans"), v?.display ? d.style.setProperty("--font-display", v.display) : d.style.removeProperty("--font-display"), v?.mono ? d.style.setProperty("--font-mono", v.mono) : d.style.removeProperty("--font-mono");
  }, [a, c, o]);
  const W = wn(
    () => ({
      theme: a,
      setTheme: _,
      toggleTheme: m,
      config: c,
      setConfig: f,
      setPrimaryColor: p,
      setSecondaryColor: h,
      setDensity: b,
      setRadius: g,
      setElevation: x,
      setFontScale: N,
      setFonts: O,
      fonts: c.fonts
    }),
    [
      a,
      c,
      f,
      p,
      h,
      b,
      g,
      x,
      N,
      O
    ]
  );
  return /* @__PURE__ */ l(qt.Provider, { value: W, children: e });
};
Pn.displayName = "ThemeProvider";
function Hh() {
  const e = Te(qt);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function Vt(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Vt(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function X() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Vt(e)) && (o && (o += " "), o += t);
  return o;
}
const kn = "Text-module__text___78lq0", Dn = "Text-module__variantRegular___h4rEb", zn = "Text-module__variantMono___2XpZ-", Ln = "Text-module__variantDisplay___erxax", Bn = "Text-module__sizeXs___9Ok-b", Xn = "Text-module__sizeSm___2Oiat", $n = "Text-module__sizeMd___k9dGF", In = "Text-module__sizeLg___7aFQL", Wn = "Text-module__sizeXl___LpJtS", Tn = "Text-module__weight400___BGf0O", On = "Text-module__weight500___8Cgs9", Fn = "Text-module__weight600___URtEb", En = "Text-module__weight700___V0-f-", Gn = "Text-module__italic___z-mH2", Rn = "Text-module__underline___mGmd0", An = "Text-module__strikethrough___ht8uP", Yn = "Text-module__colorInherit___4-1Mm", Hn = "Text-module__colorDimmed___4fJfV", jn = "Text-module__colorPrimary___op5fM", qn = "Text-module__colorSecondary___w7pxt", Vn = "Text-module__colorNeutral___E9c8l", Zn = "Text-module__colorSuccess___ZKZfh", Kn = "Text-module__colorWarning___eoIhV", Qn = "Text-module__colorDanger___b9dnd", Un = "Text-module__colorInfo___lmCis", Jn = "Text-module__alignLeft___OZBSx", eo = "Text-module__alignCenter___QK7p-", to = "Text-module__alignRight___ysuR2", no = "Text-module__alignJustify___sRmKl", oo = "Text-module__truncateSingle___vWoo8", ro = "Text-module__truncateClamp___tpH-K", T = {
  text: kn,
  variantRegular: Dn,
  variantMono: zn,
  variantDisplay: Ln,
  sizeXs: Bn,
  sizeSm: Xn,
  sizeMd: $n,
  sizeLg: In,
  sizeXl: Wn,
  weight400: Tn,
  weight500: On,
  weight600: Fn,
  weight700: En,
  italic: Gn,
  underline: Rn,
  strikethrough: An,
  colorInherit: Yn,
  colorDimmed: Hn,
  colorPrimary: jn,
  colorSecondary: qn,
  colorNeutral: Vn,
  colorSuccess: Zn,
  colorWarning: Kn,
  colorDanger: Qn,
  colorInfo: Un,
  alignLeft: Jn,
  alignCenter: eo,
  alignRight: to,
  alignJustify: no,
  truncateSingle: oo,
  truncateClamp: ro
}, so = {
  xs: T.sizeXs,
  sm: T.sizeSm,
  md: T.sizeMd,
  lg: T.sizeLg,
  xl: T.sizeXl
}, ao = {
  400: T.weight400,
  500: T.weight500,
  600: T.weight600,
  700: T.weight700
}, lo = {
  regular: T.variantRegular,
  mono: T.variantMono,
  display: T.variantDisplay
}, io = {
  inherit: T.colorInherit,
  dimmed: T.colorDimmed,
  primary: T.colorPrimary,
  secondary: T.colorSecondary,
  neutral: T.colorNeutral,
  success: T.colorSuccess,
  warning: T.colorWarning,
  danger: T.colorDanger,
  info: T.colorInfo
}, co = {
  left: T.alignLeft,
  center: T.alignCenter,
  right: T.alignRight,
  justify: T.alignJustify
}, uo = G(
  ({ as: e = "p", children: t, variant: n = "regular", size: o = "md", weight: r = 400, italic: s = !1, underline: a = !1, strikethrough: i = !1, color: c = "inherit", align: u = "left", truncate: _ = !1, className: m, style: f, ...p }, h) => {
    const b = _ === !0, g = typeof _ == "number" && _ >= 1, x = g ? { ...f, WebkitLineClamp: _ } : f, N = X(T.text, lo[n], so[o], ao[r], io[c], co[u], { [T.italic]: s, [T.underline]: a, [T.strikethrough]: i, [T.truncateSingle]: b, [T.truncateClamp]: g }, m);
    return /* @__PURE__ */ l(e, { ref: h, className: N, style: x, ...p, children: t });
  }
);
uo.displayName = "Text";
const _o = "Title-module__title___t68i9", mo = "Title-module__sizeH1___2rUbN", fo = "Title-module__sizeH2___BZerW", po = "Title-module__sizeH3___N0Wrq", go = "Title-module__sizeH4___4-u88", ho = "Title-module__sizeH5___vCrtX", yo = "Title-module__sizeH6___sInDp", vo = "Title-module__weight500___qC3Rh", bo = "Title-module__weight600___ljczz", wo = "Title-module__weight700___Wy5NX", So = "Title-module__weight800___WjWVo", xo = "Title-module__colorInherit___hNpBk", Mo = "Title-module__colorPrimary___LUYRB", No = "Title-module__colorSecondary___wo-p5", Co = "Title-module__colorNeutral___D4Lrx", Po = "Title-module__colorSuccess___qZNqo", ko = "Title-module__colorWarning___5S3fG", Do = "Title-module__colorDanger___5BrK0", zo = "Title-module__colorInfo___BrjaU", ae = {
  title: _o,
  sizeH1: mo,
  sizeH2: fo,
  sizeH3: po,
  sizeH4: go,
  sizeH5: ho,
  sizeH6: yo,
  weight500: vo,
  weight600: bo,
  weight700: wo,
  weight800: So,
  colorInherit: xo,
  colorPrimary: Mo,
  colorSecondary: No,
  colorNeutral: Co,
  colorSuccess: Po,
  colorWarning: ko,
  colorDanger: Do,
  colorInfo: zo
}, Lo = {
  h1: ae.sizeH1,
  h2: ae.sizeH2,
  h3: ae.sizeH3,
  h4: ae.sizeH4,
  h5: ae.sizeH5,
  h6: ae.sizeH6
}, Bo = {
  500: ae.weight500,
  600: ae.weight600,
  700: ae.weight700,
  800: ae.weight800
}, Xo = {
  inherit: ae.colorInherit,
  primary: ae.colorPrimary,
  secondary: ae.colorSecondary,
  neutral: ae.colorNeutral,
  success: ae.colorSuccess,
  warning: ae.colorWarning,
  danger: ae.colorDanger,
  info: ae.colorInfo
}, $o = G(
  ({ children: e, order: t = 1, size: n, weight: o = 700, color: r = "inherit", className: s, style: a, ...i }, c) => {
    const u = "h" + t, _ = n || "h" + t, m = X(ae.title, Lo[_], Bo[o], Xo[r], s);
    return /* @__PURE__ */ l(u, { ref: c, className: m, style: a, ...i, children: e });
  }
);
$o.displayName = "Title";
const Io = "Divider-module__divider___KSGsi", Wo = "Divider-module__horizontal___pZ05Y", To = "Divider-module__vertical___p-jD4", Oo = "Divider-module__line___CX4-v", Fo = "Divider-module__label___PwL54", Ge = {
  divider: Io,
  horizontal: Wo,
  vertical: To,
  line: Oo,
  label: Fo
}, Eo = {
  border: "var(--border-subtle)",
  neutral: "var(--border-strong)",
  primary: "var(--color-primary-500)",
  secondary: "var(--color-secondary-500)",
  success: "var(--color-success-500)",
  warning: "var(--color-warning-500)",
  danger: "var(--color-danger-500)",
  info: "var(--color-info-500)"
}, Go = G(
  ({ orientation: e = "horizontal", variant: t = "solid", size: n = 1, color: o = "border", label: r, className: s, style: a, ...i }, c) => {
    const u = e === "horizontal", _ = {
      ...a,
      "--divider-size": n + "px",
      "--divider-style": t,
      "--divider-color": Eo[o] || "var(--border-subtle)"
    }, m = X(Ge.divider, u ? Ge.horizontal : Ge.vertical, s);
    return /* @__PURE__ */ k("div", { ref: c, role: "separator", "aria-orientation": e, className: m, style: _, ...i, children: [
      /* @__PURE__ */ l("span", { className: Ge.line }),
      r && u && /* @__PURE__ */ l("span", { className: Ge.label, children: r }),
      r && u && /* @__PURE__ */ l("span", { className: Ge.line })
    ] });
  }
);
Go.displayName = "Divider";
const Ro = "Box-module__box___Wgbf3", Ao = "Box-module__centered___qfT1T", Yo = "Box-module__sizeXs___nqRLQ", Ho = "Box-module__sizeSm___O4HN0", jo = "Box-module__sizeMd___D1Qs-", qo = "Box-module__sizeLg___6234W", Vo = "Box-module__sizeXl___pt9kx", Zo = "Box-module__sizeFull___jMPVd", Ko = "Box-module__bgApp___9jVJP", Qo = "Box-module__bgSurface___UEdz7", Uo = "Box-module__bgElevated___VseX2", Jo = "Box-module__bgPrimary___s1xYD", er = "Box-module__bgSecondary___Ti7-M", tr = "Box-module__bgNeutral___bNFKp", nr = "Box-module__bgSuccess___m9f4p", or = "Box-module__bgWarning___XUYDX", rr = "Box-module__bgDanger___YpZPt", sr = "Box-module__bgInfo___Ab62p", ar = "Box-module__padNone___-KjzY", lr = "Box-module__padXs___-FYDi", ir = "Box-module__padSm___ytD3C", cr = "Box-module__padMd___GOSZC", dr = "Box-module__padLg___jBVdo", ur = "Box-module__padXl___MwkOT", _r = "Box-module__pad2Xl___0IY4x", mr = "Box-module__radiusNone___dXDqU", fr = "Box-module__radiusXs___wdQtE", pr = "Box-module__radiusSm___LuW3v", gr = "Box-module__radiusMd___03HCd", hr = "Box-module__radiusLg___WWODU", yr = "Box-module__radiusXl___aE9l0", vr = "Box-module__radiusFull___dsiF8", br = "Box-module__border___FYpYo", wr = "Box-module__shadowNone___-Whrh", Sr = "Box-module__shadowXs___6F8cz", xr = "Box-module__shadowSm___I6eGZ", Mr = "Box-module__shadowMd___fLRRl", Nr = "Box-module__shadowLg___-Miql", Cr = "Box-module__shadowXl___I4QVF", $ = {
  box: Ro,
  centered: Ao,
  sizeXs: Yo,
  sizeSm: Ho,
  sizeMd: jo,
  sizeLg: qo,
  sizeXl: Vo,
  sizeFull: Zo,
  bgApp: Ko,
  bgSurface: Qo,
  bgElevated: Uo,
  bgPrimary: Jo,
  bgSecondary: er,
  bgNeutral: tr,
  bgSuccess: nr,
  bgWarning: or,
  bgDanger: rr,
  bgInfo: sr,
  padNone: ar,
  padXs: lr,
  padSm: ir,
  padMd: cr,
  padLg: dr,
  padXl: ur,
  pad2Xl: _r,
  radiusNone: mr,
  radiusXs: fr,
  radiusSm: pr,
  radiusMd: gr,
  radiusLg: hr,
  radiusXl: yr,
  radiusFull: vr,
  border: br,
  shadowNone: wr,
  shadowXs: Sr,
  shadowSm: xr,
  shadowMd: Mr,
  shadowLg: Nr,
  shadowXl: Cr
}, Pr = {
  xs: $.sizeXs,
  sm: $.sizeSm,
  md: $.sizeMd,
  lg: $.sizeLg,
  xl: $.sizeXl,
  full: $.sizeFull
}, kr = {
  app: $.bgApp,
  surface: $.bgSurface,
  elevated: $.bgElevated,
  primary: $.bgPrimary,
  secondary: $.bgSecondary,
  neutral: $.bgNeutral,
  success: $.bgSuccess,
  warning: $.bgWarning,
  danger: $.bgDanger,
  info: $.bgInfo
}, Dr = {
  none: $.padNone,
  xs: $.padXs,
  sm: $.padSm,
  md: $.padMd,
  lg: $.padLg,
  xl: $.padXl,
  "2xl": $.pad2Xl
}, zr = {
  none: $.radiusNone,
  xs: $.radiusXs,
  sm: $.radiusSm,
  md: $.radiusMd,
  lg: $.radiusLg,
  xl: $.radiusXl,
  full: $.radiusFull
}, Lr = {
  none: $.shadowNone,
  xs: $.shadowXs,
  sm: $.shadowSm,
  md: $.shadowMd,
  lg: $.shadowLg,
  xl: $.shadowXl
}, Br = G(
  ({ as: e = "div", children: t, size: n, centered: o = !1, bg: r = "surface", padding: s = "none", radius: a = "none", border: i = !1, shadow: c = "none", className: u, style: _, ...m }, f) => {
    const p = X($.box, n && Pr[n], r && kr[r], s && Dr[s], a && zr[a], c && Lr[c], { [$.centered]: o, [$.border]: i }, u);
    return /* @__PURE__ */ l(e, { ref: f, className: p, style: _, ...m, children: t });
  }
);
Br.displayName = "Box";
const Xr = "Stack-module__stack___yUU-B", $r = "Stack-module__gapNone___bv7gQ", Ir = "Stack-module__gapXs___QX2UK", Wr = "Stack-module__gapSm___A4Rat", Tr = "Stack-module__gapMd___uSujS", Or = "Stack-module__gapLg___UfQBu", Fr = "Stack-module__gapXl___OEbNo", Er = "Stack-module__gap2Xl___B0Skj", Gr = "Stack-module__alignStretch___tNNmt", Rr = "Stack-module__alignFlexStart___X-R3w", Ar = "Stack-module__alignCenter___geGJ5", Yr = "Stack-module__alignFlexEnd___H1fJu", Hr = "Stack-module__justifyFlexStart___J6j1r", jr = "Stack-module__justifyCenter___5iQts", qr = "Stack-module__justifyFlexEnd___8rc9a", Vr = "Stack-module__justifySpaceBetween___TzxEr", ie = {
  stack: Xr,
  gapNone: $r,
  gapXs: Ir,
  gapSm: Wr,
  gapMd: Tr,
  gapLg: Or,
  gapXl: Fr,
  gap2Xl: Er,
  alignStretch: Gr,
  alignFlexStart: Rr,
  alignCenter: Ar,
  alignFlexEnd: Yr,
  justifyFlexStart: Hr,
  justifyCenter: jr,
  justifyFlexEnd: qr,
  justifySpaceBetween: Vr
}, Zr = {
  none: ie.gapNone,
  xs: ie.gapXs,
  sm: ie.gapSm,
  md: ie.gapMd,
  lg: ie.gapLg,
  xl: ie.gapXl,
  "2xl": ie.gap2Xl
}, Kr = {
  stretch: ie.alignStretch,
  "flex-start": ie.alignFlexStart,
  center: ie.alignCenter,
  "flex-end": ie.alignFlexEnd
}, Qr = {
  "flex-start": ie.justifyFlexStart,
  center: ie.justifyCenter,
  "flex-end": ie.justifyFlexEnd,
  "space-between": ie.justifySpaceBetween
}, Ur = G(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "stretch", justify: r = "flex-start", className: s, style: a, ...i }, c) => {
    const u = X(ie.stack, Zr[n], Kr[o], Qr[r], s);
    return /* @__PURE__ */ l(e, { ref: c, className: u, style: a, ...i, children: t });
  }
);
Ur.displayName = "Stack";
const Jr = "Group-module__group___JB9jS", es = "Group-module__gapNone___spqGG", ts = "Group-module__gapXs___lJtE2", ns = "Group-module__gapSm___mAEKG", os = "Group-module__gapMd___4vpbQ", rs = "Group-module__gapLg___y-iGx", ss = "Group-module__gapXl___vzZFP", as = "Group-module__gap2Xl___VE4kj", ls = "Group-module__alignStretch___oGWAq", is = "Group-module__alignFlexStart___ChF-g", cs = "Group-module__alignCenter___HmA5F", ds = "Group-module__alignFlexEnd___tGOPE", us = "Group-module__justifyFlexStart___XpW8l", _s = "Group-module__justifyCenter___qw04u", ms = "Group-module__justifyFlexEnd___a4TPM", fs = "Group-module__justifySpaceBetween___tq7ho", ps = "Group-module__justifySpaceAround___gGJlV", gs = "Group-module__wrapNowrap___F6I5s", hs = "Group-module__wrapWrap___gcTiA", ys = "Group-module__wrapReverse___sKgPv", vs = "Group-module__grow___lg-SQ", te = {
  group: Jr,
  gapNone: es,
  gapXs: ts,
  gapSm: ns,
  gapMd: os,
  gapLg: rs,
  gapXl: ss,
  gap2Xl: as,
  alignStretch: ls,
  alignFlexStart: is,
  alignCenter: cs,
  alignFlexEnd: ds,
  justifyFlexStart: us,
  justifyCenter: _s,
  justifyFlexEnd: ms,
  justifySpaceBetween: fs,
  justifySpaceAround: ps,
  wrapNowrap: gs,
  wrapWrap: hs,
  wrapReverse: ys,
  grow: vs
}, bs = {
  none: te.gapNone,
  xs: te.gapXs,
  sm: te.gapSm,
  md: te.gapMd,
  lg: te.gapLg,
  xl: te.gapXl,
  "2xl": te.gap2Xl
}, ws = {
  stretch: te.alignStretch,
  "flex-start": te.alignFlexStart,
  center: te.alignCenter,
  "flex-end": te.alignFlexEnd
}, Ss = {
  "flex-start": te.justifyFlexStart,
  center: te.justifyCenter,
  "flex-end": te.justifyFlexEnd,
  "space-between": te.justifySpaceBetween,
  "space-around": te.justifySpaceAround
}, xs = {
  nowrap: te.wrapNowrap,
  wrap: te.wrapWrap,
  "wrap-reverse": te.wrapReverse
}, Ms = G(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "center", justify: r = "flex-start", wrap: s = "wrap", grow: a = !1, className: i, style: c, ...u }, _) => {
    const m = X(te.group, bs[n], ws[o], Ss[r], xs[s], { [te.grow]: a }, i);
    return /* @__PURE__ */ l(e, { ref: _, className: m, style: c, ...u, children: t });
  }
);
Ms.displayName = "Group";
const Ns = "Grid-module__grid___h49fk", Cs = "Grid-module__gutterNone___G8BMH", Ps = "Grid-module__gutterXs___ADsBL", ks = "Grid-module__gutterSm___6NRbO", Ds = "Grid-module__gutterMd___cmoLu", zs = "Grid-module__gutterLg___9SuhS", Ls = "Grid-module__gutterXl___PsRlW", Bs = "Grid-module__gutter2Xl___xJo0D", Xs = "Grid-module__col___tbuNg", $s = "Grid-module__spanAuto___h-TSw", Is = "Grid-module__span1___ECAD7", Ws = "Grid-module__span2___-sX5n", Ts = "Grid-module__span3___dFBl4", Os = "Grid-module__span4___kglrb", Fs = "Grid-module__span5___iHfGz", Es = "Grid-module__span6___wwMzi", Gs = "Grid-module__span7___0BBdf", Rs = "Grid-module__span8___Kcy9A", As = "Grid-module__span9___7ySoZ", Ys = "Grid-module__span10___gPA7Z", Hs = "Grid-module__span11___zv17X", js = "Grid-module__span12___nRBMm", qs = "Grid-module__offset1___5hFyu", Vs = "Grid-module__offset2___mg1D-", Zs = "Grid-module__offset3___NQOzX", Ks = "Grid-module__offset4___rMPwe", Qs = "Grid-module__offset5___W-7Fo", Us = "Grid-module__offset6___NhPX8", Js = "Grid-module__offset7___Epz5v", ea = "Grid-module__offset8___mpayK", ta = "Grid-module__offset9___97joT", na = "Grid-module__offset10___Loifi", oa = "Grid-module__offset11___XKZkn", ra = "Grid-module__spanSmAuto___-kDMz", sa = "Grid-module__spanSm1___gXv5X", aa = "Grid-module__spanSm2___-09fM", la = "Grid-module__spanSm3___0gL4g", ia = "Grid-module__spanSm4___YqJv5", ca = "Grid-module__spanSm5___GHHtG", da = "Grid-module__spanSm6___j8JQx", ua = "Grid-module__spanSm7___TpTrd", _a = "Grid-module__spanSm8___XdwNJ", ma = "Grid-module__spanSm9___hDrXA", fa = "Grid-module__spanSm10___4KWRB", pa = "Grid-module__spanSm11___ExLVx", ga = "Grid-module__spanSm12___vQk2G", ha = "Grid-module__spanMdAuto___pEce6", ya = "Grid-module__spanMd1___xRZ5L", va = "Grid-module__spanMd2___tVS1a", ba = "Grid-module__spanMd3___O35cH", wa = "Grid-module__spanMd4___Yretx", Sa = "Grid-module__spanMd5___DjiQ9", xa = "Grid-module__spanMd6___U2puq", Ma = "Grid-module__spanMd7___sVsSG", Na = "Grid-module__spanMd8___FRJn-", Ca = "Grid-module__spanMd9___0cxAI", Pa = "Grid-module__spanMd10___IPaPL", ka = "Grid-module__spanMd11___BSl3b", Da = "Grid-module__spanMd12___xJVAR", za = "Grid-module__spanLgAuto___hiHiG", La = "Grid-module__spanLg1___xZAgn", Ba = "Grid-module__spanLg2___hIgCi", Xa = "Grid-module__spanLg3___4JXfO", $a = "Grid-module__spanLg4___criYH", Ia = "Grid-module__spanLg5___X2kOa", Wa = "Grid-module__spanLg6___-lHL6", Ta = "Grid-module__spanLg7___ijxyH", Oa = "Grid-module__spanLg8___9MXAV", Fa = "Grid-module__spanLg9___Kaj-s", Ea = "Grid-module__spanLg10___-YWG-", Ga = "Grid-module__spanLg11___O-vU9", Ra = "Grid-module__spanLg12___dZIlg", Aa = "Grid-module__spanXlAuto___O4eyM", Ya = "Grid-module__spanXl1___N-5wm", Ha = "Grid-module__spanXl2___vJNAz", ja = "Grid-module__spanXl3___ySPkA", qa = "Grid-module__spanXl4___xVk5-", Va = "Grid-module__spanXl5___NT66v", Za = "Grid-module__spanXl6___DlWPY", Ka = "Grid-module__spanXl7___WQDEA", Qa = "Grid-module__spanXl8___WfKp1", Ua = "Grid-module__spanXl9___sairI", Ja = "Grid-module__spanXl10___i2IqV", el = "Grid-module__spanXl11___oyLBC", tl = "Grid-module__spanXl12___PYn7s", y = {
  grid: Ns,
  gutterNone: Cs,
  gutterXs: Ps,
  gutterSm: ks,
  gutterMd: Ds,
  gutterLg: zs,
  gutterXl: Ls,
  gutter2Xl: Bs,
  col: Xs,
  spanAuto: $s,
  span1: Is,
  span2: Ws,
  span3: Ts,
  span4: Os,
  span5: Fs,
  span6: Es,
  span7: Gs,
  span8: Rs,
  span9: As,
  span10: Ys,
  span11: Hs,
  span12: js,
  offset1: qs,
  offset2: Vs,
  offset3: Zs,
  offset4: Ks,
  offset5: Qs,
  offset6: Us,
  offset7: Js,
  offset8: ea,
  offset9: ta,
  offset10: na,
  offset11: oa,
  spanSmAuto: ra,
  spanSm1: sa,
  spanSm2: aa,
  spanSm3: la,
  spanSm4: ia,
  spanSm5: ca,
  spanSm6: da,
  spanSm7: ua,
  spanSm8: _a,
  spanSm9: ma,
  spanSm10: fa,
  spanSm11: pa,
  spanSm12: ga,
  spanMdAuto: ha,
  spanMd1: ya,
  spanMd2: va,
  spanMd3: ba,
  spanMd4: wa,
  spanMd5: Sa,
  spanMd6: xa,
  spanMd7: Ma,
  spanMd8: Na,
  spanMd9: Ca,
  spanMd10: Pa,
  spanMd11: ka,
  spanMd12: Da,
  spanLgAuto: za,
  spanLg1: La,
  spanLg2: Ba,
  spanLg3: Xa,
  spanLg4: $a,
  spanLg5: Ia,
  spanLg6: Wa,
  spanLg7: Ta,
  spanLg8: Oa,
  spanLg9: Fa,
  spanLg10: Ea,
  spanLg11: Ga,
  spanLg12: Ra,
  spanXlAuto: Aa,
  spanXl1: Ya,
  spanXl2: Ha,
  spanXl3: ja,
  spanXl4: qa,
  spanXl5: Va,
  spanXl6: Za,
  spanXl7: Ka,
  spanXl8: Qa,
  spanXl9: Ua,
  spanXl10: Ja,
  spanXl11: el,
  spanXl12: tl
}, nl = {
  none: y.gutterNone,
  xs: y.gutterXs,
  sm: y.gutterSm,
  md: y.gutterMd,
  lg: y.gutterLg,
  xl: y.gutterXl,
  "2xl": y.gutter2Xl
}, ol = {
  auto: y.spanAuto,
  1: y.span1,
  2: y.span2,
  3: y.span3,
  4: y.span4,
  5: y.span5,
  6: y.span6,
  7: y.span7,
  8: y.span8,
  9: y.span9,
  10: y.span10,
  11: y.span11,
  12: y.span12
}, rl = {
  auto: y.spanSmAuto,
  1: y.spanSm1,
  2: y.spanSm2,
  3: y.spanSm3,
  4: y.spanSm4,
  5: y.spanSm5,
  6: y.spanSm6,
  7: y.spanSm7,
  8: y.spanSm8,
  9: y.spanSm9,
  10: y.spanSm10,
  11: y.spanSm11,
  12: y.spanSm12
}, sl = {
  auto: y.spanMdAuto,
  1: y.spanMd1,
  2: y.spanMd2,
  3: y.spanMd3,
  4: y.spanMd4,
  5: y.spanMd5,
  6: y.spanMd6,
  7: y.spanMd7,
  8: y.spanMd8,
  9: y.spanMd9,
  10: y.spanMd10,
  11: y.spanMd11,
  12: y.spanMd12
}, al = {
  auto: y.spanLgAuto,
  1: y.spanLg1,
  2: y.spanLg2,
  3: y.spanLg3,
  4: y.spanLg4,
  5: y.spanLg5,
  6: y.spanLg6,
  7: y.spanLg7,
  8: y.spanLg8,
  9: y.spanLg9,
  10: y.spanLg10,
  11: y.spanLg11,
  12: y.spanLg12
}, ll = {
  auto: y.spanXlAuto,
  1: y.spanXl1,
  2: y.spanXl2,
  3: y.spanXl3,
  4: y.spanXl4,
  5: y.spanXl5,
  6: y.spanXl6,
  7: y.spanXl7,
  8: y.spanXl8,
  9: y.spanXl9,
  10: y.spanXl10,
  11: y.spanXl11,
  12: y.spanXl12
}, il = {
  1: y.offset1,
  2: y.offset2,
  3: y.offset3,
  4: y.offset4,
  5: y.offset5,
  6: y.offset6,
  7: y.offset7,
  8: y.offset8,
  9: y.offset9,
  10: y.offset10,
  11: y.offset11
}, Zt = G(
  ({ as: e = "div", children: t, span: n = 12, sm: o, md: r, lg: s, xl: a, offset: i = 0, className: c, style: u, ..._ }, m) => {
    const f = X(y.col, ol[String(n)], o && rl[String(o)], r && sl[String(r)], s && al[String(s)], a && ll[String(a)], i > 0 && il[i], c);
    return /* @__PURE__ */ l(e, { ref: m, className: f, style: u, ..._, children: t });
  }
);
Zt.displayName = "Grid.Col";
const Kt = G(
  ({ as: e = "div", children: t, columns: n = 12, gutter: o = "md", className: r, style: s, ...a }, i) => {
    const c = { ...s, gridTemplateColumns: "repeat(" + n + ", minmax(0, 1fr))" }, u = X(y.grid, nl[o], r);
    return /* @__PURE__ */ l(e, { ref: i, className: u, style: c, ...a, children: t });
  }
);
Kt.displayName = "Grid";
Kt.Col = Zt;
const cl = "AspectRatio-module__aspectRatio___NpGva", dl = {
  aspectRatio: cl
}, ul = G(
  ({ as: e = "div", children: t, ratio: n = 1, className: o, style: r, ...s }, a) => {
    const i = { ...r, "--aspect-ratio": String(n) };
    return /* @__PURE__ */ l(e, { ref: a, className: X(dl.aspectRatio, o), style: i, ...s, children: t });
  }
);
ul.displayName = "AspectRatio";
const _l = "Container-module__container___JMoiT", ml = "Container-module__sizeXs___LUfHx", fl = "Container-module__sizeSm___ev-G8", pl = "Container-module__sizeMd___Lnic2", gl = "Container-module__sizeLg___Z7t9k", hl = "Container-module__sizeXl___LAZkt", yl = "Container-module__sizeFluid___eh2as", vl = "Container-module__padNone___wG-dH", bl = "Container-module__padXs___im5-b", wl = "Container-module__padSm___BpfT7", Sl = "Container-module__padMd___dvQHr", xl = "Container-module__padLg___4ntjI", Ml = "Container-module__padXl___bDnKP", Nl = "Container-module__pad2Xl___8oHv7", ge = {
  container: _l,
  sizeXs: ml,
  sizeSm: fl,
  sizeMd: pl,
  sizeLg: gl,
  sizeXl: hl,
  sizeFluid: yl,
  padNone: vl,
  padXs: bl,
  padSm: wl,
  padMd: Sl,
  padLg: xl,
  padXl: Ml,
  pad2Xl: Nl
}, Cl = {
  xs: ge.sizeXs,
  sm: ge.sizeSm,
  md: ge.sizeMd,
  lg: ge.sizeLg,
  xl: ge.sizeXl,
  fluid: ge.sizeFluid
}, Pl = {
  none: ge.padNone,
  xs: ge.padXs,
  sm: ge.padSm,
  md: ge.padMd,
  lg: ge.padLg,
  xl: ge.padXl,
  "2xl": ge.pad2Xl
}, kl = G(
  ({ as: e = "div", children: t, size: n = "md", padding: o = "md", className: r, style: s, ...a }, i) => {
    const c = X(ge.container, Cl[n], Pl[o], r);
    return /* @__PURE__ */ l(e, { ref: i, className: c, style: s, ...a, children: t });
  }
);
kl.displayName = "Container";
const Dl = "Button-module__button___2ZuB7", zl = "Button-module__disabled___Tl9fh", Ll = "Button-module__fullWidth___36oJT", Bl = "Button-module__sizeXs___LBvuQ", Xl = "Button-module__sizeSm___NLIhO", $l = "Button-module__sizeMd___bMgkR", Il = "Button-module__sizeLg___O7Azz", Wl = "Button-module__sizeXl___fFT9A", Tl = "Button-module__radiusNone___fcEMC", Ol = "Button-module__radiusXs___NTxKK", Fl = "Button-module__radiusSm___lNDhn", El = "Button-module__radiusMd___6C6rw", Gl = "Button-module__radiusLg___4IxaO", Rl = "Button-module__radiusXl___XbnGs", Al = "Button-module__radiusFull___kCaT7", Yl = "Button-module__filledPrimary___XJXQk", Hl = "Button-module__lightPrimary___4Mi5F", jl = "Button-module__outlinePrimary___lejP5", ql = "Button-module__subtlePrimary___f6LNa", Vl = "Button-module__linkPrimary___o7Usu", Zl = "Button-module__filledSecondary___rYUad", Kl = "Button-module__lightSecondary___hjcMf", Ql = "Button-module__outlineSecondary___pbujM", Ul = "Button-module__subtleSecondary___GFJsZ", Jl = "Button-module__linkSecondary___eg2-t", ei = "Button-module__filledNeutral___OH5Bx", ti = "Button-module__lightNeutral___S4Wpw", ni = "Button-module__outlineNeutral___oRuD7", oi = "Button-module__subtleNeutral___AgBqL", ri = "Button-module__linkNeutral___iGkqf", si = "Button-module__filledSuccess___foCvn", ai = "Button-module__lightSuccess___u5cVK", li = "Button-module__outlineSuccess___hKvXw", ii = "Button-module__subtleSuccess___6pkyI", ci = "Button-module__linkSuccess___0M8B0", di = "Button-module__filledWarning___jBNAC", ui = "Button-module__lightWarning___xZp-e", _i = "Button-module__outlineWarning___HkhNV", mi = "Button-module__subtleWarning___OItOS", fi = "Button-module__linkWarning___z5Le9", pi = "Button-module__filledDanger___sI7C9", gi = "Button-module__lightDanger___nNXim", hi = "Button-module__outlineDanger___5p-9P", yi = "Button-module__subtleDanger___hdUwc", vi = "Button-module__linkDanger___oNzNe", bi = "Button-module__filledInfo___vL0I4", wi = "Button-module__lightInfo___l-Czf", Si = "Button-module__outlineInfo___FYKas", xi = "Button-module__subtleInfo___2Xhyd", Mi = "Button-module__linkInfo___TohTi", Ni = "Button-module__leftSection___FeZ93", Ci = "Button-module__rightSection___c4FZa", Pi = "Button-module__label___UJ3Zt", ki = "Button-module__spinner___ZExvW", P = {
  button: Dl,
  disabled: zl,
  fullWidth: Ll,
  sizeXs: Bl,
  sizeSm: Xl,
  sizeMd: $l,
  sizeLg: Il,
  sizeXl: Wl,
  radiusNone: Tl,
  radiusXs: Ol,
  radiusSm: Fl,
  radiusMd: El,
  radiusLg: Gl,
  radiusXl: Rl,
  radiusFull: Al,
  filledPrimary: Yl,
  lightPrimary: Hl,
  outlinePrimary: jl,
  subtlePrimary: ql,
  linkPrimary: Vl,
  filledSecondary: Zl,
  lightSecondary: Kl,
  outlineSecondary: Ql,
  subtleSecondary: Ul,
  linkSecondary: Jl,
  filledNeutral: ei,
  lightNeutral: ti,
  outlineNeutral: ni,
  subtleNeutral: oi,
  linkNeutral: ri,
  filledSuccess: si,
  lightSuccess: ai,
  outlineSuccess: li,
  subtleSuccess: ii,
  linkSuccess: ci,
  filledWarning: di,
  lightWarning: ui,
  outlineWarning: _i,
  subtleWarning: mi,
  linkWarning: fi,
  filledDanger: pi,
  lightDanger: gi,
  outlineDanger: hi,
  subtleDanger: yi,
  linkDanger: vi,
  filledInfo: bi,
  lightInfo: wi,
  outlineInfo: Si,
  subtleInfo: xi,
  linkInfo: Mi,
  leftSection: Ni,
  rightSection: Ci,
  label: Pi,
  spinner: ki
}, Di = {
  xs: P.sizeXs,
  sm: P.sizeSm,
  md: P.sizeMd,
  lg: P.sizeLg,
  xl: P.sizeXl
}, zi = {
  none: P.radiusNone,
  xs: P.radiusXs,
  sm: P.radiusSm,
  md: P.radiusMd,
  lg: P.radiusLg,
  xl: P.radiusXl,
  full: P.radiusFull
}, Li = {
  "filled-primary": P.filledPrimary,
  "filled-secondary": P.filledSecondary,
  "filled-neutral": P.filledNeutral,
  "filled-success": P.filledSuccess,
  "filled-warning": P.filledWarning,
  "filled-danger": P.filledDanger,
  "filled-info": P.filledInfo,
  "light-primary": P.lightPrimary,
  "light-secondary": P.lightSecondary,
  "light-neutral": P.lightNeutral,
  "light-success": P.lightSuccess,
  "light-warning": P.lightWarning,
  "light-danger": P.lightDanger,
  "light-info": P.lightInfo,
  "outline-primary": P.outlinePrimary,
  "outline-secondary": P.outlineSecondary,
  "outline-neutral": P.outlineNeutral,
  "outline-success": P.outlineSuccess,
  "outline-warning": P.outlineWarning,
  "outline-danger": P.outlineDanger,
  "outline-info": P.outlineInfo,
  "subtle-primary": P.subtlePrimary,
  "subtle-secondary": P.subtleSecondary,
  "subtle-neutral": P.subtleNeutral,
  "subtle-success": P.subtleSuccess,
  "subtle-warning": P.subtleWarning,
  "subtle-danger": P.subtleDanger,
  "subtle-info": P.subtleInfo,
  "link-primary": P.linkPrimary,
  "link-secondary": P.linkSecondary,
  "link-neutral": P.linkNeutral,
  "link-success": P.linkSuccess,
  "link-warning": P.linkWarning,
  "link-danger": P.linkDanger,
  "link-info": P.linkInfo
}, Bi = G(
  ({ children: e, variant: t = "filled", color: n = "primary", size: o = "md", radius: r = "md", loading: s = !1, disabled: a = !1, fullWidth: i = !1, leftSection: c, rightSection: u, type: _ = "button", className: m, style: f, ...p }, h) => {
    const b = t + "-" + n, g = Li[b] || P.filledPrimary, x = X(P.button, Di[o], zi[r], g, { [P.fullWidth]: i, [P.disabled]: a || s }, m);
    return /* @__PURE__ */ k("button", { ref: h, type: _, disabled: a || s, "aria-busy": s, className: x, style: f, ...p, children: [
      s ? /* @__PURE__ */ l("span", { className: P.spinner, "aria-hidden": "true", children: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
        /* @__PURE__ */ l("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
      ] }) }) : c && /* @__PURE__ */ l("span", { className: P.leftSection, children: c }),
      /* @__PURE__ */ l("span", { className: P.label, children: e }),
      !s && u && /* @__PURE__ */ l("span", { className: P.rightSection, children: u })
    ] });
  }
);
Bi.displayName = "Button";
const Xi = "IconButton-module__iconButton___JAF-a", $i = "IconButton-module__disabled___HV-cc", Ii = "IconButton-module__sizeXs___RZG2T", Wi = "IconButton-module__sizeSm___XPiUo", Ti = "IconButton-module__sizeMd___6uTyJ", Oi = "IconButton-module__sizeLg___AQhjY", Fi = "IconButton-module__sizeXl___94RFK", Ei = "IconButton-module__radiusNone___eFnz1", Gi = "IconButton-module__radiusXs___BLufM", Ri = "IconButton-module__radiusSm___o6ws0", Ai = "IconButton-module__radiusMd___Kbm2a", Yi = "IconButton-module__radiusLg___g0tOq", Hi = "IconButton-module__radiusXl___g4YBl", ji = "IconButton-module__radiusFull___XNprk", qi = "IconButton-module__subtleNeutral___h8UeA", Vi = "IconButton-module__filledNeutral___kvDx8", Zi = "IconButton-module__lightNeutral___sZVRZ", Ki = "IconButton-module__outlineNeutral___Jhyjb", Qi = "IconButton-module__subtlePrimary___KHLpz", Ui = "IconButton-module__filledPrimary___2ol5Q", Ji = "IconButton-module__lightPrimary___qlCMV", ec = "IconButton-module__outlinePrimary___AqPi8", tc = "IconButton-module__subtleSecondary___ZUGuJ", nc = "IconButton-module__filledSecondary___cxoYN", oc = "IconButton-module__lightSecondary___hWfU-", rc = "IconButton-module__outlineSecondary___UY-go", sc = "IconButton-module__subtleSuccess___dlxqM", ac = "IconButton-module__filledSuccess___ULKTd", lc = "IconButton-module__lightSuccess___dXTbK", ic = "IconButton-module__outlineSuccess___DlqE8", cc = "IconButton-module__subtleWarning___dmAXE", dc = "IconButton-module__filledWarning___av8qf", uc = "IconButton-module__lightWarning___3XhVl", _c = "IconButton-module__outlineWarning___xePwu", mc = "IconButton-module__subtleDanger___YT9LD", fc = "IconButton-module__filledDanger___ApWqu", pc = "IconButton-module__lightDanger___ccZbA", gc = "IconButton-module__outlineDanger___cUc1g", hc = "IconButton-module__subtleInfo___-ndj-", yc = "IconButton-module__filledInfo___6OY2a", vc = "IconButton-module__lightInfo___vQTgg", bc = "IconButton-module__outlineInfo___RQlUd", wc = "IconButton-module__spinner___yePta", B = {
  iconButton: Xi,
  disabled: $i,
  sizeXs: Ii,
  sizeSm: Wi,
  sizeMd: Ti,
  sizeLg: Oi,
  sizeXl: Fi,
  radiusNone: Ei,
  radiusXs: Gi,
  radiusSm: Ri,
  radiusMd: Ai,
  radiusLg: Yi,
  radiusXl: Hi,
  radiusFull: ji,
  subtleNeutral: qi,
  filledNeutral: Vi,
  lightNeutral: Zi,
  outlineNeutral: Ki,
  subtlePrimary: Qi,
  filledPrimary: Ui,
  lightPrimary: Ji,
  outlinePrimary: ec,
  subtleSecondary: tc,
  filledSecondary: nc,
  lightSecondary: oc,
  outlineSecondary: rc,
  subtleSuccess: sc,
  filledSuccess: ac,
  lightSuccess: lc,
  outlineSuccess: ic,
  subtleWarning: cc,
  filledWarning: dc,
  lightWarning: uc,
  outlineWarning: _c,
  subtleDanger: mc,
  filledDanger: fc,
  lightDanger: pc,
  outlineDanger: gc,
  subtleInfo: hc,
  filledInfo: yc,
  lightInfo: vc,
  outlineInfo: bc,
  spinner: wc
}, Sc = {
  xs: B.sizeXs,
  sm: B.sizeSm,
  md: B.sizeMd,
  lg: B.sizeLg,
  xl: B.sizeXl
}, xc = {
  none: B.radiusNone,
  xs: B.radiusXs,
  sm: B.radiusSm,
  md: B.radiusMd,
  lg: B.radiusLg,
  xl: B.radiusXl,
  full: B.radiusFull
}, Mc = {
  "subtle-neutral": B.subtleNeutral,
  "filled-neutral": B.filledNeutral,
  "light-neutral": B.lightNeutral,
  "outline-neutral": B.outlineNeutral,
  "subtle-primary": B.subtlePrimary,
  "filled-primary": B.filledPrimary,
  "light-primary": B.lightPrimary,
  "outline-primary": B.outlinePrimary,
  "subtle-secondary": B.subtleSecondary,
  "filled-secondary": B.filledSecondary,
  "light-secondary": B.lightSecondary,
  "outline-secondary": B.outlineSecondary,
  "subtle-success": B.subtleSuccess,
  "filled-success": B.filledSuccess,
  "light-success": B.lightSuccess,
  "outline-success": B.outlineSuccess,
  "subtle-warning": B.subtleWarning,
  "filled-warning": B.filledWarning,
  "light-warning": B.lightWarning,
  "outline-warning": B.outlineWarning,
  "subtle-danger": B.subtleDanger,
  "filled-danger": B.filledDanger,
  "light-danger": B.lightDanger,
  "outline-danger": B.outlineDanger,
  "subtle-info": B.subtleInfo,
  "filled-info": B.filledInfo,
  "light-info": B.lightInfo,
  "outline-info": B.outlineInfo
}, Ie = G(
  ({ icon: e, "aria-label": t, variant: n = "subtle", color: o = "neutral", size: r = "md", radius: s = "md", loading: a = !1, disabled: i = !1, type: c = "button", className: u, style: _, ...m }, f) => {
    const p = n + "-" + o, h = X(B.iconButton, Sc[r], xc[s], Mc[p] || B.subtleNeutral, { [B.disabled]: i || a }, u);
    return /* @__PURE__ */ l("button", { ref: f, type: c, "aria-label": t, disabled: i || a, "aria-busy": a, className: h, style: _, ...m, children: a ? /* @__PURE__ */ l("span", { className: B.spinner, "aria-hidden": "true", children: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
      /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
      /* @__PURE__ */ l("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
    ] }) }) : e });
  }
);
Ie.displayName = "IconButton";
const Nc = "InputWrapper-module__wrapper___WHwoB", Cc = "InputWrapper-module__labelRow___jBw-D", Pc = "InputWrapper-module__label___5Iora", kc = "InputWrapper-module__requiredAsterisk___BA3Kq", Dc = "InputWrapper-module__description___d5VI9", zc = "InputWrapper-module__inputArea___HrYX6", Lc = "InputWrapper-module__errorText___e2CDJ", Bc = "InputWrapper-module__sizeXs___6ESPO", Xc = "InputWrapper-module__sizeSm___PnTVy", $c = "InputWrapper-module__sizeMd___v-j6k", Ic = "InputWrapper-module__sizeLg___XP-zf", Wc = "InputWrapper-module__sizeXl___s0rc1", Tc = "InputWrapper-module__disabled___vXh63", be = {
  wrapper: Nc,
  labelRow: Cc,
  label: Pc,
  requiredAsterisk: kc,
  description: Dc,
  inputArea: zc,
  errorText: Lc,
  sizeXs: Bc,
  sizeSm: Xc,
  sizeMd: $c,
  sizeLg: Ic,
  sizeXl: Wc,
  disabled: Tc
}, Oc = {
  xs: be.sizeXs,
  sm: be.sizeSm,
  md: be.sizeMd,
  lg: be.sizeLg,
  xl: be.sizeXl
}, He = G(
  ({ children: e, label: t, description: n, error: o, required: r = !1, size: s = "md", disabled: a = !1, className: i, style: c, id: u }, _) => {
    const m = !!o, f = typeof o == "string" ? o : void 0, p = X(be.wrapper, Oc[s], { [be.disabled]: a }, i);
    return /* @__PURE__ */ k("div", { ref: _, className: p, style: c, id: u, children: [
      t && /* @__PURE__ */ l("div", { className: be.labelRow, children: /* @__PURE__ */ k("label", { className: be.label, children: [
        t,
        r && /* @__PURE__ */ l("span", { className: be.requiredAsterisk, children: "*" })
      ] }) }),
      n && /* @__PURE__ */ l("div", { className: be.description, children: n }),
      /* @__PURE__ */ l("div", { className: be.inputArea, children: e }),
      m && f && /* @__PURE__ */ l("div", { className: be.errorText, children: f })
    ] });
  }
);
He.displayName = "InputWrapper";
const Fc = "TextField-module__inputContainer___azWVB", Ec = "TextField-module__input___RL-My", Gc = "TextField-module__error___HzypY", Rc = "TextField-module__sizeXs___lVOmZ", Ac = "TextField-module__sizeSm___EA3-E", Yc = "TextField-module__sizeMd___58-pc", Hc = "TextField-module__sizeLg___L96aw", jc = "TextField-module__sizeXl___VmFIo", qc = "TextField-module__leftSection___iUQ9e", Vc = "TextField-module__rightSection___i4oSs", Zc = "TextField-module__withLeftSection___xSZTD", Kc = "TextField-module__withRightSection___b88-7", ne = {
  inputContainer: Fc,
  input: Ec,
  error: Gc,
  sizeXs: Rc,
  sizeSm: Ac,
  sizeMd: Yc,
  sizeLg: Hc,
  sizeXl: jc,
  leftSection: qc,
  rightSection: Vc,
  withLeftSection: Zc,
  withRightSection: Kc
}, Qc = {
  xs: ne.sizeXs,
  sm: ne.sizeSm,
  md: ne.sizeMd,
  lg: ne.sizeLg,
  xl: ne.sizeXl
}, Uc = G(
  ({ label: e, description: t, error: n, required: o = !1, size: r = "md", disabled: s = !1, value: a, defaultValue: i, placeholder: c, type: u = "text", leftSection: _, rightSection: m, className: f, style: p, id: h, onChange: b, ...g }, x) => {
    const N = !!n, O = X(ne.input, Qc[r], { [ne.error]: N, [ne.withLeftSection]: !!_, [ne.withRightSection]: !!m });
    return /* @__PURE__ */ l(He, { label: e, description: t, error: n, required: o, size: r, disabled: s, className: f, style: p, children: /* @__PURE__ */ k("div", { className: ne.inputContainer, children: [
      _ && /* @__PURE__ */ l("span", { className: ne.leftSection, children: _ }),
      /* @__PURE__ */ l("input", { ref: x, id: h, type: u, value: a, defaultValue: i, placeholder: c, disabled: s, required: o, "aria-invalid": N, className: O, onChange: b, ...g }),
      m && /* @__PURE__ */ l("span", { className: ne.rightSection, children: m })
    ] }) });
  }
);
Uc.displayName = "TextField";
const Jc = "NumberInput-module__controls___8UfQ2", ed = "NumberInput-module__controlButton___epVGN", td = "NumberInput-module__controlIcon___0Jsyn", Ve = {
  controls: Jc,
  controlButton: ed,
  controlIcon: td
}, nd = {
  xs: ne.sizeXs,
  sm: ne.sizeSm,
  md: ne.sizeMd,
  lg: ne.sizeLg,
  xl: ne.sizeXl
}, od = G(
  ({ label: e, description: t, error: n, required: o = !1, size: r = "md", disabled: s = !1, value: a, defaultValue: i = "", min: c = -1 / 0, max: u = 1 / 0, step: _ = 1, precision: m = 0, hideControls: f = !1, onChange: p, className: h, style: b, placeholder: g, id: x, ...N }, O) => {
    const W = a !== void 0, [d, v] = Y(() => {
      const R = W ? a : i;
      return typeof R == "number" ? m > 0 ? R.toFixed(m) : String(R) : "";
    });
    q(() => {
      W && v(typeof a == "number" ? m > 0 ? a.toFixed(m) : String(a) : "");
    }, [a, W, m]);
    const w = (R) => {
      const Z = Math.max(c, Math.min(u, R));
      return m > 0 ? Z.toFixed(m) : String(Z);
    }, V = (R) => {
      if (R === "" || R === "-") return;
      const Z = parseFloat(R);
      return isNaN(Z) ? void 0 : Math.max(c, Math.min(u, Z));
    }, re = (R) => {
      const Z = R.target.value;
      v(Z), p?.(V(Z));
    }, J = (R) => {
      const Z = V(d);
      v(Z !== void 0 ? w(Z) : ""), N.onBlur?.(R);
    }, se = (R) => {
      if (s) return;
      const Z = V(d) ?? (R === 1 ? c !== -1 / 0 ? c : 0 : u !== 1 / 0 ? u : 0), S = w(Z + R * _);
      v(S), p?.(parseFloat(S));
    }, fe = !!n, ce = !f && !s, de = X(ne.input, nd[r], { [ne.error]: fe, [ne.withRightSection]: ce });
    return /* @__PURE__ */ l(He, { label: e, description: t, error: n, required: o, size: r, disabled: s, className: h, style: b, children: /* @__PURE__ */ k("div", { className: ne.inputContainer, children: [
      /* @__PURE__ */ l("input", { ref: O, id: x, type: "text", inputMode: "decimal", value: d, placeholder: g, disabled: s, required: o, "aria-invalid": fe, className: de, onChange: re, onBlur: J, ...N }),
      ce && /* @__PURE__ */ k("div", { className: Ve.controls, children: [
        /* @__PURE__ */ l("button", { type: "button", tabIndex: -1, "aria-label": "Increment value", className: Ve.controlButton, onClick: () => se(1), children: /* @__PURE__ */ l("svg", { className: Ve.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "18 15 12 9 6 15" }) }) }),
        /* @__PURE__ */ l("button", { type: "button", tabIndex: -1, "aria-label": "Decrement value", className: Ve.controlButton, onClick: () => se(-1), children: /* @__PURE__ */ l("svg", { className: Ve.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "6 9 12 15 18 9" }) }) })
      ] })
    ] }) });
  }
);
od.displayName = "NumberInput";
const rd = "Select-module__selectContainer___uzCk5", sd = "Select-module__trigger___ECKfC", ad = "Select-module__placeholder___yUgBU", ld = "Select-module__valueText___7y3On", id = "Select-module__error___sw9MU", cd = "Select-module__sizeXs___NqcyQ", dd = "Select-module__sizeSm___2SRQF", ud = "Select-module__sizeMd___BDWO8", _d = "Select-module__sizeLg___xz6D8", md = "Select-module__sizeXl___GVxKe", fd = "Select-module__actions___t3UnQ", pd = "Select-module__clearButton___uhTpE", gd = "Select-module__chevron___PLUsh", hd = "Select-module__chevronOpen___aOks0", yd = "Select-module__dropdown___glgl4", vd = "Select-module__searchInput___mqRgu", bd = "Select-module__optionsList___mKHJh", wd = "Select-module__option___Hvo8n", Sd = "Select-module__optionDisabled___FhDw-", xd = "Select-module__optionSelected___egAHP", Md = "Select-module__emptyState___weIb5", ee = {
  selectContainer: rd,
  trigger: sd,
  placeholder: ad,
  valueText: ld,
  error: id,
  sizeXs: cd,
  sizeSm: dd,
  sizeMd: ud,
  sizeLg: _d,
  sizeXl: md,
  actions: fd,
  clearButton: pd,
  chevron: gd,
  chevronOpen: hd,
  dropdown: yd,
  searchInput: vd,
  optionsList: bd,
  option: wd,
  optionDisabled: Sd,
  optionSelected: xd,
  emptyState: Md
}, Nd = {
  xs: ee.sizeXs,
  sm: ee.sizeSm,
  md: ee.sizeMd,
  lg: ee.sizeLg,
  xl: ee.sizeXl
}, Cd = G(
  ({ label: e, description: t, error: n, required: o = !1, size: r = "md", disabled: s = !1, data: a, value: i, defaultValue: c, placeholder: u = "Select option...", searchable: _ = !1, clearable: m = !1, onChange: f, className: p, style: h, id: b, ...g }, x) => {
    const N = i !== void 0, [O, W] = Y((N ? i : c) ?? null), [d, v] = Y(!1), [w, V] = Y(""), [re, J] = Y({ top: 0, left: 0, width: 0 }), se = we(null), fe = we(null), ce = we(null), de = Ye(), R = b || de;
    q(() => {
      N && W(i ?? null);
    }, [i, N]);
    const Z = () => {
      if (!se.current) return;
      const C = se.current.getBoundingClientRect(), le = 240, je = window.innerHeight - C.bottom;
      let qe = C.bottom + 4;
      je < le && C.top > le && (qe = Math.max(8, C.top - le - 4)), J({
        top: qe,
        left: C.left,
        width: C.width
      });
    };
    q(() => {
      if (!d) return;
      Z();
      const C = () => Z(), le = () => Z();
      return window.addEventListener("scroll", C, !0), window.addEventListener("resize", le), () => {
        window.removeEventListener("scroll", C, !0), window.removeEventListener("resize", le);
      };
    }, [d]), q(() => {
      if (!d) return;
      const C = (je) => {
        const qe = je.target;
        se.current && !se.current.contains(qe) && fe.current && !fe.current.contains(qe) && v(!1);
      }, le = (je) => {
        je.key === "Escape" && v(!1);
      };
      return document.addEventListener("mousedown", C), document.addEventListener("keydown", le), () => {
        document.removeEventListener("mousedown", C), document.removeEventListener("keydown", le);
      };
    }, [d]), q(() => {
      d && _ && ce.current && ce.current.focus();
    }, [d, _]);
    const S = Lt.useMemo(() => a.map((C) => typeof C == "string" ? { label: C, value: C } : C), [a]), M = Lt.useMemo(() => {
      if (!_ || !w.trim()) return S;
      const C = w.toLowerCase();
      return S.filter((le) => le.label.toLowerCase().includes(C));
    }, [S, _, w]), xe = S.find((C) => C.value === O), De = (C, le) => {
      le || (N || W(C), f?.(C), v(!1), V(""));
    }, D = (C) => {
      C.stopPropagation(), N || W(null), f?.(null);
    }, A = (C) => {
      s || (C.key === "Escape" ? v(!1) : (C.key === "Enter" || C.key === " " || C.key === "ArrowDown") && (d || (C.preventDefault(), v(!0))));
    }, pe = !!n, ve = X(ee.trigger, Nd[r], { [ee.error]: pe }), ze = d && typeof document < "u" ? at(
      /* @__PURE__ */ k(
        "div",
        {
          ref: fe,
          className: ee.dropdown,
          role: "listbox",
          style: {
            top: `${re.top}px`,
            left: `${re.left}px`,
            width: `${re.width}px`
          },
          children: [
            _ && /* @__PURE__ */ l(
              "input",
              {
                ref: ce,
                type: "text",
                placeholder: "Search options...",
                value: w,
                onChange: (C) => V(C.target.value),
                className: ee.searchInput,
                onClick: (C) => C.stopPropagation()
              }
            ),
            /* @__PURE__ */ l("div", { className: ee.optionsList, children: M.length === 0 ? /* @__PURE__ */ l("div", { className: ee.emptyState, children: "No options found" }) : M.map((C) => {
              const le = C.value === O;
              return /* @__PURE__ */ k(
                "div",
                {
                  role: "option",
                  "aria-selected": le,
                  "aria-disabled": C.disabled,
                  className: X(ee.option, {
                    [ee.optionSelected]: le,
                    [ee.optionDisabled]: C.disabled
                  }),
                  onClick: () => De(C.value, C.disabled),
                  children: [
                    /* @__PURE__ */ l("span", { children: C.label }),
                    le && /* @__PURE__ */ l("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "20 6 9 17 4 12" }) })
                  ]
                },
                C.value
              );
            }) })
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(He, { label: e, description: t, error: n, required: o, size: r, disabled: s, className: p, style: h, children: /* @__PURE__ */ k("div", { className: ee.selectContainer, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (C) => {
            se.current = C, typeof x == "function" ? x(C) : x && (x.current = C);
          },
          id: R,
          type: "button",
          role: "combobox",
          "aria-expanded": d,
          "aria-haspopup": "listbox",
          "aria-invalid": pe,
          disabled: s,
          className: ve,
          onClick: () => !s && v((C) => !C),
          onKeyDown: A,
          ...g,
          children: [
            /* @__PURE__ */ l("span", { className: xe ? ee.valueText : ee.placeholder, children: xe ? xe.label : u }),
            /* @__PURE__ */ k("div", { className: ee.actions, children: [
              m && O && !s && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear selection", className: ee.clearButton, onClick: D, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: X(ee.chevron, { [ee.chevronOpen]: d }), children: /* @__PURE__ */ l("polyline", { points: "6 9 12 15 18 9" }) })
            ] })
          ]
        }
      ),
      ze
    ] }) });
  }
);
Cd.displayName = "Select";
const Pd = "Switch-module__root___Y5Ydi", kd = "Switch-module__container___JzxEt", Dd = "Switch-module__containerDisabled___JYuGJ", zd = "Switch-module__labelLeft___-aOkY", Ld = "Switch-module__input___5BPNu", Bd = "Switch-module__track___7ObdZ", Xd = "Switch-module__knob___vKNOc", $d = "Switch-module__sizeXs___473fx", Id = "Switch-module__sizeSm___MvsLM", Wd = "Switch-module__sizeMd___bXgKq", Td = "Switch-module__sizeLg___S9a0j", Od = "Switch-module__sizeXl___H7dXN", Fd = "Switch-module__colorPrimary___Bp7Ru", Ed = "Switch-module__colorSecondary___MZAA0", Gd = "Switch-module__colorNeutral___RJv2Q", Rd = "Switch-module__colorSuccess___n3Atm", Ad = "Switch-module__colorWarning___OJiZY", Yd = "Switch-module__colorDanger___niua2", Hd = "Switch-module__colorInfo___-IzZH", jd = "Switch-module__label___LrH7V", qd = "Switch-module__description___CClza", Vd = "Switch-module__errorText___9s1pb", Q = {
  root: Pd,
  container: kd,
  containerDisabled: Dd,
  labelLeft: zd,
  input: Ld,
  track: Bd,
  knob: Xd,
  sizeXs: $d,
  sizeSm: Id,
  sizeMd: Wd,
  sizeLg: Td,
  sizeXl: Od,
  colorPrimary: Fd,
  colorSecondary: Ed,
  colorNeutral: Gd,
  colorSuccess: Rd,
  colorWarning: Ad,
  colorDanger: Yd,
  colorInfo: Hd,
  label: jd,
  description: qd,
  errorText: Vd
}, Zd = {
  xs: Q.sizeXs,
  sm: Q.sizeSm,
  md: Q.sizeMd,
  lg: Q.sizeLg,
  xl: Q.sizeXl
}, Kd = {
  primary: Q.colorPrimary,
  secondary: Q.colorSecondary,
  neutral: Q.colorNeutral,
  success: Q.colorSuccess,
  warning: Q.colorWarning,
  danger: Q.colorDanger,
  info: Q.colorInfo
}, Qd = G(
  ({ label: e, labelPosition: t = "right", color: n = "primary", size: o = "md", disabled: r = !1, description: s, error: a, checked: i, defaultChecked: c, className: u, style: _, id: m, onChange: f, ...p }, h) => {
    const b = Ye(), g = m || b, x = !!a, N = typeof a == "string" ? a : void 0;
    return /* @__PURE__ */ k("div", { className: X(Q.root, Zd[o], Kd[n], u), style: _, children: [
      /* @__PURE__ */ k("label", { htmlFor: g, className: X(Q.container, { [Q.containerDisabled]: r, [Q.labelLeft]: t === "left" }), children: [
        /* @__PURE__ */ l("input", { ref: h, id: g, type: "checkbox", role: "switch", "aria-checked": i, "aria-invalid": x, disabled: r, checked: i, defaultChecked: c, className: Q.input, onChange: f, ...p }),
        /* @__PURE__ */ l("span", { className: Q.track, children: /* @__PURE__ */ l("span", { className: Q.knob }) }),
        e && /* @__PURE__ */ l("span", { className: Q.label, children: e })
      ] }),
      s && /* @__PURE__ */ l("div", { className: Q.description, children: s }),
      x && N && /* @__PURE__ */ l("div", { className: Q.errorText, children: N })
    ] });
  }
);
Qd.displayName = "Switch";
function I(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Se(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function _e(e, t) {
  const n = I(e);
  return isNaN(t) ? Se(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Ne(e, t) {
  const n = I(e);
  if (isNaN(t)) return Se(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), r = Se(e, n.getTime());
  r.setMonth(n.getMonth() + t + 1, 0);
  const s = r.getDate();
  return o >= s ? r : (n.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    o
  ), n);
}
const vt = 6048e5, Ud = 864e5;
let Jd = {};
function Ue() {
  return Jd;
}
function ke(e, t) {
  const n = Ue(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, r = I(e), s = r.getDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r;
}
function Ee(e) {
  return ke(e, { weekStartsOn: 1 });
}
function Qt(e) {
  const t = I(e), n = t.getFullYear(), o = Se(e, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const r = Ee(o), s = Se(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Ee(s);
  return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function Ae(e) {
  const t = I(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ot(e) {
  const t = I(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Pe(e, t) {
  const n = Ae(e), o = Ae(t), r = +n - ot(n), s = +o - ot(o);
  return Math.round((r - s) / Ud);
}
function eu(e) {
  const t = Qt(e), n = Se(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Ee(n);
}
function ht(e, t) {
  const n = t * 7;
  return _e(e, n);
}
function tu(e, t) {
  return Ne(e, t * 12);
}
function nu(e) {
  let t;
  return e.forEach(function(n) {
    const o = I(n);
    (t === void 0 || t < o || isNaN(Number(o))) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ou(e) {
  let t;
  return e.forEach((n) => {
    const o = I(n);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function he(e, t) {
  const n = Ae(e), o = Ae(t);
  return +n == +o;
}
function bt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rt(e) {
  if (!bt(e) && typeof e != "number")
    return !1;
  const t = I(e);
  return !isNaN(Number(t));
}
function Qe(e, t) {
  const n = I(e), o = I(t), r = n.getFullYear() - o.getFullYear(), s = n.getMonth() - o.getMonth();
  return r * 12 + s;
}
function ru(e, t, n) {
  const o = ke(e, n), r = ke(t, n), s = +o - ot(o), a = +r - ot(r);
  return Math.round((s - a) / vt);
}
function wt(e) {
  const t = I(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function ye(e) {
  const t = I(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ut(e) {
  const t = I(e), n = Se(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function St(e, t) {
  const n = Ue(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, r = I(e), s = r.getDay(), a = (s < o ? -7 : 0) + 6 - (s - o);
  return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r;
}
function Jt(e) {
  return St(e, { weekStartsOn: 1 });
}
const su = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, au = (e, t, n) => {
  let o;
  const r = su[e];
  return typeof r == "string" ? o = r : t === 1 ? o = r.one : o = r.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
function dt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const lu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, iu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, cu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, du = {
  date: dt({
    formats: lu,
    defaultWidth: "full"
  }),
  time: dt({
    formats: iu,
    defaultWidth: "full"
  }),
  dateTime: dt({
    formats: cu,
    defaultWidth: "full"
  })
}, uu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, _u = (e, t, n, o) => uu[e];
function Ze(e) {
  return (t, n) => {
    const o = n?.context ? String(n.context) : "standalone";
    let r;
    if (o === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : a;
      r = e.formattingValues[i] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      r = e.values[i] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[s];
  };
}
const mu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, fu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, pu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, gu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, hu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, yu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, vu = (e, t) => {
  const n = Number(e), o = n % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, bu = {
  ordinalNumber: vu,
  era: Ze({
    values: mu,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: fu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ze({
    values: pu,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: gu,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: hu,
    defaultWidth: "wide",
    formattingValues: yu,
    defaultFormattingWidth: "wide"
  })
};
function Ke(e) {
  return (t, n = {}) => {
    const o = n.width, r = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], s = t.match(r);
    if (!s)
      return null;
    const a = s[0], i = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Su(i, (m) => m.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      wu(i, (m) => m.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const _ = t.slice(a.length);
    return { value: u, rest: _ };
  };
}
function wu(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Su(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function xu(e) {
  return (t, n = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const r = o[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = t.slice(r.length);
    return { value: a, rest: i };
  };
}
const Mu = /^(\d+)(th|st|nd|rd)?/i, Nu = /\d+/i, Cu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Pu = {
  any: [/^b/i, /^(a|c)/i]
}, ku = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Du = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Lu = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Bu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Xu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $u = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Iu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Wu = {
  ordinalNumber: xu({
    matchPattern: Mu,
    parsePattern: Nu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ke({
    matchPatterns: Cu,
    defaultMatchWidth: "wide",
    parsePatterns: Pu,
    defaultParseWidth: "any"
  }),
  quarter: Ke({
    matchPatterns: ku,
    defaultMatchWidth: "wide",
    parsePatterns: Du,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ke({
    matchPatterns: zu,
    defaultMatchWidth: "wide",
    parsePatterns: Lu,
    defaultParseWidth: "any"
  }),
  day: Ke({
    matchPatterns: Bu,
    defaultMatchWidth: "wide",
    parsePatterns: Xu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ke({
    matchPatterns: $u,
    defaultMatchWidth: "any",
    parsePatterns: Iu,
    defaultParseWidth: "any"
  })
}, en = {
  code: "en-US",
  formatDistance: au,
  formatLong: du,
  formatRelative: _u,
  localize: bu,
  match: Wu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Tu(e) {
  const t = I(e);
  return Pe(t, Ut(t)) + 1;
}
function tn(e) {
  const t = I(e), n = +Ee(t) - +eu(t);
  return Math.round(n / vt) + 1;
}
function nn(e, t) {
  const n = I(e), o = n.getFullYear(), r = Ue(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = Se(e, 0);
  a.setFullYear(o + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = ke(a, t), c = Se(e, 0);
  c.setFullYear(o, 0, s), c.setHours(0, 0, 0, 0);
  const u = ke(c, t);
  return n.getTime() >= i.getTime() ? o + 1 : n.getTime() >= u.getTime() ? o : o - 1;
}
function Ou(e, t) {
  const n = Ue(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, r = nn(e, t), s = Se(e, 0);
  return s.setFullYear(r, 0, o), s.setHours(0, 0, 0, 0), ke(s, t);
}
function on(e, t) {
  const n = I(e), o = +ke(n, t) - +Ou(n, t);
  return Math.round(o / vt) + 1;
}
function F(e, t) {
  const n = e < 0 ? "-" : "", o = Math.abs(e).toString().padStart(t, "0");
  return n + o;
}
const $e = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
    return F(t === "yy" ? o % 100 : o, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : F(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return F(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return F(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return F(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return F(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return F(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, o = e.getMilliseconds(), r = Math.trunc(
      o * Math.pow(10, n - 3)
    );
    return F(r, t.length);
  }
}, Re = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, It = {
  // Era
  G: function(e, t, n) {
    const o = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(o, { width: "abbreviated" });
      case "GGGGG":
        return n.era(o, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(o, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const o = e.getFullYear(), r = o > 0 ? o : 1 - o;
      return n.ordinalNumber(r, { unit: "year" });
    }
    return $e.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, o) {
    const r = nn(e, o), s = r > 0 ? r : 1 - r;
    if (t === "YY") {
      const a = s % 100;
      return F(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : F(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Qt(e);
    return F(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return F(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(o);
      case "QQ":
        return F(o, 2);
      case "Qo":
        return n.ordinalNumber(o, { unit: "quarter" });
      case "QQQ":
        return n.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(o);
      case "qq":
        return F(o, 2);
      case "qo":
        return n.ordinalNumber(o, { unit: "quarter" });
      case "qqq":
        return n.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const o = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return $e.M(e, t);
      case "Mo":
        return n.ordinalNumber(o + 1, { unit: "month" });
      case "MMM":
        return n.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(o, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const o = e.getMonth();
    switch (t) {
      case "L":
        return String(o + 1);
      case "LL":
        return F(o + 1, 2);
      case "Lo":
        return n.ordinalNumber(o + 1, { unit: "month" });
      case "LLL":
        return n.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(o, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, o) {
    const r = on(e, o);
    return t === "wo" ? n.ordinalNumber(r, { unit: "week" }) : F(r, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const o = tn(e);
    return t === "Io" ? n.ordinalNumber(o, { unit: "week" }) : F(o, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $e.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const o = Tu(e);
    return t === "Do" ? n.ordinalNumber(o, { unit: "dayOfYear" }) : F(o, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const o = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, o) {
    const r = e.getDay(), s = (r - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return F(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, o) {
    const r = e.getDay(), s = (r - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return F(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const o = e.getDay(), r = o === 0 ? 7 : o;
    switch (t) {
      case "i":
        return String(r);
      case "ii":
        return F(r, t.length);
      case "io":
        return n.ordinalNumber(r, { unit: "day" });
      case "iii":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const o = e.getHours();
    let r;
    switch (o === 12 ? r = Re.noon : o === 0 ? r = Re.midnight : r = o / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const o = e.getHours();
    let r;
    switch (o >= 17 ? r = Re.evening : o >= 12 ? r = Re.afternoon : o >= 4 ? r = Re.morning : r = Re.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let o = e.getHours() % 12;
      return o === 0 && (o = 12), n.ordinalNumber(o, { unit: "hour" });
    }
    return $e.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $e.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const o = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(o, { unit: "hour" }) : F(o, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let o = e.getHours();
    return o === 0 && (o = 24), t === "ko" ? n.ordinalNumber(o, { unit: "hour" }) : F(o, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $e.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $e.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return $e.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const o = e.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return Tt(o);
      case "XXXX":
      case "XX":
        return Oe(o);
      case "XXXXX":
      case "XXX":
      default:
        return Oe(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Tt(o);
      case "xxxx":
      case "xx":
        return Oe(o);
      case "xxxxx":
      case "xxx":
      default:
        return Oe(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Wt(o, ":");
      case "OOOO":
      default:
        return "GMT" + Oe(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Wt(o, ":");
      case "zzzz":
      default:
        return "GMT" + Oe(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const o = Math.trunc(e.getTime() / 1e3);
    return F(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const o = e.getTime();
    return F(o, t.length);
  }
};
function Wt(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), r = Math.trunc(o / 60), s = o % 60;
  return s === 0 ? n + String(r) : n + String(r) + t + F(s, 2);
}
function Tt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + F(Math.abs(e) / 60, 2) : Oe(e, t);
}
function Oe(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), r = F(Math.trunc(o / 60), 2), s = F(o % 60, 2);
  return n + r + t + s;
}
const Ot = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, rn = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Fu = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], o = n[1], r = n[2];
  if (!r)
    return Ot(e, t);
  let s;
  switch (o) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Ot(o, t)).replace("{{time}}", rn(r, t));
}, Eu = {
  p: rn,
  P: Fu
}, Gu = /^D+$/, Ru = /^Y+$/, Au = ["D", "DD", "YY", "YYYY"];
function Yu(e) {
  return Gu.test(e);
}
function Hu(e) {
  return Ru.test(e);
}
function ju(e, t, n) {
  const o = qu(e, t, n);
  if (console.warn(o), Au.includes(e)) throw new RangeError(o);
}
function qu(e, t, n) {
  const o = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Vu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ku = /^'([^]*?)'?$/, Qu = /''/g, Uu = /[a-zA-Z]/;
function Me(e, t, n) {
  const o = Ue(), r = n?.locale ?? o.locale ?? en, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, i = I(e);
  if (!rt(i))
    throw new RangeError("Invalid time value");
  let c = t.match(Zu).map((_) => {
    const m = _[0];
    if (m === "p" || m === "P") {
      const f = Eu[m];
      return f(_, r.formatLong);
    }
    return _;
  }).join("").match(Vu).map((_) => {
    if (_ === "''")
      return { isToken: !1, value: "'" };
    const m = _[0];
    if (m === "'")
      return { isToken: !1, value: Ju(_) };
    if (It[m])
      return { isToken: !0, value: _ };
    if (m.match(Uu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: _ };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(i, c));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: r
  };
  return c.map((_) => {
    if (!_.isToken) return _.value;
    const m = _.value;
    (!n?.useAdditionalWeekYearTokens && Hu(m) || !n?.useAdditionalDayOfYearTokens && Yu(m)) && ju(m, t, String(e));
    const f = It[m[0]];
    return f(i, m, r.localize, u);
  }).join("");
}
function Ju(e) {
  const t = e.match(Ku);
  return t ? t[1].replace(Qu, "'") : e;
}
function e_(e) {
  const t = I(e), n = t.getFullYear(), o = t.getMonth(), r = Se(e, 0);
  return r.setFullYear(n, o + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function t_(e) {
  return Math.trunc(+I(e) / 1e3);
}
function n_(e) {
  const t = I(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function o_(e, t) {
  return ru(
    n_(e),
    ye(e),
    t
  ) + 1;
}
function yt(e, t) {
  const n = I(e), o = I(t);
  return n.getTime() > o.getTime();
}
function sn(e, t) {
  const n = I(e), o = I(t);
  return +n < +o;
}
function xt(e, t) {
  const n = I(e), o = I(t);
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function r_(e, t) {
  const n = I(e), o = I(t);
  return n.getFullYear() === o.getFullYear();
}
function ut(e, t) {
  return _e(e, -t);
}
function _t(e, t) {
  const n = I(e), o = n.getFullYear(), r = n.getDate(), s = Se(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const a = e_(s);
  return n.setMonth(t, Math.min(r, a)), n;
}
function Ft(e, t) {
  const n = I(e);
  return isNaN(+n) ? Se(e, NaN) : (n.setFullYear(t), n);
}
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, L.apply(this, arguments);
};
function s_(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function an(e, t, n) {
  for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Je(e) {
  return e.mode === "multiple";
}
function et(e) {
  return e.mode === "range";
}
function it(e) {
  return e.mode === "single";
}
var a_ = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function l_(e, t) {
  return Me(e, "LLLL y", t);
}
function i_(e, t) {
  return Me(e, "d", t);
}
function c_(e, t) {
  return Me(e, "LLLL", t);
}
function d_(e) {
  return "".concat(e);
}
function u_(e, t) {
  return Me(e, "cccccc", t);
}
function __(e, t) {
  return Me(e, "yyyy", t);
}
var m_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: l_,
  formatDay: i_,
  formatMonthCaption: c_,
  formatWeekNumber: d_,
  formatWeekdayName: u_,
  formatYearCaption: __
}), f_ = function(e, t, n) {
  return Me(e, "do MMMM (EEEE)", n);
}, p_ = function() {
  return "Month: ";
}, g_ = function() {
  return "Go to next month";
}, h_ = function() {
  return "Go to previous month";
}, y_ = function(e, t) {
  return Me(e, "cccc", t);
}, v_ = function(e) {
  return "Week n. ".concat(e);
}, b_ = function() {
  return "Year: ";
}, w_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: f_,
  labelMonthDropdown: p_,
  labelNext: g_,
  labelPrevious: h_,
  labelWeekNumber: v_,
  labelWeekday: y_,
  labelYearDropdown: b_
});
function S_() {
  var e = "buttons", t = a_, n = en, o = {}, r = {}, s = 1, a = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: m_,
    labels: w_,
    locale: n,
    modifiersClassNames: o,
    modifiers: r,
    numberOfMonths: s,
    styles: a,
    today: i,
    mode: "default"
  };
}
function x_(e) {
  var t = e.fromYear, n = e.toYear, o = e.fromMonth, r = e.toMonth, s = e.fromDate, a = e.toDate;
  return o ? s = ye(o) : t && (s = new Date(t, 0, 1)), r ? a = wt(r) : n && (a = new Date(n, 11, 31)), {
    fromDate: s ? Ae(s) : void 0,
    toDate: a ? Ae(a) : void 0
  };
}
var ln = We(void 0);
function M_(e) {
  var t, n = e.initialProps, o = S_(), r = x_(n), s = r.fromDate, a = r.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : o.captionLayout;
  i !== "buttons" && (!s || !a) && (i = "buttons");
  var c;
  (it(n) || Je(n) || et(n)) && (c = n.onSelect);
  var u = L(L(L({}, o), n), { captionLayout: i, classNames: L(L({}, o.classNames), n.classNames), components: L({}, n.components), formatters: L(L({}, o.formatters), n.formatters), fromDate: s, labels: L(L({}, o.labels), n.labels), mode: n.mode || o.mode, modifiers: L(L({}, o.modifiers), n.modifiers), modifiersClassNames: L(L({}, o.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: L(L({}, o.styles), n.styles), toDate: a });
  return l(ln.Provider, { value: u, children: e.children });
}
function H() {
  var e = Te(ln);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function cn(e) {
  var t = H(), n = t.locale, o = t.classNames, r = t.styles, s = t.formatters.formatCaption;
  return l("div", { className: o.caption_label, style: r.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: s(e.displayMonth, { locale: n }) });
}
function N_(e) {
  return l("svg", L({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function dn(e) {
  var t, n, o = e.onChange, r = e.value, s = e.children, a = e.caption, i = e.className, c = e.style, u = H(), _ = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : N_;
  return k("div", { className: i, style: c, children: [l("span", { className: u.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: r, onChange: o, children: s }), k("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [a, l(_, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function C_(e) {
  var t, n = H(), o = n.fromDate, r = n.toDate, s = n.styles, a = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, _ = n.labels.labelMonthDropdown;
  if (!o)
    return l(Be, {});
  if (!r)
    return l(Be, {});
  var m = [];
  if (r_(o, r))
    for (var f = ye(o), p = o.getMonth(); p <= r.getMonth(); p++)
      m.push(_t(f, p));
  else
    for (var f = ye(/* @__PURE__ */ new Date()), p = 0; p <= 11; p++)
      m.push(_t(f, p));
  var h = function(g) {
    var x = Number(g.target.value), N = _t(ye(e.displayMonth), x);
    e.onChange(N);
  }, b = (t = u?.Dropdown) !== null && t !== void 0 ? t : dn;
  return l(b, { name: "months", "aria-label": _(), className: c.dropdown_month, style: s.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: a }), children: m.map(function(g) {
    return l("option", { value: g.getMonth(), children: i(g, { locale: a }) }, g.getMonth());
  }) });
}
function P_(e) {
  var t, n = e.displayMonth, o = H(), r = o.fromDate, s = o.toDate, a = o.locale, i = o.styles, c = o.classNames, u = o.components, _ = o.formatters.formatYearCaption, m = o.labels.labelYearDropdown, f = [];
  if (!r)
    return l(Be, {});
  if (!s)
    return l(Be, {});
  for (var p = r.getFullYear(), h = s.getFullYear(), b = p; b <= h; b++)
    f.push(Ft(Ut(/* @__PURE__ */ new Date()), b));
  var g = function(N) {
    var O = Ft(ye(n), Number(N.target.value));
    e.onChange(O);
  }, x = (t = u?.Dropdown) !== null && t !== void 0 ? t : dn;
  return l(x, { name: "years", "aria-label": m(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: _(n, { locale: a }), children: f.map(function(N) {
    return l("option", { value: N.getFullYear(), children: _(N, { locale: a }) }, N.getFullYear());
  }) });
}
function k_(e, t) {
  var n = Y(e), o = n[0], r = n[1], s = t === void 0 ? o : t;
  return [s, r];
}
function D_(e) {
  var t = e.month, n = e.defaultMonth, o = e.today, r = t || n || o || /* @__PURE__ */ new Date(), s = e.toDate, a = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (s && Qe(s, r) < 0) {
    var u = -1 * (c - 1);
    r = Ne(s, u);
  }
  return a && Qe(r, a) < 0 && (r = a), ye(r);
}
function z_() {
  var e = H(), t = D_(e), n = k_(t, e.month), o = n[0], r = n[1], s = function(a) {
    var i;
    if (!e.disableNavigation) {
      var c = ye(a);
      r(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [o, s];
}
function L_(e, t) {
  for (var n = t.reverseMonths, o = t.numberOfMonths, r = ye(e), s = ye(Ne(r, o)), a = Qe(s, r), i = [], c = 0; c < a; c++) {
    var u = Ne(r, c);
    i.push(u);
  }
  return n && (i = i.reverse()), i;
}
function B_(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, o = t.pagedNavigation, r = t.numberOfMonths, s = r === void 0 ? 1 : r, a = o ? s : 1, i = ye(e);
    if (!n)
      return Ne(i, a);
    var c = Qe(n, e);
    if (!(c < s))
      return Ne(i, a);
  }
}
function X_(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, o = t.pagedNavigation, r = t.numberOfMonths, s = r === void 0 ? 1 : r, a = o ? s : 1, i = ye(e);
    if (!n)
      return Ne(i, -a);
    var c = Qe(i, n);
    if (!(c <= 0))
      return Ne(i, -a);
  }
}
var un = We(void 0);
function $_(e) {
  var t = H(), n = z_(), o = n[0], r = n[1], s = L_(o, t), a = B_(o, t), i = X_(o, t), c = function(m) {
    return s.some(function(f) {
      return xt(m, f);
    });
  }, u = function(m, f) {
    c(m) || (f && sn(m, f) ? r(Ne(m, 1 + t.numberOfMonths * -1)) : r(m));
  }, _ = {
    currentMonth: o,
    displayMonths: s,
    goToMonth: r,
    goToDate: u,
    previousMonth: i,
    nextMonth: a,
    isDateDisplayed: c
  };
  return l(un.Provider, { value: _, children: e.children });
}
function tt() {
  var e = Te(un);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Et(e) {
  var t, n = H(), o = n.classNames, r = n.styles, s = n.components, a = tt().goToMonth, i = function(_) {
    a(Ne(_, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = s?.CaptionLabel) !== null && t !== void 0 ? t : cn, u = l(c, { id: e.id, displayMonth: e.displayMonth });
  return k("div", { className: o.caption_dropdowns, style: r.caption_dropdowns, children: [l("div", { className: o.vhidden, children: u }), l(C_, { onChange: i, displayMonth: e.displayMonth }), l(P_, { onChange: i, displayMonth: e.displayMonth })] });
}
function I_(e) {
  return l("svg", L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function W_(e) {
  return l("svg", L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var st = G(function(e, t) {
  var n = H(), o = n.classNames, r = n.styles, s = [o.button_reset, o.button];
  e.className && s.push(e.className);
  var a = s.join(" "), i = L(L({}, r.button_reset), r.button);
  return e.style && Object.assign(i, e.style), l("button", L({}, e, { ref: t, type: "button", className: a, style: i }));
});
function T_(e) {
  var t, n, o = H(), r = o.dir, s = o.locale, a = o.classNames, i = o.styles, c = o.labels, u = c.labelPrevious, _ = c.labelNext, m = o.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(Be, {});
  var f = u(e.previousMonth, { locale: s }), p = [
    a.nav_button,
    a.nav_button_previous
  ].join(" "), h = _(e.nextMonth, { locale: s }), b = [
    a.nav_button,
    a.nav_button_next
  ].join(" "), g = (t = m?.IconRight) !== null && t !== void 0 ? t : W_, x = (n = m?.IconLeft) !== null && n !== void 0 ? n : I_;
  return k("div", { className: a.nav, style: i.nav, children: [!e.hidePrevious && l(st, { name: "previous-month", "aria-label": f, className: p, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: r === "rtl" ? l(g, { className: a.nav_icon, style: i.nav_icon }) : l(x, { className: a.nav_icon, style: i.nav_icon }) }), !e.hideNext && l(st, { name: "next-month", "aria-label": h, className: b, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: r === "rtl" ? l(x, { className: a.nav_icon, style: i.nav_icon }) : l(g, { className: a.nav_icon, style: i.nav_icon }) })] });
}
function Gt(e) {
  var t = H().numberOfMonths, n = tt(), o = n.previousMonth, r = n.nextMonth, s = n.goToMonth, a = n.displayMonths, i = a.findIndex(function(h) {
    return xt(e.displayMonth, h);
  }), c = i === 0, u = i === a.length - 1, _ = t > 1 && (c || !u), m = t > 1 && (u || !c), f = function() {
    o && s(o);
  }, p = function() {
    r && s(r);
  };
  return l(T_, { displayMonth: e.displayMonth, hideNext: _, hidePrevious: m, nextMonth: r, previousMonth: o, onPreviousClick: f, onNextClick: p });
}
function O_(e) {
  var t, n = H(), o = n.classNames, r = n.disableNavigation, s = n.styles, a = n.captionLayout, i = n.components, c = (t = i?.CaptionLabel) !== null && t !== void 0 ? t : cn, u;
  return r ? u = l(c, { id: e.id, displayMonth: e.displayMonth }) : a === "dropdown" ? u = l(Et, { displayMonth: e.displayMonth, id: e.id }) : a === "dropdown-buttons" ? u = k(Be, { children: [l(Et, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l(Gt, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = k(Be, { children: [l(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(Gt, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: o.caption, style: s.caption, children: u });
}
function F_(e) {
  var t = H(), n = t.footer, o = t.styles, r = t.classNames.tfoot;
  return n ? l("tfoot", { className: r, style: o.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: n }) }) }) : l(Be, {});
}
function E_(e, t, n) {
  for (var o = n ? Ee(/* @__PURE__ */ new Date()) : ke(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), r = [], s = 0; s < 7; s++) {
    var a = _e(o, s);
    r.push(a);
  }
  return r;
}
function G_() {
  var e = H(), t = e.classNames, n = e.styles, o = e.showWeekNumber, r = e.locale, s = e.weekStartsOn, a = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = E_(r, s, a);
  return k("tr", { style: n.head_row, className: t.head_row, children: [o && l("td", { style: n.head_cell, className: t.head_cell }), u.map(function(_, m) {
    return l("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(_, { locale: r }), children: i(_, { locale: r }) }, m);
  })] });
}
function R_() {
  var e, t = H(), n = t.classNames, o = t.styles, r = t.components, s = (e = r?.HeadRow) !== null && e !== void 0 ? e : G_;
  return l("thead", { style: o.head, className: n.head, children: l(s, {}) });
}
function A_(e) {
  var t = H(), n = t.locale, o = t.formatters.formatDay;
  return l(Be, { children: o(e.date, { locale: n }) });
}
var Mt = We(void 0);
function Y_(e) {
  if (!Je(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(Mt.Provider, { value: t, children: e.children });
  }
  return l(H_, { initialProps: e.initialProps, children: e.children });
}
function H_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, r = t.min, s = t.max, a = function(u, _, m) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, u, _, m);
    var h = !!(_.selected && r && o?.length === r);
    if (!h) {
      var b = !!(!_.selected && s && o?.length === s);
      if (!b) {
        var g = o ? an([], o) : [];
        if (_.selected) {
          var x = g.findIndex(function(N) {
            return he(u, N);
          });
          g.splice(x, 1);
        } else
          g.push(u);
        (p = t.onSelect) === null || p === void 0 || p.call(t, g, u, _, m);
      }
    }
  }, i = {
    disabled: []
  };
  o && i.disabled.push(function(u) {
    var _ = s && o.length > s - 1, m = o.some(function(f) {
      return he(f, u);
    });
    return !!(_ && !m);
  });
  var c = {
    selected: o,
    onDayClick: a,
    modifiers: i
  };
  return l(Mt.Provider, { value: c, children: n });
}
function Nt() {
  var e = Te(Mt);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function j_(e, t) {
  var n = t || {}, o = n.from, r = n.to;
  return o && r ? he(r, e) && he(o, e) ? void 0 : he(r, e) ? { from: r, to: void 0 } : he(o, e) ? void 0 : yt(o, e) ? { from: e, to: r } : { from: o, to: e } : r ? yt(e, r) ? { from: r, to: e } : { from: e, to: r } : o ? sn(e, o) ? { from: e, to: o } : { from: o, to: e } : { from: e, to: void 0 };
}
var Ct = We(void 0);
function q_(e) {
  if (!et(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(Ct.Provider, { value: t, children: e.children });
  }
  return l(V_, { initialProps: e.initialProps, children: e.children });
}
function V_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, r = o || {}, s = r.from, a = r.to, i = t.min, c = t.max, u = function(p, h, b) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, p, h, b);
    var N = j_(p, o);
    (x = t.onSelect) === null || x === void 0 || x.call(t, N, p, h, b);
  }, _ = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (s ? (_.range_start = [s], a ? (_.range_end = [a], he(s, a) || (_.range_middle = [
    {
      after: s,
      before: a
    }
  ])) : _.range_end = [s]) : a && (_.range_start = [a], _.range_end = [a]), i && (s && !a && _.disabled.push({
    after: ut(s, i - 1),
    before: _e(s, i - 1)
  }), s && a && _.disabled.push({
    after: s,
    before: _e(s, i - 1)
  }), !s && a && _.disabled.push({
    after: ut(a, i - 1),
    before: _e(a, i - 1)
  })), c) {
    if (s && !a && (_.disabled.push({
      before: _e(s, -c + 1)
    }), _.disabled.push({
      after: _e(s, c - 1)
    })), s && a) {
      var m = Pe(a, s) + 1, f = c - m;
      _.disabled.push({
        before: ut(s, f)
      }), _.disabled.push({
        after: _e(a, f)
      });
    }
    !s && a && (_.disabled.push({
      before: _e(a, -c + 1)
    }), _.disabled.push({
      after: _e(a, c - 1)
    }));
  }
  return l(Ct.Provider, { value: { selected: o, onDayClick: u, modifiers: _ }, children: n });
}
function Pt() {
  var e = Te(Ct);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function nt(e) {
  return Array.isArray(e) ? an([], e) : e !== void 0 ? [e] : [];
}
function Z_(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var o = n[0], r = n[1];
    t[o] = nt(r);
  }), t;
}
var Ce;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Ce || (Ce = {}));
var K_ = Ce.Selected, Le = Ce.Disabled, Q_ = Ce.Hidden, U_ = Ce.Today, mt = Ce.RangeEnd, ft = Ce.RangeMiddle, pt = Ce.RangeStart, J_ = Ce.Outside;
function em(e, t, n) {
  var o, r = (o = {}, o[K_] = nt(e.selected), o[Le] = nt(e.disabled), o[Q_] = nt(e.hidden), o[U_] = [e.today], o[mt] = [], o[ft] = [], o[pt] = [], o[J_] = [], o);
  return e.fromDate && r[Le].push({ before: e.fromDate }), e.toDate && r[Le].push({ after: e.toDate }), Je(e) ? r[Le] = r[Le].concat(t.modifiers[Le]) : et(e) && (r[Le] = r[Le].concat(n.modifiers[Le]), r[pt] = n.modifiers[pt], r[ft] = n.modifiers[ft], r[mt] = n.modifiers[mt]), r;
}
var _n = We(void 0);
function tm(e) {
  var t = H(), n = Nt(), o = Pt(), r = em(t, n, o), s = Z_(t.modifiers), a = L(L({}, r), s);
  return l(_n.Provider, { value: a, children: e.children });
}
function mn() {
  var e = Te(_n);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function nm(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function om(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function rm(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function sm(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function am(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function lm(e, t) {
  var n, o = t.from, r = t.to;
  if (o && r) {
    var s = Pe(r, o) < 0;
    s && (n = [r, o], o = n[0], r = n[1]);
    var a = Pe(e, o) >= 0 && Pe(r, e) >= 0;
    return a;
  }
  return r ? he(r, e) : o ? he(o, e) : !1;
}
function im(e) {
  return bt(e);
}
function cm(e) {
  return Array.isArray(e) && e.every(bt);
}
function dm(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (im(n))
      return he(e, n);
    if (cm(n))
      return n.includes(e);
    if (om(n))
      return lm(e, n);
    if (am(n))
      return n.dayOfWeek.includes(e.getDay());
    if (nm(n)) {
      var o = Pe(n.before, e), r = Pe(n.after, e), s = o > 0, a = r < 0, i = yt(n.before, n.after);
      return i ? a && s : s || a;
    }
    return rm(n) ? Pe(e, n.after) > 0 : sm(n) ? Pe(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function kt(e, t, n) {
  var o = Object.keys(t).reduce(function(s, a) {
    var i = t[a];
    return dm(e, i) && s.push(a), s;
  }, []), r = {};
  return o.forEach(function(s) {
    return r[s] = !0;
  }), n && !xt(e, n) && (r.outside = !0), r;
}
function um(e, t) {
  for (var n = ye(e[0]), o = wt(e[e.length - 1]), r, s, a = n; a <= o; ) {
    var i = kt(a, t), c = !i.disabled && !i.hidden;
    if (!c) {
      a = _e(a, 1);
      continue;
    }
    if (i.selected)
      return a;
    i.today && !s && (s = a), r || (r = a), a = _e(a, 1);
  }
  return s || r;
}
var _m = 365;
function fn(e, t) {
  var n = t.moveBy, o = t.direction, r = t.context, s = t.modifiers, a = t.retry, i = a === void 0 ? { count: 0, lastFocused: e } : a, c = r.weekStartsOn, u = r.fromDate, _ = r.toDate, m = r.locale, f = {
    day: _e,
    week: ht,
    month: Ne,
    year: tu,
    startOfWeek: function(g) {
      return r.ISOWeek ? Ee(g) : ke(g, { locale: m, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return r.ISOWeek ? Jt(g) : St(g, { locale: m, weekStartsOn: c });
    }
  }, p = f[n](e, o === "after" ? 1 : -1);
  o === "before" && u ? p = nu([u, p]) : o === "after" && _ && (p = ou([_, p]));
  var h = !0;
  if (s) {
    var b = kt(p, s);
    h = !b.disabled && !b.hidden;
  }
  return h ? p : i.count > _m ? i.lastFocused : fn(p, {
    moveBy: n,
    direction: o,
    context: r,
    modifiers: s,
    retry: L(L({}, i), { count: i.count + 1 })
  });
}
var pn = We(void 0);
function mm(e) {
  var t = tt(), n = mn(), o = Y(), r = o[0], s = o[1], a = Y(), i = a[0], c = a[1], u = um(t.displayMonths, n), _ = r ?? (i && t.isDateDisplayed(i)) ? i : u, m = function() {
    c(r), s(void 0);
  }, f = function(g) {
    s(g);
  }, p = H(), h = function(g, x) {
    if (r) {
      var N = fn(r, {
        moveBy: g,
        direction: x,
        context: p,
        modifiers: n
      });
      he(r, N) || (t.goToDate(N, r), f(N));
    }
  }, b = {
    focusedDay: r,
    focusTarget: _,
    blur: m,
    focus: f,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return l(pn.Provider, { value: b, children: e.children });
}
function Dt() {
  var e = Te(pn);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function fm(e, t) {
  var n = mn(), o = kt(e, n, t);
  return o;
}
var zt = We(void 0);
function pm(e) {
  if (!it(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l(zt.Provider, { value: t, children: e.children });
  }
  return l(gm, { initialProps: e.initialProps, children: e.children });
}
function gm(e) {
  var t = e.initialProps, n = e.children, o = function(s, a, i) {
    var c, u, _;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, s, a, i), a.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, s, a, i);
      return;
    }
    (_ = t.onSelect) === null || _ === void 0 || _.call(t, s, s, a, i);
  }, r = {
    selected: t.selected,
    onDayClick: o
  };
  return l(zt.Provider, { value: r, children: n });
}
function gn() {
  var e = Te(zt);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function hm(e, t) {
  var n = H(), o = gn(), r = Nt(), s = Pt(), a = Dt(), i = a.focusDayAfter, c = a.focusDayBefore, u = a.focusWeekAfter, _ = a.focusWeekBefore, m = a.blur, f = a.focus, p = a.focusMonthBefore, h = a.focusMonthAfter, b = a.focusYearBefore, g = a.focusYearAfter, x = a.focusStartOfWeek, N = a.focusEndOfWeek, O = function(S) {
    var M, xe, De, D;
    it(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, S) : Je(n) ? (xe = r.onDayClick) === null || xe === void 0 || xe.call(r, e, t, S) : et(n) ? (De = s.onDayClick) === null || De === void 0 || De.call(s, e, t, S) : (D = n.onDayClick) === null || D === void 0 || D.call(n, e, t, S);
  }, W = function(S) {
    var M;
    f(e), (M = n.onDayFocus) === null || M === void 0 || M.call(n, e, t, S);
  }, d = function(S) {
    var M;
    m(), (M = n.onDayBlur) === null || M === void 0 || M.call(n, e, t, S);
  }, v = function(S) {
    var M;
    (M = n.onDayMouseEnter) === null || M === void 0 || M.call(n, e, t, S);
  }, w = function(S) {
    var M;
    (M = n.onDayMouseLeave) === null || M === void 0 || M.call(n, e, t, S);
  }, V = function(S) {
    var M;
    (M = n.onDayPointerEnter) === null || M === void 0 || M.call(n, e, t, S);
  }, re = function(S) {
    var M;
    (M = n.onDayPointerLeave) === null || M === void 0 || M.call(n, e, t, S);
  }, J = function(S) {
    var M;
    (M = n.onDayTouchCancel) === null || M === void 0 || M.call(n, e, t, S);
  }, se = function(S) {
    var M;
    (M = n.onDayTouchEnd) === null || M === void 0 || M.call(n, e, t, S);
  }, fe = function(S) {
    var M;
    (M = n.onDayTouchMove) === null || M === void 0 || M.call(n, e, t, S);
  }, ce = function(S) {
    var M;
    (M = n.onDayTouchStart) === null || M === void 0 || M.call(n, e, t, S);
  }, de = function(S) {
    var M;
    (M = n.onDayKeyUp) === null || M === void 0 || M.call(n, e, t, S);
  }, R = function(S) {
    var M;
    switch (S.key) {
      case "ArrowLeft":
        S.preventDefault(), S.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        S.preventDefault(), S.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        S.preventDefault(), S.stopPropagation(), u();
        break;
      case "ArrowUp":
        S.preventDefault(), S.stopPropagation(), _();
        break;
      case "PageUp":
        S.preventDefault(), S.stopPropagation(), S.shiftKey ? b() : p();
        break;
      case "PageDown":
        S.preventDefault(), S.stopPropagation(), S.shiftKey ? g() : h();
        break;
      case "Home":
        S.preventDefault(), S.stopPropagation(), x();
        break;
      case "End":
        S.preventDefault(), S.stopPropagation(), N();
        break;
    }
    (M = n.onDayKeyDown) === null || M === void 0 || M.call(n, e, t, S);
  }, Z = {
    onClick: O,
    onFocus: W,
    onBlur: d,
    onKeyDown: R,
    onKeyUp: de,
    onMouseEnter: v,
    onMouseLeave: w,
    onPointerEnter: V,
    onPointerLeave: re,
    onTouchCancel: J,
    onTouchEnd: se,
    onTouchMove: fe,
    onTouchStart: ce
  };
  return Z;
}
function ym() {
  var e = H(), t = gn(), n = Nt(), o = Pt(), r = it(e) ? t.selected : Je(e) ? n.selected : et(e) ? o.selected : void 0;
  return r;
}
function vm(e) {
  return Object.values(Ce).includes(e);
}
function bm(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(o) {
    var r = e.modifiersClassNames[o];
    if (r)
      n.push(r);
    else if (vm(o)) {
      var s = e.classNames["day_".concat(o)];
      s && n.push(s);
    }
  }), n;
}
function wm(e, t) {
  var n = L({}, e.styles.day);
  return Object.keys(t).forEach(function(o) {
    var r;
    n = L(L({}, n), (r = e.modifiersStyles) === null || r === void 0 ? void 0 : r[o]);
  }), n;
}
function Sm(e, t, n) {
  var o, r, s, a = H(), i = Dt(), c = fm(e, t), u = hm(e, c), _ = ym(), m = !!(a.onDayClick || a.mode !== "default");
  q(function() {
    var v;
    c.outside || i.focusedDay && m && he(i.focusedDay, e) && ((v = n.current) === null || v === void 0 || v.focus());
  }, [
    i.focusedDay,
    e,
    n,
    m,
    c.outside
  ]);
  var f = bm(a, c).join(" "), p = wm(a, c), h = !!(c.outside && !a.showOutsideDays || c.hidden), b = (s = (r = a.components) === null || r === void 0 ? void 0 : r.DayContent) !== null && s !== void 0 ? s : A_, g = l(b, { date: e, displayMonth: t, activeModifiers: c }), x = {
    style: p,
    className: f,
    children: g,
    role: "gridcell"
  }, N = i.focusTarget && he(i.focusTarget, e) && !c.outside, O = i.focusedDay && he(i.focusedDay, e), W = L(L(L({}, x), (o = { disabled: c.disabled, role: "gridcell" }, o["aria-selected"] = c.selected, o.tabIndex = O || N ? 0 : -1, o)), u), d = {
    isButton: m,
    isHidden: h,
    activeModifiers: c,
    selectedDays: _,
    buttonProps: W,
    divProps: x
  };
  return d;
}
function xm(e) {
  var t = we(null), n = Sm(e.date, e.displayMonth, t);
  return n.isHidden ? l("div", { role: "gridcell" }) : n.isButton ? l(st, L({ name: "day", ref: t }, n.buttonProps)) : l("div", L({}, n.divProps));
}
function Mm(e) {
  var t = e.number, n = e.dates, o = H(), r = o.onWeekNumberClick, s = o.styles, a = o.classNames, i = o.locale, c = o.labels.labelWeekNumber, u = o.formatters.formatWeekNumber, _ = u(Number(t), { locale: i });
  if (!r)
    return l("span", { className: a.weeknumber, style: s.weeknumber, children: _ });
  var m = c(Number(t), { locale: i }), f = function(p) {
    r(t, n, p);
  };
  return l(st, { name: "week-number", "aria-label": m, className: a.weeknumber, style: s.weeknumber, onClick: f, children: _ });
}
function Nm(e) {
  var t, n, o = H(), r = o.styles, s = o.classNames, a = o.showWeekNumber, i = o.components, c = (t = i?.Day) !== null && t !== void 0 ? t : xm, u = (n = i?.WeekNumber) !== null && n !== void 0 ? n : Mm, _;
  return a && (_ = l("td", { className: s.cell, style: r.cell, children: l(u, { number: e.weekNumber, dates: e.dates }) })), k("tr", { className: s.row, style: r.row, children: [_, e.dates.map(function(m) {
    return l("td", { className: s.cell, style: r.cell, role: "presentation", children: l(c, { displayMonth: e.displayMonth, date: m }) }, t_(m));
  })] });
}
function Rt(e, t, n) {
  for (var o = n?.ISOWeek ? Jt(t) : St(t, n), r = n?.ISOWeek ? Ee(e) : ke(e, n), s = Pe(o, r), a = [], i = 0; i <= s; i++)
    a.push(_e(r, i));
  var c = a.reduce(function(u, _) {
    var m = n?.ISOWeek ? tn(_) : on(_, n), f = u.find(function(p) {
      return p.weekNumber === m;
    });
    return f ? (f.dates.push(_), u) : (u.push({
      weekNumber: m,
      dates: [_]
    }), u);
  }, []);
  return c;
}
function Cm(e, t) {
  var n = Rt(ye(e), wt(e), t);
  if (t?.useFixedWeeks) {
    var o = o_(e, t);
    if (o < 6) {
      var r = n[n.length - 1], s = r.dates[r.dates.length - 1], a = ht(s, 6 - o), i = Rt(ht(s, 1), a, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Pm(e) {
  var t, n, o, r = H(), s = r.locale, a = r.classNames, i = r.styles, c = r.hideHead, u = r.fixedWeeks, _ = r.components, m = r.weekStartsOn, f = r.firstWeekContainsDate, p = r.ISOWeek, h = Cm(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: p,
    locale: s,
    weekStartsOn: m,
    firstWeekContainsDate: f
  }), b = (t = _?.Head) !== null && t !== void 0 ? t : R_, g = (n = _?.Row) !== null && n !== void 0 ? n : Nm, x = (o = _?.Footer) !== null && o !== void 0 ? o : F_;
  return k("table", { id: e.id, className: a.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l(b, {}), l("tbody", { className: a.tbody, style: i.tbody, children: h.map(function(N) {
    return l(g, { displayMonth: e.displayMonth, dates: N.dates, weekNumber: N.weekNumber }, N.weekNumber);
  }) }), l(x, { displayMonth: e.displayMonth })] });
}
function km() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Dm = km() ? Sn : q, gt = !1, zm = 0;
function At() {
  return "react-day-picker-".concat(++zm);
}
function Lm(e) {
  var t, n = e ?? (gt ? At() : null), o = Y(n), r = o[0], s = o[1];
  return Dm(function() {
    r === null && s(At());
  }, []), q(function() {
    gt === !1 && (gt = !0);
  }, []), (t = e ?? r) !== null && t !== void 0 ? t : void 0;
}
function Bm(e) {
  var t, n, o = H(), r = o.dir, s = o.classNames, a = o.styles, i = o.components, c = tt().displayMonths, u = Lm(o.id ? "".concat(o.id, "-").concat(e.displayIndex) : void 0), _ = o.id ? "".concat(o.id, "-grid-").concat(e.displayIndex) : void 0, m = [s.month], f = a.month, p = e.displayIndex === 0, h = e.displayIndex === c.length - 1, b = !p && !h;
  r === "rtl" && (t = [p, h], h = t[0], p = t[1]), p && (m.push(s.caption_start), f = L(L({}, f), a.caption_start)), h && (m.push(s.caption_end), f = L(L({}, f), a.caption_end)), b && (m.push(s.caption_between), f = L(L({}, f), a.caption_between));
  var g = (n = i?.Caption) !== null && n !== void 0 ? n : O_;
  return k("div", { className: m.join(" "), style: f, children: [l(g, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(Pm, { id: _, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Xm(e) {
  var t = H(), n = t.classNames, o = t.styles;
  return l("div", { className: n.months, style: o.months, children: e.children });
}
function $m(e) {
  var t, n, o = e.initialProps, r = H(), s = Dt(), a = tt(), i = Y(!1), c = i[0], u = i[1];
  q(function() {
    r.initialFocus && s.focusTarget && (c || (s.focus(s.focusTarget), u(!0)));
  }, [
    r.initialFocus,
    c,
    s.focus,
    s.focusTarget,
    s
  ]);
  var _ = [r.classNames.root, r.className];
  r.numberOfMonths > 1 && _.push(r.classNames.multiple_months), r.showWeekNumber && _.push(r.classNames.with_weeknumber);
  var m = L(L({}, r.styles.root), r.style), f = Object.keys(o).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, b) {
    var g;
    return L(L({}, h), (g = {}, g[b] = o[b], g));
  }, {}), p = (n = (t = o.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Xm;
  return l("div", L({ className: _.join(" "), style: m, dir: r.dir, id: r.id, nonce: o.nonce, title: o.title, lang: o.lang }, f, { children: l(p, { children: a.displayMonths.map(function(h, b) {
    return l(Bm, { displayIndex: b, displayMonth: h }, b);
  }) }) }));
}
function Im(e) {
  var t = e.children, n = s_(e, ["children"]);
  return l(M_, { initialProps: n, children: l($_, { children: l(pm, { initialProps: n, children: l(Y_, { initialProps: n, children: l(q_, { initialProps: n, children: l(tm, { children: l(mm, { children: t }) }) }) }) }) }) });
}
function hn(e) {
  return l(Im, L({}, e, { children: l($m, { initialProps: e }) }));
}
const Wm = "DatePicker-module__container___lGTSn", Tm = "DatePicker-module__inputButton___ihMp8", Om = "DatePicker-module__placeholder___aDY-6", Fm = "DatePicker-module__valueText___y-AZd", Em = "DatePicker-module__error___g-hwX", Gm = "DatePicker-module__sizeXs___mbkOI", Rm = "DatePicker-module__sizeSm___PoPZI", Am = "DatePicker-module__sizeMd___FHT7G", Ym = "DatePicker-module__sizeLg___d3KEF", Hm = "DatePicker-module__sizeXl___NPQSU", jm = "DatePicker-module__actions___l4jpC", qm = "DatePicker-module__clearButton___xECnw", Vm = "DatePicker-module__popover___cOD1p", Zm = "DatePicker-module__calendar___ICXhS", E = {
  container: Wm,
  inputButton: Tm,
  placeholder: Om,
  valueText: Fm,
  error: Em,
  sizeXs: Gm,
  sizeSm: Rm,
  sizeMd: Am,
  sizeLg: Ym,
  sizeXl: Hm,
  actions: jm,
  clearButton: qm,
  popover: Vm,
  calendar: Zm
}, Km = {
  xs: E.sizeXs,
  sm: E.sizeSm,
  md: E.sizeMd,
  lg: E.sizeLg,
  xl: E.sizeXl
}, Qm = G(
  ({ label: e, description: t, error: n, required: o = !1, size: r = "md", disabled: s = !1, value: a, defaultValue: i, placeholder: c = "Pick a date...", dateFormat: u = "PPP", clearable: _ = !1, minDate: m, maxDate: f, onChange: p, className: h, style: b, id: g, ...x }, N) => {
    const O = a !== void 0, [W, d] = Y((O ? a : i) ?? null), [v, w] = Y(!1), [V, re] = Y({ top: 0, left: 0 }), J = we(null), se = we(null), fe = Ye(), ce = g || fe;
    q(() => {
      O && d(a ?? null);
    }, [a, O]);
    const de = () => {
      if (!J.current) return;
      const D = J.current.getBoundingClientRect(), A = 350, pe = window.innerHeight - D.bottom;
      let ve = D.bottom + 6;
      pe < A && D.top > A && (ve = Math.max(8, D.top - A - 6));
      let ze = D.left;
      const C = 320;
      ze + C > window.innerWidth - 16 && (ze = Math.max(16, window.innerWidth - C - 16)), re({ top: ve, left: ze });
    };
    q(() => {
      if (!v) return;
      de();
      const D = () => de(), A = () => de();
      return window.addEventListener("scroll", D, !0), window.addEventListener("resize", A), () => {
        window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", A);
      };
    }, [v]), q(() => {
      if (!v) return;
      const D = (pe) => {
        const ve = pe.target;
        J.current && !J.current.contains(ve) && se.current && !se.current.contains(ve) && w(!1);
      }, A = (pe) => {
        pe.key === "Escape" && w(!1);
      };
      return document.addEventListener("mousedown", D), document.addEventListener("keydown", A), () => {
        document.removeEventListener("mousedown", D), document.removeEventListener("keydown", A);
      };
    }, [v]);
    const R = (D) => {
      const A = D ?? null;
      O || d(A), p?.(A), w(!1);
    }, Z = (D) => {
      D.stopPropagation(), O || d(null), p?.(null);
    }, S = W && rt(W) ? Me(W, u) : null, M = !!n, xe = X(E.inputButton, Km[r], { [E.error]: M }), De = v && typeof document < "u" ? at(
      /* @__PURE__ */ l(
        "div",
        {
          ref: se,
          className: E.popover,
          style: {
            top: `${V.top}px`,
            left: `${V.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ l(
            hn,
            {
              mode: "single",
              selected: W ?? void 0,
              onSelect: R,
              fromDate: m,
              toDate: f,
              className: E.calendar
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(He, { label: e, description: t, error: n, required: o, size: r, disabled: s, className: h, style: b, children: /* @__PURE__ */ k("div", { className: E.container, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (D) => {
            J.current = D, typeof N == "function" ? N(D) : N && (N.current = D);
          },
          id: ce,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": v,
          "aria-invalid": M,
          disabled: s,
          className: xe,
          onClick: () => !s && w((D) => !D),
          ...x,
          children: [
            /* @__PURE__ */ l("span", { className: S ? E.valueText : E.placeholder, children: S || c }),
            /* @__PURE__ */ k("div", { className: E.actions, children: [
              _ && W && !s && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear date", className: E.clearButton, onClick: Z, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ k("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ l("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                /* @__PURE__ */ l("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                /* @__PURE__ */ l("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
              ] })
            ] })
          ]
        }
      ),
      De
    ] }) });
  }
);
Qm.displayName = "DatePicker";
const Um = {
  xs: E.sizeXs,
  sm: E.sizeSm,
  md: E.sizeMd,
  lg: E.sizeLg,
  xl: E.sizeXl
}, Jm = G(
  ({ label: e, description: t, error: n, required: o = !1, size: r = "md", disabled: s = !1, value: a, defaultValue: i, placeholder: c = "Pick a date range...", dateFormat: u = "PP", clearable: _ = !1, minDate: m, maxDate: f, onChange: p, className: h, style: b, id: g, ...x }, N) => {
    const O = a !== void 0, [W, d] = Y((O ? a : i) ?? null), [v, w] = Y(!1), [V, re] = Y({ top: 0, left: 0 }), J = we(null), se = we(null), fe = Ye(), ce = g || fe;
    q(() => {
      O && d(a ?? null);
    }, [a, O]);
    const de = () => {
      if (!J.current) return;
      const D = J.current.getBoundingClientRect(), A = 350, pe = window.innerHeight - D.bottom;
      let ve = D.bottom + 6;
      pe < A && D.top > A && (ve = Math.max(8, D.top - A - 6));
      let ze = D.left;
      const C = 320;
      ze + C > window.innerWidth - 16 && (ze = Math.max(16, window.innerWidth - C - 16)), re({ top: ve, left: ze });
    };
    q(() => {
      if (!v) return;
      de();
      const D = () => de(), A = () => de();
      return window.addEventListener("scroll", D, !0), window.addEventListener("resize", A), () => {
        window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", A);
      };
    }, [v]), q(() => {
      if (!v) return;
      const D = (pe) => {
        const ve = pe.target;
        J.current && !J.current.contains(ve) && se.current && !se.current.contains(ve) && w(!1);
      }, A = (pe) => {
        pe.key === "Escape" && w(!1);
      };
      return document.addEventListener("mousedown", D), document.addEventListener("keydown", A), () => {
        document.removeEventListener("mousedown", D), document.removeEventListener("keydown", A);
      };
    }, [v]);
    const R = (D) => {
      const A = D ?? null;
      O || d(A), p?.(A), D?.from && D?.to && w(!1);
    }, Z = (D) => {
      D.stopPropagation(), O || d(null), p?.(null);
    };
    let S = null;
    W?.from && rt(W.from) && (W.to && rt(W.to) ? S = Me(W.from, u) + " – " + Me(W.to, u) : S = Me(W.from, u) + " – ...");
    const M = !!n, xe = X(E.inputButton, Um[r], { [E.error]: M }), De = v && typeof document < "u" ? at(
      /* @__PURE__ */ l(
        "div",
        {
          ref: se,
          className: E.popover,
          style: {
            top: `${V.top}px`,
            left: `${V.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ l(
            hn,
            {
              mode: "range",
              selected: W ?? void 0,
              onSelect: R,
              fromDate: m,
              toDate: f,
              className: E.calendar
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(He, { label: e, description: t, error: n, required: o, size: r, disabled: s, className: h, style: b, children: /* @__PURE__ */ k("div", { className: E.container, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (D) => {
            J.current = D, typeof N == "function" ? N(D) : N && (N.current = D);
          },
          id: ce,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": v,
          "aria-invalid": M,
          disabled: s,
          className: xe,
          onClick: () => !s && w((D) => !D),
          ...x,
          children: [
            /* @__PURE__ */ l("span", { className: S ? E.valueText : E.placeholder, children: S || c }),
            /* @__PURE__ */ k("div", { className: E.actions, children: [
              _ && W && !s && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear date range", className: E.clearButton, onClick: Z, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ k("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ l("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                /* @__PURE__ */ l("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                /* @__PURE__ */ l("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
              ] })
            ] })
          ]
        }
      ),
      De
    ] }) });
  }
);
Jm.displayName = "DateRangePicker";
const ef = "Avatar-module__avatar___3xMuZ", tf = "Avatar-module__image___ieqGp", nf = "Avatar-module__sizeXs___DS3Nc", of = "Avatar-module__sizeSm___Rs-fa", rf = "Avatar-module__sizeMd___aaN4-", sf = "Avatar-module__sizeLg___LuK6q", af = "Avatar-module__sizeXl___dOgJy", lf = "Avatar-module__radiusNone___rZMLD", cf = "Avatar-module__radiusXs___NiCr5", df = "Avatar-module__radiusSm___D7afd", uf = "Avatar-module__radiusMd___7fH4d", _f = "Avatar-module__radiusLg___LuhdA", mf = "Avatar-module__radiusXl___qPYXZ", ff = "Avatar-module__radiusFull___YY2-y", pf = "Avatar-module__colorNeutral___9d6qx", gf = "Avatar-module__colorPrimary___OBV13", hf = "Avatar-module__colorSecondary___7sWFz", yf = "Avatar-module__colorSuccess___Ri-bv", vf = "Avatar-module__colorWarning___dxPCc", bf = "Avatar-module__colorDanger___VO-Tk", wf = "Avatar-module__colorInfo___cCQHc", Sf = "Avatar-module__fallbackIcon___-2iNj", U = {
  avatar: ef,
  image: tf,
  sizeXs: nf,
  sizeSm: of,
  sizeMd: rf,
  sizeLg: sf,
  sizeXl: af,
  radiusNone: lf,
  radiusXs: cf,
  radiusSm: df,
  radiusMd: uf,
  radiusLg: _f,
  radiusXl: mf,
  radiusFull: ff,
  colorNeutral: pf,
  colorPrimary: gf,
  colorSecondary: hf,
  colorSuccess: yf,
  colorWarning: vf,
  colorDanger: bf,
  colorInfo: wf,
  fallbackIcon: Sf
}, xf = {
  xs: U.sizeXs,
  sm: U.sizeSm,
  md: U.sizeMd,
  lg: U.sizeLg,
  xl: U.sizeXl
}, Mf = {
  none: U.radiusNone,
  xs: U.radiusXs,
  sm: U.radiusSm,
  md: U.radiusMd,
  lg: U.radiusLg,
  xl: U.radiusXl,
  full: U.radiusFull
}, Nf = {
  primary: U.colorPrimary,
  secondary: U.colorSecondary,
  neutral: U.colorNeutral,
  success: U.colorSuccess,
  warning: U.colorWarning,
  danger: U.colorDanger,
  info: U.colorInfo
}, Yt = ["primary", "secondary", "success", "warning", "info"];
function Cf(e) {
  const t = e.trim().split(/\s+/);
  return t.length === 0 || !t[0] ? "" : t.length === 1 ? t[0].slice(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
function Pf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return Yt[Math.abs(t) % Yt.length];
}
const kf = G(
  ({ src: e, name: t, alt: n = "avatar", size: o = "md", radius: r = "full", color: s = "neutral", className: a, style: i, ...c }, u) => {
    const [_, m] = Y(!1);
    q(() => {
      m(!1);
    }, [e]);
    const f = typeof o == "number", p = t ? Cf(t) : "", h = s === "auto" ? t ? Pf(t) : "neutral" : s, b = f ? { ...i, width: o + "px", height: o + "px", fontSize: Math.round(o * 0.35) + "px" } : i, g = X(U.avatar, !f && xf[o], Mf[r], Nf[h], a);
    return /* @__PURE__ */ l("div", { ref: u, className: g, style: b, "aria-label": t || n, ...c, children: e && !_ ? /* @__PURE__ */ l("img", { src: e, alt: n, onError: () => m(!0), className: U.image }) : p ? /* @__PURE__ */ l("span", { children: p }) : /* @__PURE__ */ l("svg", { className: U.fallbackIcon, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ l("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) });
  }
);
kf.displayName = "Avatar";
const Df = "Image-module__container___sVJdZ", zf = "Image-module__image___Zq9Zs", Lf = "Image-module__fitCover___85oUS", Bf = "Image-module__fitContain___aoZal", Xf = "Image-module__fitFill___q0kKf", $f = "Image-module__fitScaleDown___UBGEP", If = "Image-module__fitNone___E1Sej", Wf = "Image-module__radiusNone___JCxuJ", Tf = "Image-module__radiusXs___-q1Ht", Of = "Image-module__radiusSm___zF1VV", Ff = "Image-module__radiusMd___Zcdvc", Ef = "Image-module__radiusLg___2a5Zq", Gf = "Image-module__radiusXl___puXh6", Rf = "Image-module__radiusFull___bi-9W", Af = "Image-module__fallbackWrapper___TCom9", me = {
  container: Df,
  image: zf,
  fitCover: Lf,
  fitContain: Bf,
  fitFill: Xf,
  fitScaleDown: $f,
  fitNone: If,
  radiusNone: Wf,
  radiusXs: Tf,
  radiusSm: Of,
  radiusMd: Ff,
  radiusLg: Ef,
  radiusXl: Gf,
  radiusFull: Rf,
  fallbackWrapper: Af
}, Yf = {
  cover: me.fitCover,
  contain: me.fitContain,
  fill: me.fitFill,
  "scale-down": me.fitScaleDown,
  none: me.fitNone
}, Ht = {
  none: me.radiusNone,
  xs: me.radiusXs,
  sm: me.radiusSm,
  md: me.radiusMd,
  lg: me.radiusLg,
  xl: me.radiusXl,
  full: me.radiusFull
}, Hf = G(
  ({ src: e, alt: t, fit: n = "cover", fallback: o, radius: r = "none", loading: s = "lazy", className: a, style: i, onError: c, width: u, height: _, ...m }, f) => {
    const [p, h] = Y(!1);
    q(() => {
      h(!1);
    }, [e]);
    const b = (N) => {
      h(!0), c?.(N);
    }, g = {
      ...i,
      width: u !== void 0 ? typeof u == "number" ? u + "px" : u : i?.width,
      height: _ !== void 0 ? typeof _ == "number" ? _ + "px" : _ : i?.height
    }, x = X(me.container, Ht[r], a);
    return p && o ? /* @__PURE__ */ l("div", { className: X(x, me.fallbackWrapper), style: g, children: o }) : /* @__PURE__ */ l("div", { className: x, style: g, children: /* @__PURE__ */ l("img", { ref: f, src: e, alt: t, loading: s, width: u, height: _, onError: b, className: X(me.image, Yf[n], Ht[r]), ...m }) });
  }
);
Hf.displayName = "Image";
const jf = "Badge-module__badge___RsuMz", qf = "Badge-module__sizeXs___rVinZ", Vf = "Badge-module__sizeSm___V492a", Zf = "Badge-module__sizeMd___oFPD6", Kf = "Badge-module__sizeLg___gM1DQ", Qf = "Badge-module__sizeXl___6qEZz", Uf = "Badge-module__radiusNone___42uvb", Jf = "Badge-module__radiusXs___62PO-", ep = "Badge-module__radiusSm___skDDe", tp = "Badge-module__radiusMd___Wf82t", np = "Badge-module__radiusLg___QCnke", op = "Badge-module__radiusXl___h8cmg", rp = "Badge-module__radiusFull___d1qq5", sp = "Badge-module__filledPrimary___xjrJ0", ap = "Badge-module__lightPrimary___-IkyU", lp = "Badge-module__outlinePrimary___r5I6Z", ip = "Badge-module__dotPrimary___PyawZ", cp = "Badge-module__filledSecondary___oa0eP", dp = "Badge-module__lightSecondary___AtTko", up = "Badge-module__outlineSecondary___iYBAn", _p = "Badge-module__dotSecondary___226sX", mp = "Badge-module__filledNeutral___VraIb", fp = "Badge-module__lightNeutral___GybdN", pp = "Badge-module__outlineNeutral___40N8w", gp = "Badge-module__dotNeutral___6vDtL", hp = "Badge-module__filledSuccess___vFfoV", yp = "Badge-module__lightSuccess___E2z6c", vp = "Badge-module__outlineSuccess___L0kK8", bp = "Badge-module__dotSuccess___qzpot", wp = "Badge-module__filledWarning___2TKjK", Sp = "Badge-module__lightWarning___7m1dm", xp = "Badge-module__outlineWarning___BMHGX", Mp = "Badge-module__dotWarning___Dts74", Np = "Badge-module__filledDanger___f2P2x", Cp = "Badge-module__lightDanger___BqsUP", Pp = "Badge-module__outlineDanger___H2rN2", kp = "Badge-module__dotDanger___LMrFA", Dp = "Badge-module__filledInfo___gtVyg", zp = "Badge-module__lightInfo___7jqyP", Lp = "Badge-module__outlineInfo___2pxvU", Bp = "Badge-module__dotInfo___JkUiX", Xp = "Badge-module__dotCircle___jcWQx", $p = "Badge-module__dotCirclePrimary___R5Kc7", Ip = "Badge-module__dotCircleSecondary___qHQ5A", Wp = "Badge-module__dotCircleNeutral___HTUeD", Tp = "Badge-module__dotCircleSuccess___j2gWH", Op = "Badge-module__dotCircleWarning___4RTfn", Fp = "Badge-module__dotCircleDanger___s0i9-", Ep = "Badge-module__dotCircleInfo___9CDd4", Gp = "Badge-module__leftSection___xCKGI", z = {
  badge: jf,
  sizeXs: qf,
  sizeSm: Vf,
  sizeMd: Zf,
  sizeLg: Kf,
  sizeXl: Qf,
  radiusNone: Uf,
  radiusXs: Jf,
  radiusSm: ep,
  radiusMd: tp,
  radiusLg: np,
  radiusXl: op,
  radiusFull: rp,
  filledPrimary: sp,
  lightPrimary: ap,
  outlinePrimary: lp,
  dotPrimary: ip,
  filledSecondary: cp,
  lightSecondary: dp,
  outlineSecondary: up,
  dotSecondary: _p,
  filledNeutral: mp,
  lightNeutral: fp,
  outlineNeutral: pp,
  dotNeutral: gp,
  filledSuccess: hp,
  lightSuccess: yp,
  outlineSuccess: vp,
  dotSuccess: bp,
  filledWarning: wp,
  lightWarning: Sp,
  outlineWarning: xp,
  dotWarning: Mp,
  filledDanger: Np,
  lightDanger: Cp,
  outlineDanger: Pp,
  dotDanger: kp,
  filledInfo: Dp,
  lightInfo: zp,
  outlineInfo: Lp,
  dotInfo: Bp,
  dotCircle: Xp,
  dotCirclePrimary: $p,
  dotCircleSecondary: Ip,
  dotCircleNeutral: Wp,
  dotCircleSuccess: Tp,
  dotCircleWarning: Op,
  dotCircleDanger: Fp,
  dotCircleInfo: Ep,
  leftSection: Gp
}, Rp = {
  xs: z.sizeXs,
  sm: z.sizeSm,
  md: z.sizeMd,
  lg: z.sizeLg,
  xl: z.sizeXl
}, Ap = {
  none: z.radiusNone,
  xs: z.radiusXs,
  sm: z.radiusSm,
  md: z.radiusMd,
  lg: z.radiusLg,
  xl: z.radiusXl,
  full: z.radiusFull
}, Yp = {
  "filled-primary": z.filledPrimary,
  "filled-secondary": z.filledSecondary,
  "filled-neutral": z.filledNeutral,
  "filled-success": z.filledSuccess,
  "filled-warning": z.filledWarning,
  "filled-danger": z.filledDanger,
  "filled-info": z.filledInfo,
  "light-primary": z.lightPrimary,
  "light-secondary": z.lightSecondary,
  "light-neutral": z.lightNeutral,
  "light-success": z.lightSuccess,
  "light-warning": z.lightWarning,
  "light-danger": z.lightDanger,
  "light-info": z.lightInfo,
  "outline-primary": z.outlinePrimary,
  "outline-secondary": z.outlineSecondary,
  "outline-neutral": z.outlineNeutral,
  "outline-success": z.outlineSuccess,
  "outline-warning": z.outlineWarning,
  "outline-danger": z.outlineDanger,
  "outline-info": z.outlineInfo,
  "dot-primary": z.dotPrimary,
  "dot-secondary": z.dotSecondary,
  "dot-neutral": z.dotNeutral,
  "dot-success": z.dotSuccess,
  "dot-warning": z.dotWarning,
  "dot-danger": z.dotDanger,
  "dot-info": z.dotInfo
}, Hp = {
  primary: z.dotCirclePrimary,
  secondary: z.dotCircleSecondary,
  neutral: z.dotCircleNeutral,
  success: z.dotCircleSuccess,
  warning: z.dotCircleWarning,
  danger: z.dotCircleDanger,
  info: z.dotCircleInfo
}, jp = G(
  ({ as: e = "span", children: t, variant: n = "light", color: o = "primary", size: r = "md", radius: s = "xl", leftSection: a, className: i, style: c, ...u }, _) => {
    const m = n + "-" + o, f = X(z.badge, Rp[r], Ap[s], Yp[m] || z.lightPrimary, i);
    return /* @__PURE__ */ k(e, { ref: _, className: f, style: c, ...u, children: [
      n === "dot" && /* @__PURE__ */ l("span", { className: X(z.dotCircle, Hp[o]), "aria-hidden": "true" }),
      a && /* @__PURE__ */ l("span", { className: z.leftSection, children: a }),
      /* @__PURE__ */ l("span", { children: t })
    ] });
  }
);
jp.displayName = "Badge";
const qp = "Card-module__card___Cb1o4", Vp = "Card-module__withBorder___TRBwc", Zp = "Card-module__padNone___-1JEm", Kp = "Card-module__padXs___CNXdp", Qp = "Card-module__padSm___zmolL", Up = "Card-module__padMd___z7FbZ", Jp = "Card-module__padLg___Q8x36", eg = "Card-module__padXl___3QKD1", tg = "Card-module__pad2Xl___SpD9c", ng = "Card-module__radiusNone___8Rp4P", og = "Card-module__radiusXs___eKgxR", rg = "Card-module__radiusSm___HJsgU", sg = "Card-module__radiusMd___PL4yW", ag = "Card-module__radiusLg___k4pD8", lg = "Card-module__radiusXl___f79g3", ig = "Card-module__radiusFull___NkcNL", cg = "Card-module__shadowNone___O-kXe", dg = "Card-module__shadowXs___8z5i8", ug = "Card-module__shadowSm___VqyJF", _g = "Card-module__shadowMd___TGdll", mg = "Card-module__shadowLg___ebNSb", fg = "Card-module__shadowXl___se6-G", pg = "Card-module__header___PTXf2", gg = "Card-module__body___W441Z", hg = "Card-module__footer___Mu-JC", j = {
  card: qp,
  withBorder: Vp,
  padNone: Zp,
  padXs: Kp,
  padSm: Qp,
  padMd: Up,
  padLg: Jp,
  padXl: eg,
  pad2Xl: tg,
  radiusNone: ng,
  radiusXs: og,
  radiusSm: rg,
  radiusMd: sg,
  radiusLg: ag,
  radiusXl: lg,
  radiusFull: ig,
  shadowNone: cg,
  shadowXs: dg,
  shadowSm: ug,
  shadowMd: _g,
  shadowLg: mg,
  shadowXl: fg,
  header: pg,
  body: gg,
  footer: hg
}, yg = {
  none: j.padNone,
  xs: j.padXs,
  sm: j.padSm,
  md: j.padMd,
  lg: j.padLg,
  xl: j.padXl,
  "2xl": j.pad2Xl
}, vg = {
  none: j.radiusNone,
  xs: j.radiusXs,
  sm: j.radiusSm,
  md: j.radiusMd,
  lg: j.radiusLg,
  xl: j.radiusXl,
  full: j.radiusFull
}, bg = {
  none: j.shadowNone,
  xs: j.shadowXs,
  sm: j.shadowSm,
  md: j.shadowMd,
  lg: j.shadowLg,
  xl: j.shadowXl
}, yn = G(
  ({ children: e, className: t, style: n, ...o }, r) => /* @__PURE__ */ l("div", { ref: r, className: X(j.header, t), style: n, ...o, children: e })
);
yn.displayName = "Card.Header";
const vn = G(
  ({ children: e, className: t, style: n, ...o }, r) => /* @__PURE__ */ l("div", { ref: r, className: X(j.body, t), style: n, ...o, children: e })
);
vn.displayName = "Card.Body";
const bn = G(
  ({ children: e, className: t, style: n, ...o }, r) => /* @__PURE__ */ l("div", { ref: r, className: X(j.footer, t), style: n, ...o, children: e })
);
bn.displayName = "Card.Footer";
const ct = G(
  ({ as: e = "div", children: t, padding: n = "md", radius: o = "md", withBorder: r = !0, shadow: s = "sm", className: a, style: i, ...c }, u) => {
    const _ = X(j.card, n && yg[n], o && vg[o], s && bg[s], { [j.withBorder]: r }, a);
    return /* @__PURE__ */ l(e, { ref: u, className: _, style: i, ...c, children: t });
  }
);
ct.displayName = "Card";
ct.Header = yn;
ct.Body = vn;
ct.Footer = bn;
const wg = "Modal-module__root___ytPLl", Sg = "Modal-module__centered___UfBxf", xg = "Modal-module__notCentered___Td7f5", Mg = "Modal-module__backdrop___GVUh4", Ng = "Modal-module__dialog___ptM-K", Cg = "Modal-module__sizeXs___UNRGd", Pg = "Modal-module__sizeSm___-iZG0", kg = "Modal-module__sizeMd___WcNhW", Dg = "Modal-module__sizeLg___EckT-", zg = "Modal-module__sizeXl___CaZ8Y", Lg = "Modal-module__sizeFull___wBR5P", Bg = "Modal-module__header___ILG9i", Xg = "Modal-module__title___A5OeE", $g = "Modal-module__closeButton___3LpSf", Ig = "Modal-module__body___lVhql", ue = {
  root: wg,
  centered: Sg,
  notCentered: xg,
  backdrop: Mg,
  dialog: Ng,
  sizeXs: Cg,
  sizeSm: Pg,
  sizeMd: kg,
  sizeLg: Dg,
  sizeXl: zg,
  sizeFull: Lg,
  header: Bg,
  title: Xg,
  closeButton: $g,
  body: Ig
}, Wg = {
  xs: ue.sizeXs,
  sm: ue.sizeSm,
  md: ue.sizeMd,
  lg: ue.sizeLg,
  xl: ue.sizeXl,
  full: ue.sizeFull
}, Tg = ({
  opened: e,
  onClose: t,
  title: n,
  size: o = "md",
  centered: r = !0,
  closeOnClickOutside: s = !0,
  closeOnEscape: a = !0,
  withCloseButton: i = !0,
  children: c,
  className: u,
  style: _,
  ...m
}) => {
  const f = we(null), p = Ye();
  if (q(() => {
    if (!e || !a) return;
    const g = (x) => {
      x.key === "Escape" && t();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [e, a, t]), q(() => {
    if (!e) return;
    const g = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = g;
    };
  }, [e]), !e || typeof document > "u") return null;
  const h = (g) => {
    s && f.current && !f.current.contains(g.target) && t();
  }, b = /* @__PURE__ */ k("div", { className: X(ue.root, r ? ue.centered : ue.notCentered), onClick: h, role: "presentation", children: [
    /* @__PURE__ */ l("div", { className: ue.backdrop, "aria-hidden": "true" }),
    /* @__PURE__ */ k("div", { ref: f, role: "dialog", "aria-modal": "true", "aria-labelledby": n ? p : void 0, className: X(ue.dialog, Wg[o], u), style: _, onClick: (g) => g.stopPropagation(), ...m, children: [
      (n || i) && /* @__PURE__ */ k("div", { className: ue.header, children: [
        n && /* @__PURE__ */ l("h2", { id: p, className: ue.title, children: n }),
        i && /* @__PURE__ */ l("button", { type: "button", "aria-label": "Close modal", className: ue.closeButton, onClick: t, children: /* @__PURE__ */ k("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ l("div", { className: ue.body, children: c })
    ] })
  ] });
  return at(b, document.body);
};
Tg.displayName = "Modal";
const Og = "Tooltip-module__wrapper___D1A0A", Fg = "Tooltip-module__tooltip___UA7H9", Eg = "Tooltip-module__posTop___0jVkP", Gg = "Tooltip-module__posBottom___g-tHi", Rg = "Tooltip-module__posLeft___Mb6m-", Ag = "Tooltip-module__posRight___TPf0A", Yg = "Tooltip-module__arrow___4zROk", Fe = {
  wrapper: Og,
  tooltip: Fg,
  posTop: Eg,
  posBottom: Gg,
  posLeft: Rg,
  posRight: Ag,
  arrow: Yg
}, Hg = {
  top: Fe.posTop,
  bottom: Fe.posBottom,
  left: Fe.posLeft,
  right: Fe.posRight
}, jg = ({
  label: e,
  children: t,
  position: n = "top",
  openDelay: o = 0,
  closeDelay: r = 0,
  withArrow: s = !0,
  className: a,
  style: i
}) => {
  const [c, u] = Y(!1), _ = we(null), m = we(null), f = Ye(), p = () => {
    m.current && (window.clearTimeout(m.current), m.current = null), o > 0 ? _.current = window.setTimeout(() => u(!0), o) : u(!0);
  }, h = () => {
    _.current && (window.clearTimeout(_.current), _.current = null), r > 0 ? m.current = window.setTimeout(() => u(!1), r) : u(!1);
  };
  if (!xn(t)) return t;
  const b = t, g = Mn(b, {
    onMouseEnter: (x) => {
      b.props?.onMouseEnter?.(x), p();
    },
    onMouseLeave: (x) => {
      b.props?.onMouseLeave?.(x), h();
    },
    onFocus: (x) => {
      b.props?.onFocus?.(x), p();
    },
    onBlur: (x) => {
      b.props?.onBlur?.(x), h();
    },
    "aria-describedby": c ? f : void 0
  });
  return /* @__PURE__ */ k("span", { className: Fe.wrapper, children: [
    g,
    c && /* @__PURE__ */ k("span", { id: f, role: "tooltip", className: X(Fe.tooltip, Hg[n], a), style: i, children: [
      e,
      s && /* @__PURE__ */ l("span", { className: Fe.arrow, "aria-hidden": "true" })
    ] })
  ] });
};
jg.displayName = "Tooltip";
const qg = "Loader-module__loader___vqQOD", Vg = "Loader-module__sizeXs___yeKOs", Zg = "Loader-module__sizeSm___BMXP4", Kg = "Loader-module__sizeMd___lPS-M", Qg = "Loader-module__sizeLg___Ldupy", Ug = "Loader-module__sizeXl___pLWUN", Jg = "Loader-module__colorPrimary___H19ax", eh = "Loader-module__colorSecondary___wMVOI", th = "Loader-module__colorNeutral___sjCyG", nh = "Loader-module__colorSuccess___umOmx", oh = "Loader-module__colorWarning___fQNrG", rh = "Loader-module__colorDanger___2HVuq", sh = "Loader-module__colorInfo___2D-2p", ah = "Loader-module__spinnerSvg___dlEGW", lh = "Loader-module__spinnerCircle___cCMLO", ih = "Loader-module__dotsContainer___pq8gM", ch = "Loader-module__dot___Bi3gT", dh = "Loader-module__barsContainer___IFC8E", uh = "Loader-module__bar___fm1H5", K = {
  loader: qg,
  sizeXs: Vg,
  sizeSm: Zg,
  sizeMd: Kg,
  sizeLg: Qg,
  sizeXl: Ug,
  colorPrimary: Jg,
  colorSecondary: eh,
  colorNeutral: th,
  colorSuccess: nh,
  colorWarning: oh,
  colorDanger: rh,
  colorInfo: sh,
  spinnerSvg: ah,
  spinnerCircle: lh,
  dotsContainer: ih,
  dot: ch,
  barsContainer: dh,
  bar: uh
}, _h = {
  xs: K.sizeXs,
  sm: K.sizeSm,
  md: K.sizeMd,
  lg: K.sizeLg,
  xl: K.sizeXl
}, mh = {
  primary: K.colorPrimary,
  secondary: K.colorSecondary,
  neutral: K.colorNeutral,
  success: K.colorSuccess,
  warning: K.colorWarning,
  danger: K.colorDanger,
  info: K.colorInfo
}, fh = G(
  ({ variant: e = "spinner", color: t = "primary", size: n = "md", className: o, style: r, ...s }, a) => {
    const i = typeof n == "number", c = i ? { ...r, width: n + "px", height: n + "px" } : r || {}, u = X(K.loader, !i && _h[n], mh[t], o);
    return /* @__PURE__ */ k("span", { ref: a, role: "status", "aria-live": "polite", className: u, style: c, ...s, children: [
      e === "spinner" && /* @__PURE__ */ l("svg", { className: K.spinnerSvg, viewBox: "0 0 50 50", children: /* @__PURE__ */ l("circle", { className: K.spinnerCircle, cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "5" }) }),
      e === "dots" && /* @__PURE__ */ k("span", { className: K.dotsContainer, children: [
        /* @__PURE__ */ l("span", { className: K.dot }),
        /* @__PURE__ */ l("span", { className: K.dot }),
        /* @__PURE__ */ l("span", { className: K.dot })
      ] }),
      e === "bars" && /* @__PURE__ */ k("span", { className: K.barsContainer, children: [
        /* @__PURE__ */ l("span", { className: K.bar }),
        /* @__PURE__ */ l("span", { className: K.bar }),
        /* @__PURE__ */ l("span", { className: K.bar })
      ] })
    ] });
  }
);
fh.displayName = "Loader";
const ph = "MapControls-module__mapButton___SfEJr", gh = "MapControls-module__zoomGroup___KWsNM", hh = "MapControls-module__zoomBtnTop___tVB2h", yh = "MapControls-module__zoomBtnBottom___LN7LU", vh = "MapControls-module__compassButton___-0778", bh = "MapControls-module__compassDragging___KI80O", wh = "MapControls-module__compassNeedle___uegen", Sh = "MapControls-module__compassNeedleDragging___EMOyv", xh = "MapControls-module__overlay___p7uh6", Mh = "MapControls-module__topLeft___pMt6c", Nh = "MapControls-module__topRight___5JQw-", Ch = "MapControls-module__bottomLeft___ZCKNX", Ph = "MapControls-module__bottomRight___3el1u", kh = "MapControls-module__gapXs___oKF8Z", Dh = "MapControls-module__gapSm___1qKOx", zh = "MapControls-module__gapMd___R1EVt", Lh = "MapControls-module__gapLg___DM9W1", oe = {
  mapButton: ph,
  zoomGroup: gh,
  zoomBtnTop: hh,
  zoomBtnBottom: yh,
  compassButton: vh,
  compassDragging: bh,
  compassNeedle: wh,
  compassNeedleDragging: Sh,
  overlay: xh,
  topLeft: Mh,
  topRight: Nh,
  bottomLeft: Ch,
  bottomRight: Ph,
  gapXs: kh,
  gapSm: Dh,
  gapMd: zh,
  gapLg: Lh
}, Bh = ({
  center: e = [-74.006, 40.7128],
  zoom: t = 9,
  pitch: n = 0,
  bearing: o = 0,
  mapId: r,
  size: s = "md",
  radius: a = "md",
  className: i,
  style: c,
  "aria-label": u = "Reset to default view",
  title: _ = "Reset to default view"
}) => {
  const m = lt(), f = r ? m[r] : m.current, p = () => {
    f?.flyTo({
      center: e,
      zoom: t,
      pitch: n,
      bearing: o,
      essential: !0
    });
  };
  return /* @__PURE__ */ l(
    Ie,
    {
      icon: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ l("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        /* @__PURE__ */ l("polyline", { points: "9 22 9 12 15 12 15 22" })
      ] }),
      "aria-label": u,
      title: _,
      variant: "light",
      color: "neutral",
      size: s,
      radius: a,
      className: X(oe.mapButton, i),
      style: c,
      onClick: p
    }
  );
};
Bh.displayName = "DefaultViewControl";
const Xh = ({
  zoom: e = 14,
  mapId: t,
  size: n = "md",
  radius: o = "md",
  onGeolocate: r,
  onError: s,
  className: a,
  style: i,
  "aria-label": c = "Locate user position",
  title: u = "Find my location"
}) => {
  const [_, m] = Y(!1), f = lt(), p = t ? f[t] : f.current, h = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    m(!0), navigator.geolocation.getCurrentPosition(
      (g) => {
        m(!1);
        const { longitude: x, latitude: N } = g.coords;
        p?.flyTo({
          center: [x, N],
          zoom: e,
          essential: !0
        }), r?.(g.coords);
      },
      (g) => {
        m(!1), s?.(g);
      },
      { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 }
    );
  };
  return /* @__PURE__ */ l(
    Ie,
    {
      icon: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "7" }),
        /* @__PURE__ */ l("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
        /* @__PURE__ */ l("line", { x1: "12", y1: "18", x2: "12", y2: "22" }),
        /* @__PURE__ */ l("line", { x1: "2", y1: "12", x2: "6", y2: "12" }),
        /* @__PURE__ */ l("line", { x1: "18", y1: "12", x2: "22", y2: "12" })
      ] }),
      "aria-label": c,
      title: u,
      variant: "light",
      color: "neutral",
      size: n,
      radius: o,
      loading: _,
      className: X(oe.mapButton, a),
      style: i,
      onClick: h
    }
  );
};
Xh.displayName = "GeolocateControl";
const $h = ({
  mapId: e,
  size: t = "md",
  className: n,
  style: o
}) => {
  const r = lt(), s = e ? r[e] : r.current, a = () => s?.zoomIn(), i = () => s?.zoomOut(), c = /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
    /* @__PURE__ */ l("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ l("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }), u = /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ l("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) });
  return /* @__PURE__ */ k("div", { className: X(oe.zoomGroup, n), style: o, children: [
    /* @__PURE__ */ l(
      Ie,
      {
        icon: c,
        "aria-label": "Zoom in",
        title: "Zoom in",
        variant: "subtle",
        color: "neutral",
        size: t,
        radius: "none",
        className: oe.zoomBtnTop,
        onClick: a
      }
    ),
    /* @__PURE__ */ l(
      Ie,
      {
        icon: u,
        "aria-label": "Zoom out",
        title: "Zoom out",
        variant: "subtle",
        color: "neutral",
        size: t,
        radius: "none",
        className: oe.zoomBtnBottom,
        onClick: i
      }
    )
  ] });
};
$h.displayName = "ZoomControlGroup";
const Ih = ({
  currentBasemap: e,
  onToggle: t,
  size: n = "md",
  radius: o = "md",
  className: r,
  style: s,
  "aria-label": a,
  title: i
}) => {
  const c = e === "satellite", u = /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ l("polygon", { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }),
    /* @__PURE__ */ l("line", { x1: "8", y1: "2", x2: "8", y2: "18" }),
    /* @__PURE__ */ l("line", { x1: "16", y1: "6", x2: "16", y2: "22" })
  ] }), _ = /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ l("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    /* @__PURE__ */ l("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] }), m = i || (c ? "Switch to Vector Map" : "Switch to Satellite Imagery");
  return /* @__PURE__ */ l(
    Ie,
    {
      icon: c ? u : _,
      "aria-label": a || m,
      title: m,
      variant: "light",
      color: "neutral",
      size: n,
      radius: o,
      className: X(oe.mapButton, r),
      style: s,
      onClick: t
    }
  );
};
Ih.displayName = "BasemapToggleControl";
const Wh = ({
  mapId: e,
  size: t = "md",
  radius: n = "md",
  className: o,
  style: r,
  "aria-label": s = "Reset North and Bearing (drag to rotate & pitch)",
  title: a = "Compass: click to reset North, drag to rotate & pitch"
}) => {
  const [i, c] = Y(0), [u, _] = Y(0), [m, f] = Y(!1), p = we(null), h = lt(), b = e ? h[e] : h.current, g = we({
    active: !1,
    hasMoved: !1,
    startX: 0,
    startY: 0,
    centerX: 0,
    centerY: 0,
    startAngle: 0,
    startBearing: 0,
    startPitch: 0
  });
  q(() => {
    if (!b) return;
    const v = () => {
      c(b.getBearing() || 0), _(b.getPitch() || 0);
    };
    return v(), b.on("rotate", v), b.on("pitch", v), b.on("move", v), () => {
      b.off("rotate", v), b.off("pitch", v), b.off("move", v);
    };
  }, [b]);
  const x = (v) => {
    if (v.button !== 0 || !p.current || !b) return;
    const w = p.current.getBoundingClientRect(), V = w.left + w.width / 2, re = w.top + w.height / 2, J = Math.atan2(v.clientY - re, v.clientX - V) * (180 / Math.PI) + 90;
    g.current = {
      active: !0,
      hasMoved: !1,
      startX: v.clientX,
      startY: v.clientY,
      centerX: V,
      centerY: re,
      startAngle: J,
      startBearing: b.getBearing() || 0,
      startPitch: b.getPitch() || 0
    };
    try {
      p.current.setPointerCapture(v.pointerId);
    } catch {
    }
  }, N = (v) => {
    const w = g.current;
    if (!w.active || !b) return;
    const V = v.clientX - w.startX, re = v.clientY - w.startY, J = Math.hypot(V, re);
    if (!w.hasMoved && J > 3 && (w.hasMoved = !0, f(!0)), w.hasMoved) {
      const fe = Math.atan2(v.clientY - w.centerY, v.clientX - w.centerX) * (180 / Math.PI) + 90 - w.startAngle, ce = w.startBearing - fe;
      b.setBearing(ce), c(ce);
      const de = (w.startY - v.clientY) * 0.5, R = Math.max(0, Math.min(85, w.startPitch + de));
      b.setPitch(R), _(R);
    }
  }, O = (v) => {
    const w = g.current;
    if (w.active) {
      try {
        p.current?.hasPointerCapture(v.pointerId) && p.current.releasePointerCapture(v.pointerId);
      } catch {
      }
      w.hasMoved || b?.resetNorthPitch({ duration: 500 }), w.active = !1, w.hasMoved = !1, f(!1);
    }
  }, W = (v) => {
    g.current.active = !1, g.current.hasMoved = !1, f(!1);
    try {
      p.current?.hasPointerCapture(v.pointerId) && p.current.releasePointerCapture(v.pointerId);
    } catch {
    }
  }, d = /* @__PURE__ */ l(
    "span",
    {
      className: X(oe.compassNeedle, m && oe.compassNeedleDragging),
      style: {
        transform: `rotate(${-i}deg) rotateX(${u}deg)`
      },
      children: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", children: [
        /* @__PURE__ */ l("path", { d: "M12 3L8 12H16L12 3Z", fill: "var(--color-danger-500, #ef4444)" }),
        /* @__PURE__ */ l("path", { d: "M12 21L8 12H16L12 21Z", fill: "var(--text-muted, #94a3b8)" }),
        /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "2", fill: "currentColor" })
      ] })
    }
  );
  return /* @__PURE__ */ l(
    Ie,
    {
      ref: p,
      icon: d,
      "aria-label": s,
      title: a,
      variant: "light",
      color: "neutral",
      size: t,
      radius: n,
      className: X(
        oe.mapButton,
        oe.compassButton,
        m && oe.compassDragging,
        o
      ),
      style: r,
      onPointerDown: x,
      onPointerMove: N,
      onPointerUp: O,
      onPointerCancel: W
    }
  );
};
Wh.displayName = "CompassControl";
const Th = ({
  containerRef: e,
  size: t = "md",
  radius: n = "md",
  className: o,
  style: r,
  "aria-label": s,
  title: a
}) => {
  const [i, c] = Y(!1);
  q(() => {
    const h = () => {
      c(!!document.fullscreenElement);
    };
    return document.addEventListener("fullscreenchange", h), () => {
      document.removeEventListener("fullscreenchange", h);
    };
  }, []);
  const u = () => {
    document.fullscreenElement ? document.exitFullscreen().catch((h) => {
      console.error("Error attempting to exit fullscreen:", h);
    }) : (e?.current || document.documentElement).requestFullscreen().catch((b) => {
      console.error("Error attempting to enable fullscreen:", b);
    });
  }, _ = /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" }) }), m = /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l("path", { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }) }), f = a || (i ? "Exit fullscreen" : "Toggle fullscreen");
  return /* @__PURE__ */ l(
    Ie,
    {
      icon: i ? m : _,
      "aria-label": s || f,
      title: f,
      variant: "light",
      color: "neutral",
      size: t,
      radius: n,
      className: X(oe.mapButton, o),
      style: r,
      onClick: u
    }
  );
};
Th.displayName = "FullscreenControl";
const Oh = {
  "top-left": oe.topLeft,
  "top-right": oe.topRight,
  "bottom-left": oe.bottomLeft,
  "bottom-right": oe.bottomRight
}, Fh = {
  xs: oe.gapXs,
  sm: oe.gapSm,
  md: oe.gapMd,
  lg: oe.gapLg
}, Eh = ({
  position: e = "top-right",
  gap: t = "sm",
  children: n,
  className: o,
  style: r
}) => /* @__PURE__ */ l(
  "div",
  {
    className: X(oe.overlay, Oh[e], Fh[t], o),
    style: r,
    children: n
  }
);
Eh.displayName = "MapControlWrapper";
export {
  ul as AspectRatio,
  kf as Avatar,
  jp as Badge,
  Ih as BasemapToggleControl,
  Br as Box,
  Bi as Button,
  ct as Card,
  vn as CardBody,
  bn as CardFooter,
  yn as CardHeader,
  Wh as CompassControl,
  kl as Container,
  Qm as DatePicker,
  Jm as DateRangePicker,
  Bh as DefaultViewControl,
  Go as Divider,
  Th as FullscreenControl,
  Xh as GeolocateControl,
  Kt as Grid,
  Zt as GridCol,
  Ms as Group,
  Ie as IconButton,
  Hf as Image,
  He as InputWrapper,
  fh as Loader,
  Eh as MapControlWrapper,
  Tg as Modal,
  od as NumberInput,
  Cd as Select,
  Ur as Stack,
  Qd as Switch,
  uo as Text,
  Uc as TextField,
  qt as ThemeContext,
  Pn as ThemeProvider,
  $o as Title,
  jg as Tooltip,
  $h as ZoomControlGroup,
  Hh as useTheme
};
//# sourceMappingURL=index.js.map
