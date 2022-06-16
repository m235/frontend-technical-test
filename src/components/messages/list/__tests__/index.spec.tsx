import MessagesList from '@/components/messages/list'
import useAuth from '@/hooks/useAuth'
import useMessages from '@/hooks/useMessages'
import { render } from '@/tests/utils'
import type { Conversation } from '@/types/conversation'
import { Message } from '@/types/message'

const mockedUseAuth = useAuth as jest.Mock<any>
const mockedUseMessages = useMessages as jest.Mock<any>
jest.mock('@/hooks/useAuth')
jest.mock('@/hooks/useMessages')

describe('components:conversations:list', () => {
  const conversation: Conversation = {
    id: 1,
    recipientNickname: 'Johnny Hallyday',
    recipientId: 2,
    senderNickname: 'John Travolta',
    senderId: 1,
  }
  const messages: Message[] = [
    { id: 1, timestamp: new Date().getTime(), authorId: 1, conversationId: 1, body: 'Foo' },
    { id: 2, timestamp: new Date().getTime(), authorId: 2, conversationId: 1, body: 'Bar' },
  ]

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
    mockedUseMessages.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', () => {
    const { container } = render(<MessagesList conversationId={conversation.id} />)

    expect(container).toMatchSnapshot()
  })
  it('should render loading messages', () => {
    const { getByTestId } = render(<MessagesList conversationId={conversation.id} />)

    expect(getByTestId('message-loading')).toBeInTheDocument()
  })
  it('should render no message', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: [] }))
    const { getByTestId } = render(<MessagesList conversationId={conversation.id} />)

    expect(getByTestId('no-message')).toBeInTheDocument()
  })
  it('should render all the messages', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: messages }))
    const { getByText } = render(<MessagesList conversationId={conversation.id} />)

    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByText('Bar')).toBeInTheDocument()
  })
})
