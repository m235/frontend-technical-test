import { act } from '@/tests/utils'
import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { QueryClient, QueryClientProvider } from 'react-query'

import useCreateConversation from '@/hooks/useCreateConversation'
import apiClient from '@/services/client'
import type { Conversation } from '@/types/conversation'

const queryClient = new QueryClient()
const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

describe('hooks:useCreateConversation', () => {
  let mock
  const userId = 1
  const conversation: Conversation = { id: 1, recipientNickname: 'John', recipientId: 2, senderNickname: 'Travolta', senderId: 1 }

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  it('should return the right data from hook', async () => {
    const { id, ...newConv } = conversation
    const onSuccess = jest.fn()
    const { result, waitFor } = renderHook(() => useCreateConversation(userId, { onSuccess }), { wrapper })

    await act(async () => {
      mock.onPost(`/conversations/${userId}`).reply(200, conversation)
      await result.current.mutate(newConv)
      expect(result.current.isLoading).toBeTruthy()
    })

    await waitFor(() => !result.current.isLoading)

    expect(result.current.isLoading).toBeFalsy()
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledWith(conversation, newConv, undefined)
  })
})
