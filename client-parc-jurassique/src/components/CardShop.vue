<template>
  <v-card elevation="10">
    <v-img src="@/assets/shop.png" height="120px">
    <v-container>
        <v-row align="center" justify="center">
          <img :src="require(`@/assets/${magasin.logo}`)" height="90px" width="90px" align="top" />
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <v-row align="center" justify="center">
        <h2 class="headline">{{magasin.name}}</h2>
      </v-row>
      <v-row align="center" justify="center">
        <p>{{magasin.description}}</p>
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
                  <h4 class="subtitle-1">Bénéfices: +{{magasin.benefice}}</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1">Effectif: {{effectif}}</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1"> <br> </h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1"> <br> </h4>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-btn class outlined large rounded @click="acheterMagasin">Acheter</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ['magasin'],
  computed: {
    effectif: function () {
      return this.$store.state.data._effectifMagasins[this.magasin.name]
    },
    prixCourant: function () {
      if (this.effectif === 0) {
        return this.magasin.prix
      }
      return this.effectif * this.magasin.prix
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
      if (this.prixCourant <= this.$store.state.data._banque) {
        this.decrementBanque(this.prixCourant)
        this.incrementMagasins(this.magasin.name)
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
.v-card{
  margin-top:1em
}
</style>
