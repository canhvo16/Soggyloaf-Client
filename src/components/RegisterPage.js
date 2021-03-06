import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const navigate = useNavigate()
  const [userBody, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')

  const onChange = (e) => {
    setForm({
      ...userBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const user = await RegisterUser({
      name: userBody.name,
      email: userBody.email,
      password: userBody.password
    })
    if (user.msg) {
      alert(user.msg)
    } else {
      clearUserBody()
      navigate('/login')
    }
  }

  const clearUserBody = () => {
    setForm({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className="login box">
      <h1>Register, Please...</h1>
      <hr />
      <form className="register box" onSubmit={onSubmit}>
        <div className="form">
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userBody.name}
            onChange={onChange}
          />
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userBody.email}
            onChange={onChange}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userBody.password}
            onChange={onChange}
          />
          <h3>Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          disabled={
            !userBody.name ||
            !userBody.email ||
            !userBody.password ||
            confirmPassword !== userBody.password
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
