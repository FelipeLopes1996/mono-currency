import { useContext } from 'react'

import { ThemeContext } from '../context/theme'
import THEME from '../constants/theme'
import themes from '../styles/themes'

export default function useDarkMode() {
  const [theme, setTheme] = useContext(ThemeContext)

  const toogleTheme = () => {
    const mode = theme.title === THEME.DARK ? THEME.LIGHT : THEME.DARK
    //   setTheme(themes[mode])
  }

  return [theme, toogleTheme]
}
