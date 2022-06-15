import type { Conversation } from '@/types/conversation'

export const getUserIdsFromConversations = (conversations?: Conversation[]) =>
  Array.from<number>(new Set(conversations?.reduce((acc, curr) => [...acc, curr.recipientId, curr.senderId], []) ?? []))
