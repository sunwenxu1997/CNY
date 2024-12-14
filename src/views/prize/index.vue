<template>
  <div class="prize">
    <img class="prize-background" src="../../assets/prize/底图.png" alt="" />
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
.prize {
  width: 100%;
  height: 100%;
  position: absolute;
  .prize-background {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    position: absolute;
    top: 0;
  }
}
.prize-content {
  width: 90%;
  height: 49%;
  position: absolute;
  left: 5%;
  bottom: 9%;
  box-sizing: border-box;
  padding: 1rem;
  // background: yellow;
  // opacity: 0.5;
  .no-prize {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 50%;
    color: #5a5a5a;
  }
}
</style>
