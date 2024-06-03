import HttpClientAdapter from '@/infra/http/HttpClientAdapter'

export default class UserGatewayHttp {
  async login(email: string, password: string): Promise<any> {
    const device_name = `vue_app${navigator.userAgent}`

    return await HttpClientAdapter.post('/auth', {
      email,
      password,
      device_name
    })
  }
}
