import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import AuthProvider from './shared/context/auth'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
