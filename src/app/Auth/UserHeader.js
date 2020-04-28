import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { NavLink } from 'react-router-dom'

import { auth } from './auth'

export const UserHeader = () => {
  const [user, setUser] = useContext(UserContext)

  const logout = () => {
    setUser({
      loggedIn: false
    })
  }

  console.log('user', user)
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <NavLink
        to={'/user/' + user.id}
        className="navbar-item"
        activeClassName="is-active"
      >
        {user.name}
      </NavLink>
      <div className="navbar-dropdown">
        <a className="navbar-item" onClick={logout}>
          LOG OUT
        </a>
      </div>
    </div>
  )

  // if (user) {
  //   return <div>Logged In</div>
  // } else {
  //   return <div>Sign In</div>
  // }
}