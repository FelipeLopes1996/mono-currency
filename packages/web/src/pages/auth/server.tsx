import { ILogin } from '../../shared/interface/login'
import { IAuthProfile } from '../../shared/interface/auth'
import { Fetch, FetchTwo } from '../../shared/service/fetch'
import API from '../../shared/constants/api'
import { IUser } from '../../shared/interface/user'

const getProfile = (token: string): IAuthProfile => {
  const base = token.split('.')[1]
  const str = atob(base)
  const { role, user } = JSON.parse(str)

  let profile: any = {}

  if (user) {
    const userKeys = ['id', 'name', 'username', 'avata', 'email']
    Object.keys(user).forEach((key: string) => {
      if (userKeys.includes(key)) {
        if (user[key] && user[key] !== null && user[key] !== undefined) {
          profile[key] = user[key]
        }
      }
    })
  }
  if (role && role.name) {
    profile.role = role.name
  }

  return profile
}

export const _getProfile = (token: string): IAuthProfile => {
  const base = token.split('.')[1]
  const str = atob(base)
  const { role, user } = JSON.parse(str)

  let profile: IAuthProfile = {}

  if (user) {
    const { id, name, username, avata, email } = user
    profile = { id, name, username, avata, email }
  }
  if (role && role.name) {
    profile.role = role.name
  }

  return profile
}

export const _LoginServer = async (body: ILogin): Promise<any> => {
  try {
    const { token } = await FetchTwo(API.AUTH_SIGNIN, { method: 'post', body })
    const profile = _getProfile(token)
    return { token, profile }
  } catch (error) {
    const message = await error
    console.log({ message })
  }
}

export const LoginServer = async (body: ILogin): Promise<any> => {
  try {
    const { token } = await Fetch(API.AUTH_SIGNIN, { method: 'post', body })
    const profile = getProfile(token)

    return { token, profile }
  } catch (error) {
    const message = await error
    console.log(message)
  }
}

export const SigninUpServer = async (body: IUser): Promise<any> => {
  try {
    const { token } = await Fetch(API.AUTH_SIGNUP, { method: 'post', body })
    const profile = getProfile(token)

    return { token, profile }
  } catch (error) {
    const message = await error
    console.log(message)
  }
}
