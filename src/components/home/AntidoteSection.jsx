import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function AntidoteSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#FAF0DA' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <blockquote className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight" style={{ color: '#961621' }}>
            "Most agencies build polished decks no one reads. We build pipelines, fill tables, and ship campaigns. That's it."
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}