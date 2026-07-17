import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Camera,
  Check,
  Compass,
  Lightbulb,
  Activity,
  MapPin,
  MessageSquare,
  UserRound,
  Plus,
} from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';
import RoiGuaranteeLink from '../components/shared/RoiGuaranteeLink';
import { FULL_HOUSE_IMAGES } from '../lib/galleryImages';
import { ROI_GUARANTEE_CTA_LABEL, ROI_GUARANTEE_FORM_URL } from '../lib/cta';
import benPortrait from '../assets/team/ben-killen.png';
import noamPortrait from '../assets/team/noam-shabat.jpg';
import melinaPortrait from '../assets/team/melina-bilotta.jpg';

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

const launchTeam = [
  {
    name: 'Ben Killen',
    role: 'Growth strategy & commercial direction',
    body: 'Shapes the offer, commercial priorities and growth plan, then keeps every decision tied to the number the venue needs to move.',
    image: benPortrait,
    icon: Compass,
  },
  {
    name: 'Noam Shabat',
    role: 'Performance marketing & attribution',
    body: 'Builds the paid acquisition and measurement engine across media, booking paths, tracking, reporting and optimisation.',
    image: noamPortrait,
    icon: BarChart3,
  },
  {
    name: 'Melina Bilotta',
    role: 'Creative direction & content',
    body: 'Turns the venue experience into campaign creative that earns attention, builds desire and gives guests a reason to book.',
    image: melinaPortrait,
    icon: Camera,
  },
];

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
    title: 'No owned demand plan',
    body: 'Bookings, POS, Wi-Fi and CRM data sit in separate tools. The venue has customers, but no clear way to bring them back.',
  },
  {
    n: '02',
    title: 'Quiet nights are treated as normal',
    body: 'A strong Saturday hides the real issue. Tuesday to Thursday needs its own offer, audience and campaign logic.',
  },
  {
    n: '03',
    title: 'Marketing stops at activity',
    body: "Most reports show reach, clicks and posts. They do not show which work brought people in, what they spent, or what to do next.",
  },
  {
    n: '04',
    title: 'Every campaign starts again',
    body: 'Creative, paid media and retention are run as separate jobs. Nothing learns. Nothing compounds. The venue keeps guessing.',
  },
];

const cases = [
  {
    tag: 'eCommerce · Meta + Google',
    name: '5 Hounds by Dr Will',
    desc: 'Full-funnel growth engine for a premium pet food subscription brand, scaled while reducing the cost to win each order.',
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
    title: 'Build the audience the venue already owns',
    body: 'Booking platform, POS, Wi-Fi and CRM data pulled into one clean audience. Now you can see who came in, who spent, and who has gone quiet.',
    points: [
      'SevenRooms / OpenTable / ResDiary integration',
      'Single customer view, segmented by recency and spend',
      "Owned audience, not rented attention",
    ],
    img: IMG.data,
    alt: 'Goodfields team behind the counter during service',
    flip: false,
  },
  {
    num: 'STEP 02 — WIRE',
    title: 'Track the path from ad to booking',
    body: 'Direct-booking tracking, offer ROI and cover economics wired in first. Every channel is judged on the same question: did it bring paying customers in?',
    points: [
      'Booking + revenue attribution, end to end',
      'Offer-level reporting, not reach reports',
      'One weekly number the owner can run the venue on',
    ],
    img: null, // rendered as attribution diagram card
    alt: '',
    flip: true,
  },
  {
    num: 'STEP 03 — REACTIVATE',
    title: 'Bring back the customers you already paid for',
    body: 'SMS, email, VIP and event sequences for lapsed regulars and high-spend guests. These are usually the cheapest covers a venue can win.',
    points: [
      'Win-back, VIP and event sequences',
      'Mid-week offers built for specific guest groups',
      'Revenue from the database before cold spend grows',
    ],
    img: IMG.service,
    alt: 'Lotus guests dining together over shared dishes',
    flip: false,
  },
  {
    num: 'STEP 04 — AMPLIFY',
    title: 'Acquire new customers with a real campaign',
    body: 'Once the base is working, we launch the bigger demand push: offer, content shoot, Meta, Google and direct-booking journeys working together.',
    points: [
      'Hero campaign + professional content shoot',
      'Meta + Google traffic into owned booking journeys',
      'Weekly optimisation against bookings, covers and spend',
    ],
    img: null, // rendered as compounding covers chart card
    alt: '',
    flip: true,
  },
];

const deliverables = [
  {
    icon: BarChart3,
    title: 'Booking dashboard',
    body: 'Bookings, covers, revenue and offer ROI in one view. Clear enough to make decisions from.',
  },
  {
    icon: Lightbulb,
    title: 'Offer and campaign angle',
    body: 'A clear reason for people to book, built around the venue and the nights that need demand.',
  },
  {
    icon: Camera,
    title: 'Professional content shoot',
    body: 'Food, room and people shot to sell the experience, not just fill the feed.',
  },
  {
    icon: Activity,
    title: 'Tracking & attribution',
    body: 'Direct-booking tracking installed before spend. Every dollar answers to customers, not clicks.',
  },
  {
    icon: MessageSquare,
    title: 'CRM reactivation engine',
    body: 'SMS, email, VIP and event sequences that bring past guests back on the nights you choose.',
  },
  {
    icon: UserRound,
    title: 'An operator, not an account manager',
    body: 'Weekly working sessions with the person running the system, looking at the numbers that matter.',
  },
];

const faqs = [
  {
    q: 'Is this only for venues that are already busy?',
    a: "No, but there needs to be something real to work with: a good venue, a clear offer, and enough existing demand to prove the system can scale.",
  },
  {
    q: 'Why is there no pricing on this page?',
    a: 'Because the guarantee only makes sense for the right venues. We talk price after we understand the venue, the economics and the booking gap.',
  },
  {
    q: "What if my venue doesn't qualify?",
    a: "We will tell you directly. Some venues need a lighter starting point first: tracking, data cleanup, a sharper offer, or a smaller campaign test.",
  },
  {
    q: 'Why is the proof from outside hospitality?',
    a: 'Our published Fillmore case studies prove the core mechanics of demand, tracking and conversion across other categories. Our hospitality experience was delivered during prior agency roles, so it is not ours to publish here. We can walk you through that experience in a meeting and show how it shaped the Fillmore system.',
  },
  {
    q: 'How fast do we see movement?',
    a: 'Reactivation can move inside the first 30 days because it starts with people who already know the venue. Cold demand compounds after the tracking and offer are working.',
  },
  {
    q: 'Who actually does the work?',
    a: 'The people you meet stay close to the work. Strategy, media, creative direction and reporting are run by one accountable team.',
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
              <Kicker tone="chartreuse">Customer Acquisition — Hospitality</Kicker>
              <h1 className="mt-6 font-heading font-bold uppercase tracking-tight text-white text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95]">
                Not sure how to acquire customers?{' '}
                <span style={{ color: CHARTREUSE }}>We build the system that provides clarity.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-7 max-w-[56ch] font-body text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Not more random content. Not another ad account. We connect the offer, content,
              paid media, tracking and reactivation so your venue knows where customers come from
              and how to bring them back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <RoiGuaranteeLink
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: CHARTREUSE, color: RED }}
              />
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
              <strong className="text-white">Qualification only.</strong> Boutique by design. We shape
              the service around the venue and only offer the guarantee when the offer, data and
              economics are a clear fit.
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

      {/* SYDNEY FOUNDING PARTNERS — limited launch offer */}
      <section className="py-24 md:py-32" style={{ background: CREAM }}>
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <Kicker>Sydney founding partners</Kicker>
                  <span
                    className="rounded-full px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em]"
                    style={{ background: RED, color: 'white' }}
                  >
                    5 venues only
                  </span>
                </div>
                <h2 className="mt-6 max-w-[17ch] font-heading text-4xl font-bold uppercase leading-[0.98] tracking-tight text-black md:text-6xl">
                  Five Sydney venues. One growth team with skin in the game.
                </h2>
                <p className="mt-6 max-w-[62ch] font-body text-lg leading-relaxed text-black/65">
                  Fillmore is opening five partnerships for ambitious Sydney venues ready for their
                  next level. This is for operators who want a quality, integrated growth partner
                  embedded in the business—not another disconnected supplier or junior account team.
                </p>
                <p className="mt-4 max-w-[62ch] font-body text-base leading-relaxed text-black/60">
                  We connect strategy, offer, content, paid media, tracking and reactivation, then
                  work against the same growth number as you. For venues that qualify, our ROI
                  guarantee puts real accountability behind the partnership.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <RoiGuaranteeLink
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: RED, color: 'white' }}
                  >
                    Apply for one of five partnerships
                  </RoiGuaranteeLink>
                  <a
                    href="#launch-team"
                    className="group relative inline-flex items-center gap-1 py-3 font-body text-sm font-semibold text-black/55 transition-colors hover:text-black"
                  >
                    Meet your senior team ↓
                    <span className="absolute bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-black/10 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14" style={{ background: '#111111' }}>
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: 'rgba(233,255,128,0.12)' }}>
                    <MapPin size={21} strokeWidth={1.9} style={{ color: CHARTREUSE }} />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase leading-none text-white md:text-3xl">
                    Why the published proof looks different.
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                    Our public case studies come from outside hospitality. They demonstrate that the
                    Fillmore team can build measurable systems for demand, conversion and reliable
                    growth—not just produce marketing activity.
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Hospitality is where we are now focusing that capability. Our team knows the
                    category intimately from prior agency experience, and those years inside venue
                    growth shaped the Fillmore system: the clarity, measurement and joined-up execution
                    hospitality operators rarely get from one partner.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[13.5px] leading-relaxed text-white/50">
                    The hospitality work was completed within our previous agency roles, so client
                    confidentiality means it cannot be published on this website. Ask us in a meeting:
                    we can talk through the experience and show exactly how it informed the system.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SENIOR TEAM — the people embedded in each launch partnership */}
      <section id="launch-team" className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <SectionHead
            kicker="The team inside your business"
            title="Senior people stay close to the work."
            lede="The five Sydney partners get Fillmore's senior strategy, performance and creative team embedded in the business—working together, in the detail, with no junior hand-off."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {launchTeam.map((member, i) => {
              const Icon = member.icon;

              return (
                <ScrollReveal key={member.name} delay={i * 0.08} className="h-full">
                  <article className="h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                    <div className="aspect-[4/3] overflow-hidden bg-black/5">
                      <img
                        src={member.image}
                        alt={`${member.name} portrait`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading text-2xl font-bold uppercase leading-none text-black">
                            {member.name}
                          </h3>
                          <p className="mt-2 text-sm font-semibold" style={{ color: RED }}>
                            {member.role}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full" style={{ background: 'rgba(150,22,33,0.08)' }}>
                          <Icon size={19} strokeWidth={1.9} style={{ color: RED }} />
                        </div>
                      </div>
                      <p className="mt-5 text-[14.5px] leading-relaxed text-black/60">{member.body}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.12}>
            <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-7 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div className="flex max-w-[74ch] gap-4">
                <Check className="mt-0.5 flex-none" size={21} strokeWidth={2.2} style={{ color: RED }} />
                <p className="text-[14.5px] leading-relaxed text-black/60">
                  <strong className="text-black">Hospitality experience is available on request.</strong>{' '}
                  We cannot show work owned by previous agencies and their clients on this site, but
                  we can discuss it in a meeting and connect the experience directly to the Fillmore
                  system your venue will use.
                </p>
              </div>
              <Link
                to="/about"
                className="flex-none font-heading text-sm font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
                style={{ color: RED }}
              >
                More about Fillmore →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHANNEL STRIP — marquee, Fillmore-style */}
      <div className="overflow-hidden border-y border-black/5 py-5" style={{ background: CREAM }}>
        <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
          {[...Array(2)].flatMap((_, dup) =>
            ['Audience', 'Offer', 'Direct bookings', 'Paid media', 'Tracking', 'Reactivation'].map(
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
            title="Most venues have no idea where bookings come from."
            lede="They know how to serve people. They know how to create a good night. But the system for finding customers, converting them, tracking them and bringing them back is usually missing."
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
                Tuesday, 7:45pm. This is the room the system is supposed to fill.
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
                The problem usually isn't the food, the fit-out or the effort. It is that nobody
                owns <span style={{ color: RED_DEEP }}>the path from attention to booking</span> as a complete system.
              </p>
              <p className="mt-[18px] max-w-[62ch] font-body text-[17px] text-black/60">
                That's the gap Fillmore media was built to close: one system, clear metrics &
                decisions that help you make the decisions that matter for your growth.
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
            title="The system has to prove it can bring people in."
            lede="Our public case studies come from other categories. They prove the mechanics of reliable growth: find demand, convert it and measure what came back. Our hospitality experience comes from prior agency roles and is available to discuss on request."
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
              These are not hospitality case studies. They show the underlying engine: offer,
              creative, media, tracking and conversion. The team's prior hospitality work cannot be
              published here because it was completed within other agencies, but we can talk through
              it in a meeting and show how it shaped the Fillmore system for venues.
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
            lede="Four stages, installed in order: build the audience, track the booking path, reactivate past guests, then scale new demand."
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
            lede="One engine: offer, creative, media, data and retention working toward the same number. No channel silos."
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
            lede="The change is simple: the venue stops guessing where customers come from."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Without Fillmore',
                feat: false,
                items: [
                  'Customer data spread across disconnected tools',
                  'Marketing judged on reach and posts',
                  'Bookings arrive with no clear source',
                  'Quiet nights treated as normal',
                ],
              },
              {
                title: 'With Fillmore',
                feat: true,
                items: [
                  'Audience owned, segmented and working',
                  'Every channel tied to bookings and covers',
                  'Direct booking becomes the main path',
                  'Slow nights get their own offer and campaign',
                ],
              },
              {
                title: 'What that means',
                feat: false,
                items: [
                  'More control over where demand comes from',
                  'Cheaper growth through reactivation first',
                  'Less dependence on platforms and hope',
                  'A number the owner can act on each week',
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
            lede="One engagement to install and run the demand engine. Not a menu of disconnected services."
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
                  The complete Venue Activation System, installed and run for one quarter. It is
                  judged on one number: attributed revenue against total investment.
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
                    'A venue people already want',
                    'An offer strong enough to bring people in',
                    'Access to booking, POS and customer data',
                    'Ability to execute when demand lands',
                  ].map((q) => (
                    <li key={q} className="flex gap-3 border-b border-white/10 py-2.5 text-[15px] text-white/60 last:border-b-0">
                      <span className="font-bold" style={{ color: CHARTREUSE }}>—</span>
                      {q}
                    </li>
                  ))}
                </ul>
                <RoiGuaranteeLink
                  className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: CHARTREUSE, color: '#141400' }}
                />
                <p className="mt-3.5 text-[12.5px] leading-normal text-white/50">
                  Boutique by design. We only offer the guarantee where the venue, economics and
                  offer fit the brief.
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
                See if your venue qualifies for the Full House system.
              </h2>
              <p className="mb-7 max-w-[48ch] text-white/70">
                15 minutes. We look at how people find you now, where bookings are leaking, and
                whether the guarantee makes sense for your venue.
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
                <PillButton href={ROI_GUARANTEE_FORM_URL} variant="primary-inverted">
                  {ROI_GUARANTEE_CTA_LABEL}
                </PillButton>
              </div>
              <p className="mt-4 text-[13px] text-white/60">
                Qualification first. Application-led. No pitch deck.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
