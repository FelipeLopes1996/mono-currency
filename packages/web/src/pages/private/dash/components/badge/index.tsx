import React from 'react'
import { ICurrency } from '../../../../../shared/interface/currency'

import { Container, Header, Box, Title, Currency } from './style'
import Card from '../card'

interface Props {
  data: ICurrency
}

const Badge: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Card>
        <Header>
          <Box>
            <Title>{data.name}</Title>
          </Box>
          <Box>
            <Currency>{data.volume}</Currency>
          </Box>
        </Header>
        <h3>{data.name}</h3>
      </Card>
    </Container>
  )
}

export default Badge
