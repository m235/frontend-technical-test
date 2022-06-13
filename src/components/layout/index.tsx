import React, { FC, ReactNode } from 'react'

import * as Styles from './styles'
import Avatar, { Size, Variant } from '@/components/avatar'

type Props = {
  children?: ReactNode
}
const Message: FC<Props> = ({ children }) => {
  return (
    <Styles.Container>
      <Styles.Menu>
        <Styles.Avatar size={Size.SMALL} variant={Variant.SECONDARY}>
          ML
        </Styles.Avatar>
      </Styles.Menu>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export default Message
