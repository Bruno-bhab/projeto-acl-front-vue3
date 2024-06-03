<script lang="ts">
import UserGatewayHttp from '@/infra/gateway/UserGatewayHttp'
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)
    const email = ref('')
    const password = ref('')

    const auth = async () => {
      const userGatewayHttp = new UserGatewayHttp()
      try {
        loading.value = true
        const result = await userGatewayHttp.login(email.value, password.value)
        console.log(result.data)
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false
      }
    }

    return { loading, email, password, auth }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form action="#" method="post" @submit.prevent="auth">
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
