import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useUsers from '@/hooks/useUsers'
import apiClient from '@/services/client'
import { User } from '@/types/user'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useConversations', () => {
  let mock
  const users: User[] = [{ id: 1, nickname: 'John', token: 'x' }]

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    mock.onGet(`/users`).reply(200, users)

    const { result, waitFor } = renderHook(() => useUsers(), { wrapper })

    expect(result.current.isLoading).toBeTruthy()

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(users)
  })
})
