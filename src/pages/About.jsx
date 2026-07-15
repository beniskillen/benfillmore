import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  Camera,
  Check,
  Compass,
  Layers,
  Target,
  TrendingUp,
  X,
} from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import RoiGuaranteeLink from '../components/shared/RoiGuaranteeLink';
import benPortrait from '../assets/team/ben-killen.png';
import noamPortrait from '../assets/team/noam-shabat.jpg';
import melinaPortrait from '../assets/team/melina-bilotta.jpg';

const RED = '#961621';
const RED_DEEP = '#b40425';
const CREAM = '#faf0da';
const CHARTREUSE = '#E9FF80';

const pageLinks = [
  { label: 'Point of view', href: '#point-of-view' },
  { label: 'Team', href: '#team' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Fit', href: '#fit' },
];

const standard = [
  'Does it create demand?',
  'Does it improve conversion?',
  'Does it bring customers back?',
  'Does it give the owner a clearer number to manage?',
  'Does it compound after the campaign ends?',
];

const team = [
  {
    icon: BarChart3,
    name: 'Noam Shabat',
    role: 'Performance marketing and attribution',
    body: 'Noam brings the paid acquisition engine: Meta, Google, campaign optimisation, tracking, GA4, reporting and performance discipline.',
    focus: ['Paid media', 'Tracking', 'Reporting'],
    image: noamPortrait,
  },
  {
    icon: Camera,
    name: 'Melina Bilotta',
    role: 'Creative direction and content',
    body: 'Melina brings the creative layer: content, campaign assets, brand feel, venue-facing proof and the visual standard that makes the work worth paying attention to.',
    focus: ['Content', 'UGC', 'Creative direction'],
    image: melinaPortrait,
  },
  {
    icon: Compass,
    name: 'Ben Killen',
    role: 'Growth strategy and business development',
    body: 'Ben brings 10 years of business development, growth hacking and market-facing strategy. His role is to understand the commercial gap, shape the offer, build the sales logic and keep the work tied to the number that matters.',
    focus: ['Offer strategy', 'Sales logic', 'Market growth'],
    image: benPortrait,
  },
];

const outcomes = [
  'More direct bookings',
  'Better-quality leads',
  'Higher-value enquiries',
  'Stronger repeat customer revenue',
  'Cleaner tracking and attribution',
  'A clearer offer and customer journey',
];

const principles = [
  {
    icon: Target,
    title: 'Start with the market',
    body: 'We look at the customer, the offer, the competitive context and the commercial gap before building the campaign.',
  },
  {
    icon: Activity,
    title: 'Build for the real KPI',
    body: 'For hospitality, that may be bookings and covers. For e-commerce, profitable revenue. For service businesses, qualified leads.',
  },
  {
    icon: Camera,
    title: 'Make creative accountable',
    body: 'Creative should do more than look good. It should make the business easier to trust, remember and buy from.',
  },
  {
    icon: Layers,
    title: 'Track before scaling',
    body: 'Media spend needs a scoreboard. Attribution, reporting and clean conversion events come before serious scale.',
  },
  {
    icon: TrendingUp,
    title: 'Compound the work',
    body: 'One campaign can create a spike. A system creates learnings, assets, audiences and data that get stronger over time.',
  },
];

const bestFit = [
  'Hospitality venues with proven demand and quiet-night upside',
  'E-commerce brands with strong products but inconsistent acquisition',
  'Trades and service businesses that need better-quality leads',
  'Founder-led teams that need strategy, creative and performance working together',
  'Operators who care about brand quality but judge work by numbers',
];

const poorFit = [
  'Businesses chasing followers without a commercial plan',
  'Teams that want content volume without strategy',
  'Operators who will not share access to the numbers',
  'Brands looking for a cheap supplier instead of a growth partner',
];

const Kicker = ({ children, tone = 'red' }) => {
  const color = tone === 'cream' ? CREAM : tone === 'chartreuse' ? CHARTREUSE : RED;

  return (
    <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase" style={{ color }}>
      <span className="h-px w-6" style={{ background: color }} />
      {children}
    </span>
  );
};

const SectionHead = ({ kicker, title, lede, dark = false, tone }) => (
  <ScrollReveal className="mb-12 grid items-end gap-8 md:grid-cols-[1.05fr_0.95fr]">
    <div>
      <Kicker tone={tone || (dark ? 'chartreuse' : 'red')}>{kicker}</Kicker>
      <h2 className={`mt-4 max-w-[24ch] font-heading text-4xl font-bold uppercase leading-none md:text-5xl ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
    </div>
    {lede && (
      <p className={`max-w-[58ch] font-body text-base leading-relaxed md:text-lg ${dark ? 'text-white/70' : 'text-black/60'}`}>
        {lede}
      </p>
    )}
  </ScrollReveal>
);

const TeamCard = ({ member, delay }) => {
  const Icon = member.icon;

  return (
    <ScrollReveal delay={delay}>
      <article className="h-full overflow-hidden rounded-lg border border-black/10 bg-white">
        <div className="aspect-square bg-black/5">
          <img
            src={member.image}
            alt={`${member.name} portrait`}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex h-full flex-col p-6 md:p-8">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: `${RED}14` }}>
            <Icon size={22} style={{ color: RED }} strokeWidth={1.9} />
          </div>
          <h3 className="font-heading text-2xl font-bold uppercase leading-none text-black">
            {member.name}
          </h3>
          <p className="mt-2 font-body text-sm font-semibold" style={{ color: RED }}>
            {member.role}
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-black/65">
            {member.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {member.focus.map((item) => (
              <span key={item} className="rounded-full bg-black/5 px-3 py-1 font-body text-xs font-semibold text-black/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};

export default function About() {
  return (
    <div className="bg-white font-body text-black antialiased">
      <section className="pt-32 md:pt-40" style={{ background: RED_DEEP }}>
        <div className="mx-auto max-w-7xl px-6 pb-14 md:px-8 md:pb-20">
          <ScrollReveal>
            <Kicker tone="chartreuse">About Fillmore</Kicker>
            <div className="mt-7 grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h1 className="max-w-[13ch] font-heading text-5xl font-bold uppercase leading-none text-white md:text-7xl">
                  We make attention pay.
                </h1>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="font-body text-lg leading-relaxed text-white/80 md:text-xl">
                  Fillmore combines growth strategy, performance marketing and premium creative to help businesses turn attention into bookings, leads, revenue and repeat customers.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <RoiGuaranteeLink
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-body text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-xl"
                  />
                  <Link
                    to="/work"
                    className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 font-body text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    View the work
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-y border-white/15 bg-black/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 md:px-8">
            {pageLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/15 px-4 py-2 font-body text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="point-of-view" className="py-20 md:py-28" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="Our point of view"
            title="Creative gets attention. Performance proves value."
            lede="Most businesses do not need more random content. They need a sharper commercial system that knows what the customer sees, what they do next, and what the business gets back."
          />

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.82fr]">
            <ScrollReveal>
              <div className="max-w-3xl space-y-5 font-body text-lg leading-relaxed text-black/68">
                <p>
                  A campaign can look good and still fail to move the business. A brand can get attention and still have no clear path to bookings, leads or revenue. A venue can look busy online while its quieter nights stay empty.
                </p>
                <p className="font-semibold text-black">Fillmore closes that gap.</p>
                <p>
                  We care about how the work looks because perception matters. But we care more about what the work does.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="rounded-lg border border-black/10 bg-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold uppercase text-black">
                  The standard
                </h3>
                <ul className="mt-4 divide-y divide-black/10">
                  {standard.map((question) => (
                    <li key={question} className="flex gap-3 py-3 font-body text-[15px] font-semibold text-black/70">
                      <Check size={18} className="mt-0.5 flex-none" style={{ color: RED }} strokeWidth={2.5} />
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="The team"
            title="Strategy, performance and creative in one room."
            lede="Fillmore is not built around one discipline. It brings together the three layers most businesses need, but rarely get in one operating system: commercial strategy, performance media and creative execution."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-20 md:py-28" style={{ background: RED_DEEP }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHead
            dark
            kicker="What we do"
            title="We turn brand attention into measurable growth."
            lede="The work can include strategy, paid media, content, landing pages, CRM, reactivation, tracking and reporting. But the service list is not the point. The point is the system."
          />

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <ScrollReveal>
              <div className="rounded-lg border border-white/15 bg-white/10 p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  Client outcomes
                </h3>
                <ul className="mt-4 divide-y divide-white/10">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 py-3 font-body text-[15px] text-white/76">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: CHARTREUSE }} />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <ScrollReveal key={principle.title} delay={index * 0.06}>
                    <article className="h-full rounded-lg border border-white/15 bg-black/10 p-6">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                        <Icon size={22} style={{ color: CHARTREUSE }} strokeWidth={1.8} />
                      </div>
                      <h3 className="font-heading text-xl font-bold uppercase leading-none text-white">
                        {principle.title}
                      </h3>
                      <p className="mt-3 font-body text-[15px] leading-relaxed text-white/70">
                        {principle.body}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="The belief"
            title="Vanity is useful. Performance is the point."
            lede="Presentation matters. Taste matters. Social proof matters. A premium brand can earn trust faster than an average one. But vanity becomes a problem when it is treated as the outcome."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['Likes', 'are not revenue.'],
              ['Reach', 'is not trust.'],
              ['Content volume', 'is not strategy.'],
              ['A beautiful campaign', 'is not automatically a commercial asset.'],
            ].map(([title, body], index) => (
              <ScrollReveal key={title} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-black/10 bg-white p-6">
                  <p className="font-heading text-2xl font-bold uppercase leading-none text-black">
                    {title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-black/58">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <div className="max-w-4xl border-l-4 pl-7" style={{ borderColor: RED }}>
              <p className="font-heading text-3xl font-bold uppercase leading-tight text-black md:text-5xl">
                Make it look sharp. Make it commercially grounded. Then make it perform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="fit" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="Fit"
            title="We work best with businesses that have something real to amplify."
            lede="Fillmore is best suited to founders, operators and teams with a strong product, venue, service or offer, but no clear system for turning attention into growth."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-lg border border-black/10 p-6 md:p-8" style={{ background: CREAM }}>
                <h3 className="font-heading text-2xl font-bold uppercase text-black">
                  Best fit
                </h3>
                <ul className="mt-5 space-y-3">
                  {bestFit.map((item) => (
                    <li key={item} className="flex gap-3 font-body text-[15px] leading-relaxed text-black/70">
                      <Check size={18} className="mt-0.5 flex-none" style={{ color: RED }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="h-full rounded-lg border border-black/10 bg-black p-6 text-white md:p-8">
                <h3 className="font-heading text-2xl font-bold uppercase">
                  Poor fit
                </h3>
                <ul className="mt-5 space-y-3">
                  {poorFit.map((item) => (
                    <li key={item} className="flex gap-3 font-body text-[15px] leading-relaxed text-white/68">
                      <X size={18} className="mt-0.5 flex-none text-white/45" strokeWidth={2.3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: RED_DEEP }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <Kicker tone="chartreuse">Work with Fillmore</Kicker>
                <h2 className="mt-5 max-w-[17ch] font-heading text-4xl font-bold uppercase leading-none text-white md:text-6xl">
                  If your brand has attention, we will help turn it into growth.
                </h2>
              </div>
              <div>
                <p className="font-body text-lg leading-relaxed text-white/76">
                  If your business has something real to amplify, Fillmore can help sharpen the offer, build the campaign and install the system around the number that matters.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <RoiGuaranteeLink
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-body text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-xl"
                  />
                  <Link
                    to="/full-house"
                    className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 font-body text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Explore Full House
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
