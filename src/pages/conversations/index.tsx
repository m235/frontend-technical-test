import Link from 'next/link'
import React, { FC } from 'react'
import { dehydrate, QueryClient } from 'react-query'

import ConversationList from '@/components/conversations/list'
import ErrorBoundary from '@/components/errorBoundary'
import FloatingAdd from '@/components/floatingAdd'
import { ConversationsApi, getConversations } from '@/services/conversations'
import { getLoggedUserId } from '@/utils/getLoggedUserId'

const Conversations: FC = () => {
  return (
    <ErrorBoundary fallbackComponent={<h1>Error</h1>}>
      <Link href="/conversations/new">
        <FloatingAdd />
      </Link>
      <ConversationList />
    </ErrorBoundary>
  )
}

export async function getServerSideProps() {
  const userId = getLoggedUserId()
  const queryClient = new QueryClient()

  // note(mlaigle): let's assume we want to have user's conversations fetched from server. pwa ?
  await queryClient.prefetchQuery([ConversationsApi.CONVERSATIONS, userId], () => getConversations(userId))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Conversations
