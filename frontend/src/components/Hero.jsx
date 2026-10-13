import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * Hero — Premium Lifestyle Banner for APNA MART DIBIYAPUR (DEC-016).
 * Elegant Warm Ivory & Forest Green canvas, Champagne Gold borders,
 * Playfair Display headline, high-quality retail photograph, and Forest Green CTA.
 * Meets acceptance criteria (TC-029, TC-030, TC-034).
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pt-28 sm:pt-32 md:pt-36 pb-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Warm Ivory & Champagne Gold Lifestyle Hero Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-[#FAF6ED] via-white to-[#F5EEDB] rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 overflow-hidden border border-[#C5A45B]/40 shadow-xs"
      >
        {/* Subtle Decorative Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A45B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#123B2A]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Brand Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A45B]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-3 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8752E]" />
              <span>APNA MART DIBIYAPUR • HOME &amp; LIFESTYLE STORE</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#123B2A] tracking-tight leading-[1.16] mb-3"
            >
              Elevate Your Home with Everyday Elegance
            </motion.h1>

            {/* Short Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs sm:text-sm md:text-base text-[#575C52] font-medium leading-relaxed mb-3 max-w-xl"
            >
              From fine dinnerware to airtight storage, stylish bags, and essential home organizers—curated quality at honest in-store prices, direct from our Dibiyapur store.
            </motion.p>

            {/* Bilingual Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-hindi text-base sm:text-lg text-[#123B2A] font-bold">
                हर ज़रूरत, एक ही जगह।
              </span>
              <span className="text-xs text-[#575C52] font-medium tracking-wide">
                • Har Zaroorat, Ek Hi Jagah.
              </span>
            </motion.div>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#123B2A] hover:bg-[#0B271C] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-150 cursor-pointer border border-[#C5A45B] active:scale-95 hover:shadow-md group"
                aria-label="Shop Categories"
              >
                <span>Shop Categories</span>
                <span className="text-sm transition-transform group-hover:translate-x-1">➔</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF6ED] text-[#252922] text-xs sm:text-sm font-semibold border border-[#C5A45B]/40 shadow-2xs transition-colors hover:border-[#123B2A]/40"
              >
                <span className="text-[#E8752E]">📍</span>
                <span>Store Location</span>
              </a>
            </motion.div>

            {/* Physical Store Trust Strip */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#575C52] pt-2 border-t border-[#C5A45B]/20 w-full">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-[#123B2A] font-bold">✓</span> Physical Store in Dibiyapur
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-[#123B2A] font-bold">✓</span> 100% Genuine Quality
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-[#123B2A] font-bold">✓</span> In-Store Counter Pickup
              </span>
            </div>
          </div>

          {/* Right Column: High-Quality Lifestyle Retail Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A45B]/40 shadow-md group bg-white aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
              <img
                src="/assets/hero/lifestyle-hero.jpg"
                alt="APNA MART Dibiyapur Home & Lifestyle Retail Store"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient Overlays for Readability and Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#C5A45B]/40 text-[10px] font-bold text-[#123B2A] shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123B2A]" />
                <span>Durga Nagar, Dibiyapur</span>
              </div>

              {/* Bottom Floating Glassmorphism Store Card */}
              <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#C5A45B]/30 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/branding/apna-mart-logo.jpg"
                    alt="APNA MART Official Logo"
                    className="w-8 h-8 rounded-full object-contain border border-[#C5A45B]/40 shadow-2xs"
                  />
                  <div>
                    <h2 className="text-xs font-bold text-[#123B2A] leading-tight">
                      APNA MART DIBIYAPUR
                    </h2>
                    <p className="text-[10px] text-[#575C52]">
                      Phaphund Road, Pizza Point
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-white bg-[#123B2A] px-2.5 py-1 rounded-lg shadow-2xs">
                  Visit Store
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
