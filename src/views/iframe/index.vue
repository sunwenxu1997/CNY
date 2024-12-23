<template>
  <div class="cny-iframe">
    <iframe :src="url"></iframe>
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

<style lang="scss">
.cny-iframe {
  iframe {
    width: 100vw;
    height: 100vh;
    margin: 0;
    border: none;
    img {
      display: block;
      width: 100vw;
    }
  }
}
</style>
