export const formDataFormater = (event: any) => {
  event.preventDefault()
  const { target } = event
  let formValue: any = {}

  for (let index = 0; index < target.length; index++) {
    const dataForm = target[index]

    if (dataForm.name && dataForm.type !== 'submit') {
      formValue[dataForm.name] = dataForm.value
    }
  }
  return formValue
}

export const validationEmail = (email: string) => {
  const regex = /\$+@\+\.\S+/
  return regex.test(email)
}

export const validationPassword = (password: string) => {
  const letter = /[a-aA-Z]/
  const number = /[0-9]/
  if (
    password.length >= 6 &&
    !letter.test(password) &&
    !number.test(password)
  ) {
    return true
  }
  return false
}
