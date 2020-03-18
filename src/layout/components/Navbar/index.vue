<template>
  <div class="navbar">
    <el-button @click="exit">退出</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/userInfo'
@Component({
  name: 'Navbar'
})
export default class App extends Vue {
  private exit() {
    UserModule.REMOVE_USER_INFO()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  text-align: right;
  line-height: 60px;
  padding-right: 10px;
}
</style>
