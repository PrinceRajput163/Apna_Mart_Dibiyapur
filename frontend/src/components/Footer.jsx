/**
 * Footer — Professional footer for Apna Mart Dibiyapur.
 * Features verified shop address, contact numbers, and all 7 approved categories.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Featured Products', href: '#featured' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  const categories = [
    'Crockery',
    'Plastic & Storage',
    'Bags & Accessories',
    'Cleaning & Home',
    'Gift Items',
    'Backpacks & More',
    'Kitchen Essentials',
  ];

  return (
    <footer className="relative border-t border-cream-200 bg-burgundy-950 text-cream-100">
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy-900 via-gold-400/50 to-burgundy-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-forest-800 to-forest-900 border border-gold-400/40 flex items-center justify-center font-heading font-bold text-cream-50 text-base shadow-sm">
                अ
              </div>
              <div className="flex flex-col leading-tight">
                <span className="serif-title font-bold text-cream-50 text-base tracking-tight">
                  APNA MART
                </span>
                <span className="text-gold-400 text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Dibiyapur
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed mb-3 max-w-xs">
              Your neighbourhood Home & Lifestyle store — quality essentials for every household need, all in one place.
            </p>
            <p className="font-hindi text-xs sm:text-sm text-gold-400 font-medium italic">
              &ldquo;हर ज़रूरत, एक ही जगह।&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-cream-50 tracking-wider mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-cream-300/70 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-cream-50 tracking-wider mb-4 uppercase">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    className="text-xs sm:text-sm text-cream-300/70 hover:text-gold-400 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-cream-50 tracking-wider mb-4 uppercase">
              Store & Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-cream-300/80">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5">📍</span>
                <p className="leading-relaxed">
                  Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5">📞</span>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:9756595920" className="hover:text-gold-400 transition-colors">9756595920</a>
                  <a href="tel:9528869946" className="hover:text-gold-400 transition-colors">9528869946</a>
                  <a href="tel:7500781379" className="hover:text-gold-400 transition-colors">7500781379</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-burgundy-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-300/60">
          <p>
            &copy; {currentYear} APNA MART DIBIYAPUR. All rights reserved.
          </p>
          <p className="text-[11px] text-cream-300/40">
            Shyam Sundar Rajput • Home & Lifestyle Store
          </p>
        </div>
      </div>
    </footer>
  );
}

