import useAuth from '@/hooks/useAuth'
import { render } from '@/tests/utils'
import Correspondent from '@/components/correspondent'

const mockedUseAuth = useAuth as jest.Mock<any>
jest.mock('@/hooks/useAuth')

describe('components:correspondent', () => {
  const conversation = { id: 1, senderNickname: 'John Travolta', senderId: 1, recipientNickname: 'Henri', recipientId: 2 }

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ userId: 1, user: [{ id: 1, nickname: 'John Travolta', token: 'x' }] }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render nothing', async () => {
    mockedUseAuth.mockImplementation(() => ({ userId: null }))

    const { container } = render(<Correspondent />)

    expect(container).toMatchSnapshot()
    expect(container.childElementCount).toEqual(0)
  })
  it('should render correctly', async () => {
    const { container, getByText } = render(<Correspondent conversation={conversation} />)

    expect(container).toMatchSnapshot()
    expect(getByText('Henri')).toBeTruthy()
  })
})
