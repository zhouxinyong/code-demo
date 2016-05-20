<template >
  <h3>Count is {{ value }}</h3>

</template>

<script>
  import { getCount } from '../vuex/getters'
  import $ from 'jquery'
  export default {
    vuex: {
      getters: {
        value: getCount
      }
    }
  }
  $(function () {
    console.log(111)
  })
</script>
