import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-height: 6rem;

  &:first-of-type {
    margin-left: 0rem;
  }
  &:last-of-type {
    margin-right: 0rem;
  }

  &:nth-of-type(1) {
    h2 {
      color: '#F7931A';
    }
  }

  &:nth-of-type(2) {
    h2 {
      color: ${props => props.theme.fg.danger};
    }
  }

  &:nth-of-type(3) {
    h2 {
      color: '#46AE8E';
    }
  }

  &:nth-of-type(3) {
    h2 {
      color: ${props => props.theme.fg.danger};
    }
  }
`
export const Header = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Box = styled.div`
  flex-grow: 1;
`

export const Title = styled.h2``

export const Currency = styled.h4`
  text-align: right;
`
