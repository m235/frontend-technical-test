import { getCorrespondent } from '@/utils/getCorrespondent'

const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
);

describe('services:conversations', () => {
  describe('getCorrespondent', () => {
    it('should return the senderNickname', () => {
      const expected = 'Mael'

      expect(getCorrespondent(2, conversation)).toEqual(expected)
    })
  })
})
