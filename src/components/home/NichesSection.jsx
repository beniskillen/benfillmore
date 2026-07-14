import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function NichesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
            Our Vertical.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6">
          <ScrollReveal delay={0}>
            <Link
              to="/hospitality"
              className="group block rounded-2xl p-10 md:p-14 min-h-[300px] md:min-h-[360px] flex flex-col justify-end relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{ background: '#000' }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: '#961621' }}
              />
              <div className="relative z-10">
                <span className="font-heading font-bold text-white/40 text-sm uppercase tracking-widest">
                  Industry
                </span>
                <h3 className="font-heading font-bold text-white text-4xl md:text-6xl uppercase tracking-tight mt-2">
                  Hospitality
                </h3>
                <p className="font-body text-white/60 text-base mt-4 max-w-sm">
                  Fill every table. From quiet nights to waitlists.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}