<template>
  <div class="login-container">
    <div class="content">
      <el-input
        class="input"
        v-model="userType"
        placeholder="输入admin或者operator 按回车进行登录"
        @keyup.enter.native="handleLogin"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { UserModule } from '@/store/modules/userInfo'

import { getPageRouter } from '@/api/page-router/page-router.ts'

@Component({
  name: 'Login'
})
export default class extends Vue {
  private userType = ''

  private async handleLogin() {
    let res: any
    res = await getPageRouter({ type: this.userType })
    if (res.status.code === 0) {
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      UserModule.SET_USER_INFO(res.data)
      this.$router.push('home')
    } else {
      this.$message({
        type: 'warning',
        message: res.status.message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background: $loginBg;
  width: 100%;
  height: 100%;

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .input {
      width: 300px;
    }
  }
}
</style>
