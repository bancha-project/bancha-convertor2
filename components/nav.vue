<template>
  <v-navigation-drawer permanent app>
    <v-list>
      <v-list-tile @click="jump('/')">
        <v-list-tile-title class="title">
          変換野郎
        </v-list-tile-title>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile v-for="page in pages" :key="page.name" @click="jump(page.uri)">
        <v-list-tile-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ page.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile v-for="page in subPages" :key="page.name" @click="jump(page.uri)">
        <v-list-tile-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ page.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {

    private pages = [
      { name: 'SQL', uri: '/sql', icon: 'edit' },
      { name: 'Base64', uri: '/base64', icon: 'edit' },
      { name: 'Case', uri: '/case', icon: 'edit' },
      { name: '設定ファイル', uri: '/config', icon: 'edit' },
    ]

    private subPages = [
      { name: 'コンタクト', uri: '/contact', icon: 'contact_mail' },
      { name: '製作者について', uri: '/about', icon: 'supervised_user_circle' },
      { name: '参考', uri: '/reference', icon: 'bookmarks' },
    ]

    private jump (to: string) {
      this.$router.push(to)
    }

    // tslint対策
    public _ () {
      this.jump('')
      this.pages = this.pages
      this.subPages = this.subPages
    }

  }
</script>
