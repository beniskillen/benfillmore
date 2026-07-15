import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import MediaCarousel from '../components/home/MediaCarousel';
import RoiGuaranteeLink from '../components/shared/RoiGuaranteeLink';

const FOCUS_ITEMS = [
  {
    title: 'Filling slower weekdays',
    desc: 'Slow nights need their own offer, audience and campaign. Not another generic post.',
  },
  {
    title: 'Increasing repeat visits',
    desc: 'Bring first-time guests back. The cheapest customer is the one who already liked you.',
  },
  {
    title: 'Launching new menus and events',
    desc: 'Turn launches into bookings, not just announcements.',
  },
  {
    title: 'Growing your customer database',
    desc: 'Email, SMS and loyalty data. The audience you own, separate from Meta.',
  },
  {
    title: 'Driving direct bookings',
    desc: 'Less commission to platforms. More margin in your pocket.',
  },
  {
    title: 'Building local brand awareness',
    desc: 'Become the venue locals remember when they are ready to book.',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Map the leak', desc: "Look at bookings, customer data, ad performance, content and slow nights." },
  { step: '02', title: 'Build the offer', desc: "Create a simple reason to book, tied to margin, capacity and the customers you need." },
  { step: '03', title: 'Run the system', desc: "Launch paid media, content, tracking, direct booking paths and reactivation." },
  { step: '04', title: 'Make it sharper', desc: "Review the numbers weekly and move effort toward what brings people in." },
];

const FAQS = [
  {
    q: 'How long until we see results?',
    a: 'Reactivation can move first because it starts with people who already know you. Cold demand usually needs a few weeks of offer, creative and tracking data.',
  },
  {
    q: "What's the minimum monthly ad budget?",
    a: "We recommend a minimum of A$3,000/month in ad spend to get meaningful data and results. The management fee is separate.",
  },
  {
    q: 'Do we need a big following first?',
    a: "No. A following is not a booking system. We target the right local customers and build the path around them.",
  },
  {
    q: 'Can you work with small or single venues?',
    a: 'Yes. Single venues get the same attention as groups. We cap our roster intentionally so nothing gets deprioritised.',
  },
  {
    q: 'Do you create the content in-house?',
    a: 'Yes. UGC production, social content, and creative direction. All handled in-house. We brief, produce, and manage it.',
  },
  {
    q: 'Can you help with launches and events?',
    a: "Yes. Launches work when offer, creative, paid media and booking path are built together.",
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
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#b40425' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: '#faf0da', color: '#000' }}>
              Hospitality
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-white mt-6">
              Find the right guests,
              <br />
              then bring them back.
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Most venues can serve a great night. Fewer have a reliable way to create demand. We connect paid media, content, tracking and reactivation so bookings become a system, not a guess.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <RoiGuaranteeLink
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#faf0da' }}
              />
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
              "A good venue still needs a system for demand."
            </blockquote>
            <p className="font-body text-lg mt-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(150,22,33,0.75)' }}>
              They post, boost, discount and hope. The better answer is a connected system: offer, audience, creative, media, booking path and follow-up.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Actually Focus On */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Fix.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              The parts of the system most venue marketing ignores.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-black/8 rounded-2xl p-8">
                  <div className="w-8 h-1 rounded-full mb-6 bg-black/10" />
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
      <section className="py-24 md:py-32 text-white" style={{ background: '#b40425' }}>
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
                  <span className="font-heading font-bold text-6xl text-white/30">{s.step}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-3">{s.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" style={{ background: '#b40425' }}>
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
      <section className="py-24 md:py-32" style={{ background: '#000000' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Ready to fill the room with more control?
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Free 30-minute strategy call. We'll show you where customers are leaking and what we'd fix first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RoiGuaranteeLink
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#faf0da' }}
              />
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
