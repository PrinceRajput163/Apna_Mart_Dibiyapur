import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

/**
 * ProductCard — Blinkit UI Product Card.
 * Displays clean white container, image preview, discount pill, wishlist heart,
 * product title, category, formatted pricing, and green outline Blinkit "ADD" button.
 */
function ProductCard({ product, index, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-square bg-[#FBFBFC] p-3 flex items-center justify-center overflow-hidden">
        {/* Discount Pill Badge (Blinkit Style) */}
        {product.discount && (
          <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded-md bg-[#DEF3E3] text-[#0C831F] text-[10px] font-extrabold uppercase tracking-wide">
            {product.discount}
          </div>
        )}

        {/* Wishlist Heart Icon Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-2 right-2 z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            isWishlisted
              ? 'bg-[#0C831F] text-white'
              : 'bg-white/80 text-gray-400 hover:text-red-500 shadow-2xs'
          }`}
          aria-label={`Save ${product.title} to wishlist`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Product Visual Icon / Emoji */}
        <div className="flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-200">
          <span className="text-4xl sm:text-5xl drop-shadow-xs" role="img" aria-label={product.title}>
            {product.icon}
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between gap-2">
        <div>
          <h3 className="font-heading font-bold text-xs sm:text-sm text-charcoal-900 group-hover:text-[#0C831F] transition-colors line-clamp-1 leading-snug">
            {product.title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1 mt-0.5 capitalize">
            {product.category}
          </p>
        </div>

        {/* Price & Blinkit ADD Button Row */}
        <div className="pt-1.5 flex items-center justify-between gap-1.5 border-t border-gray-50">
          <div className="flex items-baseline gap-1">
            <span className="text-xs sm:text-sm font-extrabold text-charcoal-900">
              ₹{product.price}
            </span>
            {product.mrp && (
              <span className="text-[10px] text-gray-400 line-through">
                ₹{product.mrp}
              </span>
            )}
            <span className="hidden">₹ In-Store</span>
          </div>

          {/* Green Outline Blinkit ADD Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => onAddToCart(product)}
            className="px-3 sm:px-4 py-1 rounded-lg border border-[#0C831F] bg-white hover:bg-[#0C831F] text-[#0C831F] hover:text-white font-extrabold text-[11px] sm:text-xs tracking-wider transition-colors cursor-pointer shadow-2xs"
            aria-label={`Add ${product.title} to cart`}
          >
            ADD
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * FeaturedProducts / Today's Special Deals — Blinkit UI Section.
 * Matches "Today's Special Deals" from reference screenshot.
 */
export default function FeaturedProducts() {
  const [toastMessage, setToastMessage] = useState('');

  const products = [
    {
      id: 'deal-1',
      title: 'Premium Dinner Set',
      subtitle: 'Premium glazed dinnerware',
      category: 'Crockery',
      price: 599,
      mrp: 799,
      discount: '20% OFF',
      icon: '🍽️',
    },
    {
      id: 'deal-2',
      title: 'Storage Container Set',
      subtitle: 'Modular BPA-free pantry containers',
      category: 'Storage',
      price: 299,
      mrp: 399,
      discount: '25% OFF',
      icon: '📦',
    },
    {
      id: 'deal-3',
      title: 'Stylish Handbag',
      subtitle: 'Everyday lifestyle purse',
      category: 'Bags & accessories',
      price: 499,
      mrp: 600,
      discount: '17% OFF',
      icon: '👜',
    },
    {
      id: 'deal-4',
      title: 'Cleaning Combo Pack',
      subtitle: 'Complete home-cleaning kit',
      category: 'Cleaning essentials',
      price: 349,
      mrp: 420,
      discount: '17% OFF',
      icon: '🧹',
    },
    {
      id: 'deal-5',
      title: 'Ceramic Dinner Set',
      subtitle: 'Handcrafted ceramic serving plates',
      category: 'Crockery',
      price: 499,
      mrp: 650,
      discount: '23% OFF',
      icon: '☕',
    },
    {
      id: 'deal-6',
      title: 'Airtight Storage Jars',
      subtitle: 'Stackable transparent jars',
      category: 'Storage',
      price: 249,
      mrp: 320,
      discount: '22% OFF',
      icon: '🫙',
    },
  ];

  const handleAddToCart = (product) => {
    setToastMessage(`Added "${product.title}" to cart`);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <section id="featured" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div>

        {/* Section Header (Blinkit Style) */}
        <div className="flex items-end justify-between mb-3 sm:mb-4">
          <div>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal-900 tracking-tight">
              Today&apos;s Special Deals
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Big savings on everyday favourites
            </p>
          </div>

          <a
            href="#contact"
            className="text-xs font-bold text-[#0C831F] hover:text-[#086918] transition-colors"
          >
            View all →
          </a>
        </div>

        {/* 2-Column Mobile Grid / 3-Column Tablet / 6-Column Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
            <span className="text-[#0C831F]">✓</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
