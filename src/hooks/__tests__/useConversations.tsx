import { getCorrespondent } from '@/utils/getCorrespondent'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('services:conversations', () => {
  describe('getCorrespondent', () => {
    it('should return the senderNickname', () => {
      const { result, waitFor } = renderHook(() => useFetchData(), { wrapper })

      await waitFor(() => {
        return result.current.isSuccess
      })
    })
  })
})
