import apiClient from '@/services/client'

export enum ConversationsApi {
  CONVERSATIONS = '/conversations/:userId',
  CONVERSATION = '/conversation/:conversationId',
}

export const getConversations = async (userId: number) =>
  apiClient.get<any>(ConversationsApi.CONVERSATIONS.replace(':userId', String(userId)))

export const createConversation = async (userId: number) =>
  apiClient.delete<any>(ConversationsApi.CONVERSATIONS.replace(':userId', String(userId)))

export const deleteConversation = async (conversationId: number) =>
  apiClient.delete<any>(ConversationsApi.CONVERSATION.replace(':conversationId', String(conversationId)))
