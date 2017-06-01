class Circle {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.r = Math.random() * 10 // 圆半径
    this.moveX = Math.random()
    this.moveY = Math.random()
  }

  // 画圆
  drawCircle (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 360)
    ctx.closePath()
    ctx.fillStyle = 'rgba(204, 204, 204, 0.3)'
    ctx.fill()
  }
  // 画直线
  drawLine (ctx, circle) {
    let dx = this.x - circle.x
    let dy = this.y - circle.y
    let d = Math.sqrt(dx * dx + dy * dy)
    // 距离很远的点，不做处理，为避免直线过多
    if (d < 150) {
      ctx.beginPath()
      ctx.moveTo(this.x, this.y) // 起始点
      ctx.lineTo(circle.x, circle.y) // 终止点
      ctx.closePath()
      ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)'
      ctx.stroke()
    }
  }
  // 圆圈移动(在可视范围内)
  move (w, h) {
    this.moveX = (this.x < w && this.x > 0) ? this.moveX : (-this.moveX)
    this.moveY = (this.y < h && this.y > 0) ? this.moveY : (-this.moveY)
    this.x += this.moveX / 2
    this.y += this.moveY / 2
  }

}

// 鼠标点移动画连接线
class CurrentCircle extends Circle {
  // constructor (x, y) {
  //   super(x, y)
  // }

  drawCircle (ctx) {
    ctx.beginPath()
    this.r = 8
    ctx.arc(this.x, this.y, this.r, 0, 360)
    ctx.closePath()
    ctx.fillStyle = 'rgba(65, 184, 131, .6)'
    ctx.fill()
  }
}

export {
  Circle,
  CurrentCircle
}
