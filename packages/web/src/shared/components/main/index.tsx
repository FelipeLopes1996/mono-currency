import React, { useContext } from 'react'

import { LayoutContext } from '../../context/layout'
import { Container, Wrap } from './styles'

interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  const [layout] = useContext(LayoutContext)
  return (
    <Container className={layout.nav ? 'open' : ''}>
      <Wrap>{children}</Wrap>
    </Container>
  )
}

export default Main
