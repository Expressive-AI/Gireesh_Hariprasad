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

const baseUrl = 'https://gireeshhariprasad.com';

export const metadata: Metadata = {
  title: 'Philips PowerPro Vacuum Cleaner | Copywriting Case Study',
  description: 'A long-scroll product page written to turn a functional appliance into a lifestyle upgrade. 10-page sales copy showcase.',
  keywords: ['product page copywriting', 'long-form sales copy', 'appliance marketing', 'Philips copywriting', 'e-commerce copy'],
  alternates: {
    canonical: `${baseUrl}/work/philips-powerpro-vacuum-cleaner`,
  },
  openGraph: {
    title: 'Philips PowerPro Vacuum Cleaner | Copywriting Case Study',
    description: 'Dust-free rooms that give you a healthier life. A 10-page long-scroll product copywriting case study.',
    url: `${baseUrl}/work/philips-powerpro-vacuum-cleaner`,
    type: 'article',
    images: [
      {
        url: '/images/philips/philips-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Philips PowerPro Vacuum Cleaner product page copywriting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philips PowerPro Vacuum Cleaner | Copywriting Case Study',
    description: 'Long-form product copy that transforms appliances into lifestyle upgrades.',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Philips PowerPro Vacuum Cleaner - Product Page Copy',
  description: 'A 10-page long-scroll product page written to turn a functional appliance into a lifestyle upgrade.',
  url: `${baseUrl}/work/philips-powerpro-vacuum-cleaner`,
  author: {
    '@type': 'Person',
    name: 'Gireesh Hariprasad',
    url: baseUrl,
    jobTitle: 'Copywriter',
  },
  datePublished: '2025-02-01',
  genre: 'Product Copy',
  keywords: ['product page', 'long-form copy', 'sales copy', 'e-commerce', 'Philips'],
  about: {
    '@type': 'Product',
    name: 'Philips PowerPro Bagless 1900W Vacuum Cleaner',
    brand: {
      '@type': 'Brand',
      name: 'Philips',
    },
  },
};

export default function PhilipsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        {/* 10-Page Longform Sales Website - Dense, Editorial Copy */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            <article className="py-8 lg:py-12">
              
              {/* Page 1: Hero Copy */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal leading-tight mb-2">
                  Dust-free Rooms That Give You A Healthier Life
                </h2>
                <p className="text-base text-charcoal-600 mb-4">
                  Grab the Philips PowerPro Bagless 1900W Vacuum Cleaner – FC9571/01
                </p>
                <p className="text-xl lg:text-2xl font-semibold text-gold mb-4">
                  Turn Every Space into A Fresh, Happy Place
                </p>
                <p className="text-base text-charcoal-600 leading-snug mb-2">
                  Imagine entering a room that feels clean and most welcoming. Not a speck of dust and dirt. No sneezing either.
                </p>
                <p className="text-base text-charcoal-600 leading-snug">
                  Enjoy this reality with Philips PowerPro Bagless Vacuum Cleaner. It sucks even the most deep-set dust and dirt in one easy move, leaving your room truly tidy. An amazing way to a better life.
                </p>
              </div>

              {/* Page 2: Power */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-3">
                  1900W of Powerful Cleaning Strength
                </h2>
                
                {/* Power Section Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/image-8.jpg"
                      alt="Philips PowerPro 1900W motor delivering powerful suction"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/image-7.webp"
                      alt="Deep cleaning capability on carpets and floors"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-lg text-gold font-medium mb-3">No Matter Where</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  What beats inside this machine is a 1900W high-performance motor. It easily sucks dust from corners, carpets and cushions.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Built to perform deep cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Quick performance, saving time and effort
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Leaves no dust behind
                  </li>
                </ul>
                <p className="text-base text-charcoal-700 font-medium italic">
                  A Powerful Vacuum That Gives You Greater Cleaning Confidence
                </p>
              </div>

              {/* Page 3: Control */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  Adjust The Control
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Do The Cleaning Your Own Way</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  A vacuum with easy-to-adjust suction power that works according to different cleaning tasks.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Low power for delicate fabrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    High power for stubborn dirt
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Absolute control at your fingertips
                  </li>
                </ul>
                
                {/* Control Section Image - Compact */}
                <div className="max-w-xs my-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/image-2.webp"
                      alt="Easy-to-adjust suction control for different cleaning tasks"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-base text-charcoal-700 font-medium italic">
                  It&apos;s Smart Cleaning with Smart Control
                </p>
              </div>

              {/* Compact Image Strip */}
              <div className="flex gap-3 my-8 overflow-hidden">
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/philips/philips-2.jpg"
                    alt="Philips PowerPro Vacuum"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/philips/image-6.webp"
                    alt="Clean living room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/images/philips/image-1.webp"
                    alt="Effortless cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Page 4: Dust-free */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  Live In A Dust-free World
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Breathe Easy with No Dust Allergy</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Dust drives you crazy sometimes. Philips PowerPro removes dust effectively and helps you enjoy cleaner air indoors.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Experience healthier living conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Work in cleaner spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Feel relaxed and refreshed
                  </li>
                </ul>
                
                {/* Dust-free Section Image - Compact */}
                <div className="max-w-xs my-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/philips-2.jpg"
                      alt="Clean, allergen-free living environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-base text-charcoal-700 font-medium italic">
                  Enjoy Better Days with Clean Air and Clear Mind
                </p>
              </div>

              {/* Page 5: Filter */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  No Complicated Replacements
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Only Long-Lasting Freshness</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Philips PowerPro&apos;s washable filter makes maintenance simple and performance better.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Wash and reuse
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Cost-effective and eco-friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Lasting consistency
                  </li>
                </ul>
                <p className="text-base text-charcoal-700 font-medium italic">
                  Easy care and simple to use
                </p>
              </div>

              {/* Page 6: Wheels */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  Zero Strain Movement
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Rubber Wheels for Smooth Motion</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Move freely from room to room. The rubber wheels ensure easy glide and leave no marks on the floors.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Effortless control
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    No scratches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Easy turning
                  </li>
                </ul>
                
                {/* Wheels Section Image - Compact */}
                <div className="max-w-xs my-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/image-5.webp"
                      alt="Effortless mobility with smooth rubber wheels"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-base text-charcoal-700 font-medium italic">
                  You Feel No Strain. Cleaning Your Room Is A Breeze with Philips PowerPro
                </p>
              </div>

              {/* Page 7: Lightweight */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  Lightweight for Daily Use
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Heavy on Results</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Philips PowerPro is designed to perform with easy-to-manage weight. You can easily lift, pull and store it.
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Perfect for everyday cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Quick setup and use
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    No back strain
                  </li>
                </ul>
                
                {/* Lightweight Section Image - Compact */}
                <div className="max-w-xs my-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/philips/philips-3.jpg"
                      alt="Lightweight design for effortless daily cleaning"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-base text-charcoal-700 font-medium italic">
                  It&apos;s Simple to Use that Your Daily Life Feels Lighter
                </p>
              </div>

              {/* Page 8: Warranty */}
              <div className="mb-8 pb-8 border-b border-warm-200">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  2-Year Warranty
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Peace of Mind, Guaranteed</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Philips stands by its quality. This vacuum cleaner comes with a 2-year warranty that protects your purchase and assures reliability.
                </p>
                <p className="text-base text-charcoal-700 font-medium italic">
                  As Always, Philips Exceeds Your Expectations
                </p>
              </div>

              {/* Page 9: Offers */}
              <div className="mb-8 pb-8 border-b border-warm-200 bg-warm-50 -mx-4 px-4 py-6 rounded-lg">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-2">
                  Irresistible Offers and Big Savings
                </h2>
                <p className="text-lg text-gold font-medium mb-3">Pay In Easy Installments</p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  Limited time offers available now:
                </p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Flat 30% OFF on every order
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Extra 5% OFF when you buy 2 or more items
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Easy EMI options – 2/4/6 months
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Pay just Rs. 1490 per month
                  </li>
                </ul>
              </div>

              {/* Page 10: Close */}
              <div className="text-center">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal leading-tight mb-1">
                  More Than A Cleaning Tool
                </h2>
                <p className="text-lg text-gold font-medium mb-4">It&apos;s Effortless Clean Living</p>
                <p className="text-base text-charcoal-600 leading-snug mb-4">
                  The Philips PowerPro Bagless 1900W Vacuum Cleaner is a lifestyle upgrade. It simply transforms your space and accords a better and cleaner atmosphere for healthy living.
                </p>
                <p className="text-base text-charcoal-600 leading-snug mb-3">Enjoy:</p>
                <ul className="text-base text-charcoal-600 leading-snug space-y-1 mb-4 inline-block text-left">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Powerful cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Allergy relief
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Elegant design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    Simple operation
                  </li>
                </ul>
                <p className="text-base text-charcoal-700 font-medium mb-1">
                  Bring home Philips PowerPro. Make your life more beautiful.
                </p>
                <p className="text-base text-charcoal-600 mb-6">
                  Order it now for a dust-free space.
                </p>
                
                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-block bg-gold text-charcoal font-bold text-lg px-10 py-4 rounded-full hover:bg-gold/90 transition-colors shadow-lg"
                >
                  CLICK HERE
                </a>
              </div>

            </article>
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
