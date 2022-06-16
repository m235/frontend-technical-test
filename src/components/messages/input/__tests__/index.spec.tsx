import { render } from '@/tests/utils'

import Input from '@/components/messages/input'

describe('components:messages:input', () => {
  it('should render default correctly', () => {
    const { container } = render(<Input />)

    expect(container).toMatchSnapshot()
  })
})
