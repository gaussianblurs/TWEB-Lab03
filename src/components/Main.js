import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import IssuesList from './issues-list/IssuesList'
import Issue from './issue/Issue'

const Main = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IssuesList} />
        <Route path="/issue/:owner/:name/:number" component={Issue} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default Main
