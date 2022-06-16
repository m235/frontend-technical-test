import { render } from '@/tests/utils'

import FloatingAdd from '@/components/floatingAdd'

describe('components:floatingAdd', () => {
  it('should render default correctly', () => {
    const { container } = render(<FloatingAdd />)

    expect(container).toMatchSnapshot()
  })
})
