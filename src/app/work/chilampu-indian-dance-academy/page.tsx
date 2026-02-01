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

const baseUrl = 'https://gireeshhariprasad.com';

export const metadata: Metadata = {
  title: 'Chilampu Indian Dance Academy | Copywriting Case Study',
  description: 'An enrollment email written to feel personal, cultural, and aspirational rather than promotional. Email marketing case study.',
  keywords: ['email copywriting', 'dance academy marketing', 'cultural marketing', 'enrollment email', 'Bharatanatyam'],
  alternates: {
    canonical: `${baseUrl}/work/chilampu-indian-dance-academy`,
  },
  openGraph: {
    title: 'Chilampu Indian Dance Academy | Copywriting Case Study',
    description: 'Let them dance. Let them shine. An enrollment email copywriting case study.',
    url: `${baseUrl}/work/chilampu-indian-dance-academy`,
    type: 'article',
    images: [
      {
        url: '/images/chilampu/chilampu-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Chilampu Indian Dance Academy email copywriting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chilampu Indian Dance Academy | Copywriting Case Study',
    description: 'Email copy that feels personal, cultural, and aspirational.',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Chilampu Indian Dance Academy - Enrollment Email',
  description: 'An enrollment email written to feel personal, cultural, and aspirational rather than promotional.',
  url: `${baseUrl}/work/chilampu-indian-dance-academy`,
  author: {
    '@type': 'Person',
    name: 'Gireesh Hariprasad',
    url: baseUrl,
    jobTitle: 'Copywriter',
  },
  datePublished: '2025-01-20',
  genre: 'Email Marketing',
  keywords: ['email copy', 'dance academy', 'enrollment', 'cultural marketing', 'Bharatanatyam'],
  about: {
    '@type': 'Organization',
    name: 'Chilampu Indian Dance Academy',
  },
};

export default function ChilampuPage() {
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

        {/* Email Copywriting Showcase - Dense, Editorial Layout */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            <article className="py-8 lg:py-12">
              
              {/* Project Header */}
              <div className="mb-6 pb-4 border-b border-warm-200">
                <p className="text-lg font-semibold text-charcoal">Chilampu Bharathanatyam School</p>
                <p className="text-sm text-gold font-medium">Email</p>
              </div>

              {/* Email Container */}
              <div className="bg-white rounded-lg shadow-sm border border-warm-200 p-6 lg:p-8">
                
                {/* Subject Line */}
                <div className="mb-4 pb-4 border-b border-warm-100">
                  <p className="text-sm text-charcoal-400 mb-1">Subject:</p>
                  <p className="text-base font-semibold text-charcoal">New Bharatanatyam Classes for Kids – Enrol Now for 2026!</p>
                </div>

                {/* Email Body */}
                <div className="space-y-4">
                  {/* Greeting */}
                  <p className="text-base text-charcoal-700">Dear Parents,</p>
                  
                  {/* Opening */}
                  <p className="text-base text-charcoal-600 leading-snug">
                    We&apos;re thrilled to share some exciting news with you!
                  </p>
                  
                  {/* Main Body */}
                  <p className="text-base text-charcoal-600 leading-snug">
                    Chilampu Indian Dance Academy is launching a brand-new Bharatanatyam class for children, starting 14th January 2026. It&apos;s the perfect opportunity for young learners to step into the enchanting world of Indian classical dance.
                  </p>
                  
                  <p className="text-base text-charcoal-600 leading-snug">
                    Bharatanatyam isn&apos;t just a dance form. It builds a strong foundation in rhythm, balance, coordination and discipline. Children absorb the music, the movements, and the stories behind every step. As they grow, their confidence grows too. And who knows? This early spark might just lead them to become skilled performers on stage… or even open doors to a future in cinema and acting.
                  </p>
                  
                  <p className="text-base text-charcoal-600 leading-snug">
                    At Chilampu, we focus on nurturing talent with love, patience and authentic training.
                  </p>

                  {/* Compact Image Strip */}
                  <div className="flex gap-3 my-4 overflow-hidden">
                    <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="/images/chilampu/Bharathanatyam-1.jpg"
                        alt="Bharatanatyam dancer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="/images/chilampu/Bharathanatyam-2.jpg"
                        alt="Young dancer learning"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm hidden sm:block">
                      <Image
                        src="/images/chilampu/Bharathanatyam-3.jpg"
                        alt="Traditional performance"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <p className="text-base text-charcoal-700 font-medium mb-2">What your child will gain:</p>
                    <ul className="text-base text-charcoal-600 leading-snug space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        Mastery of classical steps at the right age
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        Improved concentration and physical flexibility
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        A deep connection with Indian heritage and culture
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        The grace, expression and confidence of a true performer
                      </li>
                    </ul>
                  </div>

                  {/* Invitation */}
                  <p className="text-base text-charcoal-600 leading-snug">
                    We would love to have your little one join us on this beautiful journey of dance and expression.
                  </p>

                  {/* CTA */}
                  <p className="text-base text-charcoal-700 font-medium">
                    Seats are limited! Call or reply to this email to reserve your child&apos;s spot.
                  </p>

                  {/* Closing Tagline */}
                  <p className="text-base text-charcoal-600 italic leading-snug">
                    Let them dance. Let them shine. Let Chilampu be the beginning of their artistic story.
                  </p>

                  {/* Signature */}
                  <div className="pt-4">
                    <p className="text-base text-charcoal-600">Warm regards,</p>
                    <p className="text-base text-charcoal-700 font-medium">Chilampu Indian Dance Academy</p>
                  </div>
                </div>
              </div>

            </article>
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
