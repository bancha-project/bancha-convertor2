<template>
  <div>
    <a href="https://ja.nuxtjs.org/guide" target="_blank">nuxt</a>
    <br>
    <a href="https://vuetifyjs.com/en/" target="_blank">vuetify</a>
    <br>
    <a href="https://material.io/tools/icons/?style=baseline" target="_blank">icons</a>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    head: {
      title: '製作者について - 変換野郎',
    }
  })
  export default class About extends Vue {
  }
</script>
