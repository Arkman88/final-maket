!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);console.log("Works!");var n=document.querySelector(".remontBrands"),o=document.querySelector(".remontTechno");n.querySelector(".button-show-more").onclick=function(){var e=n.querySelector(".swiper-wrapper"),t=n.querySelector(".button-show-more");"visible"!==e.style.overflow?(e.style.overflow="visible",e.style.height="auto",t.innerHTML="Скрыть",t.style.background="url(<%= imgPath %>expand_alt.svg) no-repeat"):(e.style.overflow="hidden",e.style.height="173px",t.innerHTML="Показать всё",t.style.background="url(<%= imgPath %>expand.svg) no-repeat")},o.querySelector(".button-show-more").onclick=function(){var e=o.querySelector(".swiper-wrapper"),t=o.querySelector(".button-show-more");"visible"!==e.style.overflow?(e.style.overflow="visible",e.style.height="auto",t.innerHTML="Скрыть",t.style.background="url(<%= imgPath %>expand_alt.svg) no-repeat"):(e.style.overflow="hidden",e.style.height="173px",t.innerHTML="Показать всё",t.style.background="url(<%= imgPath %>expand.svg) no-repeat")},window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,r,n){var o,i=n.querySelector(".button-show-more");e=window.matchMedia(e);var l=function(){return e.matches?(i.innerHTML="Показать всё",void(o=new Swiper(t,r))):void(void 0!==o&&o.destroy(!0,!0))};e.addEventListener("change",l),l()};e("(max-width: 768px)",".swiper-techno",{spaceBetween:20,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}},o),e("(max-width: 768px)",".swiper-brands",{spaceBetween:20,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}},n)}))},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map