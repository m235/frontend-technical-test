import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useUser from '@/hooks/useUser'
import apiClient from '@/services/client'
import { User } from '@/types/user'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useConversations', () => {
  let mock
  const user: User = { id: 1, nickname: 'John', token: 'x' }

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    const userId = 1
    mock.onGet(`/user/${userId}`).reply(200, user)

    const { result, waitFor } = renderHook(() => useUser(userId), { wrapper })

    expect(result.current.isLoading).toBeTruthy()

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(user)
  })
})
