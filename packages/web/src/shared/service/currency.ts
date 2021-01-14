import { Fetch } from './fetch'
import { getHeader } from '../utils/token'

import API from '../constants/api'
import { ICurrency } from '../interface/currency'

export const getCurrency = async (): Promise<ICurrency[]> => {
  const options = {
    headers: getHeader(),
    method: 'get',
  }
  const result: ICurrency[] = await Fetch(API.BASE_CURRENCY, options)
  return result
}
