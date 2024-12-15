<template>
  <div>
    <van-overlay :lock-scroll="false" z-index="5" :show="showDialog" @click="showDialog = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <img style="width: 80%" src="@/assets/shareActivity/大礼包@2x.png" alt="" />
          <img style="width: 80%; margin-top: -20%" class="title" src="@/assets/shareActivity/再玩一次@2x.png" alt="" />
          <img style="margin-top: -5%" src="@/assets/shareActivity/弹窗@2x.png" alt="" />
          <div class="content">
            <div>
              <img class="btn" src="@/assets/shareActivity/分享群正常.png" alt="" @click="shareToGroup" />
              <img class="btn" src="@/assets/shareActivity/分享好友正常.png" alt="" @click="shareToFriend" />
              <img class="btn" src="@/assets/shareActivity/关注视频号正常.png" alt="" @click="followVideo" />
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay z-index="5" :show="showCover" @click="showCover = false">
      <div class="wrapper">
        <!-- 提示点击右上角分享给朋友 -->
        <span class="right-top-hint" style="position: absolute; top: 2vh; right: 3vw; font-size: 1.5rem; color: white">请点击右上角分享</span>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showDialog: false,
      // 显示指向右上角的蒙层
      showCover: false
    }
  },
  computed: {
    ...mapGetters(['memberId', 'openid'])
  },
  methods: {
    show() {
      this.showDialog = true
    },
    // 分享到群
    shareToGroup() {
      this.showCover = true
      this.postMessage('shareToGroup')
      wx.ready(() => {
        console.log('分享到朋友圈')
        wx.updateTimelineShareData({
          success: function () {
            console.log('分享成功')
          }
        })
      })
    },
    // 分享到好友
    shareToFriend() {
      this.showCover = true
      this.postMessage('shareToFriend')
      wx.ready(() => {
        console.log('分享到好友')
        wx.updateAppMessageShareData({
          success: function () {
            console.log('分享成功')
          }
        })
      })
    },
    // 通过postMessage传递信息，通知小程序分享时的操作
    postMessage(from) {
      wx.miniProgram.postMessage({
        data: {
          from: from, // 来源,区分是分享到群还是分享到好友
          shareType: 'onMenuShareAppMessage', // 分享类型
          openid: this.openid, // 用户openid
          memberId: this.memberId // 用户id
        }
      })
    },
    // 关注视频号
    followVideo() {
      console.log('关注视频号')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn:active {
  transform: scale(0.95);
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .block {
    width: 70%;
    position: relative;
    top: -3vh;
  }
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  .content {
    position: absolute;
    width: 78%;
    height: 42%;
    bottom: 9%;
    left: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
    img {
      margin-bottom: 1rem;
      border-radius: 0.7rem;
    }
  }
}
</style>
