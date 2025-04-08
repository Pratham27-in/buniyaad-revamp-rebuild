
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Quote = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your quote request has been submitted successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-buniyaad-gray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-buniyaad-dark mb-2">Get a Free Quote</h1>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you with a customized quote.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quote Request Form</CardTitle>
                <CardDescription>
                  Please provide details about your project to receive an accurate quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 9876543210" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input id="location" placeholder="City, State" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="project-type">Project Type</Label>
                      <Select>
                        <SelectTrigger id="project-type">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="renovation">Renovation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Materials Needed</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="sand" />
                          <label htmlFor="sand" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            River Sand
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="stone" />
                          <label htmlFor="stone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Crushed Stone
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="bricks" />
                          <label htmlFor="bricks" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Bricks
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cement" />
                          <label htmlFor="cement" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Cement
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="project-details">Project Details</Label>
                      <Textarea 
                        id="project-details" 
                        placeholder="Please provide additional details about your project..."
                        className="min-h-32"
                        required 
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our <a href="#" className="text-buniyaad-orange hover:underline">Privacy Policy</a> and <a href="#" className="text-buniyaad-orange hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
