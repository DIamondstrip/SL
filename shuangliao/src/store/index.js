import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import friend from './friend';
import details from './details';

export default new Vuex.Store({
  state: {
 
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    friend,
    details
  }
})