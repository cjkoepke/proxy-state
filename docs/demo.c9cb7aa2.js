parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S3PC":[function(require,module,exports) {
"use strict";function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){t(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],o={fetch:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.filter(function(r){return[e].concat(t).includes(r.key)})},listen:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",o=n.find(function(e){return r===e.key});o||n.push({key:r,subscriber:e}),o&&t&&(console.warn("There is already a listener active for the `".concat(r,"` prop!")),console.log(o))},detach:function(e){var r=n.findIndex(function(r){return e===r.key});return-1<r&&n.splice(r,1),n}},c=new Proxy(e,{set:function(e,t,n){if(n===e[t])return!0;var c=r({},e);e[t]=n;var i=o.fetch(t,"all");return i&&i.forEach(function(r){return(0,r.subscriber)(e,c)}),!0}});return r({state:c},o)};exports.default=n;
},{}],"lgAh":[function(require,module,exports) {
"use strict";var n=t(require("../index"));function t(n){return n&&n.__esModule?n:{default:n}}var i=(0,n.default)({count:5},!0),e=i.state,r=i.listen,u=i.detach,o=document.querySelector("#count");o.innerHTML=JSON.stringify({count:0});var c=document.querySelector("#state");c.innerHTML=JSON.stringify(e),r(function(n){return c.innerHTML=JSON.stringify(n)}),window.add=function(){return e.count++},window.sub=function(){return e.count--},window.reset=function(){e.count=5,o.innerHTML=JSON.stringify({count:0}),u("count")},window.listen=function(){o.innerHTML=JSON.stringify(e),r(function(n){return o.innerHTML=JSON.stringify(n)},"count")},window.detach=function(){u("count")};
},{"../index":"S3PC"}]},{},["lgAh"], null)
//# sourceMappingURL=/demo.c9cb7aa2.js.map