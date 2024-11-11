<template>
  <div id="app" :class="{ 'app-has-tabbar': isShowTabbar }">
    <van-tabbar v-if="isShowTabbar" v-model="active">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        @click="toSkip(item.name)"
      >
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
    <keep-alive :include="keepAliveList">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'Home',
      tabbarList: [
        { name: 'Follw', icon: 'like', text: '关注列表' },
        { name: 'Home', icon: 'newspaper', text: '关注预览' },
        { name: 'Report', icon: 'bars', text: '报表目录' }
      ]
    }
  },
  watch: {
    $route(to) {
      this.active = to.name
    }
  },
  computed: {
    // 通过路由名称，根据白名单匹配是否展示tabbar
    isShowTabbar() {
      return ['Home', 'Follw', 'Report'].includes(this.$route.name)
    },
    // 通过遍历路由表，获取需要缓存的页面，meta.keepAlive:true
    keepAliveList() {
      return this.$router.options.routes
        .filter((route) => route.meta && route.meta.keepAlive)
        .map((route) => route.name)
    }
  },
  methods: {
    // 跳转路由
    toSkip(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss">
.app-has-tabbar {
  height: calc(100% - 50px) !important;
}
</style>
