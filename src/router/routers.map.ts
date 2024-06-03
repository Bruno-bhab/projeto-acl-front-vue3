import ContactView from '@/views/ContactView.vue'
import AuthTemplate from '@/layouts/AuthTemplate.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgotPasswordView from '@/views/Auth/ForgotPasswordView.vue'
import DefaultTemplate from '@/layouts/DefaultTemplate.vue'
import HomeView from '@/views/HomeView.vue'

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
        component: HomeView,
        name: 'admin.home'
      },
      {
        path: 'contact',
        component: ContactView,
        name: 'admin.contact'
      }
    ]
  }
]
