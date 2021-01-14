import React from 'react'

import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/auth/signin'
import SignUp from '../pages/auth/signup'
import Home from '../pages/public/home'

import PrivateRoute from './private'

import Dash from '../pages/private/dash'
import User from '../pages/private/user'
import CreateOrNewUser from '../pages/private/user/create-or-new'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Signup" component={SignUp} />
      <Route path="/Signin" component={SignIn} />

      <PrivateRoute path="/dash" component={Dash} />
      <PrivateRoute path="/user" exact component={User} />
      <PrivateRoute path="/user/:user" component={CreateOrNewUser} />
      <PrivateRoute path="/user/:user/:show" component={CreateOrNewUser} />
    </Switch>
  )
}

export default Routes
