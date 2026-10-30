import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Coffee, Menu, X, ChevronDown, Image, Video, RefreshCw } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isConverterActive = ['/heic-to-jpg', '/mov-to-mp4', '/media-converter'].includes(location.pathname);

  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo-group">
            <img src="/logo.svg" alt="iConvert Logo" style={{ width: 34, height: 34, borderRadius: 8 }} />
            <span>iConvert</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link
                to="/features"
                className={`nav-link ${location.pathname === '/features' ? 'active-nav' : ''}`}
              >
                Features
              </Link>
            </li>

            {/* Converters Dropdown */}
            <li className="nav-dropdown" ref={dropdownRef}>
              <button
                className={`dropdown-trigger ${isConverterActive ? 'active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Converters</span>
                <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/heic-to-jpg" className="dropdown-item">
                    <Image size={16} color="#38bdf8" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>HEIC to JPG</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>iPhone Photos</div>
                    </div>
                  </Link>
                  <Link to="/mov-to-mp4" className="dropdown-item">
                    <Video size={16} color="#818cf8" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>MOV to MP4</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>iPhone 4K HDR Video</div>
                    </div>
                  </Link>
                  <Link to="/media-converter" className="dropdown-item">
                    <RefreshCw size={16} color="#10b981" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>Universal Media</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>All Formats</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/how-it-works"
                className={`nav-link ${location.pathname === '/how-it-works' ? 'active-nav' : ''}`}
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active-nav' : ''}`}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a
              href="https://buymeacoffee.com/arvr"
              target="_blank"
              rel="noreferrer"
              className="btn btn-coffee"
              title="Support developer on Buy Me a Coffee"
            >
              <Coffee size={14} />
              <span>Buy Coffee</span>
            </a>

            <a
              href="https://github.com/Aryan1274/iConvert"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary nav-gh-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <Link to="/#download" className="btn btn-primary" style={{ height: 36, padding: '0 1rem', fontSize: '0.85rem' }}>
              <Download size={14} />
              <span>Download</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <Link to="/features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/heic-to-jpg" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>HEIC to JPG Converter</Link>
            <Link to="/mov-to-mp4" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>MOV to MP4 Converter</Link>
            <Link to="/media-converter" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Universal Media Converter</Link>
            <Link to="/how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About iConvert</Link>
            <div style={{ padding: '0.75rem 0', display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
              <a
                href="https://buymeacoffee.com/arvr"
                target="_blank"
                rel="noreferrer"
                className="btn btn-coffee"
              >
                <Coffee size={15} />
                <span>Buy Me a Coffee</span>
              </a>
              <Link
                to="/#download"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={15} />
                <span>Download v1.0.0</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
