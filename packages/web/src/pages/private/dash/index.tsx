import React, { useEffect, useState } from 'react'

import { getCurrency } from '../../../shared/service/currency'
import { ICurrency } from '../../../shared/interface/currency'

import Badges from './components/badge'
import Card from './components/card'
import Table from './components/table'

import { Container, Header, Body } from './style'

const Dash: React.FC = () => {
  const [currency, setCurrency] = useState<ICurrency[]>([])
  const [top, setTop] = useState<ICurrency[]>([])

  useEffect(() => {
    const init = async () => {
      if (currency.length === 0) {
        const response = await getCurrency()
        const top4 = response.filter((_, index) => index <= 3)
        setTop(top4)
        setCurrency(response)
      }
    }
    init()
  }, [currency])

  return (
    <Container>
      <Header>
        {top.length > 0 &&
          top.map((data, index) => <Badges data={data} key={index} />)}
      </Header>
      <Body>
        <Card>
          <Table data={currency} />
        </Card>
      </Body>
    </Container>
  )
}

export default Dash
