import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import MediaCarousel from '../components/home/MediaCarousel';

const FOCUS_ITEMS = [
  {
    title: 'Filling slower weekdays',
    desc: 'Most venues are packed Saturdays and dead Tuesdays. We fix the Tuesdays.',
  },
  {
    title: 'Increasing repeat visits',
    desc: 'Bringing first-time diners back. The cheapest customer is the one who already loved you.',
  },
  {
    title: 'Launching new menus and events',
    desc: 'Not just announcing — building campaigns that drive actual bookings on launch night.',
  },
  {
    title: 'Growing your customer database',
    desc: 'Email, SMS, loyalty. The asset you own that doesn\'t depend on Meta\'s algorithm.',
  },
  {
    title: 'Driving direct bookings',
    desc: 'Less commission to platforms. More margin in your pocket.',
  },
  {
    title: 'Building local brand awareness',
    desc: 'Become the venue people in your area know, talk about, and recommend.',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Audit', desc: "We look at your bookings, customer flow, ad performance, content, and retention. Find where the leaks are." },
  { step: '02', title: 'Strategy', desc: "Build a plan around your capacity, margins, and what's actually filling tables vs. what's just looking busy." },
  { step: '03', title: 'Execute', desc: "Run paid ads, produce content, manage social, build retention systems. All hands-on." },
  { step: '04', title: 'Optimise', desc: "Weekly reporting, live adjustments, double down on what's filling tables." },
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
    q: 'Do we need a big following first?',
    a: "No. Paid ads don't care about your follower count. We target the right people in your area regardless of your starting audience size.",
  },
  {
    q: 'Can you work with small or single venues?',
    a: 'Yes. Single venues get the same attention as groups. We cap our roster intentionally so nothing gets deprioritised.',
  },
  {
    q: 'Do you create the content in-house?',
    a: 'Yes. UGC production, social content, and creative direction — all handled in-house. We brief, produce, and manage it.',
  },
  {
    q: 'Can you help with launches and events?',
    a: "Absolutely. We build launch campaigns that drive actual bookings, not just awareness. We've done new menu drops, venue openings, and ongoing event promotion.",
  },
  {
    q: 'Can you work with our booking platform (SevenRooms, OpenTable, ResDiary)?',
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
      {/* Hero — deep red background */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#961621' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: '#E9FF80', color: '#000' }}>
              Hospitality
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-white mt-6">
              Fill every table,
              <br />
              every night.
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We help restaurants, venues, and hotels turn quiet nights into booked-out weekends — and finally fix slow Tuesdays. Paid ads, content, and retention systems that drive bookings, repeat visits, and revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#E9FF80' }}
              >
                Book a Strategy Call →
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center font-body font-medium text-base py-3.5 text-white relative group"
              >
                See pricing
                <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem — cream */}
      <section className="py-20 md:py-28" style={{ background: '#FAF0DA' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <blockquote className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight" style={{ color: '#961621' }}>
              "A lot of venues post constantly and still have empty nights."
            </blockquote>
            <p className="font-body text-lg mt-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(150,22,33,0.75)' }}>
              Most hospitality marketing either looks good but doesn't convert, or burns money targeting the wrong people. We do something different.
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
              The pain points every venue owner knows but most marketing ignores.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-black/8 rounded-2xl p-8">
                  <div className="w-8 h-1 rounded-full mb-6" style={{ background: '#E9FF80' }} />
                  <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-black">
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