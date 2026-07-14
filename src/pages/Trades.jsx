import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import MediaCarousel from '../components/home/MediaCarousel';

const FOCUS_ITEMS = [
  { title: 'Consistent qualified leads', desc: 'Not just clicks. Leads that turn into booked jobs at margins that work.' },
  { title: 'Lower cost per lead', desc: 'We track CPL and cost-per-job ratios — not vanity metrics. The numbers that decide whether marketing scales or burns budget.' },
  { title: 'Multi-location expansion', desc: "We've taken one-city operators to multi-city service businesses. The playbook is repeatable." },
  { title: 'Google Search dominance', desc: 'When someone needs an emergency plumber at 11 PM, you\'re the first call. Built around urgency and intent.' },
  { title: 'Reputation systems', desc: 'Reviews, testimonials, before/afters. The trust signals that turn a click into a booked job.' },
  { title: 'Service area targeting', desc: 'Geo-fenced campaigns that show your ads only where you can actually service. No wasted spend.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Audit', desc: 'We look at your service areas, current lead flow, ad performance, and conversion rates. Find the gaps.' },
  { step: '02', title: 'Strategy', desc: 'Build a plan around your service capacity, average job value, and growth goals.' },
  { step: '03', title: 'Execute', desc: 'Launch Google Ads, build landing pages, set up lead tracking, manage review systems.' },
  { step: '04', title: 'Optimise', desc: 'Weekly reporting, live adjustments, scale what\'s filling your calendar.' },
];

const RESULTS = [
  { client: 'Garage Door Repairs 24/7', headline: '41,900 Clicks', supporting: 'Brisbane → Melbourne → Sydney expansion', blurb: 'Built a paid search engine that turned a one-city operator into a multi-state service.' },
  { client: 'Pressure Washing Guy', headline: '1,165 Leads', supporting: 'A$80.60 avg CPL across 24 months', blurb: 'Two years of consistent lead flow at sub-A$100 CPL. No spike, no drop.' },
];

const FAQS = [
  { q: 'Do you work with single-trade businesses or multi-location operators?', a: 'Both. We work with owner-operators doing A$300K/year and multi-location service groups doing A$5M+. The strategy differs, the results focus doesn\'t.' },
  { q: "What's the minimum monthly ad budget?", a: "We recommend A$2,000–A$3,000/month in ad spend for local trades. Below that, the geographic targeting is too limited to get real volume." },
  { q: 'How quickly will we see leads coming in?', a: 'Google Search can start generating leads in the first 1–2 weeks. Volume builds as we optimise. Most clients see consistent lead flow within 4–6 weeks.' },
  { q: 'Do you handle the landing page and lead tracking setup?', a: 'Yes. We build and manage landing pages tailored to your service and area, and set up proper lead tracking so we know exactly which campaigns are generating booked jobs.' },
  { q: 'Can you work with our existing CRM or lead management system?', a: "Yes. We've worked with ServiceM8, Jobber, HubSpot, and custom setups. We'll integrate lead tracking with whatever you're already using." },
  { q: 'What if we service a small geographic area?', a: "That's fine. Geo-targeted campaigns are our specialty. We'll build campaigns that only show to people in your actual service radius — no wasted spend on areas you can't service." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between gap-4 text-left">
        <span className="font-body font-semibold text-white text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="font-body text-white/60 text-base pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Trades() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#1E3A5F' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: '#F7BD01', color: '#000' }}>
              Trades & Services
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-white mt-6">
              Fill your calendar
              <br />
              with qualified jobs.
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We help service businesses: electricians, plumbers, builders, landscapers, cleaners, and trades. Consistent local leads. Booked jobs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#F7BD01' }}
              >
                Book a Strategy Call →
              </Link>
              <Link to="/pricing" className="inline-flex items-center font-body font-medium text-base py-3.5 text-white relative group">
                See pricing
                <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28" style={{ background: '#FAF0DA' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <blockquote className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight" style={{ color: '#1E3A5F' }}>
              "Inconsistent leads. Empty days. Then three jobs at once you can't service."
            </blockquote>
            <p className="font-body text-lg mt-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(30,58,95,0.7)' }}>
              Most trade businesses ride waves of feast-and-famine. Word-of-mouth is great when it's flowing, but it's not predictable. We build lead systems that fill your calendar consistently. Not just when your last customer happens to refer you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Actually Focus On */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Focus On.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              The metrics that decide whether your marketing fills your calendar or just burns budget.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-black/8 rounded-2xl p-8">
                  <div className="w-8 h-1 rounded-full mb-6" style={{ background: '#F7BD01' }} />
                  <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-16">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div>
                  <span className="font-heading font-bold text-6xl" style={{ color: '#F7BD01' }}>{s.step}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-3">{s.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-14">
              Results We've Driven.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESULTS.map((r, i) => (
              <ScrollReveal key={r.client} delay={i * 0.1}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-[#1E3A5F]/10 text-[#1E3A5F]">
                    Trades & Services
                  </span>
                  <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-black mt-6">{r.headline}</h3>
                  <p className="font-body text-black/40 text-sm mt-2">{r.supporting}</p>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-4">{r.blurb}</p>
                  <p className="font-heading font-bold text-sm uppercase tracking-tight text-black/80 mt-6">{r.client}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" style={{ background: '#1E3A5F' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-12">
              Trades & Services FAQ
            </h2>
          </ScrollReveal>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ background: '#1E3A5F' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Ready to fill your calendar?
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Free 30-min strategy call. We'll show you where your lead flow is breaking, and what we'd fix first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#F7BD01' }}
              >
                Book a Strategy Call →
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-white border border-white/30 transition-all duration-200 hover:bg-white hover:text-black"
              >
                See Pricing →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}