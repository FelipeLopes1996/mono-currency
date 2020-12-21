import React from 'react'
import { Link } from 'react-router-dom'

const SignIn: React.FC<any> = props => {
  console.log(props)
  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
      <br />
      <h2>SignIn</h2>
    </div>
  )
}

export default SignIn
