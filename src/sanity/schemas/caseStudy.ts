/**
 * Sanity Schema: Case Study
 * 
 * Content type for copywriting portfolio case studies.
 * Designed for a non-technical copywriter with intuitive editing.
 * 
 * Features:
 * - Clean, organized editor UI with field groups
 * - Required field validation with helpful messages
 * - Image alt text enforcement for accessibility
 * - Rich text body with carefully curated formatting options
 */

export const caseStudySchema = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  
  // ============================================
  // Field Groups for Clean UI
  // ============================================
  groups: [
    {
      name: 'content',
      title: '✍️ Content',
      default: true,
    },
    {
      name: 'media',
      title: '🖼️ Media & Files',
    },
    {
      name: 'meta',
      title: '⚙️ Settings',
    },
  ],

  // ============================================
  // Fields
  // ============================================
  fields: [
    // --- Content Group ---
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'content',
      description: 'The main headline for this case study',
      validation: (Rule: any) =>
        Rule.required()
          .min(5)
          .max(100)
          .error('Please add a title (5-100 characters)'),
    },

    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'The URL path for this case study (auto-generated from title)',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
      validation: (Rule: any) =>
        Rule.required().error('Please generate a URL slug'),
    },

    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      group: 'content',
      description: 'The client or company name (can be anonymized, e.g., "A Wellness Brand")',
      validation: (Rule: any) =>
        Rule.required()
          .min(2)
          .max(80)
          .error('Please add the client name'),
    },

    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'A brief summary shown on cards and in search results (150-200 characters ideal)',
      validation: (Rule: any) =>
        Rule.required()
          .min(50)
          .max(300)
          .error('Please add an excerpt (50-300 characters)'),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      description: 'What type of work is this?',
      options: {
        list: [
          { title: 'Advertising', value: 'advertising' },
          { title: 'Website', value: 'website' },
          { title: 'Long-form Content', value: 'longform' },
          { title: 'Brand', value: 'brand' },
          { title: 'Email', value: 'email' },
          { title: 'Social Media', value: 'social' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required().error('Please select a category'),
    },

    {
      name: 'body',
      title: 'Full Story',
      type: 'array',
      group: 'content',
      description: 'Tell the story of this project—the challenge, your approach, and the results',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto'],
                      }),
                  },
                  {
                    name: 'openInNewTab',
                    type: 'boolean',
                    title: 'Open in new tab?',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        // Inline images within the body
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Describe this image for accessibility (required)',
              validation: (Rule: any) =>
                Rule.required().error('Alt text is required for accessibility'),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption displayed below the image',
            },
          ],
        },
        // Pull quote for emphasis
        {
          type: 'object',
          name: 'pullQuote',
          title: 'Pull Quote',
          fields: [
            {
              name: 'text',
              type: 'text',
              title: 'Quote Text',
              rows: 3,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
              description: 'Who said this? (optional)',
            },
          ],
          preview: {
            select: { text: 'text' },
            prepare(selection: Record<string, any>) {
              const { text } = selection;
              return {
                title: text ? `"${text.slice(0, 50)}..."` : 'Pull Quote',
                subtitle: 'Pull Quote',
              };
            },
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.required().error('Please add the case study content'),
    },

    {
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      group: 'content',
      description: 'What did you deliver? (e.g., "Website Copy", "Email Sequence", "Brand Guidelines")',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: any) =>
        Rule.min(1).error('Please add at least one deliverable'),
    },

    // --- Media Group ---
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'media',
      description: 'The main image for this case study (1200×800px recommended)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe this image for screen readers and SEO',
          validation: (Rule: any) =>
            Rule.required().error('Please add alt text for accessibility'),
        },
      ],
      validation: (Rule: any) =>
        Rule.required().error('Please add a hero image'),
    },

    {
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      group: 'media',
      description: 'PDFs, documents, or other files readers can download',
      of: [
        {
          type: 'object',
          name: 'attachment',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'File Name',
              description: 'A descriptive name (e.g., "Brand Voice Guidelines PDF")',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              description: 'Brief description of what this file contains',
            },
            {
              name: 'file',
              type: 'file',
              title: 'File',
              options: {
                accept: '.pdf,.doc,.docx,.txt,.rtf,.ppt,.pptx,.xls,.xlsx',
              },
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
            prepare(selection: Record<string, any>) {
              const { title, description } = selection;
              return {
                title: title || 'Untitled File',
                subtitle: description || 'Attachment',
              };
            },
          },
        },
      ],
    },

    // --- Meta Group ---
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      group: 'meta',
      description: 'When should this case study go live?',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) =>
        Rule.required().error('Please set a publish date'),
    },

    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'meta',
      description: 'Show this case study prominently on the homepage?',
      initialValue: false,
    },

    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'meta',
      rows: 2,
      description: 'Custom meta description for search engines (leave blank to use excerpt)',
      validation: (Rule: any) =>
        Rule.max(160).warning('Keep under 160 characters for best results'),
    },
  ],

  // ============================================
  // Preview Configuration
  // ============================================
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'heroImage',
      featured: 'featured',
      publishedAt: 'publishedAt',
    },
    prepare(selection: Record<string, any>) {
      const { title, client, media, featured, publishedAt } = selection;
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })
        : 'No date';

      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: `${client} · ${date}`,
        media,
      };
    },
  },

  // ============================================
  // Orderings
  // ============================================
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
};
