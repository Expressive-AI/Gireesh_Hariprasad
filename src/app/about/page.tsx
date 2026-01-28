/**
 * About Page
 *
 * Personal story and approach to copywriting.
 * Verbatim copy as specified.
 * 
 * Highlighted Catchphrase:
 * - "A copywriter by training. A thinker by habit."
 */

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'A copywriter by training. A thinker by habit. Learn about Gireesh Hariprasad\'s approach to copywriting and his journey in advertising.',
  openGraph: {
    title: 'About Gireesh Hariprasad | Copywriter',
    description: 'A copywriter by training. A thinker by habit. Beautiful words are pointless unless they move people.',
    url: 'https://gireeshhariprasad.com/about',
  },
  twitter: {
    title: 'About Gireesh Hariprasad | Copywriter',
    description: 'A copywriter by training. A thinker by habit.',
  },
  alternates: {
    canonical: 'https://gireeshhariprasad.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-padding mx-auto max-w-content-lg pb-16 lg:pb-24">
          <span 
            className="mb-4 inline-block text-sm tracking-[0.12em] uppercase text-charcoal-500"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            About
          </span>
          
          {/* TYPOGRAPHIC HERO */}
          <h1 
            className="mb-8 max-w-[18ch]"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}
          >
            A copywriter by <span className="relative inline-block">
              training
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/50" />
            </span>.<br />
            A thinker by <span className="italic">habit</span>.
          </h1>
        </section>

        {/* Two-column Content */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
              {/* Photo Column */}
              <div className="lg:col-span-2">
                <div className="sticky top-32">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-warm-200">
                    {/* Placeholder for photo */}
                    <div className="absolute inset-0 bg-warm-100 flex items-center justify-center">
                      <img src="/images/gireesh.jpg" alt="Gireesh Hariprasad Portfolio" className="w-full h-full object-cover"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="lg:col-span-3">
                <div className="prose-premium space-y-8">
                  <p className="text-lead">
                    I studied English language and literature because I love how words behave. How they persuade, provoke, soften resistance, and spark desire.
                  </p>
                  
                  <p className="text-body-lg">
                    But I didn&apos;t stop at theory. I learned the art and craft of copywriting the way it&apos;s meant to be learned — by understanding concepts, structure, audience psychology, and the commercial purpose behind every brief.
                  </p>

                  {/* Highlighted statement */}
                  <div className="my-12 rounded-xl border border-gold/30 bg-gold/5 p-8">
                    <p 
                      className="text-subhead m-0"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 600 }}
                    >
                      I believe great copy is never written in isolation. It&apos;s built through <span className="relative inline-block">
                        collaboration
                        <span className="absolute -bottom-0.5 left-0 h-px w-full bg-gold/60" />
                      </span>.
                    </p>
                  </div>

                  <p className="text-body-lg">
                    I love working with designers, planners, strategists, and fellow idea people to create work that looks as good as it sounds — and works even better.
                  </p>

                  <p className="text-body-lg">
                    I&apos;m happiest in environments where I&apos;m challenged daily. Where briefs are sharp, feedback is honest, and standards are high. That&apos;s where the best writing happens.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-16">
                  <Link
                    href="/skills"
                    className="group inline-flex items-center gap-3 rounded-full border-2 border-charcoal/30 px-8 py-4 text-sm uppercase tracking-[0.12em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    See what I write
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}