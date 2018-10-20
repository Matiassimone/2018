import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users'
import CreateUser from './views/CreateUser.vue'
import DeleteAndMod from './views/DeleteAndMod.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: CreateUser
    },
    {
      path: '/deleteAndMod',
      name: 'deleteAndMod',
      component: DeleteAndMod
    }
  ]
})
