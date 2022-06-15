import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useConversations from '@/hooks/useConversations'
import apiClient from '@/services/client'
import { Conversation } from '@/types/conversation'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useConversations', () => {
  let mock
  const conversations: Conversation[] = [
    { id: 1, recipientNickname: 'John', recipientId: 1, senderNickname: 'Travolta', senderId: 2 },
    { id: 2, recipientNickname: 'John', recipientId: 1, senderNickname: 'Lennon', senderId: 2 },
  ]

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    const userId = 1
    mock.onGet(`/conversations/${userId}`).reply(200, conversations)

    const { result, waitFor } = renderHook(() => useConversations(userId), { wrapper })

    expect(result.current.isLoading).toBeTruthy()

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(conversations)
  })
})
