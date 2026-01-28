/**
 * Chilampu Indian Dance Academy - Case Study Page
 * 
 * An enrollment email for Bharatanatyam classes for children.
 * Design: Organic shapes, cultural warmth, elegant feel.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Chilampu Indian Dance Academy | Copywriting Case Study',
  description: 'An enrollment email written to feel personal, cultural, and aspirational rather than promotional.',
  openGraph: {
    title: 'Chilampu Indian Dance Academy',
    description: 'Let them dance. Let them shine.',
  },
};

export default function ChilampuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section with Asymmetrical Organic Shapes */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Organic Background Shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute -right-20 -top-10 w-[500px] h-[500px] text-warm-200 opacity-50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M41.3,-51.5C54.4,-44.3,66.6,-33.3,72.1,-19.3C77.6,-5.3,76.4,11.7,69.5,25.6C62.6,39.5,50,50.3,35.9,57.3C21.8,64.3,6.2,67.5,-9.3,66.9C-24.8,66.3,-40.2,61.9,-51.7,52.5C-63.2,43.1,-70.8,28.7,-73.4,13.3C-76,-2.1,-73.6,-18.5,-66,-31.6C-58.4,-44.7,-45.6,-54.5,-32.1,-61.5C-18.6,-68.5,-4.4,-72.7,8.3,-71.4C21,-70.1,28.2,-58.7,41.3,-51.5Z"
                transform="translate(100 100)"
              />
            </svg>
            
            <svg
              className="absolute -left-24 top-1/3 w-[400px] h-[400px] text-gold opacity-15"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M47.7,-57.2C59.5,-47.8,65.4,-31.4,67.8,-14.8C70.2,1.8,69.1,18.6,62.1,32.5C55.1,46.4,42.2,57.4,27.5,63.2C12.8,69,-3.7,69.6,-19.8,65.6C-35.9,61.6,-51.6,53,-61.1,40C-70.6,27,-73.9,9.6,-71.5,-6.8C-69.1,-23.2,-61,-38.6,-49,-50.1C-37,-61.6,-21.1,-69.2,-3.5,-70.4C14.1,-71.6,35.9,-66.6,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>

            <svg
              className="absolute right-1/4 bottom-0 w-[300px] h-[300px] text-warm-300 opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M44.5,-52.3C57.1,-43.9,66.3,-29.8,70.2,-14.1C74.1,1.6,72.7,18.9,65.1,32.9C57.5,46.9,43.7,57.6,28.2,63.4C12.7,69.2,-4.5,70.1,-20.5,65.6C-36.5,61.1,-51.3,51.2,-60.3,37.5C-69.3,23.8,-72.5,6.3,-69.9,-9.8C-67.3,-25.9,-58.9,-40.6,-46.6,-49C-34.3,-57.4,-18.1,-59.5,-1.4,-58C15.3,-56.5,31.9,-60.7,44.5,-52.3Z"
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
                <li className="text-charcoal-500">Email Campaign</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  ENROLLMENT EMAIL
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  Chilampu Indian Dance Academy
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-charcoal-600 italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Let them dance. Let them shine.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">Chilampu</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2026</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Type</span>
                    <span className="text-body font-medium text-charcoal">Email Copy</span>
                  </div>
                </div>
              </div>

              {/* Hero Image with Organic Shape */}
              <div className="relative">
                <div 
                  className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden"
                  style={{ borderRadius: '60% 40% 45% 55% / 50% 55% 45% 50%' }}
                >
                  <Image
                    src="/images/chilampu/Bharathanatyam-1.jpg"
                    alt="Bharatanatyam dancer in traditional costume"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-3 border-2 border-gold/20" style={{ borderRadius: '60% 40% 45% 55% / 50% 55% 45% 50%' }} />
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
            <span className="text-label tracking-widest text-gold mb-6 block">THE ESSENCE</span>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
              Bharatanatyam isn&apos;t just a dance form.<br />
              <span className="text-gold">It builds rhythm, balance, discipline — and confidence.</span>
            </p>
          </div>
        </section>

        {/* Loose Image Gallery */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative grid grid-cols-12 gap-4 lg:gap-6">
              {/* Image 1 - Large */}
              <div className="col-span-7 relative -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/chilampu/Bharathanatyam-2.jpg"
                    alt="Young dancer learning classical steps"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Image 2 - Medium, offset */}
              <div className="col-span-5 col-start-8 relative mt-16 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/chilampu/Bharathanatyam-3.jpg"
                    alt="Traditional Bharatanatyam performance"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-6 top-1/3 w-16 h-16 border-2 border-gold/30 rounded-full" />
              <div className="absolute right-1/4 bottom-8 w-20 h-20 border border-warm-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* The Promise Section */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE COPY</span>
              <h2 className="text-title mb-8 text-charcoal">What your child will gain</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Classical Foundation', desc: 'Mastery of authentic steps at the right age' },
                  { title: 'Mind & Body', desc: 'Improved concentration and physical flexibility' },
                  { title: 'Cultural Connection', desc: 'A deep bond with Indian heritage and tradition' },
                  { title: 'Stage Presence', desc: 'The grace, expression and confidence of a true performer' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-ivory rounded-xl">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gold" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                      <p className="text-charcoal-500 text-sm">{item.desc}</p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-gold opacity-5"
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
              Let Chilampu be the beginning of their artistic story.
            </p>
            <p className="text-lg text-gold italic">
              Seats are limited. Classes starting 14th January 2026.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/fos-advertisers-homepage" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← FOS Advertisers
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
                <Link href="/work/zamosa-pet-grooming" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    Zamosa Pet Grooming →
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
