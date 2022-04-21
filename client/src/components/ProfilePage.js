import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {
  DestroyAccount,
  GetUser,
  UpdateName,
  UpdatePassword
} from '../services/Auth'

const ProfilePage = ({ user, setUser }) => {
  const [profile, setProfile] = useState({})
  const [showPasswordEditor, togglePasswordEditor] = useState(false)
  const [showNameEditor, toggleNameEditor] = useState(false)
  const [passwordEditor, setPasswordEditor] = useState({
    email: '',
    oldPassword: '',
    newPassword: ''
  })
  const [nameEditor, setNameEditor] = useState({
    email: '',
    name: ''
  })

  useEffect(() => {
    const currentUser = async () => {
      const profile = await GetUser(id)
      setProfile(profile)
    }
    currentUser()
  }, [])

  const onChange = (e) => {
    setPasswordEditor({
      ...passwordEditor,
      [e.target.name]: e.target.value
    })
  }

  const handleChange = (e) => {
    setNameEditor({
      ...nameEditor,
      [e.target.name]: e.target.value
    })
  }

  const onPasswordSubmit = async () => {
    await UpdatePassword(passwordEditor)
  }

  const onNameSubmit = async () => {
    await UpdateName(nameEditor)
  }

  let { id } = useParams()

  const onConfirmDestroy = async () => {
    if (
      window.confirm(
        'This will permanently delete your account, are you sure you want to leave us?'
      )
    ) {
      await DestroyAccount(id)
      setUser(null)
      localStorage.clear()
    }
  }

  const togglePasswordForm = () => {
    togglePasswordEditor(!showPasswordEditor)
    if (!showPasswordEditor) {
      toggleNameEditor(false)
    }
  }

  const toggleNameForm = () => {
    toggleNameEditor(!showNameEditor)
    if (!showNameEditor) {
      togglePasswordEditor(false)
    }
  }

  let passwordButton = showPasswordEditor
    ? 'Hide Password Editor'
    : 'Change Password'

  let nameButton = showNameEditor ? 'Hide Name Editor' : 'Change Name'

  let passwordForm = showPasswordEditor ? (
    <form onSubmit={onPasswordSubmit} className="form-container">
      <div className="form">
        <h5>Current Email</h5>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={passwordEditor.email}
          onChange={onChange}
        />
        <h5>Old Password</h5>
        <input
          type="password"
          placeholder="Old Password"
          name="oldPassword"
          value={passwordEditor.oldPassword}
          onChange={onChange}
        />
        <h5>New Password</h5>
        <input
          type="password"
          placeholder="New Password"
          name="newPassword"
          value={passwordEditor.newPassword}
          onChange={onChange}
        />
      </div>
      <button>Change Password</button>
    </form>
  ) : null

  let nameForm = showNameEditor ? (
    <form onSubmit={onNameSubmit} className="form-container">
      <div className="form">
        <h5>Current Email</h5>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={nameEditor.email}
          onChange={handleChange}
        />
        <h5>New Name</h5>
        <input
          type="text"
          placeholder="New Name"
          name="name"
          value={nameEditor.name}
          onChange={handleChange}
        />
      </div>
      <button>Change Name</button>
    </form>
  ) : null

  return (
    <div className="profilePage">
      <h1 className="profileName">{profile.name}</h1>
      <h3 className="profileEmail">{user.email}</h3>
      <div className="button-container">
        <button onClick={togglePasswordForm}>{passwordButton}</button>
        <button onClick={toggleNameForm}>{nameButton}</button>
        <button onClick={onConfirmDestroy} className="destroyButton">
          Destroy Account
        </button>
      </div>
      {passwordForm}
      {nameForm}
    </div>
  )
}

export default ProfilePage
