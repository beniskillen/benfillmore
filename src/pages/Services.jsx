import React from 'react';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionCTA from '../components/shared/SectionCTA';

const SERVICE_SECTIONS = [
  {
    title: 'Paid Advertising',
    items: [
      {
        name: 'Meta Ads',
        desc: 'Acquisition campaigns, retargeting, creative testing, audience strategy.',
      },
      {
        name: 'Google Ads',
        desc: "Search, Shopping, Performance Max, YouTube. Built to capture demand, not just spend budget.",
      },
      {
        name: 'Reporting',
        desc: "Real numbers, weekly. No vanity metrics. We tell you what's working and what's not.",
      },
    ],
  },
  {
    title: 'Content & UGC',
    items: [
      {
        name: 'UGC Production',
        desc: "Real creators making real content for your brand. Authentic, not staged.",
      },
      {
        name: 'Social Management',
        desc: "Strategy, posting, community. Built to grow, not just to be present.",
      },
      {
        name: 'Creative Direction',
        desc: "Big-picture creative thinking. What story your brand should tell, and how to tell it.",
      },
    ],
  },
  {
    title: 'Strategy',
    items: [
      {
        name: 'Growth Strategy',
        desc: "Where the real opportunity is, what to bet on, what to ignore.",
      },
      {
        name: 'Brand Positioning',
        desc: "Who you are, who you're for, why you're different.",
      },
      {
        name: 'Hands-On Partnership',
        desc: "We're in your Slack, your Loom, your strategy calls. Not on a quarterly review schedule.",
      },
    ],
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understand the business, the goals, the real opportunity.' },
  { step: '02', title: 'Strategy', desc: 'Build the plan. No 40-page deck. A simple, clear roadmap.' },
  { step: '03', title: 'Execution', desc: 'Run the campaigns. Make the content. Ship the work.' },
  { step: '04', title: 'Iteration', desc: "Review what's working. Double down. Cut what's not." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] uppercase tracking-tight text-black">
              We do three things well.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Paid ads. Content. Strategy. All hands-on. All in-house. No outsourcing, no handoffs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICE_SECTIONS.map((section, si) => (
        <section
          key={section.title}
          className={`py-20 md:py-28 ${si % 2 === 0 ? 'bg-black text-white' : 'bg-background text-black'}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-14">
                {section.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, ii) => (
                <ScrollReveal key={item.name} delay={ii * 0.1}>
                  <div className={`rounded-2xl p-8 md:p-10 h-full ${
                    si % 2 === 0
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-white border border-black/8'
                  }`}>
                    <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className={`font-body text-base leading-relaxed mt-4 ${
                      si % 2 === 0 ? 'text-white/60' : 'text-black/60'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <a href="/pricing" className={`font-body text-sm font-medium underline underline-offset-4 transition-colors ${si % 2 === 0 ? 'text-white/50 hover:text-white' : 'text-black/40 hover:text-black'}`}>
                  See pricing for this →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
              How We Work
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-heading font-bold text-6xl md:text-7xl text-black/5">
                    {s.step}
                  </span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-black mt-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">
                    {s.desc}
                  </p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-8 h-[1px] bg-black/10" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        headline="Ready to start?"
        sub="Apply for a free strategy call."
        buttonText="Apply Now →"
      />
    </>
  );
}