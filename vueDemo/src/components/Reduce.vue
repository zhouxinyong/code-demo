<template >
  <button type="button" name="button" class="btn" @click='reduceNumber'>reduce -1</button>
</template>

<script>
  import { reduceNumber } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        reduceNumber: reduceNumber
      }
    }
  }
</script>
