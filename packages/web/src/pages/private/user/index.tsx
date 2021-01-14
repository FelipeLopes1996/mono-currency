import React from 'react'

import Table from './components/table'
import { Container, Header, Body, Link, Title, Icon } from './style'

const User: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Header</Title>
        <Link to="/user/new">
          <Icon icon={['fas', 'user-plus']} />
        </Link>
      </Header>
      <Body>
        <Table />
      </Body>
    </Container>
  )
}

export default User
