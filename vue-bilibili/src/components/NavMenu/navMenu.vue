<template lang="html">
  <nav class="menu">
    <ul class="menu-list">
      <li :class="pageAvtive === '0' ? 'menu-active' : ''">
        <a href="#">首页</a>
      </li>
      <li :class="pageAvtive === '1' ? 'menu-active' : ''">
        <a href="#">频道</a>
      </li>
      <li :class="pageAvtive === '2' ? 'menu-active' : ''">
        <a href="#">直播</a>
      </li>
      <li :class="pageAvtive === '3' ? 'menu-active' : ''">
        <a href="#">排行</a>
      </li>
      <li :class="pageAvtive === '4' ? 'menu-active' : ''">
        <a href="#">我的</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  props: ['pageAvtive']
}
</script>

<style lang="css" scpoed>
  .menu {
    height: 41px;
    line-height: 40px;
    padding: 0 8px;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    box-sizing: border-box;

    ul.menu-list {
      height: 41px;
      display: flex;
      justify-content: space-between;

      li {
        width: 60px;
        font-size: 16px;
        text-align: center;
        box-sizing: border-box;

        a {
          display: block;
          color: #444;
        }
      }
      li.menu-active {
        border-bottom: 4px solid #de698c;

        a{
          color: #de698c;
        }
      }
    }
  }
</style>
