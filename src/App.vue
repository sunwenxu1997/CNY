<template>
  <div id="app">
    <keep-alive :include="keepAliveList">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { wxAuth } from '@/utils/wx'
export default {
  computed: {
    // 通过遍历路由表，获取需要缓存的页面，meta.keepAlive:true
    keepAliveList() {
      return this.$router.options.routes.filter((route) => route.meta && route.meta.keepAlive).map((route) => route.name)
    }
  },
  created() {
    // 微信授权
    wxAuth()
  }
}
</script>

<style lang="scss"></style>
