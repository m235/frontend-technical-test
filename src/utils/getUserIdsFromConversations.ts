import type { Conversation } from '@/types/conversation'

export const getUserIdsFromConversations = (conversations: Conversation[]) =>
  conversations?.reduce((acc, curr) => [...acc, curr.recipientId, curr.senderId], []) ?? []
