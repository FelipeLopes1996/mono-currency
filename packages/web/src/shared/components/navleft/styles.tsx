import styled from 'styled-components'
import { rgba } from 'polished'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.section`
  /* position: fixed; */
  position: absolute;
  top: var(--header-height);
  left: 0;
  height: calc(100vh - var(--header-height));
  width: var(--navleft-width-close);
  border-right: solid 0.06rem ${props => props.theme.fg.default};
  transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  &.open {
    width: var(--navleft-width-open);
  }
  /* background: $ {props => props.theme.bg.danger}; */
`

export const Nav = styled.nav`
  position: fixed;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: var(--navleft-width-close);
  .open & {
    width: var(--navleft-width-open);
  }
`

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: var(--navleft-width-close);
  margin: 0.6rem 0;
  padding: 0.8rem;
  border-right: 0.2rem solid transparent;
  color: ${props => props.theme.fg.body};
  transition: all 0.3s ease-in-out;
  transition: width 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  .open & {
    width: var(--navleft-width-open);
  }
  &:nth-of-type(1) {
    margin-top: 1.6rem;
  }
  &.active {
    /* rgba(13, 124, 175, 0.1); */
    background: ${props => rgba(props.theme.fg.info, 0.1)};
    border-right: 0.2rem solid ${props => props.theme.fg.info};
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: var(--navleft-width-close);
  margin: 0.6rem 0;
  padding: 0.8rem;
  border: none;
  border-right: 0.2rem solid transparent;
  background: transparent;
  color: ${props => props.theme.fg.body};
  transition: all 0.3s ease-in-out;
  transition: width 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  .open & {
    width: var(--navleft-width-open);
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;
  .active & {
    color: ${props => props.theme.fg.info};
  }
`
