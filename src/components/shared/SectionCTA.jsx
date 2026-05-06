import React from 'react';
import PillButton from './PillButton';
import ScrollReveal from './ScrollReveal';

export default function SectionCTA({
  headline = "Ready to fill yours?",
  sub = "Free 30-min strategy call. No pitch deck. No fluff.",
  buttonText = "Apply Now →",
  buttonTo = "/apply",
}) {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight">
            {headline}
          </h2>
          <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            {sub}
          </p>
          <div className="mt-10">
            <PillButton to={buttonTo} variant="primary-inverted">
              {buttonText}
            </PillButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}