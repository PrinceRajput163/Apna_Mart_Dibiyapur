import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

/**
 * ProductCard — Premium Product Card for APNA MART DIBIYAPUR (DEC-016).
 * Pure white card with Champagne Gold subtle border, genuine retail photography,
 * verified store pricing, discount badge, and Deep Forest Green ADD button.
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
      className="group bg-white rounded-2xl border border-[#C5A45B]/30 hover:border-[#123B2A] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
    >
      {/* Image Container with 1:1 Aspect Ratio and Subtle Gold Accent */}
      <div className="relative aspect-square bg-[#FAF6ED] overflow-hidden">
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#123B2A] text-[#FAF6ED] text-[10px] font-extrabold tracking-wide border border-[#C5A45B]/30 shadow-2xs">
            {product.discount}
          </span>
        )}

        {/* Wishlist Heart Toggle */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-400 hover:text-rose-600 flex items-center justify-center shadow-2xs cursor-pointer border border-[#C5A45B]/20 transition-colors"
          aria-label={`Wishlist ${product.title}`}
        >
          <svg
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'text-rose-600 fill-current' : 'fill-none'
            }`}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* High-Resolution Product Photography */}
        <img
          src={product.image}
          alt={product.title}
          role="img"
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Details & Action */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold text-[#E8752E] uppercase tracking-wider block mb-0.5">
            {product.category}
          </span>
          <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#252922] line-clamp-1 leading-snug group-hover:text-[#123B2A] transition-colors">
            {product.title}
          </h3>
          <p className="text-[10px] text-[#575C52] line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="flex items-center justify-between pt-1 border-t border-[#FAF6ED]">
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-black text-[#123B2A]">
              ₹{product.price}
            </span>
            {product.mrp && (
              <span className="text-[10px] text-gray-400 line-through">
                ₹{product.mrp}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="blinkit-btn-add px-4 sm:px-5 py-1.5 rounded-lg text-xs tracking-wider uppercase cursor-pointer active:scale-95 shadow-2xs font-bold"
            aria-label={`Add ${product.title} to cart`}
          >
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * FeaturedProducts / Today's Special Deals — Premium Deals Section (DEC-016).
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
      image: '/assets/categories/crockery.jpg',
    },
    {
      id: 'deal-2',
      title: 'Storage Container Set',
      subtitle: 'Airtight food-safe boxes',
      category: 'Storage',
      price: 299,
      mrp: 399,
      discount: '25% OFF',
      image: '/assets/categories/storage.jpg',
    },
    {
      id: 'deal-3',
      title: 'Stylish Handbag',
      subtitle: 'Everyday lifestyle companion',
      category: 'Bags & Accessories',
      price: 499,
      mrp: 600,
      discount: '17% OFF',
      image: '/assets/categories/bags.jpg',
    },
    {
      id: 'deal-4',
      title: 'Cleaning Combo Pack',
      subtitle: 'Complete home cleaning kit',
      category: 'Cleaning & Home',
      price: 349,
      mrp: 450,
      discount: '22% OFF',
      image: '/assets/categories/cleaning.jpg',
    },
    {
      id: 'deal-5',
      title: 'Ceramic Tea Mug Set',
      subtitle: 'Set of 6 handcrafted mugs',
      category: 'Kitchen Essentials',
      price: 499,
      mrp: 650,
      discount: '23% OFF',
      image: '/assets/categories/kitchen.jpg',
    },
    {
      id: 'deal-6',
      title: 'Airtight Storage Jars',
      subtitle: 'Stackable transparent jars',
      category: 'Plastic & Storage',
      price: 249,
      mrp: 320,
      discount: '22% OFF',
      image: '/assets/categories/storage.jpg',
    },
  ];

  const handleAddToCart = (product) => {
    setToastMessage(`Added "${product.title}" to cart`);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <section id="featured" className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div id="deals">
        {/* Subtle gold divider */}
        <div className="section-gold-divider mb-4 sm:mb-5" />

        {/* Section Header */}
        <div className="flex items-end justify-between mb-3 sm:mb-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-[#E8752E] uppercase tracking-wider block mb-1">
              Verified In-Store Pricing
            </span>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#123B2A] tracking-tight">
              Today&apos;s Special Deals
            </h2>
            <p className="text-[11px] text-[#575C52]">
              In-stock deals available for counter pickup at our Dibiyapur store
            </p>
          </div>
          <a
            href="#categories"
            className="text-xs font-bold text-[#123B2A] hover:text-[#E8752E] transition-colors"
          >
            See all deals →
          </a>
        </div>

        {/* 6-Card Responsive Grid */}
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
              <span>🛍️</span>
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
