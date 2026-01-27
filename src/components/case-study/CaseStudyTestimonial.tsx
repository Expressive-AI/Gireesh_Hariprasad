/**
 * Case Study Testimonial
 * 
 * Client testimonial block with elegant quote styling.
 * Integrated softly into the reading flow.
 */

import type { ProjectTestimonial } from '@/types';

interface CaseStudyTestimonialProps {
  testimonial: ProjectTestimonial;
}

export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (!testimonial?.quote) return null;

  return (
    <section className="section-padding bg-warm-50/50">
      <div className="prose-container">
        <figure className="text-center max-w-3xl mx-auto">
          <blockquote className="text-pullquote mb-8">
            "{testimonial.quote}"
          </blockquote>
          <figcaption>
            <cite className="not-italic">
              <span className="block text-body font-medium text-charcoal">
                {testimonial.author}
              </span>
              {testimonial.role && (
                <span className="block text-meta text-warm-500 mt-1">
                  {testimonial.role}
                </span>
              )}
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
