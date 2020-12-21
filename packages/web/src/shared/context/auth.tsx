import React, { useState } from 'react'

import { IProps } from '../interface/props'
import { IAuth } from '../interface/auth'

export const AuthContext = React.createContext<any>([])

const initialValue: IAuth = {
  token: '',
  isAuth: false,
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(initialValue)
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider
