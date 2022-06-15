import MockAdapter from 'axios-mock-adapter'

import apiClient from '@/services/client'
import { getMessages, createMessage } from '@/services/messages'
import type { Message } from '@/types/message'

describe('services:messages', () => {
  const conversationId = 1
  const messages: Message[] = [
    { id: 1, timestamp: new Date().getTime(), authorId: 1, conversationId: 1, body: 'Foo' },
    { id: 2, timestamp: new Date().getTime(), authorId: 2, conversationId: 1, body: 'Bar' },
  ]
  let mock

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  describe('getMessages', () => {
    it('should return the right payload', async () => {
      mock.onGet(`/messages/${conversationId}`).reply(200, messages)
      const result = await getMessages(conversationId)

      expect(result).toEqual(messages)
    })
    it('should return an error', async () => {
      mock.onGet(`/messages/${conversationId}`).reply(500)

      const expected = async () => {
        await getMessages(conversationId)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
  describe('createMessage', () => {
    it('should return the right payload if creation is success', async () => {
      const { id, ...message } = messages[1]
      const response = { id: 1, ...message }

      mock.onPost(`/messages/${conversationId}`).reply(200, response)
      const result = await createMessage(message)

      expect(result).toEqual(response)
    })

    it('should return an error', async () => {
      const { id, ...message } = messages[1]

      mock.onPost(`/messages/${conversationId}`).reply(500)

      const expected = async () => {
        await createMessage(message)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
})
