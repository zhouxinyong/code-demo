<template>
  <transition name="fade"
  @after-enter="transitionComplete"
  >
    <div class="">
      <div @click="change">
        {{ msg }}
      </div>
      <page-content :msg="msg">
        <p slot="p1">test1</p>
        <p slot="p2">test22</p>
        <p>1234</p>
      </page-content>
      <animate-demo></animate-demo>
      <div class="back">
        <router-link to="/">
          <div class="button">
            返回
          </div>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import pageContent from '@/components/Content.vue'
import animateDemo from '@/components/Animate'
// console.log(pageContent)
export default {
  name: 'about',
  data () {
    return {
      msg: 'hello World!'
    }
  },
  components: { pageContent, animateDemo },
  methods: {
    change: function () {
      this.msg = 'hello k2!'
      console.log(this)
      this.$nextTick(function () {
        console.log(this)
        console.log(this.msg)
      })
    },
    transitionComplete: function (el) {
      console.log(el)
    }
  },
  beforeCreated: function () {
    console.log('beforeCreated')
  },
  created () {
    console.log('created')
    // console.log(this.$router)
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },

  beforeUpdate: function () {
    console.log('beforeUpdate')
  },

  updated: function () {
    console.log('updated')
  },

  activated: function () {
    console.log('activated')
  },

  deactivated: function () {
    console.log('deactivated')
  },

  beforeDestroy: function () {
    console.log('beforeDestroy')
  },

  destroyed: function () {
    console.log('destroyed')
  }

}
</script>

<style lang="css" scoped>
  .back {
    margin-top: 10px;
    text-align: center;
  }
  .button {
    display: inline-block;
    height: 40px;
    width: 80px;
    line-height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #d58f82;
    cursor: pointer;
    color: #fff;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
</style>
