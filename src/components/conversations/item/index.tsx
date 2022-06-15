import Link from 'next/link'
import React, { FC } from 'react'

import LastMessage from '@/components/conversations/lastMessage'
import Correspondent from '@/components/correspondent'
import ErrorBoundary from '@/components/errorBoundary'
import { useAuth } from '@/contexts/auth'
import { getCorrespondent } from '@/utils/getCorrespondent'
import type { Conversation } from '@/types/conversation'

import * as Styles from './styles'

interface Props {
  conversation: Conversation
}

const ConversationListItem: FC<Props> = ({ conversation }) => {
  const { userId } = useAuth()

  return (
    <Link href={`/messages/${conversation.id}`}>
      <a>
        <Styles.Container role="listitem">
          <Styles.Avatar>{getCorrespondent(userId, conversation)}</Styles.Avatar>
          <Styles.ConversationDetail>
            <Styles.ConversationTitle>
              <Correspondent conversation={conversation} />
            </Styles.ConversationTitle>
            <ErrorBoundary>
              <LastMessage conversationId={conversation.id} />
            </ErrorBoundary>
          </Styles.ConversationDetail>
        </Styles.Container>
      </a>
    </Link>
  )
}

export default ConversationListItem
