import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { ROI_GUARANTEE_CTA_LABEL, ROI_GUARANTEE_FORM_URL, isExternalUrl } from '../../lib/cta';

export default function SectionCTA({
  headline = "Ready to fill the gaps?",
  sub = "Free 30-minute strategy call. We'll show you where customers are leaking and what we'd fix first.",
  buttonText = ROI_GUARANTEE_CTA_LABEL,
  buttonTo = ROI_GUARANTEE_FORM_URL,
}) {
  const buttonClassName = 'inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg';
  const buttonStyle = { background: '#faf0da' };
  const externalButton = isExternalUrl(buttonTo);

  return (
    <section className="py-24 md:py-32" style={{ background: '#000000' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
            {headline}
          </h2>
          <p className="font-body text-white/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            {sub}
          </p>
          <div className="mt-10">
            {externalButton ? (
              <a
                href={buttonTo}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName}
                style={buttonStyle}
              >
                {buttonText}
              </a>
            ) : (
              <Link
                to={buttonTo}
                className={buttonClassName}
                style={buttonStyle}
              >
                {buttonText}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
