/**
 * Sanity Seed Data: Case Studies
 * 
 * This file contains the initial case study content for the portfolio.
 * 
 * To import this data into Sanity:
 * 1. Install Sanity CLI: npm install -g @sanity/cli
 * 2. Run: sanity dataset import ./src/sanity/data/caseStudies.ndjson production
 * 
 * Or use the Sanity Studio UI to manually create these entries.
 */

/**
 * Local case study type with strict slug typing for static data
 */
export interface LocalCaseStudy {
  title: string;
  slug: { _type: 'slug'; current: string };
  client: string;
  category: 'advertising' | 'website' | 'longform' | 'brand' | 'email' | 'social';
  excerpt: string;
  body: Array<{
    _type: string;
    _key: string;
    style?: string;
    children?: Array<{ _type: string; _key: string; text: string }>;
    markDefs?: unknown[];
  }>;
  deliverables: string[];
  featured: boolean;
  publishedAt: string;
  heroImage: {
    url: string;
    alt: string;
  };
}

export const caseStudiesData: LocalCaseStudy[] = [
  {
    title: "Zamosa Pet Grooming",
    slug: { _type: 'slug', current: "zamosa-pet-grooming" },
    client: "Zamosa",
    category: "advertising",
    excerpt: "A promotional flyer written to attract pet lovers by showing care, calmness, and the emotional result of grooming — not the act itself.",
    body: [
      {
        _type: "block",
        _key: "z1",
        style: "normal",
        children: [{ _type: "span", _key: "z1s", text: "This project involved writing a promotional flyer for a pet grooming service based in the UK. The brief was clear: the communication should never feel loud, aggressive, or salesy. It had to feel affectionate, calm, and trustworthy — just like the relationship between people and their pets." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "z2",
        style: "normal",
        children: [{ _type: "span", _key: "z2s", text: "The central message of the flyer was a flat 30% discount on all services. This offer needed to stand out visually and verbally, but without overpowering the emotional tone of the brand." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "z3",
        style: "normal",
        children: [{ _type: "span", _key: "z3s", text: "A key creative principle followed here was to never show the act of grooming itself. Instead, the copy and visuals focus on the result — a calm, happy, beautifully groomed dog. The idea is simple: don't show the process, show the outcome." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "z4",
        style: "normal",
        children: [{ _type: "span", _key: "z4s", text: "The flyer introduces Zamosa Pet Grooming as a place where grooming is done with affection and patience, not as a mechanical service. The language reassures pet owners that every dog is handled gently, hygienically, and with genuine care." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "z5",
        style: "normal",
        children: [{ _type: "span", _key: "z5s", text: "Service descriptions are written to be clear, comforting, and benefit-led — focusing not just on what is done, but how it makes the dog feel afterwards." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "z6",
        style: "normal",
        children: [{ _type: "span", _key: "z6s", text: "The flyer closes with a promise: at Zamosa, grooming isn't just another service. It's a commitment — to safety, comfort, and satisfaction." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Promotional flyer copy",
      "Service descriptions",
      "Offer messaging",
      "Brand reassurance copy"
    ],
    featured: true,
    publishedAt: "2025-05-01T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80",
      alt: "Happy groomed dog representing Zamosa Pet Grooming"
    }
  },
  {
    title: "Antler Play Gallery Café",
    slug: { _type: 'slug', current: "antler-play-gallery-cafe" },
    client: "Antler Play Gallery Café",
    category: "advertising",
    excerpt: "A press advertisement written to position a play café as a shared space where children play freely and parents reclaim quality time.",
    body: [
      {
        _type: "block",
        _key: "a1",
        style: "normal",
        children: [{ _type: "span", _key: "a1s", text: "This project was a press advertisement for a play gallery café — a space designed not only for children, but equally for parents and caregivers." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "a2",
        style: "normal",
        children: [{ _type: "span", _key: "a2s", text: "The core insight was emotional: parents don't just need places for their children to play. They need relief. They need conversation. They need moments where they can pause without guilt." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "a3",
        style: "normal",
        children: [{ _type: "span", _key: "a3s", text: "The headline brings this contrast to life: children playing their hearts out, while parents catch up with theirs. It frames Antler as a space where both needs coexist comfortably." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "a4",
        style: "normal",
        children: [{ _type: "span", _key: "a4s", text: "The copy paints a vivid scene — a playroom full of joyful chaos, toys scattered around, children immersed in play, while adults enjoy coffee, conversation, or a quiet break." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "a5",
        style: "normal",
        children: [{ _type: "span", _key: "a5s", text: "Feature descriptions are written with warmth, not as bullet points of amenities, but as enablers of comfort, safety, and quality time." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "a6",
        style: "normal",
        children: [{ _type: "span", _key: "a6s", text: "The ad closes by inviting families not just to visit, but to stay — for the laughs, the coffee, and the break parents truly deserve." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Press advertisement copy",
      "Tagline creation",
      "Feature framing",
      "Emotional positioning"
    ],
    featured: true,
    publishedAt: "2025-06-01T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
      alt: "Children playing in a vibrant café space"
    }
  },
  {
    title: "Philips PowerPro Bagless Vacuum Cleaner",
    slug: { _type: 'slug', current: "philips-powerpro-vacuum-cleaner" },
    client: "Philips",
    category: "website",
    excerpt: "A long-scroll product page written to turn a functional appliance into a lifestyle upgrade centered on health, ease, and confidence.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        children: [{ _type: "span", _key: "p1s", text: "This project involved writing a multi-section website page for the Philips PowerPro Bagless 1900W Vacuum Cleaner. The challenge was to move beyond technical specifications and present the product as a contributor to healthier, more comfortable living." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [{ _type: "span", _key: "p2s", text: "The page opens with the promise of dust-free rooms and a healthier life — immediately connecting cleanliness with well-being rather than chores." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [{ _type: "span", _key: "p3s", text: "Each section of the page unfolds one idea at a time: powerful suction, adjustable control, cleaner air, effortless movement, lightweight handling, and long-term reliability." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [{ _type: "span", _key: "p4s", text: "Technical features such as a 1900W motor, washable filters, rubber wheels, and warranty are translated into emotional benefits — confidence, ease, and peace of mind." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [{ _type: "span", _key: "p5s", text: "The writing avoids jargon and instead focuses on daily life: entering a clean room, breathing easy, moving freely, and finishing cleaning without strain." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p6",
        style: "normal",
        children: [{ _type: "span", _key: "p6s", text: "Promotional offers and EMI options are introduced later in the scroll, once value has already been established, ensuring the offer feels rewarding rather than pushy." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "p7",
        style: "normal",
        children: [{ _type: "span", _key: "p7s", text: "The page closes by reframing the vacuum cleaner as more than a tool — it becomes a quiet upgrade to everyday living." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Long-scroll website copy",
      "Feature-to-benefit storytelling",
      "Promotional messaging integration"
    ],
    featured: true,
    publishedAt: "2025-07-01T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1200&q=80",
      alt: "Clean modern living room representing Philips lifestyle"
    }
  },
  {
    title: "How to Grow Your Business With a Mobile App",
    slug: { _type: 'slug', current: "merryba-mobile-app-guide" },
    client: "Merryba",
    category: "longform",
    excerpt: "An educational guide written to help local business owners understand how mobile apps drive real growth.",
    body: [
      {
        _type: "block",
        _key: "m1",
        style: "normal",
        children: [{ _type: "span", _key: "m1s", text: "This project is an online guide created for Merryba, a mobile app development company focused on local businesses. The goal was to educate rather than sell." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "m2",
        style: "normal",
        children: [{ _type: "span", _key: "m2s", text: "The guide opens by acknowledging reality: many local businesses still rely heavily on word of mouth and social media, while customers increasingly live on their phones." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "m3",
        style: "normal",
        children: [{ _type: "span", _key: "m3s", text: "Each section explains one practical benefit of having a mobile app — from staying visible on a customer's home screen to building loyalty through automation." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "m4",
        style: "normal",
        children: [{ _type: "span", _key: "m4s", text: "Complex ideas like data insights and customer behaviour are broken down into simple, relatable explanations that business owners can understand without technical knowledge." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "m5",
        style: "normal",
        children: [{ _type: "span", _key: "m5s", text: "The guide consistently positions Merryba as a partner in growth, not just a service provider." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Educational long-form content",
      "Section-based storytelling",
      "Business growth narrative"
    ],
    featured: false,
    publishedAt: "2025-08-01T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
      alt: "Mobile app on smartphone representing business growth"
    }
  },
  {
    title: "FOS Advertisers Homepage",
    slug: { _type: 'slug', current: "fos-advertisers-homepage" },
    client: "FOS Advertisers",
    category: "brand",
    excerpt: "Homepage brand writing focused on restraint, clarity, and ideas that endure.",
    body: [
      {
        _type: "block",
        _key: "f1",
        style: "normal",
        children: [{ _type: "span", _key: "f1s", text: "This homepage was written to reflect an agency with experience, intent, and long-term thinking — not noise or trend-chasing." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "f2",
        style: "normal",
        children: [{ _type: "span", _key: "f2s", text: "The opening establishes FOS Advertisers as a brand that believes in communication that connects, converts, and lasts." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "f3",
        style: "normal",
        children: [{ _type: "span", _key: "f3s", text: "Services are described clearly and confidently, covering digital, print, outdoor, branding, and film production." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "f4",
        style: "normal",
        children: [{ _type: "span", _key: "f4s", text: "Special emphasis is placed on the in-house production house — positioning film not as spectacle, but as belief-building storytelling." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "f5",
        style: "normal",
        children: [{ _type: "span", _key: "f5s", text: "The page closes with an invitation that feels collaborative rather than promotional." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Homepage brand narrative",
      "Service descriptions",
      "Agency positioning"
    ],
    featured: true,
    publishedAt: "2025-09-01T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      alt: "Modern agency workspace representing FOS Advertisers"
    }
  },
  {
    title: "Chilampu Indian Dance Academy Email",
    slug: { _type: 'slug', current: "chilampu-indian-dance-academy" },
    client: "Chilampu",
    category: "email",
    excerpt: "An enrolment email written to feel personal, cultural, and aspirational rather than promotional.",
    body: [
      {
        _type: "block",
        _key: "c1",
        style: "normal",
        children: [{ _type: "span", _key: "c1s", text: "This email was written to announce new Bharatanatyam classes for children, starting January 2026." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "c2",
        style: "normal",
        children: [{ _type: "span", _key: "c2s", text: "The copy frames Bharatanatyam not just as a dance form, but as a foundation for rhythm, discipline, confidence, and cultural connection." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "c3",
        style: "normal",
        children: [{ _type: "span", _key: "c3s", text: "Rather than sounding like an announcement, the email reads like a personal invitation to parents." }],
        markDefs: []
      },
      {
        _type: "block",
        _key: "c4",
        style: "normal",
        children: [{ _type: "span", _key: "c4s", text: "Clear benefits and a gentle call to action encourage enrolment without pressure." }],
        markDefs: []
      }
    ],
    deliverables: [
      "Email subject line",
      "Full email body copy",
      "CTA framing"
    ],
    featured: false,
    publishedAt: "2026-01-14T00:00:00Z",
    heroImage: {
      url: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&q=80",
      alt: "Classical Indian dance representing Chilampu Academy"
    }
  }
];

/**
 * Category display labels for UI
 */
export const categoryLabels: Record<string, string> = {
  advertising: 'Advertising',
  website: 'Website',
  longform: 'Long-form Content',
  brand: 'Brand',
  email: 'Email',
  social: 'Social Media',
};
