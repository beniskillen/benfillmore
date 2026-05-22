import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import PillButton from '../components/shared/PillButton';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95] uppercase tracking-tight text-white max-w-4xl">
              Let's talk about your growth.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg md:text-xl mt-6 max-w-2xl">
              Whether you're looking for a strategy session, have questions about our approach, or want to discuss your specific needs — we're here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Get in touch directly with our team.
                </p>
                <a
                  href="mailto:hello@fillmoremedia.com.au"
                  className="inline-block text-black hover:text-black/70 transition-colors font-medium underline underline-offset-4"
                >
                  hello@fillmoremedia.com.au
                </a>
              </div>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-black/8 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-2">
                  WhatsApp
                </h3>
                <p className="text-black/60 text-sm mb-6">
                  Quick chat on WhatsApp for faster response.
                </p>
                <a
                  href="https://wa.me/61412345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black hover:text-black/70 transition-colors font-medium underline underline-offset-4"
                >
                  Message us
                </a>
              </div>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-black/8 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-black mb-2">
                  LinkedIn
                </h3>
                <p className="text-black/60 text-sm mb-6">
                  Connect with us on LinkedIn to stay updated.
                </p>
                <a
                  href="https://linkedin.com/company/fillmore-media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black hover:text-black/70 transition-colors font-medium underline underline-offset-4"
                >
                  Visit page
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-4">
                What happens next?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We usually respond within 24 hours. If you're reaching out about a strategy session, we'll send over some availability for a 30-minute call where we can understand your business, see where your marketing is leaking revenue, and talk about whether we're a fit.
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
              Ready to discuss?
            </h2>
            <p className="text-black/60 text-lg mb-10 max-w-xl mx-auto">
              Hit us up any time. We're always open to talking about growth.
            </p>
            <PillButton to="/apply" variant="primary">
              Schedule a Call →
            </PillButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}