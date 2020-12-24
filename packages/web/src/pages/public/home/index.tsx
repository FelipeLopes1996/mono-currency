import React from 'react'
import { Container, Nav, Link, Tittle } from './style'

import Switch from '../../../shared/components/switch'

const Home: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </Nav>
      <Tittle>Home</Tittle>
      <Switch />
    </Container>
  )
}

export default Home
