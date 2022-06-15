import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { TextSkeleton } from '@/components/skeleton/styles'
import Correspondent from '@/components/correspondent'
import { useAuth } from '@/contexts/auth'
import useConversations from '@/hooks/useConversations'
import useDeleteConversation from '@/hooks/useDeleteConversation'
import { getCorrespondent } from '@/utils/getCorrespondent'
import { isSender } from '@/utils/isSender'

import * as Styles from './styles'
import useMessages from '@/hooks/useMessages'

interface Props {
  conversationId: number
}

const MessagesDetails: FC<Props> = ({ conversationId }) => {
  const { userId } = useAuth()
  const router = useRouter()

  const { data: conversations } = useConversations(userId)
  const { data: messages, isLoading } = useMessages(conversationId)

  const { mutate: deleteConv, isLoading: isDeleting } = useDeleteConversation(conversationId, {
    onSuccess: () => {
      router.push('/conversations')
    },
  })

  // note(mlaigle): maybe we can use dedicated endpoints here, but it will cost 2 extra http calls so let's see
  const conversation = conversations?.find((conversation) => conversation.id === conversationId)
  const lastMessage = messages?.at(-1)

  return (
    <Styles.DetailBox>
      <Styles.DetailHeader>
        <Styles.Avatar>{getCorrespondent(userId, conversation)}</Styles.Avatar>
        <Styles.DetailTitle>
          Conversation with <Correspondent conversation={conversation} />
        </Styles.DetailTitle>
        {isLoading && <TextSkeleton />}
        {!isLoading && lastMessage && (
          <Styles.LastMessageDate>Last message: {new Date(lastMessage.timestamp).toDateString()}</Styles.LastMessageDate>
        )}
      </Styles.DetailHeader>
      {isSender(userId, conversation) && (
        <Styles.DeleteButton disabled={isDeleting} onClick={() => deleteConv(conversationId)} variant="secondary">
          <i className="fa-solid fa-trash-can" /> Delete this conversation
        </Styles.DeleteButton>
      )}
    </Styles.DetailBox>
  )
}

export default MessagesDetails
