import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';

const NICHE_OPTIONS = [
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'other', label: 'Other' },
];

const SPEND_OPTIONS = [
  { value: 'under_5k', label: 'Under $5k' },
  { value: '5k_15k', label: '$5k – $15k' },
  { value: '15k_50k', label: '$15k – $50k' },
  { value: '50k_plus', label: '$50k+' },
  { value: 'not_sure', label: 'Not sure yet' },
];

export default function Apply() {
  const [form, setForm] = useState({
    name: '',
    business_name: '',
    website: '',
    niche: '',
    monthly_ad_spend: '',
    biggest_challenge: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.StrategyApplication.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-black">
            We got it.
          </h2>
          <p className="font-body text-black/60 text-lg mt-4">
            We'll be in touch within 24 hours. No automated emails. A real person will reach out.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background pt-32 md:pt-44 pb-24 md:pb-32">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-black">
            Apply for a free strategy call
          </h1>
          <p className="font-body text-black/60 text-lg mt-4">
            30 minutes. No pitch deck. No fluff. Just an honest conversation about your business.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Your Name"
                value={form.name}
                onChange={(v) => handleChange('name', v)}
                required
              />
              <InputField
                label="Business Name"
                value={form.business_name}
                onChange={(v) => handleChange('business_name', v)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Website"
                value={form.website}
                onChange={(v) => handleChange('website', v)}
                placeholder="https://"
              />
              <InputField
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => handleChange('email', v)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Your Niche"
                value={form.niche}
                options={NICHE_OPTIONS}
                onChange={(v) => handleChange('niche', v)}
              />
              <SelectField
                label="Monthly Ad Spend"
                value={form.monthly_ad_spend}
                options={SPEND_OPTIONS}
                onChange={(v) => handleChange('monthly_ad_spend', v)}
              />
            </div>

            <div>
              <label className="font-body text-sm font-medium text-black/70 block mb-2">
                What's your biggest challenge right now?
              </label>
              <textarea
                value={form.biggest_challenge}
                onChange={(e) => handleChange('biggest_challenge', e.target.value)}
                rows={4}
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-black text-white font-semibold text-base px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Application →'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InputField({ label, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="font-body text-sm font-medium text-black/70 block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
      />
    </div>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <div>
      <label className="font-body text-sm font-medium text-black/70 block mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-base text-black appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 transition-all cursor-pointer"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}