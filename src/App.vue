<template>
  <div id="app">
    <keep-alive :include="keepAliveList">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  computed: {
    // 通过遍历路由表，获取需要缓存的页面，meta.keepAlive:true
    keepAliveList() {
      return this.$router.options.routes
        .filter((route) => route.meta && route.meta.keepAlive)
        .map((route) => route.name)
    }
  }
}
</script>

<style lang="scss"></style>
