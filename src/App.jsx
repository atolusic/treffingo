import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Layout from './components/Layout'
import Content from './components/Content'
import theme from './App.style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Content />
      </Layout>
    </ThemeProvider>
  )
}

export default App
