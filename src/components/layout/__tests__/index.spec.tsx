import { render } from '@/tests/utils'

import Layout from '@/components/layout'

describe('components:layout', () => {
  it('should render default correctly', () => {
    const { container } = render(<Layout>Children</Layout>)

    expect(container).toMatchSnapshot()
  })
})
