<template>
  <v-container>
    <p>
      ふと思い立った時、何かを変換したり整形したりしたいといった事が無きにしもあらず。
    </p>
    <p>
      その度にネットワークの海から有象無象に散らばったツールを探し出すのは時間の無駄というにあらざるを得ず。
    </p>
    <p>
      さすればそれらを一挙にまとめてしまおうという心情はこれといってあやしきものにあらず。
    </p>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    head: {
      title: '変換野郎',
    }
  })
  export default class Home extends Vue {
  }
</script>
