import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const POINTS = [
  {
    title: 'No handoffs.',
    desc: 'The person you talk to is the person doing the work.',
  },
  {
    title: 'No bloated decks.',
    desc: 'We deliver outcomes, not 40-page PDFs.',
  },
  {
    title: 'No templated strategies.',
    desc: 'Every brand gets work built for it, not for someone else.',
  },
];

export default function WhyFillmoreSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
            Why Fillmore
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-black">
                  {point.title}
                </h3>
                <p className="font-body text-black/60 text-base leading-relaxed mt-3">
                  {point.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}