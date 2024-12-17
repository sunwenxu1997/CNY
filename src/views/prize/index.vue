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
          <div class="prize-num">X{{ item.count }}</div>
        </div>
      </div>
      <div class="no-prize" v-else>还没有获取奖品哦~</div>
    </div>
  </div>
</template>

<script>
import { getMyLotteryList } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
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
    // 获取我的奖品列表
    getMyLotteryList() {
      getMyLotteryList({ memberId: this.memberId }).then((res) => {
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
    margin-top: 30vh;
    margin-bottom: 0.5rem;
  }
}
.prize-content {
  width: 90%;
  height: 49%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.5rem;
  background: #f9e9a4;
  border-radius: 0.5rem;
  overflow-y: auto;
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
  font-size: 1.5rem;
  width: 100%;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  .prize-img {
    min-width: 6.5rem;
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
  }
}
</style>
