<script lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/users'
import { reactive, ref } from 'vue'

export default {
  setup() {
    const useStore = useUserStore()
    const loading = ref(false)
    const email = ref('')
    const password = ref('')
    const error = reactive({
      msgError: '',
      status: 0,
      active: false
    })

    const auth = async () => {
      try {
        loading.value = true
        const result = await useStore.auth(email.value, password.value)

        router.push({ name: 'admin.home' })
      } catch (err) {
        error.msgError = 'Falha ao autenticar'
        error.status = err.response.status
        error.active = true

        if (error.status === 422) error.msgError = 'Dados inválidos'
      } finally {
        loading.value = false
      }
    }

    return { loading, email, password, auth, error }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form action="#" method="post" @submit.prevent="auth">
      <div v-if="error.active">
        <p>{{ error.msgError }}</p>
      </div>
      <input type="email" name="email" placeholder="E-mail" v-model="email" />
      <input type="password" name="password" placeholder="Senha" v-model="password" />
      <button type="submit" :disabled="loading">
        <span v-if="loading">Enviando...</span>
        <span v-else>Login</span>
      </button>
    </form>
    <a href="forgot">Esqueci a senha</a>
  </div>
</template>
