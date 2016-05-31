<template >
  <button type="button" name="button" class="btn btn-info" @click='increment'>Increment +1</button>
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
