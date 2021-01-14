import React, { useContext } from 'react'
import { LayoutContext } from '../../context/layout'

import { Container, Box, Tittle, Animation, Line } from './style'

const Loading = () => {
  const [{ loading }] = useContext(LayoutContext)

  return (
    <Container className={loading ? 'active' : ''}>
      <Box>
        <Tittle>Loading</Tittle>
        <Animation>
          <Line />
          <Line />
          <Line />
        </Animation>
      </Box>
    </Container>
  )
}

export default Loading
