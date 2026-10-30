import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo-group">
              <img src="/logo.svg" alt="iConvert Logo" style={{ width: 28, height: 28, borderRadius: 8 }} />
              <span>iConvert</span>
            </Link>
            <p>
              The 100% private, local media converter for Windows 10 &amp; 11. Convert iPhone HEIC/HEIF photos and MOV/HEVC videos locally with zero cloud uploads and near-zero quality loss.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Converters &amp; Tools</h4>
            <ul>
              <li><Link to="/heic-to-jpg">HEIC to JPG Converter</Link></li>
              <li><Link to="/mov-to-mp4">iPhone MOV to MP4</Link></li>
              <li><Link to="/media-converter">Universal Media Converter</Link></li>
              <li><Link to="/features">Color Tone-Mapping (P3)</Link></li>
              <li><Link to="/how-it-works">Batch Conversion Guide</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Product &amp; Company</h4>
            <ul>
              <li><Link to="/about">About iConvert</Link></li>
              <li><Link to="/features">Core Features</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/#download">Download for Windows</Link></li>
              <li><a href="https://github.com/Aryan1274/iConvert/releases" target="_blank" rel="noreferrer">Changelog (v1.0.0)</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Support &amp; Partners</h4>
            <ul>
              <li><a href="https://buymeacoffee.com/arvr" target="_blank" rel="noreferrer" style={{ color: '#ffdd00', fontWeight: 600 }}>☕ Buy Me a Coffee</a></li>
              <li><a href="https://github.com/Aryan1274/iConvert" target="_blank" rel="noreferrer">GitHub Repository</a></li>
              <li><a href="https://github.com/Aryan1274/iConvert/issues" target="_blank" rel="noreferrer">Report a Bug</a></li>
              <li><a href="https://ardance.org/4/31ef3d561bd3140e2237fcc997e8969c" target="_blank" rel="noreferrer">Featured Partner Deals</a></li>
              <li><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT License</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} iConvert. Released as free &amp; open source software under the MIT License.
          </div>
          <div>
            Apple, iPhone, iOS, HEIC, and ProRes are registered trademarks of Apple Inc. iConvert is an independent open-source utility.
          </div>
        </div>
      </div>
    </footer>
  );
}
