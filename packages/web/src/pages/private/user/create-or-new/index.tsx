import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Form from '../components/form'
import { Container, Desciption } from './style'

type IParams = { user: string }

const CreateOrNewUser: React.FC<RouteComponentProps<IParams>> = props => {
  const formDisable = (): boolean => {
    return props.location.pathname.includes('show')
  }
  return (
    <Container>
      <Desciption>Create User</Desciption>
      <Form {...props} disabled={formDisable()} />
    </Container>
  )
}

export default CreateOrNewUser
