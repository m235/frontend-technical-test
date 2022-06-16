import { render } from '@/tests/utils'

import Loading from '@/components/messages/loading'

describe('components:messages:loading', () => {
  it('should render default correctly', () => {
    const { container } = render(<Loading />)

    expect(container).toMatchSnapshot()
  })
})
