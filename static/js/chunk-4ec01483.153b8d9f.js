(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec01483"],{"031a":function(t,i,e){t.exports=e.p+"static/img/底图.add8d8f6.png"},"8a9d":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"app-content-100vh"},[i("img",{staticClass:"title",attrs:{src:e("c2bc"),alt:""}}),i("div",{staticClass:"prize-content"},[t.prizeList.length>0?i("div",{staticClass:"prize-list"},t._l(t.prizeList,(function(e,a){return i("div",{key:a,staticClass:"prize-item"},[i("div",{staticClass:"prize-img"},[i("img",{attrs:{src:e.awardUrl,alt:""}})]),i("div",{staticClass:"prize-name"},[t._v(t._s(e.awardName))]),1==e.received?i("div",{staticClass:"prize-btn"},[i("van-button",{attrs:{round:"",type:"info",size:"small",color:"#f6d959"}},[t._v("点击领取")])],1):i("div",{staticClass:"prize-num"},[t._v("X"+t._s(e.count))])])})),0):i("div",{staticClass:"no-prize"},[t._v("还没有获取奖品哦~")])])])},r=[],n=e("c24f"),s=e("2f62"),o={data(){return{prizeList:[]}},computed:{...Object(s["b"])(["memberId"])},mounted(){this.getMyLotteryList()},methods:{getMyLotteryList(){Object(n["d"])({memberId:this.memberId}).then(t=>{this.prizeList=t.data})}}},d=o,c=(e("f628"),e("2877")),m=Object(c["a"])(d,a,r,!1,null,"b07a9210",null);i["default"]=m.exports},"91f6":function(t,i,e){var a=e("a1f5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("499e").default;r("4acc0b2a",a,!0,{sourceMap:!1,shadowMode:!1})},a1f5:function(t,i,e){var a=e("24fb"),r=e("1de5"),n=e("031a");i=a(!1);var s=r(n);i.push([t.i,".app-content-100vh[data-v-b07a9210]{background-size:100%!important;background-image:url("+s+");background-position:50%}.app-content-100vh .title[data-v-b07a9210]{display:block;width:50%;margin:0 auto;margin-top:25vh;margin-bottom:.5rem}.prize-content[data-v-b07a9210]{width:90%;height:55%;margin:0 auto;box-sizing:border-box;padding:.5rem;background:#f9e9a4;border-radius:.5rem;overflow-y:auto;border:3px solid #ed655b}.prize-content .no-prize[data-v-b07a9210]{text-align:center;font-size:.8rem;margin-top:50%;color:#5a5a5a}.prize-item[data-v-b07a9210]{background:#d72316;border-radius:1rem;display:flex;color:#f9e9a4;font-family:MEllanPRC-Xbold;font-size:1rem;width:100%;min-height:5rem;margin-bottom:.5rem;padding:.5rem;box-sizing:border-box}.prize-item .prize-img[data-v-b07a9210]{min-width:6rem;display:flex;justify-content:center;align-items:center;margin-right:.5rem}.prize-item .prize-img img[data-v-b07a9210]{height:3.5rem}.prize-item .prize-name[data-v-b07a9210]{width:100%;display:flex;align-items:center;margin-right:.5rem}.prize-item .prize-num[data-v-b07a9210]{max-width:15%;font-size:1.5rem}.prize-item .prize-btn[data-v-b07a9210],.prize-item .prize-num[data-v-b07a9210]{display:flex;justify-content:flex-end;align-items:center}.prize-item .prize-btn[data-v-b07a9210]{min-width:5rem}",""]),t.exports=i},c2bc:function(t,i,e){t.exports=e.p+"static/img/我的奖品字.be5bdc9a.png"},f628:function(t,i,e){"use strict";e("91f6")}}]);