import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from "../views/LayoutView.vue";
import ButtonView from "../views/ButtonView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayoutView
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
