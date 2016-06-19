if (function(t, e) {
 function n(t) {
  var e = t.length, n = ot.type(t);
  return ot.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t);
 }
 function i(t) {
  var e = dt[t] = {};
  return ot.each(t.match(at) || [], function(t, n) {
   e[n] = !0;
  }), e;
 }
 function r() {
  Object.defineProperty(this.cache = {}, 0, {
   get: function() {
    return {};
   }
  }), this.expando = ot.expando + Math.random();
 }
 function o(t, n, i) {
  var r;
  if (i === e && 1 === t.nodeType) if (r = "data-" + n.replace(yt, "-$1").toLowerCase(), 
  i = t.getAttribute(r), "string" == typeof i) {
   try {
    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : vt.test(i) ? JSON.parse(i) : i;
   } catch (o) {}
   gt.set(t, n, i);
  } else i = e;
  return i;
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
 function c(t, e) {
  for (;(t = t[e]) && 1 !== t.nodeType; ) ;
  return t;
 }
 function u(t, e, n) {
  if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
   return !!e.call(t, i, t) !== n;
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
  for (var n = t.length, i = 0; n > i; i++) mt.set(t[i], "globalEval", !e || mt.get(e[i], "globalEval"));
 }
 function g(t, e) {
  var n, i, r, o, s, a, l, c;
  if (1 === e.nodeType) {
   if (mt.hasData(t) && (o = mt.access(t), s = mt.set(e, o), c = o.events)) {
    delete s.handle, s.events = {};
    for (r in c) for (n = 0, i = c[r].length; i > n; n++) ot.event.add(e, r, c[r][n]);
   }
   gt.hasData(t) && (a = gt.access(t), l = ot.extend({}, a), gt.set(e, l));
  }
 }
 function m(t, n) {
  var i = t.getElementsByTagName ? t.getElementsByTagName(n || "*") : t.querySelectorAll ? t.querySelectorAll(n || "*") : [];
  return n === e || n && ot.nodeName(t, n) ? ot.merge([ t ], i) : i;
 }
 function v(t, e) {
  var n = e.nodeName.toLowerCase();
  "input" === n && Rt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
 }
 function y(t, e) {
  if (e in t) return e;
  for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Zt.length; r--; ) if (e = Zt[r] + n, 
  e in t) return e;
  return i;
 }
 function b(t, e) {
  return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t);
 }
 function x(e) {
  return t.getComputedStyle(e, null);
 }
 function w(t, e) {
  for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = mt.get(i, "olddisplay"), 
  n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && b(i) && (o[s] = mt.access(i, "olddisplay", k(i.nodeName)))) : o[s] || (r = b(i), 
  (n && "none" !== n || !r) && mt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
  for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
  return t;
 }
 function T(t, e, n) {
  var i = Xt.exec(e);
  return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
 }
 function C(t, e, n, i, r) {
  for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + Vt[o], !0, r)), 
  i ? ("content" === n && (s -= ot.css(t, "padding" + Vt[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + Vt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Vt[o], !0, r), 
  "padding" !== n && (s += ot.css(t, "border" + Vt[o] + "Width", !0, r)));
  return s;
 }
 function S(t, e, n) {
  var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = x(t), s = ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o);
  if (0 >= r || null == r) {
   if (r = Ut(t, e, o), (0 > r || null == r) && (r = t.style[e]), Jt.test(r)) return r;
   i = s && (ot.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0;
  }
  return r + C(t, e, n || (s ? "border" : "content"), i, o) + "px";
 }
 function k(t) {
  var e = z, n = Yt[t];
  return n || (n = E(t, e), "none" !== n && n || (Bt = (Bt || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), 
  e = (Bt[0].contentWindow || Bt[0].contentDocument).document, e.write("<!doctype html><html><body>"), 
  e.close(), n = E(t, e), Bt.detach()), Yt[t] = n), n;
 }
 function E(t, e) {
  var n = ot(e.createElement(t)).appendTo(e.body), i = ot.css(n[0], "display");
  return n.remove(), i;
 }
 function N(t, e, n, i) {
  var r;
  if (ot.isArray(e)) ot.each(e, function(e, r) {
   n || ee.test(t) ? i(t, r) : N(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i);
  }); else if (n || "object" !== ot.type(e)) i(t, e); else for (r in e) N(t + "[" + r + "]", e[r], n, i);
 }
 function j(t) {
  return function(e, n) {
   "string" != typeof e && (n = e, e = "*");
   var i, r = 0, o = e.toLowerCase().match(at) || [];
   if (ot.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
   (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
  };
 }
 function D(t, e, n, i) {
  function r(a) {
   var l;
   return o[a] = !0, ot.each(t[a] || [], function(t, a) {
    var c = a(e, n, i);
    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), 
    r(c), !1);
   }), l;
  }
  var o = {}, s = t === ye;
  return r(e.dataTypes[0]) || !o["*"] && r("*");
 }
 function A(t, n) {
  var i, r, o = ot.ajaxSettings.flatOptions || {};
  for (i in n) n[i] !== e && ((o[i] ? t : r || (r = {}))[i] = n[i]);
  return r && ot.extend(!0, t, r), t;
 }
 function O(t, n, i) {
  for (var r, o, s, a, l = t.contents, c = t.dataTypes; "*" === c[0]; ) c.shift(), 
  r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
  if (r) for (o in l) if (l[o] && l[o].test(r)) {
   c.unshift(o);
   break;
  }
  if (c[0] in i) s = c[0]; else {
   for (o in i) {
    if (!c[0] || t.converters[o + " " + c[0]]) {
     s = o;
     break;
    }
    a || (a = o);
   }
   s = s || a;
  }
  return s ? (s !== c[0] && c.unshift(s), i[s]) : void 0;
 }
 function _(t, e, n, i) {
  var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
  if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
  for (o = u.shift(); o; ) if (t.responseFields[o] && (n[t.responseFields[o]] = e), 
  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
   if (s = c[l + " " + o] || c["* " + o], !s) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
    s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
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
  for (var i, r = ($e[e] || []).concat($e["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i;
 }
 function I(t, e, n) {
  var i, r, o = 0, s = _e.length, a = ot.Deferred().always(function() {
   delete l.elem;
  }), l = function() {
   if (r) return !1;
   for (var e = Ne || $(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
   return a.notifyWith(t, [ c, o, n ]), 1 > o && l ? n : (a.resolveWith(t, [ c ]), 
   !1);
  }, c = a.promise({
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
    var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
    return c.tweens.push(i), i;
   },
   stop: function(e) {
    var n = 0, i = e ? c.tweens.length : 0;
    if (r) return this;
    for (r = !0; i > n; n++) c.tweens[n].run(1);
    return e ? a.resolveWith(t, [ c, e ]) : a.rejectWith(t, [ c, e ]), this;
   }
  }), u = c.props;
  for (R(u, c.opts.specialEasing); s > o; o++) if (i = _e[o].call(c, t, u, c.opts)) return i;
  return ot.map(u, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), 
  ot.fx.timer(ot.extend(l, {
   elem: t,
   anim: c,
   queue: c.opts.queue
  })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
 }
 function R(t, e) {
  var n, i, r, o, s;
  for (n in t) if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], 
  o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
   o = s.expand(o), delete t[i];
   for (n in o) n in t || (t[n] = o[n], e[n] = r);
  } else e[i] = r;
 }
 function q(t, n, i) {
  var r, o, s, a, l, c, u = this, p = {}, f = t.style, h = t.nodeType && b(t), d = mt.get(t, "fxshow");
  i.queue || (l = ot._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, 
  c = l.empty.fire, l.empty.fire = function() {
   l.unqueued || c();
  }), l.unqueued++, u.always(function() {
   u.always(function() {
    l.unqueued--, ot.queue(t, "fx").length || l.empty.fire();
   });
  })), 1 === t.nodeType && ("height" in n || "width" in n) && (i.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
  "inline" === ot.css(t, "display") && "none" === ot.css(t, "float") && (f.display = "inline-block")), 
  i.overflow && (f.overflow = "hidden", u.always(function() {
   f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
  }));
  for (r in n) if (o = n[r], De.exec(o)) {
   if (delete n[r], s = s || "toggle" === o, o === (h ? "hide" : "show")) {
    if ("show" !== o || !d || d[r] === e) continue;
    h = !0;
   }
   p[r] = d && d[r] || ot.style(t, r);
  }
  if (!ot.isEmptyObject(p)) {
   d ? "hidden" in d && (h = d.hidden) : d = mt.access(t, "fxshow", {}), s && (d.hidden = !h), 
   h ? ot(t).show() : u.done(function() {
    ot(t).hide();
   }), u.done(function() {
    var e;
    mt.remove(t, "fxshow");
    for (e in p) ot.style(t, e, p[e]);
   });
   for (r in p) a = L(h ? d[r] : 0, r, u), r in d || (d[r] = a.start, h && (a.end = a.start, 
   a.start = "width" === r || "height" === r ? 1 : 0));
  }
 }
 function P(t, e, n, i, r) {
  return new P.prototype.init(t, e, n, i, r);
 }
 function F(t, e) {
  var n, i = {
   height: t
  }, r = 0;
  for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Vt[r], i["margin" + n] = i["padding" + n] = t;
  return e && (i.opacity = i.width = t), i;
 }
 function M(t) {
  return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
 }
 var H, U, B = typeof e, W = t.location, z = t.document, X = z.documentElement, J = t.jQuery, G = t.$, Y = {}, Q = [], K = "2.0.3", V = Q.concat, Z = Q.push, tt = Q.slice, et = Q.indexOf, nt = Y.toString, it = Y.hasOwnProperty, rt = K.trim, ot = function(t, e) {
  return new ot.fn.init(t, e, H);
 }, st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, at = /\S+/g, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ut = /^-ms-/, pt = /-([\da-z])/gi, ft = function(t, e) {
  return e.toUpperCase();
 }, ht = function() {
  z.removeEventListener("DOMContentLoaded", ht, !1), t.removeEventListener("load", ht, !1), 
  ot.ready();
 };
 ot.fn = ot.prototype = {
  jquery: K,
  constructor: ot,
  init: function(t, n, i) {
   var r, o;
   if (!t) return this;
   if ("string" == typeof t) {
    if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : lt.exec(t), 
    !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
    if (r[1]) {
     if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : z, !0)), 
     ct.test(r[1]) && ot.isPlainObject(n)) for (r in n) ot.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
     return this;
    }
    return o = z.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), 
    this.context = z, this.selector = t, this;
   }
   return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, 
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
  var t, n, i, r, o, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
  for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ot.isFunction(a) || (a = {}), 
  c === l && (a = this, --l); c > l; l++) if (null != (t = arguments[l])) for (n in t) i = a[n], 
  r = t[n], a !== r && (u && r && (ot.isPlainObject(r) || (o = ot.isArray(r))) ? (o ? (o = !1, 
  s = i && ot.isArray(i) ? i : []) : s = i && ot.isPlainObject(i) ? i : {}, a[n] = ot.extend(u, s, r)) : r !== e && (a[n] = r));
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
    if (t.constructor && !it.call(t.constructor.prototype, "isPrototypeOf")) return !1;
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
   var i = ct.exec(t), r = !n && [];
   return i ? [ e.createElement(i[1]) ] : (i = ot.buildFragment([ t ], e, r), r && ot(r).remove(), 
   ot.merge([], i.childNodes));
  },
  parseJSON: JSON.parse,
  parseXML: function(t) {
   var n, i;
   if (!t || "string" != typeof t) return null;
   try {
    i = new DOMParser(), n = i.parseFromString(t, "text/xml");
   } catch (r) {
    n = e;
   }
   return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), 
   n;
  },
  noop: function() {},
  globalEval: function(t) {
   var e, n = eval;
   t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = z.createElement("script"), 
   e.text = t, z.head.appendChild(e).parentNode.removeChild(e)) : n(t));
  },
  camelCase: function(t) {
   return t.replace(ut, "ms-").replace(pt, ft);
  },
  nodeName: function(t, e) {
   return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  },
  each: function(t, e, i) {
   var r, o = 0, s = t.length, a = n(t);
   if (i) {
    if (a) for (;s > o && (r = e.apply(t[o], i), r !== !1); o++) ; else for (o in t) if (r = e.apply(t[o], i), 
    r === !1) break;
   } else if (a) for (;s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++) ; else for (o in t) if (r = e.call(t[o], o, t[o]), 
   r === !1) break;
   return t;
  },
  trim: function(t) {
   return null == t ? "" : rt.call(t);
  },
  makeArray: function(t, e) {
   var i = e || [];
   return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [ t ] : t) : Z.call(i, t)), 
   i;
  },
  inArray: function(t, e, n) {
   return null == e ? -1 : et.call(e, t, n);
  },
  merge: function(t, n) {
   var i = n.length, r = t.length, o = 0;
   if ("number" == typeof i) for (;i > o; o++) t[r++] = n[o]; else for (;n[o] !== e; ) t[r++] = n[o++];
   return t.length = r, t;
  },
  grep: function(t, e, n) {
   var i, r = [], o = 0, s = t.length;
   for (n = !!n; s > o; o++) i = !!e(t[o], o), n !== i && r.push(t[o]);
   return r;
  },
  map: function(t, e, i) {
   var r, o = 0, s = t.length, a = n(t), l = [];
   if (a) for (;s > o; o++) r = e(t[o], o, i), null != r && (l[l.length] = r); else for (o in t) r = e(t[o], o, i), 
   null != r && (l[l.length] = r);
   return V.apply([], l);
  },
  guid: 1,
  proxy: function(t, n) {
   var i, r, o;
   return "string" == typeof n && (i = t[n], n = t, t = i), ot.isFunction(t) ? (r = tt.call(arguments, 2), 
   o = function() {
    return t.apply(n || this, r.concat(tt.call(arguments)));
   }, o.guid = t.guid = t.guid || ot.guid++, o) : e;
  },
  access: function(t, n, i, r, o, s, a) {
   var l = 0, c = t.length, u = null == i;
   if ("object" === ot.type(i)) {
    o = !0;
    for (l in i) ot.access(t, n, l, i[l], !0, s, a);
   } else if (r !== e && (o = !0, ot.isFunction(r) || (a = !0), u && (a ? (n.call(t, r), 
   n = null) : (u = n, n = function(t, e, n) {
    return u.call(ot(t), n);
   })), n)) for (;c > l; l++) n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
   return o ? t : u ? n.call(t) : c ? n(t[0], i) : s;
  },
  now: Date.now,
  swap: function(t, e, n, i) {
   var r, o, s = {};
   for (o in e) s[o] = t.style[o], t.style[o] = e[o];
   r = n.apply(t, i || []);
   for (o in e) t.style[o] = s[o];
   return r;
  }
 }), ot.ready.promise = function(e) {
  return U || (U = ot.Deferred(), "complete" === z.readyState ? setTimeout(ot.ready) : (z.addEventListener("DOMContentLoaded", ht, !1), 
  t.addEventListener("load", ht, !1))), U.promise(e);
 }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
  Y["[object " + e + "]"] = e.toLowerCase();
 }), H = ot(z), function(t, e) {
  function n(t, e, n, i) {
   var r, o, s, a, l, c, u, p, d, g;
   if ((e ? e.ownerDocument || e : M) !== _ && O(e), e = e || _, n = n || [], !t || "string" != typeof t) return n;
   if (1 !== (a = e.nodeType) && 9 !== a) return [];
   if (L && !i) {
    if (r = bt.exec(t)) if (s = r[1]) {
     if (9 === a) {
      if (o = e.getElementById(s), !o || !o.parentNode) return n;
      if (o.id === s) return n.push(o), n;
     } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && P(e, o) && o.id === s) return n.push(o), 
     n;
    } else {
     if (r[2]) return tt.apply(n, e.getElementsByTagName(t)), n;
     if ((s = r[3]) && C.getElementsByClassName && e.getElementsByClassName) return tt.apply(n, e.getElementsByClassName(s)), 
     n;
    }
    if (C.qsa && (!I || !I.test(t))) {
     if (p = u = F, d = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
      for (c = f(t), (u = e.getAttribute("id")) ? p = u.replace(Tt, "\\$&") : e.setAttribute("id", p), 
      p = "[id='" + p + "'] ", l = c.length; l--; ) c[l] = p + h(c[l]);
      d = ht.test(t) && e.parentNode || e, g = c.join(",");
     }
     if (g) try {
      return tt.apply(n, d.querySelectorAll(g)), n;
     } catch (m) {} finally {
      u || e.removeAttribute("id");
     }
    }
   }
   return w(t.replace(ut, "$1"), e, n, i);
  }
  function i() {
   function t(n, i) {
    return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i;
   }
   var e = [];
   return t;
  }
  function r(t) {
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
   for (var n = t.split("|"), i = t.length; i--; ) k.attrHandle[n[i]] = e;
  }
  function a(t, e) {
   var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
   if (i) return i;
   if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
   return t ? 1 : -1;
  }
  function l(t) {
   return function(e) {
    var n = e.nodeName.toLowerCase();
    return "input" === n && e.type === t;
   };
  }
  function c(t) {
   return function(e) {
    var n = e.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && e.type === t;
   };
  }
  function u(t) {
   return r(function(e) {
    return e = +e, r(function(n, i) {
     for (var r, o = t([], n.length, e), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
    });
   });
  }
  function p() {}
  function f(t, e) {
   var i, r, o, s, a, l, c, u = W[t + " "];
   if (u) return e ? 0 : u.slice(0);
   for (a = t, l = [], c = k.preFilter; a; ) {
    i && !(r = pt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), 
    i = !1, (r = ft.exec(a)) && (i = r.shift(), o.push({
     value: i,
     type: r[0].replace(ut, " ")
    }), a = a.slice(i.length));
    for (s in k.filter) !(r = vt[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), 
    o.push({
     value: i,
     type: s,
     matches: r
    }), a = a.slice(i.length));
    if (!i) break;
   }
   return e ? a.length : a ? n.error(t) : W(t, l).slice(0);
  }
  function h(t) {
   for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
   return i;
  }
  function d(t, e, n) {
   var i = e.dir, r = n && "parentNode" === i, o = U++;
   return e.first ? function(e, n, o) {
    for (;e = e[i]; ) if (1 === e.nodeType || r) return t(e, n, o);
   } : function(e, n, s) {
    var a, l, c, u = H + " " + o;
    if (s) {
     for (;e = e[i]; ) if ((1 === e.nodeType || r) && t(e, n, s)) return !0;
    } else for (;e = e[i]; ) if (1 === e.nodeType || r) if (c = e[F] || (e[F] = {}), 
    (l = c[i]) && l[0] === u) {
     if ((a = l[1]) === !0 || a === S) return a === !0;
    } else if (l = c[i] = [ u ], l[1] = t(e, n, s) || S, l[1] === !0) return !0;
   };
  }
  function g(t) {
   return t.length > 1 ? function(e, n, i) {
    for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
    return !0;
   } : t[0];
  }
  function m(t, e, n, i, r) {
   for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (n && !n(o, i, r) || (s.push(o), 
   c && e.push(a)));
   return s;
  }
  function v(t, e, n, i, o, s) {
   return i && !i[F] && (i = v(i)), o && !o[F] && (o = v(o, s)), r(function(r, s, a, l) {
    var c, u, p, f = [], h = [], d = s.length, g = r || x(e || "*", a.nodeType ? [ a ] : a, []), v = !t || !r && e ? g : m(g, f, t, a, l), y = n ? o || (r ? t : d || i) ? [] : s : v;
    if (n && n(v, y, a, l), i) for (c = m(y, h), i(c, [], a, l), u = c.length; u--; ) (p = c[u]) && (y[h[u]] = !(v[h[u]] = p));
    if (r) {
     if (o || t) {
      if (o) {
       for (c = [], u = y.length; u--; ) (p = y[u]) && c.push(v[u] = p);
       o(null, y = [], c, l);
      }
      for (u = y.length; u--; ) (p = y[u]) && (c = o ? nt.call(r, p) : f[u]) > -1 && (r[c] = !(s[c] = p));
     }
    } else y = m(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, l) : tt.apply(s, y);
   });
  }
  function y(t) {
   for (var e, n, i, r = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = d(function(t) {
    return t === e;
   }, s, !0), c = d(function(t) {
    return nt.call(e, t) > -1;
   }, s, !0), u = [ function(t, n, i) {
    return !o && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
   } ]; r > a; a++) if (n = k.relative[t[a].type]) u = [ d(g(u), n) ]; else {
    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[F]) {
     for (i = ++a; r > i && !k.relative[t[i].type]; i++) ;
     return v(a > 1 && g(u), a > 1 && h(t.slice(0, a - 1).concat({
      value: " " === t[a - 2].type ? "*" : ""
     })).replace(ut, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t));
    }
    u.push(n);
   }
   return g(u);
  }
  function b(t, e) {
   var i = 0, o = e.length > 0, s = t.length > 0, a = function(r, a, l, c, u) {
    var p, f, h, d = [], g = 0, v = "0", y = r && [], b = null != u, x = D, w = r || s && k.find.TAG("*", u && a.parentNode || a), T = H += null == x ? 1 : Math.random() || .1;
    for (b && (D = a !== _ && a, S = i); null != (p = w[v]); v++) {
     if (s && p) {
      for (f = 0; h = t[f++]; ) if (h(p, a, l)) {
       c.push(p);
       break;
      }
      b && (H = T, S = ++i);
     }
     o && ((p = !h && p) && g--, r && y.push(p));
    }
    if (g += v, o && v !== g) {
     for (f = 0; h = e[f++]; ) h(y, d, a, l);
     if (r) {
      if (g > 0) for (;v--; ) y[v] || d[v] || (d[v] = V.call(c));
      d = m(d);
     }
     tt.apply(c, d), b && !r && d.length > 0 && g + e.length > 1 && n.uniqueSort(c);
    }
    return b && (H = T, D = x), y;
   };
   return o ? r(a) : a;
  }
  function x(t, e, i) {
   for (var r = 0, o = e.length; o > r; r++) n(t, e[r], i);
   return i;
  }
  function w(t, e, n, i) {
   var r, o, s, a, l, c = f(t);
   if (!i && 1 === c.length) {
    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === e.nodeType && L && k.relative[o[1].type]) {
     if (e = (k.find.ID(s.matches[0].replace(Ct, St), e) || [])[0], !e) return n;
     t = t.slice(o.shift().value.length);
    }
    for (r = vt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]); ) if ((l = k.find[a]) && (i = l(s.matches[0].replace(Ct, St), ht.test(o[0].type) && e.parentNode || e))) {
     if (o.splice(r, 1), t = i.length && h(o), !t) return tt.apply(n, i), n;
     break;
    }
   }
   return j(t, c)(i, e, !L, n, ht.test(t)), n;
  }
  var T, C, S, k, E, N, j, D, A, O, _, $, L, I, R, q, P, F = "sizzle" + -new Date(), M = t.document, H = 0, U = 0, B = i(), W = i(), z = i(), X = !1, J = function(t, e) {
   return t === e ? (X = !0, 0) : 0;
  }, G = typeof e, Y = 1 << 31, Q = {}.hasOwnProperty, K = [], V = K.pop, Z = K.push, tt = K.push, et = K.slice, nt = K.indexOf || function(t) {
   for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
   return -1;
  }, it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", rt = "[\\x20\\t\\r\\n\\f]", st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", at = st.replace("w", "w#"), lt = "\\[" + rt + "*(" + st + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + rt + "*\\]", ct = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + lt.replace(3, 8) + ")*)|.*)\\)|)", ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"), pt = new RegExp("^" + rt + "*," + rt + "*"), ft = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"), ht = new RegExp(rt + "*[+~]"), dt = new RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"), gt = new RegExp(ct), mt = new RegExp("^" + at + "$"), vt = {
   ID: new RegExp("^#(" + st + ")"),
   CLASS: new RegExp("^\\.(" + st + ")"),
   TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
   ATTR: new RegExp("^" + lt),
   PSEUDO: new RegExp("^" + ct),
   CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
   bool: new RegExp("^(?:" + it + ")$", "i"),
   needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
  }, yt = /^[^{]+\{\s*\[native \w/, bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /^(?:input|select|textarea|button)$/i, wt = /^h\d$/i, Tt = /'|\\/g, Ct = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"), St = function(t, e, n) {
   var i = "0x" + e - 65536;
   return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
  };
  try {
   tt.apply(K = et.call(M.childNodes), M.childNodes), K[M.childNodes.length].nodeType;
  } catch (kt) {
   tt = {
    apply: K.length ? function(t, e) {
     Z.apply(t, et.call(e));
    } : function(t, e) {
     for (var n = t.length, i = 0; t[n++] = e[i++]; ) ;
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
    var n, i = [], r = 0, o = e.getElementsByTagName(t);
    if ("*" === t) {
     for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
     return i;
    }
    return o;
   }, k.find.CLASS = C.getElementsByClassName && function(t, e) {
    return typeof e.getElementsByClassName !== G && L ? e.getElementsByClassName(t) : void 0;
   }, R = [], I = [], (C.qsa = yt.test(e.querySelectorAll)) && (o(function(t) {
    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || I.push("\\[" + rt + "*(?:value|" + it + ")"), 
    t.querySelectorAll(":checked").length || I.push(":checked");
   }), o(function(t) {
    var n = e.createElement("input");
    n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && I.push("[*^$]=" + rt + "*(?:''|\"\")"), 
    t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
    I.push(",.*:");
   })), (C.matchesSelector = yt.test(q = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function(t) {
    C.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), R.push("!=", ct);
   }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), 
   P = yt.test($.contains) || $.compareDocumentPosition ? function(t, e) {
    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
   } : function(t, e) {
    if (e) for (;e = e.parentNode; ) if (e === t) return !0;
    return !1;
   }, J = $.compareDocumentPosition ? function(t, n) {
    if (t === n) return X = !0, 0;
    var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
    return i ? 1 & i || !C.sortDetached && n.compareDocumentPosition(t) === i ? t === e || P(M, t) ? -1 : n === e || P(M, n) ? 1 : A ? nt.call(A, t) - nt.call(A, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1;
   } : function(t, n) {
    var i, r = 0, o = t.parentNode, s = n.parentNode, l = [ t ], c = [ n ];
    if (t === n) return X = !0, 0;
    if (!o || !s) return t === e ? -1 : n === e ? 1 : o ? -1 : s ? 1 : A ? nt.call(A, t) - nt.call(A, n) : 0;
    if (o === s) return a(t, n);
    for (i = t; i = i.parentNode; ) l.unshift(i);
    for (i = n; i = i.parentNode; ) c.unshift(i);
    for (;l[r] === c[r]; ) r++;
    return r ? a(l[r], c[r]) : l[r] === M ? -1 : c[r] === M ? 1 : 0;
   }, e) : _;
  }, n.matches = function(t, e) {
   return n(t, null, null, e);
  }, n.matchesSelector = function(t, e) {
   if ((t.ownerDocument || t) !== _ && O(t), e = e.replace(dt, "='$1']"), C.matchesSelector && L && (!R || !R.test(e)) && (!I || !I.test(e))) try {
    var i = q.call(t, e);
    if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
   } catch (r) {}
   return n(e, _, null, [ t ]).length > 0;
  }, n.contains = function(t, e) {
   return (t.ownerDocument || t) !== _ && O(t), P(t, e);
  }, n.attr = function(t, n) {
   (t.ownerDocument || t) !== _ && O(t);
   var i = k.attrHandle[n.toLowerCase()], r = i && Q.call(k.attrHandle, n.toLowerCase()) ? i(t, n, !L) : e;
   return r === e ? C.attributes || !L ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r;
  }, n.error = function(t) {
   throw new Error("Syntax error, unrecognized expression: " + t);
  }, n.uniqueSort = function(t) {
   var e, n = [], i = 0, r = 0;
   if (X = !C.detectDuplicates, A = !C.sortStable && t.slice(0), t.sort(J), X) {
    for (;e = t[r++]; ) e === t[r] && (i = n.push(r));
    for (;i--; ) t.splice(n[i], 1);
   }
   return t;
  }, E = n.getText = function(t) {
   var e, n = "", i = 0, r = t.nodeType;
   if (r) {
    if (1 === r || 9 === r || 11 === r) {
     if ("string" == typeof t.textContent) return t.textContent;
     for (t = t.firstChild; t; t = t.nextSibling) n += E(t);
    } else if (3 === r || 4 === r) return t.nodeValue;
   } else for (;e = t[i]; i++) n += E(e);
   return n;
  }, k = n.selectors = {
   cacheLength: 50,
   createPseudo: r,
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
     var n, i = !t[5] && t[2];
     return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && gt.test(i) && (n = f(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), 
     t[2] = i.slice(0, n)), t.slice(0, 3));
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
     return e || (e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && B(t, function(t) {
      return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "");
     });
    },
    ATTR: function(t, e, i) {
     return function(r) {
      var o = n.attr(r, t);
      return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0;
     };
    },
    CHILD: function(t, e, n, i, r) {
     var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
     return 1 === i && 0 === r ? function(t) {
      return !!t.parentNode;
     } : function(e, n, l) {
      var c, u, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
      if (m) {
       if (o) {
        for (;g; ) {
         for (p = e; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
         d = g = "only" === t && !d && "nextSibling";
        }
        return !0;
       }
       if (d = [ s ? m.firstChild : m.lastChild ], s && y) {
        for (u = m[F] || (m[F] = {}), c = u[t] || [], h = c[0] === H && c[1], f = c[0] === H && c[2], 
        p = h && m.childNodes[h]; p = ++h && p && p[g] || (f = h = 0) || d.pop(); ) if (1 === p.nodeType && ++f && p === e) {
         u[t] = [ H, h, f ];
         break;
        }
       } else if (y && (c = (e[F] || (e[F] = {}))[t]) && c[0] === H) f = c[1]; else for (;(p = ++h && p && p[g] || (f = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (y && ((p[F] || (p[F] = {}))[t] = [ H, f ]), 
       p !== e)); ) ;
       return f -= r, f === i || f % i === 0 && f / i >= 0;
      }
     };
    },
    PSEUDO: function(t, e) {
     var i, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
     return o[F] ? o(e) : o.length > 1 ? (i = [ t, t, "", e ], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, n) {
      for (var i, r = o(t, e), s = r.length; s--; ) i = nt.call(t, r[s]), t[i] = !(n[i] = r[s]);
     }) : function(t) {
      return o(t, 0, i);
     }) : o;
    }
   },
   pseudos: {
    not: r(function(t) {
     var e = [], n = [], i = j(t.replace(ut, "$1"));
     return i[F] ? r(function(t, e, n, r) {
      for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
     }) : function(t, r, o) {
      return e[0] = t, i(e, null, o, n), !n.pop();
     };
    }),
    has: r(function(t) {
     return function(e) {
      return n(t, e).length > 0;
     };
    }),
    contains: r(function(t) {
     return function(e) {
      return (e.textContent || e.innerText || E(e)).indexOf(t) > -1;
     };
    }),
    lang: r(function(t) {
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
    first: u(function() {
     return [ 0 ];
    }),
    last: u(function(t, e) {
     return [ e - 1 ];
    }),
    eq: u(function(t, e, n) {
     return [ 0 > n ? n + e : n ];
    }),
    even: u(function(t, e) {
     for (var n = 0; e > n; n += 2) t.push(n);
     return t;
    }),
    odd: u(function(t, e) {
     for (var n = 1; e > n; n += 2) t.push(n);
     return t;
    }),
    lt: u(function(t, e, n) {
     for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
     return t;
    }),
    gt: u(function(t, e, n) {
     for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
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
  }) k.pseudos[T] = c(T);
  p.prototype = k.filters = k.pseudos, k.setFilters = new p(), j = n.compile = function(t, e) {
   var n, i = [], r = [], o = z[t + " "];
   if (!o) {
    for (e || (e = f(t)), n = e.length; n--; ) o = y(e[n]), o[F] ? i.push(o) : r.push(o);
    o = z(t, b(r, i));
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
  }) || s(it, function(t, e, n) {
   var i;
   return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null;
  }), ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = n.uniqueSort, 
  ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains;
 }(t);
 var dt = {};
 ot.Callbacks = function(t) {
  t = "string" == typeof t ? dt[t] || i(t) : ot.extend({}, t);
  var n, r, o, s, a, l, c = [], u = !t.once && [], p = function(e) {
   for (n = t.memory && e, r = !0, l = s || 0, s = 0, a = c.length, o = !0; c && a > l; l++) if (c[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
    n = !1;
    break;
   }
   o = !1, c && (u ? u.length && p(u.shift()) : n ? c = [] : f.disable());
  }, f = {
   add: function() {
    if (c) {
     var e = c.length;
     !function i(e) {
      ot.each(e, function(e, n) {
       var r = ot.type(n);
       "function" === r ? t.unique && f.has(n) || c.push(n) : n && n.length && "string" !== r && i(n);
      });
     }(arguments), o ? a = c.length : n && (s = e, p(n));
    }
    return this;
   },
   remove: function() {
    return c && ot.each(arguments, function(t, e) {
     for (var n; (n = ot.inArray(e, c, n)) > -1; ) c.splice(n, 1), o && (a >= n && a--, 
     l >= n && l--);
    }), this;
   },
   has: function(t) {
    return t ? ot.inArray(t, c) > -1 : !(!c || !c.length);
   },
   empty: function() {
    return c = [], a = 0, this;
   },
   disable: function() {
    return c = u = n = e, this;
   },
   disabled: function() {
    return !c;
   },
   lock: function() {
    return u = e, n || f.disable(), this;
   },
   locked: function() {
    return !u;
   },
   fireWith: function(t, e) {
    return !c || r && !u || (e = e || [], e = [ t, e.slice ? e.slice() : e ], o ? u.push(e) : p(e)), 
    this;
   },
   fire: function() {
    return f.fireWith(this, arguments), this;
   },
   fired: function() {
    return !!r;
   }
  };
  return f;
 }, ot.extend({
  Deferred: function(t) {
   var e = [ [ "resolve", "done", ot.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ot.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ot.Callbacks("memory") ] ], n = "pending", i = {
    state: function() {
     return n;
    },
    always: function() {
     return r.done(arguments).fail(arguments), this;
    },
    then: function() {
     var t = arguments;
     return ot.Deferred(function(n) {
      ot.each(e, function(e, o) {
       var s = o[0], a = ot.isFunction(t[e]) && t[e];
       r[o[1]](function() {
        var t = a && a.apply(this, arguments);
        t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [ t ] : arguments);
       });
      }), t = null;
     }).promise();
    },
    promise: function(t) {
     return null != t ? ot.extend(t, i) : i;
    }
   }, r = {};
   return i.pipe = i.then, ot.each(e, function(t, o) {
    var s = o[2], a = o[3];
    i[o[1]] = s.add, a && s.add(function() {
     n = a;
    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
     return r[o[0] + "With"](this === r ? i : this, arguments), this;
    }, r[o[0] + "With"] = s.fireWith;
   }), i.promise(r), t && t.call(r, r), r;
  },
  when: function(t) {
   var e, n, i, r = 0, o = tt.call(arguments), s = o.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ot.Deferred(), c = function(t, n, i) {
    return function(r) {
     n[t] = this, i[t] = arguments.length > 1 ? tt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
    };
   };
   if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --a;
   return a || l.resolveWith(i, o), l.promise();
  }
 }), ot.support = function(e) {
  var n = z.createElement("input"), i = z.createDocumentFragment(), r = z.createElement("div"), o = z.createElement("select"), s = o.appendChild(z.createElement("option"));
  return n.type ? (n.type = "checkbox", e.checkOn = "" !== n.value, e.optSelected = s.selected, 
  e.reliableMarginRight = !0, e.boxSizingReliable = !0, e.pixelPosition = !1, n.checked = !0, 
  e.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled, 
  n = z.createElement("input"), n.value = "t", n.type = "radio", e.radioValue = "t" === n.value, 
  n.setAttribute("checked", "t"), n.setAttribute("name", "t"), i.appendChild(n), e.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, 
  e.focusinBubbles = "onfocusin" in t, r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", 
  e.clearCloneStyle = "content-box" === r.style.backgroundClip, ot(function() {
   var n, i, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", s = z.getElementsByTagName("body")[0];
   s && (n = z.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
   s.appendChild(n).appendChild(r), r.innerHTML = "", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
   ot.swap(s, null != s.style.zoom ? {
    zoom: 1
   } : {}, function() {
    e.boxSizing = 4 === r.offsetWidth;
   }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(r, null) || {}).top, 
   e.boxSizingReliable = "4px" === (t.getComputedStyle(r, null) || {
    width: "4px"
   }).width, i = r.appendChild(z.createElement("div")), i.style.cssText = r.style.cssText = o, 
   i.style.marginRight = i.style.width = "0", r.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), 
   s.removeChild(n));
  }), e) : e;
 }({});
 var gt, mt, vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, yt = /([A-Z])/g;
 r.uid = 1, r.accepts = function(t) {
  return t.nodeType ? 1 === t.nodeType || 9 === t.nodeType : !0;
 }, r.prototype = {
  key: function(t) {
   if (!r.accepts(t)) return 0;
   var e = {}, n = t[this.expando];
   if (!n) {
    n = r.uid++;
    try {
     e[this.expando] = {
      value: n
     }, Object.defineProperties(t, e);
    } catch (i) {
     e[this.expando] = n, ot.extend(t, e);
    }
   }
   return this.cache[n] || (this.cache[n] = {}), n;
  },
  set: function(t, e, n) {
   var i, r = this.key(t), o = this.cache[r];
   if ("string" == typeof e) o[e] = n; else if (ot.isEmptyObject(o)) ot.extend(this.cache[r], e); else for (i in e) o[i] = e[i];
   return o;
  },
  get: function(t, n) {
   var i = this.cache[this.key(t)];
   return n === e ? i : i[n];
  },
  access: function(t, n, i) {
   var r;
   return n === e || n && "string" == typeof n && i === e ? (r = this.get(t, n), r !== e ? r : this.get(t, ot.camelCase(n))) : (this.set(t, n, i), 
   i !== e ? i : n);
  },
  remove: function(t, n) {
   var i, r, o, s = this.key(t), a = this.cache[s];
   if (n === e) this.cache[s] = {}; else {
    ot.isArray(n) ? r = n.concat(n.map(ot.camelCase)) : (o = ot.camelCase(n), n in a ? r = [ n, o ] : (r = o, 
    r = r in a ? [ r ] : r.match(at) || [])), i = r.length;
    for (;i--; ) delete a[r[i]];
   }
  },
  hasData: function(t) {
   return !ot.isEmptyObject(this.cache[t[this.expando]] || {});
  },
  discard: function(t) {
   t[this.expando] && delete this.cache[t[this.expando]];
  }
 }, gt = new r(), mt = new r(), ot.extend({
  acceptData: r.accepts,
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
   var i, r, s = this[0], a = 0, l = null;
   if (t === e) {
    if (this.length && (l = gt.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
     for (i = s.attributes; a < i.length; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), 
     o(s, r, l[r]));
     mt.set(s, "hasDataAttrs", !0);
    }
    return l;
   }
   return "object" == typeof t ? this.each(function() {
    gt.set(this, t);
   }) : ot.access(this, function(n) {
    var i, r = ot.camelCase(t);
    if (s && n === e) {
     if (i = gt.get(s, t), i !== e) return i;
     if (i = gt.get(s, r), i !== e) return i;
     if (i = o(s, r, e), i !== e) return i;
    } else this.each(function() {
     var i = gt.get(this, r);
     gt.set(this, r, n), -1 !== t.indexOf("-") && i !== e && gt.set(this, t, n);
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
   var i;
   return t ? (e = (e || "fx") + "queue", i = mt.get(t, e), n && (!i || ot.isArray(n) ? i = mt.access(t, e, ot.makeArray(n)) : i.push(n)), 
   i || []) : void 0;
  },
  dequeue: function(t, e) {
   e = e || "fx";
   var n = ot.queue(t, e), i = n.length, r = n.shift(), o = ot._queueHooks(t, e), s = function() {
    ot.dequeue(t, e);
   };
   "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), 
   delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire();
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
   var i = 2;
   return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : n === e ? this : this.each(function() {
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
    var i = setTimeout(e, t);
    n.stop = function() {
     clearTimeout(i);
    };
   });
  },
  clearQueue: function(t) {
   return this.queue(t || "fx", []);
  },
  promise: function(t, n) {
   var i, r = 1, o = ot.Deferred(), s = this, a = this.length, l = function() {
    --r || o.resolveWith(s, [ s ]);
   };
   for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--; ) i = mt.get(s[a], t + "queueHooks"), 
   i && i.empty && (r++, i.empty.add(l));
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
   var e, n, i, r, o, s = 0, a = this.length, l = "string" == typeof t && t;
   if (ot.isFunction(t)) return this.each(function(e) {
    ot(this).addClass(t.call(this, e, this.className));
   });
   if (l) for (e = (t || "").match(at) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
    for (o = 0; r = e[o++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
    n.className = ot.trim(i);
   }
   return this;
  },
  removeClass: function(t) {
   var e, n, i, r, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
   if (ot.isFunction(t)) return this.each(function(e) {
    ot(this).removeClass(t.call(this, e, this.className));
   });
   if (l) for (e = (t || "").match(at) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
    for (o = 0; r = e[o++]; ) for (;i.indexOf(" " + r + " ") >= 0; ) i = i.replace(" " + r + " ", " ");
    n.className = t ? ot.trim(i) : "";
   }
   return this;
  },
  toggleClass: function(t, e) {
   var n = typeof t;
   return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
    ot(this).toggleClass(t.call(this, n, this.className, e), e);
   }) : this.each(function() {
    if ("string" === n) for (var e, i = 0, r = ot(this), o = t.match(at) || []; e = o[i++]; ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else n !== B && "boolean" !== n || (this.className && mt.set(this, "__className__", this.className), 
    this.className = this.className || t === !1 ? "" : mt.get(this, "__className__") || "");
   });
  },
  hasClass: function(t) {
   for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(e) >= 0) return !0;
   return !1;
  },
  val: function(t) {
   var n, i, r, o = this[0];
   {
    if (arguments.length) return r = ot.isFunction(t), this.each(function(i) {
     var o;
     1 === this.nodeType && (o = r ? t.call(this, i, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(t) {
      return null == t ? "" : t + "";
     })), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o));
    });
    if (o) return n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], 
    n && "get" in n && (i = n.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(Tt, "") : null == i ? "" : i);
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
     for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], 
     (n.selected || l === r) && (ot.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
      if (e = ot(n).val(), o) return e;
      s.push(e);
     }
     return s;
    },
    set: function(t, e) {
     for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--; ) i = r[s], 
     (i.selected = ot.inArray(ot(i).val(), o) >= 0) && (n = !0);
     return n || (t.selectedIndex = -1), o;
    }
   }
  },
  attr: function(t, n, i) {
   var r, o, s = t.nodeType;
   if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === B ? ot.prop(t, n, i) : (1 === s && ot.isXMLDoc(t) || (n = n.toLowerCase(), 
   r = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? xt : bt)), i === e ? r && "get" in r && null !== (o = r.get(t, n)) ? o : (o = ot.find.attr(t, n), 
   null == o ? e : o) : null !== i ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), 
   i) : void ot.removeAttr(t, n));
  },
  removeAttr: function(t, e) {
   var n, i, r = 0, o = e && e.match(at);
   if (o && 1 === t.nodeType) for (;n = o[r++]; ) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), 
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
  prop: function(t, n, i) {
   var r, o, s, a = t.nodeType;
   if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ot.isXMLDoc(t), s && (n = ot.propFix[n] || n, 
   o = ot.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n];
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
  var i = ot.expr.attrHandle[n] || ot.find.attr;
  ot.expr.attrHandle[n] = function(t, n, r) {
   var o = ot.expr.attrHandle[n], s = r ? e : (ot.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
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
  add: function(t, n, i, r, o) {
   var s, a, l, c, u, p, f, h, d, g, m, v = mt.get(t);
   if (v) {
    for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = ot.guid++), 
    (c = v.events) || (c = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
     return typeof ot === B || t && ot.event.triggered === t.type ? e : ot.event.dispatch.apply(a.elem, arguments);
    }, a.elem = t), n = (n || "").match(at) || [ "" ], u = n.length; u--; ) l = Nt.exec(n[u]) || [], 
    d = m = l[1], g = (l[2] || "").split(".").sort(), d && (f = ot.event.special[d] || {}, 
    d = (o ? f.delegateType : f.bindType) || d, f = ot.event.special[d] || {}, p = ot.extend({
     type: d,
     origType: m,
     data: r,
     handler: i,
     guid: i.guid,
     selector: o,
     needsContext: o && ot.expr.match.needsContext.test(o),
     namespace: g.join(".")
    }, s), (h = c[d]) || (h = c[d] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, g, a) !== !1 || t.addEventListener && t.addEventListener(d, a, !1)), 
    f.add && (f.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), 
    ot.event.global[d] = !0);
    t = null;
   }
  },
  remove: function(t, e, n, i, r) {
   var o, s, a, l, c, u, p, f, h, d, g, m = mt.hasData(t) && mt.get(t);
   if (m && (l = m.events)) {
    for (e = (e || "").match(at) || [ "" ], c = e.length; c--; ) if (a = Nt.exec(e[c]) || [], 
    h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
     for (p = ot.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, 
     f = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
     s = o = f.length; o--; ) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), 
     u.selector && f.delegateCount--, p.remove && p.remove.call(t, u));
     s && !f.length && (p.teardown && p.teardown.call(t, d, m.handle) !== !1 || ot.removeEvent(t, h, m.handle), 
     delete l[h]);
    } else for (h in l) ot.event.remove(t, h + e[c], n, i, !0);
    ot.isEmptyObject(l) && (delete m.handle, mt.remove(t, "events"));
   }
  },
  trigger: function(n, i, r, o) {
   var s, a, l, c, u, p, f, h = [ r || z ], d = it.call(n, "type") ? n.type : n, g = it.call(n, "namespace") ? n.namespace.split(".") : [];
   if (a = l = r = r || z, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(d + ot.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), 
   d = g.shift(), g.sort()), u = d.indexOf(":") < 0 && "on" + d, n = n[ot.expando] ? n : new ot.Event(d, "object" == typeof n && n), 
   n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
   n.result = e, n.target || (n.target = r), i = null == i ? [ n ] : ot.makeArray(i, [ n ]), 
   f = ot.event.special[d] || {}, o || !f.trigger || f.trigger.apply(r, i) !== !1)) {
    if (!o && !f.noBubble && !ot.isWindow(r)) {
     for (c = f.delegateType || d, Et.test(c + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
     l = a;
     l === (r.ownerDocument || z) && h.push(l.defaultView || l.parentWindow || t);
    }
    for (s = 0; (a = h[s++]) && !n.isPropagationStopped(); ) n.type = s > 1 ? c : f.bindType || d, 
    p = (mt.get(a, "events") || {})[n.type] && mt.get(a, "handle"), p && p.apply(a, i), 
    p = u && a[u], p && ot.acceptData(a) && p.apply && p.apply(a, i) === !1 && n.preventDefault();
    return n.type = d, o || n.isDefaultPrevented() || f._default && f._default.apply(h.pop(), i) !== !1 || !ot.acceptData(r) || u && ot.isFunction(r[d]) && !ot.isWindow(r) && (l = r[u], 
    l && (r[u] = null), ot.event.triggered = d, r[d](), ot.event.triggered = e, l && (r[u] = l)), 
    n.result;
   }
  },
  dispatch: function(t) {
   t = ot.event.fix(t);
   var n, i, r, o, s, a = [], l = tt.call(arguments), c = (mt.get(this, "events") || {})[t.type] || [], u = ot.event.special[t.type] || {};
   if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
    for (a = ot.event.handlers.call(this, t, c), n = 0; (o = a[n++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
    i = 0; (s = o.handlers[i++]) && !t.isImmediatePropagationStopped(); ) t.namespace_re && !t.namespace_re.test(s.namespace) || (t.handleObj = s, 
    t.data = s.data, r = ((ot.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), 
    r !== e && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
    return u.postDispatch && u.postDispatch.call(this, t), t.result;
   }
  },
  handlers: function(t, n) {
   var i, r, o, s, a = [], l = n.delegateCount, c = t.target;
   if (l && c.nodeType && (!t.button || "click" !== t.type)) for (;c !== this; c = c.parentNode || this) if (c.disabled !== !0 || "click" !== t.type) {
    for (r = [], i = 0; l > i; i++) s = n[i], o = s.selector + " ", r[o] === e && (r[o] = s.needsContext ? ot(o, this).index(c) >= 0 : ot.find(o, this, null, [ c ]).length), 
    r[o] && r.push(s);
    r.length && a.push({
     elem: c,
     handlers: r
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
    var i, r, o, s = n.button;
    return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || z, 
    r = i.documentElement, o = i.body, t.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), 
    t.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), 
    t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t;
   }
  },
  fix: function(t) {
   if (t[ot.expando]) return t;
   var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
   for (s || (this.fixHooks[r] = s = kt.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), 
   i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--; ) n = i[e], 
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
  simulate: function(t, e, n, i) {
   var r = ot.extend(new ot.Event(), n, {
    type: t,
    isSimulated: !0,
    originalEvent: {}
   });
   i ? ot.event.trigger(r, null, e) : ot.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault();
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
    var n, i = this, r = t.relatedTarget, o = t.handleObj;
    return r && (r === i || ot.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), 
    t.type = e), n;
   }
  };
 }), ot.support.focusinBubbles || ot.each({
  focus: "focusin",
  blur: "focusout"
 }, function(t, e) {
  var n = 0, i = function(t) {
   ot.event.simulate(e, t.target, ot.event.fix(t), !0);
  };
  ot.event.special[e] = {
   setup: function() {
    0 === n++ && z.addEventListener(t, i, !0);
   },
   teardown: function() {
    0 === --n && z.removeEventListener(t, i, !0);
   }
  };
 }), ot.fn.extend({
  on: function(t, n, i, r, o) {
   var s, l;
   if ("object" == typeof t) {
    "string" != typeof n && (i = i || n, n = e);
    for (l in t) this.on(l, n, i, t[l], o);
    return this;
   }
   if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, 
   i = e) : (r = i, i = n, n = e)), r === !1) r = a; else if (!r) return this;
   return 1 === o && (s = r, r = function(t) {
    return ot().off(t), s.apply(this, arguments);
   }, r.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
    ot.event.add(this, t, r, i, n);
   });
  },
  one: function(t, e, n, i) {
   return this.on(t, e, n, i, 1);
  },
  off: function(t, n, i) {
   var r, o;
   if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ot(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
   this;
   if ("object" == typeof t) {
    for (o in t) this.off(o, n, t[o]);
    return this;
   }
   return n !== !1 && "function" != typeof n || (i = n, n = e), i === !1 && (i = a), 
   this.each(function() {
    ot.event.remove(this, t, i, n);
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
   var e, n = [], i = this, r = i.length;
   if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
    for (e = 0; r > e; e++) if (ot.contains(i[e], this)) return !0;
   }));
   for (e = 0; r > e; e++) ot.find(t, i[e], n);
   return n = this.pushStack(r > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, 
   n;
  },
  has: function(t) {
   var e = ot(t, this), n = e.length;
   return this.filter(function() {
    for (var t = 0; n > t; t++) if (ot.contains(this, e[t])) return !0;
   });
  },
  not: function(t) {
   return this.pushStack(u(this, t || [], !0));
  },
  filter: function(t) {
   return this.pushStack(u(this, t || [], !1));
  },
  is: function(t) {
   return !!u(this, "string" == typeof t && At.test(t) ? ot(t) : t || [], !1).length;
  },
  closest: function(t, e) {
   for (var n, i = 0, r = this.length, o = [], s = At.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
    n = o.push(n);
    break;
   }
   return this.pushStack(o.length > 1 ? ot.unique(o) : o);
  },
  index: function(t) {
   return t ? "string" == typeof t ? et.call(ot(t), this[0]) : et.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  },
  add: function(t, e) {
   var n = "string" == typeof t ? ot(t, e) : ot.makeArray(t && t.nodeType ? [ t ] : t), i = ot.merge(this.get(), n);
   return this.pushStack(ot.unique(i));
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
   return c(t, "nextSibling");
  },
  prev: function(t) {
   return c(t, "previousSibling");
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
  ot.fn[t] = function(n, i) {
   var r = ot.map(this, e, n);
   return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), 
   this.length > 1 && (Ot[t] || ot.unique(r), Dt.test(t) && r.reverse()), this.pushStack(r);
  };
 }), ot.extend({
  filter: function(t, e, n) {
   var i = e[0];
   return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [ i ] : [] : ot.find.matches(t, ot.grep(e, function(t) {
    return 1 === t.nodeType;
   }));
  },
  dir: function(t, n, i) {
   for (var r = [], o = i !== e; (t = t[n]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
    if (o && ot(t).is(i)) break;
    r.push(t);
   }
   return r;
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
   for (var n, i = t ? ot.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ot.cleanData(m(n)), 
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
    var n = this[0] || {}, i = 0, r = this.length;
    if (t === e && 1 === n.nodeType) return n.innerHTML;
    if ("string" == typeof t && !It.test(t) && !Ht[($t.exec(t) || [ "", "" ])[1].toLowerCase()]) {
     t = t.replace(_t, "<$1></$2>");
     try {
      for (;r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ot.cleanData(m(n, !1)), 
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
    var i = t[e++], r = t[e++];
    r && (i && i.parentNode !== r && (i = this.nextSibling), ot(this).remove(), r.insertBefore(n, i));
   }, !0), e ? this : this.remove();
  },
  detach: function(t) {
   return this.remove(t, !0);
  },
  domManip: function(t, e, n) {
   t = V.apply([], t);
   var i, r, o, s, a, l, c = 0, u = this.length, p = this, d = u - 1, g = t[0], v = ot.isFunction(g);
   if (v || !(1 >= u || "string" != typeof g || ot.support.checkClone) && qt.test(g)) return this.each(function(i) {
    var r = p.eq(i);
    v && (t[0] = g.call(this, i, r.html())), r.domManip(t, e, n);
   });
   if (u && (i = ot.buildFragment(t, this[0].ownerDocument, !1, !n && this), r = i.firstChild, 
   1 === i.childNodes.length && (i = r), r)) {
    for (o = ot.map(m(i, "script"), f), s = o.length; u > c; c++) a = i, c !== d && (a = ot.clone(a, !0, !0), 
    s && ot.merge(o, m(a, "script"))), e.call(this[c], a, c);
    if (s) for (l = o[o.length - 1].ownerDocument, ot.map(o, h), c = 0; s > c; c++) a = o[c], 
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
   for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), 
   ot(r[s])[e](n), Z.apply(i, n.get());
   return this.pushStack(i);
  };
 }), ot.extend({
  clone: function(t, e, n) {
   var i, r, o, s, a = t.cloneNode(!0), l = ot.contains(t.ownerDocument, t);
   if (!(ot.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (s = m(a), 
   o = m(t), i = 0, r = o.length; r > i; i++) v(o[i], s[i]);
   if (e) if (n) for (o = o || m(t), s = s || m(a), i = 0, r = o.length; r > i; i++) g(o[i], s[i]); else g(t, a);
   return s = m(a, "script"), s.length > 0 && d(s, !l && m(t, "script")), a;
  },
  buildFragment: function(t, e, n, i) {
   for (var r, o, s, a, l, c, u = 0, p = t.length, f = e.createDocumentFragment(), h = []; p > u; u++) if (r = t[u], 
   r || 0 === r) if ("object" === ot.type(r)) ot.merge(h, r.nodeType ? [ r ] : r); else if (Lt.test(r)) {
    for (o = o || f.appendChild(e.createElement("div")), s = ($t.exec(r) || [ "", "" ])[1].toLowerCase(), 
    a = Ht[s] || Ht._default, o.innerHTML = a[1] + r.replace(_t, "<$1></$2>") + a[2], 
    c = a[0]; c--; ) o = o.lastChild;
    ot.merge(h, o.childNodes), o = f.firstChild, o.textContent = "";
   } else h.push(e.createTextNode(r));
   for (f.textContent = "", u = 0; r = h[u++]; ) if ((!i || -1 === ot.inArray(r, i)) && (l = ot.contains(r.ownerDocument, r), 
   o = m(f.appendChild(r), "script"), l && d(o), n)) for (c = 0; r = o[c++]; ) Pt.test(r.type || "") && n.push(r);
   return f;
  },
  cleanData: function(t) {
   for (var n, i, o, s, a, l, c = ot.event.special, u = 0; (i = t[u]) !== e; u++) {
    if (r.accepts(i) && (a = i[mt.expando], a && (n = mt.cache[a]))) {
     if (o = Object.keys(n.events || {}), o.length) for (l = 0; (s = o[l]) !== e; l++) c[s] ? ot.event.remove(i, s) : ot.removeEvent(i, s, n.handle);
     mt.cache[a] && delete mt.cache[a];
    }
    delete gt.cache[i[gt.expando]];
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
   return ot.access(this, function(t, n, i) {
    var r, o, s = {}, a = 0;
    if (ot.isArray(n)) {
     for (r = x(t), o = n.length; o > a; a++) s[n[a]] = ot.css(t, n[a], !1, r);
     return s;
    }
    return i !== e ? ot.style(t, n, i) : ot.css(t, n);
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
  style: function(t, n, i, r) {
   if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
    var o, s, a, l = ot.camelCase(n), c = t.style;
    return n = ot.cssProps[l] || (ot.cssProps[l] = y(c, l)), a = ot.cssHooks[n] || ot.cssHooks[l], 
    i === e ? a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : c[n] : (s = typeof i, 
    "string" === s && (o = Gt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ot.css(t, n)), 
    s = "number"), null == i || "number" === s && isNaN(i) || ("number" !== s || ot.cssNumber[l] || (i += "px"), 
    ot.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), 
    a && "set" in a && (i = a.set(t, i, r)) === e || (c[n] = i)), void 0);
   }
  },
  css: function(t, n, i, r) {
   var o, s, a, l = ot.camelCase(n);
   return n = ot.cssProps[l] || (ot.cssProps[l] = y(t.style, l)), a = ot.cssHooks[n] || ot.cssHooks[l], 
   a && "get" in a && (o = a.get(t, !0, i)), o === e && (o = Ut(t, n, r)), "normal" === o && n in Kt && (o = Kt[n]), 
   "" === i || i ? (s = parseFloat(o), i === !0 || ot.isNumeric(s) ? s || 0 : o) : o;
  }
 }), Ut = function(t, n, i) {
  var r, o, s, a = i || x(t), l = a ? a.getPropertyValue(n) || a[n] : e, c = t.style;
  return a && ("" !== l || ot.contains(t.ownerDocument, t) || (l = ot.style(t, n)), 
  Jt.test(l) && zt.test(n) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, 
  l = a.width, c.width = r, c.minWidth = o, c.maxWidth = s)), l;
 }, ot.each([ "height", "width" ], function(t, e) {
  ot.cssHooks[e] = {
   get: function(t, n, i) {
    return n ? 0 === t.offsetWidth && Wt.test(ot.css(t, "display")) ? ot.swap(t, Qt, function() {
     return S(t, e, i);
    }) : S(t, e, i) : void 0;
   },
   set: function(t, n, i) {
    var r = i && x(t);
    return T(t, n, i ? C(t, e, i, ot.support.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r), r) : 0);
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
    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) r[t + Vt[i] + e] = o[i] || o[i - 2] || o[0];
    return r;
   }
  }, zt.test(t) || (ot.cssHooks[t + e].set = T);
 });
 var te = /%20/g, ee = /\[\]$/, ne = /\r?\n/g, ie = /^(?:submit|button|image|reset|file)$/i, re = /^(?:input|select|textarea|keygen)/i;
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
    return this.name && !ot(this).is(":disabled") && re.test(this.nodeName) && !ie.test(t) && (this.checked || !Rt.test(t));
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
  var i, r = [], o = function(t, e) {
   e = ot.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
  };
  if (n === e && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
   o(this.name, this.value);
  }); else for (i in t) N(i, t[i], n, o);
  return r.join("&").replace(te, "+");
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
  delegate: function(t, e, n, i) {
   return this.on(e, t, n, i);
  },
  undelegate: function(t, e, n) {
   return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
  }
 });
 var oe, se, ae = ot.now(), le = /\?/, ce = /#.*$/, ue = /([?&])_=[^&]*/, pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, he = /^(?:GET|HEAD)$/, de = /^\/\//, ge = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, me = ot.fn.load, ve = {}, ye = {}, be = "*/".concat("*");
 try {
  se = W.href;
 } catch (xe) {
  se = z.createElement("a"), se.href = "", se = se.href;
 }
 oe = ge.exec(se.toLowerCase()) || [], ot.fn.load = function(t, n, i) {
  if ("string" != typeof t && me) return me.apply(this, arguments);
  var r, o, s, a = this, l = t.indexOf(" ");
  return l >= 0 && (r = t.slice(l), t = t.slice(0, l)), ot.isFunction(n) ? (i = n, 
  n = e) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ot.ajax({
   url: t,
   type: o,
   dataType: "html",
   data: n
  }).done(function(t) {
   s = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(t)).find(r) : t);
  }).complete(i && function(t, e) {
   a.each(i, s || [ t.responseText, e, t ]);
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
   function i(t, n, i, a) {
    var c, p, y, b, w, C = n;
    2 !== x && (x = 2, l && clearTimeout(l), r = e, s = a || "", T.readyState = t > 0 ? 4 : 0, 
    c = t >= 200 && 300 > t || 304 === t, i && (b = O(f, T, i)), b = _(f, b, T, c), 
    c ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), 
    w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
    p = b.data, y = b.error, c = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), 
    T.status = t, T.statusText = (n || C) + "", c ? g.resolveWith(h, [ p, C, T ]) : g.rejectWith(h, [ T, C, y ]), 
    T.statusCode(v), v = e, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [ T, f, c ? p : y ]), 
    m.fireWith(h, [ T, C ]), u && (d.trigger("ajaxComplete", [ T, f ]), --ot.active || ot.event.trigger("ajaxStop")));
   }
   "object" == typeof t && (n = t, t = e), n = n || {};
   var r, o, s, a, l, c, u, p, f = ot.ajaxSetup({}, n), h = f.context || f, d = f.context && (h.nodeType || h.jquery) ? ot(h) : ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
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
     return r && r.abort(e), i(0, e), this;
    }
   };
   if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || se) + "").replace(ce, "").replace(de, oe[1] + "//"), 
   f.type = n.method || n.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(at) || [ "" ], 
   null == f.crossDomain && (c = ge.exec(f.url.toLowerCase()), f.crossDomain = !(!c || c[1] === oe[1] && c[2] === oe[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (oe[3] || ("http:" === oe[1] ? "80" : "443")))), 
   f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), 
   D(ve, f, n, T), 2 === x) return T;
   u = f.global, u && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), 
   f.hasContent = !he.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (le.test(o) ? "&" : "?") + f.data, 
   delete f.data), f.cache === !1 && (f.url = ue.test(o) ? o.replace(ue, "$1_=" + ae++) : o + (le.test(o) ? "&" : "?") + "_=" + ae++)), 
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
   if (r = D(ye, f, n, T)) {
    T.readyState = 1, u && d.trigger("ajaxSend", [ T, f ]), f.async && f.timeout > 0 && (l = setTimeout(function() {
     T.abort("timeout");
    }, f.timeout));
    try {
     x = 1, r.send(y, i);
    } catch (C) {
     if (!(2 > x)) throw C;
     i(-1, C);
    }
   } else i(-1, "No Transport");
   return T;
  },
  getJSON: function(t, e, n) {
   return ot.get(t, e, n, "json");
  },
  getScript: function(t, n) {
   return ot.get(t, e, n, "script");
  }
 }), ot.each([ "get", "post" ], function(t, n) {
  ot[n] = function(t, i, r, o) {
   return ot.isFunction(i) && (o = o || r, r = i, i = e), ot.ajax({
    url: t,
    type: n,
    dataType: o,
    data: i,
    success: r
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
    send: function(i, r) {
     e = ot("<script>").prop({
      async: !0,
      charset: t.scriptCharset,
      src: t.url
     }).on("load error", n = function(t) {
      e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type);
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
 }), ot.ajaxPrefilter("json jsonp", function(n, i, r) {
  var o, s, a, l = n.jsonp !== !1 && (Te.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Te.test(n.data) && "data");
  return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
  l ? n[l] = n[l].replace(Te, "$1" + o) : n.jsonp !== !1 && (n.url += (le.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
  n.converters["script json"] = function() {
   return a || ot.error(o + " was not called"), a[0];
  }, n.dataTypes[0] = "json", s = t[o], t[o] = function() {
   a = arguments;
  }, r.always(function() {
   t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, we.push(o)), a && ot.isFunction(s) && s(a[0]), 
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
   send: function(i, r) {
    var o, s, a = t.xhr();
    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
    for (o in i) a.setRequestHeader(o, i[o]);
    n = function(t) {
     return function() {
      n && (delete Ee[s], n = a.onload = a.onerror = null, "abort" === t ? a.abort() : "error" === t ? r(a.status || 404, a.statusText) : r(Se[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
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
   var n = this.createTween(t, e), i = n.cur(), r = Ae.exec(e), o = r && r[3] || (ot.cssNumber[t] ? "" : "px"), s = (ot.cssNumber[t] || "px" !== o && +i) && Ae.exec(ot.css(n.elem, t)), a = 1, l = 20;
   if (s && s[3] !== o) {
    o = o || s[3], r = r || [], s = +i || 1;
    do a = a || ".5", s /= a, ot.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l);
   }
   return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), 
   n;
  } ]
 };
 ot.Animation = ot.extend(I, {
  tweener: function(t, e) {
   ot.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
   for (var n, i = 0, r = t.length; r > i; i++) n = t[i], $e[n] = $e[n] || [], $e[n].unshift(e);
  },
  prefilter: function(t, e) {
   e ? _e.unshift(t) : _e.push(t);
  }
 }), ot.Tween = P, P.prototype = {
  constructor: P,
  init: function(t, e, n, i, r, o) {
   this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), 
   this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px");
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
  ot.fn[e] = function(t, i, r) {
   return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, r);
  };
 }), ot.fn.extend({
  fadeTo: function(t, e, n, i) {
   return this.filter(b).css("opacity", 0).show().end().animate({
    opacity: e
   }, t, n, i);
  },
  animate: function(t, e, n, i) {
   var r = ot.isEmptyObject(t), o = ot.speed(e, n, i), s = function() {
    var e = I(this, ot.extend({}, t), o);
    (r || mt.get(this, "finish")) && e.stop(!0);
   };
   return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
  },
  stop: function(t, n, i) {
   var r = function(t) {
    var e = t.stop;
    delete t.stop, e(i);
   };
   return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), 
   this.each(function() {
    var e = !0, n = null != t && t + "queueHooks", o = ot.timers, s = mt.get(this);
    if (n) s[n] && s[n].stop && r(s[n]); else for (n in s) s[n] && s[n].stop && Oe.test(n) && r(s[n]);
    for (n = o.length; n--; ) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), 
    e = !1, o.splice(n, 1));
    !e && i || ot.dequeue(this, t);
   });
  },
  finish: function(t) {
   return t !== !1 && (t = t || "fx"), this.each(function() {
    var e, n = mt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ot.timers, s = i ? i.length : 0;
    for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), 
    e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
    o.splice(e, 1));
    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
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
  ot.fn[t] = function(t, n, i) {
   return this.animate(e, t, n, i);
  };
 }), ot.speed = function(t, e, n) {
  var i = t && "object" == typeof t ? ot.extend({}, t) : {
   complete: n || !n && e || ot.isFunction(t) && t,
   duration: t,
   easing: n && e || e && !ot.isFunction(e) && e
  };
  return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, 
  null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
   ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue);
  }, i;
 }, ot.easing = {
  linear: function(t) {
   return t;
  },
  swing: function(t) {
   return .5 - Math.cos(t * Math.PI) / 2;
  }
 }, ot.timers = [], ot.fx = P.prototype.init, ot.fx.tick = function() {
  var t, n = ot.timers, i = 0;
  for (Ne = ot.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
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
  var n, i, r = this[0], o = {
   top: 0,
   left: 0
  }, s = r && r.ownerDocument;
  if (s) return n = s.documentElement, ot.contains(n, r) ? (typeof r.getBoundingClientRect !== B && (o = r.getBoundingClientRect()), 
  i = M(s), {
   top: o.top + i.pageYOffset - n.clientTop,
   left: o.left + i.pageXOffset - n.clientLeft
  }) : o;
 }, ot.offset = {
  setOffset: function(t, e, n) {
   var i, r, o, s, a, l, c, u = ot.css(t, "position"), p = ot(t), f = {};
   "static" === u && (t.style.position = "relative"), a = p.offset(), o = ot.css(t, "top"), 
   l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, 
   c ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), 
   ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + s), 
   null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : p.css(f);
  }
 }, ot.fn.extend({
  position: function() {
   if (this[0]) {
    var t, e, n = this[0], i = {
     top: 0,
     left: 0
    };
    return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
    e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), 
    i.left += ot.css(t[0], "borderLeftWidth", !0)), {
     top: e.top - i.top - ot.css(n, "marginTop", !0),
     left: e.left - i.left - ot.css(n, "marginLeft", !0)
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
 }, function(n, i) {
  var r = "pageYOffset" === i;
  ot.fn[n] = function(o) {
   return ot.access(this, function(n, o, s) {
    var a = M(n);
    return s === e ? a ? a[i] : n[o] : void (a ? a.scrollTo(r ? t.pageXOffset : s, r ? s : t.pageYOffset) : n[o] = s);
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
  }, function(i, r) {
   ot.fn[r] = function(r, o) {
    var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
    return ot.access(this, function(n, i, r) {
     var o;
     return ot.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, 
     Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? ot.css(n, i, a) : ot.style(n, i, r, a);
    }, n, s ? r : e, s, null);
   };
  });
 }), ot.fn.size = function() {
  return this.length;
 }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function() {
  return ot;
 }), "object" == typeof t && "object" == typeof t.document && (t.jQuery = t.$ = ot);
}(window), function() {
 var t = this, e = t._, n = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, s = i.push, a = i.slice, l = i.concat, c = r.toString, u = r.hasOwnProperty, p = i.forEach, f = i.map, h = i.reduce, d = i.reduceRight, g = i.filter, m = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, x = Array.isArray, w = Object.keys, T = o.bind, C = function(t) {
  return t instanceof C ? t : this instanceof C ? void (this._wrapped = t) : new C(t);
 };
 "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), 
 exports._ = C) : t._ = C, C.VERSION = "1.5.1";
 var S = C.each = C.forEach = function(t, e, i) {
  if (null != t) if (p && t.forEach === p) t.forEach(e, i); else if (t.length === +t.length) {
   for (var r = 0, o = t.length; o > r; r++) if (e.call(i, t[r], r, t) === n) return;
  } else for (var s in t) if (C.has(t, s) && e.call(i, t[s], s, t) === n) return;
 };
 C.map = C.collect = function(t, e, n) {
  var i = [];
  return null == t ? i : f && t.map === f ? t.map(e, n) : (S(t, function(t, r, o) {
   i.push(e.call(n, t, r, o));
  }), i);
 };
 var k = "Reduce of empty array with no initial value";
 C.reduce = C.foldl = C.inject = function(t, e, n, i) {
  var r = arguments.length > 2;
  if (null == t && (t = []), h && t.reduce === h) return i && (e = C.bind(e, i)), 
  r ? t.reduce(e, n) : t.reduce(e);
  if (S(t, function(t, o, s) {
   r ? n = e.call(i, n, t, o, s) : (n = t, r = !0);
  }), !r) throw new TypeError(k);
  return n;
 }, C.reduceRight = C.foldr = function(t, e, n, i) {
  var r = arguments.length > 2;
  if (null == t && (t = []), d && t.reduceRight === d) return i && (e = C.bind(e, i)), 
  r ? t.reduceRight(e, n) : t.reduceRight(e);
  var o = t.length;
  if (o !== +o) {
   var s = C.keys(t);
   o = s.length;
  }
  if (S(t, function(a, l, c) {
   l = s ? s[--o] : --o, r ? n = e.call(i, n, t[l], l, c) : (n = t[l], r = !0);
  }), !r) throw new TypeError(k);
  return n;
 }, C.find = C.detect = function(t, e, n) {
  var i;
  return E(t, function(t, r, o) {
   return e.call(n, t, r, o) ? (i = t, !0) : void 0;
  }), i;
 }, C.filter = C.select = function(t, e, n) {
  var i = [];
  return null == t ? i : g && t.filter === g ? t.filter(e, n) : (S(t, function(t, r, o) {
   e.call(n, t, r, o) && i.push(t);
  }), i);
 }, C.reject = function(t, e, n) {
  return C.filter(t, function(t, i, r) {
   return !e.call(n, t, i, r);
  }, n);
 }, C.every = C.all = function(t, e, i) {
  e || (e = C.identity);
  var r = !0;
  return null == t ? r : m && t.every === m ? t.every(e, i) : (S(t, function(t, o, s) {
   return (r = r && e.call(i, t, o, s)) ? void 0 : n;
  }), !!r);
 };
 var E = C.some = C.any = function(t, e, i) {
  e || (e = C.identity);
  var r = !1;
  return null == t ? r : v && t.some === v ? t.some(e, i) : (S(t, function(t, o, s) {
   return r || (r = e.call(i, t, o, s)) ? n : void 0;
  }), !!r);
 };
 C.contains = C.include = function(t, e) {
  return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : E(t, function(t) {
   return t === e;
  });
 }, C.invoke = function(t, e) {
  var n = a.call(arguments, 2), i = C.isFunction(e);
  return C.map(t, function(t) {
   return (i ? e : t[e]).apply(t, n);
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
  var i = {
   computed: -(1 / 0),
   value: -(1 / 0)
  };
  return S(t, function(t, r, o) {
   var s = e ? e.call(n, t, r, o) : t;
   s > i.computed && (i = {
    value: t,
    computed: s
   });
  }), i.value;
 }, C.min = function(t, e, n) {
  if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
  if (!e && C.isEmpty(t)) return 1 / 0;
  var i = {
   computed: 1 / 0,
   value: 1 / 0
  };
  return S(t, function(t, r, o) {
   var s = e ? e.call(n, t, r, o) : t;
   s < i.computed && (i = {
    value: t,
    computed: s
   });
  }), i.value;
 }, C.shuffle = function(t) {
  var e, n = 0, i = [];
  return S(t, function(t) {
   e = C.random(n++), i[n - 1] = i[e], i[e] = t;
  }), i;
 };
 var N = function(t) {
  return C.isFunction(t) ? t : function(e) {
   return e[t];
  };
 };
 C.sortBy = function(t, e, n) {
  var i = N(e);
  return C.pluck(C.map(t, function(t, e, r) {
   return {
    value: t,
    index: e,
    criteria: i.call(n, t, e, r)
   };
  }).sort(function(t, e) {
   var n = t.criteria, i = e.criteria;
   if (n !== i) {
    if (n > i || void 0 === n) return 1;
    if (i > n || void 0 === i) return -1;
   }
   return t.index < e.index ? -1 : 1;
  }), "value");
 };
 var j = function(t, e, n, i) {
  var r = {}, o = N(null == e ? C.identity : e);
  return S(t, function(e, s) {
   var a = o.call(n, e, s, t);
   i(r, a, e);
  }), r;
 };
 C.groupBy = function(t, e, n) {
  return j(t, e, n, function(t, e, n) {
   (C.has(t, e) ? t[e] : t[e] = []).push(n);
  });
 }, C.countBy = function(t, e, n) {
  return j(t, e, n, function(t, e) {
   C.has(t, e) || (t[e] = 0), t[e]++;
  });
 }, C.sortedIndex = function(t, e, n, i) {
  n = null == n ? C.identity : N(n);
  for (var r = n.call(i, e), o = 0, s = t.length; s > o; ) {
   var a = o + s >>> 1;
   n.call(i, t[a]) < r ? o = a + 1 : s = a;
  }
  return o;
 }, C.toArray = function(t) {
  return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : [];
 }, C.size = function(t) {
  return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length;
 }, C.first = C.head = C.take = function(t, e, n) {
  return null != t ? null == e || n ? t[0] : a.call(t, 0, e) : void 0;
 }, C.initial = function(t, e, n) {
  return a.call(t, 0, t.length - (null == e || n ? 1 : e));
 }, C.last = function(t, e, n) {
  return null != t ? null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0)) : void 0;
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
 }, C.uniq = C.unique = function(t, e, n, i) {
  C.isFunction(e) && (i = n, n = e, e = !1);
  var r = n ? C.map(t, n, i) : t, o = [], s = [];
  return S(r, function(n, i) {
   (e ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(t[i]));
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
  var e = l.apply(i, a.call(arguments, 1));
  return C.filter(t, function(t) {
   return !C.contains(e, t);
  });
 }, C.zip = function() {
  for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = C.pluck(arguments, "" + n);
  return e;
 }, C.object = function(t, e) {
  if (null == t) return {};
  for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
  return n;
 }, C.indexOf = function(t, e, n) {
  if (null == t) return -1;
  var i = 0, r = t.length;
  if (n) {
   if ("number" != typeof n) return i = C.sortedIndex(t, e), t[i] === e ? i : -1;
   i = 0 > n ? Math.max(0, r + n) : n;
  }
  if (y && t.indexOf === y) return t.indexOf(e, n);
  for (;r > i; i++) if (t[i] === e) return i;
  return -1;
 }, C.lastIndexOf = function(t, e, n) {
  if (null == t) return -1;
  var i = null != n;
  if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
  for (var r = i ? n : t.length; r--; ) if (t[r] === e) return r;
  return -1;
 }, C.range = function(t, e, n) {
  arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
  for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, o = new Array(i); i > r; ) o[r++] = t, 
  t += n;
  return o;
 };
 var A = function() {};
 C.bind = function(t, e) {
  var n, i;
  if (T && t.bind === T) return T.apply(t, a.call(arguments, 1));
  if (!C.isFunction(t)) throw new TypeError();
  return n = a.call(arguments, 2), i = function() {
   if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
   A.prototype = t.prototype;
   var r = new A();
   A.prototype = null;
   var o = t.apply(r, n.concat(a.call(arguments)));
   return Object(o) === o ? o : r;
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
   var i = e.apply(this, arguments);
   return C.has(n, i) ? n[i] : n[i] = t.apply(this, arguments);
  };
 }, C.delay = function(t, e) {
  var n = a.call(arguments, 2);
  return setTimeout(function() {
   return t.apply(null, n);
  }, e);
 }, C.defer = function(t) {
  return C.delay.apply(C, [ t, 1 ].concat(a.call(arguments, 1)));
 }, C.throttle = function(t, e, n) {
  var i, r, o, s = null, a = 0;
  n || (n = {});
  var l = function() {
   a = n.leading === !1 ? 0 : new Date(), s = null, o = t.apply(i, r);
  };
  return function() {
   var c = new Date();
   a || n.leading !== !1 || (a = c);
   var u = e - (c - a);
   return i = this, r = arguments, 0 >= u ? (clearTimeout(s), s = null, a = c, o = t.apply(i, r)) : s || n.trailing === !1 || (s = setTimeout(l, u)), 
   o;
  };
 }, C.debounce = function(t, e, n) {
  var i, r = null;
  return function() {
   var o = this, s = arguments, a = function() {
    r = null, n || (i = t.apply(o, s));
   }, l = n && !r;
   return clearTimeout(r), r = setTimeout(a, e), l && (i = t.apply(o, s)), i;
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
  var e = {}, n = l.apply(i, a.call(arguments, 1));
  return S(n, function(n) {
   n in t && (e[n] = t[n]);
  }), e;
 }, C.omit = function(t) {
  var e = {}, n = l.apply(i, a.call(arguments, 1));
  for (var r in t) C.contains(n, r) || (e[r] = t[r]);
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
 var O = function(t, e, n, i) {
  if (t === e) return 0 !== t || 1 / t == 1 / e;
  if (null == t || null == e) return t === e;
  t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
  var r = c.call(t);
  if (r != c.call(e)) return !1;
  switch (r) {
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
  for (var o = n.length; o--; ) if (n[o] == t) return i[o] == e;
  var s = t.constructor, a = e.constructor;
  if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
  n.push(t), i.push(e);
  var l = 0, u = !0;
  if ("[object Array]" == r) {
   if (l = t.length, u = l == e.length) for (;l-- && (u = O(t[l], e[l], n, i)); ) ;
  } else {
   for (var p in t) if (C.has(t, p) && (l++, !(u = C.has(e, p) && O(t[p], e[p], n, i)))) break;
   if (u) {
    for (p in e) if (C.has(e, p) && !l--) break;
    u = !l;
   }
  }
  return n.pop(), i.pop(), u;
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
  return "[object Array]" == c.call(t);
 }, C.isObject = function(t) {
  return t === Object(t);
 }, S([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
  C["is" + t] = function(e) {
   return c.call(e) == "[object " + t + "]";
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
  return t === !0 || t === !1 || "[object Boolean]" == c.call(t);
 }, C.isNull = function(t) {
  return null === t;
 }, C.isUndefined = function(t) {
  return void 0 === t;
 }, C.has = function(t, e) {
  return u.call(t, e);
 }, C.noConflict = function() {
  return t._ = e, this;
 }, C.identity = function(t) {
  return t;
 }, C.times = function(t, e, n) {
  for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
  return i;
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
  if (null != t) {
   var n = t[e];
   return C.isFunction(n) ? n.call(t) : n;
  }
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
  var i;
  n = C.defaults({}, n, C.templateSettings);
  var r = new RegExp([ (n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source ].join("|") + "|$", "g"), o = 0, s = "__p+='";
  t.replace(r, function(e, n, i, r, a) {
   return s += t.slice(o, a).replace(q, function(t) {
    return "\\" + R[t];
   }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), 
   r && (s += "';\n" + r + "\n__p+='"), o = a + e.length, e;
  }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
  try {
   i = new Function(n.variable || "obj", "_", s);
  } catch (a) {
   throw a.source = s, a;
  }
  if (e) return i(e, C);
  var l = function(t) {
   return i.call(this, t, C);
  };
  return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l;
 }, C.chain = function(t) {
  return C(t).chain();
 };
 var P = function(t) {
  return this._chain ? C(t).chain() : t;
 };
 C.mixin(C), S([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
  var e = i[t];
  C.prototype[t] = function() {
   var n = this._wrapped;
   return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], 
   P.call(this, n);
  };
 }), S([ "concat", "join", "slice" ], function(t) {
  var e = i[t];
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
  var n = !1, i = this;
  t(this).one(t.support.transition.end, function() {
   n = !0;
  });
  var r = function() {
   n || t(i).trigger(t.support.transition.end);
  };
  return setTimeout(r, e), this;
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
  var i = t(this), r = i.attr("data-target");
  r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
  var o = t(r);
  e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), 
  o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), 
  t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n());
 };
 var i = t.fn.alert;
 t.fn.alert = function(e) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.alert");
   r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i);
  });
 }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
  return t.fn.alert = i, this;
 }, t(document).on("click.bs.alert.data-api", e, n.prototype.close);
}(jQuery), +function(t) {
 var e = function(n, i) {
  this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i);
 };
 e.DEFAULTS = {
  loadingText: "loading..."
 }, e.prototype.setState = function(t) {
  var e = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", r = n.data();
  t += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[t] || this.options[t]), 
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
   var i = t(this), r = i.data("bs.button"), o = "object" == typeof n && n;
   r || i.data("bs.button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n);
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
  var n = this, i = this.getActiveIndex();
  return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
   n.to(e);
  }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]));
 }, e.prototype.pause = function(e) {
  return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), 
  this.cycle(!0)), this.interval = clearInterval(this.interval), this;
 }, e.prototype.next = function() {
  return this.sliding ? void 0 : this.slide("next");
 }, e.prototype.prev = function() {
  return this.sliding ? void 0 : this.slide("prev");
 }, e.prototype.slide = function(e, n) {
  var i = this.$element.find(".item.active"), r = n || i[e](), o = this.interval, s = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
  if (!r.length) {
   if (!this.options.wrap) return;
   r = this.$element.find(".item")[a]();
  }
  this.sliding = !0, o && this.pause();
  var c = t.Event("slide.bs.carousel", {
   relatedTarget: r[0],
   direction: s
  });
  if (!r.hasClass("active")) {
   if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
   this.$element.one("slid.bs.carousel", function() {
    var e = t(l.$indicators.children()[l.getActiveIndex()]);
    e && e.addClass("active");
   })), t.support.transition && this.$element.hasClass("slide")) {
    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
    r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one(t.support.transition.end, function() {
     r.removeClass([ e, s ].join(" ")).addClass("active"), i.removeClass([ "active", s ].join(" ")), 
     l.sliding = !1, setTimeout(function() {
      l.$element.trigger("slid.bs.carousel");
     }, 0);
    }).emulateTransitionEnd(600);
   } else {
    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
    i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel");
   }
   return o && this.cycle(), this;
  }
 };
 var n = t.fn.carousel;
 t.fn.carousel = function(n) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.carousel"), o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n), s = "string" == typeof n ? n : o.slide;
   r || i.data("bs.carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle();
  });
 }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
  return t.fn.carousel = n, this;
 }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
  var n, i = t(this), r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = t.extend({}, r.data(), i.data()), s = i.attr("data-slide-to");
  s && (o.interval = !1), r.carousel(o), (s = i.attr("data-slide-to")) && r.data("bs.carousel").to(s), 
  e.preventDefault();
 }), t(window).on("load", function() {
  t('[data-ride="carousel"]').each(function() {
   var e = t(this);
   e.carousel(e.data());
  });
 });
}(jQuery), +function(t) {
 var e = function(n, i) {
  this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, 
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
     var i = n.data("bs.collapse");
     if (i && i.transitioning) return;
     n.collapse("hide"), i || n.data("bs.collapse", null);
    }
    var r = this.dimension();
    this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
    var o = function() {
     this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0, 
     this.$element.trigger("shown.bs.collapse");
    };
    if (!t.support.transition) return o.call(this);
    var s = t.camelCase([ "scroll", r ].join("-"));
    this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][s]);
   }
  }
 }, e.prototype.hide = function() {
  if (!this.transitioning && this.$element.hasClass("in")) {
   var e = t.Event("hide.bs.collapse");
   if (this.$element.trigger(e), !e.isDefaultPrevented()) {
    var n = this.dimension();
    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
    this.transitioning = 1;
    var i = function() {
     this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
    };
    return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this);
   }
  }
 }, e.prototype.toggle = function() {
  this[this.$element.hasClass("in") ? "hide" : "show"]();
 };
 var n = t.fn.collapse;
 t.fn.collapse = function(n) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.collapse"), o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
   r || i.data("bs.collapse", r = new e(this, o)), "string" == typeof n && r[n]();
  });
 }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
  return t.fn.collapse = n, this;
 }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
  var n, i = t(this), r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(r), s = o.data("bs.collapse"), a = s ? "toggle" : i.data(), l = i.attr("data-parent"), c = l && t(l);
  s && s.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), 
  i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a);
 });
}(jQuery), +function(t) {
 function e() {
  t(i).remove(), t(r).each(function(e) {
   var i = n(t(this));
   i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown")), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"));
  });
 }
 function n(e) {
  var n = e.attr("data-target");
  n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
  var i = n && t(n);
  return i && i.length ? i : e.parent();
 }
 var i = ".dropdown-backdrop", r = "[data-toggle=dropdown]", o = function(e) {
  t(e).on("click.bs.dropdown", this.toggle);
 };
 o.prototype.toggle = function(i) {
  var r = t(this);
  if (!r.is(".disabled, :disabled")) {
   var o = n(r), s = o.hasClass("open");
   if (e(), !s) {
    if ("ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e), 
    o.trigger(i = t.Event("show.bs.dropdown")), i.isDefaultPrevented()) return;
    o.toggleClass("open").trigger("shown.bs.dropdown"), r.focus();
   }
   return !1;
  }
 }, o.prototype.keydown = function(e) {
  if (/(38|40|27)/.test(e.keyCode)) {
   var i = t(this);
   if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
    var o = n(i), s = o.hasClass("open");
    if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(r).focus(), i.click();
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
   var n = t(this), i = n.data("bs.dropdown");
   i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n);
  });
 }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
  return t.fn.dropdown = s, this;
 }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
  t.stopPropagation();
 }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", o.prototype.keydown);
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
  var n = this, i = t.Event("show.bs.modal", {
   relatedTarget: e
  });
  this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, 
  this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), 
  this.backdrop(function() {
   var i = t.support.transition && n.$element.hasClass("fade");
   n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), 
   i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), 
   n.enforceFocus();
   var r = t.Event("shown.bs.modal", {
    relatedTarget: e
   });
   i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function() {
    n.$element.focus().trigger(r);
   }).emulateTransitionEnd(300) : n.$element.focus().trigger(r);
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
   var i = t.support.transition && n;
   if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), 
   this.$element.on("click.dismiss.modal", t.proxy(function(t) {
    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
   }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
   i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e();
  } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e();
 };
 var n = t.fn.modal;
 t.fn.modal = function(n, i) {
  return this.each(function() {
   var r = t(this), o = r.data("bs.modal"), s = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
   o || r.data("bs.modal", o = new e(this, s)), "string" == typeof n ? o[n](i) : s.show && o.show(i);
  });
 }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
  return t.fn.modal = n, this;
 }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
  var n = t(this), i = n.attr("href"), r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), o = r.data("modal") ? "toggle" : t.extend({
   remote: !/#/.test(i) && i
  }, r.data(), n.data());
  e.preventDefault(), r.modal(o, this).one("hide", function() {
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
 }, e.prototype.init = function(e, n, i) {
  this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
  for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
   var s = r[o];
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
  return this._options && t.each(this._options, function(t, i) {
   n[t] != i && (e[t] = i);
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
   var i = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, r = /\s?auto?\s?/i, o = r.test(i);
   o && (i = i.replace(r, "") || "top"), n.detach().css({
    top: 0,
    left: 0,
    display: "block"
   }).addClass(i), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
   var s = this.getPosition(), a = n[0].offsetWidth, l = n[0].offsetHeight;
   if (o) {
    var c = this.$element.parent(), u = i, p = document.documentElement.scrollTop || document.body.scrollTop, f = "body" == this.options.container ? window.innerWidth : c.outerWidth(), h = "body" == this.options.container ? window.innerHeight : c.outerHeight(), d = "body" == this.options.container ? 0 : c.offset().left;
    i = "bottom" == i && s.top + s.height + l - p > h ? "top" : "top" == i && s.top - p - l < 0 ? "bottom" : "right" == i && s.right + a > f ? "left" : "left" == i && s.left - a < d ? "right" : i, 
    n.removeClass(u).addClass(i);
   }
   var g = this.getCalculatedOffset(i, s, a, l);
   this.applyPlacement(g, i), this.$element.trigger("shown.bs." + this.type);
  }
 }, e.prototype.applyPlacement = function(t, e) {
  var n, i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
  isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, 
  i.offset(t).addClass("in");
  var l = i[0].offsetWidth, c = i[0].offsetHeight;
  if ("top" == e && c != o && (n = !0, t.top = t.top + o - c), /bottom|top/.test(e)) {
   var u = 0;
   t.left < 0 && (u = -2 * t.left, t.left = 0, i.offset(t), l = i[0].offsetWidth, c = i[0].offsetHeight), 
   this.replaceArrow(u - r + l, l, "left");
  } else this.replaceArrow(c - o, c, "top");
  n && i.offset(t);
 }, e.prototype.replaceArrow = function(t, e, n) {
  this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
 }, e.prototype.setContent = function() {
  var t = this.tip(), e = this.getTitle();
  t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
 }, e.prototype.hide = function() {
  function e() {
   "in" != n.hoverState && i.detach();
  }
  var n = this, i = this.tip(), r = t.Event("hide.bs." + this.type);
  return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), 
  t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), 
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
 }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
  return "bottom" == t ? {
   top: e.top + e.height,
   left: e.left + e.width / 2 - n / 2
  } : "top" == t ? {
   top: e.top - i,
   left: e.left + e.width / 2 - n / 2
  } : "left" == t ? {
   top: e.top + e.height / 2 - i / 2,
   left: e.left - n
  } : {
   top: e.top + e.height / 2 - i / 2,
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
   var i = t(this), r = i.data("bs.tooltip"), o = "object" == typeof n && n;
   r || i.data("bs.tooltip", r = new e(this, o)), "string" == typeof n && r[n]();
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
   var i = t(this), r = i.data("bs.popover"), o = "object" == typeof n && n;
   r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]();
  });
 }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
  return t.fn.popover = n, this;
 };
}(jQuery), +function(t) {
 function e(n, i) {
  var r, o = t.proxy(this.process, this);
  this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), 
  this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (r = t(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
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
   var i = t(this), r = i.data("target") || i.attr("href"), o = /^#\w/.test(r) && t(r);
   return o && o.length && [ [ o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r ] ] || null;
  }).sort(function(t, e) {
   return t[0] - e[0];
  }).each(function() {
   n.offsets.push(this[0]), n.targets.push(this[1]);
  });
 }, e.prototype.process = function() {
  var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
  if (e >= i) return s != (t = o.last()[0]) && this.activate(t);
  for (t = r.length; t--; ) s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t]);
 }, e.prototype.activate = function(e) {
  this.activeTarget = e, t(this.selector).parents(".active").removeClass("active");
  var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
  i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), 
  i.trigger("activate.bs.scrollspy");
 };
 var n = t.fn.scrollspy;
 t.fn.scrollspy = function(n) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
   r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]();
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
  var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
  if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
   var r = n.find(".active:last a")[0], o = t.Event("show.bs.tab", {
    relatedTarget: r
   });
   if (e.trigger(o), !o.isDefaultPrevented()) {
    var s = t(i);
    this.activate(e.parent("li"), n), this.activate(s, s.parent(), function() {
     e.trigger({
      type: "shown.bs.tab",
      relatedTarget: r
     });
    });
   }
  }
 }, e.prototype.activate = function(e, n, i) {
  function r() {
   o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
   e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), 
   e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i();
  }
  var o = n.find("> .active"), s = i && t.support.transition && o.hasClass("fade");
  s ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), o.removeClass("in");
 };
 var n = t.fn.tab;
 t.fn.tab = function(n) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.tab");
   r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]();
  });
 }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
  return t.fn.tab = n, this;
 }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
  e.preventDefault(), t(this).tab("show");
 });
}(jQuery), +function(t) {
 var e = function(n, i) {
  this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), 
  this.$element = t(n), this.affixed = this.unpin = null, this.checkPosition();
 };
 e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
  offset: 0
 }, e.prototype.checkPositionWithEventLoop = function() {
  setTimeout(t.proxy(this.checkPosition, this), 1);
 }, e.prototype.checkPosition = function() {
  if (this.$element.is(":visible")) {
   var n = t(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, s = o.top, a = o.bottom;
   "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top()), "function" == typeof a && (a = o.bottom());
   var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= i ? "top" : !1;
   this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, 
   this.unpin = "bottom" == l ? r.top - i : null, this.$element.removeClass(e.RESET).addClass("affix" + (l ? "-" + l : "")), 
   "bottom" == l && this.$element.offset({
    top: document.body.offsetHeight - a - this.$element.height()
   }));
  }
 };
 var n = t.fn.affix;
 t.fn.affix = function(n) {
  return this.each(function() {
   var i = t(this), r = i.data("bs.affix"), o = "object" == typeof n && n;
   r || i.data("bs.affix", r = new e(this, o)), "string" == typeof n && r[n]();
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
 var n, i, r = e("file.list"), o = localStorage.version;
 if (void 0 === o && (localStorage.removeItem("sync.queue"), localStorage.removeItem("sync.current"), 
 localStorage.removeItem("file.counter"), t.each(r, function(n) {
  localStorage[n + ".publish"] = ";";
  var i = e(n + ".sync");
  t.each(i, function(t) {
   localStorage[t + ".contentCRC"] = "0", void 0 !== localStorage[t + ".etag"] && (localStorage[t + ".titleCRC"] = "0");
  });
 }), o = "v1"), "v1" == o) {
  var s = localStorage["sync.gdrive.lastChangeId"];
  s && (localStorage["gdrive.lastChangeId"] = s, localStorage.removeItem("sync.gdrive.lastChangeId"));
  var a = localStorage["sync.dropbox.lastChangeId"];
  a && (localStorage["dropbox.lastChangeId"] = a, localStorage.removeItem("sync.dropbox.lastChangeId"));
  var l = "gdrive", c = "dropbox", u = "sync." + l + ".", p = "sync." + c + ".";
  t.each(r, function(n) {
   var i = e(n + ".sync");
   t.each(i, function(t) {
    var e = {};
    0 === t.indexOf(u) ? (e.provider = l, e.id = t.substring(u.length), e.etag = localStorage[t + ".etag"], 
    e.contentCRC = localStorage[t + ".contentCRC"], e.titleCRC = localStorage[t + ".titleCRC"]) : 0 === t.indexOf(p) && (e.provider = c, 
    e.path = decodeURIComponent(t.substring(p.length)), e.version = localStorage[t + ".version"], 
    e.contentCRC = localStorage[t + ".contentCRC"]), localStorage[t] = JSON.stringify(e), 
    localStorage.removeItem(t + ".etag"), localStorage.removeItem(t + ".version"), localStorage.removeItem(t + ".contentCRC"), 
    localStorage.removeItem(t + ".titleCRC");
   });
  }), o = "v2";
 }
 return "v2" == o && (t.each(r, function(e) {
  t.has(localStorage, e + ".sync") || (localStorage.removeItem(e + ".title"), localStorage.removeItem(e + ".publish"), 
  localStorage.removeItem(e + ".content"), localStorage["file.list"].replace(";" + e + ";", ";"));
 }), o = "v3"), "v3" == o && (n = localStorage["file.current"], void 0 !== n && -1 === localStorage["file.list"].indexOf(";" + n + ";") && localStorage.removeItem("file.current"), 
 o = "v4"), "v4" == o && (localStorage.removeItem("githubToken"), o = "v5"), "v5" == o && (t.each(r, function(n) {
  var i = e(n + ".publish");
  t.each(i, function(t) {
   var e = JSON.parse(localStorage[t]);
   "gdrive" == e.provider && (e.id = e.fileId, e.fileId = void 0, localStorage[t] = JSON.stringify(e));
  });
 }), o = "v6"), "v6" == o && (n = localStorage["file.current"], void 0 !== n && (localStorage[n + ".selectTime"] = new Date().getTime(), 
 localStorage.removeItem("file.current")), o = "v7"), "v7" != o && "v8" != o && "v9" != o || (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 delete i.editorFontFamily, delete i.editorFontSize, i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/css/main-min.css", "http://benweet.github.io/stackedit/res-min/themes/default.css")), 
 localStorage.settings = JSON.stringify(i)), o = "v10"), "v10" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 ((i.extensionSettings || {}).markdownExtra || {}).extensions && i.extensionSettings.markdownExtra.extensions.push("smartypants"), 
 "http://stackedit-ssh-proxy.herokuapp.com/" == i.sshProxy && (i.sshProxy = "https://stackedit-ssh-proxy.herokuapp.com/"), 
 i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
 i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
 i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 i.defaultContent && (i.defaultContent = i.defaultContent.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 i.commitMsg && (i.commitMsg = i.commitMsg.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
 localStorage.settings = JSON.stringify(i)), o = "v11"), "v11" == o && (localStorage.removeItem("theme"), 
 t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), delete i.editorFontFamily, 
 delete i.editorFontSize, i.template && (i.template = i.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 localStorage.settings = JSON.stringify(i)), o = "v12"), "v12" != o && "v13" != o || (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 delete i.editorFontFamily, localStorage.settings = JSON.stringify(i)), o = "v14"), 
 "v14" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 i.template && (i.template = i.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
 localStorage.settings = JSON.stringify(i)), o = "v15"), "v15" == o && (localStorage.removeItem("gdrivePermissions"), 
 t.has(localStorage, "gdrive.lastChangeId") && (localStorage["google.gdrive0.gdrive.lastChangeId"] = localStorage["gdrive.lastChangeId"], 
 localStorage.removeItem("gdrive.lastChangeId")), t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 ((i.extensionSettings || {}).markdownExtra || {}).extensions && (i.extensionSettings.markdownExtra.extensions.push("newlines"), 
 i.extensionSettings.markdownExtra.extensions.push("strikethrough")), localStorage.settings = JSON.stringify(i)), 
 o = "v16"), "v16" != o && "v17" != o || (localStorage.removeItem("focusMode"), localStorage.removeItem("mode"), 
 localStorage.removeItem("gdrive.state"), localStorage.removeItem("google.picasa0.permissions"), 
 localStorage.removeItem("google.picasa0.userId"), t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 delete i.shortcuts, delete i.editorFontFamily, delete i.editorFontSize, delete i.maxWidth, 
 localStorage.settings = JSON.stringify(i)), o = "v18"), "v18" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 ((i.extensionSettings || {}).markdownExtra || {}).diagrams = !0, localStorage.settings = JSON.stringify(i)), 
 o = "v19"), "v19" == o && (localStorage.removeItem("themeV3"), localStorage.removeItem("welcomeTour"), 
 t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), delete i.pdfTemplate, 
 delete i.pdfPageSize, delete i.sshProxy, localStorage.settings = JSON.stringify(i)), 
 o = "v20"), "v20" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 delete i.markdownMimeType, localStorage.settings = JSON.stringify(i)), o = "v21"), 
 "v21" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 i.template && (i.template = i.template.replace("https://stackedit.io/libs/MathJax/", "https://cdn.mathjax.org/mathjax/latest/")), 
 i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("/libs/MathJax/", "/res/bower-libs/MathJax/")), 
 localStorage.settings = JSON.stringify(i)), o = "v22"), "v22" == o && (t.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
 i.couchdbUrl && (i.couchdbUrl = i.couchdbUrl.replace("https://stackedit.couchappy.com/documents", "https://stackedit.smileupps.com/documents")), 
 localStorage.settings = JSON.stringify(i)), o = "v23"), localStorage.version = o, 
 localStorage;
}), define("settings", [ "underscore", "constants", "storage" ], function(t, e, n) {
 var i = {
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
  t.extend(i, JSON.parse(n.settings));
 } catch (r) {}
 return i;
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
}), require([ "jquery", "underscore", "bootstrap", "settings", "storage" ], function(t, e, n, i, r) {
 window.noStart || t(function() {
  t("#choose-courses").modal(), t("#to-editor").click(function() {
   var e = t("#select-course option:selected").val();
   i.couchdbUrl = window.courseMap[e], console.log("couchDB url: " + i.couchdbUrl), 
   r.settings = JSON.stringify(i), window.location = "editor" + window.location.search;
  });
 });
}), define("login", function() {});