/**
 * Case Study Results
 * 
 * Displays project outcomes and metrics in a clean,
 * understated layout that supports the narrative.
 */

import type { ProjectResult } from '@/types';

interface CaseStudyResultsProps {
  results: ProjectResult[];
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="pb-16 md:pb-24">
      <div className="prose-container">
        {/* Soft divider */}
        <hr className="case-study-divider mb-12 md:mb-16" />
        
        <h3 className="text-label mb-10">The Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {results.map((result, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-display text-gold-600 mb-2">
                {result.value}
              </div>
              <div className="text-body font-medium text-charcoal mb-1">
                {result.metric}
              </div>
              {result.description && (
                <div className="text-body-sm text-warm-500">
                  {result.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
