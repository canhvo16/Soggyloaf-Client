import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ user, logout }) => {
  let profileURL

  if (user) {
    profileURL = `/profile/${user.id}`
  }

  return (
    <div className="nav">
      <img
        className="logo"
        src="https://i.imgur.com/uuDFKpF.png"
        alt="applogo"
        width="200"
      ></img>
      <NavLink
        className="navbar"
        to="/"
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'black' }
        }
      >
        Home
      </NavLink>
      <NavLink
        className="navbar"
        to="/about"
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'black' }
        }
      >
        About
      </NavLink>
      <NavLink
        className="navbar"
        to="/search"
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'black' }
        }
      >
        Search
      </NavLink>
      {user && (
        <NavLink
          className="navbar"
          to="/playlist"
          style={({ isActive }) =>
            isActive ? { color: 'goldenrod' } : { color: 'black' }
          }
        >
          Watch List
        </NavLink>
      )}
      {user && (
        <NavLink
          className="navbar"
          to={profileURL}
          style={({ isActive }) =>
            isActive ? { color: 'goldenrod' } : { color: 'black' }
          }
        >
          Profile
        </NavLink>
      )}
      {user && (
        <NavLink className="navbar" onClick={logout} to="/">
          LogOut
        </NavLink>
      )}
      {!user && (
        <NavLink
          className="navbar"
          to="/register"
          style={({ isActive }) =>
            isActive ? { color: 'goldenrod' } : { color: 'black' }
          }
        >
          Register
        </NavLink>
      )}
      {!user && (
        <NavLink
          className="navbar"
          to="/login"
          style={({ isActive }) =>
            isActive ? { color: 'goldenrod' } : { color: 'black' }
          }
        >
          Login
        </NavLink>
      )}
    </div>
  )
}

export default Nav
