import { useContext } from 'react'
import { ILayout } from '../interface/layout'

import { LayoutContext } from '../context/layout'

type Response = [ILayout, any]

function useLoading(): Response {
  const [layout, setLayout] = useContext(LayoutContext)

  const setLoading = (): void => {
    setLayout({ ...layout, loading: true })

    setTimeout(() => {
      setLayout({ ...layout, loading: false })
    }, 5000)
  }

  return [layout, setLoading]
}

export default useLoading
