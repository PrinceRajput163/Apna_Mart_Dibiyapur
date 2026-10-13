import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * StoreIntro — "About Us" section introducing Apna Mart Dibiyapur.
 * Highlights store values on the warm cream aesthetic.
 */
export default function StoreIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const highlights = [
    { icon: '🏠', label: 'Home & Lifestyle', description: 'Curated selection tailored for modern families' },
    { icon: '✅', label: 'Quality Assured', description: 'Hand-selected items from trusted manufacturers' },
    { icon: '💰', label: 'Fair In-Store Pricing', description: 'Honest prices without artificial markups' },
    { icon: '🤝', label: 'Personal Assistance', description: 'Friendly local service in Dibiyapur' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-100 text-xs font-semibold text-burgundy-800 tracking-wider uppercase mb-3">
              🏪 About Our Store
            </span>
            <h2 className="serif-title font-bold text-2xl sm:text-3xl md:text-4xl text-burgundy-950 mb-4 leading-tight">
              Welcome to Apna Mart Dibiyapur
            </h2>
            <p className="font-hindi text-base sm:text-lg text-orange-600 font-semibold mb-4">
              &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
            </p>
            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-4">
              Apna Mart Dibiyapur is your trusted local Home & Lifestyle store, bringing
              together fine crockery, reliable plastic storage, everyday bags, household
              cleaning essentials, and gifts — everything you need under one roof.
            </p>
            <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed mb-6">
              Located at Phaphund Road, Durga Nagar, Pizza Point in Dibiyapur, we take pride
              in serving our community with reliable products and friendly personal service.
            </p>

            {/* Visit Store CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy-800 hover:bg-burgundy-900 text-cream-50 font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>📍 Visit Us in Dibiyapur</span>
              <span>→</span>
            </a>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                className="bg-white rounded-2xl border border-cream-200 p-4 sm:p-5 subtle-shadow hover:border-burgundy-800/30 transition-all duration-300 group"
              >
                <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </span>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-charcoal-900 mb-1 group-hover:text-burgundy-900 transition-colors">
                  {item.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-charcoal-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

