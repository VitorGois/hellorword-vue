import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuComponents: [
      { icon: 'home', text: 'Home', route: '/' },
      { icon: 'info', text: 'About', route: '/about' },
    ],
    user: {
      name: 'Vitor Gois 190810',
      email: 'vitorcgois777@gmail.com',
      picture: 'profile.jpg'
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
