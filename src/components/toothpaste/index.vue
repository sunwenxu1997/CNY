<template>
  <div id="toothpaste" v-if="isAllShow">
    <div class="content">
      <img style="width: 80%" class="title" src="@/assets/toothpaste/好运文字.png" alt="" />
      <div class="t-body">
        <!-- 拼接的牙膏，用于开盖 -->
        <div class="pin-jie-body">
          <img style="width: 40%" src="@/assets/toothpaste/牙膏身体.png" alt="" />
          <img style="width: 11%; margin-top: -3%; z-index: 2" src="@/assets/toothpaste/牙膏头.png" alt="" />
          <img class="gai-zi" style="width: 24%; margin-top: -7%; left: -6px" src="@/assets/toothpaste/盖子.png" alt="" />
          <img style="width: 0.8%; margin-top: -14.5%; right: -44px" src="@/assets/toothpaste/衔接.png" alt="" />
          <!-- 喷射素材 -->
          <div class="bubble-box">
            <div :class="`bubble ${item.size}`" v-for="(item, index) in dotList" :key="index">
              <img :src="item.url" alt="" />
            </div>
          </div>
        </div>
        <!-- 整个牙膏，用于点击 -->
        <img class="zheng-ge" style="width: 40%" @click="checkoutClick" src="@/assets/toothpaste/整个牙膏.png" alt="" />
        <!-- 点击小手 -->
        <div class="small-hands">
          <img class="click" src="@/assets/toothpaste/点击光效.png" alt="" />
          <img class="hands" src="@/assets/toothpaste/点击小手.png" alt="" />
        </div>
      </div>
      <img style="width: 90%; margin-top: 5%" class="hao-yun" src="@/assets/toothpaste/狂点牙膏释放好运.png" alt="" />
    </div>
    <!-- 牙膏喷射，进度条 -->
    <div class="progress">
      <div>
        <div class="progress-title">
          <span style="top: 5px; letter-spacing: -0.5rem">{{ progressTimeCount }}</span>
          <span style="font-size: 3rem; margin-left: 1rem">秒</span>
        </div>
        <img style="transform: scale(1.2); margin-bottom: 15px; margin-top: -1.5rem" src="@/assets/toothpaste/倒计时.png" alt="" />
      </div>
      <div class="box">
        <div class="frame"></div>
        <div class="value">
          <span style="margin-right: 5px">{{ progressValue }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 牙膏动画组件
// 引入gsap
import { gsap } from 'gsap'
import { randomNumber } from '@/utils'
export default {
  name: 'Toothpaste',
  data() {
    return {
      isAllShow: true, // 是否显示整个牙膏动画,用于后期销毁动画
      progressValue: 0,
      progressTimeCount: 10,
      dotNum: 200,
      dotList: [],
      elements: ['锦鲤元素.png', '桃花元素.png', '元宝元素.png'],
      clickTimer: null,
      clickCount: 0,
      minClickCount: 10 // 最少点击次数，点击次数大于等于这个值才会触发
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.playProgress()
    // })
  },
  methods: {
    // 检验用户连续点击次数是否大于等于minClickCount
    checkoutClick() {
      this.clickTimer && clearInterval(this.clickTimer)
      this.clickCount++
      // 如果用户在1秒内没有连续点击minClickCount次，点击次数持续递减
      // 创建一个定时器，每秒减少一次点击次数
      this.clickTimer = setInterval(() => {
        if (this.clickCount > 0) this.clickCount--
      }, 500)
      if (this.clickCount >= this.minClickCount) {
        clearInterval(this.clickTimer)
        this.clickCount = 0
        this.clickBody()
      }
    },
    clickBody() {
      this.initBubble()
      // 隐藏其他文字
      gsap.to('.title', { opacity: 0, duration: 0.5 })
      // 隐藏好运文字
      gsap.to('.hao-yun', { opacity: 0, duration: 0.5 })
      // 隐藏点击光效
      gsap.to('.small-hands', { opacity: 0, duration: 0.5 })

      const tl = gsap.timeline()
      // 点击牙膏，通过gsap.timeline控制牙膏上移
      tl.to(['.zheng-ge', '.pin-jie-body'], { y: '-33vh', duration: 0.5 })
      tl.to('.pin-jie-body', { opacity: 1, duration: 0 })
      tl.to('.zheng-ge', { opacity: 0, duration: 0 })
      // 打开盖子
      tl.to('.gai-zi', {
        rotate: -120,
        duration: 0.5,
        transformOrigin: '100% 0%',
        onComplete: () => {
          this.playBubble()
          gsap.to('.progress', {
            opacity: 1,
            duration: 1,
            onComplete: () => {
              this.playProgress()
            }
          })
        }
      })
    },
    initBubble() {
      const sizes = ['small', 'medium', 'large']
      for (let i = 0; i < this.dotNum; i++) {
        const sizeIndex = randomNumber(0, 2)
        const size = sizes[sizeIndex]
        const speed = 3 - sizeIndex
        const url = require(`../../assets/${this.elements[sizeIndex]}`)
        this.dotList.push({ size: `${size}Bubble`, url, speed })
      }
    },
    // 播放吐出的泡泡
    playBubble() {
      // console.log(this.dotList)
      const startY = 0,
        endY = 1000

      this.dotList.forEach((item, i) => {
        const { speed } = item
        const bubble = document.querySelectorAll('.bubble')[i]
        const element = document.querySelectorAll('.bubble img')[i]
        gsap.to(element, { repeat: -1, duration: 5, rotate: 360, repeatDelay: Math.random() * 5 })
        const particles = gsap.timeline({})
        // timeScale 控制动画速度
        gsap.to(particles, { timeScale: 0.5 })
        particles.set(bubble, { y: startY, x: 0, scale: 0.5, duration: 0, opacity: 1 }, 0)
        particles.to(
          bubble,
          {
            duration: speed,
            opacity: 0.8,
            scale: randomNumber(1, 5),
            y: endY,
            x: randomNumber(-500, 500),
            repeatDelay: Math.random() * 2,
            repeat: -1
          },
          Math.random() * 2
        )
      })
    },
    playProgress() {
      // 通过gsap控制progressValue进度条 随机增加进度 10秒内增加到100%后停止
      const _this = this
      const proxy = { value: 0 }
      gsap.to(proxy, {
        duration: _this.progressTimeCount,
        value: 100,
        onUpdate: () => {
          // 向上取整，会改变原始传入值
          _this.progressValue = Math.ceil(proxy.value)
          gsap.to('.value', { width: `${_this.progressValue}%`, duration: 0.3 })
        },
        onComplete: () => {
          // 隐藏进度条
          gsap.to('.progress', { opacity: 0, duration: 0.5 })
          // 整体牙膏动画结束，统一上移，渐变消失
          gsap.to('#toothpaste', {
            y: '-100vh',
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              // 执行完成后，销毁所有牙膏动画 包括泡泡
              _this.isAllShow = false
              // 整体牙膏动画结束，返回完成方法
              _this.$emit('complete')
            }
          })
        }
      })

      // 实现倒计时
      const timer = setInterval(() => {
        this.progressTimeCount--
        if (this.progressTimeCount <= 1) {
          clearInterval(timer)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'MEllanPRC-Xbold';
}
#toothpaste {
  width: 100%;
  height: 100vh;
  position: absolute;
  display: grid;
  place-items: center;
  user-select: none;

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .content {
    position: relative;
    width: 100%;
    box-sizing: border-box;

    .title {
      margin-bottom: 13%;
    }

    .t-body {
      position: relative;
    }

    .small-hands {
      width: 25%;
      position: absolute;
      top: 50%;
      right: 28%;
      pointer-events: none;

      img {
        position: absolute;
      }

      .hands {
        left: 43%;
        top: 1em;
        animation: hands 1s infinite;
      }

      // 手指想要点击的动画
      @keyframes hands {
        0% {
          transform: translateX(0);
        }

        50% {
          transform: translateX(0.5em);
        }

        100% {
          transform: translateX(0);
        }
      }

      .click {
        animation: click 1s infinite;
      }

      @keyframes click {
        0% {
          transform: scale(0.5);
        }

        50% {
          transform: scale(0.8);
        }

        100% {
          transform: scale(0.5);
        }
      }
    }
  }
}
.zheng-ge:active {
  transform: scale(0.98);
}
.pin-jie-body {
  position: absolute;
  pointer-events: none;
  opacity: 0;

  img {
    position: relative;
    z-index: 5;
  }
}
.bubble-box {
  --smallSize: 20px;
  --mediumSize: 30px;
  --largeSize: 40px;
  position: relative;
  width: 10%;
  margin: 0 auto;
  pointer-events: none;

  .bubble {
    border-radius: 50%;
    position: absolute;
    opacity: 0;
  }
  .smallBubble {
    width: var(--smallSize);
    height: var(--smallSize);
    left: calc(50% - var(--smallSize) / 2);
  }
  .mediumBubble {
    width: var(--mediumSize);
    height: var(--mediumSize);
    left: calc(50% - var(--mediumSize) / 2);
  }
  .largeBubble {
    width: var(--largeSize);
    height: var(--largeSize);
    left: calc(50% - var(--largeSize) / 2);
  }
}
.progress {
  width: 70%;
  position: absolute;
  bottom: 5%;
  left: 15%;
  opacity: 0;
  .box {
    height: 20px;
    position: relative;
  }
  .box .frame {
    width: 103%;
    height: 100%;
    background-image: url('../../assets/toothpaste/进度框.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: -1.5%;
  }
  .box .value {
    width: 0%;
    height: 60%;
    position: absolute;
    border-radius: 5px;
    background-image: url('../../assets/toothpaste/读取进度.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: 0.65rem;
    color: #6b3000;
    text-align: right;
    top: 20%;
  }
  .progress-title {
    font-size: 5rem;
    color: #fffadc;
    text-shadow: 0 0 5px #f9e9a4;
    text-align: center;
    span {
      position: relative;
    }
  }
}
</style>
