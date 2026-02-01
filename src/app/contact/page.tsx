import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gireesh Hariprasad for copywriting projects. Let\'s make something that works.',
  openGraph: {
    title: 'Contact Gireesh Hariprasad | Copywriter',
    description: 'Get in touch for copywriting projects. Let\'s make something that works.',
    url: 'https://gireeshhariprasad.com/contact',
  },
  twitter: {
    title: 'Contact Gireesh Hariprasad | Copywriter',
    description: 'Get in touch for copywriting projects.',
  },
  alternates: {
    canonical: 'https://gireeshhariprasad.com/contact',
  },
};

export default function ContactPage() {
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
            Get in Touch
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
            Let&apos;s make something that <span className="relative inline-block">
              works
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/50" />
            </span><span className="text-gold">.</span>
          </h1>
          
          <p className="text-lead max-w-prose">
            If you&apos;re an ad agency or business looking for a copywriter who understands craft, collaboration, and commercial outcomes, this is where the conversation begins.
          </p>
        </section>

        {/* Contact Content */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left Column - Contact Info */}
              <div>
                <p className="text-body-lg mb-10">
                  Whether it’s a role, a project, or an idea worth exploring—start here.
                </p>
                
                {/* Phone */}
                <div className="mb-8">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Mobile (UK)
                  </span>
                  <a
                    href="tel:+447778200054"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    07778 200054
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      
                    </span>
                  </a>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:hello@gireeshhariprasad.com"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    gireesh2hariprasad@gmail.com
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      
                    </span>
                  </a>
                </div>

                {/* Address */}
                <div className="mb-10">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Address
                  </span>
                  <address className="text-body-lg not-italic text-charcoal">
                    21, Crimson Way<br />
                    Hinckley<br />
                    LE10 2NE
                  </address>
                </div>

                {/* Closing statement */}
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                  <p className="text-body text-charcoal-600 m-0">
                    If you believe good writing still matters—and deserves to be challenged every day—you’ll feel right at home working together.
                  </p>
                </div>
              </div>

              {/* Right Column - Quick Action */}
              <div className="rounded-2xl bg-warm-50 p-8 lg:p-10">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                    fontWeight: 600
                  }}
                >
                  Start a conversation
                </h2>
                <p className="mb-8 text-body text-charcoal-500">
                  Click below to open your email client with my address pre-filled.
                </p>

                <a
                  href="mailto:hello@gireeshhariprasad.com?subject=Project%20Inquiry&body=Hi%20Gireesh,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
                  className="group mb-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:tracking-[0.15em] hover:shadow-lg"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  Send an email
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    
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
      </main>

      <Footer />
    </>
  );
}