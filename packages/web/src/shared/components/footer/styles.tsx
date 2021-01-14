import styled from 'styled-components'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: var(--navleft-width-close);
  background: ${props => props.theme.bg.default};
  border-top: 0.08rem solid ${props => props.theme.fg.default};
  height: var(--footer-height);
  width: calc(100vw - var(--navleft-width-close));
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: width 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  transition: left 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  transition: all 0.6s ease-in-out;

  &.open {
    width: calc(100vw - var(--navleft-width-open));
    left: var(--navleft-width-open);
  }
`
