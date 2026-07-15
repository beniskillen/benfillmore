import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GALLERY_BY_ID } from '../../lib/galleryImages';

const HERO_IMAGE = GALLERY_BY_ID['table-manners-martini'];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24" style={{ background: '#961621' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-heading font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] uppercase tracking-tight text-white">
                More than vanity
                <br />
                metrics.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl"
            >
              <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed">
                We install the performance system hospitality businesses need to reliably produce growth — turning ad spend into bookings, customer data into repeat visits, and reporting into decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/apply"
                className="inline-flex items-center font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#E9FF80', color: '#961621' }}
              >
                Book a Strategy Call →
              </Link>
              <Link
                to="/work"
                className="font-body text-white/60 font-medium text-base relative group inline-flex items-center gap-1 py-3.5 hover:text-white transition-colors"
              >
                See how we'd grow your brand →
                <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </div>

          {/* Right media tile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: '240px',
                height: '426px',
                borderRadius: '16px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
                background: '#0d0d0d',
              }}
            >
              <img
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)' }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading font-bold text-white text-lg uppercase tracking-tight">
                  {HERO_IMAGE.client}
                </p>
                <p className="font-body text-white/65 text-xs mt-1">
                  {HERO_IMAGE.kind}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
