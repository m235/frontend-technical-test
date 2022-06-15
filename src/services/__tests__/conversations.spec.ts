import MockAdapter from 'axios-mock-adapter'

import apiClient from '@/services/client'
import { getConversations, createConversation, deleteConversation } from '@/services/conversations'
import type { Conversation } from '@/types/conversation'

describe('services:conversations', () => {
  const userId = 1
  const conversations: Conversation[] = [
    { id: 1, recipientNickname: 'John', recipientId: 1, senderNickname: 'Travolta', senderId: 2 },
    { id: 2, recipientNickname: 'John', recipientId: 1, senderNickname: 'Lennon', senderId: 2 },
  ]
  let mock

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  describe('getConversations', () => {
    it('should return the right payload', async () => {
      mock.onGet(`/conversations/${userId}`).reply(200, conversations)
      const result = await getConversations(userId)

      expect(result).toEqual(conversations)
    })
    it('should return an error', async () => {
      mock.onGet(`/conversations/${userId}`).reply(500, conversations)

      const expected = async () => {
        await getConversations(userId)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
  describe('createConversation', () => {
    it('should return the right payload if creation is success', async () => {
      const { id, ...conversation } = conversations[1]
      const response = { id: 1, ...conversation }

      mock.onPost(`/conversations/${conversation.senderId}`).reply(200, response)
      const result = await createConversation(conversation)

      expect(result).toEqual(response)
    })

    it('should return an error', async () => {
      const { id, ...conversation } = conversations[1]

      mock.onPost(`/conversations/${conversation.senderId}`).reply(500)

      const expected = async () => {
        await createConversation(conversation)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
  describe('deleteConversation', () => {
    it('should return the right payload if delete is success', async () => {
      const conversation = conversations[1]
      const response = { id: 1 }

      mock.onDelete(`/conversation/${conversation.id}`).reply(200, response)
      const result = await deleteConversation(conversation.id)

      expect(result).toEqual(response)
    })

    it('should return an error', async () => {
      const conversation = conversations[1]

      mock.onDelete(`/conversation/${conversation.id}`).reply(500)

      const expected = async () => {
        await deleteConversation(conversation.id)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
})
