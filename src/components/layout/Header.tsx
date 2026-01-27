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
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          {/* Logo / Copywriter Name */}
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-charcoal transition-opacity duration-300 hover:opacity-60 sm:text-2xl"
          >
            Gireesh Hariprasad
          </Link>

          {/* Desktop Navigation */}
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
                      group relative text-meta-lg uppercase transition-colors duration-300
                      ${
                        isActive
                          ? 'text-charcoal font-medium'
                          : 'text-charcoal-500 hover:text-charcoal'
                      }
                    `}
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
          <MobileMenuButton />
        </div>
      </nav>
    </header>
  );
}

/**
 * Mobile Menu Button
 * Elegant, minimal hamburger
 */
function MobileMenuButton() {
  return (
    <button
      type="button"
      className="-mr-2 p-2 text-charcoal transition-opacity hover:opacity-60 md:hidden"
      aria-label="Open menu"
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
