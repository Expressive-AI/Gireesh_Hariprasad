/**
 * About Page
 *
 * Personal story and approach to copywriting.
 * Warm, professional, authentic.
 */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-padding mx-auto max-w-content-lg pb-16 lg:pb-24">
          <span className="text-label mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-gold">
            About
          </span>
          <h1 className="text-display mb-6 max-w-[16ch]">
            The craft behind the{' '}
            <em className="font-normal italic text-gold">copy</em>.
          </h1>
          <p className="text-lead max-w-prose text-charcoal-500">
            I believe every brand has a story worth telling. My job is to find it, 
            refine it, and share it in a way that moves people to action.
          </p>
        </section>

        {/* Two-column Content */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
              {/* Photo Column */}
              <div className="lg:col-span-2">
                <div className="sticky top-32">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/gireesh.jpg"
                      alt="Gireesh Hariprasad - Copywriter & Brand Storyteller"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Quick Facts */}
                  <div className="mt-8 rounded-lg border border-warm-200 bg-warm-50 p-6">
                    <h3 className="mb-4 text-meta font-medium text-charcoal">Quick Facts</h3>
                    <ul className="space-y-3 text-body-sm text-charcoal-600">
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span>10+ years in copywriting & content</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span>Based in India, working globally</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span>50+ brands & startups served</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span>Specializing in brand storytelling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3">
                <div className="prose-premium">
                  <h2 className="text-subhead mb-6">Hello, I&apos;m Gireesh</h2>
                  
                  <p>
                    I&apos;m a copywriter who believes that <span className="highlight-gold font-medium">great writing isn&apos;t about clever words</span>—it&apos;s about 
                    understanding people. What moves them, what matters to them, 
                    what keeps them up at night.
                  </p>

                  <p>
                    For over a decade, I&apos;ve been helping brands find their voice 
                    and tell stories that <span className="highlight-gold font-medium">connect, persuade, and inspire action</span>. 
                    From startups to established enterprises, I&apos;ve worked across 
                    industries to craft copy that feels genuine and drives results.
                  </p>

                  <h3 className="text-heading mb-4 mt-12">My Approach</h3>

                  <p>
                    Every project starts with <span className="highlight-gold font-medium">listening</span>. I want to understand 
                    your brand, your audience, and what success looks like for you. 
                    Only then do I put pen to paper (or fingers to keyboard).
                  </p>

                  <p>
                    I believe in <span className="highlight-gold font-medium">clarity over cleverness</span>, authenticity over hype, 
                    and strategy over style. Good copy should feel effortless to 
                    read—but that ease comes from careful thought and craft.
                  </p>

                  <div className="my-12 rounded-xl bg-warm-50 p-8">
                    <blockquote className="text-pullquote m-0 border-none p-0">
                      &ldquo;The best copy doesn&apos;t feel like copy at all. It feels 
                      like a conversation with a friend who truly gets you.&rdquo;
                    </blockquote>
                  </div>

                  <h3 className="text-heading mb-4 mt-12">What I Do</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-medium">1</span>
                      <div>
                        <strong className="text-charcoal">Brand Voice & Messaging</strong>
                        <p className="mt-1 text-body-sm text-charcoal-500">
                          Defining how your brand speaks—the tone, the personality, the words you use.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-medium">2</span>
                      <div>
                        <strong className="text-charcoal">Website & Landing Page Copy</strong>
                        <p className="mt-1 text-body-sm text-charcoal-500">
                          Converting visitors into customers with clear, compelling web copy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-medium">3</span>
                      <div>
                        <strong className="text-charcoal">Campaign & Advertising Copy</strong>
                        <p className="mt-1 text-body-sm text-charcoal-500">
                          Campaigns that capture attention and drive action.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-medium">4</span>
                      <div>
                        <strong className="text-charcoal">Long-form & Editorial Content</strong>
                        <p className="mt-1 text-body-sm text-charcoal-500">
                          Articles, guides, and thought leadership that builds authority.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-16 rounded-xl border border-gold/30 bg-gold/5 p-8">
                  <h3 className="text-subhead mb-4">Ready to work together?</h3>
                  <p className="mb-6 text-body text-charcoal-500">
                    I&apos;m currently accepting new projects. Let&apos;s talk about how 
                    I can help your brand find its voice.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-body font-medium text-ivory transition-all duration-300 hover:bg-gold hover:shadow-lg"
                  >
                    Get in touch
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
