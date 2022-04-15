import React from 'react'
import About from './About'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to='/' >About</Link>
    </div >
  )
}

export default Nav