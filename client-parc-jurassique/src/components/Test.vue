<template>
    <div>
        <h1>{{ banque }}</h1>
        <v-btn @click="incrementBanque(2)">+</v-btn>
        <v-btn @click="decrementBanque(2)">-</v-btn>
    </div>
</template>

<script>
export default {
  computed: {
    banque: function () {
      return this.$store.state.banque
    }
  },
  methods: {
    incrementBanque: function (n) {
      this.$store.dispatch('incrementBanque', n)
    },
    decrementBanque: function (n) {
      this.$store.dispatch('decrementBanque', n)
    }
  }
}
</script>
