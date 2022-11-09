"use strict";
(self["webpackChunkcarlyburns"] = self["webpackChunkcarlyburns"] || []).push([["src_modules_PhotoSwipe_photoswipe_esm_min_js"],{

/***/ "./src/modules/PhotoSwipe/photoswipe.esm.min.js":
/*!******************************************************!*\
  !*** ./src/modules/PhotoSwipe/photoswipe.esm.min.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Q; }
/* harmony export */ });
/*!
  * PhotoSwipe 5.3.3 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */
function t(t, i, s) {
  const h = document.createElement(i || "div");
  return t && (h.className = t), s && s.appendChild(h), h;
}
function i(t, i) {
  return t.x = i.x, t.y = i.y, void 0 !== i.id && (t.id = i.id), t;
}
function s(t) {
  t.x = Math.round(t.x), t.y = Math.round(t.y);
}
function h(t, i) {
  const s = Math.abs(t.x - i.x),
    h = Math.abs(t.y - i.y);
  return Math.sqrt(s * s + h * h);
}
function e(t, i) {
  return t.x === i.x && t.y === i.y;
}
function n(t, i, s) {
  return Math.min(Math.max(t, i), s);
}
function o(t, i, s) {
  let h = "translate3d(" + t + "px," + (i || 0) + "px,0)";
  return void 0 !== s && (h += " scale3d(" + s + "," + s + ",1)"), h;
}
function r(t, i, s, h) {
  t.style.transform = o(i, s, h);
}
function a(t, i, s, h) {
  t.style.transition = i ? i + " " + s + "ms " + (h || "cubic-bezier(.4,0,.22,1)") : "none";
}
function c(t, i, s) {
  t.style.width = "number" == typeof i ? i + "px" : i, t.style.height = "number" == typeof s ? s + "px" : s;
}
const l = "idle",
  p = "loading",
  u = "loaded",
  d = "error";
function m() {
  return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
}
let f = !1;
try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
    get: () => {
      f = !0;
    }
  }));
} catch (t) {}
class w {
  constructor() {
    this.t = [];
  }
  add(t, i, s, h) {
    this.i(t, i, s, h);
  }
  remove(t, i, s, h) {
    this.i(t, i, s, h, !0);
  }
  removeAll() {
    this.t.forEach(t => {
      this.i(t.target, t.type, t.listener, t.passive, !0, !0);
    }), this.t = [];
  }
  i(t, i, s, h, e, n) {
    if (!t) return;
    const o = e ? "removeEventListener" : "addEventListener";
    i.split(" ").forEach(i => {
      if (i) {
        n || (e ? this.t = this.t.filter(h => h.type !== i || h.listener !== s || h.target !== t) : this.t.push({
          target: t,
          type: i,
          listener: s,
          passive: h
        }));
        const r = !!f && {
          passive: h || !1
        };
        t[o](i, s, r);
      }
    });
  }
}
function g(t, i) {
  if (t.getViewportSizeFn) {
    const s = t.getViewportSizeFn(t, i);
    if (s) return s;
  }
  return {
    x: document.documentElement.clientWidth,
    y: window.innerHeight
  };
}
function _(t, i, s, h, e) {
  let n;
  if (i.paddingFn) n = i.paddingFn(s, h, e)[t];else if (i.padding) n = i.padding[t];else {
    const s = "padding" + t[0].toUpperCase() + t.slice(1);
    i[s] && (n = i[s]);
  }
  return n || 0;
}
function v(t, i, s, h) {
  return {
    x: i.x - _("left", t, i, s, h) - _("right", t, i, s, h),
    y: i.y - _("top", t, i, s, h) - _("bottom", t, i, s, h)
  };
}
class y {
  constructor(t) {
    this.slide = t, this.currZoomLevel = 1, this.center = {}, this.max = {}, this.min = {}, this.reset();
  }
  update(t) {
    this.currZoomLevel = t, this.slide.width ? (this.o("x"), this.o("y"), this.slide.pswp.dispatch("calcBounds", {
      slide: this.slide
    })) : this.reset();
  }
  o(t) {
    const {
        pswp: i
      } = this.slide,
      s = this.slide["x" === t ? "width" : "height"] * this.currZoomLevel,
      h = _("x" === t ? "left" : "top", i.options, i.viewportSize, this.slide.data, this.slide.index),
      e = this.slide.panAreaSize[t];
    this.center[t] = Math.round((e - s) / 2) + h, this.max[t] = s > e ? Math.round(e - s) + h : this.center[t], this.min[t] = s > e ? h : this.center[t];
  }
  reset() {
    this.center.x = 0, this.center.y = 0, this.max.x = 0, this.max.y = 0, this.min.x = 0, this.min.y = 0;
  }
  correctPan(t, i) {
    return n(i, this.max[t], this.min[t]);
  }
}
class b {
  constructor(t, i, s, h) {
    this.pswp = h, this.options = t, this.itemData = i, this.index = s;
  }
  update(t, i, s) {
    this.elementSize = {
      x: t,
      y: i
    }, this.panAreaSize = s;
    const h = this.panAreaSize.x / this.elementSize.x,
      e = this.panAreaSize.y / this.elementSize.y;
    this.fit = Math.min(1, h < e ? h : e), this.fill = Math.min(1, h > e ? h : e), this.vFill = Math.min(1, e), this.initial = this.l(), this.secondary = this.p(), this.max = Math.max(this.initial, this.secondary, this.u()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  m(t) {
    const i = t + "ZoomLevel",
      s = this.options[i];
    if (s) return "function" == typeof s ? s(this) : "fill" === s ? this.fill : "fit" === s ? this.fit : Number(s);
  }
  p() {
    let t = this.m("secondary");
    return t || (t = Math.min(1, 3 * this.fit), t * this.elementSize.x > 4e3 && (t = 4e3 / this.elementSize.x), t);
  }
  l() {
    return this.m("initial") || this.fit;
  }
  u() {
    const t = this.m("max");
    return t || Math.max(1, 4 * this.fit);
  }
}
class S {
  constructor(i, s, h) {
    this.data = i, this.index = s, this.pswp = h, this.isActive = s === h.currIndex, this.currentResolution = 0, this.panAreaSize = {}, this.isFirstSlide = this.isActive && !h.opener.isOpen, this.zoomLevels = new b(h.options, i, s, h), this.pswp.dispatch("gettingData", {
      slide: this,
      data: this.data,
      index: s
    }), this.pan = {
      x: 0,
      y: 0
    }, this.content = this.pswp.contentLoader.getContentBySlide(this), this.container = t("pswp__zoom-wrap"), this.currZoomLevel = 1, this.width = this.content.width, this.height = this.content.height, this.bounds = new y(this), this.prevDisplayedWidth = -1, this.prevDisplayedHeight = -1, this.pswp.dispatch("slideInit", {
      slide: this
    });
  }
  setIsActive(t) {
    t && !this.isActive ? this.activate() : !t && this.isActive && this.deactivate();
  }
  append(t) {
    this.holderElement = t, this.container.style.transformOrigin = "0 0", this.data && (this.calculateSize(), this.load(), this.updateContentSize(), this.appendHeavy(), this.holderElement.appendChild(this.container), this.zoomAndPanToInitial(), this.pswp.dispatch("firstZoomPan", {
      slide: this
    }), this.applyCurrentZoomPan(), this.pswp.dispatch("afterSetContent", {
      slide: this
    }), this.isActive && this.activate());
  }
  load() {
    this.content.load(), this.pswp.dispatch("slideLoad", {
      slide: this
    });
  }
  appendHeavy() {
    const {
      pswp: t
    } = this;
    !this.heavyAppended && t.opener.isOpen && !t.mainScroll.isShifted() && (this.isActive, 1) && (this.pswp.dispatch("appendHeavy", {
      slide: this
    }).defaultPrevented || (this.heavyAppended = !0, this.content.append(), this.pswp.dispatch("appendHeavyContent", {
      slide: this
    })));
  }
  activate() {
    this.isActive = !0, this.appendHeavy(), this.content.activate(), this.pswp.dispatch("slideActivate", {
      slide: this
    });
  }
  deactivate() {
    this.isActive = !1, this.content.deactivate(), this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize(), this.pswp.dispatch("slideDeactivate", {
      slide: this
    });
  }
  destroy() {
    this.content.hasSlide = !1, this.content.remove(), this.container.remove(), this.pswp.dispatch("slideDestroy", {
      slide: this
    });
  }
  resize() {
    this.currZoomLevel !== this.zoomLevels.initial && this.isActive ? (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y)) : (this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize());
  }
  updateContentSize(t) {
    const i = this.currentResolution || this.zoomLevels.initial;
    if (!i) return;
    const s = Math.round(this.width * i) || this.pswp.viewportSize.x,
      h = Math.round(this.height * i) || this.pswp.viewportSize.y;
    (this.sizeChanged(s, h) || t) && this.content.setDisplayedSize(s, h);
  }
  sizeChanged(t, i) {
    return (t !== this.prevDisplayedWidth || i !== this.prevDisplayedHeight) && (this.prevDisplayedWidth = t, this.prevDisplayedHeight = i, !0);
  }
  getPlaceholderElement() {
    if (this.content.placeholder) return this.content.placeholder.element;
  }
  zoomTo(t, i, h, e) {
    const {
      pswp: o
    } = this;
    if (!this.isZoomable() || o.mainScroll.isShifted()) return;
    o.dispatch("beforeZoomTo", {
      destZoomLevel: t,
      centerPoint: i,
      transitionDuration: h
    }), o.animations.stopAllPan();
    const r = this.currZoomLevel;
    e || (t = n(t, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", i, r), this.pan.y = this.calculateZoomToPanOffset("y", i, r), s(this.pan);
    const a = () => {
      this.g(t), this.applyCurrentZoomPan();
    };
    h ? o.animations.startTransition({
      isPan: !0,
      name: "zoomTo",
      target: this.container,
      transform: this.getCurrentTransform(),
      onComplete: a,
      duration: h,
      easing: o.options.easing
    }) : a();
  }
  toggleZoom(t) {
    this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, t, this.pswp.options.zoomAnimationDuration);
  }
  setZoomLevel(t) {
    this.currZoomLevel = t, this.bounds.update(this.currZoomLevel);
  }
  calculateZoomToPanOffset(t, i, s) {
    if (0 === this.bounds.max[t] - this.bounds.min[t]) return this.bounds.center[t];
    i || (i = this.pswp.getViewportCenterPoint());
    const h = this.currZoomLevel / s;
    return this.bounds.correctPan(t, (this.pan[t] - i[t]) * h + i[t]);
  }
  panTo(t, i) {
    this.pan.x = this.bounds.correctPan("x", t), this.pan.y = this.bounds.correctPan("y", i), this.applyCurrentZoomPan();
  }
  isPannable() {
    return this.width && this.currZoomLevel > this.zoomLevels.fit;
  }
  isZoomable() {
    return this.width && this.content.isZoomable();
  }
  applyCurrentZoomPan() {
    this._(this.pan.x, this.pan.y, this.currZoomLevel), this === this.pswp.currSlide && this.pswp.dispatch("zoomPanUpdate", {
      slide: this
    });
  }
  zoomAndPanToInitial() {
    this.currZoomLevel = this.zoomLevels.initial, this.bounds.update(this.currZoomLevel), i(this.pan, this.bounds.center), this.pswp.dispatch("initialZoomPan", {
      slide: this
    });
  }
  _(t, i, s) {
    s /= this.currentResolution || this.zoomLevels.initial, r(this.container, t, i, s);
  }
  calculateSize() {
    const {
      pswp: t
    } = this;
    i(this.panAreaSize, v(t.options, t.viewportSize, this.data, this.index)), this.zoomLevels.update(this.width, this.height, this.panAreaSize), t.dispatch("calcSlideSize", {
      slide: this
    });
  }
  getCurrentTransform() {
    const t = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return o(this.pan.x, this.pan.y, t);
  }
  g(t) {
    t !== this.currentResolution && (this.currentResolution = t, this.updateContentSize(), this.pswp.dispatch("resolutionChanged"));
  }
}
class x {
  constructor(t) {
    this.gestures = t, this.pswp = t.pswp, this.startPan = {};
  }
  start() {
    i(this.startPan, this.pswp.currSlide.pan), this.pswp.animations.stopAll();
  }
  change() {
    const {
        p1: t,
        prevP1: i,
        dragAxis: h,
        pswp: e
      } = this.gestures,
      {
        currSlide: n
      } = e;
    if ("y" === h && e.options.closeOnVerticalDrag && n.currZoomLevel <= n.zoomLevels.fit && !this.gestures.isMultitouch) {
      const s = n.pan.y + (t.y - i.y);
      if (!e.dispatch("verticalDrag", {
        panY: s
      }).defaultPrevented) {
        this.v("y", s, .6);
        const t = 1 - Math.abs(this.S(n.pan.y));
        e.applyBgOpacity(t), n.applyCurrentZoomPan();
      }
    } else {
      this.M("x") || (this.M("y"), s(n.pan), n.applyCurrentZoomPan());
    }
  }
  end() {
    const {
        pswp: t,
        velocity: i
      } = this.gestures,
      {
        mainScroll: s
      } = t;
    let h = 0;
    if (t.animations.stopAll(), s.isShifted()) {
      const e = (s.x - s.getCurrSlideX()) / t.viewportSize.x;
      i.x < -.5 && e < 0 || i.x < .1 && e < -.5 ? (h = 1, i.x = Math.min(i.x, 0)) : (i.x > .5 && e > 0 || i.x > -.1 && e > .5) && (h = -1, i.x = Math.max(i.x, 0)), s.moveIndexBy(h, !0, i.x);
    }
    t.currSlide.currZoomLevel > t.currSlide.zoomLevels.max || this.gestures.isMultitouch ? this.gestures.zoomLevels.correctZoomPan(!0) : (this.P("x"), this.P("y"));
  }
  P(t) {
    const {
        pswp: i
      } = this,
      {
        currSlide: s
      } = i,
      {
        velocity: h
      } = this.gestures,
      {
        pan: e,
        bounds: o
      } = s,
      r = e[t],
      a = i.bgOpacity < 1 && "y" === t,
      c = r + function (t, i) {
        return t * i / (1 - i);
      }(h[t], .995);
    if (a) {
      const t = this.S(r),
        s = this.S(c);
      if (t < 0 && s < -.4 || t > 0 && s > .4) return void i.close();
    }
    const l = o.correctPan(t, c);
    if (r === l) return;
    const p = l === c ? 1 : .82,
      u = i.bgOpacity,
      d = l - r;
    i.animations.startSpring({
      name: "panGesture" + t,
      isPan: !0,
      start: r,
      end: l,
      velocity: h[t],
      dampingRatio: p,
      onUpdate: h => {
        if (a && i.bgOpacity < 1) {
          const t = 1 - (l - h) / d;
          i.applyBgOpacity(n(u + (1 - u) * t, 0, 1));
        }
        e[t] = Math.floor(h), s.applyCurrentZoomPan();
      }
    });
  }
  M(t) {
    const {
        p1: i,
        pswp: s,
        dragAxis: h,
        prevP1: e,
        isMultitouch: n
      } = this.gestures,
      {
        currSlide: o,
        mainScroll: r
      } = s,
      a = i[t] - e[t],
      c = r.x + a;
    if (!a) return;
    if ("x" === t && !o.isPannable() && !n) return r.moveTo(c, !0), !0;
    const {
        bounds: l
      } = o,
      p = o.pan[t] + a;
    if (s.options.allowPanToNext && "x" === h && "x" === t && !n) {
      const i = r.getCurrSlideX(),
        s = r.x - i,
        h = a > 0,
        e = !h;
      if (p > l.min[t] && h) {
        if (l.min[t] <= this.startPan[t]) return r.moveTo(c, !0), !0;
        this.v(t, p);
      } else if (p < l.max[t] && e) {
        if (this.startPan[t] <= l.max[t]) return r.moveTo(c, !0), !0;
        this.v(t, p);
      } else if (0 !== s) {
        if (s > 0) return r.moveTo(Math.max(c, i), !0), !0;
        if (s < 0) return r.moveTo(Math.min(c, i), !0), !0;
      } else this.v(t, p);
    } else "y" === t && (r.isShifted() || l.min.y === l.max.y) || this.v(t, p);
  }
  S(t) {
    return (t - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3);
  }
  v(t, i, s) {
    const {
      pan: h,
      bounds: e
    } = this.pswp.currSlide;
    if (e.correctPan(t, i) !== i || s) {
      const e = Math.round(i - h[t]);
      h[t] += e * (s || .35);
    } else h[t] = i;
  }
}
function M(t, i, s) {
  return t.x = (i.x + s.x) / 2, t.y = (i.y + s.y) / 2, t;
}
class z {
  constructor(t) {
    this.gestures = t, this.pswp = this.gestures.pswp, this.C = {}, this.T = {}, this.D = {};
  }
  start() {
    this.I = this.pswp.currSlide.currZoomLevel, i(this.C, this.pswp.currSlide.pan), this.pswp.animations.stopAllPan(), this.A = !1;
  }
  change() {
    const {
        p1: t,
        startP1: i,
        p2: s,
        startP2: e,
        pswp: n
      } = this.gestures,
      {
        currSlide: o
      } = n,
      r = o.zoomLevels.min,
      a = o.zoomLevels.max;
    if (!o.isZoomable() || n.mainScroll.isShifted()) return;
    M(this.T, i, e), M(this.D, t, s);
    let c = 1 / h(i, e) * h(t, s) * this.I;
    if (c > o.zoomLevels.initial + o.zoomLevels.initial / 15 && (this.A = !0), c < r) {
      if (n.options.pinchToClose && !this.A && this.I <= o.zoomLevels.initial) {
        const t = 1 - (r - c) / (r / 1.2);
        n.dispatch("pinchClose", {
          bgOpacity: t
        }).defaultPrevented || n.applyBgOpacity(t);
      } else c = r - .15 * (r - c);
    } else c > a && (c = a + .05 * (c - a));
    o.pan.x = this.L("x", c), o.pan.y = this.L("y", c), o.setZoomLevel(c), o.applyCurrentZoomPan();
  }
  end() {
    const {
        pswp: t
      } = this,
      {
        currSlide: i
      } = t;
    i.currZoomLevel < i.zoomLevels.initial && !this.A && t.options.pinchToClose ? t.close() : this.correctZoomPan();
  }
  L(t, i) {
    const s = i / this.I;
    return this.D[t] - (this.T[t] - this.C[t]) * s;
  }
  correctZoomPan(t) {
    const {
        pswp: s
      } = this,
      {
        currSlide: h
      } = s;
    if (!h.isZoomable()) return;
    void 0 === this.D.x && (t = !0);
    const o = h.currZoomLevel;
    let r,
      a = !0;
    o < h.zoomLevels.initial ? r = h.zoomLevels.initial : o > h.zoomLevels.max ? r = h.zoomLevels.max : (a = !1, r = o);
    const c = s.bgOpacity,
      l = s.bgOpacity < 1,
      p = i({}, h.pan);
    let u = i({}, p);
    t && (this.D.x = 0, this.D.y = 0, this.T.x = 0, this.T.y = 0, this.I = o, i(this.C, p)), a && (u = {
      x: this.L("x", r),
      y: this.L("y", r)
    }), h.setZoomLevel(r), u = {
      x: h.bounds.correctPan("x", u.x),
      y: h.bounds.correctPan("y", u.y)
    }, h.setZoomLevel(o);
    let d = !0;
    if (e(u, p) && (d = !1), !d && !a && !l) return h.g(r), void h.applyCurrentZoomPan();
    s.animations.stopAllPan(), s.animations.startSpring({
      isPan: !0,
      start: 0,
      end: 1e3,
      velocity: 0,
      dampingRatio: 1,
      naturalFrequency: 40,
      onUpdate: t => {
        if (t /= 1e3, d || a) {
          if (d && (h.pan.x = p.x + (u.x - p.x) * t, h.pan.y = p.y + (u.y - p.y) * t), a) {
            const i = o + (r - o) * t;
            h.setZoomLevel(i);
          }
          h.applyCurrentZoomPan();
        }
        l && s.bgOpacity < 1 && s.applyBgOpacity(n(c + (1 - c) * t, 0, 1));
      },
      onComplete: () => {
        h.g(r), h.applyCurrentZoomPan();
      }
    });
  }
}
function P(t) {
  return !!t.target.closest(".pswp__container");
}
class C {
  constructor(t) {
    this.gestures = t;
  }
  click(t, i) {
    const s = i.target.classList,
      h = s.contains("pswp__img"),
      e = s.contains("pswp__item") || s.contains("pswp__zoom-wrap");
    h ? this.k("imageClick", t, i) : e && this.k("bgClick", t, i);
  }
  tap(t, i) {
    P(i) && this.k("tap", t, i);
  }
  doubleTap(t, i) {
    P(i) && this.k("doubleTap", t, i);
  }
  k(t, i, s) {
    const {
        pswp: h
      } = this.gestures,
      {
        currSlide: e
      } = h,
      n = t + "Action",
      o = h.options[n];
    if (!h.dispatch(n, {
      point: i,
      originalEvent: s
    }).defaultPrevented) if ("function" != typeof o) switch (o) {
      case "close":
      case "next":
        h[o]();
        break;
      case "zoom":
        e.toggleZoom(i);
        break;
      case "zoom-or-close":
        e.isZoomable() && e.zoomLevels.secondary !== e.zoomLevels.initial ? e.toggleZoom(i) : h.options.clickToCloseNonZoomable && h.close();
        break;
      case "toggle-controls":
        this.gestures.pswp.element.classList.toggle("pswp--ui-visible");
    } else o.call(h, i, s);
  }
}
class T {
  constructor(t) {
    this.pswp = t, this.dragAxis = void 0, this.p1 = {}, this.p2 = {}, this.prevP1 = {}, this.prevP2 = {}, this.startP1 = {}, this.startP2 = {}, this.velocity = {}, this.Z = {}, this.F = {}, this.O = 0, this.B = [], this.R = "ontouchstart" in window, this.N = !!window.PointerEvent, this.supportsTouch = this.R || this.N && navigator.maxTouchPoints > 1, this.supportsTouch || (t.options.allowPanToNext = !1), this.drag = new x(this), this.zoomLevels = new z(this), this.tapHandler = new C(this), t.on("bindEvents", () => {
      t.events.add(t.scrollWrap, "click", t => this.V(t)), this.N ? this.G("pointer", "down", "up", "cancel") : this.R ? (this.G("touch", "start", "end", "cancel"), t.scrollWrap.ontouchmove = () => {}, t.scrollWrap.ontouchend = () => {}) : this.G("mouse", "down", "up");
    });
  }
  G(t, i, s, h) {
    const {
        pswp: e
      } = this,
      {
        events: n
      } = e,
      o = h ? t + h : "";
    n.add(e.scrollWrap, t + i, this.onPointerDown.bind(this)), n.add(window, t + "move", this.onPointerMove.bind(this)), n.add(window, t + s, this.onPointerUp.bind(this)), o && n.add(e.scrollWrap, o, this.onPointerUp.bind(this));
  }
  onPointerDown(t) {
    let s;
    if ("mousedown" !== t.type && "mouse" !== t.pointerType || (s = !0), s && t.button > 0) return;
    const {
      pswp: h
    } = this;
    h.opener.isOpen ? h.dispatch("pointerDown", {
      originalEvent: t
    }).defaultPrevented || (s && (h.mouseDetected(), this.U(t)), h.animations.stopAll(), this.q(t, "down"), this.pointerDown = !0, 1 === this.O && (this.dragAxis = null, i(this.startP1, this.p1)), this.O > 1 ? (this.H(), this.isMultitouch = !0) : this.isMultitouch = !1) : t.preventDefault();
  }
  onPointerMove(t) {
    t.preventDefault(), this.O && (this.q(t, "move"), this.pswp.dispatch("pointerMove", {
      originalEvent: t
    }).defaultPrevented || (1 !== this.O || this.isDragging ? this.O > 1 && !this.isZooming && (this.K(), this.isZooming = !0, this.W(), this.zoomLevels.start(), this.j(), this.X()) : (this.dragAxis || this.Y(), this.dragAxis && !this.isDragging && (this.isZooming && (this.isZooming = !1, this.zoomLevels.end()), this.isDragging = !0, this.H(), this.W(), this.$ = Date.now(), this.J = !1, i(this.F, this.p1), this.velocity.x = 0, this.velocity.y = 0, this.drag.start(), this.j(), this.X()))));
  }
  K() {
    this.isDragging && (this.isDragging = !1, this.J || this.tt(!0), this.drag.end(), this.dragAxis = null);
  }
  onPointerUp(t) {
    this.O && (this.q(t, "up"), this.pswp.dispatch("pointerUp", {
      originalEvent: t
    }).defaultPrevented || (0 === this.O && (this.pointerDown = !1, this.j(), this.isDragging ? this.K() : this.isZooming || this.isMultitouch || this.it(t)), this.O < 2 && this.isZooming && (this.isZooming = !1, this.zoomLevels.end(), 1 === this.O && (this.dragAxis = null, this.W()))));
  }
  X() {
    (this.isDragging || this.isZooming) && (this.tt(), this.isDragging ? e(this.p1, this.prevP1) || this.drag.change() : e(this.p1, this.prevP1) && e(this.p2, this.prevP2) || this.zoomLevels.change(), this.st(), this.raf = requestAnimationFrame(this.X.bind(this)));
  }
  tt(t) {
    const s = Date.now(),
      h = s - this.$;
    h < 50 && !t || (this.velocity.x = this.ht("x", h), this.velocity.y = this.ht("y", h), this.$ = s, i(this.F, this.p1), this.J = !0);
  }
  it(t) {
    const {
      mainScroll: s
    } = this.pswp;
    if (s.isShifted()) return void s.moveIndexBy(0, !0);
    if (t.type.indexOf("cancel") > 0) return;
    if ("mouseup" === t.type || "mouse" === t.pointerType) return void this.tapHandler.click(this.startP1, t);
    const e = this.pswp.options.doubleTapAction ? 300 : 0;
    this.et ? (this.H(), h(this.Z, this.startP1) < 25 && this.tapHandler.doubleTap(this.startP1, t)) : (i(this.Z, this.startP1), this.et = setTimeout(() => {
      this.tapHandler.tap(this.startP1, t), this.H();
    }, e));
  }
  H() {
    this.et && (clearTimeout(this.et), this.et = null);
  }
  ht(t, i) {
    const s = this.p1[t] - this.F[t];
    return Math.abs(s) > 1 && i > 5 ? s / i : 0;
  }
  j() {
    this.raf && (cancelAnimationFrame(this.raf), this.raf = null);
  }
  U(t) {
    return t.preventDefault(), !0;
  }
  q(t, s) {
    if (this.N) {
      const h = t,
        e = this.B.findIndex(t => t.id === h.pointerId);
      "up" === s && e > -1 ? this.B.splice(e, 1) : "down" === s && -1 === e ? this.B.push(this.nt(h, {})) : e > -1 && this.nt(h, this.B[e]), this.O = this.B.length, this.O > 0 && i(this.p1, this.B[0]), this.O > 1 && i(this.p2, this.B[1]);
    } else {
      const i = t;
      this.O = 0, i.type.indexOf("touch") > -1 ? i.touches && i.touches.length > 0 && (this.nt(i.touches[0], this.p1), this.O++, i.touches.length > 1 && (this.nt(i.touches[1], this.p2), this.O++)) : (this.nt(t, this.p1), "up" === s ? this.O = 0 : this.O++);
    }
  }
  st() {
    i(this.prevP1, this.p1), i(this.prevP2, this.p2);
  }
  W() {
    i(this.startP1, this.p1), i(this.startP2, this.p2), this.st();
  }
  Y() {
    if (this.pswp.mainScroll.isShifted()) this.dragAxis = "x";else {
      const t = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (0 !== t) {
        const i = t > 0 ? "x" : "y";
        Math.abs(this.p1[i] - this.startP1[i]) >= 10 && (this.dragAxis = i);
      }
    }
  }
  nt(t, i) {
    return i.x = t.pageX - this.pswp.offset.x, i.y = t.pageY - this.pswp.offset.y, "pointerId" in t ? i.id = t.pointerId : void 0 !== t.identifier && (i.id = t.identifier), i;
  }
  V(t) {
    this.pswp.mainScroll.isShifted() && (t.preventDefault(), t.stopPropagation());
  }
}
class D {
  constructor(t) {
    this.pswp = t, this.x = 0, this.slideWidth = void 0, this.itemHolders = void 0, this.resetPosition();
  }
  resize(t) {
    const {
        pswp: i
      } = this,
      s = Math.round(i.viewportSize.x + i.viewportSize.x * i.options.spacing),
      h = s !== this.slideWidth;
    h && (this.slideWidth = s, this.moveTo(this.getCurrSlideX())), this.itemHolders.forEach((i, s) => {
      h && r(i.el, (s + this.ot) * this.slideWidth), t && i.slide && i.slide.resize();
    });
  }
  resetPosition() {
    this.rt = 0, this.ct = 0, this.slideWidth = 0, this.ot = -1;
  }
  appendHolders() {
    this.itemHolders = [];
    for (let i = 0; i < 3; i++) {
      const s = t("pswp__item", !1, this.pswp.container);
      s.style.display = 1 === i ? "block" : "none", this.itemHolders.push({
        el: s
      });
    }
  }
  canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }
  moveIndexBy(t, i, s) {
    const {
      pswp: h
    } = this;
    let e = h.potentialIndex + t;
    const n = h.getNumItems();
    if (h.canLoop()) {
      e = h.getLoopedIndex(e);
      const i = (t + n) % n;
      t = i <= n / 2 ? i : i - n;
    } else e < 0 ? e = 0 : e >= n && (e = n - 1), t = e - h.potentialIndex;
    h.potentialIndex = e, this.rt -= t, h.animations.stopMainScroll();
    const o = this.getCurrSlideX();
    if (i) {
      h.animations.startSpring({
        isMainScroll: !0,
        start: this.x,
        end: o,
        velocity: s || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        onUpdate: t => {
          this.moveTo(t);
        },
        onComplete: () => {
          this.updateCurrItem(), h.appendHeavy();
        }
      });
      let t = h.potentialIndex - h.currIndex;
      if (h.canLoop()) {
        const i = (t + n) % n;
        t = i <= n / 2 ? i : i - n;
      }
      Math.abs(t) > 1 && this.updateCurrItem();
    } else this.moveTo(o), this.updateCurrItem();
    if (t) return !0;
  }
  getCurrSlideX() {
    return this.slideWidth * this.rt;
  }
  isShifted() {
    return this.x !== this.getCurrSlideX();
  }
  updateCurrItem() {
    const {
        pswp: t
      } = this,
      i = this.ct - this.rt;
    if (!i) return;
    this.ct = this.rt, t.currIndex = t.potentialIndex;
    let s,
      h = Math.abs(i);
    h >= 3 && (this.ot += i + (i > 0 ? -3 : 3), h = 3);
    for (let e = 0; e < h; e++) i > 0 ? (s = this.itemHolders.shift(), this.itemHolders[2] = s, this.ot++, r(s.el, (this.ot + 2) * this.slideWidth), t.setContent(s, t.currIndex - h + e + 2)) : (s = this.itemHolders.pop(), this.itemHolders.unshift(s), this.ot--, r(s.el, this.ot * this.slideWidth), t.setContent(s, t.currIndex + h - e - 2));
    Math.abs(this.ot) > 50 && !this.isShifted() && (this.resetPosition(), this.resize()), t.animations.stopAllPan(), this.itemHolders.forEach((t, i) => {
      t.slide && t.slide.setIsActive(1 === i);
    }), t.currSlide = this.itemHolders[1].slide, t.contentLoader.updateLazy(i), t.currSlide && t.currSlide.applyCurrentZoomPan(), t.dispatch("change");
  }
  moveTo(t, i) {
    let s, h;
    !this.pswp.canLoop() && i && (s = (this.slideWidth * this.rt - t) / this.slideWidth, s += this.pswp.currIndex, h = Math.round(t - this.x), (s < 0 && h > 0 || s >= this.pswp.getNumItems() - 1 && h < 0) && (t = this.x + .35 * h)), this.x = t, r(this.pswp.container, t), this.pswp.dispatch("moveMainScroll", {
      x: t,
      dragging: i
    });
  }
}
class I {
  constructor(t) {
    this.pswp = t, t.on("bindEvents", () => {
      t.options.initialPointerPos || this.lt(), t.events.add(document, "focusin", this.ut.bind(this)), t.events.add(document, "keydown", this.dt.bind(this));
    });
    const i = document.activeElement;
    t.on("destroy", () => {
      t.options.returnFocus && i && this.ft && i.focus();
    });
  }
  lt() {
    this.ft || (this.pswp.element.focus(), this.ft = !0);
  }
  dt(t) {
    const {
      pswp: i
    } = this;
    if (i.dispatch("keydown", {
      originalEvent: t
    }).defaultPrevented) return;
    if (function (t) {
      if (2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey) return !0;
    }(t)) return;
    let s, h, e;
    switch (t.keyCode) {
      case 27:
        i.options.escKey && (s = "close");
        break;
      case 90:
        s = "toggleZoom";
        break;
      case 37:
        h = "x";
        break;
      case 38:
        h = "y";
        break;
      case 39:
        h = "x", e = !0;
        break;
      case 40:
        e = !0, h = "y";
        break;
      case 9:
        this.lt();
    }
    if (h) {
      t.preventDefault();
      const {
        currSlide: n
      } = i;
      i.options.arrowKeys && "x" === h && i.getNumItems() > 1 ? s = e ? "next" : "prev" : n && n.currZoomLevel > n.zoomLevels.fit && (n.pan[h] += e ? -80 : 80, n.panTo(n.pan.x, n.pan.y));
    }
    s && (t.preventDefault(), i[s]());
  }
  ut(t) {
    const {
      template: i
    } = this.pswp;
    document === t.target || i === t.target || i.contains(t.target) || i.focus();
  }
}
class A {
  constructor(t) {
    this.props = t;
    const {
      target: i,
      onComplete: s,
      transform: h,
      onFinish: e
    } = t;
    let {
      duration: n,
      easing: o
    } = t;
    this.onFinish = e;
    const r = h ? "transform" : "opacity",
      c = t[r];
    this.wt = i, this.gt = s, n = n || 333, o = o || "cubic-bezier(.4,0,.22,1)", this._t = this._t.bind(this), this.vt = setTimeout(() => {
      a(i, r, n, o), this.vt = setTimeout(() => {
        i.addEventListener("transitionend", this._t, !1), i.addEventListener("transitioncancel", this._t, !1), this.vt = setTimeout(() => {
          this.yt();
        }, n + 500), i.style[r] = c;
      }, 30);
    }, 0);
  }
  _t(t) {
    t.target === this.wt && this.yt();
  }
  yt() {
    this.bt || (this.bt = !0, this.onFinish(), this.gt && this.gt());
  }
  destroy() {
    this.vt && clearTimeout(this.vt), a(this.wt), this.wt.removeEventListener("transitionend", this._t, !1), this.wt.removeEventListener("transitioncancel", this._t, !1), this.bt || this.yt();
  }
}
class E {
  constructor(t, i, s) {
    this.velocity = 1e3 * t, this.St = i || .75, this.xt = s || 12, this.St < 1 && (this.Mt = this.xt * Math.sqrt(1 - this.St * this.St));
  }
  easeFrame(t, i) {
    let s,
      h = 0;
    i /= 1e3;
    const e = Math.E ** (-this.St * this.xt * i);
    if (1 === this.St) s = this.velocity + this.xt * t, h = (t + s * i) * e, this.velocity = h * -this.xt + s * e;else if (this.St < 1) {
      s = 1 / this.Mt * (this.St * this.xt * t + this.velocity);
      const n = Math.cos(this.Mt * i),
        o = Math.sin(this.Mt * i);
      h = e * (t * n + s * o), this.velocity = h * -this.xt * this.St + e * (-this.Mt * t * o + this.Mt * s * n);
    }
    return h;
  }
}
class L {
  constructor(t) {
    this.props = t;
    const {
      start: i,
      end: s,
      velocity: h,
      onUpdate: e,
      onComplete: n,
      onFinish: o,
      dampingRatio: r,
      naturalFrequency: a
    } = t;
    this.onFinish = o;
    const c = new E(h, r, a);
    let l = Date.now(),
      p = i - s;
    const u = () => {
      this.zt && (p = c.easeFrame(p, Date.now() - l), Math.abs(p) < 1 && Math.abs(c.velocity) < 50 ? (e(s), n && n(), this.onFinish()) : (l = Date.now(), e(p + s), this.zt = requestAnimationFrame(u)));
    };
    this.zt = requestAnimationFrame(u);
  }
  destroy() {
    this.zt >= 0 && cancelAnimationFrame(this.zt), this.zt = null;
  }
}
class k {
  constructor() {
    this.activeAnimations = [];
  }
  startSpring(t) {
    this.Pt(t, !0);
  }
  startTransition(t) {
    this.Pt(t);
  }
  Pt(t, i) {
    let s;
    return s = i ? new L(t) : new A(t), this.activeAnimations.push(s), s.onFinish = () => this.stop(s), s;
  }
  stop(t) {
    t.destroy();
    const i = this.activeAnimations.indexOf(t);
    i > -1 && this.activeAnimations.splice(i, 1);
  }
  stopAll() {
    this.activeAnimations.forEach(t => {
      t.destroy();
    }), this.activeAnimations = [];
  }
  stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter(t => !t.props.isPan || (t.destroy(), !1));
  }
  stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter(t => !t.props.isMainScroll || (t.destroy(), !1));
  }
  isPanRunning() {
    return this.activeAnimations.some(t => t.props.isPan);
  }
}
class Z {
  constructor(t) {
    this.pswp = t, t.events.add(t.element, "wheel", this.Ct.bind(this));
  }
  Ct(t) {
    t.preventDefault();
    const {
      currSlide: i
    } = this.pswp;
    let {
      deltaX: s,
      deltaY: h
    } = t;
    if (i && !this.pswp.dispatch("wheel", {
      originalEvent: t
    }).defaultPrevented) if (t.ctrlKey || this.pswp.options.wheelToZoom) {
      if (i.isZoomable()) {
        let s = -h;
        1 === t.deltaMode ? s *= .05 : s *= t.deltaMode ? 1 : .002, s = 2 ** s;
        const e = i.currZoomLevel * s;
        i.zoomTo(e, {
          x: t.clientX,
          y: t.clientY
        });
      }
    } else i.isPannable() && (1 === t.deltaMode && (s *= 18, h *= 18), i.panTo(i.pan.x - s, i.pan.y - h));
  }
}
class F {
  constructor(i, s) {
    const h = s.name || s.className;
    let e = s.html;
    if (!1 === i.options[h]) return;
    "string" == typeof i.options[h + "SVG"] && (e = i.options[h + "SVG"]), i.dispatch("uiElementCreate", {
      data: s
    });
    let n,
      o = "";
    s.isButton ? (o += "pswp__button ", o += s.className || `pswp__button--${s.name}`) : o += s.className || `pswp__${s.name}`;
    let r = s.isButton ? s.tagName || "button" : s.tagName || "div";
    if (r = r.toLowerCase(), n = t(o, r), s.isButton) {
      n = t(o, r), "button" === r && (n.type = "button");
      let {
        title: e
      } = s;
      const {
        ariaLabel: a
      } = s;
      "string" == typeof i.options[h + "Title"] && (e = i.options[h + "Title"]), e && (n.title = e), (a || e) && n.setAttribute("aria-label", a || e);
    }
    n.innerHTML = function (t) {
      if ("string" == typeof t) return t;
      if (!t || !t.isCustomSVG) return "";
      const i = t;
      let s = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
      return s = s.split("%d").join(i.size || 32), i.outlineID && (s += '<use class="pswp__icn-shadow" xlink:href="#' + i.outlineID + '"/>'), s += i.inner, s += "</svg>", s;
    }(e), s.onInit && s.onInit(n, i), s.onClick && (n.onclick = t => {
      "string" == typeof s.onClick ? i[s.onClick]() : s.onClick(t, n, i);
    });
    const a = s.appendTo || "bar";
    let c;
    "bar" === a ? (i.topBar || (i.topBar = t("pswp__top-bar pswp__hide-on-close", "div", i.scrollWrap)), c = i.topBar) : (n.classList.add("pswp__hide-on-close"), c = "wrapper" === a ? i.scrollWrap : i.element), c.appendChild(i.applyFilters("uiElement", n, s));
  }
}
function O(t, i, s) {
  t.classList.add("pswp__button--arrow"), i.on("change", () => {
    i.options.loop || (t.disabled = s ? !(i.currIndex < i.getNumItems() - 1) : !(i.currIndex > 0));
  });
}
const B = {
    name: "arrowPrev",
    className: "pswp__button--arrow--prev",
    title: "Previous",
    order: 10,
    isButton: !0,
    appendTo: "wrapper",
    html: {
      isCustomSVG: !0,
      size: 60,
      inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
      outlineID: "pswp__icn-arrow"
    },
    onClick: "prev",
    onInit: O
  },
  R = {
    name: "arrowNext",
    className: "pswp__button--arrow--next",
    title: "Next",
    order: 11,
    isButton: !0,
    appendTo: "wrapper",
    html: {
      isCustomSVG: !0,
      size: 60,
      inner: '<use xlink:href="#pswp__icn-arrow"/>',
      outlineID: "pswp__icn-arrow"
    },
    onClick: "next",
    onInit: (t, i) => {
      O(t, i, !0);
    }
  },
  N = {
    name: "close",
    title: "Close",
    order: 20,
    isButton: !0,
    html: {
      isCustomSVG: !0,
      inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
      outlineID: "pswp__icn-close"
    },
    onClick: "close"
  },
  V = {
    name: "zoom",
    title: "Zoom",
    order: 10,
    isButton: !0,
    html: {
      isCustomSVG: !0,
      inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
      outlineID: "pswp__icn-zoom"
    },
    onClick: "toggleZoom"
  },
  G = {
    name: "preloader",
    appendTo: "bar",
    order: 7,
    html: {
      isCustomSVG: !0,
      inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
      outlineID: "pswp__icn-loading"
    },
    onInit: (t, i) => {
      let s, h;
      const e = i => {
          var h, e;
          s !== i && (s = i, h = "active", e = i, t.classList[e ? "add" : "remove"]("pswp__preloader--" + h));
        },
        n = () => {
          if (!i.currSlide.content.isLoading()) return e(!1), void (h && (clearTimeout(h), h = null));
          h || (h = setTimeout(() => {
            e(i.currSlide.content.isLoading()), h = null;
          }, i.options.preloaderDelay));
        };
      i.on("change", n), i.on("loadComplete", t => {
        i.currSlide === t.slide && n();
      }), i.ui.updatePreloaderVisibility = n;
    }
  },
  U = {
    name: "counter",
    order: 5,
    onInit: (t, i) => {
      i.on("change", () => {
        t.innerText = i.currIndex + 1 + i.options.indexIndicatorSep + i.getNumItems();
      });
    }
  };
function q(t, i) {
  t.classList[i ? "add" : "remove"]("pswp--zoomed-in");
}
class H {
  constructor(t) {
    this.pswp = t, this.updatePreloaderVisibility = void 0, this.Tt = void 0;
  }
  init() {
    const {
      pswp: t
    } = this;
    this.isRegistered = !1, this.uiElementsData = [N, B, R, V, G, U], t.dispatch("uiRegister"), this.uiElementsData.sort((t, i) => (t.order || 0) - (i.order || 0)), this.items = [], this.isRegistered = !0, this.uiElementsData.forEach(t => {
      this.registerElement(t);
    }), t.on("change", () => {
      t.element.classList[1 === t.getNumItems() ? "add" : "remove"]("pswp--one-slide");
    }), t.on("zoomPanUpdate", () => this.Dt());
  }
  registerElement(t) {
    this.isRegistered ? this.items.push(new F(this.pswp, t)) : this.uiElementsData.push(t);
  }
  Dt() {
    const {
      template: t,
      currSlide: i,
      options: s
    } = this.pswp;
    let {
      currZoomLevel: h
    } = i;
    if (this.pswp.opener.isClosing) return;
    if (this.pswp.opener.isOpen || (h = i.zoomLevels.initial), h === this.Tt) return;
    this.Tt = h;
    const e = i.zoomLevels.initial - i.zoomLevels.secondary;
    if (Math.abs(e) < .01 || !i.isZoomable()) return q(t, !1), void t.classList.remove("pswp--zoom-allowed");
    t.classList.add("pswp--zoom-allowed");
    q(t, (h === i.zoomLevels.initial ? i.zoomLevels.secondary : i.zoomLevels.initial) <= h), "zoom" !== s.imageClickAction && "zoom-or-close" !== s.imageClickAction || t.classList.add("pswp--click-to-zoom");
  }
}
class K {
  constructor(t, i) {
    this.type = t, i && Object.assign(this, i);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class W {
  constructor(i, s) {
    this.element = t("pswp__img pswp__img--placeholder", i ? "img" : "", s), i && (this.element.decoding = "async", this.element.alt = "", this.element.src = i, this.element.setAttribute("role", "presentation")), this.element.setAttribute("aria-hidden", "true");
  }
  setDisplayedSize(t, i) {
    this.element && ("IMG" === this.element.tagName ? (c(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = o(0, 0, t / 250)) : c(this.element, t, i));
  }
  destroy() {
    this.element.parentNode && this.element.remove(), this.element = null;
  }
}
class j {
  constructor(t, i, s) {
    this.instance = i, this.data = t, this.index = s, this.element = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.state = l, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
      content: this
    });
  }
  removePlaceholder() {
    this.placeholder && !this.keepPlaceholder() && setTimeout(() => {
      this.placeholder && (this.placeholder.destroy(), this.placeholder = null);
    }, 1e3);
  }
  load(i, s) {
    if (this.slide && this.usePlaceholder()) if (this.placeholder) {
      const t = this.placeholder.element;
      t && !t.parentElement && this.slide.container.prepend(t);
    } else {
      const t = this.instance.applyFilters("placeholderSrc", !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc, this);
      this.placeholder = new W(t, this.slide.container);
    }
    this.element && !s || this.instance.dispatch("contentLoad", {
      content: this,
      isLazy: i
    }).defaultPrevented || (this.isImageContent() ? (this.element = t("pswp__img", "img"), this.displayedImageWidth && this.loadImage(i)) : (this.element = t("pswp__content"), this.element.innerHTML = this.data.html || ""), s && this.slide && this.slide.updateContentSize(!0));
  }
  loadImage(t) {
    const i = this.element;
    this.instance.dispatch("contentLoadImage", {
      content: this,
      isLazy: t
    }).defaultPrevented || (this.updateSrcsetSizes(), this.data.srcset && (i.srcset = this.data.srcset), i.src = this.data.src, i.alt = this.data.alt || "", this.state = p, i.complete ? this.onLoaded() : (i.onload = () => {
      this.onLoaded();
    }, i.onerror = () => {
      this.onError();
    }));
  }
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  onLoaded() {
    this.state = u, this.slide && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), this.state !== u && this.state !== d || this.removePlaceholder());
  }
  onError() {
    this.state = d, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === p, this);
  }
  isError() {
    return this.state === d;
  }
  isImageContent() {
    return "image" === this.type;
  }
  setDisplayedSize(t, i) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, i), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: i
    }).defaultPrevented && (c(this.element, t, i), this.isImageContent() && !this.isError()))) {
      const s = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = i, s ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: i,
        content: this
      });
    }
  }
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== d, this);
  }
  updateSrcsetSizes() {
    if (this.data.srcset) {
      const t = this.element,
        i = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      (!t.dataset.largestUsedSize || i > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = i + "px", t.dataset.largestUsedSize = String(i));
    }
  }
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  lazyLoad() {
    this.instance.dispatch("contentLazyLoad", {
      content: this
    }).defaultPrevented || this.load(!0);
  }
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  destroy() {
    this.hasSlide = !1, this.slide = null, this.instance.dispatch("contentDestroy", {
      content: this
    }).defaultPrevented || (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = null), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = null));
  }
  displayError() {
    if (this.slide) {
      let i = t("pswp__error-msg");
      i.innerText = this.instance.options.errorMsg, i = this.instance.applyFilters("contentErrorElement", i, this), this.element = t("pswp__content pswp__error-msg-container"), this.element.appendChild(i), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder();
    }
  }
  append() {
    if (this.isAttached) return;
    if (this.isAttached = !0, this.state === d) return void this.displayError();
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented) return;
    const t = ("decode" in this.element);
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || m()) ? (this.isDecoding = !0, this.element.decode().catch(() => {}).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.element && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || this.slide && (this.isImageContent() && this.isDecoding && !m() ? this.appendImage() : this.isError() && this.load(!1, !0));
  }
  deactivate() {
    this.instance.dispatch("contentDeactivate", {
      content: this
    });
  }
  remove() {
    this.isAttached = !1, this.instance.dispatch("contentRemove", {
      content: this
    }).defaultPrevented || (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  appendImage() {
    this.isAttached && (this.instance.dispatch("contentAppendImage", {
      content: this
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), this.state !== u && this.state !== d || this.removePlaceholder()));
  }
}
function X(t, i, s) {
  const h = i.createContentFromData(t, s);
  if (!h || !h.lazyLoad) return;
  const {
      options: e
    } = i,
    n = v(e, i.viewportSize || g(e, i), t, s),
    o = new b(e, t, -1);
  return o.update(h.width, h.height, n), h.lazyLoad(), h.setDisplayedSize(Math.ceil(h.width * o.initial), Math.ceil(h.height * o.initial)), h;
}
class Y {
  constructor(t) {
    this.pswp = t, this.limit = Math.max(t.options.preload[0] + t.options.preload[1] + 1, 5), this.It = [];
  }
  updateLazy(t) {
    const {
      pswp: i
    } = this;
    if (i.dispatch("lazyLoad").defaultPrevented) return;
    const {
        preload: s
      } = i.options,
      h = void 0 === t || t >= 0;
    let e;
    for (e = 0; e <= s[1]; e++) this.loadSlideByIndex(i.currIndex + (h ? e : -e));
    for (e = 1; e <= s[0]; e++) this.loadSlideByIndex(i.currIndex + (h ? -e : e));
  }
  loadSlideByIndex(t) {
    t = this.pswp.getLoopedIndex(t);
    let i = this.getContentByIndex(t);
    i || (i = function (t, i) {
      const s = i.getItemData(t);
      if (!i.dispatch("lazyLoadSlide", {
        index: t,
        itemData: s
      }).defaultPrevented) return X(s, i, t);
    }(t, this.pswp), i && this.addToCache(i));
  }
  getContentBySlide(t) {
    let i = this.getContentByIndex(t.index);
    return i || (i = this.pswp.createContentFromData(t.data, t.index), i && this.addToCache(i)), i && i.setSlide(t), i;
  }
  addToCache(t) {
    if (this.removeByIndex(t.index), this.It.push(t), this.It.length > this.limit) {
      const t = this.It.findIndex(t => !t.isAttached && !t.hasSlide);
      if (-1 !== t) {
        this.It.splice(t, 1)[0].destroy();
      }
    }
  }
  removeByIndex(t) {
    const i = this.It.findIndex(i => i.index === t);
    -1 !== i && this.It.splice(i, 1);
  }
  getContentByIndex(t) {
    return this.It.find(i => i.index === t);
  }
  destroy() {
    this.It.forEach(t => t.destroy()), this.It = null;
  }
}
class $ {
  constructor(t) {
    this.pswp = t, this.isClosed = !0, this.At = this.At.bind(this), this.Et = void 0, t.on("firstZoomPan", this.At);
  }
  open() {
    this.At(), this.Pt();
  }
  close() {
    if (this.isClosed || this.isClosing || this.isOpening) return !1;
    const t = this.pswp.currSlide;
    return this.isOpen = !1, this.isOpening = !1, this.isClosing = !0, this.Lt = this.pswp.options.hideAnimationDuration, t && t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate && (this.Lt = 0), this.kt(), setTimeout(() => {
      this.Pt();
    }, this.Zt ? 30 : 0), !0;
  }
  At() {
    if (this.pswp.off("firstZoomPan", this.At), !this.isOpening) {
      const t = this.pswp.currSlide;
      this.isOpening = !0, this.isClosing = !1, this.Lt = this.pswp.options.showAnimationDuration, t && t.zoomLevels.initial * t.width >= this.pswp.options.maxWidthToAnimate && (this.Lt = 0), this.kt();
    }
  }
  kt() {
    const {
        pswp: t
      } = this,
      i = this.pswp.currSlide,
      {
        options: s
      } = t;
    if ("fade" === s.showHideAnimationType ? (s.showHideOpacity = !0, this.Et = !1) : "none" === s.showHideAnimationType ? (s.showHideOpacity = !1, this.Lt = 0, this.Et = !1) : this.isOpening && t.Ft ? this.Et = t.Ft : this.Et = this.pswp.getThumbBounds(), this.Ot = i.getPlaceholderElement(), t.animations.stopAll(), this.Bt = this.Lt > 50, this.Rt = Boolean(this.Et) && i.content && i.content.usePlaceholder() && (!this.isClosing || !t.mainScroll.isShifted()), this.Rt ? this.Nt = s.showHideOpacity : (this.Nt = !0, this.isOpening && (i.zoomAndPanToInitial(), i.applyCurrentZoomPan())), this.Vt = !this.Nt && this.pswp.options.bgOpacity > .003, this.Gt = this.Nt ? t.element : t.bg, !this.Bt) return this.Lt = 0, this.Rt = !1, this.Vt = !1, this.Nt = !0, void (this.isOpening && (t.element.style.opacity = String(.003), t.applyBgOpacity(1)));
    this.Rt && this.Et && this.Et.innerRect ? (this.Zt = !0, this.Ut = this.pswp.container, this.qt = this.pswp.currSlide.holderElement, t.container.style.overflow = "hidden", t.container.style.width = t.viewportSize.x + "px") : this.Zt = !1, this.isOpening ? (this.Nt ? (t.element.style.opacity = String(.003), t.applyBgOpacity(1)) : (this.Vt && (t.bg.style.opacity = String(.003)), t.element.style.opacity = "1"), this.Rt && (this.Ht(), this.Ot && (this.Ot.style.willChange = "transform", this.Ot.style.opacity = String(.003)))) : this.isClosing && (t.mainScroll.itemHolders[0].el.style.display = "none", t.mainScroll.itemHolders[2].el.style.display = "none", this.Zt && 0 !== t.mainScroll.x && (t.mainScroll.resetPosition(), t.mainScroll.resize()));
  }
  Pt() {
    this.isOpening && this.Bt && this.Ot && "IMG" === this.Ot.tagName ? new Promise(t => {
      let i = !1,
        s = !0;
      var h;
      (h = this.Ot, "decode" in h ? h.decode().catch(() => {}) : h.complete ? Promise.resolve(h) : new Promise((t, i) => {
        h.onload = () => t(h), h.onerror = i;
      })).finally(() => {
        i = !0, s || t();
      }), setTimeout(() => {
        s = !1, i && t();
      }, 50), setTimeout(t, 250);
    }).finally(() => this.Kt()) : this.Kt();
  }
  Kt() {
    this.pswp.element.style.setProperty("--pswp-transition-duration", this.Lt + "ms"), this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart"), this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out")), this.pswp.element.classList[this.isOpening ? "add" : "remove"]("pswp--ui-visible"), this.isOpening ? (this.Ot && (this.Ot.style.opacity = "1"), this.Wt()) : this.isClosing && this.jt(), this.Bt || this.Xt();
  }
  Xt() {
    const {
      pswp: t
    } = this;
    this.isOpen = this.isOpening, this.isClosed = this.isClosing, this.isOpening = !1, this.isClosing = !1, t.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"), t.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")), this.isClosed ? t.destroy() : this.isOpen && (this.Rt && (t.container.style.overflow = "visible", t.container.style.width = "100%"), t.currSlide.applyCurrentZoomPan());
  }
  Wt() {
    const {
      pswp: t
    } = this;
    this.Rt && (this.Zt && (this.Yt(this.Ut, "transform", "translate3d(0,0,0)"), this.Yt(this.qt, "transform", "none")), t.currSlide.zoomAndPanToInitial(), this.Yt(t.currSlide.container, "transform", t.currSlide.getCurrentTransform())), this.Vt && this.Yt(t.bg, "opacity", String(t.options.bgOpacity)), this.Nt && this.Yt(t.element, "opacity", "1");
  }
  jt() {
    const {
      pswp: t
    } = this;
    this.Rt && this.Ht(!0), this.Vt && t.bgOpacity > .01 && this.Yt(t.bg, "opacity", "0"), this.Nt && this.Yt(t.element, "opacity", "0");
  }
  Ht(t) {
    if (!this.Et) return;
    const {
        pswp: s
      } = this,
      {
        innerRect: h
      } = this.Et,
      {
        currSlide: e,
        viewportSize: n
      } = s;
    if (this.Zt) {
      const i = -n.x + (this.Et.x - h.x) + h.w,
        s = -n.y + (this.Et.y - h.y) + h.h,
        e = n.x - h.w,
        a = n.y - h.h;
      t ? (this.Yt(this.Ut, "transform", o(i, s)), this.Yt(this.qt, "transform", o(e, a))) : (r(this.Ut, i, s), r(this.qt, e, a));
    }
    i(e.pan, h || this.Et), e.currZoomLevel = this.Et.w / e.width, t ? this.Yt(e.container, "transform", e.getCurrentTransform()) : e.applyCurrentZoomPan();
  }
  Yt(t, i, s) {
    if (!this.Lt) return void (t.style[i] = s);
    const {
        animations: h
      } = this.pswp,
      e = {
        duration: this.Lt,
        easing: this.pswp.options.easing,
        onComplete: () => {
          h.activeAnimations.length || this.Xt();
        },
        target: t
      };
    e[i] = s, h.startTransition(e);
  }
}
const J = {
  allowPanToNext: !0,
  spacing: .1,
  loop: !0,
  pinchToClose: !0,
  closeOnVerticalDrag: !0,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: !0,
  arrowKeys: !0,
  returnFocus: !0,
  maxWidthToAnimate: 4e3,
  clickToCloseNonZoomable: !0,
  imageClickAction: "zoom-or-close",
  bgClickAction: "close",
  tapAction: "toggle-controls",
  doubleTapAction: "zoom",
  indexIndicatorSep: " / ",
  preloaderDelay: 2e3,
  bgOpacity: .8,
  index: 0,
  errorMsg: "The image cannot be loaded",
  preload: [1, 2],
  easing: "cubic-bezier(.4,0,.22,1)"
};
class Q extends class extends class {
  constructor() {
    this.$t = {}, this.Jt = {}, this.pswp = void 0, this.options = void 0;
  }
  addFilter(t, i) {
    let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    this.Jt[t] || (this.Jt[t] = []), this.Jt[t].push({
      fn: i,
      priority: s
    }), this.Jt[t].sort((t, i) => t.priority - i.priority), this.pswp && this.pswp.addFilter(t, i, s);
  }
  removeFilter(t, i) {
    this.Jt[t] && (this.Jt[t] = this.Jt[t].filter(t => t.fn !== i)), this.pswp && this.pswp.removeFilter(t, i);
  }
  applyFilters(t) {
    for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      i[_key - 1] = arguments[_key];
    }
    return this.Jt[t] && this.Jt[t].forEach(t => {
      i[0] = t.fn.apply(this, i);
    }), i[0];
  }
  on(t, i) {
    this.$t[t] || (this.$t[t] = []), this.$t[t].push(i), this.pswp && this.pswp.on(t, i);
  }
  off(t, i) {
    this.$t[t] && (this.$t[t] = this.$t[t].filter(t => i !== t)), this.pswp && this.pswp.off(t, i);
  }
  dispatch(t, i) {
    if (this.pswp) return this.pswp.dispatch(t, i);
    const s = new K(t, i);
    return this.$t ? (this.$t[t] && this.$t[t].forEach(t => {
      t.call(this, s);
    }), s) : s;
  }
} {
  getNumItems() {
    let t;
    const {
      dataSource: i
    } = this.options;
    i ? "length" in i ? t = i.length : "gallery" in i && (i.items || (i.items = this.Qt(i.gallery)), i.items && (t = i.items.length)) : t = 0;
    const s = this.dispatch("numItems", {
      dataSource: i,
      numItems: t
    });
    return this.applyFilters("numItems", s.numItems, i);
  }
  createContentFromData(t, i) {
    return new j(t, this, i);
  }
  getItemData(t) {
    const {
      dataSource: i
    } = this.options;
    let s;
    Array.isArray(i) ? s = i[t] : i && i.gallery && (i.items || (i.items = this.Qt(i.gallery)), s = i.items[t]);
    let h = s;
    h instanceof Element && (h = this.ti(h));
    const e = this.dispatch("itemData", {
      itemData: h || {},
      index: t
    });
    return this.applyFilters("itemData", e.itemData, t);
  }
  Qt(t) {
    return this.options.children || this.options.childSelector ? function (t, i) {
      let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
      let h = [];
      if (t instanceof Element) h = [t];else if (t instanceof NodeList || Array.isArray(t)) h = Array.from(t);else {
        const e = "string" == typeof t ? t : i;
        e && (h = Array.from(s.querySelectorAll(e)));
      }
      return h;
    }(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  ti(t) {
    const i = {
        element: t
      },
      s = "A" === t.tagName ? t : t.querySelector("a");
    if (s) {
      i.src = s.dataset.pswpSrc || s.href, s.dataset.pswpSrcset && (i.srcset = s.dataset.pswpSrcset), i.width = parseInt(s.dataset.pswpWidth, 10), i.height = parseInt(s.dataset.pswpHeight, 10), i.w = i.width, i.h = i.height, s.dataset.pswpType && (i.type = s.dataset.pswpType);
      const h = t.querySelector("img");
      h && (i.msrc = h.currentSrc || h.src, i.alt = h.getAttribute("alt")), (s.dataset.pswpCropped || s.dataset.cropped) && (i.thumbCropped = !0);
    }
    return this.applyFilters("domItemData", i, t, s);
  }
  lazyLoadData(t, i) {
    return X(t, this, i);
  }
} {
  constructor(t) {
    super(), this.ii(t), this.offset = {}, this.si = {}, this.viewportSize = {}, this.bgOpacity = 1, this.topBar = void 0, this.events = new w(), this.animations = new k(), this.mainScroll = new D(this), this.gestures = new T(this), this.opener = new $(this), this.keyboard = new I(this), this.contentLoader = new Y(this);
  }
  init() {
    if (this.isOpen || this.isDestroying) return;
    this.isOpen = !0, this.dispatch("init"), this.dispatch("beforeOpen"), this.hi();
    let t = "pswp--open";
    return this.gestures.supportsTouch && (t += " pswp--touch"), this.options.mainClass && (t += " " + this.options.mainClass), this.element.className += " " + t, this.currIndex = this.options.index || 0, this.potentialIndex = this.currIndex, this.dispatch("firstUpdate"), this.scrollWheel = new Z(this), (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) && (this.currIndex = 0), this.gestures.supportsTouch || this.mouseDetected(), this.updateSize(), this.offset.y = window.pageYOffset, this.ei = this.getItemData(this.currIndex), this.dispatch("gettingData", {
      index: this.currIndex,
      data: this.ei,
      slide: void 0
    }), this.Ft = this.getThumbBounds(), this.dispatch("initialLayout"), this.on("openingAnimationEnd", () => {
      this.mainScroll.itemHolders[0].el.style.display = "block", this.mainScroll.itemHolders[2].el.style.display = "block", this.setContent(this.mainScroll.itemHolders[0], this.currIndex - 1), this.setContent(this.mainScroll.itemHolders[2], this.currIndex + 1), this.appendHeavy(), this.contentLoader.updateLazy(), this.events.add(window, "resize", this.ni.bind(this)), this.events.add(window, "scroll", this.oi.bind(this)), this.dispatch("bindEvents");
    }), this.setContent(this.mainScroll.itemHolders[1], this.currIndex), this.dispatch("change"), this.opener.open(), this.dispatch("afterInit"), !0;
  }
  getLoopedIndex(t) {
    const i = this.getNumItems();
    return this.options.loop && (t > i - 1 && (t -= i), t < 0 && (t += i)), t = n(t, 0, i - 1);
  }
  appendHeavy() {
    this.mainScroll.itemHolders.forEach(t => {
      t.slide && t.slide.appendHeavy();
    });
  }
  goTo(t) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(t) - this.potentialIndex);
  }
  next() {
    this.goTo(this.potentialIndex + 1);
  }
  prev() {
    this.goTo(this.potentialIndex - 1);
  }
  zoomTo() {
    this.currSlide.zoomTo(...arguments);
  }
  toggleZoom() {
    this.currSlide.toggleZoom();
  }
  close() {
    this.opener.isOpen && !this.isDestroying && (this.isDestroying = !0, this.dispatch("close"), this.events.removeAll(), this.opener.close());
  }
  destroy() {
    if (!this.isDestroying) return this.options.showHideAnimationType = "none", void this.close();
    this.dispatch("destroy"), this.listeners = null, this.scrollWrap.ontouchmove = null, this.scrollWrap.ontouchend = null, this.element.remove(), this.mainScroll.itemHolders.forEach(t => {
      t.slide && t.slide.destroy();
    }), this.contentLoader.destroy(), this.events.removeAll();
  }
  refreshSlideContent(t) {
    this.contentLoader.removeByIndex(t), this.mainScroll.itemHolders.forEach((i, s) => {
      let h = this.currSlide.index - 1 + s;
      this.canLoop() && (h = this.getLoopedIndex(h)), h === t && (this.setContent(i, t, !0), 1 === s && (this.currSlide = i.slide, i.slide.setIsActive(!0)));
    }), this.dispatch("change");
  }
  setContent(t, i, s) {
    if (this.canLoop() && (i = this.getLoopedIndex(i)), t.slide) {
      if (t.slide.index === i && !s) return;
      t.slide.destroy(), t.slide = null;
    }
    if (!this.canLoop() && (i < 0 || i >= this.getNumItems())) return;
    const h = this.getItemData(i);
    t.slide = new S(h, i, this), i === this.currIndex && (this.currSlide = t.slide), t.slide.append(t.el);
  }
  getViewportCenterPoint() {
    return {
      x: this.viewportSize.x / 2,
      y: this.viewportSize.y / 2
    };
  }
  updateSize(t) {
    if (this.isDestroying) return;
    const s = g(this.options, this);
    !t && e(s, this.si) || (i(this.si, s), this.dispatch("beforeResize"), i(this.viewportSize, this.si), this.oi(), this.dispatch("viewportSize"), this.mainScroll.resize(this.opener.isOpen), !this.hasMouse && window.matchMedia("(any-hover: hover)").matches && this.mouseDetected(), this.dispatch("resize"));
  }
  applyBgOpacity(t) {
    this.bgOpacity = Math.max(t, 0), this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
  }
  mouseDetected() {
    this.hasMouse || (this.hasMouse = !0, this.element.classList.add("pswp--has_mouse"));
  }
  ni() {
    this.updateSize(), /iPhone|iPad|iPod/i.test(window.navigator.userAgent) && setTimeout(() => {
      this.updateSize();
    }, 500);
  }
  oi() {
    this.setScrollOffset(0, window.pageYOffset);
  }
  setScrollOffset(t, i) {
    this.offset.x = t, this.offset.y = i, this.dispatch("updateScrollOffset");
  }
  hi() {
    this.element = t("pswp"), this.element.setAttribute("tabindex", "-1"), this.element.setAttribute("role", "dialog"), this.template = this.element, this.bg = t("pswp__bg", !1, this.element), this.scrollWrap = t("pswp__scroll-wrap", !1, this.element), this.container = t("pswp__container", !1, this.scrollWrap), this.mainScroll.appendHolders(), this.ui = new H(this), this.ui.init(), (this.options.appendToEl || document.body).appendChild(this.element);
  }
  getThumbBounds() {
    return function (t, i, s) {
      const h = s.dispatch("thumbBounds", {
        index: t,
        itemData: i,
        instance: s
      });
      if (h.thumbBounds) return h.thumbBounds;
      const {
        element: e
      } = i;
      let n, o;
      if (e && !1 !== s.options.thumbSelector) {
        const t = s.options.thumbSelector || "img";
        o = e.matches(t) ? e : e.querySelector(t);
      }
      return o = s.applyFilters("thumbEl", o, i, t), o && (n = i.thumbCropped ? function (t, i, s) {
        const h = t.getBoundingClientRect(),
          e = h.width / i,
          n = h.height / s,
          o = e > n ? e : n,
          r = (h.width - i * o) / 2,
          a = (h.height - s * o) / 2,
          c = {
            x: h.left + r,
            y: h.top + a,
            w: i * o
          };
        return c.innerRect = {
          w: h.width,
          h: h.height,
          x: r,
          y: a
        }, c;
      }(o, i.width || i.w, i.height || i.h) : function (t) {
        const i = t.getBoundingClientRect();
        return {
          x: i.left,
          y: i.top,
          w: i.width
        };
      }(o)), s.applyFilters("thumbBounds", n, i, t);
    }(this.currIndex, this.currSlide ? this.currSlide.data : this.ei, this);
  }
  canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }
  ii(t) {
    window.matchMedia("(prefers-reduced-motion), (update: slow)").matches && (t.showHideAnimationType = "none", t.zoomAnimationDuration = 0), this.options = {
      ...J,
      ...t
    };
  }
}


/***/ })

}]);
//# sourceMappingURL=src_modules_PhotoSwipe_photoswipe_esm_min_js.js.map