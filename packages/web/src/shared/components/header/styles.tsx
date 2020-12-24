import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Content = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.fg.light};
  height: var(--header-height);
  width: 100vw;
`
export const WrapLogo = styled.div`
  color: ${props => props.theme.fg.body};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  height: var(--header-height);
  width: var(--navleft-width-close);
  border-right: solid 0.06rem ${props => props.theme.fg.light};

  &::after {
    content: ' ';
    position: absolute;
    top: calc(var(--header-height) - 0.06rem);
    background: ${props => props.theme.bg.light};
    height: 0.06rem;
    width: calc(var(--navleft-width-close) - 0.6rem);
  }
`

export const WrapToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  border-bottom: solid 0.06rem ${props => props.theme.fg.light};
  margin-left: 0.3rem;
`

export const WrapFullscreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.06rem ${props => props.theme.fg.light};
  border-left: solid 0.06rem ${props => props.theme.fg.light};
  border-right: solid 0.06rem ${props => props.theme.fg.light};
`

export const WrapNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  border-bottom: solid 0.06rem ${props => props.theme.fg.light};
`

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0.6rem;
  height: var(--header-height);
  min-width: 4rem;
  font-size: 1rem;
  color: ${props => props.theme.fg.light};
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 0.2rem solid transparent;
  transition: all 0.3s ease-in-out;

  &.active {
    color: ${props => props.theme.fg.info};
    border-bottom: 0.2rem solid ${props => props.theme.fg.info};
  }
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.fg.danger};
  font-size: 1rem;
`
export const Logo = styled(FontAwesomeIcon)`
  color: ${props => props.theme.fg.body};
  font-size: 2.4rem;
`
