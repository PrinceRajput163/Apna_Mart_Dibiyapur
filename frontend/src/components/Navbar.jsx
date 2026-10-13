import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Navbar — Premium Brand Header for APNA MART DIBIYAPUR (DEC-016).
 * Features official circular logo asset, Warm Ivory canvas with Champagne Gold accents,
 * Deep Forest Green brand actions, verified Dibiyapur store location, and refined search bar.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Deals', href: '#deals' },
    { label: 'Collections', href: '#collections' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'हिं' : 'EN'));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const target = document.getElementById('deals') || document.getElementById('featured') || document.getElementById('categories');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Warm Ivory Header Canvas with Champagne Gold Subtle Border */}
      <div className={`bg-[#FAF6ED] border-b border-[#C5A45B]/30 transition-shadow ${isScrolled ? 'shadow-md' : 'premium-header-shadow'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2.5 pb-2.5">

          {/* Top Row: Official Logo, Brand Title, Desktop Nav, and Actions */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 mb-2">

            {/* Left: Mobile Hamburger + Official Circular Logo + Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1.5 -ml-1 text-[#252922] hover:text-[#123B2A] rounded-lg focus:outline-none cursor-pointer"
                aria-label="Open mobile menu"
                aria-expanded={isOpen}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Brand Logo & Title with Official Circular Emblem */}
              <a href="#home" className="flex items-center gap-2.5 group select-none leading-none">
                <img
                  src="/assets/branding/apna-mart-logo.jpg"
                  alt="APNA MART DIBIYAPUR Official Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain shadow-xs border border-[#C5A45B]/50 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-[#123B2A]">
                      APNA MART
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#E8752E] uppercase tracking-wider">
                      Dibiyapur
                    </span>
                    <span className="hidden">अ</span>
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] tracking-widest uppercase font-bold text-[#575C52] mt-0.5">
                    HOME &amp; LIFESTYLE STORE
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Desktop Nav Links */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-[#252922] hover:text-[#123B2A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A45B] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Language, Wishlist, Cart & Profile */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 hover:bg-white text-[#123B2A] transition-colors cursor-pointer border border-[#C5A45B]/40 shadow-2xs"
                aria-label={`Switch language to ${lang === 'EN' ? 'Hindi' : 'English'}`}
              >
                🌐 {lang}
              </button>

              {/* Wishlist Link */}
              <a
                href="#deals"
                className="p-1.5 sm:p-2 text-[#252922] hover:text-[#123B2A] hover:bg-white/80 rounded-full transition-colors hidden xs:inline-flex border border-transparent hover:border-[#C5A45B]/30"
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>

              {/* Cart Button with Count Badge */}
              <a
                href="#deals"
                className="relative p-1.5 sm:p-2 text-[#123B2A] hover:text-[#0B271C] hover:bg-white/80 rounded-full transition-colors border border-transparent hover:border-[#C5A45B]/30"
                aria-label="Shopping Cart (0 items)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#E8752E] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-xs">
                  0
                </span>
              </a>

              {/* Account Profile Icon (Forest Green Circle with Gold Accent) */}
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-[#123B2A] text-white flex items-center justify-center hover:bg-[#0B271C] transition-colors shadow-xs border border-[#C5A45B]/40"
                aria-label="Account"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Location Bar Row: "📍 Dibiyapur - Your neighbourhood store ⌵" */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#252922] mb-2 px-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-semibold hover:text-[#123B2A] transition-colors"
            >
              <span className="text-[#E8752E]">📍</span>
              <span className="font-bold text-[#123B2A]">Phaphund Road, Durga Nagar, Dibiyapur</span>
              <span className="text-[10px] text-[#C5A45B]">⌵</span>
            </a>
            <span className="font-hindi text-[11px] text-[#123B2A] font-semibold hidden sm:inline">
              हर ज़रूरत, एक ही जगह
            </span>
          </div>

          {/* Prominent Rounded Search Bar with Champagne Gold Accent */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <span className="absolute left-3.5 text-[#123B2A] pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands, categories..."
              className="w-full bg-white text-[#252922] text-xs sm:text-sm pl-10 pr-16 py-2.5 rounded-xl sm:rounded-2xl border border-[#C5A45B]/40 focus:outline-none focus:ring-2 focus:ring-[#123B2A] focus:border-[#123B2A] shadow-2xs placeholder:text-gray-400 transition-all"
            />
            <div className="absolute right-3 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-gray-700 text-xs cursor-pointer"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              {/* Voice Search Button */}
              <button
                type="button"
                className="text-[#575C52] hover:text-[#123B2A] p-1 cursor-pointer"
                aria-label="Voice search (microphone)"
                title="Voice search coming soon"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Slide-Down Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#252922]/50 backdrop-blur-xs z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-[#FAF6ED] z-50 shadow-2xl flex flex-col justify-between p-5 lg:hidden overflow-y-auto border-r border-[#C5A45B]/30"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A45B]/30">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/branding/apna-mart-logo.jpg"
                      alt="APNA MART Logo"
                      className="w-10 h-10 rounded-full object-contain border border-[#C5A45B]/40"
                    />
                    <div>
                      <span className="font-extrabold text-lg text-[#123B2A] font-heading">
                        APNA MART
                      </span>
                      <p className="text-[9px] font-bold text-[#E8752E] uppercase tracking-wider">
                        Dibiyapur • Home &amp; Lifestyle
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-gray-500 hover:text-gray-900 cursor-pointer"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <nav className="mt-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#252922] hover:bg-white hover:text-[#123B2A] transition-colors border border-transparent hover:border-[#C5A45B]/30"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-[#C5A45B]/30 space-y-2 text-xs">
                <p className="font-bold text-[#123B2A]">Direct Store Contacts:</p>
                <a href="tel:9756595920" className="block text-[#123B2A] font-semibold hover:underline">📞 9756595920</a>
                <a href="tel:9528869946" className="block text-[#123B2A] font-semibold hover:underline">📞 9528869946</a>
                <a href="tel:7500781379" className="block text-[#123B2A] font-semibold hover:underline">📞 7500781379</a>
                <p className="text-[11px] text-[#575C52] pt-1">Phaphund Road, Durga Nagar, Dibiyapur</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
