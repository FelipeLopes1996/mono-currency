import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
  border: none;
  height: var(--header-height);
  padding-right: 1rem;
  padding-left: 1rem;
  cursor: pointer;

  &,
  &:active,
  &:focus {
    outline: none;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: ${props => props.theme.fg.body};
`
