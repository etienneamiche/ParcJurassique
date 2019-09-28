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

      <v-container>
        <v-row>
          <!-- Dinosaures -->
          <v-col cols="12" sm="4">
            <v-card >
              <CardDino v-for="(dinosaure,i) in gamedata.dinosaures"
                        :dinosaure="dinosaure"
                        :key="i"/>
            </v-card>
          </v-col>

          <!-- Magasins -->
          <v-col cols="12" sm="4">
            <v-card>
              <CardShop/>
            </v-card>
          </v-col>

          <!-- Sécurité -->
          <v-col cols="12" sm="4">
            <v-card >
              <CardSecu/>
            </v-card>
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

export default {
  name: 'home',
  components: {
    CardDino,
    CardSecu,
    CardShop
  },
  data: () => ({
    gamedata: gameData
  }),

  mounted () {
    this.earnMoney()
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
    }
  }
}
</script>
