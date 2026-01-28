'use client';

/**
 * Footer Component
 *
 * Premium editorial footer with contact info and OpenStreetMap.
 * Includes full address, phone, email as specified.
 * Map shows Hinckley, LE10 2NE location.
 */

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined' || !mapRef.current || mapLoaded) return;

    // Load Leaflet CSS
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(linkEl);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => {
      if (!mapRef.current) return;
      
      // @ts-ignore - Leaflet loaded via script
      const L = window.L;
      
      // Coordinates for Hinckley, LE10 2NE
      const lat = 52.5417;
      const lng = -1.3753;
      
      const map = L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 15,
        scrollWheelZoom: false,
        attributionControl: false
      });

      // Use a muted tile layer (CartoDB Positron for warm, desaturated look)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Custom marker with warm styling
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          width: 32px;
          height: 32px;
          background: #C6A96D;
          border: 2px solid #1f1a18;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Gravitas One', cursive;
          font-size: 12px;
          color: #1f1a18;
          box-shadow: 0 2px 8px rgba(31, 26, 24, 0.2);
        ">GH</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([lat, lng], { icon: customIcon }).addTo(map);
      
      setMapLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
    };
  }, [mapLoaded]);

  return (
    <footer className="border-t border-warm-300 bg-ivory">
      {/* Main Footer Content */}
      <div className="container-padding mx-auto max-w-content-lg py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            {/* Logo & Name */}
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/logo.png" 
                alt="Gireesh Hariprasad Logo" 
                className="h-10 w-auto sm:h-12"
              />
              <span 
                className="text-2xl tracking-wide text-charcoal sm:text-3xl"
                style={{ 
                  fontFamily: "'Gravitas One', cursive",
                  letterSpacing: '0.02em'
                }}
              >
                Gireesh Hariprasad
              </span>
            </Link>
            
            <p 
              className="mb-8 text-sm tracking-[0.12em] uppercase text-charcoal-400"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              Copywriter
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div>
                <span 
                  className="block text-xs tracking-[0.1em] uppercase text-charcoal-400 mb-1"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Mobile (UK)
                </span>
                <a
                  href="tel:+447778200054"
                  className="text-body text-charcoal hover:text-gold transition-colors"
                >
                  07778 200054
                </a>
              </div>

              {/* Email */}
              <div>
                <span 
                  className="block text-xs tracking-[0.1em] uppercase text-charcoal-400 mb-1"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@gireeshhariprasad.com"
                  className="text-body text-charcoal hover:text-gold transition-colors"
                >
                  gireesh2hariprasad@gmail.com
                </a>
              </div>

              {/* Address */}
              <div>
                <span 
                  className="block text-xs tracking-[0.1em] uppercase text-charcoal-400 mb-1"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Address
                </span>
                <address className="text-body not-italic text-charcoal">
                  21, Crimson Way<br />
                  Hinckley<br />
                  LE10 2NE
                </address>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6">
              {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-sm tracking-[0.1em] uppercase text-charcoal-500 hover:text-charcoal transition-colors"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Map */}
          <div className="flex items-center justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-[420px] overflow-hidden rounded-2xl"
              style={{
                border: '1px solid #C6A96D',
                boxShadow: '0 4px 20px rgba(31, 26, 24, 0.08)',
                background: 'rgba(247, 244, 241, 0.8)'
              }}
            >
              {/* Map Container */}
              <div 
                ref={mapRef}
                className="h-[280px] w-full"
                style={{ minHeight: '280px' }}
              >
                {/* Fallback if map doesn't load */}
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-warm-100">
                    <div className="text-center">
                      <div 
                        className="mb-2 text-4xl font-bold text-gold"
                        style={{ fontFamily: "'Gravitas One', cursive" }}
                      >
                        GH
                      </div>
                      <p className="text-sm text-charcoal-400">
                        21, Crimson Way, Hinckley
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-warm-200">
        <div className="container-padding mx-auto max-w-content-lg py-6">
          <p className="text-center text-xs text-charcoal-400">
             {currentYear} Gireesh Hariprasad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}