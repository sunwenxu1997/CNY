<template>
  <div id="toothpaste">
    <div class="content">
      <img style="width: 90%" class="title" src="@/assets/toothpaste/好运文字.png" alt="" />
      <div class="t-body">
        <img style="width: 40%" @click="clickBody" src="@/assets/toothpaste/整个牙膏.png" alt="" />
        <div class="small-hands">
          <img class="click" src="@/assets/toothpaste/点击光效.png" alt="" />
          <img class="hands" src="@/assets/toothpaste/点击小手.png" alt="" />
        </div>
      </div>
      <img style="width: 90%; margin-top: 5%" class="hao-yun" src="@/assets/toothpaste/狂点牙膏释放好运.png" alt="" />
    </div>
  </div>
</template>

<script>
// 引入gsap
import { gsap } from 'gsap'
export default {
  methods: {
    clickBody() {
      // 隐藏其他文字
      gsap.to('.title', { opacity: 0, duration: 0.5 })
      // 隐藏好运文字
      gsap.to('.hao-yun', { opacity: 0, duration: 0.5 })
      // 隐藏点击光效
      gsap.to('.small-hands', { opacity: 0, duration: 0.5 })

      // 点击牙膏，通过gsap.timeline控制牙膏上移
      gsap.timeline().to('.t-body img', { y: '-74%', duration: 0.5 })
    }
  }
}
</script>

<style lang="scss" scoped>
#toothpaste {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('../../assets/toothpaste/背景.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
</style>
