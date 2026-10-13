import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * ContactCTA — Verified Store Information & Contact Section.
 * Contains the owner-verified shop address and phone numbers from promotional artwork.
 */
export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-cream-200 p-6 sm:p-10 md:p-12 card-shadow text-center relative overflow-hidden">
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-burgundy-900 via-orange-500 to-gold-400" />

          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl">
            <span>🏪</span>
          </div>

          <h2 className="serif-title font-bold text-2xl sm:text-3xl md:text-4xl text-burgundy-950 mb-2">
            Visit Our Store in Dibiyapur
          </h2>

          <p className="font-hindi text-base sm:text-lg text-orange-600 font-semibold mb-4">
            &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto mb-6">
            Looking for something specific or have questions about bulk orders?
            Call our team or visit us at our retail location.
          </p>

          {/* Verified Store Address Box */}
          <div className="bg-cream-100/70 border border-cream-200/80 rounded-2xl p-4 sm:p-5 max-w-lg mx-auto mb-6 text-left">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">📍</span>
              <div>
                <p className="text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-0.5">
                  Store Address
                </p>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
                  Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244
                </p>
              </div>
            </div>
          </div>

          {/* Verified Contact Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <a
              href="tel:9756595920"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-burgundy-800 hover:bg-burgundy-900 text-cream-50 text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <span>📞</span>
              <span>Call 9756595920</span>
            </a>

            <a
              href="tel:9528869946"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-cream-300 hover:border-burgundy-800 bg-white hover:bg-cream-50 text-charcoal-800 hover:text-burgundy-900 text-xs sm:text-sm font-semibold transition-colors subtle-shadow"
            >
              <span>📞</span>
              <span>Call 9528869946</span>
            </a>

            <a
              href="tel:7500781379"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-cream-300 hover:border-burgundy-800 bg-white hover:bg-cream-50 text-charcoal-800 hover:text-burgundy-900 text-xs sm:text-sm font-semibold transition-colors subtle-shadow"
            >
              <span>📞</span>
              <span>Call 7500781379</span>
            </a>
          </div>

          <p className="text-[11px] text-charcoal-500">
            * Direct numbers provided by store management. Specific WhatsApp support routing pending owner confirmation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

