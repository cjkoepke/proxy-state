parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fUdq":[function(require,module,exports) {
"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(n[u]=t[u]);return n}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){void 0===t&&(t={});var r=[],e={fetch:function(n){return r.find(function(t){return n===t.key})},listen:function(n,t){return r.find(function(t){return n===t.key})||r.push({key:n,callbacks:[t]}),r},detach:function(n){var t=r.findIndex(function(t){return n===t.key});return-1<t&&r.splice(t,1),r}},u=new Proxy(t,{get:function(n,t){return"all"===t?n:n[t]},set:function(t,r,u){if(u===t[r])return!0;var i=n({},t);t[r]=u;var c=e.fetch(r);return c&&c.callbacks.forEach(function(n){return n(t,i)}),!0}});return n({state:u},e)};exports.default=t;
},{}],"lgAh":[function(require,module,exports) {
"use strict";var n=t(require("../src/index"));function t(n){return n&&n.__esModule?n:{default:n}}var u=(0,n.default)({count:0}),e=u.state,o=u.listen,c=u.detach,r=document.querySelector("#count");r.innerHTML=e.count,window.add=function(){return e.count++},window.sub=function(){return e.count--},window.listen=function(){r.innerHTML=e.count;o("count",function(n){return r.innerHTML=n.count})},window.detach=function(){c("count")};
},{"../src/index":"fUdq"}]},{},["lgAh"], null)
//# sourceMappingURL=/demo.17689f64.js.map