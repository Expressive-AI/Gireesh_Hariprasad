/**
 * Case Study Documents
 * 
 * Downloadable PDF or document links section.
 * Minimal styling that doesn't distract from the reading experience.
 */

import type { ProjectDocument } from '@/types';

interface CaseStudyDocumentsProps {
  documents: ProjectDocument[];
}

function DownloadIcon() {
  return (
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
      />
    </svg>
  );
}

function ExternalIcon() {
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
      />
    </svg>
  );
}

export function CaseStudyDocuments({ documents }: CaseStudyDocumentsProps) {
  if (!documents || documents.length === 0) return null;

  return (
    <section className="pb-16 md:pb-24">
      <div className="prose-container">
        {/* Soft divider */}
        <hr className="case-study-divider mb-12 md:mb-16" />
        
        <div className="space-y-6">
          <h3 className="text-label mb-8">Related Documents</h3>
          
          <ul className="space-y-4">
            {documents.map((doc) => {
              const url = doc.file?.asset?.url || doc.externalUrl;
              const isExternal = !!doc.externalUrl;
              
              if (!url) return null;
              
              return (
                <li key={doc._key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 -mx-4 rounded-sm transition-colors hover:bg-warm-50"
                    download={!isExternal}
                  >
                    <span className="flex-shrink-0 text-warm-400 group-hover:text-gold-600 transition-colors">
                      {isExternal ? <ExternalIcon /> : <DownloadIcon />}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-body font-medium text-charcoal group-hover:text-gold-700 transition-colors">
                        {doc.title}
                      </span>
                      {doc.description && (
                        <span className="block text-body-sm text-warm-500 mt-1">
                          {doc.description}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
