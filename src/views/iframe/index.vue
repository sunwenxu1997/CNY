<template>
  <iframe :src="url"></iframe>
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
</style>
