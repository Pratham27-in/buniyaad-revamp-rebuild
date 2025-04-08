
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandPartners from "@/components/BrandPartners";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <FeaturedProducts />
        <BrandPartners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
