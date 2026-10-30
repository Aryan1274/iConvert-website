import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FolderOpen, Sliders, CheckCircle2, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner.jsx';
import SeoMeta from '../components/SeoMeta.jsx';

export default function HowItWorks() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert iPhone HEIC Photos & MOV Videos on Windows",
    "description": "Step-by-step tutorial on converting Apple HEIC to JPG and MOV to MP4 locally on Windows 10 & 11 using iConvert.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download and launch iConvert",
        "text": "Download the Windows installer or portable version of iConvert. Launch the app directly without installing external dependencies."
      },
      {
        "@type": "HowToStep",
        "name": "Drag and drop your iPhone media files",
        "text": "Drag and drop your .HEIC, .HEIF, or .MOV files into the iConvert window or use the folder picker."
      },
      {
        "@type": "HowToStep",
        "name": "Select conversion quality preset",
        "text": "Choose your desired quality preset. iConvert applies automatic Display P3 color mapping and hardware GPU acceleration."
      },
      {
        "@type": "HowToStep",
        "name": "Export and save",
        "text": "Convert your files in seconds. Download individually or click Download All as ZIP."
      }
    ]
  };

  return (
    <div className="how-it-works-page container" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <SeoMeta
        title="How It Works — Step-by-Step Guide to Converting iPhone Media on PC"
        description="Learn how to convert iPhone HEIC photos to JPG and MOV videos to MP4 on Windows 10 & 11 in seconds with zero quality loss and 100% privacy."
        canonicalUrl="https://iconvert.app/how-it-works"
        schemaJson={schemaJson}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <span className="section-tag">Quick Tutorial</span>
        <h1 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)' }}>
          How <span className="gradient-text">iConvert</span> Works
        </h1>
        <p className="section-desc" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
          Convert hundreds of photos and gigabytes of 4K iPhone video in four effortless steps. 100% offline on your PC.
        </p>
      </div>

      {/* 4 Steps Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
        <div className="pain-card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="step-number" style={{ margin: 0, fontSize: '2rem' }}>01</div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Download &amp; Launch iConvert</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
            Download either the <strong>Windows Installer (.exe)</strong> with a desktop shortcut or the <strong>Portable Edition</strong> which runs instantly with zero installation. All necessary conversion libraries (including hardware-accelerated FFmpeg) are pre-bundled—you never have to open the Windows terminal or edit environment variables.
          </p>
        </div>

        <div className="pain-card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="step-number" style={{ margin: 0, fontSize: '2rem' }}>02</div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Drag &amp; Drop Your Files or Folders</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
            Drag and drop individual `.HEIC`, `.HEIF`, `.MOV`, or `.MP4` files directly into the window. You can also drag entire folders containing hundreds of vacation photos or drone videos. iConvert scans and queues your batch instantly without uploading a single byte to the web.
          </p>
        </div>

        <div className="pain-card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="step-number" style={{ margin: 0, fontSize: '2rem' }}>03</div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Automatic Color Grading &amp; Encoding</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
            iConvert inspects your files:
          </p>
          <ul className="card-feature-list" style={{ marginTop: '0.75rem' }}>
            <li className="card-feature-item good">
              <CheckCircle2 size={16} color="#10b981" />
              <span>For <strong>HEIC photos</strong>: Extracts the primary image stream and tone-maps Apple Display P3 to standard sRGB with full EXIF metadata.</span>
            </li>
            <li className="card-feature-item good">
              <CheckCircle2 size={16} color="#10b981" />
              <span>For <strong>MOV videos</strong>: Converts 10-bit Dolby Vision HDR into universal 8-bit SDR H.264 video with AAC audio so colors stay true.</span>
            </li>
          </ul>
        </div>

        <div className="pain-card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="step-number" style={{ margin: 0, fontSize: '2rem' }}>04</div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Save Individually or 1-Click ZIP Download</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
            As conversions finish in real-time, you can download files one by one or click <strong>"Download All as ZIP"</strong> to bundle your entire converted album into a clean, ready-to-share archive on your local hard drive.
          </p>
        </div>
      </div>

      {/* Ad Placement 1 */}
      <AdBanner />

      {/* Pro Tips Section */}
      <div style={{ maxWidth: '900px', margin: '4rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag">Helpful Advice</span>
          <h2 className="section-heading">Pro Tips for Transferring iPhone Media to PC</h2>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="feature-box">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={20} color="#38bdf8" />
              <span>"Keep Originals" Setting</span>
            </h3>
            <p style={{ fontSize: '0.925rem' }}>
              On your iPhone, go to <strong>Settings &rarr; Photos &rarr; Transfer to Mac or PC</strong> and select <strong>"Keep Originals"</strong>. This prevents Windows from crashing or showing <em>"A device attached to the system is not functioning"</em> errors during USB transfers.
            </p>
          </div>

          <div className="feature-box">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="#10b981" />
              <span>Preserve 4K Quality</span>
            </h3>
            <p style={{ fontSize: '0.925rem' }}>
              Never send yourself photos via WhatsApp or basic messaging apps before converting—messaging apps compress and downscale your pictures. Transfer originals via USB cable or local Wi-Fi, then convert with iConvert.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Spotlight */}
      <div className="sponsor-callout-card" style={{ margin: '3rem auto' }}>
        <div className="sponsor-callout-content">
          <h4>
            <span>⚡ Recommended iPhone to PC Transfer Cables &amp; Hubs</span>
            <span className="sponsor-pill">Sponsored</span>
          </h4>
          <p>Tired of slow USB 2.0 speeds? Browse high-speed USB-C to USB-A data cables and multi-port transfer hubs.</p>
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
        <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>Ready to Convert Your Media?</h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem auto', maxWidth: '600px' }}>
          Download iConvert free for Windows 10 &amp; 11. No accounts, no subscriptions.
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

