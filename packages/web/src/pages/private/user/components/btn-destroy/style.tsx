import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1rem;
  margin: 0.2rem 0;
  padding: 0.2rem;
  border: none;
  border-right: 0.2rem solid transparent;
  background: transparent;
  color: ${props => props.theme.fg.body};
  transition: all 0.3s ease-in-out;
  transition: width 0.6s cubic-bezier(0.2, 01, 0.22, 1);
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  color: ${props => props.theme.fg.danger};
`
