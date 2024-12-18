<template>
  <div class="app-content-100vh">
    <img class="title" src="@/assets/prize/我的奖品字.png" alt="" />
    <div class="prize-content">
      <div class="prize-list" v-if="prizeList.length > 0">
        <div class="prize-item" v-for="(item, index) in prizeList" :key="index">
          <div class="prize-img">
            <img :src="item.awardUrl" alt="" />
          </div>
          <div class="prize-name">{{ item.awardName }}</div>
          <div class="prize-btn" v-if="item.received">
            <van-button round type="info" size="small" color="#f6d959" @click="toReceive(item)"
              >点击领取
              <wx-open-launch-weapp
                v-if="item.awardType == 3"
                id="launch-btn"
                :appid="appid"
                :path="path"
                @error="handleErrorFn"
                @launch="handleLaunchFn"
              >
                <script type="text/wxtag-template">
                  <style>.btn { opacity:0 }</style>
                  <button class="btn">打开小程序</button>
                </script>
              </wx-open-launch-weapp>
            </van-button>
          </div>
          <div class="prize-num" v-else>X{{ item.count }}</div>
        </div>
      </div>
      <div class="no-prize" v-else>还没有获取奖品哦~</div>
    </div>
  </div>
</template>

<script>
import { getMyLotteryList, receivePrize } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      path: 'packages/user/coupon/detail/index?id=32458411&alias=eu0t4ubq&type=promocard&sign=bf4d353aeed0dd77eb5a1b4371d6fc7d&shopAutoEnter=1',
      appid: 'wx0f162b9d4a52f7d6',
      prizeList: []
    }
  },
  computed: {
    ...mapGetters(['memberId'])
  },
  mounted() {
    this.getMyLotteryList()
  },
  methods: {
    handleLaunchFn(e) {
      console.log('handleLaunchFn', e)
    },
    handleErrorFn(e) {
      console.log('handleErrorFn', e)
    },
    // 获取我的奖品列表
    getMyLotteryList() {
      getMyLotteryList({ memberId: this.memberId }).then((res) => {
        this.prizeList = res.data
      })
    },
    // 领取奖品，和动画执行完领取奖品方法一致
    toReceive(row) {
      const { awardType, awardId, awardUrl } = row
      // 奖品类型 1 微信红包封面 2 手机壁纸 3 KA优惠卷 4 实物奖品
      if (awardType == 4) {
        this.$router.push({ name: 'Address', query: { id: awardId } })
      } else {
        // 非实物直接领取
        receivePrize({ memberId: this.memberId, awardId: awardId }).then((res) => {
          if (awardType == 1) {
            window.location.href =
              'https://support.weixin.qq.com/cgi-bin/mmsupport-bin/showredpacket?receiveuri=NU_nEdwNEVuFfL&check_type=2#wechat_redirect'
          } else if (awardType == 2) {
            window.location.href = awardUrl
          } else if (awardType == 3) {
          } else {
            this.$toast('领取成功')
            this.$router.replace({ name: 'Home' })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
  background-size: 100% !important;
  background-image: url('../../assets/prize/底图.png');
  background-position: center;
  .title {
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-top: 25vh;
    margin-bottom: 0.5rem;
  }
}
.prize-content {
  width: 90%;
  height: 55%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.5rem;
  background: #f9e9a4;
  border-radius: 0.5rem;
  overflow-y: auto;
  border: 3px solid #ed655b;
  .no-prize {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 50%;
    color: #5a5a5a;
  }
}
.prize-item {
  background: #d72316;
  border-radius: 1rem;
  display: flex;
  color: #f9e9a4;
  font-family: 'MEllanPRC-Xbold';
  font-size: 1rem;
  width: 100%;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  .prize-img {
    min-width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    img {
      height: 3.5rem;
    }
  }
  .prize-name {
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  .prize-num {
    max-width: 15%;
    // background: red;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
  }
  .prize-btn {
    min-width: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
