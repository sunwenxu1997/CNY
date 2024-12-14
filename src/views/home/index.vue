<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="2500" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in backgroundList" :key="index">
        <img class="background-img" :src="item.url" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="buttons">
      <div class="col-1">
        <img class="btn" style="margin-bottom: -0.5rem" src="@/assets/首页-马上开好运按钮.png" alt="" @click="clickOpenLuck" />
      </div>
      <div class="col-2">
        <img class="btn" src="@/assets/首页-我的奖品.png" alt="" @click="clickMyPrize" />
        <img class="btn" src="@/assets/首页-活动规则.png" alt="" />
      </div>
      <div class="col-3">
        <img class="btn" style="width: 20%; margin-top: 0.6rem" src="@/assets/首页-中奖公示.png" alt="" />
        <img style="width: 60%" src="@/assets/首页-活动时间.png" alt="" />
        <img style="width: 90%" src="@/assets/首页-图片供参考.png" alt="" />
      </div>
    </div>
    <div v-show="showCover" class="cover-count">
      <div class="cover-content">
        <img src="@/assets/首页-主题.png" alt="" />
        <div class="cover-title">
          <img src="@/assets/首页-星星.png" alt="" />
          <span>今天还可以开好运{{ lotteryCount }}次</span>
        </div>
        <div style="margin-top: 0.5rem; font-size: 1.2rem">
          <span style="font-size: 1.5rem !important">{{ countDown }}</span>
          秒后开始获取好运...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLotteryCount } from '@/api/user'
import { gsap } from 'gsap'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      backgroundList: [
        { url: require('../../assets/首页-白鹿背景.png') },
        { url: require('../../assets/首页-麦玲玲背景.png') },
        { url: require('../../assets/首页-牙膏背景.png') },
        { url: require('../../assets/首页-牙刷背景.png') }
      ],
      lotteryCount: 1,
      showCover: false,
      // 倒计时
      countDown: 3
    }
  },
  computed: {
    ...mapGetters(['memberId'])
  },
  mounted() {
    this.getLotteryCount()
  },
  methods: {
    // 获取用户可抽奖次数
    getLotteryCount() {
      getLotteryCount({
        memberId: this.memberId
      }).then((res) => {
        this.lotteryCount = res.data
      })
    },
    // 点击开好运
    clickOpenLuck() {
      if (!this.checkUser()) return
      if (this.lotteryCount <= 0) {
        this.$toast('您的抽奖次数已用完')
        return
      } else {
        this.showCover = true
        gsap.from('.cover-count', {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            let timer = setInterval(() => {
              this.countDown--
              if (this.countDown <= 0) {
                clearInterval(timer)
                this.showCover = false
                this.countDown = 3
                this.$router.push('/play')
              }
            }, 1000)
          }
        })
      }
    },
    // 点击我的奖品
    clickMyPrize() {
      if (!this.checkUser()) return
      this.$router.push('/prize')
    },
    // 检验用户是否注册小程序会员
    checkUser() {
      if (!true) {
        this.$toast('请先注册小程序会员')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  //   overflow: hidden;
  position: absolute;
  .my-swipe {
    width: 100vw;
    height: 100%;
  }
  .background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .buttons {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 0 0 3% 0;
    .btn:active {
      transform: scale(0.95);
    }
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
    }
    .col-1,
    .col-2,
    .col-3 {
      margin: 0 auto;
    }
    .col-1,
    .col-2 {
      display: flex;
      width: 70%;
    }
    .col-2 {
      justify-content: space-between;
      padding: 0 5%;
      position: relative;
      z-index: 5;
      img {
        width: 45%;
      }
    }
    .col-3 img {
      margin-top: 0.3rem;
    }
  }
}
.cover-count {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  backdrop-filter: blur(10px);
  .cover-content {
    width: 90%;
    color: #fffadc;
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    top: -3vh;
    font-family: 'MEllanPRC-Xbold';
    text-shadow: 0 0 10px #dc372b !important;
    img {
      width: 100%;
    }
  }
  .cover-title {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: -2rem;
      left: 0;
    }
  }
}
</style>
