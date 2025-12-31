import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSEO } from "@/hooks/useSEO";

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Contact Us - Adiban Aviation | Get in Touch | Aerospace & UAV Solutions",
    description: "Contact Adiban Aviation for UAV systems, aerospace hardware, and engineering services. Located in Villupuram, Tamil Nadu. Phone: +91-8903501042, Email: contact@adibanaviation.in",
    keywords: "Adiban Aviation contact, UAV manufacturer contact, aerospace company India, drone company contact, Adiban Aviation address, Villupuram aerospace company",
    canonical: "https://adibanaviation.com/contact",
    ogImage: "https://adibanaviation.com/contact-og-image.jpg",
    ogType: "website"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    // You can add API call here
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Primary", value: "+91 8903501042", link: "tel:+918903501042" },
        { label: "Secondary", value: "+91 8903522042", link: "tel:+918903522042" },
      ],
      description: "Call us during business hours",
      gradient: "from-blue-500 to-cyan-500",
      action: "Call Now",
      primaryLink: "tel:+918903501042"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { label: "General", value: "contact@adibanaviation.in", link: "mailto:contact@adibanaviation.in" },
        { label: "Support", value: "info@adibanaviation.in", link: "mailto:info@adibanaviation.in" },
      ],
      description: "Send us an email anytime",
      gradient: "from-purple-500 to-blue-500",
      action: "Send Email",
      primaryLink: "mailto:contact@adibanaviation.in"
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        { label: "Office", value: "65/65, Trichy Main Road, Nathamedu, Pidagam, Villupuram, Tamil Nadu, 605401", link: null },
      ],
      description: "Visit our facility",
      gradient: "from-green-500 to-emerald-500",
      action: "Get Direction",
      primaryLink: "https://maps.app.goo.gl/8ok1iCta94HvEAgD8"
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Innovative Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[80vh] flex items-center overflow-hidden pt-20"
          aria-label="Contact Hero"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 mesh-gradient"
              style={{ opacity }}
            />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          {/* Animated Shapes */}
          <motion.div 
            className="absolute top-1/4 left-10 w-24 h-24 border-4 border-primary/30 rounded-xl"
            animate={{ 
              rotate: [0, 360],
              y: [0, -40, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-20 w-40 h-40 border-4 border-accent/30 rounded-full"
            animate={{ 
              rotate: [360, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 backdrop-blur-sm mb-6"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6">
                  <span className="block text-foreground">Let's</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Connect
                  </span>
                  <span className="block text-foreground">Together</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"
                />
                
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Have a project in mind? Let's discuss how we can help bring your aviation projects to life.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Contact Methods Grid */}
          <section className="py-32 relative overflow-hidden" aria-label="Contact Methods">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6">
                  CONTACT US
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Multiple Ways to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Reach Us
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float flex flex-col">
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className="h-8 w-8 text-white" />
                          </div>
                          
                          <h3 className="text-2xl font-display font-bold mb-2">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-6">{method.description}</p>
                          
                          <div className="space-y-3 mb-6">
                            {method.details.map((detail, i) => (
                              <div key={i}>
                                {detail.label && (
                                  <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                                )}
                                {detail.link ? (
                                  <a 
                                    href={detail.link}
                                    className="text-foreground hover:text-primary transition-colors font-semibold block"
                                  >
                                    {detail.value}
                                  </a>
                                ) : (
                                  <p className="text-foreground font-semibold">{detail.value}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {(method.primaryLink || method.details[0].link) && (
                          <a href={method.primaryLink || method.details[0].link} className="mt-auto">
                            <Button 
                              variant="outline" 
                              className="w-full border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                            >
                              {method.action}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="font-display font-semibold">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    <strong className="text-foreground">Note:</strong> WhatsApp available on phone numbers
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Form & Map Section */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Contact Form">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Send Us a{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          Message
                        </span>
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="mb-2">Name *</Label>
                          <Input id="name" required className="h-12" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="mb-2">Email *</Label>
                          <Input id="email" type="email" required className="h-12" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone" className="mb-2">Phone Number</Label>
                        <Input id="phone" type="tel" className="h-12" />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="mb-2">Subject *</Label>
                        <Input id="subject" required className="h-12" />
                      </div>

                      <div>
                        <Label htmlFor="message" className="mb-2">Message *</Label>
                        <Textarea id="message" required rows={6} className="resize-none" />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg py-7 rounded-2xl group"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </form>
                  </div>
                </motion.div>

                {/* Map & Additional Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Map */}
                  <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl overflow-hidden">
                    <div className="aspect-video relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8!2d79.5!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ1JzAwLjAiTiA3OcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890&q=65%2F65%2C+Trichy+Main+Road%2C+Nathamedu%2C+Pidagam%2C+Villupuram%2C+Tamil+Nadu%2C+605401"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Adiban Aviation Office Location"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg mb-2">Our Location</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Adiban Aviation Private Limited<br />
                            65/65, Trichy Main Road, Nathamedu,<br />
                            Pidagam, Villupuram, Tamil Nadu, 605401
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info Card */}
                  <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8">
                    <h3 className="text-2xl font-display font-bold mb-6">Quick Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-semibold mb-1">Response Time</p>
                          <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-display font-semibold mb-1">Preferred Method</p>
                          <p className="text-sm text-muted-foreground">Email or phone for urgent matters</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 relative overflow-hidden" aria-label="Call to Action">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 relative z-10"
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm font-display font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    READY TO START
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Whether you have a question about our products, services, or want to discuss a project, we're here to help.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:+918903501042">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Call Us Now
                      <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </a>
                  <a href="mailto:contact@adibanaviation.in">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Send Email
                      <Mail className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
