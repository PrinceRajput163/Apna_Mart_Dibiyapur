import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ServiceBenefits from './components/ServiceBenefits';
import FeaturedProducts from './components/FeaturedProducts';
import StoreIntro from './components/StoreIntro';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

/**
 * App — Root component assembling the Apna Mart Dibiyapur homepage.
 * Each section is a separate, reusable component.
 */
function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 font-body overflow-x-hidden selection:bg-burgundy-100 selection:text-burgundy-900 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ServiceBenefits />
        <FeaturedProducts />
        <StoreIntro />
        <ContactCTA />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}



export default App;
