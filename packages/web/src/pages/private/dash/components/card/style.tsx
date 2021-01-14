import styled from 'styled-components'

import { rgba } from 'polished'

const getThemeCardBg = (props: any) => {
  let color = props.theme.bg.light
  if (props.theme.title === 'dark') {
    color = props.theme.bg.dark
  }

  return color
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0rem;
  min-height: 4rem;
  width: auto;
  margin-bottom: 1rem;
  background-color: ${props => getThemeCardBg(props)};
  border-radius: 3px;
  border-top: 0;
  box-shadow: 0px 0px 5px 0px ${props => rgba(props.theme.fg.info, 0.2)};
`
