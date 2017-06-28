<template lang="html">
  <div class="home-page">
    <main-header></main-header>
    <nav-menu pageAvtive="0"></nav-menu>
    <loading-cover :loading="false"></loading-cover>
    <banner></banner>
    <index-content></index-content>
    <app-download></app-download>
    <!-- <footer-container></footer-container> -->
  </div>
</template>

<script>
import MainHeader from '@/components/Header/header'
import NavMenu from '@/components/NavMenu/navMenu'
import LoadingCover from '@/components/LoadingCover/loadingCover'
import FooterContainer from '@/components/Footer/footer'
import Banner from '@/components/Banner/banner'
import AppDownload from '@/components/AppDownload/appDownload'
import IndexContent from '@/components/IndexContent/indexContent'
export default {
  name: 'home',
  components: {
    MainHeader,
    NavMenu,
    Banner,
    LoadingCover,
    FooterContainer,
    AppDownload,
    IndexContent
  }
}
</script>

<style lang="css">
</style>
