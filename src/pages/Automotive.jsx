import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';

const FOCUS_ITEMS = [
  { title: 'Qualified test drive leads', desc: 'Not tire kickers. Buyers ready to drive in this week.' },
  { title: 'Inventory turnover', desc: 'Move aging stock faster with targeted campaigns built around specific vehicles, not generic "come see our cars".' },
  { title: 'Service bay bookings', desc: 'Fill your service department with bookings, not just walk-ins.' },
  { title: 'Local market dominance', desc: 'Be the first dealership or mechanic in your area when someone searches in your service radius.' },
  { title: 'Lead-to-sale tracking', desc: 'Connect online leads to actual sales — we track which campaigns drive cars off the lot, not just clicks.' },
  { title: 'Reputation & trust', desc: 'Reviews, video walkthroughs, customer stories. The signals that turn a website visit into a showroom visit.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Audit', desc: 'We look at your inventory, service capacity, current marketing, and lead conversion rates.' },
  { step: '02', title: 'Strategy', desc: 'Build a plan around your inventory mix, service margins, and local competition.' },
  { step: '03', title: 'Execute', desc: 'Launch Google + Meta campaigns, build inventory landing pages, manage video walkthroughs, set up lead tracking.' },
  { step: '04', title: 'Optimise', desc: 'Weekly reporting on leads, test drives, and sales. Adjust spend toward what\'s actually moving inventory.' },
];

const FAQS = [
  { q: 'Do you work with new car dealerships, used car lots, or both?', a: 'Both. The strategy differs slightly — new car buyers search differently to used car buyers — but we have playbooks for each.' },
  { q: "What's the minimum monthly ad budget?", a: "We recommend A$3,000–A$5,000/month in ad spend minimum. Automotive is competitive and requires enough budget to test across Google and Meta." },
  { q: 'Do you handle inventory feed setup for Google/Facebook?', a: "Yes. We set up and manage inventory feed integration for both Google Vehicle Ads and Facebook Dynamic Ads for Automotive." },
  { q: 'Can you work with our DMS (Dealer Management System)?', a: "We've worked with dealers using Reynolds & Reynolds, CDK, Dealer Socket, and custom setups. We'll integrate lead data and attribution properly." },
  { q: 'Do you support mechanics and service-only businesses?', a: "Yes. Service businesses get a different strategy to dealerships — focused on repeat bookings, service reminders, and local search dominance rather than inventory." },
  { q: 'How do you measure success — leads, test drives, or sales?', a: "All three, where possible. We track online leads, then work with you to close the loop on test drives and sales. Over time we optimise toward cost-per-car-sold, not just cost-per-click." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between gap-4 text-left">
        <span className="font-body font-semibold text-white text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="font-body text-white/60 text-base pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Automotive() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#8B0000' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: '#F7BD01', color: '#000' }}>
              Automotive
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-white mt-6">
              From scroll
              <br />
              to test drive.
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We help dealerships, used car lots, mechanics, and automotive businesses generate qualified leads, move inventory, and fill service bays — with marketing built around the way people actually buy cars in 2026.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#F7BD01' }}
              >
                Book a Strategy Call →
              </Link>
              <Link to="/pricing" className="inline-flex items-center font-body font-medium text-base py-3.5 text-white relative group">
                See pricing
                <span className="absolute bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <blockquote className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight" style={{ color: '#8B0000' }}>
              "Foot traffic is down. Lead quality is worse. And every dealer is running the same ads."
            </blockquote>
            <p className="font-body text-black/60 text-lg mt-8 max-w-2xl leading-relaxed">
              Automotive buyers research for weeks online before they ever walk into a showroom. Most automotive marketing still acts like it's 2015 — running price ads and hoping someone walks in. We build campaigns around the way people actually buy cars now.
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
              The metrics that separate great automotive marketing from ads that just look busy.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-black/8 rounded-2xl p-8">
                  <div className="w-8 h-1 rounded-full mb-6" style={{ background: '#F7BD01' }} />
                  <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                  <span className="font-heading font-bold text-6xl" style={{ color: '#F7BD01' }}>{s.step}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-3">{s.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies placeholder */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="bg-black rounded-2xl p-10 md:p-14">
              <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/60 uppercase tracking-widest">
                Coming Soon
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase tracking-tight text-white mt-6">
                Automotive case studies coming soon.
              </h3>
              <p className="font-body text-white/60 text-base leading-relaxed mt-4 max-w-2xl">
                Talk to us in the meantime — we'll walk through how we've thought about growing automotive businesses, and what we'd do for yours.
              </p>
              <div className="mt-8">
                <Link
                  to="/apply"
                  className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#F7BD01' }}
                >
                  Book a Strategy Call →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" style={{ background: '#8B0000' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-12">
              Automotive FAQ
            </h2>
          </ScrollReveal>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ background: '#8B0000' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Ready to move more inventory?
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Free 30-min strategy call. We'll show you where your marketing is leaking buyers, and what we'd fix first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#F7BD01' }}
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