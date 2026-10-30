import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Shield, Sparkles, CheckCircle2, Download, Zap, HelpCircle, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function HeicToJpg() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Convert HEIC to JPG on Windows 10 & 11 — Free, Offline, Zero Quality Loss",
    "description": "The best free HEIC to JPG converter for Windows. Batch convert Apple iPhone HEIC and HEIF photos to high quality JPEG locally with no upload and full P3 color preservation.",
    "url": "https://i-convert-website.vercel.app/heic-to-jpg"
  };

  return (
    <div className="seo-pillar-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="Convert HEIC to JPG on Windows (10/11) — Free Offline Converter | iConvert"
        description="Convert Apple HEIC photos to JPG locally on Windows. 100% free, offline, no 50MB file limits, and Display P3 color gamut preserved. Batch export in 1 click."
        canonicalUrl="https://i-convert-website.vercel.app/heic-to-jpg"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
        <span className="section-tag">Dedicated Photo Converter</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          Convert <span className="gradient-text">HEIC to JPG</span> on Windows 10 &amp; 11
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Tired of Windows Photos refusing to open your iPhone photos? Convert HEIC and HEIF to universal, high-quality JPEG in seconds with zero cloud uploads and near-zero quality loss.
        </p>
      </div>

      {/* Quick Action Box */}
      <div className="pain-card positive" style={{ textAlign: 'center', padding: '2.5rem', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Batch Convert 100+ Photos Locally</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          No file limits. No waiting in remote website queues. Works 100% offline on your PC.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
            className="btn btn-primary btn-lg"
          >
            <Download size={18} />
            <span>Download Free HEIC Converter</span>
          </a>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* Editorial Content / SEO Educational Body */}
      <div style={{ maxWidth: '860px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>
          What is HEIC, and Why Won't Windows Open It?
        </h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '1.025rem' }}>
          Starting with iOS 11, Apple adopted <strong>High Efficiency Image Container (HEIC)</strong> as the default image capture format on iPhones and iPads. HEIC uses advanced HEVC (H.265) compression to cut file sizes in half compared to traditional JPEG while capturing wide 10-bit color.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.025rem' }}>
          However, Microsoft Windows does not include native HEIC decoding out of the box. Windows Photos often displays an error saying <em>"The HEIF Image Extension is required to display this file"</em> and asks users to pay for codecs on the Microsoft Store.
        </p>

        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, margin: '2.5rem 0 1rem 0' }}>
          Why iConvert is the Superior HEIC to JPG Solution
        </h2>
        
        <div className="pain-grid" style={{ margin: '2rem 0' }}>
          <div className="pain-card">
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Preserves Display P3 Color Gamut</h3>
            <p style={{ fontSize: '0.925rem' }}>
              iPhones capture colors in Apple's wide Display P3 gamut. Generic converters strip the color tags, causing photos to look washed out or dull on Windows. iConvert performs intelligent tone-mapping into standard sRGB with true-to-life contrast.
            </p>
          </div>
          <div className="pain-card">
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>No Auxiliary Stream Errors</h3>
            <p style={{ fontSize: '0.925rem' }}>
              Portrait Mode and Live Photos embed depth maps and thumbnails. Buggy converters often export a blank thumbnail or depth map. iConvert reliably parses the container and extracts the full master resolution photo.
            </p>
          </div>
        </div>

        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, margin: '2.5rem 0 1rem 0' }}>
          How to Convert HEIC to JPG in 3 Clicks
        </h2>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '1.025rem' }}>
          <li><strong>Step 1:</strong> Launch iConvert on your Windows 10 or Windows 11 PC.</li>
          <li><strong>Step 2:</strong> Drag and drop your `.HEIC` or `.HEIF` files (or entire folders) into the window.</li>
          <li><strong>Step 3:</strong> Click Convert. Your files are processed instantly on your local CPU/GPU and saved as standard `.JPG` photos.</li>
        </ol>
      </div>

      {/* Partner Spotlight */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Recommended Storage &amp; Cloud Drive Offers</span>
            <span className="sponsor-pill">Sponsored</span>
          </h4>
          <p>Need more space for your high-res photos? Browse fast external SSDs and secure cloud backup providers.</p>
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

      {/* Ad Placement 2 */}
      <AdBanner />

      {/* Bottom CTA */}
      <div className="download-box" style={{ marginTop: '4rem' }}>
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Start Converting HEIC to JPG Today</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          100% free, offline, and open-source. Download iConvert for Windows.
        </p>
        <a
          href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
          className="btn btn-primary btn-lg"
        >
          <Download size={18} />
          <span>Download Free for Windows</span>
        </a>
      </div>
    </div>
  );
}

