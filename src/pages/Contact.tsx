import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help bring your aviation projects to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-border/40 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Office Address</h3>
                      <p className="text-muted-foreground">
                        Adiban Aviation Private Limited<br />
                        65/65, Trichy Main Road, Nathamedu,<br />
                        Pidagam, Villupuram, Tamil Nadu, 605401
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+918903501042" className="hover:text-accent transition-colors">+91 8903501042</a><br />
                        <a href="tel:+918903522042" className="hover:text-accent transition-colors">+91 8903522042</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@adibanaviation.in" className="hover:text-accent transition-colors">
                          contact@adibanaviation.in
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        WhatsApp available on phone numbers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-card border border-border/40 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8!2d79.5!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ1JzAwLjAiTiA3OcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adiban Aviation Office Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-card border border-border/40 rounded-xl p-8">
                <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" required rows={6} className="mt-2" />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;