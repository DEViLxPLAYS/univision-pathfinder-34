import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@educonsult.com", "support@educonsult.com"],
      description: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      details: ["123 Education Street", "Learning City, LC 12345"],
      description: "Visit us for in-person consultation"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      description: "Sunday: Closed"
    }
  ];

  const faqs = [
    {
      question: "How long does the consultation process take?",
      answer: "Initial consultations typically last 30-60 minutes, depending on your specific needs and questions."
    },
    {
      question: "Do you charge for the first consultation?",
      answer: "No, your first consultation with us is completely free. We want to understand your goals before discussing our services."
    },
    {
      question: "Which countries do you specialize in?",
      answer: "We specialize in USA, UK, Canada, Australia, Germany, Netherlands, and many other popular study destinations."
    },
    {
      question: "How much do your services cost?",
      answer: "Our service fees vary depending on the level of support you need. We'll discuss pricing during your consultation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your study abroad journey? Get in touch with our expert team for personalized guidance.
          </p>
        </div>
      </section>

      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="consultation">Book Consultation</SelectItem>
                        <SelectItem value="application">Application Support</SelectItem>
                        <SelectItem value="visa">Visa Guidance</SelectItem>
                        <SelectItem value="university">University Selection</SelectItem>
                        <SelectItem value="scholarship">Scholarship Information</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your study abroad goals, questions, or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {index < faqs.length - 1 && <div className="border-b border-border/50 pt-2"></div>}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-none shadow-md bg-accent/5">
              <CardHeader>
                <CardTitle className="text-accent">Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent matters related to applications or visa deadlines, contact our emergency hotline.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-accent">Emergency Hotline</p>
                  <p className="text-sm">+1 (555) 123-HELP</p>
                  <p className="text-xs text-muted-foreground">Available 24/7 for urgent matters</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Visit Our Office</CardTitle>
              <CardDescription>
                Come meet our team in person for a detailed consultation about your study abroad plans.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would be embedded here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Education Street, Learning City, LC 12345
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;