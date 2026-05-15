import React from 'react';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionCTA from '../components/shared/SectionCTA';

const SERVICE_SECTIONS = [
  {
    title: 'Paid Media',
    items: [
      {
        name: 'Meta Ads',
        desc: "Acquisition campaigns, retargeting flows, and creative testing systems built to lower CAC and find scalable winners.",
      },
      {
        name: 'Google Ads',
        desc: "Search, Shopping, Performance Max, and YouTube. Built to capture high-intent customers already looking for what you sell.",
      },
      {
        name: 'Reporting & Optimisation',
        desc: "We track bookings, purchases, leads, and revenue — not just clicks and reach. Weekly numbers, weekly adjustments, no vanity metrics.",
      },
    ],
  },
  {
    title: 'In-House Creative',
    items: [
      {
        name: 'Photography & Videography',
        desc: "In-house production designed for paid and organic performance. Not portfolio-pretty — conversion-built.",
      },
      {
        name: 'UGC Production',
        desc: "Real creators producing high-converting creative for your brand. Briefed, shot, and shipped in-house.",
      },
      {
        name: 'Creative Direction',
        desc: "Big-picture thinking on what story your brand should tell, what angles to test, and how to keep creative fresh as you scale.",
      },
    ],
  },
  {
    title: 'Strategy & Systems',
    items: [
      {
        name: 'Growth Strategy',
        desc: "Where the real opportunity is, what to bet on, what to ignore. We build the plan around your margins, AOV, and growth targets.",
      },
      {
        name: 'Brand Positioning',
        desc: "Position your brand clearly so customers instantly understand why they should choose you over competitors.",
      },
      {
        name: 'Hands-On Partnership',
        desc: "We're in your Slack, your Loom, your strategy calls. Launch campaigns, produce creative, analyse performance, optimise weekly.",
      },
    ],
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: "Understand your business, your margins, and where your real growth opportunities are." },
  { step: '02', title: 'Strategy', desc: "Build a plan based on your AOV, capacity, and growth goals. No 40-page deck. Simple, clear, actionable." },
  { step: '03', title: 'Execution', desc: "Launch campaigns, produce creative, ship the work. We don't outsource execution." },
  { step: '04', title: 'Optimisation', desc: "Analyse performance weekly. Double down on what's working. Cut what's not." },
];

const CARE_ABOUT = [
  { title: 'Lower customer acquisition cost', desc: "Paying less for every new customer you bring in. The metric that decides whether marketing scales or burns budget." },
  { title: 'Higher repeat purchase rate', desc: "Turning one-time buyers into regulars. The most underrated lever in e-commerce and hospitality." },
  { title: 'Booked-out weekends and weekdays', desc: "Not just one or the other. Most venues are packed Saturdays and dead Tuesdays. We fix the Tuesdays." },
  { title: 'Stronger LTV and retention', desc: "Customers who come back, spend more, and tell their friends. That's where the real money is." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] uppercase tracking-tight text-black">
              Growth systems for brands that want to scale.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Paid media, in-house creative, and strategy. Built to drive revenue, not just deliverables.
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

      {/* What We Actually Care About */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Care About.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              Services exist to deliver outcomes. These are the outcomes we optimise for.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE_ABOUT.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-black rounded-2xl p-8 md:p-10">
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
        sub="Free 30-min strategy call. We'll show you where your current marketing is leaking revenue."
        buttonText="Book a Strategy Call →"
      />
    </>
  );
}