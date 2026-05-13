import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

const INDUSTRY_BLOCKS = [
  {
    to: '/hospitality',
    num: 'INDUSTRY 01',
    title: 'HOSPITALITY',
    tagline: 'Fill every table, every night.',
    body: 'We help restaurants, venues, hotels, and bars turn quiet nights into booked-out weekends — and finally fix slow Tuesdays.',
    cta: 'See how we grow hospitality brands →',
    bg: '#961621',
    tag: '#E9FF80',
    tagText: '#000',
  },
  {
    to: '/e-commerce',
    num: 'INDUSTRY 02',
    title: 'E-COMMERCE',
    tagline: 'From scroll to checkout.',
    body: 'We help DTC brands turn ad spend into revenue. Lower CAC. Higher LTV. Creative that converts. Systems that scale profitably.',
    cta: 'See how we grow e-commerce brands →',
    bg: '#EF6A3F',
    tag: '#D9F855',
    tagText: '#000',
  },
  {
    to: '/trades',
    num: 'INDUSTRY 03',
    title: 'TRADES & SERVICES',
    tagline: 'Fill your calendar with qualified jobs.',
    body: 'We help electricians, plumbers, builders, landscapers, cleaners, and service businesses generate consistent local leads and convert them into booked jobs.',
    cta: 'See how we grow service businesses →',
    bg: '#1E3A5F',
    tag: '#F7BD01',
    tagText: '#000',
  },
  {
    to: '/automotive',
    num: 'INDUSTRY 04',
    title: 'AUTOMOTIVE',
    tagline: 'From scroll to test drive.',
    body: 'We help dealerships, used car lots, mechanics, and auto service businesses generate qualified leads, fill service bays, and move inventory.',
    cta: 'See how we grow automotive brands →',
    bg: '#8B0000',
    tag: '#F7BD01',
    tagText: '#000',
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
              We focus.<br />So you grow.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              We don't try to do everything for everyone. We do four things, deeply — and we go further into your industry's actual problems than agencies that work with everyone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry blocks */}
      <section className="pb-0">
        {INDUSTRY_BLOCKS.map((block) => (
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
              <h2 className="font-heading font-bold text-white uppercase tracking-tight leading-[0.9]"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
              >
                {block.title}
              </h2>
              <p className="font-heading font-bold text-white/80 text-xl md:text-2xl mt-4">{block.tagline}</p>
              <p className="font-body text-white/65 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">{block.body}</p>
              <div className="mt-8 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                <span className="font-body font-medium text-base">{block.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Not sure which fits */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Not sure which one fits your business?
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Most businesses we work with have crossover. A restaurant group with an online merchandise store. A trades business with multi-location ambitions. A dealership with parts e-commerce. We figure out the actual lever — not the industry label.
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