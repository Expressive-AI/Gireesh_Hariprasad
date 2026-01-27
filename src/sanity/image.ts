/**
 * Sanity Image Helper
 * 
 * Provides utilities for generating optimized image URLs from Sanity.
 * Uses @sanity/image-url for automatic format conversion and sizing.
 */

import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

// Sanity image source type
interface SanityImageAsset {
  _ref?: string;
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
}

type SanityImageSource = SanityImageAsset | string;

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

/**
 * Generate an optimized image URL from a Sanity image reference
 * 
 * @param source - Sanity image reference object
 * @returns Image URL builder for chaining options
 * 
 * @example
 * // Basic usage
 * urlFor(image).width(800).url()
 * 
 * // With aspect ratio
 * urlFor(image).width(400).height(300).fit('crop').url()
 */
export function urlFor(source: SanityImageSource | unknown) {
  return builder.image(source as SanityImageSource);
}

/**
 * Common image configurations for consistent sizing across the site
 */
export const imageConfigs = {
  // Hero images - full width, high quality
  hero: { width: 1920, height: 1080, quality: 90 },
  
  // Project thumbnails - card format
  thumbnail: { width: 800, height: 600, quality: 80 },
  
  // Profile/avatar images
  avatar: { width: 400, height: 400, quality: 85 },
  
  // Open Graph images for social sharing
  og: { width: 1200, height: 630, quality: 80 },
};
