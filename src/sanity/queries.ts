/**
 * GROQ Queries for Sanity CMS
 * 
 * Centralized query definitions for all Sanity data fetching.
 * Using GROQ (Graph-Relational Object Queries) for efficient data retrieval.
 * 
 * Query naming convention:
 * - get[Resource]Query: Fetch single item by slug/id
 * - getAll[Resources]Query: Fetch collection of items
 */

// ============================================
// Site Settings Queries
// ============================================

/**
 * Fetch global site settings (SEO defaults, contact info, etc.)
 */
export const getSiteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    "ogImage": ogImage.asset->url,
    email,
    socialLinks[] {
      platform,
      url
    }
  }
`;

// ============================================
// Project Queries
// ============================================

/**
 * Fetch all published projects for the work page
 * Ordered by date, newest first
 */
export const getAllProjectsQuery = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    client,
    publishedAt,
    "thumbnail": thumbnail.asset->url
  }
`;

/**
 * Fetch featured projects for homepage
 * Limited to 3 most recent featured items
 */
export const getFeaturedProjectsQuery = `
  *[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    category,
    client,
    "thumbnail": thumbnail.asset->url
  }
`;

/**
 * Fetch single project by slug with full case study content
 * Includes all fields needed for the essay-like reading experience
 */
export const getProjectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    client,
    year,
    publishedAt,
    introParagraph,
    "thumbnail": thumbnail.asset->url,
    "heroImage": heroImage {
      "url": asset->url,
      alt,
      "dimensions": asset->metadata.dimensions
    },
    content[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
      },
      _type == "divider" => {
        _type,
        _key,
        style
      },
      _type == "pullQuote" => {
        _type,
        _key,
        text,
        attribution
      }
    },
    documents[] {
      _key,
      title,
      description,
      "file": file {
        "url": asset->url
      },
      externalUrl
    },
    testimonial {
      quote,
      author,
      role
    },
    results[] {
      metric,
      value,
      description
    }
  }
`;

/**
 * Fetch case study metadata for SEO (lighter query)
 */
export const getProjectMetadataQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    excerpt,
    client,
    category,
    "thumbnail": thumbnail.asset->url,
    "heroImage": heroImage.asset->url
  }
`;

/**
 * Get all project slugs for static generation
 */
export const getAllProjectSlugsQuery = `
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ============================================
// About Page Queries
// ============================================

/**
 * Fetch about page content
 */
export const getAboutPageQuery = `
  *[_type == "aboutPage"][0] {
    headline,
    introduction,
    "portraitImage": portraitImage.asset->url,
    bio,
    philosophy,
    expertise[] {
      title,
      description
    },
    credentials[] {
      title,
      organization,
      year
    }
  }
`;

// ============================================
// Services Queries
// ============================================

/**
 * Fetch all services
 */
export const getAllServicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon
  }
`;

/**
 * Fetch single service with full details
 */
export const getServiceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    icon,
    process[] {
      step,
      title,
      description
    },
    deliverables[],
    idealFor[]
  }
`;

// ============================================
// Testimonials Queries
// ============================================

/**
 * Fetch all testimonials for display
 */
export const getAllTestimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    author,
    role,
    company,
    "avatar": avatar.asset->url
  }
`;

/**
 * Fetch featured testimonials for homepage
 */
export const getFeaturedTestimonialsQuery = `
  *[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...3] {
    _id,
    quote,
    author,
    role,
    company
  }
`;

// ============================================
// Case Study Queries
// ============================================

/**
 * Fetch all case studies for the work/portfolio page
 * Ordered by publish date, newest first
 */
export const getAllCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    excerpt,
    deliverables,
    featured,
    publishedAt,
    "heroImage": {
      "url": heroImage.asset->url,
      "alt": heroImage.alt
    }
  }
`;

/**
 * Fetch featured case studies for homepage
 * Limited to 3 most recent featured items
 */
export const getFeaturedCaseStudiesQuery = `
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    client,
    excerpt,
    deliverables,
    "heroImage": {
      "url": heroImage.asset->url,
      "alt": heroImage.alt
    }
  }
`;

/**
 * Fetch single case study by slug with full content
 */
export const getCaseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    excerpt,
    publishedAt,
    featured,
    seoDescription,
    "heroImage": {
      "url": heroImage.asset->url,
      "alt": heroImage.alt,
      "dimensions": heroImage.asset->metadata.dimensions
    },
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
      },
      _type == "pullQuote" => {
        _type,
        _key,
        text,
        attribution
      }
    },
    deliverables,
    attachments[] {
      _key,
      title,
      description,
      "file": {
        "url": file.asset->url,
        "originalFilename": file.asset->originalFilename,
        "size": file.asset->size
      }
    }
  }
`;

/**
 * Fetch case study metadata for SEO (lighter query)
 */
export const getCaseStudyMetadataQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    title,
    client,
    excerpt,
    seoDescription,
    "heroImage": heroImage.asset->url
  }
`;

/**
 * Get all case study slugs for static generation
 */
export const getAllCaseStudySlugsQuery = `
  *[_type == "caseStudy" && defined(slug.current)] {
    "slug": slug.current
  }
`;
