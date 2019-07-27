import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from './App.style'

import Layout from './components/Layout'
import AppRouter from './components/Router'

import Store from './Context'

// TODO: make board actions async

function App() {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </Store>
  )
}

export default App
