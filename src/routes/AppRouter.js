import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import HomePage from '../containers/HomePage'
import { GlobalStyle } from '../styles/global'

const AppRouter = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <GlobalStyle />
    </App>
  </BrowserRouter>
)

export default AppRouter
