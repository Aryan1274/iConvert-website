import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Cpu,
  Layers,
  Lock,
  HardDrive,
  Sliders,
  CheckCircle2,
  Download,
  Zap,
  Image,
  Video,
  FileCheck,
  ExternalLink
} from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function Features() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "iConvert Features — Advanced Local Media Conversion Technology",
    "description": "Deep dive into iConvert technical features: Apple Display P3 color tone mapping, hardware-accelerated local FFmpeg transcoding, and multi-stream HEIC depth map filtering.",
    "url": "https://iconvert.app/features"
  };

  return (
    <div className="features-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="iConvert Features — Hardware Accelerated, P3 Tone-Mapping &amp; Batch Engine"
        description="Explore the technical capabilities of iConvert: Display P3 to sRGB color conversion, bundled FFmpeg, batch folder exports, and iPhone stream filtering."
        canonicalUrl="https://iconvert.app/features"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
        <span className="section-tag">Deep-Dive Technical Capabilities</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          Engineered for <span className="gradient-text">Precision &amp; Speed</span>
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Discover the high-performance media pipeline behind iConvert. Built from the ground up to handle the unique encoding standards of Apple iOS hardware on Windows.
        </p>
      </div>

      {/* Feature 1: Color Gamut & HDR */}
      <div className="pain-card" style={{ marginBottom: '3rem', padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0 }}>
            <Sparkles size={24} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Apple Display P3 &amp; HDR Tone Mapping</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
          Modern iPhones capture photos and videos in Apple's proprietary wide-gamut Display P3 color profile and 10-bit Dolby Vision HDR. Most converters strip color profiles or truncate pixel values, causing bright clouds, sunlight, and skin tones to blow out or look sickly pale on standard Windows monitors.
        </p>
        <div className="sim-stats-grid" style={{ marginTop: '1.5rem' }}>
          <div className="sim-stat-card">
            <div className="val">Display P3 → sRGB</div>
            <div className="lbl">Precision Color Gamut Remapping</div>
          </div>
          <div className="sim-stat-card">
            <div className="val">10-Bit → 8-Bit SDR</div>
            <div className="lbl">Adaptive Tone-Curve Mapping</div>
          </div>
          <div className="sim-stat-card">
            <div className="val">EXIF Preserved</div>
            <div className="lbl">Camera, Lens, Timestamp &amp; GPS metadata intact</div>
          </div>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* Feature 2: Hardware Acceleration & Bundled Engine */}
      <div className="pain-card" style={{ margin: '3rem 0', padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0, background: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8' }}>
            <Cpu size={24} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Bundled FFmpeg Engine with Hardware GPU Acceleration</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          Setting up open-source media utilities often requires downloading command-line tools, configuring Windows environment variables, and learning cryptic terminal flags. iConvert includes a production-compiled FFmpeg binary inside the installer.
        </p>
        <ul className="card-feature-list" style={{ marginTop: '1.5rem' }}>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>NVIDIA NVENC &amp; Intel QSV Ready:</strong> Leverages your GPU's dedicated hardware encoders to convert 4K 60fps clips up to 12x faster than CPU-only software.</span>
          </li>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>Zero Terminal Setup:</strong> Open the app, drag your files, and convert. No command prompts or technical expertise required.</span>
          </li>
          <li className="card-feature-item good">
            <CheckCircle2 size={18} color="#10b981" />
            <span><strong>Universal H.264 &amp; AAC:</strong> Outputs videos that play seamlessly on Windows Media Player, Smart TVs, editing software, and Android devices.</span>
          </li>
        </ul>
      </div>

      {/* Feature 3: Smart Stream Detection */}
      <div className="pain-card" style={{ marginBottom: '3rem', padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0, background: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }}>
            <Sliders size={24} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Smart Auxiliary Stream &amp; Depth-Map Filtering</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          When you snap a Portrait Mode photo or Live Photo on an iPhone, the HEIC container stores multiple internal video and image streams: the full-resolution primary photo, thumbnail previews, and infrared depth-map layers.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginTop: '0.75rem' }}>
          Many converters naively grab stream 0, resulting in blank images, blurry depth maps, or thumbnail-sized output. iConvert inspects the internal container with deep media probing and always extracts the pristine, master resolution image.
        </p>
      </div>

      {/* Feature 4: Batch Processing */}
      <div className="pain-card" style={{ marginBottom: '4rem', padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0, background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
            <Layers size={24} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Parallel Batch Conversion with 1-Click ZIP Archive</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
          Whether you have 5 photos or an entire SD card with 500 images, iConvert processes files concurrently across multiple CPU threads. Once finished, export your entire batch into a clean, organized ZIP archive with a single click.
        </p>
      </div>

      {/* Partner Spotlight */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Explore High-Performance Creator Tools</span>
            <span className="sponsor-pill">Partner</span>
          </h4>
          <p>Looking for professional video editing plugins, photo presets, and high-speed storage? Browse partner recommendations.</p>
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
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Ready for Fast, Professional Conversion?</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          Download iConvert for Windows 10 &amp; 11. 100% free, zero cloud uploads.
        </p>
        <a
          href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
          className="btn btn-primary btn-lg"
        >
          <Download size={18} />
          <span>Download Free (64-bit)</span>
        </a>
      </div>
    </div>
  );
}

