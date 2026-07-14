import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';

const BELIEFS = [
  'Doing over talking.',
  'Substance over show.',
  'Hands on, never handed off.',
  "Honest about what works. And what doesn't.",
  'Built to move the needle, not the deck.',
];

const TEAM = [
  {
    name: 'Noam Shabat',
    role: 'Performance & Strategy',
    bio: "I run paid acquisition for hospitality brands. 8 years in performance marketing across Meta, Google, and analytics. Built campaigns that scaled venues from empty midweeks to fully booked.",
    focus: ['Paid Media', 'Strategy', 'Analytics'],
    image: 'https://media.base44.com/images/public/69fac9355f793a9829c2542e/5d0751678_WhatsAppImage2026-06-05at061528.jpg',
  },
  {
    name: 'Melina Bilotta',
    role: 'Content & Creative',
    bio: "I lead content and creative for our clients. UGC, social, brand storytelling. Built creative engines for hospitality and DTC brands across Australia.",
    focus: ['Content', 'UGC', 'Social', 'Creative Direction'],
    image: 'https://media.base44.com/images/public/69fac9355f793a9829c2542e/e7faf47b2_WhatsAppImage2026-06-11at072301.jpg',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28" style={{ background: '#b40425' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-white max-w-5xl">
              We got tired of watching good businesses get bad marketing.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 md:py-28" style={{ background: '#FAF0DA' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(150,22,33,0.75)' }}>
              We worked inside agencies and saw the gap between what was sold and what actually got delivered.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6" style={{ color: 'rgba(150,22,33,0.75)' }}>
              Businesses oversold, then handed off. Strategies that looked good in presentations but didn't translate into performance. Too much effort on how things appeared, not enough on whether they worked.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6" style={{ color: 'rgba(150,22,33,0.75)' }}>
              We watched brands spend A$15K–A$30K a month on strategies nobody executed properly. Beautiful decks. Weak content. Junior staff running accounts they didn't understand.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6" style={{ color: 'rgba(150,22,33,0.75)' }}>
              Meanwhile, the businesses actually growing were the ones moving fast, posting consistently, and adapting in real time.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mt-6" style={{ color: 'rgba(150,22,33,0.75)' }}>
              So we built Fillmore to stay closer to the work. Focus on what actually drives growth. Cut everything that doesn't.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 md:py-32" style={{ background: '#FAF0DA' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest mb-12" style={{ color: 'rgba(150,22,33,0.5)' }}>
              What We Believe
            </h2>
          </ScrollReveal>
          <div className="space-y-6 md:space-y-8">
            {BELIEFS.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.08}>
                <p className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight" style={{ color: '#961621' }}>
                  {b}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Got Here */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-8">
              How We Got Here.
            </h2>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed">
              Noam started running paid ads in 2018, working with hospitality brands across Australia. Eight years and millions in ad spend later, he built systems that turned quiet venues into fully booked operations. Along the way he saw the same pattern over and over: businesses paying agencies thousands a month and getting back PDFs instead of performance.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              Melina came from the creative side, leading content and UGC production for hospitality and DTC brands. She watched founders pour budget into beautiful content that didn't drive a single booking or sale, because no one was thinking about how content connects to actual revenue.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              We met, compared notes, and realised the same gap existed everywhere: creative without performance thinking, performance without creative thinking. So we built Fillmore to close that gap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 md:py-32" style={{ background: '#b40425' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-3">
              What Makes Us Different.
            </h2>
            <p className="font-body text-white/70 text-lg mb-16 max-w-2xl">
              It's not a list of services. It's how we actually operate.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'We Run Two Disciplines, Not Ten.',
                desc: "We don't do SEO, podcasts, billboards, or brand consulting. We do paid media and creative for hospitality. That's it. The narrower the focus, the deeper the work.",
              },
              {
                title: 'We Produce Creative In-House.',
                desc: "No outsourcing to freelancers we've never met. No briefs sent off and forgotten. The person directing the UGC, the person editing the ads, and the person running the campaigns are all in the same room.",
              },
              {
                title: 'We Show You the Real Numbers.',
                desc: "Weekly reporting on bookings, purchases, leads, and revenue. Not just clicks and impressions. If a campaign isn't working, we tell you. If a strategy needs to change, we change it.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="font-body text-white/70 text-base leading-relaxed mt-4">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work With Clients */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-3">
              How We Work With Clients.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-16">
              Not a sales pitch. Just how the relationship actually goes.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'We Start With Your Numbers.', desc: "Before we propose anything, we look at your current performance, your margins, and your real growth goals. No strategy makes sense without that context." },
              { step: '02', title: 'We Build a Plan You Can Actually Read.', desc: "No 40-page deck. A simple, clear roadmap of what we'll do, what we won't, and what we expect." },
              { step: '03', title: 'We Execute Hands-On.', desc: "We don't disappear after onboarding. The same people who pitched you are in your Slack, on your calls, and producing your campaigns every week." },
              { step: '04', title: 'We Adjust as We Learn.', desc: "What works on day 30 isn't what works on day 90. We optimise weekly, and we tell you why we're shifting." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div>
                  <span className="font-heading font-bold text-6xl text-black/8">{s.step}</span>
                  <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mt-2">{s.title}</h3>
                  <p className="font-body text-black/60 text-base leading-relaxed mt-3">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-16">
              The Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full rounded-lg mb-6" style={{ height: '500px', objectFit: 'cover', objectPosition: 'top' }} />
                  ) : (
                    <div className="w-20 h-20 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                      <span className="font-heading font-bold text-2xl text-black/30">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-black">
                    {member.name}
                  </h3>
                  <p className="font-body text-black/40 text-sm font-medium mt-1">{member.role}</p>
                  <p className="font-body text-black/70 text-base leading-relaxed mt-4">{member.bio}</p>
                  <div className="mt-6">
                    <p className="font-body text-black/40 text-xs uppercase tracking-wider font-medium mb-2">
                      What I focus on:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((f) => (
                        <span key={f} className="font-body text-xs px-3 py-1 rounded-full bg-black/5 text-black/60">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Actually Optimise For */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-4">
              What We Actually Optimise For.
            </h2>
            <p className="font-body text-black/50 text-lg max-w-2xl mb-14">
              The numbers that decide whether marketing scaled the business or just looked busy.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'CAC', full: 'Customer Acquisition Cost', desc: 'Paying less for new customers.' },
              { label: 'LTV', full: 'Lifetime Value', desc: 'Customers who come back and spend more.' },
              { label: 'CVR', full: 'Conversion Rate', desc: 'Turning traffic into customers.' },
              { label: 'Repeat Purchase Rate', full: null, desc: 'The cheapest customer is the one who already bought.' },
              { label: 'Booking Volume', full: null, desc: 'Full nights, not just full weekends.' },
              { label: 'Revenue Consistency', full: null, desc: 'Predictable growth, not spike-and-crash.' },
              { label: 'Profit per Campaign', full: null, desc: 'Margin matters more than ROAS.' },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.06}>
                <div className="bg-white border border-black/8 rounded-2xl p-7">
                  <p className="font-heading font-bold text-lg uppercase tracking-tight text-black">{m.label}</p>
                  {m.full && <p className="font-body text-xs text-black/40 mt-0.5">{m.full}</p>}
                  <p className="font-body text-black/60 text-sm leading-relaxed mt-3">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black mb-8">
              Our Approach
            </h2>
            <p className="font-body text-black/70 text-lg leading-relaxed">
              We don't pitch. We don't oversell. We don't have a sales team that hands you off to an account manager. The person you talk to is the person doing the work. That's it. That's the whole model.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Anti-pitch CTA */}
      <section className="py-24 md:py-32" style={{ background: '#000000' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
              Want to see if we're a fit?
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              30 minutes. Honest conversation. We'll show you where your current marketing is leaking revenue. If we can help, we'll say so. If we can't, we'll say that too.
            </p>
            <div className="mt-10">
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#faf0da' }}
              >
                Book a Strategy Call →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}