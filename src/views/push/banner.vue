<template>
  <div>{{title}}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  get title() {
    return this.$route.meta.title
  }
}
</script>

<style lang="scss" scoped>
</style>
