import LastMessage from '@/components/conversations/lastMessage'
import useMessages from '@/hooks/useMessages'
import { render } from '@/tests/utils'
import type { Conversation } from '@/types/conversation'
import type { Message } from '@/types/message'

const mockedUseMessages = useMessages as jest.Mock<any>
jest.mock('@/hooks/useMessages')

describe('components:conversations:lastMessage', () => {
  const conversation: Conversation = { id: 1, recipientNickname: 'John', recipientId: 1, senderNickname: 'Travolta', senderId: 2 }
  const messages: Message[] = [
    { id: 1, timestamp: new Date().getTime(), authorId: 1, conversationId: 1, body: 'Foo' },
    { id: 2, timestamp: new Date().getTime(), authorId: 2, conversationId: 1, body: 'Bar' },
  ]

  beforeEach(() => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', async () => {
    const { container } = render(<LastMessage conversationId={conversation.id} />)

    expect(container).toMatchSnapshot()
  })

  it('should render the loading component', async () => {
    const { getByTestId } = render(<LastMessage conversationId={conversation.id} />)

    expect(getByTestId('loading')).toBeTruthy()
  })

  it('should render the last message body and date', async () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: messages }))

    const { getByTestId, queryByTestId } = render(<LastMessage conversationId={conversation.id} />)

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(getByTestId('body')).toHaveTextContent('Bar')
    expect(getByTestId('date')).toBeInTheDocument()
  })

  it('should return null if no message', async () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: [] }))

    const { queryByTestId } = render(<LastMessage conversationId={conversation.id} />)

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(queryByTestId('body')).not.toBeInTheDocument()
    expect(queryByTestId('date')).not.toBeInTheDocument()
  })
})
