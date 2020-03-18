<template>
  <div class="layout-container">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-content">
      <navbar class="navbar-container"></navbar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.layout-container {
  @include clearfix;
  width: 100%;
  height: 100%;
  position: relative;
  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: $sideBarWidth;
    background: red;
  }
  .main-content {
    background: yellow;
    min-height: 100%;
    margin-left: $sideBarWidth;
    position: relative;

    .navbar-container {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - #{$sideBarWidth});
      background: blue;
      height: $navbarHeight;
      color: #fff;
    }

    .app-main {
      padding-top: $navbarHeight;
    }
  }
}
</style>
