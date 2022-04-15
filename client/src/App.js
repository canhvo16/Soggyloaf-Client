import Nav from './components/Nav';
import React from 'react'
import { useState } from 'react';
import './style/App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <header className="header">
        <Nav user={user} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
