import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Cpu, Ruler, Factory, Zap, Wind, ArrowRight, CheckCircle2, Sparkles, Rocket, Target, Shield, Code, Layers, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Services - Adiban Aviation | UAV Design, CAD/CAM, FEA/CFD & Type Certification",
    description: "Comprehensive aerospace services: Custom drone design, hardware development, CAD/CAM, FEA/CFD analysis, and type certification assistance. Expert engineering solutions for defense, agriculture, logistics, and research sectors.",
    keywords: "UAV design services, drone development, CAD services, CAM services, FEA analysis, CFD analysis, type certification, aerospace engineering services, hardware design, Adiban Aviation services",
    canonical: "https://adibanaviation.com/services",
    ogImage: "https://adibanaviation.com/services-og-image.jpg",
    ogType: "website"
  });

  const services = [
    {
      icon: Wrench,
      title: "TC Documentation & Compliance Assistance",
      description: "Expert guidance for type certification documentation and regulatory compliance for aerospace systems. We ensure your projects meet all international aviation standards.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Regulatory Compliance", "Documentation Support", "Certification Guidance", "Standards Alignment"],
      color: "blue"
    },
    {
      icon: Cpu,
      title: "Custom Drone Design & Development",
      description: "End-to-end drone design services tailored to your specific requirements and applications. From concept to production-ready solutions.",
      gradient: "from-purple-500 to-blue-500",
      features: ["Concept Development", "Prototype Design", "System Integration", "Production Ready"],
      color: "purple"
    },
    {
      icon: Factory,
      title: "Hardware Design & Development",
      description: "Specialized aviation and electronic hardware design with aerospace-grade precision. Mission-critical components for reliable operations.",
      gradient: "from-cyan-500 to-blue-600",
      features: ["Circuit Design", "PCB Development", "Component Selection", "Testing & Validation"],
      color: "cyan"
    },
    {
      icon: Ruler,
      title: "Computer-Aided Design",
      description: "Advanced CAD services for mechanical and structural design optimization. Precision engineering for optimal performance.",
      gradient: "from-green-500 to-emerald-500",
      features: ["3D Modeling", "Structural Analysis", "Design Optimization", "Technical Drawings"],
      color: "green"
    },
    {
      icon: Zap,
      title: "Computer-Aided Manufacturing",
      description: "Precision manufacturing solutions with state-of-the-art CAM technology. From design to finished product.",
      gradient: "from-orange-500 to-red-500",
      features: ["CNC Programming", "Toolpath Optimization", "Quality Control", "Production Planning"],
      color: "orange"
    },
    {
      icon: Wind,
      title: "Finite Element Analysis / CFD",
      description: "Computational fluid dynamics and structural analysis for optimal performance validation. Advanced simulation for aerospace applications.",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Structural FEA", "CFD Analysis", "Thermal Analysis", "Performance Validation"],
      color: "indigo"
    },
  ];

  const capabilities = [
    { icon: Target, title: "Precision Engineering", description: "Meticulous attention to detail in every project" },
    { icon: Shield, title: "Quality Assurance", description: "Rigorous testing and validation processes" },
    { icon: Code, title: "Innovation Driven", description: "Cutting-edge technology and methodologies" },
    { icon: Layers, title: "End-to-End Solutions", description: "Complete service from concept to delivery" },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Innovative Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[80vh] flex items-center overflow-hidden pt-20"
          aria-label="Services Hero"
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
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    OUR SERVICES
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6">
                  <span className="block text-foreground">Expert</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Engineering
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
                  Comprehensive aerospace services designed to support your innovation journey. From concept to certification, we deliver excellence at every stage.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Services Grid - Enhanced Design */}
          <section className="py-32 relative overflow-hidden" aria-label="Services">
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
                  WHAT WE OFFER
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Comprehensive{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  End-to-end solutions for your aerospace and UAV development needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Animated Background Pattern */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -right-10 w-32 h-32 border-2 border-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-display font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Arrow */}
                        <div className="flex items-center text-primary font-display font-semibold group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Capabilities">
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
                  OUR CAPABILITIES
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Adiban Aviation
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
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
                          <capability.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{capability.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-32 relative overflow-hidden" aria-label="Process">
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
                      Our{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Approach
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We follow a systematic approach to deliver exceptional results
                    </p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: "01", title: "Consultation", desc: "Understanding your requirements" },
                      { step: "02", title: "Design", desc: "Creating innovative solutions" },
                      { step: "03", title: "Development", desc: "Building with precision" },
                      { step: "04", title: "Delivery", desc: "Quality-assured results" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-display font-bold text-xl">{item.step}</span>
                        </div>
                        <h3 className="font-display font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Work Together
                  </span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how our services can help bring your aerospace projects to life. Request a consultation or get a quote today.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                      View Products
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

export default Services;
