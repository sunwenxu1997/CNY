<template>
  <div class="app-content-100vh">
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
        <img class="btn" src="@/assets/首页-活动规则.png" alt="" @click="clickRule" />
      </div>
      <div class="col-3">
        <div style="min-height: 1.5rem">
          <img
            v-if="lotteryList.length"
            class="btn"
            style="width: 20%; margin-top: 0.6rem"
            src="@/assets/首页-中奖公示.png"
            alt=""
            @click="clickLotteryList"
          />
        </div>
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
    <van-overlay :lock-scroll="false" z-index="5" :show="showLotteryList" @click="showLotteryList = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <img class="title" src="@/assets/首页-终极大奖名单.png" alt="" />
          <img class="close" src="@/assets/关闭小按钮.png" alt="" @click="showLotteryList = false" />
          <div class="content">
            <!-- 表格内容 表头 中奖手机号 中奖时间 -->
            <table>
              <thead>
                <tr>
                  <th>中奖手机号</th>
                  <th>中奖时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in 20" :key="index">
                  <td>138****2791</td>
                  <td>2024-12-08 14:39</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </van-overlay>
    <ShareActivity ref="share-activity" />
  </div>
</template>

<script>
import { getLotteryCount, getLotteryList } from '@/api/user'
import { gsap } from 'gsap'
import { mapGetters } from 'vuex'
import ShareActivity from '@/components/ShareActivity'
export default {
  name: 'Home',
  components: { ShareActivity },
  data() {
    return {
      backgroundList: [
        { url: require('../../assets/首页-白鹿背景.png') },
        { url: require('../../assets/首页-麦玲玲背景.png') },
        { url: require('../../assets/首页-牙膏背景.png') },
        { url: require('../../assets/首页-牙刷背景.png') }
      ],
      lotteryCount: 0,
      lotteryList: [1],
      showLotteryList: false,
      showCover: false,
      // 倒计时
      countDown: 3
    }
  },
  computed: {
    ...mapGetters(['memberId'])
  },
  created() {
    this.init()
  },
  mounted() {},
  methods: {
    async init() {
      //   this.getLotteryCount()
      //   this.getLotteryList()
    },
    // 获取用户可抽奖次数
    getLotteryCount() {
      return new Promise((resolve, reject) => {
        getLotteryCount({ memberId: this.memberId })
          .then((res) => {
            this.lotteryCount = res.data
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 点击开好运
    async clickOpenLuck() {
      if (!this.checkUser()) return
      
      // 每次点击开好运时，获取最新的抽奖次数
    //   await this.getLotteryCount()

      if (this.lotteryCount <= 0) {
        this.$refs['share-activity'].show()
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
      if (!this.memberId) {
        this.$toast('请先注册小程序会员')
        return false
      }
      return true
    },
    clickRule() {
      this.$router.push('/rule')
    },
    // 获取中奖列表
    getLotteryList() {
      getLotteryList().then((res) => {
        this.lotteryList = res.data
      })
    },
    clickLotteryList() {
      this.showLotteryList = true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .block {
    width: 78%;
    position: relative;
  }
  img {
    width: 100%;
    display: block;
  }
  .close {
    position: absolute;
    right: -8%;
    top: -8%;
    width: 20%;
    z-index: 5;
  }
  .content {
    position: absolute;
    width: 76%;
    height: 70%;
    top: 20%;
    left: 12%;
    color: #fffadc;
    font-family: 'MEllanPRC-Xbold';
    font-size: 0.8rem;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    table {
      width: 100%;
      thead {
        font-weight: bold;
      }
      th,
      td {
        padding: 0.3rem;
      }
    }
  }
}
</style>
