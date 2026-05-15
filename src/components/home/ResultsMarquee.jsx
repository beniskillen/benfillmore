import React from 'react';

const METRICS = [
  { value: 'A$2M+ Ad Spend Managed', client: 'Across our portfolio' },
  { value: '4.16x ROAS', client: 'E-Commerce' },
  { value: '+309% Purchases', client: 'E-Commerce' },
  { value: '1,165 Leads at A$80 CPL', client: 'Service Business' },
  { value: '41,900 Clicks', client: 'Service Business' },
  { value: '2.64x ROAS', client: 'E-Commerce' },
];

function MetricItem({ value, client }) {
  return (
    <div className="flex-shrink-0 px-8 md:px-12 flex flex-col items-center">
      <span className="font-heading font-bold text-2xl md:text-4xl uppercase tracking-tight text-black whitespace-nowrap">
        {value}
      </span>
      <span className="font-body text-sm text-black/40 mt-2">{client}</span>
    </div>
  );
}

export default function ResultsMarquee() {
  const doubled = [...METRICS, ...METRICS];

  return (
    <section className="py-16 md:py-20 bg-background border-y border-black/5 overflow-hidden">
      <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
        {doubled.map((m, i) => (
          <React.Fragment key={i}>
            <MetricItem value={m.value} client={m.client} />
            <span className="text-black/10 font-heading text-3xl mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}