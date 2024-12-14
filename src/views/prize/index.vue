<template>
  <div class="app-content-100vh">
    <img class="title" src="@/assets/prize/我的奖品字.png" alt="" />
    <div class="prize-content">
      <div class="prize-list" v-if="prizeList.length > 0">
        <div class="prize-item" v-for="(item, index) in prizeList" :key="index">
          <img :src="item.url" alt="" />
        </div>
      </div>
      <div class="no-prize" v-else>还没有获取奖品哦~</div>
    </div>
  </div>
</template>

<script>
import { getMyLotteryList } from '@/api/user'
export default {
  data() {
    return {
      prizeList: []
    }
  },
  methods: {
    // 获取我的奖品列表
    getMyLotteryList() {
      getMyLotteryList().then((res) => {
        this.prizeList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
  background-image: url('../../assets/prize/底图.png');
  .title {
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-top: 33vh;
  }
}
.prize-content {
  width: 90%;
  height: 49%;
  margin: 0.5rem auto;
  box-sizing: border-box;
  padding: 0.5rem;
  background: #f9e9a4;
  border-radius: 0.5rem;
  .no-prize {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 50%;
    color: #5a5a5a;
  }
}
</style>
