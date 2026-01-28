/**
 * TypeScript Type Definitions
 * 
 * Centralized type definitions for content
 * and component props throughout the application.
 */

// ============================================
// Base Types
// ============================================

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// ============================================
// Content Types
// ============================================

/**
 * Project/Case Study
 * Full content type for case study pages with long-form reading experience
 */
export interface Project {
  _id: string;
  title: string;
  slug: SanitySlug | string;
  excerpt?: string;
  category?: ProjectCategory;
  client?: string;
  year?: string;
  publishedAt?: string;
  featured?: boolean;
  thumbnail?: string;
  heroImage?: ImageWithAlt;
  introParagraph?: string;
  documents?: ProjectDocument[];
  testimonial?: ProjectTestimonial;
  results?: ProjectResult[];
}

export interface ImageWithAlt {
  url?: string;
  alt?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface ProjectDocument {
  _key: string;
  title: string;
  description?: string;
  externalUrl?: string;
}

export type ProjectCategory =
  | 'brand-voice'
  | 'website-copy'
  | 'email-campaign'
  | 'content-strategy'
  | 'product-copy'
  | 'editorial'
  | 'advertising'
  | 'website'
  | 'longform'
  | 'brand'
  | 'email'
  | 'social';

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

// ============================================
// Component Props Types
// ============================================

/**
 * Props for project card component
 */
export interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Props for section header component
 */
export interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

/**
 * Props for testimonial card component
 */
export interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    role?: string;
    company?: string;
  };
}

// ============================================
// Page Props Types
// ============================================

/**
 * Common page params for dynamic routes
 */
export interface PageParams {
  params: Promise<{ slug: string }>;
}

/**
 * Search params for filtering/sorting
 */
export interface SearchParams {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}
