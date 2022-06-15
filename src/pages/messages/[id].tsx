import type { FC } from 'react'
import { dehydrate, QueryClient } from 'react-query'

import Conversation from '@/components/conversation'
import { ConversationsApi, getConversations } from '@/services/conversations'
import { getLoggedUserId } from '@/utils/getLoggedUserId'

const Messages: FC = () => {
  return <Conversation />
}

export async function getServerSideProps() {
  const userId = getLoggedUserId()
  const queryClient = new QueryClient()

  // note(mlaigle): let's assume we want to have user's conversations fetched from server, ?
  // maybe we should only prefetch the conversation we need to render this page
  await queryClient.prefetchQuery([ConversationsApi.CONVERSATIONS, userId], () => getConversations(userId))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Messages
