import React, { useState, useEffect } from 'react'

import { openFullscreen, closeFullscreen } from '../../utils/fullscreen'
import { Container, Icon } from './styles'

const Fullscreen = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    if (toggle) {
      openFullscreen() // se for true open
    } else {
      closeFullscreen() // se for false close
    }
  }, [toggle])

  return (
    <Container onClick={() => setToggle(!toggle)}>
      <Icon icon={['fas', toggle ? 'compress' : 'expand']} />
    </Container>
  )
}

export default Fullscreen
