import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Navbar — Blinkit UI Header for APNA MART DIBIYAPUR.
 * Features signature Blinkit yellow canvas, bold green brand logo,
 * neighbourhood store location line, cart badge, and prominent search bar with mic icon.
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
      {/* Signature Blinkit Yellow Header Canvas */}
      <div className={`bg-[#FFD200] border-b border-yellow-400/60 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-2.5">

          {/* Top Row: Brand Logo, Location, and Account/Cart Actions */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 mb-2">

            {/* Left: Hamburger (Mobile) + Brand Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1.5 -ml-1 text-charcoal-900 hover:text-green-900 rounded-lg focus:outline-none cursor-pointer"
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

              {/* Brand Logo & Title */}
              <a href="#home" className="flex flex-col group select-none leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0C831F] font-heading lowercase">
                    apnamart
                  </span>
                  <span className="hidden">APNA MART</span>
                  <span className="hidden">अ</span>
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-[#05400E]">
                  HOME & LIFESTYLE STORE
                </span>
                <span className="hidden">Dibiyapur</span>
              </a>
            </div>

            {/* Center: Desktop Nav Links */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-charcoal-800 hover:text-[#0C831F] transition-colors py-1"
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
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70 hover:bg-white text-green-900 transition-colors cursor-pointer border border-yellow-400"
                aria-label={`Switch language to ${lang === 'EN' ? 'Hindi' : 'English'}`}
              >
                🌐 {lang}
              </button>

              {/* Wishlist Link */}
              <a
                href="#deals"
                className="p-1.5 sm:p-2 text-charcoal-800 hover:text-green-900 hover:bg-white/50 rounded-full transition-colors hidden xs:inline-flex"
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>

              {/* Cart Button with Count Badge */}
              <a
                href="#deals"
                className="relative p-1.5 sm:p-2 text-charcoal-900 hover:text-green-900 hover:bg-white/60 rounded-full transition-colors"
                aria-label="Shopping Cart (0 items)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#0C831F] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-xs">
                  0
                </span>
              </a>

              {/* Account Profile Icon (Blinkit Dark Circle) */}
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-charcoal-900 text-white flex items-center justify-center hover:bg-charcoal-800 transition-colors shadow-xs"
                aria-label="Account"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Location Bar Row: "📍 Dibiyapur - Your neighbourhood store ⌵" */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-charcoal-900 mb-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-bold hover:text-green-950 transition-colors"
            >
              <span className="text-red-700">📍</span>
              <span>Dibiyapur - Your neighbourhood store</span>
              <span className="text-[10px]">⌵</span>
            </a>
            <span className="font-hindi text-[11px] text-green-900 font-semibold hidden sm:inline">
              हर ज़रूरत, एक ही जगह
            </span>
            <span className="hidden">Phaphund Road, Durga Nagar, Dibiyapur</span>
          </div>

          {/* Prominent White Rounded Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <span className="absolute left-3.5 text-charcoal-500 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands, categories..."
              className="w-full bg-white text-charcoal-900 text-xs sm:text-sm pl-10 pr-16 py-2.5 rounded-xl sm:rounded-2xl border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-[#0C831F] shadow-xs placeholder:text-charcoal-400 transition-all"
            />
            <div className="absolute right-3 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-charcoal-400 hover:text-charcoal-700 text-xs cursor-pointer"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              {/* Microphone Voice Icon (Blinkit Style) */}
              <button
                type="button"
                className="text-charcoal-600 hover:text-green-800 p-1 cursor-pointer"
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
              className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-xs z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col justify-between p-5 lg:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <span className="font-extrabold text-2xl text-[#0C831F] font-heading lowercase">
                      apnamart
                    </span>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Home & Lifestyle Store
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-gray-500 hover:text-gray-900"
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
                      className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-[#EBF7EE] hover:text-[#0C831F] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2 text-xs">
                <p className="font-bold text-gray-900">Direct Store Contacts:</p>
                <a href="tel:9756595920" className="block text-[#0C831F] font-semibold">📞 9756595920</a>
                <a href="tel:9528869946" className="block text-[#0C831F] font-semibold">📞 9528869946</a>
                <p className="text-[11px] text-gray-500 pt-1">Phaphund Road, Durga Nagar, Dibiyapur</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
