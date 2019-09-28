<template>
  <v-card
    class="mx-auto"
    color="blue lighten-4"
    elevation="10"
  >
    <v-card-title>{{magasin.name}}</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="blue" @click="acheterMagasin" >
        <v-avatar>
            <img :src="require(`@/assets/${magasin.logo}`)">
        </v-avatar>
    </v-btn>
    <v-container class="blue lighten-3">
    <v-row no-gutters>
      <v-col cols="12">
        <h4>Coût : {{magasin.prix}}$</h4>
      </v-col>
      <v-col cols="12">
        <h4>Visiteurs: + {{magasin.benefice}}</h4>
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
  props: ['magasin'],
  computed: {
    effectif: function () {
      return this.$store.state._effectifMagasins['Restaurant']
    }
  },
  methods: {
    incrementVisiteurs: function (n) {
      this.$store.dispatch('incrementVisiteurs', n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementMagasins: function (name) {
      this.$store.dispatch('incrementMagasins', name)
    },

    acheterMagasin: function () {
      if (this.magasin.prix <= this.$store.state._banque) {
        this.incrementVisiteurs(this.magasin.benefice)
        this.decrementBanque(this.magasin.prix)
        this.incrementMagasins(this.magasin.name)
      } else {
        alert('vous êtes trop pauvre')
      }
    }
  }
}
</script>
