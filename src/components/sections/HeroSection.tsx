'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden pt-28 lg:pt-32">
      {/* Subtle Background Vectors */}
      <div className="hero-vectors pointer-events-none absolute inset-0">
        {/* Top-right decorative circle */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-warm-200/50 opacity-40" />
        <div className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-gold/20 opacity-30" />
        
        {/* Bottom-left decorative lines */}
        <svg
          className="absolute -bottom-20 -left-20 h-[400px] w-[400px] opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M0 200 Q100 150 200 200 T400 200"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold"
          />
          <path
            d="M0 250 Q100 200 200 250 T400 250"
            stroke="currentColor"
            strokeWidth="1"
            className="text-warm-300"
          />
          <path
            d="M0 300 Q100 250 200 300 T400 300"
            stroke="currentColor"
            strokeWidth="1"
            className="text-warm-200"
          />
        </svg>

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
            {/* Eyebrow / Label */}
            <span className="text-label mb-6 inline-block tracking-widest uppercase text-charcoal-500 lg:mb-8">
              Copywriter <span className="text-gold">&</span> Brand Storyteller
            </span>

            {/* Main Headline - Large, confident, editorial */}
            <h1 className="text-hero mb-6 max-w-[14ch] lg:mb-10">
              Words that
              <br />
              <span className="highlight-block-italic animate-slide-in">move</span> people<span className="text-gold">.</span>
            </h1>

            {/* Supporting paragraph - Improved readability */}
            <p className="text-lead mb-10 max-w-[48ch] font-medium text-charcoal lg:mb-14">
              I craft compelling narratives for ambitious brands—strategic copy
              that connects, persuades, and drives meaningful action.
            </p>

            {/* Subtle CTA */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-body font-medium text-ivory transition-all duration-300 hover:bg-charcoal-600 hover:shadow-lg"
              >
                View my work
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-body text-charcoal-500 transition-colors hover:text-charcoal"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                Get in touch
              </Link>
            </div>
          </div>

          {/* Visual Container - Organic Blob with Abstract Illustration */}
          <div className="relative flex-shrink-0 lg:flex-1">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Organic blob shape with clipping */}
              <div className="relative">
                {/* SVG Blob Container */}
                <svg
                  viewBox="0 0 500 600"
                  className="h-auto w-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Define the organic blob clip path */}
                  <defs>
                    <clipPath id="blobClip">
                      <path d="M425,150 C475,220 480,320 450,400 C420,480 350,550 260,570 C170,590 80,540 40,460 C0,380 10,280 50,200 C90,120 150,60 240,40 C330,20 375,80 425,150 Z" />
                    </clipPath>
                    {/* Gradient for the blob background */}
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
                    stroke="#B8976B"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Abstract Writing/Storytelling Illustration */}
                  <g className="text-charcoal" opacity="0.9">
                    {/* Open book / pages shape */}
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
                    
                    {/* Flowing script lines representing writing */}
                    <path
                      d="M180,220 Q220,200 260,220 Q300,240 340,220"
                      fill="none"
                      stroke="#3A3835"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-float"
                      style={{ animationDelay: '0s' }}
                    />
                    <path
                      d="M160,260 Q210,240 260,260 Q310,280 360,260"
                      fill="none"
                      stroke="#B8976B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-float"
                      style={{ animationDelay: '1s' }}
                    />
                    <path
                      d="M170,300 Q220,280 270,300 Q320,320 370,300"
                      fill="none"
                      stroke="#3A3835"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.5"
                    />

                    {/* Quill / pen abstract */}
                    <path
                      d="M320,180 Q340,200 330,230 L325,235 Q335,205 320,180"
                      fill="#B8976B"
                      opacity="0.8"
                    />
                    <line
                      x1="325"
                      y1="235"
                      x2="290"
                      y2="280"
                      stroke="#3A3835"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    
                    {/* Floating words/letters abstract */}
                    <text x="200" y="180" fontFamily="Georgia, serif" fontSize="24" fill="#3A3835" opacity="0.3" fontStyle="italic">a</text>
                    <text x="280" y="400" fontFamily="Georgia, serif" fontSize="20" fill="#B8976B" opacity="0.4">w</text>
                    <text x="140" y="380" fontFamily="Georgia, serif" fontSize="18" fill="#3A3835" opacity="0.2" fontStyle="italic">e</text>
                    
                    {/* Speech bubble dots */}
                    <circle cx="380" cy="250" r="4" fill="#3A3835" opacity="0.3" />
                    <circle cx="395" cy="265" r="3" fill="#B8976B" opacity="0.4" />
                    <circle cx="405" cy="285" r="2" fill="#3A3835" opacity="0.2" />
                  </g>
                </svg>

                {/* Floating accent elements */}
                <div className="animate-float absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gold/10" style={{ animationDelay: '2s' }} />
                <div className="animate-float absolute -left-6 top-1/3 h-4 w-4 rounded-full bg-gold" style={{ animationDelay: '0.5s' }} />
                <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-charcoal/30" />
              </div>

              {/* Decorative outer ring */}
              <div className="animate-slow-rotate pointer-events-none absolute -inset-8 rounded-full border border-dashed border-warm-200/40" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex flex-col items-center gap-3 text-charcoal-300">
            <span className="text-label text-xs">Scroll to explore</span>
            <div className="scroll-indicator h-12 w-px bg-gradient-to-b from-charcoal-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
