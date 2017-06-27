<template lang="html">
  <div class="banner" v-if="loading">
    <div class='load-tip'>
      <p>正在请求数据...</p>
    </div>
  </div>
  <div class="banner" v-else>
    <ul class="slide" >
      <li>
        <a :href="firstData.link">
          <img :src="firstData.img" :alt="firstData.alt" />
        </a>
      </li>
      <li v-for="(item, index) in bannerData" :key="index">
        <a :href="item.url || item.link">
          <img :src="item.pic || item.img" :alt="item.name || item.title" />
        </a>
      </li>
      <li>
        <a :href="lastData.link">
          <img :src="lastData.img" :alt="lastData.alt" />
        </a>
      </li>
    </ul>
    <ul class="slide-active">
      <li v-for="(item, index) in bannerData" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import slideBanner from '@/utils/slideBanner'
export default {
  name: 'banner',
  data: function () {
    return {
      bannerData: [],
      loading: false
    }
  },
  created: function () {
    this.loading = true
    this.getData()
  },
  computed: {
    // 主页与直播页返回的数据名不同，需要处理一下
    firstData: function () {
      const firstBanner = this.bannerData[0]
      return {
        img: firstBanner.pic || firstBanner.img,
        alt: firstBanner.name || firstBanner.title,
        link: firstBanner.url || firstBanner.link
      }
    },
    lastData: function () {
      const lastBanner = this.bannerData[this.bannerData.length - 1]
      return {
        img: lastBanner.pic || lastBanner.img,
        alt: lastBanner.name || lastBanner.title,
        link: lastBanner.url || lastBanner.link
      }
    }
  },
  methods: {
    getData: async function () {
      const result = await axios.get('http://weizijie.cc:3000/indexBanner')
      this.bannerData = JSON.parse(result.data.data).data
      this.loading = false
      this.$nextTick(() => {
        slideBanner('.slide', '.slide-active li', 'active')
      })
    }
  }
}
</script>

<style lang="css">
  .banner {
    width: 100%;
    height: 120px;
    background: rgba(0,0,0,0.8);
    margin-bottom: 12px;
    overflow: hidden;
    position: relative;

    ul.slide {
      height: 100%;
      width: 100%;
      display: flex;

      li {
        min-width: 375px;
        height: 100%;
        background: #000;

        a {
          display: block;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    ul.slide-active {
      display: flex;
      position: absolute;
      left: 50%;
      bottom: 6px;
      transform: translate(-50%,0);
      padding: 0 5px;
      border-radius: 10px;
      background: rgba(0,0,0,0.5);

      li {
        width: 6px;
        height: 6px;
        margin: 3px;
        border-radius: 50%;
        background: #fff;
      }
      li.active {
        background: #de698c;
      }
    }

    .load-tip {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #f8f8f8;
      text-align: center;

      p {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #666;
      }
    }
  }
</style>
