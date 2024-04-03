import { createRouter, createWebHistory } from 'vue-router'

const notFoundRoutes = [
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配page-404
    redirect: '/page-404',
  },
  {
    path: '/page-404',
    name: 'notFoundPage',
    component: () => import ('@/views/page-404/not-found.vue'),
  }
]
export const dynamicRoutes = [
  {
    menuName: '首页',
    path: '/home',
    name: 'home',
    component: () => import ('@/views/index.vue'),
  },
  {
    path: '/base',
    menuName: '基础',
    redirect: '/base/base-lesson1',
    children: [
      {
        path: '/base/base-lesson1',
        menuName: '基本语法',
        name: 'base-lesson1',
        component: () => import ('@/views/base/base-lesson1.vue'),
      }
    ]
  },
  {
    path: '/deep-component',
    redirect: '/deep-component/deep-component-lesson1',
    menuName: '深入组件',
    children: [
      {
        menuName: '组件基础',
        path: '/deep-component/deep-component-lesson1',
        name: 'deep-component-lesson1',
        component: () => import ('@/views/deep-component/deep-component-lesson1.vue'),
      }
    ]
  },
  {
    path: '/mixins',
    menuName: '逻辑复用',
    redirect: '/mixins/mixins-lesson1',
    children: [
      {
        menuName: '组合式函数',
        path: '/mixins/mixins-lesson1',
        name: 'mixins-lesson1',
        component: () => import ('@/views/mixins/mixins-lesson1.vue'),
      }
    ]
  },
  {
    path: '/inner-component',
    menuName: '内置组件',
    redirect: '/inner-component/inner-component-lesson1',
    children: [
      {
        menuName: '基本组件',
        path: '/inner-component/inner-component-lesson1',
        name: 'inner-component-lesson1',
        component: () => import ('@/views/inner-component/inner-component-lesson1.vue'),
      }
    ]
  },
]

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...dynamicRoutes,
  ...notFoundRoutes
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
