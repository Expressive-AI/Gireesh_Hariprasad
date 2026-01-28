/**
 * Case Study Page
 * 
 * Dynamic route for individual project case studies.
 * Unified design system: calm, editorial, writer-focused.
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudiesData, categoryLabels, type LocalCaseStudy } from '@/data/caseStudies';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Slugs that have their own dedicated pages
const customPageSlugs = [
  'zamosa-pet-grooming',
  'antler-play-gallery-cafe',
  'philips-powerpro-vacuum-cleaner',
  'merryba-homepage',
  'fos-advertisers-homepage',
  'chilampu-indian-dance-academy'
];

export async function generateStaticParams() {
  return caseStudiesData
    .filter((project: LocalCaseStudy) => !customPageSlugs.includes(project.slug.current))
    .map((project: LocalCaseStudy) => ({
      slug: project.slug.current,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData.find((p: LocalCaseStudy) => p.slug.current === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | ${categoryLabels[project.category] || 'Case Study'}`,
    description: project.excerpt,
    openGraph: { title: project.title, description: project.excerpt },
  };
}

function ImagePlaceholder({ variant = 'landscape', className = '' }: { variant?: 'landscape' | 'portrait' | 'circle' | 'small-rect'; className?: string; }) {
  const baseClasses = "bg-warm-100 border border-warm-200 flex items-center justify-center text-charcoal-300";
  const variantClasses: Record<string, string> = {
    landscape: "w-full aspect-[16/9] rounded-lg",
    portrait: "w-full max-w-sm aspect-[3/4] rounded-lg mx-auto",
    circle: "w-48 h-48 rounded-full mx-auto",
    'small-rect': "w-64 h-40 rounded-md mx-auto",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="text-center p-4">
        <svg className="w-8 h-8 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs uppercase tracking-wider opacity-50">Image</span>
      </div>
    </div>
  );
}
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Redirect custom page slugs to their dedicated pages
  if (customPageSlugs.includes(slug)) {
    notFound();
  }
  
  const project = caseStudiesData.find((p: LocalCaseStudy) => p.slug.current === slug);

  if (!project) { notFound(); }

  const year = project.publishedAt ? new Date(project.publishedAt).getFullYear() : '2025';
  const currentIndex = caseStudiesData.findIndex((p: LocalCaseStudy) => p.slug.current === slug);
  const prevProject = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null;

  const bodyBlocks = project.body || [];
  const firstThird = bodyBlocks.slice(0, Math.ceil(bodyBlocks.length / 3));
  const secondThird = bodyBlocks.slice(Math.ceil(bodyBlocks.length / 3), Math.ceil((bodyBlocks.length * 2) / 3));
  const lastThird = bodyBlocks.slice(Math.ceil((bodyBlocks.length * 2) / 3));

  const isFOSAdvertisers = slug === 'fos-advertisers-homepage';

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="case-study">
          {/* Hero Section */}
          <header className="relative overflow-hidden bg-ivory pt-32 pb-16 lg:pt-40 lg:pb-24">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 top-20 h-[500px] w-[500px] rounded-full border border-warm-200 opacity-60" />
              <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full border border-warm-200 opacity-40" />
            </div>

            <div className="container-padding relative z-10 mx-auto max-w-content-lg">
              <nav className="mb-8 lg:mb-12">
                <ol className="flex items-center gap-2 text-sm text-charcoal-400">
                  <li><Link href="/" className="transition-colors hover:text-charcoal">Home</Link></li>
                  <li className="text-charcoal-300">/</li>
                  <li><Link href="/work" className="transition-colors hover:text-charcoal">Work</Link></li>
                  <li className="text-charcoal-300">/</li>
                  <li className="text-charcoal-500">{categoryLabels[project.category] || project.category}</li>
                </ol>
              </nav>

              <div className="mb-6">
                <span className="text-label tracking-widest text-gold">
                  {categoryLabels[project.category] || project.category}
                </span>
              </div>

              <h1 className="text-display mb-6 max-w-[16ch] text-charcoal">{project.title}</h1>

              {isFOSAdvertisers && (
                <p className="mb-8 text-xl font-light italic text-charcoal-500">Ideas that stay. Stories that sell.</p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-8 text-charcoal-500">
                <div>
                  <span className="text-label block text-charcoal-400 mb-1">Client</span>
                  <span className="text-body font-medium text-charcoal">{project.client}</span>
                </div>
                <div className="h-10 w-px bg-warm-200" />
                <div>
                  <span className="text-label block text-charcoal-400 mb-1">Year</span>
                  <span className="text-body font-medium text-charcoal">{year}</span>
                </div>
                {isFOSAdvertisers && (
                  <>
                    <div className="h-10 w-px bg-warm-200" />
                    <div>
                      <span className="text-label block text-charcoal-400 mb-1">Location</span>
                      <span className="text-body font-medium text-charcoal">Thiruvananthapuram</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* First Image - Circle */}
          <section className="bg-ivory py-12 lg:py-16">
            <div className="container-padding mx-auto max-w-content">
              <ImagePlaceholder variant="circle" />
            </div>
          </section>

          {/* First Content Section */}
          <section className="bg-ivory py-12 lg:py-16">
            <div className="container-padding mx-auto max-w-content">
              <div className="mx-auto max-w-prose-wide">
                <p className="text-lead mb-12 text-charcoal-600">{project.excerpt}</p>
                <div className="prose-essay space-y-6">
                  {firstThird.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                    if (block._type === 'block') {
                      const text = block.children?.map((child) => child.text).join('') || '';
                      return <p key={block._key} className="text-charcoal-600 leading-relaxed">{text}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Second Image - Landscape */}
          <section className="bg-warm-50 py-12 lg:py-16">
            <div className="container-padding mx-auto max-w-content">
              <div className="mx-auto max-w-2xl">
                <ImagePlaceholder variant="landscape" />
              </div>
            </div>
          </section>
          {/* Middle Content */}
          <section className="bg-ivory py-12 lg:py-16">
            <div className="container-padding mx-auto max-w-content">
              <div className="mx-auto max-w-prose-wide">
                {isFOSAdvertisers && (
                  <div className="mb-12">
                    <h2 className="text-subhead mb-6 text-charcoal">The Homepage Copy</h2>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-body-lg font-semibold mb-3 text-charcoal">Advertising, Done with Intent</h3>
                        <p className="text-charcoal-600 leading-relaxed">Based in Thiruvananthapuram, FOS Advertisers has been shaping brands, building recall, and driving results since 2005. We are not loud for the sake of noise. We create communication that connects, converts, and lasts.</p>
                        <p className="mt-4 text-charcoal-600 leading-relaxed">From digital-first campaigns to full-scale brand stories across every medium, we help businesses speak clearly and confidently to the people who matter.</p>
                      </div>
                      <div>
                        <h3 className="text-body-lg font-semibold mb-3 text-charcoal">One Agency. Every Medium.</h3>
                        <p className="text-charcoal-600 leading-relaxed mb-4">We handle advertising in its entirety, so your brand stays consistent everywhere it appears.</p>
                        <ul className="space-y-3 text-charcoal-600">
                          <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span><strong>Digital Advertising and Social Media</strong> — Performance-driven campaigns that cut through clutter, spark engagement, and deliver measurable growth.</span></li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span><strong>Print, Outdoor and Electronic Media</strong> — Strategic visibility across newspapers, magazines, hoardings, radio, and television.</span></li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span><strong>Branding and Creative Communication</strong> — From logos to long-term brand language, we shape identities that feel sharp, relevant, and unmistakably yours.</span></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-body-lg font-semibold mb-3 text-charcoal">An In-House Production House</h3>
                        <p className="text-charcoal-600 leading-relaxed">FOS Advertisers runs its own full-fledged production house, producing high-quality TV commercials from concept to final cut. Over 30 national brands. Commercials produced in multiple Indian languages.</p>
                        <p className="mt-4 text-charcoal-600 leading-relaxed italic">When we create a film, we do not just showcase a product—we build belief.</p>
                      </div>
                      <div>
                        <h3 className="text-body-lg font-semibold mb-3 text-charcoal">Experience That Shows</h3>
                        <p className="text-charcoal-600 leading-relaxed">Nearly two decades in the industry have taught us one thing: trends change, but good ideas endure.</p>
                        <p className="mt-4 text-charcoal-600">That is why brands trust us. That is why campaigns work.</p>
                      </div>
                      <div className="border-l-4 border-gold pl-6 py-4">
                        <h3 className="text-body-lg font-semibold mb-2 text-charcoal">Let us Build Something Memorable</h3>
                        <p className="text-charcoal-600">Whether you are launching a brand, scaling up, or redefining how the world sees you, we are ready. Talk to FOS Advertisers today.</p>
                      </div>
                    </div>
                  </div>
                )}
                {!isFOSAdvertisers && (
                  <div className="prose-essay space-y-6">
                    {secondThird.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                      if (block._type === 'block') {
                        const text = block.children?.map((child) => child.text).join('') || '';
                        return <p key={block._key} className="text-charcoal-600 leading-relaxed">{text}</p>;
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Third Image - Small Rectangle */}
          <section className="bg-ivory py-8 lg:py-12">
            <div className="container-padding mx-auto max-w-content">
              <div className="flex justify-end max-w-prose-wide mx-auto">
                <ImagePlaceholder variant="small-rect" />
              </div>
            </div>
          </section>

          {/* Final Content */}
          <section className="bg-ivory py-12 lg:py-20">
            <div className="container-padding mx-auto max-w-content">
              <div className="mx-auto max-w-prose-wide">
                {!isFOSAdvertisers && lastThird.length > 0 && (
                  <div className="prose-essay space-y-6">
                    {lastThird.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                      if (block._type === 'block') {
                        const text = block.children?.map((child) => child.text).join('') || '';
                        return <p key={block._key} className="text-charcoal-600 leading-relaxed">{text}</p>;
                      }
                      return null;
                    })}
                  </div>
                )}
                {isFOSAdvertisers && bodyBlocks.length > 0 && (
                  <div>
                    <h2 className="text-subhead mb-6 text-charcoal">The Approach</h2>
                    <div className="prose-essay space-y-6">
                      {bodyBlocks.map((block: { _type: string; _key: string; children?: Array<{ text: string }> }) => {
                        if (block._type === 'block') {
                          const text = block.children?.map((child) => child.text).join('') || '';
                          return <p key={block._key} className="text-charcoal-600 leading-relaxed">{text}</p>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </article>
        {/* Navigation */}
        <nav className="border-t border-warm-200 bg-warm-50 py-12 lg:py-16">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                {prevProject ? (
                  <Link href={`/work/${prevProject.slug.current}`} className="group inline-block">
                    <span className="text-label mb-2 block text-charcoal-400">Previous</span>
                    <span className="inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors group-hover:text-gold">
                      <span className="transition-transform duration-300 group-hover:-translate-x-1"></span>
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
                      <span className="transition-transform duration-300 group-hover:translate-x-1"></span>
                    </span>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}