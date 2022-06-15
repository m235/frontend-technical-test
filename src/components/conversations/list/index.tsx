import React, { FC } from 'react'

import ConversationListItem from '@/components/conversations/item'
import { useAuth } from '@/contexts/auth'
import useConversations from '@/hooks/useConversations'

import * as Styles from './styles'

const ConversationItem: FC = () => {
  const { userId } = useAuth()
  const { data: conversations } = useConversations(userId)

  return (
    <Styles.Container role="list">
      {conversations?.map((conversation) => (
        <ConversationListItem key={conversation.id} conversation={conversation} />
      ))}
    </Styles.Container>
  )
}

export default ConversationItem
