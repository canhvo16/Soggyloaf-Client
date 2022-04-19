import Nav from './components/Nav'
import React from 'react'
import { useState, useEffect } from 'react'
import './style/App.css'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import Register from './components/RegisterPage'
import About from './components/AboutPage'
import PlayList from './components/PlayListPage'
import AnimeDetails from './components/AnimeDetailsPage'
import SearchPage from './components/SearchPage'
import ProfilePage from './components/ProfilePage'

function App() {
  const [user, setUser] = useState(null)

  const PrivateOutlet = () => {
    return user ? <Outlet /> : <Navigate to="/" />
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const logout = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Nav user={user} logout={logout} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/anime/:id" element={<AnimeDetails user={user} />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/playlist" element={<PlayList user={user} />} />
          <Route
            path="/profile/:id"
            element={<ProfilePage user={user} setUser={setUser} />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
