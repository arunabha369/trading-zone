'use client';

import { motion } from 'framer-motion';
import {
  Landmark,
  BarChart3,
  PiggyBank,
  FileCheck2,
  BriefcaseBusiness,
  CalendarClock,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Landmark,
    title: 'Demat & Trading Account',
    description:
      'Quick and hassle-free Demat and trading account opening with Nirmal Bang. Start your investment journey today.',
  },
  {
    icon: BarChart3,
    title: 'Equity / Stock Trading',
    description:
      'Trade on BSE & NSE with real-time market access. Intraday and delivery trading with competitive brokerage.',
  },
  {
    icon: PiggyBank,
    title: 'Mutual Fund Investments',
    description:
      'Diversify your portfolio with carefully selected mutual funds across equity, debt, and hybrid categories.',
  },
  {
    icon: FileCheck2,
    title: 'IPO Applications',
    description:
      'Never miss a promising IPO. We help you apply seamlessly and track allotment status.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Portfolio & Investment Advisory',
    description:
      'Personalized investment advice tailored to your financial goals, risk appetite, and time horizon.',
  },
  {
    icon: CalendarClock,
    title: 'SIP Planning',
    description:
      'Build long-term wealth with disciplined Systematic Investment Plans. Start with as little as ₹500/month.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-dark-bg">
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
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary heading-line-center"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Comprehensive financial services to help you invest, trade, and grow
            your wealth with confidence.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group relative bg-dark-surface rounded-2xl p-8 border border-dark-border-subtle hover:border-neon/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Green accent top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon to-neon/40 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center mb-5 group-hover:bg-neon/[0.15] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-neon" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
