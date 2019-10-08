<template>
  <v-card elevation="10">
    <v-img src="@/assets/forest.png" height="120px">
      <v-container>
        <v-row align="center" justify="center">
          <img :src="require(`@/assets/${dinosaure.logo}`)" height="90px" width="90px" align="top" />
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <v-row align="center" justify="center">
        <h2 class="headline">{{dinosaure.name}}</h2>
      </v-row>
      <v-row align="center" justify="center">
        <p>"{{dinosaure.description}}"</p>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-card outlined>
            <v-container>
              <v-row no-gutters align="center" justify="center">
                <v-col cols="12">
                  <h4 class="subtitle-1">Cout: {{prixCourant}}$</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1">Visiteur: +{{dinosaure.visiteur}}</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1">Danger: +{{dinosaure.danger}}</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1">Effectif: {{effectif}}</h4>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-btn class outlined large rounded @click="acheterDino">Acheter</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
