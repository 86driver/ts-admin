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

@Component({
  name: 'Login'
})
export default class extends Vue {
  private userType = ''

  private handleLogin() {
    UserModule.Login(this.userType).then(() => {
      this.$router.push('/home')
    })
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
