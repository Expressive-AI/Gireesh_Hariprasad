/**
 * Project Card Component
 * 
 * Card display for portfolio projects.
 * Emphasizes the written content with minimal visual distraction.
 */

import Link from 'next/link';
import type { ProjectCardProps } from '@/types';

/**
 * Format category slug to readable label
 */
function formatCategory(category?: string): string {
  if (!category) return '';
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const slug = typeof project.slug === 'string' 
    ? project.slug 
    : project.slug?.current;

  return (
    <article 
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link href={`/work/${slug}`} className="block">
        {/* Card Content */}
        <div className="py-8 border-t border-[var(--color-border)]">
          {/* Meta Row */}
          <div className="flex items-center gap-4 mb-4">
            {project.category && (
              <span className="small-caps">
                {formatCategory(project.category)}
              </span>
            )}
            {project.client && (
              <>
                <span className="text-[var(--color-border)]">·</span>
                <span className="text-sm text-[var(--color-ink-muted)]">
                  {project.client}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="font-editorial text-2xl md:text-3xl text-[var(--color-ink)] group-hover:text-[var(--color-ink-light)] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Excerpt */}
          {project.excerpt && (
            <p className="mt-4 text-[var(--color-ink-light)] leading-relaxed max-w-2xl">
              {project.excerpt}
            </p>
          )}

          {/* View Link */}
          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors">
            <span>View Project</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
