import { render } from '@/tests/utils'

import Empty from '@/components/messages/empty'

describe('components:messages:empty', () => {
  it('should render default correctly', () => {
    const { container } = render(<Empty />)

    expect(container).toMatchSnapshot()
  })
})
