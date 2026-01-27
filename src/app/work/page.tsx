/**
 * Work/Portfolio Page
 *
 * Displays all case studies in a filterable grid.
 * Links to individual case study pages.
 */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { caseStudiesData, categoryLabels, type LocalCaseStudy } from '@/sanity/data/caseStudies';

// Category-specific colors for visual distinction
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  advertising: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  website: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  longform: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  brand: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  email: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  social: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
};

// Placeholder images for each category
const categoryImages: Record<string, string> = {
  advertising: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=400&fit=crop',
  website: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  longform: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
  brand: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  email: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop',
  social: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
};

export default function WorkPage() {
  return (
    <>
      <Header />

      <main className="pt-32 lg:pt-40">
        {/* Page Header */}
        <section className="container-padding mx-auto max-w-content-lg pb-16 lg:pb-24">
          <span className="text-label mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-gold">
            Portfolio
          </span>
          <h1 className="text-display mb-6 max-w-[16ch]">
            Selected <em className="font-normal italic">Work</em>
          </h1>
          <p className="text-lead max-w-prose text-charcoal-500">
            A curated collection of copywriting projects spanning advertising, websites, 
            brand voice development, and long-form content.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="work-section relative overflow-hidden border-t border-warm-200 py-16 lg:py-24">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-warm-100 to-transparent" />
          </div>

          <div className="container-padding relative z-10 mx-auto max-w-content-lg">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {caseStudiesData.map((project: LocalCaseStudy, index: number) => {
                const colors = categoryColors[project.category] || categoryColors.brand;
                const imageUrl = categoryImages[project.category] || categoryImages.brand;
                const year = project.publishedAt ? new Date(project.publishedAt).getFullYear() : '2025';

                return (
                  <article
                    key={project.slug.current}
                    className="project-card group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={`/work/${project.slug.current}`} className="block">
                      {/* Image Container */}
                      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-warm-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute right-3 top-3">
                            <span className="inline-flex items-center gap-1 rounded-full bg-gold/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Category & Year */}
                      <div className="mb-3 flex items-center gap-3">
                        <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text} ${colors.border}`}>
                          {categoryLabels[project.category] || project.category}
                        </span>
                        <span className="text-meta text-charcoal-400">{year}</span>
                      </div>

                      {/* Project Title */}
                      <h2 className="text-heading mb-2 text-xl transition-colors duration-300 group-hover:text-gold">
                        {project.title}
                      </h2>

                      {/* Client */}
                      <p className="mb-3 text-body-sm font-medium text-charcoal-500">
                        {project.client}
                      </p>

                      {/* Short Description */}
                      <p className="mb-4 line-clamp-2 text-body-sm text-charcoal-500">
                        {project.excerpt}
                      </p>

                      {/* Read Case Study Link */}
                      <span className="inline-flex items-center gap-2 text-body-sm font-medium text-charcoal transition-colors group-hover:text-gold">
                        Read case study
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
