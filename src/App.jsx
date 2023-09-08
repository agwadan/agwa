import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Experience from "./components/experience";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import TranscriptionPage from "./components/transcription";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/transcribe" element={<TranscriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

export const MainPortfolio = () => {
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
  );
};
