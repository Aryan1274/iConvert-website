import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Heart, Award, Cpu, Code2, CheckCircle2, Download, Coffee, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function About() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About iConvert — The Mission Behind Private Local Media Conversion",
    "description": "Learn why iConvert was built: to eliminate cloud upload limits, protect personal media privacy, and fix washed-out iPhone photo and video colors on Windows.",
    "publisher": {
      "@type": "Organization",
      "name": "iConvert",
      "url": "https://i-convert-website.vercel.app"
    }
  };

  return (
    <div className="about-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="About iConvert — Why We Built a Free, 100% Offline Media Converter"
        description="Learn why iConvert was built: to solve stubborn iPhone HEIC & MOV compatibility on Windows without cloud uploads, subscriptions, or quality degradation."
        canonicalUrl="https://i-convert-website.vercel.app/about"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
        <span className="section-tag">Our Story &amp; Philosophy</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          Why We Built <span className="gradient-text">iConvert</span>
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Converting your personal iPhone photos and videos shouldn't mean uploading private memories to mystery servers, waiting in queues, or paying monthly fees.
        </p>
      </div>

      {/* Origin Story Grid */}
      <div className="pain-grid" style={{ marginBottom: '4rem' }}>
        <div className="pain-card" style={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}>
          <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.25)' }}>
            <Lock size={26} />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem' }}>The Cloud Converter Epidemic</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            Every day, millions of people search for <em>"convert HEIC to JPG"</em> or <em>"convert MOV to MP4"</em>. The top search results are almost always ad-bloated websites that demand you upload your private family portraits, medical scans, or vacation videos to remote cloud servers.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '0.75rem' }}>
            Even worse, they lock you behind 25MB file limits, degrade your image colors, or slap surprise watermarks unless you purchase an expensive monthly subscription.
          </p>
        </div>

        <div className="pain-card positive">
          <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <Cpu size={26} />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem' }}>The iConvert Solution</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            Modern PCs are equipped with powerful multi-core CPUs and dedicated graphics cards. There is zero technical justification for sending your gigabytes of iPhone media over the internet just to re-encode them.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginTop: '0.75rem' }}>
            iConvert packages battle-tested, hardware-accelerated transcoding libraries directly inside a lightweight Windows application. It runs 100% on your local machine—even when completely disconnected from the internet.
          </p>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* Our Guarantees / Core Values */}
      <div style={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Zero Compromises</span>
          <h2 className="section-heading">Our 4 Unbreakable Guarantees</h2>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrapper"><Shield size={24} /></div>
            <h3>1. True Zero-Telemetry Privacy</h3>
            <p>
              We don't log your files, we don't track your conversion counts, and we don't have remote storage buckets. What happens on your PC stays on your PC.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper"><Award size={24} /></div>
            <h3>2. Color Gamut Precision</h3>
            <p>
              We don't take shortcuts with color profiles. iConvert maps Apple Display P3 and Dolby Vision HDR to standard sRGB so skin tones and highlights look exactly as intended.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper"><Heart size={24} /></div>
            <h3>3. Free &amp; Open Source Forever</h3>
            <p>
              Published under the MIT License. Anyone can inspect our source code on GitHub, audit our privacy claims, or contribute enhancements.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsored Partner Section */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Recommended Storage &amp; Tech Partners</span>
            <span className="sponsor-pill">Offers</span>
          </h4>
          <p>Looking for high-speed portable SSDs, backup drives, or professional media accessories? Explore curated deals.</p>
        </div>
        <a
          href="https://ardance.org/4/31ef3d561bd3140e2237fcc997e8969c"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{ whiteSpace: 'nowrap', gap: '0.6rem' }}
        >
          <span>Explore Partner Deals</span>
          <ExternalLink size={16} />
        </a>
      </div>

      {/* CTA Section */}
      <div className="download-box" style={{ marginTop: '4rem' }}>
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Experience the Difference Today</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          Download iConvert for Windows 10 &amp; 11. No registration, no ads inside the software, no limits.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
            className="btn btn-primary btn-lg"
          >
            <Download size={18} />
            <span>Download Installer (.exe)</span>
          </a>
          <a
            href="https://buymeacoffee.com/arvr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-coffee btn-lg"
          >
            <Coffee size={18} />
            <span>Support on Buy Me a Coffee</span>
          </a>
        </div>
      </div>
    </div>
  );
}

