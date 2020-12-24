import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
  border: none;
  height: var(--header-height);
  cursor: pointer;

  &,
  &:active,
  &:focus {
    outline: none;
  }

  &.active {
    span {
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        width: 1.8rem;
      }
    }
  }
`

export const Line = styled.span`
  width: 2rem;
  height: 0.16rem;
  border-radius: 0.3rem;
  background-color: ${props => props.theme.fg.light};
  transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);

  &:nth-of-type(1) {
    margin-bottom: 0.5rem;
    width: 1rem;
  }
  &:nth-of-type(2) {
    width: 1.8rem;
  }
  &:nth-of-type(3) {
    margin-top: 0.5rem;
    width: 1.4rem;
  }
`
