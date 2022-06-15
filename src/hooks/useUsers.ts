import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { getUsers, UsersApi } from '@/services/users'
import type { User } from '@/types/user'

const useUsers = () => {
  return useQuery<User[], AxiosError>(UsersApi.GET_USERS, () => getUsers(), {
    useErrorBoundary: true,
  })
}

export default useUsers
