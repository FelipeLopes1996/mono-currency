import styled from 'styled-components'
import { rgba } from 'polished'

export const FormConatainer = styled.form``

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
`

export const Button = styled.button`
  padding: 1rem;
  background: ${props => rgba(props.theme.bg.info, 0.8)};
  color: ${props => props.theme.fg.body};
  border: none;
  border-radius: 0.4rem;

  &,
  &:focus,
  &:active {
    outline: none;
  }
`

export const Input = styled.input`
  padding: 1rem 0.4rem;
  border: solid 0.04rem transparent;
  background: ${props => rgba(props.theme.bg.secondary, 0.1)};
  color: ${props => props.theme.fg.body};

  &,
  &:focus,
  &:active {
    outline: none;
  }
  &.error {
    border-color: ${props => props.theme.fg.danger};
  }
`
