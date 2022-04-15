import React from 'react'
import { useState } from 'react'

const Register = () => {
  return (
    <div className="register">
      <form className="register box">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </div>
  )
}

export default Register
