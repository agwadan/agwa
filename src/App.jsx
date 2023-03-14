import React, { useState } from 'react';
import LandingPage from './components/landingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App
