import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * ContactCTA — Verified Store Information & Contact Section (DEC-016).
 * Contains owner-verified shop address and phone numbers in approved
 * Deep Forest Green, Warm Ivory, and Champagne Gold styling.
 */
export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-[#C5A45B]/35 p-6 sm:p-10 md:p-12 shadow-sm text-center relative overflow-hidden">
          {/* Top Champagne Gold & Forest Green Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A45B] via-[#123B2A] to-[#C5A45B]" />

          {/* Store Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF6ED] border border-[#C5A45B]/30 flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl shadow-2xs">
            <span>🏪</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#123B2A] mb-2">
            Visit Our Store in Dibiyapur
          </h2>

          <p className="font-hindi text-base sm:text-lg text-[#123B2A] font-semibold mb-3">
            &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-[#575C52] max-w-xl mx-auto mb-6">
            Looking for something specific or have questions about in-store items?
            Call our team or visit us at our retail location.
          </p>

          {/* Verified Store Address Box */}
          <div className="bg-[#FAF6ED]/70 border border-[#C5A45B]/30 rounded-2xl p-4 sm:p-5 max-w-lg mx-auto mb-6 text-left">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5 text-[#E8752E]">📍</span>
              <div>
                <p className="text-xs font-bold text-[#123B2A] uppercase tracking-wider mb-0.5">
                  Store Address
                </p>
                <p className="text-xs sm:text-sm text-[#252922] leading-relaxed font-medium">
                  Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Phaphund+Road+Durga+Nagar+Pizza+Point+Dibiyapur+Auraiya+Uttar+Pradesh+206244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#123B2A] hover:text-[#E8752E] mt-2 cursor-pointer"
                >
                  <span>Get Directions on Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Verified Contact Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <a
              href="tel:9756595920"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#123B2A] hover:bg-[#0B271C] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors border border-[#C5A45B]"
            >
              <span>📞</span>
              <span>Call 9756595920</span>
            </a>

            <a
              href="tel:9528869946"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A45B]/40 hover:border-[#123B2A] bg-white hover:bg-[#FAF6ED] text-[#123B2A] text-xs sm:text-sm font-bold transition-colors"
            >
              <span>📞</span>
              <span>Call 9528869946</span>
            </a>

            <a
              href="tel:7500781379"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A45B]/40 hover:border-[#123B2A] bg-white hover:bg-[#FAF6ED] text-[#123B2A] text-xs sm:text-sm font-bold transition-colors"
            >
              <span>📞</span>
              <span>Call 7500781379</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-400">
            * Direct numbers provided by store management. Specific WhatsApp support routing pending owner confirmation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
