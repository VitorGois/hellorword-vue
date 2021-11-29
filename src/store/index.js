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
    todoList: [
      {
        id: 1,
        priority: 'Lowest',
        title: 'Ir ao mercado',
        description: 'Preciso comprar batatas',
        img: './todoItems/batata.jpg'
      },
      {
        id: 2,
        priority: 'Medium',
        title: 'Passear com cachorro',
        description: 'Levar os cachorros para passear no parquinho',
        img: './todoItems/cachorros.jpg'
      },
      {
        id: 3,
        priority: 'Highest',
        title: 'Trabalho de WEB',
        description: 'Preciso terminar urgentemente o trabalho de WEB com Vue',
        img: './todoItems/vue.png'
      },
      {
        id: 4,
        priority: 'Medium',
        title: 'Lavar roupas',
        description: 'Preciso lavar roupas sujas',
        img: './todoItems/roupas.jpg'
      },
      {
        id: 5,
        priority: 'Medium',
        title: 'Limpar o quarto',
        description: 'Quarto está bagunçado, precisa arrumar',
        img: './todoItems/quarto.jpg'
      },
      {
        id: 6,
        priority: 'Lowest',
        title: 'Instalar Jogo',
        description: 'Baixar jogo para se distrair no final de semana',
        img: './todoItems/game.jpg'
      },
      {
        id: 7,
        priority: 'Medium',
        title: 'Estudar Clean Architecture',
        description: 'Ler livro e ver videos sobre clean architecture',
        img: './todoItems/bob.png'
      },
      {
        id: 8,
        priority: 'Highest',
        title: 'Tirar o lixo fora',
        description: 'Caminhão vai passar amanhã cedo',
        img: './todoItems/caminhaoLixo.jpg'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allTodos(state) {
      return state.todoList;
    }
  }
})
