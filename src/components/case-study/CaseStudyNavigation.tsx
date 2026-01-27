/**
 * Case Study Navigation
 * 
 * Navigation back to work page and optional previous/next links.
 * Minimal footer for the case study page.
 */

import Link from 'next/link';

interface CaseStudyNavigationProps {
  backLabel?: string;
  backHref?: string;
}

function ArrowLeftIcon() {
  return (
    <svg 
      className="w-4 h-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
      />
    </svg>
  );
}

export function CaseStudyNavigation({ 
  backLabel = 'All Work', 
  backHref = '/work' 
}: CaseStudyNavigationProps) {
  return (
    <nav className="section-padding border-t border-warm-200">
      <div className="prose-container">
        <Link 
          href={backHref}
          className="group inline-flex items-center gap-3 text-nav text-warm-600 hover:text-charcoal transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            <ArrowLeftIcon />
          </span>
          <span>{backLabel}</span>
        </Link>
      </div>
    </nav>
  );
}
