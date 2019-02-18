<template>
  <v-app id="inspire">
    <Nav/>
    <v-content>
      <nuxt/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Nav from '~/components/nav.vue'
  import Footer from '~/components/footer.vue'

  @Component({
    components: {
      Nav,
      Footer,
    }
  })
  export default class DefaultLayout extends Vue {
  }
</script>
