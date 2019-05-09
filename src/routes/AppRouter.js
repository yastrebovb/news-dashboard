import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import App from '../components/App'
import HomePage from '../containers/HomePage'
import PreferencesPage from '../components/PreferencesPage'
import SwitchLink from '../components/SwitchLink'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { GlobalStyle } from '../styles/global'

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup component={null}>
    <CSSTransition
      timeout={450}
      classNames="page"
      mountOnEnter={true}
      unmountOnExit={true}
      key={location.pathname.split('/')[1]}
    >
      <Switch location={location}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/preferences">
          <PreferencesPage />
        </Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))

const AppRouter = () => (
  <BrowserRouter>
    <App>
      <AnimatedSwitch />
      <SwitchLink firstLink="/" secondLink="preferences" />
      <GlobalStyle />
    </App>
    />
  </BrowserRouter>
)

export default AppRouter
