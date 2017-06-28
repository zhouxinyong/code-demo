// 底部悬浮窗口显示隐藏
function appLinkShow (appLinkEleSelector, closeEleSelector) {
  let appLink = document.querySelector(appLinkEleSelector)
  let closeBtn = document.querySelector(closeEleSelector)
  let isScroll = false

  closeBtn.addEventListener('touchstart', () => {
    appLink.style.display = 'none'
    window.removeEventListener('scroll', scrollHandler)
  })

  let scrollHandler = function () {
    if (isScroll === true) {
      return
    }

    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop

    // 滚到底部则隐藏
    // 页面总高度 - 视口上方因滚动隐藏的区域  = 视口高度  则可以认为滚动到了底部
    // 加上appLink的高度再加100px 意思是 滚动到appLink元素顶部再上100px的地方就隐藏
    if (document.body.scrollHeight - scrollTop <= window.innerHeight + appLink.offsetHeight + 100) {
      appLink.style.transform = 'translateY(100%)'
    } else {
      appLink.style.transform = 'translateY(0)'
    }
    isScroll = true
  // console.log(body.scrollHeight-body.scrollTop,window.innerHeight+appLink.offsetHeight)

    setTimeout(() => {
      isScroll = false
    }, 100)
  }

  window.addEventListener('scroll', scrollHandler)
}

export default appLinkShow
