import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { ConversationsApi, getConversations } from '@/services/conversations'
import type { Conversation } from '@/types/conversation'

const useConversations = (userId?: number) => {
  return useQuery<Conversation[], AxiosError>([ConversationsApi.CONVERSATIONS, userId], () => getConversations(userId), {
    enabled: !!userId,
    useErrorBoundary: true,
  })
}

export default useConversations
