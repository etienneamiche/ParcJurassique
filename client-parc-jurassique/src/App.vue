<template>
  <v-app>
    <v-app-bar app>
    <v-container>
      <v-row>

          <h3>Parc Jurassique</h3>

          <v-avatar><img :src="require('./assets/money.png')" alt=""></v-avatar><span><h3>{{banque}}</h3></span>
          <v-avatar><img :src="require('./assets/family.png')" alt=""></v-avatar><span><h3>{{visiteurs}}</h3></span>
          <v-avatar><img :src="require('./assets/danger.png')" alt=""></v-avatar><span><h3>{{danger}}</h3></span>

      </v-row>
    </v-container>
    </v-app-bar>

    <v-content>

      <Grid/>
      <DinoCard/>
    </v-content>
  </v-app>
</template>

<script>

import Grid from './components/Grid'
import DinoCard from './components/DinoCard'

export default {
  name: 'App',
  components: {

    Grid,
    DinoCard

  },
  data: () => ({
  }),
  computed: {
    banque: function () {
      return this.$store.state._banque
    },
    visiteurs: function () {
      return this.$store.state._visiteurs
    },
    danger: function () {
      return this.$store.state._danger
    }

  }
}
</script>
