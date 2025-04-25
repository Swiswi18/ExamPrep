import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Study from '../views/Study.vue'
import Practice from '../views/Practice.vue'
import MockExam from '../views/MockExam.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/study', name: 'Study', component: Study },
  { path: '/practice', name: 'Practice', component: Practice },
  { path: '/exam', name: 'MockExam', component: MockExam },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
