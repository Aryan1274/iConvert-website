import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import HeicToJpg from './pages/HeicToJpg.jsx';
import MovToMp4 from './pages/MovToMp4.jsx';
import MediaConverter from './pages/MediaConverter.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="landing-page">
        {/* Ambient background atmosphere */}
        <div className="ambient-glow-top"></div>
        <div className="ambient-grid"></div>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Dynamic Multi-Page Router */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/heic-to-jpg" element={<HeicToJpg />} />
            <Route path="/mov-to-mp4" element={<MovToMp4 />} />
            <Route path="/media-converter" element={<MediaConverter />} />
          </Routes>
        </main>

        {/* Global Rich SEO Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
