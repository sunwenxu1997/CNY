<template>
  <div id="Bamboo">
    <img class="bamboo-title" src="@/assets/bamboo/好运加载中.png" alt="" />
    <div class="bamboo-box">
      <div class="b-body">
        <img src="@/assets/bamboo/桶顶.png" alt="" />
        <img class="shen" src="@/assets/bamboo/桶身.png" alt="" />
      </div>
      <div class="b-zhuqian"></div>
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
    gsap.from('#Bamboo', {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        this.play()
      }
    })
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
          left: gsap.utils.random(80, 100, 20),
          top: gsap.utils.random(-100, -50, 10),
          rotation: gsap.utils.random(-20, 20),
          y: 0
        })
        zhuqian.appendChild(img)
      }
    },
    play() {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic' } })
      tl.to('.bamboo-box', { rotate: -5 })
      tl.to(
        '.bamboo-box',
        {
          y: 40,
          repeat: 2,
          duration: 1,
          repeatDelay: -0.5,
          ease: 'elastic',
          onStart: () => {
            playZhuQian()
          }
        },
        '<'
      )
      tl.to('.bamboo-box', { y: 0, rotate: 5 })
      tl.to(
        '.bamboo-box',
        {
          y: 40,
          repeat: 2,
          duration: 1,
          repeatDelay: -0.5,
          ease: 'elastic',
          onStart: () => {
            playZhuQian()
          }
        },
        '>-0.5'
      )
      tl.to('.bamboo-box', {
        y: 0,
        rotate: 0,
        onComplete: () => {
          this.$emit('complete')
        }
      })
      function playZhuQian() {
        gsap.utils.toArray('.b-zhuqian img').forEach((item) => {
          gsap.from(item, {
            y: gsap.utils.random(-30, -20, 10),
            duration: 1,
            repeat: 2,
            repeatDelay: -0.5,
            ease: 'elastic'
          })
        })
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
  backdrop-filter: blur(8px);
}
.bamboo-title {
  width: 50vw;
  position: absolute;
  top: 10%;
  left: calc(50% - 25vw);
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
