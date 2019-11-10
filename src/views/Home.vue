<template>
<v-app dark>
    <v-app-bar app>

    <v-container>
      <v-row align="center"
          justify="center">
          <v-avatar><img :src="require('@/assets/money.png')" alt=""></v-avatar><span><h3 class="headline">{{banque}}</h3></span>
          <v-avatar><img :src="require('@/assets/family.png')" alt=""></v-avatar><span><h3 class="headline">{{visiteurs}}</h3></span>
          <v-avatar><img :src="require('@/assets/danger.png')" alt=""></v-avatar><span><h3 :style="couleurDanger" class="headline">{{danger}}%</h3></span>
      </v-row>
    </v-container>
    </v-app-bar>

    <v-content>

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
    <v-footer fixed color="transparent">
      <div class="alert">
        <Alertes :visiteurPerte="visiteurPerte"></Alertes>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

import CardDino from '@/components/CardDino'
import CardSecu from '@/components/CardSecu'
import CardShop from '@/components/CardShop'
import Alertes from '@/components/Alertes'

import gameData from '@/data/game_data'
// import alertGenerator from '@/plugins/alertGenerator'

export default {
  name: 'home',
  components: {
    CardDino,
    CardSecu,
    CardShop,
    Alertes
  },
  data: () => ({
    gamedata: gameData,
    visiteurPerte: 0
  }),

  created () {
    this.$store.dispatch('fetchData')
  },

  mounted () {
    this.earnMoney()
    this.accidents()
    this.save()
  },

  methods: {
    save: function () {
      setInterval(() => {
        this.axios
          .post(
            '/api/save/' + this.$store.state._user,
            this.$store.state.data

          )
      }, 10000)
    },
    earnMoney: function () {
      setInterval(() => {
        let moneyCount = 0
        // calcul du benefice de tout les magasins
        for (let storeShop in this.$store.state.data._effectifMagasins) {
          let benef = this.gamedata.magasins.find(m => m.name === storeShop).benefice
          moneyCount += this.$store.state.data._effectifMagasins[storeShop] * benef
        }
        // ajout du benefice calculé a la banque
        this.$store.dispatch('incrementBanque', Math.round((moneyCount * this.$store.state.data._visiteurs) / 10))
      }, 1000)
    },

    accidents: function () {
      setInterval(() => {
        let danger = this.$store.state.data._danger

        if (danger > Math.floor(Math.random() * 101) && this.$store.state.data._visiteurs !== 0) {
          this.visiteurPerte = this.getRandomVisiteur()
          this.$store.dispatch('decrementVisiteurs', this.visiteurPerte)
          this.$store.dispatch('setAlertDanger', true)
          setTimeout(() => {
            this.$store.dispatch('setAlertDanger', false)
          }, 5000)
        }
      }, 10000)
    },
    getRandomVisiteur: function () {
      return Math.floor(Math.random() * (this.$store.state.data._visiteurs + 1))
    }
  },
  computed: {
    banque: function () {
      return this.$store.state.data._banque
    },
    visiteurs: function () {
      return this.$store.state.data._visiteurs
    },
    danger: function () {
      return this.$store.state.data._danger
    },
    couleurDanger: function () {
      if (this.danger < 10) {
        return 'color:green'
      } else if (this.danger > 30) {
        return 'color:red'
      } else return 'color:orange'
    }

  }
}
</script>

<style scoped>
.v-avatar{
  margin: 0 1em
}
.alert{
  width: 100%
}
</style>
