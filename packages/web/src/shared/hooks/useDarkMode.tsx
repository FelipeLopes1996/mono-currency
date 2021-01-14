import { useContext } from 'react'

import { ThemeContext } from '../context/theme'
import STORAGE from '../constants/storage'
import THEME from '../constants/theme'
import themes from '../styles/themes'
import { DefaultTheme } from 'styled-components'

type Response = [DefaultTheme, any]

function useDarkMode(): Response {
  const [theme, setTheme] = useContext(ThemeContext)

  const toogleTheme = (): void => {
    const _theme = theme.title === THEME.DARK ? themes.light : themes.dark
    localStorage.setItem(STORAGE.THEME, JSON.stringify(theme))
    setTheme(_theme)
  }
  return [theme, toogleTheme]
}

export default useDarkMode
