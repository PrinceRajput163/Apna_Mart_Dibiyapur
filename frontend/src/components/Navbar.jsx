import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Navbar — Approved Mobile E-Commerce Header with Prominent Search Bar,
 * Wishlist, Cart counter, Language toggle, and Responsive Drawer.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { label: 'Featured', href: '#featured' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'हिं' : 'EN'));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Smooth scroll to categories/products when searching
      const target = document.getElementById('featured') || document.getElementById('categories');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner / Announcement Bar (Micro-utility) */}
      <div className="bg-burgundy-950 text-cream-100 text-xs py-1 px-4 text-center tracking-wide flex items-center justify-between sm:justify-center relative">
        <span className="font-hindi text-[11px] sm:text-xs text-gold-400 font-medium hidden sm:inline mr-2">
          हर ज़रूरत, एक ही जगह
        </span>
        <span className="text-[11px] sm:text-xs text-cream-200">
          📍 Phaphund Road, Durga Nagar, Dibiyapur
        </span>
        <button
          onClick={toggleLanguage}
          className="sm:absolute sm:right-6 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-burgundy-900/80 hover:bg-burgundy-800 text-cream-100 transition-colors cursor-pointer border border-gold-400/30"
          aria-label={`Switch language to ${lang === 'EN' ? 'Hindi' : 'English'}`}
        >
          🌐 {lang}
        </button>
      </div>

      {/* Main Header Container */}
      <div
        className={`bg-cream-50/95 backdrop-blur-md border-b border-cream-200/80 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md shadow-charcoal-900/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">

            {/* Left: Hamburger (Mobile) + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 -ml-1 text-charcoal-800 hover:text-burgundy-800 focus:outline-none cursor-pointer"
                aria-label="Open mobile menu"
                aria-expanded={isOpen}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Brand Logo & Name */}
              <a href="#home" className="flex items-center gap-2 group select-none">
                {/* Brand Emblem (Preserves authentic green & gold identity while logo file is pending upload) */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-forest-800 to-forest-900 border border-gold-400/40 flex items-center justify-center text-cream-50 font-bold text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
                  अ
                </div>
                <div className="flex flex-col leading-none">
                  <span className="serif-title font-bold text-base sm:text-lg tracking-tight text-burgundy-900">
                    APNA MART
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-charcoal-500">
                    Dibiyapur
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-charcoal-700 hover:text-burgundy-800 transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burgundy-800 group-hover:w-full transition-all duration-200 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Search Bar (Inline in header for lg screens) */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm relative"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crockery, bottles, bags..."
                className="w-full bg-cream-100/90 hover:bg-cream-100 text-charcoal-900 text-xs sm:text-sm pl-9 pr-8 py-2 rounded-full border border-cream-200 focus:outline-none focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 transition-all placeholder:text-charcoal-400"
              />
              <svg
                className="w-4 h-4 text-charcoal-500 absolute left-3 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-charcoal-400 hover:text-charcoal-700 text-xs cursor-pointer"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </form>

            {/* Right: Actions (Wishlist, Cart, Account) */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Wishlist Icon */}
              <a
                href="#featured"
                className="p-2 text-charcoal-700 hover:text-burgundy-800 hover:bg-cream-100 rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>

              {/* Shopping Cart Icon with Badge */}
              <a
                href="#featured"
                className="p-2 text-charcoal-700 hover:text-burgundy-800 hover:bg-cream-100 rounded-full transition-colors relative"
                aria-label="Shopping Cart (0 items)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-burgundy-800 text-cream-50 text-[10px] font-bold flex items-center justify-center leading-none">
                  0
                </span>
              </a>

              {/* Account Shortcut */}
              <a
                href="#contact"
                className="p-2 text-charcoal-700 hover:text-burgundy-800 hover:bg-cream-100 rounded-full transition-colors hidden sm:inline-flex"
                aria-label="Account"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>

              {/* Visit Store Callout (Desktop) */}
              <a
                href="#contact"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-800 hover:bg-burgundy-900 text-cream-50 text-xs font-semibold shadow-sm transition-all duration-200"
              >
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Mobile Search Bar (Directly below top row on mobile devices) */}
          <div className="md:hidden pb-2.5 pt-0.5">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crockery, bottles, bags, storage..."
                className="w-full bg-cream-100/90 text-charcoal-900 text-xs pl-9 pr-9 py-2 rounded-xl border border-cream-200/90 focus:outline-none focus:border-burgundy-800 focus:bg-white transition-all placeholder:text-charcoal-400"
              />
              <svg
                className="w-4 h-4 text-charcoal-500 absolute left-3 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-charcoal-400 hover:text-charcoal-700 text-xs cursor-pointer"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-cream-50/98 backdrop-blur-xl border-b border-cream-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-charcoal-800 hover:bg-cream-100 hover:text-burgundy-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-cream-200/80 space-y-2">
                <div className="text-xs text-charcoal-500 px-3">
                  <p className="font-semibold text-charcoal-800 mb-0.5">APNA MART DIBIYAPUR</p>
                  <p>Phaphund Road, Durga Nagar, Dibiyapur</p>
                  <p className="mt-1 font-mono text-[11px] text-burgundy-800 font-medium">
                    📞 9756595920 / 9528869946
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-xl bg-burgundy-800 text-cream-50 text-xs font-semibold hover:bg-burgundy-900 transition-colors"
                >
                  Contact Store & Directions →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

