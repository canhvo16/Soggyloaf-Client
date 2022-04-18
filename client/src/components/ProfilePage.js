import React from 'react'
import { useState } from 'react'

const ProfilePage = ({ user }) => {
  const [showEditor, toggleShowEditor] = useState(false)

  const toggleEditor = () => {
    toggleShowEditor(!showEditor)
  }

  let button = showEditor ? 'Hide Editor' : 'ShowEditor'

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <button onClick={toggleEditor}>{button}</button>
    </div>
  )
}

export default ProfilePage
