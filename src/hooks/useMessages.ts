import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { getMessages, MessagesApi } from '@/services/messages'
import type { Message } from '@/types/message'

const useMessages = (conversationId: number) => {
  return useQuery<Message[], AxiosError>([MessagesApi.MESSAGES, conversationId], () => getMessages(conversationId), {
    enabled: !!conversationId,
    useErrorBoundary: true,
  })
}

export default useMessages
