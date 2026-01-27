/**
 * Typography Examples - Premium Copywriting Portfolio
 *
 * This file demonstrates the typography and spacing system.
 * Copy these patterns for consistent styling across the site.
 */

import React from 'react';

/**
 * TYPOGRAPHY REFERENCE
 *
 * HEADLINE CLASSES (Cormorant Garamond - font-serif):
 * - text-hero: Maximum impact, hero sections
 * - text-display: Strong section headers
 * - text-title: Article/page titles
 * - text-heading: Card titles, subsections
 * - text-subhead: Secondary headlines
 *
 * BODY CLASSES (Lora - font-body):
 * - text-lead: Opening statements, featured paragraphs
 * - text-body-lg: Featured content
 * - text-body: Standard content
 * - text-body-sm: Secondary content
 *
 * META CLASSES (Inter - font-sans):
 * - text-nav: Navigation links
 * - text-meta: Dates, categories
 * - text-label: Small labels, tags
 * - text-caption: Image captions
 *
 * SPECIAL:
 * - text-accent: Gold accent color
 * - text-emphasis: Serif italic
 * - text-pullquote: Large quotes
 *
 * PROSE CONTAINER:
 * - prose-premium: Long-form content with proper rhythm
 *
 * SPACING CLASSES:
 * - section-padding: Standard section (clamp 3rem to 6.5rem)
 * - section-padding-lg: Large sections (clamp 4rem to 7.5rem)
 * - section-padding-xl: Hero sections (clamp 5rem to 10rem)
 * - container-padding: Horizontal padding (clamp 1.5rem to 4rem)
 * - content-container: Max-width 1140px with padding
 * - prose-container: Max-width 68ch for reading
 */

// Example: Hero Section
export function HeroExample() {
  return (
    <section className="section-padding-xl container-padding">
      <div className="content-container">
        <span className="text-label mb-6 block text-gold">
          Copywriter & Brand Strategist
        </span>
        <h1 className="text-hero mb-8 max-w-[18ch]">
          Words that move
          <br />
          people to act.
        </h1>
        <p className="text-lead max-w-prose text-charcoal-600">
          I help ambitious brands find their voice and tell stories that
          resonate. From startups to established names, my words drive results.
        </p>
      </div>
    </section>
  );
}

// Example: Content Section
export function ContentExample() {
  return (
    <section className="section-padding container-padding">
      <div className="content-container">
        <span className="text-meta mb-4 block">Selected Work</span>
        <h2 className="text-title mb-12">Recent Projects</h2>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Project Card Example */}
          <article className="group">
            <span className="text-label mb-3 block text-gold">Case Study</span>
            <h3 className="text-heading mb-4 transition-colors group-hover:text-charcoal-600">
              Brand Voice Development
            </h3>
            <p className="text-body text-charcoal-500">
              Complete brand voice guide and messaging framework for a growing
              fintech startup.
            </p>
            <span className="text-meta mt-4 block">2024</span>
          </article>
        </div>
      </div>
    </section>
  );
}

// Example: Prose Article
export function ProseExample() {
  return (
    <section className="section-padding-lg bg-ivory-200 container-padding">
      <div className="prose-container">
        <span className="text-meta mb-4 block">About</span>
        <h2 className="text-title mb-8">The craft behind the copy</h2>

        <article className="prose-premium">
          <p>
            With over a decade in editorial and brand copywriting, I&apos;ve
            learned that the best work comes from genuine curiosity and deep
            collaboration.
          </p>

          <p>
            Every brand has a story worth telling. My job is to find it, refine
            it, and share it in a way that moves people to action.
          </p>

          <h3>Clarity Over Cleverness</h3>

          <p>
            While wit has its place, clarity always comes first. The best copy
            is invisible—readers absorb the message without noticing the craft
            behind it.
          </p>

          <blockquote>
            &quot;Simple doesn&apos;t mean simplistic. It means refined,
            distilled, perfected.&quot;
          </blockquote>

          <p>
            This philosophy guides every project, from taglines to long-form
            articles. The result? Copy that works as hard as you do.
          </p>
        </article>
      </div>
    </section>
  );
}

// Example: Navigation
export function NavigationExample() {
  return (
    <nav className="flex gap-8">
      <a
        href="/work"
        className="text-nav transition-colors hover:text-charcoal"
      >
        Work
      </a>
      <a
        href="/about"
        className="text-nav transition-colors hover:text-charcoal"
      >
        About
      </a>
      <a
        href="/contact"
        className="text-nav transition-colors hover:text-charcoal"
      >
        Contact
      </a>
    </nav>
  );
}

// Example: Pull Quote
export function PullQuoteExample() {
  return (
    <blockquote className="text-pullquote border-l-2 border-gold pl-6">
      &quot;Working with Sarah transformed how we communicate with our audience.
      Our conversion rate doubled.&quot;
    </blockquote>
  );
}

// Full page composition example
export default function TypographyShowcase() {
  return (
    <>
      <HeroExample />
      <hr className="divider-gold mx-auto max-w-content" />
      <ContentExample />
      <ProseExample />
    </>
  );
}
