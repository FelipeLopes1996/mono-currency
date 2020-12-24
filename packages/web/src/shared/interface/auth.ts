export interface IAuthProfile {
  id?: number
  name?: string
  avata?: string
  username?: string
  email?: string
  role?: string
}

export interface IAuth {
  token: string
  isAuth: boolean
  profile?: IAuthProfile
}
