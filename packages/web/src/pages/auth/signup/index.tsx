import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Nav, Link, Tittle } from './style'
import Form from './components/form'

const SignUp: React.FC<RouteComponentProps> = props => {
  console.log(props)
  return (
    <Container>
      <Nav>
        <Link to="/">Back </Link>
        <Link to="/signin">Sign In</Link>
      </Nav>
      <Tittle>Sign Up</Tittle>
      <Form {...props} />
    </Container>
  )
}

export default SignUp
