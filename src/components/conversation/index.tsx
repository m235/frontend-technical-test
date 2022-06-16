import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Error from '@/components/error'
import ErrorBoundary from '@/components/errorBoundary'
import MessagesDetails from '@/components/messages/details'
import MessagesFooter from '@/components/messages/footer'
import MessagesList from '@/components/messages/list'

import * as Styles from './styles'

const Conversation: FC = () => {
  const router = useRouter()

  const conversationId = Number(router.query.id)

  return (
    <ErrorBoundary fallbackComponent={<Error>Something went wrong with this conversation...</Error>}>
      <Styles.Container>
        <Styles.Conversation>
          <ErrorBoundary fallbackComponent={<Error>Cannot load messages...</Error>}>
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
