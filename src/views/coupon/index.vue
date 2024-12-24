<template>
  <div class="app-content-100vh">
    <div class="content">
      <img src="@/assets/coupon.png" alt="" />
      <p class="hint">长按并识别小程序码领券</p>
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
  display: grid;
  place-content: center;
  .content {
    margin-top: 10vh;
    width: 60vw;
    img {
      width: 100%;
    }
    .hint{
        text-align: center;
        font-size: 1rem;
        color: #fff;
    }
  }
}
</style>
