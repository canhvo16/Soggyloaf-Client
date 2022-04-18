import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()
  const [userBody, setUserBody] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setUserBody({
      ...userBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(userBody)
    setUserBody({ email: '', password: '' })
    setUser(payload)
    navigate('/')
  }

  return (
    <div className="login box">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userBody.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userBody.password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
