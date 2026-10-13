
/**
 * Hero — Blinkit UI Lifestyle Banner for APNA MART DIBIYAPUR.
 * Soft mint green rounded card, bold headline, quality subtitle,
 * green "Shop now ➔" button, and lifestyle category showcase.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 sm:pt-36 md:pt-40 pb-5 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Mint Green Lifestyle Hero Card (Blinkit Style) */}
      <div className="relative bg-[#EBF7EE] rounded-3xl p-5 sm:p-8 md:p-10 overflow-hidden border border-green-200/60 shadow-xs">

        {/* Decorative Soft Radial Background Shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">

          {/* Left: Copy & CTA */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-green-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0C831F] mb-3 shadow-2xs">
              <span>HAR ZAROORAT, EK HI JAGAH.</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#14532D] tracking-tight leading-[1.15] mb-2">
              Everything for your home &amp; lifestyle.{' '}
              <span className="sr-only">Elevate Your Home with Everyday Elegance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mb-4">
              Quality products. Best prices.
            </p>

            {/* Bilingual Tagline */}
            <p className="font-hindi text-sm text-[#0C831F] font-semibold mb-3">
              हर ज़रूरत, एक ही जगह।
            </p>

            {/* Green Action Button "Shop now ➔" */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0C831F] hover:bg-[#086918] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-150 cursor-pointer active:scale-95"
                aria-label="Shop Categories"
              >
                <span>Shop now</span>
                <span className="text-sm">➔</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold border border-gray-200 shadow-2xs transition-colors"
              >
                <span>📍 Store Location</span>
              </a>
            </div>
          </div>

          {/* Right: Lifestyle Graphic Showcase Card */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-4/3 rounded-2xl bg-white/90 backdrop-blur-xs p-4 border border-green-200/80 shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Dibiyapur In-Store Collection
                </span>
                <span className="text-[10px] font-bold text-[#0C831F] bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                  Daily Fresh Deals
                </span>
              </div>

              {/* Graphic collage representation matching reference */}
              <div className="grid grid-cols-4 gap-2 my-2 text-center">
                <div className="bg-[#FAF3E6] rounded-xl p-2.5 flex flex-col items-center">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-[10px] font-bold text-gray-700 mt-1">Crockery</span>
                </div>
                <div className="bg-[#EAF4EE] rounded-xl p-2.5 flex flex-col items-center">
                  <span className="text-2xl">📦</span>
                  <span className="text-[10px] font-bold text-gray-700 mt-1">Storage</span>
                </div>
                <div className="bg-[#FDEDE6] rounded-xl p-2.5 flex flex-col items-center">
                  <span className="text-2xl">👜</span>
                  <span className="text-[10px] font-bold text-gray-700 mt-1">Bags</span>
                </div>
                <div className="bg-[#FEF6E9] rounded-xl p-2.5 flex flex-col items-center">
                  <span className="text-2xl">🍳</span>
                  <span className="text-[10px] font-bold text-gray-700 mt-1">Kitchen</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                <span>📍 Phaphund Road, Durga Nagar</span>
                <span className="text-[#0C831F] font-bold">Counter Pickup</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
