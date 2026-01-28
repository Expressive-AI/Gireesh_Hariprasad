/**
 * Skills Page
 *
 * What I write. And where it works.
 * Exact verbatim copy as specified.
 * 
 * Highlighted Catchphrases:
 * - "What I write. And where it works."
 * - "to drive people towards brands, products, and services — and keep them there."
 */

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'What I write. And where it works. Copywriting expertise in press ads, digital campaigns, websites, emails, and more.',
  openGraph: {
    title: 'Skills | Gireesh Hariprasad Copywriter',
    description: 'What I write. And where it works. Press ads, digital campaigns, websites, emails, brochures, and direct response copy.',
    url: 'https://gireeshhariprasad.com/skills',
  },
  twitter: {
    title: 'Skills | Gireesh Hariprasad Copywriter',
    description: 'What I write. And where it works.',
  },
  alternates: {
    canonical: 'https://gireeshhariprasad.com/skills',
  },
};

const copywritingExpertise = [
  'Press advertisements',
  'Outdoor and OOH copy',
  'Digital and social media campaigns',
  'Website home pages and landing pages',
  'Web guides and explainer content',
  'Email campaigns and newsletters',
  'Flyers, brochures, and sales collateral',
  'Direct response copy',
];

export default function SkillsPage() {
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
            Skills
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
            What I <span className="relative inline-block">
              write
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/50" />
            </span>.<br />
            And where it <span className="italic">works</span>.
          </h1>
          
          <p className="text-lead max-w-prose">
            I&apos;m comfortable writing across platforms, formats, and attention spans. Each medium demands its own discipline — and I respect that.
          </p>
        </section>

        {/* Expertise List Section */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left Column - List */}
              <div>
                <span 
                  className="mb-6 inline-block text-sm tracking-[0.12em] uppercase text-charcoal-500"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Copywriting Expertise Includes
                </span>
                
                <ul className="space-y-4 mt-8">
                  {copywritingExpertise.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span className="text-body-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Approach */}
              <div className="prose-premium">
                <p className="text-lead mb-8">
                  Whether the objective is awareness, engagement, or conversion, I focus on benefits over noise.
                </p>
                
                {/* Highlighted statement */}
                <div 
                  className="my-10 text-heading"
                  style={{ 
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontWeight: 600,
                    lineHeight: 1.3
                  }}
                >
                  More <span className="relative inline-block">
                    clarity
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-gold/60" />
                  </span>. More credibility. More <span className="italic">pull</span>.
                </div>

                <p className="text-body-lg">
                  At the end of the day, my writing exists for one reason:
                </p>
                
                {/* TYPOGRAPHIC HERO - Final statement */}
                <p 
                  className="mt-8"
                  style={{ 
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: '-0.01em'
                  }}
                >
                  to drive people towards brands, products, and services — and <span className="relative inline-block">
                    keep them there
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-gold/60" />
                  </span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-warm-200 bg-warm-50 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg text-center">
            <p className="text-lead mb-8">
              Want to see this in action?
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-charcoal bg-charcoal px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:tracking-[0.15em] hover:shadow-lg"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                View my work
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-charcoal/30 px-8 py-4 text-sm uppercase tracking-[0.12em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
