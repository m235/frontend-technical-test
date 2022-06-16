import { render } from '@/tests/utils'

import ErrorBoundary from '@/components/errorBoundary'

describe('components:errorBoundary', () => {
  const FailingComponent = () => {
    throw new Error('Oops')
  }
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  it('should render default correctly', () => {
    const { container } = render(<ErrorBoundary>Children</ErrorBoundary>)

    expect(container).toMatchSnapshot()
  })

  it('should render the fallback in case of failure', () => {
    const FailingComponent = () => {
      throw new Error('Oops')
    }

    const { getByTestId } = render(
      <ErrorBoundary fallbackComponent={<h1 data-testid="fallback">Error</h1>}>
        <FailingComponent />
      </ErrorBoundary>
    )

    const element = getByTestId('fallback')
    expect(element).toBeTruthy()
    expect(element.textContent).toEqual('Error')
  })

  it('should render nothing if no fallback', () => {
    const { container } = render(
      <ErrorBoundary>
        <FailingComponent />
      </ErrorBoundary>
    )

    expect(container.childElementCount).toEqual(0)
  })
})
