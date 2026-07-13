'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

const PHONE_NUMBER = '8653548730';
const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20opening%20a%20trading%20account%20with%20Trading%20Zone.`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-dark-surface">
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
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary heading-line-center"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Ready to start investing? Reach out to us — we are here to help you
            every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-primary">Phone</h3>
                <a
                  href={`tel:+91${PHONE_NUMBER}`}
                  className="text-text-secondary hover:text-neon transition-colors text-lg"
                >
                  +91 {PHONE_NUMBER}
                </a>
                <p className="text-sm text-text-dim mt-1">Tap to call directly</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-primary">Location</h3>
                <p className="text-text-secondary">
                  Kalna, Purba Bardhaman,<br />
                  West Bengal, India
                </p>
              </div>
            </div>

            {/* Office hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-primary">Office Hours</h3>
                <p className="text-text-secondary">
                  Mon – Sat: 9:30 AM – 5:30 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1EB954] transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-dark-border h-56">
              <iframe
                title="Trading Zone location - Kalna, Purba Bardhaman"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29245.40899053066!2d88.3475!3d23.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91b5cc78ccbd5%3A0xc7c0a3ced78d7118!2sKalna%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-dark-card rounded-2xl p-8 lg:p-10 border border-dark-border">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                Send Us a Message
              </h3>
              <p className="text-text-muted text-sm mb-8">
                Fill in the form below and we will get back to you shortly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-neon/10 border border-neon/30 text-neon rounded-xl text-sm font-medium">
                  ✓ Thank you! We will contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-text-primary mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-surface text-text-primary placeholder:text-text-dim focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-text-primary mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-surface text-text-primary placeholder:text-text-dim focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-text-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-surface text-text-primary placeholder:text-text-dim focus:outline-none focus:border-neon/50 focus:ring-2 focus:ring-neon/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neon text-dark-bg font-bold rounded-xl hover:bg-neon-hover transition-colors shadow-md shadow-neon/20 hover:shadow-lg hover:shadow-neon/30"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
