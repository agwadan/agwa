import React, { useState } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Experience from './components/experience';
import About from './components/about';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
    </div>
  )
}

export default App
