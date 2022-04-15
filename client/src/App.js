import Nav from './components/Nav';
import React from 'react'
import { useState } from 'react';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
    </div>
  )
}

export default App;
