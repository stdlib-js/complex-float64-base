// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,u=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):u.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,a,o,l,u,s,p,f,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+v(h):v(h)+f)),l+=n.arg||"",u+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var A=Object.prototype,O=A.toString,$=A.__defineGetter__,C=A.__defineSetter__,I=A.__lookupGetter__,P=A.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(I.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function N(e,r,t){R(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,q=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,U="function"==typeof B?B.toStringTag:"",X=W()?function(e){var r,t,n,i,a;if(null==e)return M.call(e);t=e[U],a=U,r=null!=(i=e)&&q.call(i,a);try{e[U]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[U]=t:delete e[U],n}:function(e){return M.call(e)},Y=Number,z=Y.prototype.toString,J=W();function D(e){return"object"==typeof e&&(e instanceof Y||(J?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return Z(e)||D(e)}function K(e,r){if(!(this instanceof K))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Z(e))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Z(r))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function Q(e){return e.re}function ee(e){return e.im}L(H,"isPrimitive",Z),L(H,"isObject",D),L(K,"BYTES_PER_ELEMENT",8),L(K.prototype,"BYTES_PER_ELEMENT",8),L(K.prototype,"byteLength",16),L(K.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),L(K.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var re="function"==typeof Float64Array,te="function"==typeof Float64Array?Float64Array:null,ne="function"==typeof Float64Array?Float64Array:void 0,ie=function(){var e,r,t;if("function"!=typeof te)return!1;try{r=new te([1,3.14,-3.14,NaN]),t=r,e=(re&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ne:function(){throw new Error("not implemented")};function ae(e){var r=new ie(2);return r[0]=e.re,r[1]=e.im,r}function oe(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function ce(e,r){return e===r||e!=e&&r!=r}var le={};N(le,"isEqual",(function(e,r){var t=ae(e),n=ae(r);return t[0]===n[0]&&t[1]===n[1]})),N(le,"isNotEqual",(function(e,r){var t=ae(e),n=ae(r);return t[0]!==n[0]||t[1]!==n[1]})),N(le,"isSameValue",(function(e,r){var t=ae(e),n=ae(r);return oe(t[0],n[0])&&oe(t[1],n[1])})),N(le,"isSameValueZero",(function(e,r){var t=ae(e),n=ae(r);return ce(t[0],n[0])&&ce(t[1],n[1])}));var ue={};return N(ue,"add",(function(e,r){return new K(Q(e)+Q(r),ee(e)+ee(r))})),N(ue,"assert",le),N(ue,"mul",(function(e,r){var t=Q(e),n=Q(r),i=ee(e),a=ee(r);return new K(t*n-i*a,t*a+i*n)})),ue},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).complex=r();
//# sourceMappingURL=browser.js.map
