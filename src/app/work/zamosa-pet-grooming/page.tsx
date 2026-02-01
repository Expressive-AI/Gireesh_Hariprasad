/**
 * Zamosa Pet Grooming - Case Study Page
 * 
 * A promotional flyer project showcasing copywriting work.
 * Design: Organic shapes, natural feel, luxury creative approach.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const baseUrl = 'https://gireeshhariprasad.com';

export const metadata: Metadata = {
  title: 'Zamosa Pet Grooming | Copywriting Case Study',
  description: 'A promotional flyer written to attract pet lovers by showing care, calmness, and the emotional result of grooming — not the act itself.',
  keywords: ['pet grooming copywriting', 'promotional flyer', 'pet services marketing', 'emotional copywriting'],
  alternates: {
    canonical: `${baseUrl}/work/zamosa-pet-grooming`,
  },
  openGraph: {
    title: 'Zamosa Pet Grooming | Copywriting Case Study',
    description: 'Treatments that make your dog more lovely. A copywriting case study showcasing emotional brand messaging.',
    url: `${baseUrl}/work/zamosa-pet-grooming`,
    type: 'article',
    images: [
      {
        url: '/images/zamosa/zamosa-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Zamosa Pet Grooming promotional flyer copywriting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zamosa Pet Grooming | Copywriting Case Study',
    description: 'A promotional flyer written with care, calmness, and emotional resonance.',
  },
};

// JSON-LD Structured Data for this case study
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Zamosa Pet Grooming - Promotional Flyer Copywriting',
  description: 'A promotional flyer written to attract pet lovers by showing care, calmness, and the emotional result of grooming.',
  url: `${baseUrl}/work/zamosa-pet-grooming`,
  author: {
    '@type': 'Person',
    name: 'Gireesh Hariprasad',
    url: baseUrl,
    jobTitle: 'Copywriter',
  },
  datePublished: '2025-05-01',
  genre: 'Advertising Copy',
  keywords: ['promotional flyer', 'pet grooming', 'copywriting', 'brand messaging'],
  about: {
    '@type': 'Organization',
    name: 'Zamosa Pet Grooming',
  },
};

export default function ZamosaPetGroomingPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section with Asymmetrical Organic Shapes */}
        <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
          {/* Organic Background Shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Large organic blob - top right */}
            <svg
              className="absolute -right-20 -top-20 w-[600px] h-[600px] text-warm-200 opacity-60"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M47.5,-57.2C59.9,-46.7,67.5,-30.5,71.1,-13.1C74.7,4.3,74.3,22.9,66.2,37.3C58.1,51.7,42.3,61.9,25.3,67.8C8.3,73.7,-9.8,75.3,-26.5,70.1C-43.2,64.9,-58.5,52.9,-67.3,37.3C-76.1,21.7,-78.4,2.5,-74.2,-14.7C-70,-31.9,-59.3,-47.1,-45.3,-57.3C-31.3,-67.5,-14,-72.7,1.8,-74.9C17.6,-77.1,35.1,-67.7,47.5,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>
            
            {/* Medium organic blob - left */}
            <svg
              className="absolute -left-32 top-1/3 w-[450px] h-[450px] text-gold opacity-20"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M44.7,-52.8C57.3,-42.6,66.4,-28.1,69.8,-12.1C73.2,3.9,70.9,21.4,62.3,35.1C53.7,48.8,38.8,58.7,22.5,64.1C6.2,69.5,-11.5,70.4,-27.2,65C-42.9,59.6,-56.6,47.9,-64.5,33C-72.4,18.1,-74.5,0,-70.4,-15.8C-66.3,-31.6,-56,-45.1,-43,-54.9C-30,-64.7,-15,-70.8,0.5,-71.4C16,-72,32.1,-63,44.7,-52.8Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Small organic blob - bottom right */}
            <svg
              className="absolute right-20 bottom-10 w-[250px] h-[250px] text-warm-300 opacity-50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M39.5,-48.3C50.9,-39.6,59.6,-27.3,63.7,-13.2C67.8,0.9,67.3,16.8,61.1,30.1C54.9,43.4,43,54.1,29.1,59.6C15.2,65.1,-0.7,65.4,-16.4,61.5C-32.1,57.6,-47.6,49.5,-57.3,37C-67,24.5,-70.9,7.6,-68.4,-8.2C-65.9,-24,-57,-38.7,-44.7,-47.2C-32.4,-55.7,-16.2,-58,-0.6,-57.3C15,-56.6,28.1,-57,39.5,-48.3Z"
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
                <li className="text-charcoal-500">Advertising Copy</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-3 block">
                  THE COPY
                </span>
                <h1 className="text-display mb-4 text-charcoal uppercase">
                  Zamosa Pet Grooming
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-charcoal-600 italic mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Treatments that make your dog more lovely
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">Zamosa</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2025</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Copywriter</span>
                    <span className="text-body font-medium text-charcoal">Gireesh Hariprasad</span>
                  </div>
                </div>
              </div>

              {/* Hero Image with Organic Shape Mask */}
              <div className="relative">
                <div className="relative">
                  {/* Organic shape container */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                    <defs>
                      <clipPath id="heroClip">
                        <path d="M200,20 C280,20 360,80 380,160 C400,240 360,340 280,370 C200,400 80,380 40,300 C0,220 20,100 100,50 C140,25 160,20 200,20 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div 
                    className="relative aspect-square w-full max-w-md mx-auto overflow-hidden"
                    style={{ 
                      clipPath: 'url(#heroClip)',
                      borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%'
                    }}
                  >
                    <Image
                      src="/images/zamosa/zamoa_pet-1.jpg"
                      alt="Happy groomed dog at Zamosa Pet Grooming"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 border-2 border-gold/30 rounded-full" style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Copy Section - Dense, Continuous Reading Experience */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            {/* The Copy - Editorial Layout */}
            <article className="py-8 lg:py-12">
              {/* Offer Banner - Inline with copy */}
              <div className="text-center mb-8 pb-8 border-b border-warm-200">
                <p className="text-4xl lg:text-5xl font-bold text-gold tracking-tight" style={{ fontFamily: 'var(--font-bebas)' }}>
                  GET 30% OFF ALL SERVICES
                </p>
                <p className="text-lg text-charcoal-600 mt-2">It&apos;s our love for you.</p>
                <p className="text-base text-charcoal-500 italic">Throughout May 2025</p>
              </div>

              {/* Why Zamosa */}
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal mb-2">Why Zamosa?</h2>
                <p className="text-lg text-charcoal-600 italic mb-3">It&apos;s all about providing dedicated service.</p>
                <p className="text-base text-charcoal-600 leading-snug mb-1">Because we understand how much you love your pet.</p>
                <p className="text-base text-charcoal-600 leading-snug mb-1">We treat every dog that walks in with this affection and patience.</p>
                <p className="text-base text-charcoal-700 leading-snug font-medium">So, we groom with heart to the best of your satisfaction.</p>
              </div>

              {/* Compact Image Strip */}
              <div className="flex gap-3 my-8 overflow-hidden">
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/zamosa/zamoa_pet-1.jpg"
                    alt="Beautifully groomed dog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/zamosa/zamoa_pet-2.jpg"
                    alt="Happy dog after grooming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/images/zamosa/zamoa_pet-3.jpg"
                    alt="Calm groomed dog"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Our Services */}
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal mb-4">Our Services</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">Full Body Bath &amp; Blow Dry</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Deep cleansing that leaves your dog fresh, relaxed and cuddly, removing dirt, odour and stress.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">Breed-specific Haircuts &amp; Styling</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Not just a one-style-fits-all trim, but tailored cuts that suit your dog&apos;s breed, coat and personality.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">De-shedding Treatment</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Reduces hair fall and keeps your home cleaner.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">Nail Trimming &amp; Paw Care</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — No pain, posture issues and scratches. Only short nails, soft paws and happy walks.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">Ear Cleaning</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Care that prevents infections, itching and foul smells.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-charcoal inline">Tick &amp; Flea Treatment</h3>
                    <p className="text-base text-charcoal-600 leading-snug inline"> — Effective treatment that leaves your dog itch-free.</p>
                  </div>
                </div>
              </div>

              {/* We Promise */}
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal mb-3">We promise:</h2>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Expert service
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Calm handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Hygienic treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Honest advice
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Your dog&apos;s safety and comfort
                  </li>
                </ul>
              </div>

              {/* Commitment Statement */}
              <div className="border-l-3 border-gold pl-4 mb-8">
                <p className="text-lg text-charcoal font-medium italic leading-snug">
                  At Zamosa, grooming isn&apos;t just another service. It&apos;s commitment.
                </p>
              </div>

              {/* CTA - Inline with copy */}
              <div className="text-center pt-6 border-t border-warm-200">
                <p className="text-2xl lg:text-3xl font-semibold text-charcoal mb-1">
                  Book now. <span className="text-gold">Save 30%</span>
                </p>
                <p className="text-base text-charcoal-600 mb-4">
                  Give your dog the best care it deserves. At a price you can easily afford.
                </p>
                <p className="text-lg font-medium text-gold">Zamosa Pet Grooming</p>
                <p className="text-sm text-charcoal-500 italic">For wag-worthy results</p>
              </div>
            </article>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-10 lg:py-12">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/chilampu-indian-dance-academy" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← Chilampu Dance Academy
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
                <Link href="/work/antler-play-gallery-cafe" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    Antler Play Gallery Café →
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
