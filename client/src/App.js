import Nav from './components/Nav';
import React from 'react'
import { useState } from 'react';
import './style/App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import PlayList from './components/PlayList'
import AnimeDetails from './components/AnimeDetails'

function App() {
  const [user, setUser] = useState(null)


  return (
    <div className="App">
      <header className="header">
        <Nav user={user} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/playlist' element={<PlayList />} />
        <Route path='/animedetails' element={<AnimeDetails />} />
      </Routes>
    </div>
  )
}

export default App;
