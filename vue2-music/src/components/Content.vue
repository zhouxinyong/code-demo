<template>
  <div>
    <slot name="p2"></slot>
    <slot name="p1"></slot>
    <slot></slot>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'page-content',
  data: function () {
    return {}
  },
  props: ['msg'],
  created: function () {
    console.log(this)
    // console.log(this.$props)
  }
}
</script>

<style lang="css">
</style>
