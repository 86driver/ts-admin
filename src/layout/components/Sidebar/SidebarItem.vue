<template>
  <div v-if="!item.meta.hidden">
    <template v-if="!item.children ">
      <sidebar-item-link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)">
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <!-- 侧栏 title -->
      <template slot="title">
        <span>{{item.meta.title}}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(item.path)"
        />
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import SidebarItemLink from './SidebarItemLink.vue'

@Component({
  name: 'SidebarItem',
  components: {
    SidebarItemLink
  }
})
export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig
  @Prop({ default: '' }) private basePath!: string

  private resolvePath(routePath: string) {
    return path.resolve(this.basePath, routePath)
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped></style>
