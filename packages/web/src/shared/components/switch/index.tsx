import React from 'react'
import useDarkMode from '../../hooks/useDarkMode'

const Switch = () => {
  return <button onClick={useDarkMode}>Switch</button>
}

export default Switch
