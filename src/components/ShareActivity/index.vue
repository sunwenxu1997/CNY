<template>
  <div>
    <van-overlay :lock-scroll="false" z-index="5" :show="showDialog" @click="showDialog = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <img style="width: 80%" src="@/assets/shareActivity/大礼包@2x.png" alt="" />
          <img style="width: 80%; margin-top: -8%" class="title" src="@/assets/shareActivity/再玩一次@2x.png" alt="" />
          <img style="margin-top: 0%" src="@/assets/shareActivity/弹窗@2x.png" alt="" />
          <div class="content">
            <div>
              <img class="btn" src="@/assets/shareActivity/分享群正常.png" alt="" @click="shareToGroup" />
              <img class="btn" src="@/assets/shareActivity/分享好友正常.png" alt="" @click="shareToFriend" />
              <img class="btn" src="@/assets/shareActivity/关注视频号正常.png" alt="" @click="followVideo" />
            </div>
          </div>
          <img class="close" src="@/assets/关闭小按钮.png" alt="" @click="showDialog = false" />
        </div>
      </div>
    </van-overlay>
    <van-overlay z-index="5" :show="showCover" @click="showCover = false">
      <div class="wrapper">
        <div class="right-top-hint">
          <!-- 提示点击右上角分享给朋友 -->
          <img src="@/assets/shareActivity/share_icon.png" alt="" />
          <p>点击右上角分享</p>
          <p>成功邀请老会员 <span class="count">+1</span> ，新会员 <span class="count">+2</span> </p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { shareCount } from '@/api/user'
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
      this.postMessage(1)
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
      this.postMessage(1)
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
    postMessage(type) {
      wx.miniProgram.postMessage({
        data: {
          type: type, // 1 邀请微信好友/群
          openid: this.openid, // 用户openid
          memberId: this.memberId // 用户id
        }
      })
      // 用户只要点击了分享，就算分享成功
      shareCount({ memberId: this.memberId, type: type }, false).then((res) => {
        // 判断返回文字是否包含成功，如果包含则不提示
        if (!res.data.includes('成功')) {
          this.$toast(res.data)
        }
      })
    },
    // 关注视频号
    followVideo() {
      wx.miniProgram.redirectTo({
        url: '/packages/pages/cny-camp-christmas/index?toVideo=true'
      })
      // 跳转视频号，只要用户点击了，就算分享成功
      shareCount({ memberId: this.memberId, type: 4 })
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
    bottom: 10%;
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
  .close {
    position: absolute;
    left: 40%;
    bottom: -10%;
    width: 20%;
    z-index: 5;
  }
}
.right-top-hint {
  position: absolute;
  top: 2vh;
  right: 16vw;
  font-size: 1.1rem;
  color: white;
  text-align: right;
  font-family: 'MEllanPRC-Xbold';
  p{
    margin: 0.5rem 0;
  }
  .count{
    font-size: 1.8rem;
    font-weight: bold;
    color: #fffadc;
    text-shadow: 0 0 5px #dc372b;
  }
  img {
    width: 2rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
}
</style>
