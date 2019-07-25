import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './containers/Home'
import theme from './App.style'
import Store from './Context'

function App() {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </Store>
  )
}

export default App
