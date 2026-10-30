import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Check,
  X,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Laptop,
  Lock,
  FileImage,
  Video,
  ArrowRight,
  HardDrive,
  Sliders,
  CheckCircle2,
  FolderDown,
  Coffee
} from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function Home() {
  const [activeTab, setActiveTab] = useState('image'); // 'image' or 'video'
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "iConvert",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "description": "Fast, private local iPhone media converter for Windows. Convert HEIC/HEIF photos to JPG and MOV/HEVC videos to MP4 offline with zero quality loss.",
    "softwareVersion": "1.0.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  return (
    <div className="home-page">
      <SeoMeta
        title="iConvert — Fast, Private Local iPhone Media Converter for Windows"
        description="Convert Apple HEIC photos to JPEG and MOV/HEVC videos to MP4 offline on your PC. No file size limits, zero cloud uploads, zero quality loss. Free Windows download."
        canonicalUrl="https://iconvert.app/"
        schemaJson={schemaJson}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="release-badge">
            <span className="badge-dot"></span>
            <span>v1.0.0 is officially released for Windows 10 &amp; 11</span>
          </div>

          <h1 className="hero-title">
            Convert iPhone Media Locally.{' '}
            <span className="gradient-text">Zero Cloud. Zero Quality Loss.</span>
          </h1>

          <p className="hero-subtitle">
            Convert stubborn Apple <strong>HEIC/HEIF</strong> photos to clean JPEG and <strong>MOV/HEVC</strong> videos to high-compatibility MP4 right on your PC. No file size limits, no slow uploads, and 100% private.
          </p>

          <div className="hero-cta-group">
            <a href="#download" className="btn btn-primary btn-lg">
              <Download size={20} />
              <span>Download for Windows (64-bit)</span>
            </a>
            <Link to="/how-it-works" className="btn btn-secondary btn-lg">
              <Sparkles size={18} />
              <span>See How It Works</span>
            </Link>
          </div>

          <div className="hero-meta-strip">
            <div className="meta-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>100% Local &amp; Offline</span>
            </div>
            <div className="meta-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>No Cloud Uploads</span>
            </div>
            <div className="meta-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>Free &amp; Open Source</span>
            </div>
            <div className="meta-item">
              <CheckCircle2 size={16} color="#10b981" />
              <span>Bundled FFmpeg</span>
            </div>
          </div>

          {/* Interactive Showcase Window */}
          <div className="showcase-wrapper">
            <div className="showcase-glow"></div>
            <div className="showcase-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="window-dot dot-red"></span>
                  <span className="window-dot dot-yellow"></span>
                  <span className="window-dot dot-green"></span>
                </div>
                <div className="window-title">iConvert Desktop — Interactive Conversion Simulator</div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="simulator-body">
                <div className="sim-tabs">
                  <button
                    className={`sim-tab ${activeTab === 'image' ? 'active' : ''}`}
                    onClick={() => setActiveTab('image')}
                  >
                    <FileImage size={16} />
                    <span>iPhone HEIC Photo</span>
                  </button>
                  <button
                    className={`sim-tab ${activeTab === 'video' ? 'active' : ''}`}
                    onClick={() => setActiveTab('video')}
                  >
                    <Video size={16} />
                    <span>iPhone 4K MOV Video</span>
                  </button>
                </div>

                <div className="sim-conversion-row">
                  {/* Left: Input */}
                  <div className="sim-file-card">
                    <div className="file-icon-box">
                      {activeTab === 'image' ? <FileImage size={24} /> : <Video size={24} />}
                    </div>
                    <div className="file-info">
                      <h4>{activeTab === 'image' ? 'IMG_0623.HEIC' : 'REC_Vacation_4K.MOV'}</h4>
                      <p>{activeTab === 'image' ? 'Apple Display P3 • 4032×3024 • 3.2 MB' : 'Apple ProRes / HEVC • 3840×2160 • 420 MB'}</p>
                    </div>
                  </div>

                  {/* Middle: Conversion Action */}
                  <div className="sim-arrow-box">
                    <div className="speed-tag">
                      {activeTab === 'image' ? '⚡ Converted in 0.3s' : '⚡ Converted in 3.1s (GPU)'}
                    </div>
                    <ArrowRight size={22} color="#38bdf8" />
                    <span style={{ fontSize: '0.725rem', color: '#64748b' }}>Hardware Accelerated</span>
                  </div>

                  {/* Right: Output */}
                  <div className="sim-file-card" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                    <div className="file-icon-box" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="file-info">
                      <h4>{activeTab === 'image' ? 'IMG_0623.JPG' : 'REC_Vacation_4K.MP4'}</h4>
                      <p>{activeTab === 'image' ? 'Standard sRGB • 100% Quality • Preserved EXIF' : 'H.264 / AAC • Compatible with all TV & Windows'}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="sim-stats-grid">
                  <div className="sim-stat-card">
                    <div className="val">0 Bytes</div>
                    <div className="lbl">Sent to External Servers (100% Offline)</div>
                  </div>
                  <div className="sim-stat-card">
                    <div className="val">Display P3 → sRGB</div>
                    <div className="lbl">Smart Color Grading (No Blown-out Whites)</div>
                  </div>
                  <div className="sim-stat-card">
                    <div className="val">Original Res</div>
                    <div className="lbl">No Downscaling or Image Blur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Banner 1: High Visibility Hero Placement */}
          <AdBanner />
        </div>
      </section>

      {/* Pain Points vs Solution */}
      <section className="comparison-banner-section" id="comparison">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Why Traditional Converters Fail</span>
            <h2 className="section-heading">Stop Uploading Your Private Media to the Cloud</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Online converter websites force you to upload sensitive personal photos to random remote servers, cap your file sizes, and degrade your photo colors.
            </p>
          </div>

          <div className="pain-grid">
            {/* Bad: Cloud Converters */}
            <div className="pain-card negative">
              <div className="card-badge-pill pill-red">
                <X size={14} />
                <span>Traditional Web Converters</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Slow, Risky &amp; Full of Limits
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                You shouldn't have to trust your personal memories to unknown servers just to open a photo on your PC.
              </p>

              <ul className="card-feature-list">
                <li className="card-feature-item bad">
                  <X size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span><strong>Privacy risk:</strong> Your private photos &amp; videos are uploaded to third-party cloud servers.</span>
                </li>
                <li className="card-feature-item bad">
                  <X size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span><strong>Harsh file limits:</strong> 25MB–50MB caps. Large 4K iPhone videos fail immediately.</span>
                </li>
                <li className="card-feature-item bad">
                  <X size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span><strong>Washed-out colors:</strong> Naive conversion strips Apple HDR tone mapping, leaving images dull.</span>
                </li>
                <li className="card-feature-item bad">
                  <X size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span><strong>Slow queues:</strong> Must wait minutes for upload, remote processing, and re-downloading.</span>
                </li>
              </ul>
            </div>

            {/* Good: iConvert */}
            <div className="pain-card positive">
              <div className="card-badge-pill pill-green">
                <Check size={14} />
                <span>The iConvert Way</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Local, Instant &amp; Private
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                Runs completely on your computer's CPU and GPU. Fast, secure, and entirely offline.
              </p>

              <ul className="card-feature-list">
                <li className="card-feature-item good">
                  <Check size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span><strong>100% Client-Side:</strong> Files never leave your local hard drive. Fully GDPR &amp; privacy safe.</span>
                </li>
                <li className="card-feature-item good">
                  <Check size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span><strong>No File Size Caps:</strong> Convert 1GB, 5GB, or 20GB 4K videos without restriction.</span>
                </li>
                <li className="card-feature-item good">
                  <Check size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span><strong>Near-Zero Loss Tone Mapping:</strong> Preserves Apple Display P3 gamut and tone-curves.</span>
                </li>
                <li className="card-feature-item good">
                  <Check size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span><strong>Instant Batch Export:</strong> Drag 100+ files and download everything in one organized ZIP.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="features-section" id="features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Engineered for Performance</span>
            <h2 className="section-heading">Everything You Need to Handle Apple Media</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Built specifically to solve the quirks of modern iOS photos and videos on Windows PCs.{' '}
              <Link to="/features" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                Explore full technical details &rarr;
              </Link>
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Lock size={26} />
              </div>
              <h3>100% Offline &amp; Private</h3>
              <p>
                Zero internet connection needed. Your family portraits, confidential media, and personal memories are never sent anywhere.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Sparkles size={26} />
              </div>
              <h3>Color &amp; Tone Mapping</h3>
              <p>
                Apple takes photos in wide-gamut Display P3. iConvert intelligently maps colors into standard sRGB so your photos look vibrant on any monitor.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Cpu size={26} />
              </div>
              <h3>Pre-Bundled FFmpeg</h3>
              <p>
                No terminal commands, no PATH configuration, and no separate installations. The industry-standard FFmpeg engine is pre-bundled in the application.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Layers size={26} />
              </div>
              <h3>Batch Superpowers</h3>
              <p>
                Select or drag whole folders of HEIC images and MOV clips. Convert them all in parallel and save as a tidy ZIP with one click.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Sliders size={26} />
              </div>
              <h3>Smart Stream Detection</h3>
              <p>
                iPhone Live Photos and portrait mode contain auxiliary depth maps and thumbnails. iConvert isolates the primary master stream automatically.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <HardDrive size={26} />
              </div>
              <h3>Unlimited File Sizes</h3>
              <p>
                Unlike online tools that throttle you at 50MB, convert heavy 10-bit ProRes or 4K 60fps clips directly from your drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="table-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Side-by-Side</span>
            <h2 className="section-heading">How Does iConvert Compare?</h2>
          </div>

          <div className="table-wrapper">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight" style={{ color: '#38bdf8', fontWeight: 700 }}>
                    iConvert (Desktop)
                  </th>
                  <th>CloudConvert / Online</th>
                  <th>Windows Photos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>File Privacy</strong></td>
                  <td className="highlight cell-check">
                    <span className="cell-content"><Check size={18} /> 100% Local (Never leaves PC)</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Uploaded to remote servers</span>
                  </td>
                  <td className="cell-check">
                    <span className="cell-content"><Check size={18} /> Local</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Max File Size</strong></td>
                  <td className="highlight cell-check">
                    <span className="cell-content"><Check size={18} /> Unlimited (GBs+)</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> 25MB - 100MB limit</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Fails on large MOV/HEVC</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Internet Required?</strong></td>
                  <td className="highlight cell-check">
                    <span className="cell-content"><Check size={18} /> No (Works completely offline)</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Yes (High bandwidth required)</span>
                  </td>
                  <td className="cell-check">
                    <span className="cell-content"><Check size={18} /> No</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Display P3 Color Preserved?</strong></td>
                  <td className="highlight cell-check">
                    <span className="cell-content"><Check size={18} /> Yes (Tone-mapped sRGB)</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Stripped / washed out</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Poor color management</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Batch Folder Download</strong></td>
                  <td className="highlight cell-check">
                    <span className="cell-content"><Check size={18} /> Yes (1-Click ZIP)</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Slow one-by-one or paywall</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Manual one-by-one</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Price</strong></td>
                  <td className="highlight cell-check" style={{ color: '#38bdf8' }}>
                    <span className="cell-content"><Check size={18} /> 100% Free &amp; Open Source</span>
                  </td>
                  <td className="cell-cross">
                    <span className="cell-content"><X size={18} /> Paid credits / Monthly fee</span>
                  </td>
                  <td>
                    <span className="cell-content">Included with Windows</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Simple 3-Step Workflow</span>
            <h2 className="section-heading">Convert in Seconds, Not Minutes</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Read our full step-by-step conversion tutorial in{' '}
              <Link to="/how-it-works" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                How It Works &rarr;
              </Link>
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Drag &amp; Drop Files</h3>
              <p>
                Drop your iPhone photos (`.HEIC`, `.HEIF`) or videos (`.MOV`, `.HEVC`) directly into the window. Batch drops supported.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Select Quality Preset</h3>
              <p>
                Choose from near-zero loss, web optimized, or custom compression. iConvert selects optimal codec profiles automatically.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Save &amp; Share</h3>
              <p>
                Files are converted on your CPU/GPU in seconds. Download individually or click "Download All as ZIP".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsored Partner Callout Card */}
      <section className="container">
        <div className="sponsor-callout-card">
          <div className="sponsor-callout-content">
            <h4>
              <span>⚡ Special Partner Spotlight</span>
              <span className="sponsor-pill">Featured</span>
            </h4>
            <p>Explore recommended cloud utilities, productivity tools, and exclusive member software offers.</p>
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
      </section>

      {/* Download Center */}
      <section className="download-section" id="download">
        <div className="container">
          <div className="download-box">
            <span className="section-tag">Ready to Get Started?</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Download iConvert for Windows
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: 600 }}>
              Version 1.0.0 is completely free, open-source, and comes with FFmpeg pre-bundled. No setup required.
            </p>

            <div className="download-cards-grid">
              {/* Installer */}
              <div className="dl-card recommended">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Windows Installer</h3>
                    <span style={{ fontSize: '0.75rem', background: '#38bdf8', color: '#07090e', padding: '0.2rem 0.6rem', borderRadius: 9999, fontWeight: 700 }}>Recommended</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Standard setup wizard. Installs to Program Files, creates Start Menu &amp; Desktop shortcuts.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.Setup.1.0.0.exe"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.8rem' }}
                  >
                    <Download size={18} />
                    <span>Download Installer (.exe)</span>
                  </a>
                  <div className="dl-meta">
                    64-bit • Windows 10/11 • Bundled FFmpeg Included
                  </div>
                </div>
              </div>

              {/* Portable */}
              <div className="dl-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Portable Edition</h3>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 9999, fontWeight: 600 }}>Standalone</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    No installation required. Double-click and run directly from your USB drive or desktop.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/Aryan1274/iConvert/releases/download/v1.0.0/iConvert.1.0.0.exe"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '0.8rem' }}
                  >
                    <FolderDown size={18} />
                    <span>Download Portable (.exe)</span>
                  </a>
                  <div className="dl-meta">
                    64-bit • Single Executable • No Admin Rights Needed
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>Free of telemetry, ads, and bloatware. Clean on VirusTotal.</span>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://buymeacoffee.com/arvr"
                target="_blank"
                rel="noreferrer"
                className="btn btn-coffee"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}
              >
                <Coffee size={18} />
                <span>Like this free tool? Buy me a coffee ☕</span>
              </a>
            </div>
          </div>

          {/* Ad Banner 2: High Conversion Placement */}
          <AdBanner />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section" id="faq">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {[
            {
              q: 'Do my files ever get uploaded to the cloud or internet?',
              a: 'Never. iConvert is built as a true local desktop application. All HEIC decoding, P3 color tone mapping, and MOV/MP4 transcoding occurs entirely on your own computer’s CPU and GPU. You can even disconnect your internet completely and iConvert will work without skipping a beat.'
            },
            {
              q: 'Do I need to install FFmpeg separately?',
              a: 'No! Unlike many open-source tools that require downloading FFmpeg and editing Windows PATH environment variables, iConvert comes with a verified FFmpeg binary pre-bundled inside the installer. It works immediately out of the box.'
            },
            {
              q: 'Why do my iPhone photos look washed out on other converters?',
              a: 'iPhones capture photos using Apple’s wide Display P3 color gamut. Basic converters ignore color profile tags, causing whites to blow out and skin tones to appear pale when viewed on Windows sRGB screens. iConvert applies high-fidelity color profile tone mapping to preserve rich contrast and color accuracy.'
            },
            {
              q: 'Is iConvert really 100% free?',
              a: 'Yes. iConvert is released under the permissive MIT license. There are no subscriptions, no locked features, no watermarks, and no usage quotas.'
            },
            {
              q: 'What formats are currently supported?',
              a: 'Images: Apple HEIC, HEIF, Live Photo frames to JPEG/PNG. Videos: Apple QuickTime MOV (ProRes, HEVC, H.264) to universal MP4 with AAC audio.'
            }
          ].map((item, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    flexShrink: 0
                  }}
                />
              </button>
              {openFaq === idx && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
