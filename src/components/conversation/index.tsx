import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MessagesDetails from '@/components/messages/details'
import MessagesFooter from '@/components/messages/footer'
import MessagesList from '@/components/messages/list'

import * as Styles from './styles'
import ErrorBoundary from '@/components/errorBoundary'

const Conversation: FC = () => {
  const router = useRouter()

  const conversationId = Number(router.query.id)

  return (
    <ErrorBoundary fallbackComponent={<h1>Something went wrong with this conversation...</h1>}>
      <Styles.Container>
        <Styles.Conversation>
          <ErrorBoundary fallbackComponent={<h1>Could not load messages...</h1>}>
            <MessagesList conversationId={conversationId} />
            <MessagesFooter conversationId={conversationId} />
          </ErrorBoundary>
        </Styles.Conversation>
        <Styles.SideContainer>
          <Styles.GoBackContainer>
            <Link href="/conversations">
              <Styles.BackLink tabIndex={0}>&larr; Go back to the list</Styles.BackLink>
            </Link>
          </Styles.GoBackContainer>
          <MessagesDetails conversationId={conversationId} />
        </Styles.SideContainer>
      </Styles.Container>
    </ErrorBoundary>
  )
}

export default Conversation
