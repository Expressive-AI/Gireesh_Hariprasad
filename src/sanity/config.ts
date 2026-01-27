/**
 * Sanity CMS Configuration
 * 
 * This file centralizes all Sanity-related configuration.
 * Environment variables should be set in .env.local for development
 * and in Vercel environment settings for production.
 */

// Sanity project configuration
export const sanityConfig = {
  // Your Sanity project ID - found in sanity.io/manage
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  
  // Dataset name - typically 'production' for live site
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  // API version - use current date for latest features
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  
  // Use CDN for faster reads in production
  // Set to false when using preview/draft mode
  useCdn: process.env.NODE_ENV === 'production',
};

// Validate required configuration
if (!sanityConfig.projectId) {
  console.warn(
    'Missing Sanity project ID. Set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment variables.'
  );
}
