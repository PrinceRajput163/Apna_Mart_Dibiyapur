import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * Categories — Circular Category Shortcuts matching the approved mobile reference.
 * Renders all 7 owner-approved categories with horizontal touch scrolling on mobile
 * and responsive flex layout on desktop.
 */
export default function Categories() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // 7 Approved Product Categories
  const categories = [
    {
      id: 'crockery',
      title: 'Crockery',
      subtitle: 'Dinnerware & Tea Sets',
      icon: '🍽️',
      colorBg: '#FAF3E6',
      colorRing: '#D4A853',
    },
    {
      id: 'plastic-storage',
      title: 'Plastic & Storage',
      subtitle: 'Containers & Bins',
      icon: '📦',
      colorBg: '#EAF4EE',
      colorRing: '#2E7D4E',
    },
    {
      id: 'bags-accessories',
      title: 'Bags & Accessories',
      subtitle: 'Handbags & Purses',
      icon: '👜',
      colorBg: '#FDEDE6',
      colorRing: '#E8602D',
    },
    {
      id: 'cleaning-home',
      title: 'Cleaning & Home',
      subtitle: 'Mops & Essentials',
      icon: '🧹',
      colorBg: '#EDF5FA',
      colorRing: '#3D82A6',
    },
    {
      id: 'gift-items',
      title: 'Gift Items',
      subtitle: 'Festive & Decor',
      icon: '🎁',
      colorBg: '#FBF0F4',
      colorRing: '#B83253',
    },
    {
      id: 'backpacks-more',
      title: 'Backpacks & More',
      subtitle: 'Travel & School',
      icon: '🎒',
      colorBg: '#F2EDFA',
      colorRing: '#6B46C1',
    },
    {
      id: 'kitchen-essentials',
      title: 'Kitchen Essentials',
      subtitle: 'Utensils & Cookware',
      icon: '🍳',
      colorBg: '#FEF6E9',
      colorRing: '#C97A1E',
    },
  ];

  return (
    <section id="categories" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>

        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 pb-3 border-b border-cream-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-burgundy-50 border border-burgundy-100 text-[11px] font-semibold tracking-wider uppercase text-burgundy-800 mb-1.5">
              <span>Explore Variety</span>
            </div>
            <h2 className="serif-title font-bold text-2xl sm:text-3xl md:text-4xl text-burgundy-900 leading-tight">
              Shop by Category
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5">
              Quality essentials for every corner of your home
            </p>
          </div>

          <a
            href="#featured"
            className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-burgundy-800 hover:text-burgundy-900 group"
          >
            <span>View All Products</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Circular Categories: Touch-scrollable row on mobile, centered flex on desktop */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2 px-1 -mx-4 sm:mx-0 px-4 sm:px-0 scroll-smooth">
            {categories.map((category, index) => (
              <motion.a
                key={category.id}
                href="#featured"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.96 }}
                className="flex flex-col items-center flex-shrink-0 group focus:outline-none cursor-pointer w-20 sm:w-24 md:w-28 text-center"
              >
                {/* Circle Outer Frame */}
                <div
                  className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-1 bg-white border-2 border-cream-200 group-hover:border-burgundy-800 subtle-shadow group-hover:shadow-md transition-all duration-300 flex items-center justify-center relative"
                >
                  {/* Inner Pill with subtle category hue */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-3xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: category.colorBg }}
                  >
                    <span role="img" aria-label={category.title}>
                      {category.icon}
                    </span>
                  </div>

                  {/* Micro hover indicator dot */}
                  <span
                    className="absolute -bottom-0.5 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: category.colorRing }}
                  />
                </div>

                {/* Category Label */}
                <span className="mt-2.5 font-medium text-xs sm:text-sm text-charcoal-800 group-hover:text-burgundy-800 line-clamp-2 leading-tight transition-colors">
                  {category.title}
                </span>

                {/* Micro Subtitle (visible on larger screens) */}
                <span className="hidden md:block text-[10px] text-charcoal-500 mt-0.5 line-clamp-1">
                  {category.subtitle}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-4 text-center sm:hidden">
          <a
            href="#featured"
            className="inline-flex items-center gap-1 text-xs font-semibold text-burgundy-800 hover:text-burgundy-900"
          >
            <span>View All 7 Categories</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

