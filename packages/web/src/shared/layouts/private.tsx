import React from 'react'

import { IProps } from '../interface/props'

const PrivateLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <div>{children}</div>
    </div>
  )
}

export default PrivateLayout
