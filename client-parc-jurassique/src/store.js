import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  _banque: 1000,
  _visiteurs: 0,
  _danger: 0,
  _dinausaures: 0
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
      state._danger += n
    },
    decrementDanger (state, n) {
      state._danger -= n
    },

    // Visiteurs Mutation

    incrementDinoraures (state, n) {
      state._dinoraures += n
    },
    decrementDinoraures (state, n) {
      state._dinoraures -= n
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
    incrementDinosaure ({ commit }, n) {
      commit('incrementDinosaure', n)
    },
    decrementDinosaure ({ commit }, n) {
      commit('decrementDinosaure', n)
    }
  }

})
