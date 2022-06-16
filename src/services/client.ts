import axios from 'axios'
import NProgress from 'nprogress'

export const calculatePercentage = (loaded: number, total: number) => Math.floor(loaded) / total

export const update = (e: { loaded: number; total: number }) => NProgress.set(calculatePercentage(e.loaded, e.total))

export const apiClient = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

if (typeof window !== 'undefined') {
  apiClient.interceptors.request.use((config) => {
    NProgress.start()

    return config
  })

  apiClient.interceptors.response.use(
    (response) => {
      NProgress.done(true)

      return response
    },
    (error) => {
      NProgress.done(true)
      return Promise.reject(error)
    }
  )

  apiClient.defaults.onDownloadProgress = update
  apiClient.defaults.onUploadProgress = update
}

export default apiClient
