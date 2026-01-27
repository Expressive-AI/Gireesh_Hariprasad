/**
 * Sanity Client
 * 
 * Creates and exports a configured Sanity client for data fetching.
 * Uses next-sanity for optimal Next.js integration with caching support.
 */

import { createClient } from 'next-sanity';
import { sanityConfig } from './config';

/**
 * Main Sanity client for fetching published content
 * - Uses CDN in production for fast reads
 * - Caches responses appropriately
 */
export const client = createClient({
  ...sanityConfig,
  // Disable stega encoding for cleaner data
  stega: { enabled: false },
});

/**
 * Preview client for draft content
 * - Bypasses CDN to get latest changes
 * - Requires authentication token
 */
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  // Perspective for seeing draft content
  perspective: 'previewDrafts',
});

/**
 * Get appropriate client based on preview mode
 */
export function getClient(preview = false) {
  return preview ? previewClient : client;
}
