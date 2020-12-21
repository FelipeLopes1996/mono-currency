import React, { useContext } from 'react'

import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom'

import { AuthContext } from '../shared/context/auth'
import PrivateLayout from '../shared/layouts/private'

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const [{ isAuth }] = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
