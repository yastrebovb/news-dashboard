import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../containers/HomePage'
import { GlobalStyle } from '../styles/global'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
)

export default AppRouter
