import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

/**
 * NewArrivals — Premium New Arrivals Section (DEC-016).
 * Displays "New Arrivals", "Fresh arrivals curated for a comfortable home",
 * and 4 product cards with high-resolution photography and smooth toasts.
 */
export default function NewArrivals() {
  const [toastMessage, setToastMessage] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  const items = [
    {
      id: 'new-1',
      title: 'Premium Dinner Set',
      subtitle: 'A fresh table refresh',
      price: 599,
      mrp: 799,
      discount: '20% OFF',
      image: '/assets/categories/crockery.jpg',
    },
    {
      id: 'new-2',
      title: 'Stylish Handbag',
      subtitle: 'Your everyday companion',
      price: 499,
      mrp: 600,
      discount: '17% OFF',
      image: '/assets/categories/bags.jpg',
    },
    {
      id: 'new-3',
      title: 'Modular Storage Jars',
      subtitle: 'Airtight pantry organizers',
      price: 299,
      mrp: 399,
      discount: '25% OFF',
      image: '/assets/categories/storage.jpg',
    },
    {
      id: 'new-4',
      title: 'Tri-Ply Stainless Pan',
      subtitle: 'Even-heat kitchen cookware',
      price: 699,
      mrp: 899,
      discount: '22% OFF',
      image: '/assets/categories/kitchen.jpg',
    },
  ];

  const handleAdd = (item) => {
    setToastMessage(`Added "${item.title}" to cart`);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <section id="new-arrivals" ref={sectionRef} className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle gold divider */}
      <div className="section-gold-divider mb-4 sm:mb-5" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex items-end justify-between mb-3 sm:mb-4"
      >
        <div>
          <span className="text-[10px] sm:text-xs font-bold text-[#E8752E] uppercase tracking-wider block mb-1">
            Just In Stock
          </span>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
            New Arrivals
          </h2>
          <p className="text-xs text-[#575C52] mt-0.5">
            Fresh arrivals curated for everyday lifestyle at our Dibiyapur counter
          </p>
        </div>

        <a
          href="#deals"
          className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
        >
          View all →
        </a>
      </motion.div>

      {/* Product Cards Grid: 2 cols on mobile, 4 cols on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white rounded-2xl border border-[#C5A45B]/30 hover:border-[#123B2A] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-square bg-[#FAF6ED] overflow-hidden">
              {item.discount && (
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#123B2A] text-[#FAF6ED] text-[10px] font-extrabold tracking-wide border border-[#C5A45B]/30 shadow-2xs">
                  {item.discount}
                </span>
              )}
              <img
                src={item.image}
                alt={item.title}
                role="img"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Product Details */}
            <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2">
              <div>
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#252922] line-clamp-1 leading-snug group-hover:text-[#123B2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[#575C52] line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Price & Add Button */}
              <div className="flex items-center justify-between pt-1 border-t border-[#FAF6ED]">
                <div className="flex flex-col leading-tight">
                  <span className="text-sm sm:text-base font-black text-[#123B2A]">
                    ₹{item.price}
                  </span>
                  {item.mrp && (
                    <span className="text-[10px] text-gray-400 line-through">
                      ₹{item.mrp}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  className="blinkit-btn-add px-4 py-1.5 rounded-lg text-xs tracking-wider uppercase cursor-pointer active:scale-95 shadow-2xs font-bold"
                  aria-label={`Add ${item.title} to cart`}
                >
                  ADD
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Smooth Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#123B2A] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg border border-[#C5A45B] flex items-center gap-2 pointer-events-none"
          >
            <span>✨</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
