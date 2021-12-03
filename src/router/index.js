import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import HelloWorld from '../views/HelloWorld'
import About from '../views/About'
import Calendar from '../views/Calendar'
import RateUs from '../views/RateUs'
import EasterEgg from '../views/EasterEgg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/hello',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/rateus',
    name: 'RateUs',
    component: RateUs
  },
  {
    path: '/easter',
    name: 'easterEgg',
    component: EasterEgg
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
