'use client';

import { Phone } from 'lucide-react';

/**
 * FloatingCallButton — Fixed green call button visible only on mobile.
 */
export default function FloatingCallButton() {
  return (
    <a
      href="tel:+918653548730"
      className="fixed bottom-6 right-6 z-40 lg:hidden w-14 h-14 bg-neon text-dark-bg rounded-full flex items-center justify-center shadow-lg shadow-neon/30 hover:bg-neon-hover transition-colors active:scale-95"
      aria-label="Call Trading Zone"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
