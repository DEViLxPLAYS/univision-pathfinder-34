import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    education: "",
    fieldOfStudy: "",
    budgetRange: "",
    preferredCountries: [],
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Booked Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
  };

  const consultationTypes = [
    { value: "general", label: "General Consultation", duration: "30 mins", description: "Overview of study abroad options" },
    { value: "university", label: "University Selection", duration: "45 mins", description: "Detailed university recommendations" },
    { value: "application", label: "Application Assistance", duration: "60 mins", description: "Help with application process" },
    { value: "visa", label: "Visa Guidance", duration: "45 mins", description: "Visa requirements and process" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Free Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from our education experts. We'll help you find the perfect university and program for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Details</CardTitle>
                <CardDescription>
                  Please fill out this form so we can better assist you during your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Current Country of Residence *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Academic Background</h3>
                    <div className="space-y-2">
                      <Label htmlFor="education">Highest Education Level *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School (12th Grade)</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select field of study" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="medicine">Medicine & Health Sciences</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="sciences">Natural Sciences</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Study Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Study Preferences</h3>
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range (USD) *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-20k">Under $20,000</SelectItem>
                          <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                          <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                          <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                          <SelectItem value="over-80k">Over $80,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Consultation Type *</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {consultationTypes.map((type) => (
                        <Card key={type.value} className="cursor-pointer hover:border-primary">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Checkbox id={type.value} />
                              <Label htmlFor={type.value} className="font-medium">
                                {type.label}
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{type.description}</p>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{type.duration}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="message">Any specific questions or requirements?</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your goals, concerns, or any specific questions you have..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Personalized university recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Application strategy discussion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Scholarship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Visa guidance overview</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Timeline and next steps</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have questions about the consultation? Contact us directly.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">📞 +1 (555) 123-4567</p>
                  <p className="text-sm font-medium">✉️ info@educonsult.com</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Available Monday - Friday, 9 AM - 6 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;