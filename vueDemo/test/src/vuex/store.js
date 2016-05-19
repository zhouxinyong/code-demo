
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state, amount) {
    console.log(state)
    state.count = state.count + amount
  },
  REDUCE (state, number) {
    if (state.count === 0) {
      state.count = 0
    } else {
      state.count -= number
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
