!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cacheManage",[],t):"object"==typeof exports?exports.cacheManage=t():e.cacheManage=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var o,n;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(n="function"==typeof(o=i)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var o in r)t[o]=r[o]}return t}return function t(r){function o(t,n,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},o.defaults,i)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*i.expires),i.expires=c}i.expires=i.expires?i.expires.toUTCString():"";try{a=JSON.stringify(n),/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var u in i)i[u]&&(s+="; "+u,!0!==i[u]&&(s+="="+i[u]));return document.cookie=t+"="+n+s}t||(a={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),h=p.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var m=p[0].replace(f,decodeURIComponent);if(h=r.read?r.read(h,m):r(h,m)||h.replace(f,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){a=h;break}t||(a[m]=h)}catch(e){}}return a}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(t,r){o(t,"",e(r,{expires:-1}))},o.withConverter=t,o}(function(){})})},function(e,t,r){"use strict";r.r(t);class o{constructor(){this._data={}}getItem(e){return this._data[e]||""}setItem(e,t){return this._data[e]=t}removeItem(e){this._data[e]&&delete this._data[e]}clear(){this._data={}}}var n=r(0),i=r.n(n);class a{constructor(e){this._option=e||void 0}getItem(e){return i.a.get(e)||""}setItem(e,t){return i.a.set(e,t,this._option)}removeItem(e){i.a.remove(e,this._option)}clear(){throw new Error("cookie not support the method")}}r.d(t,"default",function(){return c}),r.d(t,"MemoryStorage",function(){return o}),r.d(t,"CookieStorage",function(){return a});class c{constructor(e,t){this.key=e,this.CacheClass=t||window.localStorage}get(){let e=this.CacheClass.getItem(this.key)||"";return/^\{.*\}$/.test(e)&&(e=JSON.parse(e)),e}set(e){typeof e==typeof{}&&(e=JSON.stringify(e)),this.CacheClass.setItem&&this.CacheClass.setItem(this.key,e)}remove(){this.CacheClass.removeItem&&this.CacheClass.removeItem(this.key)}clear(){this.CacheClass.clear&&this.CacheClass.clear()}}}])});