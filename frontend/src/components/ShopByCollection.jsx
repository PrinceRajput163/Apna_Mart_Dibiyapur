import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * ShopByCollection — Premium Lifestyle Collection Cards (DEC-016).
 * Features 4 curated collections with real photography:
 * Kitchen Essentials, Storage Solutions, Bags & Accessories, Crockery & Dining.
 */
export default function ShopByCollection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  const collections = [
    {
      id: 'kitchen-essentials',
      title: 'Kitchen Essentials',
      desc: 'Cookware & Tools',
      image: '/assets/categories/kitchen.jpg',
    },
    {
      id: 'storage-solutions',
      title: 'Storage Solutions',
      desc: 'Modular Pantry Jars',
      image: '/assets/categories/storage.jpg',
    },
    {
      id: 'bags-accessories',
      title: 'Bags & Accessories',
      desc: 'Handbags & Backpacks',
      image: '/assets/categories/bags.jpg',
    },
    {
      id: 'crockery-dining',
      title: 'Crockery & Dining',
      desc: 'Dinner Sets & Bowls',
      image: '/assets/categories/crockery.jpg',
    },
  ];

  return (
    <section id="collections" ref={sectionRef} className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle gold divider */}
      <div className="section-gold-divider mb-4 sm:mb-5" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-3 sm:mb-4"
      >
        <div>
          <span className="text-[10px] sm:text-xs font-bold text-[#E8752E] uppercase tracking-wider block mb-1">
            Curated Living
          </span>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
            Shop by Collection
          </h2>
          <p className="text-[11px] text-[#575C52] hidden sm:block">
            Curated categories designed for contemporary Indian homes in Dibiyapur
          </p>
        </div>
        <a
          href="#categories"
          className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
        >
          View all →
        </a>
      </motion.div>

      {/* 2x2 Grid on Mobile / 4 Columns on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {collections.map((col, index) => (
          <motion.a
            key={col.id}
            href="#categories"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white border border-[#C5A45B]/30 hover:border-[#123B2A] rounded-2xl p-2.5 sm:p-3 shadow-2xs hover:shadow-md flex flex-col justify-between group cursor-pointer overflow-hidden relative transition-all"
          >
            {/* Real Photography Image Container */}
            <div className="w-full aspect-4/3 sm:aspect-square rounded-xl overflow-hidden bg-[#FAF6ED] relative mb-2.5">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom Title & Diagonal Arrow ↗ */}
            <div className="flex items-center justify-between pt-1 border-t border-[#FAF6ED]">
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#252922] group-hover:text-[#123B2A] leading-tight transition-colors">
                  {col.title}
                </h3>
                <p className="text-[10px] text-[#575C52]">
                  {col.desc}
                </p>
              </div>
              <span className="text-sm font-bold text-[#123B2A] group-hover:text-[#E8752E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
