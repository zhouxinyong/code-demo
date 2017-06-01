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
    return {}
  },
  mounted: function () {
    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    let circles = []
    let currentCircle = new CurrentCircle(0, 0)
    console.log(currentCircle)
    let draw = () => {
      ctx.clearRect(0, 0, w, h)
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
      requestAnimationFrame(draw)
    }

    let init = (num) => {
      for (let i = 0; i < num; i++) {
        circles.push(new Circle(Math.random() * w, Math.random() * h))
      }
      draw()
    }

    window.addEventListener('load', init(60))
    window.addEventListener('resize', () => {
      circles = []
      init(60)
      console.log(circles)
    })
    window.onmousemove = (e) => {
      e = e || window.event
      currentCircle.x = e.clientX
      currentCircle.y = e.clientY
    }

    window.onmouseout = () => {
      currentCircle.x = null
      currentCircle.y = null
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
