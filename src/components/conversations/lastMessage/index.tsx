import React, { FC } from 'react'

import { TextSkeleton } from '@/components/skeleton/styles'
import useMessages from '@/hooks/useMessages'

import * as Styles from './styles'

interface Props {
  conversationId: number
}

const LastMessage: FC<Props> = ({ conversationId }) => {
  const { data: messages, isLoading } = useMessages(conversationId)
  const lastMessage = messages?.at(-1)

  if (isLoading) {
    return <TextSkeleton data-testid="loading" />
  }
  if (!lastMessage) return null

  return (
    <>
      <Styles.ConversationLastMessage data-testid="body">{lastMessage.body}</Styles.ConversationLastMessage>
      <Styles.ConversationLastMessageDate data-testid="date">
        {new Date(lastMessage.timestamp).toDateString()}
      </Styles.ConversationLastMessageDate>
    </>
  )
}

export default LastMessage
