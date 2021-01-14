import { IFetch } from '../interface/fetch'

const statusErros = [301, 400, 401, 500]

const formatHeader = (data?: any) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (data) {
    Object.keys(data).forEach((key: string) => {
      headers.append(key, data[key])
    })
  }
  return headers
}

const formatMethod = (data?: string) => {
  const ListMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  let method = 'GET'

  if (data && ListMethods.includes(String(data).toUpperCase())) {
    method = String(data).toUpperCase()
  }
  return method
}

const formatOptions = (opts?: IFetch): IFetch => {
  let options: IFetch = opts || {}

  options.headers = formatHeader(options.headers)
  options.method = formatMethod(options.method)
  if (options.body) {
    options.body = JSON.stringify(options.body)
  }
  options.mode = 'cors'

  return options
}

const invalidateStatus = (status: number) => {
  return statusErros.includes(status)
}

export const Fetch = (url: string, opts?: IFetch): Promise<any> => {
  const options: IFetch = formatOptions(opts)
  const response = new Promise((resolve: any, reject: any) => {
    fetch(url, options)
      .then(data => {
        data
          .json()
          .then(res => {
            if (invalidateStatus(data.status)) {
              return reject(res)
            }
            return resolve(res)
          })
          .catch(error => {
            if (invalidateStatus(data.status)) {
              return reject(error)
            }
            return resolve('')
          })
      })
      .catch(error => reject(error))
  })
  return response
}

// REFAZENDO O CÓDIGO -------------------------------------

const _formatHeader = (data: any) => {
  const headers = new Headers()
  headers.append('Content-Type', 'aplplication/json')

  if (data) {
    Object.keys(data).forEach((key: string) => {
      headers.append(key, data[key])
    })
  }
  return headers
}

const _formatMethod = (data?: string) => {
  const listMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] // todos os metodos formatado
  let method = 'GET' // por default é get

  if (data && listMethods.includes(String(data).toUpperCase())) {
    method = String(data).toUpperCase()
  }

  return method
}

const _formatOptions = (opts?: IFetch): IFetch => {
  let options: IFetch = opts || {}

  options.headers = _formatHeader(options.headers)
  options.method = _formatMethod(options.method)
  if (options.body) {
    options.body = JSON.stringify(options.body)
  }

  return options
}

export const FetchTwo = (url: string, opts?: IFetch): Promise<any> => {
  const options: IFetch = _formatOptions(opts)
  const response = new Promise((resolve: any, reject: any) => {
    fetch(url, options)
      .then(data => {
        data
          .json()
          .then(res => {
            if (invalidateStatus(data.status)) {
              return reject(res)
            }
            return resolve(res)
          })
          .catch(error => {
            if (invalidateStatus(data.status)) {
              return reject(error)
            }
            return resolve('')
          })
      })
      .catch(error => reject(error))
  })
  return response
}
