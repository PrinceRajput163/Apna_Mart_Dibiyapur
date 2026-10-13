import { useState } from 'react';
import { motion } from 'motion/react';

/**
 * NewArrivals — Blinkit UI New Arrivals section matching screenshot.
 * Displays "New Arrivals", "Fresh products for a better home", and 2 product cards.
 */
export default function NewArrivals() {
  const [toastMessage, setToastMessage] = useState('');

  const items = [
    {
      id: 'new-1',
      title: 'Premium Dinner Set',
      subtitle: 'A fresh table refresh',
      price: 599,
      mrp: 799,
      discount: '20% OFF',
      icon: '🍽️',
    },
    {
      id: 'new-2',
      title: 'Stylish Handbag',
      subtitle: 'Your everyday companion',
      price: 499,
      mrp: 600,
      discount: '17% OFF',
      icon: '👜',
    },
  ];

  const handleAdd = (item) => {
    setToastMessage(`Added "${item.title}" to cart`);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <section id="new-arrivals" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-3 sm:mb-4">
        <div>
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal-900 tracking-tight">
            New Arrivals
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Fresh products for a better home
          </p>
        </div>

        <a
          href="#deals"
          className="text-xs font-bold text-[#0C831F] hover:text-[#086918] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* 2-Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-square bg-[#FBFBFC] p-3 flex items-center justify-center overflow-hidden">
              <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded-md bg-[#DEF3E3] text-[#0C831F] text-[10px] font-extrabold uppercase tracking-wide">
                {item.discount}
              </div>
              <span className="text-4xl sm:text-5xl drop-shadow-xs">
                {item.icon}
              </span>
            </div>

            {/* Details & ADD button */}
            <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1 gap-2">
              <div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-charcoal-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-1.5 flex items-center justify-between gap-1.5 border-t border-gray-50">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs sm:text-sm font-extrabold text-charcoal-900">
                    ₹{item.price}
                  </span>
                  <span className="text-[10px] text-gray-400 line-through">
                    ₹{item.mrp}
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleAdd(item)}
                  className="px-3 sm:px-4 py-1 rounded-lg border border-[#0C831F] bg-white hover:bg-[#0C831F] text-[#0C831F] hover:text-white font-extrabold text-[11px] sm:text-xs tracking-wider transition-colors cursor-pointer shadow-2xs"
                  aria-label={`Add ${item.title} to cart`}
                >
                  ADD
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
          <span className="text-[#0C831F]">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
