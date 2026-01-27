/**
 * Contact Page
 *
 * Simple, elegant contact page with email and social links.
 */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-padding mx-auto max-w-content-lg pb-16 lg:pb-24">
          <span className="text-label mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-gold">
            Get in Touch
          </span>
          <h1 className="text-display mb-6 max-w-[16ch]">
            Let&apos;s create something{' '}
            <em className="font-normal italic text-gold">remarkable</em>.
          </h1>
          <p className="text-lead max-w-prose text-charcoal-500">
            Whether you have a project in mind, a question about my work, or just want 
            to say hello—I&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact Content */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left Column - Contact Info */}
              <div>
                <h2 className="text-subhead mb-8">Contact Information</h2>
                
                {/* Email */}
                <div className="mb-8">
                  <span className="text-label mb-2 block text-charcoal-400">Email</span>
                  <a
                    href="mailto:hello@gireeshhariprasad.com"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    hello@gireeshhariprasad.com
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <span className="text-label mb-2 block text-charcoal-400">Phone</span>
                  <a
                    href="tel:+919744525239"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    +91 9744525239
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <span className="text-label mb-2 block text-charcoal-400">Based in</span>
                  <p className="text-body-lg text-charcoal">India</p>
                </div>

                {/* Availability */}
                <div className="mb-12 rounded-lg border border-gold/30 bg-gold/5 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-meta font-medium text-emerald-700">Available for projects</span>
                  </div>
                  <p className="text-body-sm text-charcoal-500">
                    Currently accepting new copywriting and brand storytelling projects.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <span className="text-label mb-4 block text-charcoal-400">Connect</span>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-4 py-2 text-body-sm font-medium text-charcoal transition-all hover:border-gold hover:bg-gold/5 hover:text-gold"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-4 py-2 text-body-sm font-medium text-charcoal transition-all hover:border-gold hover:bg-gold/5 hover:text-gold"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter/X
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Message */}
              <div className="rounded-2xl bg-warm-50 p-8 lg:p-10">
                <h2 className="text-subhead mb-4">Send a message</h2>
                <p className="mb-8 text-body text-charcoal-500">
                  Prefer email? No problem. Click below to open your email client with my 
                  address pre-filled.
                </p>

                <a
                  href="mailto:hello@gireeshhariprasad.com?subject=Project%20Inquiry&body=Hi%20Gireesh,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
                  className="group mb-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-body font-medium text-ivory transition-all duration-300 hover:bg-gold hover:shadow-lg"
                >
                  Start a conversation
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <div className="border-t border-warm-200 pt-8">
                  <p className="text-body-sm text-charcoal-500">
                    <strong className="font-medium text-charcoal">Response time:</strong>{' '}
                    I typically respond within 24-48 hours during weekdays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Work CTA */}
        <section className="border-t border-warm-200 bg-warm-50 py-12">
          <div className="container-padding mx-auto max-w-content-lg text-center">
            <p className="mb-4 text-body text-charcoal-500">
              Want to see what I&apos;ve been working on?
            </p>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-body font-medium text-charcoal transition-colors hover:text-gold"
            >
              View my portfolio
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
