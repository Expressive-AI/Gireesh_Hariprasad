import type { MetadataRoute } from 'next';

/**
 * Dynamic XML Sitemap for gireeshhariprasad.com
 * 
 * Generates a comprehensive sitemap including:
 * - All static pages (home, about, work, skills, contact)
 * - All case study pages dynamically
 * 
 * Priority Guidelines:
 * - Homepage: 1.0 (most important)
 * - Work gallery: 0.9 (portfolio showcase)
 * - About/Contact: 0.8 (key conversion pages)
 * - Skills: 0.7 (supporting page)
 * - Case studies: 0.6 (individual content)
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gireeshhariprasad.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static pages with SEO-optimized priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Case study pages
  const caseStudies = [
    'zamosa-pet-grooming',
    'antler-play-gallery-cafe',
    'philips-powerpro-vacuum-cleaner',
    'merryba-homepage',
    'fos-advertisers-homepage',
    'chilampu-indian-dance-academy',
  ];

  const caseStudyPages = caseStudies.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages];
}
