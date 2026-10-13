import { motion } from 'motion/react';

/**
 * OfferBanners — Festival & Special Campaign Banners matching Blinkit UI reference.
 * Left Card: Diwali Special Collection (A Little Extra Joy)
 * Right Card: Up to 50% OFF on selected home & lifestyle products
 */
export default function OfferBanners() {
  return (
    <section className="py-2.5 sm:py-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {/* Card 1: Diwali Special Collection (Warm Yellow/Cream) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#FEF7D9] rounded-2xl p-4 sm:p-5 border border-yellow-200/80 shadow-2xs flex items-center justify-between overflow-hidden"
        >
          <div className="max-w-[65%] z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B45309] block mb-1">
              A LITTLE EXTRA JOY
            </span>
            <h3 className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-charcoal-900 leading-tight mb-1">
              Diwali Special Collection
            </h3>
            <p className="font-hindi text-xs text-gray-700 mb-3">
              Ghar Ko Sajayein Aur Bhi Khaas
            </p>
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C831F] hover:text-[#086918] transition-colors"
            >
              <span>Explore offers</span>
              <span>➔</span>
            </a>
          </div>

          {/* Right Festive Icon Graphic */}
          <div className="text-5xl sm:text-6xl select-none drop-shadow-sm flex items-center justify-center">
            🪔🎁
          </div>
        </motion.div>

        {/* Card 2: Deep Green Up to 50% OFF Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#0F4725] text-white rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between overflow-hidden"
        >
          <div>
            <span className="text-xs text-green-200 font-semibold uppercase tracking-wider block">
              Up to
            </span>
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFD200] leading-none mb-1">
              50% OFF
            </div>
            <p className="text-xs text-green-100 font-medium leading-snug max-w-[85%]">
              On selected home &amp; lifestyle products
            </p>
          </div>

          <div className="mt-3">
            <a
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD200] hover:text-yellow-300 transition-colors"
            >
              <span>Shop now</span>
              <span>➔</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
