<template>
  <div id="material">
    <div class="prize">
      <img class="prize-hint" src="@/assets/getMaterial/恭喜获得.png" alt="" />
      <img class="prize-lable" :src="prizeItem.label" alt="" />
      <img class="prize-item" :src="prizeItem.url" :style="`top:${prizeItem.top}px`" alt="" />
    </div>
    <div class="dot-box">
      <img class="guang-huan" src="@/assets/getMaterial/背景光.png" alt="" />
      <div class="dot" v-for="(item, index) in elementsList" :key="index">
        <img :src="item.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// 获取元素动画组件 锦鲤，桃花，元宝
import { gsap } from 'gsap'
export default {
  name: 'GetMaterial',
  data() {
    return {
      elements: ['锦鲤元素.png', '桃花元素.png', '元宝元素.png'],
      elementsList: [],
      prizeItem: {},
      prizeList: [
        {
          label: require(`../../assets/getMaterial/锦鲤签.png`),
          url: require(`../../assets/getMaterial/锦鲤.png`),
          top: -30
        },
        {
          label: require(`../../assets/getMaterial/桃花签.png`),
          url: require(`../../assets/getMaterial/桃花.png`)
        },
        {
          label: require(`../../assets/getMaterial/元宝签.png`),
          url: require(`../../assets/getMaterial/元宝.png`)
        }
      ]
    }
  },
  created() {
    this.initElements()
  },
  mounted() {
    // console.log(gsap.utils.random(-100, 100, 1))

    gsap.from('#material', { duration: 0.5, opacity: 0, y: '100vh' })
    this.playElements()
    this.getPrize()
  },
  methods: {
    // 创建素材背景元素，漩涡状动画
    initElements() {
      // 创建50个元素到elementsList
      for (let i = 0; i < 30; i++) {
        const sizeIndex = gsap.utils.random(0, 2, 1)
        const url = require(`../../assets/${this.elements[sizeIndex]}`)
        this.elementsList.push({ url })
      }
    },
    // 播放元素动画
    playElements() {
      const dotList = document.querySelectorAll('.dot')
      dotList.forEach((item, index) => {
        const scale = gsap.utils.random(0.3, 5)
        gsap.to(item, {
          duration: 400 / scale,
          opacity: 1,
          rotateZ: -1500,
          scale: scale,
          delay: gsap.utils.random(-50, 0),
          repeat: -1,
          repeatRefresh: true
        })
      })
    },
    // 获取奖品
    getPrize() {
      // 随机获得一个奖品
      const index = gsap.utils.random(0, 2, 1)
      this.prizeItem = this.prizeList[index]
      // 光环按照步骤依次转动
      gsap.to('.guang-huan', { rotate: 360, duration: 3, ease: 'steps(10)', repeat: -1 })
      gsap.to(['.prize-item', '.prize-lable', '.prize-hint'], { duration: 1, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)', delay: 0.5 })
      // 延迟后开奖
      setTimeout(() => {
        this.$emit('complete')
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
#material {
  width: 100vw;
  height: 100vh;
  position: absolute;
}
.dot-box {
  width: 100vw;
  height: 100vh;
  position: absolute;
  perspective: 2000px;
  .guang-huan {
    position: absolute;
    width: 90vw;
    height: 90vw;
    top: calc(50% - 45vw);
  }
  .dot {
    position: absolute;
    z-index: -1;
    left: calc(50% - 25px -150px);
    top: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform-origin: 150px 0;
    transform-style: preserve-3d;
    opacity: 0.8;
    transform: scale(0);
    img {
      width: 100%;
    }
  }
}
.prize {
  width: 45vw;
  height: 45vw;
  position: absolute;
  z-index: 10;
  top: calc(50% - 25vw);
  left: calc(50% - 25vw);
  display: grid;
  place-items: center;
  img {
    width: 100%;
    position: relative;
    display: block;
  }
  .prize-hint {
    position: absolute;
    top: -70%;
    transform: scale(1.2);
    opacity: 0;
    transform: scale(0);
  }
  .prize-item {
    opacity: 0;
    transform: scale(0);
  }
  .prize-lable {
    position: absolute;
    bottom: -50%;
    opacity: 0;
  }
}
</style>
