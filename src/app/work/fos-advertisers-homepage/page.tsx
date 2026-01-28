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

        {/* Key Message Banner */}
        <section className="relative py-16 lg:py-20 bg-charcoal text-ivory overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <span className="text-label tracking-widest text-gold mb-6 block">THE PHILOSOPHY</span>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
              We are not loud for the sake of noise.<br />
              <span className="text-gold">We create communication that connects, converts, and lasts.</span>
            </p>
          </div>
        </section>

        {/* Loose Image Gallery */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative grid grid-cols-12 gap-4 lg:gap-6">
              {/* Image 1 */}
              <div className="col-span-6 relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/fos-advert/fos-2.jpg"
                    alt="FOS Advertisers team collaboration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="col-span-6 relative mt-16 rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/fos-advert/fos-3.jpg"
                    alt="Creative advertising work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -right-6 top-1/3 w-20 h-20 border-2 border-gold/20 rounded-full" />
              <div className="absolute left-1/4 -bottom-4 w-14 h-14 border border-warm-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE COPY</span>
              <h2 className="text-title mb-8 text-charcoal">One Agency. Every Medium.</h2>
              
              <div className="space-y-6">
                {[
                  { title: 'Digital Advertising & Social Media', desc: 'Performance-driven campaigns that cut through clutter and deliver measurable growth.' },
                  { title: 'Print, Outdoor & Electronic Media', desc: 'Strategic visibility across newspapers, magazines, hoardings, radio, and television.' },
                  { title: 'Branding & Creative Communication', desc: 'Identities that feel sharp, relevant, and unmistakably yours.' },
                  { title: 'In-House Production House', desc: 'High-quality TV commercials from concept to final cut. Over 30 national brands.' },
                ].map((service, index) => (
                  <div key={index} className="p-6 bg-ivory rounded-xl border-l-4 border-gold">
                    <h3 className="font-semibold text-charcoal mb-2">{service.title}</h3>
                    <p className="text-charcoal-500">{service.desc}</p>
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
              d="M44.7,-52.8C57.3,-42.6,66.4,-28.1,69.8,-12.1C73.2,3.9,70.9,21.4,62.3,35.1C53.7,48.8,38.8,58.7,22.5,64.1C6.2,69.5,-11.5,70.4,-27.2,65C-42.9,59.6,-56.6,47.9,-64.5,33C-72.4,18.1,-74.5,0,-70.4,-15.8C-66.3,-31.6,-56,-45.1,-43,-54.9C-30,-64.7,-15,-70.8,0.5,-71.4C16,-72,32.1,-63,44.7,-52.8Z"
              transform="translate(100 100)"
            />
          </svg>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <p className="text-xl lg:text-2xl font-light mb-4 text-ivory/80">
              Nearly two decades in the industry have taught us one thing:
            </p>
            <p className="text-2xl lg:text-3xl text-gold font-light">
              Trends change, but good ideas endure.
            </p>
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
