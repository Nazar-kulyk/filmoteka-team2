!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a("6f6o8"),a("e3SQQ");var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return u.default(e)||i.default(e)||s.default(e)||l.default()};var u=d(a("kMC0W")),i=d(a("7AJDX")),l=d(a("8CtQK")),s=d(a("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var c=a("4Nugj"),f=a("fYmpR");(p=a("gYn5q")).default.showQueue(),c.refs.cardSetEl.addEventListener("click",(function(t){if(t.preventDefault(),"A"!==t.target.nodeName)return;var r=e(o)(JSON.parse(localStorage.getItem("WATCHED_MOVIES"))).concat(e(o)(JSON.parse(localStorage.getItem("QUEUE_MOVIES"))));(0,f.openModal)(r,t.target.dataset.id)})),a("gYn5q");var p=a("gYn5q"),v=document.querySelector(".tab__desk-btn"),b=document.querySelector(".btn-library"),g=document.querySelector(".search-form");function y(e){e.preventDefault(),p.default.showAll(e.currentTarget.name.value),"submit"===e.type&&(e.target.reset(),p.default.filmName="")}function m(e){g.reset(),p.default.filmName="";var t=e.currentTarget.querySelector(".btn-top--active"),r=e.target.classList;if(r.contains("btn-top-queue")||r.contains("btn__queue-bot"))return p.default.showQueue(),null==t||t.classList.remove("btn-top--active"),void e.target.classList.add("btn-top--active");(r.contains("btn-top-watched")||r.contains("btn__watched-bot"))&&(p.default.showWatched(),null==t||t.classList.remove("btn-top--active"),e.target.classList.add("btn-top--active"))}v.addEventListener("click",m),b.addEventListener("click",m),g.addEventListener("submit",y),g.addEventListener("input",y),a("9VC5X"),a("fYmpR"),a("kyBSd")}();
//# sourceMappingURL=library.29784c3f.js.map