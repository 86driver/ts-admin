<template>
  <div>1111</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { getPageRouter } from '@/api/page-router/page-router.ts'

@Component({})
export default class App extends Vue {
  async created() {
    this._getPageRouter()
  }

  async _getPageRouter() {
    await getPageRouter()
  }
}
</script>

<style lang="scss" scoped></style>
