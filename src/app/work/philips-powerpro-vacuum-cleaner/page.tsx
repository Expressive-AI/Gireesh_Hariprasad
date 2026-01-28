/**
 * Philips PowerPro Vacuum Cleaner - Case Study Page
 * 
 * A long-scroll product page for Philips vacuum cleaner.
 * Design: Clean, modern, lifestyle-focused.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Philips PowerPro Vacuum Cleaner | Copywriting Case Study',
  description: 'A long-scroll product page written to turn a functional appliance into a lifestyle upgrade.',
  openGraph: {
    title: 'Philips PowerPro Bagless 1900W',
    description: 'Dust-free rooms that give you a healthier life.',
  },
};

export default function PhilipsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Organic Background Shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute -right-32 top-0 w-[600px] h-[600px] text-warm-200 opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M39.5,-48.3C50.9,-39.6,59.6,-27.3,63.7,-13.2C67.8,0.9,67.3,16.8,61.1,30.1C54.9,43.4,43,54.1,29.1,59.6C15.2,65.1,-0.7,65.4,-16.4,61.5C-32.1,57.6,-47.6,49.5,-57.3,37C-67,24.5,-70.9,7.6,-68.4,-8.2C-65.9,-24,-57,-38.7,-44.7,-47.2C-32.4,-55.7,-16.2,-58,-0.6,-57.3C15,-56.6,28.1,-57,39.5,-48.3Z"
                transform="translate(100 100)"
              />
            </svg>
            
            <svg
              className="absolute -left-20 bottom-0 w-[450px] h-[450px] text-gold opacity-10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M45.7,-54.4C58.5,-46.1,67.7,-31.6,71.7,-15.6C75.7,0.4,74.5,17.9,67.1,32.3C59.7,46.7,46.1,58,30.8,63.7C15.5,69.4,-1.5,69.5,-17.8,65.1C-34.1,60.7,-49.7,51.8,-59.6,38.6C-69.5,25.4,-73.7,7.9,-71.4,-8.4C-69.1,-24.7,-60.3,-39.8,-47.8,-48.2C-35.3,-56.6,-19.1,-58.3,-1.9,-56.3C15.3,-54.3,32.9,-62.7,45.7,-54.4Z"
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
                <li className="text-charcoal-500">Website Copy</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  LONG-SCROLL PRODUCT PAGE
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  Philips PowerPro Bagless Vacuum
                </h1>
                <p className="text-xl lg:text-2xl font-light text-charcoal-600 italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Dust-free rooms that give you a healthier life.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">Philips</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2025</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Type</span>
                    <span className="text-body font-medium text-charcoal">Website Copy</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div 
                  className="relative aspect-square w-full max-w-md mx-auto overflow-hidden"
                  style={{ borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%' }}
                >
                  <Image
                    src="/images/philips/philips-1.webp"
                    alt="Philips PowerPro Vacuum Cleaner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 border-2 border-gold/20" style={{ borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Key Message Banner */}
        <section className="relative py-16 lg:py-20 bg-charcoal text-ivory overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <span className="text-label tracking-widest text-gold mb-6 block">THE PROMISE</span>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
              Turn every space into a fresh, happy place.<br />
              <span className="text-gold">Not a speck of dust. No sneezing either.</span>
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative grid grid-cols-12 gap-4 lg:gap-6">
              {/* Image 1 */}
              <div className="col-span-6 relative rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/philips/philips-2.jpg"
                    alt="Clean modern living room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="col-span-6 relative mt-12 -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/philips/philips-3.jpg"
                    alt="Effortless cleaning experience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -right-4 top-1/4 w-16 h-16 border-2 border-gold/20 rounded-full" />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE COPY</span>
              <h2 className="text-title mb-8 text-charcoal">Features, translated to feelings</h2>
              
              <div className="space-y-6">
                {[
                  { power: '1900W Motor', benefit: 'Deep cleaning confidence from corners to carpets' },
                  { power: 'Adjustable Suction', benefit: 'Smart control for delicate fabrics and stubborn dirt' },
                  { power: 'Washable Filter', benefit: 'Cost-effective, eco-friendly, lasting freshness' },
                  { power: 'Rubber Wheels', benefit: 'Zero strain movement, no floor scratches' },
                  { power: '2-Year Warranty', benefit: 'Peace of mind, guaranteed' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-ivory rounded-xl border-l-4 border-gold">
                    <div>
                      <span className="text-sm font-medium text-gold block mb-1">{item.power}</span>
                      <p className="text-charcoal-600">{item.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-charcoal text-ivory relative overflow-hidden">
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-gold opacity-5"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M39.5,-48.3C50.9,-39.6,59.6,-27.3,63.7,-13.2C67.8,0.9,67.3,16.8,61.1,30.1C54.9,43.4,43,54.1,29.1,59.6C15.2,65.1,-0.7,65.4,-16.4,61.5C-32.1,57.6,-47.6,49.5,-57.3,37C-67,24.5,-70.9,7.6,-68.4,-8.2C-65.9,-24,-57,-38.7,-44.7,-47.2C-32.4,-55.7,-16.2,-58,-0.6,-57.3C15,-56.6,28.1,-57,39.5,-48.3Z"
              transform="translate(100 100)"
            />
          </svg>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <p className="text-xl lg:text-2xl font-light mb-4">
              More than a cleaning tool.
            </p>
            <p className="text-2xl lg:text-3xl text-gold font-light">
              It&apos;s effortless clean living.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/antler-play-gallery-cafe" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← Antler Play Gallery Café
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
                <Link href="/work/merryba-homepage" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    Merryba →
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
