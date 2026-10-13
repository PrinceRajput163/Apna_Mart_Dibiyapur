/**
 * Hero — Premium Lifestyle Banner for APNA MART DIBIYAPUR (DEC-016).
 * Elegant Warm Ivory & Forest Green canvas, Champagne Gold borders,
 * Playfair Display serif headline, official brand emblem, and Forest Green CTA.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 sm:pt-36 md:pt-40 pb-5 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Warm Ivory & Champagne Gold Lifestyle Hero Card */}
      <div className="relative bg-gradient-to-br from-[#FAF6ED] via-white to-[#F5EEDB] rounded-3xl p-5 sm:p-8 md:p-10 overflow-hidden border border-[#C5A45B]/40 shadow-xs">

        {/* Decorative Champagne Gold & Forest Green Radial Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A45B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#123B2A]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">

          {/* Left: Copy & CTA */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C5A45B]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#123B2A] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E8752E]" />
              <span>HAR ZAROORAT, EK HI JAGAH.</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#123B2A] tracking-tight leading-[1.18] mb-2">
              Everything for your home &amp; lifestyle.{' '}
              <span className="sr-only">Elevate Your Home with Everyday Elegance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#575C52] font-medium mb-3">
              Quality products. Best prices. Direct from our physical store in Dibiyapur.
            </p>

            {/* Bilingual Tagline */}
            <p className="font-hindi text-sm text-[#123B2A] font-semibold mb-4">
              हर ज़रूरत, एक ही जगह।
            </p>

            {/* Forest Green Action Button "Shop now ➔" */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#123B2A] hover:bg-[#0B271C] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-150 cursor-pointer border border-[#C5A45B] active:scale-95"
                aria-label="Shop Categories"
              >
                <span>Shop now</span>
                <span className="text-sm">➔</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white hover:bg-[#FAF6ED] text-[#252922] text-xs font-semibold border border-[#C5A45B]/40 shadow-2xs transition-colors"
              >
                <span className="text-[#E8752E]">📍</span>
                <span>Store Location</span>
              </a>
            </div>
          </div>

          {/* Right: Premium In-Store Collection Preview Showcase Card */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-4/3 rounded-2xl bg-white/95 backdrop-blur-xs p-4 sm:p-5 border border-[#C5A45B]/40 shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-[#FAF6ED]">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/branding/apna-mart-logo.jpg"
                    alt="Logo Badge"
                    className="w-7 h-7 rounded-full object-contain border border-[#C5A45B]/40"
                  />
                  <span className="text-[10px] font-bold text-[#575C52] uppercase tracking-wider">
                    Dibiyapur In-Store
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#123B2A] bg-[#FAF6ED] px-2 py-0.5 rounded-full border border-[#C5A45B]/30">
                  Verified Local Retail
                </span>
              </div>

              {/* Graphic collage matching categories from the official logo */}
              <div className="grid grid-cols-4 gap-2 my-2 text-center">
                <div className="bg-[#FAF6ED] rounded-xl p-2.5 flex flex-col items-center border border-[#C5A45B]/20">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-[10px] font-bold text-[#252922] mt-1">Crockery</span>
                </div>
                <div className="bg-[#FAF6ED] rounded-xl p-2.5 flex flex-col items-center border border-[#C5A45B]/20">
                  <span className="text-2xl">📦</span>
                  <span className="text-[10px] font-bold text-[#252922] mt-1">Storage</span>
                </div>
                <div className="bg-[#FAF6ED] rounded-xl p-2.5 flex flex-col items-center border border-[#C5A45B]/20">
                  <span className="text-2xl">👜</span>
                  <span className="text-[10px] font-bold text-[#252922] mt-1">Bags</span>
                </div>
                <div className="bg-[#FAF6ED] rounded-xl p-2.5 flex flex-col items-center border border-[#C5A45B]/20">
                  <span className="text-2xl">🍳</span>
                  <span className="text-[10px] font-bold text-[#252922] mt-1">Kitchen</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#FAF6ED] flex items-center justify-between text-[11px] text-[#575C52]">
                <span>📍 Phaphund Road, Durga Nagar</span>
                <span className="text-[#123B2A] font-bold">Counter Pickup</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
