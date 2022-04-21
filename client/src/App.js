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
import {
  getIsekais,
  getLongAnime,
  getNewAnime,
  getRomanceAnime,
  getTopAnimes,
  getAnime
} from './resource'
import { getPlaylist } from './services/Playlist'

function App() {
  const [user, setUser] = useState(null)
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])
  const [longAnimes, setLongAnimes] = useState([])
  const [newAnimes, setNewAnimes] = useState([])
  const [isekai, setIsekai] = useState([])

  let userId
  if (user) {
    userId = user.id
  }

  const [playlist, setPlaylist] = useState(null)
  const fetchPlayList = async () => {
    const list = await getPlaylist(userId)
    const filteredList = list.filter(anime => anime.animeRefId)
    const animeRefIds = filteredList.map(anime => anime.animeRefId)
    const animeRefIdsMap = Object.assign(
      {},
      ...filteredList.map(anime => ({ [anime.animeRefId]: anime.id }))
    )
    let animes = await getAnime(animeRefIds)

    animes = animes.map(anime => {
      anime.animeId = animeRefIdsMap[anime.id]
      return anime
    })

    setPlaylist(animes)
  }

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
    getTopAnimes(setTopAnimes)
    getRomanceAnime(setRomAnimes)
    getLongAnime(setLongAnimes)
    getNewAnime(setNewAnimes)
    getIsekais(setIsekai)
  }, [])

  useEffect(() => {
    document.title = 'soggyloaf'
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Nav user={user} logout={logout} />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              topAnimes={topAnimes}
              romAnimes={romAnimes}
              longAnimes={longAnimes}
              newAnimes={newAnimes}
              isekai={isekai}
            />
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/anime/:id" element={<AnimeDetails user={user} />} />
        <Route path="/" element={<PrivateOutlet user={user} />}>
          <Route
            path="/playlist"
            element={
              <PlayList
                user={user}
                playlist={playlist}
                fetchPlayList={fetchPlayList}
                setPlaylist={setPlaylist}
              />
            }
          />
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
