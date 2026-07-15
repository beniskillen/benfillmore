import { Mail } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import RoiGuaranteeLink from '../components/shared/RoiGuaranteeLink';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28" style={{ background: '#b40425' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-white max-w-4xl">
              Let's talk about filling the room.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg md:text-xl mt-6 max-w-2xl">
              If your venue needs a clearer way to create demand, drive bookings and bring people back, start here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-sm mx-auto">
            {/* Email */}
            <ScrollReveal>
              <div className="bg-white border border-black/8 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-2">
                  Email
                </h3>
                <p className="text-black/60 text-sm mb-6">
                  Send us the venue, the problem and what you want to change.
                </p>
                <a
                  href="mailto:hello@fillmoremedia.com.au"
                  className="inline-block text-black hover:text-black/70 transition-colors font-medium underline underline-offset-4"
                >
                  hello@fillmoremedia.com.au
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 md:py-28" style={{ background: '#FAF0DA' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-4" style={{ color: '#961621' }}>
                What happens next?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(150,22,33,0.7)' }}>
                We usually respond within 24 hours. If you are reaching out about a strategy session, we will send availability for a 30-minute call where we look at how customers currently find you, where bookings leak, and whether we are a fit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-black mb-6">
              Ready to fix the leak?
            </h2>
            <p className="text-black/60 text-lg mb-10 max-w-xl mx-auto">
              Tell us what is happening now. We will tell you if the system fits.
            </p>
            <RoiGuaranteeLink
              className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#E9FF80' }}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
