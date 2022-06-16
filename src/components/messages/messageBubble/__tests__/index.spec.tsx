import { render } from '@/tests/utils'

import MessageBubble from '@/components/messages/messageBubble'

describe('components:messages:messageBubble', () => {
  it('should render default correctly', () => {
    const { container } = render(<MessageBubble body="Hello" isMine={false} />)

    expect(container).toMatchSnapshot()
  })
  it('should render mine correctly', () => {
    const { container } = render(<MessageBubble body="Hello Me" isMine={true} />)

    expect(container).toMatchSnapshot()
  })
})
