import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user, logout }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Search</Link>
      {user && <Link to="/playlist">Play List</Link>}
      {user && <Link to="/profile">Profile</Link>}
      {user && (
        <Link onClick={logout} to="/">
          Logout
        </Link>
      )}
      {!user && <Link to="/register">Register</Link>}
      {!user && <Link to="/login">Login</Link>}
    </div>
  )
}

export default Nav
