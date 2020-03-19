<template>
  <div class="sidebar-logo-container">
    <router-link class="sidebar-logo-link" to="/">
      <i class="sidebar-logo el-icon-s-management"></i>
      <h1 class="sidebar-title">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SidebarLogo'
})
export default class extends Vue {
  private title = '动态路由权限管理'
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      margin-right: 5px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      vertical-align: middle;
    }
  }
}
</style>
