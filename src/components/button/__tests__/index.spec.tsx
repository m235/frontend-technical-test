import { render } from '@/tests/utils'

import Button from '@/components/button'

describe('components:button', () => {
  it('should render default correctly', () => {
    const { container } = render(<Button>Children</Button>)

    expect(container).toMatchSnapshot()
  })
  it('should render secondary correctly', () => {
    const { container } = render(<Button variant="secondary">Children</Button>)

    expect(container).toMatchSnapshot()
  })
})
