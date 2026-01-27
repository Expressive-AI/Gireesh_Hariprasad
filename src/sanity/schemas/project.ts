/**
 * Sanity Schema: Project / Case Study
 * 
 * Represents a portfolio project/case study with full essay-like content.
 * Designed for long-form reading experience with supporting media.
 */

export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'details', title: 'Project Details', default: true },
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media & Documents' },
    { name: 'results', title: 'Results & Testimonials' },
  ],
  fields: [
    // ============================================
    // Basic Details
    // ============================================
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'details',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client Name / Descriptor',
      type: 'string',
      group: 'details',
      description: 'e.g., "A boutique wellness brand" or "Fintech Startup"',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Brand Voice', value: 'brand-voice' },
          { title: 'Website Copy', value: 'website-copy' },
          { title: 'Email Campaign', value: 'email-campaign' },
          { title: 'Content Strategy', value: 'content-strategy' },
          { title: 'Product Copy', value: 'product-copy' },
          { title: 'Editorial', value: 'editorial' },
        ],
      },
    },
    {
      name: 'year',
      title: 'Project Year',
      type: 'string',
      group: 'details',
      description: 'e.g., "2024" or "2023–2024"',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'details',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'details',
      description: 'Show this project on the homepage',
      initialValue: false,
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'details',
      description: 'Brief description for project cards (150-200 characters)',
      validation: (Rule: any) => Rule.max(250),
    },

    // ============================================
    // Content
    // ============================================
    {
      name: 'introParagraph',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 5,
      group: 'content',
      description: 'Large, readable opening paragraph that sets the scene (2-4 sentences)',
    },
    {
      name: 'content',
      title: 'Long-form Content',
      type: 'array',
      group: 'content',
      description: 'The main essay content with images and dividers',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
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
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional image caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Important for accessibility',
            },
          ],
        },
        {
          type: 'object',
          name: 'divider',
          title: 'Section Divider',
          fields: [
            {
              name: 'style',
              type: 'string',
              title: 'Divider Style',
              options: {
                list: [
                  { title: 'Simple Line', value: 'line' },
                  { title: 'Decorative', value: 'decorative' },
                  { title: 'Spacer Only', value: 'spacer' },
                ],
              },
              initialValue: 'line',
            },
          ],
          preview: {
            prepare() {
              return { title: '— Section Divider —' };
            },
          },
        },
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
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution (optional)',
            },
          ],
          preview: {
            select: { text: 'text' },
            prepare({ text }: { text: string }) {
              return {
                title: text ? `"${text.substring(0, 50)}..."` : 'Pull Quote',
              };
            },
          },
        },
      ],
    },

    // ============================================
    // Media & Documents
    // ============================================
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      group: 'media',
      description: 'Cover image for project cards',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'media',
      description: 'Optional large header image for the case study page',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'documents',
      title: 'Downloadable Documents',
      type: 'array',
      group: 'media',
      description: 'PDFs, presentations, or other downloadable files',
      of: [
        {
          type: 'object',
          name: 'document',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Document Title',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              description: 'Brief description of the document',
            },
            {
              name: 'file',
              type: 'file',
              title: 'File',
              options: {
                accept: '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx',
              },
            },
            {
              name: 'externalUrl',
              type: 'url',
              title: 'External URL',
              description: 'Or link to an external document (Google Docs, etc.)',
            },
          ],
          preview: {
            select: { title: 'title', description: 'description' },
            prepare({ title, description }: { title: string; description: string }) {
              return {
                title: title || 'Untitled Document',
                subtitle: description,
              };
            },
          },
        },
      ],
    },

    // ============================================
    // Results & Testimonials
    // ============================================
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      group: 'results',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 4 },
        { name: 'author', title: 'Author', type: 'string' },
        { name: 'role', title: 'Role / Company', type: 'string' },
      ],
    },
    {
      name: 'results',
      title: 'Results & Metrics',
      type: 'array',
      group: 'results',
      description: 'Quantifiable outcomes from the project',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text' },
        { name: 'author', title: 'Author', type: 'string' },
        { name: 'role', title: 'Role', type: 'string' },
      ],
    },
    {
      name: 'results',
      title: 'Results & Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'thumbnail',
    },
    prepare({ title, client, media }: { title: string; client: string; media: unknown }) {
      return {
        title,
        subtitle: client,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
};
