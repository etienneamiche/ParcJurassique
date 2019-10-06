<template>
    <div>

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
        Un dinosaure a mangé un enfant, vous perdez <strong>{{visiteurPerte}}</strong> visiteurs, renforcez la sécurité !!
    </v-alert>

    </div>
</template>

<script>
export default {
  props: ['visiteurPerte'],

  computed: {
    alertMoney: function () {
      return this.$store.state._alertMoney
    },
    alertDanger: function () {
      return this.$store.state._alertDanger
    }
  }
}
</script>
