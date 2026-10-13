import { motion } from 'motion/react';

/**
 * ServiceBenefits — Service Guarantee & Store Highlights Strip.
 * Highlights verifiable local capabilities: Physical store, Genuine quality,
 * Counter pickup, and Local service support.
 */
export default function ServiceBenefits() {
  const benefits = [
    {
      icon: '🏬',
      title: 'Physical Store in Dibiyapur',
      description: 'Visit us in-person at Durga Nagar, Pizza Point on Phaphund Road',
      accent: '#6B1D2F',
    },
    {
      icon: '✨',
      title: '100% Genuine Quality',
      description: 'Hand-selected crockery, plastics, bags, and home essentials',
      accent: '#C9952E',
    },
    {
      icon: '🛍️',
      title: 'Easy Counter Pickup',
      description: 'Inquire or reserve items online for fast, convenient in-store pickup',
      accent: '#2E7D4E',
    },
    {
      icon: '🤝',
      title: 'Friendly Local Support',
      description: 'Direct assistance via phone or in-store for all your household needs',
      accent: '#E8602D',
    },
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-cream-200/80 p-5 sm:p-7 subtle-shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-cream-100">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${
                  index > 0 ? 'sm:pl-6 lg:pl-8' : ''
                }`}
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${benefit.accent}12` }}
                >
                  <span role="img" aria-label={benefit.title}>
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-charcoal-900 mb-0.5">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-charcoal-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
