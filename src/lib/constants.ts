/**
 * Site-wide constants and configuration
 */

export const siteConfig = {
  name: 'Portfolio',
  description: 'A bespoke editorial portfolio showcasing creative work',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  author: {
    name: 'Your Name',
    email: 'hello@example.com',
  },
  social: {
    twitter: '@username',
    github: 'username',
    linkedin: 'username',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
