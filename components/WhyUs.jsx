'use client';

import { motion } from 'framer-motion';
import { Shield, MapPin, UserCheck, BadgeIndianRupee } from 'lucide-react';

const REASONS = [
  {
    icon: Shield,
    title: 'Backed by Nirmal Bang',
    description:
      "Trade with confidence through one of India's most established full-service brokerages, with decades of market expertise.",
  },
  {
    icon: MapPin,
    title: 'Local, Personalised Service',
    description:
      'Walk-in support in Kalna, Purba Bardhaman. Get face-to-face guidance — no call centres, no waiting.',
  },
  {
    icon: UserCheck,
    title: 'Trusted Proprietor',
    description:
      "Ritupon Bhattacharyaa brings hands-on experience and a commitment to every client's financial well-being.",
  },
  {
    icon: BadgeIndianRupee,
    title: 'Transparent & Affordable',
    description:
      'Clear pricing with no hidden charges. Easy account opening, ongoing support, and hassle-free investing.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="block text-sm font-semibold tracking-wider uppercase text-neon mb-2"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary heading-line-center"
          >
            Why Trade With Us
          </motion.h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="text-center"
            >
              {/* Icon circle */}
              <div className="mx-auto w-16 h-16 rounded-full bg-neon/[0.08] border border-neon/20 flex items-center justify-center mb-5">
                <reason.icon className="w-7 h-7 text-neon" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-[15px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
