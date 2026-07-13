'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const STATS = [
  { icon: Clock, value: '5+', label: 'Years of Service' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '₹10Cr+', label: 'Assets Managed' },
  { icon: Award, value: '#1', label: 'In Kalna Region' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-sm font-semibold tracking-wider uppercase text-neon mb-2">
              About Us
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-text-primary heading-line">
              Our Story
            </h2>

            <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Trading Zone</strong> was founded by{' '}
                <strong className="text-neon">Ritupon Bhattacharyaa</strong> with a
                simple mission — to bring trusted, professional investment services to Kalna
                and the Purba Bardhaman region. As an authorised associate of{' '}
                <strong className="text-text-primary">Nirmal Bang</strong>, we combine the
                strength of a national brokerage network with the personal touch of a local
                partner who understands your needs.
              </p>
              <p>
                We are committed to making investing accessible, transparent, and rewarding
                for every client — whether you are opening your first Demat account or
                managing a diversified portfolio.
              </p>
              <p>
                We believe that everyone in Kalna deserves access to the same quality of
                financial services available in major cities. That is why we offer
                personalised guidance, walk-in support, and ongoing portfolio reviews —
                all at your doorstep.
              </p>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative bg-dark-surface rounded-2xl p-8 lg:p-10 border border-dark-border overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 50}
                      x2="400"
                      y2={i * 50}
                      stroke="white"
                      strokeWidth="1"
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 50}
                      y1="0"
                      x2={i * 50}
                      y2="400"
                      stroke="white"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-neon mb-2">
                  Trusted by Kalna
                </h3>
                <p className="text-text-muted text-sm mb-8">
                  Numbers that reflect our commitment to your financial growth.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mx-auto w-12 h-12 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center mb-3">
                        <stat.icon className="w-6 h-6 text-neon" />
                      </div>
                      <div className="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
                        {stat.value}
                      </div>
                      <div className="text-text-dim text-xs mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon/10 rounded-full blur-xl"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
