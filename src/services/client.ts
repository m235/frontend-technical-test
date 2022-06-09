import axios from 'axios'
import NProgress from 'nprogress'
import { QueryClient } from 'react-query'

export const calculatePercentage = (loaded: number, total: number) => Math.floor(loaded) / total

export const update = (e) => NProgress.set(calculatePercentage(e.loaded, e.total))

export const apiClient = axios.create({ baseURL: 'http://localhost:3005' })

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

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default apiClient
