import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { PrivateRoute } from './Auth/PrivateRoute'
import { PublicPage } from './Public'
import { ProtectedPage } from './Protected'
import { Login } from './Auth/Login'
import { Header } from './Header/Header'
import { UserContextProvider } from './Context/UserContext'
import { SampleForm } from './Form/SampleForm'
import { ComponentsShowCase } from './Components'
import './Apollo/Client'

export const Root = () => {
  return (
    <Router>
      <UserContextProvider>
        <Header></Header>
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <Link to="/public">Public Page</Link>
              </div>
              <div className="level-item">
                <Link to="/protected">Protected Page</Link>
              </div>
              <div className="level-item">
                <Link to="/form">Form Page</Link>
              </div>
              <div className="level-item">
                <Link to="/components">Components</Link>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/public">
            <PublicPage></PublicPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/form">
            <SampleForm></SampleForm>
          </Route>
          <Route path="/components">
            <ComponentsShowCase></ComponentsShowCase>
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage></ProtectedPage>
          </PrivateRoute>
        </Switch>
      </UserContextProvider>
    </Router>
  )
}
