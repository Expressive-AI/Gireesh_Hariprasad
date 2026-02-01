/**
 * Antler Play Gallery Café - Case Study Page
 * 
 * A press advertisement for a play gallery café.
 * Design: Warm, playful, family-focused.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Antler Play Gallery Café | Copywriting Case Study',
  description: 'A press advertisement written to position a play café as a shared space for children and parents.',
  openGraph: {
    title: 'Antler Play Gallery Café',
    description: 'Quality time for your children. Wonderful moments for you.',
  },
};

export default function AntlerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Organic Background Shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute -right-24 -top-16 w-[550px] h-[550px] text-warm-200 opacity-50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M42.8,-52.4C55.9,-45.1,67,-32.4,71.8,-17.5C76.6,-2.6,75.1,14.5,68,28.5C60.9,42.5,48.2,53.4,33.9,59.8C19.6,66.2,3.7,68.1,-11.8,65.6C-27.3,63.1,-42.4,56.2,-53.5,45C-64.6,33.8,-71.7,18.3,-73.1,2.1C-74.5,-14.1,-70.2,-30.9,-60.1,-43.5C-50,-56.1,-34.1,-64.5,-18.4,-67.1C-2.7,-69.7,12.8,-66.5,26.9,-60.5C41,-54.5,53.7,-45.7,42.8,-52.4Z"
                transform="translate(100 100)"
              />
            </svg>
            
            <svg
              className="absolute -left-20 top-1/2 w-[400px] h-[400px] text-gold opacity-15"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M47.5,-57.2C59.9,-46.7,67.5,-30.5,71.1,-13.1C74.7,4.3,74.3,22.9,66.2,37.3C58.1,51.7,42.3,61.9,25.3,67.8C8.3,73.7,-9.8,75.3,-26.5,70.1C-43.2,64.9,-58.5,52.9,-67.3,37.3C-76.1,21.7,-78.4,2.5,-74.2,-14.7C-70,-31.9,-59.3,-47.1,-45.3,-57.3C-31.3,-67.5,-14,-72.7,1.8,-74.9C17.6,-77.1,35.1,-67.7,47.5,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>

            <svg
              className="absolute right-1/3 bottom-0 w-[300px] h-[300px] text-warm-300 opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M39.9,-51.3C52.7,-44.3,64.8,-33.9,70.3,-20.5C75.8,-7.1,74.6,9.3,68.4,23.3C62.1,37.3,50.8,48.9,37.6,56.3C24.4,63.7,9.3,66.9,-5.5,66.1C-20.3,65.3,-34.8,60.5,-46.5,51.7C-58.2,42.9,-67.1,30.1,-70.9,15.5C-74.7,0.9,-73.4,-15.5,-66.4,-28.3C-59.4,-41.1,-46.7,-50.3,-33.5,-57.1C-20.3,-63.9,-6.6,-68.3,5.8,-67.5C18.2,-66.7,27.1,-58.3,39.9,-51.3Z"
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
                <li className="text-charcoal-500">Press Advertisement</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  PRESS ADVERTISEMENT
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  Antler Play Gallery Café
                </h1>
                <p className="text-xl lg:text-2xl font-light text-charcoal-600 italic mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Let your kids play their hearts out
                </p>
                <p className="text-xl lg:text-2xl font-light text-gold italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  while you catch up with yours.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">Antler</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2025</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Type</span>
                    <span className="text-body font-medium text-charcoal">Print Ad</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div 
                  className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden"
                  style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }}
                >
                  <Image
                    src="/images/antler/antler-1.jpg"
                    alt="Children playing at Antler Play Gallery Café"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-3 border-2 border-gold/20" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Press Ad Section - Dense, Copy-Driven Layout */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            {/* Press Ad - Editorial Layout */}
            <article className="py-8 lg:py-12">
              {/* Headline */}
              <div className="text-center mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal uppercase tracking-tight leading-tight mb-1">
                  Let your kids play their hearts out
                </h2>
                <p className="text-2xl lg:text-3xl font-bold text-gold uppercase tracking-tight leading-tight">
                  While you catch up with yours
                </p>
              </div>

              {/* Brand Name & Tagline */}
              <div className="text-center mb-6 pb-6 border-b border-warm-200">
                <p className="text-xl lg:text-2xl font-semibold text-charcoal tracking-wide uppercase">
                  Antler Play Gallery Café
                </p>
                <p className="text-base text-charcoal-600 italic mt-1">
                  Quality time for your children. Wonderful moments for you.
                </p>
              </div>

              {/* Main Copy */}
              <div className="mb-6">
                <p className="text-base text-charcoal-600 leading-snug">
                  Step into Antlers with your kids – A special world made for them with curated space for indoor games and a high-quality café environment for you and caregivers.
                </p>
              </div>

              {/* Compact Image Strip */}
              <div className="flex gap-3 my-6 overflow-hidden">
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/antler/antler-1.jpg"
                    alt="Children playing at Antler"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/antler/antler-2.jpg"
                    alt="Cozy café environment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/images/antler/antler-3.jpg"
                    alt="Creative play activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Features - Inline Style */}
              <div className="mb-6">
                <ul className="text-base text-charcoal-600 leading-snug space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Dedicated zones for children
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Coffee bar serving drinks, snacks and light meals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    FREE Wi-Fi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Bookings for Events &amp; parties
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Storytime, art lessons, and music sessions for children
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Secure check-in systems to keep children safe
                  </li>
                </ul>
              </div>

              {/* Closing CTA */}
              <div className="border-l-3 border-gold pl-4 mb-6">
                <p className="text-base text-charcoal-600 leading-snug mb-1">Come with your little ones.</p>
                <p className="text-base text-charcoal-700 font-medium leading-snug italic">Stay for the coffee, the laughs and the break you deserve.</p>
              </div>

              {/* Logo Placeholder */}
              <div className="text-center pt-6 border-t border-warm-200">
                <div className="inline-flex items-center justify-center w-48 h-16 border-2 border-dashed border-charcoal-300 rounded-lg bg-warm-50">
                  <span className="text-sm text-charcoal-400 font-medium">Logo Placeholder</span>
                </div>
                <p className="text-sm text-charcoal-500 mt-2">Antlers Play Gallery Café</p>
              </div>
            </article>
          </div>
        </section>


        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/zamosa-pet-grooming" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← Zamosa Pet Grooming
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
                <Link href="/work/philips-powerpro-vacuum-cleaner" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    Philips PowerPro →
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
