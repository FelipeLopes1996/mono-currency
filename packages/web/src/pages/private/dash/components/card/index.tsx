import React from 'react'

import { IProps } from '../../../../../shared/interface/props'
import { Container } from './style'

const Card: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Card
