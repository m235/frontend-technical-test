import React, { FC } from 'react'

import { Message as MessageType } from '@/types/message'

import * as Styles from './styles'

type Props = MessageType & {
  isMine: boolean
}

const Message: FC<Props> = ({ id, body, isMine }) => {
  return (
    <Styles.MessageContainer isMine={isMine}>
      <p>{body}</p>
    </Styles.MessageContainer>
  )
}

export default Message
