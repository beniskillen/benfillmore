// src/pages/About.tsx
// About Fillmore — team-led growth positioning page.
// Install: save as src/pages/About.tsx, then register the route:
//   <Route path="/about" element={<About />} />
// Deps: tailwindcss, lucide-react, react-router-dom. No image assets required.
// Design system matches FullHouse.tsx (Fillmore dark editorial standard).

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  BarChart3,
  Camera,
  Target,
  Activity,
  Layers,
  TrendingUp,
  Check,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Design tokens (Fillmore dark editorial system)                      */
/* ------------------------------------------------------------------ */
// canvas #0D0C0A · surface #151310 · card #1D1A16 · paper #F6F3EE
// copper #C98443 · copper-hi #E2A868 · text #F4F0E8 · muted #A79E8F

const Kicker = ({ children, light = false }) => (
  <span
    className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] ${
      light ? "text-[#A5651F]" : "text-[#C98443]"
    }`}
  >
    <span className={`h-px w-6 ${light ? "bg-[#A5651F]" : "bg-[#C98443]"}`} />
    {children}
  </span>
);

const SectionHead = ({
  kicker,
  title,
  lede,
  light = false,
}) => (
  <div className="mb-14 grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
    <div>
      <Kicker light={light}>{kicker}</Kicker>
      <h2 className="mt-4 max-w-[22ch] text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] md:text-5xl">
        {title}
      </h2>
    </div>
    {lede && (
      <p className={`max-w-[56ch] text-lg leading-relaxed md:justify-self-end ${light ? "text-[#6E675B]" : "text-[#A79E8F]"}`}>
        {lede}
      </p>
    )}
  </div>
);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const standard = [
  "Does it create demand?",
  "Does it improve conversion?",
  "Does it bring customers back?",
  "Does it give the owner a clearer number to manage?",
  "Does it compound after the campaign ends?",
];

const team = [
  {
    icon: Compass,
    name: "Ben Killen",
    role: "Growth strategy & business development",
    body: "Ben brings 10 years of business development, growth hacking and market-facing strategy. His role is to understand the commercial gap, shape the offer, build the sales logic and make sure the work is tied to the number that matters.",
    line: "Vanity can open the door — real market knowledge is what creates value.",
  },
  {
    icon: BarChart3,
    name: "Noam Shabat",
    role: "Performance marketing & attribution",
    body: "Noam brings the paid acquisition engine: Meta, Google, campaign optimisation, tracking, GA4, reporting and performance discipline.",
    line: "Media spend is judged by outcomes — leads, bookings, conversions, revenue and return.",
  },
  {
    icon: Camera,
    name: "Melina Bilota",
    role: "Creative direction & content",
    body: "Melina brings the creative layer: content, campaign assets, brand feel, venue-facing proof and the visual standard that makes the work worth paying attention to.",
    line: "Make the brand look premium and trusted — then give the performance engine assets that convert.",
  },
];

const outcomes = [
  "More direct bookings",
  "Better-quality leads",
  "Higher-value enquiries",
  "Stronger repeat customer revenue",
  "Cleaner tracking and attribution",
  "A clearer offer and customer journey",
];

const systemLines = [
  ["Creative without performance", "becomes decoration."],
  ["Media without strategy", "becomes spend."],
  ["Data without action", "becomes reporting theatre."],
  ["Brand without market knowledge", "becomes guesswork."],
];

const principles = [
  {
    n: "01",
    icon: Target,
    title: "Start with the market",
    body: "We look at the customer, the offer, the competitive context and the commercial gap before building the campaign.",
  },
  {
    n: "02",
    icon: Activity,
    title: "Build for the real KPI",
    body: "For hospitality, that may be bookings and covers. For e-commerce, profitable revenue. For service businesses, qualified leads. The main number must matter commercially.",
  },
  {
    n: "03",
    icon: Camera,
    title: "Make creative accountable",
    body: "Creative should do more than look good. It should make the business easier to trust, remember and buy from.",
  },
  {
    n: "04",
    icon: Layers,
    title: "Track before scaling",
    body: "Media spend needs a scoreboard. Attribution, reporting and clean conversion events come before serious scale.",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Compound the work",
    body: "One campaign can create a spike. A system creates learnings, assets, audiences and data that get stronger over time.",
  },
];

const bestFit = [
  "Hospitality venues with proven demand and quiet-night upside",
  "E-commerce brands with strong products but inconsistent acquisition",
  "Trades and service businesses that need better-quality leads",
  "Founder-led businesses that need strategy, creative and performance working together",
  "Teams that care about brand quality but still judge work by numbers",
];

const poorFit = [
  "Businesses chasing followers without a commercial plan",
  "Teams that want content volume without strategy",
  "Operators who will not share access to the numbers",
  "Brands looking for a cheap supplier instead of a growth partner",
];

const vanityTruths = [
  ["Likes", "are not revenue."],
  ["Reach", "is not trust."],
  ["Content volume", "is not strategy."],
  ["A beautiful campaign", "is not automatically a commercial asset."],
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <div className="bg-[#0D0C0A] font-sans text-[#F4F0E8] antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0C0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1140px] items-center justify-between px-6">
          <Link to="/" className="text-[17px] font-extrabold uppercase tracking-[0.3em]">
            Fillmore<span className="text-[#C98443]">.</span>
          </Link>
          <div className="hidden gap-8 text-sm font-medium text-[#A79E8F] md:flex">
            <a href="#team" className="hover:text-[#F4F0E8]">The Team</a>
            <a href="#what-we-do" className="hover:text-[#F4F0E8]">What We Do</a>
            <a href="#how-we-work" className="hover:text-[#F4F0E8]">How We Work</a>
            <a href="#fit" className="hover:text-[#F4F0E8]">Fit</a>
          </div>
          <Link
            to="/apply"
            className="rounded-lg bg-[#C98443] px-5 py-2.5 text-[13.5px] font-bold text-[#120C05] transition hover:opacity-90"
          >
            See if you qualify
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_78%_8%,rgba(201,132,67,0.10),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-[1140px] px-6">
          <div className="max-w-[820px]">
            <Kicker>About Fillmore</Kicker>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] md:text-7xl">
              We build growth systems that{" "}
              <span className="text-[#E2A868]">make attention pay.</span>
            </h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-[#A79E8F]">
              Fillmore combines growth strategy, performance marketing and premium creative to
              help businesses turn attention into bookings, leads, revenue and repeat customers.
            </p>
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-[#A79E8F]">
              A sharp brand matters. Strong visuals matter. Attention matters. But vanity is not
              the scoreboard. Fillmore was built around a simple belief: the best marketing looks
              premium, understands the market and proves its value in the numbers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#C98443] px-7 py-4 text-[15px] font-bold text-[#120C05] transition hover:opacity-90"
              >
                See if we are the right fit <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                to="/full-house"
                className="inline-flex items-center rounded-lg border border-white/10 px-7 py-4 text-[15px] font-bold transition hover:bg-white/5"
              >
                View the work
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* DISCIPLINE STRIP */}
      <div className="border-y border-white/10 bg-[#151310] py-5">
        <div className="mx-auto flex w-full max-w-[1140px] flex-wrap items-center justify-between gap-4 px-6">
          {["Growth strategy", "Paid media", "Creative & content", "Tracking & attribution", "CRM & reactivation", "Commercial reporting"].map(
            (c, i, arr) => (
              <span key={c} className="flex items-center gap-6 text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#A79E8F]">
                {c}
                {i < arr.length - 1 && <span className="text-[#C98443]">·</span>}
              </span>
            ),
          )}
        </div>
      </div>

      {/* POSITION (light) */}
      <section className="bg-[#F6F3EE] py-[104px] text-[#17140F]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead
            light
            kicker="Our point of view"
            title="Creative gets attention. Performance proves value."
            lede="Most businesses do not need more random content. They need a sharper commercial system."
          />
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-[17px] leading-relaxed text-[#6E675B]">
              <p>
                A campaign can look good and still fail to move the business. A brand can get
                attention and still have no clear path to bookings, leads or revenue. A venue can
                look busy online while its quieter nights stay empty.
              </p>
              <p className="font-bold text-[#17140F]">Fillmore closes that gap.</p>
              <p>
                We care about how the work looks because perception matters. But we care more
                about what the work does.
              </p>
            </div>
            <div className="rounded-xl border border-[#E3DCD0] bg-white p-8">
              <div className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#A5651F]">
                The standard
              </div>
              <ul>
                {standard.map((q) => (
                  <li key={q} className="flex gap-3 border-b border-[#EFE9DF] py-3 text-[15.5px] font-semibold last:border-b-0">
                    <Check size={18} className="mt-0.5 flex-none text-[#A5651F]" strokeWidth={2.5} />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-[104px]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead
            kicker="The team behind the work"
            title="Strategy, performance and creative — built to work together."
            lede="Fillmore is not built around one discipline. It brings together the three layers most businesses need, but rarely get in one operating system: commercial strategy, performance media and creative execution."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="flex flex-col rounded-xl border border-white/10 bg-[#151310] p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#C98443]/15">
                  <m.icon size={24} className="text-[#C98443]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[22px] font-bold tracking-[-0.03em]">{m.name}</h3>
                <div className="mb-4 mt-1 text-[13px] font-bold uppercase tracking-[0.16em] text-[#C98443]">
                  {m.role}
                </div>
                <p className="text-[14.5px] leading-relaxed text-[#A79E8F]">{m.body}</p>
                <blockquote className="mt-auto border-l-2 border-[#C98443] pl-4 pt-5 text-[14px] font-semibold leading-relaxed text-[#F4F0E8]">
                  “{m.line}”
                </blockquote>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-[#C98443]/25 bg-[#C98443]/10 p-7 text-center">
            <p className="text-lg font-bold tracking-[-0.02em]">
              Together, Fillmore connects the message, the market and the media into one growth system.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="bg-[#151310] py-[104px]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead
            kicker="What we do"
            title="We turn brand attention into measurable growth."
            lede="The work can include strategy, paid media, content, landing pages, CRM, reactivation, tracking and reporting. But the service list is not the point. The point is the system."
          />
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#C98443]">
                What that can mean for the client
              </div>
              <ul>
                {outcomes.map((o) => (
                  <li key={o} className="flex gap-3 border-b border-white/10 py-3.5 text-[15.5px] text-[#A79E8F] last:border-b-0">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C98443]" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1D1A16] p-9">
              {systemLines.map(([a, b]) => (
                <p key={a} className="border-b border-white/10 py-4 text-[17px] leading-snug last:border-b-0">
                  <span className="font-bold">{a}</span>{" "}
                  <span className="text-[#A79E8F]">{b}</span>
                </p>
              ))}
              <p className="pt-6 text-[15px] leading-relaxed text-[#A79E8F]">
                Fillmore brings those layers together so the business knows what is working, what
                is leaking and what to scale next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF (light) */}
      <section className="bg-[#F6F3EE] py-[104px] text-[#17140F]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead
            light
            kicker="The belief"
            title="Vanity is useful. Performance is the point."
            lede="Presentation matters. Taste matters. Social proof matters. A premium brand can earn trust faster than an average one. But vanity becomes a problem when it is treated as the outcome."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {vanityTruths.map(([a, b]) => (
              <div key={a} className="rounded-xl border border-[#E3DCD0] bg-white p-7">
                <div className="text-xl font-extrabold tracking-[-0.03em]">{a}</div>
                <div className="mt-1 text-[15px] text-[#6E675B]">{b}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-[860px] border-l-2 border-[#A5651F] pl-8">
            <p className="text-2xl font-bold leading-[1.25] tracking-[-0.025em] md:text-3xl">
              Make it look sharp. Make it feel premium. Make it commercially grounded.{" "}
              <span className="text-[#A5651F]">Then make it perform.</span>
            </p>
            <p className="mt-4 max-w-[62ch] text-[16px] text-[#6E675B]">
              The value comes from connecting the surface layer to the business underneath — who
              we are trying to reach, what offer will move them, what channel can reach them, what
              happens after the click, and how we know if it worked.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how-we-work" className="py-[104px]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead kicker="Operating principles" title="A sharper way to build growth." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="rounded-xl border border-white/10 bg-[#151310] p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#C98443]/15">
                    <p.icon size={22} className="text-[#C98443]" strokeWidth={1.8} />
                  </div>
                  <span className="text-[13px] font-extrabold tracking-[0.14em] text-[#C98443]">{p.n}</span>
                </div>
                <h3 className="mb-2.5 text-lg font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#A79E8F]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT */}
      <section id="fit" className="bg-[#151310] py-[104px]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <SectionHead
            kicker="Fit"
            title="We work best with businesses that have something real to amplify."
            lede="Fillmore is best suited to founders, operators and teams with a strong product, venue, service or offer — but no clear system for turning attention into growth."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-[#C98443]/40 bg-gradient-to-b from-[#C98443]/15 to-[#C98443]/5 p-9">
              <h3 className="mb-5 text-xl font-bold tracking-[-0.025em]">Best fit</h3>
              <ul>
                {bestFit.map((f) => (
                  <li key={f} className="flex gap-3 py-2.5 text-[15px]">
                    <Check size={18} className="mt-0.5 flex-none text-[#E2A868]" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1D1A16] p-9">
              <h3 className="mb-5 text-xl font-bold tracking-[-0.025em]">Poor fit</h3>
              <ul>
                {poorFit.map((f) => (
                  <li key={f} className="flex gap-3 py-2.5 text-[15px] text-[#A79E8F]">
                    <X size={18} className="mt-0.5 flex-none text-[#A79E8F]" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[104px]">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <div className="rounded-[14px] border border-[#C98443]/40 bg-gradient-to-br from-[#C98443]/15 to-[#C98443]/[0.02] p-12 md:p-16">
            <Kicker>Work with Fillmore</Kicker>
            <h2 className="mt-5 max-w-[22ch] text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] md:text-5xl">
              If your brand has attention, we’ll help turn it into growth.
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#A79E8F]">
              If your business has something real to amplify, Fillmore can help sharpen the offer,
              build the campaign and install the system around the number that matters. For
              hospitality, that starts with finding where bookings, customer data and mid-week
              demand are leaking.
            </p>
            <p className="mt-5 text-[15px] font-bold uppercase tracking-[0.16em] text-[#E2A868]">
              Know the market · Build the system · Measure what matters · Scale what works
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#C98443] px-7 py-4 text-[15px] font-bold text-[#120C05] transition hover:opacity-90"
              >
                See if we are the right fit <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                to="/full-house"
                className="inline-flex items-center rounded-lg border border-white/10 px-7 py-4 text-[15px] font-bold transition hover:bg-white/5"
              >
                Explore the Full House Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0D0C0A] pb-10 pt-14">
        <div className="mx-auto w-full max-w-[1140px] px-6">
          <div className="flex flex-wrap justify-between gap-10">
            <div>
              <div className="text-xl font-extrabold uppercase tracking-[0.3em]">
                Fillmore<span className="text-[#C98443]">.</span>
              </div>
              <p className="mt-3 max-w-[34ch] text-sm text-[#A79E8F]">
                Growth operators for hospitality, e-commerce, trades, and automotive.
              </p>
            </div>
            {[
              { h: "Fillmore", links: ["Home", "Services", "Work", "Case Studies", "About"] },
              { h: "Industries", links: ["Hospitality", "Ecommerce", "Trades", "Automotive"] },
            ].map((col) => (
              <div key={col.h}>
                <h5 className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#A79E8F]">{col.h}</h5>
                {col.links.map((l) => (
                  <a key={l} href="#" className="block py-1 text-sm text-[#A79E8F] hover:text-[#F4F0E8]">
                    {l}
                  </a>
                ))}
              </div>
            ))}
            <div>
              <h5 className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#A79E8F]">Connect</h5>
              <a href="https://www.instagram.com/fillmore.media/" className="block py-1 text-sm text-[#A79E8F] hover:text-[#F4F0E8]">
                Instagram
              </a>
              <a href="mailto:hello@fillmoremedia.com.au" className="block py-1 text-sm text-[#A79E8F] hover:text-[#F4F0E8]">
                hello@fillmoremedia.com.au
              </a>
              <span className="block py-1 text-sm text-[#A79E8F]">Sydney, Australia</span>
            </div>
          </div>
          <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-[#A79E8F]">
            <span>© Fillmore Media. All rights reserved.</span>
            <span>Strategy · Performance · Creative — one growth system.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}