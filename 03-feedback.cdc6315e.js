!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u=o("hKHmD"),i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return c.default(e)||s.default(e)||p.default(e)||d.default()};var c=v(o("kMC0W")),s=v(o("7AJDX")),d=v(o("8CtQK")),p=v(o("auk6i"));function v(e){return e&&e.__esModule?e:{default:e}}var y,b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var m="Expected a function",g=NaN,O="[object Symbol]",_=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,x=/^0o[0-7]+$/i,M=parseInt,w="object"==typeof t&&t&&t.Object===Object&&t,P="object"==typeof self&&self&&self.Object===Object&&self,S=w||P||Function("return this")(),A=Object.prototype.toString,T=Math.max,k=Math.min,D=function(){return S.Date.now()};function E(e,t,r){var n,o,u,i,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(m);function p(t){var r=n,u=o;return n=o=void 0,l=t,i=e.apply(u,r)}function v(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=u}function y(){var e=D();if(v(e))return b(e);a=setTimeout(y,function(e){var r=t-(e-f);return s?k(r,u-(e-l)):r}(e))}function b(e){return a=void 0,d&&n?p(e):(n=o=void 0,i)}function g(){var e=D(),r=v(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(y,t),c?p(e):i}(f);if(s)return a=setTimeout(y,t),p(f)}return void 0===a&&(a=setTimeout(y,t)),i}return t=N(t)||0,I(r)&&(c=!!r.leading,u=(s="maxWait"in r)?T(N(r.maxWait)||0,t):u,d="trailing"in r?!!r.trailing:d),g.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},g.flush=function(){return void 0===a?i:b(D())},g}function I(t){var r=void 0===t?"undefined":e(b)(t);return!!t&&("object"==r||"function"==r)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(b)(t))||function(e){return!!e&&"object"==typeof e}(t)&&A.call(t)==O}(t))return g;if(I(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=I(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_,"");var n=h.test(t);return n||x.test(t)?M(t.slice(2),n?2:8):j.test(t)?g:+t}y=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(m);return I(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),E(e,t,{leading:n,maxWait:t,trailing:o})};var C,K,W="feedback-form-state",$=document.querySelector(".feedback-form"),J=function(){var t=(r=$,e(l)(r.elements).filter((function(e){return e.hasAttribute("name")})).reduce((function(t,r){return e(i)({},t,e(u)({},r.getAttribute("name"),""))}),{}));var r;try{return JSON.parse(localStorage.getItem(W))||t}catch(e){return t}}();$.addEventListener("input",e(y)((function(e){J[e.target.name]=e.target.value,t=J,localStorage.setItem(W,JSON.stringify(t));var t}),500)),$.addEventListener("submit",(function(e){return e.preventDefault()})),C=$,K=J,e(l)(C.elements).forEach((function(e){return e.value=K[e.name]}))}();
//# sourceMappingURL=03-feedback.cdc6315e.js.map
