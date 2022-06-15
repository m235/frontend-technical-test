import MockAdapter from 'axios-mock-adapter'

import apiClient from '@/services/client'
import { getUsers, getUser } from '@/services/users'
import type { User } from '@/types/user'

describe('services:users', () => {
  const users: User[] = [
    { id: 1, nickname: 'John', token: 'x' },
    { id: 2, nickname: 'Travolta', token: 'x' },
  ]
  let mock

  beforeAll(() => {
    mock = new MockAdapter(apiClient)
  })

  afterEach(() => {
    mock.reset()
  })
  describe('getUsers', () => {
    it('should return the right payload', async () => {
      mock.onGet(`/users`).reply(200, users)
      const result = await getUsers()

      expect(result).toEqual(users)
    })
    it('should return an error', async () => {
      mock.onGet(`/users`).reply(500)

      const expected = async () => {
        await getUsers()
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
  describe('getUser', () => {
    it('should return the right payload if creation is success', async () => {
      const userId = 1
      const response = users[0]

      mock.onGet(`/user/${userId}`).reply(200, response)
      const result = await getUser(userId)

      expect(result).toEqual(response)
    })

    it('should return an error', async () => {
      const userId = 1

      mock.onGet(`/user/${userId}`).reply(500)

      const expected = async () => {
        await getUser(userId)
      }

      expect(expected()).rejects.toThrow('Request failed with status code 500')
    })
  })
})
