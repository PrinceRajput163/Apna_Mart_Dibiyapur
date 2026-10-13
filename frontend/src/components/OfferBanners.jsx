import { motion } from 'motion/react';

/**
 * OfferBanners — Premium Seasonal & Special Value Cards (DEC-016).
 * Left Card: Festive Home Collection with Warm Ivory & Gold accents.
 * Right Card: Deep Forest Green Special Value banner with Champagne Gold typography.
 */
export default function OfferBanners() {
  return (
    <section className="py-2.5 sm:py-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {/* Card 1: Festive Collection (Warm Ivory with Champagne Gold) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative bg-gradient-to-r from-[#FAF6ED] via-white to-[#F5EEDB] rounded-2xl p-4 sm:p-5 border border-[#C5A45B]/40 shadow-2xs flex items-center justify-between overflow-hidden"
        >
          <div className="max-w-[70%] z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8752E] block mb-1">
              FESTIVE &amp; HOME DECOR
            </span>
            <h3 className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-[#123B2A] leading-tight mb-1">
              Diwali &amp; Special Celebrations
            </h3>
            <p className="font-hindi text-xs text-[#575C52] mb-3">
              घर को सजाएं और भी खास — Exclusive In-Store Range
            </p>
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
            >
              <span>Explore Collection</span>
              <span>➔</span>
            </a>
          </div>

          {/* Right Festive Icon Graphic */}
          <div className="text-5xl sm:text-6xl select-none drop-shadow-sm flex items-center justify-center">
            🪔✨
          </div>
        </motion.div>

        {/* Card 2: Deep Forest Green Special Value Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#123B2A] text-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-[#C5A45B]/40 flex flex-col justify-between overflow-hidden"
        >
          <div>
            <span className="text-xs text-[#FAF6ED]/80 font-semibold uppercase tracking-wider block">
              Curated For Dibiyapur
            </span>
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#C5A45B] leading-tight mb-1">
              Everyday Value
            </div>
            <p className="text-xs text-[#FAF6ED]/90 font-medium leading-snug max-w-[85%]">
              Premium crockery, airtight storage, bags &amp; cleaning combos at direct store prices.
            </p>
          </div>

          <div className="mt-3">
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A45B] hover:text-white transition-colors"
            >
              <span>View Special Deals</span>
              <span>➔</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
