import React from 'react'

import Fullscreen from '../fullscreen/index'
import Switch from '../switch'

import Hamburguer from '../hamburguer/index'
import {
  Content,
  WrapLogo,
  WrapToggle,
  WrapFullscreen,
  WrapNav,
  WrapSwitch,
  Link,
  Logo,
} from './styles'

const Header: React.FC = () => {
  return (
    <Content>
      <WrapLogo>
        <Logo icon={['fab', 'phoenix-framework']} />
      </WrapLogo>
      <WrapToggle>
        <Hamburguer />
      </WrapToggle>
      <WrapFullscreen>
        <Fullscreen />
      </WrapFullscreen>
      <WrapNav>
        <Link activeClassName="active" to="/pipeline">
          Pipelines
        </Link>
        <Link activeClassName="active" to="/Codes">
          Codes
        </Link>
        <Link activeClassName="active" to="/Activity">
          Activity
        </Link>
      </WrapNav>
      <WrapSwitch>
        <Switch />
      </WrapSwitch>
    </Content>
  )
}

export default Header
