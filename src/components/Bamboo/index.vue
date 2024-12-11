<template>
  <div id="Bamboo">
    <div class="bamboo-box">
      <div class="b-body">
        <img src="@/assets/bamboo/桶顶.png" alt="" />
        <img class="shen" src="@/assets/bamboo/桶身.png" alt="" />
      </div>
      <div class="b-zhuqian">
        <!-- <img src="@/assets/bamboo/桃花.png" alt="" />
        <img src="@/assets/bamboo/锦鲤.png" alt="" />
        <img src="@/assets/bamboo/元宝.png" alt="" />
        <img src="@/assets/bamboo/桃花.png" alt="" />
        <img src="@/assets/bamboo/锦鲤.png" alt="" />
        <img src="@/assets/bamboo/元宝.png" alt="" />
        <img src="@/assets/bamboo/桃花.png" alt="" />
        <img src="@/assets/bamboo/锦鲤.png" alt="" />
        <img src="@/assets/bamboo/元宝.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data() {
    return {
      elements: ['桃花.png', '锦鲤.png', '元宝.png']
    }
  },
  mounted() {
    this.initZhuqian()
  },
  methods: {
    // 初始化随机竹签
    initZhuqian() {
      const _this = this
      const zhuqian = document.querySelector('.b-zhuqian')
      for (let i = 0; i < 8; i++) {
        const img = document.createElement('img')
        img.src = require(`../../assets/bamboo/${_this.elements[gsap.utils.random(0, 2, 1)]}`)
        gsap.set(img, {
          width: '20%',
          position: 'absolute',
          transformOrigin: '50% 100%',
          x: gsap.utils.random(-20, 20, 10),
          y: gsap.utils.random(-120, -50, 10),
          rotation: gsap.utils.random(-20, 20)
        })
        zhuqian.appendChild(img)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#Bamboo {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.523);
  display: grid;
  place-content: center;
}
.bamboo-box {
  width: 50vw;
  position: relative;
  .b-body {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      display: block;
      position: relative;
    }
    .shen {
      margin-top: -8%;
      z-index: 10;
    }
  }
  .b-zhuqian {
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      //   transform-origin: 50% 100%;
    }
  }
}
</style>
