// import { name } from '@vue/eslint-config-prettier/skip-formatting'
// import { meta } from 'eslint-plugin-vue'

//import { useAuthStore } from '@/stores/authStore'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/ExHook.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'note', component: () => import('@/pages/NotePage.vue') },
      { path: 'note/:id',
        name: 'NoteDetail', 
        component: () => import('@/pages/ch4/Ex_qcard.vue') },
      { path: 'button', component: () => import('@/pages/ch4/Ex_qbtn.vue'), 
        meta: { requireAuth: true }
      },
      { path: 'List', component: () => import('@/pages/ch4/Ex_qlist.vue')},
      { path: 'table', component: () => import('@/pages/ch4/Ex_qtable.vue')},
      { path: 'notify', component: () => import('@/pages/ch4/Ex_Notify.vue')},
      { path: 'loading', component: () => import('@/pages/ch4/Ex_Loading.vue')},
      { path: 'dialog', component: () => import('@/pages/ch4/Ex_dialog.vue')},
      { path: 'validation', component: () => import('@/pages/ch4/Ex_validation.vue')},
      { path: 'Pinia',
        component: () => import('@/pages/ch5/ExPinia.vue'),
        meta: { requireAuth: true }
     },
     { path: 'testapi', component: () => import('@/pages/ch6/Ex_api.vue')},
     { path: 'post', component: () => import('@/pages/ch6/Ex_crud.vue')},
     { path: 'mockapi', component: () => import('@/pages/ch6/SubjectPage.vue')},
     { path: 'login', name: 'login',
       component: () => import('@/pages/ch7/LoginPage.vue')},
       
     { path: 'profile', name: 'profile',
        meta: { requireAuth: true },
       component: () => import('@/pages/ch7/ProfilePage.vue')},
       { path: 'teacher', name: 'teacher',
        meta: { requireAuth: true, roles: ['teacher', 'admin'] },
       component: () => import('@/pages/ch7/TeacherPage.vue')},
       { path: 'admin', name: 'admin',
        meta: { requireAuth: true, roles: ['admin'] },
       component: () => import('@/pages/ch7/AdminPage.vue')},
        { path: 'env', component: () => import('@/pages/ch8/Ex_env.vue')},
        { path: '',name: 'subject', component: () => import('@/pages/ch8/SubjectPage.vue')},
       
       
    ],
  },
  {
    path:'/note/new',
    name:'NewNote',
    component: () => import('@/pages/NewNote.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
