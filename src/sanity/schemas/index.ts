/**
 * Sanity Schema Index
 * 
 * Export all schemas for Sanity Studio configuration.
 * Import these in your sanity.config.ts to register them.
 */

export { projectSchema } from './project';
export { caseStudySchema } from './caseStudy';
export { siteSettingsSchema } from './siteSettings';

// Schema types array for Sanity Studio
import { projectSchema } from './project';
import { caseStudySchema } from './caseStudy';
import { siteSettingsSchema } from './siteSettings';

export const schemaTypes = [
  projectSchema,
  caseStudySchema,
  siteSettingsSchema,
];
