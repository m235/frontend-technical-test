import apiClient from '@/services/client'
import type { Conversation } from '@/types/conversation'

export enum ConversationsApi {
  CONVERSATIONS = '/conversations/:userId',
  CONVERSATION = '/conversation/:conversationId',
}

export const getConversations = async (userId: number) => {
  const { data } = await apiClient.get<Conversation[]>(ConversationsApi.CONVERSATIONS.replace(':userId', String(userId)))

  return data
}

export const createConversation = async (conversation: Omit<Conversation, 'id'>) => {
  const { data } = await apiClient.post<Conversation>(
    ConversationsApi.CONVERSATIONS.replace(':userId', String(conversation.senderId)),
    {
      ...conversation,
    }
  )

  return data
}

export const deleteConversation = async (conversationId: number) => {
  const { data } = await apiClient.delete<any>(ConversationsApi.CONVERSATION.replace(':conversationId', String(conversationId)))

  return data
}
