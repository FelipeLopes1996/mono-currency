import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'

import { LayoutContext } from '../../context/layout'
import { Container, Nav, Link, Icon, Button } from './styles'

const NavLeft: React.FC = () => {
  const [auth, setAuth] = useContext(AuthContext)
  const [layout] = useContext(LayoutContext)
  const [activeClass, setActiveClass] = useState<string>('')

  const logoutHandler = () => {
    setAuth({ ...auth, isAuth: false, token: '', profile: {} })
  }

  useEffect(() => {
    setActiveClass(layout.nav ? 'open' : '')
  }, [layout.nav])

  return (
    <Container className={activeClass}>
      <Nav>
        <Link activeClassName="active" exact to="/home">
          <Icon icon={['fab', 'phabricator']} />
        </Link>
        <Link activeClassName="active" to="/dash">
          <Icon icon={['far', 'chart-bar']} />
        </Link>
        <Link activeClassName="active" to="/roles">
          <Icon icon={['fab', 'ups']} />
        </Link>
        <Link activeClassName="active" to="/notification">
          <Icon icon={['far', 'bell']} />
        </Link>
        <Link activeClassName="active" to="/lab">
          <Icon icon={['fab', 'codepen']} />
        </Link>
        <Button onClick={logoutHandler}>
          <Icon icon={['fas', 'sign-out-alt']} />
        </Button>
      </Nav>
    </Container>
  )
}

export default NavLeft
