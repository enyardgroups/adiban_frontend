import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Wind, Wifi, Rocket, CheckCircle2, Shield, Zap, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import uavImage from "@/assets/uav-flight.jpg";
import fpvImage from "@/assets/fpv.png";
import agriImage from "@/assets/agri.png";
import logisticsImage from "@/assets/logistics.png";
import { useSEO } from "@/hooks/useSEO";

const UAVProducts = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "UAV Systems - Adiban Aviation | FPV, Agricultural & Logistics Drones | Made in India",
    description: "Explore Adiban Aviation's advanced UAV systems: FPV drones for racing, Agricultural UAVs for precision farming, and Logistics drones for cargo delivery. 200+ projects delivered with 99.9% reliability. Indian drone manufacturer.",
    keywords: "UAV systems India, FPV drones, agricultural drones, logistics drones, unmanned aerial vehicles, Indian drone manufacturer, cargo drones, precision agriculture drones, racing drones, Adiban Aviation UAV",
    canonical: "https://adibanaviation.com/products/uav",
    ogImage: "https://adibanaviation.com/uav-og-image.jpg",
    ogType: "website"
  });

  const uavTypes = [
    {
      icon: Wifi,
      name: "FPV Drones",
      image: fpvImage,
      description: "First-person view drones engineered for high-speed maneuvering, immersive control, and precision flight in dynamic environments. Developed to support tactical missions, aerial reconnaissance, and rapid-response operations where agility and real-time visuals are crucial.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Low-Latency", "Agile", "Compact", "Durable"],
      applications: ["Recon", "Surveillance", "Rescue", "Racing"]
    },
    {
      icon: Wind,
      name: "Agricultural UAVs",
      image: agriImage,
      description: "Precision agriculture solutions for crop monitoring, spraying, and field analysis. Designed to optimize farming operations and increase crop yields.",
      gradient: "from-green-500 to-emerald-500",
      features: ["Precision Spraying", "Crop Monitoring", "Field Mapping", "Multi-Spectral Imaging"],
      applications: ["Crop Monitoring", "Agrochemical spraying", "Field Analysis", "Yield Optimization"]
    },
    {
      icon: Plane,
      name: "Logistics Drones",
      image: logisticsImage,
      description: "Heavy-lift cargo drones designed for efficient last-mile delivery and transportation. Built for commercial logistics and supply chain operations.",
      gradient: "from-purple-500 to-blue-500",
      features: ["Heavy Payload Capacity", "Long Range", "Autonomous Navigation", "Weather Resistant"],
      applications: ["Last-Mile Delivery", "Cargo Transport", "Emergency Supplies", "Medical Logistics"]
    },
  ];

  const technicalSpecs = [
    { label: "Flight Time", value: "Up to 60 min" },
    { label: "Range", value: "Up to 50 km" },
    { label: "Payload Capacity", value: "Up to 25 kg" },
    { label: "Reliability", value: "99.9%" },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced fail-safe systems and redundant components ensure maximum safety"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Cutting-edge avionics and propulsion systems for exceptional flight performance"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Type certified and compliant with international aviation standards"
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
          aria-label="UAV Systems Hero"
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
                    <Rocket className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    UAV SYSTEMS
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9]">
                  <span className="block text-foreground">Advanced</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    UAV Systems
                  </span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Unmanned Aerial Vehicles engineered for diverse applications with cutting-edge technology. <Link to="/products" className="text-primary hover:underline font-semibold">200+ successful projects</Link> delivered with <Link to="/about" className="text-primary hover:underline font-semibold">99.9% reliability</Link>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {technicalSpecs.slice(0, 2).map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                    >
                      <div className="text-2xl font-display font-bold text-primary">{spec.value}</div>
                      <div className="text-xs text-muted-foreground">{spec.label}</div>
                    </motion.div>
                  ))}
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
                    src={uavImage} 
                    alt="Adiban Aviation UAV Systems - Advanced Unmanned Aerial Vehicles for Defense, Agriculture, and Logistics Applications"
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
          {/* UAV Types - Enhanced Grid */}
          <section className="py-32 relative overflow-hidden" aria-label="UAV Types">
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
                  OUR UAV SYSTEMS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Diverse{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Applications
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Specialized UAV platforms designed for specific industry needs
                </p>
              </motion.div>

              <div className="space-y-24">
                {uavTypes.map((type, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                        !isEven ? "lg:grid-flow-dense" : ""
                      }`}>
                        {/* Image Section */}
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                          viewport={{ once: true }}
                          className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                        >
                          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-border">
                            <motion.img
                              src={type.image}
                              alt={`${type.name} - ${type.description} by Adiban Aviation`}
                              className="w-full h-auto object-contain p-8"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6 }}
                              loading="lazy"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                          </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                          viewport={{ once: true }}
                          className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                        >
                          <div className="relative bg-card border-2 border-border rounded-3xl p-8 lg:p-10 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                            <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <type.icon className="h-8 w-8 text-white" />
                              </div>
                              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{type.name}</h3>
                              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{type.description}</p>

                              {/* Features */}
                              <div className="mb-6 space-y-2">
                                <p className="text-sm font-display font-semibold text-primary mb-3">Key Features:</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {type.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Applications */}
                              <div>
                                <p className="text-sm font-display font-semibold text-accent mb-3">Applications:</p>
                                <div className="flex flex-wrap gap-2">
                                  {type.applications.map((app, i) => (
                                    <span 
                                      key={i}
                                      className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-semibold"
                                    >
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="UAV Advantages">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
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
                          <advantage.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-3">{advantage.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Excellence - Innovative 3D Card Design */}
          <section className="py-32 relative overflow-hidden" aria-label="Technical Excellence">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 mesh-gradient opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6"
                  >
                    TECHNICAL EXCELLENCE
                  </motion.span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                    <span className="text-foreground">Technical</span>{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                      Excellence
                    </span>
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "200px" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
                  />
                </motion.div>

                {/* Main Content - Asymmetric Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Side - Spec Cards in 2x2 Grid */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {technicalSpecs.map((spec, index) => (
                        <motion.div
                          key={spec.label}
                          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
                          className="group perspective-1000"
                        >
                          <div className="relative bg-card/80 backdrop-blur-md border-2 border-border rounded-2xl p-6 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Animated Background Pattern */}
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="absolute -top-10 -right-10 w-32 h-32 border-2 border-primary/10 rounded-full"
                            />
                            
                            <div className="relative z-10">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                              >
                                {spec.value}
                              </motion.div>
                              <div className="text-sm text-muted-foreground font-medium">{spec.label}</div>
                              
                              {/* Decorative Line */}
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Side - Content with Visual Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7"
                  >
                    <div className="relative bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12 overflow-hidden">
                      {/* Animated Background Elements */}
                      <motion.div
                        animate={{ 
                          x: [0, 100, 0],
                          y: [0, 50, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl"
                      />
                      <motion.div
                        animate={{ 
                          x: [0, -80, 0],
                          y: [0, -60, 0],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"
                      />
                      
                      <div className="relative z-10 space-y-6">
                        {/* First Paragraph */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-lg text-muted-foreground leading-relaxed"
                        >
                          Our UAV systems are built with{" "}
                          <Link to="/products/hardware" className="text-primary hover:underline font-semibold inline-flex items-center gap-1 group">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">aerospace-grade materials</span>
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-primary"
                            >
                              →
                            </motion.span>
                          </Link>{" "}
                          and cutting-edge avionics. Each platform is designed to deliver exceptional performance, reliability, and safety across various operational environments. From advanced flight control systems to precision sensors and communication modules, our UAVs integrate the latest technologies to meet the demanding requirements of modern applications.
                        </motion.p>

                        {/* Second Paragraph */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-lg text-muted-foreground leading-relaxed"
                        >
                          Every system undergoes rigorous{" "}
                          <Link to="/products/testrix" className="text-primary hover:underline font-semibold inline-flex items-center gap-1 group">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">testing and validation</span>
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                              className="text-primary"
                            >
                              →
                            </motion.span>
                          </Link>{" "}
                          to ensure compliance with international aviation standards. Our commitment to quality and innovation has made us a trusted partner for{" "}
                          <Link to="/services" className="text-accent hover:underline font-semibold inline-flex items-center gap-1 group">
                            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">defense, agriculture, logistics, and research sectors</span>
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                              className="text-accent"
                            >
                              →
                            </motion.span>
                          </Link>{" "}
                          across India.
                        </motion.p>

                        {/* Feature Icons Row */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex flex-wrap gap-4 pt-6 border-t border-border/50"
                        >
                          {[Shield, Zap, Award].map((Icon, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
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
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Deploy
                  </span>{" "}
                  UAV Solutions?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how our UAV systems can meet your specific requirements. <Link to="/contact" className="text-primary hover:underline font-semibold">Contact our team</Link> for custom solutions.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Get Quote
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

export default UAVProducts;
