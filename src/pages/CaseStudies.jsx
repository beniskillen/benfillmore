import React, { useState } from 'react';
import { ArrowRight, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';
import { CASE_STUDIES } from '../lib/caseStudiesData';

function getIndustryColor(industry) {
  const i = industry.toLowerCase();
  if (i.includes('e-commerce')) return 'bg-[#EF6A3F]/10 text-[#EF6A3F]';
  if (i.includes('trades')) return 'bg-[#1E3A5F]/10 text-[#1E3A5F]';
  if (i.includes('automotive')) return 'bg-[#8B0000]/10 text-[#8B0000]';
  if (i.includes('hospitality')) return 'bg-[#961621]/10 text-[#961621]';
  return 'bg-black/5 text-black/70';
}

function CaseStudyCard({ study, onClick }) {
  const industryColor = getIndustryColor(study.industry);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-black/8 rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <span className={`inline-block font-body text-xs font-medium px-3 py-1 rounded-full ${industryColor}`}>
        {study.industry}
      </span>
      <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-black mt-6">
        {study.headline}
      </h3>
      <p className="font-body text-black/40 text-sm mt-2">{study.supporting}</p>
      <p className="font-body text-black/60 text-base leading-relaxed mt-4">
        {study.blurb}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="font-heading font-bold text-sm uppercase tracking-tight text-black/80">
          {study.client}
        </span>
        <span className="flex items-center gap-1 text-black/40 group-hover:text-black transition-colors font-body text-sm">
          Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
}

function CaseStudyDetail({ study, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto my-8 md:my-16 bg-white rounded-2xl p-8 md:p-14 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-black/40 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-black/40 hover:text-black transition-colors font-body text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to case studies
        </button>

        <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-black/5 text-black/70">
          {study.industry}
        </span>

        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mt-6">
          {study.client}
        </h2>

        <div className="flex items-baseline gap-6 mt-6">
          <span className="font-heading font-bold text-4xl md:text-6xl text-black">{study.headline}</span>
          <span className="font-body text-black/40 text-sm">{study.supporting}</span>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-4">
              Background
            </h3>
            <p className="font-body text-black/70 text-base leading-relaxed">{study.background}</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-4">
              What We Did
            </h3>
            <div className="space-y-4">
              {study.whatWeDid.map((p, i) => (
                <p key={i} className="font-body text-black/70 text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-4">
              The Outcome
            </h3>
            <p className="font-body text-black/70 text-base leading-relaxed">{study.outcome}</p>
          </div>

          {study.quote && (
            <blockquote className="border-l-2 border-black pl-6 py-2">
              <p className="font-body text-black/80 text-lg italic leading-relaxed">"{study.quote}"</p>
            </blockquote>
          )}
        </div>

        <div className="mt-14 pt-8 border-t border-black/5">
          <PillButton to="/apply">
            Book a strategy call →
          </PillButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

const FILTER_TABS = ['All', 'Hospitality'];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' || activeFilter === 'Strategic Examples'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.industry.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] uppercase tracking-tight text-black">
              Real work. Strategic thinking.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Some of these are clients we've worked with. Some are brands we'd love to work with — broken down to show how we think and how we'd grow them. Either way: real strategy, no fluff.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`font-body text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/60 border-black/10 hover:border-black hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 0.08}>
                <CaseStudyCard study={study} onClick={() => setSelectedStudy(study)} />
              </ScrollReveal>
            ))}
          </div>

          {/* Strategic examples placeholder */}
          <ScrollReveal>
            <div className="mt-10 bg-black rounded-2xl p-10 text-center">
              <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/60 uppercase tracking-widest">
                Coming Soon
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-white mt-6">
                Strategic Example Breakdowns
              </h3>
              <p className="font-body text-white/60 text-base leading-relaxed mt-3 max-w-xl mx-auto">
                In-depth breakdowns showing exactly how we'd grow real hospitality brands. Real strategy, no fluff.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyDetail study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </AnimatePresence>

      <SectionCTABottom />
    </>
  );
}

function SectionCTABottom() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight">
            Want results like these?
          </h2>
          <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            Free 30-min strategy call. No pitch deck. No fluff.
          </p>
          <div className="mt-10">
            <PillButton to="/apply" variant="primary-inverted">
              Book a Strategy Call →
            </PillButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}