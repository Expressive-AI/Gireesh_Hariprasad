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

        {/* Educational Longform Content Showcase */}
        <section className="bg-ivory">
          <div className="container-padding mx-auto max-w-prose">
            <article className="py-8 lg:py-12">
              {/* Project Header */}
              <div className="mb-6 pb-4 border-b border-warm-200">
                <p className="text-lg font-semibold text-charcoal">Merryba</p>
                <p className="text-sm text-gold font-medium">Educational Longform Content</p>
                <p className="text-xs text-charcoal-400 mt-1">Copywriter: Gireesh Hariprasad</p>
              </div>

              {/* Article Header */}
              <header className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal leading-tight mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  How to Grow Your Business With a Mobile App
                </h2>
                <p className="text-base text-charcoal-500 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                  by Merryba – Your Local App Experts
                </p>
              </header>

              {/* Introduction */}
              <div className="mb-6 space-y-2">
                <p className="text-base text-charcoal-600 leading-snug">
                  So many local businesses rely only on word of mouth and social media, but customers today live on their phones. If your business isn&apos;t right there with them, your competitors will be. A mobile app doesn&apos;t just make you look modern. It can genuinely transform how you attract, engage and keep your customers.
                </p>
                <p className="text-base text-charcoal font-semibold leading-snug">
                  Here&apos;s how an app can help you level up.
                </p>
              </div>

              {/* Compact Image Strip */}
              <div className="flex gap-2 mb-6">
                <div className="relative flex-1 aspect-[4/3] rounded overflow-hidden">
                  <Image src="/images/merryba/merryba-2.jpg" alt="Business growth" fill className="object-cover" />
                </div>
                <div className="relative flex-1 aspect-[4/3] rounded overflow-hidden">
                  <Image src="/images/merryba/merryba-3.jpg" alt="Mobile app" fill className="object-cover" />
                </div>
                <div className="relative flex-1 aspect-[4/3] rounded overflow-hidden">
                  <Image src="/images/merryba/merryba-4.jpg" alt="Customer engagement" fill className="object-cover" />
                </div>
              </div>

              {/* Numbered Benefits */}
              <div className="space-y-4 mb-6">
                {/* Benefit 1 */}
                <div className="border-b border-warm-100 pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">1.</span>Stay in Your Customer&apos;s Pocket
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    Your logo sits on their home screen. A tap away. That tiny space becomes a constant reminder of your business, making repeat purchases more natural.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="border-b border-warm-100 pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">2.</span>Build Loyalty With Zero Effort
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    Reward points, exclusive deals, birthday coupons… all automated inside your app. Happy customers return more often. Returning customers spend more. It&apos;s as simple as that.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="border-b border-warm-100 pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">3.</span>Make It Easy to Buy
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    No more &quot;I&apos;ll check later.&quot; Customers can order food, book appointments, or shop products instantly—anytime, anywhere. The faster they decide, the faster you earn.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="border-b border-warm-100 pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">4.</span>Get to Know What People Want
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    Your app gives you valuable data—what sells, when they buy, what they love. You make smarter business decisions without guesswork.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="border-b border-warm-100 pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">5.</span>Stand Out From the Crowd
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    Most local businesses do what everyone else does. Websites. Flyers. Facebook. But having your own app? That makes people take you seriously. It signals growth, trust, and innovation.
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="pb-3">
                  <h3 className="text-base font-bold text-charcoal mb-1">
                    <span className="text-gold mr-2">6.</span>Keep Every Customer Updated
                  </h3>
                  <p className="text-base text-charcoal-600 leading-snug">
                    Push notifications help you reach customers in real-time: New arrivals. Flash discounts. Seasonal updates. No algorithm blocking your message—your voice goes straight to their screen.
                  </p>
                </div>
              </div>

              {/* Why Merryba */}
              <div className="bg-warm-50 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  Why Merryba?
                </h3>
                <div className="space-y-2">
                  <p className="text-base text-charcoal-600 leading-snug">
                    We don&apos;t just build apps. We build long-term success tools for real businesses like yours. From design to launch, we make the process smooth, affordable and tailored to your goals.
                  </p>
                  <p className="text-base text-charcoal font-medium italic leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
                    You share your dream. We turn it into a beautiful app that works like magic.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="border-t border-warm-200 pt-5">
                <h3 className="text-lg font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  Let&apos;s Grow Together
                </h3>
                <p className="text-base text-charcoal-600 leading-snug mb-3">
                  If you&apos;ve been thinking about the &quot;next step&quot; for your business… this is it. Book a free consultation with Merryba today. Let&apos;s create an app that keeps your customers coming back again and again.
                </p>
                <p className="text-base text-charcoal font-semibold leading-snug">
                  Your business deserves to be in their hands — <span className="text-gold">literally</span>.
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
