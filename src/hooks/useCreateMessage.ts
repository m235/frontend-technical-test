import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { UseMutationOptions } from 'react-query/types/react/types'

import type { Message } from '@/types/message'
import { createMessage, MessagesApi } from '@/services/messages'

type PartialMessage = Omit<Message, 'id'>
type Options = UseMutationOptions<Message, AxiosError, PartialMessage>

const useCreateMessage = (conversationId: number, options?: Options) => {
  return useMutation<Message, AxiosError, PartialMessage>([MessagesApi.MESSAGES, conversationId], createMessage, options)
}

export default useCreateMessage
