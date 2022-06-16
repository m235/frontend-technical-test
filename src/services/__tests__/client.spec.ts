import NProgress from 'nprogress'

import { calculatePercentage, update } from '@/services/client'

describe('services:client', () => {
  describe('calculatePercentage', () => {
    it('should return the right percentage', () => {
      const expected = 0.1

      expect(calculatePercentage(10, 100)).toEqual(expected)
    })
  })
  describe('update', () => {
    it('should call NProgress', () => {
      const spy = jest.spyOn(NProgress, 'set').mockImplementation(() => {})

      const args = { loaded: 10, total: 100 }
      update(args)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(0.1)
    })
  })
})
