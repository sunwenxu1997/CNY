<template>
  <div>
    <!-- 退出登录 -->
    <van-button @click="logout">退出登录</van-button>
    <h1 v-for="item in 20">{{item}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style></style>
