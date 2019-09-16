<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row no-gutters>
            <v-col
            cols="12"
            sm="4">

            <v-card
            outlined
            tile>
            <DinoCard/>

            </v-card>

            </v-col>
            <v-col
            cols="12"
            sm="4">

            <v-card
            outlined
            tile>
            two

            </v-card>

            </v-col>
            <v-col
            cols="12"
            sm="4">

            <v-card
            outlined
            tile>
            <CardSecu/>

            </v-card>

            </v-col>
            </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Grid from './components/Grid'
import DinoCard from './components/DinoCard'
import CardSecu from './components/CardSecu'

export default {
  name: 'App',
  components: {
    Grid,
    DinoCard,
    CardSecu
  },
  data: () => ({
    //
  })
}
</script>
