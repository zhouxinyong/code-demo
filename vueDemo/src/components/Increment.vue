<template >
  <button type="button" name="button" @click='increment'>Increment +1</button>
</template>

<script>
  import { IncrementCounter } from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        increment: IncrementCounter
      }
    }
  }
</script>
