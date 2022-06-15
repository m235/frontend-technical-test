import React, { createContext, FC, ReactNode, useContext } from 'react'

import useUser from '@/hooks/useUser'
import type { User } from '@/types/user'
import { getLoggedUserId } from '@/utils/getLoggedUserId'

type CtxProps = {
  userId?: number | null
  user?: [User]
}

export const AuthContext = createContext<CtxProps>({
  userId: null,
  user: null,
})

interface Props {
  children?: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const userId = getLoggedUserId()

  const { data } = useUser(userId)

  return <AuthContext.Provider value={{ userId, user: data }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
