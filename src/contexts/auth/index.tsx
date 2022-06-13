import { AxiosError } from 'axios'
import React, { createContext, FC, ReactNode, useContext } from 'react'
import { useQuery } from 'react-query'

import { getUser } from '@/services/users'
import { User } from '@/types/user'
import { getLoggedUserId } from '@/utils/getLoggedUserId'

type CtxProps = {
  userId?: number | null
  user?: User
}

export const AuthContext = createContext<CtxProps>({
  userId: null,
  user: null,
})

type Props = {
  children?: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const userId = getLoggedUserId()

  const { data } = useQuery<User, AxiosError>(['user', userId], async () => {
    const { data } = await getUser(userId)

    return data[0]
  })

  return <AuthContext.Provider value={{ userId, user: data }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
