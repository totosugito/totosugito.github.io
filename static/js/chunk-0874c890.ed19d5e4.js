(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0874c890"],{"7f7f":function(e,n,r){var o=r("86cc").f,t=Function.prototype,a=/^\s*function ([^ (]*)/,s="name";s in t||r("9e1e")&&o(t,s,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},a440:function(e,n,r){"use strict";r.r(n);var o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"animated fadeIn"},[r("div",{staticClass:"error"},[e._v("\n    "+e._s(e.errorMessage)+"\n  ")]),r("qrcode-stream",{on:{init:e.onInit,decode:e.onDecode}},[null!==e.decodedContent?r("div",{staticClass:"decoded-content"},[e._v(e._s(e.decodedContent))]):e._e()])],1)},t=[],a=(r("7f7f"),r("a481"),r("cadf"),r("551c"),r("097d"),{name:"card-jukir-by-qr",data:function(){return{paused:!1,decodedContent:null,errorMessage:""}},methods:{onDecode:function(e){this.decodedContent=e,this.errorMessage=e;var n=this.decodedContent.replace("#","-");this.$router.push({path:"/info/info-jukir",query:{id:n}})},onInit:function(e){var n=this;e.then(function(){console.log("Successfully initilized! Ready for scanning now!")}).catch(function(e){"NotAllowedError"===e.name?n.errorMessage="Hey! I need access to your camera":"NotFoundError"===e.name?n.errorMessage="Do you even have a camera on your device?":"NotSupportedError"===e.name?n.errorMessage="Seems like this page is served in non-secure context (HTTPS, localhost or file://)":"NotReadableError"===e.name?n.errorMessage="Couldn't access your camera. Is it already in use?":"OverconstrainedError"===e.name?n.errorMessage="Constraints don't match any installed camera. Did you asked for the front camera although there is none?":n.errorMessage="UNKNOWN ERROR: "+e.message})}}}),s=a,c=r("2877"),i=Object(c["a"])(s,o,t,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-0874c890.ed19d5e4.js.map