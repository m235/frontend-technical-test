import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { UseMutationOptions } from 'react-query/types/react/types'

import type { Conversation } from '@/types/conversation'
import { ConversationsApi, createConversation } from '@/services/conversations'

type PartialConversation = Omit<Conversation, 'id'>
type Options = UseMutationOptions<Conversation, AxiosError, PartialConversation>

const useCreateConversation = (userId: number, options?: Options) => {
  return useMutation<Conversation, AxiosError, PartialConversation>(
    [ConversationsApi.CONVERSATIONS, userId],
    createConversation,
    options
  )
}

export default useCreateConversation
