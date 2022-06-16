import apiClient from '@/services/client'
import type { Message } from '@/types/message'

export enum MessagesApi {
  MESSAGES = '/messages/:conversationId',
}

export const getMessages = async (conversationId: number) => {
  const { data } = await apiClient.get<Message[]>(MessagesApi.MESSAGES.replace(':conversationId', String(conversationId)))

  return data
}

export const createMessage = async ({ authorId, conversationId, body, timestamp }: Omit<Message, 'id'>) => {
  const { data } = await apiClient.post<Message>(MessagesApi.MESSAGES.replace(':conversationId', String(conversationId)), {
    authorId,
    body,
    conversationId,
    timestamp,
  })

  return data
}
