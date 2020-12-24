import React from 'react'

import STORAGE from '../constants/storage'
import useStore from '../hooks/useStore'
import { IProps } from '../interface/props'
import { IAuth } from '../interface/auth'

export const AuthContext = React.createContext<any>([])

const initialValue: IAuth = {
  token: '',
  isAuth: false,
  profile: {},
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [auth, setAuth] = useStore<IAuth>(STORAGE.AUTH, initialValue)
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider
