import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

/**
 * Footer — Premium Brand Footer for APNA MART DIBIYAPUR (DEC-016).
 * Displays official circular APNA MART logo, bilingual tagline,
 * verified physical store location details in Dibiyapur, and owner credit.
 * Phase 3: Added scroll-triggered reveal animation.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer ref={ref} className="bg-white border-t border-[#C5A45B]/30 pt-8 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8 text-[#252922]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Official Circular Brand Logo & Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-3"
        >
          <img
            src="/assets/branding/apna-mart-logo.jpg"
            alt="APNA MART DIBIYAPUR Official Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain shadow-xs border border-[#C5A45B]/50 mb-2 hover:scale-105 transition-transform duration-200"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-[#123B2A]">
              APNA MART
            </span>
            <span className="text-xs font-bold text-[#E8752E] uppercase tracking-wider">
              Dibiyapur
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#575C52] mt-0.5">
            HOME &amp; LIFESTYLE STORE
          </span>
          <span className="font-hindi text-xs sm:text-sm text-[#252922] font-semibold mt-1.5">
            Har Zaroorat, Ek Hi Jagah.
          </span>
          <span className="font-hindi text-[11px] text-[#123B2A] font-medium mt-0.5">
            &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
          </span>
        </motion.div>

        {/* Verified Store Address & Phone Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-md mx-auto my-3 p-3.5 rounded-2xl bg-[#FAF6ED] border border-[#C5A45B]/30 text-xs text-[#252922] shadow-2xs"
        >
          <p className="font-bold text-[#123B2A] mb-1">
            📍 Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, UP – 206244
          </p>
          <div className="flex items-center justify-center gap-3 text-[#123B2A] font-bold mt-1.5 flex-wrap">
            <a href="tel:9756595920" className="hover:text-[#E8752E] hover:underline transition-colors">📞 9756595920</a>
            <span className="text-[#C5A45B]">•</span>
            <a href="tel:9528869946" className="hover:text-[#E8752E] hover:underline transition-colors">📞 9528869946</a>
            <span className="text-[#C5A45B]">•</span>
            <a href="tel:7500781379" className="hover:text-[#E8752E] hover:underline transition-colors">📞 7500781379</a>
          </div>
        </motion.div>

        {/* Copyright & Owner Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-4 border-t border-[#FAF6ED] w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#575C52] gap-1"
        >
          <p>© {currentYear} APNA MART DIBIYAPUR. All rights reserved.</p>
          <p className="font-medium text-[#123B2A]">Shyam Sundar Rajput • Home &amp; Lifestyle Store</p>
        </motion.div>

      </div>
    </footer>
  );
}
