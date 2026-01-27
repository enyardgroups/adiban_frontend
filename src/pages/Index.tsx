import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Plane, Zap, Shield, Globe, Sparkles, Rocket, ChevronDown, Award, Users, Cpu, Factory, Boxes, Target, TrendingUp, CheckCircle2, MapPin, FileText, Layout, Settings, Activity, Code, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Gemini_Generated_Image_dbrffmdbrffmdbrf-Photoroom.png";
import hardwareImage from "@/assets/hardware-tech.jpg";
import uavImage from "@/assets/uav-flight.jpg";
import testRigs from "@/assets/test rig common pic.png";
import { useRef, useEffect, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    { 
      icon: Shield, 
      title: "Indian OEM", 
      description: "Leading aerospace & defence innovation",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Sparkles, 
      title: "Indigenisation", 
      description: "Make in India excellence",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      icon: Rocket, 
      title: "Advanced R&D", 
      description: "Cutting-edge research & development",
      color: "from-blue-600 to-purple-500"
    },
    { 
      icon: Zap, 
      title: "Rapid Prototyping", 
      description: "In-house manufacturing capabilities",
      color: "from-purple-500 to-blue-600"
    },
    { 
      icon: Globe, 
      title: "Global Standards", 
      description: "Aerospace-grade material expertise",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      icon: Plane, 
      title: "Trusted Partner", 
      description: "Serving research, defence & innovation",
      color: "from-blue-500 to-cyan-400"
    },
  ];

  const products = [
    {
      title: "UAV Systems",
      description: "Next-generation autonomous flight systems for diverse applications",
      image: uavImage,
      link: "/products/uav",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Test Rigs",
      description: "Precision testing & validation for mission-critical systems",
      image: testRigs,
      link: "/products/testrix",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hardware Systems",
      description: "Aerospace-grade UAV components and avionic solutions",
      image: hardwareImage,
      link: "/products/hardware",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  const capabilities = [
    { icon: Factory, label: "In-House Design & Development"},
    { icon: Cpu, label: "R&D Investment & Innovation"},
    { icon: Users, label: "Expert Engineers & Technicians"},
    { icon: Award, label: "Certifications & Accreditations"},
  ];

  const useCases = [
    {
      title: "Defence & Security",
      description: "Border surveillance, reconnaissance missions, and tactical operations",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Agriculture",
      description: "Precision farming, crop monitoring, and Agrochemical spraying",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logistics",
      description: "Last-mile delivery, warehouse automation, and cargo transport",
      icon: Boxes,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Research",
      description: "Scientific data collection, environmental monitoring, and academic studies",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
  ];

  const achievements = [
    { value: "10+", label: "Projects Delivered", icon: CheckCircle2 },
    { value: "2+", label: "Years Experience", icon: Award },
    { value: "15+", label: "Products / Components", icon: Users },
    { value: "15+", label: "States Covered", icon: MapPin },
  ];

  const services = [
    {
      title: "TC Documentation & Compliance Assistance",
      description: "Expert guidance through UAV type certification processes and regulatory compliance documentation",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Drone Design & Development",
      description: "Tailored UAV solutions designed to meet your specific mission requirements and operational needs",
      icon: Plane,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Hardware Design & Development",
      description: "Aerospace-grade hardware components engineered for reliability and performance",
      icon: Cpu,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Computer-Aided Design",
      description: "Advanced CAD solutions for precise modeling and design optimization",
      icon: Layout,
      color: "from-blue-600 to-purple-500"
    },
    {
      title: "Computer-Aided Manufacturing",
      description: "Precision manufacturing solutions leveraging cutting-edge CAM technologies",
      icon: Factory,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Finite Element Analysis / Computational Fluid Dynamics",
      description: "Advanced simulation and analysis for structural integrity and aerodynamic optimization",
      icon: Activity,
      color: "from-cyan-400 to-blue-600"
    },
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adiban Aviation Private Limited",
    "alternateName": "Adiban Aviation",
    "url": "https://adibanaviation.com",
    "logo": "https://adibanaviation.com/logo.png",
    "description": "Adiban Aviation Pvt. Ltd. is an emerging Aerospace & Defense technology company dedicated to developing high-performance drones and advanced UAV systems. We combine innovation, precision engineering, and regulatory expertise to deliver solutions that meet the highest standards of safety, reliability, and performance.",
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/adiban-aviation",
      "https://twitter.com/AdibanAviation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adiban Aviation",
    "url": "https://adibanaviation.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://adibanaviation.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Aerospace & Defense Technology Services",
    "provider": {
      "@type": "Organization",
      "name": "Adiban Aviation Private Limited"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aerospace Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
      
      {/* Revolutionary Hero Section */}
      <main>
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero Section">
        {/* Dynamic Background with Mouse Interaction */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 mesh-gradient"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        {/* Floating Geometric Shapes */}
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
        <motion.div 
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20"
          animate={{ 
            rotate: [0, 180, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Badge */}
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
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  MAKE IN INDIA
                </span>
              </motion.div>

              {/* Main Heading with Split Animation */}
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="block text-foreground">Redefining</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Aerial Innovation
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Engineering the future with autonomous <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV systems</Link>, precision <Link to="/products/hardware" className="text-primary hover:underline font-semibold">aerospace and defense solutions.</Link>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold group text-lg px-10 py-7 rounded-2xl">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-display font-semibold text-lg px-10 py-7 rounded-2xl backdrop-blur-sm">
                    Get Started
                  </Button>
                </Link>
              </motion.div>

              {/* Capabilities Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                {capabilities.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-display font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Image Container with 3D Effect */}
              <motion.div 
                className="relative w-full rounded-3xl overflow-hidden flex items-center justify-center"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
                  height: '100%',
                  minHeight: '600px'
                }}
              >
                <motion.img 
                  src={heroImage} 
                  alt="Adiban Aviation - Indian Aerospace & Defense UAV Technology - Woman engineer working with drones, robotic arms, and aerospace components" 
                  className="w-full h-auto max-h-[800px] object-contain"
                  loading="eager"
                  width="800"
                  height="1000"
                />
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-4 left-4 bg-card/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-4 shadow-2xl z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-primary">10+</div>
                      <div className="text-xs text-muted-foreground">Projects Delivered</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-md border-2 border-accent/30 rounded-2xl p-4 shadow-2xl z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-accent">2+</div>
                      <div className="text-xs text-muted-foreground">Years of Expertise</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-muted-foreground font-display">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </section>

      

      {/* Highlights Section */}
      <section className="py-32 relative overflow-hidden" aria-label="Why Choose Us - Engineering Excellence">
        <div className="absolute inset-0 diagonal-lines" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Engineering{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining innovation, precision engineering, and regulatory expertise to deliver world-class <Link to="/products" className="text-primary hover:underline font-semibold">Aerospace Solutions</Link>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-4">
                  WHO ARE WE
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                  Shaping the{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Unmanned Aviation
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Adiban Aviation Pvt. Ltd. is an emerging <Link to="/about" className="text-primary hover:underline font-semibold">Aerospace & Defence Technology Company</Link> dedicated to developing high-performance <Link to="/products/uav" className="text-primary hover:underline font-semibold">Drones and advanced UAV Systems</Link>. We combine Innovation, Precision Engineering, and Regulatory Expertise to deliver solutions that meet the highest standards of Safety, Reliability, and Performance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Guided by our vision to become a complete Drone Stack OEM, we specialise in <Link to="/services" className="text-primary hover:underline font-semibold">UAV Design, Development, Compliance Documentation, and Type Certification Assistance</Link>. Our Multidisciplinary Team brings together deep expertise in Aerodynamics, Avionics, Propulsion, and Systems Integration — ensuring every product reflects Engineering Excellence and Operational Efficiency.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-display font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                At Adiban Aviation, we're not just building Drones — we're shaping the Future of Unmanned Aviation globally.
              </motion.p>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Complete Drone Stack</h4>
                    <p className="text-sm text-muted-foreground">End-To-End OEM Solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Regulatory Expertise</h4>
                    <p className="text-sm text-muted-foreground">Type Certification Assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Multidisciplinary Team</h4>
                    <p className="text-sm text-muted-foreground">Aerodynamics To Avionics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-primary flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Engineering Excellence</h4>
                    <p className="text-sm text-muted-foreground">Operational Efficiency</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-8 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                
                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Plane className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">Aerospace Innovation</h3>
                      <p className="text-muted-foreground">Cutting-edge technology</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">Precision Engineering</h3>
                      <p className="text-muted-foreground">Highest quality standards</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">Safety & Reliability</h3>
                      <p className="text-muted-foreground">Mission-critical solutions</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-56 h-56 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Next-Gen Services Section */}
      <section className="py-32 relative overflow-hidden" aria-label="Our Services">
        <div className="absolute inset-0 diagonal-lines opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Next-Gen{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive <Link to="/services" className="text-primary hover:underline font-semibold">Aerospace Solutions</Link> from design to certification, delivering excellence at every stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description} <Link to="/services" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 relative bg-secondary/30" aria-label="UAV Applications and Use Cases">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm mb-4">
              APPLICATIONS
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Transforming{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Industries
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV systems</Link> and <Link to="/products" className="text-primary hover:underline font-semibold">Aerospace Solutions</Link> power critical operations across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-card border-2 border-border rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                  <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${useCase.color} opacity-10 blur-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 md:mb-6`}>
                      <useCase.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 relative" aria-label="Our Products and Solutions">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm mb-4">
              OUR SOLUTIONS
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Innovative{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge <Link to="/products" className="text-primary hover:underline font-semibold">Aerospace Solutions</Link> designed for exceptional performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Link to={product.link}>
                  <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full hover:shadow-float">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        src={product.image} 
                        alt={`${product.title} - ${product.description} by Adiban Aviation, Indian Aerospace & Defense Manufacturer`}
                        className={`w-full h-full ${
                          product.title === "Test Rigs" ? "object-cover" : "object-cover"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        loading="lazy"
                        width="800"
                        height="600"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-3xl font-display font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center text-primary font-display font-semibold group-hover:gap-2 transition-all">
                        Discover More
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

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 diagonal-lines opacity-40" />
        
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
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-display font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                JOIN THE FUTURE
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Ready to Innovate{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Together?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Partner with a global aerospace innovation company. Let's bring your vision to life with cutting-edge technology and unmatched expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                  Join Our Team
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

export default Index;
