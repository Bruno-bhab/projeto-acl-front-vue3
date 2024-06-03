import AuthTemplate from '@/layouts/AuthTemplate.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgotPasswordView from '@/views/Auth/ForgotPasswordView.vue'
import DefaultTemplate from '@/layouts/DefaultTemplate.vue'
import HomeAdminView from '@/views/admin/home/HomeAdminView.vue'

export default [
  {
    path: '/',
    component: AuthTemplate,
    children: [
      {
        path: '',
        component: LoginView,
        name: 'auth.login'
      },
      {
        path: 'forgot',
        component: ForgotPasswordView,
        name: 'auth.forgot'
      }
    ]
  },
  {
    path: '/admin',
    component: DefaultTemplate,
    children: [
      {
        path: '',
        component: HomeAdminView,
        name: 'admin.home'
      }
    ]
  }
]
