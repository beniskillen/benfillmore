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
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-black max-w-5xl">
              We started this because we'd seen how it really works.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed">
              We worked at agencies. We saw how things really get done — businesses oversold, then handed off to people with no real connection to the work. Strategies that looked good on paper but didn't deliver. Everything overproduced and underwhelming where it actually counted.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              We didn't like it. We didn't think businesses deserved it. So we left and built something better.
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
              30 minutes. Honest conversation. If we can help, we'll tell you. If we can't, we'll tell you that too.
            </p>
            <div className="mt-10">
              <PillButton to="/apply" variant="primary-inverted">
                Book a strategy call →
              </PillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}