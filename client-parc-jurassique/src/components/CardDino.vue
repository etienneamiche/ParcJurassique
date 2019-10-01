<template>
  <v-card class="mx-auto" color="red lighten-4" elevation="10">
    <v-card-title>{{dinosaure.name}}</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="red" @click="acheterDino">
        <v-avatar>
          <img :src="require(`@/assets/${dinosaure.logo}`)" />
        </v-avatar>
      </v-btn>
      <v-container class="red lighten-3">
        <v-row no-gutters>
          <v-col cols="12">
            <h4>Cout: {{this.prixCourant}}$</h4>
          </v-col>
          <v-col cols="12">
            <h4>Visiteur: +{{dinosaure.visiteur}}</h4>
          </v-col>
          <v-col cols="12">
            <h4>Danger: +{{dinosaure.danger}}</h4>
          </v-col>
          <v-col cols="12">
            <h4>Effectif: {{effectif}}</h4>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['dinosaure'],
  computed: {
    effectif: function () {
      return this.$store.state._effectifDinosaures[this.dinosaure.name]
    },
    prixCourant: function () {
      if (this.effectif === 0) {
        return this.dinosaure.prix
      }
      return this.effectif * this.dinosaure.prix
    }
  },
  methods: {
    incrementDanger: function (n) {
      this.$store.dispatch('incrementDanger', n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementDinosaures: function (name) {
      this.$store.dispatch('incrementDinosaures', name)
    },
    incrementViviteurs: function (n) {
      this.$store.dispatch('incrementVisiteurs', n)
    },

    acheterDino: function () {
      if (this.prixCourant <= this.$store.state._banque) {
        this.incrementDanger(this.dinosaure.danger)
        this.decrementBanque(this.prixCourant)
        this.incrementViviteurs(this.dinosaure.visiteur)
        this.incrementDinosaures(this.dinosaure.name)
      } else {
        this.$store.dispatch('setAlertMoney', true)
        setTimeout(() => {
          this.$store.dispatch('setAlertMoney', false)
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 1em;
}
</style>
