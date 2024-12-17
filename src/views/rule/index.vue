<template>
  <div class="app-content-100vh">
    <img class="title" src="@/assets/rule/活动规则@2x.png" alt="" />
    <div class="content">
        <p>尊敬的用户你好!</p>
        <p>1.活动时间：2021年6月1日-2021年6月30日。</p>
        <p>2.活动规则：用户每天有一次抽奖机会，用户点击“马上开好运”按钮，即可参与抽奖，抽奖结果以实际抽奖结果为准。</p>
        <p>3.奖品设置：一等奖1名，二等奖2名，三等奖3名，四等奖4名，五等奖5名，六等奖6名，七等奖7名，八等奖8名，九等奖9名，十等奖10名。</p>
        <p>4.奖品发放：中奖用户请在活动结束后的7个工作日内联系客服领取奖品，逾期未领取视为自动放弃。</p>
        <p>5.本活动最终解释权归本公司所有。</p>
        <p>3.奖品设置：一等奖1名，二等奖2名，三等奖3名，四等奖4名，五等奖5名，六等奖6名，七等奖7名，八等奖8名，九等奖9名，十等奖10名。</p>
        <p>4.奖品发放：中奖用户请在活动结束后的7个工作日内联系客服领取奖品，逾期未领取视为自动放弃。</p>
        <p>5.本活动最终解释权归本公司所有。</p>
    </div>
  </div>
</template>

<script>
export default {}
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
  .content {
    width: 90%;
    height: 55%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background: #f9e9a4;
    border-radius: 0.5rem;
    overflow-y: auto;
    color: #dc372b;
    font-weight: 500;
    .no-prize {
      text-align: center;
      font-size: 0.8rem;
      margin-top: 50%;
      color: #5a5a5a;
    }
  }
}
</style>
