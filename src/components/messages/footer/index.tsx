import React, { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react'
import { useQueryClient } from 'react-query'

import { useAuth } from '@/contexts/auth'
import Button from '@/components/button'
import MessageInput from '@/components/messages/input'
import useCreateMessage from '@/hooks/useCreateMessage'
import { MessagesApi } from '@/services/messages'
import type { Message } from '@/types/message'

import * as Styles from './styles'

interface Props {
  conversationId: number
}

const MessagesFooter: FC<Props> = ({ conversationId }) => {
  const queryClient = useQueryClient()
  const { userId } = useAuth()
  const [body, setBody] = useState<string>('')

  const { mutate, isLoading: isCreating } = useCreateMessage(conversationId, {
    onSuccess: (data) => {
      // note(mlaigle): update existing cache with the response payload to avoid a fetch
      const messages = queryClient.getQueryData<Message[]>([MessagesApi.MESSAGES, conversationId])

      queryClient.setQueryData([MessagesApi.MESSAGES, conversationId], [...messages, data])
      setBody('')
    },
  })

  const handleSendMessage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (body) {
      mutate({ authorId: userId, conversationId: conversationId, body, timestamp: new Date().getTime() })
    }
  }

  const handleTypingMessage: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setBody(event.target.value)
  }

  return (
    <Styles.Footer>
      <MessageInput
        disabled={isCreating}
        value={body}
        onChange={handleTypingMessage}
        placeholder="Type your message..."
        rows={1}
        autoFocus={true}
      />
      <Button aria-label="Send" disabled={isCreating || !body} onClick={handleSendMessage} variant="primary">
        <i className="fa-solid fa-paper-plane" />
      </Button>
    </Styles.Footer>
  )
}

export default MessagesFooter
