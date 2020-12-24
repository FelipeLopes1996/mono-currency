import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { FormConatainer, FormGroup, Label, Input, Button } from './style'
import { useFormik } from 'formik'
import { LoginServer } from '../../../server'
import { AuthContext } from '../../../../../shared/context/auth'

const Form: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: value => {
      let errors: any = {}
      if (!value.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)
      ) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
    onSubmit: values => {
      handlerLogin(values)
    },
  })

  const handlerLogin = async (body: any) => {
    const { token, profile } = await LoginServer(body)
    if (token) {
      setAuth({ ...auth, isAuth: true, token, profile })
      history.push('/dash')
    }
  }
  return (
    <FormConatainer onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormConatainer>
  )
}

export default Form
