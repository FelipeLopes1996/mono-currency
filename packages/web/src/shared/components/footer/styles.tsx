import styled from 'styled-components'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: var(--navleft-width-close);
  background: ${props => props.theme.bg.dark};
  border-top: 0.1rem solid ${props => props.theme.fg.default};
  height: var(--footer-height);
  width: calc(100vw - var(--navleft-width-close));
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: width 0.6s cubic-bezier(0.2, 01, 0.22, 1);
  transition: left 0.6s cubic-bezier(0.2, 01, 0.22, 1);

  &.open {
    width: calc(100vw - var(--navleft-width-open));
    left: var(--navleft-width-open);
  }
`
