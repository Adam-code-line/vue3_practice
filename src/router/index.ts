//创建路由器并暴露
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Person from '@/pages/Person.vue'
import PersonDetail from '@/pages/PersonDetail.vue'

const routes = [
  {name: 'root', path: '/', redirect: '/home' }, // 重定向到 /home
  {name: 'home', path: '/home', component: Home },
  {name: 'about', path: '/about', component: About },
  {name: 'person', path: '/person', component: Person,
    children: [
      {name: 'person-detail', path: 'persondetail/:id/:name/:age', component: PersonDetail, props: true}
    ]
  },
  {name: 'props', path: '/props', component: () => import('@/pages/01_props/Father.vue')},
  {name: 'custom-event', path: '/custom-event', component: () => import('@/pages/02_custom-event/Father.vue')},
  {name: 'v-model', path: '/v-model', component: () => import('@/pages/03_v-model/Father.vue')}
  ,{name: 'attrs', path: '/attrs', component: () => import('@/pages/04_$attrs/Father.vue')},
  {name: 'provide-inject', path: '/provide-inject', component: () => import('@/pages/05_provide-inject/Father.vue')}
  ,{name: 'slot', path: '/slot', component: () => import('@/pages/06_slot/Father.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router