import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Zap, Battery, Radio, Lightbulb, Rocket, CheckCircle2, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hardwareImage from "@/assets/hardware-tech.jpg";
import { useSEO } from "@/hooks/useSEO";

const HardwareProducts = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Aerospace Hardware - Adiban Aviation | BEC, Power Modules, PDB, Servo Testers | Made in India",
    description: "Explore Adiban Aviation's aerospace-grade hardware components: BEC (Battery Eliminator Circuit), Power Modules, PDB (Power Distribution Board), Servo Testers, and Strobe Lights. 50+ components, 100% quality assurance. Indian aerospace hardware manufacturer.",
    keywords: "aerospace hardware India, BEC power module, PDB power distribution board, servo tester, strobe lights aviation, aerospace components, avionics hardware, Indian hardware manufacturer, drone hardware components, Adiban Aviation hardware",
    canonical: "https://adibanaviation.com/products/hardware",
    ogImage: "https://adibanaviation.com/hardware-og-image.jpg",
    ogType: "website"
  });

  const hardwareItems = [
    {
      icon: Cpu,
      name: "BEC (Battery Eliminator Circuit)",
      description: "Precision voltage regulation for stable power delivery to flight control systems. Ensures consistent performance under varying load conditions.",
      gradient: "from-blue-500 to-cyan-500",
      specs: ["Input: 2S-6S LiPo", "Output: 5V/3A", "Efficiency: 95%+", "Protection: Overcurrent, Overvoltage"]
    },
    {
      icon: Zap,
      name: "Power Module",
      description: "High-efficiency power distribution modules for reliable UAV operations. Designed for mission-critical applications with advanced monitoring capabilities.",
      gradient: "from-cyan-500 to-blue-500",
      specs: ["Current Sensing", "Voltage Monitoring", "High Efficiency", "Compact Design"]
    },
    {
      icon: Battery,
      name: "PDB (Power Distribution Board)",
      description: "Advanced power distribution boards with integrated current sensing. Optimized for multi-rotor and fixed-wing applications.",
      gradient: "from-purple-500 to-blue-500",
      specs: ["Multi-Output", "Current Sensing", "Low Resistance", "Aerospace Grade"]
    },
    {
      icon: Radio,
      name: "Servo Tester",
      description: "Precision testing equipment for servo motor validation and calibration. Essential for quality assurance in servo-driven systems.",
      gradient: "from-blue-600 to-purple-500",
      specs: ["Multi-Channel", "PWM Control", "Real-Time Feedback", "Portable Design"]
    },
    {
      icon: Lightbulb,
      name: "Strobe Lights",
      description: "High-visibility aviation strobe lights for enhanced safety and compliance. Meets international aviation lighting standards.",
      gradient: "from-yellow-500 to-orange-500",
      specs: ["High Intensity", "Weather Resistant", "Low Power", "Long Range Visibility"]
    },
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: "Aerospace Standards",
      description: "All components meet rigorous aerospace quality standards and certifications"
    },
    {
      icon: Award,
      title: "100% Quality Tested",
      description: "Every component undergoes extensive testing before delivery"
    },
    {
      icon: CheckCircle2,
      title: "Reliability Guaranteed",
      description: "Designed for mission-critical applications with proven reliability"
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[70vh] flex items-center overflow-hidden pt-20"
          aria-label="Hardware Products Hero"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 mesh-gradient"
              style={{ opacity }}
            />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          {/* Animated Shapes */}
          <motion.div 
            className="absolute top-1/4 left-10 w-20 h-20 border-4 border-primary/30 rounded-xl"
            animate={{ 
              rotate: [0, 360],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-20 w-32 h-32 border-4 border-accent/30 rounded-full"
            animate={{ 
              rotate: [360, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    AEROSPACE HARDWARE
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9]">
                  <span className="block text-foreground">Precision</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Hardware
                  </span>
                  <span className="block text-foreground">Components</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Specialized aviation and electronic hardware components engineered to aerospace standards. <Link to="/about" className="text-primary hover:underline font-semibold">50+ components</Link> with <Link to="/products/testrix" className="text-primary hover:underline font-semibold">100% quality assurance</Link>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <div className="text-2xl font-display font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Components</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <div className="text-2xl font-display font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ y }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <motion.img 
                    src={hardwareImage} 
                    alt="Adiban Aviation Aerospace Hardware - BEC, Power Modules, PDB, Servo Testers, and Strobe Lights for UAV Systems"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Hardware Products Grid - Enhanced */}
          <section className="py-32 relative overflow-hidden" aria-label="Hardware Products">
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
                  OUR HARDWARE
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Aerospace{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Components
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Precision-engineered hardware for mission-critical applications
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hardwareItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3">{item.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{item.description}</p>

                        {/* Specifications */}
                        <div className="space-y-2">
                          <p className="text-sm font-display font-semibold text-primary mb-2">Key Specs:</p>
                          {item.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality Features */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Quality Features">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {qualityFeatures.map((feature, index) => (
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
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering Excellence */}
          <section className="py-32 relative overflow-hidden" aria-label="Engineering Excellence">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-8 md:p-12"
                >
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                    Engineering{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Excellence
                    </span>
                  </h2>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Our hardware components are designed and manufactured to meet rigorous <Link to="/services" className="text-primary hover:underline font-semibold">aerospace standards</Link>. Each product undergoes extensive <Link to="/products/testrix" className="text-primary hover:underline font-semibold">testing and quality control</Link> to ensure reliability in mission-critical applications. We utilize aerospace-grade materials and advanced manufacturing techniques to deliver components that offer superior performance, durability, and consistency.
                    </p>
                    <p>
                      From <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV power systems</Link> to precision testing equipment, our hardware solutions are trusted by professionals across <Link to="/about" className="text-primary hover:underline font-semibold">defense, agriculture, logistics, and research sectors</Link>. Every component is backed by our commitment to quality and innovation.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "Aerospace-grade component selection",
                      "Rigorous quality control processes",
                      "Enhanced reliability and durability",
                      "Compliance with aviation standards"
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Need Custom{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Hardware
                  </span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  We design and manufacture custom hardware solutions. <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> to discuss your requirements.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                      View All Products
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

export default HardwareProducts;
