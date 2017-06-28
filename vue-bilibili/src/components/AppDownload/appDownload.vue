<template lang="html">
  <div class='app-link'>
		<div class='app-logo'></div>
		<div class='app-intro text-overflow'>
			<p>上bilibili客户端</p>
			<p>高清视频 离线观看 新番电影一览无余</p>
		</div>
		<a class='app-down-btn' href='###'>下载</a>
		<div class='close-btn'></div>
	</div>
</template>

<script>
import appDownloadShow from '@/utils/appDownloadShow'
export default {
  name: 'appDownload',
  mounted: function () {
    console.log('mounted')
    appDownloadShow('.app-link', '.app-link .close-btn')
  }
}
</script>

<style lang="css">
  .app-link {
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: 0;
    background: #de698c;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;

    .app-logo {
      min-width: 36px;
      min-height: 36px;
      margin: 0 11px;
      background: url('./images/app_logo.v3.png');
      background-size: cover;
      border: 1px solid #fff;
      border-radius: 4px;
    }
    .app-intro {
      min-width: 230px;
      max-width: 230px;
      color: #fff;

      p:nth-of-type(1) {
        font-size: 14px;
      };
      p:nth-of-type(2) {
        font-size: 11px;
        color: rgba(255,255,255,0.7);
      };
    }
    .app-down-btn {
      display: block;
      min-width: 60px;
      min-height: 20px;
      line-height: 20px;
      padding: 6px 0;
      border-radius: 6px;
      background: #fff;
      text-align: center;
      color: #de689c;
      font-size: 13px;
    }
    .close-btn {
      min-width: 22px;
      min-height: 22px;
      margin-left: 1px;
      background: url('./images/close_icon.png') no-repeat;
      background-size: 13px;
      background-position: 50%;
    }
  }
</style>
