import styled from 'styled-components'
import { rgba } from 'polished'

export const FormContainer = styled.form``

export const FormLineGroup = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
`

export const ContainerPassword = styled.div`
  flex-direction: row;
  justify-content: space-between;
  input {
    &:nth-of-type(2) {
      margin-left: 2rem;
    }
  }
`

export const Input = styled.input`
  padding: 1rem 0.4rem;
  border: solid 0.04rem transparent;
  background: ${props => rgba(props.theme.bg.secondary, 0.4)};
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

export const Label = styled.label`
  margin-bottom: 0.5rem;
`

export const Button = styled.button`
  padding: 1rem;
  background: ${props => rgba(props.theme.bg.info, 0.8)};
  color: ${props => props.theme.fg.body};
  border: none;
  border-radius: 0.4rem;
  margin-top: 1.7rem;
  &,
  &:focus,
  &:active {
    outline: none;
  }
`
