import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

const TOPICS = [
  {
    title: 'How to Lower Customer Acquisition Cost on Meta Ads',
    category: 'Paid Media',
    summary:
      "Most businesses running Meta ads are paying too much to acquire a customer. The root cause is usually a mismatch between audience targeting, creative format, and landing page intent. When these three elements are aligned, CAC drops. When they are not, you burn budget chasing the wrong people with the wrong message. The fix starts with creative -- specifically, testing UGC-style content against polished brand ads. In most hospitality and e-commerce accounts, raw and authentic outperforms produced at 2:1. Combine that with tighter audience segmentation using first-party data, and you can reduce acquisition cost by 30-50% without cutting spend.",
  },
  {
    title: 'Why Hospitality Brands Underinvest in Retargeting',
    category: 'Hospitality',
    summary:
      "A guest who visited your venue page but did not book is your warmest lead. Yet most hospitality brands spend 90% of their ad budget on cold prospecting and leave retargeting as an afterthought. A properly structured retargeting funnel -- with separate ads for page visitors, menu viewers, and abandoned booking flows -- consistently delivers the lowest cost-per-reservation in any account. The key is sequenced messaging: first, a reminder with social proof; second, a direct offer or reason to act now. Restaurants and hotels that build this architecture see 20-40% more conversions from existing traffic before spending another dollar on acquisition.",
  },
  {
    title: 'The UGC Content Framework That Actually Drives E-Commerce Sales',
    category: 'E-Commerce',
    summary:
      "User-generated content has become the default creative format for high-performing DTC brands, but most UGC is produced without a brief, without a performance goal, and without an understanding of what drives someone to purchase. The brands seeing consistent return on UGC follow a framework: hook in the first two seconds, product demonstration in the middle, a clear single call to action at the end. They also test creators by niche, not by follower count -- a micro-creator with 8,000 followers in your exact product vertical will almost always outperform a generalist with 200,000. Volume matters too: brands producing 20+ assets per month have more signal to optimise from.",
  },
  {
    title: 'Google Ads vs Meta Ads for Lead Generation: Which Channel Wins?',
    category: 'Strategy',
    summary:
      "The honest answer is both -- but at different stages of the funnel. Google Search captures demand that already exists. If someone is searching for a restaurant marketing agency in Sydney, they are actively looking for a solution, and Google is where you intercept them. Meta creates demand. It puts your offer in front of people who have not thought to search yet, building awareness and intent over time. For most service businesses, the highest-performing setup runs Google Search for branded and high-intent terms, and uses Meta for prospecting and retargeting. Running one without the other leaves revenue on the table. The ratio of spend between them depends on your category, your average deal size, and your current brand awareness.",
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
              What we know about growing brands with paid media and content.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
              These are the frameworks, observations, and strategies we apply every day across hospitality and e-commerce accounts. Not theory -- patterns we have seen work at scale, across hundreds of campaigns and millions in managed spend.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro context block */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed">
              Performance marketing for hospitality and e-commerce businesses operates on different rules than most agencies acknowledge. A restaurant group scaling across three suburbs has completely different attribution needs than a DTC skincare brand targeting women aged 28-45. The platforms are the same -- Meta, Google, TikTok -- but the strategy, creative format, audience architecture, and measurement frameworks need to be rebuilt from the ground up for each vertical.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              At Fillmore, our paid media work is always paired with in-house creative production. This matters because the biggest variable in any paid campaign is not the targeting -- it is the creative. The businesses that consistently grow are the ones testing more assets, moving faster, and treating creative as a performance lever, not a branding exercise.
            </p>
            <p className="font-body text-black/70 text-lg md:text-xl leading-relaxed mt-6">
              The resources below cover the specific challenges we solve most often: reducing customer acquisition cost, building retargeting infrastructure, producing UGC that converts, and choosing the right channels for your growth stage. If any of them describe a problem you are facing right now, the next step is a strategy session.
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
              Want us to apply this to your business?
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
              Book a 30-minute strategy session. We will look at your current setup and tell you exactly where the gaps are.
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