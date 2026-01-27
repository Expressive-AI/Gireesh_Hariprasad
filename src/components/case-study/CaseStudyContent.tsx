/**
 * Case Study Content
 * 
 * Renders the long-form portable text content with custom
 * components for images, dividers, and pull quotes.
 */

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import type { CaseStudyContent as ContentType } from '@/types';

interface CaseStudyContentProps {
  content: ContentType[];
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-0">{children}</p>
    ),
    h2: ({ children }) => (
      <h2>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a 
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.url) return null;
      
      return (
        <figure className="case-study-image">
          <div className="relative w-full overflow-hidden rounded-sm bg-warm-100">
            <Image
              src={value.url}
              alt={value.alt || ''}
              width={value.dimensions?.width || 1200}
              height={value.dimensions?.height || 800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-caption mt-4 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    divider: ({ value }) => {
      const style = value?.style || 'line';
      
      if (style === 'spacer') {
        return <div className="h-16 md:h-24" aria-hidden="true" />;
      }
      
      if (style === 'decorative') {
        return (
          <div className="case-study-divider decorative" aria-hidden="true">
            <span className="divider-ornament">✦</span>
          </div>
        );
      }
      
      return <hr className="case-study-divider" />;
    },
    pullQuote: ({ value }) => {
      if (!value?.text) return null;
      
      return (
        <aside className="case-study-pullquote">
          <blockquote className="text-pullquote">
            "{value.text}"
          </blockquote>
          {value.attribution && (
            <cite className="text-meta block mt-4 not-italic">
              — {value.attribution}
            </cite>
          )}
        </aside>
      );
    },
  },
};

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="prose-container">
        <div className="prose-essay">
          <PortableText value={content} components={components} />
        </div>
      </div>
    </section>
  );
}
