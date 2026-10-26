import { createTheme as Eo } from "@mui/material/styles";
import { esES as Do } from "@mui/x-data-grid/locales";
import { jsxs as p, jsx as d, Fragment as De } from "react/jsx-runtime";
import { motion as ce, AnimatePresence as qe } from "framer-motion";
import * as Ce from "lucide-react";
import { Loader2 as No, X as Me, CheckCircle2 as Ar, XCircle as Io, Eye as er, ExternalLink as On, FileText as $e, Upload as Sn, AlertCircle as Qn, Move as Pr, GripHorizontal as Po, Minimize2 as Bo, Download as Mn, Image as Oo, Search as Hn, ShieldCheck as So, Bell as Qo, ChevronDown as Mo, MapPin as Ho, User as Ro, Settings as tr, LogOut as To, Code as Fo, ArrowLeft as Rn, Home as Tn, Lock as Br, ShieldAlert as ko } from "lucide-react";
import { DataGrid as Yo, GridToolbarContainer as Lo } from "@mui/x-data-grid";
import * as Se from "react";
import Go, { useEffect as Le, createElement as jo, useState as oe, useRef as at } from "react";
import Uo from "@emotion/styled";
import "@emotion/react";
import { Card as zo, Stack as Or, Typography as Z, TextField as tt, InputAdornment as He, Box as z, Tooltip as dt, FormControl as Jo, InputLabel as Ko, Select as Wo, MenuItem as Vo, Autocomplete as gr, FormControlLabel as Fn, Checkbox as Xo, Switch as kn, Chip as Yn, LinearProgress as Ln, IconButton as ke, Dialog as Gn, DialogTitle as jn, DialogContent as Un, Backdrop as Zo, CircularProgress as zn } from "@mui/material";
import { DatePicker as qo } from "@mui/x-date-pickers/DatePicker";
import Jn from "dayjs";
import $o from "dayjs/plugin/customParseFormat";
import { MuiTelInput as _o } from "mui-tel-input";
import Be from "sweetalert2";
const Fl = Eo({
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
}, Do), we = ({
  children: e,
  variant: t = "primary",
  size: r = "md",
  fullWidth: n = !1,
  loading: o = !1,
  disabled: i = !1,
  icon: a,
  iconPosition: s = "left",
  onClick: c,
  type: u = "button",
  className: A = "",
  ...h
}) => {
  const m = {
    primary: "bg-primary hover:bg-primary-dark text-primary-contrast shadow-sm hover:shadow-soft",
    secondary: "bg-secondary-100 hover:bg-secondary-200 text-secondary-dark shadow-sm hover:shadow-soft",
    danger: "bg-error hover:bg-red-600 text-white shadow-sm hover:shadow-soft",
    success: "bg-success hover:bg-green-600 text-white shadow-sm hover:shadow-soft",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-contrast",
    ghost: "text-secondary font-semibold hover:bg-secondary-50 hover:text-primary",
    link: "text-primary hover:text-primary-dark underline-offset-4 hover:underline"
  }, g = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, y = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${m[t]}
    ${g[r]}
    ${n ? "w-full" : ""}
    ${A}
  `, f = i || o;
  return /* @__PURE__ */ p(
    ce.button,
    {
      type: u,
      onClick: c,
      disabled: f,
      className: y,
      whileHover: { scale: f ? 1 : 1.02 },
      whileTap: { scale: f ? 1 : 0.98 },
      ...h,
      children: [
        o && /* @__PURE__ */ d(No, { className: "mr-2 h-4 w-4 animate-spin" }),
        !o && a && s === "left" && /* @__PURE__ */ d(a, { className: "mr-2 h-4 w-4" }),
        e,
        !o && a && s === "right" && /* @__PURE__ */ d(a, { className: "ml-2 h-4 w-4" })
      ]
    }
  );
}, ei = ({
  children: e,
  title: t,
  subtitle: r,
  icon: n,
  iconColor: o = "text-primary",
  hover: i = !0,
  className: a = "",
  headerAction: s,
  footer: c,
  padding: u = !0,
  ...A
}) => /* @__PURE__ */ p(
  ce.div,
  {
    className: `
        bg-white rounded-lg border border-gray-200 shadow-card
        ${i ? "card-hover" : ""}
        ${a}
      `,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
    ...A,
    children: [
      (t || r || n || s) && /* @__PURE__ */ d("div", { className: `border-b border-gray-200 ${u ? "p-6 pb-4" : "p-0"}`, children: /* @__PURE__ */ p("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ p("div", { className: "flex items-start space-x-3", children: [
          n && /* @__PURE__ */ d("div", { className: `${o} mt-1`, children: /* @__PURE__ */ d(n, { size: 24 }) }),
          /* @__PURE__ */ p("div", { children: [
            t && /* @__PURE__ */ d("h3", { className: "text-lg font-semibold text-gray-900", children: t }),
            r && /* @__PURE__ */ d("p", { className: "text-sm text-gray-600 mt-1", children: r })
          ] })
        ] }),
        s && /* @__PURE__ */ d("div", { children: s })
      ] }) }),
      /* @__PURE__ */ d("div", { className: u ? "p-6" : "p-0", children: e }),
      c && /* @__PURE__ */ d("div", { className: `border-t border-gray-200 ${u ? "p-6 pt-4" : "p-0"}`, children: c })
    ]
  }
), kl = ({
  title: e,
  value: t,
  icon: r,
  change: n,
  changeType: o = "positive",
  iconBgColor: i = "bg-primary/10",
  iconColor: a = "text-primary",
  className: s = ""
}) => /* @__PURE__ */ d(ei, { hover: !0, className: s, children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ p("div", { className: "flex-1", children: [
    /* @__PURE__ */ d("p", { className: "text-sm font-medium text-gray-600", children: e }),
    /* @__PURE__ */ d("p", { className: "text-2xl font-bold text-gray-900 mt-2", children: t }),
    n && /* @__PURE__ */ d("p", { className: `text-sm mt-2 ${{
      positive: "text-green-600",
      negative: "text-red-600",
      neutral: "text-gray-600"
    }[o]}`, children: n })
  ] }),
  r && /* @__PURE__ */ d("div", { className: `${i} ${a} p-3 rounded-lg`, children: /* @__PURE__ */ d(r, { size: 24 }) })
] }) }), Yl = ({
  title: e,
  description: t,
  icon: r,
  color: n = "bg-primary",
  onClick: o,
  favorite: i = !1,
  className: a = ""
}) => /* @__PURE__ */ p(
  ce.div,
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
      /* @__PURE__ */ p("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ d("div", { className: `${n} p-3 rounded-lg text-white`, children: r && /* @__PURE__ */ d(r, { size: 24 }) }),
        i && /* @__PURE__ */ d("span", { className: "text-yellow-500", children: /* @__PURE__ */ d(
          "svg",
          {
            className: "w-5 h-5 fill-current",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ d("path", { d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" })
          }
        ) })
      ] }),
      /* @__PURE__ */ d("h3", { className: "font-semibold text-gray-900 mb-2", children: e }),
      /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: t })
    ]
  }
), Sr = (e) => e, ti = () => {
  let e = Sr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sr;
    }
  };
}, ri = ti();
function Ge(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ge(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rr = { exports: {} }, yt = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function oi() {
  if (Qr) return q;
  Qr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, Q = e ? Symbol.for("react.scope") : 60119;
  function H(b) {
    if (typeof b == "object" && b !== null) {
      var N = b.$$typeof;
      switch (N) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case A:
                case y:
                case g:
                case a:
                  return b;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(b) {
    return H(b) === u;
  }
  return q.AsyncMode = c, q.ConcurrentMode = u, q.ContextConsumer = s, q.ContextProvider = a, q.Element = t, q.ForwardRef = A, q.Fragment = n, q.Lazy = y, q.Memo = g, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = h, q.isAsyncMode = function(b) {
    return E(b) || H(b) === c;
  }, q.isConcurrentMode = E, q.isContextConsumer = function(b) {
    return H(b) === s;
  }, q.isContextProvider = function(b) {
    return H(b) === a;
  }, q.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, q.isForwardRef = function(b) {
    return H(b) === A;
  }, q.isFragment = function(b) {
    return H(b) === n;
  }, q.isLazy = function(b) {
    return H(b) === y;
  }, q.isMemo = function(b) {
    return H(b) === g;
  }, q.isPortal = function(b) {
    return H(b) === r;
  }, q.isProfiler = function(b) {
    return H(b) === i;
  }, q.isStrictMode = function(b) {
    return H(b) === o;
  }, q.isSuspense = function(b) {
    return H(b) === h;
  }, q.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === h || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === g || b.$$typeof === a || b.$$typeof === s || b.$$typeof === A || b.$$typeof === v || b.$$typeof === O || b.$$typeof === Q || b.$$typeof === f);
  }, q.typeOf = H, q;
}
var $ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function ii() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, Q = e ? Symbol.for("react.scope") : 60119;
    function H(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === h || S === m || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === g || S.$$typeof === a || S.$$typeof === s || S.$$typeof === A || S.$$typeof === v || S.$$typeof === O || S.$$typeof === Q || S.$$typeof === f);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ye = S.$$typeof;
        switch (ye) {
          case t:
            var pt = S.type;
            switch (pt) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case h:
                return pt;
              default:
                var Ir = pt && pt.$$typeof;
                switch (Ir) {
                  case s:
                  case A:
                  case y:
                  case g:
                  case a:
                    return Ir;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var b = c, N = u, P = s, k = a, R = t, Y = A, T = n, l = y, I = g, w = r, D = i, M = o, J = h, le = !1;
    function Pe(S) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(S) || E(S) === c;
    }
    function x(S) {
      return E(S) === u;
    }
    function B(S) {
      return E(S) === s;
    }
    function G(S) {
      return E(S) === a;
    }
    function j(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function F(S) {
      return E(S) === A;
    }
    function K(S) {
      return E(S) === n;
    }
    function L(S) {
      return E(S) === y;
    }
    function U(S) {
      return E(S) === g;
    }
    function W(S) {
      return E(S) === r;
    }
    function _(S) {
      return E(S) === i;
    }
    function V(S) {
      return E(S) === o;
    }
    function fe(S) {
      return E(S) === h;
    }
    $.AsyncMode = b, $.ConcurrentMode = N, $.ContextConsumer = P, $.ContextProvider = k, $.Element = R, $.ForwardRef = Y, $.Fragment = T, $.Lazy = l, $.Memo = I, $.Portal = w, $.Profiler = D, $.StrictMode = M, $.Suspense = J, $.isAsyncMode = Pe, $.isConcurrentMode = x, $.isContextConsumer = B, $.isContextProvider = G, $.isElement = j, $.isForwardRef = F, $.isFragment = K, $.isLazy = L, $.isMemo = U, $.isPortal = W, $.isProfiler = _, $.isStrictMode = V, $.isSuspense = fe, $.isValidElementType = H, $.typeOf = E;
  }()), $;
}
var Hr;
function Kn() {
  return Hr || (Hr = 1, process.env.NODE_ENV === "production" ? yt.exports = oi() : yt.exports = ii()), yt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jt, Rr;
function ai() {
  if (Rr) return jt;
  Rr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(A) {
        return a[A];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(A) {
        u[A] = A;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jt = o() ? Object.assign : function(i, a) {
    for (var s, c = n(i), u, A = 1; A < arguments.length; A++) {
      s = Object(arguments[A]);
      for (var h in s)
        t.call(s, h) && (c[h] = s[h]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          r.call(s, u[m]) && (c[u[m]] = s[u[m]]);
      }
    }
    return c;
  }, jt;
}
var Ut, Tr;
function hr() {
  if (Tr) return Ut;
  Tr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ut = e, Ut;
}
var zt, Fr;
function Wn() {
  return Fr || (Fr = 1, zt = Function.call.bind(Object.prototype.hasOwnProperty)), zt;
}
var Jt, kr;
function di() {
  if (kr) return Jt;
  kr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = hr(), r = {}, n = Wn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var A in i)
        if (n(i, A)) {
          var h;
          try {
            if (typeof i[A] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = i[A](a, A, c, s, null, t);
          } catch (y) {
            h = y;
          }
          if (h && !(h instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + A + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + s + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jt = o, Jt;
}
var Kt, Yr;
function si() {
  if (Yr) return Kt;
  Yr = 1;
  var e = Kn(), t = ai(), r = hr(), n = Wn(), o = di(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Kt = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, A = "@@iterator";
    function h(x) {
      var B = x && (u && x[u] || x[A]);
      if (typeof B == "function")
        return B;
    }
    var m = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: Q(),
      arrayOf: H,
      element: E(),
      elementType: b(),
      instanceOf: N,
      node: Y(),
      objectOf: k,
      oneOf: P,
      oneOfType: R,
      shape: l,
      exact: I
    };
    function y(x, B) {
      return x === B ? x !== 0 || 1 / x === 1 / B : x !== x && B !== B;
    }
    function f(x, B) {
      this.message = x, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(x) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, G = 0;
      function j(K, L, U, W, _, V, fe) {
        if (W = W || m, V = V || U, fe !== r) {
          if (c) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = W + ":" + U;
            !B[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ye] = !0, G++);
          }
        }
        return L[U] == null ? K ? L[U] === null ? new f("The " + _ + " `" + V + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new f("The " + _ + " `" + V + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : x(L, U, W, _, V);
      }
      var F = j.bind(null, !1);
      return F.isRequired = j.bind(null, !0), F;
    }
    function O(x) {
      function B(G, j, F, K, L, U) {
        var W = G[j], _ = M(W);
        if (_ !== x) {
          var V = J(W);
          return new f(
            "Invalid " + K + " `" + L + "` of type " + ("`" + V + "` supplied to `" + F + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return v(B);
    }
    function Q() {
      return v(a);
    }
    function H(x) {
      function B(G, j, F, K, L) {
        if (typeof x != "function")
          return new f("Property `" + L + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var U = G[j];
        if (!Array.isArray(U)) {
          var W = M(U);
          return new f("Invalid " + K + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected an array."));
        }
        for (var _ = 0; _ < U.length; _++) {
          var V = x(U, _, F, K, L + "[" + _ + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(B);
    }
    function E() {
      function x(B, G, j, F, K) {
        var L = B[G];
        if (!s(L)) {
          var U = M(L);
          return new f("Invalid " + F + " `" + K + "` of type " + ("`" + U + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(x);
    }
    function b() {
      function x(B, G, j, F, K) {
        var L = B[G];
        if (!e.isValidElementType(L)) {
          var U = M(L);
          return new f("Invalid " + F + " `" + K + "` of type " + ("`" + U + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(x);
    }
    function N(x) {
      function B(G, j, F, K, L) {
        if (!(G[j] instanceof x)) {
          var U = x.name || m, W = Pe(G[j]);
          return new f("Invalid " + K + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return v(B);
    }
    function P(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(G, j, F, K, L) {
        for (var U = G[j], W = 0; W < x.length; W++)
          if (y(U, x[W]))
            return null;
        var _ = JSON.stringify(x, function(fe, S) {
          var ye = J(S);
          return ye === "symbol" ? String(S) : S;
        });
        return new f("Invalid " + K + " `" + L + "` of value `" + String(U) + "` " + ("supplied to `" + F + "`, expected one of " + _ + "."));
      }
      return v(B);
    }
    function k(x) {
      function B(G, j, F, K, L) {
        if (typeof x != "function")
          return new f("Property `" + L + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var U = G[j], W = M(U);
        if (W !== "object")
          return new f("Invalid " + K + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected an object."));
        for (var _ in U)
          if (n(U, _)) {
            var V = x(U, _, F, K, L + "." + _, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(B);
    }
    function R(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < x.length; B++) {
        var G = x[B];
        if (typeof G != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(G) + " at index " + B + "."
          ), a;
      }
      function j(F, K, L, U, W) {
        for (var _ = [], V = 0; V < x.length; V++) {
          var fe = x[V], S = fe(F, K, L, U, W, r);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && _.push(S.data.expectedType);
        }
        var ye = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new f("Invalid " + U + " `" + W + "` supplied to " + ("`" + L + "`" + ye + "."));
      }
      return v(j);
    }
    function Y() {
      function x(B, G, j, F, K) {
        return w(B[G]) ? null : new f("Invalid " + F + " `" + K + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return v(x);
    }
    function T(x, B, G, j, F) {
      return new f(
        (x || "React class") + ": " + B + " type `" + G + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function l(x) {
      function B(G, j, F, K, L) {
        var U = G[j], W = M(U);
        if (W !== "object")
          return new f("Invalid " + K + " `" + L + "` of type `" + W + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var _ in x) {
          var V = x[_];
          if (typeof V != "function")
            return T(F, K, L, _, J(V));
          var fe = V(U, _, F, K, L + "." + _, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return v(B);
    }
    function I(x) {
      function B(G, j, F, K, L) {
        var U = G[j], W = M(U);
        if (W !== "object")
          return new f("Invalid " + K + " `" + L + "` of type `" + W + "` " + ("supplied to `" + F + "`, expected `object`."));
        var _ = t({}, G[j], x);
        for (var V in _) {
          var fe = x[V];
          if (n(x, V) && typeof fe != "function")
            return T(F, K, L, V, J(fe));
          if (!fe)
            return new f(
              "Invalid " + K + " `" + L + "` key `" + V + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(G[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var S = fe(U, V, F, K, L + "." + V, r);
          if (S)
            return S;
        }
        return null;
      }
      return v(B);
    }
    function w(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(w);
          if (x === null || s(x))
            return !0;
          var B = h(x);
          if (B) {
            var G = B.call(x), j;
            if (B !== x.entries) {
              for (; !(j = G.next()).done; )
                if (!w(j.value))
                  return !1;
            } else
              for (; !(j = G.next()).done; ) {
                var F = j.value;
                if (F && !w(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(x, B) {
      return x === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function M(x) {
      var B = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : D(B, x) ? "symbol" : B;
    }
    function J(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var B = M(x);
      if (B === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function le(x) {
      var B = J(x);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function Pe(x) {
      return !x.constructor || !x.constructor.name ? m : x.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Kt;
}
var Wt, Lr;
function li() {
  if (Lr) return Wt;
  Lr = 1;
  var e = hr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Wt = function() {
    function n(a, s, c, u, A, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Wt;
}
if (process.env.NODE_ENV !== "production") {
  var ci = Kn(), ui = !0;
  rr.exports = si()(ci.isElement, ui);
} else
  rr.exports = li()();
var fi = rr.exports;
const X = /* @__PURE__ */ ni(fi);
function Vn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Vn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Xn() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Vn(e)) && (n && (n += " "), n += t);
  return n;
}
function Ai(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      u && (a += (s === !0 ? "" : " ") + t(u), s = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
var nr = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function gi() {
  if (Gr) return re;
  Gr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case c:
            case u:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case s:
                case h:
                case A:
                  return f;
                case i:
                  return f;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return re.ContextConsumer = i, re.ContextProvider = a, re.Element = e, re.ForwardRef = s, re.Fragment = r, re.Lazy = h, re.Memo = A, re.Portal = t, re.Profiler = o, re.StrictMode = n, re.Suspense = c, re.SuspenseList = u, re.isContextConsumer = function(f) {
    return y(f) === i;
  }, re.isContextProvider = function(f) {
    return y(f) === a;
  }, re.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, re.isForwardRef = function(f) {
    return y(f) === s;
  }, re.isFragment = function(f) {
    return y(f) === r;
  }, re.isLazy = function(f) {
    return y(f) === h;
  }, re.isMemo = function(f) {
    return y(f) === A;
  }, re.isPortal = function(f) {
    return y(f) === t;
  }, re.isProfiler = function(f) {
    return y(f) === o;
  }, re.isStrictMode = function(f) {
    return y(f) === n;
  }, re.isSuspense = function(f) {
    return y(f) === c;
  }, re.isSuspenseList = function(f) {
    return y(f) === u;
  }, re.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === c || f === u || f === m || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === A || f.$$typeof === a || f.$$typeof === i || f.$$typeof === s || f.$$typeof === g || f.getModuleId !== void 0);
  }, re.typeOf = y, re;
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
var jr;
function hi() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var v = f.$$typeof;
        switch (v) {
          case t:
            switch (f = f.type, f) {
              case n:
              case i:
              case o:
              case u:
              case A:
              case g:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case s:
                  case c:
                  case m:
                  case h:
                    return f;
                  case a:
                    return f;
                  default:
                    return v;
                }
            }
          case r:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    ne.ContextConsumer = a, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = m, ne.Memo = h, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = u, ne.SuspenseList = A, ne.isContextConsumer = function(f) {
      return e(f) === a;
    }, ne.isContextProvider = function(f) {
      return e(f) === s;
    }, ne.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, ne.isForwardRef = function(f) {
      return e(f) === c;
    }, ne.isFragment = function(f) {
      return e(f) === n;
    }, ne.isLazy = function(f) {
      return e(f) === m;
    }, ne.isMemo = function(f) {
      return e(f) === h;
    }, ne.isPortal = function(f) {
      return e(f) === r;
    }, ne.isProfiler = function(f) {
      return e(f) === i;
    }, ne.isStrictMode = function(f) {
      return e(f) === o;
    }, ne.isSuspense = function(f) {
      return e(f) === u;
    }, ne.isSuspenseList = function(f) {
      return e(f) === A;
    }, ne.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === A || f === g || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === h || f.$$typeof === s || f.$$typeof === a || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
    }, ne.typeOf = e;
  }()), ne;
}
process.env.NODE_ENV === "production" ? nr.exports = gi() : nr.exports = hi();
var wt = nr.exports;
function Ee(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Zn(e) {
  if (/* @__PURE__ */ Se.isValidElement(e) || wt.isValidElementType(e) || !Ee(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Zn(e[r]);
  }), t;
}
function ge(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ee(e) && Ee(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Se.isValidElement(t[o]) || wt.isValidElementType(t[o]) ? n[o] = t[o] : Ee(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ee(e[o]) ? n[o] = ge(e[o], t[o], r) : r.clone ? n[o] = Ee(t[o]) ? Zn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function it(e, t) {
  return t ? ge(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Re = process.env.NODE_ENV !== "production" ? X.oneOfType([X.number, X.string, X.object, X.array]) : {};
function Ur(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function mi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function pi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function yi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const c = t(e.breakpoints.not(...s), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const It = {
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
}, zr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${It[e]}px)`
}, Ci = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : It[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ne(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || zr;
    return t.reduce((a, s, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || zr;
    return Object.keys(t).reduce((a, s) => {
      if (mi(i.keys, s)) {
        const c = pi(n.containerQueries ? n : Ci, s);
        c && (a[c] = r(t[s], s));
      } else if (Object.keys(i.values || It).includes(s)) {
        const c = i.up(s);
        a[c] = r(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function vi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Jr(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Pt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function bt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Pt(e, r) || n, t && (o = t(o, n, e)), o;
}
function se(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], c = a.theme, u = Pt(c, n) || {};
    return Ne(a, s, (h) => {
      let m = bt(u, o, h);
      return h === m && typeof h == "string" && (m = bt(u, o, `${t}${h === "default" ? "" : je(h)}`, h)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Re
  } : {}, i.filterProps = [t], i;
}
function wi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const bi = {
  m: "margin",
  p: "padding"
}, xi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Kr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ei = wi((e) => {
  if (e.length > 2)
    if (Kr[e])
      e = Kr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = bi[t], o = xi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Bt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ot = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Di = [...Bt, ...Ot];
function ht(e, t, r, n) {
  const o = Pt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function mr(e) {
  return ht(e, "spacing", 8, "spacing");
}
function mt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ni(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = mt(t, r), n), {});
}
function Ii(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Ei(r), i = Ni(o, n), a = e[r];
  return Ne(e, a, i);
}
function qn(e, t) {
  const r = mr(e.theme);
  return Object.keys(e).map((n) => Ii(e, t, n, r)).reduce(it, {});
}
function ae(e) {
  return qn(e, Bt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Bt.reduce((e, t) => (e[t] = Re, e), {}) : {};
ae.filterProps = Bt;
function de(e) {
  return qn(e, Ot);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Ot.reduce((e, t) => (e[t] = Re, e), {}) : {};
de.filterProps = Ot;
process.env.NODE_ENV !== "production" && Di.reduce((e, t) => (e[t] = Re, e), {});
function St(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? it(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function me(e, t) {
  return se({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pi = me("border", he), Bi = me("borderTop", he), Oi = me("borderRight", he), Si = me("borderBottom", he), Qi = me("borderLeft", he), Mi = me("borderColor"), Hi = me("borderTopColor"), Ri = me("borderRightColor"), Ti = me("borderBottomColor"), Fi = me("borderLeftColor"), ki = me("outline", he), Yi = me("outlineColor"), Qt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ht(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: mt(t, n)
    });
    return Ne(e, e.borderRadius, r);
  }
  return null;
};
Qt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Re
} : {};
Qt.filterProps = ["borderRadius"];
St(Pi, Bi, Oi, Si, Qi, Mi, Hi, Ri, Ti, Fi, Qt, ki, Yi);
const Mt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ht(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: mt(t, n)
    });
    return Ne(e, e.gap, r);
  }
  return null;
};
Mt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Re
} : {};
Mt.filterProps = ["gap"];
const Ht = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ht(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: mt(t, n)
    });
    return Ne(e, e.columnGap, r);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Re
} : {};
Ht.filterProps = ["columnGap"];
const Rt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ht(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: mt(t, n)
    });
    return Ne(e, e.rowGap, r);
  }
  return null;
};
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Re
} : {};
Rt.filterProps = ["rowGap"];
const Li = se({
  prop: "gridColumn"
}), Gi = se({
  prop: "gridRow"
}), ji = se({
  prop: "gridAutoFlow"
}), Ui = se({
  prop: "gridAutoColumns"
}), zi = se({
  prop: "gridAutoRows"
}), Ji = se({
  prop: "gridTemplateColumns"
}), Ki = se({
  prop: "gridTemplateRows"
}), Wi = se({
  prop: "gridTemplateAreas"
}), Vi = se({
  prop: "gridArea"
});
St(Mt, Ht, Rt, Li, Gi, ji, Ui, zi, Ji, Ki, Wi, Vi);
function Xe(e, t) {
  return t === "grey" ? t : e;
}
const Xi = se({
  prop: "color",
  themeKey: "palette",
  transform: Xe
}), Zi = se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Xe
}), qi = se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Xe
});
St(Xi, Zi, qi);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $i = se({
  prop: "width",
  transform: Ae
}), pr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, c;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || It[r];
      return n ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ae(r)
      };
    };
    return Ne(e, e.maxWidth, t);
  }
  return null;
};
pr.filterProps = ["maxWidth"];
const _i = se({
  prop: "minWidth",
  transform: Ae
}), ea = se({
  prop: "height",
  transform: Ae
}), ta = se({
  prop: "maxHeight",
  transform: Ae
}), ra = se({
  prop: "minHeight",
  transform: Ae
});
se({
  prop: "size",
  cssProperty: "width",
  transform: Ae
});
se({
  prop: "size",
  cssProperty: "height",
  transform: Ae
});
const na = se({
  prop: "boxSizing"
});
St($i, pr, _i, ea, ta, ra, na);
const Tt = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
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
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Qt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Xe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Xe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Xe
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
    style: Mt
  },
  rowGap: {
    style: Rt
  },
  columnGap: {
    style: Ht
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
    transform: Ae
  },
  maxWidth: {
    style: pr
  },
  minWidth: {
    transform: Ae
  },
  height: {
    transform: Ae
  },
  maxHeight: {
    transform: Ae
  },
  minHeight: {
    transform: Ae
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
function oa(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ia(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function aa() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: A,
      style: h
    } = s;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = Pt(o, u) || {};
    return h ? h(a) : Ne(a, n, (y) => {
      let f = bt(m, A, y);
      return y === f && typeof y == "string" && (f = bt(m, A, `${r}${y === "default" ? "" : je(y)}`, y)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? Tt;
    function s(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const A = vi(o.breakpoints), h = Object.keys(A);
      let m = A;
      return Object.keys(u).forEach((g) => {
        const y = ia(u[g], o);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              m = it(m, e(g, y, o, a));
            else {
              const f = Ne({
                theme: o
              }, y, (v) => ({
                [g]: v
              }));
              oa(f, y) ? m[g] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : m = it(m, f);
            }
          else
            m = it(m, e(g, y, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ur(o, Jr(h, m))
      } : Ur(o, Jr(h, m));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const _e = aa();
_e.filterProps = ["sx"];
function da(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var sa = {
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
function la(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ca = /[A-Z]|^ms/g, ua = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $n = function(t) {
  return t.charCodeAt(1) === 45;
}, Wr = function(t) {
  return t != null && typeof t != "boolean";
}, Vt = /* @__PURE__ */ la(function(e) {
  return $n(e) ? e : e.replace(ca, "-$&").toLowerCase();
}), Vr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ua, function(n, o, i) {
          return Oe = {
            name: o,
            styles: i,
            next: Oe
          }, o;
        });
  }
  return sa[t] !== 1 && !$n(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function xt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Oe = {
          name: o.name,
          styles: o.styles,
          next: Oe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Oe = {
              name: a.name,
              styles: a.styles,
              next: Oe
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return fa(e, t, r);
    }
  }
  var c = r;
  return c;
}
function fa(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += xt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        Wr(s) && (n += Vt(i) + ":" + Vr(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          Wr(a[c]) && (n += Vt(i) + ":" + Vr(i, a[c]) + ";");
      else {
        var u = xt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Vt(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var Xr = /label:\s*([^\s;{]+)\s*(;|$)/g, Oe;
function Aa(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Oe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += xt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += xt(r, t, e[s]), n) {
      var c = i;
      o += c[s];
    }
  Xr.lastIndex = 0;
  for (var u = "", A; (A = Xr.exec(o)) !== null; )
    u += "-" + A[1];
  var h = da(o) + u;
  return {
    name: h,
    styles: o,
    next: Oe
  };
}
/**
 * @mui/styled-engine v7.3.10
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ga(e, t) {
  const r = Uo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function ha(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Zr = [];
function Ye(e) {
  return Zr[0] = e, Aa(Zr);
}
const ma = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function pa(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = ma(t), a = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - n / 100}${r})`;
  }
  function A(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : s(m);
  }
  function h(m) {
    const g = a.indexOf(m);
    return g === 0 ? s(a[1]) : g === a.length - 1 ? c(a[g]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: c,
    between: u,
    only: A,
    not: h,
    unit: r,
    ...o
  };
}
const ya = {
  borderRadius: 4
};
function _n(e = 8, t = mr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ca(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function eo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = pa(r), c = _n(o);
  let u = ge({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...ya,
      ...i
    }
  }, a);
  return u = yi(u), u.applyStyles = Ca, u = t.reduce((A, h) => ge(A, h), u), u.unstable_sxConfig = {
    ...Tt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return _e({
      sx: h,
      theme: this
    });
  }, u;
}
const va = {
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
function yr(e, t, r = "Mui") {
  const n = va[t];
  return n ? `${r}-${n}` : `${ri.generate(e)}-${t}`;
}
function wa(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = yr(e, o, r);
  }), n;
}
function to(e, t = "") {
  return e.displayName || e.name || t;
}
function qr(e, t, r) {
  const n = to(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function ba(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return to(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wt.ForwardRef:
          return qr(e, e.render, "ForwardRef");
        case wt.Memo:
          return qr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ro(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ye(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ye(o.style));
  }), n;
}
const xa = eo();
function Xt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Fe(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Ea(e) {
  return e ? (t, r) => r[e] : null;
}
function Da(e, t, r) {
  e.theme = Ba(e.theme) ? r : e.theme[t] || e.theme;
}
function vt(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => vt(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Fe(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? Fe(Ye(a), r) : a;
    }
    return no(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? Fe(Ye(n.style), r) : n.style : r ? Fe(Ye(n), r) : n;
}
function no(e, t, r = [], n = void 0) {
  var i;
  let o;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(o))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((i = e.ownerState) == null ? void 0 : i[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? Fe(Ye(s.style(o)), n) : s.style(o))) : r.push(n ? Fe(Ye(s.style), n) : s.style);
  }
  return r;
}
function Na(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xa,
    rootShouldForwardProp: n = Xt,
    slotShouldForwardProp: o = Xt
  } = e;
  function i(s) {
    Da(s, t, r);
  }
  return (s, c = {}) => {
    ha(s, (N) => N.filter((P) => P !== _e));
    const {
      name: u,
      slot: A,
      skipVariantsResolver: h,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Ea(oo(A)),
      ...y
    } = c, f = u && u.startsWith("Mui") || A ? "components" : "custom", v = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      A && A !== "Root" && A !== "root" || !1
    ), O = m || !1;
    let Q = Xt;
    A === "Root" || A === "root" ? Q = n : A ? Q = o : Oa(s) && (Q = void 0);
    const H = ga(s, {
      shouldForwardProp: Q,
      label: Pa(u, A),
      ...y
    }), E = (N) => {
      if (N.__emotion_real === N)
        return N;
      if (typeof N == "function")
        return function(k) {
          return vt(k, N, k.theme.modularCssLayers ? f : void 0);
        };
      if (Ee(N)) {
        const P = ro(N);
        return function(R) {
          return P.variants ? vt(R, P, R.theme.modularCssLayers ? f : void 0) : R.theme.modularCssLayers ? Fe(P.style, f) : P.style;
        };
      }
      return N;
    }, b = (...N) => {
      const P = [], k = N.map(E), R = [];
      if (P.push(i), u && g && R.push(function(I) {
        var J, le;
        const D = (le = (J = I.theme.components) == null ? void 0 : J[u]) == null ? void 0 : le.styleOverrides;
        if (!D)
          return null;
        const M = {};
        for (const Pe in D)
          M[Pe] = vt(I, D[Pe], I.theme.modularCssLayers ? "theme" : void 0);
        return g(I, M);
      }), u && !v && R.push(function(I) {
        var M, J;
        const w = I.theme, D = (J = (M = w == null ? void 0 : w.components) == null ? void 0 : M[u]) == null ? void 0 : J.variants;
        return D ? no(I, D, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), O || R.push(_e), Array.isArray(k[0])) {
        const l = k.shift(), I = new Array(P.length).fill(""), w = new Array(R.length).fill("");
        let D;
        D = [...I, ...l, ...w], D.raw = [...I, ...l.raw, ...w], P.unshift(D);
      }
      const Y = [...P, ...k, ...R], T = H(...Y);
      return s.muiName && (T.muiName = s.muiName), process.env.NODE_ENV !== "production" && (T.displayName = Ia(u, A, s)), T;
    };
    return H.withConfig && (b.withConfig = H.withConfig), b;
  };
}
function Ia(e, t, r) {
  return e ? `${e}${je(t || "")}` : `Styled(${ba(r)})`;
}
function Pa(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${oo(t || "Root")}`), r;
}
function Ba(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Oa(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function oo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function or(e, t, r = !1) {
  const n = {
    ...t
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
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const u = c;
              n[i][u] = or(a[u], s[u], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = Xn(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Sa(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Cr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Sa(e, t, r);
}
function Qa(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qe(Qa(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ge(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ge(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ma = (e) => {
  const t = Qe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, nt = (e, t) => {
  try {
    return Ma(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Ft(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function io(e) {
  e = Qe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, A = (u + r / 30) % 12) => o - i * Math.max(Math.min(A - 3, 9 - A, 1), -1);
  let s = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), Ft({
    type: s,
    values: c
  });
}
function ir(e) {
  e = Qe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Qe(io(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function $r(e, t) {
  const r = ir(e), n = ir(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ao(e, t) {
  return e = Qe(e), t = Cr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ft(e);
}
function Te(e, t, r) {
  try {
    return ao(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function kt(e, t) {
  if (e = Qe(e), t = Cr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ft(e);
}
function ee(e, t, r) {
  try {
    return kt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Yt(e, t) {
  if (e = Qe(e), t = Cr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ft(e);
}
function te(e, t, r) {
  try {
    return Yt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ha(e, t = 0.15) {
  return ir(e) > 0.5 ? kt(e, t) : Yt(e, t);
}
function Ct(e, t, r) {
  try {
    return Ha(e, t);
  } catch {
    return e;
  }
}
const Ra = /* @__PURE__ */ Se.createContext(void 0);
process.env.NODE_ENV !== "production" && (X.node, X.object);
function Ta(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? or(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? or(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Fa({
  props: e,
  name: t
}) {
  const r = Se.useContext(Ra);
  return Ta({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const _r = {
  theme: void 0
};
function ka(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (_r.theme = o.theme, i = ro(e(_r)), t = i, r = o.theme), i;
  };
}
function Ya(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const en = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, La = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, c]) => {
      (!r || r && !r([...i, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...i, s], Array.isArray(c) ? [...a, s] : a) : t([...i, s], c, a));
    });
  }
  n(e);
}, Ga = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Zt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return La(
    e,
    (s, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(s, c))) {
        const A = `--${r ? `${r}-` : ""}${s.join("-")}`, h = Ga(s, c);
        Object.assign(o, {
          [A]: h
        }), en(i, s, `var(${A})`, u), en(a, s, `var(${A}, ${h})`, u);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function ja(e, t = {}) {
  const {
    getSelector: r = O,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: A,
    css: h,
    varsWithDefaults: m
  } = Zt(u, t);
  let g = m;
  const y = {}, {
    [c]: f,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([E, b]) => {
    const {
      vars: N,
      css: P,
      varsWithDefaults: k
    } = Zt(b, t);
    g = ge(g, k), y[E] = {
      css: P,
      vars: N
    };
  }), f) {
    const {
      css: E,
      vars: b,
      varsWithDefaults: N
    } = Zt(f, t);
    g = ge(g, N), y[c] = {
      css: E,
      vars: b
    };
  }
  function O(E, b) {
    var P, k;
    let N = o;
    if (o === "class" && (N = ".%s"), o === "data" && (N = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (N = `[${o}="%s"]`), E) {
      if (N === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (P = a[E]) == null ? void 0 : P.palette) == null ? void 0 : k.mode) || E})`]: {
            ":root": b
          }
        };
      if (N)
        return e.defaultColorScheme === E ? `:root, ${N.replace("%s", String(E))}` : N.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let E = {
        ...A
      };
      return Object.entries(y).forEach(([, {
        vars: b
      }]) => {
        E = ge(E, b);
      }), E;
    },
    generateStyleSheets: () => {
      var R, Y;
      const E = [], b = e.defaultColorScheme || "light";
      function N(T, l) {
        Object.keys(l).length && E.push(typeof T == "string" ? {
          [T]: {
            ...l
          }
        } : T);
      }
      N(r(void 0, {
        ...h
      }), h);
      const {
        [b]: P,
        ...k
      } = y;
      if (P) {
        const {
          css: T
        } = P, l = (Y = (R = a[b]) == null ? void 0 : R.palette) == null ? void 0 : Y.mode, I = !n && l ? {
          colorScheme: l,
          ...T
        } : {
          ...T
        };
        N(r(b, {
          ...I
        }), I);
      }
      return Object.entries(k).forEach(([T, {
        css: l
      }]) => {
        var D, M;
        const I = (M = (D = a[T]) == null ? void 0 : D.palette) == null ? void 0 : M.mode, w = !n && I ? {
          colorScheme: I,
          ...l
        } : {
          ...l
        };
        N(r(T, {
          ...w
        }), w);
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
function Ua(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const st = {
  black: "#000",
  white: "#fff"
}, za = {
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
}, Ue = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ze = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, rt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Je = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ke = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, We = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function so() {
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
      paper: st.white,
      default: st.white
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
const lo = so();
function co() {
  return {
    text: {
      primary: st.white,
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
      active: st.white,
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
const ar = co();
function tn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Yt(e.main, o) : t === "dark" && (e.dark = kt(e.main, i)));
}
function rn(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Ja(e = "light") {
  return e === "dark" ? {
    main: Je[200],
    light: Je[50],
    dark: Je[400]
  } : {
    main: Je[700],
    light: Je[400],
    dark: Je[800]
  };
}
function Ka(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[500],
    light: Ue[300],
    dark: Ue[700]
  };
}
function Wa(e = "light") {
  return e === "dark" ? {
    main: ze[500],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[400],
    dark: ze[800]
  };
}
function Va(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[500],
    dark: Ke[900]
  };
}
function Xa(e = "light") {
  return e === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: We[800],
    light: We[500],
    dark: We[900]
  };
}
function Za(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rt[500],
    dark: rt[900]
  };
}
function qa(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function vr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || Ja(t), s = e.secondary || Ka(t), c = e.error || Wa(t), u = e.info || Va(t), A = e.success || Xa(t), h = e.warning || Za(t);
  function m(v) {
    if (o)
      return qa(v);
    const O = $r(v, ar.text.primary) >= r ? ar.text.primary : lo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const Q = $r(v, O);
      Q < 3 && console.error([`MUI: The contrast ratio of ${Q}:1 for ${O} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const g = ({
    color: v,
    name: O,
    mainShade: Q = 500,
    lightShade: H = 300,
    darkShade: E = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[Q] && (v.main = v[Q]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${Q}\` property.` : Ge(11, O ? ` (${O})` : "", Q));
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
} });` : Ge(12, O ? ` (${O})` : "", JSON.stringify(v.main)));
    return o ? (rn(o, v, "light", H, n), rn(o, v, "dark", E, n)) : (tn(v, "light", H, n), tn(v, "dark", E, n)), v.contrastText || (v.contrastText = m(v.main)), v;
  };
  let y;
  return t === "light" ? y = so() : t === "dark" && (y = co()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ge({
    // A collection of common colors.
    common: {
      ...st
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: A,
      name: "success"
    }),
    // The grey colors.
    grey: za,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, i);
}
function $a(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function _a(e, t) {
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
    ...t
  };
}
function ed(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nn = {
  textTransform: "uppercase"
}, on = '"Roboto", "Helvetica", "Arial", sans-serif';
function td(e, t) {
  const {
    fontFamily: r = on,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: A,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, g = A || ((v) => `${v / c * m}rem`), y = (v, O, Q, H, E) => ({
    fontFamily: r,
    fontWeight: v,
    fontSize: g(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Q,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === on ? {
      letterSpacing: `${ed(H / O)}em`
    } : {},
    ...E,
    ...u
  }), f = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, nn),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, nn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ge({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...f
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const rd = 0.2, nd = 0.14, od = 0.12;
function ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${nd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${od})`].join(",");
}
const id = ["none", ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ad = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, dd = {
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
function an(e) {
  return `${Math.round(e)}ms`;
}
function sd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ld(e) {
  const t = {
    ...ad,
    ...e.easing
  }, r = {
    ...dd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: sd,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const A = (m) => typeof m == "string", h = (m) => !Number.isNaN(parseFloat(m));
        !A(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !A(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), A(s) || console.error('MUI: Argument "easing" must be a string.'), !h(c) && !A(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((A) => `${A} ${typeof a == "string" ? a : an(a)} ${s} ${typeof c == "string" ? c : an(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const cd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ud(e) {
  return Ee(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function uo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !ud(s) || a.startsWith("unstable_") ? delete n[a] : Ee(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function dn(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const fd = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Ad(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : ao(t, fd(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${dn(r)})` : Yt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${dn(r)})` : kt(t, r);
    }
  });
}
function dr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: c,
    colorSpace: u,
    ...A
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://v7.mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ge(20));
  const h = vr({
    ...i,
    colorSpace: u
  }), m = eo(e);
  let g = ge(m, {
    mixins: _a(m.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: id.slice(),
    typography: td(h, s),
    transitions: ld(a),
    zIndex: {
      ...cd
    }
  });
  if (g = ge(g, A), g = t.reduce((y, f) => ge(y, f), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (v, O) => {
      let Q;
      for (Q in v) {
        const H = v[Q];
        if (y.includes(Q) && Object.keys(H).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = yr("", Q);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${Q}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: H
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[Q] = {};
        }
      }
    };
    Object.keys(g.components).forEach((v) => {
      const O = g.components[v].styleOverrides;
      O && v.startsWith("Mui") && f(O, v);
    });
  }
  return g.unstable_sxConfig = {
    ...Tt,
    ...A == null ? void 0 : A.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return _e({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = uo, Ad(g), g;
}
function gd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = gd(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function fo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ao(e) {
  return e === "dark" ? hd : [];
}
function md(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = vr({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...fo(a.mode),
      ...r
    },
    overlays: n || Ao(a.mode),
    ...i
  };
}
function pd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const yd = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Cd = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return yd(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function vd(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function C(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ot(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : io(e);
}
function be(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = nt(ot(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function wd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ve = (e) => {
  try {
    return e();
  } catch {
  }
}, bd = (e = "mui") => Ya(e);
function qt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = md({
      ...r,
      palette: {
        mode: i,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = dr({
    ...n,
    palette: {
      mode: i,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...fo(i),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Ao(i)
  }, s;
}
function xd(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: s = pd,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...A
  } = e, h = Object.keys(r)[0], m = n || (r.light && h !== "light" ? "light" : h), g = bd(i), {
    [m]: y,
    light: f,
    dark: v,
    ...O
  } = r, Q = {
    ...O
  };
  let H = y;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (H = !0), !H)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : Ge(21, m));
  let E;
  a && (E = "oklch");
  const b = qt(E, Q, H, A, m);
  f && !Q.light && qt(E, Q, f, void 0, "light"), v && !Q.dark && qt(E, Q, v, void 0, "dark");
  let N = {
    defaultColorScheme: m,
    ...b,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: Q,
    font: {
      ...$a(b.typography),
      ...b.font
    },
    spacing: wd(A.spacing)
  };
  Object.keys(N.colorSchemes).forEach((T) => {
    const l = N.colorSchemes[T].palette, I = (D) => {
      const M = D.split("-"), J = M[1], le = M[2];
      return g(D, l[J][le]);
    };
    l.mode === "light" && (C(l.common, "background", "#fff"), C(l.common, "onBackground", "#000")), l.mode === "dark" && (C(l.common, "background", "#000"), C(l.common, "onBackground", "#fff"));
    function w(D, M, J) {
      if (E) {
        let le;
        return D === Te && (le = `transparent ${((1 - J) * 100).toFixed(0)}%`), D === ee && (le = `#000 ${(J * 100).toFixed(0)}%`), D === te && (le = `#fff ${(J * 100).toFixed(0)}%`), `color-mix(in ${E}, ${M}, ${le})`;
      }
      return D(M, J);
    }
    if (vd(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      C(l.Alert, "errorColor", w(ee, a ? g("palette-error-light") : l.error.light, 0.6)), C(l.Alert, "infoColor", w(ee, a ? g("palette-info-light") : l.info.light, 0.6)), C(l.Alert, "successColor", w(ee, a ? g("palette-success-light") : l.success.light, 0.6)), C(l.Alert, "warningColor", w(ee, a ? g("palette-warning-light") : l.warning.light, 0.6)), C(l.Alert, "errorFilledBg", I("palette-error-main")), C(l.Alert, "infoFilledBg", I("palette-info-main")), C(l.Alert, "successFilledBg", I("palette-success-main")), C(l.Alert, "warningFilledBg", I("palette-warning-main")), C(l.Alert, "errorFilledColor", ve(() => l.getContrastText(l.error.main))), C(l.Alert, "infoFilledColor", ve(() => l.getContrastText(l.info.main))), C(l.Alert, "successFilledColor", ve(() => l.getContrastText(l.success.main))), C(l.Alert, "warningFilledColor", ve(() => l.getContrastText(l.warning.main))), C(l.Alert, "errorStandardBg", w(te, a ? g("palette-error-light") : l.error.light, 0.9)), C(l.Alert, "infoStandardBg", w(te, a ? g("palette-info-light") : l.info.light, 0.9)), C(l.Alert, "successStandardBg", w(te, a ? g("palette-success-light") : l.success.light, 0.9)), C(l.Alert, "warningStandardBg", w(te, a ? g("palette-warning-light") : l.warning.light, 0.9)), C(l.Alert, "errorIconColor", I("palette-error-main")), C(l.Alert, "infoIconColor", I("palette-info-main")), C(l.Alert, "successIconColor", I("palette-success-main")), C(l.Alert, "warningIconColor", I("palette-warning-main")), C(l.AppBar, "defaultBg", I("palette-grey-100")), C(l.Avatar, "defaultBg", I("palette-grey-400")), C(l.Button, "inheritContainedBg", I("palette-grey-300")), C(l.Button, "inheritContainedHoverBg", I("palette-grey-A100")), C(l.Chip, "defaultBorder", I("palette-grey-400")), C(l.Chip, "defaultAvatarColor", I("palette-grey-700")), C(l.Chip, "defaultIconColor", I("palette-grey-700")), C(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), C(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), C(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), C(l.LinearProgress, "primaryBg", w(te, a ? g("palette-primary-main") : l.primary.main, 0.62)), C(l.LinearProgress, "secondaryBg", w(te, a ? g("palette-secondary-main") : l.secondary.main, 0.62)), C(l.LinearProgress, "errorBg", w(te, a ? g("palette-error-main") : l.error.main, 0.62)), C(l.LinearProgress, "infoBg", w(te, a ? g("palette-info-main") : l.info.main, 0.62)), C(l.LinearProgress, "successBg", w(te, a ? g("palette-success-main") : l.success.main, 0.62)), C(l.LinearProgress, "warningBg", w(te, a ? g("palette-warning-light") : l.warning.main, 0.62)), C(l.Skeleton, "bg", E ? w(Te, a ? g("palette-text-primary") : l.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), C(l.Slider, "primaryTrack", w(te, a ? g("palette-primary-main") : l.primary.main, 0.62)), C(l.Slider, "secondaryTrack", w(te, a ? g("palette-secondary-main") : l.secondary.main, 0.62)), C(l.Slider, "errorTrack", w(te, a ? g("palette-error-main") : l.error.main, 0.62)), C(l.Slider, "infoTrack", w(te, a ? g("palette-info-main") : l.info.main, 0.62)), C(l.Slider, "successTrack", w(te, a ? g("palette-success-main") : l.success.main, 0.62)), C(l.Slider, "warningTrack", w(te, a ? g("palette-warning-main") : l.warning.main, 0.62));
      const D = E ? w(ee, a ? g("palette-background-default") : l.background.default, 0.6825) : Ct(l.background.default, 0.8);
      C(l.SnackbarContent, "bg", D), C(l.SnackbarContent, "color", ve(() => E ? ar.text.primary : l.getContrastText(D))), C(l.SpeedDialAction, "fabHoverBg", Ct(l.background.paper, 0.15)), C(l.StepConnector, "border", I("palette-grey-400")), C(l.StepContent, "border", I("palette-grey-400")), C(l.Switch, "defaultColor", I("palette-common-white")), C(l.Switch, "defaultDisabledColor", I("palette-grey-100")), C(l.Switch, "primaryDisabledColor", w(te, a ? g("palette-primary-main") : l.primary.main, 0.62)), C(l.Switch, "secondaryDisabledColor", w(te, a ? g("palette-secondary-main") : l.secondary.main, 0.62)), C(l.Switch, "errorDisabledColor", w(te, a ? g("palette-error-main") : l.error.main, 0.62)), C(l.Switch, "infoDisabledColor", w(te, a ? g("palette-info-main") : l.info.main, 0.62)), C(l.Switch, "successDisabledColor", w(te, a ? g("palette-success-main") : l.success.main, 0.62)), C(l.Switch, "warningDisabledColor", w(te, a ? g("palette-warning-main") : l.warning.main, 0.62)), C(l.TableCell, "border", w(te, Te(a ? g("palette-divider") : l.divider, 1), 0.88)), C(l.Tooltip, "bg", w(Te, a ? g("palette-grey-700") : l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      C(l.Alert, "errorColor", w(te, a ? g("palette-error-light") : l.error.light, 0.6)), C(l.Alert, "infoColor", w(te, a ? g("palette-info-light") : l.info.light, 0.6)), C(l.Alert, "successColor", w(te, a ? g("palette-success-light") : l.success.light, 0.6)), C(l.Alert, "warningColor", w(te, a ? g("palette-warning-light") : l.warning.light, 0.6)), C(l.Alert, "errorFilledBg", I("palette-error-dark")), C(l.Alert, "infoFilledBg", I("palette-info-dark")), C(l.Alert, "successFilledBg", I("palette-success-dark")), C(l.Alert, "warningFilledBg", I("palette-warning-dark")), C(l.Alert, "errorFilledColor", ve(() => l.getContrastText(l.error.dark))), C(l.Alert, "infoFilledColor", ve(() => l.getContrastText(l.info.dark))), C(l.Alert, "successFilledColor", ve(() => l.getContrastText(l.success.dark))), C(l.Alert, "warningFilledColor", ve(() => l.getContrastText(l.warning.dark))), C(l.Alert, "errorStandardBg", w(ee, a ? g("palette-error-light") : l.error.light, 0.9)), C(l.Alert, "infoStandardBg", w(ee, a ? g("palette-info-light") : l.info.light, 0.9)), C(l.Alert, "successStandardBg", w(ee, a ? g("palette-success-light") : l.success.light, 0.9)), C(l.Alert, "warningStandardBg", w(ee, a ? g("palette-warning-light") : l.warning.light, 0.9)), C(l.Alert, "errorIconColor", I("palette-error-main")), C(l.Alert, "infoIconColor", I("palette-info-main")), C(l.Alert, "successIconColor", I("palette-success-main")), C(l.Alert, "warningIconColor", I("palette-warning-main")), C(l.AppBar, "defaultBg", I("palette-grey-900")), C(l.AppBar, "darkBg", I("palette-background-paper")), C(l.AppBar, "darkColor", I("palette-text-primary")), C(l.Avatar, "defaultBg", I("palette-grey-600")), C(l.Button, "inheritContainedBg", I("palette-grey-800")), C(l.Button, "inheritContainedHoverBg", I("palette-grey-700")), C(l.Chip, "defaultBorder", I("palette-grey-700")), C(l.Chip, "defaultAvatarColor", I("palette-grey-300")), C(l.Chip, "defaultIconColor", I("palette-grey-300")), C(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), C(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), C(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), C(l.LinearProgress, "primaryBg", w(ee, a ? g("palette-primary-main") : l.primary.main, 0.5)), C(l.LinearProgress, "secondaryBg", w(ee, a ? g("palette-secondary-main") : l.secondary.main, 0.5)), C(l.LinearProgress, "errorBg", w(ee, a ? g("palette-error-main") : l.error.main, 0.5)), C(l.LinearProgress, "infoBg", w(ee, a ? g("palette-info-main") : l.info.main, 0.5)), C(l.LinearProgress, "successBg", w(ee, a ? g("palette-success-main") : l.success.main, 0.5)), C(l.LinearProgress, "warningBg", w(ee, a ? g("palette-warning-main") : l.warning.main, 0.5)), C(l.Skeleton, "bg", E ? w(Te, a ? g("palette-text-primary") : l.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), C(l.Slider, "primaryTrack", w(ee, a ? g("palette-primary-main") : l.primary.main, 0.5)), C(l.Slider, "secondaryTrack", w(ee, a ? g("palette-secondary-main") : l.secondary.main, 0.5)), C(l.Slider, "errorTrack", w(ee, a ? g("palette-error-main") : l.error.main, 0.5)), C(l.Slider, "infoTrack", w(ee, a ? g("palette-info-main") : l.info.main, 0.5)), C(l.Slider, "successTrack", w(ee, a ? g("palette-success-main") : l.success.main, 0.5)), C(l.Slider, "warningTrack", w(ee, a ? g("palette-warning-light") : l.warning.main, 0.5));
      const D = E ? w(te, a ? g("palette-background-default") : l.background.default, 0.985) : Ct(l.background.default, 0.98);
      C(l.SnackbarContent, "bg", D), C(l.SnackbarContent, "color", ve(() => E ? lo.text.primary : l.getContrastText(D))), C(l.SpeedDialAction, "fabHoverBg", Ct(l.background.paper, 0.15)), C(l.StepConnector, "border", I("palette-grey-600")), C(l.StepContent, "border", I("palette-grey-600")), C(l.Switch, "defaultColor", I("palette-grey-300")), C(l.Switch, "defaultDisabledColor", I("palette-grey-600")), C(l.Switch, "primaryDisabledColor", w(ee, a ? g("palette-primary-main") : l.primary.main, 0.55)), C(l.Switch, "secondaryDisabledColor", w(ee, a ? g("palette-secondary-main") : l.secondary.main, 0.55)), C(l.Switch, "errorDisabledColor", w(ee, a ? g("palette-error-main") : l.error.main, 0.55)), C(l.Switch, "infoDisabledColor", w(ee, a ? g("palette-info-main") : l.info.main, 0.55)), C(l.Switch, "successDisabledColor", w(ee, a ? g("palette-success-main") : l.success.main, 0.55)), C(l.Switch, "warningDisabledColor", w(ee, a ? g("palette-warning-light") : l.warning.main, 0.55)), C(l.TableCell, "border", w(ee, Te(a ? g("palette-divider") : l.divider, 1), 0.68)), C(l.Tooltip, "bg", w(Te, a ? g("palette-grey-700") : l.grey[700], 0.92));
    }
    a || (be(l.background, "default"), be(l.background, "paper"), be(l.common, "background"), be(l.common, "onBackground"), be(l, "divider")), Object.keys(l).forEach((D) => {
      const M = l[D];
      D !== "tonalOffset" && !a && M && typeof M == "object" && (M.main && C(l[D], "mainChannel", nt(ot(M.main))), M.light && C(l[D], "lightChannel", nt(ot(M.light))), M.dark && C(l[D], "darkChannel", nt(ot(M.dark))), M.contrastText && C(l[D], "contrastTextChannel", nt(ot(M.contrastText))), D === "text" && (be(l[D], "primary"), be(l[D], "secondary")), D === "action" && (M.active && be(l[D], "active"), M.selected && be(l[D], "selected")));
    });
  }), N = t.reduce((T, l) => ge(T, l), N);
  const P = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Cd(N),
    enableContrastVars: a
  }, {
    vars: k,
    generateThemeVars: R,
    generateStyleSheets: Y
  } = ja(N, P);
  return N.vars = k, Object.entries(N.colorSchemes[N.defaultColorScheme]).forEach(([T, l]) => {
    N[T] = l;
  }), N.generateThemeVars = R, N.generateStyleSheets = Y, N.generateSpacing = function() {
    return _n(A.spacing, mr(this));
  }, N.getColorSchemeSelector = Ua(c), N.spacing = N.generateSpacing(), N.shouldSkipGeneratingVar = s, N.unstable_sxConfig = {
    ...Tt,
    ...A == null ? void 0 : A.unstable_sxConfig
  }, N.unstable_sx = function(l) {
    return _e({
      sx: l,
      theme: this
    });
  }, N.toRuntimeSource = uo, N;
}
function sn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: vr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ed(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", c = o == null ? void 0 : o[s], u = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return dr(e, ...t);
    let A = r;
    "palette" in e || u[s] && (u[s] !== !0 ? A = u[s].palette : s === "dark" && (A = {
      mode: "dark"
    }));
    const h = dr({
      ...e,
      palette: A
    }, ...t);
    return h.defaultColorScheme = s, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, sn(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, sn(h, "light", u.light)), h;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), xd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Dd = Ed(), Nd = "$$material";
function Id(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Pd = (e) => Id(e) && e !== "classes", Bd = Na({
  themeId: Nd,
  defaultTheme: Dd,
  rootShouldForwardProp: Pd
}), Od = ka;
process.env.NODE_ENV !== "production" && (X.node, X.object.isRequired);
function Sd(e) {
  return Fa(e);
}
function Qd(e) {
  return yr("MuiSvgIcon", e);
}
wa("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Md = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${je(t)}`, `fontSize${je(r)}`]
  };
  return Ai(o, Qd, n);
}, Hd = Bd("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${je(r.color)}`], t[`fontSize${je(r.fontSize)}`]];
  }
})(Od(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, c, u, A, h, m, g, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (f) => !f.hasSvgAsChild,
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
          fontSize: ((c = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : c.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((A = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : A.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var v, O;
        return {
          props: {
            color: f
          },
          style: {
            color: (O = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : O.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (m = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : m.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : y.disabled
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
})), Et = /* @__PURE__ */ Se.forwardRef(function(t, r) {
  const n = Sd({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: A = !1,
    titleAccess: h,
    viewBox: m = "0 0 24 24",
    ...g
  } = n, y = /* @__PURE__ */ Se.isValidElement(o) && o.type === "svg", f = {
    ...n,
    color: a,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: A,
    viewBox: m,
    hasSvgAsChild: y
  }, v = {};
  A || (v.viewBox = m);
  const O = Md(f);
  return /* @__PURE__ */ p(Hd, {
    as: s,
    className: Xn(O.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...v,
    ...g,
    ...y && o.props,
    ownerState: f,
    children: [y ? o.props.children : o, h ? /* @__PURE__ */ d("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Et.propTypes = {
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
Et.muiName = "SvgIcon";
function go(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ d(Et, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Et.muiName, /* @__PURE__ */ Se.memo(/* @__PURE__ */ Se.forwardRef(r));
}
const Rd = go(/* @__PURE__ */ d("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), Td = go(/* @__PURE__ */ d("path", {
  d: "M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"
}), "Inbox"), Fd = () => /* @__PURE__ */ d(Lo, { sx: { p: 0 } }), kd = () => /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center h-full py-16 gap-3 bg-secondary-50/30", children: [
  /* @__PURE__ */ d(Td, { sx: { fontSize: 56, color: "var(--secondary-light)" } }),
  /* @__PURE__ */ d("p", { className: "text-sm font-medium text-secondary-main", children: "Sin registros para mostrar" }),
  /* @__PURE__ */ d("p", { className: "text-xs text-secondary-light", children: "Intenta ajustar el filtro de búsqueda" })
] }), Ll = ({
  title: e,
  rows: t,
  columns: r,
  isLoading: n = !1,
  searchTerm: o,
  onSearchChange: i,
  searchPlaceholder: a = "Buscar...",
  getRowId: s,
  extraFilters: c,
  rowHeight: u,
  initialState: A,
  autoHeight: h = !0
}) => /* @__PURE__ */ p(zo, { sx: {
  p: 2,
  overflow: "hidden",
  boxShadow: "var(--shadow-soft)",
  border: "1px solid var(--secondary-100)",
  borderRadius: "var(--radius-md)"
}, children: [
  /* @__PURE__ */ p(
    Or,
    {
      direction: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: { xs: "stretch", md: "center" },
      spacing: 2,
      sx: { p: 2, borderBottom: "2px solid var(--secondary-100)" },
      children: [
        /* @__PURE__ */ d(Z, { variant: "h6", fontWeight: "bold", children: e }),
        /* @__PURE__ */ p(Or, { direction: { xs: "column", sm: "row" }, spacing: 2, alignItems: "center", sx: { width: { xs: "100%", md: "auto" } }, children: [
          c,
          i && /* @__PURE__ */ d(
            tt,
            {
              placeholder: a,
              variant: "outlined",
              size: "small",
              value: o || "",
              onChange: (m) => i(m.target.value),
              sx: {
                width: { xs: "100%", sm: 350 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "var(--radius-md)"
                }
              },
              InputProps: {
                startAdornment: /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d(Rd, { sx: { color: "var(--secondary-main)" } }) })
              }
            }
          )
        ] })
      ]
    }
  ),
  /* @__PURE__ */ d(
    Yo,
    {
      rows: t,
      columns: r.map((m) => m.type === "actions" || m.renderCell ? m : {
        ...m,
        renderCell: (g) => /* @__PURE__ */ d("span", { className: "text-gray-500", children: g.value })
      }),
      getRowId: s || ((m) => m.id || m.uuid || Math.random()),
      loading: n,
      pageSizeOptions: [10, 25, 50],
      initialState: A || {
        pagination: { paginationModel: { pageSize: 10 } }
      },
      slots: {
        toolbar: Fd,
        noRowsOverlay: kd
      },
      slotProps: {
        pagination: {
          labelRowsPerPage: "Filas por página:",
          labelDisplayedRows: ({ from: m, to: g, count: y }) => `${m}-${g} de ${y !== -1 ? y : `más de ${g}`}`
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
      autoHeight: h,
      disableRowSelectionOnClick: !0,
      getRowHeight: u ? () => u : () => "auto"
    }
  )
] }), Yd = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  xxl: "max-w-4xl",
  xxxl: "max-w-5xl",
  xxxxl: "max-w-6xl",
  xl7: "max-w-7xl",
  full: "max-w-full mx-4"
}, Gl = ({
  open: e,
  onClose: t,
  icon: r,
  title: n,
  subtitle: o,
  footer: i,
  children: a,
  size: s = "md"
}) => /* @__PURE__ */ d(qe, { children: e && /* @__PURE__ */ p(De, { children: [
  /* @__PURE__ */ d(
    ce.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      onClick: t,
      className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
    },
    "overlay"
  ),
  /* @__PURE__ */ d("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ p(
    ce.div,
    {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 40 },
      transition: { type: "spring", stiffness: 320, damping: 30 },
      onClick: (c) => c.stopPropagation(),
      className: `
                                relative bg-white rounded-2xl shadow-premium w-full border border-secondary/20
                                max-h-[90vh] flex flex-col overflow-hidden
                                ${Yd[s]}
                            `,
      children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-4 px-6 py-5 border-b border-border bg-secondary-50/50", children: [
          /* @__PURE__ */ d("div", { className: "p-2.5 bg-primary text-primary-contrast rounded-xl shadow-md shadow-primary/20 flex-shrink-0", children: r }),
          /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ d("h2", { className: "text-lg font-black text-gray-900 leading-tight", children: n }),
            o && (typeof o == "string" ? /* @__PURE__ */ d("p", { className: "text-xs text-gray-500 font-medium mt-0.5", children: o }) : /* @__PURE__ */ d("div", { className: "text-xs text-gray-500 font-medium mt-0.5", children: o }))
          ] }),
          /* @__PURE__ */ d(
            "button",
            {
              onClick: t,
              className: "p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0",
              "aria-label": "Cerrar",
              children: /* @__PURE__ */ d(Me, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "flex-1 overflow-y-auto px-6 py-6", children: a }),
        /* @__PURE__ */ d("div", { className: "px-6 py-4 bg-secondary-50 border-t border-border flex items-center justify-end gap-3", children: i })
      ]
    },
    "modal"
  ) })
] }) }), jl = ({
  isOpen: e,
  onClose: t,
  title: r,
  children: n,
  footer: o,
  size: i = "md",
  showCloseButton: a = !0,
  closeOnOverlayClick: s = !0
}) => {
  Le(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [e]);
  const c = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4"
  }, u = () => {
    s && t();
  };
  return /* @__PURE__ */ d(qe, { children: e && /* @__PURE__ */ p(De, { children: [
    /* @__PURE__ */ d(
      ce.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: u,
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      }
    ),
    /* @__PURE__ */ d("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ p(
      ce.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.2 },
        className: `bg-white rounded-2xl shadow-premium w-full ${c[i]} max-h-[90vh] overflow-hidden flex flex-col border border-secondary/20`,
        onClick: (A) => A.stopPropagation(),
        children: [
          (r || a) && /* @__PURE__ */ p("div", { className: "flex items-center justify-between p-6 border-b border-border bg-secondary-50/50", children: [
            r && /* @__PURE__ */ d("h2", { className: "text-xl font-semibold text-gray-900", children: r }),
            a && /* @__PURE__ */ d(
              "button",
              {
                onClick: t,
                className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                children: /* @__PURE__ */ d(Me, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "p-6 overflow-y-auto custom-scrollbar flex-1", children: n }),
          o && /* @__PURE__ */ d("div", { className: "p-6 border-t border-border bg-secondary-50", children: o })
        ]
      }
    ) })
  ] }) });
}, Ul = ({
  title: e,
  description: t,
  icon: r,
  iconColor: n = "#f59e0b",
  // Default to a neutral primary blue
  iconBgColor: o = "rgba(255, 183, 17, 0.1)",
  actionButton: i
}) => /* @__PURE__ */ p(z, { sx: {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: { md: "center" },
  gap: 2,
  mb: 1
  // Margen inferior para separar del contenido siguiente
}, children: [
  /* @__PURE__ */ p(z, { children: [
    /* @__PURE__ */ p(Z, { variant: "h4", sx: { fontWeight: 900, color: "#111827", display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ d(z, { sx: { p: 1.5, bgcolor: o, borderRadius: "16px", display: "flex", color: n }, children: /* @__PURE__ */ d(r, { size: 32 }) }),
      e
    ] }),
    /* @__PURE__ */ d(Z, { variant: "body1", sx: { color: "#6b7280", mt: 0.5, ml: 1 }, children: t })
  ] }),
  i && /* @__PURE__ */ d(z, { children: i })
] }), zl = ({
  isActive: e,
  title: t,
  subtitle: r,
  stats: n,
  backgroundIcon: o
}) => /* @__PURE__ */ p("div", { className: "relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-sm transition-all duration-300", children: [
  /* @__PURE__ */ d("div", { className: `p-4 rounded-xl mb-3 shadow-premium ${e ? "bg-primary text-primary-contrast shadow-primary/20" : "bg-error text-white shadow-red-200"}`, children: e ? /* @__PURE__ */ d(Ar, { size: 32 }) : /* @__PURE__ */ d(Io, { size: 32 }) }),
  /* @__PURE__ */ p("div", { className: "text-center z-10", children: [
    /* @__PURE__ */ d("p", { className: "text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase", children: r }),
    /* @__PURE__ */ d("h3", { className: "text-2xl font-black text-gray-900 tracking-tight", children: t })
  ] }),
  n && /* @__PURE__ */ d("div", { className: "flex-1 px-4 text-[10px] font-black tracking-widest text-gray-400 uppercase", children: n }),
  /* @__PURE__ */ d("div", { className: "absolute -bottom-4 -right-4 opacity-[0.03] rotate-12 text-gray-900 pointer-events-none", children: o })
] }), Jl = ({ items: e, columns: t = 1, noDataMessage: r, noDataIcon: n }) => e.length === 0 && r ? /* @__PURE__ */ p("div", { className: "flex flex-col items-center justify-center py-10 gap-3 border border-dashed border-gray-200 rounded-xl bg-gray-50/50 w-full", children: [
  /* @__PURE__ */ d(n || er, { size: 32, className: "text-gray-300" }),
  /* @__PURE__ */ d("p", { className: "text-gray-400 text-xs font-semibold", children: r })
] }) : /* @__PURE__ */ d("div", { className: `grid gap-4 ${t === 2 ? "grid-cols-1 sm:grid-cols-2" : t === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`, children: e.map((i, a) => {
  const s = i.icon, c = i.colSpan === 2 ? "col-span-1 sm:col-span-2" : i.colSpan === 3 ? "col-span-1 sm:col-span-2 md:col-span-3" : "";
  return /* @__PURE__ */ p(
    "div",
    {
      className: `flex items-start gap-4 bg-white p-3 rounded-xl border border-gray-50 shadow-sm transition-all duration-200 hover:border-gray-100 hover:shadow-md group ${c}`,
      children: [
        /* @__PURE__ */ d("div", { className: `p-2 rounded-lg transition-colors duration-200 ${i.highlight ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`, children: /* @__PURE__ */ d(s, { size: 18 }) }),
        /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ d("p", { className: "text-[10px] font-black uppercase tracking-widest group-hover:text-gray-500", children: i.label }),
          /* @__PURE__ */ d("div", { className: `text-sm text-gray-400 break-words whitespace-pre-line ${i.mono ? "font-mono text-xs break-all" : ""}`, children: i.value })
        ] }),
        i.type === "pdf" && i.value !== "No registrado" && /* @__PURE__ */ d("div", { className: "flex-shrink-0", children: /* @__PURE__ */ d(dt, { title: "Visualizar documento PDF", arrow: !0, placement: "top", children: /* @__PURE__ */ d("span", { children: /* @__PURE__ */ d(
          we,
          {
            size: "sm",
            variant: "ghost",
            onClick: i.onClick,
            className: "h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200",
            children: /* @__PURE__ */ d(er, { size: 18 })
          }
        ) }) }) }),
        i.type === "url" && i.value !== "No registrado" && i.value !== "No disponible" && !!i.value && (() => {
          const u = typeof i.value == "string" ? i.value.trim() : "";
          return !u || !((h) => {
            try {
              const m = h.startsWith("http://") || h.startsWith("https://") ? h : `https://${h}`;
              return new URL(m).hostname.includes(".");
            } catch {
              return !1;
            }
          })(u) ? null : /* @__PURE__ */ d("div", { className: "flex-shrink-0", children: /* @__PURE__ */ d(dt, { title: "Abrir sitio web", arrow: !0, placement: "top", children: /* @__PURE__ */ d("span", { children: /* @__PURE__ */ d(
            we,
            {
              size: "sm",
              variant: "ghost",
              onClick: () => {
                if (i.onClick)
                  i.onClick();
                else {
                  const h = u.startsWith("http://") || u.startsWith("https://") ? u : `https://${u}`;
                  window.open(h, "_blank", "noopener,noreferrer");
                }
              },
              className: "h-9 px-4 rounded-lg bg-secondary-100 text-secondary-dark hover:bg-secondary-200",
              children: /* @__PURE__ */ d(On, { size: 18 })
            }
          ) }) }) });
        })()
      ]
    },
    a
  );
}) }), Kl = ({
  icon: e,
  maxLength: t,
  showCounter: r = !0,
  rows: n,
  multiline: o,
  label: i,
  required: a,
  ...s
}) => {
  var h, m;
  const c = s.value ? String(s.value).length : 0, u = r && t ? `${c} / ${t}` : null;
  return /* @__PURE__ */ p("div", { className: "flex flex-col w-full gap-0.5", children: [
    /* @__PURE__ */ d(
      tt,
      {
        fullWidth: !0,
        variant: "outlined",
        multiline: o,
        minRows: o ? n || 3 : void 0,
        label: a && i ? /* @__PURE__ */ p("span", { children: [
          i,
          " ",
          /* @__PURE__ */ d("span", { className: "text-red-500 font-bold", children: "*" })
        ] }) : i,
        required: !1,
        inputProps: {
          maxLength: t,
          ...s.inputProps,
          style: {
            ...(h = s.inputProps) == null ? void 0 : h.style,
            wordBreak: "break-word",
            backgroundColor: "white"
          }
        },
        helperText: s.helperText,
        InputProps: {
          ...s.InputProps,
          startAdornment: e ? /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center", children: e }) }) : (m = s.InputProps) == null ? void 0 : m.startAdornment
        },
        ...s
      }
    ),
    u && /* @__PURE__ */ d("div", { className: "flex justify-end px-2 mt-1", children: /* @__PURE__ */ d("span", { className: `text-[11px]  tabular-nums tracking-tighter ${s.error ? "text-red-500" : "text-gray-400 opacity-80"}`, children: u }) })
  ] });
}, Wl = ({
  label: e,
  value: t,
  onChange: r,
  options: n,
  fullWidth: o = !0,
  icon: i,
  error: a,
  helperText: s,
  disabled: c = !1,
  required: u
}) => {
  const A = u && e ? /* @__PURE__ */ p("span", { children: [
    e,
    " ",
    /* @__PURE__ */ d("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ p(
    Jo,
    {
      fullWidth: o,
      error: a,
      variant: "outlined",
      disabled: c,
      sx: { backgroundColor: "white" },
      children: [
        /* @__PURE__ */ d(Ko, { children: A }),
        /* @__PURE__ */ d(
          Wo,
          {
            value: String(t),
            label: A,
            disabled: c,
            onChange: (h) => r(String(h.target.value)),
            startAdornment: i ? /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center", children: i }) }) : null,
            children: n.map((h) => /* @__PURE__ */ d(Vo, { value: String(h.value), children: h.label }, String(h.value)))
          }
        ),
        s && /* @__PURE__ */ d(Z, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.5 }, children: s })
      ]
    }
  );
}, Vl = ({
  label: e,
  value: t,
  onChange: r,
  options: n,
  fullWidth: o = !0,
  icon: i,
  error: a,
  helperText: s,
  placeholder: c = "Seleccione una opción...",
  loading: u = !1,
  disabled: A = !1,
  required: h
}) => {
  const m = n.find((y) => y.value === t) || null, g = h && e ? /* @__PURE__ */ p("span", { children: [
    e,
    " ",
    /* @__PURE__ */ d("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ p(z, { className: "w-full", children: [
    /* @__PURE__ */ d(
      gr,
      {
        fullWidth: o,
        options: n,
        loading: u,
        disabled: A,
        getOptionLabel: (y) => y.label || "",
        isOptionEqualToValue: (y, f) => y.value === f.value,
        value: m,
        onChange: (y, f) => {
          r(f ? f.value : "");
        },
        noOptionsText: "No se encontraron resultados",
        loadingText: "Cargando...",
        renderInput: (y) => /* @__PURE__ */ d(
          tt,
          {
            ...y,
            label: g,
            placeholder: c,
            error: a,
            disabled: A,
            variant: "outlined",
            InputProps: {
              ...y.InputProps,
              startAdornment: i ? /* @__PURE__ */ p(De, { children: [
                /* @__PURE__ */ d(He, { position: "start", sx: { ml: 1 }, children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center", children: i }) }),
                y.InputProps.startAdornment
              ] }) : y.InputProps.startAdornment,
              style: { backgroundColor: "white" }
            }
          }
        ),
        renderOption: (y, f) => /* @__PURE__ */ jo(z, { component: "li", ...y, key: String(f.value) }, /* @__PURE__ */ d(Z, { variant: "body2", children: f.label }))
      }
    ),
    s && /* @__PURE__ */ d(
      Z,
      {
        variant: "caption",
        color: a ? "error" : "textSecondary",
        sx: { mt: 0.5, ml: 1.5, display: "block" },
        children: s
      }
    )
  ] });
}, Xl = ({
  label: e,
  placeholder: t,
  error: r,
  helperText: n,
  icon: o,
  loading: i,
  required: a,
  fullWidth: s = !0,
  ...c
}) => /* @__PURE__ */ d(
  gr,
  {
    ...c,
    loading: i,
    fullWidth: s,
    renderInput: (u) => /* @__PURE__ */ d(
      tt,
      {
        ...u,
        label: e,
        placeholder: t,
        error: r,
        helperText: n,
        required: a,
        variant: "outlined",
        InputProps: {
          ...u.InputProps,
          startAdornment: o ? /* @__PURE__ */ p(De, { children: [
            /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center", children: o }) }),
            u.InputProps.startAdornment
          ] }) : u.InputProps.startAdornment
        }
      }
    )
  }
), Zl = ({
  label: e,
  children: t,
  checked: r,
  onChange: n,
  disabled: o = !1,
  color: i = "primary",
  className: a = "",
  description: s
}) => /* @__PURE__ */ d(
  Fn,
  {
    disabled: o,
    className: `m-0 p-2.5 rounded-xl border transition-all duration-200 w-full ${r ? "bg-primary/5 border-primary/10" : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"} ${a}`,
    control: /* @__PURE__ */ d(
      Xo,
      {
        checked: r,
        onChange: (c) => n(c.target.checked),
        color: i,
        disabled: o,
        size: "small",
        sx: {
          padding: "4px"
        }
      }
    ),
    label: /* @__PURE__ */ p(z, { className: "flex flex-col ml-1.5 w-full min-w-0", children: [
      /* @__PURE__ */ d("div", { className: `text-[11px] leading-tight transition-colors w-full min-w-0 ${r ? "text-primary font-bold" : "text-gray-700"}`, children: t || e }),
      s && /* @__PURE__ */ d("span", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5", children: s })
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
Jn.extend($o);
const ln = {
  xs: { height: "30px", fontSize: "0.75rem", padding: "3px 6px", iconSize: "0.95rem", muiSize: "small" },
  sm: { height: "36px", fontSize: "0.8125rem", padding: "6px 8px", iconSize: "1.1rem", muiSize: "small" },
  small: { height: "36px", fontSize: "0.8125rem", padding: "6px 8px", iconSize: "1.1rem", muiSize: "small" },
  md: { height: "44px", fontSize: "0.875rem", padding: "10px 12px", iconSize: "1.25rem", muiSize: "medium" },
  medium: { height: "44px", fontSize: "0.875rem", padding: "10px 12px", iconSize: "1.25rem", muiSize: "medium" },
  lg: { height: "52px", fontSize: "1rem", padding: "14px 16px", iconSize: "1.4rem", muiSize: "medium" },
  large: { height: "52px", fontSize: "1rem", padding: "14px 16px", iconSize: "1.4rem", muiSize: "medium" }
}, ql = ({
  label: e,
  value: t,
  onChange: r,
  icon: n,
  error: o,
  helperText: i,
  disabled: a,
  required: s,
  size: c = "sm"
}) => {
  const u = s && e ? /* @__PURE__ */ p("span", { children: [
    e,
    " ",
    /* @__PURE__ */ d("span", { className: "text-red-500 font-bold", children: "*" })
  ] }) : e, A = ln[c] || ln.sm;
  return /* @__PURE__ */ d(
    qo,
    {
      label: u,
      format: "DD/MM/YYYY",
      localeText: {
        fieldDayPlaceholder: () => "dd",
        fieldMonthPlaceholder: () => "mm",
        fieldYearPlaceholder: () => "yyyy"
      },
      value: t ? Jn(t, ["DD-MM-YYYY", "YYYY-MM-DD"]) : null,
      onChange: (h) => {
        h && h.isValid() ? r(h.format("DD-MM-YYYY")) : r("");
      },
      disabled: a,
      slotProps: {
        textField: {
          fullWidth: !0,
          variant: "outlined",
          size: A.muiSize,
          error: o,
          helperText: i,
          sx: {
            backgroundColor: "white !important",
            borderRadius: "var(--radius-md) !important",
            "& .MuiInputBase-root": {
              height: `${A.height} !important`,
              fontSize: `${A.fontSize} !important`,
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
              padding: `${A.padding} !important`,
              fontSize: `${A.fontSize} !important`
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
              fontSize: `${A.iconSize} !important`
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
              startAdornment: n ? /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center ml-1", children: n }) }) : void 0
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
}, $l = ({
  label: e,
  checked: t,
  onChange: r,
  icon: n,
  description: o,
  className: i = "",
  disabled: a = !1
}) => /* @__PURE__ */ d(
  Fn,
  {
    disabled: a,
    className: `m-0 p-3 rounded-xl border border-transparent transition-all duration-200 w-full ${t ? "bg-primary/5 border-primary/10" : "hover:bg-gray-50"} ${i}`,
    control: /* @__PURE__ */ d(
      kn,
      {
        checked: t,
        onChange: (s) => r(s.target.checked),
        color: "primary",
        disabled: a
      }
    ),
    label: /* @__PURE__ */ p(z, { className: "flex items-center gap-3 ml-2", children: [
      n && /* @__PURE__ */ d("div", { className: `p-1.5 rounded-lg transition-all duration-300 ${t ? "bg-primary text-white shadow-md shadow-primary/20 scale-110" : "bg-gray-100 text-gray-400"}`, children: Go.cloneElement(n, { size: 16 }) }),
      /* @__PURE__ */ p("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ d("span", { className: `text-sm font-black tracking-tight transition-colors ${t ? "text-primary" : "text-gray-700"}`, children: e }),
        o && /* @__PURE__ */ d("span", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5", children: o })
      ] })
    ] }),
    sx: {
      "& .MuiFormControlLabel-label": {
        width: "100%"
      }
    }
  }
), _l = ({
  label: e,
  placeholder: t = "Escriba y presione Enter...",
  tags: r,
  onTagsChange: n,
  icon: o,
  error: i,
  helperText: a,
  required: s,
  validate: c
}) => /* @__PURE__ */ d(z, { className: "flex flex-col gap-2 w-full", children: /* @__PURE__ */ d(
  gr,
  {
    multiple: !0,
    freeSolo: !0,
    options: [],
    value: r,
    onChange: (u, A) => {
      const h = A[A.length - 1];
      if (typeof h == "string") {
        const m = h.trim().replace(/,/g, "");
        if (m && !r.includes(m)) {
          if (c && !c(m)) return;
          n([...r, m]);
        }
      } else
        n(A);
    },
    renderTags: (u, A) => u.map((h, m) => /* @__PURE__ */ d(
      Yn,
      {
        variant: "filled",
        label: h,
        size: "small",
        ...A({ index: m }),
        deleteIcon: /* @__PURE__ */ d(Me, { size: 14 }),
        className: "bg-primary/10 text-primary font-bold border-0"
      }
    )),
    renderInput: (u) => /* @__PURE__ */ d(
      tt,
      {
        ...u,
        label: e,
        placeholder: r.length === 0 ? t : "",
        error: i,
        helperText: a,
        required: s,
        fullWidth: !0,
        InputProps: {
          ...u.InputProps,
          startAdornment: /* @__PURE__ */ p(De, { children: [
            o && /* @__PURE__ */ d(He, { position: "start", children: /* @__PURE__ */ d("span", { className: "text-gray-400", children: o }) }),
            u.InputProps.startAdornment
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
) }), ec = ({
  icon: e,
  maxLength: t,
  showCounter: r = !0,
  minRows: n = 3,
  label: o,
  required: i,
  ...a
}) => {
  var A, h;
  const s = a.value ? String(a.value).length : 0, c = r && t ? `${s} / ${t}` : null;
  return /* @__PURE__ */ p("div", { className: "flex flex-col w-full gap-0.5", children: [
    /* @__PURE__ */ d(
      tt,
      {
        ...a,
        fullWidth: !0,
        variant: "outlined",
        multiline: !0,
        minRows: n,
        label: i && o ? /* @__PURE__ */ p("span", { children: [
          o,
          " ",
          /* @__PURE__ */ d("span", { className: "text-red-500 font-bold", children: "*" })
        ] }) : o,
        required: !1,
        inputProps: {
          maxLength: t,
          ...a.inputProps,
          style: {
            ...(A = a.inputProps) == null ? void 0 : A.style,
            wordBreak: "break-word"
          }
        },
        InputProps: {
          ...a.InputProps,
          startAdornment: e ? /* @__PURE__ */ d(He, { position: "start", sx: { alignSelf: "flex-start", mt: 1.5 }, children: /* @__PURE__ */ d("span", { className: "text-gray-400 flex items-center ml-1", children: e }) }) : (h = a.InputProps) == null ? void 0 : h.startAdornment
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
    c && /* @__PURE__ */ d("div", { className: "flex justify-end px-2 mt-1", children: /* @__PURE__ */ d("span", { className: `text-[11px] tabular-nums tracking-tighter ${a.error ? "text-red-500" : "text-gray-400 opacity-80"}`, children: c }) })
  ] });
}, tc = ({
  title: e,
  subtitle: t,
  icon: r,
  children: n,
  className: o = "",
  variant: i = "gray"
}) => /* @__PURE__ */ p(z, { className: `${{
  default: "",
  gray: "p-4 bg-gray-50 rounded-2xl border border-gray-100",
  white: "p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
}[i]} flex flex-col gap-4 ${o}`, children: [
  /* @__PURE__ */ p("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ p(Z, { variant: "subtitle1", className: "font-bold flex items-center gap-2 text-primary", children: [
      r && /* @__PURE__ */ d("span", { className: "flex items-center", children: r }),
      e
    ] }),
    t && /* @__PURE__ */ d(Z, { variant: "caption", className: "text-gray-500", children: t })
  ] }),
  /* @__PURE__ */ d(z, { className: "w-full", children: n })
] }), Ld = [
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
], rc = ({
  value: e,
  onChange: t,
  label: r = "Teléfono de Contacto",
  error: n = !1,
  helperText: o,
  onlyCountries: i = Ld,
  defaultCountry: a = "CO",
  fullWidth: s = !0,
  variant: c = "outlined",
  ...u
}) => /* @__PURE__ */ d(z, { className: "flex flex-col w-full gap-0.5", children: /* @__PURE__ */ d(
  _o,
  {
    value: e,
    onChange: t,
    label: r,
    error: n,
    helperText: o,
    onlyCountries: i,
    defaultCountry: a,
    fullWidth: s,
    variant: c,
    ...u,
    style: { backgroundColor: "white" }
  }
) }), Gd = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[2-467])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-7]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]|50"]], ["(\\d{8})", "$1", ["[5-7]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|[67]3)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "(?:400|[5-9]\\d\\d)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-9]"]]]], ET: ["251", "00", "(?:11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[48]\\d{8}|[2-9]\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|4(?:[0-35]|4[16-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1(?:05|[2-9]))", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-6]|80[2-46]", "11|2[02]|33|4[04]|79[1-6]|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], MC: ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-37-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85[02-46-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[0-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[013]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|9[2-9]"]], ["(\\d)(\\d{7})", "$1 $2", ["[267]|904"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[346-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024", "20240"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]", "20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[2-4]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["983[2-57-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[02589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}", [7, 8, 9, 10], [["(\\d{4})(\\d{4,6})", "$1 $2", ["1(?:2[02]|[89])"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[26]|6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[23568]\\d{6}", [7, 9, 10], [["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"], "0$1"], ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["548"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[256]|39|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function jd(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(Gd), e.apply(this, r);
}
function cn(e, t) {
  e = e.split("-"), t = t.split("-");
  for (var r = e[0].split("."), n = t[0].split("."), o = 0; o < 3; o++) {
    var i = Number(r[o]), a = Number(n[o]);
    if (i > a) return 1;
    if (a > i) return -1;
    if (!isNaN(i) && isNaN(a)) return 1;
    if (isNaN(i) && !isNaN(a)) return -1;
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
var Ud = {}.constructor;
function Ze(e) {
  return e != null && e.constructor === Ud;
}
var zd = /^\d+$/;
function Jd(e) {
  return zd.test(e);
}
function et(e) {
  "@babel/helpers - typeof";
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, et(e);
}
function Lt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Kd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wd(n.key), n);
  }
}
function Gt(e, t, r) {
  return t && Kd(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wd(e) {
  var t = Vd(e, "string");
  return et(t) == "symbol" ? t : t + "";
}
function Vd(e, t) {
  if (et(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (et(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Xd = "1.2.0", Zd = "1.7.35", un = " ext. ", ue = /* @__PURE__ */ function() {
  function e(t) {
    Lt(this, e), ho(t), this.metadata = t, po.call(this, t);
  }
  return Gt(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(r) {
        return r !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(r) {
      return this.metadata.countries[r];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(r) {
      return this.getCountryMetadata(r) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(r) {
      if (this.getCountryCodesForCallingCode(r))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[r])
          return !0;
      } else {
        var n = this.countryCallingCodes()[r];
        if (n && n.length === 1 && n[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(r) {
      return this.nonGeographic() ? !!this.nonGeographic()[r] : !this.getCountryCodesForCallingCode(r);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
    /**
     * Selects a telephone numbering plan based on either a country code or a calling code.
     * @param {string} argument — Country code or calling code.
     * @param {string} legacyArgumentCallingCode — Legacy argument: calling code, if the first argument is not passed.
     */
  }, {
    key: "selectNumberingPlan",
    value: function(r, n) {
      var o, i;
      if (r && (Jd(r) ? i = r : o = r), n && (i = n), o && o !== "001") {
        var a = this.getCountryMetadata(o);
        if (!a)
          throw new Error("Unknown country: ".concat(o));
        this.numberingPlan = new fn(a, this);
      } else if (i) {
        if (!this.hasCallingCode(i))
          throw new Error("Unknown calling code: ".concat(i));
        this.numberingPlan = new fn(this.getNumberingPlanMetadata(i), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(r) {
      var n = this.countryCallingCodes()[r];
      if (n)
        return n.length === 1 && n[0].length === 3 ? void 0 : n;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(r) {
      var n = this.getCountryCodesForCallingCode(r);
      if (n)
        return n[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(r) {
      var n = this.getCountryCodeForCallingCode(r);
      if (n)
        return this.getCountryMetadata(n);
      if (this.nonGeographic()) {
        var o = this.nonGeographic()[r];
        if (o)
          return o;
      } else {
        var i = this.countryCallingCodes()[r];
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
    value: function(r) {
      return this.numberingPlan.type(r);
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
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), fn = /* @__PURE__ */ function() {
  function e(t, r) {
    Lt(this, e), this.globalMetadataObject = r, this.metadata = t, po.call(this, r.metadata);
  }
  return Gt(e, [{
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
    value: function(r) {
      return r[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var r = this, n = this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || [];
      return n.map(function(o) {
        return new qd(o, r);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(r) {
      return r[this.v1 ? 4 : this.v2 ? 5 : 6];
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
    value: function(r) {
      if (this.hasTypes() && An(this.types(), r))
        return new _d(An(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? un : this.metadata[13] || un;
    }
  }]);
}(), qd = /* @__PURE__ */ function() {
  function e(t, r) {
    Lt(this, e), this._format = t, this.metadata = r;
  }
  return Gt(e, [{
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
      !$d.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), $d = /^\(?\$1\)?$/, _d = /* @__PURE__ */ function() {
  function e(t, r) {
    Lt(this, e), this.type = t, this.metadata = r;
  }
  return Gt(e, [{
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
function An(e, t) {
  switch (t) {
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
function ho(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Ze(e) || !Ze(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ze(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + es(e) + ": " + e, "."));
}
var es = function(t) {
  return et(t);
};
function mo(e, t) {
  var r = new ue(t);
  if (r.hasCountry(e))
    return r.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function ts(e, t) {
  return t.countries.hasOwnProperty(e);
}
function po(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? cn(t, Xd) === -1 ? this.v2 = !0 : cn(t, Zd) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function wr(e, t, r) {
  return rs(e, void 0, t, r);
}
function rs(e, t, r, n) {
  r && (n = new ue(n.metadata), n.selectNumberingPlan(r));
  var o = n.type(t), i = o && o.possibleLengths() || n.possibleLengths();
  if (!i)
    return "IS_POSSIBLE";
  var a = e.length, s = i[0];
  return s === a ? "IS_POSSIBLE" : s > a ? "TOO_SHORT" : i[i.length - 1] < a ? "TOO_LONG" : i.indexOf(a, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function ns(e, t, r) {
  t === void 0 && (t = {});
  var n = new ue(r);
  if (t.v2) {
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
    return yo(e.phone || e.nationalNumber, n);
  if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function yo(e, t) {
  switch (wr(e, void 0, t)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Ie(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function os(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = is(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function is(e, t) {
  if (e) {
    if (typeof e == "string") return gn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gn(e, t) : void 0;
  }
}
function gn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var as = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function br(e, t, r) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    var n = new ue(r);
    n.selectNumberingPlan(e.country || e.countryCallingCode);
    var o = t.v2 ? e.nationalNumber : e.phone;
    if (Ie(o, n.nationalNumberPattern())) {
      if ($t(o, "FIXED_LINE", n))
        return n.type("MOBILE") && n.type("MOBILE").pattern() === "" || !n.type("MOBILE") || $t(o, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var i = os(as), a; !(a = i()).done; ) {
        var s = a.value;
        if ($t(o, s, n))
          return s;
      }
    }
  }
}
function $t(e, t, r) {
  var n = r.type(t);
  return !n || !n.pattern() || n.possibleLengths() && n.possibleLengths().indexOf(e.length) < 0 ? !1 : Ie(e, n.pattern());
}
function ds(e, t, r) {
  t = t || {};
  var n = new ue(r);
  if (n.selectNumberingPlan(e.country || e.countryCallingCode), n.hasTypes())
    return br(e, t, n.metadata) !== void 0;
  var o = t.v2 ? e.nationalNumber : e.phone;
  return Ie(o, n.nationalNumberPattern());
}
var ss = /^[A-Z]{2}$/;
function ls(e) {
  return ss.test(e);
}
function cs(e, t) {
  var r, n, o = new ue(t);
  return ls(e) ? (r = e, o.selectNumberingPlan(r), n = o.countryCallingCode()) : n = e, {
    country: r,
    callingCode: n
  };
}
function us(e, t, r) {
  var n = new ue(r), o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(i) {
    return fs(t, i, r);
  }) : [];
}
function fs(e, t, r) {
  var n = new ue(r);
  return n.selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var xr = 2, As = 17, gs = 3, pe = "0-9０-９٠-٩۰-۹", hs = "-‐-―−ー－", ms = "／/", ps = "．.", ys = "  ­​⁠　", Cs = "()（）［］\\[\\]", vs = "~⁓∼～", Dt = "".concat(hs).concat(ms).concat(ps).concat(ys).concat(Cs).concat(vs), Er = "+＋", ws = new RegExp("([" + pe + "])");
function bs(e, t, r, n) {
  if (t) {
    var o = new ue(n);
    o.selectNumberingPlan(t || r);
    var i = new RegExp(o.IDDPrefix());
    if (e.search(i) === 0) {
      e = e.slice(e.match(i)[0].length);
      var a = e.match(ws);
      if (!(a && a[1] != null && a[1].length > 0 && a[1] === "0"))
        return e;
    }
  }
}
function xs(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var r = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), n = r.exec(e);
    if (n) {
      var o, i, a = n.length - 1, s = a > 0 && n[a];
      if (t.nationalPrefixTransformRule() && s)
        o = e.replace(r, t.nationalPrefixTransformRule()), a > 1 && (i = n[1]);
      else {
        var c = n[0];
        o = e.slice(c.length), s && (i = n[1]);
      }
      var u;
      if (s) {
        var A = e.indexOf(n[1]), h = e.slice(0, A);
        h === t.numberingPlan.nationalPrefix() && (u = t.numberingPlan.nationalPrefix());
      } else
        u = n[0];
      return {
        nationalNumber: o,
        nationalPrefix: u,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function Es(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ds(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ds(e, t) {
  if (e) {
    if (typeof e == "string") return hn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? hn(e, t) : void 0;
  }
}
function hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ns(e, t, r) {
  for (var n = new ue(r), o = Es(t), i; !(i = o()).done; ) {
    var a = i.value;
    if (n.selectNumberingPlan(a), n.leadingDigits()) {
      if (e && e.search(n.leadingDigits()) === 0)
        return a;
    } else if (br({
      phone: e,
      country: a
    }, void 0, n.metadata))
      return a;
  }
}
function Co(e, t) {
  var r = t.nationalNumber, n = t.metadata, o = n.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : Ns(r, o, n.metadata);
}
function sr(e, t, r) {
  var n = xs(e, r), o = n.carrierCode, i = n.nationalNumber;
  if (i !== e) {
    if (!Is(e, i, r))
      return {
        nationalNumber: e
      };
    if (r.numberingPlan.possibleLengths() && (t || (t = Co(r.numberingPlan.callingCode(), {
      nationalNumber: i,
      metadata: r
    })), !Ps(i, t, r)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: i,
    carrierCode: o
  };
}
function Is(e, t, r) {
  return !(Ie(e, r.nationalNumberPattern()) && !Ie(t, r.nationalNumberPattern()));
}
function Ps(e, t, r) {
  switch (wr(e, t, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Bs(e, t, r, n, o) {
  if (!(r || n))
    return {
      number: e
    };
  var i = r ? mo(r, o) : n;
  if (e.indexOf(i) === 0) {
    var a = new ue(o);
    a.selectNumberingPlan(r || n);
    var s = e.slice(i.length), c = sr(s, void 0, a), u = c.nationalNumber, A = sr(e, void 0, a), h = A.nationalNumber;
    if (!Ie(h, a.nationalNumberPattern()) && Ie(u, a.nationalNumberPattern()) || wr(h, void 0, a) === "TOO_LONG")
      return {
        countryCallingCode: i,
        number: s
      };
  }
  return {
    number: e
  };
}
function vo(e, t, r, n, o) {
  if (!e)
    return {};
  var i;
  if (e[0] !== "+") {
    var a = bs(e, r, n, o);
    if (a && a !== e)
      i = !0, e = "+" + a;
    else {
      if (r || n) {
        var s = Bs(e, t, r, n, o), c = s.countryCallingCode, u = s.number;
        if (c)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: c,
            number: u
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
  for (var A = new ue(o), h = 2; h - 1 <= gs && h <= e.length; ) {
    var m = e.slice(1, h);
    if (A.hasCallingCode(m))
      return A.selectNumberingPlan(m), {
        countryCallingCodeSource: i ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: m,
        number: e.slice(h)
      };
    h++;
  }
  return {};
}
function Os(e) {
  return e.replace(new RegExp("[".concat(Dt, "]+"), "g"), " ").trim();
}
var Ss = /(\$\d)/;
function Qs(e, t, r) {
  var n = r.useInternationalFormat, o = r.withNationalPrefix, i = e.replace(new RegExp(t.pattern()), n ? t.internationalFormat() : (
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
    o && t.nationalPrefixFormattingRule() ? t.format().replace(Ss, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return n ? Os(i) : i;
}
var Ms = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Hs(e, t, r) {
  var n = new ue(r);
  if (n.selectNumberingPlan(e || t), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Ms.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
var Rs = ";ext=", Ve = function(t) {
  return "([".concat(pe, "]{1,").concat(t, "})");
};
function wo(e) {
  var t = "20", r = "15", n = "9", o = "6", i = "[  \\t,]*", a = "[:\\.．]?[  \\t,-]*", s = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", u = "(?:[xｘ#＃~～]|int|ｉｎｔ)", A = "[- ]+", h = "[  \\t]*", m = "(?:,{2}|;)", g = Rs + Ve(t), y = i + c + a + Ve(t) + s, f = i + u + a + Ve(n) + s, v = A + Ve(o) + "#", O = h + m + a + Ve(r) + s, Q = h + "(?:,)+" + a + Ve(n) + s;
  return g + "|" + y + "|" + f + "|" + v + "|" + O + "|" + Q;
}
var Ts = "[" + pe + "]{" + xr + "}", Fs = "[" + Er + "]{0,1}(?:[" + Dt + "]*[" + pe + "]){3,}[" + Dt + pe + "]*", ks = new RegExp("^[" + Er + "]{0,1}(?:[" + Dt + "]*[" + pe + "]){1,2}$", "i"), Ys = Fs + // Phone number extensions
"(?:" + wo() + ")?", Ls = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Ts + "$|^" + Ys + "$",
  "i"
);
function Gs(e) {
  return e.length >= xr && Ls.test(e);
}
function js(e) {
  return ks.test(e);
}
function Us(e) {
  var t = e.number, r = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(r ? ";ext=" + r : "");
}
var mn = {
  formatExtension: function(t, r, n) {
    return "".concat(t).concat(n.ext()).concat(r);
  }
};
function zs(e, t, r, n) {
  r ? r = Ws({}, mn, r) : r = mn;
  var o = new ue(n);
  if (e.country && e.country !== "001") {
    if (!o.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    o.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    o.selectNumberingPlan(e.countryCallingCode);
  else return e.phone || "";
  var i = o.countryCallingCode(), a = r.v2 ? e.nationalNumber : e.phone, s;
  switch (t) {
    case "NATIONAL":
      return a ? (s = Nt(a, e.carrierCode, "NATIONAL", o, r), _t(s, e.ext, o, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return a ? (s = Nt(a, null, "INTERNATIONAL", o, r), s = "+".concat(i, " ").concat(s), _t(s, e.ext, o, r.formatExtension)) : "+".concat(i);
    case "E.164":
      return "+".concat(i).concat(a);
    case "RFC3966":
      return Us({
        number: "+".concat(i).concat(a),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var c = Ks(a, e.carrierCode, i, r.fromCountry, o);
      return c ? _t(c, e.ext, o, r.formatExtension) : void 0;
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function Nt(e, t, r, n, o) {
  var i = Js(n.formats(), e);
  return i ? Qs(e, i, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1)
  }) : e;
}
function Js(e, t) {
  return Vs(e, function(r) {
    if (r.leadingDigitsPatterns().length > 0) {
      var n = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
      if (t.search(n) !== 0)
        return !1;
    }
    return Ie(t, r.pattern());
  });
}
function _t(e, t, r, n) {
  return t ? n(e, t, r) : e;
}
function Ks(e, t, r, n, o) {
  var i = mo(n, o.metadata);
  if (i === r) {
    var a = Nt(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + a : a;
  }
  var s = Hs(n, void 0, o.metadata);
  if (s)
    return "".concat(s, " ").concat(r, " ").concat(Nt(e, null, "INTERNATIONAL", o));
}
function Ws() {
  for (var e = 1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  for (; e < r.length; ) {
    if (r[e])
      for (var o in r[e])
        r[0][o] = r[e][o];
    e++;
  }
  return r[0];
}
function Vs(e, t) {
  for (var r = 0; r < e.length; ) {
    if (t(e[r]))
      return e[r];
    r++;
  }
}
function lt(e) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function pn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pn(Object(r), !0).forEach(function(n) {
      Xs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xs(e, t, r) {
  return (t = bo(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zs(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bo(n.key), n);
  }
}
function $s(e, t, r) {
  return t && qs(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bo(e) {
  var t = _s(e, "string");
  return lt(t) == "symbol" ? t : t + "";
}
function _s(e, t) {
  if (lt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var e0 = /* @__PURE__ */ function() {
  function e(t, r, n) {
    if (Zs(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (Ze(r) && Ze(r.countries)) {
      n = r;
      var o = t;
      if (!t0.test(o))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var i = vo(o, void 0, void 0, void 0, n), a = i.countryCallingCode, s = i.number;
      if (r = s, t = a, !r)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!r)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof r != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    ho(n);
    var c = cs(t, n), u = c.country, A = c.callingCode;
    this.country = u, this.countryCallingCode = A, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return $s(e, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : us(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return ns(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return ds(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var r = new ue(this.getMetadata());
      return r.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(r) {
      return this.number === r.number && this.ext === r.ext;
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
      return br(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(r, n) {
      return zs(this, r, n ? yn(yn({}, n), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(r) {
      return this.format("NATIONAL", r);
    }
  }, {
    key: "formatInternational",
    value: function(r) {
      return this.format("INTERNATIONAL", r);
    }
  }, {
    key: "getURI",
    value: function(r) {
      return this.format("RFC3966", r);
    }
  }]);
}(), t0 = /^\+\d+$/;
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
function r0(e, t, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n0(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function o0(e, t, r) {
  return t = ut(t), i0(e, Dr() ? Reflect.construct(t, r || [], ut(e).constructor) : t.apply(e, r));
}
function i0(e, t) {
  if (t && (lr(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return a0(e);
}
function a0(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d0(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ct(e, t);
}
function cr(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return cr = function(n) {
    if (n === null || !l0(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return s0(n, arguments, ut(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), ct(o, n);
  }, cr(e);
}
function s0(e, t, r) {
  if (Dr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && ct(o, r.prototype), o;
}
function Dr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dr = function() {
    return !!e;
  })();
}
function l0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ct(e, t) {
  return ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ct(e, t);
}
function ut(e) {
  return ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ut(e);
}
var xe = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return n0(this, t), n = o0(this, t, [r]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
  }
  return d0(t, e), r0(t);
}(/* @__PURE__ */ cr(Error)), Cn = new RegExp("(?:" + wo() + ")$", "i");
function c0(e) {
  var t = e.search(Cn);
  if (t < 0)
    return {};
  for (var r = e.slice(0, t), n = e.match(Cn), o = 1; o < n.length; ) {
    if (n[o])
      return {
        number: r,
        ext: n[o]
      };
    o++;
  }
}
var u0 = {
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
function f0(e) {
  return u0[e];
}
function A0(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = g0(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g0(e, t) {
  if (e) {
    if (typeof e == "string") return vn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vn(e, t) : void 0;
  }
}
function vn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wn(e) {
  for (var t = "", r = A0(e.split("")), n; !(n = r()).done; ) {
    var o = n.value;
    t += h0(o, t) || "";
  }
  return t;
}
function h0(e, t, r) {
  return e === "+" ? t ? void 0 : "+" : f0(e);
}
var xo = "+", m0 = "[\\-\\.\\(\\)]?", bn = "([" + pe + "]|" + m0 + ")", p0 = "^\\" + xo + bn + "*[" + pe + "]" + bn + "*$", y0 = new RegExp(p0, "g"), ur = pe, C0 = "[" + ur + "]+((\\-)*[" + ur + "])*", v0 = "a-zA-Z", w0 = "[" + v0 + "]+((\\-)*[" + ur + "])*", b0 = "^(" + C0 + "\\.)*" + w0 + "\\.?$", x0 = new RegExp(b0, "g"), xn = "tel:", fr = ";phone-context=", E0 = ";isub=";
function D0(e) {
  var t = e.indexOf(fr);
  if (t < 0)
    return null;
  var r = t + fr.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r);
}
function N0(e) {
  return e === null ? !0 : e.length === 0 ? !1 : y0.test(e) || x0.test(e);
}
function I0(e, t) {
  var r = t.extractFormattedPhoneNumber, n = D0(e);
  if (!N0(n))
    throw new xe("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = r(e) || "";
  else {
    o = "", n.charAt(0) === xo && (o += n);
    var i = e.indexOf(xn), a;
    i >= 0 ? a = i + xn.length : a = 0;
    var s = e.indexOf(fr);
    o += e.substring(a, s);
  }
  var c = o.indexOf(E0);
  if (c > 0 && (o = o.substring(0, c)), o !== "")
    return o;
}
var P0 = 250, B0 = new RegExp("[" + Er + pe + "]"), O0 = new RegExp("[^" + pe + "#]+$");
function S0(e, t, r) {
  t = t || {};
  var n = new ue(r);
  if (t.defaultCountry && !n.hasCountry(t.defaultCountry))
    throw t.v2 ? new xe("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var o = M0(e, t.v2, t.extract), i = o.number, a = o.ext, s = o.error;
  if (!i) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new xe("TOO_SHORT") : new xe("NOT_A_NUMBER");
    return {};
  }
  var c = R0(
    i,
    t.defaultCountry,
    t.defaultCallingCode,
    // If `country` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if `countryCallingCode` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if neither `country` nor `countryCallingCode` are returned, no numbering plan will be selected in `metadata`.
    n
  ), u = c.country, A = c.nationalNumber, h = c.countryCallingCode, m = c.countryCallingCodeSource, g = c.carrierCode;
  if (!n.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new xe("INVALID_COUNTRY");
    return {};
  }
  if (!A || A.length < xr) {
    if (t.v2)
      throw new xe("TOO_SHORT");
    return {};
  }
  if (A.length > As) {
    if (t.v2)
      throw new xe("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var y = new e0(h, A, n.metadata);
    return u && (y.country = u), g && (y.carrierCode = g), a && (y.ext = a), y.__countryCallingCodeSource = m, y;
  }
  var f = (t.extended ? n.hasSelectedNumberingPlan() : u) ? Ie(A, n.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: u,
    countryCallingCode: h,
    carrierCode: g,
    valid: f,
    possible: f ? !0 : !!(t.extended === !0 && n.possibleLengths() && yo(A, n)),
    phone: A,
    ext: a
  } : f ? H0(u, A, a) : {};
}
function Q0(e, t, r) {
  if (e) {
    if (e.length > P0) {
      if (r)
        throw new xe("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var n = e.search(B0);
    if (!(n < 0))
      return e.slice(n).replace(O0, "");
  }
}
function M0(e, t, r) {
  var n = I0(e, {
    extractFormattedPhoneNumber: function(a) {
      return Q0(a, r, t);
    }
  });
  if (!n)
    return {};
  if (!Gs(n))
    return js(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = c0(n);
  return o.ext ? o : {
    number: n
  };
}
function H0(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r), n;
}
function R0(e, t, r, n) {
  var o = vo(
    wn(e),
    void 0,
    // `defaultCountry` and `defaultCallingCode` are only used to detect
    // if it's an "international" phone number or not. They won't be used
    // to derive the resulting `countryCallingCode` from them, or anything like that.
    t,
    r,
    n.metadata
  ), i = o.countryCallingCodeSource, a = o.countryCallingCode, s = o.number, c;
  if (a)
    n.selectNumberingPlan(a);
  else if (s && (t || r))
    t ? (c = t, n.selectNumberingPlan(t), a = n.numberingPlan.callingCode()) : (n.selectNumberingPlan(r), a = r);
  else return {};
  if (!s)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: a
    };
  var u = sr(wn(s), void 0, n), A = u.nationalNumber, h = u.carrierCode, m = Co(a, {
    nationalNumber: A,
    metadata: n
  });
  return m && (c = m, m === "001" || n.selectNumberingPlan(c)), {
    country: c,
    countryCallingCode: a,
    countryCallingCodeSource: i,
    nationalNumber: A,
    carrierCode: h
  };
}
function ft(e) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(e);
}
function En(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? En(Object(r), !0).forEach(function(n) {
      T0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : En(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T0(e, t, r) {
  return (t = F0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F0(e) {
  var t = k0(e, "string");
  return ft(t) == "symbol" ? t : t + "";
}
function k0(e, t) {
  if (ft(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ft(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y0(e, t, r) {
  return S0(e, Dn(Dn({}, t), {}, {
    v2: !0
  }), r);
}
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function Nn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function L0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nn(Object(r), !0).forEach(function(n) {
      G0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G0(e, t, r) {
  return (t = j0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j0(e) {
  var t = U0(e, "string");
  return At(t) == "symbol" ? t : t + "";
}
function U0(e, t) {
  if (At(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (At(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z0(e, t) {
  return V0(e) || W0(e, t) || K0(e, t) || J0();
}
function J0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K0(e, t) {
  if (e) {
    if (typeof e == "string") return In(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? In(e, t) : void 0;
  }
}
function In(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function W0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (A) {
      u = !0, o = A;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function V0(e) {
  if (Array.isArray(e)) return e;
}
function X0(e) {
  var t = Array.prototype.slice.call(e), r = z0(t, 4), n = r[0], o = r[1], i = r[2], a = r[3], s, c, u;
  if (typeof n == "string")
    s = n;
  else throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    a ? (c = i, u = a) : (c = void 0, u = i), o && (c = L0({
      defaultCountry: o
    }, c));
  else if (Ze(o))
    i ? (c = o, u = i) : u = o;
  else throw new Error("Invalid second argument: ".concat(o));
  return {
    text: s,
    options: c,
    metadata: u
  };
}
function gt(e) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gt(e);
}
function Pn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pn(Object(r), !0).forEach(function(n) {
      Z0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z0(e, t, r) {
  return (t = q0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q0(e) {
  var t = $0(e, "string");
  return gt(t) == "symbol" ? t : t + "";
}
function $0(e, t) {
  if (gt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _0(e, t, r) {
  t && t.defaultCountry && !ts(t.defaultCountry, r) && (t = Bn(Bn({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return Y0(e, t, r);
  } catch (n) {
    if (!(n instanceof xe)) throw n;
  }
}
function el() {
  var e = X0(arguments), t = e.text, r = e.options, n = e.metadata;
  return _0(t, r, n);
}
function tl() {
  return jd(el, arguments);
}
const nc = ({ value: e }) => {
  if (!e) return /* @__PURE__ */ d("span", { className: "text-gray-400 italic", children: "-" });
  try {
    const t = tl(e);
    if (t && t.country) {
      const r = `https://flagcdn.com/${t.country.toLowerCase()}.svg`;
      return /* @__PURE__ */ p("div", { className: "flex items-center gap-2.5 font-mono h-full", children: [
        /* @__PURE__ */ d(
          "img",
          {
            src: r,
            alt: t.country,
            style: {
              width: "20px",
              height: "14px",
              objectFit: "cover",
              borderRadius: "2px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              flexShrink: 0
            },
            title: t.country
          }
        ),
        /* @__PURE__ */ d("span", { className: "text-sm text-gray-700 font-medium whitespace-nowrap", children: t.formatInternational() })
      ] });
    }
  } catch (t) {
    console.error("Error parsing phone number inside PhoneCell:", t);
  }
  return /* @__PURE__ */ d("span", { className: "text-sm text-gray-700", children: e });
}, oc = ({
  label: e = "Subir archivo",
  accept: t = "application/pdf",
  onFileSelect: r,
  onFileRemove: n,
  onView: o,
  previewUrl: i,
  helperText: a,
  recommendedText: s = "Solo archivos PDF (máx. 5MB)",
  maxSizeMB: c,
  maxSize: u = 5,
  error: A = !1,
  value: h,
  disabled: m = !1
}) => {
  const g = c || u, y = a || s, [f, v] = oe(null), [O, Q] = oe(!1), [H, E] = oe(null), [b, N] = oe(!1), P = at(null), k = !!f || !!i, R = (D) => {
    var J;
    const M = (J = D.target.files) == null ? void 0 : J[0];
    M && Y(M);
  }, Y = (D) => {
    if (E(null), t) {
      const J = t.split(",").map((B) => B.trim().toLowerCase()), le = D.type.toLowerCase(), Pe = D.name.toLowerCase();
      if (!J.some((B) => B.startsWith(".") ? Pe.endsWith(B) : B.includes("*") ? new RegExp("^" + B.replace(/\*/g, ".*") + "$").test(le) : le === B)) {
        E(`El tipo de archivo no es válido (${D.name}).`);
        return;
      }
    }
    if (D.size > g * 1024 * 1024) {
      E(`El archivo supera el límite de ${g}MB`);
      return;
    }
    v(D), N(!0);
    const M = new FileReader();
    M.onload = () => {
      const J = M.result;
      r(J, D), N(!1);
    }, M.onerror = () => {
      E("Error al leer el archivo"), N(!1);
    }, M.readAsDataURL(D);
  }, T = (D) => {
    D.stopPropagation(), v(null), E(null), r(null, null), n && n(), P.current && (P.current.value = "");
  };
  return /* @__PURE__ */ p(z, { className: "w-full space-y-2", children: [
    e && /* @__PURE__ */ d(Z, { variant: "caption", className: "font-semibold text-gray-700", children: e }),
    /* @__PURE__ */ p(
      "div",
      {
        onClick: () => {
          var D;
          return (D = P.current) == null ? void 0 : D.click();
        },
        onDragOver: (D) => {
          D.preventDefault(), Q(!0);
        },
        onDragLeave: () => {
          Q(!1);
        },
        onDrop: (D) => {
          var J;
          D.preventDefault(), Q(!1);
          const M = (J = D.dataTransfer.files) == null ? void 0 : J[0];
          M && Y(M);
        },
        className: `
                    relative group cursor-pointer border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${O ? "border-primary bg-primary/5 scale-[1.02]" : "border-gray-200 bg-gray-50/50 hover:border-primary/50 hover:bg-white"}
                    ${A || H ? "border-red-300 bg-red-50" : ""}
                `,
        children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "file",
              ref: P,
              onChange: R,
              accept: t,
              className: "hidden"
            }
          ),
          b ? /* @__PURE__ */ p(z, { className: "w-full flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ d(Ln, { className: "w-32 rounded-full" }),
            /* @__PURE__ */ d(Z, { variant: "caption", className: "text-gray-400", children: "Procesando archivo..." })
          ] }) : k ? /* @__PURE__ */ p("div", { className: "flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2", children: [
            /* @__PURE__ */ d("div", { className: "bg-primary/10 p-2 rounded-lg text-primary", children: /* @__PURE__ */ d($e, { size: 20 }) }),
            /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ d(Z, { variant: "body2", className: "font-bold text-gray-700 truncate", children: f ? f.name : "Archivo cargado" }),
              f && /* @__PURE__ */ p(Z, { variant: "caption", className: "text-gray-400", children: [
                (f.size / 1024 / 1024).toFixed(2),
                " MB"
              ] })
            ] }),
            /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ d(Ar, { size: 18, className: "text-emerald-500" }),
              o && /* @__PURE__ */ d(dt, { title: "Ver archivo", arrow: !0, placement: "top", children: /* @__PURE__ */ d(
                ke,
                {
                  size: "small",
                  onClick: (D) => {
                    D.stopPropagation(), o();
                  },
                  className: "text-gray-400 hover:text-primary",
                  children: /* @__PURE__ */ d(er, { size: 16 })
                }
              ) }),
              /* @__PURE__ */ d(ke, { size: "small", onClick: T, className: "text-gray-400 hover:text-red-500", children: /* @__PURE__ */ d(Me, { size: 16 }) })
            ] })
          ] }) : /* @__PURE__ */ p("div", { className: "flex flex-col items-center gap-1 text-center", children: [
            /* @__PURE__ */ d("div", { className: "p-3 bg-gray-100 group-hover:bg-primary/10 rounded-full text-gray-400 group-hover:text-primary transition-colors", children: /* @__PURE__ */ d(Sn, { size: 24 }) }),
            /* @__PURE__ */ d(Z, { variant: "body2", className: "font-medium text-gray-600", children: "Haz clic o arrastra un archivo" }),
            /* @__PURE__ */ d(Z, { variant: "caption", className: "text-gray-400", children: y })
          ] })
        ]
      }
    ),
    H && /* @__PURE__ */ p(z, { className: "flex items-center gap-1.5 mt-1 text-red-500 text-xs animate-in fade-in", children: [
      /* @__PURE__ */ d(Qn, { size: 14 }),
      /* @__PURE__ */ d("span", { children: H })
    ] })
  ] });
}, ic = ({
  label: e = "Subir archivo",
  accept: t = "image/png,image/jpeg,image/jpg,image/webp",
  icon: r,
  onFileSelect: n,
  onImageSelect: o,
  helperText: i = "Formatos soportados: JPG, PNG, WEBP (máx. 5MB)",
  maxSizeMB: a = 5,
  error: s = !1,
  disabled: c = !1
}) => {
  const [u, A] = oe(null), [h, m] = oe(!1), [g, y] = oe(null), [f, v] = oe(!1), O = at(null), Q = (R, Y) => {
    n && n(R, Y), o && o(R, Y);
  }, H = (R) => {
    var T;
    const Y = (T = R.target.files) == null ? void 0 : T[0];
    Y && E(Y);
  }, E = (R) => {
    if (y(null), t && t !== "*/*") {
      const T = t.split(",").map((D) => D.trim().toLowerCase()), l = R.type.toLowerCase(), I = R.name.toLowerCase();
      if (!T.some((D) => {
        if (D.startsWith(".")) return I.endsWith(D);
        if (D.endsWith("/*")) {
          const M = D.split("/")[0];
          return l.startsWith(`${M}/`);
        }
        return D === l;
      })) {
        y(`El tipo de archivo no es válido. Formatos permitidos: ${t}`);
        return;
      }
    } else if (!R.type.startsWith("image/")) {
      y("El tipo de archivo no es válido. Se requiere una imagen (JPG, PNG, WEBP)");
      return;
    }
    if (R.size > a * 1024 * 1024) {
      y(`El archivo supera el límite de ${a}MB`);
      return;
    }
    A(R), v(!0);
    const Y = new FileReader();
    Y.onload = () => {
      const l = Y.result.split(",")[1];
      Q(l, R), v(!1);
    }, Y.onerror = () => {
      y("Error al leer el archivo"), v(!1);
    }, Y.readAsDataURL(R);
  }, b = (R) => {
    R.stopPropagation(), A(null), y(null), Q(null, null), O.current && (O.current.value = "");
  };
  return /* @__PURE__ */ p(z, { className: "w-full space-y-2", children: [
    e && /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ d("div", { className: "p-2 bg-primary/10 rounded-lg text-primary", children: r || /* @__PURE__ */ d($e, { size: 18 }) }),
      /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d("p", { className: `text-sm font-bold text-gray-700 ${s ? "text-red-500" : "text-gray-500"}`, children: e }) })
    ] }),
    /* @__PURE__ */ p(
      "div",
      {
        onClick: () => {
          var R;
          return !c && ((R = O.current) == null ? void 0 : R.click());
        },
        onDragOver: (R) => {
          c || (R.preventDefault(), m(!0));
        },
        onDragLeave: () => {
          c || m(!1);
        },
        onDrop: (R) => {
          var T;
          if (c) return;
          R.preventDefault(), m(!1);
          const Y = (T = R.dataTransfer.files) == null ? void 0 : T[0];
          Y && E(Y);
        },
        className: `
                    relative group border-2 border-dashed rounded-xl p-6 transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    ${c ? "border-gray-200 bg-gray-100/50 cursor-not-allowed opacity-60" : "cursor-pointer hover:border-primary/50 hover:bg-white"}
                    ${h && !c ? "border-primary bg-primary/5 scale-[1.02]" : "border-gray-200 bg-gray-50/50"}
                    ${(s || g) && !c ? "border-red-300 bg-red-50" : ""}
                `,
        children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "file",
              ref: O,
              onChange: H,
              accept: t,
              className: "hidden"
            }
          ),
          f ? /* @__PURE__ */ p(z, { className: "w-full flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ d(Ln, { className: "w-32 rounded-full" }),
            /* @__PURE__ */ d(Z, { variant: "caption", className: "text-gray-400", children: "Procesando archivo..." })
          ] }) : u ? /* @__PURE__ */ p("div", { className: "flex items-center gap-4 w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2", children: [
            /* @__PURE__ */ d("div", { className: "bg-primary/10 p-2 rounded-lg text-primary", children: r || /* @__PURE__ */ d($e, { size: 20 }) }),
            /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ d(Z, { variant: "body2", className: "font-bold text-gray-700 truncate", children: u.name }),
              /* @__PURE__ */ p(Z, { variant: "caption", className: "text-gray-400", children: [
                (u.size / 1024 / 1024).toFixed(2),
                " MB"
              ] })
            ] }),
            /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ d(Ar, { size: 18, className: "text-emerald-500" }),
              /* @__PURE__ */ d(
                ke,
                {
                  size: "small",
                  onClick: b,
                  disabled: c,
                  className: "text-gray-400 hover:text-red-500",
                  children: /* @__PURE__ */ d(Me, { size: 18 })
                }
              )
            ] })
          ] }) : /* @__PURE__ */ p(De, { children: [
            /* @__PURE__ */ d("div", { className: "bg-white p-3 rounded-2xl shadow-md text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ d(Sn, { size: 28 }) }),
            /* @__PURE__ */ p("div", { className: "text-center", children: [
              /* @__PURE__ */ d(Z, { variant: "body2", className: "font-bold text-gray-600", children: "Haz clic o arrastra un archivo" }),
              /* @__PURE__ */ d(Z, { variant: "caption", className: "text-gray-400", children: i })
            ] })
          ] })
        ]
      }
    ),
    (s || g) && /* @__PURE__ */ p(Z, { variant: "caption", className: "text-red-500 flex items-center gap-1 font-medium mt-1", children: [
      /* @__PURE__ */ d(Qn, { size: 14 }),
      " ",
      g || "Campo requerido"
    ] })
  ] });
}, ac = ({
  open: e,
  onClose: t,
  fileUuid: r,
  fileUrl: n,
  title: o = "Vista Previa del Documento",
  fileName: i = "documento.pdf",
  fetchBlobUrl: a,
  getFileBlobUrl: s,
  onDownloadCustom: c,
  onDownloadFile: u
}) => {
  const [A, h] = oe(""), [m, g] = oe(!0), [y, f] = oe(null), [v, O] = oe(!1), [Q, H] = oe({ x: 0, y: 0 }), [E, b] = oe(!1), N = at({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0
  });
  Le(() => {
    if (!e || !r && !n && !a) return;
    let w = !0;
    return (async () => {
      try {
        g(!0);
        let M = "";
        if (n)
          M = n;
        else if (a)
          M = await a();
        else if (r && s)
          M = await s(r);
        else
          throw new Error("No se proporcionó una función de descarga o URL para el archivo.");
        w && (h(M), f(null));
      } catch (M) {
        console.error("Error loading PDF:", M), w && f("No se pudo cargar el documento. Verifique su conexión o permisos.");
      } finally {
        w && g(!1);
      }
    })(), () => {
      w = !1, A && A.startsWith("blob:") && window.URL.revokeObjectURL(A);
    };
  }, [e, r, n, a, s]), Le(() => {
    if (e && v) {
      const D = Math.max(20, window.innerWidth - 640 - 30);
      H({ x: D, y: 60 });
    }
  }, [e, v]);
  const P = () => {
    O(!1), t();
  }, k = async () => {
    if (c)
      await c();
    else if (r && u)
      await u(r, i);
    else if (A) {
      const w = document.createElement("a");
      w.href = A, w.download = i, document.body.appendChild(w), w.click(), document.body.removeChild(w);
    }
  }, R = () => {
    A && window.open(A, "_blank", "noopener,noreferrer");
  }, Y = () => {
    O((w) => !w);
  }, T = (w) => {
    if (v && !w.target.closest("button, a, input, .MuiIconButton-root, .MuiChip-root")) {
      b(!0), N.current = {
        startX: w.clientX,
        startY: w.clientY,
        posX: Q.x,
        posY: Q.y
      };
      try {
        w.currentTarget.setPointerCapture(w.pointerId);
      } catch {
      }
    }
  }, l = (w) => {
    if (!E || !v) return;
    const D = w.clientX - N.current.startX, M = w.clientY - N.current.startY, J = Math.max(10, Math.min(window.innerWidth - 250, N.current.posX + D)), le = Math.max(10, Math.min(window.innerHeight - 100, N.current.posY + M));
    H({ x: J, y: le });
  }, I = (w) => {
    if (E) {
      b(!1);
      try {
        w.currentTarget.releasePointerCapture(w.pointerId);
      } catch {
      }
    }
  };
  return /* @__PURE__ */ p(
    Gn,
    {
      open: e,
      onClose: P,
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
          left: `${Q.x}px`,
          top: `${Q.y}px`,
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
        /* @__PURE__ */ p(
          jn,
          {
            onPointerDown: T,
            onPointerMove: l,
            onPointerUp: I,
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
              /* @__PURE__ */ p(z, { sx: { display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }, children: [
                /* @__PURE__ */ d(z, { sx: {
                  p: 1,
                  bgcolor: "error.lighter",
                  color: "error.main",
                  borderRadius: "10px",
                  display: "flex",
                  flexShrink: 0
                }, children: /* @__PURE__ */ d($e, { size: 18 }) }),
                /* @__PURE__ */ p(z, { sx: { minWidth: 0 }, children: [
                  /* @__PURE__ */ p(z, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                    /* @__PURE__ */ d(Z, { variant: "subtitle2", fontWeight: 800, lineHeight: 1.2, noWrap: !0, children: "Vista Previa del Documento" }),
                    v && /* @__PURE__ */ d(
                      Yn,
                      {
                        size: "small",
                        icon: /* @__PURE__ */ d(Pr, { size: 12, className: "text-primary-600" }),
                        label: "Flotante / Arrastrable",
                        variant: "outlined",
                        color: "primary",
                        sx: { height: 20, fontSize: "0.65rem", fontWeight: 700 }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ d(Z, { variant: "caption", color: "text.secondary", noWrap: !0, sx: { display: "block", maxWidth: v ? "260px" : "400px" }, children: o })
                ] })
              ] }),
              v && /* @__PURE__ */ d(z, { sx: { display: "flex", alignItems: "center", color: "text.disabled", opacity: 0.7 }, children: /* @__PURE__ */ d(Po, { size: 20 }) }),
              /* @__PURE__ */ p(z, { sx: { display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }, children: [
                /* @__PURE__ */ d(dt, { title: v ? "Acoplar modal al centro" : "Desacoplar ventana flotante (para comparar con formulario)", children: /* @__PURE__ */ d(
                  ke,
                  {
                    onClick: Y,
                    size: "small",
                    color: v ? "primary" : "default",
                    sx: {
                      bgcolor: v ? "primary.100" : "grey.100",
                      "&:hover": { bgcolor: v ? "primary.200" : "grey.200" },
                      borderRadius: "8px",
                      p: "6px"
                    },
                    children: v ? /* @__PURE__ */ d(Bo, { size: 16 }) : /* @__PURE__ */ d(Pr, { size: 16 })
                  }
                ) }),
                A && /* @__PURE__ */ d(dt, { title: "Abrir en pestaña nueva", children: /* @__PURE__ */ d(
                  ke,
                  {
                    onClick: R,
                    size: "small",
                    sx: {
                      bgcolor: "grey.100",
                      "&:hover": { bgcolor: "grey.200" },
                      borderRadius: "8px",
                      p: "6px"
                    },
                    children: /* @__PURE__ */ d(On, { size: 16 })
                  }
                ) }),
                /* @__PURE__ */ d(
                  we,
                  {
                    variant: "primary",
                    size: "sm",
                    onClick: k,
                    className: "text-xs h-8 px-2.5 shadow-sm",
                    icon: Mn,
                    children: "Descargar"
                  }
                ),
                /* @__PURE__ */ d(
                  ke,
                  {
                    onClick: P,
                    size: "small",
                    sx: {
                      color: "text.secondary",
                      ml: 0.5,
                      "&:hover": { bgcolor: "error.lighter", color: "error.main" }
                    },
                    children: /* @__PURE__ */ d(Me, { size: 18 })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ d(Un, { sx: { p: 0, bgcolor: "grey.50", height: v ? "calc(100% - 56px)" : "75vh", overflow: "hidden" }, children: /* @__PURE__ */ d(z, { sx: { position: "relative", width: "100%", height: "100%" }, children: m ? /* @__PURE__ */ p(z, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", bgcolor: "white" }, children: [
          /* @__PURE__ */ d("div", { className: "w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" }),
          /* @__PURE__ */ d(Z, { variant: "body2", color: "text.secondary", fontWeight: 600, children: "Cargando documento seguro..." })
        ] }) : y ? /* @__PURE__ */ p(z, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", bgcolor: "white", p: 4, textAlign: "center" }, children: [
          /* @__PURE__ */ d($e, { size: 64, className: "text-red-100 mb-4" }),
          /* @__PURE__ */ d(Z, { variant: "h6", color: "text.primary", gutterBottom: !0, children: "Error al cargar" }),
          /* @__PURE__ */ d(Z, { variant: "body2", color: "text.secondary", sx: { mb: 3 }, children: y }),
          /* @__PURE__ */ d(we, { variant: "secondary", onClick: P, children: "Cerrar Ventana" })
        ] }) : /* @__PURE__ */ d(
          "iframe",
          {
            src: `${A}#toolbar=1`,
            title: o,
            className: "w-full h-full border-none"
          }
        ) }) })
      ]
    }
  );
}, dc = ({
  open: e,
  onClose: t,
  fileUuid: r,
  imageUrl: n,
  src: o,
  title: i = "Vista Previa de la Imagen",
  fileName: a = "imagen.jpg",
  fetchBlobUrl: s,
  getFileBlobUrl: c,
  onDownloadCustom: u,
  onDownloadFile: A
}) => {
  const [h, m] = oe(""), [g, y] = oe(!0), [f, v] = oe(null);
  return Le(() => {
    if (!e) return;
    const Q = o || n;
    if (!r && !s && !Q) return;
    let H = !0, E = "";
    return (async () => {
      try {
        y(!0);
        let N = "";
        if (Q)
          N = Q;
        else if (s)
          N = await s();
        else if (r && c)
          N = await c(r);
        else
          throw new Error("No se proporcionó una función de descarga o URL para la imagen.");
        H && (E = N, m(N), v(null));
      } catch (N) {
        console.error("Error loading Image:", N), H && v("No se pudo cargar la imagen. Verifique su conexión o permisos.");
      } finally {
        H && y(!1);
      }
    })(), () => {
      H = !1, E && E.startsWith("blob:") && window.URL.revokeObjectURL(E);
    };
  }, [e, r, n, o, s, c]), /* @__PURE__ */ p(
    Gn,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      disableEnforceFocus: !0,
      className: "rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ p(jn, { sx: {
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "white"
        }, children: [
          /* @__PURE__ */ p(z, { sx: { display: "flex", flex: 1, alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ d(z, { sx: {
              p: 1,
              bgcolor: "primary.lighter",
              color: "primary.main",
              borderRadius: "12px",
              display: "flex"
            }, children: /* @__PURE__ */ d(Oo, { size: 20 }) }),
            /* @__PURE__ */ p(z, { children: [
              /* @__PURE__ */ d(Z, { variant: "subtitle1", fontWeight: 800, lineHeight: 1.2, children: "Visualización de Imagen" }),
              /* @__PURE__ */ d(Z, { variant: "caption", color: "text.secondary", children: i })
            ] })
          ] }),
          /* @__PURE__ */ p(z, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ d(
              we,
              {
                variant: "primary",
                size: "sm",
                onClick: async () => {
                  if (u)
                    await u();
                  else if (r && A)
                    await A(r, a);
                  else if (h) {
                    const Q = document.createElement("a");
                    Q.href = h, Q.download = a, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q);
                  }
                },
                className: "text-xs h-8 px-3 shadow-sm font-bold",
                icon: Mn,
                children: "Descargar"
              }
            ),
            /* @__PURE__ */ d(
              ke,
              {
                onClick: t,
                size: "small",
                sx: {
                  color: "text.secondary",
                  "&:hover": { bgcolor: "error.lighter", color: "error.main" }
                },
                children: /* @__PURE__ */ d(Me, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d(Un, { sx: { p: 0, bgcolor: "#0f172a", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }, children: g ? /* @__PURE__ */ p(z, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, p: 4 }, children: [
          /* @__PURE__ */ d("div", { className: "w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" }),
          /* @__PURE__ */ d(Z, { variant: "body2", sx: { color: "white" }, children: "Cargando imagen..." })
        ] }) : f ? /* @__PURE__ */ p(z, { sx: { p: 4, textAlign: "center" }, children: [
          /* @__PURE__ */ d(Z, { variant: "body1", color: "error", gutterBottom: !0, children: f }),
          /* @__PURE__ */ d(we, { variant: "secondary", size: "sm", onClick: t, className: "mt-2", children: "Cerrar" })
        ] }) : /* @__PURE__ */ d(
          "img",
          {
            src: h,
            alt: i,
            className: "max-w-full max-h-[75vh] object-contain mx-auto select-none"
          }
        ) })
      ]
    }
  );
}, sc = ({
  placeholder: e = "Buscar...",
  value: t,
  onChange: r,
  onClear: n,
  className: o = "",
  debounce: i = !1,
  debounceDelay: a = 300
}) => {
  const [s, c] = oe(t || ""), [u, A] = oe(null), h = (g) => {
    const y = g.target.value;
    if (c(y), i) {
      u && clearTimeout(u);
      const f = setTimeout(() => {
        r == null || r(y);
      }, a);
      A(f);
    } else
      r == null || r(y);
  }, m = () => {
    c(""), r == null || r(""), n == null || n();
  };
  return /* @__PURE__ */ p("div", { className: `relative ${o}`, children: [
    /* @__PURE__ */ d(
      Hn,
      {
        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
        size: 20
      }
    ),
    /* @__PURE__ */ d(
      "input",
      {
        type: "text",
        value: i ? s : t,
        onChange: h,
        placeholder: e,
        className: "w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      }
    ),
    (i ? s : t) && /* @__PURE__ */ d(
      "button",
      {
        onClick: m,
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
        children: /* @__PURE__ */ d(Me, { size: 18 })
      }
    )
  ] });
}, lc = ({
  title: e,
  subtitle: t,
  icon: r,
  checked: n,
  onChange: o,
  disabled: i = !1,
  labelTag: a
}) => /* @__PURE__ */ p(
  "div",
  {
    onClick: i ? void 0 : o,
    className: `
                group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer
                ${n ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50"}
                ${i ? "opacity-50 cursor-not-allowed" : ""}
            `,
    children: [
      /* @__PURE__ */ d("div", { className: `
                p-3 rounded-xl transition-colors
                ${n ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}
            `, children: r || /* @__PURE__ */ d(So, { size: 20 }) }),
      /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-2 mb-0.5", children: [
          /* @__PURE__ */ d("h4", { className: `text-sm font-black ${n ? "text-primary" : "text-gray-900"}`, children: e }),
          a && /* @__PURE__ */ d("span", { className: "text-[10px] font-black px-2 py-0.5 rounded bg-gray-100 text-gray-400 lowercase tracking-tighter", children: a })
        ] }),
        t && /* @__PURE__ */ d("p", { className: "text-xs font-semibold text-gray-500 leading-relaxed", children: t })
      ] }),
      /* @__PURE__ */ d("div", { onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ d(
        kn,
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
), cc = ({
  open: e,
  message: t = "Procesando, por favor espere..."
}) => /* @__PURE__ */ d(
  Zo,
  {
    sx: {
      color: "#fff",
      zIndex: (r) => r.zIndex.drawer + 9999,
      backdropFilter: "blur(4px)",
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    open: e,
    children: /* @__PURE__ */ p(
      z,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        className: "bg-white/95 p-6 rounded-2xl shadow-2xl border border-emerald-100 text-gray-800 max-w-sm text-center",
        children: [
          /* @__PURE__ */ d(zn, { color: "success", size: 48 }),
          /* @__PURE__ */ d(Z, { variant: "body1", className: "font-bold text-gray-800", children: t })
        ]
      }
    )
  }
), uc = ({
  message: e,
  size: t = 40,
  color: r = "success",
  className: n = "",
  minHeight: o = "200px"
}) => /* @__PURE__ */ p(
  z,
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: o,
    gap: 2,
    className: `p-6 ${n}`,
    children: [
      /* @__PURE__ */ d(zn, { color: r, size: t }),
      e && /* @__PURE__ */ d(Z, { variant: "body2", className: "text-gray-500 font-medium animate-pulse text-center", children: e })
    ]
  }
), fc = ({
  permission: e,
  hasPermission: t,
  checkPermission: r,
  fallback: n = null,
  children: o
}) => {
  let i = !0;
  return t !== void 0 ? i = t : r && e !== void 0 && (i = r(e)), i ? /* @__PURE__ */ d(De, { children: o }) : /* @__PURE__ */ d(De, { children: n });
}, rl = [
  {
    id: 1,
    title: "Nuevas calificaciones",
    message: "Se han publicado las notas del parcial",
    time: "Hace 2 horas",
    read: !1
  },
  {
    id: 2,
    title: "Recordatorio",
    message: "Matrícula para el próximo semestre",
    time: "Hace 5 horas",
    read: !1
  },
  {
    id: 3,
    title: "Evento académico",
    message: "Conferencia de tecnología mañana",
    time: "Ayer",
    read: !0
  }
], Ac = ({
  portalTitle: e = "Gestión de la Investigación",
  portalSubtitle: t = "Universidad Simón Bolívar",
  user: r,
  onLogout: n,
  onProfileClick: o,
  onSettingsClick: i,
  notifications: a = rl,
  unreadCount: s,
  onNotificationClick: c,
  onMarkAllAsRead: u,
  onViewAllNotifications: A,
  rightActions: h
}) => {
  const [m, g] = oe(!1), [y, f] = oe(!1), v = at(null), O = at(null), Q = s !== void 0 ? s : a.filter((b) => !b.read).length, H = r != null && r.nombre && (r != null && r.apellido) ? `${r.nombre} ${r.apellido}` : (r == null ? void 0 : r.nombre) || (r == null ? void 0 : r.name) || (r == null ? void 0 : r.username) || (r == null ? void 0 : r.email) || "Unisimon Bolivar", E = (r == null ? void 0 : r.foto) || (r == null ? void 0 : r.avatarUrl) || "https://ui-avatars.com/api/?name=Unisimon+Bolivar&background=076930&color=fff&size=128";
  return Le(() => {
    const b = (N) => {
      const P = N.target;
      v.current && !v.current.contains(P) && g(!1), O.current && !O.current.contains(P) && f(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ d("header", { className: "bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30", children: /* @__PURE__ */ d("div", { className: "px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ p("div", { className: "flex-1", children: [
      /* @__PURE__ */ d("h1", { className: "text-xl md:text-2xl font-bold text-gray-800 tracking-tight leading-tight", children: e }),
      /* @__PURE__ */ d("p", { className: "text-xs md:text-sm text-gray-500 font-medium", children: t })
    ] }),
    /* @__PURE__ */ p("div", { className: "flex items-center space-x-4 ml-4", children: [
      h,
      /* @__PURE__ */ p("div", { className: "relative", ref: O, children: [
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => f(!y),
            className: "relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer",
            title: "Notificaciones",
            children: [
              /* @__PURE__ */ d(Qo, { size: 20 }),
              Q > 0 && /* @__PURE__ */ d("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-3xl" })
            ]
          }
        ),
        /* @__PURE__ */ d(qe, { children: y && /* @__PURE__ */ p(
          ce.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
            className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden",
            children: [
              /* @__PURE__ */ p("div", { className: "p-4 border-b border-gray-200 flex items-center justify-between", children: [
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ d("h3", { className: "font-semibold text-gray-900 text-sm", children: "Notificaciones" }),
                  Q > 0 && /* @__PURE__ */ p("p", { className: "text-xs text-gray-500 mt-1", children: [
                    Q,
                    " sin leer"
                  ] })
                ] }),
                u && Q > 0 && /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    onClick: u,
                    className: "text-xs text-primary font-medium hover:underline cursor-pointer",
                    children: "Marcar leídas"
                  }
                )
              ] }),
              /* @__PURE__ */ d("div", { className: "max-h-96 overflow-y-auto custom-scrollbar", children: a.length === 0 ? /* @__PURE__ */ d("div", { className: "p-6 text-center text-xs text-gray-400", children: "No tienes notificaciones" }) : a.map((b) => /* @__PURE__ */ p(
                "div",
                {
                  onClick: () => c && c(b),
                  className: `p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${b.read ? "" : "bg-blue-50"}`,
                  children: [
                    /* @__PURE__ */ d("p", { className: "font-medium text-sm text-gray-900", children: b.title }),
                    /* @__PURE__ */ d("p", { className: "text-xs text-gray-600 mt-1", children: b.message }),
                    b.time && /* @__PURE__ */ d("p", { className: "text-xs text-gray-400 mt-2", children: b.time })
                  ]
                },
                b.id
              )) }),
              /* @__PURE__ */ d("div", { className: "p-3 text-center border-t border-gray-200", children: /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  onClick: A,
                  className: "text-sm text-primary hover:text-primary-dark font-medium cursor-pointer",
                  children: "Ver todas las notificaciones"
                }
              ) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ p("div", { className: "relative", ref: v, children: [
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => g(!m),
            className: "flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ d(
                "img",
                {
                  src: E,
                  alt: H,
                  className: "w-10 h-10 rounded-3xl border-2 border-primary object-cover"
                }
              ),
              /* @__PURE__ */ p("div", { className: "hidden md:block text-left", children: [
                /* @__PURE__ */ d("p", { className: "text-sm font-semibold text-gray-900 leading-snug", children: H }),
                /* @__PURE__ */ d("div", { className: "flex items-center space-x-1 text-xs text-gray-500", children: /* @__PURE__ */ d("span", { children: r != null && r.sede ? `Sede ${r.sede}` : "" }) })
              ] }),
              /* @__PURE__ */ d(
                Mo,
                {
                  size: 16,
                  className: `text-gray-600 transition-transform ${m ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ d(qe, { children: m && /* @__PURE__ */ p(
          ce.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
            className: "absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden",
            children: [
              /* @__PURE__ */ p("div", { className: "p-4 border-b border-gray-200", children: [
                /* @__PURE__ */ p("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ d(
                    "img",
                    {
                      src: E,
                      alt: H,
                      className: "w-12 h-12 rounded-3xl border-2 border-primary object-cover"
                    }
                  ),
                  /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ d(
                      "p",
                      {
                        className: "font-semibold text-gray-900 truncate",
                        title: H,
                        children: H
                      }
                    ),
                    (r == null ? void 0 : r.email) && (r == null ? void 0 : r.email) !== H && /* @__PURE__ */ d(
                      "p",
                      {
                        className: "text-sm text-gray-500 truncate",
                        title: r.email,
                        children: r.email
                      }
                    ),
                    /* @__PURE__ */ p("div", { className: "flex items-center space-x-1 text-xs text-gray-500 mt-1", children: [
                      /* @__PURE__ */ d(Ho, { size: 12 }),
                      /* @__PURE__ */ d("span", { children: r != null && r.sede ? `Sede ${r.sede}` : "Sede" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ p("div", { className: "mt-3 p-2 rounded-lg", children: [
                  (r == null ? void 0 : r.programa) && /* @__PURE__ */ d(
                    "p",
                    {
                      className: "text-xs text-primary font-medium truncate",
                      title: r.programa,
                      children: r.programa
                    }
                  ),
                  /* @__PURE__ */ p("p", { className: "text-xs text-gray-600 mt-1", children: [
                    "Código: ",
                    (r == null ? void 0 : r.codigo) || "N/A"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ p("div", { className: "p-2", children: [
                /* @__PURE__ */ p(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      g(!1), o && o();
                    },
                    className: "w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ d(Ro, { size: 18 }),
                      /* @__PURE__ */ d("span", { className: "text-sm", children: "Mi Perfil" })
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      g(!1), i && i();
                    },
                    className: "w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ d(tr, { size: 18 }),
                      /* @__PURE__ */ d("span", { className: "text-sm", children: "Configuración" })
                    ]
                  }
                )
              ] }),
              n && /* @__PURE__ */ d("div", { className: "p-2 border-t border-gray-200", children: /* @__PURE__ */ p(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    g(!1), n();
                  },
                  className: "w-full flex items-center space-x-3 px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ d(To, { size: 18 }),
                    /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: "Cerrar Sesión" })
                  ]
                }
              ) })
            ]
          }
        ) })
      ] })
    ] })
  ] }) }) });
}, Nr = "data:image/png;base64,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", gc = ({
  menuItems: e = [],
  currentPath: t = "",
  onNavigate: r,
  logoSrc: n = Nr,
  user: o,
  onLogout: i,
  LinkComponent: a
}) => {
  var N;
  const [s, c] = oe(!1), [u, A] = oe(!1), [h, m] = oe([]), [g, y] = oe(""), [f, v] = oe(
    typeof window < "u" ? window.innerWidth : 1200
  );
  Le(() => {
    const P = () => v(window.innerWidth);
    return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, []);
  const O = f >= 1024;
  Le(() => {
    O || A(!1);
  }, [t, O]);
  const Q = (P) => {
    m(
      (k) => k.includes(P) ? k.filter((R) => R !== P) : [...k, P]
    );
  }, H = e.filter(
    (P) => P.label.toLowerCase().includes(g.toLowerCase()) || P.children && P.children.some(
      (k) => k.label.toLowerCase().includes(g.toLowerCase())
    )
  ), b = a || (({ to: P, className: k, title: R, children: Y }) => /* @__PURE__ */ d(
    "a",
    {
      href: P,
      onClick: (T) => {
        r && (T.preventDefault(), r(P));
      },
      className: k,
      title: R,
      children: Y
    }
  ));
  return /* @__PURE__ */ p(De, { children: [
    /* @__PURE__ */ d(qe, { children: !O && u && /* @__PURE__ */ d(
      ce.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => A(!1),
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
      }
    ) }),
    !O && /* @__PURE__ */ d(
      "button",
      {
        onClick: () => A(!0),
        className: "fixed top-4 left-4 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-primary cursor-pointer",
        children: /* @__PURE__ */ d(Ce.Menu, { size: 24 })
      }
    ),
    /* @__PURE__ */ p(
      ce.aside,
      {
        initial: !1,
        animate: {
          width: s ? "80px" : "280px",
          x: O || u ? 0 : "-100%"
        },
        transition: { type: "spring", damping: 20, stiffness: 100 },
        className: "fixed lg:relative h-screen bg-white border-r border-gray-200 shadow-lg z-50 flex flex-col transition-all duration-300",
        children: [
          /* @__PURE__ */ d("div", { className: "h-20 flex items-center px-6 border-b border-gray-100 bg-white", children: s ? /* @__PURE__ */ d("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ d(
            "img",
            {
              src: n,
              alt: "Logo",
              className: "h-8 w-auto object-contain"
            }
          ) }) : /* @__PURE__ */ p("div", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ d(
              "img",
              {
                src: n,
                alt: "Logo Simón Bolívar",
                className: "h-12 w-auto object-contain"
              }
            ) }),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => c(!0),
                className: "p-1.5 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors lg:block hidden cursor-pointer",
                children: /* @__PURE__ */ d(Ce.ChevronLeft, { size: 20 })
              }
            )
          ] }) }),
          s && O && /* @__PURE__ */ d("div", { className: "py-2 flex justify-center border-b border-gray-100", children: /* @__PURE__ */ d(
            "button",
            {
              onClick: () => c(!1),
              className: "p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer",
              title: "Expandir menú",
              children: /* @__PURE__ */ d(Ce.ChevronRight, { size: 20 })
            }
          ) }),
          !s && /* @__PURE__ */ d("div", { className: "p-4", children: /* @__PURE__ */ p("div", { className: "relative group", children: [
            /* @__PURE__ */ d(
              Ce.Search,
              {
                size: 18,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
              }
            ),
            /* @__PURE__ */ d(
              "input",
              {
                type: "text",
                placeholder: "Buscar en el menú...",
                value: g,
                onChange: (P) => y(P.target.value),
                className: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-gray-700"
              }
            ),
            g && /* @__PURE__ */ d(
              "button",
              {
                onClick: () => y(""),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer",
                children: /* @__PURE__ */ d(Ce.X, { size: 14 })
              }
            )
          ] }) }),
          /* @__PURE__ */ d("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar py-4 px-3 space-y-1", children: H.map((P) => {
            var l, I;
            const k = !!P.children && P.children.length > 0, R = h.includes(P.label), Y = t === P.path || k && ((l = P.children) == null ? void 0 : l.some((w) => t === w.path)), T = P.icon || Ce.Circle;
            return /* @__PURE__ */ p("div", { className: "lg:mb-1", children: [
              k ? /* @__PURE__ */ p(
                "button",
                {
                  onClick: () => Q(P.label),
                  className: `
                      w-full flex items-center group transition-all duration-200 rounded-lg p-3 cursor-pointer
                      ${s ? "justify-center" : "px-4 py-3"}
                      ${Y ? "bg-primary text-white shadow-md shadow-primary/20" : "text-gray-600 hover:bg-primary/5 hover:text-primary"}
                    `,
                  title: s ? P.label : "",
                  children: [
                    /* @__PURE__ */ d(
                      T,
                      {
                        size: s ? 24 : 20,
                        className: `${!s && "mr-3"} ${Y ? "text-white" : "text-gray-400 group-hover:text-primary"} transition-colors`
                      }
                    ),
                    !s && /* @__PURE__ */ d("span", { className: "font-medium whitespace-nowrap", children: P.label }),
                    !s && /* @__PURE__ */ d("div", { className: "ml-auto flex items-center", children: R ? /* @__PURE__ */ d(Ce.ChevronUp, { size: 16 }) : /* @__PURE__ */ d(Ce.ChevronDown, { size: 16 }) })
                  ]
                }
              ) : /* @__PURE__ */ p(
                b,
                {
                  to: P.path,
                  className: `
                      flex items-center group transition-all duration-200 rounded-lg cursor-pointer
                      ${s ? "justify-center p-3" : "px-4 py-3"}
                      ${Y ? "bg-primary text-white shadow-md shadow-primary/20" : "text-gray-600 hover:bg-primary/5 hover:text-primary"}
                    `,
                  title: s ? P.label : "",
                  children: [
                    /* @__PURE__ */ d(
                      T,
                      {
                        size: s ? 24 : 20,
                        className: `${!s && "mr-3"} ${Y ? "text-white" : "text-gray-400 group-hover:text-primary"} transition-colors`
                      }
                    ),
                    !s && /* @__PURE__ */ d("span", { className: "font-medium whitespace-nowrap", children: P.label }),
                    !s && Y && /* @__PURE__ */ d(
                      ce.div,
                      {
                        layoutId: "activeIndicator",
                        className: "ml-auto w-1.5 h-1.5 rounded-3xl bg-white"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d(qe, { children: k && R && !s && /* @__PURE__ */ d(
                ce.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden pl-10 space-y-1",
                  children: (I = P.children) == null ? void 0 : I.map((w) => {
                    const D = t === w.path;
                    return /* @__PURE__ */ p(
                      b,
                      {
                        to: w.path,
                        className: `
                              flex items-center py-2 px-3 rounded-lg text-sm transition-all duration-200 m-2 cursor-pointer
                              ${D ? "bg-warning text-white shadow-sm shadow-primary/20 font-semibold" : "text-gray-500 hover:text-primary hover:bg-primary/5"}
                            `,
                        children: [
                          /* @__PURE__ */ d(
                            Ce.Circle,
                            {
                              size: 6,
                              fill: D ? "white" : "none",
                              className: `mr-3 ${D ? "text-white" : "text-gray-400"}`
                            }
                          ),
                          /* @__PURE__ */ d("span", { className: "truncate", children: w.label }),
                          D && /* @__PURE__ */ d(
                            ce.div,
                            {
                              layoutId: "activeSubIndicator",
                              className: "ml-auto w-1.5 h-1.5 rounded-3xl bg-white"
                            }
                          )
                        ]
                      },
                      w.label || w.path
                    );
                  })
                }
              ) })
            ] }, P.label);
          }) }),
          o && !s && /* @__PURE__ */ p("div", { className: "p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between", children: [
            /* @__PURE__ */ p("div", { className: "flex items-center space-x-2.5 overflow-hidden", children: [
              /* @__PURE__ */ d("div", { className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0", children: ((N = o.username) == null ? void 0 : N.charAt(0).toUpperCase()) || "U" }),
              /* @__PURE__ */ d("p", { className: "text-xs font-bold text-gray-700 truncate", children: o.username })
            ] }),
            i && /* @__PURE__ */ d(
              "button",
              {
                onClick: i,
                className: "text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer",
                title: "Cerrar sesión",
                children: /* @__PURE__ */ d(Ce.LogOut, { size: 16 })
              }
            )
          ] })
        ]
      }
    )
  ] });
}, nl = "data:image/png;base64,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", hc = ({
  fullScreen: e = !1,
  message: t = "Cargando...",
  logoSrc: r = nl
}) => /* @__PURE__ */ d("div", { className: e ? "fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center" : "flex items-center justify-center py-12", children: /* @__PURE__ */ p("div", { className: "text-center", children: [
  /* @__PURE__ */ p("div", { className: "relative w-24 h-24 mx-auto mb-6", children: [
    /* @__PURE__ */ d("div", { className: "absolute inset-0 border-4 border-gray-200 rounded-full" }),
    /* @__PURE__ */ d(
      ce.div,
      {
        className: "absolute inset-0 border-4 border-primary border-t-transparent rounded-full",
        animate: { rotate: 360 },
        transition: { duration: 1, repeat: 1 / 0, ease: "linear" }
      }
    ),
    /* @__PURE__ */ d("div", { className: "absolute inset-2 rounded-full overflow-hidden flex items-center justify-center bg-white", children: /* @__PURE__ */ d("img", { src: r, alt: "Cargando", className: "w-full h-full object-contain p-1" }) })
  ] }),
  /* @__PURE__ */ p(
    ce.p,
    {
      className: "text-gray-600 font-medium text-lg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
      children: [
        t,
        /* @__PURE__ */ d(
          ce.span,
          {
            animate: { opacity: [0, 1, 0] },
            transition: { duration: 1.5, repeat: 1 / 0, ease: "easeInOut" },
            children: "..."
          }
        )
      ]
    }
  )
] }) }), mc = ({
  count: e = 3,
  height: t = "h-12",
  className: r = ""
}) => /* @__PURE__ */ d("div", { className: `space-y-4 ${r}`, children: Array.from({ length: e }).map((n, o) => /* @__PURE__ */ d(
  "div",
  {
    className: `${t} bg-gray-200 rounded-lg animate-pulse`
  },
  o
)) }), pc = ({
  version: e = "1.0.0",
  year: t = (/* @__PURE__ */ new Date()).getFullYear()
}) => /* @__PURE__ */ d("footer", { className: "border-gray-100 border-t mt-auto bg-gray-50/50", children: /* @__PURE__ */ d("div", { className: "px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ p("div", { className: "flex flex-col md:flex-row justify-between items-center gap-2", children: [
  /* @__PURE__ */ p("p", { className: "text-sm text-slate-400", children: [
    "© ",
    t,
    " Universidad Simón Bolívar. Todos los derechos reservados."
  ] }),
  /* @__PURE__ */ p("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ p("p", { className: "text-xs text-slate-500", children: [
      "Versión del Sistema: ",
      /* @__PURE__ */ d("span", { className: "font-semibold", children: e })
    ] }),
    /* @__PURE__ */ d("span", { className: "text-slate-200", children: "|" }),
    /* @__PURE__ */ d("a", { href: "#", className: "text-xs text-slate-400 hover:text-slate-600 transition-colors", children: "Términos y Condiciones" }),
    /* @__PURE__ */ d("span", { className: "text-slate-200", children: "|" }),
    /* @__PURE__ */ d("a", { href: "#", className: "text-xs text-slate-400 hover:text-slate-600 transition-colors", children: "Política de Privacidad" })
  ] })
] }) }) }), yc = ({
  title: e = "Página no encontrada",
  description: t = "Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, verifica la URL o regresa al inicio del portal.",
  homeText: r = "Ir al Inicio",
  backText: n = "Regresar",
  onNavigateHome: o,
  onNavigateBack: i,
  logoSrc: a = Nr,
  showLogo: s = !0
}) => /* @__PURE__ */ p("div", { className: "min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden font-inter", children: [
  /* @__PURE__ */ d("div", { className: "absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" }),
  /* @__PURE__ */ d("div", { className: "absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" }),
  /* @__PURE__ */ d("div", { className: "absolute top-[20%] left-[15%] text-primary/30 animate-pulse hidden md:block", children: /* @__PURE__ */ d($e, { size: 40 }) }),
  /* @__PURE__ */ d("div", { className: "absolute top-[15%] right-[25%] text-primary/30 animate-bounce transition-all duration-[3000ms] hidden md:block", children: /* @__PURE__ */ d(tr, { size: 32 }) }),
  /* @__PURE__ */ d("div", { className: "absolute bottom-[20%] right-[15%] text-primary/30 animate-pulse hidden md:block", children: /* @__PURE__ */ d(Fo, { size: 36 }) }),
  /* @__PURE__ */ d("div", { className: "absolute bottom-[25%] left-[20%] text-primary/30 hidden md:block", children: /* @__PURE__ */ d(tr, { size: 24 }) }),
  /* @__PURE__ */ p("div", { className: "max-w-2xl w-full flex flex-col items-center text-center z-10", children: [
    /* @__PURE__ */ p("div", { className: "relative mb-12 flex items-center justify-center", children: [
      /* @__PURE__ */ p("div", { className: "relative", children: [
        /* @__PURE__ */ p("div", { className: "w-[280px] h-[170px] md:w-[320px] md:h-[190px] bg-white border-[8px] border-gray-100 rounded-2xl shadow-premium flex items-center justify-center relative overflow-hidden", children: [
          /* @__PURE__ */ d("span", { className: "text-8xl md:text-[110px] font-black text-[#1e293b] tracking-tighter select-none opacity-90 leading-none", children: "404" }),
          /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-gray-50/50 pointer-events-none" })
        ] }),
        /* @__PURE__ */ d("div", { className: "w-[320px] h-[12px] md:w-[360px] md:h-[14px] bg-gray-200 rounded-b-2xl mx-auto -mt-1 shadow-md" }),
        /* @__PURE__ */ d("div", { className: "absolute -bottom-8 -left-6 md:-left-12 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-premium border-4 border-gray-50 flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500", children: /* @__PURE__ */ d(Hn, { size: 48, className: "text-secondary-light" }) })
      ] }),
      /* @__PURE__ */ d("div", { className: "absolute -top-6 -right-6 w-16 h-2 bg-primary/40 rounded-full rotate-45" }),
      /* @__PURE__ */ d("div", { className: "absolute top-16 -right-16 w-10 h-2 bg-primary/40 rounded-full" }),
      /* @__PURE__ */ d("div", { className: "absolute bottom-24 -right-12 w-14 h-2 bg-primary/40 rounded-full -rotate-12" })
    ] }),
    /* @__PURE__ */ d("h1", { className: "text-4xl md:text-5xl font-black text-[#1e293b] mb-4 tracking-tight", children: e }),
    /* @__PURE__ */ d("p", { className: "text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium px-4", children: t }),
    /* @__PURE__ */ p("div", { className: "flex flex-col sm:flex-row gap-5 items-center w-full justify-center px-4", children: [
      /* @__PURE__ */ d(
        we,
        {
          variant: "ghost",
          size: "lg",
          className: "px-10 py-4 font-bold border-2 border-transparent hover:border-gray-100 shadow-sm",
          icon: Rn,
          onClick: () => {
            i ? i() : typeof window < "u" && window.history.length > 1 && window.history.back();
          },
          children: n
        }
      ),
      /* @__PURE__ */ d(
        we,
        {
          variant: "primary",
          size: "lg",
          className: "px-12 py-4 font-bold shadow-xl shadow-green-900/10",
          icon: Tn,
          onClick: () => {
            o ? o() : typeof window < "u" && (window.location.href = "/dashboard");
          },
          children: r
        }
      )
    ] }),
    s && a && /* @__PURE__ */ d("div", { className: "mt-20 opacity-40 hover:opacity-80 transition-opacity duration-700", children: /* @__PURE__ */ d(
      "img",
      {
        src: a,
        alt: "Universidad Simón Bolívar",
        className: "h-12 w-auto object-contain grayscale brightness-0"
      }
    ) })
  ] })
] }), Cc = ({
  title: e = "Acceso Restringido",
  description: t = "No tienes los privilegios necesarios para acceder a esta sección del portal. Si consideras que deberías tener acceso, por favor contacta al administrador.",
  homeText: r = "Ir al Inicio",
  backText: n = "Regresar",
  onNavigateHome: o,
  onNavigateBack: i,
  logoSrc: a = Nr,
  showLogo: s = !0
}) => /* @__PURE__ */ p("div", { className: "min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden font-inter", children: [
  /* @__PURE__ */ d("div", { className: "absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl -z-10" }),
  /* @__PURE__ */ d("div", { className: "absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl -z-10" }),
  /* @__PURE__ */ d("div", { className: "absolute top-[20%] left-[15%] text-red-800/30 animate-pulse hidden md:block", children: /* @__PURE__ */ d(Br, { size: 40 }) }),
  /* @__PURE__ */ d("div", { className: "absolute bottom-[20%] right-[15%] text-red-800/30 animate-pulse hidden md:block", children: /* @__PURE__ */ d(ko, { size: 36 }) }),
  /* @__PURE__ */ p("div", { className: "max-w-2xl w-full flex flex-col items-center text-center z-10", children: [
    /* @__PURE__ */ d("div", { className: "relative mb-12 flex items-center justify-center", children: /* @__PURE__ */ p("div", { className: "relative", children: [
      /* @__PURE__ */ p("div", { className: "w-[280px] h-[170px] md:w-[320px] md:h-[190px] bg-white border-[8px] border-gray-100 rounded-2xl shadow-premium flex items-center justify-center relative overflow-hidden", children: [
        /* @__PURE__ */ d("span", { className: "text-8xl md:text-[110px] font-black text-red-600 tracking-tighter select-none opacity-90 leading-none", children: "403" }),
        /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-50/20 pointer-events-none" })
      ] }),
      /* @__PURE__ */ d("div", { className: "w-[320px] h-[12px] md:w-[360px] md:h-[14px] bg-gray-200 rounded-b-2xl mx-auto -mt-1 shadow-md" }),
      /* @__PURE__ */ d("div", { className: "absolute -bottom-8 -left-6 md:-left-12 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-premium border-4 border-gray-50 flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500", children: /* @__PURE__ */ d(Br, { size: 48, className: "text-red-500 animate-bounce" }) })
    ] }) }),
    /* @__PURE__ */ d("h1", { className: "text-4xl md:text-5xl font-black text-[#1e293b] mb-4 tracking-tight", children: e }),
    /* @__PURE__ */ d("p", { className: "text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium px-4", children: t }),
    /* @__PURE__ */ p("div", { className: "flex flex-col sm:flex-row gap-5 items-center w-full justify-center px-4", children: [
      /* @__PURE__ */ d(
        we,
        {
          variant: "ghost",
          size: "lg",
          className: "px-10 py-4 font-bold border-2 border-transparent hover:border-gray-100 shadow-sm",
          icon: Rn,
          onClick: () => {
            i ? i() : typeof window < "u" && window.history.length > 1 && window.history.back();
          },
          children: n
        }
      ),
      /* @__PURE__ */ d(
        we,
        {
          variant: "primary",
          size: "lg",
          className: "px-12 py-4 font-bold shadow-xl shadow-green-900/10",
          icon: Tn,
          onClick: () => {
            o ? o() : typeof window < "u" && (window.location.href = "/dashboard");
          },
          children: r
        }
      )
    ] }),
    s && a && /* @__PURE__ */ d("div", { className: "mt-20 opacity-40 hover:opacity-80 transition-opacity duration-700", children: /* @__PURE__ */ d(
      "img",
      {
        src: a,
        alt: "Universidad Simón Bolívar",
        className: "h-12 w-auto object-contain grayscale brightness-0"
      }
    ) })
  ] })
] }), vc = {
  /**
   * Muestra un mensaje de éxito tipo Toast (esquina superior derecha) que desaparece automáticamente.
   */
  success: (e, t = 3e3) => Be.fire({
    icon: "success",
    title: e,
    toast: !0,
    position: "top-end",
    showConfirmButton: !1,
    timer: t,
    timerProgressBar: !0,
    customClass: {
      popup: "swal2-toast-institutional"
    }
  }),
  /**
   * Muestra un mensaje de error en un diálogo central.
   */
  error: (e = "Error", t) => Be.fire({
    icon: "error",
    title: e || "Error",
    text: t || "Ha ocurrido un error inesperado",
    confirmButtonColor: "var(--error-main, #ef4444)",
    confirmButtonText: "Entendido",
    background: "#ffffff",
    color: "#1e293b"
  }),
  /**
   * Muestra un mensaje de información en un diálogo central.
   */
  info: (e, t) => Be.fire({
    icon: "info",
    title: e,
    text: t,
    confirmButtonColor: "var(--info-main, #3b82f6)",
    confirmButtonText: "Aceptar",
    background: "#ffffff",
    color: "#1e293b"
  }),
  /**
   * Muestra un mensaje de advertencia en un diálogo central.
   */
  warning: (e, t) => Be.fire({
    icon: "warning",
    title: e,
    text: t,
    confirmButtonColor: "var(--warning-main, #f59e0b)",
    confirmButtonText: "Aceptar",
    background: "#ffffff",
    color: "#1e293b"
  }),
  /**
   * Muestra un diálogo de confirmación para acciones destructivas o críticas.
   */
  confirm: async (e, t = "Esta acción no se puede deshacer", r = "Sí, confirmar", n = "Cancelar") => (await Be.fire({
    title: e,
    text: t,
    icon: "warning",
    showCancelButton: !0,
    confirmButtonColor: "var(--primary-main, #09843B)",
    cancelButtonColor: "var(--error-main, #ef4444)",
    confirmButtonText: r,
    cancelButtonText: n,
    reverseButtons: !0,
    background: "#ffffff",
    color: "#1e293b"
  })).isConfirmed,
  /**
   * Diálogo de carga que bloquea la pantalla hasta que se resuelva la acción.
   */
  loading: (e = "Cargando...", t) => {
    Be.fire({
      title: e,
      text: t,
      allowOutsideClick: !1,
      allowEscapeKey: !1,
      didOpen: () => {
        Be.showLoading();
      }
    });
  },
  /**
   * Cierra cualquier alerta o modal de carga activo.
   */
  close: () => {
    Be.close();
  }
}, wc = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsgRVELoYWfS2FFYIuhhasLYUV4S6GFuMthRWyLIAVNQAAAAAAAAAAAAAAACJjEBAthRU1AAAAAAAAAAAAAAAALYUVXS6GFnMuhhbjLoYW/i6GFtMuhhbPLoYW+C6GFu0uhhaPLoYWYy6GFmcthRVRHVYOASBfDyQAAAAAAAAAAAAAAAAuhhZ/LYUV/i6GFrMthRWuLoYWni2FFbkuhhb9LYUVvC6GFjgsgRUBAAAAAAAAAAAuhha6LoYWYQAAAAAAAAAALoYWeS6GFrQuhhZiLoYWpC6GFrAuhhaxLoYWpi6GFpUuhhZgLoYWmih3EyMAAAAAK38UGy2FFXsuhhZ5LYUVdS6GFmcthRVcLoYWRi2FFWguhhaZLYUVyC6GFoMthRVsLoYWlS2FFZksgBVGGEcLBi6GFl8uhhZXLoYWbS6GFnouhhZ7LoYWeC6GFj8uhhZOLoYWbi6GFm8uhhZpLoYWJCRqEQMbTwwBJ3MSKRxTDQoqexQkLYUVSC6GFkQthRUJLoYWki2FFf4ndBM8JW4SDi6GFs4thRV+LoYW4S2FFdgYSAsBAAAAAAAAAAAAAAAAAAAAAAAAAAAqehQXLIEVIi6GFpIuhhb/J3ISPAAAAAApdxMoKXgTDi6GFuEuhhbcGEgLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5YDg4uhhajLYUV/i2DFVwAAAAAAAAAACl5Ey4uhhbjLYUV3il4EyIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkaxEoLoYWri6GFq4uhhaeAAAAAAAAAAAuhhZkLoYWri6GFq4uhhZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA4BwAAOAAAABwAwAAMAEAAAAAAAAAAAAAAAcAAMEHAADhhwAA4YcAAP//AAD//wAA//8AAA==", ol = "data:image/png;base64,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", il = "data:image/png;base64,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", al = "data:image/png;base64,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", dl = "data:image/png;base64,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", sl = "data:image/png;base64,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", ll = "data:image/png;base64,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", cl = "data:image/png;base64,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", ul = "data:image/png;base64,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", fl = "data:image/png;base64,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", Al = "data:image/png;base64,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", gl = "data:image/png;base64,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", hl = "data:image/png;base64,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", ml = "data:image/png;base64,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", pl = "data:image/png;base64,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", yl = "data:image/png;base64,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", Cl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAgAElEQVR4nO19B5xdVbX+t/c5t04vSWbSG+mQQAqhSu8gIIKCIk99KDxF1Gd5qE98iIiCIkp5gA0FFAQpgvRiQqjppPdkUibJ9HbvPWX/f2vtve89M6lKBifv7/aHSWbuPWXvtdde61vfWkvg6vsV7BACUOaf9Pcw1H/ubtDn+PP0WfN7FfncHr62xxEqQEpz3R7PoszFhOp+r+jPe94/OmTkWv/I2N+v2mfu+e7K/J+dy13mSex6E76ONNcM//Fn38dwuz14GLkR/Vuh+8TZF8u/iOq+UNFrqcjve46eP6N/C3tPVbh2/qbmuVTPeeohINiDEAdKC0H03aKX2JeQR9eHrxmYn8se19qTIJpdoqL/RuRnu7yY+Vi464/39Kz/4HC7PTi/lACCUP/Mkd2ef48PstsFFXpXYz+0QVTTSFn4mf2iNBMVqu7CJ8VuNk90B5p3CFX3XbjLs+9hi1uNRAIoncIGcRzzbrvRVj3nIQj054HuWpM1XuEx8w8dnavoHuil4Xa7rN2BdEN6YRFdzDCyMJEXVOZFlDSLp8xCqcjO3Y2AdPu30h+1i0ETltdKqiBItJjCCmWon4WFU0auaa7B7+Kb69rfi8I72J/xIvdQsSoiKPk5EYAbM88TFH7nOnrD9NQGdgF5SgJ6eMBxzTOb+aF5cWR37cvvJwpaga4t97LZ3udw85NGL5U/g83O6uqKLIwAEq55wB4qP+sDfkYLQX43hHohU4l9n79KRO6Z1SrbjrgLxNzCburs0L9IJ7WQ0rWzOcDzzPM4enJjcSAW3Xm70XQ5H8hmgURC/zyXA1xX/zuTBXwfSCaBeAzoMHPBmlHo9/JyQKevF5cXGUAspq9Nz8OfS+nFtXNJ/8fXdPW70ufo+vQ9Wmh6HprPmATiiYKA9MLigwUgetbyS0i9IDQZE4ZgZDoOGZDgB1i7tgnIdBljzKjELh8YWoZPjBuKQ/sX8wPHFLCypR13r9kGrGgARAAkkkDoG8mXkUcQBVWqgIuPHYuqojQ8BGgOQvxp3XZgfaMW1ZSLfztuMlIxF3cuXA/s7OJdXnvoEFwwsAJ+ECAUAnEpceeCtcDODj2xfJbaHU1C6gOej+TIalwxZjDuXroeCAS+OHEg/rypGXXv1WHEhAE4a3g/3LFkC7CmATh0ML42YSCqpIPH1m/H22+vBiYNx2eHFgGhC1dJBFLgiW07sb05iy+MG4jnt+7EysVbgWQC53xoFI6uLcW2zhxun78e2NiMqgkDcemIavx89TZgQwPgAQPGD8Klg/vh3eYWzJq/ycxPD5vrgAoAIvdQrpa41g585NSJ+NMnjjb3VRBCQFz/ONDWqqWadkeo8MPLZ+LaY8YgQVKMIDLJwF0Anlu+BWf89i1gezOQpF0cM0cDHR1K7x7SKqSBHBc/O38aqitTcOGzMAaBwGm/no2XX10CjBmJX146kycilAJ3P72Qhfb2E8bhoslDzCv5CJWL9xo78betq4F4iPxhy8JO94kB7a247ojh+M7pE9AV+FBZH7d/dDqmvrkaV7y+Et89cjw+ddxQvNDQiZUpB+qrp0NJvUm+LibilISDc4dW4dqTJ3bzTM5ZWIc/vbcZP//oNDz4zjpc9m4dnrrmeJxzWI3ebwC+efI4DPzW47hm0mBcd9ahSDwxD7esqAfiEr87YzJOnVCLpuYOVC7ZBmQDniJ7/QM99MyExspzFdCeRcXkIXj4khk8V36gIHyBTNbTGkIYdZcL8YfPnoJvnDSRVXQuzKHLd+B5Cp1+CM8PkVMhTh9Xg1XXngyUkQYQegFoIh1VOM/5XNTXberKQAQKZ9/xN3z7L+/BcQT++5jRvGMvHVDGp0A2VJhWU6qvlUrio0/MReVtz+CwO15EQ1uAMFT4W0s7jOrSR4oSBWMr1Pduy3osYDv8EG25LIJAoS2jBbHRy8EPHKzO+Ljz6LH89fPun4Xyn7zMj3vzCYfgyy8sx9Sfv4hNDR3IBTmc/etZ+PADcyBiDjwVYHNTFzCiAuccNhgbd3ZCfO9J3DdrJWpLizBufC22tut3zWXNsVmUwIjqYn6/UjriKksAP1cwGnthRHSxADozwOAyrLnyQxCug5wM4YoQvhtCSmsvSqArh1OOPgQXTx8Iz8sioRT/Ph5TcGMC6ZhEzJGIQyHnKYwaUIrvnTwB6OzUdgGtIs1oIAtPENPGlhMTvOjPrKjDje9u5BcXIuQz/ejBZXAlkHAkDhtYBsQSemLq2tH09noszoWoKopjyeYmYO1OfYZGt48MI5Z4CCUlpBRIIoTnSDaB4nQv+Px3l8yeOFAUTyCAwl/WNqN1+SaIwIdLtsKOZsx7byvCMETcieOZ5duA9fVwpYIrHQgZYGBZCZ9A76xvBuavxdxNLaSjMLUyxQLs0EYgpegFQHkxhpelkJAKTtzB1JoilvHeOPvt0NPPVr4PlBVhxdUnoaI4gZwScEkFw+E/BaltOiKkNu6+c/woVvW08L6ZrCfnbsRJ98zCdU8uQEdXDp5w4EgJFYb48JQRQCoNKK/g1pEmofmmVfXIknYRzzn6iCgqAopdPia8QHsARwypQFfWR0NzJ8bWlAMlcW1TJCWQTuOPR4/ld/nt3LXaMKTFpNm33gyMZ0NbWMYhEbJw+VIgoSR8Ng5d1nJuqFjlZ3M+lm9r4Dl44ZLpbIc4338Sh983G0i6QJGEEMYtTMX4eHTYxgn5+inWNgEfoyhKYU02g/mbmrClIYM4GbGQSDBWIXDEgGI4CWDdxma+3Em1Fbt6KAdYGIwA0EI4eOmzx2FMbTkf7y6d+wggkTP2k9lBuQCoLsK0QQN4VwUsIgKzV+7Ahbc/j1ffXo2bHpiDbzyzgA0MpQLeTWPKk0AF2Q4R1e+Ye+eBmgCeG+qjgizh9g4E/BQhUJzC4QP74Z31O/G3NQ0oSblAFalI6MWuSuD0Q2vQFXj46aLNxgNwC95F6Jj7SIMNkA3jWD+NH4c2oqQJD0IEQmuLkYkEbnp1FZo7MzhlXA1euPIUYHMrsKVZfy3QNhI/f6jtIv4uJLogIMl2Eg6yQntRL767ETNuegqvvLUepakkX8KTPmvFUwdXQ4Uufre4ji939LCqAgYjI4bgARcAWpSSFGYMHcC2GGk36SgoOpdFjO/v+gYY8QVQXoR0SvJfhSJFL/Dc8s3aPihK8LXuWLsTKvSRox0VkLZ2gWS6YAdYFIzuIc1LhRKCpE0KzBxZjf86YhQcKGQ6A6AsjmRCYl5dE+ZubYQIBU6vrQSUdtfOnTQEpekE5qys1xZ1zPjcDALR/Yzm6cgBLZ2svYQTsmpXoTTP5CNLzyUcbfhCoJiee0sDKv73NS0Ekwbi1a+eDsQtGBTCUfo6NFd0zwS9BzktSqCVNg1CxBl7CPXxl6Hn6oIjQg2XkMZwBGYMquApfmzVdtY8k8jOSaf0d6LjAMqA0QDaNWr2fEgnRGNrFiu3tOi9YUCcQBpIViiMTCX53R2SFlKjUNiZyWn3il4m1GpWChdpJ4RyJBxS8w7tds8AOhF40b6QVPCVvuacL5yMH5w3BV4W+PCrKzB8YBUvyl/W1OOHa+qhhMCJQ0gDSD6Srp02gq/2i7c36gkT0uwcfbRYaPoT507ENz82k1U5GWqkvWIyhFISCi7iSj+HMKpW0bVItS/egoo7X0ZDWxeOHz8AN5w/FeB3dhBKB3rJAzY8u9yQn9UTEuWBRoNos8B3gFHVuO6imcC4QejK+axdGQOKx3D4kApsa+vEwiV1WLezDcP6lbDgd0NFYQG4AykAjDgJFLmK71V154t4aUW9eTh9BrELBK1Ok2HAR4KiFxd6p3SFRpLp86RZvRDrtrdhdX0r1mxvx+ptLVrTkNFDsxGigNixNnB4h8T4/JT4jyfmYep9sxC/+XE2nv5tdD8WjIvH1OLmCYMQCoWjBlXpawyqxAmjB6C1K4fHSRMRSENngzDHgLIqVOH20yfjpjMnMRCTM94oPYsvVQH+FnTwJEg3YIsf4IZLjsbS718I1Lfg5N/NQRhKXH7EMKAoycIWCt8An4IPEnZwhEBMafuCpiROApntwjdHD8CNZ43DtYfUYqcX8rJ2BgIoczG8vBhe4ODyE8fCdWOI0TPXlJErZs5+C5mrA4YOFmIBMYm4cnHeb+cA8+pQfeIkNpCsoCkLiZozSEQwdFpPR4QG/RPaItzUiJH/87hBskJ9K3Jp4sVA4JP6iABCNPE+ewaho+951+zlwNZWoLiEXb2pg0v5LL3yxLH6PkpgYm05n/VfPHQQZMzFvXOWA+sagOKERglzHuB7QDKmZd1xsLUzhxI3DnQF6PQkAqF4kYR5lhzZHp0BOv0s/7vTE5g0vAzjB5UxoLNw4Sb4XhalZIMkYnwPBzEtz672IEib0LFDYtRo0OaQjqBMDuvbc+TRYn3OR79Egm2kHD3ngGo+koaUx/DLS4/iS9Gcf2FIJX6xYL3ZJLKwYWwswW6kf3AU3EAR4Jh7X8HTs1cApeQFmMvKyMV3I2n0kGQxJ5DQkkB4QUkSqCrS0HF7VqOFZCCx9R9dfKtVbMBGIlQCPh0t5DGUpLQKT8UxoaYaTR0ZiB//FeLGp7ChqQ3lRSlgcAUumDQYvgohfIUjThyLiwk3SLiYOn0w7vv0icDASm0H+B4y7VmohMRZR4/EqcMq4SiBroyHuW1d/H7TRlVDHjsSJ4yt5ffraGhDY2MGCh7+bcIQnDhtNBJuDC2dHtBFdoWLMMxB0TP7+tiRoUJWOZBSoqlRQ9fHjBmIQ449FB+ZUAvXlVjU3A4HHivFljDAcf2KECgHtz6/ArGvPYzv/HUhC8eEAWVGU4bdI6158On9nQVaA5Bv3pzFwsbt2ohr62JMiBFfUmvdkFtt2XYbUmEnYd1Dy/HMJ47CkUOrkJYuWrMeXli1E594+h1gc4sWCCWMaqbv+QyjauxfB0bK4nHE7O950RRQU4zh1UVYsnEHsKSOtfuK7Z0YVlmES0bUYkj/IjhC4ssnjcNXTh7P8/PwDY/jyzPG4LLDh+Kzf12ghS/n4Z631+GuEf3w9KePYfnf2tiKF1ZsA1rbMX9dA44cUY3g6+fw7V+he22sxw/fTOLSqSPwy0un58M033rpPa1hYhJlsTQcmkPGOMhkkIgLhZrSOLB6Bx6asxofPXo0Vn71FH7NldtasXbxVgwcVYuYdFDjCJwwtgaODPHbFZuBNfX4fv8y3HD2ZJxySI1xn8NCTCYSK+p2FPwDQ+Cq36r8haQ5xzqy+MPnT8RHjxyZPxY9L0D8pqeANTsxaeowLL7mVN51fHRKgV+/vBJnHj4Yg8qLWBG4sBCsj4Y2D9W3PAtsbQNixlgiF8wx95PIR8mmThiMqmQMzy/boDUHCUxpEmeOrsFrrRl0rtkO+CEwqj/OrE7hr5tbMKmkGP1K4nBVwAZ2Srh4fvFGLP7qqVjVlMOFtz0DlBJm7wGewrAJQ3D2iDI0d4Z4cFEd0NjGuAA920mHD8KhlcVYtKMdryw0BiV5QENKcfn4GpSFCfx84zZg5XZ93DkCM8cPQmnCwfNLNwPtHjCwDGcMrcKzO1o0IOU4mDxxEI4ZXI6dLTk8vHg9QCjh8AqcU9sPf9m4HShJ46SKIry8rE5fo9jB6eMH8yZ6Y1m9Pjal0ZQiYgj2DHL9ncMIgIl30wVoUVqyuP/qE/GJGcORDSSSzu4FgFwfFgDj0gkZ6rOUgmFhgJhy0KU8JN0YXlmxDSf/6Gm2vsnd68b8CSPEEjogCYhIJfULM04AjT+QpCRN7IAscNIQhJyEuUI4lcAqDj65wJBqoL0daMzoa7EmUwDBvb7ZUQlHh3TtWZrNAJ5gXJ4jduTa0TGU8TRax7YE9PlP16RwLUUV6f7kLdBLkd1B16edkzBgVUaRgWGerVjHKMje8JS+Fzs/vo5E0qTSxmAvQxobxnJjoiQVVdACPUku9mf7EAoTDIrrs1mZODsbRQHfI6FUdxdkN0MEAUPH7Z1deGNNG0b3T2D4gDLWEEmCV5TCiYdUA8MrgY2tGvaVBbpAPiZP7lpK8bkKnybYAwJHY/rJuOEemM+mNEZB3gv/CYv0ETIT14gjGYSkcVwzwbx+dA9ZEBTmFUD76PRQKUIgTfyAFo41gLl/MtT3CI37QJ8hYaDwLn8/0D8n4UiYULUyn6VFJu8kND8PjXDEUfA+WJg9/Ry0gEUGymb+gX1F8/08xUxroe4Mrv23CwzAb9QLTRpNpvLhhq75jQJBQWIPkkRGoHQF6psyqPnZC8CmHUyceOTKE3DhEcMRGqxAOjFcMmwA/kih1WRC7xBpFiw0i087gH7OGiKnJ88xvAJLj6IwtSVyBDlzDe1Cgix3Vx87PIn0yJ7BHSgCSO/nm10sOvV9GPoN9dq5GufgnW6NVMY26Po5Y6vQYlpX1nAByJahDUTC6BthStijzhBaLI7CMRDzWXqveFBYuJyJ/PFzhXrhXSNo0i5woP9j3oGJonYZTeHGdmU87VMAohQrC50y8KMBDGkIl8qqmFAhFRasQk2Gkfg94e9r6oF+pUBjFz7z6jJcNHU4u1jKl/yuw8rTZlIibBvmH8iCVVOc0hPjBwUmUUdGu5b0LOm0XqCsYkQSQZc+MykwVJbWJI2MORL6VwFFAmjsBBo6dWyhKG6OusgikstTntKqOyeA4qQBdQyoRUJJnylJ68+3BVoISJWT0JHhQUdXdTlQmgI6c0B9qxaoVLHWQkQcoXeiRSbfnp6jvUt/jlDFuI4j8GJmfPPvBNAZAulAaxl6J994Zp3arQTNaWWl9kjq24wQG23I2nw3TKVdNcA+hgE2LCadi6gYaRZyfWO7pjx5OrLXmvHZRnDJrSMhUAqVLAAx/QKBNWWF3uVsObqYf9VJGFNbwaQP4Qgs39qM8T94hoXg5Jkj8eTlx+JX767DF19Zis6vnol1rVlM/J/HgP6laP3a6fjvZxbgtqcW4bEvnYYLpgzhXdfUlsMZv5/Fc0a2S1eHhywClCeT2LSzFZMfeBPrP38inl2yCbe8sRZvf/EUdGY85IIQ5UkXG5o6cdj9s7H58ydh8bYWHP29JzFy4jAs+swJuPnF93DDH9/ENRfNxI2nTUQxLWyocM+c5fjcvbPx8wsPxWePHoEL/vAunn11Eb5/+fH4xvFj4CbiDPf+5JVluO7+2fjcBYfiJ2dNxFPLtuNjP30W508djQcvm4HBd72AL40fjGtOGo+EEyIV17Q08d9PYXJNCV765NGoKiPQSuIvCzfhvHtf07vSpePToIh7UQhyX2u/6wgZFqYFVRHrM+sbuFIE+Xg74foE6/jQaGEi1oOZa7UPCYPUqrKoKIl0ysFD89bj3tkr8OC8dRrHpxi563AMojghGQBKFbmYUFsCDB3AEHNJMoZ2T2HikSNx/pQheGfdTnzt6QUoTiXx0EVHYmnGw92vLUeTl0V5OomXV27GXW+sRJNUKE1KVBYn8U5TB+6cvRw7sj7Ki2OYtaYe976+Aq3KRXFRDEVMcQv4WYpSMR07GFqFn10wmYODP3h+GVY3tuHKY8cDowagUygk00mG2TF+MK47dRJaswF++PxSRi7/67RDgfG1bGuk00mcNbEfUJZAiwgQL5JIuxLFMQdlqRjeWtuEu15djntmr+Z5fvaymSgtS+KbzyzBnFXbce7kITjriBFai5BxwZ7d3inl+ycAwiKB+h+dQmsE+o/3MIVOHVlgBLEgUCyAwq2yYD8EgbH8jJFjuX9ukLdaKXRMSNplD7+JK//3b7jhsXlaUckAnWxTSX2EhObcDkJ8m9g2oRbIrPBxUlUxPBXipheX45Z730BdQxNG9itG2NSJq37xIpbXNXFM/j+eW4qbfj2HsYZASu3Lb2jCf9z1MubVbWck79MvrcSNv5rNxwBdPyQ7Ag5aWX8pZHJZjBxaDQ8Cjy+vx7du/ytunbUcyg9wdHUpMirgmGmHF+Ki4f0RBgp3vLkO/3X787j7zbU8BRcOq0JXLmDYvSQex5gJg9GUC3leU6Hg044Caze+ugpX3/U3fO6e2Xwc1pSlsWJzK27+31fxg1nL2PYZM7DIUO9CE2539ray+ycABTq7hoL9MMyb8Gp350vECNFf2cMZlLc/YgZF0wvBBBByA2PGcoY2yljGRKChBKJXOZJJHR+ZNAQp4hwS/h7GUN/pIy6ATx8xFKiM46qn3sM1JEg5fWZKNwElFErScY02igCS+A8MiTtAcRopx2WlNJi2NWEIvMQOPHMUuiQeQrCQDHQdNpSJyYO0RvSEK6AcgWQY8ueSQsINiFgTooWEKJlgxJBsLIcEyxFsS1F85drJQ5CiIBuhjDTfHCB1tS1B3AcCmDIBOrJdGEWI67RheGbFTnzryeW4bcEW7YWEwtDm9+4R/J1HgAn2GHaQMLFvAoJEYKNuBTdEGV/PCoCSEnn/LzTsWhir19EWuGN4exUVJQCpdyfvKzLRgheBL6fd1C7fx6iBpfjEiEp+19K4xMPvbWCKwDlTh+IXVxyH515bip8/Ppe4ZHwd2sWxUMIJDXXcRA61ke/xtYnOQQuXZTfRM54GnVT6+WMc+qUAn0QbG6s+wwfkYt47bwPEbS/jjfe2IE2CyTojRM5x+fnT0G63a+7hhtrPF8RSCjycckgtxlcn+f3SzFjSnsKY0hgwoFxvivoOPLp4O1Jko1x1AkWb8IMHZwNrtwFusbYDwmCfSOF+CUC3S0iJjYGeSFLvDh0DoY8kEzCCPCEUeukhhURMSFaXXdmgYJFKGckxME66ciF9TRTd8ZWToW68WHsVBLQ4Ah1Cx+yF4c6TQTx7WT0SSuDThw3i+5YReLOpEZc89Dov0NXHj8PPrzzBaBJNf5eGcxDA+s8OM5444skJIJLZPCS4OSnyEbgwbwyHKGKcIOR314pMwmG0TgENLcCCDUBDK8qkDuJkhIRH1xQUFvI4NJ6LZP4wbUIEeG1ZA0ZWp3HeqBo9TYZQQit1+0dnQP3oIkw/tIbd0k89/CaW1jViYHUpGr5+BjCpVu94adhQbGzvfW33WwPoc9ywaVqaGeThn4eCVdXI6lKNdJFyyIWoTSc51u7RjjKL3khEDMsZiEY08nStEMrVBuY9L6/C159ZpAkcDOQopEmMBDHZNWxMwZSXN+7E/M3NmDZRB288Un0xgSeeWYIzfvUa3+4Lxx2Cb583VecUSBObz7++ja1LfQSEGtBxoRc+HhZo7GzTBBq+bpfa0JVI8s4nbecI7QGgvARyQi1QUYR2A+IoEbDQCIsvBAm+nmLBCnjNJBw8uKQOnV0ezpw0nB8rKxWyRkqenFuHbzy5CO9sIY8rDmxrw8SbnsSy9U2oLElj3ZUnajc6MIAV5N9zBAhjOGhpd0KxGzzJ0+fQzgw2NbRB0NlljI1PThsOTBoFtOeAfsV48IwJ5kF0sgj97yUKCEmThKEsuhWxUulMZGhC4Opn5+LHD74JtGX1UcGAiqaUS8OiEIhhbWcnHl+2Ga6hXHcSLjCiP75w2VQ8t6weH/79LGb+XnfSGGBAJYekCaKm64T8DIVUMiWtZyKN5xKiU9gjS2sMR2iySZGxiR2TEELIqcOQcYh/nz4CwdfOwrGTBqIhp98vRcivtY+F8ZbM3BC3gZxmEo4XtjTjbxt3Ip40PMxQ5kk5d7y9Fj/6/RvAhu1AeRKfPvcITJ0wBIf9/Gks3NyIYf1L8aWjxwOZTCTjaX+OgGhSpgwMYOWbNRH5CdCpTDGgM4tHKIhSEB1UlSTgfe0UzP/O2Wi4/nx8aMwgzbpl9FagobULC9Zv08gXI2MWKo3EuKWDQHnadiBGLxEulMkcipEx5Bdex2xc2qk/XLSZLW36XUuXxDemjMDt507DERNr8OSLS7C+uR0pgl3JsKSzn7iHtN+Y4uZqD8KynwwhhWwA+lk5awVP2yehxp/oGKlXWvAD4aAE+j3I0yN0MufrVDfS3HEj341CISX1vTK+5h3mQo/tKJePQ310bvAyeIyikOw90PEZMmZFty1KGModXbMohvsumYpHLpkJbO7Eza+sQBgEmNi/SJ8nfMy4ewWBCgIgzGIEhufmSPhKM1lCZJkB4ysDiRK06sbwjWffQ0NHF9O/c77k/AE6HSYO7ces4iDwGfjSr+HjphcXAzs6gVgygr+LyHEQsPvi8fwGGvmjII1rwsfkDlFU3rh79BXiDSTicWDNNtS3evwMtJcamWOpMJZAk0SceYU66MRXpzeCE9ICUAoWGYEeAj9EwFQyfXaSBqCf5fgQTTBWQYBWf4oJpFOYVlHKzyVUB95sybFNMbjc4ZS18dUpnqqOTMjuaOiFSAmB7RRokgKTCBArLsXwyjK+V1tOH3u+n+Mw+q8Wb0M2dNhlzIUCkiFshSRpQkYgXZ4/esccSV3KRUUiBukIdHkmHkGAm7/vmIARACOm0uzEgAQsziyfuJNgbZJMmJw72rkUwGjqwsC7X0N9o4e4K7SRLHVaGKkyIj0QLzPmuPjxy6tw63PLtPRyDCAsQMLMCRD55NKaeIL98c5vno2uWy7G4mvOMMEToL90OH6eSukEUvp7LU1GYwdeX1kPVwgGg+5ds4Xv/5uPT8eGWz6GYVWlWLylEdjRAbhxVKRjzOEroXPU03EC4ixWprXFTruzMu7AccnVTOjAztbtWFnXgGH9itBw60fx6Mdn8Efv2tABrK3H5pYunDB6EHbc/il844SJ8L0A89bVo6YkARkDBiWTeHHxJo6qfvro0dj884twxVGj0OmF+MviNRhKFr4bx3BCEjfsRF1DC+dHpKRASSIJ4Sr8/rKj0HHbp9B184X82bfW1mNsbQk23HIhbvvoND6Sf790q4H0Q63N9xEXcDD9guv1MRAhGoYhhg8oZUlaVd+MDTvbsXZrO363eK3GnOlclC6C7U24de5qKC9AOu6gyHHhhSEyXgYbmj08v2QzTv7TW3jihaU6tL0M+9AAACAASURBVJrPlhWFQBCnoxXoZv2qSrGpKYtlTQ1Y3pLBvK2NeGHJZn6mJcUpjEsl8OTqBize2IQxVWncurIerRub8HAQYFSRi+dWNWD9vLVY3pbFwJI0nMDDc8t24LSH3mCaOT17SUUpdnZ5+OmSTUBzG5COY0xpCV5cvw2vU4oWYQRVaTR1Brj9vY06dh8q3LlsO4YVxZB24lixvQlffOo9rKQcxcDHT5Zvw6TiBBKOwqKtzTjlkXfRsnoHKgaUMfnzxyt2QK3diVs2bsPh6RTiIoa3NmzB8X94B5n1DeiqKkWZE8PdSzcB21qxxZGM59yxcCNbN0QXX7yzGRtaOrCuIYs/zF2HXy3ajEOK06hIuFhT34L//MsivPDuGh3ttOFtsXc7X1cIUYY965skDVoM3+xQ+mFgYuAcn3e0pW/gXgQUDBE6zl8U0xEpUvFEBevM6nMoYUiflgQqpYlqJQEno69v1TRlzBotxCxiunHSBGfoO6Ti6Gig87SzS6tDygTOmWido2MKHNens5DPV6JuxfRzhCYrmDQR2QWWBJMzkcSYyXCmw57cOpudTOehZ9K1YyabmuaA4/1SX5M+75qoJky4N6uPNg5wkSah5FplvmOjlgQ2URCLAlGkXen9CMgg+4TCJ57JjLYAHEVqKbDlG1+fzl6C04lxTdR7w97WWn3vwSBTIsamh5vMmcBEkfLxmrDg3yvzd2lVuFk8hQh/3SyyMDvdZuciKGTniNDEAIyB6RhyhQObMWJe2LiNtg4ACQATNikbKGGiicaalybkGxq7QVpBNTaHtHC1q58pn3tvWElRo9QpHId5roDBAJje7Xgab1dGEJzCiarf14aJDfPJ78HkCQ35xj4bTITSwtzCuNyBXwh3M2ciZtYoZ66tus8PWVGBKLxrNLt4N8O166V3SmD9FLMjTVJlPolDFYTAsnqirBQy2ELj51oyqWeQNlsvIAgLkyBNYgjdxzekCN/EBqxwwC1EtITCmCmD8clRNTh9bD/MeHoBMLceSLvmfjmdfUxEEmW9lkAbt47Bxo0LqPMEI+QK6wHYmjx27qzWs2hgPlbvmB1stKdy87KfL44RmmtZryc0gkQMaAeFHAp97uYvp+ff14JmnzdPADGa0HgU2oC3bCi/ewUViH1iAQbTjaiL6AgjiRv5i0RIovZmeV6aRQFVwZ5wZOF7KsJnzxsnluVq4v/0Uu2BVsUwBJCkKZSQ8XHTkYdgfG0xVtS1m/i3Z+oUmFIsMbOLGCf2NPBELiVHyGDwXjOhSfM5GPXuGaEnLJ3tlBzQZXIYCOkMyIZIAHHDoMrTGCKTbFBB/aco/IkoKaQ7/NLjL3bieuAk0TwAc5w65tl7XkNG/713T2D/+AC9PYQho5CLWZLGj846DKeNo0QPH7+ZvwG/emWpPqNrytHZlUWLl0SHA8wcVIE36xqAodV44twpeHdLM254/G1thyQcPHLFMRx6/cyT83HfpTNRVeRyUIUylv+8ajMenLVGT1YGwMRaPH7CRHRmM7j0T+9qwkVWAmNr8Oip4zFqYAU21bXg3FffA1ZsMalhbu8k7X+Ao28IAO82DUA98rGZuGj6IOxsDjGhOobjRvXHssZOvPH2Wqy5+nSMHFiMxrZOHDm8Py6dNhSyuYvX4Lwpg9GvPI0bHjPnoZvARTNGItPp4TNPL8RF00agjHY25ZrFYzh/+jCMKE3jxifm8jn7/clD8eHDdZGJS+esAhbWcT5B61WnoKQ4hg07OzB56lA0ju2HyhueAFoyhTwHsfeQa18e/wAhpBeGMqG4kjhOGluLho4s+n3nD/jQfa9w8OQ8SgsbUYGRA5NYsKEBVV95BF9+9G0++n40fTSHkjOQaKb6OrYegPLQns2hmcGXEC3ZAD4xaW78K8pufQHS8/HZo0YCyRQbVtOqKzQQFACfqKlkSHfM8CqUlDj4/VtrMPzaB/DnBZtQUZxCdU2FruVj8w4P4tE3BIBhZ239hoFA2kmyS/bGtlas29aOtS1dGFuU5tIv21q7gJYOPLWtg7H7qpS2kMkfiHG+vZdn2cbZDnP4zI2RjUEuop9D69ptaAsDlBPoEtfU8HGUeia15zB1aBU/Tn+GiCWqyA3N+XhjXT1WbW7CTqKIM4P3/SVl9IXRNwSAmbWSE1Lmb96KVNLBS58/BWjuwKjvPY57n16ACkLDKEhFaxyXiMekDtkom7tuhi1XR9wB19FRPY64xfV5JzVWIQLJTgtniFYXYVBpAks3NsMjJs/AUvYsZtc1MuPnzMmD8J+fPBI/fmoRxtz0NLCpyeAFxng9iEcf0QDIR+FOe2w+mjqzOGlMDd744qkaiPEdlBlDW0cCiRtAodUYPGh2b8EQtq5dqItTmLCokkZIjM9OmbeO0i7m4H7lcKWLRxduxIbGNkwYWM3lWrC5Gdc+sZg1zI/Om4r/PH8yC6nGN0SkyMTBO/qIBtCkT3b3Vu1E5R0vcImZmWP649X/OIHdsR0UVpImECQUigJpIAsNjiiY0Kcy9QINecMzjAjH2gaOJqES/45d7CDAOUPK+au/37gdqxu6UEzuITGSYi7ueXIuvvjoXBawH583FVefNUm7lLbC2UHuBfQRAYhU0BxZwWnhxXe/gsb2DD40ZiDOO3EiVlNmcGjYMVSQIg+66cCHMIip9p81aKJIzetPMX+Il8rkInJdA1+nwx0/uBo+fKxesQMLNzRyBPOYAUXaBx9di1+8sAzXPj6PNcpt50/jjGRO65KiO59hf0bP4IwySCUisZg9IXe9UCyqjwiAAWBcBw1fPQdrr/swMH8TvvT0XLbKzxzVH7XEFZAhl4CjiSgNPIShzxlXnKVF9BBC6XjFk7rSlxAMrzPZlITHAk5mzbroWChyMbGmjAklz1x1LC6aOpB5ATP7l6FqdC2C75yDr194BH72wFt4Y90OxGIOzh4xQCOcNh3t73rVHhpDmDhJVI7yRI7dFIvuOd6nUPQNAaBdrExalAyZEUsa4cm6VrbpEiLA1lCxGncouNTuYajjwhcSHZTNQxR0FaKT6gW1UfnWVjYCA8fjjGF9OnA1IKAj0LCwm+BjBuliDKtKI5MLcHhNNUriSSZrTh5YgeEJzU4qkxzcx/KGTgSBBz/lFmor7tcRsJdFEiYBVkYSZEWBqwgpesC7PcYBqQ/wzx5cHUSnSu1sz+GQmlL8z2UzMW14Bb/7xlYPrZRC7fk4fmw/3Pj5E/HhibWgQm+vbmg0VDFgem0F7r36FJ7Lz7y2FH5OwBXaw7B5DA9cPBPDq9OcyPs6pZrHJcrSMTw0byMuvfWvnLyhrjsH04ZVYvFrGlu/4vDBaP7343DumIGc4/gcFaFyY4VA1v4sQs8UbrvQ+XpGJkfQpnTleWomgNZL9YL7iAaQegf4Ap985B00NOfwnbMOw5kThmDO6h24/tXlQGsXLv/jXLR2ZXHdGRMwYXAl/rxwEx6btQJIC/iBQP+iND5z7Ah86rjhqC5KotPzOW2PtAkFzyha+vGZw3D0yGrMWbkZH3/obZw3tJKh4TfW79ST29iEupY2DK0oQq6pHTc8sxg1FSncfME0VBTFcePzi4HV27lqia5qsh+Lb72caPXx6O9sIMoGeGzk0eZNHuDScN0fLdox5J81bCoBZcJSwiMleVaX6QocW5s0X4Bi8vS7qrQuoZrtYjeNo2wE8ZYmDa3NvANh+cUxvbOaPF2jkINsJgbf1KGjn2VlAKWaEfk0Z6jUJabSeFO7DjINrtQL3tEJbGljhli+ZJ60kdN97EzLgwjDQtBNRQNINvU8EpgTPcrz90Kx6L4hAKEJJweG7OH5hV4ANsuFLGXXEjVyGtCJmbi+Mpm+hsiaD+OGRkVzJC+nQ7Z2IaTJq6d70TXibiFcGxquAxFgKZzMdZINwBS3XIWgcPyL/VDNPUvV57uLmOik0NR3JqX4ln3qmaITsrt9cABHH7IBHL1QtANIE3ByozRnZFjIKKYJcg13zyajOrYmYNxY+TIPB2u4TxkyquEmhMZ6JyDHtTF344bRglOqGjFzYELLVKEjH8K1TCmLTO1HIeewQD3XpUE9zQCidHC+b0y/Iz0v1WuuTGHM+CpMLi3HI6s36rL3lmADdBeg9zn6hgBYNC2w6s6QIPzIrgls2Di6C0wmEqt908lDX7Bw7fxOi1Qn5f8z2iJS90CrXCfC0incpvADe++w8Ec+x8USXXr0TDLZQex9dGRwxjFjMaVfCX5I6Wo295EEqTOHS06YgNvOnYwBdGRBYv7dnVhNR11JkWnlgx6ex/56IrsffYQPsCfgI0Kh2ttn/tkjXzMx2hPIVECxpXeEKTSRTOH2sydjdE0ZquIuvvbIG5xQSh7QhBkj8dDlR2uCFGURhWRvtprMqD0ATkq9rznoI+HgvQhxPtl0T//1hRGhxuWT/ezUhpq355pCV8MqMKp/CTJ+gP88/VAMOnyErigSc3DPKRP4xOvgsjYKK7c3AXUtmlyK/fQ4/s7RR5DAvezkXqyVf0CHPaPzysAwiClsnDEFNIXC9JIUh5gpkpkVOXxvyjBNRasqxpRBlWySFMVjcP0Apz063+T6y8IcCezqRr6P0UeOgMjfVaSBpNpf16cPaAJrQ0QBQjr7qd7P0ArttSzfiHd2tHMcgtLMnTCmOQw5aqRRxtGK+uZ2vL2hBZ948T20Lt1oKqz3CDkfwE3RN+ksQRBxl3p04+xZDw+72QUfuNaIGGKRpGdtVHp49WNH4uhh/THkrhdR/8563PLqElx74iS2FR+myqAVZZxJXH79k9qLofKyZDQyW8myinsHEOojfACxq59sS8E5kb9LUwrNMQQSqQoYenTRexE52+1Qtg9hWDBYbeu4odU4ZmQ13ITEiiuPYRvg6/fPwYNvrkZ9Szuefn01nv/iifjuIbWcYob6jKmWYvCNfO5FD8E+QK/YR0ihUbVvEzlNrz0VadFqE0xoPigDh8Abx4k0Y+wJsJjR2xohUjldw7me9gA8HyfUVnEAi5hFpekifGvmONz4yOu44ndv8jv/6LKZ6MqF+N4Ds4Bjx+Jnk2sRKIkfL6nDViKmklHQs3dgGPE2/k/YAEChZyEtNsG1gypw38kTUJlMwqMJDR00Kg8bGjvw7tY2vLhlB7C1A2gzxRK4rCuMK4ZCORv+u00IQcFQI2TQcQopa3sb3TKioiCMXQQVyZuIpmU5mNWR0wVHpcMVU0b1S2sEs70L//WR6Th51ABM/cFf8N0rPoTrqaaCCS9T4esnF9Thw/e9rp81quXeZ4Ho6Og7AsBULjPRBMFua8XP5m3ArM8cg7J0yrRwCfKZr5Syvqq+BY+/V4dvUpPIlTs0YJOMVNC0IEy0Sa+0qW+U3CELhSr2NqxPL2xmk+EVCEQQQpNpZOr56ISUGIKVm7FgUwOmDKtAGAos3d4GNGdw/WeOx8WHD8SE658GRlbh+jMONfNgkqMg0U5uY5Ap0M7/z8YConXwpen2TULQ3AmMrMb2r56pGbwkBEQMEQESJl9OmWYtLy3fii+/sAyLF63T14uZpA3iGnCOnm3HLiO1CWy/3n09X9hjoQ0dzDS60vWKbSFNROoJ+zqXcUAl6r5yBgZVJCC+9DAumToUPzx7EkZc/5hmFlGwa3QtHjlrEqbUFHFR0x++thyPz1qik2vdHqSTAygEfUMAEBGCUBWQL8Lxm7O4+NSx+MMnj+OCEK7JM2RCLxzIQNcVcqGJoU8v2Ihz/jwPWN9kooFWsGQhwGRTtnahYu3x4QqpayKSem2HiiSHZkxjKGR1nX96FyqbM6wKU/qnsKAtwNZ/Px613/0zQEktw6u1UBHTmDKyiYtIxiP14EnHjOD2IIscyGnvGwIQ6ooWIiyoWIhCJm8YYNG3z8Whg0rhk/9M1XM4QBhAs/50gUkO4DmCU8q+8tRc/JLqEjima7cyXbtCWQjh2lrE+5xTUfi+jc9bgeJ0eQW0ZnSS6pB+OGNQObeGWb58i06Rp3qEXToMvfH7F2Do79/kmMBfL5qO40dUcqmaOWsbcdIf3+TiEChxtVYJC2GR3jJk+w4fwKZgc9Qv0qGcAigtPq44exJ+fcmR3JLWdQrVy/OmF7cr8pgYQh4Crckj76zHxffP1rX+aRGYPmaFwajxsEdbnN0Na3l3s8RDHRrmDuTA1BnDcecp4zFjdHXekFtZ34qxv5kNrN4KeDH89PIpcGJxXHPPq9j0k8swuH8Jl3mh0rsE9nb6ORTd/Fdgo2l7Fy3V3wuRQPQZHCBv1YpCZq+ts0/RuaSD3yzegEwmx/MSQBWicdTXwDSn9EWM+/RQ5a5s4OH8GcOx+OunA9R+jSqOO7FC7n0+xhDufULt52Q0C9c0pKCW8okEfvv54/DOVSdgxiH9kBWS+yj7gY8xA0rRfM3JwLD+XCbstLFDcc2zSxnbH/KLFzFndT23jo0LDX7NWb2TM9xtYotuv7cbFvEBHH3LBrDumsUD8l0vFGPpL3/1bBw/vsaUJFaaLsC1N4WZF5sQIlgQfD/k2j91DR0Y+vMXgI2NuvIYaQIWfbl3vCBfOc3YJlwH0Ne2SZsHjKzE8n8/AWNrS1nzUHFsRypWYFT9i2opxh0XdY3t+OVbazGstAj/9stXdVezrgy31D9q/EAcUprC/dsaqZmQ9nISphUbVSLx1QF1+3qOvhMMstU5rB/frS+ey8fCoys361JtbPBpto9jtqXIF7DW3bq4kYXUFceGVKWw+drTgCEVuka/Ey0Q6SJfFKNnwNFeWJlcfWUYSy1dmDxtGFq+dhbG1pYjGwquHUyLT8kr1ImMqo5S9hFVVxtQnsJ3z5yE5U2dzG3kRY2nWBu9MXc97n9pMbC8XtcdiMtCH6WgdxcffUoA9jaULsF6B+8QqusQ5lPAourLlrC3tYlJIEgYcoGP2vI06kgIxvTX1HGTCApbydSCSLacMSIaiI+jhLZTWjtx4cmHYv7VH0JJKs4ZxXGWEduCUZfFJQ0Q+gT+uDrpNFT44TmH4tarTjS1igy4k5aa7JGM25eAefgDft7vbhwcAgDdHwBbWrG9NaOPyN2Y7pb63fO/mIxDeT53NOv68qk44bhRuogV8QFjppyNLV0fRsg/FuXjrOIMl6295vwj8OinjuICmiqIwPTcR4EupQzvM2STg9rRr9vWgp3tGTy7uI7rL44ZXZvPhmaD0Q8KLmrPuMY+qny933FwJLcLDauiLYN3NjXgzLLBCIIQwjHlVPcgx/kq5QQguQ7XB0jGE3j5syfg7nEDcfWfFwHbmzXx0rU1jmwpG9tP2nQS61+GBy+egY9PG8rJIaTiHUMhU1LXFHKo3TwCJBwHrbkQv561FNcu2Ai8txn3XX4M7lm+FW8/vwyoSWnOo8gajyf/wN1fIM8e7r2pPTgEQNlOYhm8takRZ00axAsfKskFXffIFhPWPlBcAJ78baq/r4IQVx07Bh8/dDB+OHslbp6zFtjRDO6EAVNLiHAJqjfUvxzfnH4IvnTyaNSUxNnYc2SM6/ty63ymfWnImTQCFc2cu24rpv3mDWBdk+5u5vnY5oeYPqgCb5cmNC7BVUvdSGvdPbx3L4+DpLxFmKd6P7NuB/5HKEYEfWsL7GMEVB84H7DzICitzPdRXpbGTWdPwfdOPQxvb9yOeRsasaI9wxcbU5TAYUPLMXNIf25hw9okEDqpVAjdxkA6eS1DVdFdR2LJllZM+8krOi+hzFC5ssA7dU04b3R/HSPgTmUGLraV2WTUNY2MAxDx29s4SDSA2Q20uzY3oa0rRHHSyUdhrSm4p9Z2VMVbmZJegsvNCy5HG5jaAomYxHGjanDc6Jrdfp86gVDBa5fZ54WSecoU0hahA0foOgSn/OEt7WmQq2dKzxMt7IktO/GVI4dyTiKjkYGhgdso6J60QC9Hsg8OIzA0+QEU8q1vw+LNTdrsCkNDHN5zX0M9pKkKL3TwyJSvp4RSx9XdykOli0XTYtN/pCHo+lwMlDKPlch3TvNhFo+qEghTEFsCs1duQ/2yzQZrMEZdGNdVVOuaUEl5AIf00+XcbYzf9ljaU0yil43Avi8AQhQysMkt8308sLgukmcRmOQalU/QsKx/H1F/vkCoZFfRVKpUpj+CdRnJpYtzTMExgqK4vxD/zwBUdPxY1U/cvpzQ1Ul/uXCzaRzpRYicoXY1cxJXvrzcVGR1I3UFnB48hh5jT5rhAI2DBAeQheSQpIs7565FNpdltSuUg1AETLbQZVs0CufCh6t27Zm3J1fx7/mv54gT4VMKPLRhm7Hcne7dvglISgNvzFmuo5SuBrYKkPQ/bxwkAmDq8QiT51fXiocXboKujOvxLuQuP+yAa02hmDgiuapHbw9CIykTOdeaNTmONmvICqAp5pxO6fCwBZtIM+yjr19vj4NDALiggyz0/Y0FuPzZZZzvLU0bGZhz2DaTsPGkvdsG73/Yo6CDcvqypiq45Q3kS+9G0tOsQCoDcf+Tl+Ag0QAmZ498bgJmqMX6mh248ZUV2ojzHagIbGrD/JDYc8/CA/l41F3MC3Wp+zxLOfLweTmQOj8gH+sQ//RagwePANjEUPvERQ6+/ef5WLi2CdIhyz2khnIM+jAOH9qWbs4uMYIDPRgXoIWNO7vmMNhEU8tAIgCIH8OEu/fFRejlcZDEAkxIVoYFMgZpTz/AlHtfwdqGNiSljqL5JjuX2tdIo4KjBt6BGj2vGXedSDq7DWPLQp8FYXa7jBUSXtA9kfmfMQ4OATBNo7r1G/RMR44dTRh1y7N4ffU2ZgoRm1b51GxJmVZvvbP7o3EGdju5AAUiKeL2SLILbYNN+yCgfMCjj9QI6gl/9pyg3VjytqII5dc3d+DYnzyPrz45H+3cpkYiLnWUz4n4ge9LCFTBwLQLHUZIxa1EDaMsX8pRQKRSST5bOPJfdPyTc18LTaP+maNnEwkhC7vJPKb5hfkjLCRg+Ka9nADeWFSHm+ZtQHNHlmnjkiN2Sqtne4V/4BhQBrHT3dKpV6DUXUQNa5Pkd3V9E345a5X2VnobwD+Ao++Ui+8GihhQh3oI0LlPLWAQyQMMTVtU24Y+NNy+0mJgRyt+9uAbOPmeV3DHy8uxZUf7+348YRhIynRF4Qo2VIeQU1UCRnXnbW3VRa2k5TXK3WuuPjb6SG5gpC6epWYFYb5jtz77/UhDJ1vCxbZqETp829rKzaZv/vgx+NyMYSgtTe1ftc19DWFL2Vk0WccA3FDo9rMQeGxNQ/fcfRX+/VVE/wmj79QHsBm2YVjI+rWsGUsZt+leoT0ijKVNKGEmhxOPGYffXHAEhlanWVhs1TjHqP73YwNoYz40bB9iHnvMSgqcGFo6c3hpWZ02Sm3OQLQ7WR8efSQcbCwk26lLZ3ho5E9aHn/ENiAhcHU3UQ699ivB/Z85Ap+cPkZvQC7kpdvBuweEVxEa/SQZZ9CIXgxZFSKhAvxx/npgewtQlDYhYNVdG/Th0UeqhAUFdW/hU1p8yhK2nDzYCl6BPmupqWIswGlHjcN9Fx2BIVVFyAQhc/BCR3B8QBmS5vt1/5l5JCLV3oTDvCG293MCVz23EIiZnAMbBLK5hLL3iZ3vZ/SRI8BYzo6p5FmU0rRp+pMqglKDJoqvx0yXzep+uHpkFT49dRSOGFnNqpmYv0nhcOd/bStS1+1ozP0fjwtIU6yBOoXHQh+BikGEISunbz+3ANjYAZRI0/swmsql3r/90cujjxSKNK6z7SBKdXWocFKJi9tOmIgLpw5B4AluLd8vFUcpF1oKTSXVEJ6QuoCnCjkqCN75Js7PkcFINda8+aA5AD2H6uG+M67DWiSEy8ZfDIEfcNn4597bhJueWgAUO6ZSKYx34kfi+86+NYDNA7ANIxUiWcy9kxZuRx/JDAry/fN5WCSNu4ABFZMG4eULZmLy0HJ2yCjj2pN0/iqEjkTMZolZyJXSxfLFliN5hzyXkd/xKPwutEiziSfQ58iWIM4BHwG0+wPFHdHfXd+E6bc9rUu/EZs4sAUhjfEnTDnZfXTu5GHJIXzGuJGzRkXa9vaOAPQRHMDg4wgLNXxJ6qkpdDyFpkVbcfj3n8AVD72JhtYuuK5efCq/FyPODhl8JjOIdzaDM1LjcaIHbZyCQ+xRaPWs8v1+NZefyCWOSS0LuQ8B6ZSAK40L6ULGJB5euB7Tb31Kp3C7TiTjODRGq+EkSbnnGY7WQrINI2Qs0jvAGr2960r2oezgiLqLVgbjHRDTRR4oo2dgBe6/YBo+OX24/hixsdyQKgVAqdDQuPSuyZePEGFhoY0WoA6ilkwamsaVtNjUlkaZzCAGGsOAa/wI4aOtS+K/np6PO+jcd0wHc2Wqlrih5gOQ8RqP6Rx/xy3U89nr+xuOIX0nbqqa55tcGaH4P58ejp6Gk7K0mUi9AOMd5HwMP3wIHjnvcEwb3o/ROBHoRab/HFng+UWPTxU1CE0YjjSFMJ/NZ4CrADkRMNXLUQp+EOJ372zAp59ZBGzcAZQkTBKr7XxuOqFXpPHABVMxtH8SkhpgkHEqQ8T2AQipUMPMzy3dhBv+sqigPcJImnwvCUAf8QJMjpWdUGGKI3AFbVua3Xb90m3j1y/YiOkrtuLsI8bgxtMOwcQh1XAjlZs9k2olTaU11xhoGpcpFHIShvYdFwFz/pWM8RGSgsD6xgwem78eX319NbB2u/ZASop1S3dpvu2aMzrXhYcvOB4fnTG8QAlgUNMjTvE+JkAL7zHDy7FoRxueeGUFUBSL8Ap7b4/2ERzALex6W72De+mbTFn6vWOMJFsqLpXkBMunZy/B02+vgjNuEH502ECcPKYfJg6oYivdKg2t0RXvegFN1eJLCQWH0sUcfR8vUFizvRmzV9Xjl0u24s0VW4G2Tn0Wl5qqHSrXvQhVntHjoH95khfc4zwCCTfQXUDUXhaQw8nkqeQU3JjEcGqWQVFOyxjqZQyhjxSJivhnPC/qKgAACg5JREFUeUGQ3cuv2rr8wpZ2sfX9jVBkAp3gSZ09+pdg6sAKnFxbjjFVxRhblcJRYwZBhTmsqm/ngiG1JS6qqkqxZksT7nprNeZtz2D2liZgR4uuT0gSRzueg1JO9wW3Vr1dHHZdPQybMARvfepIlFYUI8Ep4gGDV3IvXgAJAIHK9PnZ6xtw3N0vaXTTHhtWvg5+G8AexKY5hEJhVwtZCAhZIMVCbzKSMBGqXfnzhgHEixCaWAKjiJ7RHlSIuQy5H12Axo4sar73JLCjA5edMQm/+8SR+MGLK/DtO18AKov1wpIBZ0vW2QBUN1hXmiNEFKp52uOJWs5QEkjSHmEyUkU0b4h0/3t+hEBnoBsbUTVULpbhmrzD3osnfEBHgN2x5uxlNmxQqH5ldgr/aSc8NM2ebXxAiMK5Gx1WQAJV4NmR+o87hXKtCakzwOl1aTc7pHa1u+bS50jtppOmIYO5jl1A+9wyUq3U/p0EzrG1/E2nk9IEfnrKRK4MwmAUlyHY/QJaplJCOljS0I7bnluqq4uTayMMD1J4vbpMH5AAmAgNu2QpUxwh1Gc7YOrsRSpwiZiO8FkgxDZTipIt856DBVt6ehM6ZZsFy+w0B4WSsh50uFnZsu4qomH0RQochNAUsI42e7KayzPdPug5uzxcd9QoXHvi+Aik6O/HNBOhVeK2pZsBCivHbbewUJel+Xu7k/4d44MzAvPZPSb9mqU7KMT9lc30lXoHuE4kRKx2xdXzZ6OD7quPQrEF0iDsT4dM3tCQq0YBHQO5OhYpZEFSu1wq75WISAcvYQpawtQyZCAoxWkqMlQclCKIOiV0hRC1DxuA2MxJxzTOpCOSModyJheC08h7Dwz6YAQgX+DYnNU0H9mcNtjSVHOn0zRcsLX43AIqmE+hc7pXFO02IkBJvp6vKewoNVuXuIFCGpUOH9RMXgNxykQiDQIpZGG3q7C75olW7VYR6NoxwiA1cphw9HGjhM81CfZWwIIBTxhBY1vC0Rox35i6d5HAD0YAbCVN689ncphx1Bg8fP7hKErE8OLKenz8N7N0q7Q8Lp4tVOTkGr223GvPurnWKOuhve1fctqlomYMko4eKu3WGWAbt6ZT6KBdTW4BCWNgFpxLwhhShxOpYQyz+L6xEeh9bMMqPgKIjUxl6yQHrlwnxqzkPS2hDUbRszm2/H3e3rG8x/8LJWJshU5VaO9232njMKxfCfvNH5s2DB9/ZRk+3L8Y3z52LDrIElaBLu3nSGSVQGcuixyDOg4ymSw6urJcb0dJB60dGU7vpn3e6YfoynocJMoqhdUdHRhSXMQsYRFzMWPKCLzd2onTBlVwNtEhZQmA6gLErK0gdEu30BxTXlgo1eYZIaDCD2kXQ0tTGFdejEPLkhhWWYaBxTFMH9qP/X7XdTV7SOxqt9qh8raJMNFKm9dsNJXYQ8r4ARwfjAAwkcNUxlDaKhcm3JlVDtdpGoYQh/UrwbSR/Qoeo4VsjeAEBtvPT1YkBSsa5ct/T2cMGujAQ2VJCm997nhzYdIAwKVHjMLFR4yCDH3IUIeOM2S3U9RPKrRlcsgGhhbqeQiVj/KSYhQlXUNm1s9XqDpLqJ7P7WCwVwioQFMLbQY8Gb+wGsfWNhb7jia+j/EBegGukW4d+QqERVJDrq+3QbhooXBrGHDxLte1ufv6nLYuUxgBRGzwx6PdL23OvvYKJPULNhFCh3/v8ucLw9C72FQIOYXMd/REc1tKR/C9qmKpyGskzNsolj8vCPneulC1j9BxkbBdPqUNRYV7VgFmSGuIKuv5WEax6vWA7QdoBBqXRuluGrwUQhM3QuVQ+jxKkeDCDFLq4Ayfn/ndZYM40aGp2jEu+6K0Vtntq/XIK7BDGVvC1Ppxe5y30bO7e1BPsJ6h4ymWf7YY73x2bbmAFNURCqCEsx8gnsVJROHf0U5hB38swEq1Od98Hwmh1W0glZlEKqjtobnLQxj4bFhnAgeeysGFgy5Pl2xRjoNs4COT8/M7vLU1xxFBqh3ekckh4+l2stR8sSuTQSjJKBNoyWTRFSpm8rZ1ZdCV8eC6cXieh4bOLrYhQulgZyaLwNdaYYuXRR0Hf2Karub7mFJahPFlKYyqSGNkWQn6l8UxuLIY/eMSVWVpxGP23XQ0z9mHBvAQxbhMRRHYXMNdi1wcyPEBBoOMWxbTkOctr67D3R8p40zvNzfuQOfmety6eQdufWu12Q0+2Oqz7WE9P9JkWpma/JZFbHLvbeUt22ZW9SgJb6twWer2nip0SONZWCg6DwrpXbkg3IEFQcT1pHJyVPwpCPCDj8zA106fCBl4ECK2+3SwbkOw7mCRUZa8Yp6rlxcfHygUbGFfn8tn4tezFuPXKzZp1Gt7u3YBCQzpbDPGooGCwx5YuD0WjX9vmT38b0TYRcJOnhMpyhDpMGajeCqSoh1NPlXRQFTY4zsocP/zkDC4+ihpGeIQkMZxbeBqr4uodNXTPPXdKbi2H8D4YASAW8CYJskw3b5psnc0AYGjy7W6ZqLcuNnRUexfdQeB7M6LJpWGPXZ6vtBydCIjfX1F5DrKlHURAbrzv+13ojvSooJB4VmkbW8vNadA6WpkAWkxYhPtpbu4dQVDKQpl5Uxt4ULHiN4bH4wAkIqkc9TiNr5pwkQYmOX/wTRcspOc/1kuYn3Jgq9uB6txUQCQ8sWWjWUdYM862H426lJaw9ASU/OJHqJgkEUtQr6EaRgVhiiWMXO6SM09YKN3z4QQbbwqjgXoFnieLiDFvQ2CvELqrfEBIYER6zqMlEBngMgpLJZ1DWDVvg9YNo3qsQh25HH5nsPAyFLu3oq28DQKuEv+YzKq6kVB8Oy9pVOIC9jVoYWLxfCt5dtw7rQh3BLW5dQxqmSW3ev00OfW7WwBKJE1njBHW1AIO/eiK9h3GkYcbKOb8WiEgAJdREzh0u/CnOf7EczhbCfoCGjSCIDyI9/rvbyAg6RW8EEw6FgbUI5nLzoSVWWJ/PPqxhV738Hk3sZkAi+s3oKvP/puoU+hrTGkek8D/EsADsQgBLFL4fELp+H0yYM5a4nsEgGxa17CnoYCpgwrwcKtzXiAOoik08Zl3Y/Opu9jHDxFovr6EB6KExo2DgKZryus9nOKfR2vRG0iVvBcbLp8L45/aYADMQiSdFyc8pe5WFFxFAaWpng5XVOdfF+VQkTgI+vEMG/dDtzy5ipdB9GCVmIPRuwBGv8yAv/RsQuCaMLI1H2EOoaaPkcI3P1z5cn1a27XHg2lxJnKI7rPsfiXEdinh0UFqZw9ZQlTz2OLS4jcvrn9lifBfaNipq2dq0myzh7g6gM0/iUAB2QEeuEdgy/ElUY4pSpUDt/bsIQZYUAmzikU5hr4/yAz6GAcUZWsIj0NoCLdT3tC0XsYoSh8zwarROFyvaX+8S8B6COjlyua7238yw38/3kA+H/1DsnxacX3qAAAAABJRU5ErkJggg==", vl = "data:image/png;base64,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", wl = {
  1: ol,
  2: il,
  3: al,
  4: dl,
  5: sl,
  6: ll,
  7: cl,
  8: ul,
  9: fl,
  10: Al,
  11: gl,
  12: hl,
  13: ml,
  14: pl,
  15: yl,
  16: Cl,
  17: vl
}, bc = (e) => {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return wl[t];
};
export {
  vc as Alert,
  we as Button,
  ei as Card,
  Ll as DataTable,
  ic as FileImgUpload,
  oc as FileUpload,
  pc as Footer,
  Xl as FormAutocomplete,
  Zl as FormCheckbox,
  ql as FormDate,
  Kl as FormField,
  Gl as FormModal,
  rc as FormPhone,
  tc as FormSection,
  Wl as FormSelect,
  Vl as FormSelectAutocomplete,
  $l as FormSwitch,
  _l as FormTags,
  ec as FormTextArea,
  fc as HasPermission,
  Ac as Header,
  dc as ImageModal,
  Jl as InfoGrid,
  zl as InfoHeader,
  hc as Loader,
  cc as LoadingOverlay,
  uc as LoadingSpinner,
  jl as Modal,
  Yl as ModuleCard,
  yc as NotFound,
  wl as ODS_ICONS,
  Ul as PageHeader,
  ac as PdfModal,
  nc as PhoneCell,
  sc as SearchInput,
  lc as SelectionListItem,
  gc as Sidebar,
  mc as SkeletonLoader,
  kl as StatCard,
  Cc as Unauthorized,
  wc as favicon,
  bc as getOdsIcon,
  nl as loaderLogo,
  Nr as logoUnisimon,
  Fl as theme
};
