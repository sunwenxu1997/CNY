(function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-14699166":"ceff4d5e","chunk-48a018d8":"fcf9f96d","chunk-9b06d396":"d1227491","chunk-2de01ed2":"6efcdcea","chunk-3ca1edd4":"9e523001","chunk-7bda37e7":"948cefce","chunk-8bd5b374":"c57d2e94"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/CNY/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06f4":function(e,t,n){e.exports=n.p+"static/fonts/MEllanPRC-Xbold-Roman.24bda2f8.woff"},"0f9a":function(e,t,n){"use strict";n.r(t);var o=n("c24f"),r=n("852e"),a=n.n(r);const i="Access-Token";function c(){return a.a.remove(i)}var u=n("a18c");const s=()=>({openid:"",memberId:"",name:"",avatar:""}),l=s(),p={RESET_STATE:e=>{Object.assign(e,s())},SET_NAME:(e,t)=>{e.name=t},SET_AVATAR:(e,t)=>{e.avatar=t},SET_MEMBER_ID:(e,t)=>{e.memberId=t},SET_OPENID:(e,t)=>{e.openid=t}},d={getInfo({commit:e},t){return new Promise((n,r)=>{Object(o["c"])({openid:t}).then(t=>{const{data:o}=t;if(!o)return r("Verification failed, please Login again.");const{nickName:a,img:i,openid:c}=o;e("SET_NAME",a),e("SET_AVATAR",i),e("SET_MEMBER_ID",o.id),e("SET_OPENID",c),n(o)}).catch(e=>{r(e)})})},logout({commit:e,state:t}){return new Promise((t,n)=>{c(),Object(u["b"])(),e("RESET_STATE"),t()})},resetToken({commit:e}){return new Promise(t=>{c(),e("RESET_STATE"),t()})}};t["default"]={namespaced:!0,state:l,mutations:p,actions:d}},2415:function(e,t,n){var o=n("24fb"),r=n("1de5"),a=n("9d55"),i=n("4dfe"),c=n("d51a"),u=n("06f4");t=o(!1);var s=r(a),l=r(i,{hash:"?#iefix"}),p=r(c),d=r(u);t.push([e.i,".van-tabbar-item--active{color:#2b46cc}.van-button--info{background-color:#2b46cc}@font-face{font-family:MEllanPRC-Xbold;src:url("+s+') format("opentype"),url('+l+') format("embedded-opentype"),url('+p+') format("woff2"),url('+d+') format("woff");font-display:swap}#nprogress .bar{background:#dc372b!important}body{height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}label{font-weight:700}html{box-sizing:border-box}#app,html{height:100%}#app{position:relative}*,:after,:before{box-sizing:inherit}a:active,a:focus{outline:none}a,a:focus,a:hover{cursor:pointer;color:inherit;text-decoration:none}div:focus{outline:none}.app-content-100vh{width:100%;height:100vh;position:absolute;background-size:100% 100%;background-repeat:no-repeat;overflow:hidden}',""]),e.exports=t},"4dfe":function(e,t,n){e.exports=n.p+"static/fonts/MEllanPRC-Xbold-Roman.75802747.eot"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.keepAliveList}},[t("router-view")],1)],1)},a=[],i=(n("0643"),n("2382"),n("a573"),n("18a0")),c=n.n(i),u=n("c09c");function s(e){return Object(u["a"])({url:"/wx/official_account/signature",method:"POST",data:e})}function l(){return new Promise(async(e,t)=>{try{const t=window.location.href,{data:n}=await s({url:t});c.a.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","chooseImage"]}),e(),c.a.checkJsApi({jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","chooseImage"],success:function(e){console.log("checkJsApi success",e)}});const o={title:"好运签",link:"https://sunwenxu1997.github.io/CNY/#/",imgUrl:"https://sunwenxu1997.github.io/CNY/share.jpg"};c.a.ready(()=>{console.log("微信鉴权成功"),c.a.updateAppMessageShareData(o),c.a.updateTimelineShareData(o)}),c.a.error(e=>{console.log("微信鉴权失败")})}catch(n){t(n)}})}var p={computed:{keepAliveList(){return this.$router.options.routes.filter(e=>e.meta&&e.meta.keepAlive).map(e=>e.name)}},created(){l()}},d=p,f=n("2877"),m=Object(f["a"])(d,r,a,!1,null,null,null),h=m.exports,b=n("a18c"),g=(n("13d5"),n("9d4a"),n("2f62"));const v={token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name,appId:e=>e.user.appId,memberId:e=>e.user.memberId,openid:e=>e.user.openid};var y=v;o["a"].use(g["a"]);const w=n("c653"),k=w.keys().reduce((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),o=w(t);return e[n]=o.default,e},{}),E=new g["a"].Store({modules:k,getters:y});var S=E,T=n("b970");n("157a"),n("b20f");function O(e){e.prototype.$http=u["a"]}var j=n("d399"),M=n("323e"),P=n.n(M);n("a5d8");P.a.configure({showSpinner:!1,color:"#cb221c"});const A=["/login","/"];b["a"].beforeEach(async(e,t,n)=>{P.a.start();const o=S.getters.name;if(o)n();else try{const{openid:t}=e.query;S.dispatch("user/getInfo",t||"oZnBq5doeBJgfpH8MPmngq4wpV70"),n()}catch(r){Object(j["a"])(r.msg||"获取用户信息失败,请重新授权"),-1!==A.indexOf(e.path)?n():(n("/"),P.a.done())}}),b["a"].afterEach(()=>{P.a.done()}),o["a"].use(T["a"]),o["a"].use(O),o["a"].config.productionTip=!1,new o["a"]({router:b["a"],store:S,render:e=>e(h)}).$mount("#app")},"9d55":function(e,t,n){e.exports=n.p+"static/fonts/MEllanPRC-Xbold.f4a96d20.OTF"},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var o=n("2b0e"),r=n("8c4f");const a=r["a"].prototype.push;r["a"].prototype.push=function(e){return a.call(this,e).catch(e=>e)},o["a"].use(r["a"]);const i=[{path:"/",name:"Home",component:()=>Promise.all([n.e("chunk-14699166"),n.e("chunk-48a018d8")]).then(n.bind(null,"7abe")),meta:{title:"好运签",keepAlive:!0}},{path:"/login",name:"Login",component:()=>n.e("chunk-2de01ed2").then(n.bind(null,"9ed6")),meta:{title:"登录"}},{path:"/play",name:"Play",component:()=>Promise.all([n.e("chunk-14699166"),n.e("chunk-9b06d396")]).then(n.bind(null,"736a")),meta:{title:"开好运"}},{path:"/prize",name:"Prize",component:()=>n.e("chunk-3ca1edd4").then(n.bind(null,"8a9d")),meta:{title:"我的奖品"}},{path:"/rule",name:"Rule",component:()=>n.e("chunk-7bda37e7").then(n.bind(null,"dfa9")),meta:{title:"活动规则"}},{path:"/404",component:()=>n.e("chunk-8bd5b374").then(n.bind(null,"8cdb"))},{path:"*",redirect:"/404"}],c=()=>new r["a"]({scrollBehavior:()=>({y:0}),routes:i}),u=c();function s(){const e=c();u.matcher=e.matcher}u.beforeEach((e,t,n)=>{document.title=e.meta.title||"数字欧普",n()}),t["a"]=u},b20f:function(e,t,n){var o=n("2415");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("23bb0500",o,!0,{sourceMap:!1,shadowMode:!1})},c09c:function(e,t,n){"use strict";n("d9e2");var o=n("cee4"),r=n("d399");const a=o["a"].create({baseURL:"https://f-openapi-uat-darlie.darlie.com.cn",timeout:3e4});a.interceptors.request.use(e=>e,e=>Promise.reject(e)),a.interceptors.response.use(e=>{const t=e.data;return"100010"!==t.statusCode?(Object(r["a"])({message:t.msg||"Error",type:"fail"}),Promise.reject(new Error(t.msg||"Error"))):t},e=>(console.log("err"+e),Object(r["a"])({message:e.msg,type:"fail"}),Promise.reject(e))),t["a"]=a},c24f:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c}));var o=n("c09c");function r(e){return Object(o["a"])({url:"/mkt/activity/count",method:"get",params:e})}function a(){return Object(o["a"])({url:"/mkt/activity/winning/list",method:"get"})}function i(){return Object(o["a"])({url:"/mkt/activity/winningListByMemberId",method:"get"})}function c(e){return Object(o["a"])({url:"/api/v1/app/chief/getMemberInfo",method:"POST",data:e})}},c653:function(e,t,n){var o={"./user.js":"0f9a"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="c653"},d51a:function(e,t,n){e.exports=n.p+"static/fonts/MEllanPRC-Xbold-Roman.a272ef04.woff2"}});