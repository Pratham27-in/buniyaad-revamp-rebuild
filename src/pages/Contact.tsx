
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryLocations from "@/components/DeliveryLocations";
import GoogleMap from "@/components/GoogleMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 1500);
  };

  const offices = [
    {
      id: 1,
      name: "Kanpur Office",
      address: "Yogendra Vihar, Kanpur 208021",
      phone: "+91 7651853974",
      email: "info@buniyaad.com",
      mapAddress: "Yogendra Vihar, Kanpur 208021, Uttar Pradesh, India"
    },
    {
      id: 2,
      name: "Hamirpur Office",
      address: "Hamirpur, UP 210301",
      phone: "+91 7651853974",
      email: "support@buniyaad.com",
      mapAddress: "Hamirpur, 210301, Uttar Pradesh, India"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <DeliveryLocations />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-buniyaad-dark py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have questions about our products or services? Reach out to us, and our team will be happy to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="h-6 w-6 text-buniyaad-orange mr-2" />
                    <h2 className="text-2xl font-bold text-buniyaad-dark">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                        <Select
                          value={formData.subject}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Product Information">Product Information</SelectItem>
                            <SelectItem value="Pricing & Quotation">Pricing & Quotation</SelectItem>
                            <SelectItem value="Delivery Query">Delivery Query</SelectItem>
                            <SelectItem value="Feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="w-full lg:w-1/2 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold text-buniyaad-dark mb-6">Our Offices</h2>
                  
                  <div className="space-y-8">
                    {offices.map((office) => (
                      <div key={office.id} className="border-b pb-6 last:border-0 last:pb-0">
                        <h3 className="text-xl font-semibold text-buniyaad-dark mb-3">{office.name}</h3>
                        <div className="flex items-start mb-2">
                          <MapPin className="h-5 w-5 text-buniyaad-orange mr-2 mt-0.5" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Phone className="h-5 w-5 text-buniyaad-orange mr-2" />
                          <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-buniyaad-orange">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center mb-4">
                          <Mail className="h-5 w-5 text-buniyaad-orange mr-2" />
                          <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-buniyaad-orange">
                            {office.email}
                          </a>
                        </div>
                        <div className="mt-4">
                          <GoogleMap address={office.mapAddress} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
