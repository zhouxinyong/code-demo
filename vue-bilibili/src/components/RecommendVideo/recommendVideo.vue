<template lang="html">
  <div class="main-container">
    <div class="cont-head">
			<a href="###">
				<div class="cont-title">
					<span class="index-sprite index-sprite-hot"></span>
					<p>热门推荐</p>
				</div>
				<div class="cont-more">
					<span class="index-sprite index-sprite-rank"></span>
					<p class="rank-txt">排行榜</p>
				</div>
			</a>
		</div>
    <p class="loading-info" v-if="data === null">正在加载...</p>
    <ul class="content-list" v-else>
      <li v-for="(item, index) in recommendData" :key="index" class="content-item">
        <a href="#" @click="videoDetail(item.aid)">\
          <div class="video-cover" :data-img="item.pic"></div>
          <p class="video-name">{{ item.title }}</p>
          <div class="video-info">
						<div class="play-num">
							<span class="index-sprite index-sprite-play"></span>
							<p>{{ item.playNum }}</p>
						</div>
            <div class="barrage-num">
							<span class="index-sprite index-sprite-barrage"></span>
							<p>{{ item.barrageNum }}</p>
						</div>
					</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import imageLazyLoad from '@/utils/imageLazyLoad'
export default {
  name: 'recommendVideo',
  data: function () {
    return {
      data: null
    }
  },
  created: function () {
    this.getRecommendData()
  },
  computed: {
    recommendData: function () {
      console.log(this.data)
      if (this.data) {
        // 取前4个
        console.log(this.data)
        const resultList = this.data.list
        const filterKeys = Object.keys(resultList).slice(0, 4)
        const filterList = filterKeys.map((key, i) => {
          const item = resultList[key]
          item.playNum = item.play >= 10000
            ? (item.play / 10000).toFixed(1) + '万'
            : item.play
          item.barrageNum = item.video_review >= 10000
            ? (item.video_review / 10000).toFixed(1) + '万'
            : item.video_review
          return item
        })
        return filterList
      }
      return []
    }
  },
  methods: {
    getRecommendData: async function () {
      const result = await axios('http://weizijie.cc:3000/indexRecommend')
      this.data = JSON.parse(result.data.data).recommend
      console.log(result)
      this.$nextTick(() => {
        imageLazyLoad('.content-item div.video-cover')
      })
    }
  }

}
</script>

<style lang="css">
  .index-sprite {
  	background: url('../../assets/index@2x.png');
  	background-size: 30px 582px;
  }
/* 主要内容 start */
  .loading-info {
    text-align: center;
    padding: 50px 0;
    font-size: 16px;
    color: #666;
  }
  .main-container {
    background: #fff;
    margin-bottom: 12px;

  /* 标题部分 start */
  .cont-head {
    height: 44px;
    line-height: 44px;

    a {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #444;
      padding: 0 12px;

      div {
        display: flex;
        align-items: center;

        &.cont-title p {
          margin-left: 5px;
        }
        &.cont-more p {
          margin: 0 5px 0 0;
          color: #999;

          &.rank-txt {
            margin-left: 5px;
            font-size: 13px;
            color: #ffb30f;
          }
        }
      }

      span {
        display: block;
        width: 20px;
        height: 20px;

        &.index-sprite-hot {
          background-position: -5px -335px;
        }
        &.index-sprite-rank {
          background-position: -5px -185px;
        }
        &.index-sprite-live {
          background-position: -5px -275px;
        }
        &.index-sprite-arrow {
          background-position: -5px -515px;
        }
        &.index-sprite-bangumi {
          background-position: -5px -485px;
        }
        &.index-sprite-douga {
          background-position: -5px -425px;
        }
        &.index-sprite-music {
          background-position: -5px -215px;
        }
        &.index-sprite-dance {
          background-position: -5px -455px;
        }
        &.index-sprite-game {
          background-position: -5px -365px;
        }
        &.index-sprite-technology {
          background-position: -5px -155px;
        }
        &.index-sprite-life {
          background-position: -5px -5px;
        }
        &.index-sprite-kichiku {
          background-position: -5px -305px;
        }
        &.index-sprite-fashion {
          background-position: -5px -35px;
        }
        &.index-sprite-ent {
          background-position: -5px -63px;
        }
        &.index-sprite-teleplay {
          background-position: -5px -125px;
        }
        &.index-sprite-movie {
          background-position: -5px -245px;
        }
        &.index-sprite-advertise {
          background-position: -5px -95px;
        }
        &.index-sprite-guoman {
          background: url('../../assets/index_guoman.png');
          background-size: contain;
        }
      }

    }
  }
  /* 标题部分 end */

  /* 主体列表部分 start */
  .content-list {
    padding: 0 6px;

    li {
      &.content-item {
        width: 50%;
        display: inline-block;
        padding: 0 6px 24px;
        box-sizing: border-box;
        vertical-align: top;

        a { display: block; }

        /* 默认容器样式 start*/
        div.video-cover {
          width: 100%;
          height: 107px;
          background-image: url('../../assets/img_loading.png');
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 0.05rem;
          margin-bottom: 0.05rem;

          div.cover-img {
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            opacity: 0;
            transition: all 0.3s ease;
            border-radius: 0.05rem;
            border: 1px solid #ddd;
            box-sizing: border-box;
          }
        }
        p.video-name {
          max-height: 0.36rem;
          font-size: 0.13rem;
          color: #444;
          line-height: 1.4;
          overflow: hidden;
        }
        div.video-info {
          display: flex;
          padding: 1px 0;

          div {
            width: 50%;
            display: flex;
            align-items: center;

            p {
              font-size: 0.13rem;
              color: #999;
            }

            span {
              display: block;
              width: 15px;
              height: 11px;
              margin-right: 2px;

              &.index-sprite-play {
                background-position: -5px -545px;
              }
              &.index-sprite-barrage {
                background-position: -5px -566px;
              }
            }
          }
        }
        /* 默认容器样式 end*/

        /* 正在直播容器 start */
        .user {
          position: relative;
          margin-bottom: 0.06rem;

          div.face {
            width: 0.42rem;
            height: 0.42rem;
            border: 0.02rem solid #fff;
            border-radius: 50%;
            box-sizing: border-box;
            position: absolute;
            top: 0; left: 0.07rem;
            transform: translateY(-60%);

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          p.name{
            font-size: 0.13rem;
            color: #444;
            margin-left: 0.56rem;
          }
          div.online{
            display: inline-block;
            width: 0.48rem;
            height: 0.2rem;
            line-height: 0.2rem;
            background: #ccc;
            border-radius: 0.06rem;
            font-size: 0.12rem;
            color: #fff;
            text-align: center;
          }
          p.intro{
            display: inline-block;
            width: calc(100% - 0.56rem);
            font-size: 0.13rem;
            color: #999;
            margin-left: 0.08rem;
            vertical-align: middle;
          }
        }
      }
      /* 番剧更新容器 start */
      &.bangumi-item {
        width: 33.3%;
        text-align: center;

        div.video-cover {
          height: 1.5rem;
        }
        p.bangumi-name {
          font-size: 0.13rem;
          color: #444;
          margin: 2px 0;
        }
        p.bangumi-update-to {
          font-size: 0.12rem;
          color: #de698c;
        }
      }
      /* 番剧更新容器 end */
    }
  }
  /* 主体列表部分 end */
  }
</style>
