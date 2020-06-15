import Vuex from 'vuex'
import Vue from 'vue'

import initialState from './initialState'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
})
