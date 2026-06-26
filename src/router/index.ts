import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import initMain from '@/assets/js/main.js'
import activeSlider from '@/assets/js/slider-active.js'
import DesignPortfolio from '@/views/DesignPortfolio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/about',
    name: 'about',
    component: About,
  },

  {
    path: '/projects',
    name: 'portfolio',
    component: Portfolio,
  },

  {
    path: '/design',
    name: 'design',
    component: DesignPortfolio,
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),

  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach(function () {
  setTimeout(() => {
    initMain()
    activeSlider()
  }, 100)
})

export default router
