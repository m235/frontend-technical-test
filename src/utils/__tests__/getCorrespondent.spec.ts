import { getCorrespondent } from '@/utils/getCorrespondent'

describe('utils:getCorrespondent', () => {
  const conversation = { senderNickname: 'Mael', recipientNickname: 'Not Mael', senderId: 1, recipientId: 2, id: 1 }
  it('should return the senderNickname', () => {
    const expected = 'Mael'

    expect(getCorrespondent(2, conversation)).toEqual(expected)
  })
  it('should return the recipientNickname', () => {
    const expected = 'Not Mael'

    expect(getCorrespondent(1, conversation)).toEqual(expected)
  })
  it('should throw an exception', () => {
    const expected = () => getCorrespondent(3, conversation)
    expect(expected).toThrowError('You are nor the recipient nor the sender')
  })
})
