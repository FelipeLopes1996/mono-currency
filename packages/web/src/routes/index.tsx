import React from 'react'

import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/auth/signin'
import SignUp from '../pages/auth/signup'
import Home from '../pages/public/home'

import PrivateRoute from './private'

import Dash from '../pages/private/dash'
import User from '../pages/private/user'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Signup" component={SignUp} />
      <Route path="/Signin" component={SignIn} />

      <PrivateRoute path="/dash" component={Dash} />
      <PrivateRoute path="/user" component={User} />
    </Switch>
  )
}

export default Routes
