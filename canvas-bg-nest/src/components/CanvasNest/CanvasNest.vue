<template lang="html">
  <div class="canvas-container">
    <h2 class="canvas-title">仿知乎动态粒子背景效果</h2>
    <canvas id="canvas"></canvas>
  </div>

</template>

<script>
import { Circle, CurrentCircle } from '@/utils/canvas'
export default {
  name: 'canvas-nest',
  data: function () {
    return {
      circles: []
    }
  },
  mounted: function () {
    const that = this
    let canvas = document.querySelector('#canvas')
    this.ctx = canvas.getContext('2d')
    this.w = canvas.width = canvas.offsetWidth
    this.h = canvas.height = canvas.offsetHeight
    this.currentCircle = new CurrentCircle(0, 0)
    this.initHandeler = () => {
      that.init(60)
    }
    this.resizeHandeler = () => {
      that.circles = []
      that.init(60)
      console.log(that.circles)
    }
    window.addEventListener('load', this.initHandeler)
    window.addEventListener('resize', this.resizeHandeler)
    window.onmousemove = (e) => {
      e = e || window.event
      that.currentCircle.x = e.clientX
      that.currentCircle.y = e.clientY
    }

    window.onmouseout = () => {
      that.currentCircle.x = null
      that.currentCircle.y = null
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resizeHandeler)
  },
  methods: {
    draw: function () {
      const ctx = this.ctx
      const w = this.w
      const h = this.h
      const circles = this.circles
      const currentCircle = this.currentCircle
      this.ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h)
        circles[i].drawCircle(ctx)
        for (let j = i + 1; j < circles.length; j++) {
          circles[i].drawLine(ctx, circles[j])
        }
      }

      if (currentCircle.x) {
        currentCircle.drawCircle(ctx)
        for (let k = 1; k < circles.length; k++) {
          currentCircle.drawLine(ctx, circles[k])
        }
      }
      requestAnimationFrame(this.draw)
    },

    init: function (num) {
      for (let i = 0; i < num; i++) {
        this.circles.push(new Circle(Math.random() * this.w, Math.random() * this.h))
      }
      this.draw()
    }
  }
}
</script>

<style lang="css" >
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #fff;
  }

  canvas {
    height: 100%;
    display: block;
    width: 100%;
  }
  #app {
    height: 100%;
    margin: 0;
  }
  .canvas-container {
    height: 100%;
  }

  .canvas-title {
    position: absolute;
    top: 0;
    left: 45%;
    color: rgb(65, 184, 131);
  }
</style>
