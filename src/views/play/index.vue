<template>
  <div class="app-content-100vh">
    <!-- <Toothpaste v-if="step == 1" @complete="onToothpasteComplete" />
    <GetMaterial v-if="[2, 3].includes(step)" @complete="onGetMaterialComplete" /> -->
    <Bamboo v-if="step == 3" @complete="onBambooComplate" />
  </div>
</template>

<script>
import Toothpaste from '@/components/Toothpastes/index.vue'
import GetMaterial from '@/components/GetMaterial/index.vue'
import Bamboo from '@/components/Bamboo/index.vue'
export default {
  name: 'Play',
  components: {
    Toothpaste,
    GetMaterial,
    Bamboo
  },
  data() {
    return {
      step: 3
    }
  },
  methods: {
    onToothpasteComplete() {
      console.log('onToothpasteComplete')
      this.step = 2
    },
    onGetMaterialComplete() {
      console.log('onGetMaterialComplete')
      this.step = 3
    },
    onBambooComplate() {
      console.log('onBambooComplate')
      // this.step = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content-100vh {
  background-image: url('../../assets/toothpaste/背景.png');
}
</style>
