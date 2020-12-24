import React, { useContext } from 'react'

import { LayoutContext } from '../../context/layout'
import { Container } from './styles'

const Footer: React.FC = () => {
  const [layout] = useContext(LayoutContext)
  return (
    <Container className={layout.nav ? 'open' : ''}>
      <h1>Footer</h1>
    </Container>
  )
}

export default Footer
