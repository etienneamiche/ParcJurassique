<template>
  <v-card
    class="mx-auto"
    color="green lighten-4"
    elevation="10"
  >
    <v-card-title>Militaire</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="green" @click="acheterSecu" >
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
      return this.$store.state._effectifMilitaire
    }
  },
  methods: {
    decrementDanger: function (n) {
      this.$store.dispatch('decrementDanger', n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementMilitaire: function () {
      this.$store.dispatch('incrementMilitaire')
    },
    acheterSecu: function () {
      this.decrementDanger(10)
      this.decrementBanque(25)
      this.incrementMilitaire()
    }
  }
}
</script>
