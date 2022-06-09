import React, {createContext, ReactNode, useContext} from 'react'

import { getLoggedUserId } from '@/utils/getLoggedUserId'

type CtxProps = {
    userId?: number | null
}
export const AuthContext = createContext<CtxProps>({
    userId: null
})

type Props = {
    children?: ReactNode
    initialTranslations?: Record<string, string>
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const userId = getLoggedUserId()

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider