import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useCreateMessage from '@/hooks/useCreateMessage'
import apiClient from '@/services/client'
import { act } from '@/tests/utils'
import type { Message } from '@/types/message'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useCreateMessage', () => {
  let mock
  const conversation = { id: 1, recipientNickname: 'John', recipientId: 2, senderNickname: 'Travolta', senderId: 1 }
  const message: Message = { id: 1, timestamp: 2, body: 'Foo', authorId: 1, conversationId: 1 }

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    const onSuccess = jest.fn()
    const { id, ...newMessage } = message
    const { result, waitFor } = renderHook(() => useCreateMessage(conversation.id, { onSuccess }), { wrapper })

    await act(async () => {
      mock.onPost(`/messages/${conversation.id}`).reply(200, message)
      await result.current.mutate(newMessage)
      expect(result.current.isLoading).toBeTruthy()
    })

    await waitFor(() => !result.current.isLoading)

    expect(result.current.isLoading).toBeFalsy()
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledWith(message, newMessage, undefined)
  })
})
