/**
 * Selected Work Section Component
 *
 * Displays the 6 case studies in a responsive grid.
 * Each card is clickable and links to the detailed case study page.
 * Uses local data from caseStudies.ts
 */

import Link from 'next/link';
import { caseStudiesData, categoryLabels, type LocalCaseStudy } from '@/data/caseStudies';

export default function SelectedWorkSection() {
  return (
    <section id="work" className="work-section relative overflow-hidden py-24 lg:py-32">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-warm-100/50 to-transparent" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full border border-warm-200/30" />
      </div>

      <div className="container-padding relative z-10 mx-auto max-w-content-lg">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text-label mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-gold">
            Portfolio
          </span>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-title mb-3">Selected Work</h2>
              <p className="text-body text-charcoal-500">
                A collection of strategic copywriting projects across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Project Grid - 2 columns on tablet, 3 on desktop */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {caseStudiesData.map((project, index) => (
            <ProjectCard 
              key={project.slug.current} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Project Card Component
 *
 * Clean card with category badge, title, description.
 * Links to the full case study page.
 */

// Category-specific colors for visual distinction
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  advertising: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  website: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  longform: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  brand: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  email: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  social: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
};

// Project-specific images from local /images folder
const projectImages: Record<string, string> = {
  'zamosa-pet-grooming': '/images/zamosa/zamoa_pet-1.jpg',
  'antler-play-gallery-cafe': '/images/antler/antler-1.jpg',
  'philips-powerpro-vacuum-cleaner': '/images/philips/philips-1.webp',
  'merryba-homepage': '/images/merryba/merryba-1.jpg',
  'fos-advertisers-homepage': '/images/fos-advert/fos-1.jpg',
  'chilampu-indian-dance-academy': '/images/chilampu/Bharathanatyam-1.jpg',
};

function ProjectCard({ project, index }: { project: LocalCaseStudy; index: number }) {
  const colors = categoryColors[project.category] || categoryColors.brand;
  const imageUrl = projectImages[project.slug.current] || '/images/zamosa/zamoa_pet-1.jpg';
  const year = project.publishedAt ? new Date(project.publishedAt).getFullYear() : '2025';

  return (
    <article 
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
        <h3 className="text-heading mb-2 text-xl transition-colors duration-300 group-hover:text-gold">
          {project.title}
        </h3>

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
}
