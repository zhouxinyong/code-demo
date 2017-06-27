<template lang="html">
  <footer class="footer">
    <ul class="footer-menu">
      <li>
        <a href="#" class="to-computer">
          <i class="icons icons-computer"></i>
          <span>电脑版</span>
        </a>
      </li>
      <li>
				<a class='to-app' href='###'>
					<i class='icons icons-app'></i>
					<span>客户端</span>
				</a>
			</li>
			<li>
				<a class='to-top' href='###'>
					<i class='icons icons-top'></i>
					<span>返回顶部</span>
				</a>
			</li>
    </ul>
    <p>哔哩哔哩弹幕视频网 沪ICP备13002172号-3</p>
		<p>信息网络传播视听节目许可证：0910417</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scpoed>
  .icons {
    background: url('../../assets/ui_2.png');
    background-size: 400px;
  }
  .footer {
    padding: 0 10px;
    color: #aaa;
    font-size: 13px;
    text-align: center;

    ul.footer-menu {
      display: flex;
      margin-bottom: 13px;

      li {
        flex: 1;
        box-sizing: border-box;
        &+li {
          border-left: 1px solid #ddd;
        }
        a {
          display: block;
          width: 100%;
          line-height: 20px;
          color: #666;
          i {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            vertical-align: top;

            &.icons-computer {
              background-position: -210px -10px;
            }
            &.icons-app {
              background-position: -210px -59px;
            }
            &.icons-top {
              background-position: -210px -109px;
            }
          }
        }
      }
    }
    p {
      margin-bottom: 13px;
    }
  }
</style>
