import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

const TOPICS = [
  {
    title: 'Why Most Venue Marketing Does Not Acquire Customers',
    category: 'Paid Media',
    summary:
      "Most venues are not short on content. They are short on a system. The offer, creative, audience, booking path and follow-up are usually disconnected. That is why spend goes out and the owner still cannot say where the next booking came from. The fix is not more posting. It is a clearer demand loop: define the guest, give them a reason to book, track the booking, then bring them back.",
  },
  {
    title: 'Why Past Guests Are the Cheapest Customers to Acquire',
    category: 'Hospitality',
    summary:
      "A guest who booked once, visited the menu, joined Wi-Fi or opened an email already knows the venue. Most venues still spend more on cold audiences than on bringing those people back. A simple reactivation system uses recency, spend and interest to send the right offer at the right time. It is usually the fastest way to create bookings before scaling new demand.",
  },
  {
    title: 'Creative Only Works When It Has a Booking Job',
    category: 'Creative',
    summary:
      "Good creative makes the venue feel worth choosing. Great creative also gives the customer a clear next step. For venues, that means the shoot, hook, copy and call to action need to support the same offer. Food, room, people and proof all matter, but only when they help someone decide to book.",
  },
  {
    title: 'Meta Creates Demand. Google Captures It.',
    category: 'Strategy',
    summary:
      "A venue needs both sides of the system. Meta puts the offer in front of the right local audience before they are searching. Google catches people already looking for somewhere to book. Retargeting keeps the venue in front of warm prospects. The mix depends on demand, location, offer and how much customer data the venue already owns.",
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-white/30 text-sm uppercase tracking-widest mb-4">
              Performance Marketing Insights
            </p>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-white max-w-5xl">
              Simple notes on demand, bookings and repeat guests.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
              Most venues do not have a clear way to turn attention into bookings. These notes explain the parts of the system: offer, audience, creative, media, booking path, tracking and reactivation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro context block */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed">
              Hospitality marketing is usually split into pieces: someone posts, someone runs ads, someone checks bookings, and no one owns the path from attention to booking. That is the problem Fillmore is built to solve.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              The mechanism is simple. Build a strong reason to book. Put it in front of the right people. Track what turns into bookings. Bring past guests back. Then use the data to make the next campaign cheaper and sharper.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              The resources below cover the pieces we see break most often. If they describe your venue, the next step is a strategy session.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Topic cards */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOPICS.map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.07}>
                <article className="bg-white border border-black/8 rounded-2xl p-8 h-full flex flex-col">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-black/40 mb-4 font-body">
                    {topic.category}
                  </span>
                  <h2 className="font-heading font-bold text-xl uppercase tracking-tight text-black leading-tight mb-4">
                    {topic.title}
                  </h2>
                  <p className="font-body text-black/65 text-base leading-relaxed flex-1">
                    {topic.summary}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Want us to apply this to your venue?
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Book a 30-minute strategy session. We will look at how customers find you now and where the system is leaking.
            </p>
            <div className="mt-10">
              <PillButton to="/apply" variant="primary-inverted">
                Book a Strategy Call
              </PillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
