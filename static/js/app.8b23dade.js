(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0d6610":"709aa499","chunk-2d22d225":"3a089bd4","chunk-4e884166":"0dc1b754","chunk-ca6001a8":"a4a90cbf","chunk-d381fd9c":"0f16ed56"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/CNY/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);var r=n("c09c");function o(e){return Object(r["a"])({url:"/user/sys_users:login",method:"post",data:e})}function a(){return Object(r["a"])({url:"/users/info",method:"get"})}var c=n("5f87"),i=n("ed08"),u=n("a18c");const s=()=>({token:Object(c["a"])(),name:"",avatar:""}),l=s(),f={RESET_STATE:e=>{Object.assign(e,s())},SET_TOKEN:(e,t)=>{e.token=t},SET_NAME:(e,t)=>{e.name=t},SET_AVATAR:(e,t)=>{e.avatar=t}},p={login({commit:e},t){return new Promise((n,r)=>{const a=Object(i["b"])(t);o({username:a}).then(t=>{const r=Object(c["a"])();e("SET_TOKEN",r),n()}).catch(e=>{r(e)})})},getInfo({commit:e,state:t}){return new Promise((n,r)=>{a(t.token).then(t=>{const{data:o}=t;if(!o)return r("Verification failed, please Login again.");const{username:a,avatar:c}=o;e("SET_NAME",a),e("SET_AVATAR",c),n(o)}).catch(e=>{r(e)})})},logout({commit:e,state:t}){return new Promise((t,n)=>{Object(c["b"])(),Object(u["b"])(),e("RESET_STATE"),t()})},resetToken({commit:e}){return new Promise(t=>{Object(c["b"])(),e("RESET_STATE"),t()})}};t["default"]={namespaced:!0,state:l,mutations:f,actions:p}},2415:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".van-tabbar-item--active{color:#2b46cc}.van-button--info{background-color:#2b46cc}body{height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif}label{font-weight:700}html{box-sizing:border-box}#app,html{height:100%}#app{position:relative}*,:after,:before{box-sizing:inherit}a:active,a:focus{outline:none}a,a:focus,a:hover{cursor:pointer;color:inherit;text-decoration:none}div:focus{outline:none}",""]),e.exports=t},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.keepAliveList}},[t("router-view")],1)],1)},a=[],c=(n("0643"),n("2382"),n("a573"),{computed:{keepAliveList(){return this.$router.options.routes.filter(e=>e.meta&&e.meta.keepAlive).map(e=>e.name)}}}),i=c,u=n("2877"),s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,f=n("a18c"),p=(n("13d5"),n("9d4a"),n("2f62"));const d={token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name};var h=d;r["a"].use(p["a"]);const m=n("c653"),b=m.keys().reduce((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=m(t);return e[n]=r.default,e},{}),v=new p["a"].Store({modules:b,getters:h});var g=v,y=n("b970"),k=(n("157a"),n("b20f"),n("c09c"));function w(e){e.prototype.$http=k["a"]}var j=n("d399"),O=n("323e"),E=n.n(O),T=(n("a5d8"),n("5f87"));E.a.configure({showSpinner:!1});const A=["/login"];f["a"].beforeEach(async(e,t,n)=>{E.a.start();const r=Object(T["a"])()||!0;if(r)if("/login"===e.path)n({path:"/"}),E.a.done();else{const t=g.getters.name;if(t)n();else try{n()}catch(o){await g.dispatch("user/resetToken"),Object(j["a"])(o||"Has Error"),n("/login?redirect="+e.path),E.a.done()}}else-1!==A.indexOf(e.path)?n():(n("/login?redirect="+e.path),E.a.done())}),f["a"].afterEach(()=>{E.a.done()}),r["a"].use(y["a"]),r["a"].use(w),r["a"].config.productionTip=!1,new r["a"]({router:f["a"],store:g,render:e=>e(l)}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("852e"),o=n.n(r);const a="Access-Token";function c(){return o.a.get(a)}function i(){return o.a.remove(a)}},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("2b0e"),o=n("8c4f");const a=o["a"].prototype.push;o["a"].prototype.push=function(e){return a.call(this,e).catch(e=>e)},r["a"].use(o["a"]);const c=[{path:"/",name:"Home",component:()=>n.e("chunk-d381fd9c").then(n.bind(null,"7abe")),meta:{title:"关注预览",keepAlive:!0}},{path:"/login",name:"Login",component:()=>n.e("chunk-4e884166").then(n.bind(null,"9ed6")),meta:{title:"登录"}},{path:"/report",name:"Report",component:()=>n.e("chunk-2d0d6610").then(n.bind(null,"71ff")),meta:{title:"报表目录",keepAlive:!0}},{path:"/follw",name:"Follw",component:()=>n.e("chunk-2d22d225").then(n.bind(null,"f5cc")),meta:{title:"关注列表",keepAlive:!0}},{path:"/404",component:()=>n.e("chunk-ca6001a8").then(n.bind(null,"8cdb"))},{path:"*",redirect:"/404"}],i=()=>new o["a"]({scrollBehavior:()=>({y:0}),routes:c}),u=i();function s(){const e=i();u.matcher=e.matcher}u.beforeEach((e,t,n)=>{document.title=e.meta.title||"数字欧普",n()}),t["a"]=u},b20f:function(e,t,n){var r=n("2415");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("23bb0500",r,!0,{sourceMap:!1,shadowMode:!1})},c09c:function(e,t,n){"use strict";n("d9e2");var r=n("cee4"),o=n("d399");const a=r["a"].create({baseURL:"/opple/webadmin",timeout:3e4});a.interceptors.request.use(e=>e,e=>Promise.reject(e)),a.interceptors.response.use(e=>{const t=e.data;return"object"!==typeof t||200===t.code?t:200!==t.code?(Object(o["a"])({message:t.chnDesc||"Error",type:"fail"}),Promise.reject(new Error(t.chnDesc||"Error"))):t},e=>(console.log("err"+e),Object(o["a"])({message:e.message,type:"fail"}),Promise.reject(e))),t["a"]=a},c653:function(e,t,n){var r={"./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n("9816");function o(e){const t="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDcWjM9wKBXAzjExvtkTLJa9X70z8PZNmD+t/2hgJvOHgiRyo5YbXQ1iDD9IET6tCH7WCx4rOYLRuMa5MUoBiPeYFmPtqknyH1b79l8942lzmuGISd13XqTc4vXAKYVaH4FpRCJTKjy2hPCgh09Dag/2RYjhdf7tQJvJBVmwh2kwIDAQAB",n=new r["a"];return n.setPublicKey(t),n.encrypt(JSON.stringify(e))}function a(e,t){return Math.floor(Math.random()*(1+t-e)+e)}}});