import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, HardDrive, Cpu, ShieldCheck, Download, CheckCircle2, Layers, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function MediaConverter() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Local Media Converter for Windows — Offline Video, Image & Audio Processing",
    "description": "Free, private universal media converter for Windows 10 & 11. Convert heavy videos and images locally on your CPU/GPU without cloud uploads or subscriptions.",
    "url": "https://iconvert.app/media-converter"
  };

  return (
    <div className="seo-pillar-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="Free Local Media Converter for Windows 10 &amp; 11 — 100% Offline | iConvert"
        description="The fastest, most secure local media converter for Windows. Convert video, photo, and audio files on your PC with zero cloud uploads, no file limits, and full privacy."
        canonicalUrl="https://iconvert.app/media-converter"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
        <span className="section-tag">Universal Offline Utility</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          Free Local <span className="gradient-text">Media Converter</span> for Windows
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Tired of online file size limits, slow upload speeds, and software subscriptions? iConvert is the privacy-first media converter that processes your files locally on your own computer.
        </p>
      </div>

      {/* Quick Action Box */}
      <div className="pain-card positive" style={{ textAlign: 'center', padding: '2.5rem', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>The Zero-Cloud Media Processing Engine</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Enjoy lightning-fast conversions powered by your own hardware. 100% free, forever open-source.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
            className="btn btn-primary btn-lg"
          >
            <Download size={18} />
            <span>Download for Windows (64-bit)</span>
          </a>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* Broad Content / Comparison Grid */}
      <div style={{ maxWidth: '860px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>
          Why Local Media Conversion is Better Than Cloud Converters
        </h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '1.025rem' }}>
          Online converters like CloudConvert or FreeConvert are convenient for small files, but they fall apart when you need to convert gigabytes of personal vacation photos, drone recordings, or confidential business video.
        </p>

        <div className="features-grid" style={{ margin: '2.5rem 0' }}>
          <div className="feature-box">
            <div className="feature-icon-wrapper"><HardDrive size={24} /></div>
            <h3>Zero Bandwidth Waste</h3>
            <p>
              Why upload a 4GB video over your home Wi-Fi just to download it again? Local conversion eliminates all internet bandwidth consumption.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper"><Cpu size={24} /></div>
            <h3>Native Hardware Speed</h3>
            <p>
              Your PC's graphics card (NVIDIA, AMD, Intel) contains dedicated silicone designed to encode video in real-time. iConvert taps straight into your GPU.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper"><ShieldCheck size={24} /></div>
            <h3>Total Air-Gapped Privacy</h3>
            <p>
              Your medical photos, financial documents, or family moments never pass through a cloud server. Full peace of mind.
            </p>
          </div>
        </div>

        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, margin: '2.5rem 0 1rem 0' }}>
          Supported Media Format Pipeline
        </h2>
        <ul className="card-feature-list" style={{ fontSize: '1.025rem' }}>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>Images:</strong> Apple HEIC, HEIF, Live Photo streams to high-compression JPEG and transparent PNG.</span>
          </li>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>Videos:</strong> Apple QuickTime MOV, HEVC (H.265), ProRes, and MP4 to universal H.264 video.</span>
          </li>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>Audio:</strong> High-bitrate stereo AAC preservation and extraction.</span>
          </li>
        </ul>
      </div>

      {/* Partner Spotlight */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Recommended Storage &amp; Cloud Drive Offers</span>
            <span className="sponsor-pill">Sponsored</span>
          </h4>
          <p>Running low on drive space? Discover fast external NVMe SSDs and secure backup solutions.</p>
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
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Upgrade Your Workflow with iConvert</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          Free, private, and offline. Get the standalone Windows application now.
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
