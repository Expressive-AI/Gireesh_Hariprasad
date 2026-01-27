import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Lora, Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/tokens.css';
import '@/app/globals.css';

/* ============================================
   Font Configuration using next/font
   Premium Copywriting Portfolio Typography
   
   - Cormorant Garamond: Dramatic, confident headlines
   - Lora: Warm, readable body text
   - Inter: Clean UI elements  
   - JetBrains Mono: Code blocks
============================================ */

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

/* ============================================
   SEO Metadata Configuration
============================================ */

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  ),
  title: {
    default: 'Portfolio | Creative Work',
    template: '%s | Portfolio',
  },
  description:
    'A bespoke editorial portfolio showcasing creative work with elegant, minimalist design.',
  keywords: ['portfolio', 'creative', 'design', 'photography', 'work'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
    title: 'Portfolio | Creative Work',
    description:
      'A bespoke editorial portfolio showcasing creative work with elegant, minimalist design.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Work',
    description:
      'A bespoke editorial portfolio showcasing creative work with elegant, minimalist design.',
    images: ['/og-image.jpg'],
    creator: '@username',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
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
