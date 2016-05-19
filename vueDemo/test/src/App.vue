<template >
  <div >
    <display></display>
    <increment></increment>
    <reduce></reduce>
  </div>
</template>

<script>
  import Display from './components/Display.vue'
  import Increment from './components/Increment.vue'
  import Reduce from './components/Reduce.vue'
  import store from './vuex/store'

  export default {
    components: {
      Display,
      Increment,
      Reduce
    },
    store
  }
</script>
