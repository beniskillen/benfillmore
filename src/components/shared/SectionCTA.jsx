import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function SectionCTA({
  headline = "Ready to fill yours?",
  sub = "Free 30-min strategy call. We'll show you where your current marketing is leaking revenue and what we'd fix first.",
  buttonText = "Book a Strategy Call →",
  buttonTo = "/apply",
}) {
  return (
    <section className="py-24 md:py-32" style={{ background: '#961621' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
            {headline}
          </h2>
          <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            {sub}
          </p>
          <div className="mt-10">
            <Link
              to={buttonTo}
              className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#E9FF80' }}
            >
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}