import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuComponents: [
      { icon: 'home', text: 'Home', route: '/' },
      { icon: 'mdi-calendar', text: 'Calendar', route: '/calendar' },
      { icon: 'mdi-star', text: 'Rate Us', route: '/rateus' },
      { icon: 'info', text: 'About', route: '/about' },
      { icon: 'mdi-egg-easter', text: 'Easter Egg', route: '/easter' },
    ],
    user: {
      name: 'Vitor Gois 190810',
      email: 'vitorcgois777@gmail.com',
      picture: 'profile.jpg'
    },
    tList: null
  },
  mutations: {
    SET_TODOLIST(state, payload) {
      state.tList = payload;
    }
  },
  actions: {
    fetchTodoList() {
      fetch('./database/dbmock.json')
        .then((res) => {
          if (!res.ok) throw new Error('Error get todo list');
          return res.json();
        })
        .then((data) => {
          const payload = data.todoList;
          this.commit('SET_TODOLIST', payload);
        })
        .catch((err) => console.log(err));
    }
  },
  modules: {
  },
  getters: {
    allTodos(state) {
      return state.tList;
    }
  }
})
