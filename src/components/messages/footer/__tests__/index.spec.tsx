import { fireEvent, waitFor } from '@testing-library/dom'

import MessagesFooter from '@/components/messages/footer'
import useAuth from '@/hooks/useAuth'
import useCreateMessage from '@/hooks/useCreateMessage'
import { render } from '@/tests/utils'

const mockedUseAuth = useAuth as jest.Mock<any>
const mockedUseCreateMessage = useCreateMessage as jest.Mock<any>
jest.mock('@/hooks/useAuth')
jest.mock('@/hooks/useCreateMessage')

describe('components:conversations:footer', () => {
  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
    mockedUseCreateMessage.mockImplementation(() => ({ isLoading: false, mutate: () => null }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render default correctly', () => {
    const { container } = render(<MessagesFooter conversationId={1} />)

    expect(container).toMatchSnapshot()
  })
  it('should have a disabled button by default', () => {
    const { getByTestId } = render(<MessagesFooter conversationId={1} />)

    expect(getByTestId('send-msg-btn')).toBeDisabled()
  })
  it('should send a message if btn active and clicked', async () => {
    mockedUseCreateMessage.mockImplementation(() => ({ isLoading: false, mutate: createFn }))
    const createFn = jest.fn()
    const { getByTestId } = render(<MessagesFooter conversationId={1} />)

    fireEvent.change(getByTestId('input-text'), { target: { value: 'Message' } })

    expect(getByTestId('send-msg-btn')).toBeEnabled()

    fireEvent.click(getByTestId('send-msg-btn'))

    expect(createFn).toHaveBeenCalledTimes(1)
    expect(createFn).toHaveBeenCalledWith(expect.objectContaining({ body: 'Message', authorId: 1, conversationId: 1 }))
  })
})
