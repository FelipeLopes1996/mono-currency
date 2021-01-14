import React from 'react'
import Switcher from 'react-switch'

import useDarkMode from '../../hooks/useDarkMode'
import THEME from '../../constants/theme'

const Switch: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <Switcher
      checked={theme && theme.title === THEME.DARK}
      onChange={toggleTheme}
      className="react-switch"
    />
  )
}

export default Switch
