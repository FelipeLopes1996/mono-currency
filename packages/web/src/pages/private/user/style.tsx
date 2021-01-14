import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`

export const Header = styled.section`
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
`
export const Title = styled.h2`
  font-size: 1.4rem;
`

export const Link = styled(LinkRouter)`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: ${props => props.theme.fg.info};
  border-color: ${props => props.theme.fg.info};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: ${props => rgba(props.theme.fg.info, 0.6)};
    border-color: ${props => rgba(props.theme.fg.info, 0.6)};
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  color: ${props => props.theme.fg.info};
`
