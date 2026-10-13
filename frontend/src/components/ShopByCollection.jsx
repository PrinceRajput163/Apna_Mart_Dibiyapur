import { motion } from 'motion/react';

/**
 * ShopByCollection — Blinkit UI 4 Pastel Collection Cards.
 * Features: Kitchen Essentials, Storage Solutions, Bags & Accessories, Cleaning Essentials.
 */
export default function ShopByCollection() {
  const collections = [
    {
      id: 'kitchen-essentials',
      title: 'Kitchen Essentials',
      icon: '🍽️',
      bgColor: 'bg-[#FFF9E6]',
      borderColor: 'border-amber-100',
    },
    {
      id: 'storage-solutions',
      title: 'Storage Solutions',
      icon: '📦',
      bgColor: 'bg-[#E6F7F2]',
      borderColor: 'border-emerald-100',
    },
    {
      id: 'bags-accessories',
      title: 'Bags & Accessories',
      icon: '👜',
      bgColor: 'bg-[#FDF0F2]',
      borderColor: 'border-rose-100',
    },
    {
      id: 'cleaning-essentials',
      title: 'Cleaning Essentials',
      icon: '🧹',
      bgColor: 'bg-[#EDF7ED]',
      borderColor: 'border-green-100',
    },
  ];

  return (
    <section id="collections" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal-900 tracking-tight">
          Shop by Collection
        </h2>
        <a
          href="#deals"
          className="text-xs font-bold text-[#0C831F] hover:text-[#086918] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* 2x2 Grid on Mobile / 4 Columns on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {collections.map((col) => (
          <motion.a
            key={col.id}
            href="#categories"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className={`${col.bgColor} border ${col.borderColor} rounded-2xl p-3 sm:p-4 shadow-2xs flex flex-col justify-between aspect-4/3 sm:aspect-square group cursor-pointer overflow-hidden relative`}
          >
            {/* Visual Icon / Illustration */}
            <div className="flex items-center justify-center flex-1 my-2">
              <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-200">
                {col.icon}
              </span>
            </div>

            {/* Bottom Title & Diagonal Arrow ↗ */}
            <div className="flex items-center justify-between pt-1 border-t border-black/5">
              <span className="font-bold text-xs sm:text-sm text-charcoal-900 leading-tight">
                {col.title}
              </span>
              <span className="text-xs font-bold text-[#0C831F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
