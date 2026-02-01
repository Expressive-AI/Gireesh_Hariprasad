import type { Metadata } from 'next';

const baseUrl = 'https://gireeshhariprasad.com';

export const metadata: Metadata = {
  title: 'Contact | Get in Touch',
  description: 'Ready to work together? Get in touch with Gireesh Hariprasad for copywriting projects, brand storytelling, and marketing content.',
  keywords: ['contact copywriter', 'hire copywriter', 'freelance copywriting inquiry', 'copywriting services'],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Gireesh Hariprasad | Copywriter',
    description: 'Ready to work together? Get in touch for copywriting projects and brand storytelling.',
    url: `${baseUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Gireesh Hariprasad | Copywriter',
    description: 'Ready to work together? Get in touch for copywriting projects.',
  },
};

// JSON-LD for Contact Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Gireesh Hariprasad',
  description: 'Get in touch for copywriting projects and brand storytelling.',
  url: `${baseUrl}/contact`,
  mainEntity: {
    '@type': 'Person',
    name: 'Gireesh Hariprasad',
    email: 'gireesh2hariprasad@gmail.com',
    jobTitle: 'Copywriter',
    url: baseUrl,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
