(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0874c890"],{"7f7f":function(e,n,o){var r=o("86cc").f,t=Function.prototype,a=/^\s*function ([^ (]*)/,s="name";s in t||o("9e1e")&&r(t,s,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},a440:function(e,n,o){"use strict";o.r(n);var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"animated fadeIn"},[o("div",{staticClass:"error"},[e._v("\n    "+e._s(e.errorMessage)+"\n  ")]),o("qrcode-stream",{attrs:{paused:e.paused},on:{init:e.onInit,decode:e.onDecode}},[null!==e.decodedContent?o("div",{staticClass:"decoded-content"},[e._v(e._s(e.decodedContent))]):e._e()])],1)},t=[],a=(o("7f7f"),o("cadf"),o("551c"),o("097d"),{name:"card-jukir-by-qr",data:function(){return{paused:!1,decodedContent:null,errorMessage:""}},methods:{onDecode:function(e){this.decodedContent=e,this.errorMessage=e,this.$router.push({path:"info/info-jukir",query:{id:this.this.decodedContent}}),console.log("decodedString: ",e)},onInit:function(e){var n=this;e.then(function(){console.log("Successfully initilized! Ready for scanning now!")}).catch(function(e){"NotAllowedError"===e.name?n.errorMessage="Hey! I need access to your camera":"NotFoundError"===e.name?n.errorMessage="Do you even have a camera on your device?":"NotSupportedError"===e.name?n.errorMessage="Seems like this page is served in non-secure context (HTTPS, localhost or file://)":"NotReadableError"===e.name?n.errorMessage="Couldn't access your camera. Is it already in use?":"OverconstrainedError"===e.name?n.errorMessage="Constraints don't match any installed camera. Did you asked for the front camera although there is none?":n.errorMessage="UNKNOWN ERROR: "+e.message})}}}),s=a,c=o("2877"),d=Object(c["a"])(s,r,t,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0874c890.6ca805f0.js.map