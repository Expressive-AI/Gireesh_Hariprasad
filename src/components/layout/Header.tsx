'use client';

/**
 * Header Component
 *
 * Minimal, typography-focused navigation with backdrop blur.
 * Visible on all pages with subtle background.
 * Calm, confident, premium aesthetic.
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-ivory/95 shadow-sm backdrop-blur-md' 
            : 'bg-ivory/80 backdrop-blur-sm'
        }`}
      >
        <nav
          className="container-padding mx-auto max-w-content-lg"
          aria-label="Main navigation"
        >
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/logo.png" 
                alt="Gireesh Hariprasad Logo" 
                className="h-10 w-auto sm:h-12 lg:h-14"
              />
              <div className="flex flex-col">
                <span 
                  className="text-xl tracking-wide text-charcoal sm:text-2xl lg:text-3xl"
                  style={{ 
                    fontFamily: "'Gravitas One', cursive",
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 4px rgba(31, 26, 24, 0.08)'
                  }}
                >
                  Gireesh Hariprasad
                </span>
                <span 
                  className="mt-0.5 text-xs font-normal tracking-[0.12em] text-charcoal-400 sm:text-sm"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                >
                  COPYWRITER
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Bebas Neue */}
            <ul className="hidden items-center gap-10 md:flex lg:gap-12">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(item.href));

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`
                        group relative text-sm uppercase tracking-[0.12em] transition-all duration-300
                        ${
                          isActive
                            ? 'text-charcoal'
                            : 'text-charcoal-500 hover:text-charcoal'
                        }
                      `}
                      style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                    >
                      {item.name}
                      {/* Subtle underline on hover */}
                      <span
                        className={`
                          absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300
                          ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="-mr-2 p-2 text-charcoal transition-opacity hover:opacity-60 md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.25}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.25}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-ivory shadow-xl transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex h-20 items-center justify-end px-6">
          <button
            type="button"
            className="p-2 text-charcoal transition-opacity hover:opacity-60"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="px-6 py-8">
          <ul className="space-y-6">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block font-serif text-2xl transition-colors duration-300 ${
                      isActive
                        ? 'text-charcoal font-medium'
                        : 'text-charcoal-500 hover:text-charcoal'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && (
                      <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Info in Mobile Menu */}
        <div className="absolute bottom-8 left-6 right-6 border-t border-warm-200 pt-6">
          <p className="text-sm text-charcoal-400">Get in touch</p>
          <a
            href="mailto:hello@gireeshhariprasad.com"
            className="mt-2 block text-sm text-charcoal transition-colors hover:text-gold"
          >
            hello@gireeshhariprasad.com
          </a>
          <a
            href="tel:+919744525239"
            className="mt-1 block text-sm text-charcoal transition-colors hover:text-gold"
          >
            +91 9744525239
          </a>
        </div>
      </div>
    </>
  );
}
