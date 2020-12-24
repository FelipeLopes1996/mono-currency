import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { IProps } from '../interface/props'
import STORAGE from '../constants/storage'
import themes from '../styles/themes'
import useStore from '../hooks/useStore'

export const ThemeContext = React.createContext<any>([])

const Provider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useStore<DefaultTheme>(STORAGE.THEME, themes.dark)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Provider
