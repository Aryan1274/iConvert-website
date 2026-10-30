import React, { useEffect, useRef } from 'react';

export default function AdBanner({ containerId = "container-3fec9f7dc64752c14d1be099bc235d74", scriptSrc = "https://bellnewyork.org/21/3fec9f7dc64752c14d1be099bc235d74" }) {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Create script dynamically so it executes within React's lifecycle
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    adRef.current.appendChild(script);

    return () => {
      // Cleanup script on unmount if needed
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, [scriptSrc]);

  return (
    <div className="ad-banner-wrapper">
      <div className="ad-disclaimer">
        <span>SPONSORED</span>
      </div>
      <div className="ad-banner-inner" ref={adRef}>
        <div id={containerId}></div>
      </div>
    </div>
  );
}

