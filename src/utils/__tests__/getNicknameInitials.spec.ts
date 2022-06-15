import { getNicknameInitials } from '@/utils/getNicknameInitials'

describe('utils:getNicknameInitials', () => {
  it('should return a single letter', () => {
    const expected = 'J'

    expect(getNicknameInitials('Jeremie')).toEqual(expected)
  })

  it('should return a couple of letter', () => {
    const expected = 'JT'

    expect(getNicknameInitials('Jeremie Testeur')).toEqual(expected)
    expect(getNicknameInitials('Jeremie Testeur Long')).toEqual(expected)
  })

  it('should return an empty string', () => {
    const expected = ''

    expect(getNicknameInitials('')).toEqual(expected)
  })
})
