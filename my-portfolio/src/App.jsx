import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutMeComponent';
import Contact from './components/ContactMeComponent';
import Home from './components/HomeComponent';
import Stack from './components/MyStackComponent';
import NotFound from './components/NotFoundComponent';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/stack" element={<Stack />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
