import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ============================================
         Color Palette - Premium Copywriting Portfolio
         Warm, sophisticated, high contrast for readability
      ============================================ */
      colors: {
        // Background - Warm ivory tones (not pure white)
        ivory: {
          DEFAULT: '#FAF8F5',
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EDE7DD',
          400: '#E2D9CC',
          500: '#D4C8B8',
        },
        // Primary text - Deep charcoal (not pure black)
        charcoal: {
          DEFAULT: '#2C2A27',
          50: '#F7F7F6',
          100: '#E8E7E5',
          200: '#D1CFCC',
          300: '#A8A5A0',
          400: '#7A7671',
          500: '#5C5854',
          600: '#454240',
          700: '#3A3835',
          800: '#2C2A27',
          900: '#1F1E1C',
        },
        // Accent - Muted antique gold (use sparingly)
        gold: {
          DEFAULT: '#B8976B',
          light: '#D4BC94',
          muted: '#A68B5B',
          dark: '#8B7249',
        },
        // Supporting warm tones
        warm: {
          50: '#FDFCF9',
          100: '#F9F6F1',
          200: '#F0EBE2',
          300: '#E4DDD0',
          400: '#CFC5B4',
          500: '#B5A898',
        },
        // Legacy support
        ink: {
          DEFAULT: '#2C2A27',
          light: '#5C5854',
          muted: '#7A7671',
        },
        paper: {
          DEFAULT: '#FAF8F5',
          warm: '#F5F1EB',
          cream: '#FDFCFA',
        },
      },

      /* ============================================
         Typography - Fluid Type Scale with clamp()
         Confident, editorial, dramatic headlines
         Extremely readable body copy
      ============================================ */
      fontFamily: {
        // Headline: Cormorant Garamond - elegant, dramatic
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Body: Lora - warm, readable serif for long-form
        body: ['var(--font-body)', 'Lora', 'Georgia', 'serif'],
        // Sans: Inter - clean UI elements
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        /* Fluid Display Sizes - Headlines that command attention */
        'fluid-hero': [
          'clamp(3rem, 8vw + 1rem, 7rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '500' }
        ],
        'fluid-display': [
          'clamp(2.5rem, 6vw + 0.5rem, 5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '500' }
        ],
        'fluid-title': [
          'clamp(2rem, 4vw + 0.5rem, 3.5rem)',
          { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }
        ],
        'fluid-heading': [
          'clamp(1.5rem, 3vw + 0.25rem, 2.5rem)',
          { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '500' }
        ],
        'fluid-subhead': [
          'clamp(1.25rem, 2vw + 0.25rem, 1.75rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }
        ],
        
        /* Body Text - Optimized for long-form reading */
        'body-xl': [
          'clamp(1.125rem, 1vw + 0.875rem, 1.375rem)',
          { lineHeight: '1.8', letterSpacing: '0.005em' }
        ],
        'body-lg': [
          'clamp(1.0625rem, 0.5vw + 0.9375rem, 1.1875rem)',
          { lineHeight: '1.85', letterSpacing: '0.005em' }
        ],
        'body-base': [
          'clamp(1rem, 0.25vw + 0.9375rem, 1.0625rem)',
          { lineHeight: '1.9', letterSpacing: '0.01em' }
        ],
        'body-sm': [
          '0.9375rem',
          { lineHeight: '1.75', letterSpacing: '0.01em' }
        ],
        
        /* Meta & Navigation - Subtle letter spacing */
        'meta-lg': [
          '0.9375rem',
          { lineHeight: '1.5', letterSpacing: '0.06em', fontWeight: '500' }
        ],
        'meta-base': [
          '0.8125rem',
          { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }
        ],
        'meta-sm': [
          '0.75rem',
          { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }
        ],
        
        /* Caption & Small Text */
        'caption': [
          '0.875rem',
          { lineHeight: '1.6', letterSpacing: '0.02em' }
        ],
        'fine': [
          '0.8125rem',
          { lineHeight: '1.5', letterSpacing: '0.015em' }
        ],
      },
      
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
        normal: '0',
        relaxed: '0.01em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.08em',
        spread: '0.1em',
        meta: '0.12em',
      },
      
      lineHeight: {
        none: '1',
        headline: '1.1',
        title: '1.2',
        snug: '1.35',
        body: '1.8',
        relaxed: '1.85',
        loose: '1.9',
        prose: '2',
      },

      /* ============================================
         Spacing Scale - Generous Vertical Rhythm
         Desktop: 80-120px sections
         Mobile: Calm, never cramped
      ============================================ */
      spacing: {
        // Fine spacing
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        
        // Section spacing (desktop generous)
        '18': '4.5rem',     // 72px
        '20': '5rem',       // 80px
        '22': '5.5rem',     // 88px
        '24': '6rem',       // 96px
        '26': '6.5rem',     // 104px
        '28': '7rem',       // 112px
        '30': '7.5rem',     // 120px
        '32': '8rem',       // 128px
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px
        
        // Extra large spacing for hero sections
        'section-sm': '5rem',      // 80px
        'section': '6.5rem',       // 104px - comfortable desktop
        'section-lg': '7.5rem',    // 120px - generous desktop
        'section-xl': '10rem',     // 160px - dramatic breaks
        
        // Content spacing
        'content-gap': '2rem',     // 32px - between content blocks
        'paragraph': '1.75rem',    // 28px - between paragraphs
      },

      /* ============================================
         Layout - Content Max Widths
      ============================================ */
      maxWidth: {
        'prose': '68ch',           // Optimal reading width
        'prose-wide': '75ch',      // Slightly wider prose
        'content': '1140px',       // Main content (1100-1200px range)
        'content-lg': '1200px',    // Wider content
        'container': '1320px',     // With padding
        'narrow': '720px',         // Focused content
        'wide': '1440px',          // Full-width sections
      },
      
      /* ============================================
         Container Padding
      ============================================ */
      padding: {
        'container-mobile': '1.5rem',    // 24px mobile
        'container-tablet': '2.5rem',    // 40px tablet
        'container-desktop': '4rem',     // 64px desktop
      },

      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },

      /* ============================================
         Borders & Effects
      ============================================ */
      borderColor: {
        DEFAULT: '#E4DDD0',
        subtle: '#EDE7DD',
        muted: '#D4C8B8',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(44 42 39 / 0.04)',
        'soft': '0 4px 12px -2px rgb(44 42 39 / 0.06)',
        'medium': '0 8px 24px -4px rgb(44 42 39 / 0.08)',
        'elevated': '0 16px 48px -8px rgb(44 42 39 / 0.1)',
      },

      /* ============================================
         Transitions & Animations
      ============================================ */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      /* ============================================
         Z-Index Scale
      ============================================ */
      zIndex: {
        'behind': '-1',
        'base': '0',
        'above': '10',
        'header': '100',
        'overlay': '150',
        'modal': '200',
        'toast': '300',
      },
    },
  },
  plugins: [],
};

export default config;
