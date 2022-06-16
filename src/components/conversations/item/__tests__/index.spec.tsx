import ConversationListItem from '@/components/conversations/item'
import useAuth from '@/hooks/useAuth'
import { render } from '@/tests/utils'
import type { Conversation } from '@/types/conversation'

const mockedUseAuth = useAuth as jest.Mock<any>
jest.mock('@/hooks/useAuth')

describe('components:conversations:item', () => {
  const conversation: Conversation = { id: 1, recipientNickname: 'John', recipientId: 1, senderNickname: 'Travolta', senderId: 2 }

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', () => {
    const { container } = render(<ConversationListItem conversation={conversation} />)

    expect(container).toMatchSnapshot()
  })
})
