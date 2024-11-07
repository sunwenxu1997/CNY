<template>
  <div>
    <!-- 按钮点击计算加1 -->
    <p>{{count}}</p>
    <van-button @click="count++">点击计算</van-button>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style></style>
