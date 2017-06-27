<template lang="html">
  <div :class="{ 'loading-cover': true, 'loaded': !loading }">
    <div class="loading-text">
      (´・ω・｀)正在加载...
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="css" scpoed>
  .loading-cover {
    background: #f8f8f8;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    .loading-text {
      width: 100%;
      color: #666;
      text-align: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .loaded {
    opacity: 0;
    visibility: hidden;
    /*display: none;*/
  }
</style>
