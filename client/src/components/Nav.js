import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user }) => {
  const isUser = (user) => {
    return JSON.stringify(user) === '{}';
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about' >About</Link>
      {!isUser(user) && <Link to='/PlayList'>Play List</Link>}
    </div >
  )
}

export default Nav