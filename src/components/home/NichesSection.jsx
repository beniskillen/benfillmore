import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const NICHES = [
  {
    to: '/hospitality',
    label: 'Industry',
    title: 'Hospitality',
    tagline: 'Fill every table.',
    hoverBg: '#961621',
  },
  {
    to: '/e-commerce',
    label: 'Industry',
    title: 'E-Commerce',
    tagline: 'From scroll to checkout.',
    hoverBg: '#EF6A3F',
  },
  {
    to: '/trades',
    label: 'Industry',
    title: 'Trades & Services',
    tagline: 'Fill your calendar.',
    hoverBg: '#1E3A5F',
  },
  {
    to: '/automotive',
    label: 'Industry',
    title: 'Automotive',
    tagline: 'From scroll to test drive.',
    hoverBg: '#8B0000',
  },
];

export default function NichesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
            Industries We Grow.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {NICHES.map((niche, i) => (
            <ScrollReveal key={niche.to} delay={i * 0.07}>
              <Link
                to={niche.to}
                className="group block rounded-2xl p-8 md:p-10 min-h-[220px] flex flex-col justify-end relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
                style={{ background: '#000' }}
              >
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: niche.hoverBg }}
                />
                <div className="relative z-10">
                  <span className="font-body text-white/40 text-xs uppercase tracking-widest">
                    {niche.label}
                  </span>
                  <h3 className="font-heading font-bold text-white text-3xl md:text-4xl uppercase tracking-tight mt-2">
                    {niche.title}
                  </h3>
                  <p className="font-body text-white/60 text-sm mt-2">
                    {niche.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                    <span className="font-body text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              to="/industries"
              className="font-body text-sm text-black/50 hover:text-black transition-colors inline-flex items-center gap-1"
            >
              See all industries →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}