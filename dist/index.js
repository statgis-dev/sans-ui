import { jsx as l, jsxs as k, Fragment as Le } from "react/jsx-runtime";
import Dt, { createContext as Pe, useState as Z, useEffect as J, useMemo as mn, useContext as $e, forwardRef as T, useRef as Se, useId as Ge, useLayoutEffect as fn, isValidElement as gn, cloneElement as pn } from "react";
import { createPortal as ot } from "react-dom";
const Ft = Pe(void 0), lh = ({
  children: e,
  defaultTheme: t = "light",
  storageKey: n = "sans-ui-theme",
  targetElement: o
}) => {
  const [a, r] = Z(() => {
    if (typeof window < "u")
      try {
        const d = localStorage.getItem(n);
        if (d === "light" || d === "dark")
          return d;
      } catch {
      }
    return t;
  }), s = (d) => {
    if (r(d), typeof window < "u")
      try {
        localStorage.setItem(n, d);
      } catch {
      }
  }, i = () => {
    s(a === "light" ? "dark" : "light");
  };
  J(() => {
    const d = o || (typeof document < "u" ? document.documentElement : null);
    d && d.setAttribute("data-theme", a);
  }, [a, o]);
  const u = mn(
    () => ({
      theme: a,
      setTheme: s,
      toggleTheme: i
    }),
    [a]
  );
  return /* @__PURE__ */ l(Ft.Provider, { value: u, children: e });
};
function dh() {
  const e = $e(Ft);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function Et(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Et(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function L() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Et(e)) && (o && (o += " "), o += t);
  return o;
}
const hn = "Text-module__text___78lq0", vn = "Text-module__variantRegular___h4rEb", yn = "Text-module__variantMono___2XpZ-", bn = "Text-module__variantDisplay___erxax", wn = "Text-module__sizeXs___9Ok-b", Sn = "Text-module__sizeSm___2Oiat", Nn = "Text-module__sizeMd___k9dGF", Mn = "Text-module__sizeLg___7aFQL", xn = "Text-module__sizeXl___LpJtS", Cn = "Text-module__weight400___BGf0O", Dn = "Text-module__weight500___8Cgs9", kn = "Text-module__weight600___URtEb", zn = "Text-module__weight700___V0-f-", Xn = "Text-module__italic___z-mH2", Ln = "Text-module__underline___mGmd0", Bn = "Text-module__strikethrough___ht8uP", Pn = "Text-module__colorInherit___4-1Mm", $n = "Text-module__colorDimmed___4fJfV", In = "Text-module__colorPrimary___op5fM", Wn = "Text-module__colorSecondary___w7pxt", Tn = "Text-module__colorNeutral___E9c8l", On = "Text-module__colorSuccess___ZKZfh", Fn = "Text-module__colorWarning___eoIhV", En = "Text-module__colorDanger___b9dnd", Gn = "Text-module__colorInfo___lmCis", An = "Text-module__alignLeft___OZBSx", Rn = "Text-module__alignCenter___QK7p-", Yn = "Text-module__alignRight___ysuR2", Hn = "Text-module__alignJustify___sRmKl", jn = "Text-module__truncateSingle___vWoo8", qn = "Text-module__truncateClamp___tpH-K", $ = {
  text: hn,
  variantRegular: vn,
  variantMono: yn,
  variantDisplay: bn,
  sizeXs: wn,
  sizeSm: Sn,
  sizeMd: Nn,
  sizeLg: Mn,
  sizeXl: xn,
  weight400: Cn,
  weight500: Dn,
  weight600: kn,
  weight700: zn,
  italic: Xn,
  underline: Ln,
  strikethrough: Bn,
  colorInherit: Pn,
  colorDimmed: $n,
  colorPrimary: In,
  colorSecondary: Wn,
  colorNeutral: Tn,
  colorSuccess: On,
  colorWarning: Fn,
  colorDanger: En,
  colorInfo: Gn,
  alignLeft: An,
  alignCenter: Rn,
  alignRight: Yn,
  alignJustify: Hn,
  truncateSingle: jn,
  truncateClamp: qn
}, Vn = {
  xs: $.sizeXs,
  sm: $.sizeSm,
  md: $.sizeMd,
  lg: $.sizeLg,
  xl: $.sizeXl
}, Qn = {
  400: $.weight400,
  500: $.weight500,
  600: $.weight600,
  700: $.weight700
}, Kn = {
  regular: $.variantRegular,
  mono: $.variantMono,
  display: $.variantDisplay
}, Un = {
  inherit: $.colorInherit,
  dimmed: $.colorDimmed,
  primary: $.colorPrimary,
  secondary: $.colorSecondary,
  neutral: $.colorNeutral,
  success: $.colorSuccess,
  warning: $.colorWarning,
  danger: $.colorDanger,
  info: $.colorInfo
}, Zn = {
  left: $.alignLeft,
  center: $.alignCenter,
  right: $.alignRight,
  justify: $.alignJustify
}, Jn = T(
  ({ as: e = "p", children: t, variant: n = "regular", size: o = "md", weight: a = 400, italic: r = !1, underline: s = !1, strikethrough: i = !1, color: u = "inherit", align: d = "left", truncate: c = !1, className: _, style: m, ...g }, h) => {
    const b = c === !0, p = typeof c == "number" && c >= 1, S = p ? { ...m, WebkitLineClamp: c } : m, M = L($.text, Kn[n], Vn[o], Qn[a], Un[u], Zn[d], { [$.italic]: r, [$.underline]: s, [$.strikethrough]: i, [$.truncateSingle]: b, [$.truncateClamp]: p }, _);
    return /* @__PURE__ */ l(e, { ref: h, className: M, style: S, ...g, children: t });
  }
);
Jn.displayName = "Text";
const eo = "Title-module__title___t68i9", to = "Title-module__sizeH1___2rUbN", no = "Title-module__sizeH2___BZerW", oo = "Title-module__sizeH3___N0Wrq", ao = "Title-module__sizeH4___4-u88", ro = "Title-module__sizeH5___vCrtX", so = "Title-module__sizeH6___sInDp", io = "Title-module__weight500___qC3Rh", lo = "Title-module__weight600___ljczz", co = "Title-module__weight700___Wy5NX", uo = "Title-module__weight800___WjWVo", _o = "Title-module__colorInherit___hNpBk", mo = "Title-module__colorPrimary___LUYRB", fo = "Title-module__colorSecondary___wo-p5", go = "Title-module__colorNeutral___D4Lrx", po = "Title-module__colorSuccess___qZNqo", ho = "Title-module__colorWarning___5S3fG", vo = "Title-module__colorDanger___5BrK0", yo = "Title-module__colorInfo___BrjaU", te = {
  title: eo,
  sizeH1: to,
  sizeH2: no,
  sizeH3: oo,
  sizeH4: ao,
  sizeH5: ro,
  sizeH6: so,
  weight500: io,
  weight600: lo,
  weight700: co,
  weight800: uo,
  colorInherit: _o,
  colorPrimary: mo,
  colorSecondary: fo,
  colorNeutral: go,
  colorSuccess: po,
  colorWarning: ho,
  colorDanger: vo,
  colorInfo: yo
}, bo = {
  h1: te.sizeH1,
  h2: te.sizeH2,
  h3: te.sizeH3,
  h4: te.sizeH4,
  h5: te.sizeH5,
  h6: te.sizeH6
}, wo = {
  500: te.weight500,
  600: te.weight600,
  700: te.weight700,
  800: te.weight800
}, So = {
  inherit: te.colorInherit,
  primary: te.colorPrimary,
  secondary: te.colorSecondary,
  neutral: te.colorNeutral,
  success: te.colorSuccess,
  warning: te.colorWarning,
  danger: te.colorDanger,
  info: te.colorInfo
}, No = T(
  ({ children: e, order: t = 1, size: n, weight: o = 700, color: a = "inherit", className: r, style: s, ...i }, u) => {
    const d = "h" + t, c = n || "h" + t, _ = L(te.title, bo[c], wo[o], So[a], r);
    return /* @__PURE__ */ l(d, { ref: u, className: _, style: s, ...i, children: e });
  }
);
No.displayName = "Title";
const Mo = "Divider-module__divider___KSGsi", xo = "Divider-module__horizontal___pZ05Y", Co = "Divider-module__vertical___p-jD4", Do = "Divider-module__line___CX4-v", ko = "Divider-module__label___PwL54", Oe = {
  divider: Mo,
  horizontal: xo,
  vertical: Co,
  line: Do,
  label: ko
}, zo = {
  border: "var(--border-subtle)",
  neutral: "var(--border-strong)",
  primary: "var(--color-primary-500)",
  secondary: "var(--color-secondary-500)",
  success: "var(--color-success-500)",
  warning: "var(--color-warning-500)",
  danger: "var(--color-danger-500)",
  info: "var(--color-info-500)"
}, Xo = T(
  ({ orientation: e = "horizontal", variant: t = "solid", size: n = 1, color: o = "border", label: a, className: r, style: s, ...i }, u) => {
    const d = e === "horizontal", c = {
      ...s,
      "--divider-size": n + "px",
      "--divider-style": t,
      "--divider-color": zo[o] || "var(--border-subtle)"
    }, _ = L(Oe.divider, d ? Oe.horizontal : Oe.vertical, r);
    return /* @__PURE__ */ k("div", { ref: u, role: "separator", "aria-orientation": e, className: _, style: c, ...i, children: [
      /* @__PURE__ */ l("span", { className: Oe.line }),
      a && d && /* @__PURE__ */ l("span", { className: Oe.label, children: a }),
      a && d && /* @__PURE__ */ l("span", { className: Oe.line })
    ] });
  }
);
Xo.displayName = "Divider";
const Lo = "Box-module__box___Wgbf3", Bo = "Box-module__centered___qfT1T", Po = "Box-module__sizeXs___nqRLQ", $o = "Box-module__sizeSm___O4HN0", Io = "Box-module__sizeMd___D1Qs-", Wo = "Box-module__sizeLg___6234W", To = "Box-module__sizeXl___pt9kx", Oo = "Box-module__sizeFull___jMPVd", Fo = "Box-module__bgApp___9jVJP", Eo = "Box-module__bgSurface___UEdz7", Go = "Box-module__bgElevated___VseX2", Ao = "Box-module__bgPrimary___s1xYD", Ro = "Box-module__bgSecondary___Ti7-M", Yo = "Box-module__bgNeutral___bNFKp", Ho = "Box-module__bgSuccess___m9f4p", jo = "Box-module__bgWarning___XUYDX", qo = "Box-module__bgDanger___YpZPt", Vo = "Box-module__bgInfo___Ab62p", Qo = "Box-module__padNone___-KjzY", Ko = "Box-module__padXs___-FYDi", Uo = "Box-module__padSm___ytD3C", Zo = "Box-module__padMd___GOSZC", Jo = "Box-module__padLg___jBVdo", ea = "Box-module__padXl___MwkOT", ta = "Box-module__pad2Xl___0IY4x", na = "Box-module__radiusNone___dXDqU", oa = "Box-module__radiusXs___wdQtE", aa = "Box-module__radiusSm___LuW3v", ra = "Box-module__radiusMd___03HCd", sa = "Box-module__radiusLg___WWODU", ia = "Box-module__radiusXl___aE9l0", la = "Box-module__radiusFull___dsiF8", da = "Box-module__border___FYpYo", ca = "Box-module__shadowNone___-Whrh", ua = "Box-module__shadowXs___6F8cz", _a = "Box-module__shadowSm___I6eGZ", ma = "Box-module__shadowMd___fLRRl", fa = "Box-module__shadowLg___-Miql", ga = "Box-module__shadowXl___I4QVF", X = {
  box: Lo,
  centered: Bo,
  sizeXs: Po,
  sizeSm: $o,
  sizeMd: Io,
  sizeLg: Wo,
  sizeXl: To,
  sizeFull: Oo,
  bgApp: Fo,
  bgSurface: Eo,
  bgElevated: Go,
  bgPrimary: Ao,
  bgSecondary: Ro,
  bgNeutral: Yo,
  bgSuccess: Ho,
  bgWarning: jo,
  bgDanger: qo,
  bgInfo: Vo,
  padNone: Qo,
  padXs: Ko,
  padSm: Uo,
  padMd: Zo,
  padLg: Jo,
  padXl: ea,
  pad2Xl: ta,
  radiusNone: na,
  radiusXs: oa,
  radiusSm: aa,
  radiusMd: ra,
  radiusLg: sa,
  radiusXl: ia,
  radiusFull: la,
  border: da,
  shadowNone: ca,
  shadowXs: ua,
  shadowSm: _a,
  shadowMd: ma,
  shadowLg: fa,
  shadowXl: ga
}, pa = {
  xs: X.sizeXs,
  sm: X.sizeSm,
  md: X.sizeMd,
  lg: X.sizeLg,
  xl: X.sizeXl,
  full: X.sizeFull
}, ha = {
  app: X.bgApp,
  surface: X.bgSurface,
  elevated: X.bgElevated,
  primary: X.bgPrimary,
  secondary: X.bgSecondary,
  neutral: X.bgNeutral,
  success: X.bgSuccess,
  warning: X.bgWarning,
  danger: X.bgDanger,
  info: X.bgInfo
}, va = {
  none: X.padNone,
  xs: X.padXs,
  sm: X.padSm,
  md: X.padMd,
  lg: X.padLg,
  xl: X.padXl,
  "2xl": X.pad2Xl
}, ya = {
  none: X.radiusNone,
  xs: X.radiusXs,
  sm: X.radiusSm,
  md: X.radiusMd,
  lg: X.radiusLg,
  xl: X.radiusXl,
  full: X.radiusFull
}, ba = {
  none: X.shadowNone,
  xs: X.shadowXs,
  sm: X.shadowSm,
  md: X.shadowMd,
  lg: X.shadowLg,
  xl: X.shadowXl
}, wa = T(
  ({ as: e = "div", children: t, size: n, centered: o = !1, bg: a = "surface", padding: r = "none", radius: s = "none", border: i = !1, shadow: u = "none", className: d, style: c, ..._ }, m) => {
    const g = L(X.box, n && pa[n], a && ha[a], r && va[r], s && ya[s], u && ba[u], { [X.centered]: o, [X.border]: i }, d);
    return /* @__PURE__ */ l(e, { ref: m, className: g, style: c, ..._, children: t });
  }
);
wa.displayName = "Box";
const Sa = "Stack-module__stack___yUU-B", Na = "Stack-module__gapNone___bv7gQ", Ma = "Stack-module__gapXs___QX2UK", xa = "Stack-module__gapSm___A4Rat", Ca = "Stack-module__gapMd___uSujS", Da = "Stack-module__gapLg___UfQBu", ka = "Stack-module__gapXl___OEbNo", za = "Stack-module__gap2Xl___B0Skj", Xa = "Stack-module__alignStretch___tNNmt", La = "Stack-module__alignFlexStart___X-R3w", Ba = "Stack-module__alignCenter___geGJ5", Pa = "Stack-module__alignFlexEnd___H1fJu", $a = "Stack-module__justifyFlexStart___J6j1r", Ia = "Stack-module__justifyCenter___5iQts", Wa = "Stack-module__justifyFlexEnd___8rc9a", Ta = "Stack-module__justifySpaceBetween___TzxEr", re = {
  stack: Sa,
  gapNone: Na,
  gapXs: Ma,
  gapSm: xa,
  gapMd: Ca,
  gapLg: Da,
  gapXl: ka,
  gap2Xl: za,
  alignStretch: Xa,
  alignFlexStart: La,
  alignCenter: Ba,
  alignFlexEnd: Pa,
  justifyFlexStart: $a,
  justifyCenter: Ia,
  justifyFlexEnd: Wa,
  justifySpaceBetween: Ta
}, Oa = {
  none: re.gapNone,
  xs: re.gapXs,
  sm: re.gapSm,
  md: re.gapMd,
  lg: re.gapLg,
  xl: re.gapXl,
  "2xl": re.gap2Xl
}, Fa = {
  stretch: re.alignStretch,
  "flex-start": re.alignFlexStart,
  center: re.alignCenter,
  "flex-end": re.alignFlexEnd
}, Ea = {
  "flex-start": re.justifyFlexStart,
  center: re.justifyCenter,
  "flex-end": re.justifyFlexEnd,
  "space-between": re.justifySpaceBetween
}, Ga = T(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "stretch", justify: a = "flex-start", className: r, style: s, ...i }, u) => {
    const d = L(re.stack, Oa[n], Fa[o], Ea[a], r);
    return /* @__PURE__ */ l(e, { ref: u, className: d, style: s, ...i, children: t });
  }
);
Ga.displayName = "Stack";
const Aa = "Group-module__group___JB9jS", Ra = "Group-module__gapNone___spqGG", Ya = "Group-module__gapXs___lJtE2", Ha = "Group-module__gapSm___mAEKG", ja = "Group-module__gapMd___4vpbQ", qa = "Group-module__gapLg___y-iGx", Va = "Group-module__gapXl___vzZFP", Qa = "Group-module__gap2Xl___VE4kj", Ka = "Group-module__alignStretch___oGWAq", Ua = "Group-module__alignFlexStart___ChF-g", Za = "Group-module__alignCenter___HmA5F", Ja = "Group-module__alignFlexEnd___tGOPE", er = "Group-module__justifyFlexStart___XpW8l", tr = "Group-module__justifyCenter___qw04u", nr = "Group-module__justifyFlexEnd___a4TPM", or = "Group-module__justifySpaceBetween___tq7ho", ar = "Group-module__justifySpaceAround___gGJlV", rr = "Group-module__wrapNowrap___F6I5s", sr = "Group-module__wrapWrap___gcTiA", ir = "Group-module__wrapReverse___sKgPv", lr = "Group-module__grow___lg-SQ", K = {
  group: Aa,
  gapNone: Ra,
  gapXs: Ya,
  gapSm: Ha,
  gapMd: ja,
  gapLg: qa,
  gapXl: Va,
  gap2Xl: Qa,
  alignStretch: Ka,
  alignFlexStart: Ua,
  alignCenter: Za,
  alignFlexEnd: Ja,
  justifyFlexStart: er,
  justifyCenter: tr,
  justifyFlexEnd: nr,
  justifySpaceBetween: or,
  justifySpaceAround: ar,
  wrapNowrap: rr,
  wrapWrap: sr,
  wrapReverse: ir,
  grow: lr
}, dr = {
  none: K.gapNone,
  xs: K.gapXs,
  sm: K.gapSm,
  md: K.gapMd,
  lg: K.gapLg,
  xl: K.gapXl,
  "2xl": K.gap2Xl
}, cr = {
  stretch: K.alignStretch,
  "flex-start": K.alignFlexStart,
  center: K.alignCenter,
  "flex-end": K.alignFlexEnd
}, ur = {
  "flex-start": K.justifyFlexStart,
  center: K.justifyCenter,
  "flex-end": K.justifyFlexEnd,
  "space-between": K.justifySpaceBetween,
  "space-around": K.justifySpaceAround
}, _r = {
  nowrap: K.wrapNowrap,
  wrap: K.wrapWrap,
  "wrap-reverse": K.wrapReverse
}, mr = T(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "center", justify: a = "flex-start", wrap: r = "wrap", grow: s = !1, className: i, style: u, ...d }, c) => {
    const _ = L(K.group, dr[n], cr[o], ur[a], _r[r], { [K.grow]: s }, i);
    return /* @__PURE__ */ l(e, { ref: c, className: _, style: u, ...d, children: t });
  }
);
mr.displayName = "Group";
const fr = "Grid-module__grid___h49fk", gr = "Grid-module__gutterNone___G8BMH", pr = "Grid-module__gutterXs___ADsBL", hr = "Grid-module__gutterSm___6NRbO", vr = "Grid-module__gutterMd___cmoLu", yr = "Grid-module__gutterLg___9SuhS", br = "Grid-module__gutterXl___PsRlW", wr = "Grid-module__gutter2Xl___xJo0D", Sr = "Grid-module__col___tbuNg", Nr = "Grid-module__spanAuto___h-TSw", Mr = "Grid-module__span1___ECAD7", xr = "Grid-module__span2___-sX5n", Cr = "Grid-module__span3___dFBl4", Dr = "Grid-module__span4___kglrb", kr = "Grid-module__span5___iHfGz", zr = "Grid-module__span6___wwMzi", Xr = "Grid-module__span7___0BBdf", Lr = "Grid-module__span8___Kcy9A", Br = "Grid-module__span9___7ySoZ", Pr = "Grid-module__span10___gPA7Z", $r = "Grid-module__span11___zv17X", Ir = "Grid-module__span12___nRBMm", Wr = "Grid-module__offset1___5hFyu", Tr = "Grid-module__offset2___mg1D-", Or = "Grid-module__offset3___NQOzX", Fr = "Grid-module__offset4___rMPwe", Er = "Grid-module__offset5___W-7Fo", Gr = "Grid-module__offset6___NhPX8", Ar = "Grid-module__offset7___Epz5v", Rr = "Grid-module__offset8___mpayK", Yr = "Grid-module__offset9___97joT", Hr = "Grid-module__offset10___Loifi", jr = "Grid-module__offset11___XKZkn", qr = "Grid-module__spanSmAuto___-kDMz", Vr = "Grid-module__spanSm1___gXv5X", Qr = "Grid-module__spanSm2___-09fM", Kr = "Grid-module__spanSm3___0gL4g", Ur = "Grid-module__spanSm4___YqJv5", Zr = "Grid-module__spanSm5___GHHtG", Jr = "Grid-module__spanSm6___j8JQx", es = "Grid-module__spanSm7___TpTrd", ts = "Grid-module__spanSm8___XdwNJ", ns = "Grid-module__spanSm9___hDrXA", os = "Grid-module__spanSm10___4KWRB", as = "Grid-module__spanSm11___ExLVx", rs = "Grid-module__spanSm12___vQk2G", ss = "Grid-module__spanMdAuto___pEce6", is = "Grid-module__spanMd1___xRZ5L", ls = "Grid-module__spanMd2___tVS1a", ds = "Grid-module__spanMd3___O35cH", cs = "Grid-module__spanMd4___Yretx", us = "Grid-module__spanMd5___DjiQ9", _s = "Grid-module__spanMd6___U2puq", ms = "Grid-module__spanMd7___sVsSG", fs = "Grid-module__spanMd8___FRJn-", gs = "Grid-module__spanMd9___0cxAI", ps = "Grid-module__spanMd10___IPaPL", hs = "Grid-module__spanMd11___BSl3b", vs = "Grid-module__spanMd12___xJVAR", ys = "Grid-module__spanLgAuto___hiHiG", bs = "Grid-module__spanLg1___xZAgn", ws = "Grid-module__spanLg2___hIgCi", Ss = "Grid-module__spanLg3___4JXfO", Ns = "Grid-module__spanLg4___criYH", Ms = "Grid-module__spanLg5___X2kOa", xs = "Grid-module__spanLg6___-lHL6", Cs = "Grid-module__spanLg7___ijxyH", Ds = "Grid-module__spanLg8___9MXAV", ks = "Grid-module__spanLg9___Kaj-s", zs = "Grid-module__spanLg10___-YWG-", Xs = "Grid-module__spanLg11___O-vU9", Ls = "Grid-module__spanLg12___dZIlg", Bs = "Grid-module__spanXlAuto___O4eyM", Ps = "Grid-module__spanXl1___N-5wm", $s = "Grid-module__spanXl2___vJNAz", Is = "Grid-module__spanXl3___ySPkA", Ws = "Grid-module__spanXl4___xVk5-", Ts = "Grid-module__spanXl5___NT66v", Os = "Grid-module__spanXl6___DlWPY", Fs = "Grid-module__spanXl7___WQDEA", Es = "Grid-module__spanXl8___WfKp1", Gs = "Grid-module__spanXl9___sairI", As = "Grid-module__spanXl10___i2IqV", Rs = "Grid-module__spanXl11___oyLBC", Ys = "Grid-module__spanXl12___PYn7s", f = {
  grid: fr,
  gutterNone: gr,
  gutterXs: pr,
  gutterSm: hr,
  gutterMd: vr,
  gutterLg: yr,
  gutterXl: br,
  gutter2Xl: wr,
  col: Sr,
  spanAuto: Nr,
  span1: Mr,
  span2: xr,
  span3: Cr,
  span4: Dr,
  span5: kr,
  span6: zr,
  span7: Xr,
  span8: Lr,
  span9: Br,
  span10: Pr,
  span11: $r,
  span12: Ir,
  offset1: Wr,
  offset2: Tr,
  offset3: Or,
  offset4: Fr,
  offset5: Er,
  offset6: Gr,
  offset7: Ar,
  offset8: Rr,
  offset9: Yr,
  offset10: Hr,
  offset11: jr,
  spanSmAuto: qr,
  spanSm1: Vr,
  spanSm2: Qr,
  spanSm3: Kr,
  spanSm4: Ur,
  spanSm5: Zr,
  spanSm6: Jr,
  spanSm7: es,
  spanSm8: ts,
  spanSm9: ns,
  spanSm10: os,
  spanSm11: as,
  spanSm12: rs,
  spanMdAuto: ss,
  spanMd1: is,
  spanMd2: ls,
  spanMd3: ds,
  spanMd4: cs,
  spanMd5: us,
  spanMd6: _s,
  spanMd7: ms,
  spanMd8: fs,
  spanMd9: gs,
  spanMd10: ps,
  spanMd11: hs,
  spanMd12: vs,
  spanLgAuto: ys,
  spanLg1: bs,
  spanLg2: ws,
  spanLg3: Ss,
  spanLg4: Ns,
  spanLg5: Ms,
  spanLg6: xs,
  spanLg7: Cs,
  spanLg8: Ds,
  spanLg9: ks,
  spanLg10: zs,
  spanLg11: Xs,
  spanLg12: Ls,
  spanXlAuto: Bs,
  spanXl1: Ps,
  spanXl2: $s,
  spanXl3: Is,
  spanXl4: Ws,
  spanXl5: Ts,
  spanXl6: Os,
  spanXl7: Fs,
  spanXl8: Es,
  spanXl9: Gs,
  spanXl10: As,
  spanXl11: Rs,
  spanXl12: Ys
}, Hs = {
  none: f.gutterNone,
  xs: f.gutterXs,
  sm: f.gutterSm,
  md: f.gutterMd,
  lg: f.gutterLg,
  xl: f.gutterXl,
  "2xl": f.gutter2Xl
}, js = {
  auto: f.spanAuto,
  1: f.span1,
  2: f.span2,
  3: f.span3,
  4: f.span4,
  5: f.span5,
  6: f.span6,
  7: f.span7,
  8: f.span8,
  9: f.span9,
  10: f.span10,
  11: f.span11,
  12: f.span12
}, qs = {
  auto: f.spanSmAuto,
  1: f.spanSm1,
  2: f.spanSm2,
  3: f.spanSm3,
  4: f.spanSm4,
  5: f.spanSm5,
  6: f.spanSm6,
  7: f.spanSm7,
  8: f.spanSm8,
  9: f.spanSm9,
  10: f.spanSm10,
  11: f.spanSm11,
  12: f.spanSm12
}, Vs = {
  auto: f.spanMdAuto,
  1: f.spanMd1,
  2: f.spanMd2,
  3: f.spanMd3,
  4: f.spanMd4,
  5: f.spanMd5,
  6: f.spanMd6,
  7: f.spanMd7,
  8: f.spanMd8,
  9: f.spanMd9,
  10: f.spanMd10,
  11: f.spanMd11,
  12: f.spanMd12
}, Qs = {
  auto: f.spanLgAuto,
  1: f.spanLg1,
  2: f.spanLg2,
  3: f.spanLg3,
  4: f.spanLg4,
  5: f.spanLg5,
  6: f.spanLg6,
  7: f.spanLg7,
  8: f.spanLg8,
  9: f.spanLg9,
  10: f.spanLg10,
  11: f.spanLg11,
  12: f.spanLg12
}, Ks = {
  auto: f.spanXlAuto,
  1: f.spanXl1,
  2: f.spanXl2,
  3: f.spanXl3,
  4: f.spanXl4,
  5: f.spanXl5,
  6: f.spanXl6,
  7: f.spanXl7,
  8: f.spanXl8,
  9: f.spanXl9,
  10: f.spanXl10,
  11: f.spanXl11,
  12: f.spanXl12
}, Us = {
  1: f.offset1,
  2: f.offset2,
  3: f.offset3,
  4: f.offset4,
  5: f.offset5,
  6: f.offset6,
  7: f.offset7,
  8: f.offset8,
  9: f.offset9,
  10: f.offset10,
  11: f.offset11
}, Gt = T(
  ({ as: e = "div", children: t, span: n = 12, sm: o, md: a, lg: r, xl: s, offset: i = 0, className: u, style: d, ...c }, _) => {
    const m = L(f.col, js[String(n)], o && qs[String(o)], a && Vs[String(a)], r && Qs[String(r)], s && Ks[String(s)], i > 0 && Us[i], u);
    return /* @__PURE__ */ l(e, { ref: _, className: m, style: d, ...c, children: t });
  }
);
Gt.displayName = "Grid.Col";
const At = T(
  ({ as: e = "div", children: t, columns: n = 12, gutter: o = "md", className: a, style: r, ...s }, i) => {
    const u = { ...r, gridTemplateColumns: "repeat(" + n + ", minmax(0, 1fr))" }, d = L(f.grid, Hs[o], a);
    return /* @__PURE__ */ l(e, { ref: i, className: d, style: u, ...s, children: t });
  }
);
At.displayName = "Grid";
At.Col = Gt;
const Zs = "AspectRatio-module__aspectRatio___NpGva", Js = {
  aspectRatio: Zs
}, ei = T(
  ({ as: e = "div", children: t, ratio: n = 1, className: o, style: a, ...r }, s) => {
    const i = { ...a, "--aspect-ratio": String(n) };
    return /* @__PURE__ */ l(e, { ref: s, className: L(Js.aspectRatio, o), style: i, ...r, children: t });
  }
);
ei.displayName = "AspectRatio";
const ti = "Container-module__container___JMoiT", ni = "Container-module__sizeXs___LUfHx", oi = "Container-module__sizeSm___ev-G8", ai = "Container-module__sizeMd___Lnic2", ri = "Container-module__sizeLg___Z7t9k", si = "Container-module__sizeXl___LAZkt", ii = "Container-module__sizeFluid___eh2as", li = "Container-module__padNone___wG-dH", di = "Container-module__padXs___im5-b", ci = "Container-module__padSm___BpfT7", ui = "Container-module__padMd___dvQHr", _i = "Container-module__padLg___4ntjI", mi = "Container-module__padXl___bDnKP", fi = "Container-module__pad2Xl___8oHv7", ue = {
  container: ti,
  sizeXs: ni,
  sizeSm: oi,
  sizeMd: ai,
  sizeLg: ri,
  sizeXl: si,
  sizeFluid: ii,
  padNone: li,
  padXs: di,
  padSm: ci,
  padMd: ui,
  padLg: _i,
  padXl: mi,
  pad2Xl: fi
}, gi = {
  xs: ue.sizeXs,
  sm: ue.sizeSm,
  md: ue.sizeMd,
  lg: ue.sizeLg,
  xl: ue.sizeXl,
  fluid: ue.sizeFluid
}, pi = {
  none: ue.padNone,
  xs: ue.padXs,
  sm: ue.padSm,
  md: ue.padMd,
  lg: ue.padLg,
  xl: ue.padXl,
  "2xl": ue.pad2Xl
}, hi = T(
  ({ as: e = "div", children: t, size: n = "md", padding: o = "md", className: a, style: r, ...s }, i) => {
    const u = L(ue.container, gi[n], pi[o], a);
    return /* @__PURE__ */ l(e, { ref: i, className: u, style: r, ...s, children: t });
  }
);
hi.displayName = "Container";
const vi = "Button-module__button___2ZuB7", yi = "Button-module__disabled___Tl9fh", bi = "Button-module__fullWidth___36oJT", wi = "Button-module__sizeXs___LBvuQ", Si = "Button-module__sizeSm___NLIhO", Ni = "Button-module__sizeMd___bMgkR", Mi = "Button-module__sizeLg___O7Azz", xi = "Button-module__sizeXl___fFT9A", Ci = "Button-module__radiusNone___fcEMC", Di = "Button-module__radiusXs___NTxKK", ki = "Button-module__radiusSm___lNDhn", zi = "Button-module__radiusMd___6C6rw", Xi = "Button-module__radiusLg___4IxaO", Li = "Button-module__radiusXl___XbnGs", Bi = "Button-module__radiusFull___kCaT7", Pi = "Button-module__filledPrimary___XJXQk", $i = "Button-module__lightPrimary___4Mi5F", Ii = "Button-module__outlinePrimary___lejP5", Wi = "Button-module__subtlePrimary___f6LNa", Ti = "Button-module__linkPrimary___o7Usu", Oi = "Button-module__filledSecondary___rYUad", Fi = "Button-module__lightSecondary___hjcMf", Ei = "Button-module__outlineSecondary___pbujM", Gi = "Button-module__subtleSecondary___GFJsZ", Ai = "Button-module__linkSecondary___eg2-t", Ri = "Button-module__filledNeutral___OH5Bx", Yi = "Button-module__lightNeutral___S4Wpw", Hi = "Button-module__outlineNeutral___oRuD7", ji = "Button-module__subtleNeutral___AgBqL", qi = "Button-module__linkNeutral___iGkqf", Vi = "Button-module__filledSuccess___foCvn", Qi = "Button-module__lightSuccess___u5cVK", Ki = "Button-module__outlineSuccess___hKvXw", Ui = "Button-module__subtleSuccess___6pkyI", Zi = "Button-module__linkSuccess___0M8B0", Ji = "Button-module__filledWarning___jBNAC", el = "Button-module__lightWarning___xZp-e", tl = "Button-module__outlineWarning___HkhNV", nl = "Button-module__subtleWarning___OItOS", ol = "Button-module__linkWarning___z5Le9", al = "Button-module__filledDanger___sI7C9", rl = "Button-module__lightDanger___nNXim", sl = "Button-module__outlineDanger___5p-9P", il = "Button-module__subtleDanger___hdUwc", ll = "Button-module__linkDanger___oNzNe", dl = "Button-module__filledInfo___vL0I4", cl = "Button-module__lightInfo___l-Czf", ul = "Button-module__outlineInfo___FYKas", _l = "Button-module__subtleInfo___2Xhyd", ml = "Button-module__linkInfo___TohTi", fl = "Button-module__leftSection___FeZ93", gl = "Button-module__rightSection___c4FZa", pl = "Button-module__label___UJ3Zt", hl = "Button-module__spinner___ZExvW", N = {
  button: vi,
  disabled: yi,
  fullWidth: bi,
  sizeXs: wi,
  sizeSm: Si,
  sizeMd: Ni,
  sizeLg: Mi,
  sizeXl: xi,
  radiusNone: Ci,
  radiusXs: Di,
  radiusSm: ki,
  radiusMd: zi,
  radiusLg: Xi,
  radiusXl: Li,
  radiusFull: Bi,
  filledPrimary: Pi,
  lightPrimary: $i,
  outlinePrimary: Ii,
  subtlePrimary: Wi,
  linkPrimary: Ti,
  filledSecondary: Oi,
  lightSecondary: Fi,
  outlineSecondary: Ei,
  subtleSecondary: Gi,
  linkSecondary: Ai,
  filledNeutral: Ri,
  lightNeutral: Yi,
  outlineNeutral: Hi,
  subtleNeutral: ji,
  linkNeutral: qi,
  filledSuccess: Vi,
  lightSuccess: Qi,
  outlineSuccess: Ki,
  subtleSuccess: Ui,
  linkSuccess: Zi,
  filledWarning: Ji,
  lightWarning: el,
  outlineWarning: tl,
  subtleWarning: nl,
  linkWarning: ol,
  filledDanger: al,
  lightDanger: rl,
  outlineDanger: sl,
  subtleDanger: il,
  linkDanger: ll,
  filledInfo: dl,
  lightInfo: cl,
  outlineInfo: ul,
  subtleInfo: _l,
  linkInfo: ml,
  leftSection: fl,
  rightSection: gl,
  label: pl,
  spinner: hl
}, vl = {
  xs: N.sizeXs,
  sm: N.sizeSm,
  md: N.sizeMd,
  lg: N.sizeLg,
  xl: N.sizeXl
}, yl = {
  none: N.radiusNone,
  xs: N.radiusXs,
  sm: N.radiusSm,
  md: N.radiusMd,
  lg: N.radiusLg,
  xl: N.radiusXl,
  full: N.radiusFull
}, bl = {
  "filled-primary": N.filledPrimary,
  "filled-secondary": N.filledSecondary,
  "filled-neutral": N.filledNeutral,
  "filled-success": N.filledSuccess,
  "filled-warning": N.filledWarning,
  "filled-danger": N.filledDanger,
  "filled-info": N.filledInfo,
  "light-primary": N.lightPrimary,
  "light-secondary": N.lightSecondary,
  "light-neutral": N.lightNeutral,
  "light-success": N.lightSuccess,
  "light-warning": N.lightWarning,
  "light-danger": N.lightDanger,
  "light-info": N.lightInfo,
  "outline-primary": N.outlinePrimary,
  "outline-secondary": N.outlineSecondary,
  "outline-neutral": N.outlineNeutral,
  "outline-success": N.outlineSuccess,
  "outline-warning": N.outlineWarning,
  "outline-danger": N.outlineDanger,
  "outline-info": N.outlineInfo,
  "subtle-primary": N.subtlePrimary,
  "subtle-secondary": N.subtleSecondary,
  "subtle-neutral": N.subtleNeutral,
  "subtle-success": N.subtleSuccess,
  "subtle-warning": N.subtleWarning,
  "subtle-danger": N.subtleDanger,
  "subtle-info": N.subtleInfo,
  "link-primary": N.linkPrimary,
  "link-secondary": N.linkSecondary,
  "link-neutral": N.linkNeutral,
  "link-success": N.linkSuccess,
  "link-warning": N.linkWarning,
  "link-danger": N.linkDanger,
  "link-info": N.linkInfo
}, wl = T(
  ({ children: e, variant: t = "filled", color: n = "primary", size: o = "md", radius: a = "md", loading: r = !1, disabled: s = !1, fullWidth: i = !1, leftSection: u, rightSection: d, type: c = "button", className: _, style: m, ...g }, h) => {
    const b = t + "-" + n, p = bl[b] || N.filledPrimary, S = L(N.button, vl[o], yl[a], p, { [N.fullWidth]: i, [N.disabled]: s || r }, _);
    return /* @__PURE__ */ k("button", { ref: h, type: c, disabled: s || r, "aria-busy": r, className: S, style: m, ...g, children: [
      r ? /* @__PURE__ */ l("span", { className: N.spinner, "aria-hidden": "true", children: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
        /* @__PURE__ */ l("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
      ] }) }) : u && /* @__PURE__ */ l("span", { className: N.leftSection, children: u }),
      /* @__PURE__ */ l("span", { className: N.label, children: e }),
      !r && d && /* @__PURE__ */ l("span", { className: N.rightSection, children: d })
    ] });
  }
);
wl.displayName = "Button";
const Sl = "IconButton-module__iconButton___JAF-a", Nl = "IconButton-module__disabled___HV-cc", Ml = "IconButton-module__sizeXs___RZG2T", xl = "IconButton-module__sizeSm___XPiUo", Cl = "IconButton-module__sizeMd___6uTyJ", Dl = "IconButton-module__sizeLg___AQhjY", kl = "IconButton-module__sizeXl___94RFK", zl = "IconButton-module__radiusNone___eFnz1", Xl = "IconButton-module__radiusXs___BLufM", Ll = "IconButton-module__radiusSm___o6ws0", Bl = "IconButton-module__radiusMd___Kbm2a", Pl = "IconButton-module__radiusLg___g0tOq", $l = "IconButton-module__radiusXl___g4YBl", Il = "IconButton-module__radiusFull___XNprk", Wl = "IconButton-module__subtleNeutral___h8UeA", Tl = "IconButton-module__filledNeutral___kvDx8", Ol = "IconButton-module__lightNeutral___sZVRZ", Fl = "IconButton-module__outlineNeutral___Jhyjb", El = "IconButton-module__subtlePrimary___KHLpz", Gl = "IconButton-module__filledPrimary___2ol5Q", Al = "IconButton-module__lightPrimary___qlCMV", Rl = "IconButton-module__outlinePrimary___AqPi8", Yl = "IconButton-module__subtleSecondary___ZUGuJ", Hl = "IconButton-module__filledSecondary___cxoYN", jl = "IconButton-module__lightSecondary___hWfU-", ql = "IconButton-module__outlineSecondary___UY-go", Vl = "IconButton-module__subtleSuccess___dlxqM", Ql = "IconButton-module__filledSuccess___ULKTd", Kl = "IconButton-module__lightSuccess___dXTbK", Ul = "IconButton-module__outlineSuccess___DlqE8", Zl = "IconButton-module__subtleWarning___dmAXE", Jl = "IconButton-module__filledWarning___av8qf", ed = "IconButton-module__lightWarning___3XhVl", td = "IconButton-module__outlineWarning___xePwu", nd = "IconButton-module__subtleDanger___YT9LD", od = "IconButton-module__filledDanger___ApWqu", ad = "IconButton-module__lightDanger___ccZbA", rd = "IconButton-module__outlineDanger___cUc1g", sd = "IconButton-module__subtleInfo___-ndj-", id = "IconButton-module__filledInfo___6OY2a", ld = "IconButton-module__lightInfo___vQTgg", dd = "IconButton-module__outlineInfo___RQlUd", cd = "IconButton-module__spinner___yePta", z = {
  iconButton: Sl,
  disabled: Nl,
  sizeXs: Ml,
  sizeSm: xl,
  sizeMd: Cl,
  sizeLg: Dl,
  sizeXl: kl,
  radiusNone: zl,
  radiusXs: Xl,
  radiusSm: Ll,
  radiusMd: Bl,
  radiusLg: Pl,
  radiusXl: $l,
  radiusFull: Il,
  subtleNeutral: Wl,
  filledNeutral: Tl,
  lightNeutral: Ol,
  outlineNeutral: Fl,
  subtlePrimary: El,
  filledPrimary: Gl,
  lightPrimary: Al,
  outlinePrimary: Rl,
  subtleSecondary: Yl,
  filledSecondary: Hl,
  lightSecondary: jl,
  outlineSecondary: ql,
  subtleSuccess: Vl,
  filledSuccess: Ql,
  lightSuccess: Kl,
  outlineSuccess: Ul,
  subtleWarning: Zl,
  filledWarning: Jl,
  lightWarning: ed,
  outlineWarning: td,
  subtleDanger: nd,
  filledDanger: od,
  lightDanger: ad,
  outlineDanger: rd,
  subtleInfo: sd,
  filledInfo: id,
  lightInfo: ld,
  outlineInfo: dd,
  spinner: cd
}, ud = {
  xs: z.sizeXs,
  sm: z.sizeSm,
  md: z.sizeMd,
  lg: z.sizeLg,
  xl: z.sizeXl
}, _d = {
  none: z.radiusNone,
  xs: z.radiusXs,
  sm: z.radiusSm,
  md: z.radiusMd,
  lg: z.radiusLg,
  xl: z.radiusXl,
  full: z.radiusFull
}, md = {
  "subtle-neutral": z.subtleNeutral,
  "filled-neutral": z.filledNeutral,
  "light-neutral": z.lightNeutral,
  "outline-neutral": z.outlineNeutral,
  "subtle-primary": z.subtlePrimary,
  "filled-primary": z.filledPrimary,
  "light-primary": z.lightPrimary,
  "outline-primary": z.outlinePrimary,
  "subtle-secondary": z.subtleSecondary,
  "filled-secondary": z.filledSecondary,
  "light-secondary": z.lightSecondary,
  "outline-secondary": z.outlineSecondary,
  "subtle-success": z.subtleSuccess,
  "filled-success": z.filledSuccess,
  "light-success": z.lightSuccess,
  "outline-success": z.outlineSuccess,
  "subtle-warning": z.subtleWarning,
  "filled-warning": z.filledWarning,
  "light-warning": z.lightWarning,
  "outline-warning": z.outlineWarning,
  "subtle-danger": z.subtleDanger,
  "filled-danger": z.filledDanger,
  "light-danger": z.lightDanger,
  "outline-danger": z.outlineDanger,
  "subtle-info": z.subtleInfo,
  "filled-info": z.filledInfo,
  "light-info": z.lightInfo,
  "outline-info": z.outlineInfo
}, fd = T(
  ({ icon: e, "aria-label": t, variant: n = "subtle", color: o = "neutral", size: a = "md", radius: r = "md", loading: s = !1, disabled: i = !1, type: u = "button", className: d, style: c, ..._ }, m) => {
    const g = n + "-" + o, h = L(z.iconButton, ud[a], _d[r], md[g] || z.subtleNeutral, { [z.disabled]: i || s }, d);
    return /* @__PURE__ */ l("button", { ref: m, type: u, "aria-label": t, disabled: i || s, "aria-busy": s, className: h, style: c, ..._, children: s ? /* @__PURE__ */ l("span", { className: z.spinner, "aria-hidden": "true", children: /* @__PURE__ */ k("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
      /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
      /* @__PURE__ */ l("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
    ] }) }) : e });
  }
);
fd.displayName = "IconButton";
const gd = "InputWrapper-module__wrapper___WHwoB", pd = "InputWrapper-module__labelRow___jBw-D", hd = "InputWrapper-module__label___5Iora", vd = "InputWrapper-module__requiredAsterisk___BA3Kq", yd = "InputWrapper-module__description___d5VI9", bd = "InputWrapper-module__inputArea___HrYX6", wd = "InputWrapper-module__errorText___e2CDJ", Sd = "InputWrapper-module__sizeXs___6ESPO", Nd = "InputWrapper-module__sizeSm___PnTVy", Md = "InputWrapper-module__sizeMd___v-j6k", xd = "InputWrapper-module__sizeLg___XP-zf", Cd = "InputWrapper-module__sizeXl___s0rc1", Dd = "InputWrapper-module__disabled___vXh63", pe = {
  wrapper: gd,
  labelRow: pd,
  label: hd,
  requiredAsterisk: vd,
  description: yd,
  inputArea: bd,
  errorText: wd,
  sizeXs: Sd,
  sizeSm: Nd,
  sizeMd: Md,
  sizeLg: xd,
  sizeXl: Cd,
  disabled: Dd
}, kd = {
  xs: pe.sizeXs,
  sm: pe.sizeSm,
  md: pe.sizeMd,
  lg: pe.sizeLg,
  xl: pe.sizeXl
}, Ae = T(
  ({ children: e, label: t, description: n, error: o, required: a = !1, size: r = "md", disabled: s = !1, className: i, style: u, id: d }, c) => {
    const _ = !!o, m = typeof o == "string" ? o : void 0, g = L(pe.wrapper, kd[r], { [pe.disabled]: s }, i);
    return /* @__PURE__ */ k("div", { ref: c, className: g, style: u, id: d, children: [
      t && /* @__PURE__ */ l("div", { className: pe.labelRow, children: /* @__PURE__ */ k("label", { className: pe.label, children: [
        t,
        a && /* @__PURE__ */ l("span", { className: pe.requiredAsterisk, children: "*" })
      ] }) }),
      n && /* @__PURE__ */ l("div", { className: pe.description, children: n }),
      /* @__PURE__ */ l("div", { className: pe.inputArea, children: e }),
      _ && m && /* @__PURE__ */ l("div", { className: pe.errorText, children: m })
    ] });
  }
);
Ae.displayName = "InputWrapper";
const zd = "TextField-module__inputContainer___azWVB", Xd = "TextField-module__input___RL-My", Ld = "TextField-module__error___HzypY", Bd = "TextField-module__sizeXs___lVOmZ", Pd = "TextField-module__sizeSm___EA3-E", $d = "TextField-module__sizeMd___58-pc", Id = "TextField-module__sizeLg___L96aw", Wd = "TextField-module__sizeXl___VmFIo", Td = "TextField-module__leftSection___iUQ9e", Od = "TextField-module__rightSection___i4oSs", Fd = "TextField-module__withLeftSection___xSZTD", Ed = "TextField-module__withRightSection___b88-7", U = {
  inputContainer: zd,
  input: Xd,
  error: Ld,
  sizeXs: Bd,
  sizeSm: Pd,
  sizeMd: $d,
  sizeLg: Id,
  sizeXl: Wd,
  leftSection: Td,
  rightSection: Od,
  withLeftSection: Fd,
  withRightSection: Ed
}, Gd = {
  xs: U.sizeXs,
  sm: U.sizeSm,
  md: U.sizeMd,
  lg: U.sizeLg,
  xl: U.sizeXl
}, Ad = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: i, placeholder: u, type: d = "text", leftSection: c, rightSection: _, className: m, style: g, id: h, onChange: b, ...p }, S) => {
    const M = !!n, A = L(U.input, Gd[a], { [U.error]: M, [U.withLeftSection]: !!c, [U.withRightSection]: !!_ });
    return /* @__PURE__ */ l(Ae, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: m, style: g, children: /* @__PURE__ */ k("div", { className: U.inputContainer, children: [
      c && /* @__PURE__ */ l("span", { className: U.leftSection, children: c }),
      /* @__PURE__ */ l("input", { ref: S, id: h, type: d, value: s, defaultValue: i, placeholder: u, disabled: r, required: o, "aria-invalid": M, className: A, onChange: b, ...p }),
      _ && /* @__PURE__ */ l("span", { className: U.rightSection, children: _ })
    ] }) });
  }
);
Ad.displayName = "TextField";
const Rd = "NumberInput-module__controls___8UfQ2", Yd = "NumberInput-module__controlButton___epVGN", Hd = "NumberInput-module__controlIcon___0Jsyn", He = {
  controls: Rd,
  controlButton: Yd,
  controlIcon: Hd
}, jd = {
  xs: U.sizeXs,
  sm: U.sizeSm,
  md: U.sizeMd,
  lg: U.sizeLg,
  xl: U.sizeXl
}, qd = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: i = "", min: u = -1 / 0, max: d = 1 / 0, step: c = 1, precision: _ = 0, hideControls: m = !1, onChange: g, className: h, style: b, placeholder: p, id: S, ...M }, A) => {
    const O = s !== void 0, [E, P] = Z(() => {
      const Y = O ? s : i;
      return typeof Y == "number" ? _ > 0 ? Y.toFixed(_) : String(Y) : "";
    });
    J(() => {
      O && P(typeof s == "number" ? _ > 0 ? s.toFixed(_) : String(s) : "");
    }, [s, O, _]);
    const ee = (Y) => {
      const H = Math.max(u, Math.min(d, Y));
      return _ > 0 ? H.toFixed(_) : String(H);
    }, de = (Y) => {
      if (Y === "" || Y === "-") return;
      const H = parseFloat(Y);
      return isNaN(H) ? void 0 : Math.max(u, Math.min(d, H));
    }, be = (Y) => {
      const H = Y.target.value;
      P(H), g?.(de(H));
    }, oe = (Y) => {
      const H = de(E);
      P(H !== void 0 ? ee(H) : ""), M.onBlur?.(Y);
    }, ne = (Y) => {
      if (r) return;
      const H = de(E) ?? (Y === 1 ? u !== -1 / 0 ? u : 0 : d !== 1 / 0 ? d : 0), v = ee(H + Y * c);
      P(v), g?.(parseFloat(v));
    }, ve = !!n, ye = !m && !r, fe = L(U.input, jd[a], { [U.error]: ve, [U.withRightSection]: ye });
    return /* @__PURE__ */ l(Ae, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: h, style: b, children: /* @__PURE__ */ k("div", { className: U.inputContainer, children: [
      /* @__PURE__ */ l("input", { ref: A, id: S, type: "text", inputMode: "decimal", value: E, placeholder: p, disabled: r, required: o, "aria-invalid": ve, className: fe, onChange: be, onBlur: oe, ...M }),
      ye && /* @__PURE__ */ k("div", { className: He.controls, children: [
        /* @__PURE__ */ l("button", { type: "button", tabIndex: -1, "aria-label": "Increment value", className: He.controlButton, onClick: () => ne(1), children: /* @__PURE__ */ l("svg", { className: He.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "18 15 12 9 6 15" }) }) }),
        /* @__PURE__ */ l("button", { type: "button", tabIndex: -1, "aria-label": "Decrement value", className: He.controlButton, onClick: () => ne(-1), children: /* @__PURE__ */ l("svg", { className: He.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "6 9 12 15 18 9" }) }) })
      ] })
    ] }) });
  }
);
qd.displayName = "NumberInput";
const Vd = "Select-module__selectContainer___uzCk5", Qd = "Select-module__trigger___ECKfC", Kd = "Select-module__placeholder___yUgBU", Ud = "Select-module__valueText___7y3On", Zd = "Select-module__error___sw9MU", Jd = "Select-module__sizeXs___NqcyQ", ec = "Select-module__sizeSm___2SRQF", tc = "Select-module__sizeMd___BDWO8", nc = "Select-module__sizeLg___xz6D8", oc = "Select-module__sizeXl___GVxKe", ac = "Select-module__actions___t3UnQ", rc = "Select-module__clearButton___uhTpE", sc = "Select-module__chevron___PLUsh", ic = "Select-module__chevronOpen___aOks0", lc = "Select-module__dropdown___glgl4", dc = "Select-module__searchInput___mqRgu", cc = "Select-module__optionsList___mKHJh", uc = "Select-module__option___Hvo8n", _c = "Select-module__optionDisabled___FhDw-", mc = "Select-module__optionSelected___egAHP", fc = "Select-module__emptyState___weIb5", Q = {
  selectContainer: Vd,
  trigger: Qd,
  placeholder: Kd,
  valueText: Ud,
  error: Zd,
  sizeXs: Jd,
  sizeSm: ec,
  sizeMd: tc,
  sizeLg: nc,
  sizeXl: oc,
  actions: ac,
  clearButton: rc,
  chevron: sc,
  chevronOpen: ic,
  dropdown: lc,
  searchInput: dc,
  optionsList: cc,
  option: uc,
  optionDisabled: _c,
  optionSelected: mc,
  emptyState: fc
}, gc = {
  xs: Q.sizeXs,
  sm: Q.sizeSm,
  md: Q.sizeMd,
  lg: Q.sizeLg,
  xl: Q.sizeXl
}, pc = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, data: s, value: i, defaultValue: u, placeholder: d = "Select option...", searchable: c = !1, clearable: _ = !1, onChange: m, className: g, style: h, id: b, ...p }, S) => {
    const M = i !== void 0, [A, O] = Z((M ? i : u) ?? null), [E, P] = Z(!1), [ee, de] = Z(""), [be, oe] = Z({ top: 0, left: 0, width: 0 }), ne = Se(null), ve = Se(null), ye = Se(null), fe = Ge(), Y = b || fe;
    J(() => {
      M && O(i ?? null);
    }, [i, M]);
    const H = () => {
      if (!ne.current) return;
      const w = ne.current.getBoundingClientRect(), ae = 240, Re = window.innerHeight - w.bottom;
      let Ye = w.bottom + 4;
      Re < ae && w.top > ae && (Ye = Math.max(8, w.top - ae - 4)), oe({
        top: Ye,
        left: w.left,
        width: w.width
      });
    };
    J(() => {
      if (!E) return;
      H();
      const w = () => H(), ae = () => H();
      return window.addEventListener("scroll", w, !0), window.addEventListener("resize", ae), () => {
        window.removeEventListener("scroll", w, !0), window.removeEventListener("resize", ae);
      };
    }, [E]), J(() => {
      if (!E) return;
      const w = (Re) => {
        const Ye = Re.target;
        ne.current && !ne.current.contains(Ye) && ve.current && !ve.current.contains(Ye) && P(!1);
      }, ae = (Re) => {
        Re.key === "Escape" && P(!1);
      };
      return document.addEventListener("mousedown", w), document.addEventListener("keydown", ae), () => {
        document.removeEventListener("mousedown", w), document.removeEventListener("keydown", ae);
      };
    }, [E]), J(() => {
      E && c && ye.current && ye.current.focus();
    }, [E, c]);
    const v = Dt.useMemo(() => s.map((w) => typeof w == "string" ? { label: w, value: w } : w), [s]), y = Dt.useMemo(() => {
      if (!c || !ee.trim()) return v;
      const w = ee.toLowerCase();
      return v.filter((ae) => ae.label.toLowerCase().includes(w));
    }, [v, c, ee]), we = v.find((w) => w.value === A), ke = (w, ae) => {
      ae || (M || O(w), m?.(w), P(!1), de(""));
    }, x = (w) => {
      w.stopPropagation(), M || O(null), m?.(null);
    }, F = (w) => {
      r || (w.key === "Escape" ? P(!1) : (w.key === "Enter" || w.key === " " || w.key === "ArrowDown") && (E || (w.preventDefault(), P(!0))));
    }, ce = !!n, ge = L(Q.trigger, gc[a], { [Q.error]: ce }), ze = E && typeof document < "u" ? ot(
      /* @__PURE__ */ k(
        "div",
        {
          ref: ve,
          className: Q.dropdown,
          role: "listbox",
          style: {
            top: `${be.top}px`,
            left: `${be.left}px`,
            width: `${be.width}px`
          },
          children: [
            c && /* @__PURE__ */ l(
              "input",
              {
                ref: ye,
                type: "text",
                placeholder: "Search options...",
                value: ee,
                onChange: (w) => de(w.target.value),
                className: Q.searchInput,
                onClick: (w) => w.stopPropagation()
              }
            ),
            /* @__PURE__ */ l("div", { className: Q.optionsList, children: y.length === 0 ? /* @__PURE__ */ l("div", { className: Q.emptyState, children: "No options found" }) : y.map((w) => {
              const ae = w.value === A;
              return /* @__PURE__ */ k(
                "div",
                {
                  role: "option",
                  "aria-selected": ae,
                  "aria-disabled": w.disabled,
                  className: L(Q.option, {
                    [Q.optionSelected]: ae,
                    [Q.optionDisabled]: w.disabled
                  }),
                  onClick: () => ke(w.value, w.disabled),
                  children: [
                    /* @__PURE__ */ l("span", { children: w.label }),
                    ae && /* @__PURE__ */ l("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ l("polyline", { points: "20 6 9 17 4 12" }) })
                  ]
                },
                w.value
              );
            }) })
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(Ae, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: g, style: h, children: /* @__PURE__ */ k("div", { className: Q.selectContainer, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (w) => {
            ne.current = w, typeof S == "function" ? S(w) : S && (S.current = w);
          },
          id: Y,
          type: "button",
          role: "combobox",
          "aria-expanded": E,
          "aria-haspopup": "listbox",
          "aria-invalid": ce,
          disabled: r,
          className: ge,
          onClick: () => !r && P((w) => !w),
          onKeyDown: F,
          ...p,
          children: [
            /* @__PURE__ */ l("span", { className: we ? Q.valueText : Q.placeholder, children: we ? we.label : d }),
            /* @__PURE__ */ k("div", { className: Q.actions, children: [
              _ && A && !r && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear selection", className: Q.clearButton, onClick: x, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: L(Q.chevron, { [Q.chevronOpen]: E }), children: /* @__PURE__ */ l("polyline", { points: "6 9 12 15 18 9" }) })
            ] })
          ]
        }
      ),
      ze
    ] }) });
  }
);
pc.displayName = "Select";
const hc = "Switch-module__root___Y5Ydi", vc = "Switch-module__container___JzxEt", yc = "Switch-module__containerDisabled___JYuGJ", bc = "Switch-module__labelLeft___-aOkY", wc = "Switch-module__input___5BPNu", Sc = "Switch-module__track___7ObdZ", Nc = "Switch-module__knob___vKNOc", Mc = "Switch-module__sizeXs___473fx", xc = "Switch-module__sizeSm___MvsLM", Cc = "Switch-module__sizeMd___bXgKq", Dc = "Switch-module__sizeLg___S9a0j", kc = "Switch-module__sizeXl___H7dXN", zc = "Switch-module__colorPrimary___Bp7Ru", Xc = "Switch-module__colorSecondary___MZAA0", Lc = "Switch-module__colorNeutral___RJv2Q", Bc = "Switch-module__colorSuccess___n3Atm", Pc = "Switch-module__colorWarning___OJiZY", $c = "Switch-module__colorDanger___niua2", Ic = "Switch-module__colorInfo___-IzZH", Wc = "Switch-module__label___LrH7V", Tc = "Switch-module__description___CClza", Oc = "Switch-module__errorText___9s1pb", q = {
  root: hc,
  container: vc,
  containerDisabled: yc,
  labelLeft: bc,
  input: wc,
  track: Sc,
  knob: Nc,
  sizeXs: Mc,
  sizeSm: xc,
  sizeMd: Cc,
  sizeLg: Dc,
  sizeXl: kc,
  colorPrimary: zc,
  colorSecondary: Xc,
  colorNeutral: Lc,
  colorSuccess: Bc,
  colorWarning: Pc,
  colorDanger: $c,
  colorInfo: Ic,
  label: Wc,
  description: Tc,
  errorText: Oc
}, Fc = {
  xs: q.sizeXs,
  sm: q.sizeSm,
  md: q.sizeMd,
  lg: q.sizeLg,
  xl: q.sizeXl
}, Ec = {
  primary: q.colorPrimary,
  secondary: q.colorSecondary,
  neutral: q.colorNeutral,
  success: q.colorSuccess,
  warning: q.colorWarning,
  danger: q.colorDanger,
  info: q.colorInfo
}, Gc = T(
  ({ label: e, labelPosition: t = "right", color: n = "primary", size: o = "md", disabled: a = !1, description: r, error: s, checked: i, defaultChecked: u, className: d, style: c, id: _, onChange: m, ...g }, h) => {
    const b = Ge(), p = _ || b, S = !!s, M = typeof s == "string" ? s : void 0;
    return /* @__PURE__ */ k("div", { className: L(q.root, Fc[o], Ec[n], d), style: c, children: [
      /* @__PURE__ */ k("label", { htmlFor: p, className: L(q.container, { [q.containerDisabled]: a, [q.labelLeft]: t === "left" }), children: [
        /* @__PURE__ */ l("input", { ref: h, id: p, type: "checkbox", role: "switch", "aria-checked": i, "aria-invalid": S, disabled: a, checked: i, defaultChecked: u, className: q.input, onChange: m, ...g }),
        /* @__PURE__ */ l("span", { className: q.track, children: /* @__PURE__ */ l("span", { className: q.knob }) }),
        e && /* @__PURE__ */ l("span", { className: q.label, children: e })
      ] }),
      r && /* @__PURE__ */ l("div", { className: q.description, children: r }),
      S && M && /* @__PURE__ */ l("div", { className: q.errorText, children: M })
    ] });
  }
);
Gc.displayName = "Switch";
function B(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function he(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ie(e, t) {
  const n = B(e);
  return isNaN(t) ? he(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Me(e, t) {
  const n = B(e);
  if (isNaN(t)) return he(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = he(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const r = a.getDate();
  return o >= r ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
const gt = 6048e5, Ac = 864e5;
let Rc = {};
function Qe() {
  return Rc;
}
function De(e, t) {
  const n = Qe(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = B(e), r = a.getDay(), s = (r < o ? 7 : 0) + r - o;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Te(e) {
  return De(e, { weekStartsOn: 1 });
}
function Rt(e) {
  const t = B(e), n = t.getFullYear(), o = he(e, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Te(o), r = he(e, 0);
  r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0);
  const s = Te(r);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ee(e) {
  const t = B(e);
  return t.setHours(0, 0, 0, 0), t;
}
function et(e) {
  const t = B(e), n = new Date(
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
function Ce(e, t) {
  const n = Ee(e), o = Ee(t), a = +n - et(n), r = +o - et(o);
  return Math.round((a - r) / Ac);
}
function Yc(e) {
  const t = Rt(e), n = he(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Te(n);
}
function mt(e, t) {
  const n = t * 7;
  return ie(e, n);
}
function Hc(e, t) {
  return Me(e, t * 12);
}
function jc(e) {
  let t;
  return e.forEach(function(n) {
    const o = B(n);
    (t === void 0 || t < o || isNaN(Number(o))) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function qc(e) {
  let t;
  return e.forEach((n) => {
    const o = B(n);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function _e(e, t) {
  const n = Ee(e), o = Ee(t);
  return +n == +o;
}
function pt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function tt(e) {
  if (!pt(e) && typeof e != "number")
    return !1;
  const t = B(e);
  return !isNaN(Number(t));
}
function Ve(e, t) {
  const n = B(e), o = B(t), a = n.getFullYear() - o.getFullYear(), r = n.getMonth() - o.getMonth();
  return a * 12 + r;
}
function Vc(e, t, n) {
  const o = De(e, n), a = De(t, n), r = +o - et(o), s = +a - et(a);
  return Math.round((r - s) / gt);
}
function ht(e) {
  const t = B(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function me(e) {
  const t = B(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Yt(e) {
  const t = B(e), n = he(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vt(e, t) {
  const n = Qe(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = B(e), r = a.getDay(), s = (r < o ? -7 : 0) + 6 - (r - o);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function Ht(e) {
  return vt(e, { weekStartsOn: 1 });
}
const Qc = {
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
}, Kc = (e, t, n) => {
  let o;
  const a = Qc[e];
  return typeof a == "string" ? o = a : t === 1 ? o = a.one : o = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
function st(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Uc = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zc = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Jc = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eu = {
  date: st({
    formats: Uc,
    defaultWidth: "full"
  }),
  time: st({
    formats: Zc,
    defaultWidth: "full"
  }),
  dateTime: st({
    formats: Jc,
    defaultWidth: "full"
  })
}, tu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nu = (e, t, n, o) => tu[e];
function je(e) {
  return (t, n) => {
    const o = n?.context ? String(n.context) : "standalone";
    let a;
    if (o === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : s;
      a = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[i] || e.values[s];
    }
    const r = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[r];
  };
}
const ou = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, au = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ru = {
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
}, su = {
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
}, iu = {
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
}, lu = {
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
}, du = (e, t) => {
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
}, cu = {
  ordinalNumber: du,
  era: je({
    values: ou,
    defaultWidth: "wide"
  }),
  quarter: je({
    values: au,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: je({
    values: ru,
    defaultWidth: "wide"
  }),
  day: je({
    values: su,
    defaultWidth: "wide"
  }),
  dayPeriod: je({
    values: iu,
    defaultWidth: "wide",
    formattingValues: lu,
    defaultFormattingWidth: "wide"
  })
};
function qe(e) {
  return (t, n = {}) => {
    const o = n.width, a = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], r = t.match(a);
    if (!r)
      return null;
    const s = r[0], i = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(i) ? _u(i, (_) => _.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      uu(i, (_) => _.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const c = t.slice(s.length);
    return { value: d, rest: c };
  };
}
function uu(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function _u(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function mu(e) {
  return (t, n = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const a = o[0], r = t.match(e.parsePattern);
    if (!r) return null;
    let s = e.valueCallback ? e.valueCallback(r[0]) : r[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(a.length);
    return { value: s, rest: i };
  };
}
const fu = /^(\d+)(th|st|nd|rd)?/i, gu = /\d+/i, pu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hu = {
  any: [/^b/i, /^(a|c)/i]
}, vu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wu = {
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
}, Su = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Nu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Mu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xu = {
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
}, Cu = {
  ordinalNumber: mu({
    matchPattern: fu,
    parsePattern: gu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: qe({
    matchPatterns: pu,
    defaultMatchWidth: "wide",
    parsePatterns: hu,
    defaultParseWidth: "any"
  }),
  quarter: qe({
    matchPatterns: vu,
    defaultMatchWidth: "wide",
    parsePatterns: yu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: qe({
    matchPatterns: bu,
    defaultMatchWidth: "wide",
    parsePatterns: wu,
    defaultParseWidth: "any"
  }),
  day: qe({
    matchPatterns: Su,
    defaultMatchWidth: "wide",
    parsePatterns: Nu,
    defaultParseWidth: "any"
  }),
  dayPeriod: qe({
    matchPatterns: Mu,
    defaultMatchWidth: "any",
    parsePatterns: xu,
    defaultParseWidth: "any"
  })
}, jt = {
  code: "en-US",
  formatDistance: Kc,
  formatLong: eu,
  formatRelative: nu,
  localize: cu,
  match: Cu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Du(e) {
  const t = B(e);
  return Ce(t, Yt(t)) + 1;
}
function qt(e) {
  const t = B(e), n = +Te(t) - +Yc(t);
  return Math.round(n / gt) + 1;
}
function Vt(e, t) {
  const n = B(e), o = n.getFullYear(), a = Qe(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, s = he(e, 0);
  s.setFullYear(o + 1, 0, r), s.setHours(0, 0, 0, 0);
  const i = De(s, t), u = he(e, 0);
  u.setFullYear(o, 0, r), u.setHours(0, 0, 0, 0);
  const d = De(u, t);
  return n.getTime() >= i.getTime() ? o + 1 : n.getTime() >= d.getTime() ? o : o - 1;
}
function ku(e, t) {
  const n = Qe(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = Vt(e, t), r = he(e, 0);
  return r.setFullYear(a, 0, o), r.setHours(0, 0, 0, 0), De(r, t);
}
function Qt(e, t) {
  const n = B(e), o = +De(n, t) - +ku(n, t);
  return Math.round(o / gt) + 1;
}
function I(e, t) {
  const n = e < 0 ? "-" : "", o = Math.abs(e).toString().padStart(t, "0");
  return n + o;
}
const Be = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
    return I(t === "yy" ? o % 100 : o, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : I(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return I(e.getDate(), t.length);
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
    return I(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return I(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return I(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return I(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, o = e.getMilliseconds(), a = Math.trunc(
      o * Math.pow(10, n - 3)
    );
    return I(a, t.length);
  }
}, Fe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, kt = {
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
      const o = e.getFullYear(), a = o > 0 ? o : 1 - o;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Be.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, o) {
    const a = Vt(e, o), r = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = r % 100;
      return I(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(r, { unit: "year" }) : I(r, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Rt(e);
    return I(n, t.length);
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
    return I(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(o);
      case "QQ":
        return I(o, 2);
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
        return I(o, 2);
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
        return Be.M(e, t);
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
        return I(o + 1, 2);
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
    const a = Qt(e, o);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : I(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const o = qt(e);
    return t === "Io" ? n.ordinalNumber(o, { unit: "week" }) : I(o, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Be.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const o = Du(e);
    return t === "Do" ? n.ordinalNumber(o, { unit: "dayOfYear" }) : I(o, t.length);
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
    const a = e.getDay(), r = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(r);
      case "ee":
        return I(r, 2);
      case "eo":
        return n.ordinalNumber(r, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, o) {
    const a = e.getDay(), r = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(r);
      case "cc":
        return I(r, t.length);
      case "co":
        return n.ordinalNumber(r, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const o = e.getDay(), a = o === 0 ? 7 : o;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return I(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
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
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const o = e.getHours();
    let a;
    switch (o === 12 ? a = Fe.noon : o === 0 ? a = Fe.midnight : a = o / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const o = e.getHours();
    let a;
    switch (o >= 17 ? a = Fe.evening : o >= 12 ? a = Fe.afternoon : o >= 4 ? a = Fe.morning : a = Fe.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
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
    return Be.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Be.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const o = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(o, { unit: "hour" }) : I(o, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let o = e.getHours();
    return o === 0 && (o = 24), t === "ko" ? n.ordinalNumber(o, { unit: "hour" }) : I(o, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Be.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Be.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Be.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const o = e.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return Xt(o);
      case "XXXX":
      case "XX":
        return Ie(o);
      case "XXXXX":
      case "XXX":
      default:
        return Ie(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Xt(o);
      case "xxxx":
      case "xx":
        return Ie(o);
      case "xxxxx":
      case "xxx":
      default:
        return Ie(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + zt(o, ":");
      case "OOOO":
      default:
        return "GMT" + Ie(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + zt(o, ":");
      case "zzzz":
      default:
        return "GMT" + Ie(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const o = Math.trunc(e.getTime() / 1e3);
    return I(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const o = e.getTime();
    return I(o, t.length);
  }
};
function zt(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), a = Math.trunc(o / 60), r = o % 60;
  return r === 0 ? n + String(a) : n + String(a) + t + I(r, 2);
}
function Xt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + I(Math.abs(e) / 60, 2) : Ie(e, t);
}
function Ie(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), a = I(Math.trunc(o / 60), 2), r = I(o % 60, 2);
  return n + a + t + r;
}
const Lt = (e, t) => {
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
}, Kt = (e, t) => {
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
}, zu = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], o = n[1], a = n[2];
  if (!a)
    return Lt(e, t);
  let r;
  switch (o) {
    case "P":
      r = t.dateTime({ width: "short" });
      break;
    case "PP":
      r = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      r = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      r = t.dateTime({ width: "full" });
      break;
  }
  return r.replace("{{date}}", Lt(o, t)).replace("{{time}}", Kt(a, t));
}, Xu = {
  p: Kt,
  P: zu
}, Lu = /^D+$/, Bu = /^Y+$/, Pu = ["D", "DD", "YY", "YYYY"];
function $u(e) {
  return Lu.test(e);
}
function Iu(e) {
  return Bu.test(e);
}
function Wu(e, t, n) {
  const o = Tu(e, t, n);
  if (console.warn(o), Pu.includes(e)) throw new RangeError(o);
}
function Tu(e, t, n) {
  const o = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ou = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Eu = /^'([^]*?)'?$/, Gu = /''/g, Au = /[a-zA-Z]/;
function Ne(e, t, n) {
  const o = Qe(), a = n?.locale ?? o.locale ?? jt, r = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, i = B(e);
  if (!tt(i))
    throw new RangeError("Invalid time value");
  let u = t.match(Fu).map((c) => {
    const _ = c[0];
    if (_ === "p" || _ === "P") {
      const m = Xu[_];
      return m(c, a.formatLong);
    }
    return c;
  }).join("").match(Ou).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const _ = c[0];
    if (_ === "'")
      return { isToken: !1, value: Ru(c) };
    if (kt[_])
      return { isToken: !0, value: c };
    if (_.match(Au))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + _ + "`"
      );
    return { isToken: !1, value: c };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(i, u));
  const d = {
    firstWeekContainsDate: r,
    weekStartsOn: s,
    locale: a
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const _ = c.value;
    (!n?.useAdditionalWeekYearTokens && Iu(_) || !n?.useAdditionalDayOfYearTokens && $u(_)) && Wu(_, t, String(e));
    const m = kt[_[0]];
    return m(i, _, a.localize, d);
  }).join("");
}
function Ru(e) {
  const t = e.match(Eu);
  return t ? t[1].replace(Gu, "'") : e;
}
function Yu(e) {
  const t = B(e), n = t.getFullYear(), o = t.getMonth(), a = he(e, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Hu(e) {
  return Math.trunc(+B(e) / 1e3);
}
function ju(e) {
  const t = B(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function qu(e, t) {
  return Vc(
    ju(e),
    me(e),
    t
  ) + 1;
}
function ft(e, t) {
  const n = B(e), o = B(t);
  return n.getTime() > o.getTime();
}
function Ut(e, t) {
  const n = B(e), o = B(t);
  return +n < +o;
}
function yt(e, t) {
  const n = B(e), o = B(t);
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function Vu(e, t) {
  const n = B(e), o = B(t);
  return n.getFullYear() === o.getFullYear();
}
function it(e, t) {
  return ie(e, -t);
}
function lt(e, t) {
  const n = B(e), o = n.getFullYear(), a = n.getDate(), r = he(e, 0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  const s = Yu(r);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Bt(e, t) {
  const n = B(e);
  return isNaN(+n) ? he(e, NaN) : (n.setFullYear(t), n);
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var n, o = 1, a = arguments.length; o < a; o++) {
      n = arguments[o];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, D.apply(this, arguments);
};
function Qu(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
}
function Zt(e, t, n) {
  for (var o = 0, a = t.length, r; o < a; o++)
    (r || !(o in t)) && (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
  return e.concat(r || Array.prototype.slice.call(t));
}
function Ke(e) {
  return e.mode === "multiple";
}
function Ue(e) {
  return e.mode === "range";
}
function at(e) {
  return e.mode === "single";
}
var Ku = {
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
function Uu(e, t) {
  return Ne(e, "LLLL y", t);
}
function Zu(e, t) {
  return Ne(e, "d", t);
}
function Ju(e, t) {
  return Ne(e, "LLLL", t);
}
function e_(e) {
  return "".concat(e);
}
function t_(e, t) {
  return Ne(e, "cccccc", t);
}
function n_(e, t) {
  return Ne(e, "yyyy", t);
}
var o_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Uu,
  formatDay: Zu,
  formatMonthCaption: Ju,
  formatWeekNumber: e_,
  formatWeekdayName: t_,
  formatYearCaption: n_
}), a_ = function(e, t, n) {
  return Ne(e, "do MMMM (EEEE)", n);
}, r_ = function() {
  return "Month: ";
}, s_ = function() {
  return "Go to next month";
}, i_ = function() {
  return "Go to previous month";
}, l_ = function(e, t) {
  return Ne(e, "cccc", t);
}, d_ = function(e) {
  return "Week n. ".concat(e);
}, c_ = function() {
  return "Year: ";
}, u_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: a_,
  labelMonthDropdown: r_,
  labelNext: s_,
  labelPrevious: i_,
  labelWeekNumber: d_,
  labelWeekday: l_,
  labelYearDropdown: c_
});
function __() {
  var e = "buttons", t = Ku, n = jt, o = {}, a = {}, r = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: o_,
    labels: u_,
    locale: n,
    modifiersClassNames: o,
    modifiers: a,
    numberOfMonths: r,
    styles: s,
    today: i,
    mode: "default"
  };
}
function m_(e) {
  var t = e.fromYear, n = e.toYear, o = e.fromMonth, a = e.toMonth, r = e.fromDate, s = e.toDate;
  return o ? r = me(o) : t && (r = new Date(t, 0, 1)), a ? s = ht(a) : n && (s = new Date(n, 11, 31)), {
    fromDate: r ? Ee(r) : void 0,
    toDate: s ? Ee(s) : void 0
  };
}
var Jt = Pe(void 0);
function f_(e) {
  var t, n = e.initialProps, o = __(), a = m_(n), r = a.fromDate, s = a.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : o.captionLayout;
  i !== "buttons" && (!r || !s) && (i = "buttons");
  var u;
  (at(n) || Ke(n) || Ue(n)) && (u = n.onSelect);
  var d = D(D(D({}, o), n), { captionLayout: i, classNames: D(D({}, o.classNames), n.classNames), components: D({}, n.components), formatters: D(D({}, o.formatters), n.formatters), fromDate: r, labels: D(D({}, o.labels), n.labels), mode: n.mode || o.mode, modifiers: D(D({}, o.modifiers), n.modifiers), modifiersClassNames: D(D({}, o.modifiersClassNames), n.modifiersClassNames), onSelect: u, styles: D(D({}, o.styles), n.styles), toDate: s });
  return l(Jt.Provider, { value: d, children: e.children });
}
function G() {
  var e = $e(Jt);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function en(e) {
  var t = G(), n = t.locale, o = t.classNames, a = t.styles, r = t.formatters.formatCaption;
  return l("div", { className: o.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: r(e.displayMonth, { locale: n }) });
}
function g_(e) {
  return l("svg", D({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function tn(e) {
  var t, n, o = e.onChange, a = e.value, r = e.children, s = e.caption, i = e.className, u = e.style, d = G(), c = (n = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : g_;
  return k("div", { className: i, style: u, children: [l("span", { className: d.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: a, onChange: o, children: r }), k("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [s, l(c, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function p_(e) {
  var t, n = G(), o = n.fromDate, a = n.toDate, r = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, u = n.classNames, d = n.components, c = n.labels.labelMonthDropdown;
  if (!o)
    return l(Le, {});
  if (!a)
    return l(Le, {});
  var _ = [];
  if (Vu(o, a))
    for (var m = me(o), g = o.getMonth(); g <= a.getMonth(); g++)
      _.push(lt(m, g));
  else
    for (var m = me(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      _.push(lt(m, g));
  var h = function(p) {
    var S = Number(p.target.value), M = lt(me(e.displayMonth), S);
    e.onChange(M);
  }, b = (t = d?.Dropdown) !== null && t !== void 0 ? t : tn;
  return l(b, { name: "months", "aria-label": c(), className: u.dropdown_month, style: r.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: _.map(function(p) {
    return l("option", { value: p.getMonth(), children: i(p, { locale: s }) }, p.getMonth());
  }) });
}
function h_(e) {
  var t, n = e.displayMonth, o = G(), a = o.fromDate, r = o.toDate, s = o.locale, i = o.styles, u = o.classNames, d = o.components, c = o.formatters.formatYearCaption, _ = o.labels.labelYearDropdown, m = [];
  if (!a)
    return l(Le, {});
  if (!r)
    return l(Le, {});
  for (var g = a.getFullYear(), h = r.getFullYear(), b = g; b <= h; b++)
    m.push(Bt(Yt(/* @__PURE__ */ new Date()), b));
  var p = function(M) {
    var A = Bt(me(n), Number(M.target.value));
    e.onChange(A);
  }, S = (t = d?.Dropdown) !== null && t !== void 0 ? t : tn;
  return l(S, { name: "years", "aria-label": _(), className: u.dropdown_year, style: i.dropdown_year, onChange: p, value: n.getFullYear(), caption: c(n, { locale: s }), children: m.map(function(M) {
    return l("option", { value: M.getFullYear(), children: c(M, { locale: s }) }, M.getFullYear());
  }) });
}
function v_(e, t) {
  var n = Z(e), o = n[0], a = n[1], r = t === void 0 ? o : t;
  return [r, a];
}
function y_(e) {
  var t = e.month, n = e.defaultMonth, o = e.today, a = t || n || o || /* @__PURE__ */ new Date(), r = e.toDate, s = e.fromDate, i = e.numberOfMonths, u = i === void 0 ? 1 : i;
  if (r && Ve(r, a) < 0) {
    var d = -1 * (u - 1);
    a = Me(r, d);
  }
  return s && Ve(a, s) < 0 && (a = s), me(a);
}
function b_() {
  var e = G(), t = y_(e), n = v_(t, e.month), o = n[0], a = n[1], r = function(s) {
    var i;
    if (!e.disableNavigation) {
      var u = me(s);
      a(u), (i = e.onMonthChange) === null || i === void 0 || i.call(e, u);
    }
  };
  return [o, r];
}
function w_(e, t) {
  for (var n = t.reverseMonths, o = t.numberOfMonths, a = me(e), r = me(Me(a, o)), s = Ve(r, a), i = [], u = 0; u < s; u++) {
    var d = Me(a, u);
    i.push(d);
  }
  return n && (i = i.reverse()), i;
}
function S_(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, o = t.pagedNavigation, a = t.numberOfMonths, r = a === void 0 ? 1 : a, s = o ? r : 1, i = me(e);
    if (!n)
      return Me(i, s);
    var u = Ve(n, e);
    if (!(u < r))
      return Me(i, s);
  }
}
function N_(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, o = t.pagedNavigation, a = t.numberOfMonths, r = a === void 0 ? 1 : a, s = o ? r : 1, i = me(e);
    if (!n)
      return Me(i, -s);
    var u = Ve(i, n);
    if (!(u <= 0))
      return Me(i, -s);
  }
}
var nn = Pe(void 0);
function M_(e) {
  var t = G(), n = b_(), o = n[0], a = n[1], r = w_(o, t), s = S_(o, t), i = N_(o, t), u = function(_) {
    return r.some(function(m) {
      return yt(_, m);
    });
  }, d = function(_, m) {
    u(_) || (m && Ut(_, m) ? a(Me(_, 1 + t.numberOfMonths * -1)) : a(_));
  }, c = {
    currentMonth: o,
    displayMonths: r,
    goToMonth: a,
    goToDate: d,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: u
  };
  return l(nn.Provider, { value: c, children: e.children });
}
function Ze() {
  var e = $e(nn);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Pt(e) {
  var t, n = G(), o = n.classNames, a = n.styles, r = n.components, s = Ze().goToMonth, i = function(c) {
    s(Me(c, e.displayIndex ? -e.displayIndex : 0));
  }, u = (t = r?.CaptionLabel) !== null && t !== void 0 ? t : en, d = l(u, { id: e.id, displayMonth: e.displayMonth });
  return k("div", { className: o.caption_dropdowns, style: a.caption_dropdowns, children: [l("div", { className: o.vhidden, children: d }), l(p_, { onChange: i, displayMonth: e.displayMonth }), l(h_, { onChange: i, displayMonth: e.displayMonth })] });
}
function x_(e) {
  return l("svg", D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function C_(e) {
  return l("svg", D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var nt = T(function(e, t) {
  var n = G(), o = n.classNames, a = n.styles, r = [o.button_reset, o.button];
  e.className && r.push(e.className);
  var s = r.join(" "), i = D(D({}, a.button_reset), a.button);
  return e.style && Object.assign(i, e.style), l("button", D({}, e, { ref: t, type: "button", className: s, style: i }));
});
function D_(e) {
  var t, n, o = G(), a = o.dir, r = o.locale, s = o.classNames, i = o.styles, u = o.labels, d = u.labelPrevious, c = u.labelNext, _ = o.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(Le, {});
  var m = d(e.previousMonth, { locale: r }), g = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = c(e.nextMonth, { locale: r }), b = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), p = (t = _?.IconRight) !== null && t !== void 0 ? t : C_, S = (n = _?.IconLeft) !== null && n !== void 0 ? n : x_;
  return k("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && l(nt, { name: "previous-month", "aria-label": m, className: g, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? l(p, { className: s.nav_icon, style: i.nav_icon }) : l(S, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && l(nt, { name: "next-month", "aria-label": h, className: b, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? l(S, { className: s.nav_icon, style: i.nav_icon }) : l(p, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function $t(e) {
  var t = G().numberOfMonths, n = Ze(), o = n.previousMonth, a = n.nextMonth, r = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return yt(e.displayMonth, h);
  }), u = i === 0, d = i === s.length - 1, c = t > 1 && (u || !d), _ = t > 1 && (d || !u), m = function() {
    o && r(o);
  }, g = function() {
    a && r(a);
  };
  return l(D_, { displayMonth: e.displayMonth, hideNext: c, hidePrevious: _, nextMonth: a, previousMonth: o, onPreviousClick: m, onNextClick: g });
}
function k_(e) {
  var t, n = G(), o = n.classNames, a = n.disableNavigation, r = n.styles, s = n.captionLayout, i = n.components, u = (t = i?.CaptionLabel) !== null && t !== void 0 ? t : en, d;
  return a ? d = l(u, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? d = l(Pt, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? d = k(Le, { children: [l(Pt, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l($t, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = k(Le, { children: [l(u, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l($t, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: o.caption, style: r.caption, children: d });
}
function z_(e) {
  var t = G(), n = t.footer, o = t.styles, a = t.classNames.tfoot;
  return n ? l("tfoot", { className: a, style: o.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: n }) }) }) : l(Le, {});
}
function X_(e, t, n) {
  for (var o = n ? Te(/* @__PURE__ */ new Date()) : De(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], r = 0; r < 7; r++) {
    var s = ie(o, r);
    a.push(s);
  }
  return a;
}
function L_() {
  var e = G(), t = e.classNames, n = e.styles, o = e.showWeekNumber, a = e.locale, r = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, u = e.labels.labelWeekday, d = X_(a, r, s);
  return k("tr", { style: n.head_row, className: t.head_row, children: [o && l("td", { style: n.head_cell, className: t.head_cell }), d.map(function(c, _) {
    return l("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": u(c, { locale: a }), children: i(c, { locale: a }) }, _);
  })] });
}
function B_() {
  var e, t = G(), n = t.classNames, o = t.styles, a = t.components, r = (e = a?.HeadRow) !== null && e !== void 0 ? e : L_;
  return l("thead", { style: o.head, className: n.head, children: l(r, {}) });
}
function P_(e) {
  var t = G(), n = t.locale, o = t.formatters.formatDay;
  return l(Le, { children: o(e.date, { locale: n }) });
}
var bt = Pe(void 0);
function $_(e) {
  if (!Ke(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(bt.Provider, { value: t, children: e.children });
  }
  return l(I_, { initialProps: e.initialProps, children: e.children });
}
function I_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, a = t.min, r = t.max, s = function(d, c, _) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, d, c, _);
    var h = !!(c.selected && a && o?.length === a);
    if (!h) {
      var b = !!(!c.selected && r && o?.length === r);
      if (!b) {
        var p = o ? Zt([], o) : [];
        if (c.selected) {
          var S = p.findIndex(function(M) {
            return _e(d, M);
          });
          p.splice(S, 1);
        } else
          p.push(d);
        (g = t.onSelect) === null || g === void 0 || g.call(t, p, d, c, _);
      }
    }
  }, i = {
    disabled: []
  };
  o && i.disabled.push(function(d) {
    var c = r && o.length > r - 1, _ = o.some(function(m) {
      return _e(m, d);
    });
    return !!(c && !_);
  });
  var u = {
    selected: o,
    onDayClick: s,
    modifiers: i
  };
  return l(bt.Provider, { value: u, children: n });
}
function wt() {
  var e = $e(bt);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function W_(e, t) {
  var n = t || {}, o = n.from, a = n.to;
  return o && a ? _e(a, e) && _e(o, e) ? void 0 : _e(a, e) ? { from: a, to: void 0 } : _e(o, e) ? void 0 : ft(o, e) ? { from: e, to: a } : { from: o, to: e } : a ? ft(e, a) ? { from: a, to: e } : { from: e, to: a } : o ? Ut(e, o) ? { from: e, to: o } : { from: o, to: e } : { from: e, to: void 0 };
}
var St = Pe(void 0);
function T_(e) {
  if (!Ue(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(St.Provider, { value: t, children: e.children });
  }
  return l(O_, { initialProps: e.initialProps, children: e.children });
}
function O_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, a = o || {}, r = a.from, s = a.to, i = t.min, u = t.max, d = function(g, h, b) {
    var p, S;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, g, h, b);
    var M = W_(g, o);
    (S = t.onSelect) === null || S === void 0 || S.call(t, M, g, h, b);
  }, c = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (r ? (c.range_start = [r], s ? (c.range_end = [s], _e(r, s) || (c.range_middle = [
    {
      after: r,
      before: s
    }
  ])) : c.range_end = [r]) : s && (c.range_start = [s], c.range_end = [s]), i && (r && !s && c.disabled.push({
    after: it(r, i - 1),
    before: ie(r, i - 1)
  }), r && s && c.disabled.push({
    after: r,
    before: ie(r, i - 1)
  }), !r && s && c.disabled.push({
    after: it(s, i - 1),
    before: ie(s, i - 1)
  })), u) {
    if (r && !s && (c.disabled.push({
      before: ie(r, -u + 1)
    }), c.disabled.push({
      after: ie(r, u - 1)
    })), r && s) {
      var _ = Ce(s, r) + 1, m = u - _;
      c.disabled.push({
        before: it(r, m)
      }), c.disabled.push({
        after: ie(s, m)
      });
    }
    !r && s && (c.disabled.push({
      before: ie(s, -u + 1)
    }), c.disabled.push({
      after: ie(s, u - 1)
    }));
  }
  return l(St.Provider, { value: { selected: o, onDayClick: d, modifiers: c }, children: n });
}
function Nt() {
  var e = $e(St);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Je(e) {
  return Array.isArray(e) ? Zt([], e) : e !== void 0 ? [e] : [];
}
function F_(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var o = n[0], a = n[1];
    t[o] = Je(a);
  }), t;
}
var xe;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(xe || (xe = {}));
var E_ = xe.Selected, Xe = xe.Disabled, G_ = xe.Hidden, A_ = xe.Today, dt = xe.RangeEnd, ct = xe.RangeMiddle, ut = xe.RangeStart, R_ = xe.Outside;
function Y_(e, t, n) {
  var o, a = (o = {}, o[E_] = Je(e.selected), o[Xe] = Je(e.disabled), o[G_] = Je(e.hidden), o[A_] = [e.today], o[dt] = [], o[ct] = [], o[ut] = [], o[R_] = [], o);
  return e.fromDate && a[Xe].push({ before: e.fromDate }), e.toDate && a[Xe].push({ after: e.toDate }), Ke(e) ? a[Xe] = a[Xe].concat(t.modifiers[Xe]) : Ue(e) && (a[Xe] = a[Xe].concat(n.modifiers[Xe]), a[ut] = n.modifiers[ut], a[ct] = n.modifiers[ct], a[dt] = n.modifiers[dt]), a;
}
var on = Pe(void 0);
function H_(e) {
  var t = G(), n = wt(), o = Nt(), a = Y_(t, n, o), r = F_(t.modifiers), s = D(D({}, a), r);
  return l(on.Provider, { value: s, children: e.children });
}
function an() {
  var e = $e(on);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function j_(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function q_(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function V_(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Q_(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function K_(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function U_(e, t) {
  var n, o = t.from, a = t.to;
  if (o && a) {
    var r = Ce(a, o) < 0;
    r && (n = [a, o], o = n[0], a = n[1]);
    var s = Ce(e, o) >= 0 && Ce(a, e) >= 0;
    return s;
  }
  return a ? _e(a, e) : o ? _e(o, e) : !1;
}
function Z_(e) {
  return pt(e);
}
function J_(e) {
  return Array.isArray(e) && e.every(pt);
}
function em(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Z_(n))
      return _e(e, n);
    if (J_(n))
      return n.includes(e);
    if (q_(n))
      return U_(e, n);
    if (K_(n))
      return n.dayOfWeek.includes(e.getDay());
    if (j_(n)) {
      var o = Ce(n.before, e), a = Ce(n.after, e), r = o > 0, s = a < 0, i = ft(n.before, n.after);
      return i ? s && r : r || s;
    }
    return V_(n) ? Ce(e, n.after) > 0 : Q_(n) ? Ce(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Mt(e, t, n) {
  var o = Object.keys(t).reduce(function(r, s) {
    var i = t[s];
    return em(e, i) && r.push(s), r;
  }, []), a = {};
  return o.forEach(function(r) {
    return a[r] = !0;
  }), n && !yt(e, n) && (a.outside = !0), a;
}
function tm(e, t) {
  for (var n = me(e[0]), o = ht(e[e.length - 1]), a, r, s = n; s <= o; ) {
    var i = Mt(s, t), u = !i.disabled && !i.hidden;
    if (!u) {
      s = ie(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !r && (r = s), a || (a = s), s = ie(s, 1);
  }
  return r || a;
}
var nm = 365;
function rn(e, t) {
  var n = t.moveBy, o = t.direction, a = t.context, r = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, u = a.weekStartsOn, d = a.fromDate, c = a.toDate, _ = a.locale, m = {
    day: ie,
    week: mt,
    month: Me,
    year: Hc,
    startOfWeek: function(p) {
      return a.ISOWeek ? Te(p) : De(p, { locale: _, weekStartsOn: u });
    },
    endOfWeek: function(p) {
      return a.ISOWeek ? Ht(p) : vt(p, { locale: _, weekStartsOn: u });
    }
  }, g = m[n](e, o === "after" ? 1 : -1);
  o === "before" && d ? g = jc([d, g]) : o === "after" && c && (g = qc([c, g]));
  var h = !0;
  if (r) {
    var b = Mt(g, r);
    h = !b.disabled && !b.hidden;
  }
  return h ? g : i.count > nm ? i.lastFocused : rn(g, {
    moveBy: n,
    direction: o,
    context: a,
    modifiers: r,
    retry: D(D({}, i), { count: i.count + 1 })
  });
}
var sn = Pe(void 0);
function om(e) {
  var t = Ze(), n = an(), o = Z(), a = o[0], r = o[1], s = Z(), i = s[0], u = s[1], d = tm(t.displayMonths, n), c = a ?? (i && t.isDateDisplayed(i)) ? i : d, _ = function() {
    u(a), r(void 0);
  }, m = function(p) {
    r(p);
  }, g = G(), h = function(p, S) {
    if (a) {
      var M = rn(a, {
        moveBy: p,
        direction: S,
        context: g,
        modifiers: n
      });
      _e(a, M) || (t.goToDate(M, a), m(M));
    }
  }, b = {
    focusedDay: a,
    focusTarget: c,
    blur: _,
    focus: m,
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
  return l(sn.Provider, { value: b, children: e.children });
}
function xt() {
  var e = $e(sn);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function am(e, t) {
  var n = an(), o = Mt(e, n, t);
  return o;
}
var Ct = Pe(void 0);
function rm(e) {
  if (!at(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l(Ct.Provider, { value: t, children: e.children });
  }
  return l(sm, { initialProps: e.initialProps, children: e.children });
}
function sm(e) {
  var t = e.initialProps, n = e.children, o = function(r, s, i) {
    var u, d, c;
    if ((u = t.onDayClick) === null || u === void 0 || u.call(t, r, s, i), s.selected && !t.required) {
      (d = t.onSelect) === null || d === void 0 || d.call(t, void 0, r, s, i);
      return;
    }
    (c = t.onSelect) === null || c === void 0 || c.call(t, r, r, s, i);
  }, a = {
    selected: t.selected,
    onDayClick: o
  };
  return l(Ct.Provider, { value: a, children: n });
}
function ln() {
  var e = $e(Ct);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function im(e, t) {
  var n = G(), o = ln(), a = wt(), r = Nt(), s = xt(), i = s.focusDayAfter, u = s.focusDayBefore, d = s.focusWeekAfter, c = s.focusWeekBefore, _ = s.blur, m = s.focus, g = s.focusMonthBefore, h = s.focusMonthAfter, b = s.focusYearBefore, p = s.focusYearAfter, S = s.focusStartOfWeek, M = s.focusEndOfWeek, A = function(v) {
    var y, we, ke, x;
    at(n) ? (y = o.onDayClick) === null || y === void 0 || y.call(o, e, t, v) : Ke(n) ? (we = a.onDayClick) === null || we === void 0 || we.call(a, e, t, v) : Ue(n) ? (ke = r.onDayClick) === null || ke === void 0 || ke.call(r, e, t, v) : (x = n.onDayClick) === null || x === void 0 || x.call(n, e, t, v);
  }, O = function(v) {
    var y;
    m(e), (y = n.onDayFocus) === null || y === void 0 || y.call(n, e, t, v);
  }, E = function(v) {
    var y;
    _(), (y = n.onDayBlur) === null || y === void 0 || y.call(n, e, t, v);
  }, P = function(v) {
    var y;
    (y = n.onDayMouseEnter) === null || y === void 0 || y.call(n, e, t, v);
  }, ee = function(v) {
    var y;
    (y = n.onDayMouseLeave) === null || y === void 0 || y.call(n, e, t, v);
  }, de = function(v) {
    var y;
    (y = n.onDayPointerEnter) === null || y === void 0 || y.call(n, e, t, v);
  }, be = function(v) {
    var y;
    (y = n.onDayPointerLeave) === null || y === void 0 || y.call(n, e, t, v);
  }, oe = function(v) {
    var y;
    (y = n.onDayTouchCancel) === null || y === void 0 || y.call(n, e, t, v);
  }, ne = function(v) {
    var y;
    (y = n.onDayTouchEnd) === null || y === void 0 || y.call(n, e, t, v);
  }, ve = function(v) {
    var y;
    (y = n.onDayTouchMove) === null || y === void 0 || y.call(n, e, t, v);
  }, ye = function(v) {
    var y;
    (y = n.onDayTouchStart) === null || y === void 0 || y.call(n, e, t, v);
  }, fe = function(v) {
    var y;
    (y = n.onDayKeyUp) === null || y === void 0 || y.call(n, e, t, v);
  }, Y = function(v) {
    var y;
    switch (v.key) {
      case "ArrowLeft":
        v.preventDefault(), v.stopPropagation(), n.dir === "rtl" ? i() : u();
        break;
      case "ArrowRight":
        v.preventDefault(), v.stopPropagation(), n.dir === "rtl" ? u() : i();
        break;
      case "ArrowDown":
        v.preventDefault(), v.stopPropagation(), d();
        break;
      case "ArrowUp":
        v.preventDefault(), v.stopPropagation(), c();
        break;
      case "PageUp":
        v.preventDefault(), v.stopPropagation(), v.shiftKey ? b() : g();
        break;
      case "PageDown":
        v.preventDefault(), v.stopPropagation(), v.shiftKey ? p() : h();
        break;
      case "Home":
        v.preventDefault(), v.stopPropagation(), S();
        break;
      case "End":
        v.preventDefault(), v.stopPropagation(), M();
        break;
    }
    (y = n.onDayKeyDown) === null || y === void 0 || y.call(n, e, t, v);
  }, H = {
    onClick: A,
    onFocus: O,
    onBlur: E,
    onKeyDown: Y,
    onKeyUp: fe,
    onMouseEnter: P,
    onMouseLeave: ee,
    onPointerEnter: de,
    onPointerLeave: be,
    onTouchCancel: oe,
    onTouchEnd: ne,
    onTouchMove: ve,
    onTouchStart: ye
  };
  return H;
}
function lm() {
  var e = G(), t = ln(), n = wt(), o = Nt(), a = at(e) ? t.selected : Ke(e) ? n.selected : Ue(e) ? o.selected : void 0;
  return a;
}
function dm(e) {
  return Object.values(xe).includes(e);
}
function cm(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(o) {
    var a = e.modifiersClassNames[o];
    if (a)
      n.push(a);
    else if (dm(o)) {
      var r = e.classNames["day_".concat(o)];
      r && n.push(r);
    }
  }), n;
}
function um(e, t) {
  var n = D({}, e.styles.day);
  return Object.keys(t).forEach(function(o) {
    var a;
    n = D(D({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[o]);
  }), n;
}
function _m(e, t, n) {
  var o, a, r, s = G(), i = xt(), u = am(e, t), d = im(e, u), c = lm(), _ = !!(s.onDayClick || s.mode !== "default");
  J(function() {
    var P;
    u.outside || i.focusedDay && _ && _e(i.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    i.focusedDay,
    e,
    n,
    _,
    u.outside
  ]);
  var m = cm(s, u).join(" "), g = um(s, u), h = !!(u.outside && !s.showOutsideDays || u.hidden), b = (r = (a = s.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && r !== void 0 ? r : P_, p = l(b, { date: e, displayMonth: t, activeModifiers: u }), S = {
    style: g,
    className: m,
    children: p,
    role: "gridcell"
  }, M = i.focusTarget && _e(i.focusTarget, e) && !u.outside, A = i.focusedDay && _e(i.focusedDay, e), O = D(D(D({}, S), (o = { disabled: u.disabled, role: "gridcell" }, o["aria-selected"] = u.selected, o.tabIndex = A || M ? 0 : -1, o)), d), E = {
    isButton: _,
    isHidden: h,
    activeModifiers: u,
    selectedDays: c,
    buttonProps: O,
    divProps: S
  };
  return E;
}
function mm(e) {
  var t = Se(null), n = _m(e.date, e.displayMonth, t);
  return n.isHidden ? l("div", { role: "gridcell" }) : n.isButton ? l(nt, D({ name: "day", ref: t }, n.buttonProps)) : l("div", D({}, n.divProps));
}
function fm(e) {
  var t = e.number, n = e.dates, o = G(), a = o.onWeekNumberClick, r = o.styles, s = o.classNames, i = o.locale, u = o.labels.labelWeekNumber, d = o.formatters.formatWeekNumber, c = d(Number(t), { locale: i });
  if (!a)
    return l("span", { className: s.weeknumber, style: r.weeknumber, children: c });
  var _ = u(Number(t), { locale: i }), m = function(g) {
    a(t, n, g);
  };
  return l(nt, { name: "week-number", "aria-label": _, className: s.weeknumber, style: r.weeknumber, onClick: m, children: c });
}
function gm(e) {
  var t, n, o = G(), a = o.styles, r = o.classNames, s = o.showWeekNumber, i = o.components, u = (t = i?.Day) !== null && t !== void 0 ? t : mm, d = (n = i?.WeekNumber) !== null && n !== void 0 ? n : fm, c;
  return s && (c = l("td", { className: r.cell, style: a.cell, children: l(d, { number: e.weekNumber, dates: e.dates }) })), k("tr", { className: r.row, style: a.row, children: [c, e.dates.map(function(_) {
    return l("td", { className: r.cell, style: a.cell, role: "presentation", children: l(u, { displayMonth: e.displayMonth, date: _ }) }, Hu(_));
  })] });
}
function It(e, t, n) {
  for (var o = n?.ISOWeek ? Ht(t) : vt(t, n), a = n?.ISOWeek ? Te(e) : De(e, n), r = Ce(o, a), s = [], i = 0; i <= r; i++)
    s.push(ie(a, i));
  var u = s.reduce(function(d, c) {
    var _ = n?.ISOWeek ? qt(c) : Qt(c, n), m = d.find(function(g) {
      return g.weekNumber === _;
    });
    return m ? (m.dates.push(c), d) : (d.push({
      weekNumber: _,
      dates: [c]
    }), d);
  }, []);
  return u;
}
function pm(e, t) {
  var n = It(me(e), ht(e), t);
  if (t?.useFixedWeeks) {
    var o = qu(e, t);
    if (o < 6) {
      var a = n[n.length - 1], r = a.dates[a.dates.length - 1], s = mt(r, 6 - o), i = It(mt(r, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function hm(e) {
  var t, n, o, a = G(), r = a.locale, s = a.classNames, i = a.styles, u = a.hideHead, d = a.fixedWeeks, c = a.components, _ = a.weekStartsOn, m = a.firstWeekContainsDate, g = a.ISOWeek, h = pm(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: g,
    locale: r,
    weekStartsOn: _,
    firstWeekContainsDate: m
  }), b = (t = c?.Head) !== null && t !== void 0 ? t : B_, p = (n = c?.Row) !== null && n !== void 0 ? n : gm, S = (o = c?.Footer) !== null && o !== void 0 ? o : z_;
  return k("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!u && l(b, {}), l("tbody", { className: s.tbody, style: i.tbody, children: h.map(function(M) {
    return l(p, { displayMonth: e.displayMonth, dates: M.dates, weekNumber: M.weekNumber }, M.weekNumber);
  }) }), l(S, { displayMonth: e.displayMonth })] });
}
function vm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var ym = vm() ? fn : J, _t = !1, bm = 0;
function Wt() {
  return "react-day-picker-".concat(++bm);
}
function wm(e) {
  var t, n = e ?? (_t ? Wt() : null), o = Z(n), a = o[0], r = o[1];
  return ym(function() {
    a === null && r(Wt());
  }, []), J(function() {
    _t === !1 && (_t = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function Sm(e) {
  var t, n, o = G(), a = o.dir, r = o.classNames, s = o.styles, i = o.components, u = Ze().displayMonths, d = wm(o.id ? "".concat(o.id, "-").concat(e.displayIndex) : void 0), c = o.id ? "".concat(o.id, "-grid-").concat(e.displayIndex) : void 0, _ = [r.month], m = s.month, g = e.displayIndex === 0, h = e.displayIndex === u.length - 1, b = !g && !h;
  a === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (_.push(r.caption_start), m = D(D({}, m), s.caption_start)), h && (_.push(r.caption_end), m = D(D({}, m), s.caption_end)), b && (_.push(r.caption_between), m = D(D({}, m), s.caption_between));
  var p = (n = i?.Caption) !== null && n !== void 0 ? n : k_;
  return k("div", { className: _.join(" "), style: m, children: [l(p, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(hm, { id: c, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Nm(e) {
  var t = G(), n = t.classNames, o = t.styles;
  return l("div", { className: n.months, style: o.months, children: e.children });
}
function Mm(e) {
  var t, n, o = e.initialProps, a = G(), r = xt(), s = Ze(), i = Z(!1), u = i[0], d = i[1];
  J(function() {
    a.initialFocus && r.focusTarget && (u || (r.focus(r.focusTarget), d(!0)));
  }, [
    a.initialFocus,
    u,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && c.push(a.classNames.multiple_months), a.showWeekNumber && c.push(a.classNames.with_weeknumber);
  var _ = D(D({}, a.styles.root), a.style), m = Object.keys(o).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, b) {
    var p;
    return D(D({}, h), (p = {}, p[b] = o[b], p));
  }, {}), g = (n = (t = o.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Nm;
  return l("div", D({ className: c.join(" "), style: _, dir: a.dir, id: a.id, nonce: o.nonce, title: o.title, lang: o.lang }, m, { children: l(g, { children: s.displayMonths.map(function(h, b) {
    return l(Sm, { displayIndex: b, displayMonth: h }, b);
  }) }) }));
}
function xm(e) {
  var t = e.children, n = Qu(e, ["children"]);
  return l(f_, { initialProps: n, children: l(M_, { children: l(rm, { initialProps: n, children: l($_, { initialProps: n, children: l(T_, { initialProps: n, children: l(H_, { children: l(om, { children: t }) }) }) }) }) }) });
}
function dn(e) {
  return l(xm, D({}, e, { children: l(Mm, { initialProps: e }) }));
}
const Cm = "DatePicker-module__container___lGTSn", Dm = "DatePicker-module__inputButton___ihMp8", km = "DatePicker-module__placeholder___aDY-6", zm = "DatePicker-module__valueText___y-AZd", Xm = "DatePicker-module__error___g-hwX", Lm = "DatePicker-module__sizeXs___mbkOI", Bm = "DatePicker-module__sizeSm___PoPZI", Pm = "DatePicker-module__sizeMd___FHT7G", $m = "DatePicker-module__sizeLg___d3KEF", Im = "DatePicker-module__sizeXl___NPQSU", Wm = "DatePicker-module__actions___l4jpC", Tm = "DatePicker-module__clearButton___xECnw", Om = "DatePicker-module__popover___cOD1p", Fm = "DatePicker-module__calendar___ICXhS", W = {
  container: Cm,
  inputButton: Dm,
  placeholder: km,
  valueText: zm,
  error: Xm,
  sizeXs: Lm,
  sizeSm: Bm,
  sizeMd: Pm,
  sizeLg: $m,
  sizeXl: Im,
  actions: Wm,
  clearButton: Tm,
  popover: Om,
  calendar: Fm
}, Em = {
  xs: W.sizeXs,
  sm: W.sizeSm,
  md: W.sizeMd,
  lg: W.sizeLg,
  xl: W.sizeXl
}, Gm = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: i, placeholder: u = "Pick a date...", dateFormat: d = "PPP", clearable: c = !1, minDate: _, maxDate: m, onChange: g, className: h, style: b, id: p, ...S }, M) => {
    const A = s !== void 0, [O, E] = Z((A ? s : i) ?? null), [P, ee] = Z(!1), [de, be] = Z({ top: 0, left: 0 }), oe = Se(null), ne = Se(null), ve = Ge(), ye = p || ve;
    J(() => {
      A && E(s ?? null);
    }, [s, A]);
    const fe = () => {
      if (!oe.current) return;
      const x = oe.current.getBoundingClientRect(), F = 350, ce = window.innerHeight - x.bottom;
      let ge = x.bottom + 6;
      ce < F && x.top > F && (ge = Math.max(8, x.top - F - 6));
      let ze = x.left;
      const w = 320;
      ze + w > window.innerWidth - 16 && (ze = Math.max(16, window.innerWidth - w - 16)), be({ top: ge, left: ze });
    };
    J(() => {
      if (!P) return;
      fe();
      const x = () => fe(), F = () => fe();
      return window.addEventListener("scroll", x, !0), window.addEventListener("resize", F), () => {
        window.removeEventListener("scroll", x, !0), window.removeEventListener("resize", F);
      };
    }, [P]), J(() => {
      if (!P) return;
      const x = (ce) => {
        const ge = ce.target;
        oe.current && !oe.current.contains(ge) && ne.current && !ne.current.contains(ge) && ee(!1);
      }, F = (ce) => {
        ce.key === "Escape" && ee(!1);
      };
      return document.addEventListener("mousedown", x), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousedown", x), document.removeEventListener("keydown", F);
      };
    }, [P]);
    const Y = (x) => {
      const F = x ?? null;
      A || E(F), g?.(F), ee(!1);
    }, H = (x) => {
      x.stopPropagation(), A || E(null), g?.(null);
    }, v = O && tt(O) ? Ne(O, d) : null, y = !!n, we = L(W.inputButton, Em[a], { [W.error]: y }), ke = P && typeof document < "u" ? ot(
      /* @__PURE__ */ l(
        "div",
        {
          ref: ne,
          className: W.popover,
          style: {
            top: `${de.top}px`,
            left: `${de.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ l(
            dn,
            {
              mode: "single",
              selected: O ?? void 0,
              onSelect: Y,
              fromDate: _,
              toDate: m,
              className: W.calendar
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(Ae, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: h, style: b, children: /* @__PURE__ */ k("div", { className: W.container, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (x) => {
            oe.current = x, typeof M == "function" ? M(x) : M && (M.current = x);
          },
          id: ye,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": P,
          "aria-invalid": y,
          disabled: r,
          className: we,
          onClick: () => !r && ee((x) => !x),
          ...S,
          children: [
            /* @__PURE__ */ l("span", { className: v ? W.valueText : W.placeholder, children: v || u }),
            /* @__PURE__ */ k("div", { className: W.actions, children: [
              c && O && !r && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear date", className: W.clearButton, onClick: H, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
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
      ke
    ] }) });
  }
);
Gm.displayName = "DatePicker";
const Am = {
  xs: W.sizeXs,
  sm: W.sizeSm,
  md: W.sizeMd,
  lg: W.sizeLg,
  xl: W.sizeXl
}, Rm = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: i, placeholder: u = "Pick a date range...", dateFormat: d = "PP", clearable: c = !1, minDate: _, maxDate: m, onChange: g, className: h, style: b, id: p, ...S }, M) => {
    const A = s !== void 0, [O, E] = Z((A ? s : i) ?? null), [P, ee] = Z(!1), [de, be] = Z({ top: 0, left: 0 }), oe = Se(null), ne = Se(null), ve = Ge(), ye = p || ve;
    J(() => {
      A && E(s ?? null);
    }, [s, A]);
    const fe = () => {
      if (!oe.current) return;
      const x = oe.current.getBoundingClientRect(), F = 350, ce = window.innerHeight - x.bottom;
      let ge = x.bottom + 6;
      ce < F && x.top > F && (ge = Math.max(8, x.top - F - 6));
      let ze = x.left;
      const w = 320;
      ze + w > window.innerWidth - 16 && (ze = Math.max(16, window.innerWidth - w - 16)), be({ top: ge, left: ze });
    };
    J(() => {
      if (!P) return;
      fe();
      const x = () => fe(), F = () => fe();
      return window.addEventListener("scroll", x, !0), window.addEventListener("resize", F), () => {
        window.removeEventListener("scroll", x, !0), window.removeEventListener("resize", F);
      };
    }, [P]), J(() => {
      if (!P) return;
      const x = (ce) => {
        const ge = ce.target;
        oe.current && !oe.current.contains(ge) && ne.current && !ne.current.contains(ge) && ee(!1);
      }, F = (ce) => {
        ce.key === "Escape" && ee(!1);
      };
      return document.addEventListener("mousedown", x), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousedown", x), document.removeEventListener("keydown", F);
      };
    }, [P]);
    const Y = (x) => {
      const F = x ?? null;
      A || E(F), g?.(F), x?.from && x?.to && ee(!1);
    }, H = (x) => {
      x.stopPropagation(), A || E(null), g?.(null);
    };
    let v = null;
    O?.from && tt(O.from) && (O.to && tt(O.to) ? v = Ne(O.from, d) + " – " + Ne(O.to, d) : v = Ne(O.from, d) + " – ...");
    const y = !!n, we = L(W.inputButton, Am[a], { [W.error]: y }), ke = P && typeof document < "u" ? ot(
      /* @__PURE__ */ l(
        "div",
        {
          ref: ne,
          className: W.popover,
          style: {
            top: `${de.top}px`,
            left: `${de.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ l(
            dn,
            {
              mode: "range",
              selected: O ?? void 0,
              onSelect: Y,
              fromDate: _,
              toDate: m,
              className: W.calendar
            }
          )
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ l(Ae, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: h, style: b, children: /* @__PURE__ */ k("div", { className: W.container, children: [
      /* @__PURE__ */ k(
        "button",
        {
          ref: (x) => {
            oe.current = x, typeof M == "function" ? M(x) : M && (M.current = x);
          },
          id: ye,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": P,
          "aria-invalid": y,
          disabled: r,
          className: we,
          onClick: () => !r && ee((x) => !x),
          ...S,
          children: [
            /* @__PURE__ */ l("span", { className: v ? W.valueText : W.placeholder, children: v || u }),
            /* @__PURE__ */ k("div", { className: W.actions, children: [
              c && O && !r && /* @__PURE__ */ l("span", { role: "button", tabIndex: 0, "aria-label": "Clear date range", className: W.clearButton, onClick: H, children: /* @__PURE__ */ k("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
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
      ke
    ] }) });
  }
);
Rm.displayName = "DateRangePicker";
const Ym = "Avatar-module__avatar___3xMuZ", Hm = "Avatar-module__image___ieqGp", jm = "Avatar-module__sizeXs___DS3Nc", qm = "Avatar-module__sizeSm___Rs-fa", Vm = "Avatar-module__sizeMd___aaN4-", Qm = "Avatar-module__sizeLg___LuK6q", Km = "Avatar-module__sizeXl___dOgJy", Um = "Avatar-module__radiusNone___rZMLD", Zm = "Avatar-module__radiusXs___NiCr5", Jm = "Avatar-module__radiusSm___D7afd", ef = "Avatar-module__radiusMd___7fH4d", tf = "Avatar-module__radiusLg___LuhdA", nf = "Avatar-module__radiusXl___qPYXZ", of = "Avatar-module__radiusFull___YY2-y", af = "Avatar-module__colorNeutral___9d6qx", rf = "Avatar-module__colorPrimary___OBV13", sf = "Avatar-module__colorSecondary___7sWFz", lf = "Avatar-module__colorSuccess___Ri-bv", df = "Avatar-module__colorWarning___dxPCc", cf = "Avatar-module__colorDanger___VO-Tk", uf = "Avatar-module__colorInfo___cCQHc", _f = "Avatar-module__fallbackIcon___-2iNj", V = {
  avatar: Ym,
  image: Hm,
  sizeXs: jm,
  sizeSm: qm,
  sizeMd: Vm,
  sizeLg: Qm,
  sizeXl: Km,
  radiusNone: Um,
  radiusXs: Zm,
  radiusSm: Jm,
  radiusMd: ef,
  radiusLg: tf,
  radiusXl: nf,
  radiusFull: of,
  colorNeutral: af,
  colorPrimary: rf,
  colorSecondary: sf,
  colorSuccess: lf,
  colorWarning: df,
  colorDanger: cf,
  colorInfo: uf,
  fallbackIcon: _f
}, mf = {
  xs: V.sizeXs,
  sm: V.sizeSm,
  md: V.sizeMd,
  lg: V.sizeLg,
  xl: V.sizeXl
}, ff = {
  none: V.radiusNone,
  xs: V.radiusXs,
  sm: V.radiusSm,
  md: V.radiusMd,
  lg: V.radiusLg,
  xl: V.radiusXl,
  full: V.radiusFull
}, gf = {
  primary: V.colorPrimary,
  secondary: V.colorSecondary,
  neutral: V.colorNeutral,
  success: V.colorSuccess,
  warning: V.colorWarning,
  danger: V.colorDanger,
  info: V.colorInfo
}, Tt = ["primary", "secondary", "success", "warning", "info"];
function pf(e) {
  const t = e.trim().split(/\s+/);
  return t.length === 0 || !t[0] ? "" : t.length === 1 ? t[0].slice(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
function hf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return Tt[Math.abs(t) % Tt.length];
}
const vf = T(
  ({ src: e, name: t, alt: n = "avatar", size: o = "md", radius: a = "full", color: r = "neutral", className: s, style: i, ...u }, d) => {
    const [c, _] = Z(!1);
    J(() => {
      _(!1);
    }, [e]);
    const m = typeof o == "number", g = t ? pf(t) : "", h = r === "auto" ? t ? hf(t) : "neutral" : r, b = m ? { ...i, width: o + "px", height: o + "px", fontSize: Math.round(o * 0.35) + "px" } : i, p = L(V.avatar, !m && mf[o], ff[a], gf[h], s);
    return /* @__PURE__ */ l("div", { ref: d, className: p, style: b, "aria-label": t || n, ...u, children: e && !c ? /* @__PURE__ */ l("img", { src: e, alt: n, onError: () => _(!0), className: V.image }) : g ? /* @__PURE__ */ l("span", { children: g }) : /* @__PURE__ */ l("svg", { className: V.fallbackIcon, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ l("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) });
  }
);
vf.displayName = "Avatar";
const yf = "Image-module__container___sVJdZ", bf = "Image-module__image___Zq9Zs", wf = "Image-module__fitCover___85oUS", Sf = "Image-module__fitContain___aoZal", Nf = "Image-module__fitFill___q0kKf", Mf = "Image-module__fitScaleDown___UBGEP", xf = "Image-module__fitNone___E1Sej", Cf = "Image-module__radiusNone___JCxuJ", Df = "Image-module__radiusXs___-q1Ht", kf = "Image-module__radiusSm___zF1VV", zf = "Image-module__radiusMd___Zcdvc", Xf = "Image-module__radiusLg___2a5Zq", Lf = "Image-module__radiusXl___puXh6", Bf = "Image-module__radiusFull___bi-9W", Pf = "Image-module__fallbackWrapper___TCom9", le = {
  container: yf,
  image: bf,
  fitCover: wf,
  fitContain: Sf,
  fitFill: Nf,
  fitScaleDown: Mf,
  fitNone: xf,
  radiusNone: Cf,
  radiusXs: Df,
  radiusSm: kf,
  radiusMd: zf,
  radiusLg: Xf,
  radiusXl: Lf,
  radiusFull: Bf,
  fallbackWrapper: Pf
}, $f = {
  cover: le.fitCover,
  contain: le.fitContain,
  fill: le.fitFill,
  "scale-down": le.fitScaleDown,
  none: le.fitNone
}, Ot = {
  none: le.radiusNone,
  xs: le.radiusXs,
  sm: le.radiusSm,
  md: le.radiusMd,
  lg: le.radiusLg,
  xl: le.radiusXl,
  full: le.radiusFull
}, If = T(
  ({ src: e, alt: t, fit: n = "cover", fallback: o, radius: a = "none", loading: r = "lazy", className: s, style: i, onError: u, width: d, height: c, ..._ }, m) => {
    const [g, h] = Z(!1);
    J(() => {
      h(!1);
    }, [e]);
    const b = (M) => {
      h(!0), u?.(M);
    }, p = {
      ...i,
      width: d !== void 0 ? typeof d == "number" ? d + "px" : d : i?.width,
      height: c !== void 0 ? typeof c == "number" ? c + "px" : c : i?.height
    }, S = L(le.container, Ot[a], s);
    return g && o ? /* @__PURE__ */ l("div", { className: L(S, le.fallbackWrapper), style: p, children: o }) : /* @__PURE__ */ l("div", { className: S, style: p, children: /* @__PURE__ */ l("img", { ref: m, src: e, alt: t, loading: r, width: d, height: c, onError: b, className: L(le.image, $f[n], Ot[a]), ..._ }) });
  }
);
If.displayName = "Image";
const Wf = "Badge-module__badge___RsuMz", Tf = "Badge-module__sizeXs___rVinZ", Of = "Badge-module__sizeSm___V492a", Ff = "Badge-module__sizeMd___oFPD6", Ef = "Badge-module__sizeLg___gM1DQ", Gf = "Badge-module__sizeXl___6qEZz", Af = "Badge-module__radiusNone___42uvb", Rf = "Badge-module__radiusXs___62PO-", Yf = "Badge-module__radiusSm___skDDe", Hf = "Badge-module__radiusMd___Wf82t", jf = "Badge-module__radiusLg___QCnke", qf = "Badge-module__radiusXl___h8cmg", Vf = "Badge-module__radiusFull___d1qq5", Qf = "Badge-module__filledPrimary___xjrJ0", Kf = "Badge-module__lightPrimary___-IkyU", Uf = "Badge-module__outlinePrimary___r5I6Z", Zf = "Badge-module__dotPrimary___PyawZ", Jf = "Badge-module__filledSecondary___oa0eP", eg = "Badge-module__lightSecondary___AtTko", tg = "Badge-module__outlineSecondary___iYBAn", ng = "Badge-module__dotSecondary___226sX", og = "Badge-module__filledNeutral___VraIb", ag = "Badge-module__lightNeutral___GybdN", rg = "Badge-module__outlineNeutral___40N8w", sg = "Badge-module__dotNeutral___6vDtL", ig = "Badge-module__filledSuccess___vFfoV", lg = "Badge-module__lightSuccess___E2z6c", dg = "Badge-module__outlineSuccess___L0kK8", cg = "Badge-module__dotSuccess___qzpot", ug = "Badge-module__filledWarning___2TKjK", _g = "Badge-module__lightWarning___7m1dm", mg = "Badge-module__outlineWarning___BMHGX", fg = "Badge-module__dotWarning___Dts74", gg = "Badge-module__filledDanger___f2P2x", pg = "Badge-module__lightDanger___BqsUP", hg = "Badge-module__outlineDanger___H2rN2", vg = "Badge-module__dotDanger___LMrFA", yg = "Badge-module__filledInfo___gtVyg", bg = "Badge-module__lightInfo___7jqyP", wg = "Badge-module__outlineInfo___2pxvU", Sg = "Badge-module__dotInfo___JkUiX", Ng = "Badge-module__dotCircle___jcWQx", Mg = "Badge-module__dotCirclePrimary___R5Kc7", xg = "Badge-module__dotCircleSecondary___qHQ5A", Cg = "Badge-module__dotCircleNeutral___HTUeD", Dg = "Badge-module__dotCircleSuccess___j2gWH", kg = "Badge-module__dotCircleWarning___4RTfn", zg = "Badge-module__dotCircleDanger___s0i9-", Xg = "Badge-module__dotCircleInfo___9CDd4", Lg = "Badge-module__leftSection___xCKGI", C = {
  badge: Wf,
  sizeXs: Tf,
  sizeSm: Of,
  sizeMd: Ff,
  sizeLg: Ef,
  sizeXl: Gf,
  radiusNone: Af,
  radiusXs: Rf,
  radiusSm: Yf,
  radiusMd: Hf,
  radiusLg: jf,
  radiusXl: qf,
  radiusFull: Vf,
  filledPrimary: Qf,
  lightPrimary: Kf,
  outlinePrimary: Uf,
  dotPrimary: Zf,
  filledSecondary: Jf,
  lightSecondary: eg,
  outlineSecondary: tg,
  dotSecondary: ng,
  filledNeutral: og,
  lightNeutral: ag,
  outlineNeutral: rg,
  dotNeutral: sg,
  filledSuccess: ig,
  lightSuccess: lg,
  outlineSuccess: dg,
  dotSuccess: cg,
  filledWarning: ug,
  lightWarning: _g,
  outlineWarning: mg,
  dotWarning: fg,
  filledDanger: gg,
  lightDanger: pg,
  outlineDanger: hg,
  dotDanger: vg,
  filledInfo: yg,
  lightInfo: bg,
  outlineInfo: wg,
  dotInfo: Sg,
  dotCircle: Ng,
  dotCirclePrimary: Mg,
  dotCircleSecondary: xg,
  dotCircleNeutral: Cg,
  dotCircleSuccess: Dg,
  dotCircleWarning: kg,
  dotCircleDanger: zg,
  dotCircleInfo: Xg,
  leftSection: Lg
}, Bg = {
  xs: C.sizeXs,
  sm: C.sizeSm,
  md: C.sizeMd,
  lg: C.sizeLg,
  xl: C.sizeXl
}, Pg = {
  none: C.radiusNone,
  xs: C.radiusXs,
  sm: C.radiusSm,
  md: C.radiusMd,
  lg: C.radiusLg,
  xl: C.radiusXl,
  full: C.radiusFull
}, $g = {
  "filled-primary": C.filledPrimary,
  "filled-secondary": C.filledSecondary,
  "filled-neutral": C.filledNeutral,
  "filled-success": C.filledSuccess,
  "filled-warning": C.filledWarning,
  "filled-danger": C.filledDanger,
  "filled-info": C.filledInfo,
  "light-primary": C.lightPrimary,
  "light-secondary": C.lightSecondary,
  "light-neutral": C.lightNeutral,
  "light-success": C.lightSuccess,
  "light-warning": C.lightWarning,
  "light-danger": C.lightDanger,
  "light-info": C.lightInfo,
  "outline-primary": C.outlinePrimary,
  "outline-secondary": C.outlineSecondary,
  "outline-neutral": C.outlineNeutral,
  "outline-success": C.outlineSuccess,
  "outline-warning": C.outlineWarning,
  "outline-danger": C.outlineDanger,
  "outline-info": C.outlineInfo,
  "dot-primary": C.dotPrimary,
  "dot-secondary": C.dotSecondary,
  "dot-neutral": C.dotNeutral,
  "dot-success": C.dotSuccess,
  "dot-warning": C.dotWarning,
  "dot-danger": C.dotDanger,
  "dot-info": C.dotInfo
}, Ig = {
  primary: C.dotCirclePrimary,
  secondary: C.dotCircleSecondary,
  neutral: C.dotCircleNeutral,
  success: C.dotCircleSuccess,
  warning: C.dotCircleWarning,
  danger: C.dotCircleDanger,
  info: C.dotCircleInfo
}, Wg = T(
  ({ as: e = "span", children: t, variant: n = "light", color: o = "primary", size: a = "md", radius: r = "xl", leftSection: s, className: i, style: u, ...d }, c) => {
    const _ = n + "-" + o, m = L(C.badge, Bg[a], Pg[r], $g[_] || C.lightPrimary, i);
    return /* @__PURE__ */ k(e, { ref: c, className: m, style: u, ...d, children: [
      n === "dot" && /* @__PURE__ */ l("span", { className: L(C.dotCircle, Ig[o]), "aria-hidden": "true" }),
      s && /* @__PURE__ */ l("span", { className: C.leftSection, children: s }),
      /* @__PURE__ */ l("span", { children: t })
    ] });
  }
);
Wg.displayName = "Badge";
const Tg = "Card-module__card___Cb1o4", Og = "Card-module__withBorder___TRBwc", Fg = "Card-module__padNone___-1JEm", Eg = "Card-module__padXs___CNXdp", Gg = "Card-module__padSm___zmolL", Ag = "Card-module__padMd___z7FbZ", Rg = "Card-module__padLg___Q8x36", Yg = "Card-module__padXl___3QKD1", Hg = "Card-module__pad2Xl___SpD9c", jg = "Card-module__radiusNone___8Rp4P", qg = "Card-module__radiusXs___eKgxR", Vg = "Card-module__radiusSm___HJsgU", Qg = "Card-module__radiusMd___PL4yW", Kg = "Card-module__radiusLg___k4pD8", Ug = "Card-module__radiusXl___f79g3", Zg = "Card-module__radiusFull___NkcNL", Jg = "Card-module__shadowNone___O-kXe", ep = "Card-module__shadowXs___8z5i8", tp = "Card-module__shadowSm___VqyJF", np = "Card-module__shadowMd___TGdll", op = "Card-module__shadowLg___ebNSb", ap = "Card-module__shadowXl___se6-G", rp = "Card-module__header___PTXf2", sp = "Card-module__body___W441Z", ip = "Card-module__footer___Mu-JC", R = {
  card: Tg,
  withBorder: Og,
  padNone: Fg,
  padXs: Eg,
  padSm: Gg,
  padMd: Ag,
  padLg: Rg,
  padXl: Yg,
  pad2Xl: Hg,
  radiusNone: jg,
  radiusXs: qg,
  radiusSm: Vg,
  radiusMd: Qg,
  radiusLg: Kg,
  radiusXl: Ug,
  radiusFull: Zg,
  shadowNone: Jg,
  shadowXs: ep,
  shadowSm: tp,
  shadowMd: np,
  shadowLg: op,
  shadowXl: ap,
  header: rp,
  body: sp,
  footer: ip
}, lp = {
  none: R.padNone,
  xs: R.padXs,
  sm: R.padSm,
  md: R.padMd,
  lg: R.padLg,
  xl: R.padXl,
  "2xl": R.pad2Xl
}, dp = {
  none: R.radiusNone,
  xs: R.radiusXs,
  sm: R.radiusSm,
  md: R.radiusMd,
  lg: R.radiusLg,
  xl: R.radiusXl,
  full: R.radiusFull
}, cp = {
  none: R.shadowNone,
  xs: R.shadowXs,
  sm: R.shadowSm,
  md: R.shadowMd,
  lg: R.shadowLg,
  xl: R.shadowXl
}, cn = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ l("div", { ref: a, className: L(R.header, t), style: n, ...o, children: e })
);
cn.displayName = "Card.Header";
const un = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ l("div", { ref: a, className: L(R.body, t), style: n, ...o, children: e })
);
un.displayName = "Card.Body";
const _n = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ l("div", { ref: a, className: L(R.footer, t), style: n, ...o, children: e })
);
_n.displayName = "Card.Footer";
const rt = T(
  ({ as: e = "div", children: t, padding: n = "md", radius: o = "md", withBorder: a = !0, shadow: r = "sm", className: s, style: i, ...u }, d) => {
    const c = L(R.card, n && lp[n], o && dp[o], r && cp[r], { [R.withBorder]: a }, s);
    return /* @__PURE__ */ l(e, { ref: d, className: c, style: i, ...u, children: t });
  }
);
rt.displayName = "Card";
rt.Header = cn;
rt.Body = un;
rt.Footer = _n;
const up = "Modal-module__root___ytPLl", _p = "Modal-module__centered___UfBxf", mp = "Modal-module__notCentered___Td7f5", fp = "Modal-module__backdrop___GVUh4", gp = "Modal-module__dialog___ptM-K", pp = "Modal-module__sizeXs___UNRGd", hp = "Modal-module__sizeSm___-iZG0", vp = "Modal-module__sizeMd___WcNhW", yp = "Modal-module__sizeLg___EckT-", bp = "Modal-module__sizeXl___CaZ8Y", wp = "Modal-module__sizeFull___wBR5P", Sp = "Modal-module__header___ILG9i", Np = "Modal-module__title___A5OeE", Mp = "Modal-module__closeButton___3LpSf", xp = "Modal-module__body___lVhql", se = {
  root: up,
  centered: _p,
  notCentered: mp,
  backdrop: fp,
  dialog: gp,
  sizeXs: pp,
  sizeSm: hp,
  sizeMd: vp,
  sizeLg: yp,
  sizeXl: bp,
  sizeFull: wp,
  header: Sp,
  title: Np,
  closeButton: Mp,
  body: xp
}, Cp = {
  xs: se.sizeXs,
  sm: se.sizeSm,
  md: se.sizeMd,
  lg: se.sizeLg,
  xl: se.sizeXl,
  full: se.sizeFull
}, Dp = ({
  opened: e,
  onClose: t,
  title: n,
  size: o = "md",
  centered: a = !0,
  closeOnClickOutside: r = !0,
  closeOnEscape: s = !0,
  withCloseButton: i = !0,
  children: u,
  className: d,
  style: c,
  ..._
}) => {
  const m = Se(null), g = Ge();
  if (J(() => {
    if (!e || !s) return;
    const p = (S) => {
      S.key === "Escape" && t();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [e, s, t]), J(() => {
    if (!e) return;
    const p = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = p;
    };
  }, [e]), !e || typeof document > "u") return null;
  const h = (p) => {
    r && m.current && !m.current.contains(p.target) && t();
  }, b = /* @__PURE__ */ k("div", { className: L(se.root, a ? se.centered : se.notCentered), onClick: h, role: "presentation", children: [
    /* @__PURE__ */ l("div", { className: se.backdrop, "aria-hidden": "true" }),
    /* @__PURE__ */ k("div", { ref: m, role: "dialog", "aria-modal": "true", "aria-labelledby": n ? g : void 0, className: L(se.dialog, Cp[o], d), style: c, onClick: (p) => p.stopPropagation(), ..._, children: [
      (n || i) && /* @__PURE__ */ k("div", { className: se.header, children: [
        n && /* @__PURE__ */ l("h2", { id: g, className: se.title, children: n }),
        i && /* @__PURE__ */ l("button", { type: "button", "aria-label": "Close modal", className: se.closeButton, onClick: t, children: /* @__PURE__ */ k("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ l("div", { className: se.body, children: u })
    ] })
  ] });
  return ot(b, document.body);
};
Dp.displayName = "Modal";
const kp = "Tooltip-module__wrapper___D1A0A", zp = "Tooltip-module__tooltip___UA7H9", Xp = "Tooltip-module__posTop___0jVkP", Lp = "Tooltip-module__posBottom___g-tHi", Bp = "Tooltip-module__posLeft___Mb6m-", Pp = "Tooltip-module__posRight___TPf0A", $p = "Tooltip-module__arrow___4zROk", We = {
  wrapper: kp,
  tooltip: zp,
  posTop: Xp,
  posBottom: Lp,
  posLeft: Bp,
  posRight: Pp,
  arrow: $p
}, Ip = {
  top: We.posTop,
  bottom: We.posBottom,
  left: We.posLeft,
  right: We.posRight
}, Wp = ({
  label: e,
  children: t,
  position: n = "top",
  openDelay: o = 0,
  closeDelay: a = 0,
  withArrow: r = !0,
  className: s,
  style: i
}) => {
  const [u, d] = Z(!1), c = Se(null), _ = Se(null), m = Ge(), g = () => {
    _.current && (window.clearTimeout(_.current), _.current = null), o > 0 ? c.current = window.setTimeout(() => d(!0), o) : d(!0);
  }, h = () => {
    c.current && (window.clearTimeout(c.current), c.current = null), a > 0 ? _.current = window.setTimeout(() => d(!1), a) : d(!1);
  };
  if (!gn(t)) return t;
  const b = t, p = pn(b, {
    onMouseEnter: (S) => {
      b.props?.onMouseEnter?.(S), g();
    },
    onMouseLeave: (S) => {
      b.props?.onMouseLeave?.(S), h();
    },
    onFocus: (S) => {
      b.props?.onFocus?.(S), g();
    },
    onBlur: (S) => {
      b.props?.onBlur?.(S), h();
    },
    "aria-describedby": u ? m : void 0
  });
  return /* @__PURE__ */ k("span", { className: We.wrapper, children: [
    p,
    u && /* @__PURE__ */ k("span", { id: m, role: "tooltip", className: L(We.tooltip, Ip[n], s), style: i, children: [
      e,
      r && /* @__PURE__ */ l("span", { className: We.arrow, "aria-hidden": "true" })
    ] })
  ] });
};
Wp.displayName = "Tooltip";
const Tp = "Loader-module__loader___vqQOD", Op = "Loader-module__sizeXs___yeKOs", Fp = "Loader-module__sizeSm___BMXP4", Ep = "Loader-module__sizeMd___lPS-M", Gp = "Loader-module__sizeLg___Ldupy", Ap = "Loader-module__sizeXl___pLWUN", Rp = "Loader-module__colorPrimary___H19ax", Yp = "Loader-module__colorSecondary___wMVOI", Hp = "Loader-module__colorNeutral___sjCyG", jp = "Loader-module__colorSuccess___umOmx", qp = "Loader-module__colorWarning___fQNrG", Vp = "Loader-module__colorDanger___2HVuq", Qp = "Loader-module__colorInfo___2D-2p", Kp = "Loader-module__spinnerSvg___dlEGW", Up = "Loader-module__spinnerCircle___cCMLO", Zp = "Loader-module__dotsContainer___pq8gM", Jp = "Loader-module__dot___Bi3gT", eh = "Loader-module__barsContainer___IFC8E", th = "Loader-module__bar___fm1H5", j = {
  loader: Tp,
  sizeXs: Op,
  sizeSm: Fp,
  sizeMd: Ep,
  sizeLg: Gp,
  sizeXl: Ap,
  colorPrimary: Rp,
  colorSecondary: Yp,
  colorNeutral: Hp,
  colorSuccess: jp,
  colorWarning: qp,
  colorDanger: Vp,
  colorInfo: Qp,
  spinnerSvg: Kp,
  spinnerCircle: Up,
  dotsContainer: Zp,
  dot: Jp,
  barsContainer: eh,
  bar: th
}, nh = {
  xs: j.sizeXs,
  sm: j.sizeSm,
  md: j.sizeMd,
  lg: j.sizeLg,
  xl: j.sizeXl
}, oh = {
  primary: j.colorPrimary,
  secondary: j.colorSecondary,
  neutral: j.colorNeutral,
  success: j.colorSuccess,
  warning: j.colorWarning,
  danger: j.colorDanger,
  info: j.colorInfo
}, ah = T(
  ({ variant: e = "spinner", color: t = "primary", size: n = "md", className: o, style: a, ...r }, s) => {
    const i = typeof n == "number", u = i ? { ...a, width: n + "px", height: n + "px" } : a || {}, d = L(j.loader, !i && nh[n], oh[t], o);
    return /* @__PURE__ */ k("span", { ref: s, role: "status", "aria-live": "polite", className: d, style: u, ...r, children: [
      e === "spinner" && /* @__PURE__ */ l("svg", { className: j.spinnerSvg, viewBox: "0 0 50 50", children: /* @__PURE__ */ l("circle", { className: j.spinnerCircle, cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "5" }) }),
      e === "dots" && /* @__PURE__ */ k("span", { className: j.dotsContainer, children: [
        /* @__PURE__ */ l("span", { className: j.dot }),
        /* @__PURE__ */ l("span", { className: j.dot }),
        /* @__PURE__ */ l("span", { className: j.dot })
      ] }),
      e === "bars" && /* @__PURE__ */ k("span", { className: j.barsContainer, children: [
        /* @__PURE__ */ l("span", { className: j.bar }),
        /* @__PURE__ */ l("span", { className: j.bar }),
        /* @__PURE__ */ l("span", { className: j.bar })
      ] })
    ] });
  }
);
ah.displayName = "Loader";
export {
  ei as AspectRatio,
  vf as Avatar,
  Wg as Badge,
  wa as Box,
  wl as Button,
  rt as Card,
  un as CardBody,
  _n as CardFooter,
  cn as CardHeader,
  hi as Container,
  Gm as DatePicker,
  Rm as DateRangePicker,
  Xo as Divider,
  At as Grid,
  Gt as GridCol,
  mr as Group,
  fd as IconButton,
  If as Image,
  Ae as InputWrapper,
  ah as Loader,
  Dp as Modal,
  qd as NumberInput,
  pc as Select,
  Ga as Stack,
  Gc as Switch,
  Jn as Text,
  Ad as TextField,
  Ft as ThemeContext,
  lh as ThemeProvider,
  No as Title,
  Wp as Tooltip,
  dh as useTheme
};
//# sourceMappingURL=index.js.map
