<template>
  <div>
    <!-- logo -->
    <sidebar-logo />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in $router.options.routes" :key="route.path" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
    SidebarLogo
  }
})
export default class extends Vue {}
</script>

<style lang="scss">
.sidebar-container {
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100% - 50px);
}

.el-menu {
  border: none;
}
</style>
