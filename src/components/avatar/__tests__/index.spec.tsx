import { render } from '@/tests/utils'

import Avatar from '@/components/avatar'

describe('components:avatar', () => {
  it('should render default correctly', () => {
    const { container } = render(<Avatar>Children</Avatar>)

    expect(container).toMatchSnapshot()
  })
  it('should render small correctly', () => {
    const { container } = render(<Avatar size="small">Children</Avatar>)

    expect(container).toMatchSnapshot()
  })
  it('should contain an span', () => {
    const { getByTestId } = render(
      <Avatar>
        <span data-testid="avatar" />
      </Avatar>
    )

    expect(getByTestId('avatar')).toBeTruthy()
  })
  it('should contain a simple text', () => {
    const { getByText } = render(<Avatar>Children</Avatar>)
    expect(getByText('C').textContent).toEqual('C')
  })
})
