import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';

const TIERS = [
  {
    name: 'Starter',
    price: 'A$2,500',
    period: '/ month',
    tagline: 'For brands ready to start shipping consistent marketing.',
    popular: false,
    includes: [
      'Paid Ads (Meta or Google — pick one)',
      'Up to A$10K/month ad spend managed',
      '4 UGC videos / month',
      'Monthly social content (12 posts)',
      'Bi-weekly strategy calls',
      'Weekly reporting',
    ],
  },
  {
    name: 'Growth',
    price: 'A$4,000',
    period: '/ month',
    tagline: 'For brands ready to scale across paid and content.',
    popular: true,
    includes: [
      'Paid Ads (Meta + Google)',
      'Up to A$30K/month ad spend managed',
      '8 UGC videos / month',
      'Weekly social content (20 posts)',
      'Weekly strategy calls',
      'Custom dashboard reporting',
      'Email/SMS retention strategy',
    ],
  },
  {
    name: 'Scale',
    price: 'A$7,500',
    period: '/ month',
    tagline: "For brands scaling past A$50K/month in revenue.",
    popular: false,
    includes: [
      'Full paid media (Meta + Google + YouTube + retargeting)',
      'Up to A$80K/month ad spend managed',
      '12+ UGC videos / month',
      'Full social management (30+ posts)',
      'Daily Slack access',
      'Bi-weekly strategy + monthly executive review',
      'Email + SMS retention execution',
      'Influencer/affiliate strategy',
    ],
  },
];

const ALWAYS_INCLUDED = [
  {
    title: 'Direct access to Noam + Melina',
    desc: 'No account managers. No handoffs. The people doing the work are the people you talk to.',
  },
  {
    title: 'Real reporting, not vanity metrics',
    desc: 'Weekly numbers that actually matter.',
  },
  {
    title: 'Hands-on creative',
    desc: 'UGC produced by real creators, briefed and managed in-house.',
  },
  {
    title: 'Strategy calls when you need them',
    desc: "We're not on a quarterly review schedule.",
  },
];

const FAQS = [
  {
    q: 'Is there a contract?',
    a: "We work month-to-month. No 12-month lock-ins. If we're not delivering, you should be able to leave.",
  },
  {
    q: "What's not included?",
    a: "Ad spend (paid directly to Meta/Google by you). Influencer fees (passed through at cost). Production for in-person photo/video shoots (quoted separately if needed).",
  },
  {
    q: 'How quickly can we start?',
    a: "Usually 1-2 weeks from contract to first ads live. Faster if your accounts and assets are already set up.",
  },
  {
    q: 'Do you work with brands outside Australia?',
    a: "Yes. Most of our clients are AU-based, but we work with US, UK, and EU brands too.",
  },
  {
    q: 'Can I switch tiers later?',
    a: "Anytime. Up or down. We adjust as your business changes.",
  },
  {
    q: 'What if I want to add or remove specific services?',
    a: "Talk to us. The tiers are starting points, not boxes. We'll customize.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between gap-4 text-left"
      >
        <span className="font-body font-semibold text-black text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-black/40 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
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
            <p className="font-body text-black/60 text-base pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,6vw,5rem)] leading-[0.95] uppercase tracking-tight text-black">
              No hidden fees.
              <br />
              No "book a call" games.
            </h1>
            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Three packages. Pick what fits. Or talk to us about something custom. Either way — straight answers, no theatre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 md:p-10 flex flex-col h-full transition-all duration-300 ${
                    tier.popular
                      ? 'bg-black text-white shadow-2xl scale-105 border-0'
                      : 'bg-white border border-black/8 hover:-translate-y-1 hover:shadow-xl'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-black font-heading font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className={`font-heading font-bold text-2xl uppercase tracking-tight ${tier.popular ? 'text-white' : 'text-black'}`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className={`font-heading font-bold text-4xl md:text-5xl ${tier.popular ? 'text-white' : 'text-black'}`}>
                        {tier.price}
                      </span>
                      <span className={`font-body text-sm ${tier.popular ? 'text-white/50' : 'text-black/40'}`}>
                        {tier.period}
                      </span>
                    </div>
                    <p className={`font-body text-sm leading-relaxed mt-3 ${tier.popular ? 'text-white/60' : 'text-black/50'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-white/60' : 'text-black/40'}`} />
                          <span className={`font-body text-sm leading-relaxed ${tier.popular ? 'text-white/80' : 'text-black/70'}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Link
                      to="/apply"
                      className={`block w-full text-center font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                        tier.popular
                          ? 'bg-white text-black hover:shadow-xl'
                          : 'bg-black text-white hover:shadow-lg'
                      }`}
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Need something custom?
            </h2>
            <p className="font-body text-white/60 text-lg mt-6 max-w-xl mx-auto">
              We build packages around your goals, not around our menu. If none of these fit, talk to us. We'll figure it out together.
            </p>
            <div className="mt-10">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full bg-white text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Talk to Us →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Always Included */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-14">
              Always Included
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ALWAYS_INCLUDED.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white border border-black/8 rounded-2xl p-8">
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

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-12">
              Pricing FAQ
            </h2>
          </ScrollReveal>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-background border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black">
              Still not sure?
            </h2>
            <p className="font-body text-black/60 text-lg mt-6 max-w-xl mx-auto">
              Book a free 30-min call. We'll listen, ask questions, and tell you honestly whether we're the right fit. No pitch, no pressure.
            </p>
            <div className="mt-10">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full bg-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a Call →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}