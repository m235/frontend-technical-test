import apiClient from '@/services/client'
import { User } from '@/types/user'

export enum UsersApi {
  GET_USERS = '/users',
  GET_USER_BY_ID = '/user/:id',
}

export const getUsers = async () => {
  const { data } = await apiClient.get<User[]>(UsersApi.GET_USERS)

  return data
}

export const getUser = async (userId: number) => {
  const { data } = await apiClient.get<[User]>(UsersApi.GET_USER_BY_ID.replace(':id', String(userId)))

  return data
}
