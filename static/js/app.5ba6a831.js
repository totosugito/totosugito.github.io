(function(n){function e(e){for(var c,a,r=e[0],d=e[1],h=e[2],i=0,f=[];i<r.length;i++)a=r[i],u[a]&&f.push(u[a][0]),u[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,h||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,a=1;a<t.length;a++){var r=t[a];0!==u[r]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},a={app:0},u={app:0},o=[];function r(n){return d.p+"static/js/"+({}[n]||n)+"."+{"chunk-22faa80c":"7c546031","chunk-2d0a400c":"0441e747","chunk-2d0a443e":"bb573309","chunk-2d0ab2eb":"19e1dcaf","chunk-2d0ae5e6":"b1658a3b","chunk-2d0ae943":"c6aaeb5c","chunk-2d0b1bf6":"5df213a1","chunk-2d0b59e9":"9ac5d70c","chunk-2d0ba708":"fb45f3dd","chunk-2d0aab88":"988607a3","chunk-2d0c4303":"70f1488b","chunk-2d0d3e27":"a9949c6f","chunk-2d0de2d9":"74c129ea","chunk-2d0de6aa":"43677167","chunk-2d0e1d93":"2133217d","chunk-2d0e8c24":"8bb8babe","chunk-2d0f06bd":"a5b4f67c","chunk-2d208124":"c490ebe7","chunk-2d2131a8":"fa7ee5a0","chunk-2d21444c":"273de188","chunk-2d2183eb":"53b69937","chunk-2d21e6d0":"c4eee204","chunk-2d21eae7":"fa42ab07","chunk-2d222779":"822fef00","chunk-2d224eb7":"ee93674c","chunk-2d226319":"cd7a81a1","chunk-2d22c303":"d6f66206","chunk-2d22d610":"85e57aed","chunk-2d23777b":"482f8e47","chunk-40f4cc33":"f8e310ab","chunk-2d0f0c1b":"53e002a7","chunk-a9adb17c":"15953586","chunk-7b0cf0c0":"f7ce9d12","chunk-86116004":"4b199988","chunk-8efa499c":"f981ea3d","chunk-9745c10e":"e5fd96d8","chunk-2d0d093a":"e64c7745","chunk-05dc8002":"e30c1f08","chunk-c7051a8e":"ff536c4a","chunk-b2ddbeea":"e208760f","chunk-bbb78ca0":"cab4ea21","chunk-d99fe7be":"852d082d","chunk-e3e0ee12":"aa130495","chunk-e7673e16":"057b2959"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-22faa80c":1,"chunk-8efa499c":1,"chunk-05dc8002":1,"chunk-b2ddbeea":1,"chunk-bbb78ca0":1,"chunk-e3e0ee12":1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=new Promise(function(e,t){for(var c="static/css/"+({}[n]||n)+"."+{"chunk-22faa80c":"28a1c86e","chunk-2d0a400c":"31d6cfe0","chunk-2d0a443e":"31d6cfe0","chunk-2d0ab2eb":"31d6cfe0","chunk-2d0ae5e6":"31d6cfe0","chunk-2d0ae943":"31d6cfe0","chunk-2d0b1bf6":"31d6cfe0","chunk-2d0b59e9":"31d6cfe0","chunk-2d0ba708":"31d6cfe0","chunk-2d0aab88":"31d6cfe0","chunk-2d0c4303":"31d6cfe0","chunk-2d0d3e27":"31d6cfe0","chunk-2d0de2d9":"31d6cfe0","chunk-2d0de6aa":"31d6cfe0","chunk-2d0e1d93":"31d6cfe0","chunk-2d0e8c24":"31d6cfe0","chunk-2d0f06bd":"31d6cfe0","chunk-2d208124":"31d6cfe0","chunk-2d2131a8":"31d6cfe0","chunk-2d21444c":"31d6cfe0","chunk-2d2183eb":"31d6cfe0","chunk-2d21e6d0":"31d6cfe0","chunk-2d21eae7":"31d6cfe0","chunk-2d222779":"31d6cfe0","chunk-2d224eb7":"31d6cfe0","chunk-2d226319":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-2d22d610":"31d6cfe0","chunk-2d23777b":"31d6cfe0","chunk-40f4cc33":"31d6cfe0","chunk-2d0f0c1b":"31d6cfe0","chunk-a9adb17c":"31d6cfe0","chunk-7b0cf0c0":"31d6cfe0","chunk-86116004":"31d6cfe0","chunk-8efa499c":"603305bb","chunk-9745c10e":"31d6cfe0","chunk-2d0d093a":"31d6cfe0","chunk-05dc8002":"961fb5da","chunk-c7051a8e":"31d6cfe0","chunk-b2ddbeea":"755beef8","chunk-bbb78ca0":"f9208b90","chunk-d99fe7be":"31d6cfe0","chunk-e3e0ee12":"3e45d735","chunk-e7673e16":"31d6cfe0"}[n]+".css",u=d.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var h=o[r],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===u))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){h=f[r],i=h.getAttribute("data-href");if(i===c||i===u)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.request=c,delete a[n],s.parentNode.removeChild(s),t(o)},s.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(s)}).then(function(){a[n]=0}));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise(function(e,t){c=u[n]=[e,t]});e.push(c[2]=o);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r(n),h=function(e){i.onerror=i.onload=null,clearTimeout(f);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+c+": "+a+")");o.type=c,o.request=a,t[1](o)}u[n]=void 0}};var f=setTimeout(function(){h({type:"timeout",target:i})},12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var f=0;f<h.length;f++)e(h[f]);var s=i;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"2c08":function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u});t("28a5"),t("cadf"),t("551c"),t("097d");var c=t("a026"),a=new c["default"];function u(n){if(!n||n.split(".").length<3)return!1;var e=JSON.parse(atob(n.split(".")[1])),t=new Date(1e3*e.exp),c=new Date;return c<t}},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d"),t("f466"),t("579f"),t("587a");var c=t("a026"),a=t("9f7b"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},o=[],r={name:"app"},d=r,h=(t("5c0b"),t("2877")),i=Object(h["a"])(d,u,o,!1,null,null,null),f=i.exports,s=t("8c4f"),l=t("f499"),p=t.n(l),b=t("2f62"),m=t("bc3a"),k=t.n(m),g="http://jasdig.com:5153/apron/api";function v(n){return k.a.post("".concat(g,"/send_login"),n)}function w(n){return k.a.post("".concat(g,"/register/"),n)}function y(n){return k.a.post("".concat(g,"/forgot-password/"),n)}var P=t("2c08");c["default"].use(b["a"]);var j={surveys:[],currentSurvey:{},user:{},jwt:""},D={login:function(n,e){return n.commit("setUserData",{userData:e}),v(e).then(function(e){console.log("Login Success: ",p()(e)),n.commit("setJwtToken",{jwt:e.data}),P["a"].$emit("failedAuthentication","test error")}).catch(function(n){console.log("Error Authenticating: ",n),P["a"].emit("failedAuthentication",n)})},forgot_password:function(n,e){return n.commit("setUserData",{userData:e}),y(e).then(function(n){console.log("forgot password ",p()(n))}).catch(function(n){console.log("Error forgot_password: ",n),P["a"].emit("failedForgotPassword",n)})},register:function(n,e){return n.commit("setUserData",{userData:e}),w(e).then(n.dispatch("login",e)).catch(function(n){console.log("Error Registering: ",n),P["a"].emit("failedRegistering: ",n)})}},S={setUserData:function(n,e){console.log("setUserData payload = ",e),n.userData=e.userData},setJwtToken:function(n,e){console.log("setJwtToken payload = ",e),localStorage.token=e.jwt.token,n.jwt=e.jwt}},T={isAuthenticated:function(n){return Object(P["b"])(n.jwt.token)}},A=new b["a"].Store({state:j,actions:D,mutations:S,getters:T}),B=A,E=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-a9adb17c")]).then(t.bind(null,"e8c5"))},O=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-40f4cc33"),t.e("chunk-2d0ba708"),t.e("chunk-05dc8002")]).then(t.bind(null,"7277"))},C=function(){return Promise.all([t.e("chunk-2d0ba708"),t.e("chunk-2d0aab88")]).then(t.bind(null,"11e7"))},_=function(){return t.e("chunk-2d0de2d9").then(t.bind(null,"8517"))},x=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-2d0ba708"),t.e("chunk-2d0d093a")]).then(t.bind(null,"6923"))},U=function(){return Promise.all([t.e("chunk-9745c10e"),t.e("chunk-c7051a8e")]).then(t.bind(null,"37cc"))},N=function(){return t.e("chunk-bbb78ca0").then(t.bind(null,"1292"))},J=function(){return t.e("chunk-8efa499c").then(t.bind(null,"da19"))},L=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-2d0f0c1b")]).then(t.bind(null,"9e70"))},F=function(){return t.e("chunk-86116004").then(t.bind(null,"2dc9"))},M=function(){return t.e("chunk-2d22d610").then(t.bind(null,"f6f0"))},I=function(){return t.e("chunk-2d224eb7").then(t.bind(null,"e1d9"))},R=function(){return t.e("chunk-2d0b1bf6").then(t.bind(null,"20bd"))},q=function(){return t.e("chunk-2d0ae943").then(t.bind(null,"0b50"))},G=function(){return t.e("chunk-2d208124").then(t.bind(null,"a2da"))},$=function(){return t.e("chunk-2d0a443e").then(t.bind(null,"0668"))},H=function(){return t.e("chunk-2d21eae7").then(t.bind(null,"d731"))},W=function(){return t.e("chunk-2d0de6aa").then(t.bind(null,"860f"))},z=function(){return t.e("chunk-2d0ab2eb").then(t.bind(null,"13d7"))},K=function(){return t.e("chunk-2d0d3e27").then(t.bind(null,"5f55"))},Q=function(){return t.e("chunk-2d0f06bd").then(t.bind(null,"9bfd"))},V=function(){return t.e("chunk-2d21444c").then(t.bind(null,"afe6"))},X=function(){return t.e("chunk-22faa80c").then(t.bind(null,"c3fc"))},Y=function(){return t.e("chunk-2d222779").then(t.bind(null,"cf77"))},Z=function(){return t.e("chunk-2d2183eb").then(t.bind(null,"c9ba"))},nn=function(){return t.e("chunk-e3e0ee12").then(t.bind(null,"261a"))},en=function(){return t.e("chunk-2d0a400c").then(t.bind(null,"051b"))},tn=function(){return t.e("chunk-2d21e6d0").then(t.bind(null,"d608"))},cn=function(){return t.e("chunk-2d0e1d93").then(t.bind(null,"7bd6"))},an=function(){return t.e("chunk-2d0ae5e6").then(t.bind(null,"0a87"))},un=function(){return t.e("chunk-2d226319").then(t.bind(null,"e82b"))},on=function(){return t.e("chunk-2d0b59e9").then(t.bind(null,"1a58"))},rn=function(){return t.e("chunk-2d23777b").then(t.bind(null,"faf0"))},dn=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},hn=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},fn=function(){return t.e("chunk-2d0e8c24").then(t.bind(null,"8b48"))},sn=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},ln=function(){return t.e("chunk-b2ddbeea").then(t.bind(null,"dc02"))},pn=function(){return t.e("chunk-d99fe7be").then(t.bind(null,"eeca"))},bn=function(){return t.e("chunk-e7673e16").then(t.bind(null,"6f8e"))},mn=function(){return t.e("chunk-7b0cf0c0").then(t.bind(null,"187b"))};c["default"].use(s["a"]);var kn=new s["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/page-login",name:"PageLogin",component:bn},{path:"/forgot-password",name:"PageForgotPassword",component:mn},{path:"/",redirect:"/dashboard",name:"Home",component:E,beforeEnter:function(n,e,t){B.getters.isAuthenticated?t():t("/page-login")},children:[{path:"dashboard",name:"Dashboard",component:O},{path:"theme",redirect:"/theme/colors",name:"Theme",component:{render:function(n){return n("router-view")}},children:[{path:"colors",name:"Colors",component:C},{path:"typography",name:"Typography",component:_}]},{path:"charts",name:"Charts",component:x},{path:"widgets",name:"Widgets",component:U},{path:"users",meta:{label:"Users"},component:{render:function(n){return n("router-view")}},children:[{path:"",component:ln},{path:":id",meta:{label:"User Details"},name:"User",component:pn}]},{path:"base",redirect:"/base/cards",name:"Base",component:{render:function(n){return n("router-view")}},children:[{path:"cards",name:"Cards",component:N},{path:"forms",name:"Forms",component:J},{path:"switches",name:"Switches",component:L},{path:"tables",name:"Tables",component:F},{path:"tabs",name:"Tabs",component:M},{path:"breadcrumbs",name:"Breadcrumbs",component:I},{path:"carousels",name:"Carousels",component:R},{path:"collapses",name:"Collapses",component:q},{path:"jumbotrons",name:"Jumbotrons",component:G},{path:"list-groups",name:"List Groups",component:$},{path:"navs",name:"Navs",component:H},{path:"navbars",name:"Navbars",component:W},{path:"paginations",name:"Paginations",component:z},{path:"popovers",name:"Popovers",component:K},{path:"progress-bars",name:"Progress Bars",component:Q},{path:"tooltips",name:"Tooltips",component:V}]},{path:"buttons",redirect:"/buttons/standard-buttons",name:"Buttons",component:{render:function(n){return n("router-view")}},children:[{path:"standard-buttons",name:"Standard Buttons",component:X},{path:"button-groups",name:"Button Groups",component:Y},{path:"dropdowns",name:"Dropdowns",component:Z},{path:"brand-buttons",name:"Brand Buttons",component:nn}]},{path:"icons",redirect:"/icons/font-awesome",name:"Icons",component:{render:function(n){return n("router-view")}},children:[{path:"coreui-icons",name:"CoreUI Icons",component:an},{path:"flags",name:"Flags",component:en},{path:"font-awesome",name:"Font Awesome",component:tn},{path:"simple-line-icons",name:"Simple Line Icons",component:cn}]},{path:"notifications",redirect:"/notifications/alerts",name:"Notifications",component:{render:function(n){return n("router-view")}},children:[{path:"alerts",name:"Alerts",component:un},{path:"badges",name:"Badges",component:on},{path:"modals",name:"Modals",component:rn}]}]},{path:"/pages",redirect:"/pages/404",name:"Pages",component:{render:function(n){return n("router-view")}},children:[{path:"404",name:"Page404",component:dn},{path:"500",name:"Page500",component:hn},{path:"login",name:"Login",component:fn},{path:"register",name:"Register",component:sn}]}]});c["default"].use(a["a"]),new c["default"]({el:"#app",router:kn,store:B,template:"<App/>",components:{App:f}})},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),a=t.n(c);a.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.5ba6a831.js.map