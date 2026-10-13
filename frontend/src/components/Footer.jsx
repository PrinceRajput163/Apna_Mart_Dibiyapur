/**
 * Footer — Blinkit UI Footer for APNA MART DIBIYAPUR.
 * Features signature green "apnamart" brand logo, approved tagline,
 * and verified physical store location details in Dibiyapur.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8 text-charcoal-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Blinkit Green apnamart Logo */}
        <div className="flex flex-col items-center mb-3">
          <span className="font-heading font-extrabold text-3xl tracking-tight text-[#0C831F] lowercase">
            apnamart
          </span>
          <span className="font-hindi text-xs sm:text-sm text-gray-700 font-semibold mt-1">
            Har Zaroorat, Ek Hi Jagah.
          </span>
          <span className="font-hindi text-[11px] text-gray-600 font-medium">
            “हर ज़रूरत, एक ही जगह।”
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-gray-500 mt-0.5">
            DIBIYAPUR • HOME &amp; LIFESTYLE
          </span>
        </div>

        {/* Verified Store Address & Phone Info */}
        <div className="max-w-md mx-auto my-3 p-3 rounded-xl bg-[#FBFBFC] border border-gray-100 text-xs text-gray-600">
          <p className="font-semibold text-gray-800 mb-1">
            📍 Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, UP – 206244
          </p>
          <div className="flex items-center justify-center gap-3 text-[#0C831F] font-bold mt-1">
            <a href="tel:9756595920" className="hover:underline">📞 9756595920</a>
            <span>•</span>
            <a href="tel:9528869946" className="hover:underline">📞 9528869946</a>
            <span>•</span>
            <a href="tel:7500781379" className="hover:underline">📞 7500781379</a>
          </div>
        </div>

        {/* Copyright & Owner Credit */}
        <div className="pt-4 border-t border-gray-100 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-1">
          <p>© {currentYear} APNA MART DIBIYAPUR. All rights reserved.</p>
          <p>Shyam Sundar Rajput • Home &amp; Lifestyle Store</p>
        </div>

      </div>
    </footer>
  );
}
