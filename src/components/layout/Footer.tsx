/**
 * Footer Component
 *
 * Minimal, elegant footer.
 * Name, copyright, subtle contact link.
 * Maintains calm, premium aesthetic.
 */

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-300">
      <div className="container-padding mx-auto max-w-content-lg py-12 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Name / Brand */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link
              href="/"
              className="font-serif text-lg font-medium tracking-tight text-charcoal transition-opacity hover:opacity-60"
            >
              Gireesh Hariprasad
            </Link>
            <span className="hidden text-charcoal-300 md:inline">·</span>
            <span className="text-caption text-charcoal-400">
              Copywriter & Brand Strategist
            </span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <a
              href="mailto:hello@gireeshhariprasad.com"
              className="group relative text-body-sm text-charcoal-500 transition-colors hover:text-charcoal"
            >
              hello@gireeshhariprasad.com
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <span className="hidden text-charcoal-300 md:inline">·</span>
            <a
              href="tel:+919744525239"
              className="group relative text-body-sm text-charcoal-500 transition-colors hover:text-charcoal"
            >
              +91 9744525239
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-warm-200 pt-6 text-center md:mt-12 md:pt-8">
          <p className="text-fine text-charcoal-400">
            © {currentYear} Gireesh Hariprasad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
