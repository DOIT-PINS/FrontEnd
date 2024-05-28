import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      meta: { requiresAuth: false },
      component: () => import("@/pages/auth/transition-handle.vue"),
      children: [
        { path: 'home', name: 'auth-home', component: () => import("@/pages/auth/introduction.vue") },
        { path: 'login', name: 'auth-login', component: () => import("@/pages/auth/login/user-login.vue") },
        { path: 'signup',  name: 'auth-signup',component: () => import("@/pages/auth/signup/signup-form.vue") },
      ]
    },
    {
      path: '/app',
      meta: { requiresAuth: false },
      component: () => import("@/pages/view/transition-handle.vue"),
      children: [
        { path: 'home', name: 'app-home', component: () => import("@/pages/view/pages/home/PageCore.vue") },
        { path: 'mypage', name: 'app-mypage', component: () => import("@/pages/view/pages/mypage/PageCore.vue") },
      ]
    },
  ]
});

export default router;  