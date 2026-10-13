import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * Categories — Premium Category Grid for APNA MART DIBIYAPUR (DEC-016).
 * Displays 8 category shortcuts in a 2x4 responsive mobile / 8-col desktop grid,
 * with Warm Ivory / White containers, Champagne Gold borders, and Forest Green hover accents.
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
      bgColor: 'bg-white',
    },
    {
      id: 'storage',
      title: 'Storage',
      fullTitle: 'Plastic & Storage',
      icon: '📦',
      bgColor: 'bg-white',
    },
    {
      id: 'bags',
      title: 'Bags',
      fullTitle: 'Bags & Accessories',
      icon: '👜',
      bgColor: 'bg-white',
    },
    {
      id: 'gifts',
      title: 'Gifts',
      fullTitle: 'Gift Items',
      icon: '🎁',
      bgColor: 'bg-white',
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      fullTitle: 'Cleaning & Home',
      icon: '🧹',
      bgColor: 'bg-white',
    },
    {
      id: 'home-essentials',
      title: 'Home Essentials',
      fullTitle: 'Backpacks & More',
      icon: '🎒',
      bgColor: 'bg-white',
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      fullTitle: 'Kitchen Essentials',
      icon: '🍳',
      bgColor: 'bg-white',
    },
    {
      id: 'all-categories',
      title: 'All Categories',
      fullTitle: 'All Categories',
      icon: '⊞',
      isSpecial: true,
      bgColor: 'bg-[#FAF6ED]',
    },
  ];

  return (
    <section id="categories" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
            Shop by Category
          </h2>
          <p className="text-[11px] text-[#575C52] hidden sm:block">
            Explore everyday lifestyle essentials available at our Dibiyapur store
          </p>
        </div>
        <a
          href="#featured"
          className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* 2 Rows of 4 Grid on Mobile / 8 Columns on Desktop */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5 sm:gap-3.5">
        {categories.map((cat, index) => (
          <motion.a
            key={cat.id}
            href="#featured"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Rounded Card Visual Container with Champagne Gold Accent */}
            <div
              className={`w-full aspect-square rounded-2xl ${cat.bgColor} border border-[#C5A45B]/30 flex items-center justify-center p-2 group-hover:border-[#123B2A] group-hover:shadow-sm group-hover:scale-102 transition-all duration-200 relative overflow-hidden`}
            >
              {cat.isSpecial ? (
                <div className="w-8 h-8 rounded-lg border-2 border-[#123B2A] flex items-center justify-center text-[#123B2A] font-bold text-lg">
                  ⊞
                </div>
              ) : (
                <span className="text-3xl sm:text-4xl drop-shadow-2xs group-hover:scale-110 transition-transform duration-200" role="img" aria-label={cat.title}>
                  {cat.icon}
                </span>
              )}
            </div>

            {/* Category Label */}
            <span className="text-[11px] sm:text-xs font-bold text-[#252922] text-center mt-1.5 line-clamp-1 leading-tight group-hover:text-[#123B2A] transition-colors">
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
