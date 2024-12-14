<template>
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
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    show() {
      this.showDialog = true
    },
    // 分享到群
    shareToGroup() {
      wx.updateAppMessageShareData({
        title: '分享到群',
        desc: '分享到群',
        link: 'http://www.baidu.com',
        imgUrl: 'http://www.baidu.com',
        success: function () {
          console.log('分享到群成功')
        }
      })
    },
    // 分享到好友
    shareToFriend() {
      console.log('分享到好友')
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
