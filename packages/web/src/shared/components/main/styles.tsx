import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: calc(var(--navleft-width-close) + 1rem);
  padding-bottom: var(--footer-height);
  transition: padding-left 0.6s cubic-bezier(0.2, 01, 0.22, 1);

  &.open {
    padding-left: calc(var(--navleft-width-open) + 1rem);
  }
`

export const Wrap = styled.section``
