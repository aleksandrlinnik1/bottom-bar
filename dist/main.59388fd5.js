parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MuPq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SPIN_DURATION=exports.SPIN_BUTTON_DISABLED_TIMEOUT=exports.COIN_VALUE=exports.COINS=void 0;var e=[.01,.02,.03,.05,.1,.2,.3,.5,.8,1,2,3,5,8,10,20,30,50,80,100,200];exports.COINS=e;var r=15;exports.COIN_VALUE=r;var I=500;exports.SPIN_BUTTON_DISABLED_TIMEOUT=I;var t=1e3;exports.SPIN_DURATION=t;
},{}],"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatMoney=exports.findEl=void 0;var e=function(e,t){return(t||document).querySelector(e)};exports.findEl=e;var t=function(e){return"¥".concat(e.toFixed(2))};exports.formatMoney=t;
},{}],"mXH3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initBets=r;var n,t,e,i,o=require("./constants"),c=require("./utils"),s=3;function r(){u(),l(),d()}function l(){var n=o.COINS[s],t=n*o.COIN_VALUE;e.innerText=(0,c.formatMoney)(t),i.innerText=(0,c.formatMoney)(n)}function u(){n=(0,c.findEl)(".btn-plus"),t=(0,c.findEl)(".btn-minus"),e=(0,c.findEl)(".total-counter .coincounter"),i=(0,c.findEl)(".coin .coincounter")}function d(){n.addEventListener("click",f),t.addEventListener("click",a)}function f(){s!==o.COINS.length-1&&(++s,l(),E())}function a(){s&&(--s,l(),E())}function E(){n.classList.toggle("disabled",s===o.COINS.length-1),t.classList.toggle("disabled",0===s)}
},{"./constants":"MuPq","./utils":"MgTz"}],"vdmJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSounds=i;var e=require("./utils"),t=(0,e.findEl)(".wrapper"),n=(0,e.findEl)("#btn-sound");function i(){t.addEventListener("click",s,!0)}function s(e){var t=e.target.classList;t.contains("btn")&&!t.contains("disabled")&&(n.pause(),n.currentTime=0,n.play())}
},{"./utils":"MgTz"}],"k6eF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initInfo=i;var e=require("./utils"),t=(0,e.findEl)(".btn-info");function i(){t.addEventListener("click",n,!0)}function n(){alert("info")}
},{"./utils":"MgTz"}],"jjXr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initTurbo=n;var e=require("./utils"),t=(0,e.findEl)(".turbo"),i=(0,e.findEl)(".checkbox",t);function n(){i.addEventListener("click",o)}function o(){t.classList.toggle("on")}
},{"./utils":"MgTz"}],"zrxi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSpin=r;var e,t=require("./utils"),i=require("./constants"),n=(0,t.findEl)(".spin");function r(){n.addEventListener("click",s)}function s(){var t=n.classList;if(t.contains("stop"))return t.remove("stop"),void clearTimeout(e);t.add("disabled"),t.add("stop"),setTimeout(function(){return t.remove("disabled")},i.SPIN_BUTTON_DISABLED_TIMEOUT),e=setTimeout(function(){return t.remove("stop")},i.SPIN_DURATION)}
},{"./utils":"MgTz","./constants":"MuPq"}],"jti5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initAutospin=e;var t=require("./utils"),s=(0,t.findEl)(".autospin"),i=(0,t.findEl)(".btn-auto",s);function e(){s.addEventListener("click",n)}function n(t){var e=t.target.classList;return e.contains("autospin-option")?(s.classList.add("enabled"),void i.classList.add("stop")):e.contains("stop")?(s.classList.remove("enabled"),void i.classList.remove("stop")):void 0}
},{"./utils":"MgTz"}],"d6sW":[function(require,module,exports) {
"use strict";var i=require("./bet"),r=require("./sounds"),e=require("./info"),n=require("./turbo"),t=require("./spin"),u=require("./autospin");(0,r.initSounds)(),(0,i.initBets)(),(0,e.initInfo)(),(0,n.initTurbo)(),(0,t.initSpin)(),(0,u.initAutospin)();
},{"./bet":"mXH3","./sounds":"vdmJ","./info":"k6eF","./turbo":"jjXr","./spin":"zrxi","./autospin":"jti5"}]},{},["d6sW"], null)
//# sourceMappingURL=main.59388fd5.js.map