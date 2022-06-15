import type { Conversation } from '@/types/conversation'

export const isSender = (userId: number, conversation: Conversation) => userId === conversation.senderId
