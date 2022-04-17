import Nav from './components/Nav'
import React from 'react'
import { useState } from 'react'
import './style/App.css'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import PlayList from './components/PlayList'
import AnimeDetails from './components/AnimeDetails'

function App() {
  const [user, setUser] = useState(null)

  const PrivateOutlet = () => {
    //get user
    return user ? <Outlet /> : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <header className="header">
        <Nav user={user} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/animedetails" element={<AnimeDetails />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/playlist" element={<PlayList />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
