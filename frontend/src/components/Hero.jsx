import { motion } from 'motion/react';

/**
 * Hero — Approved Lifestyle Hero Banner matching the mobile reference.
 * Features elegant serif headline, bilingual tagline, warm cream backdrop,
 * deep burgundy "Shop Now" CTA, and verified local store trust badges.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream-100/70 via-cream-50 to-cream-50 overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft radial warm glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-100/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headline & Action Content (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-100 shadow-xs mb-4 md:mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-800 animate-pulse" />
              <span className="text-xs font-semibold text-burgundy-900 tracking-wide uppercase">
                Home & Lifestyle Store • Dibiyapur
              </span>
            </motion.div>

            {/* Main Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="serif-title font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-burgundy-950 tracking-tight leading-[1.12] mb-3 sm:mb-4"
            >
              Elevate Your Home with Everyday{' '}
              <span className="italic font-serif text-burgundy-800">Elegance</span>
            </motion.h1>

            {/* Approved Tagline in Hindi & English */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-hindi text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold mb-3 tracking-wide"
            >
              &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
            </motion.p>

            {/* Lifestyle Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-charcoal-700 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
            >
              Discover premium crockery, smart storage solutions, stylish bags,
              and essential home goods at your favourite local retail store in Dibiyapur.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* Deep Burgundy Shop Now Button */}
              <a
                href="#categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy-800 hover:bg-burgundy-900 text-cream-50 font-semibold text-sm sm:text-base shadow-md shadow-burgundy-900/20 hover:shadow-lg hover:shadow-burgundy-900/30 transition-all duration-200 active:scale-98"
              >
                <span>Shop Categories</span>
                <span className="text-base">→</span>
              </a>

              {/* Secondary Visit Store / Call Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-cream-300 bg-white/80 hover:bg-white text-charcoal-800 font-medium text-sm sm:text-base subtle-shadow hover:border-burgundy-800 hover:text-burgundy-800 transition-all duration-200"
              >
                <span>📍 Store Location</span>
              </a>
            </motion.div>

            {/* Quick Micro-Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-5 border-t border-cream-200/80 flex items-center justify-center lg:justify-start gap-4 text-xs text-charcoal-600"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-burgundy-800 font-bold">✓</span>
                <span>In-Store Shopping</span>
              </div>
              <span className="text-cream-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-burgundy-800 font-bold">✓</span>
                <span>Counter Pickup</span>
              </div>
              <span className="text-cream-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-burgundy-800 font-bold">✓</span>
                <span>Local Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Lifestyle Banner Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Framed Showcase Card */}
              <div className="rounded-3xl p-5 sm:p-7 bg-white/95 border border-cream-200/90 card-shadow relative overflow-hidden">
                {/* Top Banner Header inside Card */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-forest-800" />
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                      Featured Collection
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                    Dibiyapur Store
                  </span>
                </div>

                {/* Visual Category Mosaic (Non-fabricated illustration grid) */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="bg-cream-100/80 rounded-2xl p-4 flex flex-col items-center text-center justify-center">
                    <span className="text-3xl mb-1.5">🍽️</span>
                    <span className="text-xs font-semibold text-charcoal-900">Fine Crockery</span>
                    <span className="text-[10px] text-charcoal-500">Dinnerware & Sets</span>
                  </div>
                  <div className="bg-cream-100/80 rounded-2xl p-4 flex flex-col items-center text-center justify-center">
                    <span className="text-3xl mb-1.5">📦</span>
                    <span className="text-xs font-semibold text-charcoal-900">Pantry Storage</span>
                    <span className="text-[10px] text-charcoal-500">Air-tight Containers</span>
                  </div>
                  <div className="bg-cream-100/80 rounded-2xl p-4 flex flex-col items-center text-center justify-center">
                    <span className="text-3xl mb-1.5">👜</span>
                    <span className="text-xs font-semibold text-charcoal-900">Trendy Bags</span>
                    <span className="text-[10px] text-charcoal-500">Accessories & Pouches</span>
                  </div>
                  <div className="bg-cream-100/80 rounded-2xl p-4 flex flex-col items-center text-center justify-center">
                    <span className="text-3xl mb-1.5">🎁</span>
                    <span className="text-xs font-semibold text-charcoal-900">Gift Ideas</span>
                    <span className="text-[10px] text-charcoal-500">Decor & Festive</span>
                  </div>
                </div>

                {/* Bottom Callout in Showcase Card */}
                <div className="bg-burgundy-950 text-cream-100 rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider">
                      Visit Us In-Person
                    </span>
                    <span className="text-xs font-medium text-cream-200">
                      Durga Nagar, Pizza Point
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="px-3 py-1.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-700 text-cream-50 text-xs font-semibold transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

