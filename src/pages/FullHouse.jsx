import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Camera,
  Lightbulb,
  Activity,
  MessageSquare,
  UserRound,
  Plus,
} from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';
import { FULL_HOUSE_IMAGES } from '../lib/galleryImages';

/* ------------------------------------------------------------------ */
/* Design tokens — Fillmore brand system                               */
/* red #961621 · deep red #b40425 · cream #faf0da · chartreuse #E9FF80 */
/* headings: League Spartan (font-heading, uppercase) · body: Inter    */
/* ------------------------------------------------------------------ */

const RED = '#961621';
const RED_DEEP = '#b40425';
const CREAM = '#faf0da';
const CHARTREUSE = '#E9FF80';

const IMG = FULL_HOUSE_IMAGES;

const Kicker = ({ children, tone = 'red' }) => {
  const color =
    tone === 'chartreuse' ? CHARTREUSE : tone === 'cream' ? 'rgba(250,240,218,0.85)' : RED;
  return (
    <span
      className="inline-flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-[0.22em]"
      style={{ color }}
    >
      <span className="h-px w-6" style={{ background: color }} />
      {children}
    </span>
  );
};

const SectionHead = ({ kicker, title, lede, dark = false, tone }) => (
  <ScrollReveal className="mb-14 grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
    <div>
      <Kicker tone={tone || (dark ? 'chartreuse' : 'red')}>{kicker}</Kicker>
      <h2
        className={`mt-4 max-w-[22ch] font-heading text-4xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl ${
          dark ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
    </div>
    {lede && (
      <p
        className={`max-w-[56ch] font-body text-lg leading-relaxed md:justify-self-end ${
          dark ? 'text-white/70' : 'text-black/60'
        }`}
      >
        {lede}
      </p>
    )}
  </ScrollReveal>
);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const problems = [
  {
    n: '01',
    title: 'Customer data stays trapped',
    body: 'POS, bookings, Wi-Fi and CRM data never become a usable reactivation engine. The most valuable asset the venue owns sits idle.',
  },
  {
    n: '02',
    title: 'Quiet nights stay quiet',
    body: 'Weekends mask the gap, but Tuesday to Thursday utilisation is what actually determines margin — and nobody owns that number.',
  },
  {
    n: '03',
    title: 'Agencies report activity',
    body: "Owners get dashboards and buzzwords instead of direct-booking economics. Spend goes out; covers don't come back attributed.",
  },
  {
    n: '04',
    title: 'Nothing compounds',
    body: 'Creative, paid media and retention live in separate silos. Momentum breaks every month and every campaign starts from zero.',
  },
];

const cases = [
  {
    tag: 'eCommerce · Meta + Google',
    name: '5 Hounds by Dr Will',
    desc: 'Full-funnel acquisition system for a premium pet food subscription brand, scaled while driving acquisition costs down.',
    big: '$1.57M',
    bigLabel: 'Revenue generated',
    rows: [
      ['Total orders', '8,756'],
      ['Lower CAC', '–38%'],
      ['Meta purchases', '1,580'],
    ],
  },
  {
    tag: 'eCommerce · Paid performance',
    name: 'The Sockery',
    desc: 'Took a specialty brand from inconsistent results to compounding, profitable paid growth across Meta and Google.',
    big: '600%',
    bigLabel: 'Return on ad spend',
    rows: [
      ['Revenue', '$127K+'],
      ['Conversions', '4,129'],
      ['Cost per order', '~$12'],
    ],
  },
  {
    tag: 'Lead generation · Google',
    name: 'Pressure Washing Guy',
    desc: 'A search-first lead engine that keeps technicians booked year-round on high-intent local demand.',
    big: '1,165',
    bigLabel: 'Qualified leads generated',
    rows: [
      ['Cost per lead', 'A$80'],
      ['Clicks', '13.8K'],
      ['Impressions', '618K'],
    ],
  },
];

const proofBar = [
  { v: '$227K', l: 'Ad revenue — Garage Door Repairs 24/7' },
  { v: '23.7%', l: 'Conversion rate in first market' },
  { v: '+35%', l: 'Organic traffic MoM — The Cat Collective' },
  { v: '3 cities', l: 'Scaled from a single Brisbane launch' },
];

const steps = [
  {
    num: 'STEP 01 — UNLOCK',
    title: 'Turn trapped customer data into an audience you own',
    body: 'Booking platform, POS, Wi-Fi and CRM data pulled into one clean, segmented audience in week one. For the first time, you can see exactly who your customers are and when they stopped coming back.',
    points: [
      'SevenRooms / OpenTable / ResDiary integration',
      'Single customer view, segmented by recency and spend',
      "Owned audience — independent of Meta's algorithm",
    ],
    img: IMG.data,
    alt: 'Goodfields team behind the counter during service',
    flip: false,
  },
  {
    num: 'STEP 02 — WIRE',
    title: 'Install attribution before a dollar goes to media',
    body: 'Direct-booking tracking, offer-level ROI and cover economics wired in first. Every channel is judged on one standard: did it put paying people in seats?',
    points: [
      'Booking + revenue attribution, end to end',
      'Offer-level reporting — not "reach"',
      'A weekly number the owner can actually run the venue on',
    ],
    img: null, // rendered as attribution diagram card
    alt: '',
    flip: true,
  },
  {
    num: 'STEP 03 — REACTIVATE',
    title: 'Win back the diners you already paid to acquire',
    body: 'Automated SMS, email, VIP and event sequences pointed at lapsed regulars and high-spend segments — the cheapest covers a venue will ever buy, live before cold acquisition starts.',
    points: [
      'Win-back, VIP and event sequences on autopilot',
      'Mid-week offers with real campaign logic',
      'Revenue from the database in the first 30 days',
    ],
    img: IMG.service,
    alt: 'Lotus guests dining together over shared dishes',
    flip: false,
  },
  {
    num: 'STEP 04 — AMPLIFY',
    title: 'Scale with a campaign big enough to move revenue',
    body: 'Only after the base is activated: a hero campaign with a real big idea, a content shoot that earns attention, and paid traffic pushed into direct-booking journeys that compound week on week.',
    points: [
      'Hero campaign + professional content shoot',
      'Meta + Google traffic into owned booking journeys',
      'Weekly optimisation against cover economics',
    ],
    img: null, // rendered as compounding covers chart card
    alt: '',
    flip: true,
  },
];

const deliverables = [
  {
    icon: BarChart3,
    title: 'Cover-level dashboard',
    body: 'Bookings, covers, revenue and offer ROI in one live view — updated daily, owned by the venue.',
  },
  {
    icon: Lightbulb,
    title: 'Hero campaign + big idea',
    body: 'A flagship creative concept built around your venue\'s story — not another "content calendar".',
  },
  {
    icon: Camera,
    title: 'Professional content shoot',
    body: 'Food, room and people shot to a standard that holds up in paid placements and on the pass.',
  },
  {
    icon: Activity,
    title: 'Tracking & attribution',
    body: 'Direct-booking tracking installed before spend. Every dollar answers to covers, not clicks.',
  },
  {
    icon: MessageSquare,
    title: 'CRM reactivation engine',
    body: 'SMS, email, VIP and event sequences that bring lapsed regulars back on the nights you choose.',
  },
  {
    icon: UserRound,
    title: 'An operator, not an account manager',
    body: 'Weekly working sessions on your numbers with the person actually running the system.',
  },
];

const faqs = [
  {
    q: 'Is this only for venues that are already busy?',
    a: "No — but it works best where there's real product-market pull, a decent offer, and a clear mid-week gap to fix. The system multiplies demand that exists; it doesn't invent demand for a venue nobody wants.",
  },
  {
    q: 'Why is there no pricing on this page?',
    a: 'Because the page sells the outcome and the qualification standard first. Price without fit commoditises the offer and weakens the guarantee. Investment is discussed on the qualification call, once fit is established.',
  },
  {
    q: "What if my venue doesn't qualify?",
    a: "You'll be told directly, and routed to a lighter path — a Growth Score, data and tracking setup, or a smaller experiment. The flagship promise is reserved for venues where the numbers support it.",
  },
  {
    q: 'Why is the proof from outside hospitality?',
    a: 'Because the acquisition, measurement and conversion system already has live, audited performance evidence across categories. Venue-specific lighthouse case studies are in build — the engine is proven; the vertical is next.',
  },
  {
    q: 'How fast do we see movement?',
    a: 'Reactivation revenue typically lands inside the first 30 days because it starts with the database you already own. Paid amplification compounds over the remaining 60 as attribution matures.',
  },
  {
    q: 'Who actually does the work?',
    a: 'The operator you meet on the qualification call. Strategy, media, creative direction and reporting stay with one accountable person — no handoff to a junior pod after signing.',
  },
];

/* ------------------------------------------------------------------ */
/* Inline system visuals — recoloured to Fillmore palette              */
/* ------------------------------------------------------------------ */

const AttributionDiagram = () => (
  <div
    className="flex h-[380px] items-center justify-center rounded-2xl border border-white/10 p-9 shadow-2xl"
    style={{ background: '#0d0d0d' }}
  >
    <svg
      viewBox="0 0 560 320"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Attribution flow from campaign to covers"
    >
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor={RED_DEEP} stopOpacity=".35" />
          <stop offset="1" stopColor={CHARTREUSE} />
        </linearGradient>
      </defs>
      <path
        d="M70 160 C 160 160, 160 80, 250 80 M70 160 C 160 160, 160 240, 250 240 M250 80 C 340 80, 340 160, 430 160 M250 240 C 340 240, 340 160, 430 160"
        stroke="url(#flow)"
        strokeWidth="2"
      />
      <g fontFamily="Inter, sans-serif">
        <rect x="20" y="132" width="100" height="56" rx="10" fill="#161616" stroke="#333333" />
        <text x="70" y="156" textAnchor="middle" fill={CREAM} fontSize="13" fontWeight="700">Campaign</text>
        <text x="70" y="174" textAnchor="middle" fill="#8f8f8f" fontSize="10">Paid + owned</text>
        <rect x="200" y="52" width="100" height="56" rx="10" fill="#161616" stroke="#333333" />
        <text x="250" y="76" textAnchor="middle" fill={CREAM} fontSize="13" fontWeight="700">Tracking</text>
        <text x="250" y="94" textAnchor="middle" fill="#8f8f8f" fontSize="10">Every click tagged</text>
        <rect x="200" y="212" width="100" height="56" rx="10" fill="#161616" stroke="#333333" />
        <text x="250" y="236" textAnchor="middle" fill={CREAM} fontSize="13" fontWeight="700">Funnel</text>
        <text x="250" y="254" textAnchor="middle" fill="#8f8f8f" fontSize="10">Direct booking</text>
        <rect x="380" y="132" width="100" height="56" rx="10" fill={CHARTREUSE} />
        <text x="430" y="156" textAnchor="middle" fill="#141400" fontSize="13" fontWeight="800">Covers</text>
        <text x="430" y="174" textAnchor="middle" fill="#3d3d10" fontSize="10">Attributed revenue</text>
        <text x="510" y="165" fill={CHARTREUSE} fontSize="18" fontWeight="800">→ $</text>
      </g>
    </svg>
  </div>
);

const CompoundingChart = () => (
  <div
    className="flex h-[380px] items-center justify-center rounded-2xl border border-white/10 p-9 shadow-2xl"
    style={{ background: '#0d0d0d' }}
  >
    <svg
      viewBox="0 0 560 320"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Compounding mid-week covers chart"
    >
      <g stroke="#262626">
        <line x1="40" y1="60" x2="40" y2="270" />
        <line x1="40" y1="270" x2="530" y2="270" />
        <line x1="40" y1="130" x2="530" y2="130" strokeDasharray="4 6" />
        <line x1="40" y1="200" x2="530" y2="200" strokeDasharray="4 6" />
      </g>
      <g fontFamily="Inter, sans-serif" fontSize="10" fill="#8f8f8f">
        <text x="64" y="290">Wk 1</text>
        <text x="175" y="290">Wk 4</text>
        <text x="290" y="290">Wk 8</text>
        <text x="410" y="290">Wk 12</text>
      </g>
      <g>
        {[
          [60, 228, '#2b2b2b'], [118, 214, '#2b2b2b'], [176, 192, '#4a1017'], [234, 178, '#6b1220'],
          [292, 150, '#961621'], [350, 128, '#b40425'], [408, 104, '#cdd96a'], [466, 78, '#E9FF80'],
        ].map(([x, y, fill]) => (
          <rect key={x} x={x} y={y} width="34" height={270 - y} rx="4" fill={fill} />
        ))}
      </g>
      <path
        d="M60 240 C 180 225, 260 190, 340 150 C 410 116, 460 92, 505 74"
        stroke={CREAM}
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="505" cy="74" r="5" fill={CREAM} />
      <g fontFamily="Inter, sans-serif">
        <rect x="386" y="34" width="140" height="26" rx="13" fill={CHARTREUSE} />
        <text x="456" y="51" textAnchor="middle" fill="#141400" fontSize="12" fontWeight="800">Mid-week covers</text>
      </g>
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function FullHouse() {
  return (
    <div className="bg-background font-body text-black antialiased">
      {/* HERO — Fillmore red, staggered motion like the original homepage */}
      <header
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: RED }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(70% 60% at 78% 8%, rgba(233,255,128,0.10), transparent 60%)' }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-8 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Kicker tone="chartreuse">Performance Growth — Hospitality</Kicker>
              <h1 className="mt-6 font-heading font-bold uppercase tracking-tight text-white text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95]">
                More than vanity metrics.{' '}
                <span style={{ color: CHARTREUSE }}>A system for reliable growth.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-7 max-w-[56ch] font-body text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Fillmore installs the performance system hospitality businesses need to reliably
              produce growth — tracking every dollar to bookings and covers, reactivating the
              customers you already own, and filling the nights that decide your margin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: CHARTREUSE, color: RED }}
              >
                See if your venue qualifies <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a
                href="#proof"
                className="group relative inline-flex items-center gap-1 py-3.5 font-body text-base font-medium text-white/60 transition-colors hover:text-white"
              >
                See the numbers →
                <span className="absolute bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-6 max-w-[52ch] text-[13.5px] text-white/60"
            >
              <strong className="text-white">Qualification only.</strong> A maximum of 3 Full House
              Campaigns run per quarter. The 3X ROI guarantee is offered only where the venue,
              economics and offer fit the brief.
            </motion.p>
          </div>

          {/* Right — hero image with floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}
            >
              <img
                src={IMG.hero}
                alt="Lotus dining room set for service with natural light"
                className="h-[420px] w-full object-cover lg:h-[560px]"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%)' }}
              />
            </div>
            {[
              { v: '$1.57M', l: 'Revenue generated — 5 Hounds by Dr Will', d: '38% lower CAC', pos: 'top-6 lg:-left-8 left-3', delay: 0.6 },
              { v: '600%', l: 'Return on ad spend — The Sockery', d: '4,129 conversions', pos: 'bottom-28 lg:-left-11 left-3', delay: 0.75 },
              { v: '1,165', l: 'Leads generated — Pressure Washing Guy', d: '$80 cost per lead', pos: '-bottom-6 right-7', delay: 0.9 },
            ].map((s) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: s.delay, ease: [0.25, 0.1, 0.25, 1] }}
                className={`absolute ${s.pos} rounded-xl bg-white p-4 shadow-2xl`}
              >
                <div className="font-heading text-[26px] font-bold tracking-tight" style={{ color: RED }}>
                  {s.v}
                </div>
                <div className="mt-0.5 max-w-[24ch] text-xs text-black/60">{s.l}</div>
                <span
                  className="mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold"
                  style={{ background: CHARTREUSE, color: '#3d3d10' }}
                >
                  {s.d}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* CHANNEL STRIP — marquee, Fillmore-style */}
      <div className="overflow-hidden border-y border-black/5 py-5" style={{ background: CREAM }}>
        <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
          {[...Array(2)].flatMap((_, dup) =>
            ['Direct bookings', 'Paid social', 'Google Ads', 'Tracking & attribution', 'CRM reactivation', 'Content & creative'].map(
              (c) => (
                <span
                  key={`${dup}-${c}`}
                  className="flex flex-shrink-0 items-center gap-8 px-8 font-heading text-sm font-bold uppercase tracking-[0.18em] text-black/70"
                >
                  {c}
                  <span style={{ color: RED }}>•</span>
                </span>
              ),
            ),
          )}
        </div>
      </div>

      {/* PROBLEM — light cream section */}
      <section className="py-24 md:py-32" style={{ background: CREAM }}>
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="The problem"
            title="The weekend hides the problem. The month still feels thin."
            lede='Most hospitality marketing reports clicks, impressions and "reach" while Tuesday stays quiet. Busy Saturdays make it look fine — the P&L says otherwise.'
          />
          <div className="grid gap-5 md:grid-cols-2">
            {problems.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div className="font-heading text-[13px] font-bold tracking-[0.14em]" style={{ color: RED }}>
                    {p.n}
                  </div>
                  <h3 className="mb-2.5 mt-3.5 font-heading text-xl font-bold uppercase tracking-tight text-black">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-black/60">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <div className="relative mt-5 overflow-hidden rounded-2xl">
              <img
                src={IMG.quiet}
                alt="Private dining room set for service"
                className="h-[340px] w-full object-cover"
              />
              <div className="absolute bottom-4 left-5 rounded-full bg-black/80 px-5 py-2.5 text-[13px] text-white backdrop-blur-sm">
                Tuesday, 7:45pm. The room your marketing is supposed to fill.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GAP STATEMENT */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <div className="max-w-[900px] border-l-2 pl-10" style={{ borderColor: RED }}>
              <p className="font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight text-black md:text-4xl">
                The gap isn't your food, your fit-out or your effort. It's that every solution
                treats your venue as <span style={{ color: RED_DEEP }}>one channel to run</span> —
                instead of a complete system to build.
              </p>
              <p className="mt-[18px] max-w-[62ch] font-body text-[17px] text-black/60">
                That's the gap the Full House Campaign was built to close: one operator, one
                system, one number that matters — profitable covers, attributed to the dollar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROOF — dark section */}
      <section id="proof" className="bg-black py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            dark
            kicker="Performance evidence"
            title="The numbers behind the system."
            lede="Live, tracked results from campaigns the team runs today. No inflated numbers, no vanity stats — cross-category proof that the acquisition and measurement engine works."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111111] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-white/20">
                  <span
                    className="self-start rounded-full px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em]"
                    style={{ background: 'rgba(233,255,128,0.12)', color: CHARTREUSE }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="mb-2 mt-[18px] font-heading text-[22px] font-bold uppercase tracking-tight text-white">
                    {c.name}
                  </h3>
                  <p className="mb-5 text-[14.5px] leading-relaxed text-white/60">{c.desc}</p>
                  <div className="font-heading text-[44px] font-bold leading-none tracking-tight" style={{ color: CHARTREUSE }}>
                    {c.big}
                  </div>
                  <div className="mb-5 mt-1 text-[13px] text-white/60">{c.bigLabel}</div>
                  <div className="mt-auto border-t border-white/10">
                    {c.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-white/10 py-3 text-sm last:border-b-0">
                        <span className="text-white/60">{k}</span>
                        <span className="font-bold text-white">{v}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.1}>
            <div className="mt-5 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {proofBar.map((s) => (
                <div key={s.l} className="border-b border-r border-white/10 bg-[#111111] p-7 last:border-r-0 lg:border-b-0">
                  <div className="font-heading text-3xl font-bold tracking-tight text-white">{s.v}</div>
                  <div className="mt-1 text-[13px] text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[74ch] text-[13.5px] text-white/50">
              These are not hospitality case studies — and that's the point. The same acquisition,
              measurement and conversion system is being pointed at venues, with hospitality
              lighthouse case studies in build now.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SYSTEM */}
      <section id="system" className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="The system"
            title="The Venue Activation System."
            lede="Promise → proof → mechanism → offer. Four stages, installed in order. Nothing scales until the base you already own is activated."
          />
          {steps.map((s, i) => (
            <ScrollReveal key={s.num}>
              <div
                className={`grid items-center gap-16 py-14 lg:grid-cols-2 ${
                  i > 0 ? 'border-t border-black/10' : 'pt-2'
                }`}
              >
                <div className={s.flip ? 'lg:order-2' : ''}>
                  <div className="font-heading text-[13px] font-bold tracking-[0.2em]" style={{ color: RED }}>
                    {s.num}
                  </div>
                  <h3 className="mb-3 mt-3.5 font-heading text-3xl font-bold uppercase tracking-tight text-black">
                    {s.title}
                  </h3>
                  <p className="max-w-[48ch] leading-relaxed text-black/60">{s.body}</p>
                  <ul className="mt-4 space-y-1">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 py-1.5 text-[14.5px] text-black/70">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: RED }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.flip ? 'lg:order-1' : ''}>
                  {s.img ? (
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <img src={s.img} alt={s.alt} className="h-[380px] w-full object-cover" />
                    </div>
                  ) : s.num.includes('02') ? (
                    <AttributionDiagram />
                  ) : (
                    <CompoundingChart />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* DELIVERABLES — cream section */}
      <section className="py-24 md:py-32" style={{ background: CREAM }}>
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="What venues get"
            title="Everything required to fill the room. Nothing that isn't."
            lede="One integrated engine — creative, media, data and retention working the same number. No retainer theatre, no channel silos."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <ScrollReveal key={d.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ background: 'rgba(150,22,33,0.08)' }}
                  >
                    <d.icon size={22} strokeWidth={1.8} style={{ color: RED }} />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-tight text-black">
                    {d.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-black/60">{d.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="What changes"
            title="Before Fillmore. After Fillmore."
            lede="Brutally commercial, in plain English — the operational change a venue is actually buying."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Without Fillmore',
                feat: false,
                items: [
                  'Customer data sits idle across four platforms',
                  'Marketing judged on vanity metrics',
                  'OTAs and aggregators own the booking relationship',
                  'Quiet nights treated as "just hospitality"',
                ],
              },
              {
                title: 'With Fillmore',
                feat: true,
                items: [
                  'Audience owned, segmented and working every week',
                  'Every channel tied to bookings and covers',
                  'Direct booking becomes the default path',
                  'Mid-week nights get their own campaign logic',
                ],
              },
              {
                title: 'What that means',
                feat: false,
                items: [
                  'Predictable revenue outside the weekend spike',
                  'Cheaper growth — reactivation before cold acquisition',
                  'Margin back from third-party commissions',
                  'A number the owner can plan staffing and stock on',
                ],
              },
            ].map((col, i) => (
              <ScrollReveal key={col.title} delay={i * 0.1} className="h-full">
                <div
                  className="h-full rounded-2xl p-8"
                  style={
                    col.feat
                      ? { background: RED, color: 'white' }
                      : { background: 'white', border: '1px solid rgba(0,0,0,0.08)' }
                  }
                >
                  <h3
                    className={`mb-5 font-heading text-xl font-bold uppercase tracking-tight ${
                      col.feat ? 'text-white' : 'text-black'
                    }`}
                  >
                    {col.title}
                  </h3>
                  <ul>
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className={`flex gap-3 py-2 text-[15px] ${col.feat ? 'text-white/90' : 'text-black/60'}`}
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: col.feat ? CHARTREUSE : RED }}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER — dark section */}
      <section id="offer" className="bg-black py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            dark
            kicker="The flagship offer"
            title="The 90-Day Full House Campaign."
            lede="One flagship engagement — not a menu. The guarantee stays visible, the pricing stays off-page, and the qualification standard is explicit."
          />
          <ScrollReveal>
            <div className="grid overflow-hidden rounded-2xl border lg:grid-cols-[1.15fr_0.85fr]" style={{ borderColor: 'rgba(233,255,128,0.3)' }}>
              <div className="p-10 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(180,4,37,0.35), rgba(180,4,37,0.05))' }}>
                <Kicker tone="chartreuse">Core promise</Kicker>
                <h3 className="mb-3.5 mt-4 font-heading text-3xl font-bold uppercase leading-[1.02] tracking-tight text-white md:text-4xl">
                  <span style={{ color: CHARTREUSE }}>3X attributed revenue in 90 days</span> — or
                  the venue keeps the media.
                </h3>
                <p className="max-w-[52ch] text-white/60">
                  The complete Venue Activation System, installed and run for one quarter, judged
                  on one number: attributed revenue against total investment.
                </p>
                <div className="mt-7 border-t border-white/10">
                  {[
                    'Hero campaign & big idea',
                    'Professional content shoot',
                    'Direct-booking funnel',
                    'Tracking + attribution build',
                    'CRM reactivation engine',
                    'Paid media management',
                  ].map((k) => (
                    <div key={k} className="flex justify-between border-b border-white/10 py-3 text-[15px]">
                      <span className="text-white/60">{k}</span>
                      <span className="font-bold text-white">Included</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 bg-[#111111] p-10 md:p-12 lg:border-l lg:border-t-0">
                <h4 className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: CHARTREUSE }}>
                  Qualification — not every venue gets the guarantee
                </h4>
                <ul>
                  {[
                    'Existing demand and a proven weekend',
                    'An offer strong enough to campaign on',
                    'Tracking access across booking + POS',
                    'Ability to execute on launch nights',
                  ].map((q) => (
                    <li key={q} className="flex gap-3 border-b border-white/10 py-2.5 text-[15px] text-white/60 last:border-b-0">
                      <span className="font-bold" style={{ color: CHARTREUSE }}>—</span>
                      {q}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/apply"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: CHARTREUSE, color: '#141400' }}
                >
                  See if your venue qualifies <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
                <p className="mt-3.5 text-[12.5px] leading-normal text-white/50">
                  Maximum 3 Full House Campaigns per quarter. Application-led — not everyone is
                  approved. Venues that aren't a fit are routed to a lighter starting point.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead kicker="FAQ" title="Answer the objections before the application." />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={(i % 2) * 0.08}>
                <details
                  open={i === 0}
                  className="rounded-2xl border border-black/10 bg-white px-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-[16.5px] font-bold uppercase tracking-tight text-black [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus size={18} className="flex-none" style={{ color: RED }} />
                  </summary>
                  <p className="pb-6 text-[15px] leading-relaxed text-black/60">{f.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — split image / red panel */}
      <section id="apply-cta">
        <div className="grid min-h-[560px] lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <img
              src={IMG.exterior}
              alt="Goodfields cafe frontage and entry"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 lg:px-[72px] lg:py-[88px]" style={{ background: RED }}>
            <ScrollReveal>
              <Kicker tone="chartreuse">Final step</Kicker>
              <h2 className="mb-4 mt-[18px] font-heading text-4xl font-bold uppercase leading-[0.98] tracking-tight text-white md:text-[44px]">
                See if your venue qualifies for a Full House Campaign.
              </h2>
              <p className="mb-7 max-w-[48ch] text-white/70">
                15 minutes. We show you where bookings are leaking, what those gaps are worth in
                covers, and whether the guarantee is commercially responsible for your venue.
              </p>
              <div className="mb-7 rounded-2xl bg-black/20 p-6 backdrop-blur-sm">
                <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-white/70">
                  What best describes your venue?
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Restaurant / bistro', 'Bar / late night', 'Multi-venue group', 'Café / day trade'].map((o, i) => (
                    <span
                      key={o}
                      className="rounded-full border px-3.5 py-2 text-[13.5px]"
                      style={
                        i === 0
                          ? { borderColor: CHARTREUSE, background: 'rgba(233,255,128,0.15)', color: CHARTREUSE }
                          : { borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }
                      }
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <PillButton to="/apply" variant="primary-inverted">
                  Start the application <ArrowRight size={18} strokeWidth={2.5} />
                </PillButton>
              </div>
              <p className="mt-4 text-[13px] text-white/60">
                Qualification first. Max 3 venues per quarter. Application — not a sales call.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
