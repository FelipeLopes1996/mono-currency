import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useFormik } from 'formik'
import {
  FormContainer,
  FormGroup,
  FormLineGroup,
  Label,
  Input,
  Button,
  ContainerPassword,
} from './style'

import { validateInputs } from './validate'
import {
  storyUser,
  findUser,
  updateUser,
} from '../../../../../shared/service/users'
import { IUser } from '../../../../../shared/interface/user'

type IParams = { user: string }

interface Props extends RouteComponentProps<IParams> {
  disabled: boolean
}

const Form: React.FC<Props> = ({ disabled, history, match: { params } }) => {
  const [user, setUser] = useState<IUser>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user,
    validate: validateInputs,
    onSubmit: values => {
      if (values.id) {
        updateUserHandler(values)
      } else {
        createUserHandler(values)
      }
    },
  })

  const updateUserHandler = async (body: any) => {
    try {
      const response = await updateUser(body, Number(body.id))
      toast.success(`User (${response.name}) 'update'}!`)
      history.push('/user')
    } catch (error) {
      toast.error('Something is wrong!')
    }
  }

  const createUserHandler = async (body: any) => {
    try {
      const response = await storyUser(body)
      toast.success(`User (${response.name})'created'}!`)
      history.push('/user')
    } catch (error) {
      toast.error('Something is Wrong!')
    }
  }

  useEffect(() => {
    const findAsyncUSer = async (id: number) => {
      try {
        const response = await findUser(id)
        setUser({ ...response, confirmPassword: '', password: '' })
      } catch (error) {
        toast.error('Something is woring!')
        history.push('/user')
      }
    }
    if (params && params.user) {
      if (params.user !== 'new') {
        findAsyncUSer(Number(params.user))
      }
    }
  }, [history, params])

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormLineGroup>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="JJoaquim"
            onChange={formik.handleChange}
            value={formik.values.name}
            disabled={disabled}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Jhon Joaquim"
            onChange={formik.handleChange}
            value={formik.values.username}
            disabled={disabled}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@domin.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            disabled={disabled}
          />
        </FormGroup>
      </FormLineGroup>
      <FormLineGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <ContainerPassword>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="* * * * * * *"
              onChange={formik.handleChange}
              value={formik.values.password}
              disabled={disabled}
            />
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="* * * * * * *"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              disabled={disabled}
            />
          </ContainerPassword>
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={disabled}>
            Submit
          </Button>
        </FormGroup>
      </FormLineGroup>
    </FormContainer>
  )
}

export default Form
