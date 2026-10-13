import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * Categories — Blinkit UI 2x4 Category Grid.
 * Displays the 8 categories from the approved Blinkit reference:
 * Crockery, Storage, Bags, Gifts, Cleaning, Home Essentials, Kitchen, All Categories.
 */
export default function Categories() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  const categories = [
    {
      id: 'crockery',
      title: 'Crockery',
      fullTitle: 'Crockery',
      icon: '🍽️',
      bgColor: 'bg-[#F9F7F2]',
    },
    {
      id: 'storage',
      title: 'Storage',
      fullTitle: 'Plastic & Storage',
      icon: '📦',
      bgColor: 'bg-[#F0F8F4]',
    },
    {
      id: 'bags',
      title: 'Bags',
      fullTitle: 'Bags & Accessories',
      icon: '👜',
      bgColor: 'bg-[#FAF3F0]',
    },
    {
      id: 'gifts',
      title: 'Gifts',
      fullTitle: 'Gift Items',
      icon: '🎁',
      bgColor: 'bg-[#FEF5F7]',
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      fullTitle: 'Cleaning & Home',
      icon: '🧹',
      bgColor: 'bg-[#F0F6FA]',
    },
    {
      id: 'home-essentials',
      title: 'Home Essentials',
      fullTitle: 'Backpacks & More',
      icon: '🎒',
      bgColor: 'bg-[#F4F2F8]',
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      fullTitle: 'Kitchen Essentials',
      icon: '🍳',
      bgColor: 'bg-[#FEF7EB]',
    },
    {
      id: 'all-categories',
      title: 'All Categories',
      fullTitle: 'All Categories',
      icon: '⊞',
      isSpecial: true,
      bgColor: 'bg-[#EBF7EE]',
    },
  ];

  return (
    <section id="categories" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal-900 tracking-tight">
          Shop by category
        </h2>
        <a
          href="#featured"
          className="text-xs font-bold text-[#0C831F] hover:text-[#086918] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* 2 Rows of 4 Grid on Mobile / 8 Columns on Desktop */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3.5">
        {categories.map((cat, index) => (
          <motion.a
            key={cat.id}
            href="#featured"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Rounded Card Visual Container */}
            <div
              className={`w-full aspect-square rounded-2xl ${cat.bgColor} border border-gray-100 flex items-center justify-center p-2 group-hover:shadow-md group-hover:scale-102 transition-all duration-200 relative overflow-hidden`}
            >
              {cat.isSpecial ? (
                <div className="w-8 h-8 rounded-lg border-2 border-[#0C831F] flex items-center justify-center text-[#0C831F] font-bold text-lg">
                  ⊞
                </div>
              ) : (
                <span className="text-3xl sm:text-4xl drop-shadow-2xs group-hover:scale-110 transition-transform duration-200" role="img" aria-label={cat.title}>
                  {cat.icon}
                </span>
              )}
            </div>

            {/* Category Label */}
            <span className="text-[11px] sm:text-xs font-bold text-charcoal-800 text-center mt-1.5 line-clamp-1 leading-tight group-hover:text-[#0C831F] transition-colors">
              {cat.title}
            </span>

            {/* Render fullTitle only if different from title to avoid duplicate text */}
            {cat.fullTitle !== cat.title && (
              <span className="hidden">{cat.fullTitle}</span>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
