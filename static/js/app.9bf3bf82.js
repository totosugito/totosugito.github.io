(function(n){function e(e){for(var c,u,o=e[0],d=e[1],h=e[2],i=0,f=[];i<o.length;i++)u=o[i],r[u]&&f.push(r[u][0]),r[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},u={app:0},r={app:0},a=[];function o(n){return d.p+"static/js/"+({}[n]||n)+"."+{"chunk-22faa80c":"7c546031","chunk-2d0a400c":"0441e747","chunk-2d0a443e":"bb573309","chunk-2d0ab2eb":"19e1dcaf","chunk-2d0ae5e6":"b1658a3b","chunk-2d0ae943":"c6aaeb5c","chunk-2d0b1bf6":"5df213a1","chunk-2d0b59e9":"9ac5d70c","chunk-2d0ba708":"fb45f3dd","chunk-2d0aab88":"988607a3","chunk-2d0c4303":"70f1488b","chunk-2d0d3e27":"a9949c6f","chunk-2d0de2d9":"74c129ea","chunk-2d0de6aa":"43677167","chunk-2d0e1d93":"2133217d","chunk-2d0e8c24":"8bb8babe","chunk-2d0f06bd":"a5b4f67c","chunk-2d208124":"c490ebe7","chunk-2d2131a8":"fa7ee5a0","chunk-2d21444c":"273de188","chunk-2d2183eb":"53b69937","chunk-2d21e6d0":"c4eee204","chunk-2d21eae7":"fa42ab07","chunk-2d222779":"822fef00","chunk-2d224eb7":"ee93674c","chunk-2d226319":"cd7a81a1","chunk-2d22c303":"d6f66206","chunk-2d22d610":"85e57aed","chunk-2d23777b":"482f8e47","chunk-40f4cc33":"f8e310ab","chunk-2d0f0c1b":"53e002a7","chunk-a9adb17c":"ffacd650","chunk-59bd7c2f":"47c04cd4","chunk-746fa602":"c6e29054","chunk-7b0cf0c0":"ec477efb","chunk-86116004":"4b199988","chunk-8efa499c":"f981ea3d","chunk-9745c10e":"e5fd96d8","chunk-2d0d093a":"e64c7745","chunk-05dc8002":"ec381a08","chunk-c7051a8e":"ff536c4a","chunk-bbb78ca0":"cab4ea21","chunk-e3e0ee12":"aa130495","chunk-e7673e16":"4e3bf6cd"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-22faa80c":1,"chunk-59bd7c2f":1,"chunk-8efa499c":1,"chunk-05dc8002":1,"chunk-bbb78ca0":1,"chunk-e3e0ee12":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="static/css/"+({}[n]||n)+"."+{"chunk-22faa80c":"28a1c86e","chunk-2d0a400c":"31d6cfe0","chunk-2d0a443e":"31d6cfe0","chunk-2d0ab2eb":"31d6cfe0","chunk-2d0ae5e6":"31d6cfe0","chunk-2d0ae943":"31d6cfe0","chunk-2d0b1bf6":"31d6cfe0","chunk-2d0b59e9":"31d6cfe0","chunk-2d0ba708":"31d6cfe0","chunk-2d0aab88":"31d6cfe0","chunk-2d0c4303":"31d6cfe0","chunk-2d0d3e27":"31d6cfe0","chunk-2d0de2d9":"31d6cfe0","chunk-2d0de6aa":"31d6cfe0","chunk-2d0e1d93":"31d6cfe0","chunk-2d0e8c24":"31d6cfe0","chunk-2d0f06bd":"31d6cfe0","chunk-2d208124":"31d6cfe0","chunk-2d2131a8":"31d6cfe0","chunk-2d21444c":"31d6cfe0","chunk-2d2183eb":"31d6cfe0","chunk-2d21e6d0":"31d6cfe0","chunk-2d21eae7":"31d6cfe0","chunk-2d222779":"31d6cfe0","chunk-2d224eb7":"31d6cfe0","chunk-2d226319":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-2d22d610":"31d6cfe0","chunk-2d23777b":"31d6cfe0","chunk-40f4cc33":"31d6cfe0","chunk-2d0f0c1b":"31d6cfe0","chunk-a9adb17c":"31d6cfe0","chunk-59bd7c2f":"755beef8","chunk-746fa602":"31d6cfe0","chunk-7b0cf0c0":"31d6cfe0","chunk-86116004":"31d6cfe0","chunk-8efa499c":"603305bb","chunk-9745c10e":"31d6cfe0","chunk-2d0d093a":"31d6cfe0","chunk-05dc8002":"86b9ce82","chunk-c7051a8e":"31d6cfe0","chunk-bbb78ca0":"f9208b90","chunk-e3e0ee12":"3e45d735","chunk-e7673e16":"31d6cfe0"}[n]+".css",r=d.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===r))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],i=h.getAttribute("data-href");if(i===c||i===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.request=c,delete u[n],l.parentNode.removeChild(l),t(a)},l.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(l)}).then(function(){u[n]=0}));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise(function(e,t){c=r[n]=[e,t]});e.push(c[2]=a);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=o(n),h=function(e){i.onerror=i.onload=null,clearTimeout(f);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");a.type=c,a.request=u,t[1](a)}r[n]=void 0}};var f=setTimeout(function(){h({type:"timeout",target:i})},12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var f=0;f<h.length;f++)e(h[f]);var l=i;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"1da7":function(n,e,t){"use strict";t.d(e,"a",function(){return u});t("cadf"),t("551c"),t("097d");var c=t("a026"),u=new c["default"]},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d"),t("f466"),t("579f"),t("587a");var c=t("a026"),u=t("9f7b"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},a=[],o={name:"app"},d=o,h=(t("5c0b"),t("2877")),i=Object(h["a"])(d,r,a,!1,null,null,null),f=i.exports,l=t("8c4f"),s=(t("6b54"),t("f499")),p=t.n(s),b=t("2f62");function m(){return"APRON"}var k="user";function g(n){return null!=n&&("success"===n.request&&n.token.length>5)}function v(){localStorage.removeItem(k)}function w(n){localStorage.setItem(k,p()(n))}function y(){var n=JSON.parse(localStorage.getItem(k));return null!=n&&(n.appName=m()),n}var P=t("1da7"),S=t("bc3a"),A=t.n(S),j="http://jasdig.com:5154/apron/api";function B(n){return A.a.post("".concat(j,"/login"),n)}function O(n){return A.a.post("".concat(j,"/logout"),n)}c["default"].use(b["a"]);var E={user:{}},N={login:function(n,e){return B(e).then(function(n){var e=JSON.parse(p()(n)),t=e.data;!1===g(t)?(v(),P["a"].$emit("failedAuthentication",t.message)):(E.user=t,w(E.user))}).catch(function(n){console.log("Error no valid: ",n),P["a"].$emit("failedAuthentication","Network Error")})},logout:function(n,e){return O(e).then(function(n){v()}).catch(function(n){v()})},register:function(n){function e(e,t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n,e){return register(e).then(function(n){}).catch(function(n){console.log("Error Registering: ",n),P["a"].emit("failedRegistering: ",n)})})},T={},C={isAuthenticated:function(n){return n.user=y(),g(n.user)}},x=new b["a"].Store({state:E,actions:N,mutations:T,getters:C}),_=x,I=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-a9adb17c")]).then(t.bind(null,"e8c5"))},L=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-40f4cc33"),t.e("chunk-2d0ba708"),t.e("chunk-05dc8002")]).then(t.bind(null,"7277"))},J=function(){return Promise.all([t.e("chunk-2d0ba708"),t.e("chunk-2d0aab88")]).then(t.bind(null,"11e7"))},M=function(){return t.e("chunk-2d0de2d9").then(t.bind(null,"8517"))},F=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-2d0ba708"),t.e("chunk-2d0d093a")]).then(t.bind(null,"6923"))},R=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-c7051a8e")]).then(t.bind(null,"37cc"))},U=function(){return t.e("chunk-bbb78ca0").then(t.bind(null,"1292"))},q=function(){return t.e("chunk-8efa499c").then(t.bind(null,"da19"))},D=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-2d0f0c1b")]).then(t.bind(null,"9e70"))},$=function(){return t.e("chunk-86116004").then(t.bind(null,"2dc9"))},G=function(){return t.e("chunk-2d22d610").then(t.bind(null,"f6f0"))},H=function(){return t.e("chunk-2d224eb7").then(t.bind(null,"e1d9"))},W=function(){return t.e("chunk-2d0b1bf6").then(t.bind(null,"20bd"))},z=function(){return t.e("chunk-2d0ae943").then(t.bind(null,"0b50"))},K=function(){return t.e("chunk-2d208124").then(t.bind(null,"a2da"))},Q=function(){return t.e("chunk-2d0a443e").then(t.bind(null,"0668"))},V=function(){return t.e("chunk-2d21eae7").then(t.bind(null,"d731"))},X=function(){return t.e("chunk-2d0de6aa").then(t.bind(null,"860f"))},Y=function(){return t.e("chunk-2d0ab2eb").then(t.bind(null,"13d7"))},Z=function(){return t.e("chunk-2d0d3e27").then(t.bind(null,"5f55"))},nn=function(){return t.e("chunk-2d0f06bd").then(t.bind(null,"9bfd"))},en=function(){return t.e("chunk-2d21444c").then(t.bind(null,"afe6"))},tn=function(){return t.e("chunk-22faa80c").then(t.bind(null,"c3fc"))},cn=function(){return t.e("chunk-2d222779").then(t.bind(null,"cf77"))},un=function(){return t.e("chunk-2d2183eb").then(t.bind(null,"c9ba"))},rn=function(){return t.e("chunk-e3e0ee12").then(t.bind(null,"261a"))},an=function(){return t.e("chunk-2d0a400c").then(t.bind(null,"051b"))},on=function(){return t.e("chunk-2d21e6d0").then(t.bind(null,"d608"))},dn=function(){return t.e("chunk-2d0e1d93").then(t.bind(null,"7bd6"))},hn=function(){return t.e("chunk-2d0ae5e6").then(t.bind(null,"0a87"))},fn=function(){return t.e("chunk-2d226319").then(t.bind(null,"e82b"))},ln=function(){return t.e("chunk-2d0b59e9").then(t.bind(null,"1a58"))},sn=function(){return t.e("chunk-2d23777b").then(t.bind(null,"faf0"))},pn=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},bn=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},mn=function(){return t.e("chunk-2d0e8c24").then(t.bind(null,"8b48"))},kn=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},gn=function(){return t.e("chunk-59bd7c2f").then(t.bind(null,"dc02"))},vn=function(){return t.e("chunk-746fa602").then(t.bind(null,"eeca"))},wn=function(){return t.e("chunk-e7673e16").then(t.bind(null,"6f8e"))},yn=function(){return t.e("chunk-7b0cf0c0").then(t.bind(null,"187b"))};c["default"].use(l["a"]);var Pn=new l["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",name:"PageLogin",component:wn},{path:"/forgot-password",name:"PageForgotPassword",component:yn},{path:"/",redirect:"/dashboard",name:"Home",component:I,beforeEnter:function(n,e,t){_.getters.isAuthenticated?t():t("/login")},children:[{path:"dashboard",name:"Dashboard",component:L},{path:"theme",redirect:"/theme/colors",name:"Theme",component:{render:function(n){return n("router-view")}},children:[{path:"colors",name:"Colors",component:J},{path:"typography",name:"Typography",component:M}]},{path:"charts",name:"Charts",component:F},{path:"widgets",name:"Widgets",component:R},{path:"users",meta:{label:"Users"},component:{render:function(n){return n("router-view")}},children:[{path:"",component:gn},{path:":id",meta:{label:"User Details"},name:"User",component:vn}]},{path:"base",redirect:"/base/cards",name:"Base",component:{render:function(n){return n("router-view")}},children:[{path:"cards",name:"Cards",component:U},{path:"forms",name:"Forms",component:q},{path:"switches",name:"Switches",component:D},{path:"tables",name:"Tables",component:$},{path:"tabs",name:"Tabs",component:G},{path:"breadcrumbs",name:"Breadcrumbs",component:H},{path:"carousels",name:"Carousels",component:W},{path:"collapses",name:"Collapses",component:z},{path:"jumbotrons",name:"Jumbotrons",component:K},{path:"list-groups",name:"List Groups",component:Q},{path:"navs",name:"Navs",component:V},{path:"navbars",name:"Navbars",component:X},{path:"paginations",name:"Paginations",component:Y},{path:"popovers",name:"Popovers",component:Z},{path:"progress-bars",name:"Progress Bars",component:nn},{path:"tooltips",name:"Tooltips",component:en}]},{path:"buttons",redirect:"/buttons/standard-buttons",name:"Buttons",component:{render:function(n){return n("router-view")}},children:[{path:"standard-buttons",name:"Standard Buttons",component:tn},{path:"button-groups",name:"Button Groups",component:cn},{path:"dropdowns",name:"Dropdowns",component:un},{path:"brand-buttons",name:"Brand Buttons",component:rn}]},{path:"icons",redirect:"/icons/font-awesome",name:"Icons",component:{render:function(n){return n("router-view")}},children:[{path:"coreui-icons",name:"CoreUI Icons",component:hn},{path:"flags",name:"Flags",component:an},{path:"font-awesome",name:"Font Awesome",component:on},{path:"simple-line-icons",name:"Simple Line Icons",component:dn}]},{path:"notifications",redirect:"/notifications/alerts",name:"Notifications",component:{render:function(n){return n("router-view")}},children:[{path:"alerts",name:"Alerts",component:fn},{path:"badges",name:"Badges",component:ln},{path:"modals",name:"Modals",component:sn}]}]},{path:"/pages",redirect:"/pages/404",name:"Pages",component:{render:function(n){return n("router-view")}},children:[{path:"404",name:"Page404",component:pn},{path:"500",name:"Page500",component:bn},{path:"login",name:"Login",component:mn},{path:"register",name:"Register",component:kn}]}]});c["default"].use(u["a"]),new c["default"]({el:"#app",router:Pn,store:_,template:"<App/>",components:{App:f}})},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),u=t.n(c);u.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.9bf3bf82.js.map