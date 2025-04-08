
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryLocations from "@/components/DeliveryLocations";
import { Truck, ShieldCheck, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <DeliveryLocations />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-buniyaad-dark py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Building Dreams Since 2022
                </h1>
                <p className="text-gray-300">
                  Buniyaad has established itself as a trusted name in construction materials, delivering quality products and exceptional service across Uttar Pradesh.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/lovable-uploads/333a7b92-28ea-4892-8388-22a34f651071.png" 
                  alt="Buniyaad Logo" 
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-buniyaad-dark mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2022, Buniyaad emerged from a simple vision - to provide high-quality construction materials at fair prices with exceptional service. Our journey began in Kanpur, where we identified a gap in the market for reliable building material suppliers.
                </p>
                <p className="text-gray-700 mb-4">
                  Starting with a small inventory of essential materials like sand and cement, we quickly built a reputation for quality and reliability. As word spread about our commitment to excellence, our customer base grew, allowing us to expand our product range and service areas.
                </p>
                <p className="text-gray-700">
                  Today, Buniyaad serves multiple cities across Uttar Pradesh, including Kanpur, Lucknow, Unnao, and Hamirpur, making quality construction materials accessible to both individual homebuilders and large-scale developers.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/43374e0b-2017-4c12-b260-4d72f725f5ab.png" 
                    alt="Construction Site" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-buniyaad-gray py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-buniyaad-dark text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto bg-buniyaad-orange/20 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-buniyaad-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">We never compromise on the quality of our materials, ensuring every product meets industry standards.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto bg-buniyaad-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-buniyaad-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-gray-600">We understand the importance of time in construction projects and ensure prompt delivery of all materials.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto bg-buniyaad-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-buniyaad-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wide Coverage</h3>
                <p className="text-gray-600">Our extensive delivery network covers multiple cities across Uttar Pradesh, making quality materials accessible to all.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto bg-buniyaad-orange/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-buniyaad-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">Our customers' satisfaction is our top priority, and we strive to exceed expectations with every order.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
