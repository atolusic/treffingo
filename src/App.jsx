import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Layout from './components/Layout'
import Content from './containers/Content'
import theme from './App.style'
import Store from './Context'

function App() {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <Layout>
          <Content />
        </Layout>
      </ThemeProvider>
    </Store>
  )
}

export default App
