import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  _banque: 1000,
  _visiteurs: 1000,
  _danger: 100,
  _alertMoney: false,
  _alertDanger: false,

  _effectifPersonnels: {
    'Gardien': 0,
    'Veterinaire': 0,
    'Soldat': 0,
    'Hélicoptère': 0
  },
  _effectifMagasins: {
    'Boutique de souvenirs': 0,
    'Restaurant': 0,
    'Photographe': 0,
    'Nurserie': 0
  },
  _effectifDinosaures: {
    'total': 0,
    'Styracosaure': 0,
    'Brachiosaure': 0,
    'Pterosaure': 0,
    'Velociraptor': 0,
    'Tyranosaure': 0
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    // Banque Mutations

    incrementBanque (state, n) {
      state._banque += n
    },
    decrementBanque (state, n) {
      state._banque -= n
    },

    // Visiteurs Mutation

    incrementVisiteurs (state, n) {
      state._visiteurs += n
    },
    decrementVisiteurs (state, n) {
      state._visiteurs -= n
    },

    // Visiteurs Mutation

    incrementDanger (state, n) {
      if (state._danger + n > 100) {
        state._danger = 100
      } else {
        state._danger += n
      }
    },
    // incrementDanger (n) {
    //   state._danger += n
    // },
    decrementDanger (state, n) {
      if (state._danger - n < 0) {
        state._danger -= 0
      } else {
        state._danger -= n
      }
    },

    // Dinosaures Mutation

    incrementDinosaures (state, name) {
      state._effectifDinosaures[name] += 1
      state._effectifDinosaures['total'] += 1
    },

    // Militaire Mutation

    incrementSecurite (state, name) {
      state._effectifPersonnels[name] += 1
    },

    // Magasin Mutation

    incrementMagasins (state, name) {
      state._effectifMagasins[name] += 1
    },

    // Alert

    setAlertMoney (state, bool) {
      state._alertMoney = bool
    },

    setAlertDanger (state, bool) {
      state._alertDanger = bool
    }

  },
  actions: {
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
