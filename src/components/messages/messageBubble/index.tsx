import React, { FC } from 'react'

import type { Message as MessageType } from '@/types/message'

import * as Styles from './styles'

type Props = Pick<MessageType, 'body'> & {
  isMine: boolean
}

const MessageBubble: FC<Props> = ({ body, isMine }) => {
  return (
    <Styles.MessageContainer isMine={isMine}>
      <p>{body}</p>
    </Styles.MessageContainer>
  )
}

export default MessageBubble
