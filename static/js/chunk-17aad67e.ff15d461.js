(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17aad67e"],{"008b":function(t,e,a){"use strict";a("73ad")},"2bc3":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".app-content-100vh .my-swipe[data-v-235e2036]{width:100vw;height:100%}.app-content-100vh .background-img[data-v-235e2036]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.app-content-100vh .buttons[data-v-235e2036]{box-sizing:border-box;width:100%;position:absolute;bottom:0;padding:0 0 3% 0}.app-content-100vh .buttons .btn[data-v-235e2036]:active{transform:scale(.95)}.app-content-100vh .buttons img[data-v-235e2036]{width:100%;display:block;margin:0 auto}.app-content-100vh .buttons .col-1[data-v-235e2036],.app-content-100vh .buttons .col-2[data-v-235e2036],.app-content-100vh .buttons .col-3[data-v-235e2036]{margin:0 auto}.app-content-100vh .buttons .col-1[data-v-235e2036],.app-content-100vh .buttons .col-2[data-v-235e2036]{display:flex;width:70%}.app-content-100vh .buttons .col-2[data-v-235e2036]{justify-content:space-between;padding:0 5%;position:relative;z-index:5}.app-content-100vh .buttons .col-2 img[data-v-235e2036]{width:45%}.app-content-100vh .buttons .col-3 img[data-v-235e2036]{margin-top:.3rem}.cover-count[data-v-235e2036]{width:100%;height:100%;position:fixed;top:0;background:rgba(0,0,0,.8);z-index:99;display:flex;justify-content:center;align-items:center;font-weight:700;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.cover-count .cover-content[data-v-235e2036]{width:90%;color:#fffadc;text-align:center;font-size:1.5rem;position:relative;top:-3vh;font-family:MEllanPRC-Xbold;text-shadow:0 0 10px #dc372b!important}.cover-count .cover-content img[data-v-235e2036]{width:100%}.cover-count .cover-title[data-v-235e2036]{width:100%;position:relative}.cover-count .cover-title img[data-v-235e2036]{width:100%;position:absolute;top:-2rem;left:0}.wrapper[data-v-235e2036]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.wrapper .block[data-v-235e2036]{width:78%;position:relative}.wrapper img[data-v-235e2036]{width:100%;display:block}.wrapper .close[data-v-235e2036]{position:absolute;right:-8%;top:-8%;width:20%;z-index:5}.wrapper .content[data-v-235e2036]{position:absolute;width:76%;height:70%;top:20%;left:12%;color:#fffadc;font-family:MEllanPRC-Xbold;font-size:.8rem;-webkit-overflow-scrolling:touch;overflow-y:scroll}.wrapper .content table[data-v-235e2036]{width:100%}.wrapper .content table thead[data-v-235e2036]{font-weight:700}.wrapper .content table td[data-v-235e2036],.wrapper .content table th[data-v-235e2036]{padding:.3rem}",""]),t.exports=e},"3efb":function(t,e,a){"use strict";a("756e")},"73ad":function(t,e,a){var o=a("7f22");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("4d3128a0",o,!0,{sourceMap:!1,shadowMode:!1})},"756e":function(t,e,a){var o=a("2bc3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("16ee141e",o,!0,{sourceMap:!1,shadowMode:!1})},"7abe":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-content-100vh"},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:2500,"show-indicators":!1}},t._l(t.backgroundList,(function(t,a){return e("van-swipe-item",{key:a},[e("img",{staticClass:"background-img",attrs:{src:t.url,alt:""}})])})),1),e("div",{staticClass:"buttons"},[e("div",{staticClass:"col-1"},[e("img",{staticClass:"btn",staticStyle:{"margin-bottom":"-0.5rem"},attrs:{src:a("f031"),alt:""},on:{click:t.clickOpenLuck}})]),e("div",{staticClass:"col-2"},[e("img",{staticClass:"btn",attrs:{src:a("310b"),alt:""},on:{click:t.clickMyPrize}}),e("img",{staticClass:"btn",attrs:{src:a("52c4"),alt:""},on:{click:t.clickRule}})]),e("div",{staticClass:"col-3"},[e("div",{staticStyle:{"min-height":"1.5rem"}},[t.lotteryList.length?e("img",{staticClass:"btn",staticStyle:{width:"20%","margin-top":"0.6rem"},attrs:{src:a("5e61"),alt:""},on:{click:t.clickLotteryList}}):t._e()]),e("img",{staticStyle:{width:"60%"},attrs:{src:a("52c4b"),alt:""}}),e("img",{staticStyle:{width:"90%"},attrs:{src:a("3673"),alt:""}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCover,expression:"showCover"}],staticClass:"cover-count"},[e("div",{staticClass:"cover-content"},[e("img",{attrs:{src:a("bfc4"),alt:""}}),e("div",{staticClass:"cover-title"},[e("img",{attrs:{src:a("bfc4c"),alt:""}}),e("span",[t._v("今天还可以开好运"+t._s(t.lotteryCount)+"次")])]),e("div",{staticStyle:{"margin-top":"0.5rem","font-size":"1.2rem"}},[e("span",{staticStyle:{"font-size":"1.5rem !important"}},[t._v(t._s(t.countDown))]),t._v(" 秒后开始获取好运... ")])])]),e("van-overlay",{attrs:{"lock-scroll":!1,"z-index":"5",show:t.showLotteryList},on:{click:function(e){t.showLotteryList=!1}}},[e("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"block"},[e("img",{staticClass:"title",attrs:{src:a("c60e"),alt:""}}),e("img",{staticClass:"close",attrs:{src:a("d99b"),alt:""},on:{click:function(e){t.showLotteryList=!1}}}),e("div",{staticClass:"content"},[e("table",[e("thead",[e("tr",[e("th",[t._v("中奖手机号")]),e("th",[t._v("中奖时间")])])]),e("tbody",t._l(20,(function(a,o){return e("tr",{key:o},[e("td",[t._v("138****2791")]),e("td",[t._v("2024-12-08 14:39")])])})),0)])])])])]),e("ShareActivity",{ref:"share-activity"})],1)},i=[],s=(a("14d9"),a("c24f")),c=a("cffa"),r=a("2f62"),n=function(){var t=this,e=t._self._c;return e("div",[e("van-overlay",{attrs:{"lock-scroll":!1,"z-index":"5",show:t.showDialog},on:{click:function(e){t.showDialog=!1}}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"block",on:{click:function(t){t.stopPropagation()}}},[e("img",{staticStyle:{width:"80%"},attrs:{src:a("af58"),alt:""}}),e("img",{staticClass:"title",staticStyle:{width:"80%","margin-top":"-20%"},attrs:{src:a("87ee"),alt:""}}),e("img",{staticStyle:{"margin-top":"-5%"},attrs:{src:a("c6cb"),alt:""}}),e("div",{staticClass:"content"},[e("div",[e("img",{staticClass:"btn",attrs:{src:a("9057"),alt:""},on:{click:t.shareToGroup}}),e("img",{staticClass:"btn",attrs:{src:a("fb13"),alt:""},on:{click:t.shareToFriend}}),e("img",{staticClass:"btn",attrs:{src:a("3a85"),alt:""},on:{click:t.followVideo}})])])])])]),e("van-overlay",{attrs:{"z-index":"5",show:t.showCover},on:{click:function(e){t.showCover=!1}}},[e("div",{staticClass:"wrapper"},[e("span",{staticClass:"right-top-hint",staticStyle:{position:"absolute",top:"2vh",right:"3vw","font-size":"1.5rem",color:"white"}},[t._v("请点击右上角分享")])])])],1)},l=[],d=a("18a0"),p=a.n(d),h={data(){return{showDialog:!1,showCover:!1}},computed:{...Object(r["b"])(["memberId","openid"])},methods:{show(){this.showDialog=!0},shareToGroup(){this.showCover=!0,this.postMessage("shareToGroup"),p.a.ready(()=>{console.log("分享到朋友圈"),p.a.updateTimelineShareData({success:function(){console.log("分享成功")}})})},shareToFriend(){this.showCover=!0,this.postMessage("shareToFriend"),p.a.ready(()=>{console.log("分享到好友"),p.a.updateAppMessageShareData({success:function(){console.log("分享成功")}})})},postMessage(t){p.a.miniProgram.postMessage({data:{from:t,shareType:"onMenuShareAppMessage",openid:this.openid,memberId:this.memberId}})},followVideo(){console.log("关注视频号")}}},v=h,u=(a("008b"),a("2877")),b=Object(u["a"])(v,n,l,!1,null,"031997b8",null),w=b.exports,m={name:"Home",components:{ShareActivity:w},data(){return{backgroundList:[{url:a("e099")},{url:a("c906")},{url:a("537b")},{url:a("537b2")}],lotteryCount:0,lotteryList:[1],showLotteryList:!1,showCover:!1,countDown:3}},computed:{...Object(r["b"])(["memberId"])},created(){this.init()},mounted(){},methods:{async init(){},getLotteryCount(){Object(s["a"])({memberId:this.memberId}).then(t=>{this.lotteryCount=t.data})},clickOpenLuck(){this.checkUser()&&(this.lotteryCount<=0?this.$refs["share-activity"].show():(this.showCover=!0,c["a"].from(".cover-count",{duration:.5,opacity:0,onComplete:()=>{let t=setInterval(()=>{this.countDown--,this.countDown<=0&&(clearInterval(t),this.showCover=!1,this.countDown=3,this.$router.push("/play"))},1e3)}})))},clickMyPrize(){this.checkUser()&&this.$router.push("/prize")},checkUser(){return!0},clickRule(){this.$router.push("/rule")},getLotteryList(){Object(s["b"])().then(t=>{this.lotteryList=t.data})},clickLotteryList(){this.showLotteryList=!0}}},g=m,f=(a("3efb"),Object(u["a"])(g,o,i,!1,null,"235e2036",null));e["default"]=f.exports},"7f22":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".btn[data-v-031997b8]:active{transform:scale(.95)}.wrapper[data-v-031997b8]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.wrapper .block[data-v-031997b8]{width:70%;position:relative;top:-3vh}.wrapper img[data-v-031997b8]{width:100%;display:block;margin:0 auto}.wrapper .content[data-v-031997b8]{position:absolute;width:78%;height:42%;bottom:9%;left:11%;display:flex;justify-content:center;align-items:center}.wrapper .content img[data-v-031997b8]{margin-bottom:1rem;border-radius:.7rem}",""]),t.exports=e}}]);