import useAuth from '@/hooks/useAuth'
import useMessages from '@/hooks/useMessages'
import { render } from '@/tests/utils'
import type { Conversation } from '@/types/conversation'
import { Message } from '@/types/message'
import MessagesDetails from '@/components/messages/details'
import useConversations from '@/hooks/useConversations'
import useDeleteConversation from '@/hooks/useDeleteConversation'
import { fireEvent } from '@testing-library/dom'

const mockedUseAuth = useAuth as jest.Mock<any>
const mockedUseConversations = useConversations as jest.Mock<any>
const mockedUseDeleteConversation = useDeleteConversation as jest.Mock<any>
const mockedUseMessages = useMessages as jest.Mock<any>
jest.mock('@/hooks/useAuth')
jest.mock('@/hooks/useConversations')
jest.mock('@/hooks/useMessages')
jest.mock('@/hooks/useDeleteConversation')

describe('components:conversations:details', () => {
  const conversations: Conversation[] = [
    {
      id: 1,
      recipientNickname: 'Bob',
      recipientId: 2,
      senderNickname: 'John Travolta',
      senderId: 1,
    },
    {
      id: 2,
      recipientNickname: 'John Travolta',
      recipientId: 1,
      senderNickname: 'Johnny Hallyday',
      senderId: 3,
    },
  ]
  const messages: Message[] = [
    { id: 1, timestamp: new Date().getTime(), authorId: 1, conversationId: 1, body: 'Foo' },
    { id: 2, timestamp: new Date().getTime(), authorId: 2, conversationId: 1, body: 'Bar' },
  ]

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
    mockedUseConversations.mockImplementation(() => ({ isLoading: false, data: conversations }))
    mockedUseMessages.mockImplementation(() => ({ isLoading: true }))
    mockedUseDeleteConversation.mockImplementation(() => ({ isLoading: true, mutate: () => null }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', () => {
    const { container } = render(<MessagesDetails conversationId={1} />)

    expect(container).toMatchSnapshot()
  })
  it('should render loading messages', () => {
    const { getByTestId } = render(<MessagesDetails conversationId={1} />)

    expect(getByTestId('text-skeleton')).toBeInTheDocument()
  })
  it('should not render the delete conversation button', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: [] }))
    const { queryByTestId } = render(<MessagesDetails conversationId={2} />)

    expect(queryByTestId('delete-conversation')).not.toBeInTheDocument()
  })
  it('should render the delete conversation button', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: [] }))
    const { getByTestId } = render(<MessagesDetails conversationId={1} />)

    expect(getByTestId('delete-conversation')).toBeInTheDocument()
  })
  it('should render the last message date', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: messages }))
    const { queryByTestId } = render(<MessagesDetails conversationId={2} />)

    expect(queryByTestId('last-message-date')).toBeInTheDocument()
  })
  it('should set the button has disabled', () => {
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: messages }))
    const { getByTestId } = render(<MessagesDetails conversationId={1} />)

    expect(getByTestId('delete-conversation')).toBeDisabled()
  })
  it('should call the mutation function with conversation id', () => {
    const deleteFn = jest.fn()
    mockedUseMessages.mockImplementation(() => ({ isLoading: false, data: messages }))
    mockedUseDeleteConversation.mockImplementation(() => ({ isLoading: false, mutate: deleteFn }))
    const { getByTestId } = render(<MessagesDetails conversationId={1} />)

    fireEvent.click(getByTestId('delete-conversation'))
    expect(deleteFn).toHaveBeenCalledTimes(1)
    expect(deleteFn).toHaveBeenCalledWith(1)
  })
})
