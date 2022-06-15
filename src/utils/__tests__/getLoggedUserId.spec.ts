import { getLoggedUserId } from '@/utils/getLoggedUserId'

describe('utils:getLoggedUserId', () => {
  it('should return logged user id', () => {
    const expected = 1

    expect(getLoggedUserId()).toEqual(expected)
  })
})
