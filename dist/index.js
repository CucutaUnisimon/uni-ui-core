import { createTheme as ho } from "@mui/material/styles";
import { esES as yo } from "@mui/x-data-grid/locales";
import { jsxs as b, jsx as s, Fragment as Se } from "react/jsx-runtime";
import { motion as ue, AnimatePresence as Xe } from "framer-motion";
import * as ve from "lucide-react";
import { Loader2 as bo, X as Te, CheckCircle2 as ut, XCircle as vo, Eye as _r, ExternalLink as Nn, FileText as or, Upload as An, AlertCircle as Pn, Move as Et, GripHorizontal as xo, Minimize2 as Co, Download as In, Image as wo, Search as So, ShieldCheck as Eo, Bell as No, User as Ao, ChevronDown as Po, LogOut as Io } from "lucide-react";
import { DataGrid as Oo, GridToolbarContainer as To } from "@mui/x-data-grid";
import * as Ie from "react";
import Ro, { useEffect as ze, createElement as ko, useState as oe, useRef as ir } from "react";
import Mo from "@emotion/styled";
import "@emotion/react";
import { Card as Do, Stack as Nt, Typography as J, TextField as _e, InputAdornment as Re, Box as W, Tooltip as ar, FormControl as Lo, InputLabel as Fo, Select as zo, MenuItem as Bo, Autocomplete as ft, FormControlLabel as On, Checkbox as jo, Switch as Tn, Chip as Rn, LinearProgress as kn, IconButton as Le, Dialog as Mn, DialogTitle as Dn, DialogContent as Ln, Backdrop as Vo, CircularProgress as Fn } from "@mui/material";
import { DatePicker as Uo } from "@mui/x-date-pickers/DatePicker";
import zn from "dayjs";
import Ho from "dayjs/plugin/customParseFormat";
import { MuiTelInput as Wo } from "mui-tel-input";
const ll = ho({
  palette: {
    primary: {
      main: "#09843B",
      // Verde Institucional
      light: "#0BA849",
      dark: "#076930",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#64748b",
      light: "#94a3b8",
      dark: "#475569"
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff"
    },
    error: {
      main: "#ef4444"
    },
    success: {
      main: "#10b981"
    },
    warning: {
      main: "#f59e0b"
    },
    info: {
      main: "#3b82f6"
    },
    divider: "#f1f5f9"
  },
  typography: {
    fontFamily: "'Inter', 'system-ui', 'sans-serif'",
    h6: {
      fontWeight: 800
    },
    subtitle1: {
      fontWeight: 700
    },
    subtitle2: {
      fontWeight: 600
    },
    body1: {
      fontFamily: "'Inter', 'system-ui', 'sans-serif'"
    },
    body2: {
      fontFamily: "'Inter', 'system-ui', 'sans-serif'"
    }
  },
  shape: {
    borderRadius: "var(--radius-md)"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "var(--radius-md)",
          padding: "8px 20px",
          transition: "all 0.2s ease-in-out"
        },
        containedPrimary: {
          backgroundColor: "var(--primary-main)",
          color: "var(--primary-contrast)",
          "&:hover": {
            backgroundColor: "var(--primary-dark)"
          }
        },
        outlinedPrimary: {
          color: "var(--primary-main)",
          borderColor: "var(--primary-main)",
          "&:hover": {
            backgroundColor: "var(--primary-50)",
            borderColor: "var(--primary-dark)"
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "48px"
        },
        indicator: {
          backgroundColor: "var(--primary-main)",
          height: "3px",
          borderRadius: "3px 3px 0 0"
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.9rem",
          minHeight: "48px",
          color: "var(--secondary-dark)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: "var(--primary-main)",
            opacity: 0.9
          },
          "&.Mui-selected": {
            color: "var(--primary-main)",
            fontWeight: 700
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-soft)",
          border: "1px solid var(--secondary-100)"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "var(--radius-modal)",
          padding: "4px",
          boxShadow: "var(--shadow-premium)"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-md)",
          transition: "all 0.2s ease-in-out",
          "& fieldset": {
            borderColor: "var(--secondary-200)",
            transition: "border-color 0.2s ease-in-out"
          },
          "&:hover fieldset": {
            borderColor: "var(--primary-main) !important"
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--primary-main) !important",
            borderWidth: "2px"
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: "flex",
          alignItems: "center"
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--secondary-100)",
          overflow: "hidden"
        },
        columnHeaders: {
          backgroundColor: "var(--secondary-50)",
          borderBottom: "1px solid var(--secondary-200)"
        },
        cell: {
          borderColor: "var(--secondary-100)"
        }
      }
    }
  }
}, yo), Je = ({
  children: e,
  variant: r = "primary",
  size: t = "md",
  fullWidth: n = !1,
  loading: o = !1,
  disabled: i = !1,
  icon: a,
  iconPosition: d = "left",
  onClick: c,
  type: f = "button",
  className: m = "",
  ...$
}) => {
  const g = {
    primary: "bg-primary hover:bg-primary-dark text-primary-contrast shadow-sm hover:shadow-soft",
    secondary: "bg-secondary-100 hover:bg-secondary-200 text-secondary-dark shadow-sm hover:shadow-soft",
    danger: "bg-error hover:bg-red-600 text-white shadow-sm hover:shadow-soft",
    success: "bg-success hover:bg-green-600 text-white shadow-sm hover:shadow-soft",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-contrast",
    ghost: "text-secondary font-semibold hover:bg-secondary-50 hover:text-primary",
    link: "text-primary hover:text-primary-dark underline-offset-4 hover:underline"
  }, p = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, h = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${g[r]}
    ${p[t]}
    ${n ? "w-full" : ""}
    ${m}
  `, u = i || o;
  return /* @__PURE__ */ b(
    ue.button,
    {
      type: f,
      onClick: c,
      disabled: u,
      className: h,
      whileHover: { scale: u ? 1 : 1.02 },
      whileTap: { scale: u ? 1 : 0.98 },
      ...$,
      children: [
        o && /* @__PURE__ */ s(bo, { className: "mr-2 h-4 w-4 animate-spin" }),
        !o && a && d === "left" && /* @__PURE__ */ s(a, { className: "mr-2 h-4 w-4" }),
        e,
        !o && a && d === "right" && /* @__PURE__ */ s(a, { className: "ml-2 h-4 w-4" })
      ]
    }
  );
}, Go = ({
  children: e,
  title: r,
  subtitle: t,
  icon: n,
  iconColor: o = "text-primary",
  hover: i = !0,
  className: a = "",
  headerAction: d,
  footer: c,
  padding: f = !0,
  ...m
}) => /* @__PURE__ */ b(
  ue.div,
  {
    className: `
        bg-white rounded-lg border border-gray-200 shadow-card
        ${i ? "card-hover" : ""}
        ${a}
      `,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
    ...m,
    children: [
      (r || t || n || d) && /* @__PURE__ */ s("div", { className: `border-b border-gray-200 ${f ? "p-6 pb-4" : "p-0"}`, children: /* @__PURE__ */ b("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ b("div", { className: "flex items-start space-x-3", children: [
          n && /* @__PURE__ */ s("div", { className: `${o} mt-1`, children: /* @__PURE__ */ s(n, { size: 24 }) }),
          /* @__PURE__ */ b("div", { children: [
            r && /* @__PURE__ */ s("h3", { className: "text-lg font-semibold text-gray-900", children: r }),
            t && /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: t })
          ] })
        ] }),
        d && /* @__PURE__ */ s("div", { children: d })
      ] }) }),
      /* @__PURE__ */ s("div", { className: f ? "p-6" : "p-0", children: e }),
      c && /* @__PURE__ */ s("div", { className: `border-t border-gray-200 ${f ? "p-6 pt-4" : "p-0"}`, children: c })
    ]
  }
), cl = ({
  title: e,
  value: r,
  icon: t,
  change: n,
  changeType: o = "positive",
  iconBgColor: i = "bg-primary/10",
  iconColor: a = "text-primary",
  className: d = ""
}) => /* @__PURE__ */ s(Go, { hover: !0, className: d, children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ b("div", { className: "flex-1", children: [
    /* @__PURE__ */ s("p", { className: "text-sm font-medium text-gray-600", children: e }),
    /* @__PURE__ */ s("p", { className: "text-2xl font-bold text-gray-900 mt-2", children: r }),
    n && /* @__PURE__ */ s("p", { className: `text-sm mt-2 ${{
      positive: "text-green-600",
      negative: "text-red-600",
      neutral: "text-gray-600"
    }[o]}`, children: n })
  ] }),
  t && /* @__PURE__ */ s("div", { className: `${i} ${a} p-3 rounded-lg`, children: /* @__PURE__ */ s(t, { size: 24 }) })
] }) }), ul = ({
  title: e,
  description: r,
  icon: t,
  color: n = "bg-primary",
  onClick: o,
  favorite: i = !1,
  className: a = ""
}) => /* @__PURE__ */ b(
  ue.div,
  {
    onClick: o,
    className: `
        bg-white rounded-lg border border-gray-200 shadow-card
        cursor-pointer card-hover p-6
        ${a}
      `,
    whileHover: { y: -4 },
    whileTap: { scale: 0.98 },
    children: [
      /* @__PURE__ */ b("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ s("div", { className: `${n} p-3 rounded-lg text-white`, children: t && /* @__PURE__ */ s(t, { size: 24 }) }),
        i && /* @__PURE__ */ s("span", { className: "text-yellow-500", children: /* @__PURE__ */ s(
          "svg",
          {
            className: "w-5 h-5 fill-current",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ s("path", { d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" })
          }
        ) })
      ] }),
      /* @__PURE__ */ s("h3", { className: "font-semibold text-gray-900 mb-2", children: e }),
      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: r })
    ]
  }
), At = (e) => e, Yo = () => {
  let e = At;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = At;
    }
  };
}, Qo = Yo();
function Be(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Be(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var et = { exports: {} }, hr = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Xo() {
  if (Pt) return Z;
  Pt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, $ = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function D(C) {
    if (typeof C == "object" && C !== null) {
      var N = C.$$typeof;
      switch (N) {
        case r:
          switch (C = C.type, C) {
            case c:
            case f:
            case n:
            case i:
            case o:
            case $:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case d:
                case m:
                case h:
                case p:
                case a:
                  return C;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  function E(C) {
    return D(C) === f;
  }
  return Z.AsyncMode = c, Z.ConcurrentMode = f, Z.ContextConsumer = d, Z.ContextProvider = a, Z.Element = r, Z.ForwardRef = m, Z.Fragment = n, Z.Lazy = h, Z.Memo = p, Z.Portal = t, Z.Profiler = i, Z.StrictMode = o, Z.Suspense = $, Z.isAsyncMode = function(C) {
    return E(C) || D(C) === c;
  }, Z.isConcurrentMode = E, Z.isContextConsumer = function(C) {
    return D(C) === d;
  }, Z.isContextProvider = function(C) {
    return D(C) === a;
  }, Z.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }, Z.isForwardRef = function(C) {
    return D(C) === m;
  }, Z.isFragment = function(C) {
    return D(C) === n;
  }, Z.isLazy = function(C) {
    return D(C) === h;
  }, Z.isMemo = function(C) {
    return D(C) === p;
  }, Z.isPortal = function(C) {
    return D(C) === t;
  }, Z.isProfiler = function(C) {
    return D(C) === i;
  }, Z.isStrictMode = function(C) {
    return D(C) === o;
  }, Z.isSuspense = function(C) {
    return D(C) === $;
  }, Z.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === i || C === o || C === $ || C === g || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === p || C.$$typeof === a || C.$$typeof === d || C.$$typeof === m || C.$$typeof === v || C.$$typeof === O || C.$$typeof === R || C.$$typeof === u);
  }, Z.typeOf = D, Z;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function Jo() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, $ = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function D(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === f || I === i || I === o || I === $ || I === g || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === p || I.$$typeof === a || I.$$typeof === d || I.$$typeof === m || I.$$typeof === v || I.$$typeof === O || I.$$typeof === R || I.$$typeof === u);
    }
    function E(I) {
      if (typeof I == "object" && I !== null) {
        var ye = I.$$typeof;
        switch (ye) {
          case r:
            var gr = I.type;
            switch (gr) {
              case c:
              case f:
              case n:
              case i:
              case o:
              case $:
                return gr;
              default:
                var St = gr && gr.$$typeof;
                switch (St) {
                  case d:
                  case m:
                  case h:
                  case p:
                  case a:
                    return St;
                  default:
                    return ye;
                }
            }
          case t:
            return ye;
        }
      }
    }
    var C = c, N = f, T = d, z = a, M = r, j = m, L = n, l = h, A = p, x = t, S = i, k = o, G = $, le = !1;
    function Ae(I) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(I) || E(I) === c;
    }
    function w(I) {
      return E(I) === f;
    }
    function P(I) {
      return E(I) === d;
    }
    function V(I) {
      return E(I) === a;
    }
    function U(I) {
      return typeof I == "object" && I !== null && I.$$typeof === r;
    }
    function F(I) {
      return E(I) === m;
    }
    function Y(I) {
      return E(I) === n;
    }
    function B(I) {
      return E(I) === h;
    }
    function H(I) {
      return E(I) === p;
    }
    function Q(I) {
      return E(I) === t;
    }
    function _(I) {
      return E(I) === i;
    }
    function K(I) {
      return E(I) === o;
    }
    function fe(I) {
      return E(I) === $;
    }
    q.AsyncMode = C, q.ConcurrentMode = N, q.ContextConsumer = T, q.ContextProvider = z, q.Element = M, q.ForwardRef = j, q.Fragment = L, q.Lazy = l, q.Memo = A, q.Portal = x, q.Profiler = S, q.StrictMode = k, q.Suspense = G, q.isAsyncMode = Ae, q.isConcurrentMode = w, q.isContextConsumer = P, q.isContextProvider = V, q.isElement = U, q.isForwardRef = F, q.isFragment = Y, q.isLazy = B, q.isMemo = H, q.isPortal = Q, q.isProfiler = _, q.isStrictMode = K, q.isSuspense = fe, q.isValidElementType = D, q.typeOf = E;
  }()), q;
}
var Ot;
function Bn() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? hr.exports = Xo() : hr.exports = Jo()), hr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vr, Tt;
function Zo() {
  if (Tt) return Vr;
  Tt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, d = 0; d < 10; d++)
        a["_" + String.fromCharCode(d)] = d;
      var c = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vr = o() ? Object.assign : function(i, a) {
    for (var d, c = n(i), f, m = 1; m < arguments.length; m++) {
      d = Object(arguments[m]);
      for (var $ in d)
        r.call(d, $) && (c[$] = d[$]);
      if (e) {
        f = e(d);
        for (var g = 0; g < f.length; g++)
          t.call(d, f[g]) && (c[f[g]] = d[f[g]]);
      }
    }
    return c;
  }, Vr;
}
var Ur, Rt;
function mt() {
  if (Rt) return Ur;
  Rt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ur = e, Ur;
}
var Hr, kt;
function jn() {
  return kt || (kt = 1, Hr = Function.call.bind(Object.prototype.hasOwnProperty)), Hr;
}
var Wr, Mt;
function qo() {
  if (Mt) return Wr;
  Mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = mt(), t = {}, n = jn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, d, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var $;
          try {
            if (typeof i[m] != "function") {
              var g = Error(
                (c || "React class") + ": " + d + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            $ = i[m](a, m, c, d, null, r);
          } catch (h) {
            $ = h;
          }
          if ($ && !($ instanceof Error) && e(
            (c || "React class") + ": type specification of " + d + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof $ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), $ instanceof Error && !($.message in t)) {
            t[$.message] = !0;
            var p = f ? f() : "";
            e(
              "Failed " + d + " type: " + $.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Wr = o, Wr;
}
var Gr, Dt;
function _o() {
  if (Dt) return Gr;
  Dt = 1;
  var e = Bn(), r = Zo(), t = mt(), n = jn(), o = qo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(d) {
    var c = "Warning: " + d;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Gr = function(d, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function $(w) {
      var P = w && (f && w[f] || w[m]);
      if (typeof P == "function")
        return P;
    }
    var g = "<<anonymous>>", p = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: R(),
      arrayOf: D,
      element: E(),
      elementType: C(),
      instanceOf: N,
      node: j(),
      objectOf: z,
      oneOf: T,
      oneOfType: M,
      shape: l,
      exact: A
    };
    function h(w, P) {
      return w === P ? w !== 0 || 1 / w === 1 / P : w !== w && P !== P;
    }
    function u(w, P) {
      this.message = w, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function v(w) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, V = 0;
      function U(Y, B, H, Q, _, K, fe) {
        if (Q = Q || g, K = K || H, fe !== t) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = Q + ":" + H;
            !P[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ye] = !0, V++);
          }
        }
        return B[H] == null ? Y ? B[H] === null ? new u("The " + _ + " `" + K + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new u("The " + _ + " `" + K + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : w(B, H, Q, _, K);
      }
      var F = U.bind(null, !1);
      return F.isRequired = U.bind(null, !0), F;
    }
    function O(w) {
      function P(V, U, F, Y, B, H) {
        var Q = V[U], _ = k(Q);
        if (_ !== w) {
          var K = G(Q);
          return new u(
            "Invalid " + Y + " `" + B + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return v(P);
    }
    function R() {
      return v(a);
    }
    function D(w) {
      function P(V, U, F, Y, B) {
        if (typeof w != "function")
          return new u("Property `" + B + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var H = V[U];
        if (!Array.isArray(H)) {
          var Q = k(H);
          return new u("Invalid " + Y + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + F + "`, expected an array."));
        }
        for (var _ = 0; _ < H.length; _++) {
          var K = w(H, _, F, Y, B + "[" + _ + "]", t);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return v(P);
    }
    function E() {
      function w(P, V, U, F, Y) {
        var B = P[V];
        if (!d(B)) {
          var H = k(B);
          return new u("Invalid " + F + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(w);
    }
    function C() {
      function w(P, V, U, F, Y) {
        var B = P[V];
        if (!e.isValidElementType(B)) {
          var H = k(B);
          return new u("Invalid " + F + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(w);
    }
    function N(w) {
      function P(V, U, F, Y, B) {
        if (!(V[U] instanceof w)) {
          var H = w.name || g, Q = Ae(V[U]);
          return new u("Invalid " + Y + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + F + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return v(P);
    }
    function T(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(V, U, F, Y, B) {
        for (var H = V[U], Q = 0; Q < w.length; Q++)
          if (h(H, w[Q]))
            return null;
        var _ = JSON.stringify(w, function(fe, I) {
          var ye = G(I);
          return ye === "symbol" ? String(I) : I;
        });
        return new u("Invalid " + Y + " `" + B + "` of value `" + String(H) + "` " + ("supplied to `" + F + "`, expected one of " + _ + "."));
      }
      return v(P);
    }
    function z(w) {
      function P(V, U, F, Y, B) {
        if (typeof w != "function")
          return new u("Property `" + B + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var H = V[U], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + F + "`, expected an object."));
        for (var _ in H)
          if (n(H, _)) {
            var K = w(H, _, F, Y, B + "." + _, t);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return v(P);
    }
    function M(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < w.length; P++) {
        var V = w[P];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(V) + " at index " + P + "."
          ), a;
      }
      function U(F, Y, B, H, Q) {
        for (var _ = [], K = 0; K < w.length; K++) {
          var fe = w[K], I = fe(F, Y, B, H, Q, t);
          if (I == null)
            return null;
          I.data && n(I.data, "expectedType") && _.push(I.data.expectedType);
        }
        var ye = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new u("Invalid " + H + " `" + Q + "` supplied to " + ("`" + B + "`" + ye + "."));
      }
      return v(U);
    }
    function j() {
      function w(P, V, U, F, Y) {
        return x(P[V]) ? null : new u("Invalid " + F + " `" + Y + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return v(w);
    }
    function L(w, P, V, U, F) {
      return new u(
        (w || "React class") + ": " + P + " type `" + V + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function l(w) {
      function P(V, U, F, Y, B) {
        var H = V[U], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + B + "` of type `" + Q + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var _ in w) {
          var K = w[_];
          if (typeof K != "function")
            return L(F, Y, B, _, G(K));
          var fe = K(H, _, F, Y, B + "." + _, t);
          if (fe)
            return fe;
        }
        return null;
      }
      return v(P);
    }
    function A(w) {
      function P(V, U, F, Y, B) {
        var H = V[U], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + B + "` of type `" + Q + "` " + ("supplied to `" + F + "`, expected `object`."));
        var _ = r({}, V[U], w);
        for (var K in _) {
          var fe = w[K];
          if (n(w, K) && typeof fe != "function")
            return L(F, Y, B, K, G(fe));
          if (!fe)
            return new u(
              "Invalid " + Y + " `" + B + "` key `" + K + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(V[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var I = fe(H, K, F, Y, B + "." + K, t);
          if (I)
            return I;
        }
        return null;
      }
      return v(P);
    }
    function x(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(x);
          if (w === null || d(w))
            return !0;
          var P = $(w);
          if (P) {
            var V = P.call(w), U;
            if (P !== w.entries) {
              for (; !(U = V.next()).done; )
                if (!x(U.value))
                  return !1;
            } else
              for (; !(U = V.next()).done; ) {
                var F = U.value;
                if (F && !x(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function S(w, P) {
      return w === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function k(w) {
      var P = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : S(P, w) ? "symbol" : P;
    }
    function G(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var P = k(w);
      if (P === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function le(w) {
      var P = G(w);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Ae(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Gr;
}
var Yr, Lt;
function ei() {
  if (Lt) return Yr;
  Lt = 1;
  var e = mt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Yr = function() {
    function n(a, d, c, f, m, $) {
      if ($ !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Yr;
}
if (process.env.NODE_ENV !== "production") {
  var ri = Bn(), ti = !0;
  et.exports = _o()(ri.isElement, ti);
} else
  et.exports = ei()();
var ni = et.exports;
const X = /* @__PURE__ */ Ko(ni);
function Vn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Vn(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Un() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Vn(e)) && (n && (n += " "), n += r);
  return n;
}
function oi(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", d = !0;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c];
      f && (a += (d === !0 ? "" : " ") + r(f), d = !1, t && t[f] && (a += " " + t[f]));
    }
    n[o] = a;
  }
  return n;
}
var rt = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function ii() {
  if (Ft) return te;
  Ft = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
  function h(u) {
    if (typeof u == "object" && u !== null) {
      var v = u.$$typeof;
      switch (v) {
        case e:
          switch (u = u.type, u) {
            case t:
            case o:
            case n:
            case c:
            case f:
            case g:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case d:
                case $:
                case m:
                  return u;
                case i:
                  return u;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = a, te.Element = e, te.ForwardRef = d, te.Fragment = t, te.Lazy = $, te.Memo = m, te.Portal = r, te.Profiler = o, te.StrictMode = n, te.Suspense = c, te.SuspenseList = f, te.isContextConsumer = function(u) {
    return h(u) === i;
  }, te.isContextProvider = function(u) {
    return h(u) === a;
  }, te.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, te.isForwardRef = function(u) {
    return h(u) === d;
  }, te.isFragment = function(u) {
    return h(u) === t;
  }, te.isLazy = function(u) {
    return h(u) === $;
  }, te.isMemo = function(u) {
    return h(u) === m;
  }, te.isPortal = function(u) {
    return h(u) === r;
  }, te.isProfiler = function(u) {
    return h(u) === o;
  }, te.isStrictMode = function(u) {
    return h(u) === n;
  }, te.isSuspense = function(u) {
    return h(u) === c;
  }, te.isSuspenseList = function(u) {
    return h(u) === f;
  }, te.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === t || u === o || u === n || u === c || u === f || u === g || typeof u == "object" && u !== null && (u.$$typeof === $ || u.$$typeof === m || u.$$typeof === a || u.$$typeof === i || u.$$typeof === d || u.$$typeof === p || u.getModuleId !== void 0);
  }, te.typeOf = h, te;
}
var ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function ai() {
  return zt || (zt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var v = u.$$typeof;
        switch (v) {
          case r:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case f:
              case m:
              case p:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case d:
                  case c:
                  case g:
                  case $:
                    return u;
                  case a:
                    return u;
                  default:
                    return v;
                }
            }
          case t:
            return v;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    ne.ContextConsumer = a, ne.ContextProvider = d, ne.Element = r, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = g, ne.Memo = $, ne.Portal = t, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = f, ne.SuspenseList = m, ne.isContextConsumer = function(u) {
      return e(u) === a;
    }, ne.isContextProvider = function(u) {
      return e(u) === d;
    }, ne.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }, ne.isForwardRef = function(u) {
      return e(u) === c;
    }, ne.isFragment = function(u) {
      return e(u) === n;
    }, ne.isLazy = function(u) {
      return e(u) === g;
    }, ne.isMemo = function(u) {
      return e(u) === $;
    }, ne.isPortal = function(u) {
      return e(u) === t;
    }, ne.isProfiler = function(u) {
      return e(u) === i;
    }, ne.isStrictMode = function(u) {
      return e(u) === o;
    }, ne.isSuspense = function(u) {
      return e(u) === f;
    }, ne.isSuspenseList = function(u) {
      return e(u) === m;
    }, ne.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === f || u === m || u === p || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === $ || u.$$typeof === d || u.$$typeof === a || u.$$typeof === c || u.$$typeof === h || u.getModuleId !== void 0);
    }, ne.typeOf = e;
  }()), ne;
}
process.env.NODE_ENV === "production" ? rt.exports = ii() : rt.exports = ai();
var vr = rt.exports;
function we(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Hn(e) {
  if (/* @__PURE__ */ Ie.isValidElement(e) || vr.isValidElementType(e) || !we(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Hn(e[t]);
  }), r;
}
function pe(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return we(e) && we(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ Ie.isValidElement(r[o]) || vr.isValidElementType(r[o]) ? n[o] = r[o] : we(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && we(e[o]) ? n[o] = pe(e[o], r[o], t) : t.clone ? n[o] = we(r[o]) ? Hn(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function nr(e, r) {
  return r ? pe(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ke = process.env.NODE_ENV !== "production" ? X.oneOfType([X.number, X.string, X.object, X.array]) : {};
function Bt(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, d;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((d = o.match(i)) == null ? void 0 : d[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function di(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function si(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function li(e) {
  const r = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function t(i, a) {
    i.up = (...d) => r(e.breakpoints.up(...d), a), i.down = (...d) => r(e.breakpoints.down(...d), a), i.between = (...d) => r(e.breakpoints.between(...d), a), i.only = (...d) => r(e.breakpoints.only(...d), a), i.not = (...d) => {
      const c = r(e.breakpoints.not(...d), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const Nr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, jt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Nr[e]}px)`
}, ci = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Nr[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function Ee(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || jt;
    return r.reduce((a, d, c) => (a[i.up(i.keys[c])] = t(r[c]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || jt;
    return Object.keys(r).reduce((a, d) => {
      if (di(i.keys, d)) {
        const c = si(n.containerQueries ? n : ci, d);
        c && (a[c] = t(r[d], d));
      } else if (Object.keys(i.values || Nr).includes(d)) {
        const c = i.up(d);
        a[c] = t(r[d], d);
      } else {
        const c = d;
        a[c] = r[c];
      }
      return a;
    }, {});
  }
  return t(r);
}
function ui(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Vt(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Ar(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function xr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Ar(e, t) || n, r && (o = r(o, n, e)), o;
}
function se(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const d = a[r], c = a.theme, f = Ar(c, n) || {};
    return Ee(a, d, ($) => {
      let g = xr(f, o, $);
      return $ === g && typeof $ == "string" && (g = xr(f, o, `${r}${$ === "default" ? "" : je($)}`, $)), t === !1 ? g : {
        [t]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: ke
  } : {}, i.filterProps = [r], i;
}
function fi(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const mi = {
  m: "margin",
  p: "padding"
}, pi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ut = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $i = fi((e) => {
  if (e.length > 2)
    if (Ut[e])
      e = Ut[e];
    else
      return [e];
  const [r, t] = e.split(""), n = mi[r], o = pi[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Pr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ir = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gi = [...Pr, ...Ir];
function pr(e, r, t, n) {
  const o = Ar(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const d = o[a];
    return i >= 0 ? d : typeof d == "number" ? -d : typeof d == "string" && d.startsWith("var(") ? `calc(-1 * ${d})` : `-${d}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function pt(e) {
  return pr(e, "spacing", 8, "spacing");
}
function $r(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function hi(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = $r(r, t), n), {});
}
function yi(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = $i(t), i = hi(o, n), a = e[t];
  return Ee(e, a, i);
}
function Wn(e, r) {
  const t = pt(e.theme);
  return Object.keys(e).map((n) => yi(e, r, n, t)).reduce(nr, {});
}
function ae(e) {
  return Wn(e, Pr);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Pr.reduce((e, r) => (e[r] = ke, e), {}) : {};
ae.filterProps = Pr;
function de(e) {
  return Wn(e, Ir);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Ir.reduce((e, r) => (e[r] = ke, e), {}) : {};
de.filterProps = Ir;
process.env.NODE_ENV !== "production" && gi.reduce((e, r) => (e[r] = ke, e), {});
function Or(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? nr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function $e(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ge(e, r) {
  return se({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const bi = ge("border", $e), vi = ge("borderTop", $e), xi = ge("borderRight", $e), Ci = ge("borderBottom", $e), wi = ge("borderLeft", $e), Si = ge("borderColor"), Ei = ge("borderTopColor"), Ni = ge("borderRightColor"), Ai = ge("borderBottomColor"), Pi = ge("borderLeftColor"), Ii = ge("outline", $e), Oi = ge("outlineColor"), Tr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = pr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: $r(r, n)
    });
    return Ee(e, e.borderRadius, t);
  }
  return null;
};
Tr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ke
} : {};
Tr.filterProps = ["borderRadius"];
Or(bi, vi, xi, Ci, wi, Si, Ei, Ni, Ai, Pi, Tr, Ii, Oi);
const Rr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = pr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: $r(r, n)
    });
    return Ee(e, e.gap, t);
  }
  return null;
};
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ke
} : {};
Rr.filterProps = ["gap"];
const kr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = pr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: $r(r, n)
    });
    return Ee(e, e.columnGap, t);
  }
  return null;
};
kr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ke
} : {};
kr.filterProps = ["columnGap"];
const Mr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = pr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: $r(r, n)
    });
    return Ee(e, e.rowGap, t);
  }
  return null;
};
Mr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ke
} : {};
Mr.filterProps = ["rowGap"];
const Ti = se({
  prop: "gridColumn"
}), Ri = se({
  prop: "gridRow"
}), ki = se({
  prop: "gridAutoFlow"
}), Mi = se({
  prop: "gridAutoColumns"
}), Di = se({
  prop: "gridAutoRows"
}), Li = se({
  prop: "gridTemplateColumns"
}), Fi = se({
  prop: "gridTemplateRows"
}), zi = se({
  prop: "gridTemplateAreas"
}), Bi = se({
  prop: "gridArea"
});
Or(Rr, kr, Mr, Ti, Ri, ki, Mi, Di, Li, Fi, zi, Bi);
function Qe(e, r) {
  return r === "grey" ? r : e;
}
const ji = se({
  prop: "color",
  themeKey: "palette",
  transform: Qe
}), Vi = se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Qe
}), Ui = se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Qe
});
Or(ji, Vi, Ui);
function me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hi = se({
  prop: "width",
  transform: me
}), $t = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, a, d, c;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[t]) || Nr[t];
      return n ? ((c = (d = e.theme) == null ? void 0 : d.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: me(t)
      };
    };
    return Ee(e, e.maxWidth, r);
  }
  return null;
};
$t.filterProps = ["maxWidth"];
const Wi = se({
  prop: "minWidth",
  transform: me
}), Gi = se({
  prop: "height",
  transform: me
}), Yi = se({
  prop: "maxHeight",
  transform: me
}), Qi = se({
  prop: "minHeight",
  transform: me
});
se({
  prop: "size",
  cssProperty: "width",
  transform: me
});
se({
  prop: "size",
  cssProperty: "height",
  transform: me
});
const Ki = se({
  prop: "boxSizing"
});
Or(Hi, $t, Wi, Gi, Yi, Qi, Ki);
const Dr = {
  // borders
  border: {
    themeKey: "borders",
    transform: $e
  },
  borderTop: {
    themeKey: "borders",
    transform: $e
  },
  borderRight: {
    themeKey: "borders",
    transform: $e
  },
  borderBottom: {
    themeKey: "borders",
    transform: $e
  },
  borderLeft: {
    themeKey: "borders",
    transform: $e
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: $e
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Tr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Qe
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: ae
  },
  mt: {
    style: ae
  },
  mr: {
    style: ae
  },
  mb: {
    style: ae
  },
  ml: {
    style: ae
  },
  mx: {
    style: ae
  },
  my: {
    style: ae
  },
  margin: {
    style: ae
  },
  marginTop: {
    style: ae
  },
  marginRight: {
    style: ae
  },
  marginBottom: {
    style: ae
  },
  marginLeft: {
    style: ae
  },
  marginX: {
    style: ae
  },
  marginY: {
    style: ae
  },
  marginInline: {
    style: ae
  },
  marginInlineStart: {
    style: ae
  },
  marginInlineEnd: {
    style: ae
  },
  marginBlock: {
    style: ae
  },
  marginBlockStart: {
    style: ae
  },
  marginBlockEnd: {
    style: ae
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Rr
  },
  rowGap: {
    style: Mr
  },
  columnGap: {
    style: kr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: me
  },
  maxWidth: {
    style: $t
  },
  minWidth: {
    transform: me
  },
  height: {
    transform: me
  },
  maxHeight: {
    transform: me
  },
  minHeight: {
    transform: me
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Xi(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Ji(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Zi() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, d = i[t];
    if (!d)
      return {
        [t]: n
      };
    const {
      cssProperty: c = t,
      themeKey: f,
      transform: m,
      style: $
    } = d;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const g = Ar(o, f) || {};
    return $ ? $(a) : Ee(a, n, (h) => {
      let u = xr(g, m, h);
      return h === u && typeof h == "string" && (u = xr(g, m, `${t}${h === "default" ? "" : je(h)}`, h)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = t || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? Dr;
    function d(c) {
      let f = c;
      if (typeof c == "function")
        f = c(o);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const m = ui(o.breakpoints), $ = Object.keys(m);
      let g = m;
      return Object.keys(f).forEach((p) => {
        const h = Ji(f[p], o);
        if (h != null)
          if (typeof h == "object")
            if (a[p])
              g = nr(g, e(p, h, o, a));
            else {
              const u = Ee({
                theme: o
              }, h, (v) => ({
                [p]: v
              }));
              Xi(u, h) ? g[p] = r({
                sx: h,
                theme: o,
                nested: !0
              }) : g = nr(g, u);
            }
          else
            g = nr(g, e(p, h, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Bt(o, Vt($, g))
      } : Bt(o, Vt($, g));
    }
    return Array.isArray(n) ? n.map(d) : d(n);
  }
  return r;
}
const Ze = Zi();
Ze.filterProps = ["sx"];
function qi(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var _i = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ea(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ra = /[A-Z]|^ms/g, ta = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gn = function(r) {
  return r.charCodeAt(1) === 45;
}, Ht = function(r) {
  return r != null && typeof r != "boolean";
}, Qr = /* @__PURE__ */ ea(function(e) {
  return Gn(e) ? e : e.replace(ra, "-$&").toLowerCase();
}), Wt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ta, function(n, o, i) {
          return Pe = {
            name: o,
            styles: i,
            next: Pe
          }, o;
        });
  }
  return _i[r] !== 1 && !Gn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Cr(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Pe = {
          name: o.name,
          styles: o.styles,
          next: Pe
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Pe = {
              name: a.name,
              styles: a.styles,
              next: Pe
            }, a = a.next;
        var d = i.styles + ";";
        return d;
      }
      return na(e, r, t);
    }
  }
  var c = t;
  return c;
}
function na(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Cr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var d = a;
        Ht(d) && (n += Qr(i) + ":" + Wt(i, d) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && r == null)
        for (var c = 0; c < a.length; c++)
          Ht(a[c]) && (n += Qr(i) + ":" + Wt(i, a[c]) + ";");
      else {
        var f = Cr(e, r, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Qr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Gt = /label:\s*([^\s;{]+)\s*(;|$)/g, Pe;
function oa(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Pe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Cr(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var d = 1; d < e.length; d++)
    if (o += Cr(t, r, e[d]), n) {
      var c = i;
      o += c[d];
    }
  Gt.lastIndex = 0;
  for (var f = "", m; (m = Gt.exec(o)) !== null; )
    f += "-" + m[1];
  var $ = qi(o) + f;
  return {
    name: $,
    styles: o,
    next: Pe
  };
}
/**
 * @mui/styled-engine v7.3.10
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ia(e, r) {
  const t = Mo(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function aa(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const Yt = [];
function Fe(e) {
  return Yt[0] = e, oa(Yt);
}
const da = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function sa(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = da(r), a = Object.keys(i);
  function d(g) {
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof r[g] == "number" ? r[g] : g) - n / 100}${t})`;
  }
  function f(g, p) {
    const h = a.indexOf(p);
    return `@media (min-width:${typeof r[g] == "number" ? r[g] : g}${t}) and (max-width:${(h !== -1 && typeof r[a[h]] == "number" ? r[a[h]] : p) - n / 100}${t})`;
  }
  function m(g) {
    return a.indexOf(g) + 1 < a.length ? f(g, a[a.indexOf(g) + 1]) : d(g);
  }
  function $(g) {
    const p = a.indexOf(g);
    return p === 0 ? d(a[1]) : p === a.length - 1 ? c(a[p]) : f(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: d,
    down: c,
    between: f,
    only: m,
    not: $,
    unit: t,
    ...o
  };
}
const la = {
  borderRadius: 4
};
function Yn(e = 8, r = pt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function ca(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function Qn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, d = sa(t), c = Yn(o);
  let f = pe({
    breakpoints: d,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...la,
      ...i
    }
  }, a);
  return f = li(f), f.applyStyles = ca, f = r.reduce((m, $) => pe(m, $), f), f.unstable_sxConfig = {
    ...Dr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function($) {
    return Ze({
      sx: $,
      theme: this
    });
  }, f;
}
const ua = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function gt(e, r, t = "Mui") {
  const n = ua[r];
  return n ? `${t}-${n}` : `${Qo.generate(e)}-${r}`;
}
function fa(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = gt(e, o, t);
  }), n;
}
function Kn(e, r = "") {
  return e.displayName || e.name || r;
}
function Qt(e, r, t) {
  const n = Kn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function ma(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Kn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vr.ForwardRef:
          return Qt(e, e.render, "ForwardRef");
        case vr.Memo:
          return Qt(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Xn(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Fe(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Fe(o.style));
  }), n;
}
const pa = Qn();
function Kr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function De(e, r) {
  return r && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${r}{${String(e.styles)}}`), e;
}
function $a(e) {
  return e ? (r, t) => t[e] : null;
}
function ga(e, r, t) {
  e.theme = va(e.theme) ? t : e.theme[r] || e.theme;
}
function br(e, r, t) {
  const n = typeof r == "function" ? r(e) : r;
  if (Array.isArray(n))
    return n.flatMap((o) => br(e, o, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = t ? De(n.style, t) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = t ? De(Fe(a), t) : a;
    }
    return Jn(e, n.variants, [o], t);
  }
  return n != null && n.isProcessed ? t ? De(Fe(n.style), t) : n.style : t ? De(Fe(n), t) : n;
}
function Jn(e, r, t = [], n = void 0) {
  var i;
  let o;
  e: for (let a = 0; a < r.length; a += 1) {
    const d = r[a];
    if (typeof d.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !d.props(o))
        continue;
    } else
      for (const c in d.props)
        if (e[c] !== d.props[c] && ((i = e.ownerState) == null ? void 0 : i[c]) !== d.props[c])
          continue e;
    typeof d.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(n ? De(Fe(d.style(o)), n) : d.style(o))) : t.push(n ? De(Fe(d.style), n) : d.style);
  }
  return t;
}
function ha(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = pa,
    rootShouldForwardProp: n = Kr,
    slotShouldForwardProp: o = Kr
  } = e;
  function i(d) {
    ga(d, r, t);
  }
  return (d, c = {}) => {
    aa(d, (N) => N.filter((T) => T !== Ze));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: $,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = $a(Zn(m)),
      ...h
    } = c, u = f && f.startsWith("Mui") || m ? "components" : "custom", v = $ !== void 0 ? $ : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), O = g || !1;
    let R = Kr;
    m === "Root" || m === "root" ? R = n : m ? R = o : xa(d) && (R = void 0);
    const D = ia(d, {
      shouldForwardProp: R,
      label: ba(f, m),
      ...h
    }), E = (N) => {
      if (N.__emotion_real === N)
        return N;
      if (typeof N == "function")
        return function(z) {
          return br(z, N, z.theme.modularCssLayers ? u : void 0);
        };
      if (we(N)) {
        const T = Xn(N);
        return function(M) {
          return T.variants ? br(M, T, M.theme.modularCssLayers ? u : void 0) : M.theme.modularCssLayers ? De(T.style, u) : T.style;
        };
      }
      return N;
    }, C = (...N) => {
      const T = [], z = N.map(E), M = [];
      if (T.push(i), f && p && M.push(function(A) {
        var G, le;
        const S = (le = (G = A.theme.components) == null ? void 0 : G[f]) == null ? void 0 : le.styleOverrides;
        if (!S)
          return null;
        const k = {};
        for (const Ae in S)
          k[Ae] = br(A, S[Ae], A.theme.modularCssLayers ? "theme" : void 0);
        return p(A, k);
      }), f && !v && M.push(function(A) {
        var k, G;
        const x = A.theme, S = (G = (k = x == null ? void 0 : x.components) == null ? void 0 : k[f]) == null ? void 0 : G.variants;
        return S ? Jn(A, S, [], A.theme.modularCssLayers ? "theme" : void 0) : null;
      }), O || M.push(Ze), Array.isArray(z[0])) {
        const l = z.shift(), A = new Array(T.length).fill(""), x = new Array(M.length).fill("");
        let S;
        S = [...A, ...l, ...x], S.raw = [...A, ...l.raw, ...x], T.unshift(S);
      }
      const j = [...T, ...z, ...M], L = D(...j);
      return d.muiName && (L.muiName = d.muiName), process.env.NODE_ENV !== "production" && (L.displayName = ya(f, m, d)), L;
    };
    return D.withConfig && (C.withConfig = D.withConfig), C;
  };
}
function ya(e, r, t) {
  return e ? `${e}${je(r || "")}` : `Styled(${ma(t)})`;
}
function ba(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${Zn(r || "Root")}`), t;
}
function va(e) {
  for (const r in e)
    return !1;
  return !0;
}
function xa(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Zn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function tt(e, r, t = !1) {
  const n = {
    ...r
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], d = r[i];
        if (!d)
          n[i] = a || {};
        else if (!a)
          n[i] = d;
        else {
          n[i] = {
            ...d
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const f = c;
              n[i][f] = tt(a[f], d[f], t);
            }
        }
      } else i === "className" && t && r.className ? n.className = Un(e == null ? void 0 : e.className, r == null ? void 0 : r.className) : i === "style" && t && r.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...r == null ? void 0 : r.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Ca(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function ht(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Ca(e, r, t);
}
function wa(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Oe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Oe(wa(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Be(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Be(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Sa = (e) => {
  const r = Oe(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, rr = (e, r) => {
  try {
    return Sa(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function Lr(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function qn(e) {
  e = Oe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, m = (f + t / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let d = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (d += "a", c.push(r[3])), Lr({
    type: d,
    values: c
  });
}
function nt(e) {
  e = Oe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Oe(qn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Kt(e, r) {
  const t = nt(e), n = nt(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function _n(e, r) {
  return e = Oe(e), r = ht(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Lr(e);
}
function Me(e, r, t) {
  try {
    return _n(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Fr(e, r) {
  if (e = Oe(e), r = ht(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Lr(e);
}
function ee(e, r, t) {
  try {
    return Fr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function zr(e, r) {
  if (e = Oe(e), r = ht(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Lr(e);
}
function re(e, r, t) {
  try {
    return zr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Ea(e, r = 0.15) {
  return nt(e) > 0.5 ? Fr(e, r) : zr(e, r);
}
function yr(e, r, t) {
  try {
    return Ea(e, r);
  } catch {
    return e;
  }
}
const Na = /* @__PURE__ */ Ie.createContext(void 0);
process.env.NODE_ENV !== "production" && (X.node, X.object);
function Aa(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? tt(o.defaultProps, n, r.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? tt(o, n, r.components.mergeClassNameAndStyle) : n;
}
function Pa({
  props: e,
  name: r
}) {
  const t = Ie.useContext(Na);
  return Aa({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const Xt = {
  theme: void 0
};
function Ia(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (Xt.theme = o.theme, i = Xn(e(Xt)), r = i, t = o.theme), i;
  };
}
function Oa(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const Jt = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, a) => {
    a === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ta = (e, r, t) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([d, c]) => {
      (!t || t && !t([...i, d])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...i, d], Array.isArray(c) ? [...a, d] : a) : r([...i, d], c, a));
    });
  }
  n(e);
}, Ra = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Xr(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, a = {};
  return Ta(
    e,
    (d, c, f) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(d, c))) {
        const m = `--${t ? `${t}-` : ""}${d.join("-")}`, $ = Ra(d, c);
        Object.assign(o, {
          [m]: $
        }), Jt(i, d, `var(${m})`, f), Jt(a, d, `var(${m}, ${$})`, f);
      }
    },
    (d) => d[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function ka(e, r = {}) {
  const {
    getSelector: t = O,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = r, {
    colorSchemes: a = {},
    components: d,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: m,
    css: $,
    varsWithDefaults: g
  } = Xr(f, r);
  let p = g;
  const h = {}, {
    [c]: u,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([E, C]) => {
    const {
      vars: N,
      css: T,
      varsWithDefaults: z
    } = Xr(C, r);
    p = pe(p, z), h[E] = {
      css: T,
      vars: N
    };
  }), u) {
    const {
      css: E,
      vars: C,
      varsWithDefaults: N
    } = Xr(u, r);
    p = pe(p, N), h[c] = {
      css: E,
      vars: C
    };
  }
  function O(E, C) {
    var T, z;
    let N = o;
    if (o === "class" && (N = ".%s"), o === "data" && (N = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (N = `[${o}="%s"]`), E) {
      if (N === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((z = (T = a[E]) == null ? void 0 : T.palette) == null ? void 0 : z.mode) || E})`]: {
            ":root": C
          }
        };
      if (N)
        return e.defaultColorScheme === E ? `:root, ${N.replace("%s", String(E))}` : N.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let E = {
        ...m
      };
      return Object.entries(h).forEach(([, {
        vars: C
      }]) => {
        E = pe(E, C);
      }), E;
    },
    generateStyleSheets: () => {
      var M, j;
      const E = [], C = e.defaultColorScheme || "light";
      function N(L, l) {
        Object.keys(l).length && E.push(typeof L == "string" ? {
          [L]: {
            ...l
          }
        } : L);
      }
      N(t(void 0, {
        ...$
      }), $);
      const {
        [C]: T,
        ...z
      } = h;
      if (T) {
        const {
          css: L
        } = T, l = (j = (M = a[C]) == null ? void 0 : M.palette) == null ? void 0 : j.mode, A = !n && l ? {
          colorScheme: l,
          ...L
        } : {
          ...L
        };
        N(t(C, {
          ...A
        }), A);
      }
      return Object.entries(z).forEach(([L, {
        css: l
      }]) => {
        var S, k;
        const A = (k = (S = a[L]) == null ? void 0 : S.palette) == null ? void 0 : k.mode, x = !n && A ? {
          colorScheme: A,
          ...l
        } : {
          ...l
        };
        N(t(L, {
          ...x
        }), x);
      }), i && E.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), E;
    }
  };
}
function Ma(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const dr = {
  black: "#000",
  white: "#fff"
}, Da = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ve = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ue = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, er = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, He = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, We = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ge = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function eo() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: dr.white,
      default: dr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ro = eo();
function to() {
  return {
    text: {
      primary: dr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: dr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const ot = to();
function Zt(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = zr(e.main, o) : r === "dark" && (e.dark = Fr(e.main, i)));
}
function qt(e, r, t, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  r[t] || (r.hasOwnProperty(n) ? r[t] = r[n] : t === "light" ? r.light = `color-mix(in ${e}, ${r.main}, #fff ${(i * 100).toFixed(0)}%)` : t === "dark" && (r.dark = `color-mix(in ${e}, ${r.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function La(e = "light") {
  return e === "dark" ? {
    main: He[200],
    light: He[50],
    dark: He[400]
  } : {
    main: He[700],
    light: He[400],
    dark: He[800]
  };
}
function Fa(e = "light") {
  return e === "dark" ? {
    main: Ve[200],
    light: Ve[50],
    dark: Ve[400]
  } : {
    main: Ve[500],
    light: Ve[300],
    dark: Ve[700]
  };
}
function za(e = "light") {
  return e === "dark" ? {
    main: Ue[500],
    light: Ue[300],
    dark: Ue[700]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function Ba(e = "light") {
  return e === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[500],
    dark: We[900]
  };
}
function ja(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: Ge[800],
    light: Ge[500],
    dark: Ge[900]
  };
}
function Va(e = "light") {
  return e === "dark" ? {
    main: er[400],
    light: er[300],
    dark: er[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: er[500],
    dark: er[900]
  };
}
function Ua(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function yt(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || La(r), d = e.secondary || Fa(r), c = e.error || za(r), f = e.info || Ba(r), m = e.success || ja(r), $ = e.warning || Va(r);
  function g(v) {
    if (o)
      return Ua(v);
    const O = Kt(v, ot.text.primary) >= t ? ot.text.primary : ro.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Kt(v, O);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${O} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const p = ({
    color: v,
    name: O,
    mainShade: R = 500,
    lightShade: D = 300,
    darkShade: E = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Be(11, O ? ` (${O})` : "", R));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Be(12, O ? ` (${O})` : "", JSON.stringify(v.main)));
    return o ? (qt(o, v, "light", D, n), qt(o, v, "dark", E, n)) : (Zt(v, "light", D, n), Zt(v, "dark", E, n)), v.contrastText || (v.contrastText = g(v.main)), v;
  };
  let h;
  return r === "light" ? h = eo() : r === "dark" && (h = to()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), pe({
    // A collection of common colors.
    common: {
      ...dr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: $,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: Da,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...h
  }, i);
}
function Ha(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Wa(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function Ga(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _t = {
  textTransform: "uppercase"
}, en = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ya(e, r) {
  const {
    fontFamily: t = en,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...$
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, p = m || ((v) => `${v / c * g}rem`), h = (v, O, R, D, E) => ({
    fontFamily: t,
    fontWeight: v,
    fontSize: p(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === en ? {
      letterSpacing: `${Ga(D / O)}em`
    } : {},
    ...E,
    ...f
  }), u = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(a, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(a, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(a, 14, 1.75, 0.4, _t),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, _t),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pe({
    htmlFontSize: c,
    pxToRem: p,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: d,
    ...u
  }, $, {
    clone: !1
    // No need to clone deep
  });
}
const Qa = 0.2, Ka = 0.14, Xa = 0.12;
function ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ka})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xa})`].join(",");
}
const Ja = ["none", ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Za = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, qa = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function rn(e) {
  return `${Math.round(e)}ms`;
}
function _a(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function ed(e) {
  const r = {
    ...Za,
    ...e.easing
  }, t = {
    ...qa,
    ...e.duration
  };
  return {
    getAutoHeightDuration: _a,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: d = r.easeInOut,
        delay: c = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (g) => typeof g == "string", $ = (g) => !Number.isNaN(parseFloat(g));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !$(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(d) || console.error('MUI: Argument "easing" must be a string.'), !$(c) && !m(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : rn(a)} ${d} ${typeof c == "string" ? c : rn(c)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const rd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function td(e) {
  return we(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function no(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, d] = o[i];
      !td(d) || a.startsWith("unstable_") ? delete n[a] : we(d) && (n[a] = {
        ...d
      }, t(n[a]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function tn(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const nd = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const r = e.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let t = 0;
  for (let n = 0; n < r.length; n += 1)
    t += +r[n];
  return t;
};
function od(e) {
  Object.assign(e, {
    alpha(r, t) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${r} l c h / ${typeof t == "string" ? `calc(${t})` : t})` : n.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof t == "string" ? `calc(${t})` : t})` : _n(r, nd(t));
    },
    lighten(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #fff ${tn(t)})` : zr(r, t);
    },
    darken(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #000 ${tn(t)})` : Fr(r, t);
    }
  });
}
function it(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: d = {},
    shape: c,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://v7.mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Be(20));
  const $ = yt({
    ...i,
    colorSpace: f
  }), g = Qn(e);
  let p = pe(g, {
    mixins: Wa(g.breakpoints, n),
    palette: $,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ja.slice(),
    typography: Ya($, d),
    transitions: ed(a),
    zIndex: {
      ...rd
    }
  });
  if (p = pe(p, m), p = r.reduce((h, u) => pe(h, u), p), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (v, O) => {
      let R;
      for (R in v) {
        const D = v[R];
        if (h.includes(R) && Object.keys(D).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = gt("", R);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: D
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[R] = {};
        }
      }
    };
    Object.keys(p.components).forEach((v) => {
      const O = p.components[v].styleOverrides;
      O && v.startsWith("Mui") && u(O, v);
    });
  }
  return p.unstable_sxConfig = {
    ...Dr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, p.unstable_sx = function(u) {
    return Ze({
      sx: u,
      theme: this
    });
  }, p.toRuntimeSource = no, od(p), p;
}
function id(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const ad = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = id(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function oo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function io(e) {
  return e === "dark" ? ad : [];
}
function dd(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = yt({
    ...r,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...oo(a.mode),
      ...t
    },
    overlays: n || io(a.mode),
    ...i
  };
}
function sd(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ld = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], cd = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const a = {};
      return ld(e.cssVarPrefix).forEach((d) => {
        a[d] = t[d], delete t[d];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", r)]: a,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function ud(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function y(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function tr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : qn(e);
}
function xe(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = rr(tr(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function fd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const be = (e) => {
  try {
    return e();
  } catch {
  }
}, md = (e = "mui") => Oa(e);
function Jr(e, r, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    r[o] = dd({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...d
  } = it({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    },
    colorSpace: e
  });
  return r[o] = {
    ...t,
    palette: a,
    opacity: {
      ...oo(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || io(i)
  }, d;
}
function pd(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: d = sd,
    colorSchemeSelector: c = t.light && t.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...m
  } = e, $ = Object.keys(t)[0], g = n || (t.light && $ !== "light" ? "light" : $), p = md(i), {
    [g]: h,
    light: u,
    dark: v,
    ...O
  } = t, R = {
    ...O
  };
  let D = h;
  if ((g === "dark" && !("dark" in t) || g === "light" && !("light" in t)) && (D = !0), !D)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Be(21, g));
  let E;
  a && (E = "oklch");
  const C = Jr(E, R, D, m, g);
  u && !R.light && Jr(E, R, u, void 0, "light"), v && !R.dark && Jr(E, R, v, void 0, "dark");
  let N = {
    defaultColorScheme: g,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: p,
    colorSchemes: R,
    font: {
      ...Ha(C.typography),
      ...C.font
    },
    spacing: fd(m.spacing)
  };
  Object.keys(N.colorSchemes).forEach((L) => {
    const l = N.colorSchemes[L].palette, A = (S) => {
      const k = S.split("-"), G = k[1], le = k[2];
      return p(S, l[G][le]);
    };
    l.mode === "light" && (y(l.common, "background", "#fff"), y(l.common, "onBackground", "#000")), l.mode === "dark" && (y(l.common, "background", "#000"), y(l.common, "onBackground", "#fff"));
    function x(S, k, G) {
      if (E) {
        let le;
        return S === Me && (le = `transparent ${((1 - G) * 100).toFixed(0)}%`), S === ee && (le = `#000 ${(G * 100).toFixed(0)}%`), S === re && (le = `#fff ${(G * 100).toFixed(0)}%`), `color-mix(in ${E}, ${k}, ${le})`;
      }
      return S(k, G);
    }
    if (ud(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      y(l.Alert, "errorColor", x(ee, a ? p("palette-error-light") : l.error.light, 0.6)), y(l.Alert, "infoColor", x(ee, a ? p("palette-info-light") : l.info.light, 0.6)), y(l.Alert, "successColor", x(ee, a ? p("palette-success-light") : l.success.light, 0.6)), y(l.Alert, "warningColor", x(ee, a ? p("palette-warning-light") : l.warning.light, 0.6)), y(l.Alert, "errorFilledBg", A("palette-error-main")), y(l.Alert, "infoFilledBg", A("palette-info-main")), y(l.Alert, "successFilledBg", A("palette-success-main")), y(l.Alert, "warningFilledBg", A("palette-warning-main")), y(l.Alert, "errorFilledColor", be(() => l.getContrastText(l.error.main))), y(l.Alert, "infoFilledColor", be(() => l.getContrastText(l.info.main))), y(l.Alert, "successFilledColor", be(() => l.getContrastText(l.success.main))), y(l.Alert, "warningFilledColor", be(() => l.getContrastText(l.warning.main))), y(l.Alert, "errorStandardBg", x(re, a ? p("palette-error-light") : l.error.light, 0.9)), y(l.Alert, "infoStandardBg", x(re, a ? p("palette-info-light") : l.info.light, 0.9)), y(l.Alert, "successStandardBg", x(re, a ? p("palette-success-light") : l.success.light, 0.9)), y(l.Alert, "warningStandardBg", x(re, a ? p("palette-warning-light") : l.warning.light, 0.9)), y(l.Alert, "errorIconColor", A("palette-error-main")), y(l.Alert, "infoIconColor", A("palette-info-main")), y(l.Alert, "successIconColor", A("palette-success-main")), y(l.Alert, "warningIconColor", A("palette-warning-main")), y(l.AppBar, "defaultBg", A("palette-grey-100")), y(l.Avatar, "defaultBg", A("palette-grey-400")), y(l.Button, "inheritContainedBg", A("palette-grey-300")), y(l.Button, "inheritContainedHoverBg", A("palette-grey-A100")), y(l.Chip, "defaultBorder", A("palette-grey-400")), y(l.Chip, "defaultAvatarColor", A("palette-grey-700")), y(l.Chip, "defaultIconColor", A("palette-grey-700")), y(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), y(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), y(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), y(l.LinearProgress, "primaryBg", x(re, a ? p("palette-primary-main") : l.primary.main, 0.62)), y(l.LinearProgress, "secondaryBg", x(re, a ? p("palette-secondary-main") : l.secondary.main, 0.62)), y(l.LinearProgress, "errorBg", x(re, a ? p("palette-error-main") : l.error.main, 0.62)), y(l.LinearProgress, "infoBg", x(re, a ? p("palette-info-main") : l.info.main, 0.62)), y(l.LinearProgress, "successBg", x(re, a ? p("palette-success-main") : l.success.main, 0.62)), y(l.LinearProgress, "warningBg", x(re, a ? p("palette-warning-light") : l.warning.main, 0.62)), y(l.Skeleton, "bg", E ? x(Me, a ? p("palette-text-primary") : l.text.primary, 0.11) : `rgba(${A("palette-text-primaryChannel")} / 0.11)`), y(l.Slider, "primaryTrack", x(re, a ? p("palette-primary-main") : l.primary.main, 0.62)), y(l.Slider, "secondaryTrack", x(re, a ? p("palette-secondary-main") : l.secondary.main, 0.62)), y(l.Slider, "errorTrack", x(re, a ? p("palette-error-main") : l.error.main, 0.62)), y(l.Slider, "infoTrack", x(re, a ? p("palette-info-main") : l.info.main, 0.62)), y(l.Slider, "successTrack", x(re, a ? p("palette-success-main") : l.success.main, 0.62)), y(l.Slider, "warningTrack", x(re, a ? p("palette-warning-main") : l.warning.main, 0.62));
      const S = E ? x(ee, a ? p("palette-background-default") : l.background.default, 0.6825) : yr(l.background.default, 0.8);
      y(l.SnackbarContent, "bg", S), y(l.SnackbarContent, "color", be(() => E ? ot.text.primary : l.getContrastText(S))), y(l.SpeedDialAction, "fabHoverBg", yr(l.background.paper, 0.15)), y(l.StepConnector, "border", A("palette-grey-400")), y(l.StepContent, "border", A("palette-grey-400")), y(l.Switch, "defaultColor", A("palette-common-white")), y(l.Switch, "defaultDisabledColor", A("palette-grey-100")), y(l.Switch, "primaryDisabledColor", x(re, a ? p("palette-primary-main") : l.primary.main, 0.62)), y(l.Switch, "secondaryDisabledColor", x(re, a ? p("palette-secondary-main") : l.secondary.main, 0.62)), y(l.Switch, "errorDisabledColor", x(re, a ? p("palette-error-main") : l.error.main, 0.62)), y(l.Switch, "infoDisabledColor", x(re, a ? p("palette-info-main") : l.info.main, 0.62)), y(l.Switch, "successDisabledColor", x(re, a ? p("palette-success-main") : l.success.main, 0.62)), y(l.Switch, "warningDisabledColor", x(re, a ? p("palette-warning-main") : l.warning.main, 0.62)), y(l.TableCell, "border", x(re, Me(a ? p("palette-divider") : l.divider, 1), 0.88)), y(l.Tooltip, "bg", x(Me, a ? p("palette-grey-700") : l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      y(l.Alert, "errorColor", x(re, a ? p("palette-error-light") : l.error.light, 0.6)), y(l.Alert, "infoColor", x(re, a ? p("palette-info-light") : l.info.light, 0.6)), y(l.Alert, "successColor", x(re, a ? p("palette-success-light") : l.success.light, 0.6)), y(l.Alert, "warningColor", x(re, a ? p("palette-warning-light") : l.warning.light, 0.6)), y(l.Alert, "errorFilledBg", A("palette-error-dark")), y(l.Alert, "infoFilledBg", A("palette-info-dark")), y(l.Alert, "successFilledBg", A("palette-success-dark")), y(l.Alert, "warningFilledBg", A("palette-warning-dark")), y(l.Alert, "errorFilledColor", be(() => l.getContrastText(l.error.dark))), y(l.Alert, "infoFilledColor", be(() => l.getContrastText(l.info.dark))), y(l.Alert, "successFilledColor", be(() => l.getContrastText(l.success.dark))), y(l.Alert, "warningFilledColor", be(() => l.getContrastText(l.warning.dark))), y(l.Alert, "errorStandardBg", x(ee, a ? p("palette-error-light") : l.error.light, 0.9)), y(l.Alert, "infoStandardBg", x(ee, a ? p("palette-info-light") : l.info.light, 0.9)), y(l.Alert, "successStandardBg", x(ee, a ? p("palette-success-light") : l.success.light, 0.9)), y(l.Alert, "warningStandardBg", x(ee, a ? p("palette-warning-light") : l.warning.light, 0.9)), y(l.Alert, "errorIconColor", A("palette-error-main")), y(l.Alert, "infoIconColor", A("palette-info-main")), y(l.Alert, "successIconColor", A("palette-success-main")), y(l.Alert, "warningIconColor", A("palette-warning-main")), y(l.AppBar, "defaultBg", A("palette-grey-900")), y(l.AppBar, "darkBg", A("palette-background-paper")), y(l.AppBar, "darkColor", A("palette-text-primary")), y(l.Avatar, "defaultBg", A("palette-grey-600")), y(l.Button, "inheritContainedBg", A("palette-grey-800")), y(l.Button, "inheritContainedHoverBg", A("palette-grey-700")), y(l.Chip, "defaultBorder", A("palette-grey-700")), y(l.Chip, "defaultAvatarColor", A("palette-grey-300")), y(l.Chip, "defaultIconColor", A("palette-grey-300")), y(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), y(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), y(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), y(l.LinearProgress, "primaryBg", x(ee, a ? p("palette-primary-main") : l.primary.main, 0.5)), y(l.LinearProgress, "secondaryBg", x(ee, a ? p("palette-secondary-main") : l.secondary.main, 0.5)), y(l.LinearProgress, "errorBg", x(ee, a ? p("palette-error-main") : l.error.main, 0.5)), y(l.LinearProgress, "infoBg", x(ee, a ? p("palette-info-main") : l.info.main, 0.5)), y(l.LinearProgress, "successBg", x(ee, a ? p("palette-success-main") : l.success.main, 0.5)), y(l.LinearProgress, "warningBg", x(ee, a ? p("palette-warning-main") : l.warning.main, 0.5)), y(l.Skeleton, "bg", E ? x(Me, a ? p("palette-text-primary") : l.text.primary, 0.13) : `rgba(${A("palette-text-primaryChannel")} / 0.13)`), y(l.Slider, "primaryTrack", x(ee, a ? p("palette-primary-main") : l.primary.main, 0.5)), y(l.Slider, "secondaryTrack", x(ee, a ? p("palette-secondary-main") : l.secondary.main, 0.5)), y(l.Slider, "errorTrack", x(ee, a ? p("palette-error-main") : l.error.main, 0.5)), y(l.Slider, "infoTrack", x(ee, a ? p("palette-info-main") : l.info.main, 0.5)), y(l.Slider, "successTrack", x(ee, a ? p("palette-success-main") : l.success.main, 0.5)), y(l.Slider, "warningTrack", x(ee, a ? p("palette-warning-light") : l.warning.main, 0.5));
      const S = E ? x(re, a ? p("palette-background-default") : l.background.default, 0.985) : yr(l.background.default, 0.98);
      y(l.SnackbarContent, "bg", S), y(l.SnackbarContent, "color", be(() => E ? ro.text.primary : l.getContrastText(S))), y(l.SpeedDialAction, "fabHoverBg", yr(l.background.paper, 0.15)), y(l.StepConnector, "border", A("palette-grey-600")), y(l.StepContent, "border", A("palette-grey-600")), y(l.Switch, "defaultColor", A("palette-grey-300")), y(l.Switch, "defaultDisabledColor", A("palette-grey-600")), y(l.Switch, "primaryDisabledColor", x(ee, a ? p("palette-primary-main") : l.primary.main, 0.55)), y(l.Switch, "secondaryDisabledColor", x(ee, a ? p("palette-secondary-main") : l.secondary.main, 0.55)), y(l.Switch, "errorDisabledColor", x(ee, a ? p("palette-error-main") : l.error.main, 0.55)), y(l.Switch, "infoDisabledColor", x(ee, a ? p("palette-info-main") : l.info.main, 0.55)), y(l.Switch, "successDisabledColor", x(ee, a ? p("palette-success-main") : l.success.main, 0.55)), y(l.Switch, "warningDisabledColor", x(ee, a ? p("palette-warning-light") : l.warning.main, 0.55)), y(l.TableCell, "border", x(ee, Me(a ? p("palette-divider") : l.divider, 1), 0.68)), y(l.Tooltip, "bg", x(Me, a ? p("palette-grey-700") : l.grey[700], 0.92));
    }
    a || (xe(l.background, "default"), xe(l.background, "paper"), xe(l.common, "background"), xe(l.common, "onBackground"), xe(l, "divider")), Object.keys(l).forEach((S) => {
      const k = l[S];
      S !== "tonalOffset" && !a && k && typeof k == "object" && (k.main && y(l[S], "mainChannel", rr(tr(k.main))), k.light && y(l[S], "lightChannel", rr(tr(k.light))), k.dark && y(l[S], "darkChannel", rr(tr(k.dark))), k.contrastText && y(l[S], "contrastTextChannel", rr(tr(k.contrastText))), S === "text" && (xe(l[S], "primary"), xe(l[S], "secondary")), S === "action" && (k.active && xe(l[S], "active"), k.selected && xe(l[S], "selected")));
    });
  }), N = r.reduce((L, l) => pe(L, l), N);
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: d,
    getSelector: cd(N),
    enableContrastVars: a
  }, {
    vars: z,
    generateThemeVars: M,
    generateStyleSheets: j
  } = ka(N, T);
  return N.vars = z, Object.entries(N.colorSchemes[N.defaultColorScheme]).forEach(([L, l]) => {
    N[L] = l;
  }), N.generateThemeVars = M, N.generateStyleSheets = j, N.generateSpacing = function() {
    return Yn(m.spacing, pt(this));
  }, N.getColorSchemeSelector = Ma(c), N.spacing = N.generateSpacing(), N.shouldSkipGeneratingVar = d, N.unstable_sxConfig = {
    ...Dr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, N.unstable_sx = function(l) {
    return Ze({
      sx: l,
      theme: this
    });
  }, N.toRuntimeSource = no, N;
}
function nn(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: yt({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function $d(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...a
  } = e, d = i || "light", c = o == null ? void 0 : o[d], f = {
    ...o,
    ...t ? {
      [d]: {
        ...typeof c != "boolean" && c,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return it(e, ...r);
    let m = t;
    "palette" in e || f[d] && (f[d] !== !0 ? m = f[d].palette : d === "dark" && (m = {
      mode: "dark"
    }));
    const $ = it({
      ...e,
      palette: m
    }, ...r);
    return $.defaultColorScheme = d, $.colorSchemes = f, $.palette.mode === "light" && ($.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: $.palette
    }, nn($, "dark", f.dark)), $.palette.mode === "dark" && ($.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: $.palette
    }, nn($, "light", f.light)), $;
  }
  return !t && !("light" in f) && d === "light" && (f.light = !0), pd({
    ...a,
    colorSchemes: f,
    defaultColorScheme: d,
    ...typeof n != "boolean" && n
  }, ...r);
}
const gd = $d(), hd = "$$material";
function yd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bd = (e) => yd(e) && e !== "classes", vd = ha({
  themeId: hd,
  defaultTheme: gd,
  rootShouldForwardProp: bd
}), xd = Ia;
process.env.NODE_ENV !== "production" && (X.node, X.object.isRequired);
function Cd(e) {
  return Pa(e);
}
function wd(e) {
  return gt("MuiSvgIcon", e);
}
fa("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Sd = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${je(r)}`, `fontSize${je(t)}`]
  };
  return oi(o, wd, n);
}, Ed = vd("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${je(t.color)}`], r[`fontSize${je(t.fontSize)}`]];
  }
})(xd(({
  theme: e
}) => {
  var r, t, n, o, i, a, d, c, f, m, $, g, p, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : c.call(d, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : m.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var v, O;
        return {
          props: {
            color: u
          },
          style: {
            color: (O = (v = (e.vars ?? e).palette) == null ? void 0 : v[u]) == null ? void 0 : O.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = ($ = (e.vars ?? e).palette) == null ? void 0 : $.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : h.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), wr = /* @__PURE__ */ Ie.forwardRef(function(r, t) {
  const n = Cd({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: d = "svg",
    fontSize: c = "medium",
    htmlColor: f,
    inheritViewBox: m = !1,
    titleAccess: $,
    viewBox: g = "0 0 24 24",
    ...p
  } = n, h = /* @__PURE__ */ Ie.isValidElement(o) && o.type === "svg", u = {
    ...n,
    color: a,
    component: d,
    fontSize: c,
    instanceFontSize: r.fontSize,
    inheritViewBox: m,
    viewBox: g,
    hasSvgAsChild: h
  }, v = {};
  m || (v.viewBox = g);
  const O = Sd(u);
  return /* @__PURE__ */ b(Ed, {
    as: d,
    className: Un(O.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": $ ? void 0 : !0,
    role: $ ? "img" : void 0,
    ref: t,
    ...v,
    ...p,
    ...h && o.props,
    ownerState: u,
    children: [h ? o.props.children : o, $ ? /* @__PURE__ */ s("title", {
      children: $
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (wr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: X.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: X.object,
  /**
   * @ignore
   */
  className: X.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: X.oneOfType([X.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), X.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: X.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: X.oneOfType([X.oneOf(["inherit", "large", "medium", "small"]), X.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: X.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: X.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: X.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: X.oneOfType([X.arrayOf(X.oneOfType([X.func, X.object, X.bool])), X.func, X.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: X.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: X.string
});
wr.muiName = "SvgIcon";
function ao(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ s(wr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${r}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = wr.muiName, /* @__PURE__ */ Ie.memo(/* @__PURE__ */ Ie.forwardRef(t));
}
const Nd = ao(/* @__PURE__ */ s("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), Ad = ao(/* @__PURE__ */ s("path", {
  d: "M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"
}), "Inbox"), Pd = () => /* @__PURE__ */ s(To, { sx: { p: 0 } }), Id = () => /* @__PURE__ */ b("div", { className: "flex flex-col items-center justify-center h-full py-16 gap-3 bg-secondary-50/30", children: [
  /* @__PURE__ */ s(Ad, { sx: { fontSize: 56, color: "var(--secondary-light)" } }),
  /* @__PURE__ */ s("p", { className: "text-sm font-medium text-secondary-main", children: "Sin registros para mostrar" }),
  /* @__PURE__ */ s("p", { className: "text-xs text-secondary-light", children: "Intenta ajustar el filtro de búsqueda" })
] }), fl = ({
  title: e,
  rows: r,
  columns: t,
  isLoading: n = !1,
  searchTerm: o,
  onSearchChange: i,
  searchPlaceholder: a = "Buscar...",
  getRowId: d,
  extraFilters: c,
  rowHeight: f,
  initialState: m,
  autoHeight: $ = !0
}) => /* @__PURE__ */ b(Do, { sx: {
  p: 2,
  overflow: "hidden",
  boxShadow: "var(--shadow-soft)",
  border: "1px solid var(--secondary-100)",
  borderRadius: "var(--radius-md)"
}, children: [
  /* @__PURE__ */ b(
    Nt,
    {
      direction: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: { xs: "stretch", md: "center" },
      spacing: 2,
      sx: { p: 2, borderBottom: "2px solid var(--secondary-100)" },
      children: [
        /* @__PURE__ */ s(J, { variant: "h6", fontWeight: "bold", children: e }),
        /* @__PURE__ */ b(Nt, { direction: { xs: "column", sm: "row" }, spacing: 2, alignItems: "center", sx: { width: { xs: "100%", md: "auto" } }, children: [
          c,
          i && /* @__PURE__ */ s(
            _e,
            {
              placeholder: a,
              variant: "outlined",
              size: "small",
              value: o || "",
              onChange: (g) => i(g.target.value),
              sx: {
                width: { xs: "100%", sm: 350 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "var(--radius-md)"
                }
              },
              InputProps: {
                startAdornment: /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s(Nd, { sx: { color: "var(--secondary-main)" } }) })
              }
            }
          )
        ] })
      ]
    }
  ),
  /* @__PURE__ */ s(
    Oo,
    {
      rows: r,
      columns: t.map((g) => g.type === "actions" || g.renderCell ? g : {
        ...g,
        renderCell: (p) => /* @__PURE__ */ s("span", { className: "text-gray-500", children: p.value })
      }),
      getRowId: d || ((g) => g.id || g.uuid || Math.random()),
      loading: n,
      pageSizeOptions: [10, 25, 50],
      initialState: m || {
        pagination: { paginationModel: { pageSize: 10 } }
      },
      slots: {
        toolbar: Pd,
        noRowsOverlay: Id
      },
      slotProps: {
        pagination: {
          labelRowsPerPage: "Filas por página:",
          labelDisplayedRows: ({ from: g, to: p, count: h }) => `${g}-${p} de ${h !== -1 ? h : `más de ${p}`}`
        }
      },
      sx: {
        border: "none",
        "& .MuiDataGrid-cell": {
          borderColor: "var(--secondary-100)",
          py: 1.5,
          "&:focus": { outline: "none" }
        },
        "& .MuiDataGrid-columnHeaders": {
          bgcolor: "var(--secondary-50)",
          borderColor: "var(--secondary-200)",
          minHeight: "56px !important",
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
            color: "var(--secondary-dark)",
            textTransform: "uppercase",
            fontSize: "0.75rem"
          }
        },
        "& ::-webkit-scrollbar": { width: "8px", height: "8px" },
        "& ::-webkit-scrollbar-track": { background: "var(--secondary-50)" },
        "& ::-webkit-scrollbar-thumb": { background: "var(--secondary-300)", borderRadius: "4px" }
      },
      autoHeight: $,
      disableRowSelectionOnClick: !0,
      getRowHeight: f ? () => f : () => "auto"
    }
  )
] }), Od = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  xxl: "max-w-4xl",
  xxxl: "max-w-5xl",
  xxxxl: "max-w-6xl",
  xl7: "max-w-7xl",
  full: "max-w-full mx-4"
}, ml = ({
  open: e,
  onClose: r,
  icon: t,
  title: n,
  subtitle: o,
  footer: i,
  children: a,
  size: d = "md"
}) => /* @__PURE__ */ s(Xe, { children: e && /* @__PURE__ */ b(Se, { children: [
  /* @__PURE__ */ s(
    ue.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      onClick: r,
      className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
    },
    "overlay"
  ),
  /* @__PURE__ */ s("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ b(
    ue.div,
    {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 40 },
      transition: { type: "spring", stiffness: 320, damping: 30 },
      onClick: (c) => c.stopPropagation(),
      className: `
                                relative bg-white rounded-2xl shadow-premium w-full border border-secondary/20
                                max-h-[90vh] flex flex-col overflow-hidden
                                ${Od[d]}
                            `,
      children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-4 px-6 py-5 border-b border-border bg-secondary-50/50", children: [
          /* @__PURE__ */ s("div", { className: "p-2.5 bg-primary text-primary-contrast rounded-xl shadow-md shadow-primary/20 flex-shrink-0", children: t }),
          /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ s("h2", { className: "text-lg font-black text-gray-900 leading-tight", children: n }),
            o && (typeof o == "string" ? /* @__PURE__ */ s("p", { className: "text-xs text-gray-500 font-medium mt-0.5", children: o }) : /* @__PURE__ */ s("div", { className: "text-xs text-gray-500 font-medium mt-0.5", children: o }))
          ] }),
          /* @__PURE__ */ s(
            "button",
            {
              onClick: r,
              className: "p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0",
              "aria-label": "Cerrar",
              children: /* @__PURE__ */ s(Te, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto px-6 py-6", children: a }),
        /* @__PURE__ */ s("div", { className: "px-6 py-4 bg-secondary-50 border-t border-border flex items-center justify-end gap-3", children: i })
      ]
    },
    "modal"
  ) })
] }) }), pl = ({
  isOpen: e,
  onClose: r,
  title: t,
  children: n,
  footer: o,
  size: i = "md",
  showCloseButton: a = !0,
  closeOnOverlayClick: d = !0
}) => {
  ze(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [e]);
  const c = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4"
  }, f = () => {
    d && r();
  };
  return /* @__PURE__ */ s(Xe, { children: e && /* @__PURE__ */ b(Se, { children: [
    /* @__PURE__ */ s(
      ue.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: f,
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      }
    ),
    /* @__PURE__ */ s("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ b(
      ue.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.2 },
        className: `bg-white rounded-2xl shadow-premium w-full ${c[i]} max-h-[90vh] overflow-hidden flex flex-col border border-secondary/20`,
        onClick: (m) => m.stopPropagation(),
        children: [
          (t || a) && /* @__PURE__ */ b("div", { className: "flex items-center justify-between p-6 border-b border-border bg-secondary-50/50", children: [
            t && /* @__PURE__ */ s("h2", { className: "text-xl font-semibold text-gray-900", children: t }),
            a && /* @__PURE__ */ s(
              "button",
              {
                onClick: r,
                className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                children: /* @__PURE__ */ s(Te, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s("div", { className: "p-6 overflow-y-auto custom-scrollbar flex-1", children: n }),
          o && /* @__PURE__ */ s("div", { className: "p-6 border-t border-border bg-secondary-50", children: o })
        ]
      }
    ) })
  ] }) });
}, $l = ({
  title: e,
  description: r,
  icon: t,
  iconColor: n = "#f59e0b",
  // Default to a neutral primary blue
  iconBgColor: o = "rgba(255, 183, 17, 0.1)",
  actionButton: i
}) => /* @__PURE__ */ b(W, { sx: {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: { md: "center" },
  gap: 2,
  mb: 1
  // Margen inferior para separar del contenido siguiente
}, children: [
  /* @__PURE__ */ b(W, { children: [
    /* @__PURE__ */ b(J, { variant: "h4", sx: { fontWeight: 900, color: "#111827", display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ s(W, { sx: { p: 1.5, bgcolor: o, borderRadius: "16px", display: "flex", color: n }, children: /* @__PURE__ */ s(t, { size: 32 }) }),
      e
    ] }),
    /* @__PURE__ */ s(J, { variant: "body1", sx: { color: "#6b7280", mt: 0.5, ml: 1 }, children: r })
  ] }),
  i && /* @__PURE__ */ s(W, { children: i })
] }), gl = ({
  isActive: e,
  title: r,
  subtitle: t,
  stats: n,
  backgroundIcon: o
}) => /* @__PURE__ */ b("div", { className: "relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-sm transition-all duration-300", children: [
  /* @__PURE__ */ s("div", { className: `p-4 rounded-xl mb-3 shadow-premium ${e ? "bg-primary text-primary-contrast shadow-primary/20" : "bg-error text-white shadow-red-200"}`, children: e ? /* @__PURE__ */ s(ut, { size: 32 }) : /* @__PURE__ */ s(vo, { size: 32 }) }),
  /* @__PURE__ */ b("div", { className: "text-center z-10", children: [
    /* @__PURE__ */ s("p", { className: "text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase", children: t }),
    /* @__PURE__ */ s("h3", { className: "text-2xl font-black text-gray-900 tracking-tight", children: r })
  ] }),
  n && /* @__PURE__ */ s("div", { className: "flex-1 px-4 text-[10px] font-black tracking-widest text-gray-400 uppercase", children: n }),
  /* @__PURE__ */ s("div", { className: "absolute -bottom-4 -right-4 opacity-[0.03] rotate-12 text-gray-900 pointer-events-none", children: o })
] }), hl = ({ items: e, columns: r = 1, noDataMessage: t, noDataIcon: n }) => e.length === 0 && t ? /* @__PURE__ */ b("div", { className: "flex flex-col items-center justify-center py-10 gap-3 border border-dashed border-gray-200 rounded-xl bg-gray-50/50 w-full", children: [
  /* @__PURE__ */ s(n || _r, { size: 32, className: "text-gray-300" }),
  /* @__PURE__ */ s("p", { className: "text-gray-400 text-xs font-semibold", children: t })
] }) : /* @__PURE__ */ s("div", { className: `grid gap-4 ${r === 2 ? "grid-cols-1 sm:grid-cols-2" : r === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`, children: e.map((i, a) => {
  const d = i.icon, c = i.colSpan === 2 ? "col-span-1 sm:col-span-2" : i.colSpan === 3 ? "col-span-1 sm:col-span-2 md:col-span-3" : "";
  return /* @__PURE__ */ b(
    "div",
    {
      className: `flex items-start gap-4 bg-white p-3 rounded-xl border border-gray-50 shadow-sm transition-all duration-200 hover:border-gray-100 hover:shadow-md group ${c}`,
      children: [
        /* @__PURE__ */ s("div", { className: `p-2 rounded-lg transition-colors duration-200 ${i.highlight ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`, children: /* @__PURE__ */ s(d, { size: 18 }) }),
        /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ s("p", { className: "text-[10px] font-black uppercase tracking-widest group-hover:text-gray-500", children: i.label }),
          /* @__PURE__ */ s("div", { className: `text-sm text-gray-400 break-words whitespace-pre-line ${i.mono ? "font-mono text-xs break-all" : ""}`, children: i.value })
        ] }),
        i.type === "pdf" && i.value !== "No registrado" && /* @__PURE__ */ s("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s(ar, { title: "Visualizar documento PDF", arrow: !0, placement: "top", children: /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
          Je,
          {
            size: "sm",
            variant: "ghost",
            onClick: i.onClick,
            className: "h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200",
            children: /* @__PURE__ */ s(_r, { size: 18 })
          }
        ) }) }) }),
        i.type === "url" && i.value !== "No registrado" && i.value !== "No disponible" && !!i.value && (() => {
          const f = typeof i.value == "string" ? i.value.trim() : "";
          return !f || !(($) => {
            try {
              const g = $.startsWith("http://") || $.startsWith("https://") ? $ : `https://${$}`;
              return new URL(g).hostname.includes(".");
            } catch {
              return !1;
            }
          })(f) ? null : /* @__PURE__ */ s("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s(ar, { title: "Abrir sitio web", arrow: !0, placement: "top", children: /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
            Je,
            {
              size: "sm",
              variant: "ghost",
              onClick: () => {
                if (i.onClick)
                  i.onClick();
                else {
                  const $ = f.startsWith("http://") || f.startsWith("https://") ? f : `https://${f}`;
                  window.open($, "_blank", "noopener,noreferrer");
                }
              },
              className: "h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200",
              children: /* @__PURE__ */ s(Nn, { size: 18 })
            }
          ) }) }) });
        })()
      ]
    },
    a
  );
}) }), yl = ({
  icon: e,
  maxLength: r,
  showCounter: t = !0,
  rows: n,
  multiline: o,
  label: i,
  required: a,
  ...d
}) => {
  var $, g;
  const c = d.value ? String(d.value).length : 0, f = t && r ? `${c} / ${r}` : null;
  return /* @__PURE__ */ b("div", { className: "flex flex-col w-full gap-0.5", children: [
    /* @__PURE__ */ s(
      _e,
      {
        fullWidth: !0,
        variant: "outlined",
        multiline: o,
        minRows: o ? n || 3 : void 0,
        label: a && i ? /* @__PURE__ */ b("span", { children: [
          i,
          " ",
          /* @__PURE__ */ s("span", { className: "text-red-500 font-bold", children: "*" })
        ] }) : i,
        required: !1,
        inputProps: {
          maxLength: r,
          ...d.inputProps,
          style: {
            ...($ = d.inputProps) == null ? void 0 : $.style,
            wordBreak: "break-word",
            backgroundColor: "white"
          }
        },
        helperText: d.helperText,
        InputProps: {
          ...d.InputProps,
          startAdornment: e ? /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center", children: e }) }) : (g = d.InputProps) == null ? void 0 : g.startAdornment
        },
        ...d
      }
    ),
    f && /* @__PURE__ */ s("div", { className: "flex justify-end px-2 mt-1", children: /* @__PURE__ */ s("span", { className: `text-[11px]  tabular-nums tracking-tighter ${d.error ? "text-red-500" : "text-gray-400 opacity-80"}`, children: f }) })
  ] });
}, bl = ({
  label: e,
  value: r,
  onChange: t,
  options: n,
  fullWidth: o = !0,
  icon: i,
  error: a,
  helperText: d,
  disabled: c = !1,
  required: f
}) => {
  const m = f && e ? /* @__PURE__ */ b("span", { children: [
    e,
    " ",
    /* @__PURE__ */ s("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ b(
    Lo,
    {
      fullWidth: o,
      error: a,
      variant: "outlined",
      disabled: c,
      sx: { backgroundColor: "white" },
      children: [
        /* @__PURE__ */ s(Fo, { children: m }),
        /* @__PURE__ */ s(
          zo,
          {
            value: String(r),
            label: m,
            disabled: c,
            onChange: ($) => t(String($.target.value)),
            startAdornment: i ? /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center", children: i }) }) : null,
            children: n.map(($) => /* @__PURE__ */ s(Bo, { value: String($.value), children: $.label }, String($.value)))
          }
        ),
        d && /* @__PURE__ */ s(J, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.5 }, children: d })
      ]
    }
  );
}, vl = ({
  label: e,
  value: r,
  onChange: t,
  options: n,
  fullWidth: o = !0,
  icon: i,
  error: a,
  helperText: d,
  placeholder: c = "Seleccione una opción...",
  loading: f = !1,
  disabled: m = !1,
  required: $
}) => {
  const g = n.find((h) => h.value === r) || null, p = $ && e ? /* @__PURE__ */ b("span", { children: [
    e,
    " ",
    /* @__PURE__ */ s("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ b(W, { className: "w-full", children: [
    /* @__PURE__ */ s(
      ft,
      {
        fullWidth: o,
        options: n,
        loading: f,
        disabled: m,
        getOptionLabel: (h) => h.label || "",
        isOptionEqualToValue: (h, u) => h.value === u.value,
        value: g,
        onChange: (h, u) => {
          t(u ? u.value : "");
        },
        noOptionsText: "No se encontraron resultados",
        loadingText: "Cargando...",
        renderInput: (h) => /* @__PURE__ */ s(
          _e,
          {
            ...h,
            label: p,
            placeholder: c,
            error: a,
            disabled: m,
            variant: "outlined",
            InputProps: {
              ...h.InputProps,
              startAdornment: i ? /* @__PURE__ */ b(Se, { children: [
                /* @__PURE__ */ s(Re, { position: "start", sx: { ml: 1 }, children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center", children: i }) }),
                h.InputProps.startAdornment
              ] }) : h.InputProps.startAdornment,
              style: { backgroundColor: "white" }
            }
          }
        ),
        renderOption: (h, u) => /* @__PURE__ */ ko(W, { component: "li", ...h, key: String(u.value) }, /* @__PURE__ */ s(J, { variant: "body2", children: u.label }))
      }
    ),
    d && /* @__PURE__ */ s(
      J,
      {
        variant: "caption",
        color: a ? "error" : "textSecondary",
        sx: { mt: 0.5, ml: 1.5, display: "block" },
        children: d
      }
    )
  ] });
}, xl = ({
  label: e,
  placeholder: r,
  error: t,
  helperText: n,
  icon: o,
  loading: i,
  required: a,
  fullWidth: d = !0,
  ...c
}) => /* @__PURE__ */ s(
  ft,
  {
    ...c,
    loading: i,
    fullWidth: d,
    renderInput: (f) => /* @__PURE__ */ s(
      _e,
      {
        ...f,
        label: e,
        placeholder: r,
        error: t,
        helperText: n,
        required: a,
        variant: "outlined",
        InputProps: {
          ...f.InputProps,
          startAdornment: o ? /* @__PURE__ */ b(Se, { children: [
            /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center", children: o }) }),
            f.InputProps.startAdornment
          ] }) : f.InputProps.startAdornment
        }
      }
    )
  }
), Cl = ({
  label: e,
  children: r,
  checked: t,
  onChange: n,
  disabled: o = !1,
  color: i = "primary",
  className: a = "",
  description: d
}) => /* @__PURE__ */ s(
  On,
  {
    disabled: o,
    className: `m-0 p-2.5 rounded-xl border transition-all duration-200 w-full ${t ? "bg-primary/5 border-primary/10" : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"} ${a}`,
    control: /* @__PURE__ */ s(
      jo,
      {
        checked: t,
        onChange: (c) => n(c.target.checked),
        color: i,
        disabled: o,
        size: "small",
        sx: {
          padding: "4px"
        }
      }
    ),
    label: /* @__PURE__ */ b(W, { className: "flex flex-col ml-1.5 w-full min-w-0", children: [
      /* @__PURE__ */ s("div", { className: `text-[11px] leading-tight transition-colors w-full min-w-0 ${t ? "text-primary font-bold" : "text-gray-700"}`, children: r || e }),
      d && /* @__PURE__ */ s("span", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5", children: d })
    ] }),
    sx: {
      alignItems: "center",
      width: "100%",
      margin: 0,
      "& .MuiFormControlLabel-label": {
        width: "100%",
        minWidth: 0,
        display: "block"
      }
    }
  }
);
zn.extend(Ho);
const on = {
  xs: { height: "30px", fontSize: "0.75rem", padding: "3px 6px", iconSize: "0.95rem", muiSize: "small" },
  sm: { height: "36px", fontSize: "0.8125rem", padding: "6px 8px", iconSize: "1.1rem", muiSize: "small" },
  small: { height: "36px", fontSize: "0.8125rem", padding: "6px 8px", iconSize: "1.1rem", muiSize: "small" },
  md: { height: "44px", fontSize: "0.875rem", padding: "10px 12px", iconSize: "1.25rem", muiSize: "medium" },
  medium: { height: "44px", fontSize: "0.875rem", padding: "10px 12px", iconSize: "1.25rem", muiSize: "medium" },
  lg: { height: "52px", fontSize: "1rem", padding: "14px 16px", iconSize: "1.4rem", muiSize: "medium" },
  large: { height: "52px", fontSize: "1rem", padding: "14px 16px", iconSize: "1.4rem", muiSize: "medium" }
}, wl = ({
  label: e,
  value: r,
  onChange: t,
  icon: n,
  error: o,
  helperText: i,
  disabled: a,
  required: d,
  size: c = "sm"
}) => {
  const f = d && e ? /* @__PURE__ */ b("span", { children: [
    e,
    " ",
    /* @__PURE__ */ s("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e, m = on[c] || on.sm;
  return /* @__PURE__ */ s(
    Uo,
    {
      label: f,
      format: "DD/MM/YYYY",
      localeText: {
        fieldDayPlaceholder: () => "dd",
        fieldMonthPlaceholder: () => "mm",
        fieldYearPlaceholder: () => "yyyy"
      },
      value: r ? zn(r, ["DD-MM-YYYY", "YYYY-MM-DD"]) : null,
      onChange: ($) => {
        $ && $.isValid() ? t($.format("DD-MM-YYYY")) : t("");
      },
      disabled: a,
      slotProps: {
        textField: {
          fullWidth: !0,
          variant: "outlined",
          size: m.muiSize,
          error: o,
          helperText: i,
          sx: {
            backgroundColor: "white !important",
            borderRadius: "var(--radius-md) !important",
            "& .MuiInputBase-root": {
              height: `${m.height} !important`,
              fontSize: `${m.fontSize} !important`,
              borderRadius: "10px !important"
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: o ? "#ef4444 !important" : "#10b981 !important"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: o ? "#dc2626 !important" : "#059669 !important"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: o ? "#dc2626 !important" : "#0f5a28 !important",
              borderWidth: "2px !important"
            },
            "& .MuiInputLabel-root": {
              color: o ? "#ef4444 !important" : "#047857 !important"
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: o ? "#dc2626 !important" : "#0f5a28 !important"
            },
            "& .MuiInputBase-input": {
              padding: `${m.padding} !important`,
              fontSize: `${m.fontSize} !important`
            },
            "& .MuiInputAdornment-root": {
              marginRight: "2px !important",
              marginLeft: "2px !important"
            },
            "& .MuiIconButton-root": {
              padding: "3px !important",
              color: o ? "#ef4444 !important" : "#10b981 !important"
            },
            "& .MuiSvgIcon-root": {
              fontSize: `${m.iconSize} !important`
            },
            "&:hover": {
              backgroundColor: "#fcfcfc !important"
            },
            "&.Mui-focused": {
              backgroundColor: "white !important"
            }
          },
          slotProps: {
            input: {
              startAdornment: n ? /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center ml-1", children: n }) }) : void 0
            }
          }
        },
        popper: {
          disablePortal: !1,
          // Mantener en portal pero asegurar zIndex
          sx: {
            zIndex: 3e3,
            "& .MuiPaper-root": {
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              border: "1px solid #f0f0f0",
              marginTop: "8px",
              backgroundColor: "white !important"
            }
          }
        },
        actionBar: {
          actions: ["cancel", "accept"],
          sx: {
            "& .MuiButton-root": {
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px",
              px: 3
            },
            "& .MuiButton-textPrimary": {
              color: "primary.main"
            }
          }
        }
      }
    }
  );
}, Sl = ({
  label: e,
  checked: r,
  onChange: t,
  icon: n,
  description: o,
  className: i = "",
  disabled: a = !1
}) => /* @__PURE__ */ s(
  On,
  {
    disabled: a,
    className: `m-0 p-3 rounded-xl border border-transparent transition-all duration-200 w-full ${r ? "bg-primary/5 border-primary/10" : "hover:bg-gray-50"} ${i}`,
    control: /* @__PURE__ */ s(
      Tn,
      {
        checked: r,
        onChange: (d) => t(d.target.checked),
        color: "primary",
        disabled: a
      }
    ),
    label: /* @__PURE__ */ b(W, { className: "flex items-center gap-3 ml-2", children: [
      n && /* @__PURE__ */ s("div", { className: `p-1.5 rounded-lg transition-all duration-300 ${r ? "bg-primary text-white shadow-md shadow-primary/20 scale-110" : "bg-gray-100 text-gray-400"}`, children: Ro.cloneElement(n, { size: 16 }) }),
      /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ s("span", { className: `text-sm font-black tracking-tight transition-colors ${r ? "text-primary" : "text-gray-700"}`, children: e }),
        o && /* @__PURE__ */ s("span", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5", children: o })
      ] })
    ] }),
    sx: {
      "& .MuiFormControlLabel-label": {
        width: "100%"
      }
    }
  }
), El = ({
  label: e,
  placeholder: r = "Escriba y presione Enter...",
  tags: t,
  onTagsChange: n,
  icon: o,
  error: i,
  helperText: a,
  required: d,
  validate: c
}) => /* @__PURE__ */ s(W, { className: "flex flex-col gap-2 w-full", children: /* @__PURE__ */ s(
  ft,
  {
    multiple: !0,
    freeSolo: !0,
    options: [],
    value: t,
    onChange: (f, m) => {
      const $ = m[m.length - 1];
      if (typeof $ == "string") {
        const g = $.trim().replace(/,/g, "");
        if (g && !t.includes(g)) {
          if (c && !c(g)) return;
          n([...t, g]);
        }
      } else
        n(m);
    },
    renderTags: (f, m) => f.map(($, g) => /* @__PURE__ */ s(
      Rn,
      {
        variant: "filled",
        label: $,
        size: "small",
        ...m({ index: g }),
        deleteIcon: /* @__PURE__ */ s(Te, { size: 14 }),
        className: "bg-primary/10 text-primary font-bold border-0"
      }
    )),
    renderInput: (f) => /* @__PURE__ */ s(
      _e,
      {
        ...f,
        label: e,
        placeholder: t.length === 0 ? r : "",
        error: i,
        helperText: a,
        required: d,
        fullWidth: !0,
        InputProps: {
          ...f.InputProps,
          startAdornment: /* @__PURE__ */ b(Se, { children: [
            o && /* @__PURE__ */ s(Re, { position: "start", children: /* @__PURE__ */ s("span", { className: "text-gray-400", children: o }) }),
            f.InputProps.startAdornment
          ] })
        },
        sx: {
          "& .MuiOutlinedInput-root": {
            padding: "8px 12px",
            "& fieldset": { borderColor: "#E5E7EB", borderRadius: "12px" },
            "&:hover fieldset": { borderColor: "#3b82f6" },
            "&.Mui-focused fieldset": { borderColor: "#3b82f6", borderWidth: "2px" },
            minHeight: "56px",
            display: "flex",
            flexWrap: "wrap"
          }
        }
      }
    )
  }
) }), Nl = ({
  icon: e,
  maxLength: r,
  showCounter: t = !0,
  minRows: n = 3,
  label: o,
  required: i,
  ...a
}) => {
  var m, $;
  const d = a.value ? String(a.value).length : 0, c = t && r ? `${d} / ${r}` : null;
  return /* @__PURE__ */ b("div", { className: "flex flex-col w-full gap-0.5", children: [
    /* @__PURE__ */ s(
      _e,
      {
        ...a,
        fullWidth: !0,
        variant: "outlined",
        multiline: !0,
        minRows: n,
        label: i && o ? /* @__PURE__ */ b("span", { children: [
          o,
          " ",
          /* @__PURE__ */ s("span", { className: "text-red-500 font-bold", children: "*" })
        ] }) : o,
        required: !1,
        inputProps: {
          maxLength: r,
          ...a.inputProps,
          style: {
            ...(m = a.inputProps) == null ? void 0 : m.style,
            wordBreak: "break-word"
          }
        },
        InputProps: {
          ...a.InputProps,
          startAdornment: e ? /* @__PURE__ */ s(Re, { position: "start", sx: { alignSelf: "flex-start", mt: 1.5 }, children: /* @__PURE__ */ s("span", { className: "text-gray-400 flex items-center ml-1", children: e }) }) : ($ = a.InputProps) == null ? void 0 : $.startAdornment
        },
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "var(--radius-md) !important",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#fcfcfc"
            },
            // Ajuste para que el texto no se pegue al icono en multiline
            "& textarea": {
              paddingTop: e ? "4px" : "0"
            }
          },
          ...a.sx
        }
      }
    ),
    c && /* @__PURE__ */ s("div", { className: "flex justify-end px-2 mt-1", children: /* @__PURE__ */ s("span", { className: `text-[11px] tabular-nums tracking-tighter ${a.error ? "text-red-500" : "text-gray-400 opacity-80"}`, children: c }) })
  ] });
}, Al = ({
  title: e,
  subtitle: r,
  icon: t,
  children: n,
  className: o = "",
  variant: i = "gray"
}) => /* @__PURE__ */ b(W, { className: `${{
  default: "",
  gray: "p-4 bg-gray-50 rounded-2xl border border-gray-100",
  white: "p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
}[i]} flex flex-col gap-4 ${o}`, children: [
  /* @__PURE__ */ b("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ b(J, { variant: "subtitle1", className: "font-bold flex items-center gap-2 text-primary", children: [
      t && /* @__PURE__ */ s("span", { className: "flex items-center", children: t }),
      e
    ] }),
    r && /* @__PURE__ */ s(J, { variant: "caption", className: "text-gray-500", children: r })
  ] }),
  /* @__PURE__ */ s(W, { className: "w-full", children: n })
] }), Td = [
  "AR",
  // Argentina
  "BO",
  // Bolivia
  "BR",
  // Brasil
  "CL",
  // Chile
  "CO",
  // Colombia
  "CR",
  // Costa Rica
  "CU",
  // Cuba
  "DO",
  // República Dominicana
  "EC",
  // Ecuador
  "SV",
  // El Salvador
  "GT",
  // Guatemala
  "HN",
  // Honduras
  "MX",
  // México
  "NI",
  // Nicaragua
  "PA",
  // Panamá
  "PY",
  // Paraguay
  "PE",
  // Perú
  "PR",
  // Puerto Rico
  "UY",
  // Uruguay
  "VE",
  // Venezuela
  "US",
  // Estados Unidos
  "CA",
  // Canadá
  "ES"
  // España
], Pl = ({
  value: e,
  onChange: r,
  label: t = "Teléfono de Contacto",
  error: n = !1,
  helperText: o,
  onlyCountries: i = Td,
  defaultCountry: a = "CO",
  fullWidth: d = !0,
  variant: c = "outlined",
  ...f
}) => /* @__PURE__ */ s(W, { className: "flex flex-col w-full gap-0.5", children: /* @__PURE__ */ s(
  Wo,
  {
    value: e,
    onChange: r,
    label: t,
    error: n,
    helperText: o,
    onlyCountries: i,
    defaultCountry: a,
    fullWidth: d,
    variant: c,
    ...f,
    style: { backgroundColor: "white" }
  }
) }), Rd = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[2-467])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-7]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]|50"]], ["(\\d{8})", "$1", ["[5-7]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|[67]3)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "(?:400|[5-9]\\d\\d)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-9]"]]]], ET: ["251", "00", "(?:11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[48]\\d{8}|[2-9]\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|4(?:[0-35]|4[16-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1(?:05|[2-9]))", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-6]|80[2-46]", "11|2[02]|33|4[04]|79[1-6]|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], MC: ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-37-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85[02-46-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[0-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[013]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|9[2-9]"]], ["(\\d)(\\d{7})", "$1 $2", ["[267]|904"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[346-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024", "20240"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]", "20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[2-4]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["983[2-57-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[02589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}", [7, 8, 9, 10], [["(\\d{4})(\\d{4,6})", "$1 $2", ["1(?:2[02]|[89])"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[26]|6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[23568]\\d{6}", [7, 9, 10], [["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"], "0$1"], ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["548"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[256]|39|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function kd(e, r) {
  var t = Array.prototype.slice.call(r);
  return t.push(Rd), e.apply(this, t);
}
function an(e, r) {
  e = e.split("-"), r = r.split("-");
  for (var t = e[0].split("."), n = r[0].split("."), o = 0; o < 3; o++) {
    var i = Number(t[o]), a = Number(n[o]);
    if (i > a) return 1;
    if (a > i) return -1;
    if (!isNaN(i) && isNaN(a)) return 1;
    if (isNaN(i) && !isNaN(a)) return -1;
  }
  return e[1] && r[1] ? e[1] > r[1] ? 1 : e[1] < r[1] ? -1 : 0 : !e[1] && r[1] ? 1 : e[1] && !r[1] ? -1 : 0;
}
var Md = {}.constructor;
function Ke(e) {
  return e != null && e.constructor === Md;
}
var Dd = /^\d+$/;
function Ld(e) {
  return Dd.test(e);
}
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, qe(e);
}
function Br(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Fd(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zd(n.key), n);
  }
}
function jr(e, r, t) {
  return r && Fd(e.prototype, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zd(e) {
  var r = Bd(e, "string");
  return qe(r) == "symbol" ? r : r + "";
}
function Bd(e, r) {
  if (qe(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (qe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var jd = "1.2.0", Vd = "1.7.35", dn = " ext. ", ce = /* @__PURE__ */ function() {
  function e(r) {
    Br(this, e), so(r), this.metadata = r, co.call(this, r);
  }
  return jr(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(t) {
        return t !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(t) {
      return this.metadata.countries[t];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(t) {
      return this.getCountryMetadata(t) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(t) {
      if (this.getCountryCodesForCallingCode(t))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[t])
          return !0;
      } else {
        var n = this.countryCallingCodes()[t];
        if (n && n.length === 1 && n[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(t) {
      return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
    /**
     * Selects a telephone numbering plan based on either a country code or a calling code.
     * @param {string} argument — Country code or calling code.
     * @param {string} legacyArgumentCallingCode — Legacy argument: calling code, if the first argument is not passed.
     */
  }, {
    key: "selectNumberingPlan",
    value: function(t, n) {
      var o, i;
      if (t && (Ld(t) ? i = t : o = t), n && (i = n), o && o !== "001") {
        var a = this.getCountryMetadata(o);
        if (!a)
          throw new Error("Unknown country: ".concat(o));
        this.numberingPlan = new sn(a, this);
      } else if (i) {
        if (!this.hasCallingCode(i))
          throw new Error("Unknown calling code: ".concat(i));
        this.numberingPlan = new sn(this.getNumberingPlanMetadata(i), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(t) {
      var n = this.countryCallingCodes()[t];
      if (n)
        return n.length === 1 && n[0].length === 3 ? void 0 : n;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(t) {
      var n = this.getCountryCodesForCallingCode(t);
      if (n)
        return n[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(t) {
      var n = this.getCountryCodeForCallingCode(t);
      if (n)
        return this.getCountryMetadata(n);
      if (this.nonGeographic()) {
        var o = this.nonGeographic()[t];
        if (o)
          return o;
      } else {
        var i = this.countryCallingCodes()[t];
        if (i && i.length === 1 && i[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(t) {
      return this.numberingPlan.type(t);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), sn = /* @__PURE__ */ function() {
  function e(r, t) {
    Br(this, e), this.globalMetadataObject = t, this.metadata = r, co.call(this, t.metadata);
  }
  return jr(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // When multiple countries share the same calling code,
    // all phone number formatting rules are included in the metadata
    // of the "default" country for that calling code.
    // Any other countries' metdata doesn't include any formatting rules.
    // Google developers said that such storage architecture was chosen for performance reasons.
    //
    // For example, for NANPA region ("North American Numbering Plan Administration",
    // which includes USA, Canada, Cayman Islands, Bahamas, etc) all formatting rules
    // are contained in the metadata of `US` country.
    //
    // This is not public API.
    //
  }, {
    key: "_getDefaultCountryMetadataForThisCallingCode",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Deprecated.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this._getDefaultCountryMetadataForThisCallingCode();
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(t) {
      return t[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var t = this, n = this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || [];
      return n.map(function(o) {
        return new Ud(o, t);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(t) {
      return t[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(t) {
      if (this.hasTypes() && ln(this.types(), t))
        return new Wd(ln(this.types(), t), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? dn : this.metadata[13] || dn;
    }
  }]);
}(), Ud = /* @__PURE__ */ function() {
  function e(r, t) {
    Br(this, e), this._format = r, this.metadata = t;
  }
  return jr(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Hd.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Hd = /^\(?\$1\)?$/, Wd = /* @__PURE__ */ function() {
  function e(r, t) {
    Br(this, e), this.type = r, this.metadata = t;
  }
  return jr(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
}();
function ln(e, r) {
  switch (r) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function so(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Ke(e) || !Ke(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ke(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Gd(e) + ": " + e, "."));
}
var Gd = function(r) {
  return qe(r);
};
function lo(e, r) {
  var t = new ce(r);
  if (t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Yd(e, r) {
  return r.countries.hasOwnProperty(e);
}
function co(e) {
  var r = e.version;
  typeof r == "number" ? (this.v1 = r === 1, this.v2 = r === 2, this.v3 = r === 3, this.v4 = r === 4) : r ? an(r, jd) === -1 ? this.v2 = !0 : an(r, Vd) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function bt(e, r, t) {
  return Qd(e, void 0, r, t);
}
function Qd(e, r, t, n) {
  t && (n = new ce(n.metadata), n.selectNumberingPlan(t));
  var o = n.type(r), i = o && o.possibleLengths() || n.possibleLengths();
  if (!i)
    return "IS_POSSIBLE";
  var a = e.length, d = i[0];
  return d === a ? "IS_POSSIBLE" : d > a ? "TOO_SHORT" : i[i.length - 1] < a ? "TOO_LONG" : i.indexOf(a, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Kd(e, r, t) {
  r === void 0 && (r = {});
  var n = new ce(t);
  if (r.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    n.selectNumberingPlan(e.country || e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!n.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      n.selectNumberingPlan(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      n.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (n.possibleLengths())
    return uo(e.phone || e.nationalNumber, n);
  if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function uo(e, r) {
  switch (bt(e, void 0, r)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Ne(e, r) {
  return e = e || "", new RegExp("^(?:" + r + ")$").test(e);
}
function Xd(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Jd(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jd(e, r) {
  if (e) {
    if (typeof e == "string") return cn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? cn(e, r) : void 0;
  }
}
function cn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var Zd = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function vt(e, r, t) {
  if (r = r || {}, !(!e.country && !e.countryCallingCode)) {
    var n = new ce(t);
    n.selectNumberingPlan(e.country || e.countryCallingCode);
    var o = r.v2 ? e.nationalNumber : e.phone;
    if (Ne(o, n.nationalNumberPattern())) {
      if (Zr(o, "FIXED_LINE", n))
        return n.type("MOBILE") && n.type("MOBILE").pattern() === "" || !n.type("MOBILE") || Zr(o, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var i = Xd(Zd), a; !(a = i()).done; ) {
        var d = a.value;
        if (Zr(o, d, n))
          return d;
      }
    }
  }
}
function Zr(e, r, t) {
  var n = t.type(r);
  return !n || !n.pattern() || n.possibleLengths() && n.possibleLengths().indexOf(e.length) < 0 ? !1 : Ne(e, n.pattern());
}
function qd(e, r, t) {
  r = r || {};
  var n = new ce(t);
  if (n.selectNumberingPlan(e.country || e.countryCallingCode), n.hasTypes())
    return vt(e, r, n.metadata) !== void 0;
  var o = r.v2 ? e.nationalNumber : e.phone;
  return Ne(o, n.nationalNumberPattern());
}
var _d = /^[A-Z]{2}$/;
function es(e) {
  return _d.test(e);
}
function rs(e, r) {
  var t, n, o = new ce(r);
  return es(e) ? (t = e, o.selectNumberingPlan(t), n = o.countryCallingCode()) : n = e, {
    country: t,
    callingCode: n
  };
}
function ts(e, r, t) {
  var n = new ce(t), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(i) {
    return ns(r, i, t);
  }) : [];
}
function ns(e, r, t) {
  var n = new ce(t);
  return n.selectNumberingPlan(r), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var xt = 2, os = 17, is = 3, he = "0-9０-９٠-٩۰-۹", as = "-‐-―−ー－", ds = "／/", ss = "．.", ls = "  ­​⁠　", cs = "()（）［］\\[\\]", us = "~⁓∼～", Sr = "".concat(as).concat(ds).concat(ss).concat(ls).concat(cs).concat(us), Ct = "+＋", fs = new RegExp("([" + he + "])");
function ms(e, r, t, n) {
  if (r) {
    var o = new ce(n);
    o.selectNumberingPlan(r || t);
    var i = new RegExp(o.IDDPrefix());
    if (e.search(i) === 0) {
      e = e.slice(e.match(i)[0].length);
      var a = e.match(fs);
      if (!(a && a[1] != null && a[1].length > 0 && a[1] === "0"))
        return e;
    }
  }
}
function ps(e, r) {
  if (e && r.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp("^(?:" + r.numberingPlan.nationalPrefixForParsing() + ")"), n = t.exec(e);
    if (n) {
      var o, i, a = n.length - 1, d = a > 0 && n[a];
      if (r.nationalPrefixTransformRule() && d)
        o = e.replace(t, r.nationalPrefixTransformRule()), a > 1 && (i = n[1]);
      else {
        var c = n[0];
        o = e.slice(c.length), d && (i = n[1]);
      }
      var f;
      if (d) {
        var m = e.indexOf(n[1]), $ = e.slice(0, m);
        $ === r.numberingPlan.nationalPrefix() && (f = r.numberingPlan.nationalPrefix());
      } else
        f = n[0];
      return {
        nationalNumber: o,
        nationalPrefix: f,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function $s(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = gs(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gs(e, r) {
  if (e) {
    if (typeof e == "string") return un(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? un(e, r) : void 0;
  }
}
function un(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function hs(e, r, t) {
  for (var n = new ce(t), o = $s(r), i; !(i = o()).done; ) {
    var a = i.value;
    if (n.selectNumberingPlan(a), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return a;
    } else if (vt({
      phone: e,
      country: a
    }, void 0, n.metadata))
      return a;
  }
}
function fo(e, r) {
  var t = r.nationalNumber, n = r.metadata, o = n.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : hs(t, o, n.metadata);
}
function at(e, r, t) {
  var n = ps(e, t), o = n.carrierCode, i = n.nationalNumber;
  if (i !== e) {
    if (!ys(e, i, t))
      return {
        nationalNumber: e
      };
    if (t.numberingPlan.possibleLengths() && (r || (r = fo(t.numberingPlan.callingCode(), {
      nationalNumber: i,
      metadata: t
    })), !bs(i, r, t)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: i,
    carrierCode: o
  };
}
function ys(e, r, t) {
  return !(Ne(e, t.nationalNumberPattern()) && !Ne(r, t.nationalNumberPattern()));
}
function bs(e, r, t) {
  switch (bt(e, r, t)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function vs(e, r, t, n, o) {
  if (!(t || n))
    return {
      number: e
    };
  var i = t ? lo(t, o) : n;
  if (e.indexOf(i) === 0) {
    var a = new ce(o);
    a.selectNumberingPlan(t || n);
    var d = e.slice(i.length), c = at(d, void 0, a), f = c.nationalNumber, m = at(e, void 0, a), $ = m.nationalNumber;
    if (!Ne($, a.nationalNumberPattern()) && Ne(f, a.nationalNumberPattern()) || bt($, void 0, a) === "TOO_LONG")
      return {
        countryCallingCode: i,
        number: d
      };
  }
  return {
    number: e
  };
}
function mo(e, r, t, n, o) {
  if (!e)
    return {};
  var i;
  if (e[0] !== "+") {
    var a = ms(e, t, n, o);
    if (a && a !== e)
      i = !0, e = "+" + a;
    else {
      if (t || n) {
        var d = vs(e, r, t, n, o), c = d.countryCallingCode, f = d.number;
        if (c)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: c,
            number: f
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  for (var m = new ce(o), $ = 2; $ - 1 <= is && $ <= e.length; ) {
    var g = e.slice(1, $);
    if (m.hasCallingCode(g))
      return m.selectNumberingPlan(g), {
        countryCallingCodeSource: i ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: g,
        number: e.slice($)
      };
    $++;
  }
  return {};
}
function xs(e) {
  return e.replace(new RegExp("[".concat(Sr, "]+"), "g"), " ").trim();
}
var Cs = /(\$\d)/;
function ws(e, r, t) {
  var n = t.useInternationalFormat, o = t.withNationalPrefix, i = e.replace(new RegExp(r.pattern()), n ? r.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    o && r.nationalPrefixFormattingRule() ? r.format().replace(Cs, r.nationalPrefixFormattingRule()) : r.format()
  ));
  return n ? xs(i) : i;
}
var Ss = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Es(e, r, t) {
  var n = new ce(t);
  if (n.selectNumberingPlan(e || r), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Ss.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var Ns = ";ext=", Ye = function(r) {
  return "([".concat(he, "]{1,").concat(r, "})");
};
function po(e) {
  var r = "20", t = "15", n = "9", o = "6", i = "[  \\t,]*", a = "[:\\.．]?[  \\t,-]*", d = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", f = "(?:[xｘ#＃~～]|int|ｉｎｔ)", m = "[- ]+", $ = "[  \\t]*", g = "(?:,{2}|;)", p = Ns + Ye(r), h = i + c + a + Ye(r) + d, u = i + f + a + Ye(n) + d, v = m + Ye(o) + "#", O = $ + g + a + Ye(t) + d, R = $ + "(?:,)+" + a + Ye(n) + d;
  return p + "|" + h + "|" + u + "|" + v + "|" + O + "|" + R;
}
var As = "[" + he + "]{" + xt + "}", Ps = "[" + Ct + "]{0,1}(?:[" + Sr + "]*[" + he + "]){3,}[" + Sr + he + "]*", Is = new RegExp("^[" + Ct + "]{0,1}(?:[" + Sr + "]*[" + he + "]){1,2}$", "i"), Os = Ps + // Phone number extensions
"(?:" + po() + ")?", Ts = new RegExp(
  // Either a short two-digit-only phone number
  "^" + As + "$|^" + Os + "$",
  "i"
);
function Rs(e) {
  return e.length >= xt && Ts.test(e);
}
function ks(e) {
  return Is.test(e);
}
function Ms(e) {
  var r = e.number, t = e.ext;
  if (!r)
    return "";
  if (r[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(r).concat(t ? ";ext=" + t : "");
}
var fn = {
  formatExtension: function(r, t, n) {
    return "".concat(r).concat(n.ext()).concat(t);
  }
};
function Ds(e, r, t, n) {
  t ? t = zs({}, fn, t) : t = fn;
  var o = new ce(n);
  if (e.country && e.country !== "001") {
    if (!o.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    o.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    o.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var i = o.countryCallingCode(), a = t.v2 ? e.nationalNumber : e.phone, d;
  switch (r) {
    case "NATIONAL":
      return a ? (d = Er(a, e.carrierCode, "NATIONAL", o, t), qr(d, e.ext, o, t.formatExtension)) : "";
    case "INTERNATIONAL":
      return a ? (d = Er(a, null, "INTERNATIONAL", o, t), d = "+".concat(i, " ").concat(d), qr(d, e.ext, o, t.formatExtension)) : "+".concat(i);
    case "E.164":
      return "+".concat(i).concat(a);
    case "RFC3966":
      return Ms({
        number: "+".concat(i).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!t.fromCountry)
        return;
      var c = Fs(a, e.carrierCode, i, t.fromCountry, o);
      return c ? qr(c, e.ext, o, t.formatExtension) : void 0;
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(r, '"'));
  }
}
function Er(e, r, t, n, o) {
  var i = Ls(n.formats(), e);
  return i ? ws(e, i, {
    useInternationalFormat: t === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function Ls(e, r) {
  return Bs(e, function(t) {
    if (t.leadingDigitsPatterns().length > 0) {
      var n = t.leadingDigitsPatterns()[t.leadingDigitsPatterns().length - 1];
      if (r.search(n) !== 0)
        return !1;
    }
    return Ne(r, t.pattern());
  });
}
function qr(e, r, t, n) {
  return r ? n(e, r, t) : e;
}
function Fs(e, r, t, n, o) {
  var i = lo(n, o.metadata);
  if (i === t) {
    var a = Er(e, r, "NATIONAL", o);
    return t === "1" ? t + " " + a : a;
  }
  var d = Es(n, void 0, o.metadata);
  if (d)
    return "".concat(d, " ").concat(t, " ").concat(Er(e, null, "INTERNATIONAL", o));
}
function zs() {
  for (var e = 1, r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  for (; e < t.length; ) {
    if (t[e])
      for (var o in t[e])
        t[0][o] = t[e][o];
    e++;
  }
  return t[0];
}
function Bs(e, r) {
  for (var t = 0; t < e.length; ) {
    if (r(e[t]))
      return e[t];
    t++;
  }
}
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, sr(e);
}
function mn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function pn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? mn(Object(t), !0).forEach(function(n) {
      js(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function js(e, r, t) {
  return (r = $o(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Vs(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Us(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $o(n.key), n);
  }
}
function Hs(e, r, t) {
  return r && Us(e.prototype, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $o(e) {
  var r = Ws(e, "string");
  return sr(r) == "symbol" ? r : r + "";
}
function Ws(e, r) {
  if (sr(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gs = /* @__PURE__ */ function() {
  function e(r, t, n) {
    if (Vs(this, e), !r)
      throw new TypeError("First argument is required");
    if (typeof r != "string")
      throw new TypeError("First argument must be a string");
    if (r[0] === "+" && !t)
      throw new TypeError("`metadata` argument not passed");
    if (Ke(t) && Ke(t.countries)) {
      n = t;
      var o = r;
      if (!Ys.test(o))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var i = mo(o, void 0, void 0, void 0, n), a = i.countryCallingCode, d = i.number;
      if (t = d, r = a, !t)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!t)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof t != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    so(n);
    var c = rs(r, n), f = c.country, m = c.callingCode;
    this.country = f, this.countryCallingCode = m, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return Hs(e, [{
    key: "setExt",
    value: function(t) {
      this.ext = t;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : ts(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Kd(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return qd(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var t = new ce(this.getMetadata());
      return t.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(t) {
      return this.number === t.number && this.ext === t.ext;
    }
    // `validateLength()` method was originally meant to be an equivalent for `validatePhoneNumberLength()`.
    //
    // Later, it became apparent that it's not really a true equivalent.
    // The reason is that a `PhoneNumber` instance is not created
    // when the phone number string is too short for it to be considered a valid phone number:
    // * When there must be at least 2 national (significant) number digits: `"1"`.
    // * When the country calling code part of an international number is incomplete: `"+12"`.
    //
    // So leaving this `validateLength()` method here would suggest a hidden anti-pattern
    // of using it instead of `validatePhoneNumberLength()` while ignoring
    // the "too short to be even possible" case from phone number length validation.
    // And ignoring that case wouldn't make any sense in a real-world application
    // because it would still be a valid case that should be handled.
    //
    // Because of that, this method was eventually commented out in order to not introduce
    // that kind of an anti-pattern.
    //
    // validateLength() {
    // 	const result = checkNumberLength(
    // 		this.nationalNumber,
    // 		undefined,
    // 		this.getMetadata()
    // 	)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return vt(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(t, n) {
      return Ds(this, t, n ? pn(pn({}, n), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(t) {
      return this.format("NATIONAL", t);
    }
  }, {
    key: "formatInternational",
    value: function(t) {
      return this.format("INTERNATIONAL", t);
    }
  }, {
    key: "getURI",
    value: function(t) {
      return this.format("RFC3966", t);
    }
  }]);
}(), Ys = /^\+\d+$/;
function dt(e) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, dt(e);
}
function Qs(e, r, t) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ks(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Xs(e, r, t) {
  return r = cr(r), Js(e, wt() ? Reflect.construct(r, t || [], cr(e).constructor) : r.apply(e, t));
}
function Js(e, r) {
  if (r && (dt(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Zs(e);
}
function Zs(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qs(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), r && lr(e, r);
}
function st(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return st = function(n) {
    if (n === null || !e0(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return _s(n, arguments, cr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), lr(o, n);
  }, st(e);
}
function _s(e, r, t) {
  if (wt()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e.bind.apply(e, n))();
  return t && lr(o, t.prototype), o;
}
function wt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wt = function() {
    return !!e;
  })();
}
function e0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function lr(e, r) {
  return lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, lr(e, r);
}
function cr(e) {
  return cr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cr(e);
}
var Ce = /* @__PURE__ */ function(e) {
  function r(t) {
    var n;
    return Ks(this, r), n = Xs(this, r, [t]), Object.setPrototypeOf(n, r.prototype), n.name = n.constructor.name, n;
  }
  return qs(r, e), Qs(r);
}(/* @__PURE__ */ st(Error)), $n = new RegExp("(?:" + po() + ")$", "i");
function r0(e) {
  var r = e.search($n);
  if (r < 0)
    return {};
  for (var t = e.slice(0, r), n = e.match($n), o = 1; o < n.length; ) {
    if (n[o])
      return {
        number: t,
        ext: n[o]
      };
    o++;
  }
}
var t0 = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function n0(e) {
  return t0[e];
}
function o0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = i0(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i0(e, r) {
  if (e) {
    if (typeof e == "string") return gn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? gn(e, r) : void 0;
  }
}
function gn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function hn(e) {
  for (var r = "", t = o0(e.split("")), n; !(n = t()).done; ) {
    var o = n.value;
    r += a0(o, r) || "";
  }
  return r;
}
function a0(e, r, t) {
  return e === "+" ? r ? void 0 : "+" : n0(e);
}
var go = "+", d0 = "[\\-\\.\\(\\)]?", yn = "([" + he + "]|" + d0 + ")", s0 = "^\\" + go + yn + "*[" + he + "]" + yn + "*$", l0 = new RegExp(s0, "g"), lt = he, c0 = "[" + lt + "]+((\\-)*[" + lt + "])*", u0 = "a-zA-Z", f0 = "[" + u0 + "]+((\\-)*[" + lt + "])*", m0 = "^(" + c0 + "\\.)*" + f0 + "\\.?$", p0 = new RegExp(m0, "g"), bn = "tel:", ct = ";phone-context=", $0 = ";isub=";
function g0(e) {
  var r = e.indexOf(ct);
  if (r < 0)
    return null;
  var t = r + ct.length;
  if (t >= e.length)
    return "";
  var n = e.indexOf(";", t);
  return n >= 0 ? e.substring(t, n) : e.substring(t);
}
function h0(e) {
  return e === null ? !0 : e.length === 0 ? !1 : l0.test(e) || p0.test(e);
}
function y0(e, r) {
  var t = r.extractFormattedPhoneNumber, n = g0(e);
  if (!h0(n))
    throw new Ce("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = t(e) || "";
  else {
    o = "", n.charAt(0) === go && (o += n);
    var i = e.indexOf(bn), a;
    i >= 0 ? a = i + bn.length : a = 0;
    var d = e.indexOf(ct);
    o += e.substring(a, d);
  }
  var c = o.indexOf($0);
  if (c > 0 && (o = o.substring(0, c)), o !== "")
    return o;
}
var b0 = 250, v0 = new RegExp("[" + Ct + he + "]"), x0 = new RegExp("[^" + he + "#]+$");
function C0(e, r, t) {
  r = r || {};
  var n = new ce(t);
  if (r.defaultCountry && !n.hasCountry(r.defaultCountry))
    throw r.v2 ? new Ce("INVALID_COUNTRY") : new Error("Unknown country: ".concat(r.defaultCountry));
  var o = S0(e, r.v2, r.extract), i = o.number, a = o.ext, d = o.error;
  if (!i) {
    if (r.v2)
      throw d === "TOO_SHORT" ? new Ce("TOO_SHORT") : new Ce("NOT_A_NUMBER");
    return {};
  }
  var c = N0(
    i,
    r.defaultCountry,
    r.defaultCallingCode,
    // If `country` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if `countryCallingCode` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if neither `country` nor `countryCallingCode` are returned, no numbering plan will be selected in `metadata`.
    n
  ), f = c.country, m = c.nationalNumber, $ = c.countryCallingCode, g = c.countryCallingCodeSource, p = c.carrierCode;
  if (!n.hasSelectedNumberingPlan()) {
    if (r.v2)
      throw new Ce("INVALID_COUNTRY");
    return {};
  }
  if (!m || m.length < xt) {
    if (r.v2)
      throw new Ce("TOO_SHORT");
    return {};
  }
  if (m.length > os) {
    if (r.v2)
      throw new Ce("TOO_LONG");
    return {};
  }
  if (r.v2) {
    var h = new Gs($, m, n.metadata);
    return f && (h.country = f), p && (h.carrierCode = p), a && (h.ext = a), h.__countryCallingCodeSource = g, h;
  }
  var u = (r.extended ? n.hasSelectedNumberingPlan() : f) ? Ne(m, n.nationalNumberPattern()) : !1;
  return r.extended ? {
    country: f,
    countryCallingCode: $,
    carrierCode: p,
    valid: u,
    possible: u ? !0 : !!(r.extended === !0 && n.possibleLengths() && uo(m, n)),
    phone: m,
    ext: a
  } : u ? E0(f, m, a) : {};
}
function w0(e, r, t) {
  if (e) {
    if (e.length > b0) {
      if (t)
        throw new Ce("TOO_LONG");
      return;
    }
    if (r === !1)
      return e;
    var n = e.search(v0);
    if (!(n < 0))
      return e.slice(n).replace(x0, "");
  }
}
function S0(e, r, t) {
  var n = y0(e, {
    extractFormattedPhoneNumber: function(a) {
      return w0(a, t, r);
    }
  });
  if (!n)
    return {};
  if (!Rs(n))
    return ks(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = r0(n);
  return o.ext ? o : {
    number: n
  };
}
function E0(e, r, t) {
  var n = {
    country: e,
    phone: r
  };
  return t && (n.ext = t), n;
}
function N0(e, r, t, n) {
  var o = mo(
    hn(e),
    void 0,
    // `defaultCountry` and `defaultCallingCode` are only used to detect
    // if it's an "international" phone number or not. They won't be used
    // to derive the resulting `countryCallingCode` from them, or anything like that.
    r,
    t,
    n.metadata
  ), i = o.countryCallingCodeSource, a = o.countryCallingCode, d = o.number, c;
  if (a)
    n.selectNumberingPlan(a);
  else if (d && (r || t))
    r ? (c = r, n.selectNumberingPlan(r), a = n.numberingPlan.callingCode()) : (n.selectNumberingPlan(t), a = t);
  else return {};
  if (!d)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: a
    };
  var f = at(hn(d), void 0, n), m = f.nationalNumber, $ = f.carrierCode, g = fo(a, {
    nationalNumber: m,
    metadata: n
  });
  return g && (c = g, g === "001" || n.selectNumberingPlan(c)), {
    country: c,
    countryCallingCode: a,
    countryCallingCodeSource: i,
    nationalNumber: m,
    carrierCode: $
  };
}
function ur(e) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ur(e);
}
function vn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function xn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vn(Object(t), !0).forEach(function(n) {
      A0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function A0(e, r, t) {
  return (r = P0(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function P0(e) {
  var r = I0(e, "string");
  return ur(r) == "symbol" ? r : r + "";
}
function I0(e, r) {
  if (ur(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function O0(e, r, t) {
  return C0(e, xn(xn({}, r), {}, {
    v2: !0
  }), t);
}
function fr(e) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, fr(e);
}
function Cn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function T0(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Cn(Object(t), !0).forEach(function(n) {
      R0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function R0(e, r, t) {
  return (r = k0(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function k0(e) {
  var r = M0(e, "string");
  return fr(r) == "symbol" ? r : r + "";
}
function M0(e, r) {
  if (fr(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function D0(e, r) {
  return B0(e) || z0(e, r) || F0(e, r) || L0();
}
function L0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F0(e, r) {
  if (e) {
    if (typeof e == "string") return wn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? wn(e, r) : void 0;
  }
}
function wn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function z0(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, o, i, a, d = [], c = !0, f = !1;
    try {
      if (i = (t = t.call(e)).next, r !== 0) for (; !(c = (n = i.call(t)).done) && (d.push(n.value), d.length !== r); c = !0) ;
    } catch (m) {
      f = !0, o = m;
    } finally {
      try {
        if (!c && t.return != null && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (f) throw o;
      }
    }
    return d;
  }
}
function B0(e) {
  if (Array.isArray(e)) return e;
}
function j0(e) {
  var r = Array.prototype.slice.call(e), t = D0(r, 4), n = t[0], o = t[1], i = t[2], a = t[3], d, c, f;
  if (typeof n == "string")
    d = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    a ? (c = i, f = a) : (c = void 0, f = i), o && (c = T0({
      defaultCountry: o
    }, c));
  else if (Ke(o))
    i ? (c = o, f = i) : f = o;
  else throw new Error("Invalid second argument: ".concat(o));
  return {
    text: d,
    options: c,
    metadata: f
  };
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, mr(e);
}
function Sn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function En(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sn(Object(t), !0).forEach(function(n) {
      V0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function V0(e, r, t) {
  return (r = U0(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function U0(e) {
  var r = H0(e, "string");
  return mr(r) == "symbol" ? r : r + "";
}
function H0(e, r) {
  if (mr(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function W0(e, r, t) {
  r && r.defaultCountry && !Yd(r.defaultCountry, t) && (r = En(En({}, r), {}, {
    defaultCountry: void 0
  }));
  try {
    return O0(e, r, t);
  } catch (n) {
    if (!(n instanceof Ce)) throw n;
  }
}
function G0() {
  var e = j0(arguments), r = e.text, t = e.options, n = e.metadata;
  return W0(r, t, n);
}
function Y0() {
  return kd(G0, arguments);
}
const Il = ({ value: e }) => {
  if (!e) return /* @__PURE__ */ s("span", { className: "text-gray-400 italic", children: "-" });
  try {
    const r = Y0(e);
    if (r && r.country) {
      const t = `https://flagcdn.com/${r.country.toLowerCase()}.svg`;
      return /* @__PURE__ */ b("div", { className: "flex items-center gap-2.5 font-mono h-full", children: [
        /* @__PURE__ */ s(
          "img",
          {
            src: t,
            alt: r.country,
            style: {
              width: "20px",
              height: "14px",
              objectFit: "cover",
              borderRadius: "2px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              flexShrink: 0
            },
            title: r.country
          }
        ),
        /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 font-medium whitespace-nowrap", children: r.formatInternational() })
      ] });
    }
  } catch (r) {
    console.error("Error parsing phone number inside PhoneCell:", r);
  }
  return /* @__PURE__ */ s("span", { className: "text-sm text-gray-700", children: e });
}, Ol = ({
  label: e = "Subir archivo",
  accept: r = "application/pdf",
  onFileSelect: t,
  onFileRemove: n,
  onView: o,
  previewUrl: i,
  helperText: a,
  recommendedText: d = "Solo archivos PDF (máx. 5MB)",
  maxSizeMB: c,
  maxSize: f = 5,
  error: m = !1,
  value: $,
  disabled: g = !1
}) => {
  const p = c || f, h = a || d, [u, v] = oe(null), [O, R] = oe(!1), [D, E] = oe(null), [C, N] = oe(!1), T = ir(null), z = !!u || !!i, M = (S) => {
    var G;
    const k = (G = S.target.files) == null ? void 0 : G[0];
    k && j(k);
  }, j = (S) => {
    if (E(null), r) {
      const G = r.split(",").map((P) => P.trim().toLowerCase()), le = S.type.toLowerCase(), Ae = S.name.toLowerCase();
      if (!G.some((P) => P.startsWith(".") ? Ae.endsWith(P) : P.includes("*") ? new RegExp("^" + P.replace(/\*/g, ".*") + "$").test(le) : le === P)) {
        E(`El tipo de archivo no es válido (${S.name}).`);
        return;
      }
    }
    if (S.size > p * 1024 * 1024) {
      E(`El archivo supera el límite de ${p}MB`);
      return;
    }
    v(S), N(!0);
    const k = new FileReader();
    k.onload = () => {
      const G = k.result;
      t(G, S), N(!1);
    }, k.onerror = () => {
      E("Error al leer el archivo"), N(!1);
    }, k.readAsDataURL(S);
  }, L = (S) => {
    S.stopPropagation(), v(null), E(null), t(null, null), n && n(), T.current && (T.current.value = "");
  };
  return /* @__PURE__ */ b(W, { className: "w-full space-y-2", children: [
    e && /* @__PURE__ */ s(J, { variant: "caption", className: "font-semibold text-gray-700", children: e }),
    /* @__PURE__ */ b(
      "div",
      {
        onClick: () => {
          var S;
          return (S = T.current) == null ? void 0 : S.click();
        },
        onDragOver: (S) => {
          S.preventDefault(), R(!0);
        },
        onDragLeave: () => {
          R(!1);
        },
        onDrop: (S) => {
          var G;
          S.preventDefault(), R(!1);
          const k = (G = S.dataTransfer.files) == null ? void 0 : G[0];
          k && j(k);
        },
        className: `
                    relative group cursor-pointer border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${O ? "border-primary bg-primary/5 scale-[1.02]" : "border-gray-200 bg-gray-50/50 hover:border-primary/50 hover:bg-white"}
                    ${m || D ? "border-red-300 bg-red-50" : ""}
                `,
        children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "file",
              ref: T,
              onChange: M,
              accept: r,
              className: "hidden"
            }
          ),
          C ? /* @__PURE__ */ b(W, { className: "w-full flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ s(kn, { className: "w-32 rounded-full" }),
            /* @__PURE__ */ s(J, { variant: "caption", className: "text-gray-400", children: "Procesando archivo..." })
          ] }) : z ? /* @__PURE__ */ b("div", { className: "flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2", children: [
            /* @__PURE__ */ s("div", { className: "bg-primary/10 p-2 rounded-lg text-primary", children: /* @__PURE__ */ s(or, { size: 20 }) }),
            /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ s(J, { variant: "body2", className: "font-bold text-gray-700 truncate", children: u ? u.name : "Archivo cargado" }),
              u && /* @__PURE__ */ b(J, { variant: "caption", className: "text-gray-400", children: [
                (u.size / 1024 / 1024).toFixed(2),
                " MB"
              ] })
            ] }),
            /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ s(ut, { size: 18, className: "text-emerald-500" }),
              o && /* @__PURE__ */ s(ar, { title: "Ver archivo", arrow: !0, placement: "top", children: /* @__PURE__ */ s(
                Le,
                {
                  size: "small",
                  onClick: (S) => {
                    S.stopPropagation(), o();
                  },
                  className: "text-gray-400 hover:text-primary",
                  children: /* @__PURE__ */ s(_r, { size: 16 })
                }
              ) }),
              /* @__PURE__ */ s(Le, { size: "small", onClick: L, className: "text-gray-400 hover:text-red-500", children: /* @__PURE__ */ s(Te, { size: 16 }) })
            ] })
          ] }) : /* @__PURE__ */ b("div", { className: "flex flex-col items-center gap-1 text-center", children: [
            /* @__PURE__ */ s("div", { className: "p-3 bg-gray-100 group-hover:bg-primary/10 rounded-full text-gray-400 group-hover:text-primary transition-colors", children: /* @__PURE__ */ s(An, { size: 24 }) }),
            /* @__PURE__ */ s(J, { variant: "body2", className: "font-medium text-gray-600", children: "Haz clic o arrastra un archivo" }),
            /* @__PURE__ */ s(J, { variant: "caption", className: "text-gray-400", children: h })
          ] })
        ]
      }
    ),
    D && /* @__PURE__ */ b(W, { className: "flex items-center gap-1.5 mt-1 text-red-500 text-xs animate-in fade-in", children: [
      /* @__PURE__ */ s(Pn, { size: 14 }),
      /* @__PURE__ */ s("span", { children: D })
    ] })
  ] });
}, Tl = ({
  label: e = "Subir archivo",
  accept: r = "image/png,image/jpeg,image/jpg,image/webp",
  icon: t,
  onFileSelect: n,
  onImageSelect: o,
  helperText: i = "Formatos soportados: JPG, PNG, WEBP (máx. 5MB)",
  maxSizeMB: a = 5,
  error: d = !1,
  disabled: c = !1
}) => {
  const [f, m] = oe(null), [$, g] = oe(!1), [p, h] = oe(null), [u, v] = oe(!1), O = ir(null), R = (M, j) => {
    n && n(M, j), o && o(M, j);
  }, D = (M) => {
    var L;
    const j = (L = M.target.files) == null ? void 0 : L[0];
    j && E(j);
  }, E = (M) => {
    if (h(null), r && r !== "*/*") {
      const L = r.split(",").map((S) => S.trim().toLowerCase()), l = M.type.toLowerCase(), A = M.name.toLowerCase();
      if (!L.some((S) => {
        if (S.startsWith(".")) return A.endsWith(S);
        if (S.endsWith("/*")) {
          const k = S.split("/")[0];
          return l.startsWith(`${k}/`);
        }
        return S === l;
      })) {
        h(`El tipo de archivo no es válido. Formatos permitidos: ${r}`);
        return;
      }
    } else if (!M.type.startsWith("image/")) {
      h("El tipo de archivo no es válido. Se requiere una imagen (JPG, PNG, WEBP)");
      return;
    }
    if (M.size > a * 1024 * 1024) {
      h(`El archivo supera el límite de ${a}MB`);
      return;
    }
    m(M), v(!0);
    const j = new FileReader();
    j.onload = () => {
      const l = j.result.split(",")[1];
      R(l, M), v(!1);
    }, j.onerror = () => {
      h("Error al leer el archivo"), v(!1);
    }, j.readAsDataURL(M);
  }, C = (M) => {
    M.stopPropagation(), m(null), h(null), R(null, null), O.current && (O.current.value = "");
  };
  return /* @__PURE__ */ b(W, { className: "w-full space-y-2", children: [
    e && /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ s("div", { className: "p-2 bg-primary/10 rounded-lg text-primary", children: t || /* @__PURE__ */ s(or, { size: 18 }) }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s("p", { className: `text-sm font-bold text-gray-700 ${d ? "text-red-500" : "text-gray-500"}`, children: e }) })
    ] }),
    /* @__PURE__ */ b(
      "div",
      {
        onClick: () => {
          var M;
          return !c && ((M = O.current) == null ? void 0 : M.click());
        },
        onDragOver: (M) => {
          c || (M.preventDefault(), g(!0));
        },
        onDragLeave: () => {
          c || g(!1);
        },
        onDrop: (M) => {
          var L;
          if (c) return;
          M.preventDefault(), g(!1);
          const j = (L = M.dataTransfer.files) == null ? void 0 : L[0];
          j && E(j);
        },
        className: `
                    relative group border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${c ? "border-gray-200 bg-gray-100/50 cursor-not-allowed opacity-60" : "cursor-pointer hover:border-primary/50 hover:bg-white"}
                    ${$ && !c ? "border-primary bg-primary/5 scale-[1.02]" : "border-gray-200 bg-gray-50/50"}
                    ${(d || p) && !c ? "border-red-300 bg-red-50" : ""}
                `,
        children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "file",
              ref: O,
              onChange: D,
              accept: r,
              className: "hidden"
            }
          ),
          u ? /* @__PURE__ */ b(W, { className: "w-full flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ s(kn, { className: "w-32 rounded-full" }),
            /* @__PURE__ */ s(J, { variant: "caption", className: "text-gray-400", children: "Procesando archivo..." })
          ] }) : f ? /* @__PURE__ */ b("div", { className: "flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2", children: [
            /* @__PURE__ */ s("div", { className: "bg-primary/10 p-2 rounded-lg text-primary", children: t || /* @__PURE__ */ s(or, { size: 20 }) }),
            /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ s(J, { variant: "body2", className: "font-bold text-gray-700 truncate", children: f.name }),
              /* @__PURE__ */ b(J, { variant: "caption", className: "text-gray-400", children: [
                (f.size / 1024 / 1024).toFixed(2),
                " MB"
              ] })
            ] }),
            /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ s(ut, { size: 18, className: "text-emerald-500" }),
              /* @__PURE__ */ s(
                Le,
                {
                  size: "small",
                  onClick: C,
                  disabled: c,
                  className: "text-gray-400 hover:text-red-500",
                  children: /* @__PURE__ */ s(Te, { size: 18 })
                }
              )
            ] })
          ] }) : /* @__PURE__ */ b(Se, { children: [
            /* @__PURE__ */ s("div", { className: "bg-white p-3 rounded-2xl shadow-md text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ s(An, { size: 28 }) }),
            /* @__PURE__ */ b("div", { className: "text-center", children: [
              /* @__PURE__ */ s(J, { variant: "body2", className: "font-bold text-gray-600", children: "Haz clic o arrastra un archivo" }),
              /* @__PURE__ */ s(J, { variant: "caption", className: "text-gray-400", children: i })
            ] })
          ] })
        ]
      }
    ),
    (d || p) && /* @__PURE__ */ b(J, { variant: "caption", className: "text-red-500 flex items-center gap-1 font-medium mt-1", children: [
      /* @__PURE__ */ s(Pn, { size: 14 }),
      " ",
      p || "Campo requerido"
    ] })
  ] });
}, Rl = ({
  open: e,
  onClose: r,
  fileUuid: t,
  fileUrl: n,
  title: o = "Vista Previa del Documento",
  fileName: i = "documento.pdf",
  fetchBlobUrl: a,
  getFileBlobUrl: d,
  onDownloadCustom: c,
  onDownloadFile: f
}) => {
  const [m, $] = oe(""), [g, p] = oe(!0), [h, u] = oe(null), [v, O] = oe(!1), [R, D] = oe({ x: 0, y: 0 }), [E, C] = oe(!1), N = ir({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0
  });
  ze(() => {
    if (!e || !t && !n && !a) return;
    let x = !0;
    return (async () => {
      try {
        p(!0);
        let k = "";
        if (n)
          k = n;
        else if (a)
          k = await a();
        else if (t && d)
          k = await d(t);
        else
          throw new Error("No se proporcionó una función de descarga o URL para el archivo.");
        x && ($(k), u(null));
      } catch (k) {
        console.error("Error loading PDF:", k), x && u("No se pudo cargar el documento. Verifique su conexión o permisos.");
      } finally {
        x && p(!1);
      }
    })(), () => {
      x = !1, m && m.startsWith("blob:") && window.URL.revokeObjectURL(m);
    };
  }, [e, t, n, a, d]), ze(() => {
    if (e && v) {
      const S = Math.max(20, window.innerWidth - 640 - 30);
      D({ x: S, y: 60 });
    }
  }, [e, v]);
  const T = () => {
    O(!1), r();
  }, z = async () => {
    if (c)
      await c();
    else if (t && f)
      await f(t, i);
    else if (m) {
      const x = document.createElement("a");
      x.href = m, x.download = i, document.body.appendChild(x), x.click(), document.body.removeChild(x);
    }
  }, M = () => {
    m && window.open(m, "_blank", "noopener,noreferrer");
  }, j = () => {
    O((x) => !x);
  }, L = (x) => {
    if (v && !x.target.closest("button, a, input, .MuiIconButton-root, .MuiChip-root")) {
      C(!0), N.current = {
        startX: x.clientX,
        startY: x.clientY,
        posX: R.x,
        posY: R.y
      };
      try {
        x.currentTarget.setPointerCapture(x.pointerId);
      } catch {
      }
    }
  }, l = (x) => {
    if (!E || !v) return;
    const S = x.clientX - N.current.startX, k = x.clientY - N.current.startY, G = Math.max(10, Math.min(window.innerWidth - 250, N.current.posX + S)), le = Math.max(10, Math.min(window.innerHeight - 100, N.current.posY + k));
    D({ x: G, y: le });
  }, A = (x) => {
    if (E) {
      C(!1);
      try {
        x.currentTarget.releasePointerCapture(x.pointerId);
      } catch {
      }
    }
  };
  return /* @__PURE__ */ b(
    Mn,
    {
      open: e,
      onClose: T,
      maxWidth: v ? !1 : "lg",
      fullWidth: !v,
      disableEnforceFocus: !0,
      hideBackdrop: v,
      disableScrollLock: v,
      slotProps: {
        backdrop: {
          sx: v ? { backgroundColor: "transparent" } : {}
        }
      },
      sx: v ? {
        pointerEvents: "none",
        zIndex: 1400,
        "& .MuiDialog-container": {
          pointerEvents: "none",
          display: "block"
        }
      } : {
        zIndex: 1400
      },
      PaperProps: {
        elevation: v ? 24 : 6,
        sx: v ? {
          position: "fixed",
          left: `${R.x}px`,
          top: `${R.y}px`,
          width: "min(640px, calc(100vw - 40px))",
          height: "min(82vh, 850px)",
          margin: 0,
          maxWidth: "none",
          maxHeight: "none",
          pointerEvents: "auto",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
          transition: E ? "none" : "box-shadow 0.2s ease",
          overflow: "hidden"
        } : {
          borderRadius: "16px",
          overflow: "hidden"
        }
      },
      children: [
        /* @__PURE__ */ b(
          Dn,
          {
            onPointerDown: L,
            onPointerMove: l,
            onPointerUp: A,
            sx: {
              m: 0,
              p: 1.5,
              px: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid",
              borderColor: "divider",
              bgcolor: v ? "primary.50" : "white",
              cursor: v ? E ? "grabbing" : "grab" : "default",
              userSelect: "none",
              touchAction: "none"
            },
            children: [
              /* @__PURE__ */ b(W, { sx: { display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }, children: [
                /* @__PURE__ */ s(W, { sx: {
                  p: 1,
                  bgcolor: "error.lighter",
                  color: "error.main",
                  borderRadius: "10px",
                  display: "flex",
                  flexShrink: 0
                }, children: /* @__PURE__ */ s(or, { size: 18 }) }),
                /* @__PURE__ */ b(W, { sx: { minWidth: 0 }, children: [
                  /* @__PURE__ */ b(W, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                    /* @__PURE__ */ s(J, { variant: "subtitle2", fontWeight: 800, lineHeight: 1.2, noWrap: !0, children: "Vista Previa del Documento" }),
                    v && /* @__PURE__ */ s(
                      Rn,
                      {
                        size: "small",
                        icon: /* @__PURE__ */ s(Et, { size: 12, className: "text-primary-600" }),
                        label: "Flotante / Arrastrable",
                        variant: "outlined",
                        color: "primary",
                        sx: { height: 20, fontSize: "0.65rem", fontWeight: 700 }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s(J, { variant: "caption", color: "text.secondary", noWrap: !0, sx: { display: "block", maxWidth: v ? "260px" : "400px" }, children: o })
                ] })
              ] }),
              v && /* @__PURE__ */ s(W, { sx: { display: "flex", alignItems: "center", color: "text.disabled", opacity: 0.7 }, children: /* @__PURE__ */ s(xo, { size: 20 }) }),
              /* @__PURE__ */ b(W, { sx: { display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }, children: [
                /* @__PURE__ */ s(ar, { title: v ? "Acoplar modal al centro" : "Desacoplar ventana flotante (para comparar con formulario)", children: /* @__PURE__ */ s(
                  Le,
                  {
                    onClick: j,
                    size: "small",
                    color: v ? "primary" : "default",
                    sx: {
                      bgcolor: v ? "primary.100" : "grey.100",
                      "&:hover": { bgcolor: v ? "primary.200" : "grey.200" },
                      borderRadius: "8px",
                      p: "6px"
                    },
                    children: v ? /* @__PURE__ */ s(Co, { size: 16 }) : /* @__PURE__ */ s(Et, { size: 16 })
                  }
                ) }),
                m && /* @__PURE__ */ s(ar, { title: "Abrir en pestaña nueva", children: /* @__PURE__ */ s(
                  Le,
                  {
                    onClick: M,
                    size: "small",
                    sx: {
                      bgcolor: "grey.100",
                      "&:hover": { bgcolor: "grey.200" },
                      borderRadius: "8px",
                      p: "6px"
                    },
                    children: /* @__PURE__ */ s(Nn, { size: 16 })
                  }
                ) }),
                /* @__PURE__ */ s(
                  Je,
                  {
                    variant: "primary",
                    size: "sm",
                    onClick: z,
                    className: "text-xs h-8 px-2.5 shadow-sm",
                    icon: In,
                    children: "Descargar"
                  }
                ),
                /* @__PURE__ */ s(
                  Le,
                  {
                    onClick: T,
                    size: "small",
                    sx: {
                      color: "text.secondary",
                      ml: 0.5,
                      "&:hover": { bgcolor: "error.lighter", color: "error.main" }
                    },
                    children: /* @__PURE__ */ s(Te, { size: 18 })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ s(Ln, { sx: { p: 0, bgcolor: "grey.50", height: v ? "calc(100% - 56px)" : "75vh", overflow: "hidden" }, children: /* @__PURE__ */ s(W, { sx: { position: "relative", width: "100%", height: "100%" }, children: g ? /* @__PURE__ */ b(W, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", bgcolor: "white" }, children: [
          /* @__PURE__ */ s("div", { className: "w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" }),
          /* @__PURE__ */ s(J, { variant: "body2", color: "text.secondary", fontWeight: 600, children: "Cargando documento seguro..." })
        ] }) : h ? /* @__PURE__ */ b(W, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", bgcolor: "white", p: 4, textAlign: "center" }, children: [
          /* @__PURE__ */ s(or, { size: 64, className: "text-red-100 mb-4" }),
          /* @__PURE__ */ s(J, { variant: "h6", color: "text.primary", gutterBottom: !0, children: "Error al cargar" }),
          /* @__PURE__ */ s(J, { variant: "body2", color: "text.secondary", sx: { mb: 3 }, children: h }),
          /* @__PURE__ */ s(Je, { variant: "secondary", onClick: T, children: "Cerrar Ventana" })
        ] }) : /* @__PURE__ */ s(
          "iframe",
          {
            src: `${m}#toolbar=1`,
            title: o,
            className: "w-full h-full border-none"
          }
        ) }) })
      ]
    }
  );
}, kl = ({
  open: e,
  onClose: r,
  fileUuid: t,
  imageUrl: n,
  src: o,
  title: i = "Vista Previa de la Imagen",
  fileName: a = "imagen.jpg",
  fetchBlobUrl: d,
  getFileBlobUrl: c,
  onDownloadCustom: f,
  onDownloadFile: m
}) => {
  const [$, g] = oe(""), [p, h] = oe(!0), [u, v] = oe(null);
  return ze(() => {
    if (!e) return;
    const R = o || n;
    if (!t && !d && !R) return;
    let D = !0, E = "";
    return (async () => {
      try {
        h(!0);
        let N = "";
        if (R)
          N = R;
        else if (d)
          N = await d();
        else if (t && c)
          N = await c(t);
        else
          throw new Error("No se proporcionó una función de descarga o URL para la imagen.");
        D && (E = N, g(N), v(null));
      } catch (N) {
        console.error("Error loading Image:", N), D && v("No se pudo cargar la imagen. Verifique su conexión o permisos.");
      } finally {
        D && h(!1);
      }
    })(), () => {
      D = !1, E && E.startsWith("blob:") && window.URL.revokeObjectURL(E);
    };
  }, [e, t, n, o, d, c]), /* @__PURE__ */ b(
    Mn,
    {
      open: e,
      onClose: r,
      maxWidth: "md",
      fullWidth: !0,
      disableEnforceFocus: !0,
      className: "rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ b(Dn, { sx: {
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "white"
        }, children: [
          /* @__PURE__ */ b(W, { sx: { display: "flex", flex: 1, alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ s(W, { sx: {
              p: 1,
              bgcolor: "primary.lighter",
              color: "primary.main",
              borderRadius: "12px",
              display: "flex"
            }, children: /* @__PURE__ */ s(wo, { size: 20 }) }),
            /* @__PURE__ */ b(W, { children: [
              /* @__PURE__ */ s(J, { variant: "subtitle1", fontWeight: 800, lineHeight: 1.2, children: "Visualización de Imagen" }),
              /* @__PURE__ */ s(J, { variant: "caption", color: "text.secondary", children: i })
            ] })
          ] }),
          /* @__PURE__ */ b(W, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ s(
              Je,
              {
                variant: "primary",
                size: "sm",
                onClick: async () => {
                  if (f)
                    await f();
                  else if (t && m)
                    await m(t, a);
                  else if ($) {
                    const R = document.createElement("a");
                    R.href = $, R.download = a, document.body.appendChild(R), R.click(), document.body.removeChild(R);
                  }
                },
                className: "text-xs h-8 px-3 shadow-sm font-bold",
                icon: In,
                children: "Descargar"
              }
            ),
            /* @__PURE__ */ s(
              Le,
              {
                onClick: r,
                size: "small",
                sx: {
                  color: "text.secondary",
                  "&:hover": { bgcolor: "error.lighter", color: "error.main" }
                },
                children: /* @__PURE__ */ s(Te, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s(Ln, { sx: { p: 0, bgcolor: "#0f172a", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }, children: p ? /* @__PURE__ */ b(W, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, p: 4 }, children: [
          /* @__PURE__ */ s("div", { className: "w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" }),
          /* @__PURE__ */ s(J, { variant: "body2", sx: { color: "white" }, children: "Cargando imagen..." })
        ] }) : u ? /* @__PURE__ */ b(W, { sx: { p: 4, textAlign: "center" }, children: [
          /* @__PURE__ */ s(J, { variant: "body1", color: "error", gutterBottom: !0, children: u }),
          /* @__PURE__ */ s(Je, { variant: "secondary", size: "sm", onClick: r, className: "mt-2", children: "Cerrar" })
        ] }) : /* @__PURE__ */ s(
          "img",
          {
            src: $,
            alt: i,
            className: "max-w-full max-h-[75vh] object-contain mx-auto select-none"
          }
        ) })
      ]
    }
  );
}, Ml = ({
  placeholder: e = "Buscar...",
  value: r,
  onChange: t,
  onClear: n,
  className: o = "",
  debounce: i = !1,
  debounceDelay: a = 300
}) => {
  const [d, c] = oe(r || ""), [f, m] = oe(null), $ = (p) => {
    const h = p.target.value;
    if (c(h), i) {
      f && clearTimeout(f);
      const u = setTimeout(() => {
        t == null || t(h);
      }, a);
      m(u);
    } else
      t == null || t(h);
  }, g = () => {
    c(""), t == null || t(""), n == null || n();
  };
  return /* @__PURE__ */ b("div", { className: `relative ${o}`, children: [
    /* @__PURE__ */ s(
      So,
      {
        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
        size: 20
      }
    ),
    /* @__PURE__ */ s(
      "input",
      {
        type: "text",
        value: i ? d : r,
        onChange: $,
        placeholder: e,
        className: "w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      }
    ),
    (i ? d : r) && /* @__PURE__ */ s(
      "button",
      {
        onClick: g,
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
        children: /* @__PURE__ */ s(Te, { size: 18 })
      }
    )
  ] });
}, Dl = ({
  title: e,
  subtitle: r,
  icon: t,
  checked: n,
  onChange: o,
  disabled: i = !1,
  labelTag: a
}) => /* @__PURE__ */ b(
  "div",
  {
    onClick: i ? void 0 : o,
    className: `
                group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer
                ${n ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50"}
                ${i ? "opacity-50 cursor-not-allowed" : ""}
            `,
    children: [
      /* @__PURE__ */ s("div", { className: `
                p-3 rounded-xl transition-colors
                ${n ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}
            `, children: t || /* @__PURE__ */ s(Eo, { size: 20 }) }),
      /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-2 mb-0.5", children: [
          /* @__PURE__ */ s("h4", { className: `text-sm font-black ${n ? "text-primary" : "text-gray-900"}`, children: e }),
          a && /* @__PURE__ */ s("span", { className: "text-[10px] font-black px-2 py-0.5 rounded bg-gray-100 text-gray-400 lowercase tracking-tighter", children: a })
        ] }),
        r && /* @__PURE__ */ s("p", { className: "text-xs font-semibold text-gray-500 leading-relaxed", children: r })
      ] }),
      /* @__PURE__ */ s("div", { onClick: (d) => d.stopPropagation(), children: /* @__PURE__ */ s(
        Tn,
        {
          size: "small",
          checked: n,
          onChange: o,
          disabled: i,
          sx: {
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "var(--primary-main)",
              "& + .MuiSwitch-track": {
                backgroundColor: "var(--primary-main)",
                opacity: 0.5
              }
            }
          }
        }
      ) })
    ]
  }
), Ll = ({
  open: e,
  message: r = "Procesando, por favor espere..."
}) => /* @__PURE__ */ s(
  Vo,
  {
    sx: {
      color: "#fff",
      zIndex: (t) => t.zIndex.drawer + 9999,
      backdropFilter: "blur(4px)",
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    open: e,
    children: /* @__PURE__ */ b(
      W,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        className: "bg-white/95 p-6 rounded-2xl shadow-2xl border border-emerald-100 text-gray-800 max-w-sm text-center",
        children: [
          /* @__PURE__ */ s(Fn, { color: "success", size: 48 }),
          /* @__PURE__ */ s(J, { variant: "body1", className: "font-bold text-gray-800", children: r })
        ]
      }
    )
  }
), Fl = ({
  message: e,
  size: r = 40,
  color: t = "success",
  className: n = "",
  minHeight: o = "200px"
}) => /* @__PURE__ */ b(
  W,
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: o,
    gap: 2,
    className: `p-6 ${n}`,
    children: [
      /* @__PURE__ */ s(Fn, { color: t, size: r }),
      e && /* @__PURE__ */ s(J, { variant: "body2", className: "text-gray-500 font-medium animate-pulse text-center", children: e })
    ]
  }
), zl = ({
  permission: e,
  hasPermission: r,
  checkPermission: t,
  fallback: n = null,
  children: o
}) => {
  let i = !0;
  return r !== void 0 ? i = r : t && e !== void 0 && (i = t(e)), i ? /* @__PURE__ */ s(Se, { children: o }) : /* @__PURE__ */ s(Se, { children: n });
}, Bl = ({
  portalTitle: e = "Portal Institucional",
  portalSubtitle: r = "Universidad Simón Bolívar",
  user: t,
  onLogout: n,
  notifications: o = [],
  unreadCount: i = 0,
  onNotificationClick: a,
  onMarkAllAsRead: d,
  rightActions: c
}) => {
  const [f, m] = oe(!1), [$, g] = oe(!1), p = ir(null), h = ir(null);
  return ze(() => {
    const u = (v) => {
      const O = v.target;
      p.current && !p.current.contains(O) && m(!1), h.current && !h.current.contains(O) && g(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), /* @__PURE__ */ s("header", { className: "bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30", children: /* @__PURE__ */ s("div", { className: "px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ b("div", { className: "flex-1", children: [
      /* @__PURE__ */ s("h1", { className: "text-xl md:text-2xl font-bold text-gray-800 tracking-tight leading-tight", children: e }),
      /* @__PURE__ */ s("p", { className: "text-xs md:text-sm text-gray-500 font-medium", children: r })
    ] }),
    /* @__PURE__ */ b("div", { className: "flex items-center space-x-4 ml-4", children: [
      c,
      /* @__PURE__ */ b("div", { className: "relative", ref: h, children: [
        /* @__PURE__ */ b(
          "button",
          {
            onClick: () => g(!$),
            className: "relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer",
            title: "Notificaciones",
            children: [
              /* @__PURE__ */ s(No, { size: 20 }),
              i > 0 && /* @__PURE__ */ s("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        /* @__PURE__ */ s(Xe, { children: $ && /* @__PURE__ */ b(
          ue.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
            className: "absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden",
            children: [
              /* @__PURE__ */ b("div", { className: "p-4 border-b border-gray-100 flex items-center justify-between", children: [
                /* @__PURE__ */ b("div", { children: [
                  /* @__PURE__ */ s("h3", { className: "font-bold text-gray-900 text-sm", children: "Notificaciones" }),
                  i > 0 && /* @__PURE__ */ b("p", { className: "text-xs text-gray-500 mt-0.5", children: [
                    i,
                    " sin leer"
                  ] })
                ] }),
                d && i > 0 && /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: d,
                    className: "text-xs text-primary font-semibold hover:underline cursor-pointer",
                    children: "Marcar leídas"
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { className: "max-h-96 overflow-y-auto custom-scrollbar", children: o.length === 0 ? /* @__PURE__ */ s("div", { className: "p-6 text-center text-xs text-gray-400", children: "No tienes notificaciones" }) : o.map((u) => /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => a && a(u),
                  className: `p-3.5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${u.read ? "" : "bg-emerald-50/40"}`,
                  children: [
                    /* @__PURE__ */ s("p", { className: "font-bold text-xs text-gray-900", children: u.title }),
                    /* @__PURE__ */ s("p", { className: "text-xs text-gray-600 mt-0.5 line-clamp-2", children: u.message }),
                    u.time && /* @__PURE__ */ s("p", { className: "text-[10px] text-gray-400 mt-1", children: u.time })
                  ]
                },
                u.id
              )) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ b("div", { className: "relative", ref: p, children: [
        /* @__PURE__ */ b(
          "button",
          {
            onClick: () => m(!f),
            className: "flex items-center space-x-3 p-1.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ s("div", { className: "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm", children: t != null && t.avatarUrl ? /* @__PURE__ */ s("img", { src: t.avatarUrl, alt: t.username || "Usuario", className: "w-full h-full object-cover rounded-xl" }) : t != null && t.username ? t.username.charAt(0).toUpperCase() : /* @__PURE__ */ s(Ao, { size: 18 }) }),
              /* @__PURE__ */ b("div", { className: "hidden md:block text-left", children: [
                /* @__PURE__ */ s("p", { className: "text-sm font-bold text-gray-800 leading-tight", children: (t == null ? void 0 : t.username) || "Usuario" }),
                /* @__PURE__ */ s("p", { className: "text-[11px] text-gray-400 font-medium", children: (t == null ? void 0 : t.rol) || (t == null ? void 0 : t.email) || "Institucional" })
              ] }),
              /* @__PURE__ */ s(Po, { size: 14, className: "text-gray-400 hidden md:block" })
            ]
          }
        ),
        /* @__PURE__ */ s(Xe, { children: f && /* @__PURE__ */ b(
          ue.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
            className: "absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden",
            children: [
              /* @__PURE__ */ b("div", { className: "px-4 py-2.5 border-b border-gray-100 bg-gray-50/50", children: [
                /* @__PURE__ */ s("p", { className: "text-xs font-bold text-gray-900 truncate", children: (t == null ? void 0 : t.username) || "Usuario" }),
                (t == null ? void 0 : t.email) && /* @__PURE__ */ s("p", { className: "text-[10px] text-gray-400 truncate mt-0.5", children: t.email })
              ] }),
              n && /* @__PURE__ */ b(
                "button",
                {
                  onClick: n,
                  className: "w-full flex items-center px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition-colors font-semibold cursor-pointer",
                  children: [
                    /* @__PURE__ */ s(Io, { size: 14, className: "mr-2" }),
                    "Cerrar Sesión"
                  ]
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] }) }) });
}, Q0 = "data:image/png;base64,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", jl = ({
  menuItems: e = [],
  currentPath: r = "",
  onNavigate: t,
  logoSrc: n = Q0,
  user: o,
  onLogout: i,
  LinkComponent: a
}) => {
  var N;
  const [d, c] = oe(!1), [f, m] = oe(!1), [$, g] = oe([]), [p, h] = oe(""), [u, v] = oe(
    typeof window < "u" ? window.innerWidth : 1200
  );
  ze(() => {
    const T = () => v(window.innerWidth);
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, []);
  const O = u >= 1024;
  ze(() => {
    O || m(!1);
  }, [r, O]);
  const R = (T) => {
    g(
      (z) => z.includes(T) ? z.filter((M) => M !== T) : [...z, T]
    );
  }, D = e.filter(
    (T) => T.label.toLowerCase().includes(p.toLowerCase()) || T.children && T.children.some(
      (z) => z.label.toLowerCase().includes(p.toLowerCase())
    )
  ), C = a || (({ to: T, className: z, title: M, children: j }) => /* @__PURE__ */ s(
    "a",
    {
      href: T,
      onClick: (L) => {
        t && (L.preventDefault(), t(T));
      },
      className: z,
      title: M,
      children: j
    }
  ));
  return /* @__PURE__ */ b(Se, { children: [
    /* @__PURE__ */ s(Xe, { children: !O && f && /* @__PURE__ */ s(
      ue.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => m(!1),
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
      }
    ) }),
    !O && /* @__PURE__ */ s(
      "button",
      {
        onClick: () => m(!0),
        className: "fixed top-4 left-4 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-primary cursor-pointer",
        children: /* @__PURE__ */ s(ve.Menu, { size: 24 })
      }
    ),
    /* @__PURE__ */ b(
      ue.aside,
      {
        initial: !1,
        animate: {
          width: d ? "80px" : "280px",
          x: O || f ? 0 : "-100%"
        },
        transition: { type: "spring", damping: 20, stiffness: 100 },
        className: "fixed lg:relative h-screen bg-white border-r border-gray-200 shadow-lg z-50 flex flex-col transition-all duration-300",
        children: [
          /* @__PURE__ */ s("div", { className: "h-20 flex items-center px-6 border-b border-gray-100 bg-white", children: d ? /* @__PURE__ */ s("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ s(
            "img",
            {
              src: n,
              alt: "Logo",
              className: "h-8 w-auto object-contain"
            }
          ) }) : /* @__PURE__ */ b("div", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ s("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ s(
              "img",
              {
                src: n,
                alt: "Logo Simón Bolívar",
                className: "h-12 w-auto object-contain"
              }
            ) }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => c(!0),
                className: "p-1.5 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors lg:block hidden cursor-pointer",
                children: /* @__PURE__ */ s(ve.ChevronLeft, { size: 20 })
              }
            )
          ] }) }),
          d && O && /* @__PURE__ */ s("div", { className: "py-2 flex justify-center border-b border-gray-100", children: /* @__PURE__ */ s(
            "button",
            {
              onClick: () => c(!1),
              className: "p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer",
              title: "Expandir menú",
              children: /* @__PURE__ */ s(ve.ChevronRight, { size: 20 })
            }
          ) }),
          !d && /* @__PURE__ */ s("div", { className: "p-4", children: /* @__PURE__ */ b("div", { className: "relative group", children: [
            /* @__PURE__ */ s(
              ve.Search,
              {
                size: 18,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
              }
            ),
            /* @__PURE__ */ s(
              "input",
              {
                type: "text",
                placeholder: "Buscar en el menú...",
                value: p,
                onChange: (T) => h(T.target.value),
                className: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-gray-700"
              }
            ),
            p && /* @__PURE__ */ s(
              "button",
              {
                onClick: () => h(""),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer",
                children: /* @__PURE__ */ s(ve.X, { size: 14 })
              }
            )
          ] }) }),
          /* @__PURE__ */ s("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar py-4 px-3 space-y-1", children: D.map((T) => {
            var l, A;
            const z = !!T.children && T.children.length > 0, M = $.includes(T.label), j = r === T.path || z && ((l = T.children) == null ? void 0 : l.some((x) => r === x.path)), L = T.icon || ve.Circle;
            return /* @__PURE__ */ b("div", { className: "lg:mb-1", children: [
              z ? /* @__PURE__ */ b(
                "button",
                {
                  onClick: () => R(T.label),
                  className: `
                      w-full flex items-center group transition-all duration-200 rounded-lg p-3 cursor-pointer
                      ${d ? "justify-center" : "px-4 py-3"}
                      ${j ? "bg-primary text-white shadow-md shadow-primary/20" : "text-gray-600 hover:bg-primary/5 hover:text-primary"}
                    `,
                  title: d ? T.label : "",
                  children: [
                    /* @__PURE__ */ s(
                      L,
                      {
                        size: d ? 24 : 20,
                        className: `${!d && "mr-3"} ${j ? "text-white" : "text-gray-400 group-hover:text-primary"} transition-colors`
                      }
                    ),
                    !d && /* @__PURE__ */ s("span", { className: "font-medium whitespace-nowrap", children: T.label }),
                    !d && /* @__PURE__ */ s("div", { className: "ml-auto flex items-center", children: M ? /* @__PURE__ */ s(ve.ChevronUp, { size: 16 }) : /* @__PURE__ */ s(ve.ChevronDown, { size: 16 }) })
                  ]
                }
              ) : /* @__PURE__ */ b(
                C,
                {
                  to: T.path,
                  className: `
                      flex items-center group transition-all duration-200 rounded-lg cursor-pointer
                      ${d ? "justify-center p-3" : "px-4 py-3"}
                      ${j ? "bg-primary text-white shadow-md shadow-primary/20" : "text-gray-600 hover:bg-primary/5 hover:text-primary"}
                    `,
                  title: d ? T.label : "",
                  children: [
                    /* @__PURE__ */ s(
                      L,
                      {
                        size: d ? 24 : 20,
                        className: `${!d && "mr-3"} ${j ? "text-white" : "text-gray-400 group-hover:text-primary"} transition-colors`
                      }
                    ),
                    !d && /* @__PURE__ */ s("span", { className: "font-medium whitespace-nowrap", children: T.label })
                  ]
                }
              ),
              /* @__PURE__ */ s(Xe, { children: z && M && !d && /* @__PURE__ */ s(
                ue.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2 },
                  className: "ml-4 pl-4 border-l-2 border-gray-100 my-1 space-y-1",
                  children: (A = T.children) == null ? void 0 : A.map((x) => {
                    const S = r === x.path;
                    return /* @__PURE__ */ b(
                      C,
                      {
                        to: x.path,
                        className: `
                              flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer
                              ${S ? "text-primary bg-primary/10 font-bold" : "text-gray-500 hover:text-primary hover:bg-gray-50"}
                            `,
                        children: [
                          /* @__PURE__ */ s(
                            "span",
                            {
                              className: `w-1.5 h-1.5 rounded-full mr-2.5 ${S ? "bg-primary" : "bg-gray-300"}`
                            }
                          ),
                          x.label
                        ]
                      },
                      x.path
                    );
                  })
                }
              ) })
            ] }, T.label);
          }) }),
          o && !d && /* @__PURE__ */ b("div", { className: "p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between", children: [
            /* @__PURE__ */ b("div", { className: "flex items-center space-x-2.5 overflow-hidden", children: [
              /* @__PURE__ */ s("div", { className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0", children: ((N = o.username) == null ? void 0 : N.charAt(0).toUpperCase()) || "U" }),
              /* @__PURE__ */ s("p", { className: "text-xs font-bold text-gray-700 truncate", children: o.username })
            ] }),
            i && /* @__PURE__ */ s(
              "button",
              {
                onClick: i,
                className: "text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer",
                title: "Cerrar sesión",
                children: /* @__PURE__ */ s(ve.LogOut, { size: 16 })
              }
            )
          ] })
        ]
      }
    )
  ] });
}, K0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABPCAYAAAAjgM2qAAAQAElEQVR4Aew9B3hVxdJ72r3npPce0jsJSWiBoPh4ICoo+pSqKCAIKiCChSdIl+ezAKIiFhABEWkioYkICIEkEAghIb1Cem/knHtP+2dvEiAQIIFQfL98M9k2Mzu7O9tmz1US/f3v/3UP3B8D8Db3oge5zWwTB7vNojsBmUfdXoORJQDvGOhHXB5hBnuMvZtI9XEeeseK3oaA+2IAWiezIKa/64e0l8XI69DDYgR9pxhkM4F+2HUh9EentI/q5TyN7uUwjXI3C7obSPdxnEWH2WF9QeV7C53SQbepconwU+JjckHdd52JSnb159KRoim3qdMN2ZQLDdFiXEmMXFjHdSaKqZUnlVrdyRtWfJcL7qcBIMSZONIRzt90JpLdHT7u9D4jVMNWQnlZRIKu0zsVg237d7q+HRB4fw2AQGoHdP2b9C70wP01gLvQoL9FdqwHHgQD0IHKGO9kNcC8WEYLgsi7AnqQ2ogUtQFCHIfgNkBW64HrkgEJ4vblgIDbhRa++2cABCLQpYZSfvlpLwNuTPNXyhq3tyjW3lAtF/5QgJdfccYTo/Bdcl+VUU3by99eOsKEclayKw+K2zOfEn/JGMKvS/FSKhp3tJe/mU7S78waIm/N7AdyhmGUjxXtJWnKsbn8ngf3xQBkUa5QL0mZ7NSIbeyUbtu4Gd2zuDF+sbpf06bBqaCsA73QqP6eP4V8wT+OmxF+kZ0csh9wIzPQ/S2lUYwGOXhlgOAOgRdLkAXbkx7ivZYZ6rmJedbvT25sQLzup4xXQbIE2C5QL9RtozwtQqlRvonMsz776CEea+mhHt+pGioQCVJBu4R0MtF9MQAppuiEsDR2gAE/iO3Db0j1RiRhRHWxDFerhaR2t5GXsiRSCQF6c3F72gDhg9gQQBwO0C2NewbyFcA7Bt3KhNdAridGfnGMg5hQ8m9EEdaIJ/Hg8+2tQFVRPWHN9gUjb+Q3JvsKS2LdhA9ivDDq1iYNa6+czqS7LwZwXQMyKgvVKiEZOoYA7MieKCOFJFWk1kkJFcevk3t3MlRpe9bnIBqfNyBoP6gmGhY2PkKtavwTpdXktZ/z7lE+GAaA26cqHe5QzHafUCYQkm+3bkJF4u3ydjbfg2MALS0jYA1oif8d3vUeePAM4K43uRMrUJs8hO2VqF6sr24v7b2i+9sA7lVP43oadbe9bWD2zsBrZfzVDaBzrnnX9sr/o/Rf2wD+Hv47NtW/tgHccfP/FnC3DQBuS+ju1UHArfrvMbyjHrgbg0Mxgda9tRNDvuIW9E3nlvQr5eZGJGqC7YPvSNO2mMED1Fb2beZRTKhDTxRoFdgRfgL9ta+tnWkANPsv37Hcu71+Ud3MHlJiSlbzXyY+rFQJFxBLh1DDvf+AjqUAHzigI50GcYsi8+nnvE9yYwLPIitk1l4l4RgCNtBe6gePrvMMIMDGVtiRsYX/78mnpH25nyNG1jADu7xLWrFBhmaTJK7rQesshp0evp553PMAIglng54IUUhvwjbH/+cDPCid0UgKXRI57dPer7Jv94yBZb+Gfi7gJB1kPQOEawEbxR3pz0OIH08g6CQg7uAM4G5hwc2JiCfsjMZeo42qedRxJj3Uc75miMcLyBxZXlP+l0zeSOk7MQCWfsh1MDzn/gwDXsa9EpxN9nBYTphrI6AyPINEQpBS5dOlc/lPkp2lM2W/Qf6DAXjwx8NSz9E+oJAAeDVQVLj9u0yE0wKqj/MG7u1+F5GtscPVBP9L8Y4aAE2H2D6knRK6Ewa9ihnstp9wMR0BHWIFqFN1UoqSXfOZGJU1gF8WbdO4JDZQ/0vmB6impgbKHxSgtKN8D6nFjQdARwekqOW3UMyYdjPueguav2xx+wzAxcxKM9J/HregbxEzwu8o6WKC365J1Cidlk+VzeHXpXTl50ZbCItjg3TfJ8+Q4koOoypUd1u9oiLitvjayaQZ5vWcEpU9WVh99hXQ8RIiCadbsOqkgsZEoGEAWwNBqK0z/nqpmxuAu7GD5rXw77kpISVUsM1C6CxjpaBhm7gzYxD/ebQ1vzS2h/7XjKUoq+o8NP3apRSyHjzQ/5r9s3i+8pRBMzcTXwiv3Ex4KUvcnjkQ8vD3ehAYgOGmhmazSyLLmSe9rz0vGAj+yn/IGyhPaEYFzOUmhl2gnIzGIVktl+JKx/PzjtvoVp8dLsWXHUSl6OpOuoGYBztb87DbuKs0lPjNKY9LCaWHIa8RsAVwH5kSiDCnQ23fb8m8nZBQCfl2+O4mD27ctfJJ7eRuO6iu1ouhgFHz6r7i5x/3EKMy10G63Z8/Ae2DDgTlbXHZAOSUqg9Qdl0WMjc3B8WtATHoVUFOxpEmJO5oyVdUorJJzoPz9zoD0E7s+iHpavo0VlEtaNgkfHcO/8jyZp9p4b3xOjmYvw3UtJF3X7LoHnb/RBRhZ6hcUnP0m1KwwSPtow4TIQ+3p1HenBoq/JQ2GtIGkAvq8Iemhvj/yh/c0Mtt0QbaepPuFm+1ZEjnyr9oiTeHLLh5e2lG+81h3+z5B/d+n0JuSb9qblFkpXZC8HKgIQDbBnfEAl0e+1LXOW0RCL+kPysXFB4UdqWN4zedd2sT10L+1bgja4icUr5H+D4Vu5k75GOgBnt+1KyHIu3KwTcZmelm3YvsZvsfyJfFvdmP65MrU+kgm8chjUFFMYUrcARQp9+Y8hiqq6sVN6YMFteff6g9KJ0s3qjbnfUOvzvj3yDjnsCtKmllAKif09vAcHkQmcfcf9G81HWjZlzgZu2ciDMw2FX0mIA4Ksh2CWGtHYC0lBPQG8Ph0IL0NJ/BDPa44SGJcnIcDnSOYmbVVUsqcLdA3qUSlIcElN1QhlKqL7SJOdUXNEaMBWrQ6xDEUWpFMUKIR9lVFyFsN9C9HB8iOToMMyhZNd+LZ4pPI3sTO2q4/wHII6VDF8ZLJ4qP4jgTbvs6hEit1sXp06pbvlhWpbSqGMiXcShlVEdfhTFUsF13uC0tI7wsfa/Kj0ZVfAG60HAeZTWkAO8DAa0MgDCh3VtpRRL2lI/F85S31cjmDuNwuYrUWrWoYav+4IUn+XUprqi44UucT/pa4k+xcfRaZOQLl2L41Qkh8omiXy8XmiErZGLStAxbgs8NIePLZW1FrJAZNcr3hOYZbzxL26JoTx7FPOq+BhOqilqrO5g8DeIM+0rwIQIOenJyxYfioQsbIA9pB3kMRTTpBnFV2J2B6SB6E3A3dmBnR5wlw2yXw2HBjY50+hqoWcAHFloZgHSsAC+LoHsb+spqoZJe9bm0LjlcmHvcVlh1doR85MJuuAIW8Ouz5wOHQmooGsLW4G3uxS3oexGukmmUp0V4cyGrmRz6A/dOvzJudmgxN79vITerXwW3uF+ZdlK3ZQj8Ds10CJkhK6aXXTc4nFkixYLkV50P1H+dOKHZcGjDzO3t8BzV234UskGml/luENFOCv4IsRT2ACLxQP54VIAEdmrYD4SWCkLVQpR+c9qcZlaG7Oe0GsfVaiEWpdfG4/gN0d3Un5sQmkwY097KofzH5NNl/0Z6Gf/Y44H5Argt3VsbwKnSP8Rd2f2hwYfVGiFVqRS2wVI4nl992gVuAl10G1Kmi1k1CSCodaOcSDPII+W8+lbLO9Xf5XHupa4JMIvsoZwiGZqGeW7JzolIolxNXsR5gCRiSLyV0OACMiLdTN/U/NP1NYQQxU3q9jkYSSn9lO9Z7u3gQsYGeSBS1mhfCPwUDKeQWxiZx00LLdQ86b1V86TPT9wbkfnIydQGeNsEaqDbENLN/E1cSNSLB+Xogp1wt3+VcDAeTYhyCv9p/HNQpgIi7ZjAN+CQiH+ypQp7Mm8++7uYBHITQk4ikjCTkyoWkw+7rmJ62r/Fr0/9B8giNN0cmh7EIPGgQSsDwMrBQeWY8Gn8AOGT+EDd8vjhcBhahwr4Qii74a9sNMEOz0M5UrKronCIYCZqJoX8oBnkvgcRBJ6VqpxRPU9Mzt/MTe0TT3C0N1JU7EfAcg0s8KdFPq8/mLOOe7P7TuRmOhXyaUAMHD2u62lYSTJJf6uZkEHDADkjXiqUdmT2gXQD1GUJT8940CB5DbhYO2v6u26BXAJQ37g2eSyyMXKkezt8jiSlpvHrpEdwPiBCFsiCDLRahOCfWiXEoLTa0xAlkCXbBZmY2EL8CjhbuXATu0XD4ON20lSIzXz5bPk3jYtiQlBeTT43u9dparj3GWDQAt49cDNy1Iz2n8fO6B7HvtvrFPO0L+474lYVXmcAt2Joo5wGn8F0yBcIViNrXgz6kHujXxHlZvYi5GEFVCmmeIp+/fkl3JiemxFHecLgV+gPF7wE5c6ACDr5ANLJ2N2K5AO547S9uzyHrLmhsIQWqnXiXkyDUcW/AIouGCfuyYnEaaSian7l+e6Et0V/SJsohfXb4XCYBPFrQcO+5P0HIpARLlDOVc5G5ZdKNF2tH4a0JEXl/hOVNJRD3ADsmLBPIMIBqsKuzGlAF8DN75vCzeoBAxparB0dOAvKcN9puZf9DsPgW0Iawcr5B/91mod+ZybeSvGthFRoStbvz8Ery9354YuzqbV2evgOblL4RSrIZiFhw/UiTDU96B52n8NZB48BVu2GiBtxw8JbFniZebOzex1CNIlnBUsPdY+lfC3fhY42aeFVUqveEPdkf8M87jkeWWuHErJax39zJpTpYWdYimH25clxpXPgRhGm1OkS9EcLfyXDbRdjfv0fF18RPoobCk6apn25QTwv7s/7gfaxGIIQUsXfLz6ncTV2oEJsP0CqWqnbmjge8q8D9rXQDQTH+OEClZfSdFtSV+K4/sjFn/m50Sbi6WI8Q3EWQq7mXoSTsUEOGOYJjTkrUqMCEmCb8m8iQBQZZPUJtyhSACxBGsobDLFEjMp5FFbOQehiRRHQEdonvd6CvjmqWxLTW04vOgx5N1wBmCC7blhHdkro90x/1/HaF7u2ueUwYXbd6Edc30JwrgJ5iAlz7MFODskm7YyelnNqNknrk0OhPaz4W04/KFcJlgqE8KZwewZgamrDvtF9Ezc+JJ0w0TyEa1ASy2bJhy8MF3caKsfWj5Tcmq90P6Z8gdwt3OlIp1WYTncgfzQS+DrCXNsbp6Utmc8QwVZ4BUEovnQ+3dOuO+SbIEktkY8X7Ie4CquGD4RIyavbgzzNfAhfq3dA9mrpaP4RcpjbT1BG6ffnj0UVCP/uHpJXQPu0zxuEkwm+5+NMRdmb8SxEWlyyeL8XIX0ZuLGB30MC94sqH8x5i3rKG18NtUSj+DvkXwGSYGDmWyg5td/w70d3keKKWsoJzSsh35O9HT8GF7qInE3NYEXMZ2f1vHL7aZESYOsDW8QRerRvAuFgPJhwMRlHD3JbS3qaLQUSjXZyyApkYmKLrJAZ+1bP/fSzvmeZgW4fc+OC09gJIQvoZ71iCJIwR9W6lUpBfTr1mMc7Ru/3OcMM9vwTSUqJ/lwJ9s2AqBsDbuiNS68v0WpeTrDS1gAAEABJREFUCJzPvdutiLDlsIfMwK806BN0WzOW6/+4sI2w0QQBG40UtUa3Jnkm9++IXdy4QNw5WpWXUmFQ99FeDj0MNAiViinliZSjyT8hrehSqmIJaxODYcByjs8TCvKwcKM8zJ+Hcr0+tnItOzLgFyQqRSD7Te2ALkMIYyZYqRJ2YrlA0wrornZ9yR72y1oylfTKz/QJVW3fwe2RMTs9fC0yogwGrVY2HkUeVn0QRTiol8T4xqVxg8XtGX1Blh6wCUQ5V7c2CfsJLhsR+2LX+VQXs5cIGaUKH596nB3ptwmIrZSUSsPVEuII4bqmhH7LPe+XjljaX9qe1gveWexgG8zH5fLZiqXshOBFhLPpODjsZnMzInNIU00fWGla6qYJT7P5QEsDqshMM5GJdJ2CKMpbLm38DSZVP37BCReUB74VILgZGAbwZgTNZQTV13kItzjyAuVvtQDnQafgmdE003/Neg3y8GxCdKj9WIgj1KA/CqEeZu8jsEV4QxzJKZXYEFRCy3jgNKA1IAWdbAdhK1AZikKuRk7c+KAjUMDI5yvms4/YT4MBD5B2ZmJXtQ71dFgIZUh3IPc9HLZCBxNbZpTvHsgjARHMxlLdhtTr6aCQjnAayL0eeYGwMzIs/ZClCL/kT4G2ToQ4ko4UzIZQJUUZf9dw2Z2tP1qAv3gy9AGUI7q7Uz/C12IekpX8xs9SIpgnvccQVuyjUlLFMv2+nB8R/NP80/1pblq/PJjtWDbPLz8RICZUxCM3kwDYBruolcIe/c6MZcjeqJ+wNS0CWEzlowWTG+cft+DXJLjBxCqHvCaQlBxpZ3p3uKGZ8POjXYXl8b113yTOFM+VxgKBAnhLaOqcm5HBIYOd2WOv5gmP3QgRFlJq5Zf8fxMd1fLGdIQQDfvkcTG1ClcISRhKjg7BEZUizDWBVgGIJIxxGiMdZjeaCrB9QixtiIe0AsvUBUOIUBWEJONl6YaK6/GAI8rJeAI3ObwA+N3V3JrNKLEsivC2mK1k1ywXE8vxVZSFWeEHfIgJtZ8M4eWBgTjNvdwVG5sFxA0g7st9ASIC4NVAaSd0XckM9TwA9Vi1FKjlwgGUV5kDhyk3mHWNUkzhMVxGPOy6FIfNyMuHL+JJ0JxEWuYpjy0wQDz/3dm+tCsVQvd2WI0q+B/Fn9PwoZHVTu++lQyymiodL5qHmaAP/0S1qBrZm3twL3f7E68AMIjDwd0eqlyoPcAN9PgA6BR9bD6eTCptagzXYMJw4ES1+p0wywPEeENfANntAXkzNs1A92HclJA8sOLHUFnDbv7Lsy7ij6lTNc60E+lu/jrwqvL+rKkQNoE9YmHgDYcdwljTnxoTeAqW63IlvnQGktV6tU6XIxfqYlF69Tl+xRkXfuWJMGBU+DXJj+qjsl8Uj188gwdXya9fDsbRCFgmHSucKqxJHoN8LUehen2S7vvkllmsR41iqqqXk9WM6u0gp2V5RJrnAxYgju4GeQYAr+UWKbbooCHR8scFceysHodITwt84MK3lZYSRYhKfwMSuG+MQAf8AqowA9wmkk4m+EMYKEJwAlVxfRhxmmbhoAnm74gIgtQ+4TOfGe6HD34y/9PpycgGVrIFfZMJVZWFlWcGK5fEKswEK6MdM8RzAjctOBUM0FbalonPJwIR6fw6quSTkDX7DNyEilADnG58rZ2ZEb6/AR8tZVav4D8++S+It9QP0dsD3Mi2ODWaKd2+px5x2YkIgpGPFT3Przz7JGq6KjHUs374v41DqtW6g2JKzdnLAkpRIwz4xea0BI7WaP7bpCDdzszP+PnHzcG3EIHq6poaX9FYDPO+6auh3JpEOa4Y75GGZUv3beJMfsEJY0AH8bfcL0Geqt+ZPZ//70lsMC2NVvilcT2ERTHB2HcBNFeAJF0vJwQ5HryWra9DtrYm3MTIM4Qli6+BisJLeEUxsCjl/H6UU58BCRmsoh4xpDW8gZTSA1y/RSri4RxjuGYSDGGufTVsp+ZZn4+5+X0y4KA5HHgQIhALr6mTEEJ4f2bYf4V+w80Iz1Yr+ePC52fwuUmWE+vwyiFA/d3pPk5rEC/jPlPJUJt/sJO7bSZ1ShoV6jAHZBBKWvUKCEn2We99INtUxv6UH87jG5Rhy4WyOwLyOm4Xa2d2du9zlIvpOFjOSvk1id30v+Xgg4yBVDsl9DOYXd6QUIQ9uVdmP2QAqPzCEyH89qwg/uNoO+HjU4+iovoKyMdwpwpj42iXDP2G869IRwpfkQ/mj+KXxOB99Oo7uIZ92SsG0YQ/DKheiSsbSmqpluVf0e3JarqRIDDl1KpVWHFAS7VOHw8rVZC0N2sapA1GSDobP0YF2YxWq4UsyGs6C0hKqfhL1j/hCIxnK0KOxkPUnJplwucJ44CmSf/a2mppZ05fJad6mRxdPJr/IMZf3J01ALGMMxjzCjGzMhWZMN0JFdXpotO+0jznO5eAw66cXv0R+FMWg5xOg1YGQPd1fZib7A9XO8YPBr+EX5MQhnLr8V5vqBDu8q+SLiav4oScX7cRpVXgmYKTVyOPEkpSUC2qvjrzHsd14sHcb/VHLv4M9cqAlwEv1YQJ3RUyJHF/7mOKIvnB8usGaaSU8TtQVm02jmMUfkz5N4+fn79LcBI+OtkT5dXkSQkVf/Krzzny29J9+WXRNvyiGBdhZcKj/Kp4L/32zDH8ghMe0umSw8Inpx7n/wuTYN5xG2FtMp7NTYOPBQOK8UUJurXnZ+n3Z2+GpCzFlhzRfZ80U0ooi6G6OwyD/q+BsqGIMOWoULv34FCdCIY9G3Xyv8sGQA1we5x5wu0QIgyHNpFfl/QwyodlurlC5gnPKXSk05eGpKI26Lfk4xOwIdlJfyiQA6suwktne/FqHswLIm4MVKTLE7BUG3wCcnTheCm3LgmW4A+bOWTdntyZzXFcf1MUPzvnXXOdKqirRmfLc5u3MExLoyKhSE4o3QpM+EqI8yhUj2ohjQGnWxCnsd44bBP1uzNm818ed5GOFx+jw23xbUEjnyr9GIhbGRGkr4OOZjQZgJ2xvWaA6w5gNigmp1Z9inLqMiGNgdAM85xN93XCy6Ghk6VTcKiDZQwXdhayb3bfSz/SJZJb1C+JXRJZ0S6cE5FAB9s8jGnpQOsBt9CF0Azq0mTAmFCvXGJfDMRf+BgOrTiLHel9mp0TUY7lse/1LgfMADwGh8pNmhF+c6lg28eRG7wfBNg+BOeCYgRXTQgLDPTt0Jlb3C8bDoSO2mnh2NWMq2wbscGVoku4kPaxxh+7IDLMbiwVYvMUE2gbhmxu/eqJeduDBgPQDPX8DxCzgBhU/fGir3EE2SITWDI3Uz2dcLlh8NUa3QkxKmutobwT/8AJWVBF2UupEXgCEebtQo72kGSiENPCe0TINeoQyBxZ0gG2D2tG+b/Hzuq5D07d7i00FBg8YQJbXUsGQhRhpLElONqGwPUbMTaEEeMD2I8KsB5Nhdgu1oz02ws+90JmpM92QlE1yESjRQjZG+gxzy0Q1k1Z42hqo2RU5QMfMujX1eYR5hmfKZoxgQs0o/3/TYXbPYO6WgdAuTEgEqJyPkAqUUlYaAdrRvj/So/xO8PN6FfJzuh+APlYhGKaO0ESmCnS0wxfKSBqAEL7uPsc7QuBH3HT+11sWTINJQjVC+tTMG2nL0WqRBQxgTYBBKG2rDzNVd40MIarID588aqpNhwoCeRu7c+MDfyEW9A3l3u7XznzvN+fVFebDwhL7WAo7wwgwJBs4M5eSBuTPh0SqFfSZHOqKxNoa83OjThn0G+U/2G6u/1XVKDVfCrIZqnmX747uFEBKbCyVLJz+mRr+zrMEP/IfQHOCJOUksY9SJAuQJ00YcMNgqf2Myz2XkLG7QKJbGyMsAVfLYB0NplI+lu9jQhkga78U8Sd4Ecvu1R6JavzYlJmZS7MqW5SWm1iB6QSlItRMFzNsqguZgO59/tkcBMDUmg/q1kwSPhgR4EsVUUq3ovxLQKSrUGt15+Xz5ZtbEG1oGGL2ijtA6qb/hdLpbLGeDLABl8jgbR9ADP/FB1o00u11s4lWBov7Vi/GzFrCXg5JX0sX2EGuu+je9mvQKJcKP6W9yL4VGqamQjwXo6BuGG1gLDDQCKqos2OuUaSJB8tHCnFl/1+TX6nJVWdkkLamfijysaTHRFKBVqPULJrt8IC7gCuVHw9JQz8dfpE/e95/4ITu40w97gNOHTyDPmt/8jCpvRh+m0ZY1tQOl36JRg+ntl2rUlbp+TzFXtJD/MOrSpKhRBNmGgiL0vSy7kgZ5G0KTWCX5Voy8+NNuM3pPlLccVT1ErhCNBhJxQEACRhTLqavsIM8z4CbbWEHAyiFFcyCSKG8wKEHQYSlaJGuHLgZaVtZlktlXakRegP5G5rm6BzcuWM6kxomJNU04jv1O0WSrmYPa5PLNwMDJe3JTWv/kP+o5Nh8p8Fv6ACg+NJUvLr9wLNFVDUS/oDeU+hi83XPnzeeT3sJ2aY1xE4B3hfITTEasAPcFRJKFsDIfbwKXJRYyzczTu0B0tlteeQucZXzq1fx/8I18hFMV76n9LmiymVcc3+knqUXpEuRmV/DS7hf4BBWIs/p/eXL9SvBa8EHiPszzCsaGph/WZ+1XlvMSoLO9AMSt7OH3wGUKXYorltMCtqccM3/KrjXuKZitNtlHdyVv1FEMhoCMIEwpYlDqK3AJKwZjjOGvHiuRZKYVv+fyF+2SAgjuCOPUM6cuEVtVr/k3KqZCa/PMVZPlqAjYLA10NuWmQe4Wg8CmibVhCIAOik1MoV0rasR4WPTvbXbc+YqOTVRsP+n0G7m2Ej4YCmfaCo5UiQWVSjT9CvSRyPUsvxWaeVjm0I4qWk8qP6bxJfBgebOxiEOaAxXtGErxJHo6JqbBRtsLU/CxsAEvfmbhB/zR2oljVuVqt1v8lpVQv4r8+4Cl+enYxK0W0vL+1XAyiLkAArUanqazNArRE6cg5A1COuC8UDefjBBQQhxE7w+lHjZxmCXM29mN7OEVQf56FUhPMLKseYq/VCgWrPhWuHu/5iNL/PeXZ+32rN4+57wBlkbWC+8gff57V0gPUM+jnvk8z44GVQxMKB8nXpdNkKurvdu5BuNygV/FEmwHaAklezv91MrQmxseAVAG8L+ODbqvR2EwYDwMzSqcI/hJVnRgufnnpMvzFlIbrYWITz7yEqqFoXR3mbPyunVmEPXrurJqzYQWSDHkxVxN/qI8KKe4IaG5TITQ7Oop/0iNEM8YjSDPVYx/R2/JjsYvY21cX8BQj/AU/OgQRDml9TkU46VTYJZpqZtDULf5tg8CTSXuavasYEvI1gARaTKg4Sluw/ruG7aVJNqdpAhdmPlS/WpyJbYwcgZgDvO1w2gPuuCSggpVduJ8y1PcWsyo7OEoJ4ymcDvyVzJFLhTFOhW4HyGz5DlUKUWtm4Dw6ABSC+XaDWilvFkxfwYVcQ6+rxfV3fzMjCgXOBHILs4wYAAAtCSURBVF3whna4D3bkUM357Qn0+tTKaDCaPpqnfbZzb4QVcosjG9h5fVKYJzyavp9oj5S7QPNAGYB4Cm4ZJMHSZlwXJEjZHWkvaaoJZSMdXxOjMp9UrTTj+V25n/Gb4kdLxwqWqVXwvo9Qm7cd9ZJ0So4rwj52w7JKmDMvcK/3yOUWRV7iXg7DhnN5n1cL6rfLglxNWrGXn4XboyOc6I9pfS0igZYFpAFJRBAaQkMF0H2d12v+5fcO5N0XIO9LrTeqtBx8DLyUQ/VymKmcr/ryRmQ3yid8Ld9l/GxCpH15z3JTu57ipvWrYZ72/Z2wM5oAPFfaqiJeLrq0lv86yVv4T2wvfVTOf/lVpz3VooaN4OFreqImCTzw+EBYDLyqeqFus7A3e4FmkDv29+N8yG4fgBEuIcLtL58Z4P6RDStVTQs3FWqDDbAleU/DK51yT6u9YWWqlFT5OeloMlh3rgJfOw2z8obU1xcQyM9yOeVr8TT/Q2ooapDwl0dXqETlAgzGq/z70Vb6VQkvX74CYooi/qKw6uzYxnnHLfgVZ5z5lad81NSqV8DposB18nnpTMUX3KRu+McfHCZvN8pqIV3P5xOWLH6WRqhC2CX856QP6GCH9ErTlZckzJAtwrefdovtLMIHzQCQ+GfmemgcRYdYj8S3Eoh3GMB7NpUd7XdY+jXrdf2enGfAU5gHbtRV/IrzoeJved+AQAGwLSDhgceGiXAcyr4S/quqofz4H9N6E25mA5inPY/Bst1hj5t8smi28lCX+VCZoa+lQ3kLmVCHHvQwr3eQhsS/iIIiRLEv9YxjxgR+Sofa4a2Cw5n3Ag1K3YuKblEHR/ewG6h9qeu37ORex4GWZMLsZguHChZAXAHsMBBaypt+3j+eiXCaqGxPf0qJKVyvGe22nJvXN46d1WOvdlzX1cwTniswsm/2WM/O7HmUm9cngx0dsJmo1zeoO7OHwYCz3IsBOaS7GX6S7dCyb1BYVi/oU2uOUu7m2F1ryKJH+McYrpU9HZdAhhGgAQgLbSAdaDWTec43Gt4Batm3wSCGer+OnDkXIOh43cDUHiDbQ3TXaLwsu3LTQ6OgwVV4ryZ9LCYSZhr8Ekbie7nWx3yIWtzw3R3UTxDW7BDqhaBz9BOeP6EqoVDalj5ViMqdpPst6z9ifOHnGIUfkxYKm5Of5zemPSNlV+2l+jjOJkf5ZpKeZvjrIM3t1g/+lYncUM+VwM8AtkBb8rDPoaUchwzchnrREQ5fcK92v8gtjMzHD1wI+gsKKcDLcKeR+2UALDs9fD03PugcsjMZCo3Ap2MIWgMZZrdE2FWwEPbhO/+6SEt5UCF279FjAmJhVhfAST/NaHrPMxi56T0TuNe653MTgs4xvRw/gWde/LR8R7NOKa7fDtdPCdlxT7VuVauUKkUXTuRXRFtLWzL7yOlVi5q/T2y9RVGEK37ggv5KgslSxr4Wthr5WvuDpDvSEfjRvTcAZ1NrsOgkws4I33+vNEBSipSs6mX6HZlPituz+8tHC0YjkjBmn3Fbrt+bjT/pxvp2JrIqQmYYQagp4BVdIHFHICnFur1ZrzNDPTcjUcWvp9ceZlW1UcwSd2X3F/fnrkEVqF48Vxqr35AyX/dBbDg4oSylLWndldTqj5Bexi5jgzOqWScrwsl4MhhxqtGciGTNQDf8PE83l3U4uNcGwHCTgmPg0Qf70ZuUVeFKdrzoBX7BCVfduvOz5DOlu6WE4qP6A3mbwXu2mLDjRlAamlMyqj5rYnjg/+rk3dmPsk8FrFNr9En8wuNO/KfRNtL2tJ7YuPXb0ofwa8+7C0vjfKWTxcdu0BpBPFdxRvfj+Xf5RTG+/BdnHaWTJS+jRgm/lF7eLlSODqQecd3OLeibpxnkgb9K7vB4dpjhBgq3K5t5zH08oq/6iEJFjfzaxLDmX81cd9gTNqUsgrlxmBrsvlFNKF2tlIJXr1013TciSdyaMUz1sRwPDqVg4cd4/F9MUVE1qhUTKuKxcctny/ci/J0hQrD4tFPPkoZycVfWWn5pbG943naQ4opeV3VSBnA3yaBJZ6q/8xaj9/skMd0d8YcxUNQ+uKcGQLqbP3a1WsrZ0gVXf3V8dVlzXOHXxA1DOqWcetbvT9323Clq6aVDzWUPWqAXt2YMJX0tetNBNpPUn1Mewkt7pytZUFclRuWsEhbH+oOvI0jNr8M/jjW4q1UtFUg/4xXPTg7FV902z1XX6nNPDYAgkEHRFiVIP+unbvmBI+yP/Ka0SESRJPdKQKywO3eCWnIJN7pFzP0PZbVM2pkTQQRYDaa62b3Fb0qJENJrc++yYirKrEwVvj03hv84yUHNql0M9dUDEoSryST2/b4ZmgBL/Pk7ZN0Y7qkBKJk12I16RRsjuh/3Rr8S9rXwLcygLmOxE4QJse+NERxBA6Azn9GO8H1T09fhP4hAImwfjtxLgQlyXPFy6VQJ/lFKK4O6Ivgexir53eAsCqcecvqQ9rEcoW5I6oZSqlLuoQYI1dZWC+uS5sHh0V6MLcYu5wZCS7pSzwclwEG05Qevbap0Tw1AfzB/h1ot4C9qrihDICPCyWg43b/LeuwEoUf4xGJkRgT8oRnuu4MMsVtG+Vnhn4c7Gpho0pIe5h1DcIwJ/0NSAGo0/F/CDUX39A84ecRd2Y+JCaVfci/4n1UVmeC/igm4BzPf0Mwb/OGl3dkf8Z9FO8pZNR8DjUpHOK3lpoSvgHibt5x7agCghCp8Gv+o0qTcncxeiupq/SE7KnCXFJU9Q4Rro3pJxF8tNR2KoKK7BeBWzpaji8bIu9IG0w+7vMMMdN8OJ/T3dJ8lDEawXd2tejsktxw16Nclv8OvT/VQyhqjkIvRdO3rYVtAxnVOpHttAKADknRYuU+S7aU/C6aodbrjatNXu7isvdig1unTkU4uo0f6n6QHusyXf816jd+Y5q9kVH+BZKWsvYLaRScr5UpGzdfSTxmh0q6MsWSw9QTqmYBzSqOUB/uvi7g7+1uQc9eND+roGGRUFupWnnlK+iWzD3gWu2qnXm8E98MAmhpRU1Mj/p73tfDRqX74GzfoSCv++7PB4u6cQfLJkrFSXMnr4snieeLJkvekuOLJ+kMXn+DXJoTANcga9jor4aOT/oAD4BnXXa0Xc+gxAYe5ET6/g4OlmP/ufF/+2yRPKaboZXji3QqehhyoFB+QILgpYIdLjVorpskll9bLMYVj+R+SvKTNGY8pFNFID/f+jR4ZsE8ubkji1yS4Gl4Ua2urbyrxASgUT5fGCUtjg5Ts2j2aaeHYtX55O7h/BtC6YySEOzK7IVmKLTqo35W1UYzKWiXtyl4s7QKffVT2N/Kh/H0o51ISgmsQsIqATQDPuLrVZyeBUdiAkcwgXc36cZODz3ITguJJT4uRakljnHi4YDz/RXwIDJoD/31KF/7bs4H8amxMzfh1kje/PdudX3baXd58vr94/OJCQpSriSCbmdyLXZPp5wMOUFrSUdyZMQqM1U7cmDoT5V4qbVLgL/NXEfflrNX/eOYN7knv3i1aPygG0KLPnYS8HF3wi7A8/gkwBiv+2+TeSnrVJtWGC6T62H/GTe0RY/RyWAa4ULO4CSEn4G3/cDMe4SYGneee9UrlZnY/Rw0PjGJ6O01W6iRJiilZyH+T4M3PPWYvrE4cLZ2twN/q38nZ5U7a1zm8VaiOj8qKbRH2v2QALW3CoQgrRZZ4IO8H/Em17tP4MH5utHPj3Ghrfv5xE37NeU9An2b05ledwNuKOdDYQrk7GNE/xJ9S3pKPXfy1+eNYvDVguf9z+L9qAG0NFHY140cZEV2AfftqLEX403e8reCBfvAOc221ppPy/g8AAP//E1k75AAAAAZJREFUAwBh/gK8ekM49wAAAABJRU5ErkJggg==", Vl = ({
  fullScreen: e = !1,
  message: r = "Cargando...",
  logoSrc: t = K0
}) => /* @__PURE__ */ s("div", { className: e ? "fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center" : "flex items-center justify-center py-12", children: /* @__PURE__ */ b("div", { className: "text-center", children: [
  /* @__PURE__ */ b("div", { className: "relative w-24 h-24 mx-auto mb-6", children: [
    /* @__PURE__ */ s("div", { className: "absolute inset-0 border-4 border-gray-200 rounded-full" }),
    /* @__PURE__ */ s(
      ue.div,
      {
        className: "absolute inset-0 border-4 border-primary border-t-transparent rounded-full",
        animate: { rotate: 360 },
        transition: { duration: 1, repeat: 1 / 0, ease: "linear" }
      }
    ),
    /* @__PURE__ */ s("div", { className: "absolute inset-2 rounded-full overflow-hidden flex items-center justify-center bg-white", children: /* @__PURE__ */ s("img", { src: t, alt: "Cargando", className: "w-full h-full object-contain p-1" }) })
  ] }),
  /* @__PURE__ */ b(
    ue.p,
    {
      className: "text-gray-600 font-medium text-lg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
      children: [
        r,
        /* @__PURE__ */ s(
          ue.span,
          {
            animate: { opacity: [0, 1, 0] },
            transition: { duration: 1.5, repeat: 1 / 0, ease: "easeInOut" },
            children: "..."
          }
        )
      ]
    }
  )
] }) }), Ul = ({
  count: e = 3,
  height: r = "h-12",
  className: t = ""
}) => /* @__PURE__ */ s("div", { className: `space-y-4 ${t}`, children: Array.from({ length: e }).map((n, o) => /* @__PURE__ */ s(
  "div",
  {
    className: `${r} bg-gray-200 rounded-lg animate-pulse`
  },
  o
)) }), Hl = ({
  version: e = "1.0.0",
  year: r = (/* @__PURE__ */ new Date()).getFullYear()
}) => /* @__PURE__ */ s("footer", { className: "border-gray-100 border-t mt-auto bg-gray-50/50", children: /* @__PURE__ */ s("div", { className: "px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ b("div", { className: "flex flex-col md:flex-row justify-between items-center gap-2", children: [
  /* @__PURE__ */ b("p", { className: "text-sm text-slate-400", children: [
    "© ",
    r,
    " Universidad Simón Bolívar. Todos los derechos reservados."
  ] }),
  /* @__PURE__ */ b("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ b("p", { className: "text-xs text-slate-500", children: [
      "Versión del Sistema: ",
      /* @__PURE__ */ s("span", { className: "font-semibold", children: e })
    ] }),
    /* @__PURE__ */ s("span", { className: "text-slate-200", children: "|" }),
    /* @__PURE__ */ s("a", { href: "#", className: "text-xs text-slate-400 hover:text-slate-600 transition-colors", children: "Términos y Condiciones" }),
    /* @__PURE__ */ s("span", { className: "text-slate-200", children: "|" }),
    /* @__PURE__ */ s("a", { href: "#", className: "text-xs text-slate-400 hover:text-slate-600 transition-colors", children: "Política de Privacidad" })
  ] })
] }) }) });
export {
  Je as Button,
  Go as Card,
  fl as DataTable,
  Tl as FileImgUpload,
  Ol as FileUpload,
  Hl as Footer,
  xl as FormAutocomplete,
  Cl as FormCheckbox,
  wl as FormDate,
  yl as FormField,
  ml as FormModal,
  Pl as FormPhone,
  Al as FormSection,
  bl as FormSelect,
  vl as FormSelectAutocomplete,
  Sl as FormSwitch,
  El as FormTags,
  Nl as FormTextArea,
  zl as HasPermission,
  Bl as Header,
  kl as ImageModal,
  hl as InfoGrid,
  gl as InfoHeader,
  Vl as Loader,
  Ll as LoadingOverlay,
  Fl as LoadingSpinner,
  pl as Modal,
  ul as ModuleCard,
  $l as PageHeader,
  Rl as PdfModal,
  Il as PhoneCell,
  Ml as SearchInput,
  Dl as SelectionListItem,
  jl as Sidebar,
  Ul as SkeletonLoader,
  cl as StatCard,
  ll as theme
};
