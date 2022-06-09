import apiClient from '@/services/client'

export enum UsersApi {
  GET_USERS = '/users',
  GET_USER_BY_ID = '/users/:id',
}

export const getUsers = async () => apiClient.get<any>(UsersApi.GET_USERS)

export const getUser = async (userId: number) => apiClient.delete<any>(UsersApi.GET_USER_BY_ID.replace(':id', String(userId)))
