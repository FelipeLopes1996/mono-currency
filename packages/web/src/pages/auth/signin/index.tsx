import React from 'react'
import { Container, Nav, Link, Tittle } from './style'
import Form from './components/form'
import { RouteComponentProps } from 'react-router-dom'

const SignIn: React.FC<RouteComponentProps> = props => {
  return (
    <Container>
      <Nav>
        <Link to="/">Back </Link>
        <Link to="/signup">Sign In</Link>
      </Nav>
      <Tittle>Sign In</Tittle>
      <Form {...props} />
    </Container>
  )
}

export default SignIn
