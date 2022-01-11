import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Agwa</h1>
      </header>
      <Contact />
    </div>
  )
}

export default App
