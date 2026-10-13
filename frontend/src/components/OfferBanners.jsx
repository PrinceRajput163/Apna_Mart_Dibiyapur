import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * OfferBanners — Premium Seasonal & Special Value Cards (DEC-016).
 * Left Card: Festive Home Collection with Warm Ivory & Gold accents and authentic gift hamper photography.
 * Right Card: Deep Forest Green Special Value banner with genuine pantry storage photography.
 */
export default function OfferBanners() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  return (
    <section ref={sectionRef} className="py-2.5 sm:py-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle gold divider */}
      <div className="section-gold-divider mb-4 sm:mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {/* Card 1: Festive Collection (Warm Ivory with Champagne Gold) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="relative bg-gradient-to-r from-[#FAF6ED] via-white to-[#F5EEDB] rounded-2xl p-4 sm:p-5 border border-[#C5A45B]/40 shadow-2xs flex items-center justify-between overflow-hidden hover:shadow-md transition-shadow group"
        >
          <div className="max-w-[62%] sm:max-w-[65%] z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8752E] block mb-1">
              FESTIVE &amp; HOME DECOR
            </span>
            <h3 className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-[#123B2A] leading-tight mb-1">
              Diwali &amp; Special Celebrations
            </h3>
            <p className="font-hindi text-xs text-[#575C52] mb-3 leading-snug">
              घर को सजाएं और भी खास — Exclusive In-Store Range
            </p>
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors group/link"
            >
              <span>Explore Collection</span>
              <span className="transition-transform group-hover/link:translate-x-1">➔</span>
            </a>
          </div>

          {/* Right Festive Photography Image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#C5A45B]/40 shadow-xs flex-shrink-0 bg-[#FAF6ED]">
            <img
              src="/assets/categories/gifts.jpg"
              alt="Festive Gifting and Decor"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Card 2: Deep Forest Green Special Value Banner */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="relative bg-[#123B2A] text-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-[#C5A45B]/40 flex items-center justify-between overflow-hidden hover:shadow-md transition-shadow group"
        >
          <div className="max-w-[62%] sm:max-w-[65%] z-10">
            <span className="text-[10px] text-[#FAF6ED]/80 font-bold uppercase tracking-wider block mb-0.5">
              Curated For Dibiyapur
            </span>
            <div className="font-heading font-black text-xl sm:text-2xl text-[#C5A45B] leading-tight mb-1">
              Everyday Value
            </div>
            <p className="text-xs text-[#FAF6ED]/90 font-medium leading-snug mb-3">
              Premium crockery, airtight storage, and bags at direct store prices.
            </p>
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A45B] hover:text-white transition-colors group/link"
            >
              <span>View Special Deals</span>
              <span className="transition-transform group-hover/link:translate-x-1">➔</span>
            </a>
          </div>

          {/* Right Real Storage Photography Preview */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#C5A45B]/40 shadow-xs flex-shrink-0 bg-white/10">
            <img
              src="/assets/categories/storage.jpg"
              alt="Everyday Value Storage Organizers"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
