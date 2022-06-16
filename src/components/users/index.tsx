import React, { FC, useMemo } from 'react'
import { useRouter } from 'next/router'

import Avatar from '@/components/avatar'
import useAuth from '@/hooks/useAuth'
import useConversations from '@/hooks/useConversations'
import useCreateConversation from '@/hooks/useCreateConversation'
import useUsers from '@/hooks/useUsers'
import { getNicknameInitials } from '@/utils/getNicknameInitials'
import { getUserIdsFromConversations } from '@/utils/getUserIdsFromConversations'

import * as Styles from './styles'

const UserList: FC = () => {
  const { userId } = useAuth()
  const router = useRouter()

  const { data: users } = useUsers()
  const { data: conversations } = useConversations(userId)

  const { mutate } = useCreateConversation(userId, {
    onSuccess: (data) => {
      router.push(`/messages/${data.id}`)
    },
  })

  const alreadyExist = useMemo(() => [...getUserIdsFromConversations(conversations), userId], [conversations, userId])

  return (
    <Styles.Container role="list">
      {users
        ?.filter((user) => !alreadyExist.includes(user.id))
        .map((user) => (
          <Styles.UserBox
            role="listitem"
            tabIndex={0}
            key={user.id}
            onClick={() =>
              mutate({ senderId: userId, recipientId: user.id, recipientNickname: user.nickname, senderNickname: 'userId' })
            }
          >
            <Avatar>{getNicknameInitials(user.nickname)}</Avatar>
            {user.nickname}
          </Styles.UserBox>
        ))}
    </Styles.Container>
  )
}

export default UserList
