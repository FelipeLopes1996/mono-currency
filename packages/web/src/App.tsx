import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobaStyle from './shared/styles/global'
import LayoutProvider from './shared/context/layout'
import Routes from './routes'
import AuthProvider from './shared/context/auth'
import Loading from './shared/components/loading'
import ThemeProvider from './shared/context/theme'

const App: React.FC = () => (
  <BrowserRouter>
    <LayoutProvider>
      <AuthProvider>
        <ThemeProvider>
          <GlobaStyle />
          <Routes />
          <Loading />
        </ThemeProvider>
      </AuthProvider>
    </LayoutProvider>
  </BrowserRouter>
)

export default App
