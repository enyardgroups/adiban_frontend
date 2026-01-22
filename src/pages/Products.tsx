import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Rocket, Sparkles, CheckCircle2, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import uavImage from "@/assets/uav-flight.jpg";
import testRigs from "@/assets/testrigs.jpg";
import hardwareImage from "@/assets/hardware-tech.jpg";
import { useSEO } from "@/hooks/useSEO";

const Products = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Products - Adiban Aviation | UAV Systems, Hardware & Testing Solutions",
    description: "Explore Adiban Aviation's comprehensive product range: UAV systems (FPV, Agricultural, Logistics drones), aerospace hardware (BEC, Power Modules, PDB), and Test Rigs testing solutions. Made in India, aerospace-grade quality.",
    keywords: "Adiban Aviation products, UAV systems India, drone products, aerospace hardware, test rigs, FPV drones, agricultural drones, logistics drones, BEC power module, PDB, GPS test module, power monitor, battery health checker, servo ESC tester, drone gimbal rig, Indian drone manufacturer",
    canonical: "https://adibanaviation.com/products",
    ogImage: "https://adibanaviation.com/products-og-image.jpg",
    ogType: "website"
  });

  const categories = [
    {
      title: "UAV Systems",
      slug: "uav",
      description: "Next-generation autonomous flight systems engineered for diverse applications including defense, agriculture, and logistics",
      image: uavImage,
      subcategories: [
        { name: "FPV Drones", classification: "UAV System" },
        { name: "Agricultural UAVs", classification: "UAV System" },
        { name: "Logistics Drones", classification: "UAV System" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: Rocket,
      stats: { projects: "200+", reliability: "99.9%" },
      features: ["Advanced Flight Control", "Precision Navigation", "Long Endurance"]
    },
    {
      title: "Test Rigs",
      slug: "testrix",
      description: "Precision testing & validation systems for mission-critical aerospace components and flight systems",
      image: testRigs,
      subcategories: [
        { name: "Drone Gimbal Rig", classification: "Test Rig" },
        { name: "Flight Test Systems", classification: "Test Rig" },
        { name: "Quality Assurance Tools", classification: "Test Rig" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: Award,
      stats: { accuracy: "99.99%", tests: "1000+" },
      features: ["Multi-Axis Testing", "Real-Time Analysis", "Aerospace Standards"]
    },
    {
      title: "Hardware Systems",
      slug: "hardware",
      description: "Aerospace-grade electronic components and avionic solutions engineered for reliability and performance",
      image: hardwareImage,
      subcategories: [
        { name: "BEC", classification: "Hardware Component" },
        { name: "Power Modules", classification: "Hardware Component" },
        { name: "PDB", classification: "Hardware Component" },
        { name: "Servo Testers", classification: "Hardware Component" },
        { name: "Strobe Lights", classification: "Hardware Component" }
      ],
      gradient: "from-cyan-500 to-blue-600",
      icon: Zap,
      stats: { components: "15+", quality: "100%" },
      features: ["Aerospace-Grade", "High Efficiency", "Mission-Critical"]
    },
  ];

  const productPhilosophy = [
    {
      title: "Precision Engineering",
      description: "Every product is meticulously designed and tested to meet the highest aerospace standards",
      icon: CheckCircle2
    },
    {
      title: "Reliability First",
      description: "Built for mission-critical applications where failure is not an option",
      icon: Award
    },
    {
      title: "Innovation Driven",
      description: "Continuously pushing boundaries with cutting-edge technology and R&D",
      icon: Sparkles
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Innovative Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[80vh] flex items-center overflow-hidden pt-20"
          aria-label="Products Hero"
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
                    <Rocket className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    OUR PRODUCTS
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6">
                  <span className="block text-foreground">Innovative</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Solutions
                  </span>
                  <span className="block text-foreground">for Tomorrow</span>
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
                  Designed to deliver consistent and reliable performance across diverse applications. Engineered with precision for smooth operation and long-term durability. <Link to="/about" className="text-primary hover:underline font-semibold">Made in India</Link> with aerospace-grade quality.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Product Categories - Creative Grid */}
          <section className="py-32 relative overflow-hidden" aria-label="Product Categories">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <Link to={`/products/${category.slug}`}>
                      <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full hover:shadow-float">
                        {/* Image Section */}
                        <div className={`relative aspect-[4/3] overflow-hidden ${
                          category.title === "Test Rigs" ? "bg-gradient-to-br from-blue-50 to-cyan-50" : ""
                        }`}>
                          <motion.img 
                            src={category.image} 
                            alt={`${category.title} - ${category.description} by Adiban Aviation`}
                            className={`w-full h-full ${
                              category.title === "Test Rigs" ? "object-contain p-4" : "object-cover"
                            }`}
                            whileHover={{ scale: category.title === "Test Rigs" ? 1.05 : 1.1 }}
                            transition={{ duration: 0.6 }}
                            loading="lazy"
                            width="800"
                            height="600"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                          
                          {/* Floating Stats Badge */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="absolute top-4 right-4 bg-card/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-3 shadow-xl"
                          >
                            <div className="flex items-center gap-2">
                              <category.icon className="w-5 h-5 text-primary" />
                              <div className="text-sm">
                                <div className="font-display font-bold text-primary">
                                  {Object.values(category.stats)[0]}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                              <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-display font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                              {category.title}
                            </h2>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {category.description}
                          </p>

                          {/* Features List */}
                          <div className="mb-6 space-y-2">
                            {category.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Subcategories */}
                          <div className="mb-6">
                            <p className="text-sm font-display font-semibold text-primary mb-2">Product Lines:</p>
                            <div className="flex flex-wrap gap-2">
                              {category.subcategories.map((sub) => (
                                <div key={typeof sub === 'string' ? sub : sub.name} className="flex flex-col gap-1.5">
                                  <div className="flex items-center gap-2">
                                    <span 
                                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-semibold"
                                    >
                                      {typeof sub === 'string' ? sub : sub.name}
                                    </span>
                                  </div>
                                  {typeof sub === 'object' && sub.classification && (
                                    <span className="text-[10px] text-muted-foreground px-3 italic">
                                      Classification: {sub.classification}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center text-primary font-display font-semibold group-hover:gap-2 transition-all">
                            Explore {category.title}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Accessories Section - 3D Flip Cards */}
          <section className="py-32 relative overflow-hidden" aria-label="Accessories">
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
                  ACCESSORIES
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Essential{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Accessories
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Quality accessories to complement your UAV systems
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Battery Strap Belt",
                    image: null, // Add image path here when available
                    description: "Secure and reliable battery strap belt designed for safe battery mounting on UAV platforms. Made from high-quality materials to ensure durability and consistent performance during flight operations.",
                    gradient: "from-blue-500 to-cyan-500",
                    features: ["Durable Material", "Secure Fastening", "Weather Resistant", "Multiple Sizes Available"]
                  },
                  {
                    name: "Transmitter Neck Strap",
                    image: null, // Add image path here when available
                    description: "Comfortable and adjustable transmitter neck strap for extended flight sessions. Ergonomically designed to reduce fatigue and provide secure transmitter handling during operations.",
                    gradient: "from-purple-500 to-blue-500",
                    features: ["Adjustable Length", "Comfortable Design", "Secure Attachment", "Lightweight"]
                  },
                  {
                    name: "Propeller Nut Key",
                    image: null, // Add image path here when available
                    description: "Precision-engineered propeller nut key for safe and efficient propeller installation and removal. Designed to fit standard propeller nut sizes with optimal torque application.",
                    gradient: "from-cyan-500 to-blue-600",
                    features: ["Precision Fit", "Durable Construction", "Easy to Use", "Standard Sizes"]
                  }
                ].map((accessory, index) => (
                  <motion.div
                    key={accessory.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group perspective-1000 h-[400px]"
                  >
                    <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                      {/* Front of Card */}
                      <div className="absolute inset-0 backface-hidden bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-lg">
                        <div className={`absolute inset-0 bg-gradient-to-br ${accessory.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                          {/* Image Container */}
                          <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${accessory.gradient} opacity-20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 shadow-xl overflow-hidden`}>
                            {accessory.image ? (
                              <img 
                                src={accessory.image} 
                                alt={accessory.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                                <span className="text-muted-foreground/50 text-sm">Image Placeholder</span>
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-display font-bold mb-4 text-center">{accessory.name}</h3>
                          
                          <div className="mt-auto">
                            <span className="text-sm text-muted-foreground">Hover to see details</span>
                          </div>
                        </div>
                      </div>

                      {/* Back of Card */}
                      <div className="absolute inset-0 backface-hidden bg-card border-2 border-primary/40 rounded-3xl overflow-hidden [transform:rotateY(180deg)] shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${accessory.gradient} opacity-5`} />
                        
                        <div className="relative z-10 h-full flex flex-col p-8">
                          <h3 className="text-2xl font-display font-bold mb-4 text-center">{accessory.name}</h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-sm text-center flex-grow">
                            {accessory.description}
                          </p>
                          
                          <div className="space-y-2">
                            <p className="text-sm font-display font-semibold text-primary mb-2">Features:</p>
                            {accessory.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Philosophy - Creative Layout */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Product Philosophy">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Engineering{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our product development
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {productPhilosophy.map((philosophy, index) => (
                  <motion.div
                    key={philosophy.title}
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
                          <philosophy.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-3">{philosophy.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{philosophy.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Product Excellence - Innovative Split Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 max-w-7xl mx-auto"
              >
                <div className="relative">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl" />
                  
                  {/* Main Content Container */}
                  <div className="relative bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl overflow-hidden">
                    {/* Header Section with Gradient */}
                    <div className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 md:p-12 border-b-2 border-border">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                          className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6"
                        >
                          PRODUCT EXCELLENCE
                        </motion.span>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                          <span className="text-foreground">Engineering</span>{" "}
                          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            Excellence
                          </span>
                        </h3>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "150px" }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          viewport={{ once: true }}
                          className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
                        />
                      </motion.div>
                    </div>

                    {/* Content Grid - Split Layout */}
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left Side - Text Content with Floating Elements */}
                      <div className="p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
                        <div className="relative z-10 space-y-6">
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-lg text-muted-foreground leading-relaxed"
                          >
                            <p className="mb-6">
                              Our products are designed to deliver <span className="text-foreground font-semibold">consistent and reliable performance</span> across diverse applications. Engineered with precision, they ensure smooth operation and long-term durability. Their user-friendly designs make integration and usage effortless for any workflow.
                            </p>
                            <p>
                              We combine innovation with practicality to meet modern industry demands. Crafted with quality materials and{" "}
                              <Link to="/about" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">
                                in-house manufacturing
                                <motion.span
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  →
                                </motion.span>
                              </Link>
                              , our products stand as dependable solutions for professionals in{" "}
                              <Link to="/services" className="text-accent hover:underline font-semibold inline-flex items-center gap-1">
                                defense, agriculture, logistics, and research sectors
                                <motion.span
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                >
                                  →
                                </motion.span>
                              </Link>
                              .
                            </p>
                          </motion.div>

                          {/* Feature Highlights */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 pt-6"
                          >
                            {[
                              { label: "Reliability", value: "99.9%" },
                              { label: "Projects", value: "10+" },
                            ].map((stat, i) => (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center"
                              >
                                <div className="text-2xl font-display font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">{stat.label}</div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>

                      {/* Right Side - Visual Elements with Quote */}
                      <div className="p-8 md:p-12 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
                        <div className="relative z-10 h-full flex flex-col justify-center">
                          {/* Decorative Quote Mark */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                            className="text-[120px] md:text-[150px] font-display font-bold leading-none text-primary/10 mb-4"
                          >
                            "
                          </motion.div>
                          
                          {/* Highlighted Quote */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                          >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                            <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 md:p-8">
                              <p className="text-xl md:text-2xl font-display font-bold leading-relaxed bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Every product reflects our commitment to{" "}
                                <span className="text-foreground">engineering excellence</span> and{" "}
                                <span className="text-foreground">operational efficiency</span>.
                              </p>
                            </div>
                          </motion.div>

                          {/* Floating Icons */}
                          <div className="absolute top-8 right-8 flex gap-2">
                            {[Award, CheckCircle2, Zap].map((Icon, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                                viewport={{ once: true }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                    Explore
                  </span>{" "}
                  Our Solutions?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Discover how our innovative products can meet your specific requirements. <Link to="/contact" className="text-primary hover:underline font-semibold">Get in touch</Link> with our team to discuss your needs.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                      View Services
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

export default Products;
