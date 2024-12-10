<template>
  <div class="home">
    <Toothpaste v-if="step == 1" @complete="onToothpasteComplete" />
    <GetMaterial v-if="step == 2" @complete="onGetMaterialComplete" />
  </div>
</template>

<script>
import Toothpaste from '@/components/Toothpaste/index.vue'
import GetMaterial from '@/components/GetMaterial/index.vue'
export default {
  name: 'Home',
  components: {
    Toothpaste,
    GetMaterial
  },
  data() {
    return {
      step: 1
    }
  },
  methods: {
    onToothpasteComplete() {
      console.log('onToothpasteComplete')
      this.step = 2
    },
    onGetMaterialComplete() {
      console.log('onGetMaterialComplete')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background-image: url('../../assets/toothpaste/背景.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
