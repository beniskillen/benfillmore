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
            Niches We Serve
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0}>
            <Link
              to="/niches#hospitality"
              className="group block bg-black rounded-2xl p-10 md:p-14 min-h-[280px] md:min-h-[340px] flex flex-col justify-end relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#961621] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="font-heading font-bold text-white/40 text-sm uppercase tracking-widest">
                  Niche
                </span>
                <h3 className="font-heading font-bold text-white text-3xl md:text-5xl uppercase tracking-tight mt-2">
                  Hospitality
                </h3>
                <p className="font-body text-white/60 text-base mt-4 max-w-sm">
                  Fill every table. From quiet nights to waitlists.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              to="/niches#ecommerce"
              className="group block bg-black rounded-2xl p-10 md:p-14 min-h-[280px] md:min-h-[340px] flex flex-col justify-end relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#EF6A3F] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="font-heading font-bold text-white/40 text-sm uppercase tracking-widest">
                  Niche
                </span>
                <h3 className="font-heading font-bold text-white text-3xl md:text-5xl uppercase tracking-tight mt-2">
                  E-Commerce
                </h3>
                <p className="font-body text-white/60 text-base mt-4 max-w-sm">
                  Turn clicks into customers. Scroll to checkout.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
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