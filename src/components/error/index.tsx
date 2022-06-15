import React, { FC, ReactNode } from 'react'

import * as Styles from './styles'

interface Props {
  children: ReactNode
  isFullScreen?: boolean
}

const Error: FC<Props> = ({ children, isFullScreen }) => {
  return (
    <Styles.Container isFullScreen={isFullScreen}>
      <i className="fa-solid fa-bug"></i>
      <Styles.ErrorMessage>{children}</Styles.ErrorMessage>
    </Styles.Container>
  )
}

export default Error
