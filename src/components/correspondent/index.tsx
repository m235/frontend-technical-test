import React, { FC } from 'react'

import { useAuth } from '@/contexts/auth'
import type { Conversation as ConversationType } from '@/types/conversation'
import { getCorrespondent } from '@/utils/getCorrespondent'

interface Props {
  conversation?: ConversationType
}

const Correspondent: FC<Props> = ({ conversation }) => {
  const { userId } = useAuth()
  if (!conversation || !userId) return null

  return <span>{getCorrespondent(userId, conversation)}</span>
}

export default Correspondent
