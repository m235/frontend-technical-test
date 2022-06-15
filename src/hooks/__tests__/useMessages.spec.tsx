import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useMessages from '@/hooks/useMessages'
import apiClient from '@/services/client'
import type { Message } from '@/types/message'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useConversations', () => {
  let mock
  const messages: Message[] = [
    { id: 1, timestamp: new Date().getTime(), authorId: 1, conversationId: 1, body: 'Foo' },
    { id: 2, timestamp: new Date().getTime(), authorId: 2, conversationId: 1, body: 'Bar' },
  ]

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    const conversationId = 1
    mock.onGet(`/messages/${conversationId}`).reply(200, messages)

    const { result, waitFor } = renderHook(() => useMessages(conversationId), { wrapper })

    expect(result.current.isLoading).toBeTruthy()

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.data).toEqual(messages)
  })
})
