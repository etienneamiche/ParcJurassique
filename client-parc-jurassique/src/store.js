import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    '_user': '',

    data: {

      '_banque': 1110,
      '_visiteurs': 110,
      '_danger': 0,
      '_alertMoney': false,
      '_alertDanger': false,
      '_effectifPersonnels': {
        'Gardien': 0,
        'Veterinaire': 0,
        'Soldat': 0,
        'Hélicoptère': 0
      },
      '_effectifMagasins': {
        'Boutique de souvenirs': 0,
        'Restaurant': 0,
        'Photographe': 0,
        'Nurserie': 0
      },
      '_effectifDinosaures': {
        'total': 0,
        'Styracosaure': 0,
        'Brachiosaure': 0,
        'Pterosaure': 0,
        'Velociraptor': 0,
        'Tyranosaure': 0
      }
    }
  },
  mutations: {

    // STATE MUTATION
    fetchData (state, info) {
      state.data = info
    },

    // Banque Mutations

    incrementBanque (state, n) {
      state.data._banque += n
    },
    decrementBanque (state, n) {
      state.data._banque -= n
    },

    // Visiteurs Mutation

    incrementVisiteurs (state, n) {
      state.data._visiteurs += n
    },
    decrementVisiteurs (state, n) {
      state.data._visiteurs -= n
    },

    // Visiteurs Mutation

    incrementDanger (state, n) {
      if (state.data._danger + n > 100) {
        state.data._danger = 100
      } else {
        state.data._danger += n
      }
    },
    // incrementDanger (n) {
    //   state.data._danger += n
    // },
    decrementDanger (state, n) {
      if (state.data._danger - n < 0) {
        state.data._danger -= 0
      } else {
        state.data._danger -= n
      }
    },

    // Dinosaures Mutation

    incrementDinosaures (state, name) {
      state.data._effectifDinosaures[name] += 1
      state.data._effectifDinosaures['total'] += 1
    },

    // Militaire Mutation

    incrementSecurite (state, name) {
      state.data._effectifPersonnels[name] += 1
    },

    // Magasin Mutation

    incrementMagasins (state, name) {
      state.data._effectifMagasins[name] += 1
    },

    // Alert

    setAlertMoney (state, bool) {
      state.data._alertMoney = bool
    },

    setAlertDanger (state, bool) {
      state.data._alertDanger = bool
    }

  },
  actions: {

    fetchData ({ commit }) {
      axios
        .get('https://serveur-parc-jurassique.glitch.me/api/state/' + this.state._user)
        .then(res => {
          console.log(res)
          commit('fetchData', res.data)
        })
    },

    incrementBanque ({ commit }, n) {
      commit('incrementBanque', n)
    },
    decrementBanque ({ commit }, n) {
      commit('decrementBanque', n)
    },
    incrementVisiteurs ({ commit }, n) {
      commit('incrementVisiteurs', n)
    },
    decrementVisiteurs ({ commit }, n) {
      commit('decrementVisiteurs', n)
    },
    incrementDanger ({ commit }, n) {
      commit('incrementDanger', n)
    },
    decrementDanger ({ commit }, n) {
      commit('decrementDanger', n)
    },
    incrementDinosaures ({ commit }, name) {
      commit('incrementDinosaures', name)
    },
    incrementSecurite ({ commit }, name) {
      commit('incrementSecurite', name)
    },
    incrementMagasins ({ commit }, name) {
      commit('incrementMagasins', name)
    },
    setAlertMoney ({ commit }, bool) {
      commit('setAlertMoney', bool)
    },
    setAlertDanger ({ commit }, bool) {
      commit('setAlertDanger', bool)
    }
  }

})
