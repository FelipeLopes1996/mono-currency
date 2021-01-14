const validateEmail = (data: string) => {
  let email: any
  if (!data) {
    email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data)) {
    email = 'Invalid email address'
  }
  return email
}

const validateUsername = (data: string) => {
  let username: any
  if (!data) {
    username = 'Required'
  }
  return username
}

const validatePassword = (data: string) => {
  let password: any
  if (!data) {
    password = 'Required'
  } else if (data.length < 6) {
    password = 'Invalid password'
  }
  return password
}

const validateConfirmPassword = (data: string, confirm: string) => {
  let password: any
  if (!confirm) {
    password = 'Required'
  } else if (confirm.length < 6) {
    password = 'Invalid password'
  } else if (confirm !== data) {
    password = 'Invalid password'
  }
  return password
}

export const validateInputs = (data: any) => {
  let errors: any = {}
  const isInvalidEmail = validateEmail(data.email)
  const isInvalidUsername = validateUsername(data.username)
  const isInvalidPassword = validatePassword(data.password)
  const isInvalidConfirmPassword = validateConfirmPassword(
    data.password,
    data.confirmPassword
  )

  if (isInvalidEmail) {
    errors.email = isInvalidEmail
  }
  if (isInvalidUsername) {
    errors.username = isInvalidUsername
  }
  if (isInvalidPassword) {
    errors.password = isInvalidPassword
  }
  if (isInvalidConfirmPassword) {
    errors.confirmPassword = isInvalidConfirmPassword
  }

  return errors
}
