import STORAGE from '../constants/storage'

export const getToken = () => {
  const dataStr = localStorage.getItem(STORAGE.AUTH) || ''
  const { token } = JSON.parse(dataStr)
  if (token) {
    return token
  }
  return ''
}

export const getHeader = () => {
  let header: any = []
  const token = getToken()
  if (token) {
    header['x-access-token'] = token
  }
  return header
}
