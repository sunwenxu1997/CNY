<template>
  <div class="app-content-100vh">
    <Toothpaste v-if="step == 1" @complete="onToothpasteComplete" />
    <GetMaterial v-if="[2, 3].includes(step)" @complete="onGetMaterialComplete" :belongTo="lotteryItem.belongTo" />
    <Bamboo v-if="step == 3" @complete="onBambooComplate" />
    <van-overlay z-index="80" :show="showLottery">
      <div class="wrapper" @click.stop>
        <div class="block">
          <img class="box" src="@/assets/prize/开奖弹窗.png" alt="" />
          <div class="content">
            <img class="title" src="@/assets/getMaterial/恭喜获得.png" alt="" />
            <div class="name">{{ lotteryItem.awardName }}</div>
            <div class="item">
              <img :src="lotteryItem.awardUrl" alt="" />
            </div>
            <div class="btns">
              <div class="btn" @click="toReceive"><img src="@/assets/prize/领取好运按钮@3x.png" alt="" /></div>
              <div class="btn" @click="openAgain"><img src="@/assets/prize/再开一次按钮@3x.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Toothpaste from '@/components/Toothpastes/index.vue'
import GetMaterial from '@/components/GetMaterial/index.vue'
import Bamboo from '@/components/Bamboo/index.vue'
import { lottery, receivePrize, getLotteryCount } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'Play',
  components: {
    Toothpaste,
    GetMaterial,
    Bamboo
  },
  data() {
    return {
      step: 1,
      showLottery: false,
      lotteryItem: {
        id: null,
        awardType: null, // 奖品类型 1 微信红包封面 2 手机壁纸 3 KA优惠卷 4 实物奖品
        awardName: '',
        awardUrl: '',
        belongTo: '' // 奖品归属 1 桃花 2 元宝 3锦鲤
      }
    }
  },
  computed: {
    ...mapGetters(['memberId'])
  },
  methods: {
    onToothpasteComplete() {
      console.log('onToothpasteComplete')
      // 牙膏动画完成后获取奖品
      lottery({ memberId: this.memberId }).then((res) => {
        this.lotteryItem = res.data
        this.step = 2
      })
    },
    onGetMaterialComplete() {
      console.log('onGetMaterialComplete')
      this.step = 3
    },
    onBambooComplate() {
      console.log('onBambooComplate')
      this.step = 4
      this.showLottery = true
    },
    async openAgain() {
      const { data } = await getLotteryCount({ memberId: this.memberId })
      if (data > 0) {
        this.reset()
      } else {
        this.$toast('您的抽奖次数已用完')
        this.$router.replace({ name: 'Home' })
      }
    },
    toReceive() {
      const { awardType, id } = this.lotteryItem
      // 奖品类型 1 微信红包封面 2 手机壁纸 3 KA优惠卷 4 实物奖品
      if (true || awardType == 4) {
        this.$router.push({ name: 'Address', query: { id: id } })
      } else {
        // 非实物直接领取
        receivePrize({ memberId: this.memberId, awardId: id })
          .then((res) => {
            this.$toast('领取成功')
            this.$router.replace({ name: 'Home' })
          })
          .catch((err) => {
            this.$router.replace({ name: 'Home' })
          })
      }
    },
    // 重新抽奖
    reset() {
      this.showLottery = false
      this.step = 1
      this.lotteryItem = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
  background-image: url('../../assets/toothpaste/背景.png');
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .block {
    width: 90%;
    position: relative;
    .box {
      width: 100%;
      display: block;
    }
    .content {
      position: absolute;
      width: 76%;
      height: 70%;
      top: 20%;
      left: 12%;
      // background: red;
      color: #fffadc;
      font-family: 'MEllanPRC-Xbold';
      font-size: 0.8rem;
      -webkit-overflow-scrolling: touch;
      .title {
        display: block;
        width: 80%;
        margin: 0 auto;
      }
      .name {
        width: 80%;
        min-height: 1.8rem;
        margin: 0 auto;
        margin-top: -0.3rem;
        margin-bottom: 0.5rem;
        text-align: center;
        font-size: 1.3rem;
      }
      .item {
        width: 80%;
        height: 50%;
        // background: red;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 80%;
          display: inline-block;
        }
      }
      .btns {
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .btn {
          width: 50%;
          &:active {
            transform: scale(0.95);
          }
          img {
            width: 100%;
            pointer-events: none;
          }
        }
      }
    }
  }
}
</style>
