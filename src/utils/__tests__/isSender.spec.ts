import { isSender } from '@/utils/isSender'

describe('utils:isSender', () => {
  const conversation = { senderNickname: 'Mael', recipientNickname: 'Not Mael', senderId: 1, recipientId: 2, id: 1 }

  it('should return true', () => {
    expect(isSender(1, conversation)).toBeTruthy()
  })
  it('should return false', () => {
    expect(isSender(2, conversation)).toBeFalsy()
  })
})
