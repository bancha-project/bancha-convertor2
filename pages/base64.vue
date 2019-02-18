<template>
  <v-container>
    <v-alert :value="true" type="warning">
      まだできてないぴょん
    </v-alert>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    head: {
      title: 'Base64 - 変換野郎',
    }
  })
  export default class Base64 extends Vue {
  }
</script>
