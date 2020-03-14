<template>
  <div>
    <!-- logo -->
    <sidebar-logo :collapse="isCollapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'
import variables from '@/styles/_variables.scss'
import { RouteConfig } from 'vue-router'
import { omit } from '../../../utils/tool'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
    SidebarLogo
  }
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get routes() {
    const secondRoutes: RouteConfig[] = (this.$router as any).options.routes
    // 生成只有二级的路由表
    const tempRoutes: RouteConfig[] = JSON.parse(JSON.stringify(secondRoutes))
    tempRoutes.forEach(item => {
      if (item.children) {
        item.children.forEach(item1 => {
          if (item1.children) {
            omit(item1 as any, ['children'])
          }
        })
      }
    })
    return tempRoutes
  }

  get variables() {
    return variables
  }
  // 高亮侧栏
  get activeMenu() {
    const route = this.$route
    const { meta, path } = route
    let activePathList = path.split('/')
    let activePath = ''
    if (activePathList.length > 2) {
      activePath = `/${activePathList[1]}/${activePathList[2]}`
    } else {
      activePath = `/${activePathList[1]}`
    }
    return activePath
  }

  get isCollapse() {
    return !this.sidebar.opened
  }
}
</script>

<style lang="scss">
.sidebar-container {
  box-shadow: 1px 2px 6px #eaeaea;
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
  .el-menu-item.is-active {
    border-right: 4px solid;
    background-color: #c5e5f6 !important;
  }
  .el-submenu .el-menu-item {
    padding-left: 50px !important;
  }
  .el-menu-item.submenu-title-noDropdown span {
    font-weight: 500;
    font-size: 15px;
  }
  .el-submenu .el-submenu__title span {
    font-weight: 500;
    font-size: 15px;
  }
  .el-submenu .el-submenu__title svg {
    transform: translateY(1px);
  }
  .el-menu-item svg {
    transform: translateY(1px);
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100% - 50px);
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
v-deep .el-scrollbar__view .el-menu {
  background-color: #fff !important;
}
</style>
