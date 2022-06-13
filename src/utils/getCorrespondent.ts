import type { Conversation } from '@/types/conversation'

export const getCorrespondent = (userId: number, conversation: Conversation) => {
  switch (userId) {
    case conversation.senderId:
      return conversation.recipientNickname
    case conversation.recipientId:
      return conversation.senderNickname
    default:
      throw new Error('You are nor the recipient nor the sender')
  }
}
