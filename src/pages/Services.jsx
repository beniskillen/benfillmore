import React from 'react';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionCTA from '../components/shared/SectionCTA';
import { SERVICE_HIGHLIGHTS } from '../lib/galleryImages';

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

const PAID_MEDIA_REPORTS = [
  {
    platform: 'Meta / Facebook Ads',
    title: 'Facebook Ads monthly reporting',
    body: 'Campaign performance, spend, impressions, clicks, reach, CTR and ad set breakdowns in one place.',
    metrics: ['Spend', 'Reach', 'CTR'],
    src: '/images/work/facebook-ads-monthly-report.png',
    alt: 'Facebook Ads monthly report dashboard showing clicks, impressions, spend, reach, CTR and ad set performance.',
  },
  {
    platform: 'Google Ads',
    title: 'Google Ads performance overview',
    body: 'Regional performance, audience insights and conversion signals used to guide weekly optimisation.',
    metrics: ['Region', 'Spend', 'Impressions'],
    src: '/images/work/google-ads-performance-overview.png',
    alt: 'Google Ads performance overview dashboard showing performance by region and impressions by gender.',
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
  { title: 'Higher repeat visit rate', desc: "Turning one-time diners into regulars. The most underrated lever in hospitality." },
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

      {/* Service proof */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICE_HIGHLIGHTS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white border border-black/8">
                  <div className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-[4/3]">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <h2 className="font-heading font-bold text-xl uppercase tracking-tight text-black">
                      {item.title}
                    </h2>
                    <p className="font-body text-sm leading-relaxed text-black/60 mt-3">
                      {item.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICE_SECTIONS.map((section, si) => (
        <section
          key={section.title}
          className={`py-20 md:py-28 ${si % 2 === 0 ? 'text-white' : 'bg-background text-black'}`}
          style={si % 2 === 0 ? { background: '#000000' } : {}}
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
                  <div
                    className={`rounded-2xl p-8 md:p-10 h-full ${si % 2 !== 0 ? 'bg-white border border-black/8' : ''}`}
                    style={si % 2 === 0 ? { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' } : {}}
                  >
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

            {section.title === 'Paid Media' && (
              <div className="mt-16 md:mt-20">
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-end">
                    <h3 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
                      The ads come with a scoreboard.
                    </h3>
                    <p className="font-body text-base md:text-lg leading-relaxed text-white/60 max-w-2xl lg:ml-auto">
                      We manage Meta/Facebook and Google Ads with reporting that shows what happened, where the money went, and what needs to change next.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="mt-12 space-y-6 md:space-y-8">
                  {PAID_MEDIA_REPORTS.map((report, index) => (
                    <ScrollReveal key={report.title} delay={index * 0.08}>
                      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.68fr]">
                          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-8">
                            <div>
                              <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-white/40">
                                {report.platform}
                              </span>
                              <h4 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mt-4">
                                {report.title}
                              </h4>
                              <p className="font-body text-sm md:text-base leading-relaxed text-white/60 mt-4">
                                {report.body}
                              </p>
                            </div>
                            <div className="grid grid-cols-3 gap-3 text-center">
                              {report.metrics.map((metric) => (
                                <span
                                  key={metric}
                                  className="rounded-full border border-white/10 px-3 py-2 font-body text-[11px] font-semibold uppercase tracking-wide text-white/60"
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white p-2 md:p-3">
                            <img
                              src={report.src}
                              alt={report.alt}
                              loading="lazy"
                              className="block h-auto w-full rounded-xl"
                            />
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

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
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4 text-black">
            What We Actually Care About.
            </h2>
            <p className="font-body text-lg max-w-2xl mb-14 text-black/60">
            Services exist to deliver outcomes. These are the outcomes we optimise for.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE_ABOUT.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-black/8">
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="font-body text-base leading-relaxed mt-3 text-black/60">{item.desc}</p>
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
      />
    </>
  );
}
