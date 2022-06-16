import React, { FC } from 'react'

import * as Styles from './styles'

const Loading: FC = () => {
  return (
    <Styles.Container data-testid="message-loading">
      <i className="fa-solid fa-message" />
      <Styles.Text>Loading messages...</Styles.Text>
    </Styles.Container>
  )
}

export default Loading
