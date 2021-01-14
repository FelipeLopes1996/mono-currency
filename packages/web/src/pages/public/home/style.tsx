import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { rgba } from 'polished'

export const Container = styled.section`
  padding: 2rem;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

export const Link = styled(LinkRouter)`
  padding: 0.5rem;
  transition: 0.3 all ease-in-out;

  &:hover {
    color: ${props => rgba(props.theme.fg.body, 0.6)};
  }
`

export const Tittle = styled.h2``
