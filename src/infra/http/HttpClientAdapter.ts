import axios, { type AxiosInstance } from 'axios'
import type HttpClientInterface from './HttpClientInterface'

class HttpClienteAdapter implements HttpClientInterface {
  private api: AxiosInstance
  private static instance: HttpClientInterface

  constructor() {
    const baseURL = 'http://localhost:8989/'

    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  static getInstance(): HttpClientInterface {
    if (!this.instance) {
      this.instance = new HttpClienteAdapter()
    }

    return this.instance
  }

  get(url: string, configs?: object | undefined): Promise<any> {
    return this.api.get(url, configs)
  }
  post(url: string, body: object, configs?: object | undefined): Promise<any> {
    return this.api.post(url, body, configs)
  }
  put(url: string, body: object, configs?: object | undefined): Promise<any> {
    return this.api.put(url, body, configs)
  }
  delete(url: string, configs?: object | undefined): Promise<any> {
    return this.api.delete(url, configs)
  }
}

export default HttpClienteAdapter.getInstance()
