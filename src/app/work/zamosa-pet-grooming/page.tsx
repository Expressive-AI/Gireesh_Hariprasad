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

export const metadata: Metadata = {
  title: 'Zamosa Pet Grooming | Copywriting Case Study',
  description: 'A promotional flyer written to attract pet lovers by showing care, calmness, and the emotional result of grooming — not the act itself.',
  openGraph: {
    title: 'Zamosa Pet Grooming',
    description: 'Treatments that make your dog more lovely. A copywriting case study.',
  },
};

export default function ZamosaPetGroomingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section with Asymmetrical Organic Shapes */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
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

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  PROMOTIONAL FLYER
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  Zamosa Pet Grooming
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-charcoal-600 italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
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
                    <span className="text-label block text-charcoal-400 mb-1">Location</span>
                    <span className="text-body font-medium text-charcoal">United Kingdom</span>
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

        {/* 30% Off Success Banner */}
        <section className="relative py-16 lg:py-24 bg-charcoal text-ivory overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
          
          <div className="container-padding relative z-10 mx-auto max-w-content-lg text-center">
            <span className="text-label tracking-widest text-gold mb-4 block">THE OFFER</span>
            <div className="flex items-center justify-center gap-4 lg:gap-8 mb-6">
              <div className="h-px flex-1 max-w-24 bg-gold/40" />
              <span className="text-8xl lg:text-[10rem] font-bold text-gold" style={{ fontFamily: 'var(--font-bebas)' }}>
                30%
              </span>
              <div className="h-px flex-1 max-w-24 bg-gold/40" />
            </div>
            <p className="text-2xl lg:text-3xl font-light mb-2">OFF ALL SERVICES</p>
            <p className="text-lg text-ivory/70 italic">It&apos;s our love for you. Throughout May 2025</p>
          </div>
        </section>

        {/* Loose Image Gallery Layout */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative grid grid-cols-12 gap-4 lg:gap-6 min-h-[600px] lg:min-h-[700px]">
              {/* Image 1 - Large, offset top-left */}
              <div className="col-span-7 row-span-2 relative -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/zamosa/zamoa_pet-1.jpg"
                    alt="Beautifully groomed dog enjoying the sunshine"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Image 2 - Medium, offset right */}
              <div className="col-span-5 col-start-8 relative mt-12 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/zamosa/zamoa_pet-2.jpg"
                    alt="Happy dog after grooming session"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Image 3 - Small, floating middle-right */}
              <div className="col-span-4 col-start-9 relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/images/zamosa/zamoa_pet-3.jpg"
                    alt="Calm dog during gentle grooming"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-8 top-1/4 w-16 h-16 border-2 border-gold/30 rounded-full" />
              <div className="absolute right-1/4 bottom-12 w-24 h-24 border border-warm-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* Introduction - The Brief */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE BRIEF</span>
              <p className="text-lead text-charcoal-600 mb-8">
                This project involved writing a promotional flyer for a pet grooming service based in the UK. 
                The brief was clear: the communication should never feel loud, aggressive, or salesy. 
                It had to feel affectionate, calm, and trustworthy — just like the relationship between people and their pets.
              </p>
              <p className="text-body-lg text-charcoal-500 leading-relaxed">
                A key creative principle followed here was to <em>never show the act of grooming itself</em>. 
                Instead, the copy and visuals focus on the result — a calm, happy, beautifully groomed dog. 
                The idea is simple: don&apos;t show the process, show the outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Why Zamosa Section */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE COPY</span>
              <h2 className="text-title mb-6 text-charcoal">Why Zamosa?</h2>
              <p className="text-xl lg:text-2xl font-light text-charcoal-600 italic mb-8">
                It&apos;s all about providing dedicated service.
              </p>
              
              <div className="space-y-6 text-charcoal-600 leading-relaxed">
                <p>Because we understand how much you love your pet.</p>
                <p>We treat every dog that walks in with this affection and patience.</p>
                <p className="font-medium text-charcoal">So, we groom with heart to the best of your satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-label tracking-widest text-gold mb-4 block">DELIVERED COPY</span>
              <h2 className="text-title text-charcoal">Our Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Service 1 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Full Body Bath &amp; Blow Dry</h3>
                    <p className="text-charcoal-500 leading-relaxed">Deep cleansing that leaves your dog fresh, relaxed and cuddly, removing dirt, odour and stress.</p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Breed-specific Haircuts &amp; Styling</h3>
                    <p className="text-charcoal-500 leading-relaxed">Not just a one-style-fits-all trim, but tailored cuts that suit your dog&apos;s breed, coat and personality.</p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">De-shedding Treatment</h3>
                    <p className="text-charcoal-500 leading-relaxed">Reduces hair fall and keeps your home cleaner.</p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Nail Trimming &amp; Paw Care</h3>
                    <p className="text-charcoal-500 leading-relaxed">No pain, posture issues and scratches. Only short nails, soft paws and happy walks.</p>
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Ear Cleaning</h3>
                    <p className="text-charcoal-500 leading-relaxed">Care that prevents infections, itching and foul smells.</p>
                  </div>
                </div>
              </div>

              {/* Service 6 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Tick &amp; Flea Treatment</h3>
                    <p className="text-charcoal-500 leading-relaxed">Effective treatment that leaves your dog itch-free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <h2 className="text-title mb-8 text-charcoal">We promise:</h2>
              
              <ul className="space-y-4 mb-12">
                {[
                  'Expert service',
                  'Calm handling',
                  'Hygienic treatment',
                  'Honest advice',
                  "Your dog's safety and comfort"
                ].map((promise, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-charcoal-600">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold" />
                    {promise}
                  </li>
                ))}
              </ul>
              
              <div className="border-l-4 border-gold pl-6 py-4 bg-warm-50 rounded-r-lg">
                <p className="text-xl text-charcoal font-medium italic">
                  At Zamosa, grooming isn&apos;t just another service. It&apos;s commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-charcoal text-ivory relative overflow-hidden">
          {/* Background organic shape */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-gold opacity-5"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.7,-52.8C57.3,-42.6,66.4,-28.1,69.8,-12.1C73.2,3.9,70.9,21.4,62.3,35.1C53.7,48.8,38.8,58.7,22.5,64.1C6.2,69.5,-11.5,70.4,-27.2,65C-42.9,59.6,-56.6,47.9,-64.5,33C-72.4,18.1,-74.5,0,-70.4,-15.8C-66.3,-31.6,-56,-45.1,-43,-54.9C-30,-64.7,-15,-70.8,0.5,-71.4C16,-72,32.1,-63,44.7,-52.8Z"
              transform="translate(100 100)"
            />
          </svg>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <h2 className="text-title mb-4">
              Book now. <span className="text-gold">Save 30%</span>
            </h2>
            <p className="text-xl text-ivory/80 mb-8">
              Give your dog the best care it deserves. At a price you can easily afford.
            </p>
            <div className="mt-8">
              <p className="text-lg font-medium text-gold mb-2">Zamosa Pet Grooming</p>
              <p className="text-ivory/60 italic">For wag-worthy results</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
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
