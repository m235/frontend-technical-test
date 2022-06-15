import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { getUser, UsersApi } from '@/services/users'
import type { User } from '@/types/user'

const useUser = (userId: number) => {
  return useQuery<[User], AxiosError>([UsersApi.GET_USER_BY_ID, userId], () => getUser(userId), {
    useErrorBoundary: true,
  })
}

export default useUser
