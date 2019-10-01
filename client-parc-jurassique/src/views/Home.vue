<template>
<v-app dark>
    <v-app-bar app>
    <v-container>
      <v-row>

          <h3>Parc Jurassique</h3>

          <v-avatar><img :src="require('@/assets/money.png')" alt=""></v-avatar><span><h3>{{banque}}</h3></span>
          <v-avatar><img :src="require('@/assets/family.png')" alt=""></v-avatar><span><h3>{{visiteurs}}</h3></span>
          <v-avatar><img :src="require('@/assets/danger.png')" alt=""></v-avatar><span><h3>{{danger}}</h3></span>

      </v-row>
    </v-container>
    </v-app-bar>

    <v-content>

    <v-alert :value="alertMoney"
      border="left"
      close-text="Close Alert"
      transition="scale-transition"
      class="transition-swing"
      color='warning'
      icon="mdi-currency-usd"
      dark
      dismissible>
        Vous êtes trop pauvre
    </v-alert>

    <v-alert :value="alertDanger"
      border="left"
      close-text="Close Alert"
      transition="scale-transition"
      class="transition-swing"
      color='error'
      icon="mdi-skull-outline"
      dark
      dismissible>
        Un dinosaure a mangé un enfant, vous perdez {{visiteurPerte}} visiteurs, renforcez la sécurité !!
    </v-alert>

      <v-container>
        <v-row>
          <!-- Dinosaures -->
          <v-col cols="12" sm="4">
              <CardDino v-for="(dinosaure,i) in gamedata.dinosaures"
                :dinosaure="dinosaure"
                :key="i"/>
          </v-col>

          <!-- Magasins -->
          <v-col cols="12" sm="4">
              <CardShop v-for="(magasin,i) in gamedata.magasins"
              :magasin="magasin"
              :key="i"/>
          </v-col>

          <!-- Sécurité -->
          <v-col cols="12" sm="4">
              <CardSecu v-for="(personnel,i) in gamedata.personnels"
              :personnel="personnel"
              :key="i"/>
          </v-col>

        </v-row>
      </v-container>

    </v-content>
  </v-app>
</template>

<script>

import CardDino from '@/components/CardDino'
import CardSecu from '@/components/CardSecu'
import CardShop from '@/components/CardShop'
import gameData from '@/data/game_data'
// import alertGenerator from '@/plugins/alertGenerator'

export default {
  name: 'home',
  components: {
    CardDino,
    CardSecu,
    CardShop
  },
  data: () => ({
    gamedata: gameData,
    visiteurPerte: 0
  }),

  mounted () {
    this.earnMoney()
    this.accidents()
  },

  methods: {
    earnMoney: function () {
      setInterval(() => {
        let moneyCount = 0
        // calcul du benefice de tout les magasins
        for (let storeShop in this.$store.state._effectifMagasins) {
          let benef = this.gamedata.magasins.find(m => m.name === storeShop).benefice
          moneyCount += this.$store.state._effectifMagasins[storeShop] * benef
        }
        // ajout du benefice calculé a la banque
        this.$store.dispatch('incrementBanque', moneyCount * this.$store.state._visiteurs)
      }, 1000)
    },

    accidents: function () {
      setInterval(() => {
        let danger = this.$store.state._danger

        if (danger > Math.floor(Math.random() * 101)) {
          this.visiteurPerte = this.randomVisiteur()
          this.$store.dispatch('decrementVisiteurs', this.visiteurPerte)
          this.$store.dispatch('setAlertDanger', true)
          setTimeout(() => {
            this.$store.dispatch('setAlertDanger', false)
          }, 5000)
        }
      }, 10000)
    },
    randomVisiteur: function () {
      return Math.floor(Math.random() * (this.$store.state._visiteurs + 1))
    }
  },
  computed: {
    banque: function () {
      return this.$store.state._banque
    },
    visiteurs: function () {
      return this.$store.state._visiteurs
    },
    danger: function () {
      return this.$store.state._danger
    },
    alertMoney: function () {
      return this.$store.state._alertMoney
    },
    alertDanger: function () {
      return this.$store.state._alertDanger
    }
  }
//   watch: {
//     alertMoney: function () {
//       setTimeout(() => {
//         this.$store.dispatch('setAlertMoney', false)
//       }, 5000)
//     },
//     alertDanger: function () {
//       setTimeout(() => {
//         this.$store.dispatch('setAlertDanger', false)
//       }, 5000)
//     }
//   }
}
</script>

<style>

</style>
