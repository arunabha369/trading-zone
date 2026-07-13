'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[12vw] font-heading font-bold text-white/[0.03] tracking-wider whitespace-nowrap">
            TRADING ZONE
          </span>
        </div>

        {/* Radial glows */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-neon/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-neon/[0.02] rounded-full blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Diagonal green accent line */}
        <div className="absolute bottom-0 right-0 w-[2px] h-[40vh] bg-gradient-to-t from-neon/40 to-transparent rotate-[15deg] origin-bottom-right" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column — text */}
          <div>
            {/* Tagline chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark-surface border border-dark-border rounded-full text-xs font-medium text-neon tracking-wider uppercase">
                <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                Nirmal Bang Associate Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1]"
            >
              Trade Smarter.
              <br />
              Invest Wiser.
              <br />
              <span className="text-neon">Grow Faster.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Trading Zone brings trusted, professional investment services to Kalna.
              Open Demat accounts, trade equities, invest in mutual funds — all backed
              by <strong className="text-text-primary">Nirmal Bang</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon text-dark-bg font-bold text-base rounded-xl hover:bg-neon-hover transition-all duration-200 shadow-lg shadow-neon/20 hover:shadow-xl hover:shadow-neon/30 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+918653548730"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dark-border text-text-secondary font-semibold text-base rounded-xl hover:border-neon/40 hover:text-neon transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Enquiry
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              {[
                { icon: ShieldCheck, label: 'SEBI Authorised' },
                { icon: Zap, label: 'Zero Commission' },
                { icon: CheckCircle, label: 'Fast Support' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface border border-dark-border-subtle rounded-full text-xs font-medium text-text-muted"
                >
                  <badge.icon className="w-3.5 h-3.5 text-neon" />
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — owner photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Green glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-neon/[0.06] rounded-full blur-[80px]" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 right-8 z-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-medium text-neon border border-neon/20">
                <span className="w-2 h-2 bg-neon rounded-full" />
                BSE & NSE Registered ✦
              </span>
            </div>

            {/* Photo container */}
            <div className="relative z-10 w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden border border-dark-border shadow-2xl shadow-black/50">
                <Image
                  src="/owner.png"
                  alt="Ritupon Bhattacharyaa — Founder of Trading Zone"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                {/* Owner name overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="font-heading text-lg font-bold text-text-primary">
                    Ritupon Bhattacharyaa
                  </p>
                  <p className="text-xs text-neon tracking-wider uppercase">
                    Founder & Professional Trader
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-text-dim tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-dark-border flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-neon/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
