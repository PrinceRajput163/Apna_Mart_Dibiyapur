import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * StoreIntro — "About Us" section for APNA MART DIBIYAPUR (DEC-016).
 * Highlights store values in the approved premium Warm Ivory, Champagne Gold, and Forest Green palette.
 */
export default function StoreIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const highlights = [
    { icon: '🏠', label: 'Home & Lifestyle', description: 'Curated selection tailored for modern families' },
    { icon: '✅', label: 'Quality Assured', description: 'Hand-selected items from trusted manufacturers' },
    { icon: '🏷️', label: 'Fair In-Store Pricing', description: 'Honest prices without artificial markups' },
    { icon: '🤝', label: 'Personal Assistance', description: 'Friendly local service in Dibiyapur' },
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#C5A45B]/40 text-xs font-bold text-[#123B2A] tracking-wider uppercase mb-3 shadow-2xs">
              🏪 About Our Store
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#123B2A] mb-3 leading-tight">
              Welcome to Apna Mart Dibiyapur
            </h2>
            <p className="font-hindi text-base sm:text-lg text-[#123B2A] font-semibold mb-3">
              &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
            </p>
            <p className="text-[#252922] text-xs sm:text-sm md:text-base leading-relaxed mb-3">
              Apna Mart Dibiyapur is your trusted local Home &amp; Lifestyle store, bringing
              together fine crockery, reliable plastic storage, everyday bags, household
              cleaning essentials, and gifts — everything you need under one roof.
            </p>
            <p className="text-[#575C52] text-xs sm:text-sm leading-relaxed mb-5">
              Located at Phaphund Road, Durga Nagar, Pizza Point in Dibiyapur, we take pride
              in serving our community with reliable products and friendly personal service.
            </p>

            {/* Visit Store CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#123B2A] hover:bg-[#0B271C] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors border border-[#C5A45B]"
            >
              <span>📍 Visit Us in Dibiyapur</span>
              <span>→</span>
            </a>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-4 border border-[#C5A45B]/30 shadow-2xs hover:border-[#123B2A] hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF6ED] border border-[#C5A45B]/25 flex items-center justify-center text-xl mb-2.5">
                  <span>{item.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#123B2A] mb-1">
                  {item.label}
                </h3>
                <p className="text-[#575C52] text-[11px] sm:text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
