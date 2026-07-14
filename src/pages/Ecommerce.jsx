import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import MediaCarousel from '../components/home/MediaCarousel';
import { CASE_STUDIES } from '../lib/caseStudiesData';

const OUTCOMES = [
  {
    title: 'Profitable ROAS at Scale',
    desc: "Not just 5x on A$5K/month. 3-4x MER on A$50K+/month. Built to scale without breaking margins.",
  },
  {
    title: 'Creative That Converts',
    desc: "UGC, hooks, and ad creative built for performance. We test angles weekly, beat creative fatigue, and find scalable winners.",
  },
  {
    title: 'LTV That Compounds',
    desc: "Email flows, SMS, retention systems. The revenue that doesn't show up in Meta's ROAS column, but pays the bills.",
  },
  {
    title: 'A System, Not Campaigns',
    desc: "Most agencies run campaigns. We build a marketing system that keeps working when you scale. Not one that breaks at A$50K/month spend.",
  },
];

const BREAKS_FIRST = [
  { title: 'Creative fatigue.', desc: "Your winning ad stops working at 2-3x your usual spend. Frequency climbs. CTR drops." },
  { title: 'Rising CACs.', desc: "What used to cost A$30 to acquire now costs A$60. Margins compress." },
  { title: 'Weak retention.', desc: "All your revenue depends on new acquisition. Repeat purchase rate is below 20%." },
  { title: 'Scaling too fast.', desc: "You doubled spend overnight. ROAS halved. Now you don't know if it's the algorithm, the creative, or the audience." },
  { title: 'Poor attribution.', desc: "Meta says 4x ROAS. Shopify says 2x. You don't know who to trust." },
  { title: 'Low repeat purchase rate.', desc: "Your AOV is fine. Your first-purchase margin is fine. But customers don't come back." },
  { title: 'Relying on one winning ad.', desc: "When that ad dies (and it will), you're back to zero. No creative pipeline behind it." },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Audit', desc: "We look at your account, funnel, creative library, and customer data. Find the bottlenecks." },
  { step: '02', title: 'Strategy', desc: "Build a plan around your margins, AOV, LTV, and growth targets." },
  { step: '03', title: 'Execute', desc: "Run paid ads, produce UGC, ship creative tests weekly, build retention flows." },
  { step: '04', title: 'Optimise', desc: "Weekly reporting, live adjustments, scale what's profitable." },
];

const FAQS = [
  {
    q: "What's the minimum monthly ad spend?",
    a: "We recommend A$5,000/month minimum to get meaningful data across Meta and Google. Below that, the sample sizes are too small to optimise properly.",
  },
  {
    q: 'Do you produce UGC in-house?',
    a: "Yes. We brief and manage UGC creators directly. You don't have to find them, brief them, or chase them for files.",
  },
  {
    q: 'Do you work with Shopify, Magento, other platforms?',
    a: "Shopify is our primary platform. We also work with WooCommerce and custom builds. We'll handle the tracking setup properly regardless of platform.",
  },
  {
    q: 'How quickly will I see results?',
    a: "Paid ads typically show directional results in 2-4 weeks. Email takes a month or two to build and compound. UGC content performance depends on the creative: some pieces are instant, some take time.",
  },
  {
    q: 'Do you handle email and SMS too, or just paid ads?',
    a: "Both, at Growth tier and above. Email flows, SMS campaigns, segmentation, list health. It's all part of the system.",
  },
  {
    q: 'How do you handle attribution?',
    a: "We set up proper UTM tracking and cross-reference platform data with Shopify revenue. We'll be upfront about the discrepancy between Meta-reported ROAS and blended MER, and we optimise for both.",
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

const ECOM_STUDIES = CASE_STUDIES.filter(s => s.industry.toLowerCase().includes('e-commerce') || s.id === '5-hounds');

export default function Ecommerce() {
  return (
    <>
      {/* Hero — peach */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 min-h-[80vh] flex items-center" style={{ background: '#FCDCC5' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <span className="font-heading font-bold text-xs uppercase tracking-widest" style={{ color: '#EF6A3F' }}>
              E-Commerce
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] uppercase tracking-tight text-black mt-4">
              From scroll
              <br />
              to checkout.
            </h1>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              We help DTC brands turn ad spend into revenue. Lower CAC. Higher LTV. Creative that converts. Systems that scale e-commerce profitably.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#EF6A3F' }}
              >
                Book a Strategy Call →
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center font-body font-medium text-base py-3.5 relative group"
                style={{ color: '#EF6A3F' }}
              >
                See pricing
                <span className="absolute bottom-2 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full" style={{ background: '#EF6A3F' }} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem — orange */}
      <section className="py-20 md:py-28" style={{ background: '#EF6A3F' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <blockquote className="font-heading font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight uppercase tracking-tight">
              "Your ads are running. Your revenue isn't growing. Sound familiar?"
            </blockquote>
            <p className="font-body text-white/80 text-lg mt-8 max-w-2xl leading-relaxed">
              Most e-commerce brands burn ad spend on creative that doesn't convert and campaigns that were never built to scale. Rising CPMs. Creative fatigue. Weak retention. We fix that.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-14">
              What We Do for E-Commerce
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUTCOMES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  <div className="w-8 h-1 rounded-full mb-6" style={{ background: '#D9F855' }} />
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

      {/* What Usually Breaks First */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4">
              What Usually Breaks First When Brands Scale.
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mb-14">
              We've seen these patterns across the accounts we've grown. If any of them sound familiar, we should talk.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BREAKS_FIRST.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="border border-white/10 rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Carousel */}
      <MediaCarousel
        title="WHAT WE'VE SHIPPED FOR E-COMMERCE BRANDS."
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
                  <span className="font-heading font-bold text-6xl" style={{ color: '#D9F855' }}>{s.step}</span>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-3">{s.title}</h3>
                  <p className="font-body text-white/60 text-base leading-relaxed mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-14">
              E-Commerce Results
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ECOM_STUDIES.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 0.1}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  <span className="font-body text-xs font-medium px-3 py-1 rounded-full" style={{ background: '#FCDCC5', color: '#EF6A3F' }}>
                    {study.industry}
                  </span>
                  <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-black mt-6">
                    {study.headline}
                  </h3>
                  <p className="font-body text-black/40 text-sm mt-1">{study.supporting}</p>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-4">{study.blurb}</p>
                  <p className="font-heading font-bold text-sm uppercase tracking-tight text-black/70 mt-6">{study.client}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" style={{ background: '#EF6A3F' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-12">
              E-Commerce FAQ
            </h2>
          </ScrollReveal>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ background: '#EF6A3F' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Ready to scale profitably?
            </h2>
            <p className="font-body text-white/80 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Free 30-min strategy call. We'll show you where your account is leaking revenue, what's limiting scale, and what we'd fix first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#D9F855' }}
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