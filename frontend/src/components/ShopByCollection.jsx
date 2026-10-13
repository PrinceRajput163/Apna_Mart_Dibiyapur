import { motion } from 'motion/react';

/**
 * ShopByCollection — Premium Lifestyle Collection Cards (DEC-016).
 * Features 4 curated collections: Kitchen Essentials, Storage Solutions, Bags & Accessories, Cleaning Essentials.
 */
export default function ShopByCollection() {
  const collections = [
    {
      id: 'kitchen-essentials',
      title: 'Kitchen Essentials',
      icon: '🍽️',
      bgColor: 'bg-white',
      borderColor: 'border-[#C5A45B]/30',
    },
    {
      id: 'storage-solutions',
      title: 'Storage Solutions',
      icon: '📦',
      bgColor: 'bg-white',
      borderColor: 'border-[#C5A45B]/30',
    },
    {
      id: 'bags-accessories',
      title: 'Bags & Accessories',
      icon: '👜',
      bgColor: 'bg-white',
      borderColor: 'border-[#C5A45B]/30',
    },
    {
      id: 'cleaning-essentials',
      title: 'Cleaning Essentials',
      icon: '🧹',
      bgColor: 'bg-white',
      borderColor: 'border-[#C5A45B]/30',
    },
  ];

  return (
    <section id="collections" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
            Shop by Collection
          </h2>
          <p className="text-[11px] text-[#575C52] hidden sm:block">
            Curated categories designed for contemporary Indian living
          </p>
        </div>
        <a
          href="#deals"
          className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
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
            whileHover={{ y: -3 }}
            transition={{ duration: 0.15 }}
            className={`${col.bgColor} border ${col.borderColor} hover:border-[#123B2A] rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-md flex flex-col justify-between aspect-4/3 sm:aspect-square group cursor-pointer overflow-hidden relative`}
          >
            {/* Visual Icon / Illustration */}
            <div className="flex items-center justify-center flex-1 my-2">
              <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-200 drop-shadow-2xs">
                {col.icon}
              </span>
            </div>

            {/* Bottom Title & Diagonal Arrow ↗ */}
            <div className="flex items-center justify-between pt-2 border-t border-[#FAF6ED]">
              <span className="font-bold text-xs sm:text-sm text-[#252922] group-hover:text-[#123B2A] leading-tight transition-colors">
                {col.title}
              </span>
              <span className="text-sm font-bold text-[#123B2A] group-hover:text-[#E8752E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
