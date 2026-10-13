import { useState } from 'react';

/**
 * NewArrivals — Premium New Arrivals Section (DEC-016).
 * Displays "New Arrivals", "Fresh products for a better home", and curated product cards.
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
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
            New Arrivals
          </h2>
          <p className="text-xs text-[#575C52] mt-0.5">
            Fresh arrivals curated for a comfortable home
          </p>
        </div>

        <a
          href="#deals"
          className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-[#C5A45B]/30 hover:border-[#123B2A] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-square bg-[#FAF6ED]/70 p-3 flex items-center justify-center overflow-hidden">
              <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#123B2A] text-[#FAF6ED] text-[10px] font-extrabold uppercase tracking-wide border border-[#C5A45B]/30 shadow-2xs">
                {item.discount}
              </div>
              <span className="text-5xl sm:text-6xl drop-shadow-xs group-hover:scale-110 transition-transform duration-300 select-none">
                {item.icon}
              </span>
            </div>

            {/* Details & ADD button */}
            <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2">
              <div>
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#252922] group-hover:text-[#123B2A] line-clamp-1 leading-snug transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-[#575C52] line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#FAF6ED]">
                <div className="flex flex-col leading-tight">
                  <span className="text-sm sm:text-base font-black text-[#123B2A]">
                    ₹{item.price}
                  </span>
                  <span className="text-[10px] text-gray-400 line-through">
                    ₹{item.mrp}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  className="blinkit-btn-add px-4 sm:px-5 py-1.5 rounded-lg text-xs tracking-wider uppercase cursor-pointer active:scale-95 shadow-2xs"
                  aria-label={`Add ${item.title} to cart`}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#123B2A] text-white px-4 py-2.5 rounded-full shadow-lg border border-[#C5A45B] text-xs font-bold flex items-center gap-2 animate-bounce"
        >
          <span className="w-2 h-2 rounded-full bg-[#E8752E]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
