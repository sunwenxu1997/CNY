<template>
  <div id="app">
    <img v-if="!notBackWhiteList.includes(currentRouteName)" @click="toBack" class="to-back" src="./assets/to-back.png" alt="" />
    <keep-alive :include="keepAliveList">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { wxAuth } from '@/utils/wx'
export default {
  data() {
    return {
      // 白名单控制返回按钮是否显示
      notBackWhiteList: ['Home']
    }
  },
  computed: {
    // 通过遍历路由表，获取需要缓存的页面，meta.keepAlive:true
    keepAliveList() {
      return this.$router.options.routes.filter((route) => route.meta && route.meta.keepAlive).map((route) => route.name)
    },
    // 获取当前路由名称
    currentRouteName() {
      return this.$route.name
    }
  },
  created() {
    // 微信授权
    wxAuth()
  },
  methods: {
    // 返回上一页
    toBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.to-back {
  width: 1.8rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 20;
}
</style>
