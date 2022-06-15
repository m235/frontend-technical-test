import React, { FC } from 'react'
import { useRouter } from 'next/router'

import Avatar from '@/components/avatar'
import { useAuth } from '@/contexts/auth'
import useConversations from '@/hooks/useConversations'
import useCreateConversation from '@/hooks/useCreateConversation'
import useUsers from '@/hooks/useUsers'
import { getNicknameInitials } from '@/utils/getNicknameInitials'

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

  // todo: utils
  const alreadyExist = conversations?.reduce((acc, curr) => [...acc, curr.recipientId, curr.senderId], [userId]) ?? []

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
