parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S3PC":[function(require,module,exports) {
"use strict";function e(e){return n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function t(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function n(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach(function(r){i(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],o={fetch:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.filter(function(e){return[e.key].concat(t).includes(e.key)})},listen:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",o=n.find(function(e){return r===e.key});o||n.push({key:r,subscriber:e}),o&&t&&(console.warn("There is already a listener active for the `".concat(r,"` prop!")),console.log(o))},detach:function(e){var r=n.findIndex(function(r){return e===r.key});return-1<r&&n.splice(r,1),n}},i=new Proxy(r,{set:function(r,t,n){if(n===r[t])return!0;var i=c({},r);r[t]=n;var u=[].concat(e(o.fetch(t)),e(o.fetch("all")));return u&&u.forEach(function(e){return(0,e.subscriber)(r,i)}),!0}});return c({state:i},o)};exports.default=u;
},{}],"lgAh":[function(require,module,exports) {
"use strict";var n=t(require("../index"));function t(n){return n&&n.__esModule?n:{default:n}}var i=(0,n.default)({count:5},!0),e=i.state,r=i.listen,u=i.detach,o=document.querySelector("#count");o.innerHTML=JSON.stringify({count:0});var c=document.querySelector("#state");c.innerHTML=JSON.stringify(e),r(function(n){return c.innerHTML=JSON.stringify(n)}),window.add=function(){return e.count++},window.sub=function(){return e.count--},window.reset=function(){e.count=5,o.innerHTML=JSON.stringify({count:0}),u("count")},window.listen=function(){o.innerHTML=JSON.stringify(e),r(function(n){return o.innerHTML=JSON.stringify(n)},"count")},window.detach=function(){u("count")};
},{"../index":"S3PC"}]},{},["lgAh"], null)
//# sourceMappingURL=/demo.4810aacf.js.map