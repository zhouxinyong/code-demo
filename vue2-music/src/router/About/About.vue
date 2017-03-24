<template lang="html">
  <div class="">
    <div>
      {{ msg }}
    </div>
    <div class="back">
      <router-link to="/">
        <div class="button">
          返回
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'hello World!'
    }
  }
}
</script>

<style lang="css">
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

</style>
