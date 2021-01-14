import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { toast } from 'react-toastify'

import useLoading from '../../../../../shared/hooks/useLoading'
import { FormConatainer, FormGroup, Label, Input, Button } from './style'
import { useFormik } from 'formik'
import { LoginServer } from '../../../server'
import { AuthContext } from '../../../../../shared/context/auth'
// import api from '../../../../../shared/constants/api'
// import { Body } from '../../../../private/dash/style'

const Form: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [, setLoading] = useLoading()

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
    const response = await LoginServer(body)
    if (!response) {
      toast.error("it's not Authenticate")
    } else {
      const { token, profile } = response
      if (token) {
        setLoading()
        toast.success('Is authenticate!')
        setAuth({ ...auth, isAuth: true, token, profile })
        history.push('/dash')
      } else {
        toast.error('Something is woring!')
      }
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
