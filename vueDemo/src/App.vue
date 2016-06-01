<template >
  <div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">1111</div>
    <div role="tabpanel" class="tab-pane" id="profile">2222</div>
    <div role="tabpanel" class="tab-pane" id="messages">3333</div>
    <div role="tabpanel" class="tab-pane" id="settings">4444</div>
  </div>

</div>
  <div  class="container">
    <display></display>
    <increment></increment>
    <reduce></reduce>
    <div style="margin:10px;"></div>
    <button type="button" class="btn btn-lg btn-danger" data-toggle="popover"
            title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
              点我弹出/隐藏弹出框
    </button>
  </div>

</template>

<script>
  import Display from './components/Display.vue'
  import Increment from './components/Increment.vue'
  import Reduce from './components/Reduce.vue'
  import store from './vuex/store'
  import $ from 'jquery'
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  export default {
    components: {
      Display,
      Increment,
      Reduce
    },
    store
  }
</script>
