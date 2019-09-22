<template>
  <v-card
    max-width="344"
    class="mx-auto"
    color="blue lighten-4"
  >
    <v-card-title>Magasin</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="blue" @click="acheterMagasin" >
        <v-avatar>
            <img :src="require('../assets/restaurant.png')">
        </v-avatar>
    </v-btn>
    <v-container class="blue lighten-3">
    <v-row no-gutters>
      <v-col cols="12">
        <h4>Cout: 40$</h4>
      </v-col>
      <v-col cols="12">
        <h4>Visiteurs: +35</h4>
      </v-col>
      <v-col cols="12">
        <h4>Effectif : {{effectif}}</h4>
      </v-col>
    </v-row>
  </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    effectif: function () {
      return this.$store.state._magasins
    }
  },
  methods: {
    incrementVisiteurs: function (n) {
      this.$store.dispatch('incrementVisiteurs', n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementMagasins: function () {
      this.$store.dispatch('incrementMagasins')
    },
    acheterMagasin: function () {
      this.incrementVisiteurs(35)
      this.decrementBanque(10)
      this.incrementMagasins()
    }
  }
}
</script>
