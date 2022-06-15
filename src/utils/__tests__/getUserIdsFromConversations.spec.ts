import { getUserIdsFromConversations } from '@/utils/getUserIdsFromConversations'

describe('getNicknameInitials', () => {
  const conversations = [
    { senderNickname: 'Mael', recipientNickname: 'Not Mael', senderId: 1, recipientId: 2, id: 1 },
    { senderNickname: 'Mael 2', recipientNickname: 'Not Mael 2', senderId: 3, recipientId: 4, id: 2 },
    { senderNickname: 'Mael 3', recipientNickname: 'Mael 2', senderId: 5, recipientId: 3, id: 3 },
  ]

  it('should return a the right array', () => {
    const expected = [1, 2, 3, 4, 5]
    expect(getUserIdsFromConversations(conversations)).toHaveLength(expected.length)

    expected.forEach((item) => {
      expect(getUserIdsFromConversations(conversations).includes(item)).toBeTruthy()
    })
  })

  it('should return an empty array', () => {
    const expected = []
    expect(getUserIdsFromConversations([])).toEqual(expected)
    expect(getUserIdsFromConversations()).toEqual(expected)
  })
})
