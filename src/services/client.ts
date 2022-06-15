import axios from 'axios'
import NProgress from 'nprogress'

export const calculatePercentage = (loaded: number, total: number) => Math.floor(loaded) / total

export const update = (e) => NProgress.set(calculatePercentage(e.loaded, e.total))

export const apiClient = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    NProgress.start()
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => {
    if (typeof window !== 'undefined') {
      NProgress.done(true)
    }
    return response
  },
  (error) => {
    if (typeof window !== 'undefined') {
      NProgress.done(true)
    }
    return Promise.reject(error)
  }
)

if (typeof window !== 'undefined') {
  apiClient.defaults.onDownloadProgress = update
  apiClient.defaults.onUploadProgress = update
}

export default apiClient
