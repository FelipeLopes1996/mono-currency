import React from 'react'

import { ICurrency } from '../../../../../shared/interface/currency'
import { TableContainer, TableHeader, TableBody, Tr, Th, Td } from './style'

interface Props {
  data: ICurrency[]
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <Tr>
          <Th>#ID</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24H</Th>
          <Th>7d</Th>
          <Th>Market Cap</Th>
          <Th>Volume</Th>
        </Tr>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((currency, index) => (
            <Tr key={index}>
              <Td>{currency.id}</Td>
              <Td>{currency.name}</Td>
              <Td>{currency.price}</Td>
              <Td>{currency['24h']}</Td>
              <Td>{currency['7d']}</Td>
              <Td>{currency.market_cap}</Td>
              <Td>{currency.volume}</Td>
            </Tr>
          ))}
      </TableBody>
    </TableContainer>
  )
}

export default Table
