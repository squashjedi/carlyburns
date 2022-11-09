/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/PhotoSwipe/photoswipe-lightbox.esm.min.js":
/*!***************************************************************!*\
  !*** ./src/modules/PhotoSwipe/photoswipe-lightbox.esm.min.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ m; }
/* harmony export */ });
/*!
  * PhotoSwipe Lightbox 5.3.3 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */
function t(t, i, s) {
  const h = document.createElement(i || "div");
  return t && (h.className = t), s && s.appendChild(h), h;
}
function i(t, i, s) {
  t.style.width = "number" == typeof i ? i + "px" : i, t.style.height = "number" == typeof s ? s + "px" : s;
}
const s = "idle",
  h = "loading",
  e = "loaded",
  n = "error";
function o(t, i) {
  let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  let h = [];
  if (t instanceof Element) h = [t];else if (t instanceof NodeList || Array.isArray(t)) h = Array.from(t);else {
    const e = "string" == typeof t ? t : i;
    e && (h = Array.from(s.querySelectorAll(e)));
  }
  return h;
}
function r() {
  return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
}
class a {
  constructor(t, i) {
    this.type = t, i && Object.assign(this, i);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class c {
  constructor(i, s) {
    this.element = t("pswp__img pswp__img--placeholder", i ? "img" : "", s), i && (this.element.decoding = "async", this.element.alt = "", this.element.src = i, this.element.setAttribute("role", "presentation")), this.element.setAttribute("aria-hidden", "true");
  }
  setDisplayedSize(t, s) {
    this.element && ("IMG" === this.element.tagName ? (i(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = function (t, i, s) {
      let h = "translate3d(" + t + "px," + (i || 0) + "px,0)";
      return void 0 !== s && (h += " scale3d(" + s + "," + s + ",1)"), h;
    }(0, 0, t / 250)) : i(this.element, t, s));
  }
  destroy() {
    this.element.parentNode && this.element.remove(), this.element = null;
  }
}
class l {
  constructor(t, i, h) {
    this.instance = i, this.data = t, this.index = h, this.element = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.state = s, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
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
      this.placeholder = new c(t, this.slide.container);
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
    }).defaultPrevented || (this.updateSrcsetSizes(), this.data.srcset && (i.srcset = this.data.srcset), i.src = this.data.src, i.alt = this.data.alt || "", this.state = h, i.complete ? this.onLoaded() : (i.onload = () => {
      this.onLoaded();
    }, i.onerror = () => {
      this.onError();
    }));
  }
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  onLoaded() {
    this.state = e, this.slide && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), this.state !== e && this.state !== n || this.removePlaceholder());
  }
  onError() {
    this.state = n, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === h, this);
  }
  isError() {
    return this.state === n;
  }
  isImageContent() {
    return "image" === this.type;
  }
  setDisplayedSize(t, s) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, s), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: s
    }).defaultPrevented && (i(this.element, t, s), this.isImageContent() && !this.isError()))) {
      const i = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = s, i ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: s,
        content: this
      });
    }
  }
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== n, this);
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
    if (this.isAttached = !0, this.state === n) return void this.displayError();
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented) return;
    const t = ("decode" in this.element);
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || r()) ? (this.isDecoding = !0, this.element.decode().catch(() => {}).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.element && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || this.slide && (this.isImageContent() && this.isDecoding && !r() ? this.appendImage() : this.isError() && this.load(!1, !0));
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
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), this.state !== e && this.state !== n || this.removePlaceholder()));
  }
}
function u(t, i, s, h, e) {
  let n;
  if (i.paddingFn) n = i.paddingFn(s, h, e)[t];else if (i.padding) n = i.padding[t];else {
    const s = "padding" + t[0].toUpperCase() + t.slice(1);
    i[s] && (n = i[s]);
  }
  return n || 0;
}
class d {
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
    this.fit = Math.min(1, h < e ? h : e), this.fill = Math.min(1, h > e ? h : e), this.vFill = Math.min(1, e), this.initial = this.t(), this.secondary = this.i(), this.max = Math.max(this.initial, this.secondary, this.o()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  l(t) {
    const i = t + "ZoomLevel",
      s = this.options[i];
    if (s) return "function" == typeof s ? s(this) : "fill" === s ? this.fill : "fit" === s ? this.fit : Number(s);
  }
  i() {
    let t = this.l("secondary");
    return t || (t = Math.min(1, 3 * this.fit), t * this.elementSize.x > 4e3 && (t = 4e3 / this.elementSize.x), t);
  }
  t() {
    return this.l("initial") || this.fit;
  }
  o() {
    const t = this.l("max");
    return t || Math.max(1, 4 * this.fit);
  }
}
function p(t, i, s) {
  const h = i.createContentFromData(t, s);
  if (!h || !h.lazyLoad) return;
  const {
      options: e
    } = i,
    n = i.viewportSize || function (t, i) {
      if (t.getViewportSizeFn) {
        const s = t.getViewportSizeFn(t, i);
        if (s) return s;
      }
      return {
        x: document.documentElement.clientWidth,
        y: window.innerHeight
      };
    }(e, i),
    o = function (t, i, s, h) {
      return {
        x: i.x - u("left", t, i, s, h) - u("right", t, i, s, h),
        y: i.y - u("top", t, i, s, h) - u("bottom", t, i, s, h)
      };
    }(e, n, t, s),
    r = new d(e, t, -1);
  return r.update(h.width, h.height, o), h.lazyLoad(), h.setDisplayedSize(Math.ceil(h.width * r.initial), Math.ceil(h.height * r.initial)), h;
}
class m extends class extends class {
  constructor() {
    this.u = {}, this.p = {}, this.pswp = void 0, this.options = void 0;
  }
  addFilter(t, i) {
    let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    this.p[t] || (this.p[t] = []), this.p[t].push({
      fn: i,
      priority: s
    }), this.p[t].sort((t, i) => t.priority - i.priority), this.pswp && this.pswp.addFilter(t, i, s);
  }
  removeFilter(t, i) {
    this.p[t] && (this.p[t] = this.p[t].filter(t => t.fn !== i)), this.pswp && this.pswp.removeFilter(t, i);
  }
  applyFilters(t) {
    for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      i[_key - 1] = arguments[_key];
    }
    return this.p[t] && this.p[t].forEach(t => {
      i[0] = t.fn.apply(this, i);
    }), i[0];
  }
  on(t, i) {
    this.u[t] || (this.u[t] = []), this.u[t].push(i), this.pswp && this.pswp.on(t, i);
  }
  off(t, i) {
    this.u[t] && (this.u[t] = this.u[t].filter(t => i !== t)), this.pswp && this.pswp.off(t, i);
  }
  dispatch(t, i) {
    if (this.pswp) return this.pswp.dispatch(t, i);
    const s = new a(t, i);
    return this.u ? (this.u[t] && this.u[t].forEach(t => {
      t.call(this, s);
    }), s) : s;
  }
} {
  getNumItems() {
    let t;
    const {
      dataSource: i
    } = this.options;
    i ? "length" in i ? t = i.length : "gallery" in i && (i.items || (i.items = this.m(i.gallery)), i.items && (t = i.items.length)) : t = 0;
    const s = this.dispatch("numItems", {
      dataSource: i,
      numItems: t
    });
    return this.applyFilters("numItems", s.numItems, i);
  }
  createContentFromData(t, i) {
    return new l(t, this, i);
  }
  getItemData(t) {
    const {
      dataSource: i
    } = this.options;
    let s;
    Array.isArray(i) ? s = i[t] : i && i.gallery && (i.items || (i.items = this.m(i.gallery)), s = i.items[t]);
    let h = s;
    h instanceof Element && (h = this.g(h));
    const e = this.dispatch("itemData", {
      itemData: h || {},
      index: t
    });
    return this.applyFilters("itemData", e.itemData, t);
  }
  m(t) {
    return this.options.children || this.options.childSelector ? o(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  g(t) {
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
    return p(t, this, i);
  }
} {
  constructor(t) {
    super(), this.options = t || {}, this.v = 0;
  }
  init() {
    this.onThumbnailsClick = this.onThumbnailsClick.bind(this), o(this.options.gallery, this.options.gallerySelector).forEach(t => {
      t.addEventListener("click", this.onThumbnailsClick, !1);
    });
  }
  onThumbnailsClick(t) {
    if (function (t) {
      if (2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey) return !0;
    }(t) || window.pswp || !1 === window.navigator.onLine) return;
    let i = {
      x: t.clientX,
      y: t.clientY
    };
    i.x || i.y || (i = null);
    let s = this.getClickedIndex(t);
    s = this.applyFilters("clickedIndex", s, t, this);
    const h = {
      gallery: t.currentTarget
    };
    s >= 0 && (t.preventDefault(), this.loadAndOpen(s, h, i));
  }
  getClickedIndex(t) {
    if (this.options.getClickedIndexFn) return this.options.getClickedIndexFn.call(this, t);
    const i = t.target,
      s = o(this.options.children, this.options.childSelector, t.currentTarget).findIndex(t => t === i || t.contains(i));
    return -1 !== s ? s : this.options.children || this.options.childSelector ? -1 : 0;
  }
  loadAndOpen(t, i, s) {
    return !window.pswp && (this.options.index = t, this.options.initialPointerPos = s, this.shouldOpen = !0, this.preload(t, i), !0);
  }
  preload(t, i) {
    const {
      options: s
    } = this;
    i && (s.dataSource = i);
    const h = [],
      e = typeof s.pswpModule;
    if ("function" == typeof (n = s.pswpModule) && n.prototype && n.prototype.goTo) h.push(Promise.resolve(s.pswpModule));else {
      if ("string" === e) throw new Error("pswpModule as string is no longer supported");
      if ("function" !== e) throw new Error("pswpModule is not valid");
      h.push(s.pswpModule());
    }
    var n;
    "function" == typeof s.openPromise && h.push(s.openPromise()), !1 !== s.preloadFirstSlide && t >= 0 && (this._ = function (t, i) {
      const s = i.getItemData(t);
      if (!i.dispatch("lazyLoadSlide", {
        index: t,
        itemData: s
      }).defaultPrevented) return p(s, i, t);
    }(t, this));
    const o = ++this.v;
    Promise.all(h).then(t => {
      if (this.shouldOpen) {
        const i = t[0];
        this.I(i, o);
      }
    });
  }
  I(t, i) {
    if (i !== this.v && this.shouldOpen) return;
    if (this.shouldOpen = !1, window.pswp) return;
    const s = "object" == typeof t ? new t.default(this.options) : new t(this.options);
    this.pswp = s, window.pswp = s, Object.keys(this.u).forEach(t => {
      this.u[t].forEach(i => {
        s.on(t, i);
      });
    }), Object.keys(this.p).forEach(t => {
      this.p[t].forEach(i => {
        s.addFilter(t, i.fn, i.priority);
      });
    }), this._ && (s.contentLoader.addToCache(this._), this._ = null), s.on("destroy", () => {
      this.pswp = null, window.pswp = null;
    }), s.init();
  }
  destroy() {
    this.pswp && this.pswp.destroy(), this.shouldOpen = !1, this.u = null, o(this.options.gallery, this.options.gallerySelector).forEach(t => {
      t.removeEventListener("click", this.onThumbnailsClick, !1);
    });
  }
}


/***/ }),

/***/ "./src/modules/ToggleResponsiveMenu.js":
/*!*********************************************!*\
  !*** ./src/modules/ToggleResponsiveMenu.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToggleResponsiveMenu; }
/* harmony export */ });
function ToggleResponsiveMenu() {
  let isOpen = false;
  const menu = document.querySelector("#menu");
  const toggleMenuButton = document.querySelector("#toggle-menu-button");
  const buttonClose = toggleMenuButton.firstElementChild;
  const buttonOpen = toggleMenuButton.lastElementChild;
  const responsiveMenu = document.querySelector("#responsive-menu");
  const toggleMenu = () => {
    isOpen = !isOpen;
    isOpen ? openMenu() : closeMenu();
  };
  const openMenu = () => {
    responsiveMenu.classList.add("grow");
    responsiveMenu.classList.remove("hidden");
    buttonOpen.className = "hidden";
    buttonClose.className = "block";
  };
  const closeMenu = () => {
    responsiveMenu.classList.remove("grow");
    responsiveMenu.classList.add("hidden");
    buttonOpen.className = "block";
    buttonClose.className = "hidden";
  };
  document.querySelector("#toggle-menu-button").addEventListener("click", toggleMenu);
  menu.addEventListener("click", e => {
    if (e.target.tagName !== 'A') return;
    isOpen = false;
    closeMenu();
    const element = document.querySelector(e.target.id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "carlyburns:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcarlyburns"] = self["webpackChunkcarlyburns"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToggleResponsiveMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ToggleResponsiveMenu */ "./src/modules/ToggleResponsiveMenu.js");
/* harmony import */ var _modules_PhotoSwipe_photoswipe_lightbox_esm_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/PhotoSwipe/photoswipe-lightbox.esm.min.js */ "./src/modules/PhotoSwipe/photoswipe-lightbox.esm.min.js");
// Our modules / classes

(0,_modules_ToggleResponsiveMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();

const lightbox = new _modules_PhotoSwipe_photoswipe_lightbox_esm_min_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => __webpack_require__.e(/*! import() */ "src_modules_PhotoSwipe_photoswipe_esm_min_js").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/PhotoSwipe/photoswipe.esm.min.js */ "./src/modules/PhotoSwipe/photoswipe.esm.min.js"))
});
lightbox.init();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map