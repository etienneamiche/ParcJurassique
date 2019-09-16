<template>
  <v-card
    max-width="344"
    class="mx-auto"
    color="green lighten-4"
  >
    <v-card-title>Militaire</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="green">
        <v-avatar>
            <img :src="require('../assets/army.png')">
        </v-avatar>
    </v-btn>
    <v-container class="green lighten-3">
    <v-row no-gutters>
      <v-col cols="12">
        <h4>Cout: 10$</h4>
      </v-col>
      <v-col cols="12">
        <h4>Danger: -25</h4>
      </v-col>
      <v-col cols="12">
        <h4>Effectif : 1</h4>
      </v-col>
    </v-row>
  </v-container>
    </v-card-actions>
  </v-card>
