import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const CARDS = [
  {
    title: 'Paid Acquisition',
    desc: "Meta and Google ads built around your offer, margin and booking path. We optimise for customers, not clicks.",
  },
  {
    title: 'In-House Creative',
    desc: "Photography, video and UGC built to make the venue easy to choose and easy to book.",
  },
  {
    title: 'Strategy & Systems',
    desc: "Offer, booking path, tracking and reactivation connected into one demand system.",
  },
];

const CARE_ABOUT = [
  {
    title: 'Lower cost to win a customer',
    desc: "Pay less to bring in the next guest by fixing the offer, creative and channel mix.",
  },
  {
    title: 'Higher repeat purchase rate',
    desc: "Turn one-time diners into regulars. The most underrated lever in hospitality.",
  },
  {
    title: 'Booked-out weekends and weekdays',
    desc: "Not just one or the other. Slow nights need their own plan.",
  },
  {
    title: 'Stronger LTV and retention',
    desc: "Customers who come back, spend more and tell their friends. That is where the real money is.",
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
              The work has one job: bring in customers and make them worth more over time.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE_ABOUT.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl p-8 md:p-10" style={{ background: '#000000' }}>
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/70 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
