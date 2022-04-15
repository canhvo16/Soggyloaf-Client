import React from 'react'

const Register = () => {
  return (
    <div className='register'>
      <form className='register box'>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Register