/**
 * Homepage
 *
 * Premium copywriting portfolio homepage.
 * Typography-focused, calm, confident design.
 */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HeroSection, SelectedWorkSection } from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Selected Work Section */}
      <SelectedWorkSection />

      {/* Brief About/Intro Section */}
      <section className="about-section section-padding-lg relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full border border-gold/10 opacity-50" />
          <div className="absolute -right-16 bottom-1/4 h-48 w-48 rounded-full border border-warm-200/30" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          <div className="mx-auto max-w-prose-wide">
            <span className="text-label mb-6 inline-block tracking-widest uppercase text-charcoal-500">
              About
            </span>
            <h2 className="text-title mb-8">
              The <span className="highlight-block">craft behind the copy</span>
            </h2>
            <div className="prose-premium">
              <p>
                With over a decade in editorial and brand copywriting, I&apos;ve
                learned that the best work comes from genuine curiosity and deep
                collaboration. Every brand has a story worth telling—my job is
                to find it, refine it, and share it in a way that moves people
                to action.
              </p>
              <p>
                I work with ambitious brands who understand that words aren&apos;t
                just content—they&apos;re the foundation of meaningful connections
                with their audience.
              </p>
            </div>
            <a
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 text-body font-medium text-charcoal transition-all hover:bg-charcoal hover:text-ivory"
            >
              Learn more about my approach
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-section section-padding relative overflow-hidden border-t border-warm-200">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-warm-300/30 to-transparent" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg text-center">
          <span className="text-label mb-6 inline-block tracking-widest uppercase text-charcoal-500">
            Get in Touch
          </span>
          <h2 className="text-display mx-auto mb-6 max-w-[18ch]">
            Let&apos;s create something{' '}
            <span className="highlight-block-italic">remarkable</span><span className="text-gold">.</span>
          </h2>
          <p className="text-lead mx-auto mb-10 max-w-prose font-medium text-charcoal">
            Ready to elevate your brand&apos;s voice? I&apos;d love to hear about your
            project.
          </p>
          <a
            href="mailto:hello@gireeshhariprasad.com"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-body-lg font-medium text-ivory transition-all duration-300 hover:bg-gold hover:shadow-lg"
          >
            hello@gireeshhariprasad.com
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
