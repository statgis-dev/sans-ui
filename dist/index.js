import { jsx as i, jsxs as M, Fragment as Xe } from "react/jsx-runtime";
import Bt, { createContext as Ie, useState as q, useEffect as Q, useMemo as pn, useContext as We, forwardRef as T, useRef as Ne, useId as Ae, useLayoutEffect as hn, isValidElement as vn, cloneElement as yn } from "react";
import { createPortal as rt } from "react-dom";
import { useMap as st } from "react-map-gl/maplibre";
const Rt = Ie(void 0), $h = ({
  children: e,
  defaultTheme: t = "light",
  storageKey: n = "sans-ui-theme",
  targetElement: o
}) => {
  const [a, r] = q(() => {
    if (typeof window < "u")
      try {
        const c = localStorage.getItem(n);
        if (c === "light" || c === "dark")
          return c;
      } catch {
      }
    return t;
  }), s = (c) => {
    if (r(c), typeof window < "u")
      try {
        localStorage.setItem(n, c);
      } catch {
      }
  }, l = () => {
    s(a === "light" ? "dark" : "light");
  };
  Q(() => {
    const c = o || (typeof document < "u" ? document.documentElement : null);
    c && c.setAttribute("data-theme", a);
  }, [a, o]);
  const u = pn(
    () => ({
      theme: a,
      setTheme: s,
      toggleTheme: l
    }),
    [a]
  );
  return /* @__PURE__ */ i(Rt.Provider, { value: u, children: e });
};
function Ih() {
  const e = We(Rt);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
function At(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = At(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function B() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = At(e)) && (o && (o += " "), o += t);
  return o;
}
const bn = "Text-module__text___78lq0", wn = "Text-module__variantRegular___h4rEb", Sn = "Text-module__variantMono___2XpZ-", Nn = "Text-module__variantDisplay___erxax", xn = "Text-module__sizeXs___9Ok-b", Mn = "Text-module__sizeSm___2Oiat", Cn = "Text-module__sizeMd___k9dGF", kn = "Text-module__sizeLg___7aFQL", Dn = "Text-module__sizeXl___LpJtS", Ln = "Text-module__weight400___BGf0O", Bn = "Text-module__weight500___8Cgs9", zn = "Text-module__weight600___URtEb", Xn = "Text-module__weight700___V0-f-", Pn = "Text-module__italic___z-mH2", $n = "Text-module__underline___mGmd0", In = "Text-module__strikethrough___ht8uP", Wn = "Text-module__colorInherit___4-1Mm", Tn = "Text-module__colorDimmed___4fJfV", On = "Text-module__colorPrimary___op5fM", Fn = "Text-module__colorSecondary___w7pxt", En = "Text-module__colorNeutral___E9c8l", Gn = "Text-module__colorSuccess___ZKZfh", Rn = "Text-module__colorWarning___eoIhV", An = "Text-module__colorDanger___b9dnd", Yn = "Text-module__colorInfo___lmCis", Hn = "Text-module__alignLeft___OZBSx", jn = "Text-module__alignCenter___QK7p-", qn = "Text-module__alignRight___ysuR2", Vn = "Text-module__alignJustify___sRmKl", Zn = "Text-module__truncateSingle___vWoo8", Qn = "Text-module__truncateClamp___tpH-K", $ = {
  text: bn,
  variantRegular: wn,
  variantMono: Sn,
  variantDisplay: Nn,
  sizeXs: xn,
  sizeSm: Mn,
  sizeMd: Cn,
  sizeLg: kn,
  sizeXl: Dn,
  weight400: Ln,
  weight500: Bn,
  weight600: zn,
  weight700: Xn,
  italic: Pn,
  underline: $n,
  strikethrough: In,
  colorInherit: Wn,
  colorDimmed: Tn,
  colorPrimary: On,
  colorSecondary: Fn,
  colorNeutral: En,
  colorSuccess: Gn,
  colorWarning: Rn,
  colorDanger: An,
  colorInfo: Yn,
  alignLeft: Hn,
  alignCenter: jn,
  alignRight: qn,
  alignJustify: Vn,
  truncateSingle: Zn,
  truncateClamp: Qn
}, Kn = {
  xs: $.sizeXs,
  sm: $.sizeSm,
  md: $.sizeMd,
  lg: $.sizeLg,
  xl: $.sizeXl
}, Un = {
  400: $.weight400,
  500: $.weight500,
  600: $.weight600,
  700: $.weight700
}, Jn = {
  regular: $.variantRegular,
  mono: $.variantMono,
  display: $.variantDisplay
}, eo = {
  inherit: $.colorInherit,
  dimmed: $.colorDimmed,
  primary: $.colorPrimary,
  secondary: $.colorSecondary,
  neutral: $.colorNeutral,
  success: $.colorSuccess,
  warning: $.colorWarning,
  danger: $.colorDanger,
  info: $.colorInfo
}, to = {
  left: $.alignLeft,
  center: $.alignCenter,
  right: $.alignRight,
  justify: $.alignJustify
}, no = T(
  ({ as: e = "p", children: t, variant: n = "regular", size: o = "md", weight: a = 400, italic: r = !1, underline: s = !1, strikethrough: l = !1, color: u = "inherit", align: c = "left", truncate: d = !1, className: _, style: m, ...f }, p) => {
    const y = d === !0, h = typeof d == "number" && d >= 1, w = h ? { ...m, WebkitLineClamp: d } : m, x = B($.text, Jn[n], Kn[o], Un[a], eo[u], to[c], { [$.italic]: r, [$.underline]: s, [$.strikethrough]: l, [$.truncateSingle]: y, [$.truncateClamp]: h }, _);
    return /* @__PURE__ */ i(e, { ref: p, className: x, style: w, ...f, children: t });
  }
);
no.displayName = "Text";
const oo = "Title-module__title___t68i9", ao = "Title-module__sizeH1___2rUbN", ro = "Title-module__sizeH2___BZerW", so = "Title-module__sizeH3___N0Wrq", io = "Title-module__sizeH4___4-u88", lo = "Title-module__sizeH5___vCrtX", co = "Title-module__sizeH6___sInDp", uo = "Title-module__weight500___qC3Rh", _o = "Title-module__weight600___ljczz", mo = "Title-module__weight700___Wy5NX", fo = "Title-module__weight800___WjWVo", go = "Title-module__colorInherit___hNpBk", po = "Title-module__colorPrimary___LUYRB", ho = "Title-module__colorSecondary___wo-p5", vo = "Title-module__colorNeutral___D4Lrx", yo = "Title-module__colorSuccess___qZNqo", bo = "Title-module__colorWarning___5S3fG", wo = "Title-module__colorDanger___5BrK0", So = "Title-module__colorInfo___BrjaU", te = {
  title: oo,
  sizeH1: ao,
  sizeH2: ro,
  sizeH3: so,
  sizeH4: io,
  sizeH5: lo,
  sizeH6: co,
  weight500: uo,
  weight600: _o,
  weight700: mo,
  weight800: fo,
  colorInherit: go,
  colorPrimary: po,
  colorSecondary: ho,
  colorNeutral: vo,
  colorSuccess: yo,
  colorWarning: bo,
  colorDanger: wo,
  colorInfo: So
}, No = {
  h1: te.sizeH1,
  h2: te.sizeH2,
  h3: te.sizeH3,
  h4: te.sizeH4,
  h5: te.sizeH5,
  h6: te.sizeH6
}, xo = {
  500: te.weight500,
  600: te.weight600,
  700: te.weight700,
  800: te.weight800
}, Mo = {
  inherit: te.colorInherit,
  primary: te.colorPrimary,
  secondary: te.colorSecondary,
  neutral: te.colorNeutral,
  success: te.colorSuccess,
  warning: te.colorWarning,
  danger: te.colorDanger,
  info: te.colorInfo
}, Co = T(
  ({ children: e, order: t = 1, size: n, weight: o = 700, color: a = "inherit", className: r, style: s, ...l }, u) => {
    const c = "h" + t, d = n || "h" + t, _ = B(te.title, No[d], xo[o], Mo[a], r);
    return /* @__PURE__ */ i(c, { ref: u, className: _, style: s, ...l, children: e });
  }
);
Co.displayName = "Title";
const ko = "Divider-module__divider___KSGsi", Do = "Divider-module__horizontal___pZ05Y", Lo = "Divider-module__vertical___p-jD4", Bo = "Divider-module__line___CX4-v", zo = "Divider-module__label___PwL54", Ee = {
  divider: ko,
  horizontal: Do,
  vertical: Lo,
  line: Bo,
  label: zo
}, Xo = {
  border: "var(--border-subtle)",
  neutral: "var(--border-strong)",
  primary: "var(--color-primary-500)",
  secondary: "var(--color-secondary-500)",
  success: "var(--color-success-500)",
  warning: "var(--color-warning-500)",
  danger: "var(--color-danger-500)",
  info: "var(--color-info-500)"
}, Po = T(
  ({ orientation: e = "horizontal", variant: t = "solid", size: n = 1, color: o = "border", label: a, className: r, style: s, ...l }, u) => {
    const c = e === "horizontal", d = {
      ...s,
      "--divider-size": n + "px",
      "--divider-style": t,
      "--divider-color": Xo[o] || "var(--border-subtle)"
    }, _ = B(Ee.divider, c ? Ee.horizontal : Ee.vertical, r);
    return /* @__PURE__ */ M("div", { ref: u, role: "separator", "aria-orientation": e, className: _, style: d, ...l, children: [
      /* @__PURE__ */ i("span", { className: Ee.line }),
      a && c && /* @__PURE__ */ i("span", { className: Ee.label, children: a }),
      a && c && /* @__PURE__ */ i("span", { className: Ee.line })
    ] });
  }
);
Po.displayName = "Divider";
const $o = "Box-module__box___Wgbf3", Io = "Box-module__centered___qfT1T", Wo = "Box-module__sizeXs___nqRLQ", To = "Box-module__sizeSm___O4HN0", Oo = "Box-module__sizeMd___D1Qs-", Fo = "Box-module__sizeLg___6234W", Eo = "Box-module__sizeXl___pt9kx", Go = "Box-module__sizeFull___jMPVd", Ro = "Box-module__bgApp___9jVJP", Ao = "Box-module__bgSurface___UEdz7", Yo = "Box-module__bgElevated___VseX2", Ho = "Box-module__bgPrimary___s1xYD", jo = "Box-module__bgSecondary___Ti7-M", qo = "Box-module__bgNeutral___bNFKp", Vo = "Box-module__bgSuccess___m9f4p", Zo = "Box-module__bgWarning___XUYDX", Qo = "Box-module__bgDanger___YpZPt", Ko = "Box-module__bgInfo___Ab62p", Uo = "Box-module__padNone___-KjzY", Jo = "Box-module__padXs___-FYDi", ea = "Box-module__padSm___ytD3C", ta = "Box-module__padMd___GOSZC", na = "Box-module__padLg___jBVdo", oa = "Box-module__padXl___MwkOT", aa = "Box-module__pad2Xl___0IY4x", ra = "Box-module__radiusNone___dXDqU", sa = "Box-module__radiusXs___wdQtE", ia = "Box-module__radiusSm___LuW3v", la = "Box-module__radiusMd___03HCd", da = "Box-module__radiusLg___WWODU", ca = "Box-module__radiusXl___aE9l0", ua = "Box-module__radiusFull___dsiF8", _a = "Box-module__border___FYpYo", ma = "Box-module__shadowNone___-Whrh", fa = "Box-module__shadowXs___6F8cz", ga = "Box-module__shadowSm___I6eGZ", pa = "Box-module__shadowMd___fLRRl", ha = "Box-module__shadowLg___-Miql", va = "Box-module__shadowXl___I4QVF", z = {
  box: $o,
  centered: Io,
  sizeXs: Wo,
  sizeSm: To,
  sizeMd: Oo,
  sizeLg: Fo,
  sizeXl: Eo,
  sizeFull: Go,
  bgApp: Ro,
  bgSurface: Ao,
  bgElevated: Yo,
  bgPrimary: Ho,
  bgSecondary: jo,
  bgNeutral: qo,
  bgSuccess: Vo,
  bgWarning: Zo,
  bgDanger: Qo,
  bgInfo: Ko,
  padNone: Uo,
  padXs: Jo,
  padSm: ea,
  padMd: ta,
  padLg: na,
  padXl: oa,
  pad2Xl: aa,
  radiusNone: ra,
  radiusXs: sa,
  radiusSm: ia,
  radiusMd: la,
  radiusLg: da,
  radiusXl: ca,
  radiusFull: ua,
  border: _a,
  shadowNone: ma,
  shadowXs: fa,
  shadowSm: ga,
  shadowMd: pa,
  shadowLg: ha,
  shadowXl: va
}, ya = {
  xs: z.sizeXs,
  sm: z.sizeSm,
  md: z.sizeMd,
  lg: z.sizeLg,
  xl: z.sizeXl,
  full: z.sizeFull
}, ba = {
  app: z.bgApp,
  surface: z.bgSurface,
  elevated: z.bgElevated,
  primary: z.bgPrimary,
  secondary: z.bgSecondary,
  neutral: z.bgNeutral,
  success: z.bgSuccess,
  warning: z.bgWarning,
  danger: z.bgDanger,
  info: z.bgInfo
}, wa = {
  none: z.padNone,
  xs: z.padXs,
  sm: z.padSm,
  md: z.padMd,
  lg: z.padLg,
  xl: z.padXl,
  "2xl": z.pad2Xl
}, Sa = {
  none: z.radiusNone,
  xs: z.radiusXs,
  sm: z.radiusSm,
  md: z.radiusMd,
  lg: z.radiusLg,
  xl: z.radiusXl,
  full: z.radiusFull
}, Na = {
  none: z.shadowNone,
  xs: z.shadowXs,
  sm: z.shadowSm,
  md: z.shadowMd,
  lg: z.shadowLg,
  xl: z.shadowXl
}, xa = T(
  ({ as: e = "div", children: t, size: n, centered: o = !1, bg: a = "surface", padding: r = "none", radius: s = "none", border: l = !1, shadow: u = "none", className: c, style: d, ..._ }, m) => {
    const f = B(z.box, n && ya[n], a && ba[a], r && wa[r], s && Sa[s], u && Na[u], { [z.centered]: o, [z.border]: l }, c);
    return /* @__PURE__ */ i(e, { ref: m, className: f, style: d, ..._, children: t });
  }
);
xa.displayName = "Box";
const Ma = "Stack-module__stack___yUU-B", Ca = "Stack-module__gapNone___bv7gQ", ka = "Stack-module__gapXs___QX2UK", Da = "Stack-module__gapSm___A4Rat", La = "Stack-module__gapMd___uSujS", Ba = "Stack-module__gapLg___UfQBu", za = "Stack-module__gapXl___OEbNo", Xa = "Stack-module__gap2Xl___B0Skj", Pa = "Stack-module__alignStretch___tNNmt", $a = "Stack-module__alignFlexStart___X-R3w", Ia = "Stack-module__alignCenter___geGJ5", Wa = "Stack-module__alignFlexEnd___H1fJu", Ta = "Stack-module__justifyFlexStart___J6j1r", Oa = "Stack-module__justifyCenter___5iQts", Fa = "Stack-module__justifyFlexEnd___8rc9a", Ea = "Stack-module__justifySpaceBetween___TzxEr", se = {
  stack: Ma,
  gapNone: Ca,
  gapXs: ka,
  gapSm: Da,
  gapMd: La,
  gapLg: Ba,
  gapXl: za,
  gap2Xl: Xa,
  alignStretch: Pa,
  alignFlexStart: $a,
  alignCenter: Ia,
  alignFlexEnd: Wa,
  justifyFlexStart: Ta,
  justifyCenter: Oa,
  justifyFlexEnd: Fa,
  justifySpaceBetween: Ea
}, Ga = {
  none: se.gapNone,
  xs: se.gapXs,
  sm: se.gapSm,
  md: se.gapMd,
  lg: se.gapLg,
  xl: se.gapXl,
  "2xl": se.gap2Xl
}, Ra = {
  stretch: se.alignStretch,
  "flex-start": se.alignFlexStart,
  center: se.alignCenter,
  "flex-end": se.alignFlexEnd
}, Aa = {
  "flex-start": se.justifyFlexStart,
  center: se.justifyCenter,
  "flex-end": se.justifyFlexEnd,
  "space-between": se.justifySpaceBetween
}, Ya = T(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "stretch", justify: a = "flex-start", className: r, style: s, ...l }, u) => {
    const c = B(se.stack, Ga[n], Ra[o], Aa[a], r);
    return /* @__PURE__ */ i(e, { ref: u, className: c, style: s, ...l, children: t });
  }
);
Ya.displayName = "Stack";
const Ha = "Group-module__group___JB9jS", ja = "Group-module__gapNone___spqGG", qa = "Group-module__gapXs___lJtE2", Va = "Group-module__gapSm___mAEKG", Za = "Group-module__gapMd___4vpbQ", Qa = "Group-module__gapLg___y-iGx", Ka = "Group-module__gapXl___vzZFP", Ua = "Group-module__gap2Xl___VE4kj", Ja = "Group-module__alignStretch___oGWAq", er = "Group-module__alignFlexStart___ChF-g", tr = "Group-module__alignCenter___HmA5F", nr = "Group-module__alignFlexEnd___tGOPE", or = "Group-module__justifyFlexStart___XpW8l", ar = "Group-module__justifyCenter___qw04u", rr = "Group-module__justifyFlexEnd___a4TPM", sr = "Group-module__justifySpaceBetween___tq7ho", ir = "Group-module__justifySpaceAround___gGJlV", lr = "Group-module__wrapNowrap___F6I5s", dr = "Group-module__wrapWrap___gcTiA", cr = "Group-module__wrapReverse___sKgPv", ur = "Group-module__grow___lg-SQ", U = {
  group: Ha,
  gapNone: ja,
  gapXs: qa,
  gapSm: Va,
  gapMd: Za,
  gapLg: Qa,
  gapXl: Ka,
  gap2Xl: Ua,
  alignStretch: Ja,
  alignFlexStart: er,
  alignCenter: tr,
  alignFlexEnd: nr,
  justifyFlexStart: or,
  justifyCenter: ar,
  justifyFlexEnd: rr,
  justifySpaceBetween: sr,
  justifySpaceAround: ir,
  wrapNowrap: lr,
  wrapWrap: dr,
  wrapReverse: cr,
  grow: ur
}, _r = {
  none: U.gapNone,
  xs: U.gapXs,
  sm: U.gapSm,
  md: U.gapMd,
  lg: U.gapLg,
  xl: U.gapXl,
  "2xl": U.gap2Xl
}, mr = {
  stretch: U.alignStretch,
  "flex-start": U.alignFlexStart,
  center: U.alignCenter,
  "flex-end": U.alignFlexEnd
}, fr = {
  "flex-start": U.justifyFlexStart,
  center: U.justifyCenter,
  "flex-end": U.justifyFlexEnd,
  "space-between": U.justifySpaceBetween,
  "space-around": U.justifySpaceAround
}, gr = {
  nowrap: U.wrapNowrap,
  wrap: U.wrapWrap,
  "wrap-reverse": U.wrapReverse
}, pr = T(
  ({ as: e = "div", children: t, gap: n = "md", align: o = "center", justify: a = "flex-start", wrap: r = "wrap", grow: s = !1, className: l, style: u, ...c }, d) => {
    const _ = B(U.group, _r[n], mr[o], fr[a], gr[r], { [U.grow]: s }, l);
    return /* @__PURE__ */ i(e, { ref: d, className: _, style: u, ...c, children: t });
  }
);
pr.displayName = "Group";
const hr = "Grid-module__grid___h49fk", vr = "Grid-module__gutterNone___G8BMH", yr = "Grid-module__gutterXs___ADsBL", br = "Grid-module__gutterSm___6NRbO", wr = "Grid-module__gutterMd___cmoLu", Sr = "Grid-module__gutterLg___9SuhS", Nr = "Grid-module__gutterXl___PsRlW", xr = "Grid-module__gutter2Xl___xJo0D", Mr = "Grid-module__col___tbuNg", Cr = "Grid-module__spanAuto___h-TSw", kr = "Grid-module__span1___ECAD7", Dr = "Grid-module__span2___-sX5n", Lr = "Grid-module__span3___dFBl4", Br = "Grid-module__span4___kglrb", zr = "Grid-module__span5___iHfGz", Xr = "Grid-module__span6___wwMzi", Pr = "Grid-module__span7___0BBdf", $r = "Grid-module__span8___Kcy9A", Ir = "Grid-module__span9___7ySoZ", Wr = "Grid-module__span10___gPA7Z", Tr = "Grid-module__span11___zv17X", Or = "Grid-module__span12___nRBMm", Fr = "Grid-module__offset1___5hFyu", Er = "Grid-module__offset2___mg1D-", Gr = "Grid-module__offset3___NQOzX", Rr = "Grid-module__offset4___rMPwe", Ar = "Grid-module__offset5___W-7Fo", Yr = "Grid-module__offset6___NhPX8", Hr = "Grid-module__offset7___Epz5v", jr = "Grid-module__offset8___mpayK", qr = "Grid-module__offset9___97joT", Vr = "Grid-module__offset10___Loifi", Zr = "Grid-module__offset11___XKZkn", Qr = "Grid-module__spanSmAuto___-kDMz", Kr = "Grid-module__spanSm1___gXv5X", Ur = "Grid-module__spanSm2___-09fM", Jr = "Grid-module__spanSm3___0gL4g", es = "Grid-module__spanSm4___YqJv5", ts = "Grid-module__spanSm5___GHHtG", ns = "Grid-module__spanSm6___j8JQx", os = "Grid-module__spanSm7___TpTrd", as = "Grid-module__spanSm8___XdwNJ", rs = "Grid-module__spanSm9___hDrXA", ss = "Grid-module__spanSm10___4KWRB", is = "Grid-module__spanSm11___ExLVx", ls = "Grid-module__spanSm12___vQk2G", ds = "Grid-module__spanMdAuto___pEce6", cs = "Grid-module__spanMd1___xRZ5L", us = "Grid-module__spanMd2___tVS1a", _s = "Grid-module__spanMd3___O35cH", ms = "Grid-module__spanMd4___Yretx", fs = "Grid-module__spanMd5___DjiQ9", gs = "Grid-module__spanMd6___U2puq", ps = "Grid-module__spanMd7___sVsSG", hs = "Grid-module__spanMd8___FRJn-", vs = "Grid-module__spanMd9___0cxAI", ys = "Grid-module__spanMd10___IPaPL", bs = "Grid-module__spanMd11___BSl3b", ws = "Grid-module__spanMd12___xJVAR", Ss = "Grid-module__spanLgAuto___hiHiG", Ns = "Grid-module__spanLg1___xZAgn", xs = "Grid-module__spanLg2___hIgCi", Ms = "Grid-module__spanLg3___4JXfO", Cs = "Grid-module__spanLg4___criYH", ks = "Grid-module__spanLg5___X2kOa", Ds = "Grid-module__spanLg6___-lHL6", Ls = "Grid-module__spanLg7___ijxyH", Bs = "Grid-module__spanLg8___9MXAV", zs = "Grid-module__spanLg9___Kaj-s", Xs = "Grid-module__spanLg10___-YWG-", Ps = "Grid-module__spanLg11___O-vU9", $s = "Grid-module__spanLg12___dZIlg", Is = "Grid-module__spanXlAuto___O4eyM", Ws = "Grid-module__spanXl1___N-5wm", Ts = "Grid-module__spanXl2___vJNAz", Os = "Grid-module__spanXl3___ySPkA", Fs = "Grid-module__spanXl4___xVk5-", Es = "Grid-module__spanXl5___NT66v", Gs = "Grid-module__spanXl6___DlWPY", Rs = "Grid-module__spanXl7___WQDEA", As = "Grid-module__spanXl8___WfKp1", Ys = "Grid-module__spanXl9___sairI", Hs = "Grid-module__spanXl10___i2IqV", js = "Grid-module__spanXl11___oyLBC", qs = "Grid-module__spanXl12___PYn7s", g = {
  grid: hr,
  gutterNone: vr,
  gutterXs: yr,
  gutterSm: br,
  gutterMd: wr,
  gutterLg: Sr,
  gutterXl: Nr,
  gutter2Xl: xr,
  col: Mr,
  spanAuto: Cr,
  span1: kr,
  span2: Dr,
  span3: Lr,
  span4: Br,
  span5: zr,
  span6: Xr,
  span7: Pr,
  span8: $r,
  span9: Ir,
  span10: Wr,
  span11: Tr,
  span12: Or,
  offset1: Fr,
  offset2: Er,
  offset3: Gr,
  offset4: Rr,
  offset5: Ar,
  offset6: Yr,
  offset7: Hr,
  offset8: jr,
  offset9: qr,
  offset10: Vr,
  offset11: Zr,
  spanSmAuto: Qr,
  spanSm1: Kr,
  spanSm2: Ur,
  spanSm3: Jr,
  spanSm4: es,
  spanSm5: ts,
  spanSm6: ns,
  spanSm7: os,
  spanSm8: as,
  spanSm9: rs,
  spanSm10: ss,
  spanSm11: is,
  spanSm12: ls,
  spanMdAuto: ds,
  spanMd1: cs,
  spanMd2: us,
  spanMd3: _s,
  spanMd4: ms,
  spanMd5: fs,
  spanMd6: gs,
  spanMd7: ps,
  spanMd8: hs,
  spanMd9: vs,
  spanMd10: ys,
  spanMd11: bs,
  spanMd12: ws,
  spanLgAuto: Ss,
  spanLg1: Ns,
  spanLg2: xs,
  spanLg3: Ms,
  spanLg4: Cs,
  spanLg5: ks,
  spanLg6: Ds,
  spanLg7: Ls,
  spanLg8: Bs,
  spanLg9: zs,
  spanLg10: Xs,
  spanLg11: Ps,
  spanLg12: $s,
  spanXlAuto: Is,
  spanXl1: Ws,
  spanXl2: Ts,
  spanXl3: Os,
  spanXl4: Fs,
  spanXl5: Es,
  spanXl6: Gs,
  spanXl7: Rs,
  spanXl8: As,
  spanXl9: Ys,
  spanXl10: Hs,
  spanXl11: js,
  spanXl12: qs
}, Vs = {
  none: g.gutterNone,
  xs: g.gutterXs,
  sm: g.gutterSm,
  md: g.gutterMd,
  lg: g.gutterLg,
  xl: g.gutterXl,
  "2xl": g.gutter2Xl
}, Zs = {
  auto: g.spanAuto,
  1: g.span1,
  2: g.span2,
  3: g.span3,
  4: g.span4,
  5: g.span5,
  6: g.span6,
  7: g.span7,
  8: g.span8,
  9: g.span9,
  10: g.span10,
  11: g.span11,
  12: g.span12
}, Qs = {
  auto: g.spanSmAuto,
  1: g.spanSm1,
  2: g.spanSm2,
  3: g.spanSm3,
  4: g.spanSm4,
  5: g.spanSm5,
  6: g.spanSm6,
  7: g.spanSm7,
  8: g.spanSm8,
  9: g.spanSm9,
  10: g.spanSm10,
  11: g.spanSm11,
  12: g.spanSm12
}, Ks = {
  auto: g.spanMdAuto,
  1: g.spanMd1,
  2: g.spanMd2,
  3: g.spanMd3,
  4: g.spanMd4,
  5: g.spanMd5,
  6: g.spanMd6,
  7: g.spanMd7,
  8: g.spanMd8,
  9: g.spanMd9,
  10: g.spanMd10,
  11: g.spanMd11,
  12: g.spanMd12
}, Us = {
  auto: g.spanLgAuto,
  1: g.spanLg1,
  2: g.spanLg2,
  3: g.spanLg3,
  4: g.spanLg4,
  5: g.spanLg5,
  6: g.spanLg6,
  7: g.spanLg7,
  8: g.spanLg8,
  9: g.spanLg9,
  10: g.spanLg10,
  11: g.spanLg11,
  12: g.spanLg12
}, Js = {
  auto: g.spanXlAuto,
  1: g.spanXl1,
  2: g.spanXl2,
  3: g.spanXl3,
  4: g.spanXl4,
  5: g.spanXl5,
  6: g.spanXl6,
  7: g.spanXl7,
  8: g.spanXl8,
  9: g.spanXl9,
  10: g.spanXl10,
  11: g.spanXl11,
  12: g.spanXl12
}, ei = {
  1: g.offset1,
  2: g.offset2,
  3: g.offset3,
  4: g.offset4,
  5: g.offset5,
  6: g.offset6,
  7: g.offset7,
  8: g.offset8,
  9: g.offset9,
  10: g.offset10,
  11: g.offset11
}, Yt = T(
  ({ as: e = "div", children: t, span: n = 12, sm: o, md: a, lg: r, xl: s, offset: l = 0, className: u, style: c, ...d }, _) => {
    const m = B(g.col, Zs[String(n)], o && Qs[String(o)], a && Ks[String(a)], r && Us[String(r)], s && Js[String(s)], l > 0 && ei[l], u);
    return /* @__PURE__ */ i(e, { ref: _, className: m, style: c, ...d, children: t });
  }
);
Yt.displayName = "Grid.Col";
const Ht = T(
  ({ as: e = "div", children: t, columns: n = 12, gutter: o = "md", className: a, style: r, ...s }, l) => {
    const u = { ...r, gridTemplateColumns: "repeat(" + n + ", minmax(0, 1fr))" }, c = B(g.grid, Vs[o], a);
    return /* @__PURE__ */ i(e, { ref: l, className: c, style: u, ...s, children: t });
  }
);
Ht.displayName = "Grid";
Ht.Col = Yt;
const ti = "AspectRatio-module__aspectRatio___NpGva", ni = {
  aspectRatio: ti
}, oi = T(
  ({ as: e = "div", children: t, ratio: n = 1, className: o, style: a, ...r }, s) => {
    const l = { ...a, "--aspect-ratio": String(n) };
    return /* @__PURE__ */ i(e, { ref: s, className: B(ni.aspectRatio, o), style: l, ...r, children: t });
  }
);
oi.displayName = "AspectRatio";
const ai = "Container-module__container___JMoiT", ri = "Container-module__sizeXs___LUfHx", si = "Container-module__sizeSm___ev-G8", ii = "Container-module__sizeMd___Lnic2", li = "Container-module__sizeLg___Z7t9k", di = "Container-module__sizeXl___LAZkt", ci = "Container-module__sizeFluid___eh2as", ui = "Container-module__padNone___wG-dH", _i = "Container-module__padXs___im5-b", mi = "Container-module__padSm___BpfT7", fi = "Container-module__padMd___dvQHr", gi = "Container-module__padLg___4ntjI", pi = "Container-module__padXl___bDnKP", hi = "Container-module__pad2Xl___8oHv7", _e = {
  container: ai,
  sizeXs: ri,
  sizeSm: si,
  sizeMd: ii,
  sizeLg: li,
  sizeXl: di,
  sizeFluid: ci,
  padNone: ui,
  padXs: _i,
  padSm: mi,
  padMd: fi,
  padLg: gi,
  padXl: pi,
  pad2Xl: hi
}, vi = {
  xs: _e.sizeXs,
  sm: _e.sizeSm,
  md: _e.sizeMd,
  lg: _e.sizeLg,
  xl: _e.sizeXl,
  fluid: _e.sizeFluid
}, yi = {
  none: _e.padNone,
  xs: _e.padXs,
  sm: _e.padSm,
  md: _e.padMd,
  lg: _e.padLg,
  xl: _e.padXl,
  "2xl": _e.pad2Xl
}, bi = T(
  ({ as: e = "div", children: t, size: n = "md", padding: o = "md", className: a, style: r, ...s }, l) => {
    const u = B(_e.container, vi[n], yi[o], a);
    return /* @__PURE__ */ i(e, { ref: l, className: u, style: r, ...s, children: t });
  }
);
bi.displayName = "Container";
const wi = "Button-module__button___2ZuB7", Si = "Button-module__disabled___Tl9fh", Ni = "Button-module__fullWidth___36oJT", xi = "Button-module__sizeXs___LBvuQ", Mi = "Button-module__sizeSm___NLIhO", Ci = "Button-module__sizeMd___bMgkR", ki = "Button-module__sizeLg___O7Azz", Di = "Button-module__sizeXl___fFT9A", Li = "Button-module__radiusNone___fcEMC", Bi = "Button-module__radiusXs___NTxKK", zi = "Button-module__radiusSm___lNDhn", Xi = "Button-module__radiusMd___6C6rw", Pi = "Button-module__radiusLg___4IxaO", $i = "Button-module__radiusXl___XbnGs", Ii = "Button-module__radiusFull___kCaT7", Wi = "Button-module__filledPrimary___XJXQk", Ti = "Button-module__lightPrimary___4Mi5F", Oi = "Button-module__outlinePrimary___lejP5", Fi = "Button-module__subtlePrimary___f6LNa", Ei = "Button-module__linkPrimary___o7Usu", Gi = "Button-module__filledSecondary___rYUad", Ri = "Button-module__lightSecondary___hjcMf", Ai = "Button-module__outlineSecondary___pbujM", Yi = "Button-module__subtleSecondary___GFJsZ", Hi = "Button-module__linkSecondary___eg2-t", ji = "Button-module__filledNeutral___OH5Bx", qi = "Button-module__lightNeutral___S4Wpw", Vi = "Button-module__outlineNeutral___oRuD7", Zi = "Button-module__subtleNeutral___AgBqL", Qi = "Button-module__linkNeutral___iGkqf", Ki = "Button-module__filledSuccess___foCvn", Ui = "Button-module__lightSuccess___u5cVK", Ji = "Button-module__outlineSuccess___hKvXw", el = "Button-module__subtleSuccess___6pkyI", tl = "Button-module__linkSuccess___0M8B0", nl = "Button-module__filledWarning___jBNAC", ol = "Button-module__lightWarning___xZp-e", al = "Button-module__outlineWarning___HkhNV", rl = "Button-module__subtleWarning___OItOS", sl = "Button-module__linkWarning___z5Le9", il = "Button-module__filledDanger___sI7C9", ll = "Button-module__lightDanger___nNXim", dl = "Button-module__outlineDanger___5p-9P", cl = "Button-module__subtleDanger___hdUwc", ul = "Button-module__linkDanger___oNzNe", _l = "Button-module__filledInfo___vL0I4", ml = "Button-module__lightInfo___l-Czf", fl = "Button-module__outlineInfo___FYKas", gl = "Button-module__subtleInfo___2Xhyd", pl = "Button-module__linkInfo___TohTi", hl = "Button-module__leftSection___FeZ93", vl = "Button-module__rightSection___c4FZa", yl = "Button-module__label___UJ3Zt", bl = "Button-module__spinner___ZExvW", N = {
  button: wi,
  disabled: Si,
  fullWidth: Ni,
  sizeXs: xi,
  sizeSm: Mi,
  sizeMd: Ci,
  sizeLg: ki,
  sizeXl: Di,
  radiusNone: Li,
  radiusXs: Bi,
  radiusSm: zi,
  radiusMd: Xi,
  radiusLg: Pi,
  radiusXl: $i,
  radiusFull: Ii,
  filledPrimary: Wi,
  lightPrimary: Ti,
  outlinePrimary: Oi,
  subtlePrimary: Fi,
  linkPrimary: Ei,
  filledSecondary: Gi,
  lightSecondary: Ri,
  outlineSecondary: Ai,
  subtleSecondary: Yi,
  linkSecondary: Hi,
  filledNeutral: ji,
  lightNeutral: qi,
  outlineNeutral: Vi,
  subtleNeutral: Zi,
  linkNeutral: Qi,
  filledSuccess: Ki,
  lightSuccess: Ui,
  outlineSuccess: Ji,
  subtleSuccess: el,
  linkSuccess: tl,
  filledWarning: nl,
  lightWarning: ol,
  outlineWarning: al,
  subtleWarning: rl,
  linkWarning: sl,
  filledDanger: il,
  lightDanger: ll,
  outlineDanger: dl,
  subtleDanger: cl,
  linkDanger: ul,
  filledInfo: _l,
  lightInfo: ml,
  outlineInfo: fl,
  subtleInfo: gl,
  linkInfo: pl,
  leftSection: hl,
  rightSection: vl,
  label: yl,
  spinner: bl
}, wl = {
  xs: N.sizeXs,
  sm: N.sizeSm,
  md: N.sizeMd,
  lg: N.sizeLg,
  xl: N.sizeXl
}, Sl = {
  none: N.radiusNone,
  xs: N.radiusXs,
  sm: N.radiusSm,
  md: N.radiusMd,
  lg: N.radiusLg,
  xl: N.radiusXl,
  full: N.radiusFull
}, Nl = {
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
}, xl = T(
  ({ children: e, variant: t = "filled", color: n = "primary", size: o = "md", radius: a = "md", loading: r = !1, disabled: s = !1, fullWidth: l = !1, leftSection: u, rightSection: c, type: d = "button", className: _, style: m, ...f }, p) => {
    const y = t + "-" + n, h = Nl[y] || N.filledPrimary, w = B(N.button, wl[o], Sl[a], h, { [N.fullWidth]: l, [N.disabled]: s || r }, _);
    return /* @__PURE__ */ M("button", { ref: p, type: d, disabled: s || r, "aria-busy": r, className: w, style: m, ...f, children: [
      r ? /* @__PURE__ */ i("span", { className: N.spinner, "aria-hidden": "true", children: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
        /* @__PURE__ */ i("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
      ] }) }) : u && /* @__PURE__ */ i("span", { className: N.leftSection, children: u }),
      /* @__PURE__ */ i("span", { className: N.label, children: e }),
      !r && c && /* @__PURE__ */ i("span", { className: N.rightSection, children: c })
    ] });
  }
);
xl.displayName = "Button";
const Ml = "IconButton-module__iconButton___JAF-a", Cl = "IconButton-module__disabled___HV-cc", kl = "IconButton-module__sizeXs___RZG2T", Dl = "IconButton-module__sizeSm___XPiUo", Ll = "IconButton-module__sizeMd___6uTyJ", Bl = "IconButton-module__sizeLg___AQhjY", zl = "IconButton-module__sizeXl___94RFK", Xl = "IconButton-module__radiusNone___eFnz1", Pl = "IconButton-module__radiusXs___BLufM", $l = "IconButton-module__radiusSm___o6ws0", Il = "IconButton-module__radiusMd___Kbm2a", Wl = "IconButton-module__radiusLg___g0tOq", Tl = "IconButton-module__radiusXl___g4YBl", Ol = "IconButton-module__radiusFull___XNprk", Fl = "IconButton-module__subtleNeutral___h8UeA", El = "IconButton-module__filledNeutral___kvDx8", Gl = "IconButton-module__lightNeutral___sZVRZ", Rl = "IconButton-module__outlineNeutral___Jhyjb", Al = "IconButton-module__subtlePrimary___KHLpz", Yl = "IconButton-module__filledPrimary___2ol5Q", Hl = "IconButton-module__lightPrimary___qlCMV", jl = "IconButton-module__outlinePrimary___AqPi8", ql = "IconButton-module__subtleSecondary___ZUGuJ", Vl = "IconButton-module__filledSecondary___cxoYN", Zl = "IconButton-module__lightSecondary___hWfU-", Ql = "IconButton-module__outlineSecondary___UY-go", Kl = "IconButton-module__subtleSuccess___dlxqM", Ul = "IconButton-module__filledSuccess___ULKTd", Jl = "IconButton-module__lightSuccess___dXTbK", ed = "IconButton-module__outlineSuccess___DlqE8", td = "IconButton-module__subtleWarning___dmAXE", nd = "IconButton-module__filledWarning___av8qf", od = "IconButton-module__lightWarning___3XhVl", ad = "IconButton-module__outlineWarning___xePwu", rd = "IconButton-module__subtleDanger___YT9LD", sd = "IconButton-module__filledDanger___ApWqu", id = "IconButton-module__lightDanger___ccZbA", ld = "IconButton-module__outlineDanger___cUc1g", dd = "IconButton-module__subtleInfo___-ndj-", cd = "IconButton-module__filledInfo___6OY2a", ud = "IconButton-module__lightInfo___vQTgg", _d = "IconButton-module__outlineInfo___RQlUd", md = "IconButton-module__spinner___yePta", L = {
  iconButton: Ml,
  disabled: Cl,
  sizeXs: kl,
  sizeSm: Dl,
  sizeMd: Ll,
  sizeLg: Bl,
  sizeXl: zl,
  radiusNone: Xl,
  radiusXs: Pl,
  radiusSm: $l,
  radiusMd: Il,
  radiusLg: Wl,
  radiusXl: Tl,
  radiusFull: Ol,
  subtleNeutral: Fl,
  filledNeutral: El,
  lightNeutral: Gl,
  outlineNeutral: Rl,
  subtlePrimary: Al,
  filledPrimary: Yl,
  lightPrimary: Hl,
  outlinePrimary: jl,
  subtleSecondary: ql,
  filledSecondary: Vl,
  lightSecondary: Zl,
  outlineSecondary: Ql,
  subtleSuccess: Kl,
  filledSuccess: Ul,
  lightSuccess: Jl,
  outlineSuccess: ed,
  subtleWarning: td,
  filledWarning: nd,
  lightWarning: od,
  outlineWarning: ad,
  subtleDanger: rd,
  filledDanger: sd,
  lightDanger: id,
  outlineDanger: ld,
  subtleInfo: dd,
  filledInfo: cd,
  lightInfo: ud,
  outlineInfo: _d,
  spinner: md
}, fd = {
  xs: L.sizeXs,
  sm: L.sizeSm,
  md: L.sizeMd,
  lg: L.sizeLg,
  xl: L.sizeXl
}, gd = {
  none: L.radiusNone,
  xs: L.radiusXs,
  sm: L.radiusSm,
  md: L.radiusMd,
  lg: L.radiusLg,
  xl: L.radiusXl,
  full: L.radiusFull
}, pd = {
  "subtle-neutral": L.subtleNeutral,
  "filled-neutral": L.filledNeutral,
  "light-neutral": L.lightNeutral,
  "outline-neutral": L.outlineNeutral,
  "subtle-primary": L.subtlePrimary,
  "filled-primary": L.filledPrimary,
  "light-primary": L.lightPrimary,
  "outline-primary": L.outlinePrimary,
  "subtle-secondary": L.subtleSecondary,
  "filled-secondary": L.filledSecondary,
  "light-secondary": L.lightSecondary,
  "outline-secondary": L.outlineSecondary,
  "subtle-success": L.subtleSuccess,
  "filled-success": L.filledSuccess,
  "light-success": L.lightSuccess,
  "outline-success": L.outlineSuccess,
  "subtle-warning": L.subtleWarning,
  "filled-warning": L.filledWarning,
  "light-warning": L.lightWarning,
  "outline-warning": L.outlineWarning,
  "subtle-danger": L.subtleDanger,
  "filled-danger": L.filledDanger,
  "light-danger": L.lightDanger,
  "outline-danger": L.outlineDanger,
  "subtle-info": L.subtleInfo,
  "filled-info": L.filledInfo,
  "light-info": L.lightInfo,
  "outline-info": L.outlineInfo
}, $e = T(
  ({ icon: e, "aria-label": t, variant: n = "subtle", color: o = "neutral", size: a = "md", radius: r = "md", loading: s = !1, disabled: l = !1, type: u = "button", className: c, style: d, ..._ }, m) => {
    const f = n + "-" + o, p = B(L.iconButton, fd[a], gd[r], pd[f] || L.subtleNeutral, { [L.disabled]: l || s }, c);
    return /* @__PURE__ */ i("button", { ref: m, type: u, "aria-label": t, disabled: l || s, "aria-busy": s, className: p, style: d, ..._, children: s ? /* @__PURE__ */ i("span", { className: L.spinner, "aria-hidden": "true", children: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
      /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
      /* @__PURE__ */ i("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
    ] }) }) : e });
  }
);
$e.displayName = "IconButton";
const hd = "InputWrapper-module__wrapper___WHwoB", vd = "InputWrapper-module__labelRow___jBw-D", yd = "InputWrapper-module__label___5Iora", bd = "InputWrapper-module__requiredAsterisk___BA3Kq", wd = "InputWrapper-module__description___d5VI9", Sd = "InputWrapper-module__inputArea___HrYX6", Nd = "InputWrapper-module__errorText___e2CDJ", xd = "InputWrapper-module__sizeXs___6ESPO", Md = "InputWrapper-module__sizeSm___PnTVy", Cd = "InputWrapper-module__sizeMd___v-j6k", kd = "InputWrapper-module__sizeLg___XP-zf", Dd = "InputWrapper-module__sizeXl___s0rc1", Ld = "InputWrapper-module__disabled___vXh63", he = {
  wrapper: hd,
  labelRow: vd,
  label: yd,
  requiredAsterisk: bd,
  description: wd,
  inputArea: Sd,
  errorText: Nd,
  sizeXs: xd,
  sizeSm: Md,
  sizeMd: Cd,
  sizeLg: kd,
  sizeXl: Dd,
  disabled: Ld
}, Bd = {
  xs: he.sizeXs,
  sm: he.sizeSm,
  md: he.sizeMd,
  lg: he.sizeLg,
  xl: he.sizeXl
}, Ye = T(
  ({ children: e, label: t, description: n, error: o, required: a = !1, size: r = "md", disabled: s = !1, className: l, style: u, id: c }, d) => {
    const _ = !!o, m = typeof o == "string" ? o : void 0, f = B(he.wrapper, Bd[r], { [he.disabled]: s }, l);
    return /* @__PURE__ */ M("div", { ref: d, className: f, style: u, id: c, children: [
      t && /* @__PURE__ */ i("div", { className: he.labelRow, children: /* @__PURE__ */ M("label", { className: he.label, children: [
        t,
        a && /* @__PURE__ */ i("span", { className: he.requiredAsterisk, children: "*" })
      ] }) }),
      n && /* @__PURE__ */ i("div", { className: he.description, children: n }),
      /* @__PURE__ */ i("div", { className: he.inputArea, children: e }),
      _ && m && /* @__PURE__ */ i("div", { className: he.errorText, children: m })
    ] });
  }
);
Ye.displayName = "InputWrapper";
const zd = "TextField-module__inputContainer___azWVB", Xd = "TextField-module__input___RL-My", Pd = "TextField-module__error___HzypY", $d = "TextField-module__sizeXs___lVOmZ", Id = "TextField-module__sizeSm___EA3-E", Wd = "TextField-module__sizeMd___58-pc", Td = "TextField-module__sizeLg___L96aw", Od = "TextField-module__sizeXl___VmFIo", Fd = "TextField-module__leftSection___iUQ9e", Ed = "TextField-module__rightSection___i4oSs", Gd = "TextField-module__withLeftSection___xSZTD", Rd = "TextField-module__withRightSection___b88-7", J = {
  inputContainer: zd,
  input: Xd,
  error: Pd,
  sizeXs: $d,
  sizeSm: Id,
  sizeMd: Wd,
  sizeLg: Td,
  sizeXl: Od,
  leftSection: Fd,
  rightSection: Ed,
  withLeftSection: Gd,
  withRightSection: Rd
}, Ad = {
  xs: J.sizeXs,
  sm: J.sizeSm,
  md: J.sizeMd,
  lg: J.sizeLg,
  xl: J.sizeXl
}, Yd = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: l, placeholder: u, type: c = "text", leftSection: d, rightSection: _, className: m, style: f, id: p, onChange: y, ...h }, w) => {
    const x = !!n, R = B(J.input, Ad[a], { [J.error]: x, [J.withLeftSection]: !!d, [J.withRightSection]: !!_ });
    return /* @__PURE__ */ i(Ye, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: m, style: f, children: /* @__PURE__ */ M("div", { className: J.inputContainer, children: [
      d && /* @__PURE__ */ i("span", { className: J.leftSection, children: d }),
      /* @__PURE__ */ i("input", { ref: w, id: p, type: c, value: s, defaultValue: l, placeholder: u, disabled: r, required: o, "aria-invalid": x, className: R, onChange: y, ...h }),
      _ && /* @__PURE__ */ i("span", { className: J.rightSection, children: _ })
    ] }) });
  }
);
Yd.displayName = "TextField";
const Hd = "NumberInput-module__controls___8UfQ2", jd = "NumberInput-module__controlButton___epVGN", qd = "NumberInput-module__controlIcon___0Jsyn", qe = {
  controls: Hd,
  controlButton: jd,
  controlIcon: qd
}, Vd = {
  xs: J.sizeXs,
  sm: J.sizeSm,
  md: J.sizeMd,
  lg: J.sizeLg,
  xl: J.sizeXl
}, Zd = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: l = "", min: u = -1 / 0, max: c = 1 / 0, step: d = 1, precision: _ = 0, hideControls: m = !1, onChange: f, className: p, style: y, placeholder: h, id: w, ...x }, R) => {
    const O = s !== void 0, [E, P] = q(() => {
      const Y = O ? s : l;
      return typeof Y == "number" ? _ > 0 ? Y.toFixed(_) : String(Y) : "";
    });
    Q(() => {
      O && P(typeof s == "number" ? _ > 0 ? s.toFixed(_) : String(s) : "");
    }, [s, O, _]);
    const ee = (Y) => {
      const H = Math.max(u, Math.min(c, Y));
      return _ > 0 ? H.toFixed(_) : String(H);
    }, ce = (Y) => {
      if (Y === "" || Y === "-") return;
      const H = parseFloat(Y);
      return isNaN(H) ? void 0 : Math.max(u, Math.min(c, H));
    }, we = (Y) => {
      const H = Y.target.value;
      P(H), f?.(ce(H));
    }, ae = (Y) => {
      const H = ce(E);
      P(H !== void 0 ? ee(H) : ""), x.onBlur?.(Y);
    }, ne = (Y) => {
      if (r) return;
      const H = ce(E) ?? (Y === 1 ? u !== -1 / 0 ? u : 0 : c !== 1 / 0 ? c : 0), v = ee(H + Y * d);
      P(v), f?.(parseFloat(v));
    }, ye = !!n, be = !m && !r, ge = B(J.input, Vd[a], { [J.error]: ye, [J.withRightSection]: be });
    return /* @__PURE__ */ i(Ye, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: p, style: y, children: /* @__PURE__ */ M("div", { className: J.inputContainer, children: [
      /* @__PURE__ */ i("input", { ref: R, id: w, type: "text", inputMode: "decimal", value: E, placeholder: h, disabled: r, required: o, "aria-invalid": ye, className: ge, onChange: we, onBlur: ae, ...x }),
      be && /* @__PURE__ */ M("div", { className: qe.controls, children: [
        /* @__PURE__ */ i("button", { type: "button", tabIndex: -1, "aria-label": "Increment value", className: qe.controlButton, onClick: () => ne(1), children: /* @__PURE__ */ i("svg", { className: qe.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "18 15 12 9 6 15" }) }) }),
        /* @__PURE__ */ i("button", { type: "button", tabIndex: -1, "aria-label": "Decrement value", className: qe.controlButton, onClick: () => ne(-1), children: /* @__PURE__ */ i("svg", { className: qe.controlIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "6 9 12 15 18 9" }) }) })
      ] })
    ] }) });
  }
);
Zd.displayName = "NumberInput";
const Qd = "Select-module__selectContainer___uzCk5", Kd = "Select-module__trigger___ECKfC", Ud = "Select-module__placeholder___yUgBU", Jd = "Select-module__valueText___7y3On", ec = "Select-module__error___sw9MU", tc = "Select-module__sizeXs___NqcyQ", nc = "Select-module__sizeSm___2SRQF", oc = "Select-module__sizeMd___BDWO8", ac = "Select-module__sizeLg___xz6D8", rc = "Select-module__sizeXl___GVxKe", sc = "Select-module__actions___t3UnQ", ic = "Select-module__clearButton___uhTpE", lc = "Select-module__chevron___PLUsh", dc = "Select-module__chevronOpen___aOks0", cc = "Select-module__dropdown___glgl4", uc = "Select-module__searchInput___mqRgu", _c = "Select-module__optionsList___mKHJh", mc = "Select-module__option___Hvo8n", fc = "Select-module__optionDisabled___FhDw-", gc = "Select-module__optionSelected___egAHP", pc = "Select-module__emptyState___weIb5", K = {
  selectContainer: Qd,
  trigger: Kd,
  placeholder: Ud,
  valueText: Jd,
  error: ec,
  sizeXs: tc,
  sizeSm: nc,
  sizeMd: oc,
  sizeLg: ac,
  sizeXl: rc,
  actions: sc,
  clearButton: ic,
  chevron: lc,
  chevronOpen: dc,
  dropdown: cc,
  searchInput: uc,
  optionsList: _c,
  option: mc,
  optionDisabled: fc,
  optionSelected: gc,
  emptyState: pc
}, hc = {
  xs: K.sizeXs,
  sm: K.sizeSm,
  md: K.sizeMd,
  lg: K.sizeLg,
  xl: K.sizeXl
}, vc = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, data: s, value: l, defaultValue: u, placeholder: c = "Select option...", searchable: d = !1, clearable: _ = !1, onChange: m, className: f, style: p, id: y, ...h }, w) => {
    const x = l !== void 0, [R, O] = q((x ? l : u) ?? null), [E, P] = q(!1), [ee, ce] = q(""), [we, ae] = q({ top: 0, left: 0, width: 0 }), ne = Ne(null), ye = Ne(null), be = Ne(null), ge = Ae(), Y = y || ge;
    Q(() => {
      x && O(l ?? null);
    }, [l, x]);
    const H = () => {
      if (!ne.current) return;
      const S = ne.current.getBoundingClientRect(), re = 240, He = window.innerHeight - S.bottom;
      let je = S.bottom + 4;
      He < re && S.top > re && (je = Math.max(8, S.top - re - 4)), ae({
        top: je,
        left: S.left,
        width: S.width
      });
    };
    Q(() => {
      if (!E) return;
      H();
      const S = () => H(), re = () => H();
      return window.addEventListener("scroll", S, !0), window.addEventListener("resize", re), () => {
        window.removeEventListener("scroll", S, !0), window.removeEventListener("resize", re);
      };
    }, [E]), Q(() => {
      if (!E) return;
      const S = (He) => {
        const je = He.target;
        ne.current && !ne.current.contains(je) && ye.current && !ye.current.contains(je) && P(!1);
      }, re = (He) => {
        He.key === "Escape" && P(!1);
      };
      return document.addEventListener("mousedown", S), document.addEventListener("keydown", re), () => {
        document.removeEventListener("mousedown", S), document.removeEventListener("keydown", re);
      };
    }, [E]), Q(() => {
      E && d && be.current && be.current.focus();
    }, [E, d]);
    const v = Bt.useMemo(() => s.map((S) => typeof S == "string" ? { label: S, value: S } : S), [s]), b = Bt.useMemo(() => {
      if (!d || !ee.trim()) return v;
      const S = ee.toLowerCase();
      return v.filter((re) => re.label.toLowerCase().includes(S));
    }, [v, d, ee]), Se = v.find((S) => S.value === R), Le = (S, re) => {
      re || (x || O(S), m?.(S), P(!1), ce(""));
    }, C = (S) => {
      S.stopPropagation(), x || O(null), m?.(null);
    }, F = (S) => {
      r || (S.key === "Escape" ? P(!1) : (S.key === "Enter" || S.key === " " || S.key === "ArrowDown") && (E || (S.preventDefault(), P(!0))));
    }, ue = !!n, pe = B(K.trigger, hc[a], { [K.error]: ue }), Be = E && typeof document < "u" ? rt(
      /* @__PURE__ */ M(
        "div",
        {
          ref: ye,
          className: K.dropdown,
          role: "listbox",
          style: {
            top: `${we.top}px`,
            left: `${we.left}px`,
            width: `${we.width}px`
          },
          children: [
            d && /* @__PURE__ */ i(
              "input",
              {
                ref: be,
                type: "text",
                placeholder: "Search options...",
                value: ee,
                onChange: (S) => ce(S.target.value),
                className: K.searchInput,
                onClick: (S) => S.stopPropagation()
              }
            ),
            /* @__PURE__ */ i("div", { className: K.optionsList, children: b.length === 0 ? /* @__PURE__ */ i("div", { className: K.emptyState, children: "No options found" }) : b.map((S) => {
              const re = S.value === R;
              return /* @__PURE__ */ M(
                "div",
                {
                  role: "option",
                  "aria-selected": re,
                  "aria-disabled": S.disabled,
                  className: B(K.option, {
                    [K.optionSelected]: re,
                    [K.optionDisabled]: S.disabled
                  }),
                  onClick: () => Le(S.value, S.disabled),
                  children: [
                    /* @__PURE__ */ i("span", { children: S.label }),
                    re && /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "20 6 9 17 4 12" }) })
                  ]
                },
                S.value
              );
            }) })
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ i(Ye, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: f, style: p, children: /* @__PURE__ */ M("div", { className: K.selectContainer, children: [
      /* @__PURE__ */ M(
        "button",
        {
          ref: (S) => {
            ne.current = S, typeof w == "function" ? w(S) : w && (w.current = S);
          },
          id: Y,
          type: "button",
          role: "combobox",
          "aria-expanded": E,
          "aria-haspopup": "listbox",
          "aria-invalid": ue,
          disabled: r,
          className: pe,
          onClick: () => !r && P((S) => !S),
          onKeyDown: F,
          ...h,
          children: [
            /* @__PURE__ */ i("span", { className: Se ? K.valueText : K.placeholder, children: Se ? Se.label : c }),
            /* @__PURE__ */ M("div", { className: K.actions, children: [
              _ && R && !r && /* @__PURE__ */ i("span", { role: "button", tabIndex: 0, "aria-label": "Clear selection", className: K.clearButton, onClick: C, children: /* @__PURE__ */ M("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: B(K.chevron, { [K.chevronOpen]: E }), children: /* @__PURE__ */ i("polyline", { points: "6 9 12 15 18 9" }) })
            ] })
          ]
        }
      ),
      Be
    ] }) });
  }
);
vc.displayName = "Select";
const yc = "Switch-module__root___Y5Ydi", bc = "Switch-module__container___JzxEt", wc = "Switch-module__containerDisabled___JYuGJ", Sc = "Switch-module__labelLeft___-aOkY", Nc = "Switch-module__input___5BPNu", xc = "Switch-module__track___7ObdZ", Mc = "Switch-module__knob___vKNOc", Cc = "Switch-module__sizeXs___473fx", kc = "Switch-module__sizeSm___MvsLM", Dc = "Switch-module__sizeMd___bXgKq", Lc = "Switch-module__sizeLg___S9a0j", Bc = "Switch-module__sizeXl___H7dXN", zc = "Switch-module__colorPrimary___Bp7Ru", Xc = "Switch-module__colorSecondary___MZAA0", Pc = "Switch-module__colorNeutral___RJv2Q", $c = "Switch-module__colorSuccess___n3Atm", Ic = "Switch-module__colorWarning___OJiZY", Wc = "Switch-module__colorDanger___niua2", Tc = "Switch-module__colorInfo___-IzZH", Oc = "Switch-module__label___LrH7V", Fc = "Switch-module__description___CClza", Ec = "Switch-module__errorText___9s1pb", V = {
  root: yc,
  container: bc,
  containerDisabled: wc,
  labelLeft: Sc,
  input: Nc,
  track: xc,
  knob: Mc,
  sizeXs: Cc,
  sizeSm: kc,
  sizeMd: Dc,
  sizeLg: Lc,
  sizeXl: Bc,
  colorPrimary: zc,
  colorSecondary: Xc,
  colorNeutral: Pc,
  colorSuccess: $c,
  colorWarning: Ic,
  colorDanger: Wc,
  colorInfo: Tc,
  label: Oc,
  description: Fc,
  errorText: Ec
}, Gc = {
  xs: V.sizeXs,
  sm: V.sizeSm,
  md: V.sizeMd,
  lg: V.sizeLg,
  xl: V.sizeXl
}, Rc = {
  primary: V.colorPrimary,
  secondary: V.colorSecondary,
  neutral: V.colorNeutral,
  success: V.colorSuccess,
  warning: V.colorWarning,
  danger: V.colorDanger,
  info: V.colorInfo
}, Ac = T(
  ({ label: e, labelPosition: t = "right", color: n = "primary", size: o = "md", disabled: a = !1, description: r, error: s, checked: l, defaultChecked: u, className: c, style: d, id: _, onChange: m, ...f }, p) => {
    const y = Ae(), h = _ || y, w = !!s, x = typeof s == "string" ? s : void 0;
    return /* @__PURE__ */ M("div", { className: B(V.root, Gc[o], Rc[n], c), style: d, children: [
      /* @__PURE__ */ M("label", { htmlFor: h, className: B(V.container, { [V.containerDisabled]: a, [V.labelLeft]: t === "left" }), children: [
        /* @__PURE__ */ i("input", { ref: p, id: h, type: "checkbox", role: "switch", "aria-checked": l, "aria-invalid": w, disabled: a, checked: l, defaultChecked: u, className: V.input, onChange: m, ...f }),
        /* @__PURE__ */ i("span", { className: V.track, children: /* @__PURE__ */ i("span", { className: V.knob }) }),
        e && /* @__PURE__ */ i("span", { className: V.label, children: e })
      ] }),
      r && /* @__PURE__ */ i("div", { className: V.description, children: r }),
      w && x && /* @__PURE__ */ i("div", { className: V.errorText, children: x })
    ] });
  }
);
Ac.displayName = "Switch";
function X(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function ve(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function le(e, t) {
  const n = X(e);
  return isNaN(t) ? ve(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Me(e, t) {
  const n = X(e);
  if (isNaN(t)) return ve(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = ve(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const r = a.getDate();
  return o >= r ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
const vt = 6048e5, Yc = 864e5;
let Hc = {};
function Ke() {
  return Hc;
}
function De(e, t) {
  const n = Ke(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = X(e), r = a.getDay(), s = (r < o ? 7 : 0) + r - o;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Fe(e) {
  return De(e, { weekStartsOn: 1 });
}
function jt(e) {
  const t = X(e), n = t.getFullYear(), o = ve(e, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Fe(o), r = ve(e, 0);
  r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0);
  const s = Fe(r);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Re(e) {
  const t = X(e);
  return t.setHours(0, 0, 0, 0), t;
}
function nt(e) {
  const t = X(e), n = new Date(
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
function ke(e, t) {
  const n = Re(e), o = Re(t), a = +n - nt(n), r = +o - nt(o);
  return Math.round((a - r) / Yc);
}
function jc(e) {
  const t = jt(e), n = ve(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Fe(n);
}
function pt(e, t) {
  const n = t * 7;
  return le(e, n);
}
function qc(e, t) {
  return Me(e, t * 12);
}
function Vc(e) {
  let t;
  return e.forEach(function(n) {
    const o = X(n);
    (t === void 0 || t < o || isNaN(Number(o))) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Zc(e) {
  let t;
  return e.forEach((n) => {
    const o = X(n);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function me(e, t) {
  const n = Re(e), o = Re(t);
  return +n == +o;
}
function yt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ot(e) {
  if (!yt(e) && typeof e != "number")
    return !1;
  const t = X(e);
  return !isNaN(Number(t));
}
function Qe(e, t) {
  const n = X(e), o = X(t), a = n.getFullYear() - o.getFullYear(), r = n.getMonth() - o.getMonth();
  return a * 12 + r;
}
function Qc(e, t, n) {
  const o = De(e, n), a = De(t, n), r = +o - nt(o), s = +a - nt(a);
  return Math.round((r - s) / vt);
}
function bt(e) {
  const t = X(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function fe(e) {
  const t = X(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function qt(e) {
  const t = X(e), n = ve(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function wt(e, t) {
  const n = Ke(), o = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = X(e), r = a.getDay(), s = (r < o ? -7 : 0) + 6 - (r - o);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function Vt(e) {
  return wt(e, { weekStartsOn: 1 });
}
const Kc = {
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
}, Uc = (e, t, n) => {
  let o;
  const a = Kc[e];
  return typeof a == "string" ? o = a : t === 1 ? o = a.one : o = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
function dt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Jc = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, eu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nu = {
  date: dt({
    formats: Jc,
    defaultWidth: "full"
  }),
  time: dt({
    formats: eu,
    defaultWidth: "full"
  }),
  dateTime: dt({
    formats: tu,
    defaultWidth: "full"
  })
}, ou = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, au = (e, t, n, o) => ou[e];
function Ve(e) {
  return (t, n) => {
    const o = n?.context ? String(n.context) : "standalone";
    let a;
    if (o === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n?.width ? String(n.width) : s;
      a = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[s];
    }
    const r = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[r];
  };
}
const ru = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, su = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iu = {
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
}, lu = {
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
}, du = {
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
}, cu = {
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
}, uu = (e, t) => {
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
}, _u = {
  ordinalNumber: uu,
  era: Ve({
    values: ru,
    defaultWidth: "wide"
  }),
  quarter: Ve({
    values: su,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ve({
    values: iu,
    defaultWidth: "wide"
  }),
  day: Ve({
    values: lu,
    defaultWidth: "wide"
  }),
  dayPeriod: Ve({
    values: du,
    defaultWidth: "wide",
    formattingValues: cu,
    defaultFormattingWidth: "wide"
  })
};
function Ze(e) {
  return (t, n = {}) => {
    const o = n.width, a = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], r = t.match(a);
    if (!r)
      return null;
    const s = r[0], l = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(l) ? fu(l, (_) => _.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      mu(l, (_) => _.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(u) : u, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(s.length);
    return { value: c, rest: d };
  };
}
function mu(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function fu(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function gu(e) {
  return (t, n = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const a = o[0], r = t.match(e.parsePattern);
    if (!r) return null;
    let s = e.valueCallback ? e.valueCallback(r[0]) : r[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(a.length);
    return { value: s, rest: l };
  };
}
const pu = /^(\d+)(th|st|nd|rd)?/i, hu = /\d+/i, vu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yu = {
  any: [/^b/i, /^(a|c)/i]
}, bu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, wu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Su = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Nu = {
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
}, xu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Mu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Cu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ku = {
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
}, Du = {
  ordinalNumber: gu({
    matchPattern: pu,
    parsePattern: hu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ze({
    matchPatterns: vu,
    defaultMatchWidth: "wide",
    parsePatterns: yu,
    defaultParseWidth: "any"
  }),
  quarter: Ze({
    matchPatterns: bu,
    defaultMatchWidth: "wide",
    parsePatterns: wu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ze({
    matchPatterns: Su,
    defaultMatchWidth: "wide",
    parsePatterns: Nu,
    defaultParseWidth: "any"
  }),
  day: Ze({
    matchPatterns: xu,
    defaultMatchWidth: "wide",
    parsePatterns: Mu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ze({
    matchPatterns: Cu,
    defaultMatchWidth: "any",
    parsePatterns: ku,
    defaultParseWidth: "any"
  })
}, Zt = {
  code: "en-US",
  formatDistance: Uc,
  formatLong: nu,
  formatRelative: au,
  localize: _u,
  match: Du,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Lu(e) {
  const t = X(e);
  return ke(t, qt(t)) + 1;
}
function Qt(e) {
  const t = X(e), n = +Fe(t) - +jc(t);
  return Math.round(n / vt) + 1;
}
function Kt(e, t) {
  const n = X(e), o = n.getFullYear(), a = Ke(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, s = ve(e, 0);
  s.setFullYear(o + 1, 0, r), s.setHours(0, 0, 0, 0);
  const l = De(s, t), u = ve(e, 0);
  u.setFullYear(o, 0, r), u.setHours(0, 0, 0, 0);
  const c = De(u, t);
  return n.getTime() >= l.getTime() ? o + 1 : n.getTime() >= c.getTime() ? o : o - 1;
}
function Bu(e, t) {
  const n = Ke(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = Kt(e, t), r = ve(e, 0);
  return r.setFullYear(a, 0, o), r.setHours(0, 0, 0, 0), De(r, t);
}
function Ut(e, t) {
  const n = X(e), o = +De(n, t) - +Bu(n, t);
  return Math.round(o / vt) + 1;
}
function I(e, t) {
  const n = e < 0 ? "-" : "", o = Math.abs(e).toString().padStart(t, "0");
  return n + o;
}
const Pe = {
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
}, Ge = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zt = {
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
    return Pe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, o) {
    const a = Kt(e, o), r = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = r % 100;
      return I(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(r, { unit: "year" }) : I(r, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = jt(e);
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
        return Pe.M(e, t);
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
    const a = Ut(e, o);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : I(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const o = Qt(e);
    return t === "Io" ? n.ordinalNumber(o, { unit: "week" }) : I(o, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pe.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const o = Lu(e);
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
    switch (o === 12 ? a = Ge.noon : o === 0 ? a = Ge.midnight : a = o / 12 >= 1 ? "pm" : "am", t) {
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
    switch (o >= 17 ? a = Ge.evening : o >= 12 ? a = Ge.afternoon : o >= 4 ? a = Ge.morning : a = Ge.night, t) {
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
    return Pe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Pe.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pe.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Pe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const o = e.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return Pt(o);
      case "XXXX":
      case "XX":
        return Te(o);
      case "XXXXX":
      case "XXX":
      default:
        return Te(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Pt(o);
      case "xxxx":
      case "xx":
        return Te(o);
      case "xxxxx":
      case "xxx":
      default:
        return Te(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Xt(o, ":");
      case "OOOO":
      default:
        return "GMT" + Te(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Xt(o, ":");
      case "zzzz":
      default:
        return "GMT" + Te(o, ":");
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
function Xt(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), a = Math.trunc(o / 60), r = o % 60;
  return r === 0 ? n + String(a) : n + String(a) + t + I(r, 2);
}
function Pt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + I(Math.abs(e) / 60, 2) : Te(e, t);
}
function Te(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), a = I(Math.trunc(o / 60), 2), r = I(o % 60, 2);
  return n + a + t + r;
}
const $t = (e, t) => {
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
}, Jt = (e, t) => {
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
    return $t(e, t);
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
  return r.replace("{{date}}", $t(o, t)).replace("{{time}}", Jt(a, t));
}, Xu = {
  p: Jt,
  P: zu
}, Pu = /^D+$/, $u = /^Y+$/, Iu = ["D", "DD", "YY", "YYYY"];
function Wu(e) {
  return Pu.test(e);
}
function Tu(e) {
  return $u.test(e);
}
function Ou(e, t, n) {
  const o = Fu(e, t, n);
  if (console.warn(o), Iu.includes(e)) throw new RangeError(o);
}
function Fu(e, t, n) {
  const o = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Eu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ru = /^'([^]*?)'?$/, Au = /''/g, Yu = /[a-zA-Z]/;
function xe(e, t, n) {
  const o = Ke(), a = n?.locale ?? o.locale ?? Zt, r = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, l = X(e);
  if (!ot(l))
    throw new RangeError("Invalid time value");
  let u = t.match(Gu).map((d) => {
    const _ = d[0];
    if (_ === "p" || _ === "P") {
      const m = Xu[_];
      return m(d, a.formatLong);
    }
    return d;
  }).join("").match(Eu).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const _ = d[0];
    if (_ === "'")
      return { isToken: !1, value: Hu(d) };
    if (zt[_])
      return { isToken: !0, value: d };
    if (_.match(Yu))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + _ + "`"
      );
    return { isToken: !1, value: d };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(l, u));
  const c = {
    firstWeekContainsDate: r,
    weekStartsOn: s,
    locale: a
  };
  return u.map((d) => {
    if (!d.isToken) return d.value;
    const _ = d.value;
    (!n?.useAdditionalWeekYearTokens && Tu(_) || !n?.useAdditionalDayOfYearTokens && Wu(_)) && Ou(_, t, String(e));
    const m = zt[_[0]];
    return m(l, _, a.localize, c);
  }).join("");
}
function Hu(e) {
  const t = e.match(Ru);
  return t ? t[1].replace(Au, "'") : e;
}
function ju(e) {
  const t = X(e), n = t.getFullYear(), o = t.getMonth(), a = ve(e, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function qu(e) {
  return Math.trunc(+X(e) / 1e3);
}
function Vu(e) {
  const t = X(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Zu(e, t) {
  return Qc(
    Vu(e),
    fe(e),
    t
  ) + 1;
}
function ht(e, t) {
  const n = X(e), o = X(t);
  return n.getTime() > o.getTime();
}
function en(e, t) {
  const n = X(e), o = X(t);
  return +n < +o;
}
function St(e, t) {
  const n = X(e), o = X(t);
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function Qu(e, t) {
  const n = X(e), o = X(t);
  return n.getFullYear() === o.getFullYear();
}
function ct(e, t) {
  return le(e, -t);
}
function ut(e, t) {
  const n = X(e), o = n.getFullYear(), a = n.getDate(), r = ve(e, 0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  const s = ju(r);
  return n.setMonth(t, Math.min(a, s)), n;
}
function It(e, t) {
  const n = X(e);
  return isNaN(+n) ? ve(e, NaN) : (n.setFullYear(t), n);
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
function Ku(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
}
function tn(e, t, n) {
  for (var o = 0, a = t.length, r; o < a; o++)
    (r || !(o in t)) && (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
  return e.concat(r || Array.prototype.slice.call(t));
}
function Ue(e) {
  return e.mode === "multiple";
}
function Je(e) {
  return e.mode === "range";
}
function it(e) {
  return e.mode === "single";
}
var Uu = {
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
function Ju(e, t) {
  return xe(e, "LLLL y", t);
}
function e_(e, t) {
  return xe(e, "d", t);
}
function t_(e, t) {
  return xe(e, "LLLL", t);
}
function n_(e) {
  return "".concat(e);
}
function o_(e, t) {
  return xe(e, "cccccc", t);
}
function a_(e, t) {
  return xe(e, "yyyy", t);
}
var r_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Ju,
  formatDay: e_,
  formatMonthCaption: t_,
  formatWeekNumber: n_,
  formatWeekdayName: o_,
  formatYearCaption: a_
}), s_ = function(e, t, n) {
  return xe(e, "do MMMM (EEEE)", n);
}, i_ = function() {
  return "Month: ";
}, l_ = function() {
  return "Go to next month";
}, d_ = function() {
  return "Go to previous month";
}, c_ = function(e, t) {
  return xe(e, "cccc", t);
}, u_ = function(e) {
  return "Week n. ".concat(e);
}, __ = function() {
  return "Year: ";
}, m_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: s_,
  labelMonthDropdown: i_,
  labelNext: l_,
  labelPrevious: d_,
  labelWeekNumber: u_,
  labelWeekday: c_,
  labelYearDropdown: __
});
function f_() {
  var e = "buttons", t = Uu, n = Zt, o = {}, a = {}, r = 1, s = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: r_,
    labels: m_,
    locale: n,
    modifiersClassNames: o,
    modifiers: a,
    numberOfMonths: r,
    styles: s,
    today: l,
    mode: "default"
  };
}
function g_(e) {
  var t = e.fromYear, n = e.toYear, o = e.fromMonth, a = e.toMonth, r = e.fromDate, s = e.toDate;
  return o ? r = fe(o) : t && (r = new Date(t, 0, 1)), a ? s = bt(a) : n && (s = new Date(n, 11, 31)), {
    fromDate: r ? Re(r) : void 0,
    toDate: s ? Re(s) : void 0
  };
}
var nn = Ie(void 0);
function p_(e) {
  var t, n = e.initialProps, o = f_(), a = g_(n), r = a.fromDate, s = a.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : o.captionLayout;
  l !== "buttons" && (!r || !s) && (l = "buttons");
  var u;
  (it(n) || Ue(n) || Je(n)) && (u = n.onSelect);
  var c = D(D(D({}, o), n), { captionLayout: l, classNames: D(D({}, o.classNames), n.classNames), components: D({}, n.components), formatters: D(D({}, o.formatters), n.formatters), fromDate: r, labels: D(D({}, o.labels), n.labels), mode: n.mode || o.mode, modifiers: D(D({}, o.modifiers), n.modifiers), modifiersClassNames: D(D({}, o.modifiersClassNames), n.modifiersClassNames), onSelect: u, styles: D(D({}, o.styles), n.styles), toDate: s });
  return i(nn.Provider, { value: c, children: e.children });
}
function G() {
  var e = We(nn);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function on(e) {
  var t = G(), n = t.locale, o = t.classNames, a = t.styles, r = t.formatters.formatCaption;
  return i("div", { className: o.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: r(e.displayMonth, { locale: n }) });
}
function h_(e) {
  return i("svg", D({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: i("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function an(e) {
  var t, n, o = e.onChange, a = e.value, r = e.children, s = e.caption, l = e.className, u = e.style, c = G(), d = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : h_;
  return M("div", { className: l, style: u, children: [i("span", { className: c.classNames.vhidden, children: e["aria-label"] }), i("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: a, onChange: o, children: r }), M("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [s, i(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function v_(e) {
  var t, n = G(), o = n.fromDate, a = n.toDate, r = n.styles, s = n.locale, l = n.formatters.formatMonthCaption, u = n.classNames, c = n.components, d = n.labels.labelMonthDropdown;
  if (!o)
    return i(Xe, {});
  if (!a)
    return i(Xe, {});
  var _ = [];
  if (Qu(o, a))
    for (var m = fe(o), f = o.getMonth(); f <= a.getMonth(); f++)
      _.push(ut(m, f));
  else
    for (var m = fe(/* @__PURE__ */ new Date()), f = 0; f <= 11; f++)
      _.push(ut(m, f));
  var p = function(h) {
    var w = Number(h.target.value), x = ut(fe(e.displayMonth), w);
    e.onChange(x);
  }, y = (t = c?.Dropdown) !== null && t !== void 0 ? t : an;
  return i(y, { name: "months", "aria-label": d(), className: u.dropdown_month, style: r.dropdown_month, onChange: p, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: s }), children: _.map(function(h) {
    return i("option", { value: h.getMonth(), children: l(h, { locale: s }) }, h.getMonth());
  }) });
}
function y_(e) {
  var t, n = e.displayMonth, o = G(), a = o.fromDate, r = o.toDate, s = o.locale, l = o.styles, u = o.classNames, c = o.components, d = o.formatters.formatYearCaption, _ = o.labels.labelYearDropdown, m = [];
  if (!a)
    return i(Xe, {});
  if (!r)
    return i(Xe, {});
  for (var f = a.getFullYear(), p = r.getFullYear(), y = f; y <= p; y++)
    m.push(It(qt(/* @__PURE__ */ new Date()), y));
  var h = function(x) {
    var R = It(fe(n), Number(x.target.value));
    e.onChange(R);
  }, w = (t = c?.Dropdown) !== null && t !== void 0 ? t : an;
  return i(w, { name: "years", "aria-label": _(), className: u.dropdown_year, style: l.dropdown_year, onChange: h, value: n.getFullYear(), caption: d(n, { locale: s }), children: m.map(function(x) {
    return i("option", { value: x.getFullYear(), children: d(x, { locale: s }) }, x.getFullYear());
  }) });
}
function b_(e, t) {
  var n = q(e), o = n[0], a = n[1], r = t === void 0 ? o : t;
  return [r, a];
}
function w_(e) {
  var t = e.month, n = e.defaultMonth, o = e.today, a = t || n || o || /* @__PURE__ */ new Date(), r = e.toDate, s = e.fromDate, l = e.numberOfMonths, u = l === void 0 ? 1 : l;
  if (r && Qe(r, a) < 0) {
    var c = -1 * (u - 1);
    a = Me(r, c);
  }
  return s && Qe(a, s) < 0 && (a = s), fe(a);
}
function S_() {
  var e = G(), t = w_(e), n = b_(t, e.month), o = n[0], a = n[1], r = function(s) {
    var l;
    if (!e.disableNavigation) {
      var u = fe(s);
      a(u), (l = e.onMonthChange) === null || l === void 0 || l.call(e, u);
    }
  };
  return [o, r];
}
function N_(e, t) {
  for (var n = t.reverseMonths, o = t.numberOfMonths, a = fe(e), r = fe(Me(a, o)), s = Qe(r, a), l = [], u = 0; u < s; u++) {
    var c = Me(a, u);
    l.push(c);
  }
  return n && (l = l.reverse()), l;
}
function x_(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, o = t.pagedNavigation, a = t.numberOfMonths, r = a === void 0 ? 1 : a, s = o ? r : 1, l = fe(e);
    if (!n)
      return Me(l, s);
    var u = Qe(n, e);
    if (!(u < r))
      return Me(l, s);
  }
}
function M_(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, o = t.pagedNavigation, a = t.numberOfMonths, r = a === void 0 ? 1 : a, s = o ? r : 1, l = fe(e);
    if (!n)
      return Me(l, -s);
    var u = Qe(l, n);
    if (!(u <= 0))
      return Me(l, -s);
  }
}
var rn = Ie(void 0);
function C_(e) {
  var t = G(), n = S_(), o = n[0], a = n[1], r = N_(o, t), s = x_(o, t), l = M_(o, t), u = function(_) {
    return r.some(function(m) {
      return St(_, m);
    });
  }, c = function(_, m) {
    u(_) || (m && en(_, m) ? a(Me(_, 1 + t.numberOfMonths * -1)) : a(_));
  }, d = {
    currentMonth: o,
    displayMonths: r,
    goToMonth: a,
    goToDate: c,
    previousMonth: l,
    nextMonth: s,
    isDateDisplayed: u
  };
  return i(rn.Provider, { value: d, children: e.children });
}
function et() {
  var e = We(rn);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Wt(e) {
  var t, n = G(), o = n.classNames, a = n.styles, r = n.components, s = et().goToMonth, l = function(d) {
    s(Me(d, e.displayIndex ? -e.displayIndex : 0));
  }, u = (t = r?.CaptionLabel) !== null && t !== void 0 ? t : on, c = i(u, { id: e.id, displayMonth: e.displayMonth });
  return M("div", { className: o.caption_dropdowns, style: a.caption_dropdowns, children: [i("div", { className: o.vhidden, children: c }), i(v_, { onChange: l, displayMonth: e.displayMonth }), i(y_, { onChange: l, displayMonth: e.displayMonth })] });
}
function k_(e) {
  return i("svg", D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: i("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function D_(e) {
  return i("svg", D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: i("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var at = T(function(e, t) {
  var n = G(), o = n.classNames, a = n.styles, r = [o.button_reset, o.button];
  e.className && r.push(e.className);
  var s = r.join(" "), l = D(D({}, a.button_reset), a.button);
  return e.style && Object.assign(l, e.style), i("button", D({}, e, { ref: t, type: "button", className: s, style: l }));
});
function L_(e) {
  var t, n, o = G(), a = o.dir, r = o.locale, s = o.classNames, l = o.styles, u = o.labels, c = u.labelPrevious, d = u.labelNext, _ = o.components;
  if (!e.nextMonth && !e.previousMonth)
    return i(Xe, {});
  var m = c(e.previousMonth, { locale: r }), f = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), p = d(e.nextMonth, { locale: r }), y = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), h = (t = _?.IconRight) !== null && t !== void 0 ? t : D_, w = (n = _?.IconLeft) !== null && n !== void 0 ? n : k_;
  return M("div", { className: s.nav, style: l.nav, children: [!e.hidePrevious && i(at, { name: "previous-month", "aria-label": m, className: f, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? i(h, { className: s.nav_icon, style: l.nav_icon }) : i(w, { className: s.nav_icon, style: l.nav_icon }) }), !e.hideNext && i(at, { name: "next-month", "aria-label": p, className: y, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? i(w, { className: s.nav_icon, style: l.nav_icon }) : i(h, { className: s.nav_icon, style: l.nav_icon }) })] });
}
function Tt(e) {
  var t = G().numberOfMonths, n = et(), o = n.previousMonth, a = n.nextMonth, r = n.goToMonth, s = n.displayMonths, l = s.findIndex(function(p) {
    return St(e.displayMonth, p);
  }), u = l === 0, c = l === s.length - 1, d = t > 1 && (u || !c), _ = t > 1 && (c || !u), m = function() {
    o && r(o);
  }, f = function() {
    a && r(a);
  };
  return i(L_, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: _, nextMonth: a, previousMonth: o, onPreviousClick: m, onNextClick: f });
}
function B_(e) {
  var t, n = G(), o = n.classNames, a = n.disableNavigation, r = n.styles, s = n.captionLayout, l = n.components, u = (t = l?.CaptionLabel) !== null && t !== void 0 ? t : on, c;
  return a ? c = i(u, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? c = i(Wt, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? c = M(Xe, { children: [i(Wt, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), i(Tt, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = M(Xe, { children: [i(u, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), i(Tt, { displayMonth: e.displayMonth, id: e.id })] }), i("div", { className: o.caption, style: r.caption, children: c });
}
function z_(e) {
  var t = G(), n = t.footer, o = t.styles, a = t.classNames.tfoot;
  return n ? i("tfoot", { className: a, style: o.tfoot, children: i("tr", { children: i("td", { colSpan: 8, children: n }) }) }) : i(Xe, {});
}
function X_(e, t, n) {
  for (var o = n ? Fe(/* @__PURE__ */ new Date()) : De(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], r = 0; r < 7; r++) {
    var s = le(o, r);
    a.push(s);
  }
  return a;
}
function P_() {
  var e = G(), t = e.classNames, n = e.styles, o = e.showWeekNumber, a = e.locale, r = e.weekStartsOn, s = e.ISOWeek, l = e.formatters.formatWeekdayName, u = e.labels.labelWeekday, c = X_(a, r, s);
  return M("tr", { style: n.head_row, className: t.head_row, children: [o && i("td", { style: n.head_cell, className: t.head_cell }), c.map(function(d, _) {
    return i("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": u(d, { locale: a }), children: l(d, { locale: a }) }, _);
  })] });
}
function $_() {
  var e, t = G(), n = t.classNames, o = t.styles, a = t.components, r = (e = a?.HeadRow) !== null && e !== void 0 ? e : P_;
  return i("thead", { style: o.head, className: n.head, children: i(r, {}) });
}
function I_(e) {
  var t = G(), n = t.locale, o = t.formatters.formatDay;
  return i(Xe, { children: o(e.date, { locale: n }) });
}
var Nt = Ie(void 0);
function W_(e) {
  if (!Ue(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return i(Nt.Provider, { value: t, children: e.children });
  }
  return i(T_, { initialProps: e.initialProps, children: e.children });
}
function T_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, a = t.min, r = t.max, s = function(c, d, _) {
    var m, f;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, c, d, _);
    var p = !!(d.selected && a && o?.length === a);
    if (!p) {
      var y = !!(!d.selected && r && o?.length === r);
      if (!y) {
        var h = o ? tn([], o) : [];
        if (d.selected) {
          var w = h.findIndex(function(x) {
            return me(c, x);
          });
          h.splice(w, 1);
        } else
          h.push(c);
        (f = t.onSelect) === null || f === void 0 || f.call(t, h, c, d, _);
      }
    }
  }, l = {
    disabled: []
  };
  o && l.disabled.push(function(c) {
    var d = r && o.length > r - 1, _ = o.some(function(m) {
      return me(m, c);
    });
    return !!(d && !_);
  });
  var u = {
    selected: o,
    onDayClick: s,
    modifiers: l
  };
  return i(Nt.Provider, { value: u, children: n });
}
function xt() {
  var e = We(Nt);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function O_(e, t) {
  var n = t || {}, o = n.from, a = n.to;
  return o && a ? me(a, e) && me(o, e) ? void 0 : me(a, e) ? { from: a, to: void 0 } : me(o, e) ? void 0 : ht(o, e) ? { from: e, to: a } : { from: o, to: e } : a ? ht(e, a) ? { from: a, to: e } : { from: e, to: a } : o ? en(e, o) ? { from: e, to: o } : { from: o, to: e } : { from: e, to: void 0 };
}
var Mt = Ie(void 0);
function F_(e) {
  if (!Je(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return i(Mt.Provider, { value: t, children: e.children });
  }
  return i(E_, { initialProps: e.initialProps, children: e.children });
}
function E_(e) {
  var t = e.initialProps, n = e.children, o = t.selected, a = o || {}, r = a.from, s = a.to, l = t.min, u = t.max, c = function(f, p, y) {
    var h, w;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, f, p, y);
    var x = O_(f, o);
    (w = t.onSelect) === null || w === void 0 || w.call(t, x, f, p, y);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (r ? (d.range_start = [r], s ? (d.range_end = [s], me(r, s) || (d.range_middle = [
    {
      after: r,
      before: s
    }
  ])) : d.range_end = [r]) : s && (d.range_start = [s], d.range_end = [s]), l && (r && !s && d.disabled.push({
    after: ct(r, l - 1),
    before: le(r, l - 1)
  }), r && s && d.disabled.push({
    after: r,
    before: le(r, l - 1)
  }), !r && s && d.disabled.push({
    after: ct(s, l - 1),
    before: le(s, l - 1)
  })), u) {
    if (r && !s && (d.disabled.push({
      before: le(r, -u + 1)
    }), d.disabled.push({
      after: le(r, u - 1)
    })), r && s) {
      var _ = ke(s, r) + 1, m = u - _;
      d.disabled.push({
        before: ct(r, m)
      }), d.disabled.push({
        after: le(s, m)
      });
    }
    !r && s && (d.disabled.push({
      before: le(s, -u + 1)
    }), d.disabled.push({
      after: le(s, u - 1)
    }));
  }
  return i(Mt.Provider, { value: { selected: o, onDayClick: c, modifiers: d }, children: n });
}
function Ct() {
  var e = We(Mt);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function tt(e) {
  return Array.isArray(e) ? tn([], e) : e !== void 0 ? [e] : [];
}
function G_(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var o = n[0], a = n[1];
    t[o] = tt(a);
  }), t;
}
var Ce;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Ce || (Ce = {}));
var R_ = Ce.Selected, ze = Ce.Disabled, A_ = Ce.Hidden, Y_ = Ce.Today, _t = Ce.RangeEnd, mt = Ce.RangeMiddle, ft = Ce.RangeStart, H_ = Ce.Outside;
function j_(e, t, n) {
  var o, a = (o = {}, o[R_] = tt(e.selected), o[ze] = tt(e.disabled), o[A_] = tt(e.hidden), o[Y_] = [e.today], o[_t] = [], o[mt] = [], o[ft] = [], o[H_] = [], o);
  return e.fromDate && a[ze].push({ before: e.fromDate }), e.toDate && a[ze].push({ after: e.toDate }), Ue(e) ? a[ze] = a[ze].concat(t.modifiers[ze]) : Je(e) && (a[ze] = a[ze].concat(n.modifiers[ze]), a[ft] = n.modifiers[ft], a[mt] = n.modifiers[mt], a[_t] = n.modifiers[_t]), a;
}
var sn = Ie(void 0);
function q_(e) {
  var t = G(), n = xt(), o = Ct(), a = j_(t, n, o), r = G_(t.modifiers), s = D(D({}, a), r);
  return i(sn.Provider, { value: s, children: e.children });
}
function ln() {
  var e = We(sn);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function V_(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Z_(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Q_(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function K_(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function U_(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function J_(e, t) {
  var n, o = t.from, a = t.to;
  if (o && a) {
    var r = ke(a, o) < 0;
    r && (n = [a, o], o = n[0], a = n[1]);
    var s = ke(e, o) >= 0 && ke(a, e) >= 0;
    return s;
  }
  return a ? me(a, e) : o ? me(o, e) : !1;
}
function em(e) {
  return yt(e);
}
function tm(e) {
  return Array.isArray(e) && e.every(yt);
}
function nm(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (em(n))
      return me(e, n);
    if (tm(n))
      return n.includes(e);
    if (Z_(n))
      return J_(e, n);
    if (U_(n))
      return n.dayOfWeek.includes(e.getDay());
    if (V_(n)) {
      var o = ke(n.before, e), a = ke(n.after, e), r = o > 0, s = a < 0, l = ht(n.before, n.after);
      return l ? s && r : r || s;
    }
    return Q_(n) ? ke(e, n.after) > 0 : K_(n) ? ke(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function kt(e, t, n) {
  var o = Object.keys(t).reduce(function(r, s) {
    var l = t[s];
    return nm(e, l) && r.push(s), r;
  }, []), a = {};
  return o.forEach(function(r) {
    return a[r] = !0;
  }), n && !St(e, n) && (a.outside = !0), a;
}
function om(e, t) {
  for (var n = fe(e[0]), o = bt(e[e.length - 1]), a, r, s = n; s <= o; ) {
    var l = kt(s, t), u = !l.disabled && !l.hidden;
    if (!u) {
      s = le(s, 1);
      continue;
    }
    if (l.selected)
      return s;
    l.today && !r && (r = s), a || (a = s), s = le(s, 1);
  }
  return r || a;
}
var am = 365;
function dn(e, t) {
  var n = t.moveBy, o = t.direction, a = t.context, r = t.modifiers, s = t.retry, l = s === void 0 ? { count: 0, lastFocused: e } : s, u = a.weekStartsOn, c = a.fromDate, d = a.toDate, _ = a.locale, m = {
    day: le,
    week: pt,
    month: Me,
    year: qc,
    startOfWeek: function(h) {
      return a.ISOWeek ? Fe(h) : De(h, { locale: _, weekStartsOn: u });
    },
    endOfWeek: function(h) {
      return a.ISOWeek ? Vt(h) : wt(h, { locale: _, weekStartsOn: u });
    }
  }, f = m[n](e, o === "after" ? 1 : -1);
  o === "before" && c ? f = Vc([c, f]) : o === "after" && d && (f = Zc([d, f]));
  var p = !0;
  if (r) {
    var y = kt(f, r);
    p = !y.disabled && !y.hidden;
  }
  return p ? f : l.count > am ? l.lastFocused : dn(f, {
    moveBy: n,
    direction: o,
    context: a,
    modifiers: r,
    retry: D(D({}, l), { count: l.count + 1 })
  });
}
var cn = Ie(void 0);
function rm(e) {
  var t = et(), n = ln(), o = q(), a = o[0], r = o[1], s = q(), l = s[0], u = s[1], c = om(t.displayMonths, n), d = a ?? (l && t.isDateDisplayed(l)) ? l : c, _ = function() {
    u(a), r(void 0);
  }, m = function(h) {
    r(h);
  }, f = G(), p = function(h, w) {
    if (a) {
      var x = dn(a, {
        moveBy: h,
        direction: w,
        context: f,
        modifiers: n
      });
      me(a, x) || (t.goToDate(x, a), m(x));
    }
  }, y = {
    focusedDay: a,
    focusTarget: d,
    blur: _,
    focus: m,
    focusDayAfter: function() {
      return p("day", "after");
    },
    focusDayBefore: function() {
      return p("day", "before");
    },
    focusWeekAfter: function() {
      return p("week", "after");
    },
    focusWeekBefore: function() {
      return p("week", "before");
    },
    focusMonthBefore: function() {
      return p("month", "before");
    },
    focusMonthAfter: function() {
      return p("month", "after");
    },
    focusYearBefore: function() {
      return p("year", "before");
    },
    focusYearAfter: function() {
      return p("year", "after");
    },
    focusStartOfWeek: function() {
      return p("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return p("endOfWeek", "after");
    }
  };
  return i(cn.Provider, { value: y, children: e.children });
}
function Dt() {
  var e = We(cn);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function sm(e, t) {
  var n = ln(), o = kt(e, n, t);
  return o;
}
var Lt = Ie(void 0);
function im(e) {
  if (!it(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return i(Lt.Provider, { value: t, children: e.children });
  }
  return i(lm, { initialProps: e.initialProps, children: e.children });
}
function lm(e) {
  var t = e.initialProps, n = e.children, o = function(r, s, l) {
    var u, c, d;
    if ((u = t.onDayClick) === null || u === void 0 || u.call(t, r, s, l), s.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, r, s, l);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, r, r, s, l);
  }, a = {
    selected: t.selected,
    onDayClick: o
  };
  return i(Lt.Provider, { value: a, children: n });
}
function un() {
  var e = We(Lt);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function dm(e, t) {
  var n = G(), o = un(), a = xt(), r = Ct(), s = Dt(), l = s.focusDayAfter, u = s.focusDayBefore, c = s.focusWeekAfter, d = s.focusWeekBefore, _ = s.blur, m = s.focus, f = s.focusMonthBefore, p = s.focusMonthAfter, y = s.focusYearBefore, h = s.focusYearAfter, w = s.focusStartOfWeek, x = s.focusEndOfWeek, R = function(v) {
    var b, Se, Le, C;
    it(n) ? (b = o.onDayClick) === null || b === void 0 || b.call(o, e, t, v) : Ue(n) ? (Se = a.onDayClick) === null || Se === void 0 || Se.call(a, e, t, v) : Je(n) ? (Le = r.onDayClick) === null || Le === void 0 || Le.call(r, e, t, v) : (C = n.onDayClick) === null || C === void 0 || C.call(n, e, t, v);
  }, O = function(v) {
    var b;
    m(e), (b = n.onDayFocus) === null || b === void 0 || b.call(n, e, t, v);
  }, E = function(v) {
    var b;
    _(), (b = n.onDayBlur) === null || b === void 0 || b.call(n, e, t, v);
  }, P = function(v) {
    var b;
    (b = n.onDayMouseEnter) === null || b === void 0 || b.call(n, e, t, v);
  }, ee = function(v) {
    var b;
    (b = n.onDayMouseLeave) === null || b === void 0 || b.call(n, e, t, v);
  }, ce = function(v) {
    var b;
    (b = n.onDayPointerEnter) === null || b === void 0 || b.call(n, e, t, v);
  }, we = function(v) {
    var b;
    (b = n.onDayPointerLeave) === null || b === void 0 || b.call(n, e, t, v);
  }, ae = function(v) {
    var b;
    (b = n.onDayTouchCancel) === null || b === void 0 || b.call(n, e, t, v);
  }, ne = function(v) {
    var b;
    (b = n.onDayTouchEnd) === null || b === void 0 || b.call(n, e, t, v);
  }, ye = function(v) {
    var b;
    (b = n.onDayTouchMove) === null || b === void 0 || b.call(n, e, t, v);
  }, be = function(v) {
    var b;
    (b = n.onDayTouchStart) === null || b === void 0 || b.call(n, e, t, v);
  }, ge = function(v) {
    var b;
    (b = n.onDayKeyUp) === null || b === void 0 || b.call(n, e, t, v);
  }, Y = function(v) {
    var b;
    switch (v.key) {
      case "ArrowLeft":
        v.preventDefault(), v.stopPropagation(), n.dir === "rtl" ? l() : u();
        break;
      case "ArrowRight":
        v.preventDefault(), v.stopPropagation(), n.dir === "rtl" ? u() : l();
        break;
      case "ArrowDown":
        v.preventDefault(), v.stopPropagation(), c();
        break;
      case "ArrowUp":
        v.preventDefault(), v.stopPropagation(), d();
        break;
      case "PageUp":
        v.preventDefault(), v.stopPropagation(), v.shiftKey ? y() : f();
        break;
      case "PageDown":
        v.preventDefault(), v.stopPropagation(), v.shiftKey ? h() : p();
        break;
      case "Home":
        v.preventDefault(), v.stopPropagation(), w();
        break;
      case "End":
        v.preventDefault(), v.stopPropagation(), x();
        break;
    }
    (b = n.onDayKeyDown) === null || b === void 0 || b.call(n, e, t, v);
  }, H = {
    onClick: R,
    onFocus: O,
    onBlur: E,
    onKeyDown: Y,
    onKeyUp: ge,
    onMouseEnter: P,
    onMouseLeave: ee,
    onPointerEnter: ce,
    onPointerLeave: we,
    onTouchCancel: ae,
    onTouchEnd: ne,
    onTouchMove: ye,
    onTouchStart: be
  };
  return H;
}
function cm() {
  var e = G(), t = un(), n = xt(), o = Ct(), a = it(e) ? t.selected : Ue(e) ? n.selected : Je(e) ? o.selected : void 0;
  return a;
}
function um(e) {
  return Object.values(Ce).includes(e);
}
function _m(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(o) {
    var a = e.modifiersClassNames[o];
    if (a)
      n.push(a);
    else if (um(o)) {
      var r = e.classNames["day_".concat(o)];
      r && n.push(r);
    }
  }), n;
}
function mm(e, t) {
  var n = D({}, e.styles.day);
  return Object.keys(t).forEach(function(o) {
    var a;
    n = D(D({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[o]);
  }), n;
}
function fm(e, t, n) {
  var o, a, r, s = G(), l = Dt(), u = sm(e, t), c = dm(e, u), d = cm(), _ = !!(s.onDayClick || s.mode !== "default");
  Q(function() {
    var P;
    u.outside || l.focusedDay && _ && me(l.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    l.focusedDay,
    e,
    n,
    _,
    u.outside
  ]);
  var m = _m(s, u).join(" "), f = mm(s, u), p = !!(u.outside && !s.showOutsideDays || u.hidden), y = (r = (a = s.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && r !== void 0 ? r : I_, h = i(y, { date: e, displayMonth: t, activeModifiers: u }), w = {
    style: f,
    className: m,
    children: h,
    role: "gridcell"
  }, x = l.focusTarget && me(l.focusTarget, e) && !u.outside, R = l.focusedDay && me(l.focusedDay, e), O = D(D(D({}, w), (o = { disabled: u.disabled, role: "gridcell" }, o["aria-selected"] = u.selected, o.tabIndex = R || x ? 0 : -1, o)), c), E = {
    isButton: _,
    isHidden: p,
    activeModifiers: u,
    selectedDays: d,
    buttonProps: O,
    divProps: w
  };
  return E;
}
function gm(e) {
  var t = Ne(null), n = fm(e.date, e.displayMonth, t);
  return n.isHidden ? i("div", { role: "gridcell" }) : n.isButton ? i(at, D({ name: "day", ref: t }, n.buttonProps)) : i("div", D({}, n.divProps));
}
function pm(e) {
  var t = e.number, n = e.dates, o = G(), a = o.onWeekNumberClick, r = o.styles, s = o.classNames, l = o.locale, u = o.labels.labelWeekNumber, c = o.formatters.formatWeekNumber, d = c(Number(t), { locale: l });
  if (!a)
    return i("span", { className: s.weeknumber, style: r.weeknumber, children: d });
  var _ = u(Number(t), { locale: l }), m = function(f) {
    a(t, n, f);
  };
  return i(at, { name: "week-number", "aria-label": _, className: s.weeknumber, style: r.weeknumber, onClick: m, children: d });
}
function hm(e) {
  var t, n, o = G(), a = o.styles, r = o.classNames, s = o.showWeekNumber, l = o.components, u = (t = l?.Day) !== null && t !== void 0 ? t : gm, c = (n = l?.WeekNumber) !== null && n !== void 0 ? n : pm, d;
  return s && (d = i("td", { className: r.cell, style: a.cell, children: i(c, { number: e.weekNumber, dates: e.dates }) })), M("tr", { className: r.row, style: a.row, children: [d, e.dates.map(function(_) {
    return i("td", { className: r.cell, style: a.cell, role: "presentation", children: i(u, { displayMonth: e.displayMonth, date: _ }) }, qu(_));
  })] });
}
function Ot(e, t, n) {
  for (var o = n?.ISOWeek ? Vt(t) : wt(t, n), a = n?.ISOWeek ? Fe(e) : De(e, n), r = ke(o, a), s = [], l = 0; l <= r; l++)
    s.push(le(a, l));
  var u = s.reduce(function(c, d) {
    var _ = n?.ISOWeek ? Qt(d) : Ut(d, n), m = c.find(function(f) {
      return f.weekNumber === _;
    });
    return m ? (m.dates.push(d), c) : (c.push({
      weekNumber: _,
      dates: [d]
    }), c);
  }, []);
  return u;
}
function vm(e, t) {
  var n = Ot(fe(e), bt(e), t);
  if (t?.useFixedWeeks) {
    var o = Zu(e, t);
    if (o < 6) {
      var a = n[n.length - 1], r = a.dates[a.dates.length - 1], s = pt(r, 6 - o), l = Ot(pt(r, 1), s, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function ym(e) {
  var t, n, o, a = G(), r = a.locale, s = a.classNames, l = a.styles, u = a.hideHead, c = a.fixedWeeks, d = a.components, _ = a.weekStartsOn, m = a.firstWeekContainsDate, f = a.ISOWeek, p = vm(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: f,
    locale: r,
    weekStartsOn: _,
    firstWeekContainsDate: m
  }), y = (t = d?.Head) !== null && t !== void 0 ? t : $_, h = (n = d?.Row) !== null && n !== void 0 ? n : hm, w = (o = d?.Footer) !== null && o !== void 0 ? o : z_;
  return M("table", { id: e.id, className: s.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!u && i(y, {}), i("tbody", { className: s.tbody, style: l.tbody, children: p.map(function(x) {
    return i(h, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), i(w, { displayMonth: e.displayMonth })] });
}
function bm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var wm = bm() ? hn : Q, gt = !1, Sm = 0;
function Ft() {
  return "react-day-picker-".concat(++Sm);
}
function Nm(e) {
  var t, n = e ?? (gt ? Ft() : null), o = q(n), a = o[0], r = o[1];
  return wm(function() {
    a === null && r(Ft());
  }, []), Q(function() {
    gt === !1 && (gt = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function xm(e) {
  var t, n, o = G(), a = o.dir, r = o.classNames, s = o.styles, l = o.components, u = et().displayMonths, c = Nm(o.id ? "".concat(o.id, "-").concat(e.displayIndex) : void 0), d = o.id ? "".concat(o.id, "-grid-").concat(e.displayIndex) : void 0, _ = [r.month], m = s.month, f = e.displayIndex === 0, p = e.displayIndex === u.length - 1, y = !f && !p;
  a === "rtl" && (t = [f, p], p = t[0], f = t[1]), f && (_.push(r.caption_start), m = D(D({}, m), s.caption_start)), p && (_.push(r.caption_end), m = D(D({}, m), s.caption_end)), y && (_.push(r.caption_between), m = D(D({}, m), s.caption_between));
  var h = (n = l?.Caption) !== null && n !== void 0 ? n : B_;
  return M("div", { className: _.join(" "), style: m, children: [i(h, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), i(ym, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Mm(e) {
  var t = G(), n = t.classNames, o = t.styles;
  return i("div", { className: n.months, style: o.months, children: e.children });
}
function Cm(e) {
  var t, n, o = e.initialProps, a = G(), r = Dt(), s = et(), l = q(!1), u = l[0], c = l[1];
  Q(function() {
    a.initialFocus && r.focusTarget && (u || (r.focus(r.focusTarget), c(!0)));
  }, [
    a.initialFocus,
    u,
    r.focus,
    r.focusTarget,
    r
  ]);
  var d = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && d.push(a.classNames.multiple_months), a.showWeekNumber && d.push(a.classNames.with_weeknumber);
  var _ = D(D({}, a.styles.root), a.style), m = Object.keys(o).filter(function(p) {
    return p.startsWith("data-");
  }).reduce(function(p, y) {
    var h;
    return D(D({}, p), (h = {}, h[y] = o[y], h));
  }, {}), f = (n = (t = o.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Mm;
  return i("div", D({ className: d.join(" "), style: _, dir: a.dir, id: a.id, nonce: o.nonce, title: o.title, lang: o.lang }, m, { children: i(f, { children: s.displayMonths.map(function(p, y) {
    return i(xm, { displayIndex: y, displayMonth: p }, y);
  }) }) }));
}
function km(e) {
  var t = e.children, n = Ku(e, ["children"]);
  return i(p_, { initialProps: n, children: i(C_, { children: i(im, { initialProps: n, children: i(W_, { initialProps: n, children: i(F_, { initialProps: n, children: i(q_, { children: i(rm, { children: t }) }) }) }) }) }) });
}
function _n(e) {
  return i(km, D({}, e, { children: i(Cm, { initialProps: e }) }));
}
const Dm = "DatePicker-module__container___lGTSn", Lm = "DatePicker-module__inputButton___ihMp8", Bm = "DatePicker-module__placeholder___aDY-6", zm = "DatePicker-module__valueText___y-AZd", Xm = "DatePicker-module__error___g-hwX", Pm = "DatePicker-module__sizeXs___mbkOI", $m = "DatePicker-module__sizeSm___PoPZI", Im = "DatePicker-module__sizeMd___FHT7G", Wm = "DatePicker-module__sizeLg___d3KEF", Tm = "DatePicker-module__sizeXl___NPQSU", Om = "DatePicker-module__actions___l4jpC", Fm = "DatePicker-module__clearButton___xECnw", Em = "DatePicker-module__popover___cOD1p", Gm = "DatePicker-module__calendar___ICXhS", W = {
  container: Dm,
  inputButton: Lm,
  placeholder: Bm,
  valueText: zm,
  error: Xm,
  sizeXs: Pm,
  sizeSm: $m,
  sizeMd: Im,
  sizeLg: Wm,
  sizeXl: Tm,
  actions: Om,
  clearButton: Fm,
  popover: Em,
  calendar: Gm
}, Rm = {
  xs: W.sizeXs,
  sm: W.sizeSm,
  md: W.sizeMd,
  lg: W.sizeLg,
  xl: W.sizeXl
}, Am = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: l, placeholder: u = "Pick a date...", dateFormat: c = "PPP", clearable: d = !1, minDate: _, maxDate: m, onChange: f, className: p, style: y, id: h, ...w }, x) => {
    const R = s !== void 0, [O, E] = q((R ? s : l) ?? null), [P, ee] = q(!1), [ce, we] = q({ top: 0, left: 0 }), ae = Ne(null), ne = Ne(null), ye = Ae(), be = h || ye;
    Q(() => {
      R && E(s ?? null);
    }, [s, R]);
    const ge = () => {
      if (!ae.current) return;
      const C = ae.current.getBoundingClientRect(), F = 350, ue = window.innerHeight - C.bottom;
      let pe = C.bottom + 6;
      ue < F && C.top > F && (pe = Math.max(8, C.top - F - 6));
      let Be = C.left;
      const S = 320;
      Be + S > window.innerWidth - 16 && (Be = Math.max(16, window.innerWidth - S - 16)), we({ top: pe, left: Be });
    };
    Q(() => {
      if (!P) return;
      ge();
      const C = () => ge(), F = () => ge();
      return window.addEventListener("scroll", C, !0), window.addEventListener("resize", F), () => {
        window.removeEventListener("scroll", C, !0), window.removeEventListener("resize", F);
      };
    }, [P]), Q(() => {
      if (!P) return;
      const C = (ue) => {
        const pe = ue.target;
        ae.current && !ae.current.contains(pe) && ne.current && !ne.current.contains(pe) && ee(!1);
      }, F = (ue) => {
        ue.key === "Escape" && ee(!1);
      };
      return document.addEventListener("mousedown", C), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousedown", C), document.removeEventListener("keydown", F);
      };
    }, [P]);
    const Y = (C) => {
      const F = C ?? null;
      R || E(F), f?.(F), ee(!1);
    }, H = (C) => {
      C.stopPropagation(), R || E(null), f?.(null);
    }, v = O && ot(O) ? xe(O, c) : null, b = !!n, Se = B(W.inputButton, Rm[a], { [W.error]: b }), Le = P && typeof document < "u" ? rt(
      /* @__PURE__ */ i(
        "div",
        {
          ref: ne,
          className: W.popover,
          style: {
            top: `${ce.top}px`,
            left: `${ce.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ i(
            _n,
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
    return /* @__PURE__ */ i(Ye, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: p, style: y, children: /* @__PURE__ */ M("div", { className: W.container, children: [
      /* @__PURE__ */ M(
        "button",
        {
          ref: (C) => {
            ae.current = C, typeof x == "function" ? x(C) : x && (x.current = C);
          },
          id: be,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": P,
          "aria-invalid": b,
          disabled: r,
          className: Se,
          onClick: () => !r && ee((C) => !C),
          ...w,
          children: [
            /* @__PURE__ */ i("span", { className: v ? W.valueText : W.placeholder, children: v || u }),
            /* @__PURE__ */ M("div", { className: W.actions, children: [
              d && O && !r && /* @__PURE__ */ i("span", { role: "button", tabIndex: 0, "aria-label": "Clear date", className: W.clearButton, onClick: H, children: /* @__PURE__ */ M("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ M("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
              ] })
            ] })
          ]
        }
      ),
      Le
    ] }) });
  }
);
Am.displayName = "DatePicker";
const Ym = {
  xs: W.sizeXs,
  sm: W.sizeSm,
  md: W.sizeMd,
  lg: W.sizeLg,
  xl: W.sizeXl
}, Hm = T(
  ({ label: e, description: t, error: n, required: o = !1, size: a = "md", disabled: r = !1, value: s, defaultValue: l, placeholder: u = "Pick a date range...", dateFormat: c = "PP", clearable: d = !1, minDate: _, maxDate: m, onChange: f, className: p, style: y, id: h, ...w }, x) => {
    const R = s !== void 0, [O, E] = q((R ? s : l) ?? null), [P, ee] = q(!1), [ce, we] = q({ top: 0, left: 0 }), ae = Ne(null), ne = Ne(null), ye = Ae(), be = h || ye;
    Q(() => {
      R && E(s ?? null);
    }, [s, R]);
    const ge = () => {
      if (!ae.current) return;
      const C = ae.current.getBoundingClientRect(), F = 350, ue = window.innerHeight - C.bottom;
      let pe = C.bottom + 6;
      ue < F && C.top > F && (pe = Math.max(8, C.top - F - 6));
      let Be = C.left;
      const S = 320;
      Be + S > window.innerWidth - 16 && (Be = Math.max(16, window.innerWidth - S - 16)), we({ top: pe, left: Be });
    };
    Q(() => {
      if (!P) return;
      ge();
      const C = () => ge(), F = () => ge();
      return window.addEventListener("scroll", C, !0), window.addEventListener("resize", F), () => {
        window.removeEventListener("scroll", C, !0), window.removeEventListener("resize", F);
      };
    }, [P]), Q(() => {
      if (!P) return;
      const C = (ue) => {
        const pe = ue.target;
        ae.current && !ae.current.contains(pe) && ne.current && !ne.current.contains(pe) && ee(!1);
      }, F = (ue) => {
        ue.key === "Escape" && ee(!1);
      };
      return document.addEventListener("mousedown", C), document.addEventListener("keydown", F), () => {
        document.removeEventListener("mousedown", C), document.removeEventListener("keydown", F);
      };
    }, [P]);
    const Y = (C) => {
      const F = C ?? null;
      R || E(F), f?.(F), C?.from && C?.to && ee(!1);
    }, H = (C) => {
      C.stopPropagation(), R || E(null), f?.(null);
    };
    let v = null;
    O?.from && ot(O.from) && (O.to && ot(O.to) ? v = xe(O.from, c) + " – " + xe(O.to, c) : v = xe(O.from, c) + " – ...");
    const b = !!n, Se = B(W.inputButton, Ym[a], { [W.error]: b }), Le = P && typeof document < "u" ? rt(
      /* @__PURE__ */ i(
        "div",
        {
          ref: ne,
          className: W.popover,
          style: {
            top: `${ce.top}px`,
            left: `${ce.left}px`
          },
          role: "dialog",
          "aria-modal": "false",
          children: /* @__PURE__ */ i(
            _n,
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
    return /* @__PURE__ */ i(Ye, { label: e, description: t, error: n, required: o, size: a, disabled: r, className: p, style: y, children: /* @__PURE__ */ M("div", { className: W.container, children: [
      /* @__PURE__ */ M(
        "button",
        {
          ref: (C) => {
            ae.current = C, typeof x == "function" ? x(C) : x && (x.current = C);
          },
          id: be,
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": P,
          "aria-invalid": b,
          disabled: r,
          className: Se,
          onClick: () => !r && ee((C) => !C),
          ...w,
          children: [
            /* @__PURE__ */ i("span", { className: v ? W.valueText : W.placeholder, children: v || u }),
            /* @__PURE__ */ M("div", { className: W.actions, children: [
              d && O && !r && /* @__PURE__ */ i("span", { role: "button", tabIndex: 0, "aria-label": "Clear date range", className: W.clearButton, onClick: H, children: /* @__PURE__ */ M("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ M("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
              ] })
            ] })
          ]
        }
      ),
      Le
    ] }) });
  }
);
Hm.displayName = "DateRangePicker";
const jm = "Avatar-module__avatar___3xMuZ", qm = "Avatar-module__image___ieqGp", Vm = "Avatar-module__sizeXs___DS3Nc", Zm = "Avatar-module__sizeSm___Rs-fa", Qm = "Avatar-module__sizeMd___aaN4-", Km = "Avatar-module__sizeLg___LuK6q", Um = "Avatar-module__sizeXl___dOgJy", Jm = "Avatar-module__radiusNone___rZMLD", ef = "Avatar-module__radiusXs___NiCr5", tf = "Avatar-module__radiusSm___D7afd", nf = "Avatar-module__radiusMd___7fH4d", of = "Avatar-module__radiusLg___LuhdA", af = "Avatar-module__radiusXl___qPYXZ", rf = "Avatar-module__radiusFull___YY2-y", sf = "Avatar-module__colorNeutral___9d6qx", lf = "Avatar-module__colorPrimary___OBV13", df = "Avatar-module__colorSecondary___7sWFz", cf = "Avatar-module__colorSuccess___Ri-bv", uf = "Avatar-module__colorWarning___dxPCc", _f = "Avatar-module__colorDanger___VO-Tk", mf = "Avatar-module__colorInfo___cCQHc", ff = "Avatar-module__fallbackIcon___-2iNj", Z = {
  avatar: jm,
  image: qm,
  sizeXs: Vm,
  sizeSm: Zm,
  sizeMd: Qm,
  sizeLg: Km,
  sizeXl: Um,
  radiusNone: Jm,
  radiusXs: ef,
  radiusSm: tf,
  radiusMd: nf,
  radiusLg: of,
  radiusXl: af,
  radiusFull: rf,
  colorNeutral: sf,
  colorPrimary: lf,
  colorSecondary: df,
  colorSuccess: cf,
  colorWarning: uf,
  colorDanger: _f,
  colorInfo: mf,
  fallbackIcon: ff
}, gf = {
  xs: Z.sizeXs,
  sm: Z.sizeSm,
  md: Z.sizeMd,
  lg: Z.sizeLg,
  xl: Z.sizeXl
}, pf = {
  none: Z.radiusNone,
  xs: Z.radiusXs,
  sm: Z.radiusSm,
  md: Z.radiusMd,
  lg: Z.radiusLg,
  xl: Z.radiusXl,
  full: Z.radiusFull
}, hf = {
  primary: Z.colorPrimary,
  secondary: Z.colorSecondary,
  neutral: Z.colorNeutral,
  success: Z.colorSuccess,
  warning: Z.colorWarning,
  danger: Z.colorDanger,
  info: Z.colorInfo
}, Et = ["primary", "secondary", "success", "warning", "info"];
function vf(e) {
  const t = e.trim().split(/\s+/);
  return t.length === 0 || !t[0] ? "" : t.length === 1 ? t[0].slice(0, 2).toUpperCase() : (t[0][0] + t[t.length - 1][0]).toUpperCase();
}
function yf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return Et[Math.abs(t) % Et.length];
}
const bf = T(
  ({ src: e, name: t, alt: n = "avatar", size: o = "md", radius: a = "full", color: r = "neutral", className: s, style: l, ...u }, c) => {
    const [d, _] = q(!1);
    Q(() => {
      _(!1);
    }, [e]);
    const m = typeof o == "number", f = t ? vf(t) : "", p = r === "auto" ? t ? yf(t) : "neutral" : r, y = m ? { ...l, width: o + "px", height: o + "px", fontSize: Math.round(o * 0.35) + "px" } : l, h = B(Z.avatar, !m && gf[o], pf[a], hf[p], s);
    return /* @__PURE__ */ i("div", { ref: c, className: h, style: y, "aria-label": t || n, ...u, children: e && !d ? /* @__PURE__ */ i("img", { src: e, alt: n, onError: () => _(!0), className: Z.image }) : f ? /* @__PURE__ */ i("span", { children: f }) : /* @__PURE__ */ i("svg", { className: Z.fallbackIcon, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ i("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) });
  }
);
bf.displayName = "Avatar";
const wf = "Image-module__container___sVJdZ", Sf = "Image-module__image___Zq9Zs", Nf = "Image-module__fitCover___85oUS", xf = "Image-module__fitContain___aoZal", Mf = "Image-module__fitFill___q0kKf", Cf = "Image-module__fitScaleDown___UBGEP", kf = "Image-module__fitNone___E1Sej", Df = "Image-module__radiusNone___JCxuJ", Lf = "Image-module__radiusXs___-q1Ht", Bf = "Image-module__radiusSm___zF1VV", zf = "Image-module__radiusMd___Zcdvc", Xf = "Image-module__radiusLg___2a5Zq", Pf = "Image-module__radiusXl___puXh6", $f = "Image-module__radiusFull___bi-9W", If = "Image-module__fallbackWrapper___TCom9", de = {
  container: wf,
  image: Sf,
  fitCover: Nf,
  fitContain: xf,
  fitFill: Mf,
  fitScaleDown: Cf,
  fitNone: kf,
  radiusNone: Df,
  radiusXs: Lf,
  radiusSm: Bf,
  radiusMd: zf,
  radiusLg: Xf,
  radiusXl: Pf,
  radiusFull: $f,
  fallbackWrapper: If
}, Wf = {
  cover: de.fitCover,
  contain: de.fitContain,
  fill: de.fitFill,
  "scale-down": de.fitScaleDown,
  none: de.fitNone
}, Gt = {
  none: de.radiusNone,
  xs: de.radiusXs,
  sm: de.radiusSm,
  md: de.radiusMd,
  lg: de.radiusLg,
  xl: de.radiusXl,
  full: de.radiusFull
}, Tf = T(
  ({ src: e, alt: t, fit: n = "cover", fallback: o, radius: a = "none", loading: r = "lazy", className: s, style: l, onError: u, width: c, height: d, ..._ }, m) => {
    const [f, p] = q(!1);
    Q(() => {
      p(!1);
    }, [e]);
    const y = (x) => {
      p(!0), u?.(x);
    }, h = {
      ...l,
      width: c !== void 0 ? typeof c == "number" ? c + "px" : c : l?.width,
      height: d !== void 0 ? typeof d == "number" ? d + "px" : d : l?.height
    }, w = B(de.container, Gt[a], s);
    return f && o ? /* @__PURE__ */ i("div", { className: B(w, de.fallbackWrapper), style: h, children: o }) : /* @__PURE__ */ i("div", { className: w, style: h, children: /* @__PURE__ */ i("img", { ref: m, src: e, alt: t, loading: r, width: c, height: d, onError: y, className: B(de.image, Wf[n], Gt[a]), ..._ }) });
  }
);
Tf.displayName = "Image";
const Of = "Badge-module__badge___RsuMz", Ff = "Badge-module__sizeXs___rVinZ", Ef = "Badge-module__sizeSm___V492a", Gf = "Badge-module__sizeMd___oFPD6", Rf = "Badge-module__sizeLg___gM1DQ", Af = "Badge-module__sizeXl___6qEZz", Yf = "Badge-module__radiusNone___42uvb", Hf = "Badge-module__radiusXs___62PO-", jf = "Badge-module__radiusSm___skDDe", qf = "Badge-module__radiusMd___Wf82t", Vf = "Badge-module__radiusLg___QCnke", Zf = "Badge-module__radiusXl___h8cmg", Qf = "Badge-module__radiusFull___d1qq5", Kf = "Badge-module__filledPrimary___xjrJ0", Uf = "Badge-module__lightPrimary___-IkyU", Jf = "Badge-module__outlinePrimary___r5I6Z", eg = "Badge-module__dotPrimary___PyawZ", tg = "Badge-module__filledSecondary___oa0eP", ng = "Badge-module__lightSecondary___AtTko", og = "Badge-module__outlineSecondary___iYBAn", ag = "Badge-module__dotSecondary___226sX", rg = "Badge-module__filledNeutral___VraIb", sg = "Badge-module__lightNeutral___GybdN", ig = "Badge-module__outlineNeutral___40N8w", lg = "Badge-module__dotNeutral___6vDtL", dg = "Badge-module__filledSuccess___vFfoV", cg = "Badge-module__lightSuccess___E2z6c", ug = "Badge-module__outlineSuccess___L0kK8", _g = "Badge-module__dotSuccess___qzpot", mg = "Badge-module__filledWarning___2TKjK", fg = "Badge-module__lightWarning___7m1dm", gg = "Badge-module__outlineWarning___BMHGX", pg = "Badge-module__dotWarning___Dts74", hg = "Badge-module__filledDanger___f2P2x", vg = "Badge-module__lightDanger___BqsUP", yg = "Badge-module__outlineDanger___H2rN2", bg = "Badge-module__dotDanger___LMrFA", wg = "Badge-module__filledInfo___gtVyg", Sg = "Badge-module__lightInfo___7jqyP", Ng = "Badge-module__outlineInfo___2pxvU", xg = "Badge-module__dotInfo___JkUiX", Mg = "Badge-module__dotCircle___jcWQx", Cg = "Badge-module__dotCirclePrimary___R5Kc7", kg = "Badge-module__dotCircleSecondary___qHQ5A", Dg = "Badge-module__dotCircleNeutral___HTUeD", Lg = "Badge-module__dotCircleSuccess___j2gWH", Bg = "Badge-module__dotCircleWarning___4RTfn", zg = "Badge-module__dotCircleDanger___s0i9-", Xg = "Badge-module__dotCircleInfo___9CDd4", Pg = "Badge-module__leftSection___xCKGI", k = {
  badge: Of,
  sizeXs: Ff,
  sizeSm: Ef,
  sizeMd: Gf,
  sizeLg: Rf,
  sizeXl: Af,
  radiusNone: Yf,
  radiusXs: Hf,
  radiusSm: jf,
  radiusMd: qf,
  radiusLg: Vf,
  radiusXl: Zf,
  radiusFull: Qf,
  filledPrimary: Kf,
  lightPrimary: Uf,
  outlinePrimary: Jf,
  dotPrimary: eg,
  filledSecondary: tg,
  lightSecondary: ng,
  outlineSecondary: og,
  dotSecondary: ag,
  filledNeutral: rg,
  lightNeutral: sg,
  outlineNeutral: ig,
  dotNeutral: lg,
  filledSuccess: dg,
  lightSuccess: cg,
  outlineSuccess: ug,
  dotSuccess: _g,
  filledWarning: mg,
  lightWarning: fg,
  outlineWarning: gg,
  dotWarning: pg,
  filledDanger: hg,
  lightDanger: vg,
  outlineDanger: yg,
  dotDanger: bg,
  filledInfo: wg,
  lightInfo: Sg,
  outlineInfo: Ng,
  dotInfo: xg,
  dotCircle: Mg,
  dotCirclePrimary: Cg,
  dotCircleSecondary: kg,
  dotCircleNeutral: Dg,
  dotCircleSuccess: Lg,
  dotCircleWarning: Bg,
  dotCircleDanger: zg,
  dotCircleInfo: Xg,
  leftSection: Pg
}, $g = {
  xs: k.sizeXs,
  sm: k.sizeSm,
  md: k.sizeMd,
  lg: k.sizeLg,
  xl: k.sizeXl
}, Ig = {
  none: k.radiusNone,
  xs: k.radiusXs,
  sm: k.radiusSm,
  md: k.radiusMd,
  lg: k.radiusLg,
  xl: k.radiusXl,
  full: k.radiusFull
}, Wg = {
  "filled-primary": k.filledPrimary,
  "filled-secondary": k.filledSecondary,
  "filled-neutral": k.filledNeutral,
  "filled-success": k.filledSuccess,
  "filled-warning": k.filledWarning,
  "filled-danger": k.filledDanger,
  "filled-info": k.filledInfo,
  "light-primary": k.lightPrimary,
  "light-secondary": k.lightSecondary,
  "light-neutral": k.lightNeutral,
  "light-success": k.lightSuccess,
  "light-warning": k.lightWarning,
  "light-danger": k.lightDanger,
  "light-info": k.lightInfo,
  "outline-primary": k.outlinePrimary,
  "outline-secondary": k.outlineSecondary,
  "outline-neutral": k.outlineNeutral,
  "outline-success": k.outlineSuccess,
  "outline-warning": k.outlineWarning,
  "outline-danger": k.outlineDanger,
  "outline-info": k.outlineInfo,
  "dot-primary": k.dotPrimary,
  "dot-secondary": k.dotSecondary,
  "dot-neutral": k.dotNeutral,
  "dot-success": k.dotSuccess,
  "dot-warning": k.dotWarning,
  "dot-danger": k.dotDanger,
  "dot-info": k.dotInfo
}, Tg = {
  primary: k.dotCirclePrimary,
  secondary: k.dotCircleSecondary,
  neutral: k.dotCircleNeutral,
  success: k.dotCircleSuccess,
  warning: k.dotCircleWarning,
  danger: k.dotCircleDanger,
  info: k.dotCircleInfo
}, Og = T(
  ({ as: e = "span", children: t, variant: n = "light", color: o = "primary", size: a = "md", radius: r = "xl", leftSection: s, className: l, style: u, ...c }, d) => {
    const _ = n + "-" + o, m = B(k.badge, $g[a], Ig[r], Wg[_] || k.lightPrimary, l);
    return /* @__PURE__ */ M(e, { ref: d, className: m, style: u, ...c, children: [
      n === "dot" && /* @__PURE__ */ i("span", { className: B(k.dotCircle, Tg[o]), "aria-hidden": "true" }),
      s && /* @__PURE__ */ i("span", { className: k.leftSection, children: s }),
      /* @__PURE__ */ i("span", { children: t })
    ] });
  }
);
Og.displayName = "Badge";
const Fg = "Card-module__card___Cb1o4", Eg = "Card-module__withBorder___TRBwc", Gg = "Card-module__padNone___-1JEm", Rg = "Card-module__padXs___CNXdp", Ag = "Card-module__padSm___zmolL", Yg = "Card-module__padMd___z7FbZ", Hg = "Card-module__padLg___Q8x36", jg = "Card-module__padXl___3QKD1", qg = "Card-module__pad2Xl___SpD9c", Vg = "Card-module__radiusNone___8Rp4P", Zg = "Card-module__radiusXs___eKgxR", Qg = "Card-module__radiusSm___HJsgU", Kg = "Card-module__radiusMd___PL4yW", Ug = "Card-module__radiusLg___k4pD8", Jg = "Card-module__radiusXl___f79g3", ep = "Card-module__radiusFull___NkcNL", tp = "Card-module__shadowNone___O-kXe", np = "Card-module__shadowXs___8z5i8", op = "Card-module__shadowSm___VqyJF", ap = "Card-module__shadowMd___TGdll", rp = "Card-module__shadowLg___ebNSb", sp = "Card-module__shadowXl___se6-G", ip = "Card-module__header___PTXf2", lp = "Card-module__body___W441Z", dp = "Card-module__footer___Mu-JC", A = {
  card: Fg,
  withBorder: Eg,
  padNone: Gg,
  padXs: Rg,
  padSm: Ag,
  padMd: Yg,
  padLg: Hg,
  padXl: jg,
  pad2Xl: qg,
  radiusNone: Vg,
  radiusXs: Zg,
  radiusSm: Qg,
  radiusMd: Kg,
  radiusLg: Ug,
  radiusXl: Jg,
  radiusFull: ep,
  shadowNone: tp,
  shadowXs: np,
  shadowSm: op,
  shadowMd: ap,
  shadowLg: rp,
  shadowXl: sp,
  header: ip,
  body: lp,
  footer: dp
}, cp = {
  none: A.padNone,
  xs: A.padXs,
  sm: A.padSm,
  md: A.padMd,
  lg: A.padLg,
  xl: A.padXl,
  "2xl": A.pad2Xl
}, up = {
  none: A.radiusNone,
  xs: A.radiusXs,
  sm: A.radiusSm,
  md: A.radiusMd,
  lg: A.radiusLg,
  xl: A.radiusXl,
  full: A.radiusFull
}, _p = {
  none: A.shadowNone,
  xs: A.shadowXs,
  sm: A.shadowSm,
  md: A.shadowMd,
  lg: A.shadowLg,
  xl: A.shadowXl
}, mn = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ i("div", { ref: a, className: B(A.header, t), style: n, ...o, children: e })
);
mn.displayName = "Card.Header";
const fn = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ i("div", { ref: a, className: B(A.body, t), style: n, ...o, children: e })
);
fn.displayName = "Card.Body";
const gn = T(
  ({ children: e, className: t, style: n, ...o }, a) => /* @__PURE__ */ i("div", { ref: a, className: B(A.footer, t), style: n, ...o, children: e })
);
gn.displayName = "Card.Footer";
const lt = T(
  ({ as: e = "div", children: t, padding: n = "md", radius: o = "md", withBorder: a = !0, shadow: r = "sm", className: s, style: l, ...u }, c) => {
    const d = B(A.card, n && cp[n], o && up[o], r && _p[r], { [A.withBorder]: a }, s);
    return /* @__PURE__ */ i(e, { ref: c, className: d, style: l, ...u, children: t });
  }
);
lt.displayName = "Card";
lt.Header = mn;
lt.Body = fn;
lt.Footer = gn;
const mp = "Modal-module__root___ytPLl", fp = "Modal-module__centered___UfBxf", gp = "Modal-module__notCentered___Td7f5", pp = "Modal-module__backdrop___GVUh4", hp = "Modal-module__dialog___ptM-K", vp = "Modal-module__sizeXs___UNRGd", yp = "Modal-module__sizeSm___-iZG0", bp = "Modal-module__sizeMd___WcNhW", wp = "Modal-module__sizeLg___EckT-", Sp = "Modal-module__sizeXl___CaZ8Y", Np = "Modal-module__sizeFull___wBR5P", xp = "Modal-module__header___ILG9i", Mp = "Modal-module__title___A5OeE", Cp = "Modal-module__closeButton___3LpSf", kp = "Modal-module__body___lVhql", ie = {
  root: mp,
  centered: fp,
  notCentered: gp,
  backdrop: pp,
  dialog: hp,
  sizeXs: vp,
  sizeSm: yp,
  sizeMd: bp,
  sizeLg: wp,
  sizeXl: Sp,
  sizeFull: Np,
  header: xp,
  title: Mp,
  closeButton: Cp,
  body: kp
}, Dp = {
  xs: ie.sizeXs,
  sm: ie.sizeSm,
  md: ie.sizeMd,
  lg: ie.sizeLg,
  xl: ie.sizeXl,
  full: ie.sizeFull
}, Lp = ({
  opened: e,
  onClose: t,
  title: n,
  size: o = "md",
  centered: a = !0,
  closeOnClickOutside: r = !0,
  closeOnEscape: s = !0,
  withCloseButton: l = !0,
  children: u,
  className: c,
  style: d,
  ..._
}) => {
  const m = Ne(null), f = Ae();
  if (Q(() => {
    if (!e || !s) return;
    const h = (w) => {
      w.key === "Escape" && t();
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [e, s, t]), Q(() => {
    if (!e) return;
    const h = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = h;
    };
  }, [e]), !e || typeof document > "u") return null;
  const p = (h) => {
    r && m.current && !m.current.contains(h.target) && t();
  }, y = /* @__PURE__ */ M("div", { className: B(ie.root, a ? ie.centered : ie.notCentered), onClick: p, role: "presentation", children: [
    /* @__PURE__ */ i("div", { className: ie.backdrop, "aria-hidden": "true" }),
    /* @__PURE__ */ M("div", { ref: m, role: "dialog", "aria-modal": "true", "aria-labelledby": n ? f : void 0, className: B(ie.dialog, Dp[o], c), style: d, onClick: (h) => h.stopPropagation(), ..._, children: [
      (n || l) && /* @__PURE__ */ M("div", { className: ie.header, children: [
        n && /* @__PURE__ */ i("h2", { id: f, className: ie.title, children: n }),
        l && /* @__PURE__ */ i("button", { type: "button", "aria-label": "Close modal", className: ie.closeButton, onClick: t, children: /* @__PURE__ */ M("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ i("div", { className: ie.body, children: u })
    ] })
  ] });
  return rt(y, document.body);
};
Lp.displayName = "Modal";
const Bp = "Tooltip-module__wrapper___D1A0A", zp = "Tooltip-module__tooltip___UA7H9", Xp = "Tooltip-module__posTop___0jVkP", Pp = "Tooltip-module__posBottom___g-tHi", $p = "Tooltip-module__posLeft___Mb6m-", Ip = "Tooltip-module__posRight___TPf0A", Wp = "Tooltip-module__arrow___4zROk", Oe = {
  wrapper: Bp,
  tooltip: zp,
  posTop: Xp,
  posBottom: Pp,
  posLeft: $p,
  posRight: Ip,
  arrow: Wp
}, Tp = {
  top: Oe.posTop,
  bottom: Oe.posBottom,
  left: Oe.posLeft,
  right: Oe.posRight
}, Op = ({
  label: e,
  children: t,
  position: n = "top",
  openDelay: o = 0,
  closeDelay: a = 0,
  withArrow: r = !0,
  className: s,
  style: l
}) => {
  const [u, c] = q(!1), d = Ne(null), _ = Ne(null), m = Ae(), f = () => {
    _.current && (window.clearTimeout(_.current), _.current = null), o > 0 ? d.current = window.setTimeout(() => c(!0), o) : c(!0);
  }, p = () => {
    d.current && (window.clearTimeout(d.current), d.current = null), a > 0 ? _.current = window.setTimeout(() => c(!1), a) : c(!1);
  };
  if (!vn(t)) return t;
  const y = t, h = yn(y, {
    onMouseEnter: (w) => {
      y.props?.onMouseEnter?.(w), f();
    },
    onMouseLeave: (w) => {
      y.props?.onMouseLeave?.(w), p();
    },
    onFocus: (w) => {
      y.props?.onFocus?.(w), f();
    },
    onBlur: (w) => {
      y.props?.onBlur?.(w), p();
    },
    "aria-describedby": u ? m : void 0
  });
  return /* @__PURE__ */ M("span", { className: Oe.wrapper, children: [
    h,
    u && /* @__PURE__ */ M("span", { id: m, role: "tooltip", className: B(Oe.tooltip, Tp[n], s), style: l, children: [
      e,
      r && /* @__PURE__ */ i("span", { className: Oe.arrow, "aria-hidden": "true" })
    ] })
  ] });
};
Op.displayName = "Tooltip";
const Fp = "Loader-module__loader___vqQOD", Ep = "Loader-module__sizeXs___yeKOs", Gp = "Loader-module__sizeSm___BMXP4", Rp = "Loader-module__sizeMd___lPS-M", Ap = "Loader-module__sizeLg___Ldupy", Yp = "Loader-module__sizeXl___pLWUN", Hp = "Loader-module__colorPrimary___H19ax", jp = "Loader-module__colorSecondary___wMVOI", qp = "Loader-module__colorNeutral___sjCyG", Vp = "Loader-module__colorSuccess___umOmx", Zp = "Loader-module__colorWarning___fQNrG", Qp = "Loader-module__colorDanger___2HVuq", Kp = "Loader-module__colorInfo___2D-2p", Up = "Loader-module__spinnerSvg___dlEGW", Jp = "Loader-module__spinnerCircle___cCMLO", eh = "Loader-module__dotsContainer___pq8gM", th = "Loader-module__dot___Bi3gT", nh = "Loader-module__barsContainer___IFC8E", oh = "Loader-module__bar___fm1H5", j = {
  loader: Fp,
  sizeXs: Ep,
  sizeSm: Gp,
  sizeMd: Rp,
  sizeLg: Ap,
  sizeXl: Yp,
  colorPrimary: Hp,
  colorSecondary: jp,
  colorNeutral: qp,
  colorSuccess: Vp,
  colorWarning: Zp,
  colorDanger: Qp,
  colorInfo: Kp,
  spinnerSvg: Up,
  spinnerCircle: Jp,
  dotsContainer: eh,
  dot: th,
  barsContainer: nh,
  bar: oh
}, ah = {
  xs: j.sizeXs,
  sm: j.sizeSm,
  md: j.sizeMd,
  lg: j.sizeLg,
  xl: j.sizeXl
}, rh = {
  primary: j.colorPrimary,
  secondary: j.colorSecondary,
  neutral: j.colorNeutral,
  success: j.colorSuccess,
  warning: j.colorWarning,
  danger: j.colorDanger,
  info: j.colorInfo
}, sh = T(
  ({ variant: e = "spinner", color: t = "primary", size: n = "md", className: o, style: a, ...r }, s) => {
    const l = typeof n == "number", u = l ? { ...a, width: n + "px", height: n + "px" } : a || {}, c = B(j.loader, !l && ah[n], rh[t], o);
    return /* @__PURE__ */ M("span", { ref: s, role: "status", "aria-live": "polite", className: c, style: u, ...r, children: [
      e === "spinner" && /* @__PURE__ */ i("svg", { className: j.spinnerSvg, viewBox: "0 0 50 50", children: /* @__PURE__ */ i("circle", { className: j.spinnerCircle, cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "5" }) }),
      e === "dots" && /* @__PURE__ */ M("span", { className: j.dotsContainer, children: [
        /* @__PURE__ */ i("span", { className: j.dot }),
        /* @__PURE__ */ i("span", { className: j.dot }),
        /* @__PURE__ */ i("span", { className: j.dot })
      ] }),
      e === "bars" && /* @__PURE__ */ M("span", { className: j.barsContainer, children: [
        /* @__PURE__ */ i("span", { className: j.bar }),
        /* @__PURE__ */ i("span", { className: j.bar }),
        /* @__PURE__ */ i("span", { className: j.bar })
      ] })
    ] });
  }
);
sh.displayName = "Loader";
const ih = "MapControls-module__mapButton___SfEJr", lh = "MapControls-module__zoomGroup___KWsNM", dh = "MapControls-module__zoomBtnTop___tVB2h", ch = "MapControls-module__zoomBtnBottom___LN7LU", uh = "MapControls-module__compassNeedle___uegen", _h = "MapControls-module__overlay___p7uh6", mh = "MapControls-module__topLeft___pMt6c", fh = "MapControls-module__topRight___5JQw-", gh = "MapControls-module__bottomLeft___ZCKNX", ph = "MapControls-module__bottomRight___3el1u", hh = "MapControls-module__gapXs___oKF8Z", vh = "MapControls-module__gapSm___1qKOx", yh = "MapControls-module__gapMd___R1EVt", bh = "MapControls-module__gapLg___DM9W1", oe = {
  mapButton: ih,
  zoomGroup: lh,
  zoomBtnTop: dh,
  zoomBtnBottom: ch,
  compassNeedle: uh,
  overlay: _h,
  topLeft: mh,
  topRight: fh,
  bottomLeft: gh,
  bottomRight: ph,
  gapXs: hh,
  gapSm: vh,
  gapMd: yh,
  gapLg: bh
}, wh = ({
  center: e = [-74.006, 40.7128],
  zoom: t = 9,
  pitch: n = 0,
  bearing: o = 0,
  mapId: a,
  size: r = "md",
  radius: s = "md",
  className: l,
  style: u,
  "aria-label": c = "Reset to default view",
  title: d = "Reset to default view"
}) => {
  const _ = st(), m = a ? _[a] : _.current, f = () => {
    m?.flyTo({
      center: e,
      zoom: t,
      pitch: n,
      bearing: o,
      essential: !0
    });
  };
  return /* @__PURE__ */ i(
    $e,
    {
      icon: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ i("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        /* @__PURE__ */ i("polyline", { points: "9 22 9 12 15 12 15 22" })
      ] }),
      "aria-label": c,
      title: d,
      variant: "light",
      color: "neutral",
      size: r,
      radius: s,
      className: B(oe.mapButton, l),
      style: u,
      onClick: f
    }
  );
};
wh.displayName = "DefaultViewControl";
const Sh = ({
  zoom: e = 14,
  mapId: t,
  size: n = "md",
  radius: o = "md",
  onGeolocate: a,
  onError: r,
  className: s,
  style: l,
  "aria-label": u = "Locate user position",
  title: c = "Find my location"
}) => {
  const [d, _] = q(!1), m = st(), f = t ? m[t] : m.current, p = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    _(!0), navigator.geolocation.getCurrentPosition(
      (h) => {
        _(!1);
        const { longitude: w, latitude: x } = h.coords;
        f?.flyTo({
          center: [w, x],
          zoom: e,
          essential: !0
        }), a?.(h.coords);
      },
      (h) => {
        _(!1), r?.(h);
      },
      { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 }
    );
  };
  return /* @__PURE__ */ i(
    $e,
    {
      icon: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "7" }),
        /* @__PURE__ */ i("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
        /* @__PURE__ */ i("line", { x1: "12", y1: "18", x2: "12", y2: "22" }),
        /* @__PURE__ */ i("line", { x1: "2", y1: "12", x2: "6", y2: "12" }),
        /* @__PURE__ */ i("line", { x1: "18", y1: "12", x2: "22", y2: "12" })
      ] }),
      "aria-label": u,
      title: c,
      variant: "light",
      color: "neutral",
      size: n,
      radius: o,
      loading: d,
      className: B(oe.mapButton, s),
      style: l,
      onClick: p
    }
  );
};
Sh.displayName = "GeolocateControl";
const Nh = ({
  mapId: e,
  size: t = "md",
  className: n,
  style: o
}) => {
  const a = st(), r = e ? a[e] : a.current, s = () => r?.zoomIn(), l = () => r?.zoomOut(), u = /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
    /* @__PURE__ */ i("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ i("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }), c = /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ i("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) });
  return /* @__PURE__ */ M("div", { className: B(oe.zoomGroup, n), style: o, children: [
    /* @__PURE__ */ i(
      $e,
      {
        icon: u,
        "aria-label": "Zoom in",
        title: "Zoom in",
        variant: "subtle",
        color: "neutral",
        size: t,
        radius: "none",
        className: oe.zoomBtnTop,
        onClick: s
      }
    ),
    /* @__PURE__ */ i(
      $e,
      {
        icon: c,
        "aria-label": "Zoom out",
        title: "Zoom out",
        variant: "subtle",
        color: "neutral",
        size: t,
        radius: "none",
        className: oe.zoomBtnBottom,
        onClick: l
      }
    )
  ] });
};
Nh.displayName = "ZoomControlGroup";
const xh = ({
  currentBasemap: e,
  onToggle: t,
  size: n = "md",
  radius: o = "md",
  className: a,
  style: r,
  "aria-label": s,
  title: l
}) => {
  const u = e === "satellite", c = /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ i("polygon", { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }),
    /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "18" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "6", x2: "16", y2: "22" })
  ] }), d = /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ i("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    /* @__PURE__ */ i("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] }), _ = l || (u ? "Switch to Vector Map" : "Switch to Satellite Imagery");
  return /* @__PURE__ */ i(
    $e,
    {
      icon: u ? c : d,
      "aria-label": s || _,
      title: _,
      variant: "light",
      color: "neutral",
      size: n,
      radius: o,
      className: B(oe.mapButton, a),
      style: r,
      onClick: t
    }
  );
};
xh.displayName = "BasemapToggleControl";
const Mh = ({
  mapId: e,
  size: t = "md",
  radius: n = "md",
  className: o,
  style: a,
  "aria-label": r = "Reset North and Bearing",
  title: s = "Reset North"
}) => {
  const [l, u] = q(0), c = st(), d = e ? c[e] : c.current;
  Q(() => {
    if (!d) return;
    const f = () => {
      u(d.getBearing() || 0);
    };
    return f(), d.on("rotate", f), d.on("pitch", f), d.on("move", f), () => {
      d.off("rotate", f), d.off("pitch", f), d.off("move", f);
    };
  }, [d]);
  const _ = () => {
    d?.resetNorthPitch({ duration: 500 });
  }, m = /* @__PURE__ */ i("span", { className: oe.compassNeedle, style: { transform: `rotate(${-l}deg)` }, children: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", children: [
    /* @__PURE__ */ i("path", { d: "M12 3L8 12H16L12 3Z", fill: "var(--color-danger-500, #ef4444)" }),
    /* @__PURE__ */ i("path", { d: "M12 21L8 12H16L12 21Z", fill: "var(--text-muted, #94a3b8)" }),
    /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "2", fill: "currentColor" })
  ] }) });
  return /* @__PURE__ */ i(
    $e,
    {
      icon: m,
      "aria-label": r,
      title: s,
      variant: "light",
      color: "neutral",
      size: t,
      radius: n,
      className: B(oe.mapButton, o),
      style: a,
      onClick: _
    }
  );
};
Mh.displayName = "CompassControl";
const Ch = ({
  containerRef: e,
  size: t = "md",
  radius: n = "md",
  className: o,
  style: a,
  "aria-label": r,
  title: s
}) => {
  const [l, u] = q(!1);
  Q(() => {
    const p = () => {
      u(!!document.fullscreenElement);
    };
    return document.addEventListener("fullscreenchange", p), () => {
      document.removeEventListener("fullscreenchange", p);
    };
  }, []);
  const c = () => {
    document.fullscreenElement ? document.exitFullscreen().catch((p) => {
      console.error("Error attempting to exit fullscreen:", p);
    }) : (e?.current || document.documentElement).requestFullscreen().catch((y) => {
      console.error("Error attempting to enable fullscreen:", y);
    });
  }, d = /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ i("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" }) }), _ = /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ i("path", { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }) }), m = s || (l ? "Exit fullscreen" : "Toggle fullscreen");
  return /* @__PURE__ */ i(
    $e,
    {
      icon: l ? _ : d,
      "aria-label": r || m,
      title: m,
      variant: "light",
      color: "neutral",
      size: t,
      radius: n,
      className: B(oe.mapButton, o),
      style: a,
      onClick: c
    }
  );
};
Ch.displayName = "FullscreenControl";
const kh = {
  "top-left": oe.topLeft,
  "top-right": oe.topRight,
  "bottom-left": oe.bottomLeft,
  "bottom-right": oe.bottomRight
}, Dh = {
  xs: oe.gapXs,
  sm: oe.gapSm,
  md: oe.gapMd,
  lg: oe.gapLg
}, Lh = ({
  position: e = "top-right",
  gap: t = "sm",
  children: n,
  className: o,
  style: a
}) => /* @__PURE__ */ i(
  "div",
  {
    className: B(oe.overlay, kh[e], Dh[t], o),
    style: a,
    children: n
  }
);
Lh.displayName = "MapControlWrapper";
export {
  oi as AspectRatio,
  bf as Avatar,
  Og as Badge,
  xh as BasemapToggleControl,
  xa as Box,
  xl as Button,
  lt as Card,
  fn as CardBody,
  gn as CardFooter,
  mn as CardHeader,
  Mh as CompassControl,
  bi as Container,
  Am as DatePicker,
  Hm as DateRangePicker,
  wh as DefaultViewControl,
  Po as Divider,
  Ch as FullscreenControl,
  Sh as GeolocateControl,
  Ht as Grid,
  Yt as GridCol,
  pr as Group,
  $e as IconButton,
  Tf as Image,
  Ye as InputWrapper,
  sh as Loader,
  Lh as MapControlWrapper,
  Lp as Modal,
  Zd as NumberInput,
  vc as Select,
  Ya as Stack,
  Ac as Switch,
  no as Text,
  Yd as TextField,
  Rt as ThemeContext,
  $h as ThemeProvider,
  Co as Title,
  Op as Tooltip,
  Nh as ZoomControlGroup,
  Ih as useTheme
};
//# sourceMappingURL=index.js.map
