import React from 'react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

const BELIEFS = [
  'Doing over talking.',
  'Substance over show.',
  'Hands on, never handed off.',
  "Honest about what works — and what doesn't.",
  'Built to move the needle, not the deck.',
];

const TEAM = [
  {
    name: 'Noam Shabat',
    role: 'Performance & Strategy',
    bio: "I run paid acquisition for ecommerce and lead gen brands. 8 years in performance marketing across Meta, Google, and analytics. Built campaigns that scaled brands from $50k to $5M+ in revenue.",
    focus: ['Paid Media', 'Strategy', 'Analytics'],
    linkedin: '#',
  },
  {
    name: 'Melina',
    role: 'Content & Creative',
    bio: "I lead content and creative for our clients. UGC, social, brand storytelling. Built creative engines for hospitality and DTC brands across Australia.",
    focus: ['Content', 'UGC', 'Social', 'Creative Direction'],
    linkedin: '#',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-white max-w-5xl">
              We got tired of watching good businesses get bad marketing.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed">
              We worked inside agencies and saw the gap between what was sold and what actually got delivered.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              Businesses oversold, then handed off. Strategies that looked good in presentations but didn't translate into performance. A lot of effort went into how things appeared, not whether they actually worked.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              We watched brands spend A$15K–A$30K a month on strategies nobody executed properly. Beautiful decks. Weak content. Junior staff running accounts they didn't understand.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              Meanwhile, the businesses actually growing were the ones moving fast, posting consistently, and adapting in real time.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              So we built Fillmore to stay closer to the work, focus on what actually drives growth, and cut everything that doesn't.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-white/30 mb-12">
              What We Believe
            </h2>
          </ScrollReveal>
          <div className="space-y-6 md:space-y-8">
            {BELIEFS.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.08}>
                <p className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                  {b}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
              The Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  <div className="w-20 h-20 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                    <span className="font-heading font-bold text-2xl text-black/30">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-black">
                    {member.name}
                  </h3>
                  <p className="font-body text-black/40 text-sm font-medium mt-1">{member.role}</p>
                  <p className="font-body text-black/70 text-base leading-relaxed mt-4">{member.bio}</p>
                  <div className="mt-6">
                    <p className="font-body text-black/40 text-xs uppercase tracking-wider font-medium mb-2">
                      What I focus on:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((f) => (
                        <span key={f} className="font-body text-xs px-3 py-1 rounded-full bg-black/5 text-black/60">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 font-body text-sm text-black/40 hover:text-black transition-colors underline underline-offset-4"
                  >
                    LinkedIn →
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Actually Optimise For */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Optimise For.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              The numbers that decide whether marketing scaled the business or just looked busy.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'CAC', full: 'Customer Acquisition Cost', desc: 'Paying less for new customers.' },
              { label: 'LTV', full: 'Lifetime Value', desc: 'Customers who come back and spend more.' },
              { label: 'CVR', full: 'Conversion Rate', desc: 'Turning traffic into customers.' },
              { label: 'Repeat Purchase Rate', full: null, desc: 'The cheapest customer is the one who already bought.' },
              { label: 'Booking Volume', full: null, desc: 'Full nights, not just full weekends.' },
              { label: 'Revenue Consistency', full: null, desc: 'Predictable growth, not spike-and-crash.' },
              { label: 'Profit per Campaign', full: null, desc: 'Margin matters more than ROAS.' },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.06}>
                <div className="bg-white border border-black/8 rounded-2xl p-7">
                  <p className="font-heading font-bold text-lg uppercase tracking-tight text-black">{m.label}</p>
                  {m.full && <p className="font-body text-xs text-black/40 mt-0.5">{m.full}</p>}
                  <p className="font-body text-black/60 text-sm leading-relaxed mt-3">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-8">
              Our Approach
            </h2>
            <p className="font-body text-black/70 text-lg leading-relaxed">
              We don't pitch. We don't oversell. We don't have a sales team that hands you off to an account manager. The person you talk to is the person doing the work. That's it. That's the whole model.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Anti-pitch CTA */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Want to see if we're a fit?
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              30 minutes. Honest conversation. We'll show you where your current marketing is leaking revenue. If we can help, we'll tell you. If we can't, we'll tell you that too.
            </p>
            <div className="mt-10">
              <PillButton to="/apply" variant="primary-inverted">
                Book a Strategy Call →
              </PillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}