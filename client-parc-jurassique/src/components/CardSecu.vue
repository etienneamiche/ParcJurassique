<template>
  <v-card
    class="mx-auto"
    color="green lighten-4"
    elevation="10"
  >
    <v-card-title>{{personnel.name}}</v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark large color="green" @click="acheterSecu" >
        <v-avatar>
            <img :src="require(`@/assets/${personnel.logo}`)">
        </v-avatar>
    </v-btn>
    <v-container class="green lighten-3">
    <v-row no-gutters>
      <v-col cols="12">
        <h4>Cout: {{personnel.prix}}$</h4>
      </v-col>
      <v-col cols="12">
        <h4>Danger: {{personnel.danger}}</h4>
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
  props: ['personnel'],
  computed: {
    effectif: function () {
      return this.$store.state._effectifPersonnels[this.personnel.name]
    }
  },
  methods: {
    decrementDanger: function (n) {
      this.$store.dispatch('decrementDanger', -n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    },
    incrementMilitaire: function () {
      this.$store.dispatch('incrementMilitaire')
    },
    acheterSecu: function () {
      if (this.personnel.prix <= this.$store.state._banque) {
        this.decrementDanger(this.personnel.danger)
        this.decrementBanque(this.personnel.prix)
        this.incrementSecurite(this.personnel.name)
      } else {
        alert('vous êtes trop pauvre')
      }
    }
  }
}
</script>
