import { defineStore } from 'pinia'
import UserGatewayHttp from '@/infra/gateway/UserGatewayHttp'
import type User from '@/entities/User'

const userGatewayHttp = new UserGatewayHttp()

export const useUserStore = defineStore('users', {
  state: () => ({
    me: null as null | User,
    users: [] as User[]
  }),
  getters: {
    hasUsers: (state) => state.users.length > 0
  },
  actions: {
    async auth(email: string, password: string): Promise<any> {
      return await userGatewayHttp.login(email, password)
    }
  }
})
