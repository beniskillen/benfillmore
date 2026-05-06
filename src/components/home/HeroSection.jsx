import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PillButton from '../shared/PillButton';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] uppercase tracking-tight text-black">
            Fill every table,
            <br />
            calendar and pipeline.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 md:mt-10 max-w-2xl"
        >
          <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed">
            We're a hands-on growth agency for hospitality and e-commerce. No agency theatre. No handoffs. Just marketing that works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <PillButton to="/apply">
            Apply for a Free Strategy Call →
          </PillButton>
          <Link
            to="/case-studies"
            className="font-body text-black/60 font-medium text-base relative group inline-flex items-center gap-1 py-3.5"
          >
            See our work
            <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}