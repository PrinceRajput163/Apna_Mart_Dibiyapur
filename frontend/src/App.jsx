import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import OfferBanners from './components/OfferBanners';
import FeaturedProducts from './components/FeaturedProducts';
import ServiceBenefits from './components/ServiceBenefits';
import ShopByCollection from './components/ShopByCollection';
import NewArrivals from './components/NewArrivals';
import StoreIntro from './components/StoreIntro';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

/**
 * App — Root component for APNA MART DIBIYAPUR (DEC-016).
 * Assembles the premium Indian home and lifestyle storefront:
 * 1. Warm Ivory & Forest Green Header with Official Logo, Location & Search (Navbar)
 * 2. Lifestyle Banner with Serif Typography & In-Store Preview (Hero)
 * 3. 2x4 Shop by Category Grid with Champagne Gold accents (Categories)
 * 4. Festive & Value Collection Banners (OfferBanners)
 * 5. Today's Special Deals with In-Store Pricing (FeaturedProducts)
 * 6. Verifiable Physical Store Guarantees Strip (ServiceBenefits)
 * 7. Shop by Collection (ShopByCollection)
 * 8. New Arrivals (NewArrivals)
 * 9. Physical Retail Presence (StoreIntro & ContactCTA)
 * 10. Brand Footer with Official Circular Logo & Mobile Bottom Navigation (BottomNav)
 */
function App() {
  return (
    <div className="min-h-screen bg-[#FAF6ED] text-[#252922] font-body overflow-x-hidden selection:bg-[#EAF1ED] selection:text-[#123B2A] pb-16 md:pb-0">
      {/* Skip to main content — WCAG 2.1 keyboard accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Categories />
        <OfferBanners />
        <FeaturedProducts />
        <ServiceBenefits />
        <ShopByCollection />
        <NewArrivals />
        <StoreIntro />
        <ContactCTA />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
