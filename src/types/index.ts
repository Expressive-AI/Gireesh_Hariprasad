/**
 * TypeScript Type Definitions
 * 
 * Centralized type definitions for Sanity CMS content
 * and component props throughout the application.
 */

import type { PortableTextBlock } from '@portabletext/types';

// ============================================
// Sanity Base Types
// ============================================

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

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
  heroImage?: SanityImageWithAlt;
  introParagraph?: string;
  content?: CaseStudyContent[];
  documents?: ProjectDocument[];
  testimonial?: ProjectTestimonial;
  results?: ProjectResult[];
}

export interface SanityImageWithAlt {
  asset?: {
    _ref: string;
    url?: string;
  };
  alt?: string;
  url?: string;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
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
  file?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  externalUrl?: string;
}

export type CaseStudyContent = 
  | PortableTextBlock 
  | CaseStudyImage 
  | CaseStudyDivider 
  | CaseStudyPullQuote;

export interface CaseStudyImage {
  _type: 'image';
  _key: string;
  asset: {
    _ref: string;
    url?: string;
  };
  caption?: string;
  alt?: string;
  url?: string;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
}

export interface CaseStudyDivider {
  _type: 'divider';
  _key: string;
  style: 'line' | 'decorative' | 'spacer';
}

export interface CaseStudyPullQuote {
  _type: 'pullQuote';
  _key: string;
  text: string;
  attribution?: string;
}

export type ProjectCategory =
  | 'brand-voice'
  | 'website-copy'
  | 'email-campaign'
  | 'content-strategy'
  | 'product-copy'
  | 'editorial';

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

// ============================================
// Case Study Type (New Schema)
// ============================================

/**
 * Case Study content type
 * Designed for copywriting portfolio showcases
 */
export interface CaseStudy {
  _id: string;
  title: string;
  slug: SanitySlug | string;
  client: string;
  category?: CaseStudyCategory;
  excerpt: string;
  publishedAt: string;
  featured: boolean;
  seoDescription?: string;
  heroImage: {
    url: string;
    alt: string;
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
  body: CaseStudyBodyContent[];
  deliverables: string[];
  attachments?: CaseStudyAttachment[];
}

export type CaseStudyCategory =
  | 'advertising'
  | 'website'
  | 'longform'
  | 'brand'
  | 'email'
  | 'social';

export type CaseStudyBodyContent =
  | PortableTextBlock
  | CaseStudyImage
  | CaseStudyPullQuote;

export interface CaseStudyAttachment {
  _key: string;
  title: string;
  description?: string;
  file: {
    url: string;
    originalFilename?: string;
    size?: number;
  };
}

/**
 * Service offering
 */
export interface Service {
  _id: string;
  title: string;
  slug: SanitySlug | string;
  shortDescription: string;
  fullDescription?: PortableTextBlock[];
  icon?: string;
  process?: ProcessStep[];
  deliverables?: string[];
  idealFor?: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

/**
 * Client testimonial
 */
export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  featured?: boolean;
}

/**
 * About page content
 */
export interface AboutPage {
  headline: string;
  introduction: string;
  portraitImage?: string;
  bio: PortableTextBlock[];
  philosophy?: string;
  expertise?: Expertise[];
  credentials?: Credential[];
}

export interface Expertise {
  title: string;
  description: string;
}

export interface Credential {
  title: string;
  organization: string;
  year?: string;
}

/**
 * Site settings
 */
export interface SiteSettings {
  title: string;
  description?: string;
  ogImage?: string;
  email?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram';
  url: string;
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
  testimonial: Testimonial;
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
