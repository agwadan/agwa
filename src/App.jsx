import React, { useState } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Experience from './components/experience';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
