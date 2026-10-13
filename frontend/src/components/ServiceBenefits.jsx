import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * ServiceBenefits — Premium Trust Highlights Strip for APNA MART DIBIYAPUR (DEC-016).
 * Elegant Warm Ivory & White pill container with Champagne Gold borders,
 * displaying verified store highlights: Physical Store in Dibiyapur, 100% Genuine Quality,
 * Easy Counter Pickup, and Friendly Local Support.
 */
export default function ServiceBenefits() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  const benefits = [
    {
      icon: '🏬',
      title: 'Physical Store in Dibiyapur',
      subtitle: 'Phaphund Road, Durga Nagar',
    },
    {
      icon: '✨',
      title: '100% Genuine Quality',
      subtitle: 'Hand-selected crockery & storage',
    },
    {
      icon: '🛍️',
      title: 'Easy Counter Pickup',
      subtitle: 'Quick in-store assistance',
    },
    {
      icon: '🤝',
      title: 'Friendly Local Support',
      subtitle: 'Direct local phone assistance',
    },
  ];

  return (
    <section ref={sectionRef} className="py-2.5 sm:py-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Warm Ivory & Champagne Gold Pill Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#C5A45B]/35 shadow-2xs"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
              className="flex items-center gap-2.5 sm:gap-3 p-1 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6ED] border border-[#C5A45B]/30 flex items-center justify-center text-base sm:text-lg shadow-2xs shrink-0 group-hover:border-[#123B2A]/40 group-hover:scale-105 transition-all duration-200">
                <span>{b.icon}</span>
              </div>
              <div>
                <h4 className="text-[11px] sm:text-xs font-extrabold text-[#123B2A] leading-tight">
                  {b.title}
                </h4>
                <p className="text-[10px] text-[#575C52] hidden sm:block mt-0.5">
                  {b.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
