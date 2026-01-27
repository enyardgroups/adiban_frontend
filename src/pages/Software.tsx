import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Monitor, Cpu, Database, ArrowRight, Sparkles, Rocket, Zap, Shield, CheckCircle2, Play, Download, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const Software = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedSoftware, setSelectedSoftware] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Software - Adiban Aviation | UAV Control Systems & Flight Management Software",
    description: "In-house developed software solutions for advanced drone operations and aerospace applications. Ground control stations, flight planning, real-time telemetry, and comprehensive UAV management systems.",
    keywords: "UAV software, drone control software, flight management system, ground control station, telemetry software, aerospace software, Adiban Aviation software, drone flight planning",
    canonical: "https://adibanaviation.com/software",
    ogImage: "https://adibanaviation.com/software-og-image.jpg",
    ogType: "website"
  });

  const softwareProducts = [
    {
      name: "Ground Control Station",
      description: "Comprehensive ground control interface for monitoring and managing UAV operations",
      features: ["Live Monitoring", "Data Visualization", "Command Interface", "Mission Control"],
      screenshot: "/api/placeholder/1200/800"
    },
  ];

  const features = [
    {
      icon: Code,
      title: "Advanced Features",
      description: "State-of-the-art functionality designed for professional aviation applications",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Intuitive Interface",
      description: "User-friendly designs for seamless integration into your workflow",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Optimized for speed and reliability in mission-critical operations",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Technical Capabilities",
      description: "Comprehensive toolset for flight control, data analysis, and system management",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  const capabilities = [
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and reliability" },
    { icon: Zap, title: "Real-time Processing", description: "Low-latency data processing and control" },
    { icon: Layers, title: "Modular Architecture", description: "Scalable and extensible design" },
    { icon: CheckCircle2, title: "Certified Quality", description: "Tested and validated for aerospace use" },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Innovative Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[80vh] flex items-center overflow-hidden pt-20"
          aria-label="Software Hero"
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
                    <Code className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    OUR SOFTWARE
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6">
                  <span className="block text-foreground">Advanced</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Software
                  </span>
                  <span className="block text-foreground">Solutions</span>
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
                  In-house developed software solutions for advanced drone operations and aerospace applications. Built with cutting-edge technologies and designed with aerospace standards in mind.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Software Showcase with Laptop Layout */}
          <section className="py-32 relative overflow-hidden" aria-label="Software Showcase">
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
                  SOFTWARE SUITE
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Software Products
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive software ecosystem for UAV operations and management
                </p>
              </motion.div>


              {/* Laptop Layout with Screenshot */}
              <div className="max-w-6xl mx-auto">
                <motion.div
                  key={selectedSoftware}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Laptop Frame */}
                  <div className="relative bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Laptop Top Bar */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div className="w-32 h-1.5 bg-border rounded-full" />
                      </div>
                    </div>

                    {/* Laptop Screen */}
                    <div className="relative bg-background rounded-2xl overflow-hidden border-4 border-border shadow-2xl">
                      {/* Screen Content */}
                      <div className="aspect-video relative">
                        {/* Placeholder for screenshot - Replace with actual images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center">
                          <div className="text-center p-8">
                            <Monitor className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                            <p className="text-muted-foreground font-display font-semibold">
                              {softwareProducts[selectedSoftware].name} Screenshot
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              Replace with actual software screenshot
                            </p>
                          </div>
                        </div>
                        
                        {/* You can replace the above div with an actual image:
                        <img 
                          src={softwareProducts[selectedSoftware].screenshot} 
                          alt={`${softwareProducts[selectedSoftware].name} interface`}
                          className="w-full h-full object-cover"
                        />
                        */}
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-3/4 h-2 bg-border rounded-b-2xl" />
                    </div>
                  </div>

                  {/* Software Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8"
                  >
                    <h3 className="text-3xl font-display font-bold mb-4 text-center">
                      {softwareProducts[selectedSoftware].name}
                    </h3>
                    <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                      {softwareProducts[selectedSoftware].description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {softwareProducts[selectedSoftware].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center"
                        >
                          <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-sm font-display font-semibold">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Features">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm mb-6">
                  KEY FEATURES
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Powerful{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Capabilities
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="py-32 relative overflow-hidden" aria-label="Capabilities">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                      Software{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Overview
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      Our proprietary software solutions are developed in-house to provide comprehensive control, 
                      monitoring, and analysis capabilities for UAV systems. Built with cutting-edge technologies 
                      and designed with aerospace standards in mind.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {capabilities.map((capability, index) => (
                      <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <capability.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg mb-2">{capability.title}</h3>
                          <p className="text-muted-foreground text-sm">{capability.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    From ground control stations to flight planning and real-time telemetry, our software 
                    ecosystem ensures maximum efficiency and safety in your operations.
                  </p>
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
                    GET STARTED
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Interested in Our{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Software Solutions
                  </span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Request a demo or inquiry about our software capabilities and licensing options
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Request Demo
                      <Play className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Make Inquiry
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
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

export default Software;
