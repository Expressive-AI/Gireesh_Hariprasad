import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Bebas_Neue, Lavishly_Yours, Inter } from 'next/font/google';
import '@/styles/tokens.css';
import '@/app/globals.css';

/* ============================================
   Font Configuration using next/font
   Premium Editorial Copywriting Portfolio Typography
   
   - Gravitas One: Bold display for personal name (96-120px)
   - Playfair Display: Primary headings, editorial feel
   - Bebas Neue: Uppercase CTAs, nav microcopy
   - Lavishly Yours / Tangerine: Script accents
   - Inter: Clean UI elements
============================================ */

// Gravitas One - loaded via Google Fonts CSS link in <head>

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
  weight: ['400'],
});

const lavishlyYours = Lavishly_Yours({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

/* ============================================
   SEO Metadata Configuration
============================================ */

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gireeshhariprasad.com'
  ),
  title: {
    default: 'Gireesh Hariprasad | Copywriter',
    template: '%s | Gireesh Hariprasad',
  },
  description:
    'Copy that thinks. Then sells. I\'m a copywriter who loves the English language and respects the hard realities of advertising.',
  keywords: [
    'copywriter',
    'advertising copywriter',
    'brand storytelling',
    'press ads',
    'digital copy',
    'direct response',
    'website copywriter',
    'email copywriter',
    'content strategist',
    'UK copywriter',
    'freelance copywriter',
    'brand voice',
    'marketing copy',
    'creative copywriter'
  ],
  authors: [{ name: 'Gireesh Hariprasad', url: 'https://gireeshhariprasad.com' }],
  creator: 'Gireesh Hariprasad',
  publisher: 'Gireesh Hariprasad',
  category: 'Portfolio',
  classification: 'Copywriting Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://gireeshhariprasad.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://gireeshhariprasad.com',
    siteName: 'Gireesh Hariprasad - Copywriter',
    title: 'Gireesh Hariprasad | Copy that thinks. Then sells.',
    description:
      'I\'m a copywriter who loves the English language and respects the hard realities of advertising. Beautiful words are pointless unless they move people.',
    images: [
      {
        url: '/images/gireesh.jpg',
        width: 1200,
        height: 630,
        alt: 'Gireesh Hariprasad - Copywriter Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gireeshhariprasad',
    creator: '@gireeshhariprasad',
    title: 'Gireesh Hariprasad | Copy that thinks. Then sells.',
    description:
      'I\'m a copywriter who loves the English language and respects the hard realities of advertising.',
    images: {
      url: '/images/gireesh.jpg',
      alt: 'Gireesh Hariprasad - Copywriter Portfolio',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Gireesh H',
  },
  other: {
    'msapplication-TileColor': '#C6A96D',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#1F1E1C' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================
   Root Layout Component
============================================ */

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://gireeshhariprasad.com/#website',
      url: 'https://gireeshhariprasad.com',
      name: 'Gireesh Hariprasad | Copywriter',
      description: 'Copy that thinks. Then sells.',
      publisher: {
        '@id': 'https://gireeshhariprasad.com/#person',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Person',
      '@id': 'https://gireeshhariprasad.com/#person',
      name: 'Gireesh Hariprasad',
      url: 'https://gireeshhariprasad.com',
      image: 'https://gireeshhariprasad.com/images/gireesh.jpg',
      jobTitle: 'Copywriter',
      description: 'I\'m a copywriter who loves the English language and respects the hard realities of advertising.',
      email: 'gireesh2hariprasad@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/gireeshhariprasad',
      ],
      knowsAbout: [
        'Copywriting',
        'Advertising',
        'Brand Voice',
        'Content Strategy',
        'Digital Marketing',
        'Email Marketing',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://gireeshhariprasad.com/#service',
      name: 'Gireesh Hariprasad - Copywriting Services',
      url: 'https://gireeshhariprasad.com',
      description: 'Professional copywriting services including advertising, brand voice, website copy, and content strategy.',
      provider: {
        '@id': 'https://gireeshhariprasad.com/#person',
      },
      areaServed: 'Worldwide',
      serviceType: [
        'Advertising Copywriting',
        'Brand Voice Development',
        'Website Copywriting',
        'Email Campaign Writing',
        'Content Strategy',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://gireeshhariprasad.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://gireeshhariprasad.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Work',
          item: 'https://gireeshhariprasad.com/work',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'About',
          item: 'https://gireeshhariprasad.com/about',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Contact',
          item: 'https://gireeshhariprasad.com/contact',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${bebasNeue.variable} ${lavishlyYours.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Fonts - Gravitas One & Tangerine (not available in next/font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gravitas+One&family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-ivory text-charcoal antialiased selection:bg-charcoal selection:text-ivory">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Page structure for SEO and accessibility */}
        <div className="flex min-h-screen flex-col">
          {/* Header will be added here */}

          {/* Main content area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Footer will be added here */}
        </div>
      </body>
    </html>
  );
}
