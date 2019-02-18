<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">あひゃえもん</h3>
          <div>Composer</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">あひゃえもんのページ</v-btn>
        <v-btn flat color="orange">Git Hub</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
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
