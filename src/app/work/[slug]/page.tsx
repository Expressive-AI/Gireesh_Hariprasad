/**
 * Case Study Page
 * 
 * Dynamic route for individual project case studies.
 * Designed as a long-form reading experience like a beautifully designed essay.
 * Uses local data from caseStudies.ts
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudiesData, categoryLabels, type LocalCaseStudy } from '@/sanity/data/caseStudies';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder images for each category
const categoryImages: Record<string, string> = {
  advertising: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&h=600&fit=crop',
  website: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  longform: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
  brand: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
  email: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop',
  social: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
};

// Category-specific colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  advertising: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  website: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  longform: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  brand: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  email: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  social: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
};

/**
 * Generate static params for all projects
 */
export async function generateStaticParams() {
  return caseStudiesData.map((project: LocalCaseStudy) => ({
    slug: project.slug.current,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData.find((p: LocalCaseStudy) => p.slug.current === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | ${categoryLabels[project.category] || 'Case Study'}`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
    },
  };
}

/**
 * Case Study Page Component
 */
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudiesData.find((p: LocalCaseStudy) => p.slug.current === slug);

  if (!project) {
    notFound();
  }

  // Check for special showcase pages
  const isFOSAdvertisers = slug === 'fos-advertisers-homepage';
  const isChilampuEmail = slug === 'chilampu-indian-dance-academy';
  const isAntlerCafe = slug === 'antler-play-gallery-cafe';

  const colors = categoryColors[project.category] || categoryColors.brand;
  const heroImage = categoryImages[project.category] || categoryImages.brand;
  const year = project.publishedAt ? new Date(project.publishedAt).getFullYear() : '2025';

  // Find adjacent projects for navigation
  const currentIndex = caseStudiesData.findIndex((p: LocalCaseStudy) => p.slug.current === slug);
  const prevProject = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null;

  // Special FOS Advertisers showcase
  if (isFOSAdvertisers) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <FOSAdvertisersShowcase 
            project={project} 
            year={year} 
            colors={colors}
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
        <Footer />
      </>
    );
  }

  // Special Chilampu Email showcase
  if (isChilampuEmail) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <ChilampuEmailShowcase 
            project={project} 
            year={year} 
            colors={colors}
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
        <Footer />
      </>
    );
  }

  // Special Antler Play Gallery Café showcase
  if (isAntlerCafe) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <AntlerCafeShowcase 
            project={project} 
            year={year} 
            colors={colors}
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Article wrapper for semantic HTML */}
        <article className="case-study">
          {/* Hero Section */}
          <header className="case-study-header relative overflow-hidden pt-32 lg:pt-40">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt={project.title}
                className="h-full w-full object-cover brightness-50"
              />
              {/* Strong overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>

            {/* Content */}
            <div className="container-padding relative z-10 mx-auto max-w-content-lg pb-20 pt-12 lg:pb-28 lg:pt-16">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-ivory/70">
                  <li>
                    <Link href="/" className="transition-colors hover:text-ivory">
                      Home
                    </Link>
                  </li>
                  <li className="text-ivory/40">/</li>
                  <li>
                    <Link href="/work" className="transition-colors hover:text-ivory">
                      Work
                    </Link>
                  </li>
                  <li className="text-ivory/40">/</li>
                  <li className="text-ivory">{project.title}</li>
                </ol>
              </nav>

              {/* Category badge */}
              <div className="mb-6">
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text} ${colors.border}`}>
                  {categoryLabels[project.category] || project.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-display mb-6 max-w-[18ch] text-ivory drop-shadow-lg" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                {project.title}
              </h1>

              {/* Meta info - with background for better visibility */}
              <div className="mt-8 inline-flex flex-wrap items-center gap-6 rounded-xl bg-charcoal/50 px-6 py-4 text-ivory backdrop-blur-sm">
                <div>
                  <span className="text-label block text-ivory/70">Client</span>
                  <span className="text-body-lg font-medium text-ivory">{project.client}</span>
                </div>
                <div className="h-10 w-px bg-ivory/30" />
                <div>
                  <span className="text-label block text-ivory/70">Year</span>
                  <span className="text-body-lg font-medium text-ivory">{year}</span>
                </div>
                {project.deliverables && project.deliverables.length > 0 && (
                  <>
                    <div className="h-10 w-px bg-ivory/30" />
                    <div>
                      <span className="text-label block text-ivory/70">Deliverables</span>
                      <span className="text-body-lg font-medium text-ivory">{project.deliverables.length} items</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="case-study-content bg-ivory py-16 lg:py-24">
            <div className="container-padding mx-auto max-w-content">
              {/* Excerpt / Lead */}
              <div className="mx-auto max-w-prose-wide">
                <p className="text-lead mb-12 border-l-4 border-gold pl-6 text-charcoal-600">
                  <HighlightedText text={project.excerpt} />
                </p>
              </div>

              {/* Soft divider */}
              <div className="mx-auto max-w-prose-wide">
                <hr className="case-study-divider my-12 border-warm-200" />
              </div>

              {/* Body content */}
              <div className="prose-essay mx-auto max-w-prose-wide">
                {project.body && project.body.map((block: any, blockIndex: number) => {
                  if (block._type === 'block') {
                    const text = block.children?.map((child: any) => child.text).join('') || '';
                    // First paragraph gets special styling
                    const isFirst = blockIndex === 0;
                    return (
                      <p key={block._key} className={`mb-6 text-charcoal-600 ${isFirst ? 'text-lg font-medium' : ''}`}>
                        <HighlightedText text={text} />
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="mx-auto mt-16 max-w-prose-wide">
                  <h2 className="text-subhead mb-6">Deliverables</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.deliverables.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-warm-50 p-4"
                      >
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-body-sm text-charcoal-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Navigation to other case studies */}
        <nav className="border-t border-warm-200 bg-warm-50 py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              {/* Previous */}
              <div className="flex-1">
                {prevProject ? (
                  <Link
                    href={`/work/${prevProject.slug.current}`}
                    className="group inline-block"
                  >
                    <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                    <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                      <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                      {prevProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Back to work */}
              <div className="flex justify-center">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-2.5 text-body-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                >
                  View all work
                </Link>
              </div>

              {/* Next */}
              <div className="flex-1 text-right">
                {nextProject ? (
                  <Link
                    href={`/work/${nextProject.slug.current}`}
                    className="group inline-block"
                  >
                    <span className="text-label mb-2 block text-charcoal-400">Next</span>
                    <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                      {nextProject.title}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}

/**
 * HighlightedText Component
 * 
 * Highlights important keywords in text with gold underline.
 * Keywords: trust, emotional, care, comfort, professionalism, confidence, 
 * clarity, brand, story, voice, message, impact, result, etc.
 */
const highlightKeywords = [
  'trust', 'emotional', 'care', 'comfort', 'professionalism', 'confidence',
  'clarity', 'brand', 'story', 'voice', 'message', 'impact', 'result',
  'connection', 'experience', 'quality', 'value', 'insight', 'strategy',
  'warm', 'reassuring', 'calm', 'happy', 'professional', 'thoughtful',
  'persuade', 'inspire', 'engage', 'convert', 'growth', 'success',
  'lifestyle', 'health', 'benefit', 'meaningful', 'authentic', 'genuine'
];

function HighlightedText({ text }: { text: string }) {
  // Create regex pattern for all keywords (case insensitive)
  const pattern = new RegExp(`\\b(${highlightKeywords.join('|')})\\b`, 'gi');
  
  // Split text by keywords and create parts array
  const parts = text.split(pattern);
  
  return (
    <>
      {parts.map((part, index) => {
        const isKeyword = highlightKeywords.some(
          keyword => part.toLowerCase() === keyword.toLowerCase()
        );
        
        if (isKeyword) {
          return (
            <span key={index} className="highlight-gold font-medium">
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/**
 * FOS Advertisers Special Showcase
 * 
 * An elegant, meaningful design that displays the actual copywriting work
 * in a way that reflects the sophistication of brand advertising.
 */
function FOSAdvertisersShowcase({ 
  project, 
  year, 
  colors,
  prevProject,
  nextProject 
}: { 
  project: LocalCaseStudy; 
  year: string | number;
  colors: { bg: string; text: string; border: string };
  prevProject: LocalCaseStudy | null;
  nextProject: LocalCaseStudy | null;
}) {
  return (
    <article className="case-study fos-showcase">
      {/* Hero Section - Elegant & Minimal */}
      <header className="relative overflow-hidden bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Subtle background pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full border border-ivory/5" />
          <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full border border-gold/10" />
          <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-gold/40" />
          <div className="absolute left-1/3 top-1/2 h-1 w-1 rounded-full bg-ivory/30" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg">
          {/* Breadcrumb */}
          <nav className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-ivory/50">
              <li><Link href="/" className="transition-colors hover:text-ivory">Home</Link></li>
              <li className="text-ivory/30">/</li>
              <li><Link href="/work" className="transition-colors hover:text-ivory">Work</Link></li>
              <li className="text-ivory/30">/</li>
              <li className="text-ivory/70">Brand</li>
            </ol>
          </nav>

          {/* Main title treatment */}
          <div className="text-center">
            <span className="text-label mb-6 inline-block tracking-widest text-gold">
              Brand Copywriting
            </span>
            
            <h1 className="text-hero mb-8 text-ivory">
              <span className="block">FOS</span>
              <span className="block text-gold">ADVERTISERS</span>
            </h1>
            
            <p className="mx-auto max-w-xl text-xl font-light italic text-ivory/80">
              Ideas that stay. Stories that sell.
            </p>

            {/* Meta */}
            <div className="mt-12 inline-flex items-center gap-8 text-ivory/60">
              <div>
                <span className="text-label block text-ivory/40">Client</span>
                <span className="text-body font-medium text-ivory">{project.client}</span>
              </div>
              <div className="h-8 w-px bg-ivory/20" />
              <div>
                <span className="text-label block text-ivory/40">Year</span>
                <span className="text-body font-medium text-ivory">{year}</span>
              </div>
              <div className="h-8 w-px bg-ivory/20" />
              <div>
                <span className="text-label block text-ivory/40">Location</span>
                <span className="text-body font-medium text-ivory">Thiruvananthapuram</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide text-center">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Brief</span>
            <p className="text-lead text-charcoal">
              {project.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* The Actual Copy Showcase - Main Feature */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content-lg">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Work</span>
            <h2 className="text-title text-charcoal">Homepage Copy</h2>
          </div>

          {/* Copy Showcase Card */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* Header bar */}
            <div className="flex items-center gap-2 border-b border-warm-100 bg-warm-50/50 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-charcoal/20" />
              <div className="h-3 w-3 rounded-full bg-charcoal/20" />
              <div className="h-3 w-3 rounded-full bg-charcoal/20" />
              <span className="ml-4 text-sm text-charcoal-400">fosadvertisers.com</span>
            </div>

            {/* Actual Copy Content */}
            <div className="p-8 lg:p-12">
              {/* Hero Section */}
              <div className="mb-12 border-b border-warm-100 pb-12">
                <h3 className="mb-2 font-serif text-3xl font-semibold tracking-tight text-charcoal lg:text-4xl">
                  FOS ADVERTISERS
                </h3>
                <p className="text-xl italic text-gold">Ideas that stay. Stories that sell.</p>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-charcoal">
                  <span className="highlight-block">Advertising, Done with Intent</span>
                </h4>
                <p className="text-body leading-relaxed text-charcoal-600">
                  Based in Thiruvananthapuram, FOS Advertisers has been shaping brands, building recall, and driving results since 2005. We&apos;re not loud for the sake of noise. We create <span className="highlight-gold font-medium">communication that connects, converts, and lasts</span>.
                </p>
                <p className="mt-4 text-body leading-relaxed text-charcoal-600">
                  From digital-first campaigns to full-scale brand stories across every medium, we help businesses speak clearly and confidently to the people who matter.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-10 rounded-xl bg-warm-50 p-6 lg:p-8">
                <h4 className="mb-6 text-xl font-semibold text-charcoal">
                  <span className="highlight-block">One Agency. Every Medium.</span>
                </h4>
                <p className="mb-6 text-body text-charcoal-600">
                  We handle advertising in its entirety, so your brand stays consistent everywhere it appears.
                </p>
                
                {/* Services Grid */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal">Digital Advertising &amp; Social Media</h5>
                      <p className="mt-1 text-sm text-charcoal-500">Performance-driven campaigns that cut through clutter, spark engagement, and deliver measurable growth.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal">Print, Outdoor &amp; Electronic Media</h5>
                      <p className="mt-1 text-sm text-charcoal-500">Strategic visibility across newspapers, magazines, hoardings, radio, and television—planned for maximum impact.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal">Branding &amp; Creative Communication</h5>
                      <p className="mt-1 text-sm text-charcoal-500">From logos to long-term brand language, we shape identities that feel sharp, relevant, and unmistakably yours.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 - Production House */}
              <div className="mb-10 border-l-4 border-gold pl-6">
                <h4 className="mb-4 text-xl font-semibold text-charcoal">
                  An In-House Production House That Delivers
                </h4>
                <p className="text-body leading-relaxed text-charcoal-600">
                  FOS Advertisers runs its own full-fledged production house, producing high-quality TV commercials from concept to final cut.
                </p>
                <ul className="mt-4 space-y-2 text-charcoal-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Over 30 national brands of repute
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Commercials produced in multiple Indian languages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Strong storytelling, cinematic visuals, and broadcast-ready execution
                  </li>
                </ul>
                <p className="mt-4 text-body font-medium italic text-charcoal">
                  When we create a film, we don&apos;t just showcase a product—<span className="highlight-gold">we build belief</span>.
                </p>
              </div>

              {/* Section 4 - Experience */}
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-charcoal">
                  <span className="highlight-block">Experience That Shows</span>
                </h4>
                <p className="text-body leading-relaxed text-charcoal-600">
                  Nearly two decades in the industry have taught us one thing: <span className="highlight-gold font-medium">trends change, but good ideas endure</span>.
                </p>
                <p className="mt-4 text-body leading-relaxed text-charcoal-600">
                  Our experience helps us balance creativity with clarity, and ambition with practicality.
                </p>
                <p className="mt-4 text-body font-medium text-charcoal">
                  That&apos;s why brands trust us.<br />
                  That&apos;s why campaigns work.
                </p>
              </div>

              {/* Section 5 - CTA */}
              <div className="rounded-xl bg-charcoal p-8 text-center">
                <h4 className="mb-3 text-xl font-semibold text-ivory">
                  Let&apos;s Build Something Memorable
                </h4>
                <p className="mb-6 text-ivory/80">
                  Whether you&apos;re launching a brand, scaling up, or redefining how the world sees you, we&apos;re ready.
                </p>
                <p className="text-lg font-medium text-gold">
                  Talk to FOS Advertisers today.<br />
                  <span className="text-ivory/90">Let&apos;s plan your next campaign—and make it count.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Approach</span>
            <h2 className="text-title mb-8 text-charcoal">Writing with restraint</h2>
            
            <div className="prose-premium space-y-6">
              {project.body && project.body.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                if (block._type === 'block') {
                  const text = block.children?.map((child) => child.text).join('') || '';
                  return (
                    <p key={block._key} className="text-charcoal-600">
                      <HighlightedText text={text} />
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-warm-200 bg-warm-50 py-16">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <h3 className="text-subhead mb-8 text-center">Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.deliverables.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white px-5 py-2.5 text-body-sm font-medium text-charcoal"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
        <div className="container-padding mx-auto max-w-content-lg">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              {prevProject ? (
                <Link href={`/work/${prevProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    {prevProject.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
            <div className="flex justify-center">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-2.5 text-body-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory">
                View all work
              </Link>
            </div>
            <div className="flex-1 text-right">
              {nextProject ? (
                <Link href={`/work/${nextProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    {nextProject.title}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
}

/**
 * Chilampu Indian Dance Academy Email Showcase
 * 
 * A warm, cultural, and aspirational design that captures the essence
 * of Bharatanatyam - grace, heritage, and the journey of young dancers.
 */
function ChilampuEmailShowcase({ 
  project, 
  year, 
  colors,
  prevProject,
  nextProject 
}: { 
  project: LocalCaseStudy; 
  year: string | number;
  colors: { bg: string; text: string; border: string };
  prevProject: LocalCaseStudy | null;
  nextProject: LocalCaseStudy | null;
}) {
  return (
    <article className="case-study chilampu-showcase">
      {/* Hero Section - Cultural & Aspirational */}
      <header className="relative min-h-[80vh] overflow-hidden pt-32 lg:pt-40">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bharathanatyam.jpg"
            alt="Bharatanatyam dancer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Traditional pattern overlay */}
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
            <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
              <pattern id="kolam" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#B8976B" />
                <circle cx="10" cy="10" r="4" fill="none" stroke="#B8976B" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#kolam)" />
            </svg>
          </div>
        </div>

        <div className="container-padding relative z-20 mx-auto max-w-content-lg pb-20 lg:pb-32">
          {/* Breadcrumb */}
          <nav className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-ivory/50">
              <li><Link href="/" className="transition-colors hover:text-ivory">Home</Link></li>
              <li className="text-ivory/30">/</li>
              <li><Link href="/work" className="transition-colors hover:text-ivory">Work</Link></li>
              <li className="text-ivory/30">/</li>
              <li className="text-ivory/70">Email Campaign</li>
            </ol>
          </nav>

          {/* Title Treatment */}
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-label tracking-widest">Email Campaign</span>
            </span>
            
            <h1 className="mb-6 font-serif text-5xl font-light leading-tight text-ivory lg:text-6xl">
              <span className="block font-normal">Chilampu</span>
              <span className="block text-gold">Indian Dance Academy</span>
            </h1>

            <p className="mb-8 max-w-lg text-xl font-light italic text-ivory/80">
              "Let them dance. Let them shine."
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-ivory/60">
              <div>
                <span className="text-label block text-ivory/40">Client</span>
                <span className="text-body font-medium text-ivory">{project.client}</span>
              </div>
              <div className="h-8 w-px bg-ivory/20" />
              <div>
                <span className="text-label block text-ivory/40">Year</span>
                <span className="text-body font-medium text-ivory">{year}</span>
              </div>
              <div className="h-8 w-px bg-ivory/20" />
              <div>
                <span className="text-label block text-ivory/40">Type</span>
                <span className="text-body font-medium text-ivory">Enrolment Email</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 lg:block">
          <div className="flex flex-col items-center gap-2 text-ivory/50">
            <span className="text-xs tracking-wider">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-ivory/50 to-transparent" />
          </div>
        </div>
      </header>

      {/* The Brief */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide text-center">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Brief</span>
            <p className="text-lead text-charcoal">
              {project.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* The Email Showcase - Split Design */}
      <section className="relative overflow-hidden bg-warm-50">
        <div className="lg:flex">
          {/* Left - Image */}
          <div className="relative min-h-[400px] bg-charcoal/5 lg:min-h-[800px] lg:w-1/2">
            {/* Image container with proper sizing */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bharathanatyam-2.jpg"
                alt="Young Bharatanatyam dancer"
                className="h-full w-full object-contain"
              />
            </div>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            
            {/* Floating quote overlay with grey highlight */}
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
              <blockquote className="rounded-xl bg-neutral-700/95 p-6 shadow-xl backdrop-blur-sm">
                <p className="font-serif text-lg italic text-ivory">
                  <span className="bg-neutral-600 px-1">"Bharatanatyam isn&apos;t just a dance form.</span> It builds a strong foundation in <span className="bg-neutral-600 px-1">rhythm</span>, <span className="bg-neutral-600 px-1">balance</span>, <span className="bg-neutral-600 px-1">coordination</span> and <span className="bg-neutral-600 px-1">discipline</span>."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right - Email Content */}
          <div className="p-8 lg:w-1/2 lg:p-16">
            <div className="mx-auto max-w-lg">
              {/* Section Header */}
              <span className="text-label mb-4 inline-block text-charcoal-400">The Work</span>
              <h2 className="text-title mb-8 text-charcoal">The Email</h2>

              {/* Email Card */}
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                {/* Email Header */}
                <div className="border-b border-warm-100 bg-warm-50/50 px-6 py-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-charcoal-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Subject Line</span>
                  </div>
                  <p className="font-medium text-charcoal">
                    New Bharatanatyam Classes for Kids – <span className="highlight-block">Enrol Now for 2026!</span>
                  </p>
                </div>

                {/* Email Body */}
                <div className="p-6 lg:p-8">
                  <p className="mb-4 text-charcoal-600">Dear Parents,</p>
                  
                  <p className="mb-4 text-charcoal-600">
                    We&apos;re thrilled to share some exciting news with you!
                  </p>
                  
                  <p className="mb-4 text-charcoal-600">
                    <span className="font-semibold text-charcoal">Chilampu Indian Dance Academy</span> is launching a brand-new Bharatanatyam class for children, starting <span className="highlight-gold font-medium">14th January 2026</span>. It&apos;s the perfect opportunity for young learners to step into the enchanting world of Indian classical dance.
                  </p>

                  <p className="mb-4 text-charcoal-600">
                    Bharatanatyam isn&apos;t just a dance form. It builds a strong foundation in <span className="highlight-gold">rhythm</span>, <span className="highlight-gold">balance</span>, <span className="highlight-gold">coordination</span> and <span className="highlight-gold">discipline</span>. Children absorb the music, the movements, and the stories behind every step. As they grow, their <span className="highlight-gold">confidence</span> grows too. And who knows? This early spark might just lead them to become skilled performers on stage… or even open doors to a future in cinema and acting.
                  </p>

                  <p className="mb-6 font-medium italic text-charcoal">
                    At Chilampu, we focus on nurturing talent with love, patience and authentic training.
                  </p>

                  {/* Benefits Box */}
                  <div className="mb-6 rounded-lg bg-gradient-to-br from-rose-50 to-warm-50 p-5">
                    <h4 className="mb-4 font-semibold text-charcoal">What your child will gain:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-200/50">
                          <span className="h-2 w-2 rounded-full bg-rose-500" />
                        </span>
                        <span className="text-charcoal-600">Mastery of classical steps at the right age</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-200/50">
                          <span className="h-2 w-2 rounded-full bg-rose-500" />
                        </span>
                        <span className="text-charcoal-600">Improved concentration and physical flexibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-200/50">
                          <span className="h-2 w-2 rounded-full bg-rose-500" />
                        </span>
                        <span className="text-charcoal-600">A deep connection with Indian heritage and culture</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-200/50">
                          <span className="h-2 w-2 rounded-full bg-rose-500" />
                        </span>
                        <span className="text-charcoal-600">The grace, expression and confidence of a true performer</span>
                      </li>
                    </ul>
                  </div>

                  <p className="mb-4 text-charcoal-600">
                    We would love to have your little one join us on this beautiful journey of dance and expression.
                  </p>

                  {/* CTA */}
                  <div className="mb-6 rounded-lg border-2 border-dashed border-rose-200 bg-rose-50/50 p-4 text-center">
                    <p className="mb-2 font-semibold text-rose-600">Seats are limited!</p>
                    <p className="text-sm text-charcoal-600">Call or reply to this email to reserve your child&apos;s spot.</p>
                  </div>

                  {/* Closing */}
                  <div className="border-t border-warm-100 pt-6 text-center">
                    <p className="mb-4 font-serif text-lg italic text-charcoal">
                      Let them dance. Let them shine.<br />
                      <span className="text-gold">Let Chilampu be the beginning of their artistic story.</span>
                    </p>
                    <p className="text-sm text-charcoal-400">
                      Warm regards,<br />
                      <span className="font-medium text-charcoal">Chilampu Indian Dance Academy</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Essence - Cultural Connection */}
      <section className="relative overflow-hidden bg-charcoal py-20 lg:py-28">
        {/* Decorative pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#B8976B" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide text-center">
            <span className="text-label mb-6 inline-block text-gold">The Essence</span>
            <h2 className="text-title mb-8 text-ivory">More than an announcement</h2>
            <p className="text-lead mb-8 text-ivory/80">
              This email wasn&apos;t written to fill seats. It was written to speak to the quiet hopes parents hold for their children—the wish to see them confident, rooted in culture, and discovering something beautiful.
            </p>
            <div className="mx-auto max-w-lg space-y-4 text-left">
              <p className="text-ivory/70">
                <HighlightedText text="Rather than sounding like an announcement, the email reads like a personal invitation to parents." />
              </p>
              <p className="text-ivory/70">
                <HighlightedText text="The copy frames Bharatanatyam not just as a dance form, but as a foundation for rhythm, discipline, confidence, and cultural connection." />
              </p>
              <p className="text-ivory/70">
                <HighlightedText text="Clear benefits and a gentle call to action encourage enrolment without pressure." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Approach */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Approach</span>
            <h2 className="text-title mb-8 text-charcoal">Writing with warmth</h2>
            
            <div className="prose-premium space-y-6">
              {project.body && project.body.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                if (block._type === 'block') {
                  const text = block.children?.map((child) => child.text).join('') || '';
                  return (
                    <p key={block._key} className="text-charcoal-600">
                      <HighlightedText text={text} />
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-warm-200 bg-warm-50 py-16">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <h3 className="text-subhead mb-8 text-center">Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.deliverables.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2.5 text-body-sm font-medium text-charcoal"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="border-t border-warm-200 bg-ivory py-12 lg:py-16">
        <div className="container-padding mx-auto max-w-content-lg">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              {prevProject ? (
                <Link href={`/work/${prevProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    {prevProject.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
            <div className="flex justify-center">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-2.5 text-body-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory">
                View all work
              </Link>
            </div>
            <div className="flex-1 text-right">
              {nextProject ? (
                <Link href={`/work/${nextProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    {nextProject.title}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
}

/**
 * Antler Play Gallery Café Showcase
 * 
 * A warm, playful, and inviting design that captures the essence of a café
 * where children play freely while parents enjoy quality time.
 */
function AntlerCafeShowcase({ 
  project, 
  year, 
  colors,
  prevProject,
  nextProject 
}: { 
  project: LocalCaseStudy; 
  year: string | number;
  colors: { bg: string; text: string; border: string };
  prevProject: LocalCaseStudy | null;
  nextProject: LocalCaseStudy | null;
}) {
  return (
    <article className="case-study antler-showcase">
      {/* Hero Section - Warm & Inviting */}
      <header className="relative min-h-[85vh] overflow-hidden pt-32 lg:pt-40">
        {/* Background with warm café ambience */}
        <div className="absolute inset-0 z-0">
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
          
          {/* Playful scattered elements */}
          <div className="pointer-events-none absolute inset-0">
            {/* Coffee cup icon */}
            <div className="absolute right-[15%] top-[20%] opacity-20">
              <svg className="h-24 w-24 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21h18v-2H2v2zm18-9.5V7a1 1 0 00-1-1h-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v2H3a1 1 0 00-1 1v4.5a5.5 5.5 0 005 5.48V19h8v-2.02a5.5 5.5 0 005-5.48zM6 5h10v1H6V5zm13 6.5a3.5 3.5 0 01-2 3.16V8h2v3.5z"/>
              </svg>
            </div>
            {/* Toy blocks */}
            <div className="absolute left-[10%] top-[60%] opacity-15">
              <svg className="h-20 w-20 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14z"/>
              </svg>
            </div>
            {/* Star */}
            <div className="absolute right-[25%] top-[70%] opacity-20">
              <svg className="h-16 w-16 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            {/* Book */}
            <div className="absolute left-[20%] top-[30%] opacity-15">
              <svg className="h-16 w-16 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
              </svg>
            </div>
          </div>
          
          {/* Subtle circles */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border-2 border-dashed border-amber-200/50" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/30" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content-lg pb-20 lg:pb-32">
          {/* Breadcrumb */}
          <nav className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-charcoal/60">
              <li><Link href="/" className="transition-colors hover:text-charcoal">Home</Link></li>
              <li className="text-charcoal/30">/</li>
              <li><Link href="/work" className="transition-colors hover:text-charcoal">Work</Link></li>
              <li className="text-charcoal/30">/</li>
              <li className="text-charcoal">Press Ad</li>
            </ol>
          </nav>

          {/* Title Treatment */}
          <div className="text-center">
            <span className="mb-6 inline-flex items-center gap-3 text-amber-700">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-label tracking-widest">Press Advertisement</span>
              <span className="h-px w-8 bg-amber-400" />
            </span>
            
            <h1 className="mb-4 font-serif text-4xl font-light leading-tight text-charcoal lg:text-6xl">
              <span className="block">LET YOUR KIDS</span>
              <span className="highlight-block">PLAY THEIR HEARTS OUT</span>
            </h1>
            <h2 className="mb-8 font-serif text-3xl font-light text-charcoal/80 lg:text-4xl">
              WHILE YOU <span className="highlight-block-italic">CATCH UP</span> WITH YOURS
            </h2>

            {/* Logo/Brand */}
            <div className="mb-8">
              <span className="inline-block rounded-full bg-amber-600 px-8 py-3 text-xl font-semibold tracking-wide text-white">
                ANTLER PLAY GALLERY CAFÉ
              </span>
            </div>

            <p className="mx-auto max-w-md text-lg italic text-charcoal/70">
              Quality time for your children. Wonderful moments for you.
            </p>

            {/* Meta */}
            <div className="mt-12 inline-flex items-center gap-8 text-charcoal/60">
              <div>
                <span className="text-label block text-charcoal/40">Client</span>
                <span className="text-body font-medium text-charcoal">{project.client}</span>
              </div>
              <div className="h-8 w-px bg-charcoal/20" />
              <div>
                <span className="text-label block text-charcoal/40">Year</span>
                <span className="text-body font-medium text-charcoal">{year}</span>
              </div>
              <div className="h-8 w-px bg-charcoal/20" />
              <div>
                <span className="text-label block text-charcoal/40">Format</span>
                <span className="text-body font-medium text-charcoal">4 col × 20 cm</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Brief */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide text-center">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Brief</span>
            <p className="text-lead text-charcoal">
              {project.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* The Ad Showcase - Newspaper Style */}
      <section className="bg-neutral-100 py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mb-12 text-center">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Work</span>
            <h2 className="text-title text-charcoal">The Press Advertisement</h2>
          </div>

          {/* Newspaper Ad Mockup */}
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
              {/* Newspaper texture header */}
              <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-3 text-center">
                <span className="text-xs tracking-widest text-neutral-400">PRESS ADVERTISEMENT</span>
              </div>

              {/* Ad Content */}
              <div className="p-8 lg:p-12">
                {/* Scene Description - The Image Concept */}
                <div className="mb-8 rounded-lg border-2 border-dashed border-amber-200 bg-amber-50/50 p-6">
                  <p className="text-center text-sm italic text-amber-800">
                    [ Image: A young mother stands amazed at the doorway of a playroom in joyful chaos — 
                    overturned chairs, scattered books and toys everywhere. 
                    The visual promise: take them to Antler, and they&apos;ll play happily while you enjoy your coffee. ]
                  </p>
                </div>

                {/* Headlines */}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 font-serif text-2xl font-bold uppercase tracking-wide text-charcoal lg:text-3xl">
                    LET YOUR KIDS <span className="highlight-block">PLAY THEIR HEARTS OUT</span>
                  </h3>
                  <h4 className="font-serif text-xl uppercase text-charcoal/80 lg:text-2xl">
                    WHILE YOU CATCH UP WITH <span className="highlight-block-italic">YOURS</span>
                  </h4>
                </div>

                {/* Logo */}
                <div className="mb-8 text-center">
                  <span className="inline-block border-b-4 border-amber-500 pb-2 font-serif text-xl font-bold tracking-wider text-amber-700">
                    ANTLER PLAY GALLERY CAFÉ
                  </span>
                  <p className="mt-2 text-sm italic text-charcoal/60">
                    Quality time for your children. Wonderful moments for you.
                  </p>
                </div>

                {/* Body Copy */}
                <div className="mb-8">
                  <p className="text-body leading-relaxed text-charcoal-600">
                    Step into Antlers with your kids – A special world made for them with <span className="highlight-gold font-medium">curated space for indoor games</span> and a <span className="highlight-gold font-medium">high-quality café environment</span> for you and caregivers.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">Dedicated zones for children</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">Coffee bar & light meals</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">FREE Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">Events & party bookings</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">Storytime, art & music</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-amber-50 p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200">
                      <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal">Secure check-in systems</span>
                  </div>
                </div>

                {/* Closing */}
                <div className="border-t border-neutral-200 pt-6 text-center">
                  <p className="mb-4 text-lg text-charcoal">
                    Come with your little ones.<br />
                    <span className="font-medium">Stay for the coffee, the laughs and the <span className="highlight-gold">break you deserve</span>.</span>
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-amber-500 px-6 py-2">
                    <span className="font-serif text-lg font-bold tracking-wider text-amber-700">ANTLER</span>
                    <span className="text-xs text-amber-600">Play Gallery Café</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="relative overflow-hidden bg-amber-700 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
            <pattern id="cafePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#cafePattern)" />
          </svg>
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide text-center">
            <span className="text-label mb-6 inline-block text-amber-200">The Insight</span>
            <h2 className="text-title mb-8 text-white">Two needs. One space.</h2>
            <p className="text-xl leading-relaxed text-amber-100">
              Parents don&apos;t just need places for their children to play. They need <span className="font-medium text-white">relief</span>. They need <span className="font-medium text-white">conversation</span>. They need moments where they can <span className="font-medium text-white">pause without guilt</span>.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-amber-100">
              The headline brings this contrast to life: children playing their hearts out, while parents catch up with theirs. It frames Antler as a space where <span className="font-medium text-white">both needs coexist comfortably</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Approach */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <span className="text-label mb-4 inline-block text-charcoal-400">The Approach</span>
            <h2 className="text-title mb-8 text-charcoal">Writing with warmth</h2>
            
            <div className="prose-premium space-y-6">
              {project.body && project.body.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                if (block._type === 'block') {
                  const text = block.children?.map((child) => child.text).join('') || '';
                  return (
                    <p key={block._key} className="text-charcoal-600">
                      <HighlightedText text={text} />
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-warm-200 bg-amber-50 py-16">
        <div className="container-padding mx-auto max-w-content">
          <div className="mx-auto max-w-prose-wide">
            <h3 className="text-subhead mb-8 text-center">Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.deliverables.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-2.5 text-body-sm font-medium text-charcoal"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="border-t border-warm-200 bg-white py-12 lg:py-16">
        <div className="container-padding mx-auto max-w-content-lg">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              {prevProject ? (
                <Link href={`/work/${prevProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    {prevProject.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
            <div className="flex justify-center">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-2.5 text-body-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory">
                View all work
              </Link>
            </div>
            <div className="flex-1 text-right">
              {nextProject ? (
                <Link href={`/work/${nextProject.slug.current}`} className="group inline-block">
                  <span className="text-label mb-2 block text-charcoal-400">Next</span>
                  <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                    {nextProject.title}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
}
