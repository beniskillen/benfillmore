import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const CARDS = [
  {
    title: 'Paid Acquisition',
    desc: "Meta and Google ads built around your margins, your AOV, and your real growth goals. We don't optimise for clicks. We optimise for revenue.",
  },
  {
    title: 'In-House Creative',
    desc: "Photography, videography, and UGC produced in-house — designed to convert, not just look good. We test creative angles weekly until we find what scales.",
  },
  {
    title: 'Strategy & Systems',
    desc: "We build retention systems, optimise customer journeys, and bring an operator's eye to the entire funnel. Not just the ads.",
  },
];

const CARE_ABOUT = [
  {
    title: 'Lower customer acquisition cost',
    desc: "Paying less for every new customer you bring in. The metric that decides whether marketing scales or burns budget.",
  },
  {
    title: 'Higher repeat purchase rate',
    desc: "Turning one-time diners into regulars. The most underrated lever in hospitality.",
  },
  {
    title: 'Booked-out weekends and weekdays',
    desc: "Not just one or the other. Most venues are packed Saturdays and dead Tuesdays. We fix the Tuesdays.",
  },
  {
    title: 'Stronger LTV and retention',
    desc: "Customers who come back, spend more, and tell their friends. That's where the real money is.",
  },
];

export default function WhatWeDoSection() {
  return (
    <>
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

      {/* What We Actually Care About */}
      <section className="py-24 md:py-32 bg-background border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Care About.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              We're not chasing impressions or vanity metrics. These are the numbers that move your business.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE_ABOUT.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-black rounded-2xl p-8 md:p-10">
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}