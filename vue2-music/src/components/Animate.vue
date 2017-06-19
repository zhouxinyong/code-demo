<template lang="html">
  <div class="demo">
    <button @click="shuffle" class="button">shuffle</button>
    <button @click="add" class="button">Add</button>
    <button @click="remove" class="button">Remove</button>
    <button @click="testApi" class="button">test API</button>
    <transition-group name="list" tag="p">
      <span
      v-for="item in items"
      :key="item"
      class="list-item"
      >
      {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import WangyiApi from 'simple-netease-cloud-music'
const musicApi = new WangyiApi()
export default {
  name: 'animate-list',
  data: function () {
    return {
      items: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ],
      nextNum: 10
    }
  },
  methods: {
    shuffle: function () {
      this.items = shuffle(this.items)
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    testApi: function () {
      musicApi.search('退后').then((value) => {
        console.log(value)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .demo {
    margin: 20px;

  }
  .button {

  }
  .list-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
