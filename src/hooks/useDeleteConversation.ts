import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { UseMutationOptions } from 'react-query/types/react/types'

import type { Conversation } from '@/types/conversation'
import { deleteConversation } from '@/services/conversations'

type Options = UseMutationOptions<Conversation, AxiosError, number>

const useDeleteConversation = (conversationId: number, options?: Options) => {
  return useMutation<Conversation, AxiosError, number>(deleteConversation, options)
}

export default useDeleteConversation
