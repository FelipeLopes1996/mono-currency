import { Fetch } from './fetch'
import { getHeader } from '../utils/token'

import API from '../constants/api'
import { IUser } from '../interface/user'

export const getUsers = async () => {
  const options = {
    headers: getHeader(),
    method: 'get',
  }
  const result = await Fetch(API.BASE_USERS, options)
  return result
}

export const findUser = async (id: number) => {
  const options = {
    headers: getHeader(),
    method: 'get',
  }
  const url = `${API.BASE_USERS}/show/${id}`
  const result = await Fetch(url, options)
  return result
}

export const destroyUser = async (id: number) => {
  const options = {
    headers: getHeader(),
    method: 'delete',
  }
  const url = `${API.BASE_USERS}/${id}`
  const result = await Fetch(url, options)
  return result
}

export const storyUser = async (body: IUser) => {
  const options = {
    headers: getHeader(),
    method: 'post',
    body,
  }
  const url = `${API.BASE_USERS}`
  const result = await Fetch(url, options)
  return result
}

export const updateUser = async (body: IUser, id: number) => {
  const options = {
    headers: getHeader(),
    method: 'put',
    body,
  }
  const url = `${API.BASE_USERS}/${id}`
  const result = await Fetch(url, options)
  return result
}
