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
          <v-col cols="12" sm="4">
            <v-card >
              <DinoCard/>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card  >
              Magasin
            </v-card>
          </v-col>

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
import DinoCard from '@/components/DinoCard'
import CardSecu from '@/components/CardSecu'
import gameData from '@/data/game_data'

export default {
  name: 'home',
  components: {
    DinoCard,
    CardSecu
  },
  data: () => ({ gamedata: gameData }),

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
