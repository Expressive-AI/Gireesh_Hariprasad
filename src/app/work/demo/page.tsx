/**
 * Case Study Demo Page
 * 
 * Static demo page showing the case study template
 * with sample content for development preview.
 */

import { Header, Footer } from '@/components/layout';
import {
  CaseStudyHeader,
  CaseStudyIntro,
  CaseStudyContent,
  CaseStudyDocuments,
  CaseStudyTestimonial,
  CaseStudyResults,
  CaseStudyNavigation,
} from '@/components/case-study';
import type { Project, CaseStudyContent as ContentType, ProjectDocument, ProjectResult } from '@/types';
import type { PortableTextBlock } from '@portabletext/types';

// Sample case study data for preview
const sampleProject: Project = {
  _id: 'demo-case-study',
  title: 'Redefining the Voice of Wellness',
  slug: { _type: 'slug', current: 'demo-case-study' },
  client: 'A boutique wellness brand seeking clarity and connection',
  category: 'brand-voice',
  year: '2024',
  excerpt: 'How we crafted a brand voice that speaks to the soul of modern wellness seekers.',
  introParagraph: 'When Solace Botanics approached us, they had a beautiful product line but struggled to communicate what made them different. Their audience—women in their 30s and 40s seeking mindful self-care—needed more than marketing speak. They needed a voice that felt like a trusted friend, one who understood the chaos of modern life and the quiet rebellion of choosing stillness.',
};

// Sample portable text content
const sampleContent: ContentType[] = [
  {
    _type: 'block',
    _key: '1',
    style: 'h2',
    children: [{ _type: 'span', text: 'Understanding the Challenge' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '2',
    style: 'normal',
    children: [{ _type: 'span', text: 'The wellness industry is crowded with brands promising transformation, enlightenment, and the perfect morning routine. Solace Botanics didn\'t want to add to the noise. They wanted to cut through it.' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '3',
    style: 'normal',
    children: [{ _type: 'span', text: 'Our first step was extensive research: interviews with existing customers, analysis of competitor messaging, and deep conversations with the founders about their vision. What emerged was a brand that wasn\'t about perfection—it was about permission. Permission to slow down. Permission to prioritize yourself without guilt.' }],
  } as PortableTextBlock,
  {
    _type: 'divider',
    _key: '4',
    style: 'line',
  },
  {
    _type: 'block',
    _key: '5',
    style: 'h2',
    children: [{ _type: 'span', text: 'Crafting the Voice' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '6',
    style: 'normal',
    children: [{ _type: 'span', text: 'We developed a voice that was warm but not saccharine, knowledgeable but never preachy. Every piece of copy was written as if speaking to a friend over tea—someone who deserves honesty, not hype.' }],
  } as PortableTextBlock,
  {
    _type: 'pullQuote',
    _key: '7',
    text: 'The best brand voice doesn\'t sound like a brand at all. It sounds like the conversation you wish you were having.',
    attribution: 'From our creative brief',
  },
  {
    _type: 'block',
    _key: '8',
    style: 'normal',
    children: [{ _type: 'span', text: 'We rewrote every touchpoint: website copy, product descriptions, email sequences, and social media templates. Each piece was designed to feel cohesive yet natural, like different chapters of the same story.' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '9',
    style: 'h3',
    children: [{ _type: 'span', text: 'The Key Principles' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '10',
    style: 'normal',
    children: [{ _type: 'span', text: 'Three core principles guided every word we wrote: authenticity over aspiration, specificity over generality, and connection over conversion. These weren\'t just guidelines—they were a philosophy that transformed how the brand communicated.' }],
  } as PortableTextBlock,
  {
    _type: 'divider',
    _key: '11',
    style: 'decorative',
  },
  {
    _type: 'block',
    _key: '12',
    style: 'h2',
    children: [{ _type: 'span', text: 'The Impact' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '13',
    style: 'normal',
    children: [{ _type: 'span', text: 'Within three months of launching the new voice, Solace Botanics saw measurable changes. Email open rates increased by 47%. Social engagement doubled. But more importantly, the brand started receiving messages from customers saying they felt seen and understood.' }],
  } as PortableTextBlock,
  {
    _type: 'block',
    _key: '14',
    style: 'blockquote',
    children: [{ _type: 'span', text: 'For the first time, our brand sounds like us. Reading our own website feels like coming home.' }],
  } as PortableTextBlock,
];

const sampleDocuments: ProjectDocument[] = [
  {
    _key: 'doc1',
    title: 'Brand Voice Guidelines',
    description: 'Complete voice and tone documentation for internal teams',
    externalUrl: '#',
  },
  {
    _key: 'doc2',
    title: 'Messaging Framework',
    description: 'Core messages, value propositions, and audience personas',
    externalUrl: '#',
  },
];

const sampleResults: ProjectResult[] = [
  {
    metric: 'Email Open Rate',
    value: '+47%',
    description: 'Increase in engagement within 90 days',
  },
  {
    metric: 'Social Engagement',
    value: '2×',
    description: 'Comments and shares doubled',
  },
  {
    metric: 'Customer Sentiment',
    value: '94%',
    description: 'Positive brand perception score',
  },
];

const sampleTestimonial = {
  quote: 'Working with Sarah transformed not just our copy, but how we think about connecting with our customers. She didn\'t just give us words—she gave us a voice we\'re proud of.',
  author: 'Elena Marsh',
  role: 'Founder, Solace Botanics',
};

export const metadata = {
  title: 'Case Study Demo | Redefining the Voice of Wellness',
  description: 'A demonstration of the case study page template with sample content.',
};

export default function CaseStudyDemoPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <article className="case-study">
          {/* Header with title, client, meta */}
          <CaseStudyHeader project={sampleProject} />

          {/* Large intro paragraph */}
          {sampleProject.introParagraph && (
            <CaseStudyIntro introParagraph={sampleProject.introParagraph} />
          )}

          {/* Soft divider */}
          <div className="prose-container">
            <hr className="case-study-divider" />
          </div>

          {/* Main essay content */}
          <CaseStudyContent content={sampleContent} />

          {/* Results/metrics */}
          <CaseStudyResults results={sampleResults} />

          {/* Downloadable documents */}
          <CaseStudyDocuments documents={sampleDocuments} />
        </article>

        {/* Client testimonial */}
        <CaseStudyTestimonial testimonial={sampleTestimonial} />

        {/* Back navigation */}
        <CaseStudyNavigation backLabel="Back to Work" backHref="/" />
      </main>

      <Footer />
    </>
  );
}
