(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd0622b"],{"031a":function(e,t,i){e.exports=i.p+"static/img/底图.add8d8f6.png"},6442:function(e,t,i){var a=i("8ab6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("499e").default;r("470d3f75",a,!0,{sourceMap:!1,shadowMode:!1})},"8a9d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-content-100vh"},[t("img",{staticClass:"title",attrs:{src:i("c2bc"),alt:""}}),t("div",{staticClass:"prize-content"},[e.prizeList.length>0?t("div",{staticClass:"prize-list"},e._l(e.prizeList,(function(i,a){return t("div",{key:a,staticClass:"prize-item"},[t("div",{staticClass:"prize-img"},[t("img",{attrs:{src:i.awardUrl,alt:""}})]),t("div",{staticClass:"prize-name"},[e._v(e._s(i.awardName))]),1==i.received?t("div",{staticClass:"prize-btn"},[t("van-button",{attrs:{round:"",type:"info",size:"small",color:"#f6d959"},on:{click:function(t){return e.toReceive(i)}}},[e._v("点击领取")])],1):t("div",{staticClass:"prize-num"},[e._v("X"+e._s(i.count))])])})),0):t("div",{staticClass:"no-prize"},[e._v("还没有获取奖品哦~")])])])},r=[],n=i("c24f"),s=i("2f62"),o={data(){return{prizeList:[]}},computed:{...Object(s["b"])(["memberId"])},mounted(){this.getMyLotteryList()},methods:{getMyLotteryList(){Object(n["d"])({memberId:this.memberId}).then(e=>{this.prizeList=e.data})},toReceive(e){const{awardType:t,id:i,awardUrl:a}=e;4==t?this.$router.replace({name:"Address",query:{id:i}}):Object(n["f"])({memberId:this.memberId,awardId:i}).then(e=>{1==t?window.location.href="https://support.weixin.qq.com/cgi-bin/mmsupport-bin/showredpacket?receiveuri=NU_nEdwNEVuFfL&check_type=2#wechat_redirect":2==t?window.location.href=a:(this.$toast("领取成功"),this.$router.replace({name:"Home"}))})}}},d=o,c=(i("d1a4"),i("2877")),m=Object(c["a"])(d,a,r,!1,null,"58fe00ae",null);t["default"]=m.exports},"8ab6":function(e,t,i){var a=i("24fb"),r=i("1de5"),n=i("031a");t=a(!1);var s=r(n);t.push([e.i,".app-content-100vh[data-v-58fe00ae]{background-size:100%!important;background-image:url("+s+");background-position:50%}.app-content-100vh .title[data-v-58fe00ae]{display:block;width:50%;margin:0 auto;margin-top:25vh;margin-bottom:.5rem}.prize-content[data-v-58fe00ae]{width:90%;height:55%;margin:0 auto;box-sizing:border-box;padding:.5rem;background:#f9e9a4;border-radius:.5rem;overflow-y:auto;border:3px solid #ed655b}.prize-content .no-prize[data-v-58fe00ae]{text-align:center;font-size:.8rem;margin-top:50%;color:#5a5a5a}.prize-item[data-v-58fe00ae]{background:#d72316;border-radius:1rem;display:flex;color:#f9e9a4;font-family:MEllanPRC-Xbold;font-size:1rem;width:100%;min-height:5rem;margin-bottom:.5rem;padding:.5rem;box-sizing:border-box}.prize-item .prize-img[data-v-58fe00ae]{min-width:6rem;display:flex;justify-content:center;align-items:center;margin-right:.5rem}.prize-item .prize-img img[data-v-58fe00ae]{height:3.5rem}.prize-item .prize-name[data-v-58fe00ae]{width:100%;display:flex;align-items:center;margin-right:.5rem}.prize-item .prize-num[data-v-58fe00ae]{max-width:15%;font-size:1.5rem}.prize-item .prize-btn[data-v-58fe00ae],.prize-item .prize-num[data-v-58fe00ae]{display:flex;justify-content:flex-end;align-items:center}.prize-item .prize-btn[data-v-58fe00ae]{min-width:5rem}",""]),e.exports=t},c2bc:function(e,t,i){e.exports=i.p+"static/img/我的奖品字.be5bdc9a.png"},d1a4:function(e,t,i){"use strict";i("6442")}}]);