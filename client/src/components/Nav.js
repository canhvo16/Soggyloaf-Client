import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user }) => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about' >About</Link>
      {user && <Link to='/playlist'>Play List</Link>}
      {!user && <Link to='/register'>Register</Link>}
      {!user && <Link to='/login'>Login</Link>}
    </div >
  )
}

export default Nav