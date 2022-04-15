import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [userBody, setUserBody] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    console.log(e.target.value)
    setUserBody({
      ...userBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className='login box'>
      <form className='form' onSubmit={onSubmit}>
        <input type="email" placeholder='Email' name="email" value={userBody.email} onChange={onChange} />
        <input type="password" placeholder='Password' name="password" value={userBody.password} onChange={onChange} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login