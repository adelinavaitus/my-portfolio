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
    <Router>   {/* Wrapping the entire application with Router for routing functionality */}
      <Header />  {/* Rendering Header component on top of the page */}
      <Routes>   {/* Defining the routing for different paths */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined pages, renders NotFound */}
      </Routes>
      <Footer />  {/* Rendering Footer component at the bottom of the page */}
    </Router>
  )
}

export default App
