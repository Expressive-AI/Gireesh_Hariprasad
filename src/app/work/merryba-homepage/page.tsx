import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Merryba - How to Grow Your Business With a Mobile App | Copywriting Case Study',
  description: 'An educational guide written to help local business owners understand how mobile apps drive real growth.',
  openGraph: {
    title: 'Merryba - Mobile App Growth Guide',
    description: 'Your Local App Experts. A copywriting case study.',
  },
};

export default function MerrybaHomepagePage() {
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
              className="absolute -right-32 -top-20 w-[550px] h-[550px] text-warm-200 opacity-50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M39.9,-51.3C52.7,-44.3,64.8,-33.9,70.3,-20.5C75.8,-7.1,74.6,9.3,68.4,23.3C62.1,37.3,50.8,48.9,37.6,56.3C24.4,63.7,9.3,66.9,-5.5,66.1C-20.3,65.3,-34.8,60.5,-46.5,51.7C-58.2,42.9,-67.1,30.1,-70.9,15.5C-74.7,0.9,-73.4,-15.5,-66.4,-28.3C-59.4,-41.1,-46.7,-50.3,-33.5,-57.1C-20.3,-63.9,-6.6,-68.3,5.8,-67.5C18.2,-66.7,27.1,-58.3,39.9,-51.3Z"
                transform="translate(100 100)"
              />
            </svg>
            
            {/* Medium organic blob - left */}
            <svg
              className="absolute -left-24 top-1/2 w-[400px] h-[400px] text-gold opacity-15"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M45.3,-54.2C58.3,-46.5,68.2,-32.5,72.3,-16.8C76.4,-1.1,74.7,16.3,66.7,30.1C58.7,43.9,44.4,54.1,28.9,60.1C13.4,66.1,-3.3,67.9,-19.3,64.2C-35.3,60.5,-50.6,51.3,-60.1,38C-69.6,24.7,-73.3,7.3,-70.2,-8.5C-67.1,-24.3,-57.2,-38.5,-44.3,-46.3C-31.4,-54.1,-15.7,-55.5,0.3,-55.9C16.3,-56.3,32.3,-61.9,45.3,-54.2Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Small organic blob - bottom center */}
            <svg
              className="absolute left-1/3 bottom-0 w-[300px] h-[300px] text-warm-300 opacity-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M42.8,-52.4C55.9,-45.1,67,-32.4,71.8,-17.5C76.6,-2.6,75.1,14.5,68,28.5C60.9,42.5,48.2,53.4,33.9,59.8C19.6,66.2,3.7,68.1,-11.8,65.6C-27.3,63.1,-42.4,56.2,-53.5,45C-64.6,33.8,-71.7,18.3,-73.1,2.1C-74.5,-14.1,-70.2,-30.9,-60.1,-43.5C-50,-56.1,-34.1,-64.5,-18.4,-67.1C-2.7,-69.7,12.8,-66.5,26.9,-60.5C41,-54.5,53.7,-45.7,42.8,-52.4Z"
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
                <li className="text-charcoal-500">Long-form Content</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div>
                <span className="text-label tracking-widest text-gold mb-4 block">
                  EDUCATIONAL GUIDE
                </span>
                <h1 className="text-display mb-6 text-charcoal">
                  How to Grow Your Business With a Mobile App
                </h1>
                <p className="text-xl lg:text-2xl font-light text-charcoal-600 italic mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  by Merryba – Your Local App Experts
                </p>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-500">
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Client</span>
                    <span className="text-body font-medium text-charcoal">Merryba</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Year</span>
                    <span className="text-body font-medium text-charcoal">2025</span>
                  </div>
                  <div className="h-10 w-px bg-warm-200" />
                  <div>
                    <span className="text-label block text-charcoal-400 mb-1">Type</span>
                    <span className="text-body font-medium text-charcoal">Long-form Content</span>
                  </div>
                </div>
              </div>

              {/* Hero Image with Organic Shape */}
              <div className="relative">
                <div className="relative">
                  <div 
                    className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden"
                    style={{ 
                      borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%'
                    }}
                  >
                    <Image
                      src="/images/merryba/merryba-1.jpg"
                      alt="Mobile app development showcasing business growth"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-3 border-2 border-gold/20" style={{ borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insight Banner */}
        <section className="relative py-16 lg:py-20 bg-charcoal text-ivory overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <span className="text-label tracking-widest text-gold mb-6 block">THE INSIGHT</span>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
              Customers today live on their phones.<br />
              <span className="text-gold">If your business isn&apos;t there, your competitors will be.</span>
            </p>
          </div>
        </section>

        {/* Loose Image Gallery - Storytelling Layout */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative">
              {/* First row - asymmetrical */}
              <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-6">
                {/* Large image - left */}
                <div className="col-span-8 relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/images/merryba/merryba-2.jpg"
                      alt="Business owner using mobile app"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Small image - right, offset down */}
                <div className="col-span-4 relative mt-12 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="/images/merryba/merryba-3.jpg"
                      alt="Mobile app interface design"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Second row - asymmetrical opposite */}
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                {/* Small image - left */}
                <div className="col-span-5 col-start-2 relative rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                    <Image
                      src="/images/merryba/merryba-4.jpg"
                      alt="Customer engagement through mobile app"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Medium image - right */}
                <div className="col-span-5 relative -mt-8 -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/merryba/merryba-1.jpg"
                      alt="Local business growth with technology"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/4 w-20 h-20 border-2 border-gold/20 rounded-full" />
              <div className="absolute left-1/4 -bottom-8 w-16 h-16 border border-warm-300 rounded-full" />
            </div>
          </div>
        </section>

        {/* Introduction - The Brief */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE BRIEF</span>
              <p className="text-lead text-charcoal-600 mb-8">
                An educational guide for Merryba, a mobile app development company focused on helping local businesses grow. 
                The goal was to educate rather than sell — showing business owners the real value of having their own app.
              </p>
              <p className="text-body-lg text-charcoal-500 leading-relaxed">
                Many local businesses still rely heavily on word of mouth and social media. 
                This guide was written to bridge the gap between where they are and where they could be — 
                <em>right in their customer&apos;s pocket</em>.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-label tracking-widest text-gold mb-4 block">THE COPY</span>
              <h2 className="text-title text-charcoal">Here&apos;s how an app can help you level up.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Benefit 1 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Stay in Their Pocket</h3>
                <p className="text-charcoal-500 leading-relaxed">Your logo sits on their home screen. A tap away. That tiny space becomes a constant reminder of your business.</p>
              </div>

              {/* Benefit 2 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Build Loyalty With Zero Effort</h3>
                <p className="text-charcoal-500 leading-relaxed">Reward points, exclusive deals, birthday coupons… all automated. Happy customers return. Returning customers spend more.</p>
              </div>

              {/* Benefit 3 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Make It Easy to Buy</h3>
                <p className="text-charcoal-500 leading-relaxed">No more &quot;I&apos;ll check later.&quot; Customers can order, book, or shop instantly—anytime, anywhere.</p>
              </div>

              {/* Benefit 4 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Know What People Want</h3>
                <p className="text-charcoal-500 leading-relaxed">Valuable data—what sells, when they buy, what they love. Smarter business decisions without guesswork.</p>
              </div>

              {/* Benefit 5 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Stand Out From the Crowd</h3>
                <p className="text-charcoal-500 leading-relaxed">Most businesses do what everyone else does. Having your own app? That signals growth, trust, and innovation.</p>
              </div>

              {/* Benefit 6 */}
              <div className="group bg-warm-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Keep Customers Updated</h3>
                <p className="text-charcoal-500 leading-relaxed">Push notifications reach customers in real-time. No algorithm blocking your message—straight to their screen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Merryba Section */}
        <section className="py-16 lg:py-24 bg-warm-50">
          <div className="container-padding mx-auto max-w-content">
            <div className="mx-auto max-w-prose-wide">
              <span className="text-label tracking-widest text-gold mb-4 block">THE POSITIONING</span>
              <h2 className="text-title mb-6 text-charcoal">Why Merryba?</h2>
              
              <div className="space-y-6 text-charcoal-600 leading-relaxed text-lg">
                <p>
                  We don&apos;t just build apps. We build long-term success tools for real businesses like yours.
                </p>
                <p>
                  From design to launch, we make the process smooth, affordable and tailored to your goals.
                </p>
                <p className="font-medium text-charcoal italic">
                  You share your dream. We turn it into a beautiful app that works like magic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="py-8 lg:py-12 bg-ivory">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[21/9]">
                <Image
                  src="/images/merryba/merryba-2.jpg"
                  alt="Merryba - Building apps that grow businesses"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-2xl lg:text-3xl font-light text-ivory max-w-2xl">
                    Your business deserves to be in their hands — <span className="text-gold">literally</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-charcoal text-ivory relative overflow-hidden">
          {/* Background organic shape */}
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-gold opacity-5"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M45.3,-54.2C58.3,-46.5,68.2,-32.5,72.3,-16.8C76.4,-1.1,74.7,16.3,66.7,30.1C58.7,43.9,44.4,54.1,28.9,60.1C13.4,66.1,-3.3,67.9,-19.3,64.2C-35.3,60.5,-50.6,51.3,-60.1,38C-69.6,24.7,-73.3,7.3,-70.2,-8.5C-67.1,-24.3,-57.2,-38.5,-44.3,-46.3C-31.4,-54.1,-15.7,-55.5,0.3,-55.9C16.3,-56.3,32.3,-61.9,45.3,-54.2Z"
              transform="translate(100 100)"
            />
          </svg>
          
          <div className="container-padding relative z-10 mx-auto max-w-content text-center">
            <span className="text-label tracking-widest text-gold mb-6 block">LET&apos;S GROW TOGETHER</span>
            <h2 className="text-title mb-6">
              If you&apos;ve been thinking about the &quot;next step&quot; for your business…
            </h2>
            <p className="text-2xl text-gold font-light mb-8">
              This is it.
            </p>
            <p className="text-lg text-ivory/70 max-w-xl mx-auto">
              Let&apos;s create an app that keeps your customers coming back again and again.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Link href="/work/philips-powerpro-vacuum-cleaner" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    ← Philips PowerPro
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
                <Link href="/work/fos-advertisers-homepage" className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    FOS Advertisers →
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
