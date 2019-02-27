<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">あひゃえもん</h3>
          <div>Composer / Programmer</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" @click="jump('http://ahyaemon.matrix.jp')">あひゃえもんのページ</v-btn>
        <v-btn flat color="orange" @click="jump('https://github.com/ahyaemon')">Git Hub</v-btn>
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
    private jump(url: string) {
      window.open(url)
    }

    // tslint対策
    public _() {
      this.jump('')
    }
  }
</script>
