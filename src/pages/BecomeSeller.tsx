
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const BecomeSeller = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your seller application has been submitted successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-buniyaad-gray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-buniyaad-dark mb-2">Become a Seller</h1>
              <p className="text-gray-600">
                Join our marketplace and grow your construction materials business.
              </p>
            </div>

            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="apply">Apply Now</TabsTrigger>
              </TabsList>
              <TabsContent value="benefits">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Sell with Buniyaad?</CardTitle>
                    <CardDescription>
                      Grow your business by joining our marketplace.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-buniyaad-orange/20 flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-buniyaad-orange"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">Increased Visibility</h3>
                          <p className="text-gray-600 text-center">Reach thousands of potential customers looking for construction materials.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-buniyaad-orange/20 flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-buniyaad-orange"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path><path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path><line x1="12" y1="22" x2="12" y2="13"></line><path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path></svg>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">Simple Logistics</h3>
                          <p className="text-gray-600 text-center">Our platform handles order management, payments, and customer support.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-buniyaad-orange/20 flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-buniyaad-orange"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                          <p className="text-gray-600 text-center">Set your own prices and compete in a transparent marketplace.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-buniyaad-orange/20 flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-buniyaad-orange"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">Seller Dashboard</h3>
                          <p className="text-gray-600 text-center">Access to analytics and insights to grow your business.</p>
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <Button 
                          className="bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                          onClick={() => document.querySelector('button[value="apply"]')?.click()}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="requirements">
                <Card>
                  <CardHeader>
                    <CardTitle>Seller Requirements</CardTitle>
                    <CardDescription>
                      To become a seller on Buniyaad, you need to meet the following requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-buniyaad-orange/30 rounded-lg bg-buniyaad-orange/5">
                        <h3 className="font-semibold text-lg mb-2">Business Requirements</h3>
                        <ul className="list-disc ml-5 space-y-1 text-gray-700">
                          <li>Valid business registration and GST number</li>
                          <li>Minimum 1 year of experience in the industry</li>
                          <li>Ability to fulfill orders in a timely manner</li>
                          <li>Quality assurance processes in place</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border border-buniyaad-orange/30 rounded-lg bg-buniyaad-orange/5">
                        <h3 className="font-semibold text-lg mb-2">Documentation Required</h3>
                        <ul className="list-disc ml-5 space-y-1 text-gray-700">
                          <li>Business registration certificate</li>
                          <li>GST certificate</li>
                          <li>PAN card</li>
                          <li>Bank account details for receiving payments</li>
                          <li>Address proof of business location</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border border-buniyaad-orange/30 rounded-lg bg-buniyaad-orange/5">
                        <h3 className="font-semibold text-lg mb-2">Platform Guidelines</h3>
                        <ul className="list-disc ml-5 space-y-1 text-gray-700">
                          <li>Maintain accurate product listings with quality images</li>
                          <li>Respond to customer inquiries within 24 hours</li>
                          <li>Process orders within the agreed timeframe</li>
                          <li>Maintain a customer satisfaction rating of at least 4.0/5.0</li>
                          <li>Follow all platform policies and guidelines</li>
                        </ul>
                      </div>

                      <div className="text-center mt-6">
                        <Button 
                          className="bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                          onClick={() => document.querySelector('button[value="apply"]')?.click()}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="apply">
                <Card>
                  <CardHeader>
                    <CardTitle>Seller Application</CardTitle>
                    <CardDescription>
                      Fill out the form below to apply as a seller on Buniyaad.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Business Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="business-name">Business Name</Label>
                            <Input id="business-name" placeholder="Your company name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gst-number">GST Number</Label>
                            <Input id="gst-number" placeholder="e.g., 22AAAAA0000A1Z5" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pan-number">PAN Number</Label>
                            <Input id="pan-number" placeholder="e.g., ABCDE1234F" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business-type">Business Type</Label>
                            <Select>
                              <SelectTrigger id="business-type">
                                <SelectValue placeholder="Select business type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="manufacturer">Manufacturer</SelectItem>
                                <SelectItem value="distributor">Distributor</SelectItem>
                                <SelectItem value="retailer">Retailer</SelectItem>
                                <SelectItem value="wholesaler">Wholesaler</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contact-name">Contact Person Name</Label>
                            <Input id="contact-name" placeholder="Full name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contact-email">Email</Label>
                            <Input id="contact-email" type="email" placeholder="business@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contact-phone">Phone Number</Label>
                            <Input id="contact-phone" placeholder="+91 9876543210" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business-address">Business Address</Label>
                            <Input id="business-address" placeholder="Full address" required />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Product Information</h3>
                        <div className="space-y-2">
                          <Label>Products you want to sell</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sell-sand" />
                              <label htmlFor="sell-sand" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                River Sand
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sell-stone" />
                              <label htmlFor="sell-stone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Crushed Stone
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sell-bricks" />
                              <label htmlFor="sell-bricks" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Bricks
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sell-cement" />
                              <label htmlFor="sell-cement" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Cement
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="business-description">Tell us about your business</Label>
                          <Textarea 
                            id="business-description" 
                            placeholder="Describe your business, experience, and why you want to join Buniyaad..."
                            className="min-h-32"
                            required 
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-buniyaad-orange hover:underline">Seller Terms & Conditions</a> and <a href="#" className="text-buniyaad-orange hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting Application..." : "Submit Application"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeSeller;
