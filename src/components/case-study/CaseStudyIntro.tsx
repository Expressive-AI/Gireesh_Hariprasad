/**
 * Case Study Intro
 * 
 * Large, readable intro paragraph that sets the scene.
 * Styled for maximum readability with generous spacing.
 */

interface CaseStudyIntroProps {
  introParagraph: string;
}

export function CaseStudyIntro({ introParagraph }: CaseStudyIntroProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="prose-container">
        <p className="text-intro">
          {introParagraph}
        </p>
      </div>
    </section>
  );
}
