import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../containers/Home'
import NotFoundPage from '../NotFoundPage'
import BoardContent from '../../containers/BoardContent'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/b/:boardId" component={BoardContent} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
