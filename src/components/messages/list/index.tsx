import React, { FC, useEffect, useRef } from 'react'

import Empty from '@/components/messages/empty'
import MessageBubble from '@/components/messages/messageBubble'
import { useAuth } from '@/contexts/auth'
import useMessages from '@/hooks/useMessages'

import * as Styles from './styles'
import Loading from '@/components/messages/loading'

interface Props {
  conversationId: number
}

const MessagesList: FC<Props> = ({ conversationId }) => {
  const messageListRef = useRef<HTMLDivElement>(null)
  const { userId } = useAuth()

  const { data: messages, isLoading, isError } = useMessages(conversationId)

  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }
  }, [messages])

  return (
    <Styles.MessagesContainer ref={messageListRef}>
      {isLoading && <Loading />}
      {!isLoading && messages?.length === 0 ? (
        <Empty />
      ) : (
        <>
          {messages?.map((message) => (
            <Styles.MessageWrapper key={message.id} isMine={message.authorId === userId}>
              <MessageBubble {...message} isMine={message.authorId === userId} />
            </Styles.MessageWrapper>
          ))}
        </>
      )}
    </Styles.MessagesContainer>
  )
}

export default MessagesList
