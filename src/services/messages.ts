import apiClient from '@/services/client'

export enum MessagesApi {
  MESSAGES = '/conversations/:conversationId',
  MESSAGE = '/conversation/:messageId',
}

export const getMessages = async (conversationId: number) =>
  apiClient.get<any>(MessagesApi.MESSAGES.replace(':conversationId', String(conversationId)))

export const createConversation = async (conversationId: number) =>
  apiClient.delete<any>(MessagesApi.MESSAGES.replace(':conversationId', String(conversationId)))

export const deleteMessage = async (messageId: number) =>
  apiClient.delete<any>(MessagesApi.MESSAGE.replace(':messageId', String(messageId)))
