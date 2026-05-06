import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const CARDS = [
  {
    title: 'Paid Ads',
    desc: "Meta and Google ads that drive bookings, sales, and leads. No vanity metrics.",
  },
  {
    title: 'Content & UGC',
    desc: "Creative that doesn't just look good — it converts.",
  },
  {
    title: 'Strategy',
    desc: "Hands-on partnership. We're in it with you, not handing you off.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
            What We Do
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="group bg-white border border-black/8 rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-black">
                  {card.title}
                </h3>
                <p className="font-body text-black/60 text-base leading-relaxed mt-4">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}