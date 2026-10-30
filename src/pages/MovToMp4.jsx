import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Sparkles, CheckCircle2, Download, Zap, Film, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function MovToMp4() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Convert iPhone MOV & HEVC to MP4 on Windows — Fix Washed-Out HDR Colors",
    "description": "Convert iPhone 4K QuickTime MOV and HEVC videos to universal MP4 on Windows. Fixes washed-out HDR colors with automatic HLG/Dolby Vision to Rec.709 tone mapping.",
    "url": "https://iconvert.app/mov-to-mp4"
  };

  return (
    <div className="seo-pillar-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="Convert iPhone MOV to MP4 on Windows — Fix Washed-Out HDR Video | iConvert"
        description="Convert Apple QuickTime MOV (HEVC/ProRes) to MP4 on Windows 10/11. Fixes washed-out HDR colors, preserves 4K 60fps, 100% free and offline with GPU acceleration."
        canonicalUrl="https://iconvert.app/mov-to-mp4"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
        <span className="section-tag">Dedicated Video Converter</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          Convert <span className="gradient-text">iPhone MOV to MP4</span> on Windows
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Stop struggling with unplayable `.MOV` files and blown-out HDR colors. Transcode Apple HEVC and ProRes clips to universal H.264 MP4 with hardware acceleration.
        </p>
      </div>

      {/* Quick Action Box */}
      <div className="pain-card positive" style={{ textAlign: 'center', padding: '2.5rem', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Convert Heavy 4K Videos Without 50MB Caps</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Convert 1GB, 5GB, or 20GB ProRes videos locally using your PC's GPU. No uploads, no waiting.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
            className="btn btn-primary btn-lg"
          >
            <Download size={18} />
            <span>Download Free MOV Converter</span>
          </a>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* SEO Deep Dive */}
      <div style={{ maxWidth: '860px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>
          Why Do iPhone Videos Look Washed-Out and Blown-Out on Windows?
        </h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '1.025rem' }}>
          If you transfer a video recorded on an iPhone 12, 13, 14, 15, or 16 to a Windows computer, you have probably noticed a strange glitch: people's faces look like ghosts, skies are blindingly bright white, and the entire video looks washed-out.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.025rem' }}>
          This happens because iPhones record in <strong>10-bit Dolby Vision HDR (HLG color space with BT.2020 primaries)</strong>. Standard Windows media players and editing software only support <strong>8-bit SDR (Rec.709)</strong>. When Windows attempts to play an HDR video without proper tone-mapping curves, it clips the highlights, destroying color fidelity.
        </p>

        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, margin: '2.5rem 0 1rem 0' }}>
          The iConvert Solution: Built-in HLG to Rec.709 Tone-Mapping
        </h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.025rem' }}>
          iConvert inspects each video's color metadata using deep media probing. When it detects an Apple HDR video stream, it applies precision <code>tonemap=mobius</code> or <code>zscale</code> mathematical tone curves, mapping the wide 10-bit HDR luminance range gracefully into natural, rich 8-bit SDR.
        </p>

        <div className="sim-stats-grid" style={{ margin: '2rem 0' }}>
          <div className="sim-stat-card">
            <div className="val">Universal MP4</div>
            <div className="lbl">Compatible with TVs, Android &amp; Windows Media Player</div>
          </div>
          <div className="sim-stat-card">
            <div className="val">NVIDIA / Intel GPU</div>
            <div className="lbl">Fast Hardware Accelerated Transcoding</div>
          </div>
          <div className="sim-stat-card">
            <div className="val">Audio Fidelity</div>
            <div className="lbl">Preserves Stereo AAC Audio without compression artifacts</div>
          </div>
        </div>

        <h2 style={{ color: '#fff', fontSize: '1.85rem', fontWeight: 800, margin: '2.5rem 0 1rem 0' }}>
          How to Convert MOV to MP4 Locally
        </h2>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '1.025rem' }}>
          <li><strong>Step 1:</strong> Launch iConvert on your PC.</li>
          <li><strong>Step 2:</strong> Drop your `.MOV` clips into the window.</li>
          <li><strong>Step 3:</strong> Click Convert. iConvert automatically transcodes the HEVC video stream to universally supported H.264 MP4 with vivid colors.</li>
        </ol>
      </div>

      {/* Partner Spotlight */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Professional Video Editing Tools &amp; Plugins</span>
            <span className="sponsor-pill">Offers</span>
          </h4>
          <p>Looking to take your iPhone videography to the next level? Explore partner software deals and video assets.</p>
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
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Convert Your iPhone Videos Now</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          No file size restrictions. Download iConvert free for Windows.
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
