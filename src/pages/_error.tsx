import { FC } from 'react'

import ErrorComp from '@/components/error'

const Error: FC = () => (
  <ErrorComp isFullScreen={true}>
    <h2>Something bad happen!</h2>
  </ErrorComp>
)

export default Error
