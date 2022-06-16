import ConversationList from '@/components/conversations/list'
import useAuth from '@/hooks/useAuth'
import useConversations from '@/hooks/useConversations'
import { render } from '@/tests/utils'
import type { Conversation } from '@/types/conversation'

const mockedUseAuth = useAuth as jest.Mock<any>
const mockedUseConversations = useConversations as jest.Mock<any>
jest.mock('@/hooks/useAuth')
jest.mock('@/hooks/useConversations')

describe('components:conversations:list', () => {
  const conversations: Conversation[] = [
    { id: 1, recipientNickname: 'Johnny Hallyday', recipientId: 2, senderNickname: 'John Travolta', senderId: 1 },
    { id: 2, recipientNickname: 'John Travolta', recipientId: 1, senderNickname: 'Henri', senderId: 3 },
  ]

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
    mockedUseConversations.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', () => {
    const { container } = render(<ConversationList />)

    expect(container).toMatchSnapshot()
  })

  it('should render all the conversation', () => {
    mockedUseConversations.mockImplementation(() => ({ isLoading: false, data: conversations }))
    const { getByText } = render(<ConversationList />)

    expect(getByText('Johnny Hallyday')).toBeTruthy()
    expect(getByText('Henri')).toBeTruthy()
  })
})
