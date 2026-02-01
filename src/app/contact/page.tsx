'use client';

import { useState, FormEvent } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Form data interface
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Form errors interface
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// API response interface
interface ApiResponse {
  success?: boolean;
  error?: string;
}

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  // UI state
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-padding mx-auto max-w-content-lg pb-16 lg:pb-24">
          <span 
            className="mb-4 inline-block text-sm tracking-[0.12em] uppercase text-charcoal-500"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            Get in Touch
          </span>
          
          {/* TYPOGRAPHIC HERO */}
          <h1 
            className="mb-8 max-w-[18ch]"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}
          >
            Let&apos;s make something that <span className="relative inline-block">
              works
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold/50" />
            </span><span className="text-gold">.</span>
          </h1>
          
          <p className="text-lead max-w-prose">
            If you&apos;re an ad agency or business looking for a copywriter who understands craft, collaboration, and commercial outcomes, this is where the conversation begins.
          </p>
        </section>

        {/* Contact Content */}
        <section className="border-t border-warm-200 py-16 lg:py-24">
          <div className="container-padding mx-auto max-w-content-lg">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left Column - Contact Info */}
              <div>
                <p className="text-body-lg mb-10">
                  Whether it's a role, a project, or an idea worth exploring—start here.
                </p>
                
                {/* Phone */}
                <div className="mb-8">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Mobile (UK)
                  </span>
                  <a
                    href="tel:+447778200054"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    07778 200054
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      
                    </span>
                  </a>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:gireesh2hariprasad@gmail.com"
                    className="group inline-flex items-center gap-2 text-body-lg font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    gireesh2hariprasad@gmail.com
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      
                    </span>
                  </a>
                </div>

                {/* Address */}
                <div className="mb-10">
                  <span 
                    className="mb-2 block text-sm tracking-[0.12em] uppercase text-charcoal-400"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    Address
                  </span>
                  <address className="text-body-lg not-italic text-charcoal">
                    21, Crimson Way<br />
                    Hinckley<br />
                    LE10 2NE
                  </address>
                </div>

                {/* Closing statement */}
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                  <p className="text-body text-charcoal-600 m-0">
                    If you believe good writing still matters—and deserves to be challenged every day—you'll feel right at home working together.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="rounded-2xl bg-warm-50 p-8 lg:p-10">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                    fontWeight: 600
                  }}
                >
                  Start a conversation
                </h2>
                <p className="mb-6 text-body text-charcoal-500">
                  Fill out the form below and I&apos;ll get back to you.
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div 
                    className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-green-800">
                        Message sent successfully! I&apos;ll get back to you within 24-48 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div 
                    className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-sm text-red-800">
                        Failed to send message. Please try emailing me directly at{' '}
                        <a href="mailto:gireesh2hariprasad@gmail.com" className="underline hover:no-underline">
                          gireesh2hariprasad@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div className="mb-5">
                    <label 
                      htmlFor="name" 
                      className="mb-2 block text-sm tracking-[0.08em] uppercase text-charcoal-500"
                      style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.name 
                          ? 'border-red-400 focus:border-red-400' 
                          : 'border-warm-200 focus:border-gold'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-5">
                    <label 
                      htmlFor="email" 
                      className="mb-2 block text-sm tracking-[0.08em] uppercase text-charcoal-500"
                      style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.email 
                          ? 'border-red-400 focus:border-red-400' 
                          : 'border-warm-200 focus:border-gold'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="mb-2 block text-sm tracking-[0.08em] uppercase text-charcoal-500"
                      style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-400' 
                          : 'border-warm-200 focus:border-gold'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group mb-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:tracking-[0.15em] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-charcoal disabled:hover:shadow-none"
                    style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
                  >
                    {isLoading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </form>

                <div className="border-t border-warm-200 pt-6">
                  <p className="text-body-sm text-charcoal-500">
                    <strong className="font-medium text-charcoal">Response time:</strong>{' '}
                    I typically respond within 24-48 hours during weekdays.
                  </p>
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
