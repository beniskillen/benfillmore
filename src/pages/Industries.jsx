import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';
import { ROI_GUARANTEE_CTA_LABEL, ROI_GUARANTEE_FORM_URL } from '../lib/cta';

const PRIMARY_BLOCKS = [
  {
    to: '/hospitality',
    num: 'PRIMARY FOCUS 01',
    title: 'HOSPITALITY',
    tagline: 'Find the right guests, then bring them back.',
    body: 'We help restaurants, venues, hotels and bars replace guesswork with a connected system: offer, content, paid media, tracking and reactivation.',
    cta: 'See the venue system',
    bg: '#961621',
    tag: '#E9FF80',
    tagText: '#000',
  },
  {
    to: '/e-commerce',
    num: 'PRIMARY FOCUS 02',
    title: 'E-COMMERCE',
    tagline: 'From scroll to checkout.',
    body: 'We help DTC brands turn ad spend into revenue. Lower CAC. Higher LTV. Creative that converts. Systems that scale profitably.',
    cta: 'See how we grow e-commerce brands',
    bg: '#EF6A3F',
    tag: '#D9F855',
    tagText: '#000',
  },
];

const SECONDARY_BLOCKS = [
  {
    to: '/trades',
    title: 'Trades & Service Businesses',
    body: 'Electricians, plumbers, builders, landscapers. We build lead systems that fill calendars consistently.',
    cta: 'See trades work',
  },
  {
    to: '/automotive',
    title: 'Automotive',
    body: 'Dealerships, mechanics, auto service. We help move inventory and fill service bays with qualified leads.',
    cta: 'See automotive work',
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-black/40">Industries</span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-black mt-4">
              We focus.<br />So demand gets clearer.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Hospitality is the core focus: venues that need a clearer way to find customers, book them and bring them back.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Primary focus blocks */}
      <section className="pb-0">
        {PRIMARY_BLOCKS.map((block) => (
          <Link
            key={block.to}
            to={block.to}
            className="group block w-full py-20 md:py-28 px-6 md:px-8 transition-opacity duration-200 hover:opacity-95"
            style={{ background: block.bg }}
          >
            <div className="max-w-7xl mx-auto">
              <span
                className="inline-block font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{ background: block.tag, color: block.tagText }}
              >
                {block.num}
              </span>
              <h2
                className="font-heading font-bold text-white uppercase tracking-tight leading-[0.9]"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
              >
                {block.title}
              </h2>
              <p className="font-heading font-bold text-white/80 text-xl md:text-2xl mt-4">{block.tagline}</p>
              <p className="font-body text-white/65 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">{block.body}</p>
              <div className="mt-8 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                <span className="font-body font-medium text-base">{block.cta} →</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Secondary: Other industries */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl md:text-4xl uppercase tracking-tight text-black mb-3">
              We've Also Grown Businesses In...
            </h2>
            <p className="font-body text-black/50 text-base max-w-xl mb-12">
              These aren't our primary focus, but we've built real results in these spaces.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SECONDARY_BLOCKS.map((block, i) => (
              <ScrollReveal key={block.to} delay={i * 0.1}>
                <Link
                  to={block.to}
                  className="group block bg-white border border-black/8 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-black">{block.title}</h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">{block.body}</p>
                  <div className="mt-5 flex items-center gap-1 text-black/40 group-hover:text-black transition-colors font-body text-sm font-medium">
                    {block.cta} →
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Not sure which one fits your business?
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Most businesses we work with have crossover. A restaurant group with an online merchandise store. A trades business with multi-location ambitions. We figure out the actual lever, not the industry label.
            </p>
            <div className="mt-10">
              <PillButton href={ROI_GUARANTEE_FORM_URL} variant="primary-inverted">
                {ROI_GUARANTEE_CTA_LABEL}
              </PillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
