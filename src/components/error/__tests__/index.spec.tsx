import { render } from '@/tests/utils'

import Error from '@/components/error'

describe('components:error', () => {
  it('should render default correctly', () => {
    const { container } = render(<Error>Children</Error>)

    expect(container).toMatchSnapshot()
  })
  it('should render full screen correctly', () => {
    const { container } = render(<Error isFullScreen={true}>Children</Error>)

    expect(container).toMatchSnapshot()
  })
})
