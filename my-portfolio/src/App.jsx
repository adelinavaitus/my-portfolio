import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutMeComponent';
import Contact from './components/ContactMeComponent';
import Home from './components/HomeComponent';
import Stack from './components/MyStackComponent';
import Projects from './components/ProjectsComponent';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/stack" element={<Stack />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
