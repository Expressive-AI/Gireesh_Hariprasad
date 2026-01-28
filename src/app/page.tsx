/**
 * Homepage
 *
 * Premium editorial copywriting portfolio homepage.
 * Typography-focused, calm, confident design.
 * 
 * Highlighted Catchphrases (typographic heroes):
 * - "Copy that thinks. Then sells."
 * - "Research. Strategy. Proposition. Ideation."
 */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section - Two-column editorial layout */}
      <section className="hero-section relative min-h-screen overflow-hidden pt-28 lg:pt-32">
        {/* Subtle Background Vectors */}
        <div className="hero-vectors pointer-events-none absolute inset-0">
          {/* Top-right decorative circles */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-warm-200/50 opacity-40" />
          <div className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-gold/20 opacity-30" />
          
          {/* Dotted perimeter */}
          <div className="absolute right-8 top-1/4 hidden lg:block">
            <svg width="100" height="300" className="opacity-20">
              <line x1="50" y1="0" x2="50" y2="300" stroke="#C6A96D" strokeWidth="1" strokeDasharray="4 8" />
            </svg>
          </div>

          {/* Floating dots pattern */}
          <div className="absolute right-1/4 top-1/3 hidden lg:block">
            <div className="grid grid-cols-3 gap-4 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gold/40"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          {/* Two-column layout on larger screens */}
          <div className="flex min-h-[calc(100vh-7rem)] flex-col justify-center gap-12 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-24">
            
            {/* Content Column */}
            <div className="flex-1 lg:pr-8">

              {/* Main Headline - TYPOGRAPHIC HERO */}
              <h1 className="mb-8 lg:mb-12">
                <span 
                  className="block text-display leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}
                >
                  Copy that thinks.
                </span>
                <span 
                  className="block text-display leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}
                >
                  Then <span className="relative inline-block">
                    sells
                    {/* Antique gold underline accent */}
                    <span className="absolute -bottom-1 left-0 h-1 w-full bg-gold/60" />
                  </span><span className="text-gold">.</span>
                </span>
              </h1>

              {/* Supporting paragraph - exact copy */}
              <div className="prose-premium mb-10 max-w-[52ch] space-y-6 lg:mb-14">
                <p className="text-lead">
                  I&apos;m a copywriter who loves the English language and respects the hard realities of advertising.
                </p>
                <p className="text-body">
                  Beautiful words are pointless unless they <span style={{ fontFamily: "'Tangerine', cursive", fontSize: '1.75rem', color: '#C6A96D' }}>move</span> people. And people don&apos;t move unless you understand them first.
                </p>
              </div>

              {/* CTA Buttons - Ghost style with Bebas Neue */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-charcoal bg-charcoal px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:tracking-[0.15em] hover:shadow-lg"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  View my work
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-charcoal/30 px-8 py-4 text-sm uppercase tracking-[0.12em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:tracking-[0.15em]"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Visual Container - Organic Oval/Eye Motif */}
            <div className="relative flex-shrink-0 lg:flex-1">
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                {/* Organic blob shape */}
                <svg
                  viewBox="0 0 500 600"
                  className="h-auto w-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E8E4DF" />
                      <stop offset="50%" stopColor="#F5F3F0" />
                      <stop offset="100%" stopColor="#FAF9F7" />
                    </linearGradient>
                  </defs>

                  {/* Blob background */}
                  <path 
                    d="M425,150 C475,220 480,320 450,400 C420,480 350,550 260,570 C170,590 80,540 40,460 C0,380 10,280 50,200 C90,120 150,60 240,40 C330,20 375,80 425,150 Z"
                    fill="url(#blobGradient)"
                  />

                  {/* Blob border */}
                  <path 
                    d="M425,150 C475,220 480,320 450,400 C420,480 350,550 260,570 C170,590 80,540 40,460 C0,380 10,280 50,200 C90,120 150,60 240,40 C330,20 375,80 425,150 Z"
                    fill="none"
                    stroke="#C6A96D"
                    strokeWidth="1"
                    opacity="0.4"
                  />

                  {/* Abstract pen/writing illustration */}
                  <g opacity="0.85">
                    {/* Open book shape */}
                    <path
                      d="M150,320 Q200,280 250,300 Q300,320 250,340 Q200,360 150,320"
                      fill="none"
                      stroke="#3A3835"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M350,320 Q300,280 250,300 Q200,320 250,340 Q300,360 350,320"
                      fill="none"
                      stroke="#3A3835"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    
                    {/* Pen nib */}
                    <path
                      d="M250,180 L230,280 L250,300 L270,280 Z"
                      fill="none"
                      stroke="#C6A96D"
                      strokeWidth="1.5"
                    />
                    <line x1="250" y1="300" x2="250" y2="340" stroke="#1f1a18" strokeWidth="1" />
                    
                    {/* Flowing lines (text representation) */}
                    <path d="M180,380 Q220,370 260,380 T340,375" fill="none" stroke="#5C5854" strokeWidth="1" opacity="0.5" />
                    <path d="M190,400 Q230,390 270,400 T330,395" fill="none" stroke="#5C5854" strokeWidth="1" opacity="0.4" />
                    <path d="M200,420 Q240,410 280,420 T320,415" fill="none" stroke="#5C5854" strokeWidth="1" opacity="0.3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-padding-lg relative overflow-hidden border-t border-warm-200">
        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          <div className="mx-auto max-w-prose-wide">
            <div className="prose-premium space-y-8">
              <p className="text-lead">
                I write long copy, short copy, and everything in between. Press ads that stop the page. Digital copy that earns attention. Direct response copy that nudges, pulls, and converts.
              </p>
              <p className="text-body-lg">
                My goal is simple: help brands sound clearer, smarter, and more persuasive than they did yesterday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - TYPOGRAPHIC HERO */}
      <section className="section-padding relative overflow-hidden bg-warm-50">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          <div className="mx-auto max-w-prose-wide text-center">
            {/* Eyebrow */}
            <span 
              className="mb-6 inline-block text-sm tracking-[0.12em] uppercase text-charcoal-500"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              My Process
            </span>

            <p className="text-lead mb-10">
              I don&apos;t guess. I follow a process.
            </p>

            {/* TYPOGRAPHIC HERO - Process Words */}
            <h2 
              className="mb-10"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
            >
              <span className="relative inline-block">
                Research
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/50" />
              </span>. Strategy. <br className="hidden sm:block" />
              Proposition. <span className="italic">Ideation</span>.
            </h2>

            <p className="text-body-lg mx-auto max-w-[48ch]">
              That&apos;s how I arrive at ideas that matter. Ideas that talk to the right audience, in the right tone, at the right moment.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="section-padding-lg relative overflow-hidden">
        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          <div className="mx-auto max-w-prose-wide">
            <div className="prose-premium space-y-8">
              <p className="text-lead">
                Ideas that turn products into preferences and brands into habits.
              </p>
              <p className="text-body-lg">
                If you&apos;re looking for a versatile copywriter who understands how advertising actually works, you&apos;re in the right place.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-charcoal/30 px-8 py-4 text-sm uppercase tracking-[0.12em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                Learn more about my approach
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-section section-padding relative overflow-hidden border-t border-warm-200 bg-warm-50">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-warm-300/30 to-transparent" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg text-center">
          <span 
            className="mb-6 inline-block text-sm tracking-[0.12em] uppercase text-charcoal-500"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            Get in Touch
          </span>
          
          {/* TYPOGRAPHIC HERO */}
          <h2 
            className="mx-auto mb-8 max-w-[18ch]"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Let&apos;s make something that <span className="relative inline-block">
              works
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/60" />
            </span><span className="text-gold">.</span>
          </h2>
          
          <p className="text-lead mx-auto mb-10 max-w-prose">
            Ready to elevate your brand&apos;s voice? I&apos;d love to hear about your project.
          </p>
          
          <a
            href="mailto:hello@gireeshhariprasad.com"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:tracking-[0.15em] hover:shadow-lg"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            Start a conversation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}