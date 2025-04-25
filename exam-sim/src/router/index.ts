import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Study from '../views/Study.vue'
import Practice from '../views/Practice.vue'
import MockExam from '../views/MockExam.vue'
import Search from '../views/Search.vue'
import Upload from '../views/Upload.vue'
import Auth from '../views/Auth.vue'
// ...


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '/study', name: 'Study', component: Study },
  { path: '/practice', name: 'Practice', component: Practice },
  { path: '/exam', name: 'MockExam', component: MockExam },
  { path: '/search', component: Search },
  { path: '/upload', component: Upload },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
