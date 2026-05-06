import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import MediaCarousel from '../components/home/MediaCarousel';

const OUTCOMES = [
  {
    title: 'Fill Empty Seats',
    desc: 'Targeted local ads that turn slow nights into busy ones. Built around your actual capacity and margins.',
  },
  {
    title: 'Build a Waitlist',
    desc: "Make your venue the place people are trying to get into, not the place with availability tonight.",
  },
  {
    title: 'Turn Diners into Regulars',
    desc: 'Email, retention, and loyalty systems that bring first-timers back.',
  },
  {
    title: 'Drive Real Foot Traffic',
    desc: 'Local awareness and paid social that fills your venue with paying customers, not Instagram tourists.',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Audit', desc: "We go through your current marketing, accounts, and numbers. Honestly." },
  { step: '02', title: 'Strategy', desc: "A clear plan. What to focus on, what to ignore, what to spend." },
  { step: '03', title: 'Execute', desc: "We run the campaigns, make the content, ship the work." },
  { step: '04', title: 'Optimize', desc: "We review what's working every week. Double down. Cut what's not." },
];

const FAQS = [
  {
    q: 'How long until we see results?',
    a: 'Most clients see meaningful improvement in 4-6 weeks. Paid ads can show results in the first 1-2 weeks. Content builds over time.',
  },
  {
    q: "What's the minimum monthly ad budget?",
    a: "We recommend a minimum of A$3,000/month in ad spend to get meaningful data and results. The management fee is separate.",
  },
  {
    q: 'Do you work with single venues or chains?',
    a: 'Both. Single venues get the same level of attention as multi-location groups. We cap our client roster intentionally so nothing gets deprioritized.',
  },
  {
    q: 'Do you handle photography and video too?',
    a: 'We handle UGC production, creative direction, and content strategy. For in-person shoots, we can coordinate and brief — let us know what you need.',
  },
  {
    q: 'Can you work with our booking platform (SevenRooms, OpenTable)?',
    a: "Yes. We've worked with SevenRooms, OpenTable, ResDiary, and custom booking flows. We'll integrate your tracking properly so we know what's actually converting.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between gap-4 text-left"
      >
        <span className="font-body font-semibold text-white text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="font-body text-white/60 text-base pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hospitality() {
  return (
    <>
      {/* Hero — cream background */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#FAF0DA' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest" style={{ color: '#961621' }}>
              Hospitality
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-black mt-4">
              Fill every table,
              <br />
              every night.
            </h1>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              We help restaurants, venues, and hotels go from quiet nights to waitlists. Paid ads that drive bookings. Content that makes people want to come in. Strategy that turns first-time visitors into regulars.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#961621' }}
              >
                Apply for a Free Strategy Call →
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center font-body font-medium text-base py-3.5 relative group"
                style={{ color: '#961621' }}
              >
                See pricing
                <span className="absolute bottom-2 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full" style={{ background: '#961621' }} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem — deep red */}
      <section className="py-20 md:py-28" style={{ background: '#961621' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <blockquote className="font-heading font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight">
              "Quiet nights. Empty Tuesdays. Marketing that looks busy but doesn't fill seats. Sound familiar?"
            </blockquote>
            <p className="font-body text-white/70 text-lg mt-8 max-w-2xl leading-relaxed">
              Most hospitality marketing is either invisible or interruptive. Neither fills tables. We do something different.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do — 4 outcomes */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-14">
              What We Do for Hospitality
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUTCOMES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  <div className="w-8 h-1 rounded-full mb-6" style={{ background: '#E9FF80' }} />
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Carousel */}
      <MediaCarousel
        title="WHAT WE'VE SHIPPED FOR HOSPITALITY BRANDS."
        subtitle="Real content, real ads, real results."
      />

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
                  <span className="font-heading font-bold text-6xl" style={{ color: '#E9FF80' }}>{s.step}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-3">{s.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" style={{ background: '#961621' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-12">
              Hospitality FAQ
            </h2>
          </ScrollReveal>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ background: '#961621' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Ready to fill every table?
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Free 30-min strategy call. We'll tell you exactly what we'd do for your venue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#E9FF80' }}
              >
                Apply Now →
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