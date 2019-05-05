import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import HomePage from '../containers/HomePage'
import PreferencesPage from '../containers/PreferencesPage'
import { GlobalStyle } from '../styles/global'

const AppRouter = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/preferences">
          <PreferencesPage />
        </Route>
      </Switch>
      <GlobalStyle />
    </App>
  </BrowserRouter>
)

export default AppRouter
