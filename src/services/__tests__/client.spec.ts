import { calculatePercentage } from '@/services/client'

describe('services:client', () => {
  describe('calculatePercentage', () => {
    it('should return the right percentage', () => {
      const expected = 0.1

      expect(calculatePercentage(10, 100)).toEqual(expected)
    })
  })
})
