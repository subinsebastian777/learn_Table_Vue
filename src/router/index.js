import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PetTable from '../views/PetTable.vue'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PetTable',
    name: 'PetTable',
    component: PetTable
  },
  {
    path: '/Pet',
    name: 'Pet',
    component: Pets
  }
]

const router = new VueRouter({
  routes
})

export default router
