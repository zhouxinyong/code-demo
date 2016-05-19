<template >
  <h3>Count is {{ value }}</h3>
</template>

<script>
  import { getCount } from '../vuex/getters'
  export default {
    vuex: {
      getters: {
        value: getCount
      }
    }
  }
</script>
