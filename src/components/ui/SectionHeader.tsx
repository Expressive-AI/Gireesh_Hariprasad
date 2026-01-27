/**
 * Section Header Component
 * 
 * Consistent section titling with optional label and description.
 * Uses editorial typography for a refined look.
 */

import type { SectionHeaderProps } from '@/types';

export default function SectionHeader({
  label,
  title,
  description,
  alignment = 'left',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`max-w-2xl ${alignmentClasses[alignment]} mb-12 lg:mb-16`}>
      {/* Small caps label */}
      {label && (
        <span className="small-caps block mb-4">
          {label}
        </span>
      )}
      
      {/* Main title - serif typography */}
      <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[var(--color-ink)]">
        {title}
      </h2>
      
      {/* Optional description */}
      {description && (
        <p className="mt-6 text-lg text-[var(--color-ink-light)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
