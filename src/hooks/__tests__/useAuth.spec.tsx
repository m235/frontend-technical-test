import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useAuth from '@/hooks/useAuth'
import apiClient from '@/services/client'
import { User } from '@/types/user'
import AuthProvider from '@/contexts/auth'

const queryClient = new QueryClient()
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>{children}</AuthProvider>
  </QueryClientProvider>
)

describe('hooks:useAuth', () => {
  let mock
  const user: User = { id: 1, nickname: 'John', token: 'x' }

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    mock.onGet(`/user/${user.id}`).reply(200, user)

    const { result, waitFor } = renderHook(() => useAuth(), { wrapper })

    expect(result.current.userId).toEqual(user.id)
    await waitFor(() => !!result.current.user)

    expect(result.current.user).toEqual(user)
  })
})
