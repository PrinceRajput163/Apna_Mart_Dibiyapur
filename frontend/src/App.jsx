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
 * App — Root component assembling the APNA MART DIBIYAPUR Blinkit UI storefront.
 * Matches the reference layout:
 * 1. Yellow Header with Location & Search (Navbar)
 * 2. Mint Green Lifestyle Banner (Hero)
 * 3. 2x4 Shop by Category Grid (Categories)
 * 4. Festive Offer Banners (OfferBanners)
 * 5. Today's Special Deals (FeaturedProducts)
 * 6. Trust & Service Benefits Strip (ServiceBenefits)
 * 7. Shop by Collection (ShopByCollection)
 * 8. New Arrivals (NewArrivals)
 * 9. Physical Retail Presence (StoreIntro & ContactCTA)
 * 10. Footer & Fixed Mobile Bottom Navigation (BottomNav)
 */
function App() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-charcoal-900 font-body overflow-x-hidden selection:bg-green-100 selection:text-green-900 pb-16 md:pb-0">
      <Navbar />
      <main>
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
