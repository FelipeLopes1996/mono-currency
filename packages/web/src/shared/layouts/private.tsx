import React from 'react'

import { IProps } from '../interface/props'

import Header from '../components/header'
import NavLeft from '../components/navleft'
import Main from '../components/main'
import Footer from '../components/footer'

const PrivateLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <NavLeft />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default PrivateLayout
