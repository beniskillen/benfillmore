import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PillButton from '../shared/PillButton';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-heading font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] uppercase tracking-tight text-black">
                Fill every table,
                <br />
                cart and pipeline.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl"
            >
              <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed">
                We're growth operators for hospitality and e-commerce brands. We don't just run marketing. We build the systems that turn ad spend into revenue, content into bookings, and traffic into repeat customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <PillButton to="/apply" variant="primary">
                Book a Strategy Call →
              </PillButton>
              <Link
                to="/case-studies"
                className="font-body text-black/60 font-medium text-base relative group inline-flex items-center gap-1 py-3.5 hover:text-black transition-colors"
              >
                See how we'd grow your brand →
                <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </div>

          {/* Right — video tile */}
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
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              >
                <source src="https://videos.pexels.com/video-files/3776817/3776817-hd_1080_1920_25fps.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)' }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-body font-semibold text-white text-xs">UGC Content</p>
                <p className="font-body text-white/60 text-xs mt-0.5">Fillmore Creative</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}