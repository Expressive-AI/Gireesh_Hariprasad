/**
 * FOS Advertisers Homepage - Case Study Page
 * 
 * Homepage brand writing for an advertising agency.
 * Design: Professional, confident, editorial feel.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'FOS Advertisers Homepage | Copywriting Case Study',
  description: 'Homepage brand writing focused on restraint, clarity, and ideas that endure.',
  openGraph: {
    title: 'FOS Advertisers',
    description: 'Ideas that stay. Stories that sell.',
  },
};

export default function FOSPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Organic Background Shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute -right-32 -top-20 w-[600px] h-[600px] text-warm-200 opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M44.7,-52.8C57.3,-42.6,66.4,-28.1,69.8,-12.1C73.2,3.9,70.9,21.4,62.3,35.1C53.7,48.8,38.8,58.7,22.5,64.1C6.2,69.5,-11.5,70.4,-27.2,65C-42.9,59.6,-56.6,47.9,-64.5,33C-72.4,18.1,-74.5,0,-70.4,-15.8C-66.3,-31.6,-56,-45.1,-43,-54.9C-30,-64.7,-15,-70.8,0.5,-71.4C16,-72,32.1,-63,44.7,-52.8Z"
                transform="translate(100 100)"
              />
            </svg>
            
            <svg
              className="absolute -left-24 top-1/3 w-[450px] h-[450px] text-gold opacity-10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M45.3,-54.2C58.3,-46.5,68.2,-32.5,72.3,-16.8C76.4,-1.1,74.7,16.3,66.7,30.1C58.7,43.9,44.4,54.1,28.9,60.1C13.4,66.1,-3.3,67.9,-19.3,64.2C-35.3,60.5,-50.6,51.3,-60.1,38C-69.6,24.7,-73.3,7.3,-70.2,-8.5C-67.1,-24.3,-57.2,-38.5,-44.3,-46.3C-31.4,-54.1,-15.7,-55.5,0.3,-55.9C16.3,-56.3,32.3,-61.9,45.3,-54.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="container-padding relative z-10 mx-auto max-w-content-lg">
            {/* Breadcrumb */}
            <nav className="mb-8 lg:mb-12">
              <ol className="flex items-center gap-2 text-sm text-charcoal-400">
                <li><Link href="/" className="transition-colors hover:text-charcoal">Home</Link></li>
                <li className="text-charcoal-300">/</li>
                <li><Link href="/work" className="transition-colors hover:text-charcoal">Work</Link></li>
                <li className="text-charcoal-300">/</li>
                <li className="text-charcoal-500">Brand Copy</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  HOMEPAGE BRAND WRITING
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  FOS Advertisers
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-charcoal-600 italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Ideas that stay. Stories that sell.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">FOS Advertisers</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2025</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Location</span>
                    <span className="text-body font-medium text-charcoal">Thiruvananthapuram</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div 
                  className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden"
                  style={{ borderRadius: '40% 60% 50% 50% / 50% 45% 55% 50%' }}
                >
                  <Image
                    src="/images/fos-advert/fos-1.jpg"
                    alt="FOS Advertisers creative workspace"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 border-2 border-gold/20" style={{ borderRadius: '40% 60% 50% 50% / 50% 45% 55% 50%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Website Home Page Copy Showcase - Dense, Editorial Layout */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            <article className="py-8 lg:py-12">
              
              {/* Project Header */}
              <div className="mb-6 pb-4 border-b border-warm-200">
                <p className="text-lg font-semibold text-charcoal">FOS Advertisers</p>
                <p className="text-sm text-gold font-medium">Website Home Page</p>
              </div>

              {/* Brand Name & Tagline */}
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal uppercase tracking-tight mb-2">
                  FOS Advertisers
                </h2>
                <p className="text-xl lg:text-2xl text-gold font-medium italic">
                  Ideas that stay. Stories that sell.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Advertising, Done with Intent</h3>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Based in Thiruvananthapuram, FOS Advertisers has been shaping brands, building recall, and driving results since 2005. We&apos;re not loud for the sake of noise. We create communication that connects, converts, and lasts.
                </p>
                <p className="text-base text-charcoal-600 leading-snug">
                  From digital-first campaigns to full-scale brand stories across every medium, we help businesses speak clearly and confidently to the people who matter.
                </p>
              </div>

              {/* Compact Image Strip */}
              <div className="flex gap-3 my-6 overflow-hidden">
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/fos-advert/fos-1.jpg"
                    alt="FOS Advertisers workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/fos-advert/fos-2.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/images/fos-advert/fos-3.jpg"
                    alt="Creative work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">One Agency. Every Medium.</h3>
                <p className="text-base text-charcoal-600 leading-snug mb-4">
                  We handle advertising in its entirety, so your brand stays consistent everywhere it appears.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-charcoal inline">Digital Advertising &amp; Social Media</h4>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Performance-driven campaigns that cut through clutter, spark engagement, and deliver measurable growth.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-semibold text-charcoal inline">Print, Outdoor &amp; Electronic Media</h4>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Strategic visibility across newspapers, magazines, hoardings, radio, and television—planned for maximum impact.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-semibold text-charcoal inline">Branding &amp; Creative Communication</h4>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — From logos to long-term brand language, we shape identities that feel sharp, relevant, and unmistakably yours.</p>
                  </div>
                </div>
              </div>

              {/* Production House Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">An In-House Production House That Delivers</h3>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  FOS Advertisers runs its own full-fledged production house, producing high-quality TV commercials from concept to final cut.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Over 30 national brands of repute
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Commercials produced in multiple Indian languages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Strong storytelling, cinematic visuals, and broadcast-ready execution
                  </li>
                </ul>
                <p className="text-base text-charcoal-700 font-medium italic">
                  When we create a film, we don&apos;t just showcase a product—we build belief.
                </p>
              </div>

              {/* Experience Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Experience That Shows</h3>
                <p className="text-base text-charcoal-600 leading-snug mb-2">
                  Nearly two decades in the industry have taught us one thing: trends change, but good ideas endure. Our experience helps us balance creativity with clarity, and ambition with practicality.
                </p>
                <p className="text-base text-charcoal-700 font-medium">
                  That&apos;s why brands trust us. That&apos;s why campaigns work.
                </p>
              </div>

              {/* CTA Section */}
              <div className="pt-6 border-t border-warm-200 text-center">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Let&apos;s Build Something Memorable</h3>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Whether you&apos;re launching a brand, scaling up, or redefining how the world sees you, we&apos;re ready.
                </p>
                <p className="text-base text-charcoal-700 font-medium">
                  Talk to FOS Advertisers today. Let&apos;s plan your next campaign—and make it count.
                </p>
              </div>

            </article>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/merryba-homepage" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← Merryba
                  </span>
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-2.5 text-body-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                >
                  View all work
                </Link>
              </div>
              <div className="flex-1 text-right">
                <Link href="/work/chilampu-indian-dance-academy" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    Chilampu Dance Academy →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
