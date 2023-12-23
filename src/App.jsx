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
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/transcribe" element={<TranscriptionPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

export const MainPortfolio = () => {
  const { lightMode, toggleTheme } = useTheme();
  console.log("====================================");
  console.log(`App: ${lightMode}`);
  console.log("====================================");
  return (
    <div className={`App ${lightMode ? "light-mode" : "dark-mode"}`}>
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
