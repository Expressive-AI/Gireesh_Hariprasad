/**
 * Case Study Header
 * 
 * The opening section of a case study with project title,
 * client descriptor, and category meta.
 */

import type { Project } from '@/types';

interface CaseStudyHeaderProps {
  project: Project;
}

const categoryLabels: Record<string, string> = {
  'brand-voice': 'Brand Voice',
  'website-copy': 'Website Copy',
  'email-campaign': 'Email Campaign',
  'content-strategy': 'Content Strategy',
  'product-copy': 'Product Copy',
  'editorial': 'Editorial',
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const categoryLabel = project.category 
    ? categoryLabels[project.category] || project.category 
    : null;

  return (
    <header className="section-padding-lg">
      <div className="prose-container">
        {/* Meta line */}
        {(categoryLabel || project.year) && (
          <div className="flex items-center gap-3 mb-8">
            {categoryLabel && (
              <span className="text-label text-gold-600">{categoryLabel}</span>
            )}
            {categoryLabel && project.year && (
              <span className="text-warm-400">·</span>
            )}
            {project.year && (
              <span className="text-label">{project.year}</span>
            )}
          </div>
        )}

        {/* Title */}
        <h1 className="text-display mb-6">
          {project.title}
        </h1>

        {/* Client descriptor */}
        {project.client && (
          <p className="text-subhead text-warm-500 font-normal">
            {project.client}
          </p>
        )}
      </div>
    </header>
  );
}
