<template>
  <v-card
    color elevation="10"
  >

    <v-img src="@/assets/jungle.jpg" height="120px">
        <v-row align="center" justify="center">
            <img :src="require(`@/assets/${personnel.logo}`)" height="90px" width="90px" alt="logo">
        </v-row>

    </v-img>

    <v-container>
        <v-row align="center" justify="center">
            <h2 class="headline">{{personnel.name}} </h2>
        </v-row>
        <v-row align="center" justify="center">
            <p>{{personnel.description}}</p>
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
                  <h4 class="subtitle-1">Danger: {{personnel.danger}}</h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1">Effectif: {{effectif}}</h4>
                </v-col>
                <v-col cols="12">
                    <h4 class="subtitle-1"><br></h4>
                </v-col>
                <v-col cols="12">
                  <h4 class="subtitle-1"> <br> </h4>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-btn class outlined large rounded @click="acheterSecu">Acheter</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
  props: ['personnel'],
  computed: {
    effectif: function () {
      return this.$store.state._effectifPersonnels[this.personnel.name]
    },
    prixCourant: function () {
      if (this.effectif === 0) {
        return this.personnel.prix
      }
      return this.effectif * this.personnel.prix
    }
  },
  methods: {
    decrementDanger: function (n) {
      this.$store.dispatch('decrementDanger', -n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementSecurite: function () {
      this.$store.dispatch('incrementSecurite', this.personnel.name)
    },
    acheterSecu: function () {
      if (this.prixCourant <= this.$store.state._banque) {
        this.decrementDanger(this.personnel.danger)
        this.decrementBanque(this.prixCourant)
        this.incrementSecurite(this.personnel.name)
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
