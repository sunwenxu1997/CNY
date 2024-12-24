<template>
  <div class="app-content-100vh">
    <div class="content">
      <img :src="url" alt="" />
      <p class="hint">长按并保存图片</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = decodeURIComponent(this.$route.query.url)
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
  background-size: 100% !important;
  background-image: url('../../assets/toothpaste/背景.png');
  background-position: center;
  display: grid;
  place-content: center;
  .content {
    width: 60vw;
    img {
      width: 100%;
      border-radius: 1rem;
    }
    .hint {
      text-align: center;
      font-size: 1rem;
      color: #fff;
    }
  }
}
</style>
