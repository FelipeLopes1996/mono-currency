import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobaStyle from './shared/styles/global'
import Routes from './routes'
import AuthProvider from './shared/context/auth'
import ThemeProvider from './shared/context/theme'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
          <GlobaStyle />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
