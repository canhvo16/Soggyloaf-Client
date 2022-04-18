import Nav from './components/Nav'
import React from 'react'
import { useState } from 'react'
import './style/App.css'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import Register from './components/RegisterPage'
import About from './components/AboutPage'
import PlayList from './components/PlayListPage'
import AnimeDetails from './components/AnimeDetailsPage'
import SearchPage from './components/SearchPage'
import ProfilePage from './components/ProfilePage'
import EpisodeDetails from './components/EpisodeDetails'

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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/animedetails" element={<AnimeDetails />} />
        <Route path="/:anime_id/episodedetails/:episode_index" element={<EpisodeDetails />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
