<template>
  <div>
    <el-button @click="jump">跳转</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  jump() {
    this.$router.push('/permission/role')
  }
}
</script>

<style lang="scss" scoped></style>
