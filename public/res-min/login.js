if (function(t, e) {
 function n(t) {
  var e = t.length, n = ot.type(t);
  return ot.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t);
 }
 function r(t) {
  var e = dt[t] = {};
  return ot.each(t.match(at) || [], function(t, n) {
   e[n] = !0;
  }), e;
 }
 function i() {
  Object.defineProperty(this.cache = {}, 0, {
   get: function() {
    return {};
   }
  }), this.expando = ot.expando + Math.random();
 }
 function o(t, n, r) {
  var i;
  if (r === e && 1 === t.nodeType) if (i = "data-" + n.replace(yt, "-$1").toLowerCase(), 
  r = t.getAttribute(i), "string" == typeof r) {
   try {
    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : vt.test(r) ? JSON.parse(r) : r;
   } catch (o) {}
   gt.set(t, n, r);
  } else r = e;
  return r;
 }
 function s() {
  return !0;
 }
 function a() {
  return !1;
 }
 function l() {
  try {
   return z.activeElement;
  } catch (t) {}
 }
 function u(t, e) {
  for (;(t = t[e]) && 1 !== t.nodeType; ) ;
  return t;
 }
 function c(t, e, n) {
  if (ot.isFunction(e)) return ot.grep(t, function(t, r) {
   return !!e.call(t, r, t) !== n;
  });
  if (e.nodeType) return ot.grep(t, function(t) {
   return t === e !== n;
  });
  if ("string" == typeof e) {
   if (jt.test(e)) return ot.filter(e, t, n);
   e = ot.filter(e, t);
  }
  return ot.grep(t, function(t) {
   return et.call(e, t) >= 0 !== n;
  });
 }
 function p(t, e) {
  return ot.nodeName(t, "table") && ot.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
 }
 function f(t) {
  return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
 }
 function h(t) {
  var e = Ft.exec(t.type);
  return e ? t.type = e[1] : t.removeAttribute("type"), t;
 }
 function d(t, e) {
  for (var n = t.length, r = 0; n > r; r++) mt.set(t[r], "globalEval", !e || mt.get(e[r], "globalEval"));
 }
 function g(t, e) {
  var n, r, i, o, s, a, l, u;
  if (1 === e.nodeType) {
   if (mt.hasData(t) && (o = mt.access(t), s = mt.set(e, o), u = o.events)) {
    delete s.handle, s.events = {};
    for (i in u) for (n = 0, r = u[i].length; r > n; n++) ot.event.add(e, i, u[i][n]);
   }
   gt.hasData(t) && (a = gt.access(t), l = ot.extend({}, a), gt.set(e, l));
  }
 }
 function m(t, n) {
  var r = t.getElementsByTagName ? t.getElementsByTagName(n || "*") : t.querySelectorAll ? t.querySelectorAll(n || "*") : [];
  return n === e || n && ot.nodeName(t, n) ? ot.merge([ t ], r) : r;
 }
 function v(t, e) {
  var n = e.nodeName.toLowerCase();
  "input" === n && Rt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue);
 }
 function y(t, e) {
  if (e in t) return e;
  for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = Zt.length; i--; ) if (e = Zt[i] + n, 
  e in t) return e;
  return r;
 }
 function b(t, e) {
  return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t);
 }
 function x(e) {
  return t.getComputedStyle(e, null);
 }
 function w(t, e) {
  for (var n, r, i, o = [], s = 0, a = t.length; a > s; s++) r = t[s], r.style && (o[s] = mt.get(r, "olddisplay"), 
  n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && b(r) && (o[s] = mt.access(r, "olddisplay", k(r.nodeName)))) : o[s] || (i = b(r), 
  (n && "none" !== n || !i) && mt.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
  for (s = 0; a > s; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
  return t;
 }
 function T(t, e, n) {
  var r = Xt.exec(e);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e;
 }
 function C(t, e, n, r, i) {
  for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + Vt[o], !0, i)), 
  r ? ("content" === n && (s -= ot.css(t, "padding" + Vt[o], !0, i)), "margin" !== n && (s -= ot.css(t, "border" + Vt[o] + "Width", !0, i))) : (s += ot.css(t, "padding" + Vt[o], !0, i), 
  "padding" !== n && (s += ot.css(t, "border" + Vt[o] + "Width", !0, i)));
  return s;
 }
 function S(t, e, n) {
  var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = x(t), s = ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o);
  if (0 >= i || null == i) {
   if (i = Ut(t, e, o), (0 > i || null == i) && (i = t.style[e]), Jt.test(i)) return i;
   r = s && (ot.support.boxSizingReliable || i === t.style[e]), i = parseFloat(i) || 0;
  }
  return i + C(t, e, n || (s ? "border" : "content"), r, o) + "px";
 }
 function k(t) {
  var e = z, n = Yt[t];
  return n || (n = E(t, e), "none" !== n && n || (Bt = (Bt || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), 
  e = (Bt[0].contentWindow || Bt[0].contentDocument).document, e.write("<!doctype html><html><body>"), 
  e.close(), n = E(t, e), Bt.detach()), Yt[t] = n), n;
 }
 function E(t, e) {
  var n = ot(e.createElement(t)).appendTo(e.body), r = ot.css(n[0], "display");
  return n.remove(), r;
 }
 function N(t, e, n, r) {
  var i;
  if (ot.isArray(e)) ot.each(e, function(e, i) {
   n || ee.test(t) ? r(t, i) : N(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r);
  }); else if (n || "object" !== ot.type(e)) r(t, e); else for (i in e) N(t + "[" + i + "]", e[i], n, r);
 }
 function j(t) {
  return function(e, n) {
   "string" != typeof e && (n = e, e = "*");
   var r, i = 0, o = e.toLowerCase().match(at) || [];
   if (ot.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
   (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n);
  };
 }
 function D(t, e, n, r) {
  function i(a) {
   var l;
   return o[a] = !0, ot.each(t[a] || [], function(t, a) {
    var u = a(e, n, r);
    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), 
    i(u), !1);
   }), l;
  }
  var o = {}, s = t === ye;
  return i(e.dataTypes[0]) || !o["*"] && i("*");
 }
 function A(t, n) {
  var r, i, o = ot.ajaxSettings.flatOptions || {};
  for (r in n) n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
  return i && ot.extend(!0, t, i), t;
 }
 function O(t, n, r) {
  for (var i, o, s, a, l = t.contents, u = t.dataTypes; "*" === u[0]; ) u.shift(), 
  i === e && (i = t.mimeType || n.getResponseHeader("Content-Type"));
  if (i) for (o in l) if (l[o] && l[o].test(i)) {
   u.unshift(o);
   break;
  }
  if (u[0] in r) s = u[0]; else {
   for (o in r) {
    if (!u[0] || t.converters[o + " " + u[0]]) {
     s = o;
     break;
    }
    a || (a = o);
   }
   s = s || a;
  }
  return s ? (s !== u[0] && u.unshift(s), r[s]) : void 0;
 }
 function _(t, e, n, r) {
  var i, o, s, a, l, u = {}, c = t.dataTypes.slice();
  if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
  for (o = c.shift(); o; ) if (t.responseFields[o] && (n[t.responseFields[o]] = e), 
  !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
   if (s = u[l + " " + o] || u["* " + o], !s) for (i in u) if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
    s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
    break;
   }
   if (s !== !0) if (s && t["throws"]) e = s(e); else try {
    e = s(e);
   } catch (p) {
    return {
     state: "parsererror",
     error: s ? p : "No conversion from " + l + " to " + o
    };
   }
  }
  return {
   state: "success",
   data: e
  };
 }
 function $() {
  return setTimeout(function() {
   Ne = e;
  }), Ne = ot.now();
 }
 function L(t, e, n) {
  for (var r, i = ($e[e] || []).concat($e["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, e, t)) return r;
 }
 function I(t, e, n) {
  var r, i, o = 0, s = _e.length, a = ot.Deferred().always(function() {
   delete l.elem;
  }), l = function() {
   if (i) return !1;
   for (var e = Ne || $(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
   return a.notifyWith(t, [ u, o, n ]), 1 > o && l ? n : (a.resolveWith(t, [ u ]), 
   !1);
  }, u = a.promise({
   elem: t,
   props: ot.extend({}, e),
   opts: ot.extend(!0, {
    specialEasing: {}
   }, n),
   originalProperties: e,
   originalOptions: n,
   startTime: Ne || $(),
   duration: n.duration,
   tweens: [],
   createTween: function(e, n) {
    var r = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
    return u.tweens.push(r), r;
   },
   stop: function(e) {
    var n = 0, r = e ? u.tweens.length : 0;
    if (i) return this;
    for (i = !0; r > n; n++) u.tweens[n].run(1);
    return e ? a.resolveWith(t, [ u, e ]) : a.rejectWith(t, [ u, e ]), this;
   }
  }), c = u.props;
  for (R(c, u.opts.specialEasing); s > o; o++) if (r = _e[o].call(u, t, c, u.opts)) return r;
  return ot.map(c, L, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), 
  ot.fx.timer(ot.extend(l, {
   elem: t,
   anim: u,
   queue: u.opts.queue
  })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
 }
 function R(t, e) {
  var n, r, i, o, s;
  for (n in t) if (r = ot.camelCase(n), i = e[r], o = t[n], ot.isArray(o) && (i = o[1], 
  o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = ot.cssHooks[r], s && "expand" in s) {
   o = s.expand(o), delete t[r];
   for (n in o) n in t || (t[n] = o[n], e[n] = i);
  } else e[r] = i;
 }
 function q(t, n, r) {
  var i, o, s, a, l, u, c = this, p = {}, f = t.style, h = t.nodeType && b(t), d = mt.get(t, "fxshow");
  r.queue || (l = ot._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, 
  u = l.empty.fire, l.empty.fire = function() {
   l.unqueued || u();
  }), l.unqueued++, c.always(function() {
   c.always(function() {
    l.unqueued--, ot.queue(t, "fx").length || l.empty.fire();
   });
  })), 1 === t.nodeType && ("height" in n || "width" in n) && (r.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
  "inline" === ot.css(t, "display") && "none" === ot.css(t, "float") && (f.display = "inline-block")), 
  r.overflow && (f.overflow = "hidden", c.always(function() {
   f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2];
  }));
  for (i in n) if (o = n[i], De.exec(o)) {
   if (delete n[i], s = s || "toggle" === o, o === (h ? "hide" : "show")) {
    if ("show" !== o || !d || d[i] === e) continue;
    h = !0;
   }
   p[i] = d && d[i] || ot.style(t, i);
  }
  if (!ot.isEmptyObject(p)) {
   d ? "hidden" in d && (h = d.hidden) : d = mt.access(t, "fxshow", {}), s && (d.hidden = !h), 
   h ? ot(t).show() : c.done(function() {
    ot(t).hide();
   }), c.done(function() {
    var e;
    mt.remove(t, "fxshow");
    for (e in p) ot.style(t, e, p[e]);
   });
   for (i in p) a = L(h ? d[i] : 0, i, c), i in d || (d[i] = a.start, h && (a.end = a.start, 
   a.start = "width" === i || "height" === i ? 1 : 0));
  }
 }
 function P(t, e, n, r, i) {
  return new P.prototype.init(t, e, n, r, i);
 }
 function F(t, e) {
  var n, r = {
   height: t
  }, i = 0;
  for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Vt[i], r["margin" + n] = r["padding" + n] = t;
  return e && (r.opacity = r.width = t), r;
 }
 function M(t) {
  return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
 }
 var H, U, B = typeof e, W = t.location, z = t.document, X = z.documentElement, J = t.jQuery, G = t.$, Y = {}, Q = [], K = "2.0.3", V = Q.concat, Z = Q.push, tt = Q.slice, et = Q.indexOf, nt = Y.toString, rt = Y.hasOwnProperty, it = K.trim, ot = function(t, e) {
  return new ot.fn.init(t, e, H);
 }, st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, at = /\S+/g, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ct = /^-ms-/, pt = /-([\da-z])/gi, ft = function(t, e) {
  return e.toUpperCase();
 }, ht = function() {
  z.removeEventListener("DOMContentLoaded", ht, !1), t.removeEventListener("load", ht, !1), 
  ot.ready();
 };
 ot.fn = ot.prototype = {
  jquery: K,
  constructor: ot,
  init: function(t, n, r) {
   var i, o;
   if (!t) return this;
   if ("string" == typeof t) {
    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : lt.exec(t), 
    !i || !i[1] && n) return !n || n.jquery ? (n || r).find(t) : this.constructor(n).find(t);
    if (i[1]) {
     if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : z, !0)), 
     ut.test(i[1]) && ot.isPlainObject(n)) for (i in n) ot.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
     return this;
    }
    return o = z.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), 
    this.context = z, this.selector = t, this;
   }
   return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? r.ready(t) : (t.selector !== e && (this.selector = t.selector, 
   this.context = t.context), ot.makeArray(t, this));
  },
  selector: "",
  length: 0,
  toArray: function() {
   return tt.call(this);
  },
  get: function(t) {
   return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t];
  },
  pushStack: function(t) {
   var e = ot.merge(this.constructor(), t);
   return e.prevObject = this, e.context = this.context, e;
  },
  each: function(t, e) {
   return ot.each(this, t, e);
  },
  ready: function(t) {
   return ot.ready.promise().done(t), this;
  },
  slice: function() {
   return this.pushStack(tt.apply(this, arguments));
  },
  first: function() {
   return this.eq(0);
  },
  last: function() {
   return this.eq(-1);
  },
  eq: function(t) {
   var e = this.length, n = +t + (0 > t ? e : 0);
   return this.pushStack(n >= 0 && e > n ? [ this[n] ] : []);
  },
  map: function(t) {
   return this.pushStack(ot.map(this, function(e, n) {
    return t.call(e, n, e);
   }));
  },
  end: function() {
   return this.prevObject || this.constructor(null);
  },
  push: Z,
  sort: [].sort,
  splice: [].splice
 }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function() {
  var t, n, r, i, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
  for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ot.isFunction(a) || (a = {}), 
  u === l && (a = this, --l); u > l; l++) if (null != (t = arguments[l])) for (n in t) r = a[n], 
  i = t[n], a !== i && (c && i && (ot.isPlainObject(i) || (o = ot.isArray(i))) ? (o ? (o = !1, 
  s = r && ot.isArray(r) ? r : []) : s = r && ot.isPlainObject(r) ? r : {}, a[n] = ot.extend(c, s, i)) : i !== e && (a[n] = i));
  return a;
 }, ot.extend({
  expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
  noConflict: function(e) {
   return t.$ === ot && (t.$ = G), e && t.jQuery === ot && (t.jQuery = J), ot;
  },
  isReady: !1,
  readyWait: 1,
  holdReady: function(t) {
   t ? ot.readyWait++ : ot.ready(!0);
  },
  ready: function(t) {
   (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (U.resolveWith(z, [ ot ]), 
   ot.fn.trigger && ot(z).trigger("ready").off("ready")));
  },
  isFunction: function(t) {
   return "function" === ot.type(t);
  },
  isArray: Array.isArray,
  isWindow: function(t) {
   return null != t && t === t.window;
  },
  isNumeric: function(t) {
   return !isNaN(parseFloat(t)) && isFinite(t);
  },
  type: function(t) {
   return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Y[nt.call(t)] || "object" : typeof t;
  },
  isPlainObject: function(t) {
   if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
   try {
    if (t.constructor && !rt.call(t.constructor.prototype, "isPrototypeOf")) return !1;
   } catch (e) {
    return !1;
   }
   return !0;
  },
  isEmptyObject: function(t) {
   var e;
   for (e in t) return !1;
   return !0;
  },
  error: function(t) {
   throw new Error(t);
  },
  parseHTML: function(t, e, n) {
   if (!t || "string" != typeof t) return null;
   "boolean" == typeof e && (n = e, e = !1), e = e || z;
   var r = ut.exec(t), i = !n && [];
   return r ? [ e.createElement(r[1]) ] : (r = ot.buildFragment([ t ], e, i), i && ot(i).remove(), 
   ot.merge([], r.childNodes));
  },
  parseJSON: JSON.parse,
  parseXML: function(t) {
   var n, r;
   if (!t || "string" != typeof t) return null;
   try {
    r = new DOMParser(), n = r.parseFromString(t, "text/xml");
   } catch (i) {
    n = e;
   }
   return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + t), 
   n;
  },
  noop: function() {},
  globalEval: function(t) {
   var e, n = eval;
   t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = z.createElement("script"), 
   e.text = t, z.head.appendChild(e).parentNode.removeChild(e)) : n(t));
  },
  camelCase: function(t) {
   return t.replace(ct, "ms-").replace(pt, ft);
  },
  nodeName: function(t, e) {
   return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  },
  each: function(t, e, r) {
   var i, o = 0, s = t.length, a = n(t);
   if (r) {
    if (a) for (;s > o && (i = e.apply(t[o], r), i !== !1); o++) ; else for (o in t) if (i = e.apply(t[o], r), 
    i === !1) break;
   } else if (a) for (;s > o && (i = e.call(t[o], o, t[o]), i !== !1); o++) ; else for (o in t) if (i = e.call(t[o], o, t[o]), 
   i === !1) break;
   return t;
  },
  trim: function(t) {
   return null == t ? "" : it.call(t);
  },
  makeArray: function(t, e) {
   var r = e || [];
   return null != t && (n(Object(t)) ? ot.merge(r, "string" == typeof t ? [ t ] : t) : Z.call(r, t)), 
   r;
  },
  inArray: function(t, e, n) {
   return null == e ? -1 : et.call(e, t, n);
  },
  merge: function(t, n) {
   var r = n.length, i = t.length, o = 0;
   if ("number" == typeof r) for (;r > o; o++) t[i++] = n[o]; else for (;n[o] !== e; ) t[i++] = n[o++];
   return t.length = i, t;
  },
  grep: function(t, e, n) {
   var r, i = [], o = 0, s = t.length;
   for (n = !!n; s > o; o++) r = !!e(t[o], o), n !== r && i.push(t[o]);
   return i;
  },
  map: function(t, e, r) {
   var i, o = 0, s = t.length, a = n(t), l = [];
   if (a) for (;s > o; o++) i = e(t[o], o, r), null != i && (l[l.length] = i); else for (o in t) i = e(t[o], o, r), 
   null != i && (l[l.length] = i);
   return V.apply([], l);
  },
  guid: 1,
  proxy: function(t, n) {
   var r, i, o;
   return "string" == typeof n && (r = t[n], n = t, t = r), ot.isFunction(t) ? (i = tt.call(arguments, 2), 
   o = function() {
    return t.apply(n || this, i.concat(tt.call(arguments)));
   }, o.guid = t.guid = t.guid || ot.guid++, o) : e;
  },
  access: function(t, n, r, i, o, s, a) {
   var l = 0, u = t.length, c = null == r;
   if ("object" === ot.type(r)) {
    o = !0;
    for (l in r) ot.access(t, n, l, r[l], !0, s, a);
   } else if (i !== e && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (n.call(t, i), 
   n = null) : (c = n, n = function(t, e, n) {
    return c.call(ot(t), n);
   })), n)) for (;u > l; l++) n(t[l], r, a ? i : i.call(t[l], l, n(t[l], r)));
   return o ? t : c ? n.call(t) : u ? n(t[0], r) : s;
  },
  now: Date.now,
  swap: function(t, e, n, r) {
   var i, o, s = {};
   for (o in e) s[o] = t.style[o], t.style[o] = e[o];
   i = n.apply(t, r || []);
   for (o in e) t.style[o] = s[o];
   return i;
  }
 }), ot.ready.promise = function(e) {
  return U || (U = ot.Deferred(), "complete" === z.readyState ? setTimeout(ot.ready) : (z.addEventListener("DOMContentLoaded", ht, !1), 
  t.addEventListener("load", ht, !1))), U.promise(e);
 }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
  Y["[object " + e + "]"] = e.toLowerCase();
 }), H = ot(z), function(t, e) {
  function n(t, e, n, r) {
   var i, o, s, a, l, u, c, p, d, g;
   if ((e ? e.ownerDocument || e : M) !== _ && O(e), e = e || _, n = n || [], !t || "string" != typeof t) return n;
   if (1 !== (a = e.nodeType) && 9 !== a) return [];
   if (L && !r) {
    if (i = bt.exec(t)) if (s = i[1]) {
     if (9 === a) {
      if (o = e.getElementById(s), !o || !o.parentNode) return n;
      if (o.id === s) return n.push(o), n;
     } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && P(e, o) && o.id === s) return n.push(o), 
     n;
    } else {
     if (i[2]) return tt.apply(n, e.getElementsByTagName(t)), n;
     if ((s = i[3]) && C.getElementsByClassName && e.getElementsByClassName) return tt.apply(n, e.getElementsByClassName(s)), 
     n;
    }
    if (C.qsa && (!I || !I.test(t))) {
     if (p = c = F, d = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
      for (u = f(t), (c = e.getAttribute("id")) ? p = c.replace(Tt, "\\$&") : e.setAttribute("id", p), 
      p = "[id='" + p + "'] ", l = u.length; l--; ) u[l] = p + h(u[l]);
      d = ht.test(t) && e.parentNode || e, g = u.join(",");
     }
     if (g) try {
      return tt.apply(n, d.querySelectorAll(g)), n;
     } catch (m) {} finally {
      c || e.removeAttribute("id");
     }
    }
   }
   return w(t.replace(ct, "$1"), e, n, r);
  }
  function r() {
   function t(n, r) {
    return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = r;
   }
   var e = [];
   return t;
  }
  function i(t) {
   return t[F] = !0, t;
  }
  function o(t) {
   var e = _.createElement("div");
   try {
    return !!t(e);
   } catch (n) {
    return !1;
   } finally {
    e.parentNode && e.parentNode.removeChild(e), e = null;
   }
  }
  function s(t, e) {
   for (var n = t.split("|"), r = t.length; r--; ) k.attrHandle[n[r]] = e;
  }
  function a(t, e) {
   var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
   if (r) return r;
   if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
   return t ? 1 : -1;
  }
  function l(t) {
   return function(e) {
    var n = e.nodeName.toLowerCase();
    return "input" === n && e.type === t;
   };
  }
  function u(t) {
   return function(e) {
    var n = e.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && e.type === t;
   };
  }
  function c(t) {
   return i(function(e) {
    return e = +e, i(function(n, r) {
     for (var i, o = t([], n.length, e), s = o.length; s--; ) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
    });
   });
  }
  function p() {}
  function f(t, e) {
   var r, i, o, s, a, l, u, c = W[t + " "];
   if (c) return e ? 0 : c.slice(0);
   for (a = t, l = [], u = k.preFilter; a; ) {
    (!r || (i = pt.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), 
    r = !1, (i = ft.exec(a)) && (r = i.shift(), o.push({
     value: r,
     type: i[0].replace(ct, " ")
    }), a = a.slice(r.length));
    for (s in k.filter) !(i = vt[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), 
    o.push({
     value: r,
     type: s,
     matches: i
    }), a = a.slice(r.length));
    if (!r) break;
   }
   return e ? a.length : a ? n.error(t) : W(t, l).slice(0);
  }
  function h(t) {
   for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
   return r;
  }
  function d(t, e, n) {
   var r = e.dir, i = n && "parentNode" === r, o = U++;
   return e.first ? function(e, n, o) {
    for (;e = e[r]; ) if (1 === e.nodeType || i) return t(e, n, o);
   } : function(e, n, s) {
    var a, l, u, c = H + " " + o;
    if (s) {
     for (;e = e[r]; ) if ((1 === e.nodeType || i) && t(e, n, s)) return !0;
    } else for (;e = e[r]; ) if (1 === e.nodeType || i) if (u = e[F] || (e[F] = {}), 
    (l = u[r]) && l[0] === c) {
     if ((a = l[1]) === !0 || a === S) return a === !0;
    } else if (l = u[r] = [ c ], l[1] = t(e, n, s) || S, l[1] === !0) return !0;
   };
  }
  function g(t) {
   return t.length > 1 ? function(e, n, r) {
    for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
    return !0;
   } : t[0];
  }
  function m(t, e, n, r, i) {
   for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++) (o = t[a]) && (!n || n(o, r, i)) && (s.push(o), 
   u && e.push(a));
   return s;
  }
  function v(t, e, n, r, o, s) {
   return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), i(function(i, s, a, l) {
    var u, c, p, f = [], h = [], d = s.length, g = i || x(e || "*", a.nodeType ? [ a ] : a, []), v = !t || !i && e ? g : m(g, f, t, a, l), y = n ? o || (i ? t : d || r) ? [] : s : v;
    if (n && n(v, y, a, l), r) for (u = m(y, h), r(u, [], a, l), c = u.length; c--; ) (p = u[c]) && (y[h[c]] = !(v[h[c]] = p));
    if (i) {
     if (o || t) {
      if (o) {
       for (u = [], c = y.length; c--; ) (p = y[c]) && u.push(v[c] = p);
       o(null, y = [], u, l);
      }
      for (c = y.length; c--; ) (p = y[c]) && (u = o ? nt.call(i, p) : f[c]) > -1 && (i[u] = !(s[u] = p));
     }
    } else y = m(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, l) : tt.apply(s, y);
   });
  }
  function y(t) {
   for (var e, n, r, i = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = d(function(t) {
    return t === e;
   }, s, !0), u = d(function(t) {
    return nt.call(e, t) > -1;
   }, s, !0), c = [ function(t, n, r) {
    return !o && (r || n !== D) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
   } ]; i > a; a++) if (n = k.relative[t[a].type]) c = [ d(g(c), n) ]; else {
    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[F]) {
     for (r = ++a; i > r && !k.relative[t[r].type]; r++) ;
     return v(a > 1 && g(c), a > 1 && h(t.slice(0, a - 1).concat({
      value: " " === t[a - 2].type ? "*" : ""
     })).replace(ct, "$1"), n, r > a && y(t.slice(a, r)), i > r && y(t = t.slice(r)), i > r && h(t));
    }
    c.push(n);
   }
   return g(c);
  }
  function b(t, e) {
   var r = 0, o = e.length > 0, s = t.length > 0, a = function(i, a, l, u, c) {
    var p, f, h, d = [], g = 0, v = "0", y = i && [], b = null != c, x = D, w = i || s && k.find.TAG("*", c && a.parentNode || a), T = H += null == x ? 1 : Math.random() || .1;
    for (b && (D = a !== _ && a, S = r); null != (p = w[v]); v++) {
     if (s && p) {
      for (f = 0; h = t[f++]; ) if (h(p, a, l)) {
       u.push(p);
       break;
      }
      b && (H = T, S = ++r);
     }
     o && ((p = !h && p) && g--, i && y.push(p));
    }
    if (g += v, o && v !== g) {
     for (f = 0; h = e[f++]; ) h(y, d, a, l);
     if (i) {
      if (g > 0) for (;v--; ) y[v] || d[v] || (d[v] = V.call(u));
      d = m(d);
     }
     tt.apply(u, d), b && !i && d.length > 0 && g + e.length > 1 && n.uniqueSort(u);
    }
    return b && (H = T, D = x), y;
   };
   return o ? i(a) : a;
  }
  function x(t, e, r) {
   for (var i = 0, o = e.length; o > i; i++) n(t, e[i], r);
   return r;
  }
  function w(t, e, n, r) {
   var i, o, s, a, l, u = f(t);
   if (!r && 1 === u.length) {
    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === e.nodeType && L && k.relative[o[1].type]) {
     if (e = (k.find.ID(s.matches[0].replace(Ct, St), e) || [])[0], !e) return n;
     t = t.slice(o.shift().value.length);
    }
    for (i = vt.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !k.relative[a = s.type]); ) if ((l = k.find[a]) && (r = l(s.matches[0].replace(Ct, St), ht.test(o[0].type) && e.parentNode || e))) {
     if (o.splice(i, 1), t = r.length && h(o), !t) return tt.apply(n, r), n;
     break;
    }
   }
   return j(t, u)(r, e, !L, n, ht.test(t)), n;
  }
  var T, C, S, k, E, N, j, D, A, O, _, $, L, I, R, q, P, F = "sizzle" + -new Date(), M = t.document, H = 0, U = 0, B = r(), W = r(), z = r(), X = !1, J = function(t, e) {
   return t === e ? (X = !0, 0) : 0;
  }, G = typeof e, Y = 1 << 31, Q = {}.hasOwnProperty, K = [], V = K.pop, Z = K.push, tt = K.push, et = K.slice, nt = K.indexOf || function(t) {
   for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
   return -1;
  }, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", at = st.replace("w", "w#"), lt = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]", ut = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + lt.replace(3, 8) + ")*)|.*)\\)|)", ct = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), pt = new RegExp("^" + it + "*," + it + "*"), ft = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ht = new RegExp(it + "*[+~]"), dt = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"), gt = new RegExp(ut), mt = new RegExp("^" + at + "$"), vt = {
   ID: new RegExp("^#(" + st + ")"),
   CLASS: new RegExp("^\\.(" + st + ")"),
   TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
   ATTR: new RegExp("^" + lt),
   PSEUDO: new RegExp("^" + ut),
   CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
   bool: new RegExp("^(?:" + rt + ")$", "i"),
   needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
  }, yt = /^[^{]+\{\s*\[native \w/, bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /^(?:input|select|textarea|button)$/i, wt = /^h\d$/i, Tt = /'|\\/g, Ct = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), St = function(t, e, n) {
   var r = "0x" + e - 65536;
   return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
  };
  try {
   tt.apply(K = et.call(M.childNodes), M.childNodes), K[M.childNodes.length].nodeType;
  } catch (kt) {
   tt = {
    apply: K.length ? function(t, e) {
     Z.apply(t, et.call(e));
    } : function(t, e) {
     for (var n = t.length, r = 0; t[n++] = e[r++]; ) ;
     t.length = n - 1;
    }
   };
  }
  N = n.isXML = function(t) {
   var e = t && (t.ownerDocument || t).documentElement;
   return e ? "HTML" !== e.nodeName : !1;
  }, C = n.support = {}, O = n.setDocument = function(t) {
   var e = t ? t.ownerDocument || t : M, n = e.defaultView;
   return e !== _ && 9 === e.nodeType && e.documentElement ? (_ = e, $ = e.documentElement, 
   L = !N(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
    O();
   }), C.attributes = o(function(t) {
    return t.className = "i", !t.getAttribute("className");
   }), C.getElementsByTagName = o(function(t) {
    return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length;
   }), C.getElementsByClassName = o(function(t) {
    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 
    2 === t.getElementsByClassName("i").length;
   }), C.getById = o(function(t) {
    return $.appendChild(t).id = F, !e.getElementsByName || !e.getElementsByName(F).length;
   }), C.getById ? (k.find.ID = function(t, e) {
    if (typeof e.getElementById !== G && L) {
     var n = e.getElementById(t);
     return n && n.parentNode ? [ n ] : [];
    }
   }, k.filter.ID = function(t) {
    var e = t.replace(Ct, St);
    return function(t) {
     return t.getAttribute("id") === e;
    };
   }) : (delete k.find.ID, k.filter.ID = function(t) {
    var e = t.replace(Ct, St);
    return function(t) {
     var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
     return n && n.value === e;
    };
   }), k.find.TAG = C.getElementsByTagName ? function(t, e) {
    return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0;
   } : function(t, e) {
    var n, r = [], i = 0, o = e.getElementsByTagName(t);
    if ("*" === t) {
     for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
     return r;
    }
    return o;
   }, k.find.CLASS = C.getElementsByClassName && function(t, e) {
    return typeof e.getElementsByClassName !== G && L ? e.getElementsByClassName(t) : void 0;
   }, R = [], I = [], (C.qsa = yt.test(e.querySelectorAll)) && (o(function(t) {
    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || I.push("\\[" + it + "*(?:value|" + rt + ")"), 
    t.querySelectorAll(":checked").length || I.push(":checked");
   }), o(function(t) {
    var n = e.createElement("input");
    n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && I.push("[*^$]=" + it + "*(?:''|\"\")"), 
    t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
    I.push(",.*:");
   })), (C.matchesSelector = yt.test(q = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function(t) {
    C.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), R.push("!=", ut);
   }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), 
   P = yt.test($.contains) || $.compareDocumentPosition ? function(t, e) {
    var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
   } : function(t, e) {
    if (e) for (;e = e.parentNode; ) if (e === t) return !0;
    return !1;
   }, J = $.compareDocumentPosition ? function(t, n) {
    if (t === n) return X = !0, 0;
    var r = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
    return r ? 1 & r || !C.sortDetached && n.compareDocumentPosition(t) === r ? t === e || P(M, t) ? -1 : n === e || P(M, n) ? 1 : A ? nt.call(A, t) - nt.call(A, n) : 0 : 4 & r ? -1 : 1 : t.compareDocumentPosition ? -1 : 1;
   } : function(t, n) {
    var r, i = 0, o = t.parentNode, s = n.parentNode, l = [ t ], u = [ n ];
    if (t === n) return X = !0, 0;
    if (!o || !s) return t === e ? -1 : n === e ? 1 : o ? -1 : s ? 1 : A ? nt.call(A, t) - nt.call(A, n) : 0;
    if (o === s) return a(t, n);
    for (r = t; r = r.parentNode; ) l.unshift(r);
    for (r = n; r = r.parentNode; ) u.unshift(r);
    for (;l[i] === u[i]; ) i++;
    return i ? a(l[i], u[i]) : l[i] === M ? -1 : u[i] === M ? 1 : 0;
   }, e) : _;
  }, n.matches = function(t, e) {
   return n(t, null, null, e);
  }, n.matchesSelector = function(t, e) {
   if ((t.ownerDocument || t) !== _ && O(t), e = e.replace(dt, "='$1']"), C.matchesSelector && L && (!R || !R.test(e)) && (!I || !I.test(e))) try {
    var r = q.call(t, e);
    if (r || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r;
   } catch (i) {}
   return n(e, _, null, [ t ]).length > 0;
  }, n.contains = function(t, e) {
   return (t.ownerDocument || t) !== _ && O(t), P(t, e);
  }, n.attr = function(t, n) {
   (t.ownerDocument || t) !== _ && O(t);
   var r = k.attrHandle[n.toLowerCase()], i = r && Q.call(k.attrHandle, n.toLowerCase()) ? r(t, n, !L) : e;
   return i === e ? C.attributes || !L ? t.getAttribute(n) : (i = t.getAttributeNode(n)) && i.specified ? i.value : null : i;
  }, n.error = function(t) {
   throw new Error("Syntax error, unrecognized expression: " + t);
  }, n.uniqueSort = function(t) {
   var e, n = [], r = 0, i = 0;
   if (X = !C.detectDuplicates, A = !C.sortStable && t.slice(0), t.sort(J), X) {
    for (;e = t[i++]; ) e === t[i] && (r = n.push(i));
    for (;r--; ) t.splice(n[r], 1);
   }
   return t;
  }, E = n.getText = function(t) {
   var e, n = "", r = 0, i = t.nodeType;
   if (i) {
    if (1 === i || 9 === i || 11 === i) {
     if ("string" == typeof t.textContent) return t.textContent;
     for (t = t.firstChild; t; t = t.nextSibling) n += E(t);
    } else if (3 === i || 4 === i) return t.nodeValue;
   } else for (;e = t[r]; r++) n += E(e);
   return n;
  }, k = n.selectors = {
   cacheLength: 50,
   createPseudo: i,
   match: vt,
   attrHandle: {},
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function(t) {
     return t[1] = t[1].replace(Ct, St), t[3] = (t[4] || t[5] || "").replace(Ct, St), 
     "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
    },
    CHILD: function(t) {
     return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), 
     t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), 
     t;
    },
    PSEUDO: function(t) {
     var n, r = !t[5] && t[2];
     return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : r && gt.test(r) && (n = f(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (t[0] = t[0].slice(0, n), 
     t[2] = r.slice(0, n)), t.slice(0, 3));
    }
   },
   filter: {
    TAG: function(t) {
     var e = t.replace(Ct, St).toLowerCase();
     return "*" === t ? function() {
      return !0;
     } : function(t) {
      return t.nodeName && t.nodeName.toLowerCase() === e;
     };
    },
    CLASS: function(t) {
     var e = B[t + " "];
     return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
      return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "");
     });
    },
    ATTR: function(t, e, r) {
     return function(i) {
      var o = n.attr(i, t);
      return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === r : "!=" === e ? o !== r : "^=" === e ? r && 0 === o.indexOf(r) : "*=" === e ? r && o.indexOf(r) > -1 : "$=" === e ? r && o.slice(-r.length) === r : "~=" === e ? (" " + o + " ").indexOf(r) > -1 : "|=" === e ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
     };
    },
    CHILD: function(t, e, n, r, i) {
     var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
     return 1 === r && 0 === i ? function(t) {
      return !!t.parentNode;
     } : function(e, n, l) {
      var u, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
      if (m) {
       if (o) {
        for (;g; ) {
         for (p = e; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
         d = g = "only" === t && !d && "nextSibling";
        }
        return !0;
       }
       if (d = [ s ? m.firstChild : m.lastChild ], s && y) {
        for (c = m[F] || (m[F] = {}), u = c[t] || [], h = u[0] === H && u[1], f = u[0] === H && u[2], 
        p = h && m.childNodes[h]; p = ++h && p && p[g] || (f = h = 0) || d.pop(); ) if (1 === p.nodeType && ++f && p === e) {
         c[t] = [ H, h, f ];
         break;
        }
       } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === H) f = u[1]; else for (;(p = ++h && p && p[g] || (f = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (y && ((p[F] || (p[F] = {}))[t] = [ H, f ]), 
       p !== e)); ) ;
       return f -= i, f === r || f % r === 0 && f / r >= 0;
      }
     };
    },
    PSEUDO: function(t, e) {
     var r, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
     return o[F] ? o(e) : o.length > 1 ? (r = [ t, t, "", e ], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, n) {
      for (var r, i = o(t, e), s = i.length; s--; ) r = nt.call(t, i[s]), t[r] = !(n[r] = i[s]);
     }) : function(t) {
      return o(t, 0, r);
     }) : o;
    }
   },
   pseudos: {
    not: i(function(t) {
     var e = [], n = [], r = j(t.replace(ct, "$1"));
     return r[F] ? i(function(t, e, n, i) {
      for (var o, s = r(t, null, i, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
     }) : function(t, i, o) {
      return e[0] = t, r(e, null, o, n), !n.pop();
     };
    }),
    has: i(function(t) {
     return function(e) {
      return n(t, e).length > 0;
     };
    }),
    contains: i(function(t) {
     return function(e) {
      return (e.textContent || e.innerText || E(e)).indexOf(t) > -1;
     };
    }),
    lang: i(function(t) {
     return mt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Ct, St).toLowerCase(), 
     function(e) {
      var n;
      do if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), 
      n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
      return !1;
     };
    }),
    target: function(e) {
     var n = t.location && t.location.hash;
     return n && n.slice(1) === e.id;
    },
    root: function(t) {
     return t === $;
    },
    focus: function(t) {
     return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
    },
    enabled: function(t) {
     return t.disabled === !1;
    },
    disabled: function(t) {
     return t.disabled === !0;
    },
    checked: function(t) {
     var e = t.nodeName.toLowerCase();
     return "input" === e && !!t.checked || "option" === e && !!t.selected;
    },
    selected: function(t) {
     return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
    },
    empty: function(t) {
     for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
     return !0;
    },
    parent: function(t) {
     return !k.pseudos.empty(t);
    },
    header: function(t) {
     return wt.test(t.nodeName);
    },
    input: function(t) {
     return xt.test(t.nodeName);
    },
    button: function(t) {
     var e = t.nodeName.toLowerCase();
     return "input" === e && "button" === t.type || "button" === e;
    },
    text: function(t) {
     var e;
     return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type);
    },
    first: c(function() {
     return [ 0 ];
    }),
    last: c(function(t, e) {
     return [ e - 1 ];
    }),
    eq: c(function(t, e, n) {
     return [ 0 > n ? n + e : n ];
    }),
    even: c(function(t, e) {
     for (var n = 0; e > n; n += 2) t.push(n);
     return t;
    }),
    odd: c(function(t, e) {
     for (var n = 1; e > n; n += 2) t.push(n);
     return t;
    }),
    lt: c(function(t, e, n) {
     for (var r = 0 > n ? n + e : n; --r >= 0; ) t.push(r);
     return t;
    }),
    gt: c(function(t, e, n) {
     for (var r = 0 > n ? n + e : n; ++r < e; ) t.push(r);
     return t;
    })
   }
  }, k.pseudos.nth = k.pseudos.eq;
  for (T in {
   radio: !0,
   checkbox: !0,
   file: !0,
   password: !0,
   image: !0
  }) k.pseudos[T] = l(T);
  for (T in {
   submit: !0,
   reset: !0
  }) k.pseudos[T] = u(T);
  p.prototype = k.filters = k.pseudos, k.setFilters = new p(), j = n.compile = function(t, e) {
   var n, r = [], i = [], o = z[t + " "];
   if (!o) {
    for (e || (e = f(t)), n = e.length; n--; ) o = y(e[n]), o[F] ? r.push(o) : i.push(o);
    o = z(t, b(i, r));
   }
   return o;
  }, C.sortStable = F.split("").sort(J).join("") === F, C.detectDuplicates = X, O(), 
  C.sortDetached = o(function(t) {
   return 1 & t.compareDocumentPosition(_.createElement("div"));
  }), o(function(t) {
   return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
  }) || s("type|href|height|width", function(t, e, n) {
   return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
  }), C.attributes && o(function(t) {
   return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
  }) || s("value", function(t, e, n) {
   return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
  }), o(function(t) {
   return null == t.getAttribute("disabled");
  }) || s(rt, function(t, e, n) {
   var r;
   return n ? void 0 : (r = t.getAttributeNode(e)) && r.specified ? r.value : t[e] === !0 ? e.toLowerCase() : null;
  }), ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = n.uniqueSort, 
  ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains;
 }(t);
 var dt = {};
 ot.Callbacks = function(t) {
  t = "string" == typeof t ? dt[t] || r(t) : ot.extend({}, t);
  var n, i, o, s, a, l, u = [], c = !t.once && [], p = function(e) {
   for (n = t.memory && e, i = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++) if (u[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
    n = !1;
    break;
   }
   o = !1, u && (c ? c.length && p(c.shift()) : n ? u = [] : f.disable());
  }, f = {
   add: function() {
    if (u) {
     var e = u.length;
     !function r(e) {
      ot.each(e, function(e, n) {
       var i = ot.type(n);
       "function" === i ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && r(n);
      });
     }(arguments), o ? a = u.length : n && (s = e, p(n));
    }
    return this;
   },
   remove: function() {
    return u && ot.each(arguments, function(t, e) {
     for (var n; (n = ot.inArray(e, u, n)) > -1; ) u.splice(n, 1), o && (a >= n && a--, 
     l >= n && l--);
    }), this;
   },
   has: function(t) {
    return t ? ot.inArray(t, u) > -1 : !(!u || !u.length);
   },
   empty: function() {
    return u = [], a = 0, this;
   },
   disable: function() {
    return u = c = n = e, this;
   },
   disabled: function() {
    return !u;
   },
   lock: function() {
    return c = e, n || f.disable(), this;
   },
   locked: function() {
    return !c;
   },
   fireWith: function(t, e) {
    return !u || i && !c || (e = e || [], e = [ t, e.slice ? e.slice() : e ], o ? c.push(e) : p(e)), 
    this;
   },
   fire: function() {
    return f.fireWith(this, arguments), this;
   },
   fired: function() {
    return !!i;
   }
  };
  return f;
 }, ot.extend({
  Deferred: function(t) {
   var e = [ [ "resolve", "done", ot.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ot.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ot.Callbacks("memory") ] ], n = "pending", r = {
    state: function() {
     return n;
    },
    always: function() {
     return i.done(arguments).fail(arguments), this;
    },
    then: function() {
     var t = arguments;
     return ot.Deferred(function(n) {
      ot.each(e, function(e, o) {
       var s = o[0], a = ot.isFunction(t[e]) && t[e];
       i[o[1]](function() {
        var t = a && a.apply(this, arguments);
        t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [ t ] : arguments);
       });
      }), t = null;
     }).promise();
    },
    promise: function(t) {
     return null != t ? ot.extend(t, r) : r;
    }
   }, i = {};
   return r.pipe = r.then, ot.each(e, function(t, o) {
    var s = o[2], a = o[3];
    r[o[1]] = s.add, a && s.add(function() {
     n = a;
    }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
     return i[o[0] + "With"](this === i ? r : this, arguments), this;
    }, i[o[0] + "With"] = s.fireWith;
   }), r.promise(i), t && t.call(i, i), i;
  },
  when: function(t) {
   var e, n, r, i = 0, o = tt.call(arguments), s = o.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ot.Deferred(), u = function(t, n, r) {
    return function(i) {
     n[t] = this, r[t] = arguments.length > 1 ? tt.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r);
    };
   };
   if (s > 1) for (e = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --a;
   return a || l.resolveWith(r, o), l.promise();
  }
 }), ot.support = function(e) {
  var n = z.createElement("input"), r = z.createDocumentFragment(), i = z.createElement("div"), o = z.createElement("select"), s = o.appendChild(z.createElement("option"));
  return n.type ? (n.type = "checkbox", e.checkOn = "" !== n.value, e.optSelected = s.selected, 
  e.reliableMarginRight = !0, e.boxSizingReliable = !0, e.pixelPosition = !1, n.checked = !0, 
  e.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled, 
  n = z.createElement("input"), n.value = "t", n.type = "radio", e.radioValue = "t" === n.value, 
  n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, 
  e.focusinBubbles = "onfocusin" in t, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
  e.clearCloneStyle = "content-box" === i.style.backgroundClip, ot(function() {
   var n, r, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", s = z.getElementsByTagName("body")[0];
   s && (n = z.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
   s.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
   ot.swap(s, null != s.style.zoom ? {
    zoom: 1
   } : {}, function() {
    e.boxSizing = 4 === i.offsetWidth;
   }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(i, null) || {}).top, 
   e.boxSizingReliable = "4px" === (t.getComputedStyle(i, null) || {
    width: "4px"
   }).width, r = i.appendChild(z.createElement("div")), r.style.cssText = i.style.cssText = o, 
   r.style.marginRight = r.style.width = "0", i.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), 
   s.removeChild(n));
  }), e) : e;
 }({});
 var gt, mt, vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, yt = /([A-Z])/g;
 i.uid = 1, i.accepts = function(t) {
  return t.nodeType ? 1 === t.nodeType || 9 === t.nodeType : !0;
 }, i.prototype = {
  key: function(t) {
   if (!i.accepts(t)) return 0;
   var e = {}, n = t[this.expando];
   if (!n) {
    n = i.uid++;
    try {
     e[this.expando] = {
      value: n
     }, Object.defineProperties(t, e);
    } catch (r) {
     e[this.expando] = n, ot.extend(t, e);
    }
   }
   return this.cache[n] || (this.cache[n] = {}), n;
  },
  set: function(t, e, n) {
   var r, i = this.key(t), o = this.cache[i];
   if ("string" == typeof e) o[e] = n; else if (ot.isEmptyObject(o)) ot.extend(this.cache[i], e); else for (r in e) o[r] = e[r];
   return o;
  },
  get: function(t, n) {
   var r = this.cache[this.key(t)];
   return n === e ? r : r[n];
  },
  access: function(t, n, r) {
   var i;
   return n === e || n && "string" == typeof n && r === e ? (i = this.get(t, n), i !== e ? i : this.get(t, ot.camelCase(n))) : (this.set(t, n, r), 
   r !== e ? r : n);
  },
  remove: function(t, n) {
   var r, i, o, s = this.key(t), a = this.cache[s];
   if (n === e) this.cache[s] = {}; else {
    ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) : (o = ot.camelCase(n), n in a ? i = [ n, o ] : (i = o, 
    i = i in a ? [ i ] : i.match(at) || [])), r = i.length;
    for (;r--; ) delete a[i[r]];
   }
  },
  hasData: function(t) {
   return !ot.isEmptyObject(this.cache[t[this.expando]] || {});
  },
  discard: function(t) {
   t[this.expando] && delete this.cache[t[this.expando]];
  }
 }, gt = new i(), mt = new i(), ot.extend({
  acceptData: i.accepts,
  hasData: function(t) {
   return gt.hasData(t) || mt.hasData(t);
  },
  data: function(t, e, n) {
   return gt.access(t, e, n);
  },
  removeData: function(t, e) {
   gt.remove(t, e);
  },
  _data: function(t, e, n) {
   return mt.access(t, e, n);
  },
  _removeData: function(t, e) {
   mt.remove(t, e);
  }
 }), ot.fn.extend({
  data: function(t, n) {
   var r, i, s = this[0], a = 0, l = null;
   if (t === e) {
    if (this.length && (l = gt.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
     for (r = s.attributes; a < r.length; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), 
     o(s, i, l[i]));
     mt.set(s, "hasDataAttrs", !0);
    }
    return l;
   }
   return "object" == typeof t ? this.each(function() {
    gt.set(this, t);
   }) : ot.access(this, function(n) {
    var r, i = ot.camelCase(t);
    if (s && n === e) {
     if (r = gt.get(s, t), r !== e) return r;
     if (r = gt.get(s, i), r !== e) return r;
     if (r = o(s, i, e), r !== e) return r;
    } else this.each(function() {
     var r = gt.get(this, i);
     gt.set(this, i, n), -1 !== t.indexOf("-") && r !== e && gt.set(this, t, n);
    });
   }, null, n, arguments.length > 1, null, !0);
  },
  removeData: function(t) {
   return this.each(function() {
    gt.remove(this, t);
   });
  }
 }), ot.extend({
  queue: function(t, e, n) {
   var r;
   return t ? (e = (e || "fx") + "queue", r = mt.get(t, e), n && (!r || ot.isArray(n) ? r = mt.access(t, e, ot.makeArray(n)) : r.push(n)), 
   r || []) : void 0;
  },
  dequeue: function(t, e) {
   e = e || "fx";
   var n = ot.queue(t, e), r = n.length, i = n.shift(), o = ot._queueHooks(t, e), s = function() {
    ot.dequeue(t, e);
   };
   "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), 
   delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire();
  },
  _queueHooks: function(t, e) {
   var n = e + "queueHooks";
   return mt.get(t, n) || mt.access(t, n, {
    empty: ot.Callbacks("once memory").add(function() {
     mt.remove(t, [ e + "queue", n ]);
    })
   });
  }
 }), ot.fn.extend({
  queue: function(t, n) {
   var r = 2;
   return "string" != typeof t && (n = t, t = "fx", r--), arguments.length < r ? ot.queue(this[0], t) : n === e ? this : this.each(function() {
    var e = ot.queue(this, t, n);
    ot._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ot.dequeue(this, t);
   });
  },
  dequeue: function(t) {
   return this.each(function() {
    ot.dequeue(this, t);
   });
  },
  delay: function(t, e) {
   return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
    var r = setTimeout(e, t);
    n.stop = function() {
     clearTimeout(r);
    };
   });
  },
  clearQueue: function(t) {
   return this.queue(t || "fx", []);
  },
  promise: function(t, n) {
   var r, i = 1, o = ot.Deferred(), s = this, a = this.length, l = function() {
    --i || o.resolveWith(s, [ s ]);
   };
   for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--; ) r = mt.get(s[a], t + "queueHooks"), 
   r && r.empty && (i++, r.empty.add(l));
   return l(), o.promise(n);
  }
 });
 var bt, xt, wt = /[\t\r\n\f]/g, Tt = /\r/g, Ct = /^(?:input|select|textarea|button)$/i;
 ot.fn.extend({
  attr: function(t, e) {
   return ot.access(this, ot.attr, t, e, arguments.length > 1);
  },
  removeAttr: function(t) {
   return this.each(function() {
    ot.removeAttr(this, t);
   });
  },
  prop: function(t, e) {
   return ot.access(this, ot.prop, t, e, arguments.length > 1);
  },
  removeProp: function(t) {
   return this.each(function() {
    delete this[ot.propFix[t] || t];
   });
  },
  addClass: function(t) {
   var e, n, r, i, o, s = 0, a = this.length, l = "string" == typeof t && t;
   if (ot.isFunction(t)) return this.each(function(e) {
    ot(this).addClass(t.call(this, e, this.className));
   });
   if (l) for (e = (t || "").match(at) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
    for (o = 0; i = e[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
    n.className = ot.trim(r);
   }
   return this;
  },
  removeClass: function(t) {
   var e, n, r, i, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
   if (ot.isFunction(t)) return this.each(function(e) {
    ot(this).removeClass(t.call(this, e, this.className));
   });
   if (l) for (e = (t || "").match(at) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
    for (o = 0; i = e[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
    n.className = t ? ot.trim(r) : "";
   }
   return this;
  },
  toggleClass: function(t, e) {
   var n = typeof t;
   return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
    ot(this).toggleClass(t.call(this, n, this.className, e), e);
   }) : this.each(function() {
    if ("string" === n) for (var e, r = 0, i = ot(this), o = t.match(at) || []; e = o[r++]; ) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else (n === B || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), 
    this.className = this.className || t === !1 ? "" : mt.get(this, "__className__") || "");
   });
  },
  hasClass: function(t) {
   for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(e) >= 0) return !0;
   return !1;
  },
  val: function(t) {
   var n, r, i, o = this[0];
   {
    if (arguments.length) return i = ot.isFunction(t), this.each(function(r) {
     var o;
     1 === this.nodeType && (o = i ? t.call(this, r, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(t) {
      return null == t ? "" : t + "";
     })), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o));
    });
    if (o) return n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], 
    n && "get" in n && (r = n.get(o, "value")) !== e ? r : (r = o.value, "string" == typeof r ? r.replace(Tt, "") : null == r ? "" : r);
   }
  }
 }), ot.extend({
  valHooks: {
   option: {
    get: function(t) {
     var e = t.attributes.value;
     return !e || e.specified ? t.value : t.text;
    }
   },
   select: {
    get: function(t) {
     for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], 
     (n.selected || l === i) && (ot.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
      if (e = ot(n).val(), o) return e;
      s.push(e);
     }
     return s;
    },
    set: function(t, e) {
     for (var n, r, i = t.options, o = ot.makeArray(e), s = i.length; s--; ) r = i[s], 
     (r.selected = ot.inArray(ot(r).val(), o) >= 0) && (n = !0);
     return n || (t.selectedIndex = -1), o;
    }
   }
  },
  attr: function(t, n, r) {
   var i, o, s = t.nodeType;
   if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === B ? ot.prop(t, n, r) : (1 === s && ot.isXMLDoc(t) || (n = n.toLowerCase(), 
   i = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? xt : bt)), r === e ? i && "get" in i && null !== (o = i.get(t, n)) ? o : (o = ot.find.attr(t, n), 
   null == o ? e : o) : null !== r ? i && "set" in i && (o = i.set(t, r, n)) !== e ? o : (t.setAttribute(n, r + ""), 
   r) : void ot.removeAttr(t, n));
  },
  removeAttr: function(t, e) {
   var n, r, i = 0, o = e && e.match(at);
   if (o && 1 === t.nodeType) for (;n = o[i++]; ) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[r] = !1), 
   t.removeAttribute(n);
  },
  attrHooks: {
   type: {
    set: function(t, e) {
     if (!ot.support.radioValue && "radio" === e && ot.nodeName(t, "input")) {
      var n = t.value;
      return t.setAttribute("type", e), n && (t.value = n), e;
     }
    }
   }
  },
  propFix: {
   "for": "htmlFor",
   "class": "className"
  },
  prop: function(t, n, r) {
   var i, o, s, a = t.nodeType;
   if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ot.isXMLDoc(t), s && (n = ot.propFix[n] || n, 
   o = ot.propHooks[n]), r !== e ? o && "set" in o && (i = o.set(t, r, n)) !== e ? i : t[n] = r : o && "get" in o && null !== (i = o.get(t, n)) ? i : t[n];
  },
  propHooks: {
   tabIndex: {
    get: function(t) {
     return t.hasAttribute("tabindex") || Ct.test(t.nodeName) || t.href ? t.tabIndex : -1;
    }
   }
  }
 }), xt = {
  set: function(t, e, n) {
   return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n;
  }
 }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, n) {
  var r = ot.expr.attrHandle[n] || ot.find.attr;
  ot.expr.attrHandle[n] = function(t, n, i) {
   var o = ot.expr.attrHandle[n], s = i ? e : (ot.expr.attrHandle[n] = e) != r(t, n, i) ? n.toLowerCase() : null;
   return ot.expr.attrHandle[n] = o, s;
  };
 }), ot.support.optSelected || (ot.propHooks.selected = {
  get: function(t) {
   var e = t.parentNode;
   return e && e.parentNode && e.parentNode.selectedIndex, null;
  }
 }), ot.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
  ot.propFix[this.toLowerCase()] = this;
 }), ot.each([ "radio", "checkbox" ], function() {
  ot.valHooks[this] = {
   set: function(t, e) {
    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0;
   }
  }, ot.support.checkOn || (ot.valHooks[this].get = function(t) {
   return null === t.getAttribute("value") ? "on" : t.value;
  });
 });
 var St = /^key/, kt = /^(?:mouse|contextmenu)|click/, Et = /^(?:focusinfocus|focusoutblur)$/, Nt = /^([^.]*)(?:\.(.+)|)$/;
 ot.event = {
  global: {},
  add: function(t, n, r, i, o) {
   var s, a, l, u, c, p, f, h, d, g, m, v = mt.get(t);
   if (v) {
    for (r.handler && (s = r, r = s.handler, o = s.selector), r.guid || (r.guid = ot.guid++), 
    (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
     return typeof ot === B || t && ot.event.triggered === t.type ? e : ot.event.dispatch.apply(a.elem, arguments);
    }, a.elem = t), n = (n || "").match(at) || [ "" ], c = n.length; c--; ) l = Nt.exec(n[c]) || [], 
    d = m = l[1], g = (l[2] || "").split(".").sort(), d && (f = ot.event.special[d] || {}, 
    d = (o ? f.delegateType : f.bindType) || d, f = ot.event.special[d] || {}, p = ot.extend({
     type: d,
     origType: m,
     data: i,
     handler: r,
     guid: r.guid,
     selector: o,
     needsContext: o && ot.expr.match.needsContext.test(o),
     namespace: g.join(".")
    }, s), (h = u[d]) || (h = u[d] = [], h.delegateCount = 0, f.setup && f.setup.call(t, i, g, a) !== !1 || t.addEventListener && t.addEventListener(d, a, !1)), 
    f.add && (f.add.call(t, p), p.handler.guid || (p.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), 
    ot.event.global[d] = !0);
    t = null;
   }
  },
  remove: function(t, e, n, r, i) {
   var o, s, a, l, u, c, p, f, h, d, g, m = mt.hasData(t) && mt.get(t);
   if (m && (l = m.events)) {
    for (e = (e || "").match(at) || [ "" ], u = e.length; u--; ) if (a = Nt.exec(e[u]) || [], 
    h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
     for (p = ot.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, 
     f = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
     s = o = f.length; o--; ) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), 
     c.selector && f.delegateCount--, p.remove && p.remove.call(t, c));
     s && !f.length && (p.teardown && p.teardown.call(t, d, m.handle) !== !1 || ot.removeEvent(t, h, m.handle), 
     delete l[h]);
    } else for (h in l) ot.event.remove(t, h + e[u], n, r, !0);
    ot.isEmptyObject(l) && (delete m.handle, mt.remove(t, "events"));
   }
  },
  trigger: function(n, r, i, o) {
   var s, a, l, u, c, p, f, h = [ i || z ], d = rt.call(n, "type") ? n.type : n, g = rt.call(n, "namespace") ? n.namespace.split(".") : [];
   if (a = l = i = i || z, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(d + ot.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), 
   d = g.shift(), g.sort()), c = d.indexOf(":") < 0 && "on" + d, n = n[ot.expando] ? n : new ot.Event(d, "object" == typeof n && n), 
   n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
   n.result = e, n.target || (n.target = i), r = null == r ? [ n ] : ot.makeArray(r, [ n ]), 
   f = ot.event.special[d] || {}, o || !f.trigger || f.trigger.apply(i, r) !== !1)) {
    if (!o && !f.noBubble && !ot.isWindow(i)) {
     for (u = f.delegateType || d, Et.test(u + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
     l = a;
     l === (i.ownerDocument || z) && h.push(l.defaultView || l.parentWindow || t);
    }
    for (s = 0; (a = h[s++]) && !n.isPropagationStopped(); ) n.type = s > 1 ? u : f.bindType || d, 
    p = (mt.get(a, "events") || {})[n.type] && mt.get(a, "handle"), p && p.apply(a, r), 
    p = c && a[c], p && ot.acceptData(a) && p.apply && p.apply(a, r) === !1 && n.preventDefault();
    return n.type = d, o || n.isDefaultPrevented() || f._default && f._default.apply(h.pop(), r) !== !1 || !ot.acceptData(i) || c && ot.isFunction(i[d]) && !ot.isWindow(i) && (l = i[c], 
    l && (i[c] = null), ot.event.triggered = d, i[d](), ot.event.triggered = e, l && (i[c] = l)), 
    n.result;
   }
  },
  dispatch: function(t) {
   t = ot.event.fix(t);
   var n, r, i, o, s, a = [], l = tt.call(arguments), u = (mt.get(this, "events") || {})[t.type] || [], c = ot.event.special[t.type] || {};
   if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
    for (a = ot.event.handlers.call(this, t, u), n = 0; (o = a[n++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
    r = 0; (s = o.handlers[r++]) && !t.isImmediatePropagationStopped(); ) (!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, 
    t.data = s.data, i = ((ot.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), 
    i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
    return c.postDispatch && c.postDispatch.call(this, t), t.result;
   }
  },
  handlers: function(t, n) {
   var r, i, o, s, a = [], l = n.delegateCount, u = t.target;
   if (l && u.nodeType && (!t.button || "click" !== t.type)) for (;u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== t.type) {
    for (i = [], r = 0; l > r; r++) s = n[r], o = s.selector + " ", i[o] === e && (i[o] = s.needsContext ? ot(o, this).index(u) >= 0 : ot.find(o, this, null, [ u ]).length), 
    i[o] && i.push(s);
    i.length && a.push({
     elem: u,
     handlers: i
    });
   }
   return l < n.length && a.push({
    elem: this,
    handlers: n.slice(l)
   }), a;
  },
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
  fixHooks: {},
  keyHooks: {
   props: "char charCode key keyCode".split(" "),
   filter: function(t, e) {
    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), 
    t;
   }
  },
  mouseHooks: {
   props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
   filter: function(t, n) {
    var r, i, o, s = n.button;
    return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || z, 
    i = r.documentElement, o = r.body, t.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), 
    t.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), 
    t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t;
   }
  },
  fix: function(t) {
   if (t[ot.expando]) return t;
   var e, n, r, i = t.type, o = t, s = this.fixHooks[i];
   for (s || (this.fixHooks[i] = s = kt.test(i) ? this.mouseHooks : St.test(i) ? this.keyHooks : {}), 
   r = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = r.length; e--; ) n = r[e], 
   t[n] = o[n];
   return t.target || (t.target = z), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
   s.filter ? s.filter(t, o) : t;
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function() {
     return this !== l() && this.focus ? (this.focus(), !1) : void 0;
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     return this === l() && this.blur ? (this.blur(), !1) : void 0;
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function() {
     return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), 
     !1) : void 0;
    },
    _default: function(t) {
     return ot.nodeName(t.target, "a");
    }
   },
   beforeunload: {
    postDispatch: function(t) {
     t.result !== e && (t.originalEvent.returnValue = t.result);
    }
   }
  },
  simulate: function(t, e, n, r) {
   var i = ot.extend(new ot.Event(), n, {
    type: t,
    isSimulated: !0,
    originalEvent: {}
   });
   r ? ot.event.trigger(i, null, e) : ot.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault();
  }
 }, ot.removeEvent = function(t, e, n) {
  t.removeEventListener && t.removeEventListener(e, n, !1);
 }, ot.Event = function(t, e) {
  return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
  this.isDefaultPrevented = t.defaultPrevented || t.getPreventDefault && t.getPreventDefault() ? s : a) : this.type = t, 
  e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void (this[ot.expando] = !0)) : new ot.Event(t, e);
 }, ot.Event.prototype = {
  isDefaultPrevented: a,
  isPropagationStopped: a,
  isImmediatePropagationStopped: a,
  preventDefault: function() {
   var t = this.originalEvent;
   this.isDefaultPrevented = s, t && t.preventDefault && t.preventDefault();
  },
  stopPropagation: function() {
   var t = this.originalEvent;
   this.isPropagationStopped = s, t && t.stopPropagation && t.stopPropagation();
  },
  stopImmediatePropagation: function() {
   this.isImmediatePropagationStopped = s, this.stopPropagation();
  }
 }, ot.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
 }, function(t, e) {
  ot.event.special[t] = {
   delegateType: e,
   bindType: e,
   handle: function(t) {
    var n, r = this, i = t.relatedTarget, o = t.handleObj;
    return (!i || i !== r && !ot.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), 
    t.type = e), n;
   }
  };
 }), ot.support.focusinBubbles || ot.each({
  focus: "focusin",
  blur: "focusout"
 }, function(t, e) {
  var n = 0, r = function(t) {
   ot.event.simulate(e, t.target, ot.event.fix(t), !0);
  };
  ot.event.special[e] = {
   setup: function() {
    0 === n++ && z.addEventListener(t, r, !0);
   },
   teardown: function() {
    0 === --n && z.removeEventListener(t, r, !0);
   }
  };
 }), ot.fn.extend({
  on: function(t, n, r, i, o) {
   var s, l;
   if ("object" == typeof t) {
    "string" != typeof n && (r = r || n, n = e);
    for (l in t) this.on(l, n, r, t[l], o);
    return this;
   }
   if (null == r && null == i ? (i = n, r = n = e) : null == i && ("string" == typeof n ? (i = r, 
   r = e) : (i = r, r = n, n = e)), i === !1) i = a; else if (!i) return this;
   return 1 === o && (s = i, i = function(t) {
    return ot().off(t), s.apply(this, arguments);
   }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
    ot.event.add(this, t, i, r, n);
   });
  },
  one: function(t, e, n, r) {
   return this.on(t, e, n, r, 1);
  },
  off: function(t, n, r) {
   var i, o;
   if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
   this;
   if ("object" == typeof t) {
    for (o in t) this.off(o, n, t[o]);
    return this;
   }
   return (n === !1 || "function" == typeof n) && (r = n, n = e), r === !1 && (r = a), 
   this.each(function() {
    ot.event.remove(this, t, r, n);
   });
  },
  trigger: function(t, e) {
   return this.each(function() {
    ot.event.trigger(t, e, this);
   });
  },
  triggerHandler: function(t, e) {
   var n = this[0];
   return n ? ot.event.trigger(t, e, n, !0) : void 0;
  }
 });
 var jt = /^.[^:#\[\.,]*$/, Dt = /^(?:parents|prev(?:Until|All))/, At = ot.expr.match.needsContext, Ot = {
  children: !0,
  contents: !0,
  next: !0,
  prev: !0
 };
 ot.fn.extend({
  find: function(t) {
   var e, n = [], r = this, i = r.length;
   if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
    for (e = 0; i > e; e++) if (ot.contains(r[e], this)) return !0;
   }));
   for (e = 0; i > e; e++) ot.find(t, r[e], n);
   return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, 
   n;
  },
  has: function(t) {
   var e = ot(t, this), n = e.length;
   return this.filter(function() {
    for (var t = 0; n > t; t++) if (ot.contains(this, e[t])) return !0;
   });
  },
  not: function(t) {
   return this.pushStack(c(this, t || [], !0));
  },
  filter: function(t) {
   return this.pushStack(c(this, t || [], !1));
  },
  is: function(t) {
   return !!c(this, "string" == typeof t && At.test(t) ? ot(t) : t || [], !1).length;
  },
  closest: function(t, e) {
   for (var n, r = 0, i = this.length, o = [], s = At.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
    n = o.push(n);
    break;
   }
   return this.pushStack(o.length > 1 ? ot.unique(o) : o);
  },
  index: function(t) {
   return t ? "string" == typeof t ? et.call(ot(t), this[0]) : et.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  },
  add: function(t, e) {
   var n = "string" == typeof t ? ot(t, e) : ot.makeArray(t && t.nodeType ? [ t ] : t), r = ot.merge(this.get(), n);
   return this.pushStack(ot.unique(r));
  },
  addBack: function(t) {
   return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }
 }), ot.each({
  parent: function(t) {
   var e = t.parentNode;
   return e && 11 !== e.nodeType ? e : null;
  },
  parents: function(t) {
   return ot.dir(t, "parentNode");
  },
  parentsUntil: function(t, e, n) {
   return ot.dir(t, "parentNode", n);
  },
  next: function(t) {
   return u(t, "nextSibling");
  },
  prev: function(t) {
   return u(t, "previousSibling");
  },
  nextAll: function(t) {
   return ot.dir(t, "nextSibling");
  },
  prevAll: function(t) {
   return ot.dir(t, "previousSibling");
  },
  nextUntil: function(t, e, n) {
   return ot.dir(t, "nextSibling", n);
  },
  prevUntil: function(t, e, n) {
   return ot.dir(t, "previousSibling", n);
  },
  siblings: function(t) {
   return ot.sibling((t.parentNode || {}).firstChild, t);
  },
  children: function(t) {
   return ot.sibling(t.firstChild);
  },
  contents: function(t) {
   return t.contentDocument || ot.merge([], t.childNodes);
  }
 }, function(t, e) {
  ot.fn[t] = function(n, r) {
   var i = ot.map(this, e, n);
   return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), 
   this.length > 1 && (Ot[t] || ot.unique(i), Dt.test(t) && i.reverse()), this.pushStack(i);
  };
 }), ot.extend({
  filter: function(t, e, n) {
   var r = e[0];
   return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ot.find.matchesSelector(r, t) ? [ r ] : [] : ot.find.matches(t, ot.grep(e, function(t) {
    return 1 === t.nodeType;
   }));
  },
  dir: function(t, n, r) {
   for (var i = [], o = r !== e; (t = t[n]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
    if (o && ot(t).is(r)) break;
    i.push(t);
   }
   return i;
  },
  sibling: function(t, e) {
   for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
   return n;
  }
 });
 var _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, $t = /<([\w:]+)/, Lt = /<|&#?\w+;/, It = /<(?:script|style|link)/i, Rt = /^(?:checkbox|radio)$/i, qt = /checked\s*(?:[^=]|=\s*.checked.)/i, Pt = /^$|\/(?:java|ecma)script/i, Ft = /^true\/(.*)/, Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ht = {
  option: [ 1, "<select multiple='multiple'>", "</select>" ],
  thead: [ 1, "<table>", "</table>" ],
  col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  _default: [ 0, "", "" ]
 };
 Ht.optgroup = Ht.option, Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, 
 Ht.th = Ht.td, ot.fn.extend({
  text: function(t) {
   return ot.access(this, function(t) {
    return t === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(t));
   }, null, t, arguments.length);
  },
  append: function() {
   return this.domManip(arguments, function(t) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var e = p(this, t);
     e.appendChild(t);
    }
   });
  },
  prepend: function() {
   return this.domManip(arguments, function(t) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var e = p(this, t);
     e.insertBefore(t, e.firstChild);
    }
   });
  },
  before: function() {
   return this.domManip(arguments, function(t) {
    this.parentNode && this.parentNode.insertBefore(t, this);
   });
  },
  after: function() {
   return this.domManip(arguments, function(t) {
    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
   });
  },
  remove: function(t, e) {
   for (var n, r = t ? ot.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || ot.cleanData(m(n)), 
   n.parentNode && (e && ot.contains(n.ownerDocument, n) && d(m(n, "script")), n.parentNode.removeChild(n));
   return this;
  },
  empty: function() {
   for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(m(t, !1)), 
   t.textContent = "");
   return this;
  },
  clone: function(t, e) {
   return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
    return ot.clone(this, t, e);
   });
  },
  html: function(t) {
   return ot.access(this, function(t) {
    var n = this[0] || {}, r = 0, i = this.length;
    if (t === e && 1 === n.nodeType) return n.innerHTML;
    if ("string" == typeof t && !It.test(t) && !Ht[($t.exec(t) || [ "", "" ])[1].toLowerCase()]) {
     t = t.replace(_t, "<$1></$2>");
     try {
      for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ot.cleanData(m(n, !1)), 
      n.innerHTML = t);
      n = 0;
     } catch (o) {}
    }
    n && this.empty().append(t);
   }, null, t, arguments.length);
  },
  replaceWith: function() {
   var t = ot.map(this, function(t) {
    return [ t.nextSibling, t.parentNode ];
   }), e = 0;
   return this.domManip(arguments, function(n) {
    var r = t[e++], i = t[e++];
    i && (r && r.parentNode !== i && (r = this.nextSibling), ot(this).remove(), i.insertBefore(n, r));
   }, !0), e ? this : this.remove();
  },
  detach: function(t) {
   return this.remove(t, !0);
  },
  domManip: function(t, e, n) {
   t = V.apply([], t);
   var r, i, o, s, a, l, u = 0, c = this.length, p = this, d = c - 1, g = t[0], v = ot.isFunction(g);
   if (v || !(1 >= c || "string" != typeof g || ot.support.checkClone) && qt.test(g)) return this.each(function(r) {
    var i = p.eq(r);
    v && (t[0] = g.call(this, r, i.html())), i.domManip(t, e, n);
   });
   if (c && (r = ot.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 
   1 === r.childNodes.length && (r = i), i)) {
    for (o = ot.map(m(r, "script"), f), s = o.length; c > u; u++) a = r, u !== d && (a = ot.clone(a, !0, !0), 
    s && ot.merge(o, m(a, "script"))), e.call(this[u], a, u);
    if (s) for (l = o[o.length - 1].ownerDocument, ot.map(o, h), u = 0; s > u; u++) a = o[u], 
    Pt.test(a.type || "") && !mt.access(a, "globalEval") && ot.contains(l, a) && (a.src ? ot._evalUrl(a.src) : ot.globalEval(a.textContent.replace(Mt, "")));
   }
   return this;
  }
 }), ot.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(t, e) {
  ot.fn[t] = function(t) {
   for (var n, r = [], i = ot(t), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), 
   ot(i[s])[e](n), Z.apply(r, n.get());
   return this.pushStack(r);
  };
 }), ot.extend({
  clone: function(t, e, n) {
   var r, i, o, s, a = t.cloneNode(!0), l = ot.contains(t.ownerDocument, t);
   if (!(ot.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (s = m(a), 
   o = m(t), r = 0, i = o.length; i > r; r++) v(o[r], s[r]);
   if (e) if (n) for (o = o || m(t), s = s || m(a), r = 0, i = o.length; i > r; r++) g(o[r], s[r]); else g(t, a);
   return s = m(a, "script"), s.length > 0 && d(s, !l && m(t, "script")), a;
  },
  buildFragment: function(t, e, n, r) {
   for (var i, o, s, a, l, u, c = 0, p = t.length, f = e.createDocumentFragment(), h = []; p > c; c++) if (i = t[c], 
   i || 0 === i) if ("object" === ot.type(i)) ot.merge(h, i.nodeType ? [ i ] : i); else if (Lt.test(i)) {
    for (o = o || f.appendChild(e.createElement("div")), s = ($t.exec(i) || [ "", "" ])[1].toLowerCase(), 
    a = Ht[s] || Ht._default, o.innerHTML = a[1] + i.replace(_t, "<$1></$2>") + a[2], 
    u = a[0]; u--; ) o = o.lastChild;
    ot.merge(h, o.childNodes), o = f.firstChild, o.textContent = "";
   } else h.push(e.createTextNode(i));
   for (f.textContent = "", c = 0; i = h[c++]; ) if ((!r || -1 === ot.inArray(i, r)) && (l = ot.contains(i.ownerDocument, i), 
   o = m(f.appendChild(i), "script"), l && d(o), n)) for (u = 0; i = o[u++]; ) Pt.test(i.type || "") && n.push(i);
   return f;
  },
  cleanData: function(t) {
   for (var n, r, o, s, a, l, u = ot.event.special, c = 0; (r = t[c]) !== e; c++) {
    if (i.accepts(r) && (a = r[mt.expando], a && (n = mt.cache[a]))) {
     if (o = Object.keys(n.events || {}), o.length) for (l = 0; (s = o[l]) !== e; l++) u[s] ? ot.event.remove(r, s) : ot.removeEvent(r, s, n.handle);
     mt.cache[a] && delete mt.cache[a];
    }
    delete gt.cache[r[gt.expando]];
   }
  },
  _evalUrl: function(t) {
   return ot.ajax({
    url: t,
    type: "GET",
    dataType: "script",
    async: !1,
    global: !1,
    "throws": !0
   });
  }
 }), ot.fn.extend({
  wrapAll: function(t) {
   var e;
   return ot.isFunction(t) ? this.each(function(e) {
    ot(this).wrapAll(t.call(this, e));
   }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
   e.map(function() {
    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
    return t;
   }).append(this)), this);
  },
  wrapInner: function(t) {
   return ot.isFunction(t) ? this.each(function(e) {
    ot(this).wrapInner(t.call(this, e));
   }) : this.each(function() {
    var e = ot(this), n = e.contents();
    n.length ? n.wrapAll(t) : e.append(t);
   });
  },
  wrap: function(t) {
   var e = ot.isFunction(t);
   return this.each(function(n) {
    ot(this).wrapAll(e ? t.call(this, n) : t);
   });
  },
  unwrap: function() {
   return this.parent().each(function() {
    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
   }).end();
  }
 });
 var Ut, Bt, Wt = /^(none|table(?!-c[ea]).+)/, zt = /^margin/, Xt = new RegExp("^(" + st + ")(.*)$", "i"), Jt = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"), Gt = new RegExp("^([+-])=(" + st + ")", "i"), Yt = {
  BODY: "block"
 }, Qt = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
 }, Kt = {
  letterSpacing: 0,
  fontWeight: 400
 }, Vt = [ "Top", "Right", "Bottom", "Left" ], Zt = [ "Webkit", "O", "Moz", "ms" ];
 ot.fn.extend({
  css: function(t, n) {
   return ot.access(this, function(t, n, r) {
    var i, o, s = {}, a = 0;
    if (ot.isArray(n)) {
     for (i = x(t), o = n.length; o > a; a++) s[n[a]] = ot.css(t, n[a], !1, i);
     return s;
    }
    return r !== e ? ot.style(t, n, r) : ot.css(t, n);
   }, t, n, arguments.length > 1);
  },
  show: function() {
   return w(this, !0);
  },
  hide: function() {
   return w(this);
  },
  toggle: function(t) {
   return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
    b(this) ? ot(this).show() : ot(this).hide();
   });
  }
 }), ot.extend({
  cssHooks: {
   opacity: {
    get: function(t, e) {
     if (e) {
      var n = Ut(t, "opacity");
      return "" === n ? "1" : n;
     }
    }
   }
  },
  cssNumber: {
   columnCount: !0,
   fillOpacity: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": "cssFloat"
  },
  style: function(t, n, r, i) {
   if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
    var o, s, a, l = ot.camelCase(n), u = t.style;
    return n = ot.cssProps[l] || (ot.cssProps[l] = y(u, l)), a = ot.cssHooks[n] || ot.cssHooks[l], 
    r === e ? a && "get" in a && (o = a.get(t, !1, i)) !== e ? o : u[n] : (s = typeof r, 
    "string" === s && (o = Gt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ot.css(t, n)), 
    s = "number"), null == r || "number" === s && isNaN(r) || ("number" !== s || ot.cssNumber[l] || (r += "px"), 
    ot.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), 
    a && "set" in a && (r = a.set(t, r, i)) === e || (u[n] = r)), void 0);
   }
  },
  css: function(t, n, r, i) {
   var o, s, a, l = ot.camelCase(n);
   return n = ot.cssProps[l] || (ot.cssProps[l] = y(t.style, l)), a = ot.cssHooks[n] || ot.cssHooks[l], 
   a && "get" in a && (o = a.get(t, !0, r)), o === e && (o = Ut(t, n, i)), "normal" === o && n in Kt && (o = Kt[n]), 
   "" === r || r ? (s = parseFloat(o), r === !0 || ot.isNumeric(s) ? s || 0 : o) : o;
  }
 }), Ut = function(t, n, r) {
  var i, o, s, a = r || x(t), l = a ? a.getPropertyValue(n) || a[n] : e, u = t.style;
  return a && ("" !== l || ot.contains(t.ownerDocument, t) || (l = ot.style(t, n)), 
  Jt.test(l) && zt.test(n) && (i = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, 
  l = a.width, u.width = i, u.minWidth = o, u.maxWidth = s)), l;
 }, ot.each([ "height", "width" ], function(t, e) {
  ot.cssHooks[e] = {
   get: function(t, n, r) {
    return n ? 0 === t.offsetWidth && Wt.test(ot.css(t, "display")) ? ot.swap(t, Qt, function() {
     return S(t, e, r);
    }) : S(t, e, r) : void 0;
   },
   set: function(t, n, r) {
    var i = r && x(t);
    return T(t, n, r ? C(t, e, r, ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, i), i) : 0);
   }
  };
 }), ot(function() {
  ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
   get: function(t, e) {
    return e ? ot.swap(t, {
     display: "inline-block"
    }, Ut, [ t, "marginRight" ]) : void 0;
   }
  }), !ot.support.pixelPosition && ot.fn.position && ot.each([ "top", "left" ], function(t, e) {
   ot.cssHooks[e] = {
    get: function(t, n) {
     return n ? (n = Ut(t, e), Jt.test(n) ? ot(t).position()[e] + "px" : n) : void 0;
    }
   };
  });
 }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function(t) {
  return t.offsetWidth <= 0 && t.offsetHeight <= 0;
 }, ot.expr.filters.visible = function(t) {
  return !ot.expr.filters.hidden(t);
 }), ot.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(t, e) {
  ot.cssHooks[t + e] = {
   expand: function(n) {
    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[t + Vt[r] + e] = o[r] || o[r - 2] || o[0];
    return i;
   }
  }, zt.test(t) || (ot.cssHooks[t + e].set = T);
 });
 var te = /%20/g, ee = /\[\]$/, ne = /\r?\n/g, re = /^(?:submit|button|image|reset|file)$/i, ie = /^(?:input|select|textarea|keygen)/i;
 ot.fn.extend({
  serialize: function() {
   return ot.param(this.serializeArray());
  },
  serializeArray: function() {
   return this.map(function() {
    var t = ot.prop(this, "elements");
    return t ? ot.makeArray(t) : this;
   }).filter(function() {
    var t = this.type;
    return this.name && !ot(this).is(":disabled") && ie.test(this.nodeName) && !re.test(t) && (this.checked || !Rt.test(t));
   }).map(function(t, e) {
    var n = ot(this).val();
    return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
     return {
      name: e.name,
      value: t.replace(ne, "\r\n")
     };
    }) : {
     name: e.name,
     value: n.replace(ne, "\r\n")
    };
   }).get();
  }
 }), ot.param = function(t, n) {
  var r, i = [], o = function(t, e) {
   e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
  };
  if (n === e && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
   o(this.name, this.value);
  }); else for (r in t) N(r, t[r], n, o);
  return i.join("&").replace(te, "+");
 }, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
  ot.fn[e] = function(t, n) {
   return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
  };
 }), ot.fn.extend({
  hover: function(t, e) {
   return this.mouseenter(t).mouseleave(e || t);
  },
  bind: function(t, e, n) {
   return this.on(t, null, e, n);
  },
  unbind: function(t, e) {
   return this.off(t, null, e);
  },
  delegate: function(t, e, n, r) {
   return this.on(e, t, n, r);
  },
  undelegate: function(t, e, n) {
   return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
  }
 });
 var oe, se, ae = ot.now(), le = /\?/, ue = /#.*$/, ce = /([?&])_=[^&]*/, pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, he = /^(?:GET|HEAD)$/, de = /^\/\//, ge = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, me = ot.fn.load, ve = {}, ye = {}, be = "*/".concat("*");
 try {
  se = W.href;
 } catch (xe) {
  se = z.createElement("a"), se.href = "", se = se.href;
 }
 oe = ge.exec(se.toLowerCase()) || [], ot.fn.load = function(t, n, r) {
  if ("string" != typeof t && me) return me.apply(this, arguments);
  var i, o, s, a = this, l = t.indexOf(" ");
  return l >= 0 && (i = t.slice(l), t = t.slice(0, l)), ot.isFunction(n) ? (r = n, 
  n = e) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ot.ajax({
   url: t,
   type: o,
   dataType: "html",
   data: n
  }).done(function(t) {
   s = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t);
  }).complete(r && function(t, e) {
   a.each(r, s || [ t.responseText, e, t ]);
  }), this;
 }, ot.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
  ot.fn[e] = function(t) {
   return this.on(e, t);
  };
 }), ot.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: se,
   type: "GET",
   isLocal: fe.test(oe[1]),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": be,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /xml/,
    html: /html/,
    json: /json/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
   },
   converters: {
    "* text": String,
    "text html": !0,
    "text json": ot.parseJSON,
    "text xml": ot.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(t, e) {
   return e ? A(A(t, ot.ajaxSettings), e) : A(ot.ajaxSettings, t);
  },
  ajaxPrefilter: j(ve),
  ajaxTransport: j(ye),
  ajax: function(t, n) {
   function r(t, n, r, a) {
    var u, p, y, b, w, C = n;
    2 !== x && (x = 2, l && clearTimeout(l), i = e, s = a || "", T.readyState = t > 0 ? 4 : 0, 
    u = t >= 200 && 300 > t || 304 === t, r && (b = O(f, T, r)), b = _(f, b, T, u), 
    u ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), 
    w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
    p = b.data, y = b.error, u = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), 
    T.status = t, T.statusText = (n || C) + "", u ? g.resolveWith(h, [ p, C, T ]) : g.rejectWith(h, [ T, C, y ]), 
    T.statusCode(v), v = e, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [ T, f, u ? p : y ]), 
    m.fireWith(h, [ T, C ]), c && (d.trigger("ajaxComplete", [ T, f ]), --ot.active || ot.event.trigger("ajaxStop")));
   }
   "object" == typeof t && (n = t, t = e), n = n || {};
   var i, o, s, a, l, u, c, p, f = ot.ajaxSetup({}, n), h = f.context || f, d = f.context && (h.nodeType || h.jquery) ? ot(h) : ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
    readyState: 0,
    getResponseHeader: function(t) {
     var e;
     if (2 === x) {
      if (!a) for (a = {}; e = pe.exec(s); ) a[e[1].toLowerCase()] = e[2];
      e = a[t.toLowerCase()];
     }
     return null == e ? null : e;
    },
    getAllResponseHeaders: function() {
     return 2 === x ? s : null;
    },
    setRequestHeader: function(t, e) {
     var n = t.toLowerCase();
     return x || (t = b[n] = b[n] || t, y[t] = e), this;
    },
    overrideMimeType: function(t) {
     return x || (f.mimeType = t), this;
    },
    statusCode: function(t) {
     var e;
     if (t) if (2 > x) for (e in t) v[e] = [ v[e], t[e] ]; else T.always(t[T.status]);
     return this;
    },
    abort: function(t) {
     var e = t || w;
     return i && i.abort(e), r(0, e), this;
    }
   };
   if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || se) + "").replace(ue, "").replace(de, oe[1] + "//"), 
   f.type = n.method || n.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(at) || [ "" ], 
   null == f.crossDomain && (u = ge.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === oe[1] && u[2] === oe[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (oe[3] || ("http:" === oe[1] ? "80" : "443")))), 
   f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), 
   D(ve, f, n, T), 2 === x) return T;
   c = f.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), 
   f.hasContent = !he.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (le.test(o) ? "&" : "?") + f.data, 
   delete f.data), f.cache === !1 && (f.url = ce.test(o) ? o.replace(ce, "$1_=" + ae++) : o + (le.test(o) ? "&" : "?") + "_=" + ae++)), 
   f.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), 
   ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), 
   T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + be + "; q=0.01" : "") : f.accepts["*"]);
   for (p in f.headers) T.setRequestHeader(p, f.headers[p]);
   if (f.beforeSend && (f.beforeSend.call(h, T, f) === !1 || 2 === x)) return T.abort();
   w = "abort";
   for (p in {
    success: 1,
    error: 1,
    complete: 1
   }) T[p](f[p]);
   if (i = D(ye, f, n, T)) {
    T.readyState = 1, c && d.trigger("ajaxSend", [ T, f ]), f.async && f.timeout > 0 && (l = setTimeout(function() {
     T.abort("timeout");
    }, f.timeout));
    try {
     x = 1, i.send(y, r);
    } catch (C) {
     if (!(2 > x)) throw C;
     r(-1, C);
    }
   } else r(-1, "No Transport");
   return T;
  },
  getJSON: function(t, e, n) {
   return ot.get(t, e, n, "json");
  },
  getScript: function(t, n) {
   return ot.get(t, e, n, "script");
  }
 }), ot.each([ "get", "post" ], function(t, n) {
  ot[n] = function(t, r, i, o) {
   return ot.isFunction(r) && (o = o || i, i = r, r = e), ot.ajax({
    url: t,
    type: n,
    dataType: o,
    data: r,
    success: i
   });
  };
 }), ot.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /(?:java|ecma)script/
  },
  converters: {
   "text script": function(t) {
    return ot.globalEval(t), t;
   }
  }
 }), ot.ajaxPrefilter("script", function(t) {
  t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET");
 }), ot.ajaxTransport("script", function(t) {
  if (t.crossDomain) {
   var e, n;
   return {
    send: function(r, i) {
     e = ot("<script>").prop({
      async: !0,
      charset: t.scriptCharset,
      src: t.url
     }).on("load error", n = function(t) {
      e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type);
     }), z.head.appendChild(e[0]);
    },
    abort: function() {
     n && n();
    }
   };
  }
 });
 var we = [], Te = /(=)\?(?=&|$)|\?\?/;
 ot.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var t = we.pop() || ot.expando + "_" + ae++;
   return this[t] = !0, t;
  }
 }), ot.ajaxPrefilter("json jsonp", function(n, r, i) {
  var o, s, a, l = n.jsonp !== !1 && (Te.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Te.test(n.data) && "data");
  return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
  l ? n[l] = n[l].replace(Te, "$1" + o) : n.jsonp !== !1 && (n.url += (le.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
  n.converters["script json"] = function() {
   return a || ot.error(o + " was not called"), a[0];
  }, n.dataTypes[0] = "json", s = t[o], t[o] = function() {
   a = arguments;
  }, i.always(function() {
   t[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, we.push(o)), a && ot.isFunction(s) && s(a[0]), 
   a = s = e;
  }), "script") : void 0;
 }), ot.ajaxSettings.xhr = function() {
  try {
   return new XMLHttpRequest();
  } catch (t) {}
 };
 var Ce = ot.ajaxSettings.xhr(), Se = {
  0: 200,
  1223: 204
 }, ke = 0, Ee = {};
 t.ActiveXObject && ot(t).on("unload", function() {
  for (var t in Ee) Ee[t]();
  Ee = e;
 }), ot.support.cors = !!Ce && "withCredentials" in Ce, ot.support.ajax = Ce = !!Ce, 
 ot.ajaxTransport(function(t) {
  var n;
  return ot.support.cors || Ce && !t.crossDomain ? {
   send: function(r, i) {
    var o, s, a = t.xhr();
    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
    for (o in r) a.setRequestHeader(o, r[o]);
    n = function(t) {
     return function() {
      n && (delete Ee[s], n = a.onload = a.onerror = null, "abort" === t ? a.abort() : "error" === t ? i(a.status || 404, a.statusText) : i(Se[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
       text: a.responseText
      } : e, a.getAllResponseHeaders()));
     };
    }, a.onload = n(), a.onerror = n("error"), n = Ee[s = ke++] = n("abort"), a.send(t.hasContent && t.data || null);
   },
   abort: function() {
    n && n();
   }
  } : void 0;
 });
 var Ne, je, De = /^(?:toggle|show|hide)$/, Ae = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"), Oe = /queueHooks$/, _e = [ q ], $e = {
  "*": [ function(t, e) {
   var n = this.createTween(t, e), r = n.cur(), i = Ae.exec(e), o = i && i[3] || (ot.cssNumber[t] ? "" : "px"), s = (ot.cssNumber[t] || "px" !== o && +r) && Ae.exec(ot.css(n.elem, t)), a = 1, l = 20;
   if (s && s[3] !== o) {
    o = o || s[3], i = i || [], s = +r || 1;
    do a = a || ".5", s /= a, ot.style(n.elem, t, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --l);
   }
   return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), 
   n;
  } ]
 };
 ot.Animation = ot.extend(I, {
  tweener: function(t, e) {
   ot.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
   for (var n, r = 0, i = t.length; i > r; r++) n = t[r], $e[n] = $e[n] || [], $e[n].unshift(e);
  },
  prefilter: function(t, e) {
   e ? _e.unshift(t) : _e.push(t);
  }
 }), ot.Tween = P, P.prototype = {
  constructor: P,
  init: function(t, e, n, r, i, o) {
   this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), 
   this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px");
  },
  cur: function() {
   var t = P.propHooks[this.prop];
   return t && t.get ? t.get(this) : P.propHooks._default.get(this);
  },
  run: function(t) {
   var e, n = P.propHooks[this.prop];
   return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
   this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
   n && n.set ? n.set(this) : P.propHooks._default.set(this), this;
  }
 }, P.prototype.init.prototype = P.prototype, P.propHooks = {
  _default: {
   get: function(t) {
    var e;
    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), 
    e && "auto" !== e ? e : 0) : t.elem[t.prop];
   },
   set: function(t) {
    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
   }
  }
 }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
  set: function(t) {
   t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
  }
 }, ot.each([ "toggle", "show", "hide" ], function(t, e) {
  var n = ot.fn[e];
  ot.fn[e] = function(t, r, i) {
   return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, r, i);
  };
 }), ot.fn.extend({
  fadeTo: function(t, e, n, r) {
   return this.filter(b).css("opacity", 0).show().end().animate({
    opacity: e
   }, t, n, r);
  },
  animate: function(t, e, n, r) {
   var i = ot.isEmptyObject(t), o = ot.speed(e, n, r), s = function() {
    var e = I(this, ot.extend({}, t), o);
    (i || mt.get(this, "finish")) && e.stop(!0);
   };
   return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
  },
  stop: function(t, n, r) {
   var i = function(t) {
    var e = t.stop;
    delete t.stop, e(r);
   };
   return "string" != typeof t && (r = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), 
   this.each(function() {
    var e = !0, n = null != t && t + "queueHooks", o = ot.timers, s = mt.get(this);
    if (n) s[n] && s[n].stop && i(s[n]); else for (n in s) s[n] && s[n].stop && Oe.test(n) && i(s[n]);
    for (n = o.length; n--; ) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(r), 
    e = !1, o.splice(n, 1));
    (e || !r) && ot.dequeue(this, t);
   });
  },
  finish: function(t) {
   return t !== !1 && (t = t || "fx"), this.each(function() {
    var e, n = mt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ot.timers, s = r ? r.length : 0;
    for (n.finish = !0, ot.queue(this, t, []), i && i.stop && i.stop.call(this, !0), 
    e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
    o.splice(e, 1));
    for (e = 0; s > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
    delete n.finish;
   });
  }
 }), ot.each({
  slideDown: F("show"),
  slideUp: F("hide"),
  slideToggle: F("toggle"),
  fadeIn: {
   opacity: "show"
  },
  fadeOut: {
   opacity: "hide"
  },
  fadeToggle: {
   opacity: "toggle"
  }
 }, function(t, e) {
  ot.fn[t] = function(t, n, r) {
   return this.animate(e, t, n, r);
  };
 }), ot.speed = function(t, e, n) {
  var r = t && "object" == typeof t ? ot.extend({}, t) : {
   complete: n || !n && e || ot.isFunction(t) && t,
   duration: t,
   easing: n && e || e && !ot.isFunction(e) && e
  };
  return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, 
  (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
   ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue);
  }, r;
 }, ot.easing = {
  linear: function(t) {
   return t;
  },
  swing: function(t) {
   return .5 - Math.cos(t * Math.PI) / 2;
  }
 }, ot.timers = [], ot.fx = P.prototype.init, ot.fx.tick = function() {
  var t, n = ot.timers, r = 0;
  for (Ne = ot.now(); r < n.length; r++) t = n[r], t() || n[r] !== t || n.splice(r--, 1);
  n.length || ot.fx.stop(), Ne = e;
 }, ot.fx.timer = function(t) {
  t() && ot.timers.push(t) && ot.fx.start();
 }, ot.fx.interval = 13, ot.fx.start = function() {
  je || (je = setInterval(ot.fx.tick, ot.fx.interval));
 }, ot.fx.stop = function() {
  clearInterval(je), je = null;
 }, ot.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function(t) {
  return ot.grep(ot.timers, function(e) {
   return t === e.elem;
  }).length;
 }), ot.fn.offset = function(t) {
  if (arguments.length) return t === e ? this : this.each(function(e) {
   ot.offset.setOffset(this, t, e);
  });
  var n, r, i = this[0], o = {
   top: 0,
   left: 0
  }, s = i && i.ownerDocument;
  if (s) return n = s.documentElement, ot.contains(n, i) ? (typeof i.getBoundingClientRect !== B && (o = i.getBoundingClientRect()), 
  r = M(s), {
   top: o.top + r.pageYOffset - n.clientTop,
   left: o.left + r.pageXOffset - n.clientLeft
  }) : o;
 }, ot.offset = {
  setOffset: function(t, e, n) {
   var r, i, o, s, a, l, u, c = ot.css(t, "position"), p = ot(t), f = {};
   "static" === c && (t.style.position = "relative"), a = p.offset(), o = ot.css(t, "top"), 
   l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, 
   u ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), 
   ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + s), 
   null != e.left && (f.left = e.left - a.left + i), "using" in e ? e.using.call(t, f) : p.css(f);
  }
 }, ot.fn.extend({
  position: function() {
   if (this[0]) {
    var t, e, n = this[0], r = {
     top: 0,
     left: 0
    };
    return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
    e = this.offset(), ot.nodeName(t[0], "html") || (r = t.offset()), r.top += ot.css(t[0], "borderTopWidth", !0), 
    r.left += ot.css(t[0], "borderLeftWidth", !0)), {
     top: e.top - r.top - ot.css(n, "marginTop", !0),
     left: e.left - r.left - ot.css(n, "marginLeft", !0)
    };
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var t = this.offsetParent || X; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position"); ) t = t.offsetParent;
    return t || X;
   });
  }
 }), ot.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(n, r) {
  var i = "pageYOffset" === r;
  ot.fn[n] = function(o) {
   return ot.access(this, function(n, o, s) {
    var a = M(n);
    return s === e ? a ? a[r] : n[o] : void (a ? a.scrollTo(i ? t.pageXOffset : s, i ? s : t.pageYOffset) : n[o] = s);
   }, n, o, arguments.length, null);
  };
 }), ot.each({
  Height: "height",
  Width: "width"
 }, function(t, n) {
  ot.each({
   padding: "inner" + t,
   content: n,
   "": "outer" + t
  }, function(r, i) {
   ot.fn[i] = function(i, o) {
    var s = arguments.length && (r || "boolean" != typeof i), a = r || (i === !0 || o === !0 ? "margin" : "border");
    return ot.access(this, function(n, r, i) {
     var o;
     return ot.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, 
     Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : i === e ? ot.css(n, r, a) : ot.style(n, r, i, a);
    }, n, s ? i : e, s, null);
   };
  });
 }), ot.fn.size = function() {
  return this.length;
 }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function() {
  return ot;
 }), "object" == typeof t && "object" == typeof t.document && (t.jQuery = t.$ = ot);
}(window), function() {
 var t = this, e = t._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, s = r.push, a = r.slice, l = r.concat, u = i.toString, c = i.hasOwnProperty, p = r.forEach, f = r.map, h = r.reduce, d = r.reduceRight, g = r.filter, m = r.every, v = r.some, y = r.indexOf, b = r.lastIndexOf, x = Array.isArray, w = Object.keys, T = o.bind, C = function(t) {
  return t instanceof C ? t : this instanceof C ? void (this._wrapped = t) : new C(t);
 };
 "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), 
 exports._ = C) : t._ = C, C.VERSION = "1.5.1";
 var S = C.each = C.forEach = function(t, e, r) {
  if (null != t) if (p && t.forEach === p) t.forEach(e, r); else if (t.length === +t.length) {
   for (var i = 0, o = t.length; o > i; i++) if (e.call(r, t[i], i, t) === n) return;
  } else for (var s in t) if (C.has(t, s) && e.call(r, t[s], s, t) === n) return;
 };
 C.map = C.collect = function(t, e, n) {
  var r = [];
  return null == t ? r : f && t.map === f ? t.map(e, n) : (S(t, function(t, i, o) {
   r.push(e.call(n, t, i, o));
  }), r);
 };
 var k = "Reduce of empty array with no initial value";
 C.reduce = C.foldl = C.inject = function(t, e, n, r) {
  var i = arguments.length > 2;
  if (null == t && (t = []), h && t.reduce === h) return r && (e = C.bind(e, r)), 
  i ? t.reduce(e, n) : t.reduce(e);
  if (S(t, function(t, o, s) {
   i ? n = e.call(r, n, t, o, s) : (n = t, i = !0);
  }), !i) throw new TypeError(k);
  return n;
 }, C.reduceRight = C.foldr = function(t, e, n, r) {
  var i = arguments.length > 2;
  if (null == t && (t = []), d && t.reduceRight === d) return r && (e = C.bind(e, r)), 
  i ? t.reduceRight(e, n) : t.reduceRight(e);
  var o = t.length;
  if (o !== +o) {
   var s = C.keys(t);
   o = s.length;
  }
  if (S(t, function(a, l, u) {
   l = s ? s[--o] : --o, i ? n = e.call(r, n, t[l], l, u) : (n = t[l], i = !0);
  }), !i) throw new TypeError(k);
  return n;
 }, C.find = C.detect = function(t, e, n) {
  var r;
  return E(t, function(t, i, o) {
   return e.call(n, t, i, o) ? (r = t, !0) : void 0;
  }), r;
 }, C.filter = C.select = function(t, e, n) {
  var r = [];
  return null == t ? r : g && t.filter === g ? t.filter(e, n) : (S(t, function(t, i, o) {
   e.call(n, t, i, o) && r.push(t);
  }), r);
 }, C.reject = function(t, e, n) {
  return C.filter(t, function(t, r, i) {
   return !e.call(n, t, r, i);
  }, n);
 }, C.every = C.all = function(t, e, r) {
  e || (e = C.identity);
  var i = !0;
  return null == t ? i : m && t.every === m ? t.every(e, r) : (S(t, function(t, o, s) {
   return (i = i && e.call(r, t, o, s)) ? void 0 : n;
  }), !!i);
 };
 var E = C.some = C.any = function(t, e, r) {
  e || (e = C.identity);
  var i = !1;
  return null == t ? i : v && t.some === v ? t.some(e, r) : (S(t, function(t, o, s) {
   return i || (i = e.call(r, t, o, s)) ? n : void 0;
  }), !!i);
 };
 C.contains = C.include = function(t, e) {
  return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : E(t, function(t) {
   return t === e;
  });
 }, C.invoke = function(t, e) {
  var n = a.call(arguments, 2), r = C.isFunction(e);
  return C.map(t, function(t) {
   return (r ? e : t[e]).apply(t, n);
  });
 }, C.pluck = function(t, e) {
  return C.map(t, function(t) {
   return t[e];
  });
 }, C.where = function(t, e, n) {
  return C.isEmpty(e) ? n ? void 0 : [] : C[n ? "find" : "filter"](t, function(t) {
   for (var n in e) if (e[n] !== t[n]) return !1;
   return !0;
  });
 }, C.findWhere = function(t, e) {
  return C.where(t, e, !0);
 }, C.max = function(t, e, n) {
  if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
  if (!e && C.isEmpty(t)) return -(1 / 0);
  var r = {
   computed: -(1 / 0),
   value: -(1 / 0)
  };
  return S(t, function(t, i, o) {
   var s = e ? e.call(n, t, i, o) : t;
   s > r.computed && (r = {
    value: t,
    computed: s
   });
  }), r.value;
 }, C.min = function(t, e, n) {
  if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
  if (!e && C.isEmpty(t)) return 1 / 0;
  var r = {
   computed: 1 / 0,
   value: 1 / 0
  };
  return S(t, function(t, i, o) {
   var s = e ? e.call(n, t, i, o) : t;
   s < r.computed && (r = {
    value: t,
    computed: s
   });
  }), r.value;
 }, C.shuffle = function(t) {
  var e, n = 0, r = [];
  return S(t, function(t) {
   e = C.random(n++), r[n - 1] = r[e], r[e] = t;
  }), r;
 };
 var N = function(t) {
  return C.isFunction(t) ? t : function(e) {
   return e[t];
  };
 };
 C.sortBy = function(t, e, n) {
  var r = N(e);
  return C.pluck(C.map(t, function(t, e, i) {
   return {
    value: t,
    index: e,
    criteria: r.call(n, t, e, i)
   };
  }).sort(function(t, e) {
   var n = t.criteria, r = e.criteria;
   if (n !== r) {
    if (n > r || void 0 === n) return 1;
    if (r > n || void 0 === r) return -1;
   }
   return t.index < e.index ? -1 : 1;
  }), "value");
 };
 var j = function(t, e, n, r) {
  var i = {}, o = N(null == e ? C.identity : e);
  return S(t, function(e, s) {
   var a = o.call(n, e, s, t);
   r(i, a, e);
  }), i;
 };
 C.groupBy = function(t, e, n) {
  return j(t, e, n, function(t, e, n) {
   (C.has(t, e) ? t[e] : t[e] = []).push(n);
  });
 }, C.countBy = function(t, e, n) {
  return j(t, e, n, function(t, e) {
   C.has(t, e) || (t[e] = 0), t[e]++;
  });
 }, C.sortedIndex = function(t, e, n, r) {
  n = null == n ? C.identity : N(n);
  for (var i = n.call(r, e), o = 0, s = t.length; s > o; ) {
   var a = o + s >>> 1;
   n.call(r, t[a]) < i ? o = a + 1 : s = a;
  }
  return o;
 }, C.toArray = function(t) {
  return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : [];
 }, C.size = function(t) {
  return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length;
 }, C.first = C.head = C.take = function(t, e, n) {
  return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e);
 }, C.initial = function(t, e, n) {
  return a.call(t, 0, t.length - (null == e || n ? 1 : e));
 }, C.last = function(t, e, n) {
  return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0));
 }, C.rest = C.tail = C.drop = function(t, e, n) {
  return a.call(t, null == e || n ? 1 : e);
 }, C.compact = function(t) {
  return C.filter(t, C.identity);
 };
 var D = function(t, e, n) {
  return e && C.every(t, C.isArray) ? l.apply(n, t) : (S(t, function(t) {
   C.isArray(t) || C.isArguments(t) ? e ? s.apply(n, t) : D(t, e, n) : n.push(t);
  }), n);
 };
 C.flatten = function(t, e) {
  return D(t, e, []);
 }, C.without = function(t) {
  return C.difference(t, a.call(arguments, 1));
 }, C.uniq = C.unique = function(t, e, n, r) {
  C.isFunction(e) && (r = n, n = e, e = !1);
  var i = n ? C.map(t, n, r) : t, o = [], s = [];
  return S(i, function(n, r) {
   (e ? r && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(t[r]));
  }), o;
 }, C.union = function() {
  return C.uniq(C.flatten(arguments, !0));
 }, C.intersection = function(t) {
  var e = a.call(arguments, 1);
  return C.filter(C.uniq(t), function(t) {
   return C.every(e, function(e) {
    return C.indexOf(e, t) >= 0;
   });
  });
 }, C.difference = function(t) {
  var e = l.apply(r, a.call(arguments, 1));
  return C.filter(t, function(t) {
   return !C.contains(e, t);
  });
 }, C.zip = function() {
  for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = C.pluck(arguments, "" + n);
  return e;
 }, C.object = function(t, e) {
  if (null == t) return {};
  for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
  return n;
 }, C.indexOf = function(t, e, n) {
  if (null == t) return -1;
  var r = 0, i = t.length;
  if (n) {
   if ("number" != typeof n) return r = C.sortedIndex(t, e), t[r] === e ? r : -1;
   r = 0 > n ? Math.max(0, i + n) : n;
  }
  if (y && t.indexOf === y) return t.indexOf(e, n);
  for (;i > r; r++) if (t[r] === e) return r;
  return -1;
 }, C.lastIndexOf = function(t, e, n) {
  if (null == t) return -1;
  var r = null != n;
  if (b && t.lastIndexOf === b) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
  for (var i = r ? n : t.length; i--; ) if (t[i] === e) return i;
  return -1;
 }, C.range = function(t, e, n) {
  arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
  for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i; ) o[i++] = t, 
  t += n;
  return o;
 };
 var A = function() {};
 C.bind = function(t, e) {
  var n, r;
  if (T && t.bind === T) return T.apply(t, a.call(arguments, 1));
  if (!C.isFunction(t)) throw new TypeError();
  return n = a.call(arguments, 2), r = function() {
   if (!(this instanceof r)) return t.apply(e, n.concat(a.call(arguments)));
   A.prototype = t.prototype;
   var i = new A();
   A.prototype = null;
   var o = t.apply(i, n.concat(a.call(arguments)));
   return Object(o) === o ? o : i;
  };
 }, C.partial = function(t) {
  var e = a.call(arguments, 1);
  return function() {
   return t.apply(this, e.concat(a.call(arguments)));
  };
 }, C.bindAll = function(t) {
  var e = a.call(arguments, 1);
  if (0 === e.length) throw new Error("bindAll must be passed function names");
  return S(e, function(e) {
   t[e] = C.bind(t[e], t);
  }), t;
 }, C.memoize = function(t, e) {
  var n = {};
  return e || (e = C.identity), function() {
   var r = e.apply(this, arguments);
   return C.has(n, r) ? n[r] : n[r] = t.apply(this, arguments);
  };
 }, C.delay = function(t, e) {
  var n = a.call(arguments, 2);
  return setTimeout(function() {
   return t.apply(null, n);
  }, e);
 }, C.defer = function(t) {
  return C.delay.apply(C, [ t, 1 ].concat(a.call(arguments, 1)));
 }, C.throttle = function(t, e, n) {
  var r, i, o, s = null, a = 0;
  n || (n = {});
  var l = function() {
   a = n.leading === !1 ? 0 : new Date(), s = null, o = t.apply(r, i);
  };
  return function() {
   var u = new Date();
   a || n.leading !== !1 || (a = u);
   var c = e - (u - a);
   return r = this, i = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, o = t.apply(r, i)) : s || n.trailing === !1 || (s = setTimeout(l, c)), 
   o;
  };
 }, C.debounce = function(t, e, n) {
  var r, i = null;
  return function() {
   var o = this, s = arguments, a = function() {
    i = null, n || (r = t.apply(o, s));
   }, l = n && !i;
   return clearTimeout(i), i = setTimeout(a, e), l && (r = t.apply(o, s)), r;
  };
 }, C.once = function(t) {
  var e, n = !1;
  return function() {
   return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
  };
 }, C.wrap = function(t, e) {
  return function() {
   var n = [ t ];
   return s.apply(n, arguments), e.apply(this, n);
  };
 }, C.compose = function() {
  var t = arguments;
  return function() {
   for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [ t[n].apply(this, e) ];
   return e[0];
  };
 }, C.after = function(t, e) {
  return function() {
   return --t < 1 ? e.apply(this, arguments) : void 0;
  };
 }, C.keys = w || function(t) {
  if (t !== Object(t)) throw new TypeError("Invalid object");
  var e = [];
  for (var n in t) C.has(t, n) && e.push(n);
  return e;
 }, C.values = function(t) {
  var e = [];
  for (var n in t) C.has(t, n) && e.push(t[n]);
  return e;
 }, C.pairs = function(t) {
  var e = [];
  for (var n in t) C.has(t, n) && e.push([ n, t[n] ]);
  return e;
 }, C.invert = function(t) {
  var e = {};
  for (var n in t) C.has(t, n) && (e[t[n]] = n);
  return e;
 }, C.functions = C.methods = function(t) {
  var e = [];
  for (var n in t) C.isFunction(t[n]) && e.push(n);
  return e.sort();
 }, C.extend = function(t) {
  return S(a.call(arguments, 1), function(e) {
   if (e) for (var n in e) t[n] = e[n];
  }), t;
 }, C.pick = function(t) {
  var e = {}, n = l.apply(r, a.call(arguments, 1));
  return S(n, function(n) {
   n in t && (e[n] = t[n]);
  }), e;
 }, C.omit = function(t) {
  var e = {}, n = l.apply(r, a.call(arguments, 1));
  for (var i in t) C.contains(n, i) || (e[i] = t[i]);
  return e;
 }, C.defaults = function(t) {
  return S(a.call(arguments, 1), function(e) {
   if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
  }), t;
 }, C.clone = function(t) {
  return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t;
 }, C.tap = function(t, e) {
  return e(t), t;
 };
 var O = function(t, e, n, r) {
  if (t === e) return 0 !== t || 1 / t == 1 / e;
  if (null == t || null == e) return t === e;
  t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
  var i = u.call(t);
  if (i != u.call(e)) return !1;
  switch (i) {
  case "[object String]":
   return t == String(e);

  case "[object Number]":
   return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

  case "[object Date]":
  case "[object Boolean]":
   return +t == +e;

  case "[object RegExp]":
   return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
  }
  if ("object" != typeof t || "object" != typeof e) return !1;
  for (var o = n.length; o--; ) if (n[o] == t) return r[o] == e;
  var s = t.constructor, a = e.constructor;
  if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
  n.push(t), r.push(e);
  var l = 0, c = !0;
  if ("[object Array]" == i) {
   if (l = t.length, c = l == e.length) for (;l-- && (c = O(t[l], e[l], n, r)); ) ;
  } else {
   for (var p in t) if (C.has(t, p) && (l++, !(c = C.has(e, p) && O(t[p], e[p], n, r)))) break;
   if (c) {
    for (p in e) if (C.has(e, p) && !l--) break;
    c = !l;
   }
  }
  return n.pop(), r.pop(), c;
 };
 C.isEqual = function(t, e) {
  return O(t, e, [], []);
 }, C.isEmpty = function(t) {
  if (null == t) return !0;
  if (C.isArray(t) || C.isString(t)) return 0 === t.length;
  for (var e in t) if (C.has(t, e)) return !1;
  return !0;
 }, C.isElement = function(t) {
  return !(!t || 1 !== t.nodeType);
 }, C.isArray = x || function(t) {
  return "[object Array]" == u.call(t);
 }, C.isObject = function(t) {
  return t === Object(t);
 }, S([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
  C["is" + t] = function(e) {
   return u.call(e) == "[object " + t + "]";
  };
 }), C.isArguments(arguments) || (C.isArguments = function(t) {
  return !(!t || !C.has(t, "callee"));
 }), "function" != typeof /./ && (C.isFunction = function(t) {
  return "function" == typeof t;
 }), C.isFinite = function(t) {
  return isFinite(t) && !isNaN(parseFloat(t));
 }, C.isNaN = function(t) {
  return C.isNumber(t) && t != +t;
 }, C.isBoolean = function(t) {
  return t === !0 || t === !1 || "[object Boolean]" == u.call(t);
 }, C.isNull = function(t) {
  return null === t;
 }, C.isUndefined = function(t) {
  return void 0 === t;
 }, C.has = function(t, e) {
  return c.call(t, e);
 }, C.noConflict = function() {
  return t._ = e, this;
 }, C.identity = function(t) {
  return t;
 }, C.times = function(t, e, n) {
  for (var r = Array(Math.max(0, t)), i = 0; t > i; i++) r[i] = e.call(n, i);
  return r;
 }, C.random = function(t, e) {
  return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
 };
 var _ = {
  escape: {
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': "&quot;",
   "'": "&#x27;",
   "/": "&#x2F;"
  }
 };
 _.unescape = C.invert(_.escape);
 var $ = {
  escape: new RegExp("[" + C.keys(_.escape).join("") + "]", "g"),
  unescape: new RegExp("(" + C.keys(_.unescape).join("|") + ")", "g")
 };
 C.each([ "escape", "unescape" ], function(t) {
  C[t] = function(e) {
   return null == e ? "" : ("" + e).replace($[t], function(e) {
    return _[t][e];
   });
  };
 }), C.result = function(t, e) {
  if (null == t) return void 0;
  var n = t[e];
  return C.isFunction(n) ? n.call(t) : n;
 }, C.mixin = function(t) {
  S(C.functions(t), function(e) {
   var n = C[e] = t[e];
   C.prototype[e] = function() {
    var t = [ this._wrapped ];
    return s.apply(t, arguments), P.call(this, n.apply(C, t));
   };
  });
 };
 var L = 0;
 C.uniqueId = function(t) {
  var e = ++L + "";
  return t ? t + e : e;
 }, C.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
 };
 var I = /(.)^/, R = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "	": "t",
  "\u2028": "u2028",
  "\u2029": "u2029"
 }, q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
 C.template = function(t, e, n) {
  var r;
  n = C.defaults({}, n, C.templateSettings);
  var i = new RegExp([ (n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source ].join("|") + "|$", "g"), o = 0, s = "__p+='";
  t.replace(i, function(e, n, r, i, a) {
   return s += t.slice(o, a).replace(q, function(t) {
    return "\\" + R[t];
   }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), 
   i && (s += "';\n" + i + "\n__p+='"), o = a + e.length, e;
  }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
  try {
   r = new Function(n.variable || "obj", "_", s);
  } catch (a) {
   throw a.source = s, a;
  }
  if (e) return r(e, C);
  var l = function(t) {
   return r.call(this, t, C);
  };
  return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l;
 }, C.chain = function(t) {
  return C(t).chain();
 };
 var P = function(t) {
  return this._chain ? C(t).chain() : t;
 };
 C.mixin(C), S([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
  var e = r[t];
  C.prototype[t] = function() {
   var n = this._wrapped;
   return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], 
   P.call(this, n);
  };
 }), S([ "concat", "join", "slice" ], function(t) {
  var e = r[t];
  C.prototype[t] = function() {
   return P.call(this, e.apply(this._wrapped, arguments));
  };
 }), C.extend(C.prototype, {
  chain: function() {
   return this._chain = !0, this;
  },
  value: function() {
   return this._wrapped;
  }
 });
}.call(this), define("underscore", function(t) {
 return function() {
  var e;
  return e || t._;
 };
}(this)), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");

+function(t) {
 function e() {
  var t = document.createElement("bootstrap"), e = {
   WebkitTransition: "webkitTransitionEnd",
   MozTransition: "transitionend",
   OTransition: "oTransitionEnd otransitionend",
   transition: "transitionend"
  };
  for (var n in e) if (void 0 !== t.style[n]) return {
   end: e[n]
  };
 }
 t.fn.emulateTransitionEnd = function(e) {
  var n = !1, r = this;
  t(this).one(t.support.transition.end, function() {
   n = !0;
  });
  var i = function() {
   n || t(r).trigger(t.support.transition.end);
  };
  return setTimeout(i, e), this;
 }, t(function() {
  t.support.transition = e();
 });
}(jQuery), +function(t) {
 var e = '[data-dismiss="alert"]', n = function(n) {
  t(n).on("click", e, this.close);
 };
 n.prototype.close = function(e) {
  function n() {
   o.trigger("closed.bs.alert").remove();
  }
  var r = t(this), i = r.attr("data-target");
  i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
  var o = t(i);
  e && e.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), 
  o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), 
  t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n());
 };
 var r = t.fn.alert;
 t.fn.alert = function(e) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.alert");
   i || r.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(r);
  });
 }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
  return t.fn.alert = r, this;
 }, t(document).on("click.bs.alert.data-api", e, n.prototype.close);
}(jQuery), +function(t) {
 var e = function(n, r) {
  this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r);
 };
 e.DEFAULTS = {
  loadingText: "loading..."
 }, e.prototype.setState = function(t) {
  var e = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", i = n.data();
  t += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[t] || this.options[t]), 
  setTimeout(function() {
   "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e);
  }, 0);
 }, e.prototype.toggle = function() {
  var t = this.$element.closest('[data-toggle="buttons"]'), e = !0;
  if (t.length) {
   var n = this.$element.find("input");
   "radio" === n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), 
   e && n.prop("checked", !this.$element.hasClass("active")).trigger("change");
  }
  e && this.$element.toggleClass("active");
 };
 var n = t.fn.button;
 t.fn.button = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.button"), o = "object" == typeof n && n;
   i || r.data("bs.button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n);
  });
 }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
  return t.fn.button = n, this;
 }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
  var n = t(e.target);
  n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault();
 });
}(jQuery), +function(t) {
 var e = function(e, n) {
  this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), 
  this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
  "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this));
 };
 e.DEFAULTS = {
  interval: 5e3,
  pause: "hover",
  wrap: !0
 }, e.prototype.cycle = function(e) {
  return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), 
  this;
 }, e.prototype.getActiveIndex = function() {
  return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
  this.$items.index(this.$active);
 }, e.prototype.to = function(e) {
  var n = this, r = this.getActiveIndex();
  return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
   n.to(e);
  }) : r == e ? this.pause().cycle() : this.slide(e > r ? "next" : "prev", t(this.$items[e]));
 }, e.prototype.pause = function(e) {
  return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), 
  this.cycle(!0)), this.interval = clearInterval(this.interval), this;
 }, e.prototype.next = function() {
  return this.sliding ? void 0 : this.slide("next");
 }, e.prototype.prev = function() {
  return this.sliding ? void 0 : this.slide("prev");
 }, e.prototype.slide = function(e, n) {
  var r = this.$element.find(".item.active"), i = n || r[e](), o = this.interval, s = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
  if (!i.length) {
   if (!this.options.wrap) return;
   i = this.$element.find(".item")[a]();
  }
  this.sliding = !0, o && this.pause();
  var u = t.Event("slide.bs.carousel", {
   relatedTarget: i[0],
   direction: s
  });
  if (!i.hasClass("active")) {
   if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
   this.$element.one("slid.bs.carousel", function() {
    var e = t(l.$indicators.children()[l.getActiveIndex()]);
    e && e.addClass("active");
   })), t.support.transition && this.$element.hasClass("slide")) {
    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
    i.addClass(e), i[0].offsetWidth, r.addClass(s), i.addClass(s), r.one(t.support.transition.end, function() {
     i.removeClass([ e, s ].join(" ")).addClass("active"), r.removeClass([ "active", s ].join(" ")), 
     l.sliding = !1, setTimeout(function() {
      l.$element.trigger("slid.bs.carousel");
     }, 0);
    }).emulateTransitionEnd(600);
   } else {
    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
    r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel");
   }
   return o && this.cycle(), this;
  }
 };
 var n = t.fn.carousel;
 t.fn.carousel = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.carousel"), o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n), s = "string" == typeof n ? n : o.slide;
   i || r.data("bs.carousel", i = new e(this, o)), "number" == typeof n ? i.to(n) : s ? i[s]() : o.interval && i.pause().cycle();
  });
 }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
  return t.fn.carousel = n, this;
 }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
  var n, r = t(this), i = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = t.extend({}, i.data(), r.data()), s = r.attr("data-slide-to");
  s && (o.interval = !1), i.carousel(o), (s = r.attr("data-slide-to")) && i.data("bs.carousel").to(s), 
  e.preventDefault();
 }), t(window).on("load", function() {
  t('[data-ride="carousel"]').each(function() {
   var e = t(this);
   e.carousel(e.data());
  });
 });
}(jQuery), +function(t) {
 var e = function(n, r) {
  this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.transitioning = null, 
  this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle();
 };
 e.DEFAULTS = {
  toggle: !0
 }, e.prototype.dimension = function() {
  var t = this.$element.hasClass("width");
  return t ? "width" : "height";
 }, e.prototype.show = function() {
  if (!this.transitioning && !this.$element.hasClass("in")) {
   var e = t.Event("show.bs.collapse");
   if (this.$element.trigger(e), !e.isDefaultPrevented()) {
    var n = this.$parent && this.$parent.find("> .panel > .in");
    if (n && n.length) {
     var r = n.data("bs.collapse");
     if (r && r.transitioning) return;
     n.collapse("hide"), r || n.data("bs.collapse", null);
    }
    var i = this.dimension();
    this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
    var o = function() {
     this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, 
     this.$element.trigger("shown.bs.collapse");
    };
    if (!t.support.transition) return o.call(this);
    var s = t.camelCase([ "scroll", i ].join("-"));
    this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[i](this.$element[0][s]);
   }
  }
 }, e.prototype.hide = function() {
  if (!this.transitioning && this.$element.hasClass("in")) {
   var e = t.Event("hide.bs.collapse");
   if (this.$element.trigger(e), !e.isDefaultPrevented()) {
    var n = this.dimension();
    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
    this.transitioning = 1;
    var r = function() {
     this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
    };
    return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350) : r.call(this);
   }
  }
 }, e.prototype.toggle = function() {
  this[this.$element.hasClass("in") ? "hide" : "show"]();
 };
 var n = t.fn.collapse;
 t.fn.collapse = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.collapse"), o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
   i || r.data("bs.collapse", i = new e(this, o)), "string" == typeof n && i[n]();
  });
 }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
  return t.fn.collapse = n, this;
 }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
  var n, r = t(this), i = r.attr("data-target") || e.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(i), s = o.data("bs.collapse"), a = s ? "toggle" : r.data(), l = r.attr("data-parent"), u = l && t(l);
  s && s.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(r).addClass("collapsed"), 
  r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a);
 });
}(jQuery), +function(t) {
 function e() {
  t(r).remove(), t(i).each(function(e) {
   var r = n(t(this));
   r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown")), e.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown"));
  });
 }
 function n(e) {
  var n = e.attr("data-target");
  n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
  var r = n && t(n);
  return r && r.length ? r : e.parent();
 }
 var r = ".dropdown-backdrop", i = "[data-toggle=dropdown]", o = function(e) {
  t(e).on("click.bs.dropdown", this.toggle);
 };
 o.prototype.toggle = function(r) {
  var i = t(this);
  if (!i.is(".disabled, :disabled")) {
   var o = n(i), s = o.hasClass("open");
   if (e(), !s) {
    if ("ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e), 
    o.trigger(r = t.Event("show.bs.dropdown")), r.isDefaultPrevented()) return;
    o.toggleClass("open").trigger("shown.bs.dropdown"), i.focus();
   }
   return !1;
  }
 }, o.prototype.keydown = function(e) {
  if (/(38|40|27)/.test(e.keyCode)) {
   var r = t(this);
   if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
    var o = n(r), s = o.hasClass("open");
    if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(i).focus(), r.click();
    var a = t("[role=menu] li:not(.divider):visible a", o);
    if (a.length) {
     var l = a.index(a.filter(":focus"));
     38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < a.length - 1 && l++, ~l || (l = 0), 
     a.eq(l).focus();
    }
   }
  }
 };
 var s = t.fn.dropdown;
 t.fn.dropdown = function(e) {
  return this.each(function() {
   var n = t(this), r = n.data("bs.dropdown");
   r || n.data("bs.dropdown", r = new o(this)), "string" == typeof e && r[e].call(n);
  });
 }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
  return t.fn.dropdown = s, this;
 }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
  t.stopPropagation();
 }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", o.prototype.keydown);
}(jQuery), +function(t) {
 var e = function(e, n) {
  this.options = n, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote);
 };
 e.DEFAULTS = {
  backdrop: !0,
  keyboard: !0,
  show: !0
 }, e.prototype.toggle = function(t) {
  return this[this.isShown ? "hide" : "show"](t);
 }, e.prototype.show = function(e) {
  var n = this, r = t.Event("show.bs.modal", {
   relatedTarget: e
  });
  this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, 
  this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), 
  this.backdrop(function() {
   var r = t.support.transition && n.$element.hasClass("fade");
   n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), 
   r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), 
   n.enforceFocus();
   var i = t.Event("shown.bs.modal", {
    relatedTarget: e
   });
   r ? n.$element.find(".modal-dialog").one(t.support.transition.end, function() {
    n.$element.focus().trigger(i);
   }).emulateTransitionEnd(300) : n.$element.focus().trigger(i);
  }));
 }, e.prototype.hide = function(e) {
  e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), 
  this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), 
  this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), 
  t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
 }, e.prototype.enforceFocus = function() {
  t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
   this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus();
  }, this));
 }, e.prototype.escape = function() {
  this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
   27 == t.which && this.hide();
  }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
 }, e.prototype.hideModal = function() {
  var t = this;
  this.$element.hide(), this.backdrop(function() {
   t.removeBackdrop(), t.$element.trigger("hidden.bs.modal");
  });
 }, e.prototype.removeBackdrop = function() {
  this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
 }, e.prototype.backdrop = function(e) {
  var n = this.$element.hasClass("fade") ? "fade" : "";
  if (this.isShown && this.options.backdrop) {
   var r = t.support.transition && n;
   if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), 
   this.$element.on("click.dismiss.modal", t.proxy(function(t) {
    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
   }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
   r ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e();
  } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e();
 };
 var n = t.fn.modal;
 t.fn.modal = function(n, r) {
  return this.each(function() {
   var i = t(this), o = i.data("bs.modal"), s = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
   o || i.data("bs.modal", o = new e(this, s)), "string" == typeof n ? o[n](r) : s.show && o.show(r);
  });
 }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
  return t.fn.modal = n, this;
 }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
  var n = t(this), r = n.attr("href"), i = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), o = i.data("modal") ? "toggle" : t.extend({
   remote: !/#/.test(r) && r
  }, i.data(), n.data());
  e.preventDefault(), i.modal(o, this).one("hide", function() {
   n.is(":visible") && n.focus();
  });
 }), t(document).on("show.bs.modal", ".modal", function() {
  t(document.body).addClass("modal-open");
 }).on("hidden.bs.modal", ".modal", function() {
  t(document.body).removeClass("modal-open");
 });
}(jQuery), +function(t) {
 var e = function(t, e) {
  this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
  this.init("tooltip", t, e);
 };
 e.DEFAULTS = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1
 }, e.prototype.init = function(e, n, r) {
  this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r);
  for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
   var s = i[o];
   if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
    var a = "hover" == s ? "mouseenter" : "focus", l = "hover" == s ? "mouseleave" : "blur";
    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), 
    this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
   }
  }
  this.options.selector ? this._options = t.extend({}, this.options, {
   trigger: "manual",
   selector: ""
  }) : this.fixTitle();
 }, e.prototype.getDefaults = function() {
  return e.DEFAULTS;
 }, e.prototype.getOptions = function(e) {
  return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
   show: e.delay,
   hide: e.delay
  }), e;
 }, e.prototype.getDelegateOptions = function() {
  var e = {}, n = this.getDefaults();
  return this._options && t.each(this._options, function(t, r) {
   n[t] != r && (e[t] = r);
  }), e;
 }, e.prototype.enter = function(e) {
  var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
  return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
   "in" == n.hoverState && n.show();
  }, n.options.delay.show)) : n.show();
 }, e.prototype.leave = function(e) {
  var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
  return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
   "out" == n.hoverState && n.hide();
  }, n.options.delay.hide)) : n.hide();
 }, e.prototype.show = function() {
  var e = t.Event("show.bs." + this.type);
  if (this.hasContent() && this.enabled) {
   if (this.$element.trigger(e), e.isDefaultPrevented()) return;
   var n = this.tip();
   this.setContent(), this.options.animation && n.addClass("fade");
   var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, o = i.test(r);
   o && (r = r.replace(i, "") || "top"), n.detach().css({
    top: 0,
    left: 0,
    display: "block"
   }).addClass(r), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
   var s = this.getPosition(), a = n[0].offsetWidth, l = n[0].offsetHeight;
   if (o) {
    var u = this.$element.parent(), c = r, p = document.documentElement.scrollTop || document.body.scrollTop, f = "body" == this.options.container ? window.innerWidth : u.outerWidth(), h = "body" == this.options.container ? window.innerHeight : u.outerHeight(), d = "body" == this.options.container ? 0 : u.offset().left;
    r = "bottom" == r && s.top + s.height + l - p > h ? "top" : "top" == r && s.top - p - l < 0 ? "bottom" : "right" == r && s.right + a > f ? "left" : "left" == r && s.left - a < d ? "right" : r, 
    n.removeClass(c).addClass(r);
   }
   var g = this.getCalculatedOffset(r, s, a, l);
   this.applyPlacement(g, r), this.$element.trigger("shown.bs." + this.type);
  }
 }, e.prototype.applyPlacement = function(t, e) {
  var n, r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, s = parseInt(r.css("margin-top"), 10), a = parseInt(r.css("margin-left"), 10);
  isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, 
  r.offset(t).addClass("in");
  var l = r[0].offsetWidth, u = r[0].offsetHeight;
  if ("top" == e && u != o && (n = !0, t.top = t.top + o - u), /bottom|top/.test(e)) {
   var c = 0;
   t.left < 0 && (c = -2 * t.left, t.left = 0, r.offset(t), l = r[0].offsetWidth, u = r[0].offsetHeight), 
   this.replaceArrow(c - i + l, l, "left");
  } else this.replaceArrow(u - o, u, "top");
  n && r.offset(t);
 }, e.prototype.replaceArrow = function(t, e, n) {
  this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
 }, e.prototype.setContent = function() {
  var t = this.tip(), e = this.getTitle();
  t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
 }, e.prototype.hide = function() {
  function e() {
   "in" != n.hoverState && r.detach();
  }
  var n = this, r = this.tip(), i = t.Event("hide.bs." + this.type);
  return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), 
  t.support.transition && this.$tip.hasClass("fade") ? r.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), 
  this.$element.trigger("hidden.bs." + this.type), this);
 }, e.prototype.fixTitle = function() {
  var t = this.$element;
  (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
 }, e.prototype.hasContent = function() {
  return this.getTitle();
 }, e.prototype.getPosition = function() {
  var e = this.$element[0];
  return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
   width: e.offsetWidth,
   height: e.offsetHeight
  }, this.$element.offset());
 }, e.prototype.getCalculatedOffset = function(t, e, n, r) {
  return "bottom" == t ? {
   top: e.top + e.height,
   left: e.left + e.width / 2 - n / 2
  } : "top" == t ? {
   top: e.top - r,
   left: e.left + e.width / 2 - n / 2
  } : "left" == t ? {
   top: e.top + e.height / 2 - r / 2,
   left: e.left - n
  } : {
   top: e.top + e.height / 2 - r / 2,
   left: e.left + e.width
  };
 }, e.prototype.getTitle = function() {
  var t, e = this.$element, n = this.options;
  return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title);
 }, e.prototype.tip = function() {
  return this.$tip = this.$tip || t(this.options.template);
 }, e.prototype.arrow = function() {
  return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
 }, e.prototype.validate = function() {
  this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
 }, e.prototype.enable = function() {
  this.enabled = !0;
 }, e.prototype.disable = function() {
  this.enabled = !1;
 }, e.prototype.toggleEnabled = function() {
  this.enabled = !this.enabled;
 }, e.prototype.toggle = function(e) {
  var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
  n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
 }, e.prototype.destroy = function() {
  this.hide().$element.off("." + this.type).removeData("bs." + this.type);
 };
 var n = t.fn.tooltip;
 t.fn.tooltip = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof n && n;
   i || r.data("bs.tooltip", i = new e(this, o)), "string" == typeof n && i[n]();
  });
 }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
  return t.fn.tooltip = n, this;
 };
}(jQuery), +function(t) {
 var e = function(t, e) {
  this.init("popover", t, e);
 };
 if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
 e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
  placement: "right",
  trigger: "click",
  content: "",
  template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
 }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, 
 e.prototype.getDefaults = function() {
  return e.DEFAULTS;
 }, e.prototype.setContent = function() {
  var t = this.tip(), e = this.getTitle(), n = this.getContent();
  t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), 
  t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
 }, e.prototype.hasContent = function() {
  return this.getTitle() || this.getContent();
 }, e.prototype.getContent = function() {
  var t = this.$element, e = this.options;
  return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
 }, e.prototype.arrow = function() {
  return this.$arrow = this.$arrow || this.tip().find(".arrow");
 }, e.prototype.tip = function() {
  return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
 };
 var n = t.fn.popover;
 t.fn.popover = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.popover"), o = "object" == typeof n && n;
   i || r.data("bs.popover", i = new e(this, o)), "string" == typeof n && i[n]();
  });
 }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
  return t.fn.popover = n, this;
 };
}(jQuery), +function(t) {
 function e(n, r) {
  var i, o = t.proxy(this.process, this);
  this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), 
  this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || (i = t(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
  this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), 
  this.process();
 }
 e.DEFAULTS = {
  offset: 10
 }, e.prototype.refresh = function() {
  var e = this.$element[0] == window ? "offset" : "position";
  this.offsets = t([]), this.targets = t([]);
  var n = this;
  this.$body.find(this.selector).map(function() {
   var r = t(this), i = r.data("target") || r.attr("href"), o = /^#\w/.test(i) && t(i);
   return o && o.length && [ [ o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i ] ] || null;
  }).sort(function(t, e) {
   return t[0] - e[0];
  }).each(function() {
   n.offsets.push(this[0]), n.targets.push(this[1]);
  });
 }, e.prototype.process = function() {
  var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, r = n - this.$scrollElement.height(), i = this.offsets, o = this.targets, s = this.activeTarget;
  if (e >= r) return s != (t = o.last()[0]) && this.activate(t);
  for (t = i.length; t--; ) s != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t]);
 }, e.prototype.activate = function(e) {
  this.activeTarget = e, t(this.selector).parents(".active").removeClass("active");
  var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', r = t(n).parents("li").addClass("active");
  r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), 
  r.trigger("activate.bs.scrollspy");
 };
 var n = t.fn.scrollspy;
 t.fn.scrollspy = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
   i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]();
  });
 }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
  return t.fn.scrollspy = n, this;
 }, t(window).on("load", function() {
  t('[data-spy="scroll"]').each(function() {
   var e = t(this);
   e.scrollspy(e.data());
  });
 });
}(jQuery), +function(t) {
 var e = function(e) {
  this.element = t(e);
 };
 e.prototype.show = function() {
  var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
  if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
   var i = n.find(".active:last a")[0], o = t.Event("show.bs.tab", {
    relatedTarget: i
   });
   if (e.trigger(o), !o.isDefaultPrevented()) {
    var s = t(r);
    this.activate(e.parent("li"), n), this.activate(s, s.parent(), function() {
     e.trigger({
      type: "shown.bs.tab",
      relatedTarget: i
     });
    });
   }
  }
 }, e.prototype.activate = function(e, n, r) {
  function i() {
   o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
   e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), 
   e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), r && r();
  }
  var o = n.find("> .active"), s = r && t.support.transition && o.hasClass("fade");
  s ? o.one(t.support.transition.end, i).emulateTransitionEnd(150) : i(), o.removeClass("in");
 };
 var n = t.fn.tab;
 t.fn.tab = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.tab");
   i || r.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]();
  });
 }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
  return t.fn.tab = n, this;
 }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
  e.preventDefault(), t(this).tab("show");
 });
}(jQuery), +function(t) {
 var e = function(n, r) {
  this.options = t.extend({}, e.DEFAULTS, r), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), 
  this.$element = t(n), this.affixed = this.unpin = null, this.checkPosition();
 };
 e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
  offset: 0
 }, e.prototype.checkPositionWithEventLoop = function() {
  setTimeout(t.proxy(this.checkPosition, this), 1);
 }, e.prototype.checkPosition = function() {
  if (this.$element.is(":visible")) {
   var n = t(document).height(), r = this.$window.scrollTop(), i = this.$element.offset(), o = this.options.offset, s = o.top, a = o.bottom;
   "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top()), "function" == typeof a && (a = o.bottom());
   var l = null != this.unpin && r + this.unpin <= i.top ? !1 : null != a && i.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= r ? "top" : !1;
   this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, 
   this.unpin = "bottom" == l ? i.top - r : null, this.$element.removeClass(e.RESET).addClass("affix" + (l ? "-" + l : "")), 
   "bottom" == l && this.$element.offset({
    top: document.body.offsetHeight - a - this.$element.height()
   }));
  }
 };
 var n = t.fn.affix;
 t.fn.affix = function(n) {
  return this.each(function() {
   var r = t(this), i = r.data("bs.affix"), o = "object" == typeof n && n;
   i || r.data("bs.affix", i = new e(this, o)), "string" == typeof n && i[n]();
  });
 }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
  return t.fn.affix = n, this;
 }, t(window).on("load", function() {
  t('[data-spy="affix"]').each(function() {
   var e = t(this), n = e.data();
   n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
   n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n);
  });
 });
}(jQuery), define("bootstrap", function() {}), define("constants", [], function() {
 var t = {};
 return t.VERSION = "4.3.12", t.MAIN_URL = "https://stackedit.io/", t.GOOGLE_ANALYTICS_ACCOUNT_ID = "UA-39556145-1", 
 t.GOOGLE_API_KEY = "AIzaSyAeCU8CGcSkn0z9js6iocHuPBX4f_mMWkw", t.GOOGLE_DRIVE_APP_ID = "241271498917", 
 t.DROPBOX_APP_KEY = "lq6mwopab8wskas", t.DROPBOX_APP_SECRET = "851fgnucpezy84t", 
 t.DROPBOX_RESTRICTED_APP_KEY = "sw0hlixhr8q1xk0", t.DROPBOX_RESTRICTED_APP_SECRET = "1r808p2xygs6lbg", 
 t.BITLY_ACCESS_TOKEN = "317e033bfd48cf31155a68a536b1860013b09c4c", t.DEFAULT_FILE_TITLE = "Title", 
 t.DEFAULT_FOLDER_NAME = "New folder", t.GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document", 
 t.EDITOR_DEFAULT_PADDING = 35, t.CHECK_ONLINE_PERIOD = 12e4, t.AJAX_TIMEOUT = 3e4, 
 t.ASYNC_TASK_DEFAULT_TIMEOUT = 6e4, t.ASYNC_TASK_LONG_TIMEOUT = 18e4, t.USER_IDLE_THRESHOLD = 3e5, 
 t.IMPORT_FILE_MAX_CONTENT_SIZE = 1e5, t.IMPORT_IMG_MAX_CONTENT_SIZE = 1e7, t.COUCHDB_PAGE_SIZE = 25, 
 t.TEMPORARY_FILE_INDEX = "file.tempIndex", t.WELCOME_DOCUMENT_TITLE = "Hello!", 
 t.DOWNLOAD_IMPORT_URL = "/downloadImport", t.PICASA_IMPORT_IMG_URL = "/picasaImportImg", 
 t.SSH_PUBLISH_URL = "/sshPublish", t.PDF_EXPORT_URL = "/pdfExport", t.COUCHDB_URL = "https://stackedit.smileupps.com/documents", 
 t.BASE_URL = "http://localhost/", t.GOOGLE_CLIENT_ID = "241271498917-lev37kef013q85avc91am1gccg5g8lrb.apps.googleusercontent.com", 
 t.GITHUB_CLIENT_ID = "e47fef6055344579799d", t.GATEKEEPER_URL = "https://stackedit-gatekeeper-localhost.herokuapp.com/", 
 t.TUMBLR_PROXY_URL = "https://stackedit-tumblr-proxy-local.herokuapp.com/", t.WORDPRESS_CLIENT_ID = "23361", 
 t.WORDPRESS_PROXY_URL = "https://stackedit-io-wordpress-proxy.herokuapp.com/", 0 === location.hostname.indexOf("stackedit.io") ? (t.BASE_URL = t.MAIN_URL, 
 t.GOOGLE_CLIENT_ID = "241271498917-t4t7d07qis7oc0ahaskbif3ft6tk63cd.apps.googleusercontent.com", 
 t.GITHUB_CLIENT_ID = "710fc67886ab1ae8fee6", t.GATEKEEPER_URL = "https://stackedit-io-gatekeeper.herokuapp.com/", 
 t.TUMBLR_PROXY_URL = "https://stackedit-io-tumblr-proxy.herokuapp.com/") : 0 === location.hostname.indexOf("benweet.github.io") ? (t.BASE_URL = "http://benweet.github.io/stackedit/", 
 t.GOOGLE_CLIENT_ID = "241271498917-jpto9lls9fqnem1e4h6ppds9uob8rpvu.apps.googleusercontent.com", 
 t.GITHUB_CLIENT_ID = "fa0d09514da8377ee32e", t.GATEKEEPER_URL = "https://stackedit-gatekeeper.herokuapp.com/", 
 t.TUMBLR_PROXY_URL = "https://stackedit-tumblr-proxy.herokuapp.com/", t.WORDPRESS_CLIENT_ID = "3185", 
 t.WORDPRESS_PROXY_URL = "https://stackedit-wordpress-proxy.herokuapp.com/") : 0 === location.hostname.indexOf("stackedit-beta.herokuapp.com") ? (t.BASE_URL = "https://stackedit-beta.herokuapp.com/", 
 t.GOOGLE_CLIENT_ID = "241271498917-9bbplknkt0ljv5gaudhoiogp13hd18be.apps.googleusercontent.com", 
 t.GITHUB_CLIENT_ID = "e9034ae191c3a8a1c5ed", t.GATEKEEPER_URL = "https://stackedit-beta-gatekeeper.herokuapp.com/", 
 t.TUMBLR_PROXY_URL = "https://stackedit-beta-tumblr-proxy.herokuapp.com/", t.WORDPRESS_CLIENT_ID = "34786", 
 t.WORDPRESS_PROXY_URL = "https://stackedit-beta-wordpress-proxy.herokuapp.com/") : 0 === location.hostname.indexOf("benweet.insomnia247.nl") && (t.BASE_URL = "http://benweet.insomnia247.nl/stackedit/", 
 t.GOOGLE_CLIENT_ID = "241271498917-52hae7a08hv7ltenv7km8h7lghno9sk3.apps.googleusercontent.com", 
 t.GITHUB_CLIENT_ID = "d2943d6074b2d9c4a830", t.GATEKEEPER_URL = "https://stackedit-gatekeeper-insomnia.herokuapp.com/", 
 t.TUMBLR_PROXY_URL = "https://stackedit-tumblr-proxy-beta.herokuapp.com/"), t.THEME_LIST = {
  blue: "Blue",
  "default": "Default",
  gray: "Gray",
  night: "Night",
  school: "School",
  "solarized-light": "Solarized Light",
  "solarized-dark": "Solarized Dark"
 }, t;
}), define("storage", [ "underscore" ], function(t) {
 function e(e) {
  try {
   return t.compact(localStorage[e].split(";"));
  } catch (n) {
   return localStorage[e] = ";", [];
  }
 }
 var n, r, i = e("file.list"), o = localStorage.version;
 if (void 0 === o && (localStorage.removeItem("sync.queue"), localStorage.removeItem("sync.current"), 
 localStorage.removeItem("file.counter"), t.each(i, function(n) {
  localStorage[n + ".publish"] = ";";
  var r = e(n + ".sync");
  t.each(r, function(t) {
   localStorage[t + ".contentCRC"] = "0", void 0 !== localStorage[t + ".etag"] && (localStorage[t + ".titleCRC"] = "0");
  });
 }), o = "v1"), "v1" == o) {
  var s = localStorage["sync.gdrive.lastChangeId"];
  s && (localStorage["gdrive.lastChangeId"] = s, localStorage.removeItem("sync.gdrive.lastChangeId"));
  var a = localStorage["sync.dropbox.lastChangeId"];
  a && (localStorage["dropbox.lastChangeId"] = a, localStorage.removeItem("sync.dropbox.lastChangeId"));
  var l = "gdrive", u = "dropbox", c = "sync." + l + ".", p = "sync." + u + ".";
  t.each(i, function(n) {
   var r = e(n + ".sync");
   t.each(r, function(t) {
    var e = {};
    0 === t.indexOf(c) ? (e.provider = l, e.id = t.substring(c.length), e.etag = localStorage[t + ".etag"], 
    e.contentCRC = localStorage[t + ".contentCRC"], e.titleCRC = localStorage[t + ".titleCRC"]) : 0 === t.indexOf(p) && (e.provider = u, 
    e.path = decodeURIComponent(t.substring(p.length)), e.version = localStorage[t + ".version"], 
    e.contentCRC = localStorage[t + ".contentCRC"]), localStorage[t] = JSON.stringify(e), 
    localStorage.removeItem(t + ".etag"), localStorage.removeItem(t + ".version"), localStorage.removeItem(t + ".contentCRC"), 
    localStorage.removeItem(t + ".titleCRC");
   });
  }), o = "v2";
 }
 return "v2" == o && (t.each(i, function(e) {
  t.has(localStorage, e + ".sync") || (localStorage.removeItem(e + ".title"), localStorage.removeItem(e + ".publish"), 
  localStorage.removeItem(e + ".content"), localStorage["file.list"].replace(";" + e + ";", ";"));
 }), o = "v3"), "v3" == o && (n = localStorage["file.current"], void 0 !== n && -1 === localStorage["file.list"].indexOf(";" + n + ";") && localStorage.removeItem("file.current"), 
 o = "v4"), "v4" == o && (localStorage.removeItem("githubToken"), o = "v5"), "v5" == o && (t.each(i, function(n) {
  var r = e(n + ".publish");
  t.each(r, function(t) {
   var e = JSON.parse(localStorage[t]);
   "gdrive" == e.provider && (e.id = e.fileId, e.fileId = void 0, localStorage[t] = JSON.stringify(e));
  });
 }), o = "v6"), "v6" == o && (n = localStorage["file.current"], void 0 !== n && (localStorage[n + ".selectTime"] = new Date().getTime(), 
 localStorage.removeItem("file.current")), o = "v7"), ("v7" == o || "v8" == o || "v9" == o) && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 delete r.editorFontFamily, delete r.editorFontSize, r.template && (r.template = r.template.replace("http://benweet.github.io/stackedit/css/main-min.css", "http://benweet.github.io/stackedit/res-min/themes/default.css")), 
 localStorage.settings = JSON.stringify(r)), o = "v10"), "v10" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 ((r.extensionSettings || {}).markdownExtra || {}).extensions && r.extensionSettings.markdownExtra.extensions.push("smartypants"), 
 "http://stackedit-ssh-proxy.herokuapp.com/" == r.sshProxy && (r.sshProxy = "https://stackedit-ssh-proxy.herokuapp.com/"), 
 r.template && (r.template = r.template.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
 r.template && (r.template = r.template.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 r.pdfTemplate && (r.pdfTemplate = r.pdfTemplate.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
 r.pdfTemplate && (r.pdfTemplate = r.pdfTemplate.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 r.defaultContent && (r.defaultContent = r.defaultContent.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 r.commitMsg && (r.commitMsg = r.commitMsg.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 localStorage.settings = JSON.stringify(r)), o = "v11"), "v11" == o && (localStorage.removeItem("theme"), 
 t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), delete r.editorFontFamily, 
 delete r.editorFontSize, r.template && (r.template = r.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 r.pdfTemplate && (r.pdfTemplate = r.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 localStorage.settings = JSON.stringify(r)), o = "v12"), ("v12" == o || "v13" == o) && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 delete r.editorFontFamily, localStorage.settings = JSON.stringify(r)), o = "v14"), 
 "v14" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 r.template && (r.template = r.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 r.pdfTemplate && (r.pdfTemplate = r.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 localStorage.settings = JSON.stringify(r)), o = "v15"), "v15" == o && (localStorage.removeItem("gdrivePermissions"), 
 t.has(localStorage, "gdrive.lastChangeId") && (localStorage["google.gdrive0.gdrive.lastChangeId"] = localStorage["gdrive.lastChangeId"], 
 localStorage.removeItem("gdrive.lastChangeId")), t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 ((r.extensionSettings || {}).markdownExtra || {}).extensions && (r.extensionSettings.markdownExtra.extensions.push("newlines"), 
 r.extensionSettings.markdownExtra.extensions.push("strikethrough")), localStorage.settings = JSON.stringify(r)), 
 o = "v16"), ("v16" == o || "v17" == o) && (localStorage.removeItem("focusMode"), 
 localStorage.removeItem("mode"), localStorage.removeItem("gdrive.state"), localStorage.removeItem("google.picasa0.permissions"), 
 localStorage.removeItem("google.picasa0.userId"), t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 delete r.shortcuts, delete r.editorFontFamily, delete r.editorFontSize, delete r.maxWidth, 
 localStorage.settings = JSON.stringify(r)), o = "v18"), "v18" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 ((r.extensionSettings || {}).markdownExtra || {}).diagrams = !0, localStorage.settings = JSON.stringify(r)), 
 o = "v19"), "v19" == o && (localStorage.removeItem("themeV3"), localStorage.removeItem("welcomeTour"), 
 t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), delete r.pdfTemplate, 
 delete r.pdfPageSize, delete r.sshProxy, localStorage.settings = JSON.stringify(r)), 
 o = "v20"), "v20" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 delete r.markdownMimeType, localStorage.settings = JSON.stringify(r)), o = "v21"), 
 "v21" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 r.template && (r.template = r.template.replace("https://stackedit.io/libs/MathJax/", "https://cdn.mathjax.org/mathjax/latest/")), 
 r.pdfTemplate && (r.pdfTemplate = r.pdfTemplate.replace("/libs/MathJax/", "/res/bower-libs/MathJax/")), 
 localStorage.settings = JSON.stringify(r)), o = "v22"), "v22" == o && (t.has(localStorage, "settings") && (r = JSON.parse(localStorage.settings), 
 r.couchdbUrl && (r.couchdbUrl = r.couchdbUrl.replace("https://stackedit.couchappy.com/documents", "https://stackedit.smileupps.com/documents")), 
 localStorage.settings = JSON.stringify(r)), o = "v23"), localStorage.version = o, 
 localStorage;
}), define("settings", [ "underscore", "constants", "storage" ], function(t, e, n) {
 var r = {
  layoutOrientation: "horizontal",
  editMode: "ltr",
  lazyRendering: !0,
  editorFontClass: "font-rich",
  fontSizeRatio: 1,
  maxWidthRatio: 1,
  cursorFocusRatio: .5,
  defaultContent: "\n\n\n> Written with [StackEdit](" + e.MAIN_URL + ").",
  commitMsg: "Published with " + e.MAIN_URL,
  conflictMode: "merge",
  markdownMimeType: "text/plain",
  gdriveMultiAccount: 1,
  gdriveFullAccess: !0,
  dropboxFullAccess: !0,
  githubFullAccess: !0,
  template: [ "<!DOCTYPE html>", "<html>", "<head>", '<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">', "<title><%= documentTitle %></title>", '<link rel="stylesheet" href="' + e.MAIN_URL + 'res-min/themes/base.css" />', '<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>', "</head>", '<body><div class="container"><%= documentHTML %></div></body>', "</html>" ].join("\n"),
  pdfTemplate: [ "<!DOCTYPE html>", "<html>", "<head>", '<meta charset="utf-8">', "<title><%= documentTitle %></title>", '<link rel="stylesheet" href="http://localhost/res-min/themes/base.css" />', '<script type="text/x-mathjax-config">', 'MathJax.Hub.Config({ messageStyle: "none" });', "</script>", '<script type="text/javascript" src="http://localhost/res/bower-libs/MathJax/MathJax.js?config=TeX-AMS_HTML"></script>', "</head>", "<body><%= documentHTML %></body>", "</html>" ].join("\n"),
  pdfOptions: [ "{", '    "marginTop": 25,', '    "marginRight": 25,', '    "marginBottom": 25,', '    "marginLeft": 25,', '    "pageSize": "A4"', "}" ].join("\n"),
  couchdbUrl: e.COUCHDB_URL,
  extensionSettings: {}
 };
 try {
  t.extend(r, JSON.parse(n.settings));
 } catch (i) {}
 return r;
}), requirejs.config({
 waitSeconds: 0,
 packages: [ {
  name: "css",
  location: "bower-libs/require-css",
  main: "css"
 }, {
  name: "less",
  location: "bower-libs/require-less",
  main: "less"
 } ],
 paths: {
  jquery: "bower-libs/jquery/jquery",
  underscore: "bower-libs/underscore/underscore",
  bootstrap: "bower-libs/bootstrap/dist/js/bootstrap",
  requirejs: "bower-libs/requirejs/require",
  "jquery-waitforimages": "bower-libs/waitForImages/src/jquery.waitforimages",
  "jquery-ui": "bower-libs/jquery-ui/ui/jquery-ui",
  "jquery-ui-core": "bower-libs/jquery-ui/ui/jquery.ui.core",
  "jquery-ui-widget": "bower-libs/jquery-ui/ui/jquery.ui.widget",
  "jquery-ui-mouse": "bower-libs/jquery-ui/ui/jquery.ui.mouse",
  "jquery-ui-draggable": "bower-libs/jquery-ui/ui/jquery.ui.draggable",
  "jquery-ui-effect": "bower-libs/jquery-ui/ui/jquery.ui.effect",
  "jquery-ui-effect-slide": "bower-libs/jquery-ui/ui/jquery.ui.effect-slide",
  "requirejs-text": "bower-libs/requirejs-text/text",
  "bootstrap-tour": "bower-libs/bootstrap-tour/build/js/bootstrap-tour",
  css_browser_selector: "bower-libs/css_browser_selector/css_browser_selector",
  "require-css": "bower-libs/require-css/css",
  css: "bower-libs/require-css/css",
  "css-builder": "bower-libs/require-css/css-builder"
 },
 shim: {
  underscore: {
   exports: "_"
  },
  "bootstrap-tour": {
   deps: [ "bootstrap" ],
   exports: "Tour"
  },
  bootstrap: [ "jquery" ],
  "jquery-waitforimages": [ "jquery" ]
 }
}), require([ "jquery", "underscore", "bootstrap", "settings", "storage" ], function(t, e, n, r, i) {
 window.noStart || t(function() {
  t("#choose-courses").modal(), t("#to-editor").click(function() {
   var e = t("#select-course option:selected").val();
   r.couchdbUrl = window.courseMap[e], console.log("couchDB url: " + r.couchdbUrl), 
   i.settings = JSON.stringify(r), window.location = "editor" + window.location.search;
  });
 });
}), define("login", function() {});