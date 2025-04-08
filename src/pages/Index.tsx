
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandPartners from "@/components/BrandPartners";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HotDeals from "@/components/HotDeals";
import CustomerReviews from "@/components/CustomerReviews";
import DeliveryLocations from "@/components/DeliveryLocations";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <DeliveryLocations />
      <main className="flex-grow">
        <HeroSlider />
        <HotDeals />
        <FeaturedProducts />
        <CustomerReviews />
        <BrandPartners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
