import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  _banque: 1000,
  _visiteurs: 10,
  _danger: 10,
  _dinosaures: 0,
  _effectifMilitaire: 0,
  _magasins: 0
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

    // Dinosaures Mutation

    incrementDinosaures (state) {
      state._dinosaures += 1
    },
    decrementDinosaures (state) {
      state._dinosaures -= 1
    },

    // Militaire Mutation

    incrementMilitaire (state) {
      state._effectifMilitaire += 1
    },
    decrementMilitaire (state) {
      state._effectifMilitaire -= 1
    },
    // Magasin Mutation

    incrementMagasins (state) {
      state._magasins += 1
    },
    decrementMagasin (state) {
      state._magasins -= 1
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
    incrementDinosaures ({ commit }) {
      commit('incrementDinosaures')
    },
    decrementDinosaure ({ commit }) {
      commit('decrementDinosaures')
    },
    incrementMilitaire ({ commit }) {
      commit('incrementMilitaire')
    },
    decrementMilitaire ({ commit }) {
      commit('decrementMilitaire')
    },
    incrementMagasins ({ commit }) {
      commit('incrementMagasins')
    },
    decrementMagasins ({ commit }) {
      commit('decrementMagasins')
    }
  }

})
