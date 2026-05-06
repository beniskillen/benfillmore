import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

const HOSPITALITY_OUTCOMES = [
  'Fill empty seats with paying customers',
  'Build a waitlist, not just a guest list',
  'Turn one-time diners into repeat regulars',
  'Local awareness that actually drives foot traffic',
];

const ECOMMERCE_OUTCOMES = [
  'Profitable ROAS at scale, not just on launch',
  'Creative that converts, not just content that posts',
  'Customer LTV that grows month over month',
  'A marketing system that doesn\'t break when you scale',
];

export default function Niches() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] uppercase tracking-tight text-black">
              We focus. So you grow.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              We don't try to do everything for everyone. We do two things, deeply.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#961621]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="font-heading font-bold text-white/30 text-sm uppercase tracking-widest">Niche</span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mt-3">
              Hospitality
            </h2>
            <p className="font-heading font-bold text-xl md:text-2xl text-[#ED2045] mt-4">
              Fill every table, every night.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed mt-6 max-w-2xl">
              We help restaurants, venues, and hotels go from quiet nights to waitlists. Paid ads that drive bookings. Content that makes people want to come in. Strategy that turns first-time visitors into regulars.
            </p>

            <ul className="mt-10 space-y-4">
              {HOSPITALITY_OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED2045] mt-2.5 flex-shrink-0" />
                  <span className="font-body text-white/70 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 font-body font-semibold text-white border border-white/20 px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
              >
                See how we do it <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ecommerce */}
      <section id="ecommerce" className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EF6A3F]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <ScrollReveal>
            <span className="font-heading font-bold text-white/30 text-sm uppercase tracking-widest">Niche</span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mt-3">
              E-Commerce
            </h2>
            <p className="font-heading font-bold text-xl md:text-2xl text-[#EF6A3F] mt-4">
              From scroll to checkout.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed mt-6 max-w-2xl">
              We help DTC brands turn ad spend into revenue. UGC that stops the scroll. Paid ads that scale profitably. Email and retention that compound LTV.
            </p>

            <ul className="mt-10 space-y-4">
              {ECOMMERCE_OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF6A3F] mt-2.5 flex-shrink-0" />
                  <span className="font-body text-white/70 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 font-body font-semibold text-white border border-white/20 px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
              >
                See how we do it <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Don't fit */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <p className="font-body text-black/50 text-lg md:text-xl">
              Don't fit into one of these? We get it.{' '}
              <Link to="/apply" className="text-black font-medium underline underline-offset-4 hover:text-black/70 transition-colors">
                Reach out anyway.
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}