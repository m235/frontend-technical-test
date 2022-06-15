import React, { FC } from 'react'

import * as Styles from './styles'

const Empty: FC = () => {
  return (
    <Styles.Container>
      <i className="fa-solid fa-message" />
      <Styles.Text>There is no message yet.</Styles.Text>
    </Styles.Container>
  )
}

export default Empty
