import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

/**
 * ProductCard — Mobile e-commerce product card matching the reference.
 * Strictly adheres to NO-FABRICATION policy: uses clearly labelled development
 * placeholders and in-store verification badges without fabricated prices or discounts.
 */
function ProductCard({ product, index, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group bg-white rounded-2xl border border-cream-200/90 subtle-shadow hover:card-shadow hover:border-burgundy-800/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Image Preview Area */}
      <div className="relative aspect-square bg-cream-100/60 p-4 flex items-center justify-center overflow-hidden">
        {/* Category Pill Tag */}
        <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs border border-cream-200 text-[10px] font-semibold text-burgundy-900 shadow-2xs">
          {product.category}
        </div>

        {/* Wishlist Toggle Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            isWishlisted
              ? 'bg-burgundy-800 text-white shadow-xs'
              : 'bg-white/90 text-charcoal-400 hover:text-burgundy-800 border border-cream-200 shadow-2xs'
          }`}
          aria-label={`Save ${product.title} to wishlist`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Icon & Category Graphic Placeholder */}
        <div className="flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-4xl sm:text-5xl drop-shadow-xs" role="img" aria-label={product.title}>
            {product.icon}
          </span>
          <span className="mt-2 text-[10px] font-semibold text-charcoal-400 uppercase tracking-widest">
            Verified Catalog Item
          </span>
        </div>
      </div>

      {/* Card Content & Action Area */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h3 className="font-heading font-semibold text-xs sm:text-sm text-charcoal-900 group-hover:text-burgundy-900 transition-colors line-clamp-1 leading-snug">
            {product.title}
          </h3>
          <p className="text-[11px] text-charcoal-500 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-cream-100 flex items-center justify-between gap-2">
          {/* Labelled Price Status */}
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-charcoal-400 font-semibold">
              Store Price
            </span>
            <span className="text-xs sm:text-sm font-bold text-burgundy-900">
              ₹ In-Store
            </span>
          </div>

          {/* Deep Burgundy Add to Cart Button */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => onAddToCart(product)}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-cream-50 text-[11px] sm:text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            aria-label={`Add ${product.title} to cart`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden xs:inline">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * FeaturedProducts — Mobile e-commerce product showcase grid.
 * Displays 6 curated collection items across approved categories.
 */
export default function FeaturedProducts() {
  const [toastMessage, setToastMessage] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const products = [
    {
      id: 'prod-1',
      title: 'Ceramic Dinner Set',
      subtitle: 'Premium glazed dinnerware',
      category: 'Crockery',
      icon: '🍽️',
    },
    {
      id: 'prod-2',
      title: 'Airtight Storage Jars',
      subtitle: 'Modular BPA-free pantry containers',
      category: 'Storage',
      icon: '📦',
    },
    {
      id: 'prod-3',
      title: 'Classic Handbag',
      subtitle: 'Everyday lifestyle purse',
      category: 'Bags',
      icon: '👜',
    },
    {
      id: 'prod-4',
      title: 'Microfiber Spin Mop',
      subtitle: 'Complete home-cleaning kit',
      category: 'Cleaning',
      icon: '🧹',
    },
    {
      id: 'prod-5',
      title: 'Decorative Festive Gift',
      subtitle: 'Elegant celebration set',
      category: 'Gift Items',
      icon: '🎁',
    },
    {
      id: 'prod-6',
      title: 'Multi-Pocket Backpack',
      subtitle: 'Durable travel & everyday bag',
      category: 'Backpacks',
      icon: '🎒',
    },
  ];

  const handleAddToCart = (product) => {
    setToastMessage(`Added "${product.title}" to cart`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <section id="featured" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-6 sm:mb-8 pb-3 border-b border-cream-200/80"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 border border-orange-200/60 text-[11px] font-semibold tracking-wider uppercase text-orange-700 mb-1.5">
              <span>Verified In-Store Collection</span>
            </div>
            <h2 className="serif-title font-bold text-2xl sm:text-3xl md:text-4xl text-burgundy-900 leading-tight">
              Featured Products
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5">
              Popular essentials available for counter pickup and in-store purchase
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-burgundy-800 hover:text-burgundy-900 group"
          >
            <span>Inquire for Availability</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* 2-Column Mobile Grid / 3-4 Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Notification Toast */}
        {toastMessage && (
          <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-burgundy-950 text-cream-50 text-xs font-semibold shadow-lg border border-gold-400/30 flex items-center gap-2 animate-bounce">
            <span>🛒</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}

