import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award, Rocket, Shield, Zap, Users, ArrowRight, Quote, Sparkles, Plane, TrendingUp, CheckCircle2, Flag, Compass, Navigation, Globe, MapPin, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/about sec Aircraft.png";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // SEO Optimization
  useSEO({
    title: "About Us - Adiban Aviation | Engineering Excellence in Indian Aerospace Technology",
    description: "Learn about Adiban Aviation Private Limited - an Indian aerospace technology company focused on building reliable unmanned systems, avionics hardware, and advanced engineering solutions. Discover our engineering-first approach, OEM capabilities, and commitment to Make in India principles. Specializing in UAV platforms, aerospace electronics, CAD/CAM, FEA/CFD, and DGCA compliance.",
    keywords: "Adiban Aviation about, Indian aerospace technology company, unmanned systems India, UAV manufacturer, avionics hardware, aerospace engineering solutions, OEM aerospace India, CAD/CAM services, FEA/CFD analysis, DGCA compliance, type certification, Make in India aerospace, embedded systems, aerospace electronics, UAV platforms, engineering-first approach",
    canonical: "https://adibanaviation.com/about",
    ogImage: "https://adibanaviation.com/about-og-image.jpg",
    ogType: "website"
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced Structured Data for SEO
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Adiban Aviation Private Limited",
      "alternateName": "Adiban Aviation",
      "url": "https://adibanaviation.com",
      "logo": "https://adibanaviation.com/logo.png",
      "description": "Adiban Aviation Pvt. Ltd. is an Indian aerospace technology company focused on building reliable unmanned systems, avionics hardware, and advanced engineering solutions. Guided by an engineering-first mindset and Make in India principles, we develop technologies that are practical, dependable, and ready for real-world aviation use.",
      "foundingDate": "2014",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65/65, Trichy Main Road, Nathamedu, Pidagam",
        "addressLocality": "Villupuram",
        "addressRegion": "Tamil Nadu",
        "postalCode": "605401",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8903501042",
        "email": "contact@adibanaviation.in",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/adiban-aviation",
        "https://www.instagram.com/adiban_aviation"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "15+"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    }
  };

  const visionMission = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a global leader in UAV innovation and shape the future of aerial solutions. We envision a world where unmanned aviation technology transforms industries, enhances safety, and creates new possibilities for human progress. We aim to establish Adiban Aviation as a trusted and innovative aerospace technology company with global presence, recognized worldwide for engineering excellence and commitment to the \"Make in India\" initiative.",
      color: "from-blue-500 to-cyan-500",
      stat: "Global"
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative technologies that make the drone industry safer, smarter, and more efficient. We are committed to developing high-performance UAV systems that meet the evolving needs of defense, agriculture, logistics, and research sectors. Through continuous innovation, rigorous quality standards, and customer-centric approach, we strive to exceed expectations and set new benchmarks in aerospace engineering.",
      color: "from-cyan-500 to-blue-500",
      stat: "Excellence"
    },
  ];

  const companyValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations.",
      color: "from-blue-500 to-cyan-500",
      stat: "100%"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push boundaries and embrace cutting-edge technology to deliver breakthrough solutions.",
      color: "from-cyan-500 to-blue-500",
      stat: "35%"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring quality and reliability in all our deliverables.",
      color: "from-purple-500 to-blue-500",
      stat: "50+"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients and stakeholders.",
      color: "from-blue-600 to-purple-500",
      stat: "10+"
    },
  ];

  const milestones = [
    { year: "Founded", title: "Founded", description: "Established with a focus on indigenous aerospace engineering and unmanned systems development." },
    { year: "First Systems", title: "First Systems Built", description: "Designed and developed early UAV platforms and aerospace subsystems through hands-on prototyping." },
    { year: "Engineering", title: "Engineering Maturity", description: "Strengthened internal capabilities across CAD/CAM, FEA/CFD, electronics, and embedded systems." },
    { year: "Compliance", title: "Compliance-Ready Development", description: "Evolved design and validation practices with an understanding of regulatory and certification pathways." },
    { year: "Experience", title: "Operational Experience", description: "Delivered multiple engineering and unmanned system solutions across varied real-world applications." },
    { year: "Forward", title: "Continuing Forward", description: "Advancing reliable, indigenous aerospace technologies through disciplined engineering and iteration." },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />

      <div className="min-h-screen bg-background">
      <Navbar />
      
        {/* Innovative Hero Section with Split Design */}
        <section 
          ref={heroRef} 
          className="relative min-h-screen flex items-center overflow-hidden pt-20"
          aria-label="About Us Hero"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 mesh-gradient"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                opacity
              }}
            />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          {/* Animated Geometric Shapes */}
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
          <motion.div 
            className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"
            animate={{ 
              rotate: [0, 180, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
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
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    ABOUT ADIBAN AVIATION
                  </span>
                </motion.div>

                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="block text-foreground">Shaping the</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Future
                  </span>
                  <span className="block text-foreground">of Aviation</span>
                </motion.h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
                
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Building a premier <Link to="/products" className="text-primary hover:underline font-semibold">Aerospace & Defense technology company</Link> with global presence through innovation, precision engineering, and unwavering commitment to excellence.
                </motion.p>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {[
                    { value: "10+", label: "Projects", icon: Rocket },
                    { value: "2+", label: "Years", icon: Award },
                  ].map((stat, i) => (
          <motion.div
                      key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
          >
                      <stat.icon className="w-6 h-6 text-primary mb-2" />
                      <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image with 3D Effect */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="relative"
              >
                <motion.div 
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
                    scale,
                    y
                  }}
                >
                  <motion.img 
                    src={heroImage} 
                    alt="Adiban Aviation Engineer - Professional woman engineer working with holographic drone design displays, UAV components, and aerospace technology at advanced development workstation"
                    className="w-full h-full object-contain p-8"
                    loading="eager"
                    width="800"
                    height="1000"
                  />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute bottom-8 right-8 bg-card/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-4 shadow-2xl z-10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold text-primary">Made in</div>
                        <div className="text-lg font-display font-bold text-accent">India</div>
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
        </section>

        <main>
          {/* Our Story Section - Creative Split Layout */}
          <section className="py-32 relative overflow-hidden" aria-label="Our Story">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left - Content */}
          <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6">
                    OUR STORY
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
                    Engineering{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Excellence
                    </span>
                    , Built with Purpose
                  </h2>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Adiban Aviation Private Limited</strong> is an Indian <Link to="/products" className="text-primary hover:underline font-semibold">aerospace technology company</Link> focused on building reliable <Link to="/products/uav" className="text-primary hover:underline font-semibold">unmanned systems</Link>, <Link to="/products/hardware" className="text-primary hover:underline font-semibold">avionics hardware</Link>, and advanced engineering solutions. Guided by an engineering-first mindset and <strong className="text-foreground">Make in India</strong> principles, we work to develop technologies that are practical, dependable, and ready for real-world aviation use.
                    </p>
                    
                    <p>
                      From the beginning, Adiban Aviation has followed an <strong className="text-foreground">OEM-led approach</strong>, developing strong in-house capabilities across <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV platforms</Link>, aerospace electronics, embedded systems, and supporting engineering services. Our work spans design and manufacturability (<Link to="/services" className="text-primary hover:underline font-semibold">CAD/CAM</Link>), engineering analysis and validation (<Link to="/services" className="text-primary hover:underline font-semibold">FEA/CFD</Link>), hardware development, system integration, and compliance-oriented technical documentation.
                    </p>
                    
                    <p>
                      We design with a clear understanding of <strong className="text-foreground">DGCA regulatory frameworks</strong> and <Link to="/services" className="text-primary hover:underline font-semibold">UAV type certification pathways</Link>, ensuring that safety, compliance, and long-term readiness are considered early in the engineering process. This approach allows us to build systems thoughtfully, without shortcuts or retroactive fixes.
                    </p>
                    
                    <p>
                      With in-house development and manufacturing facilities in <strong className="text-foreground">Tamil Nadu</strong>, we maintain close control over design iterations, quality, testing, and validation. Continuous investment in research and engineering helps us improve steadily across UAV subsystems, aerospace components, and product development processes.
                    </p>
                    
                    <p>
                      At Adiban Aviation, we focus on doing the fundamentals right — <strong className="text-foreground">disciplined engineering</strong>, indigenous capability development, and systems built to perform reliably in demanding environments. Our goal is to contribute meaningfully to the global unmanned aviation ecosystem through responsible innovation and well-engineered solutions.
                    </p>
                  </div>
          </motion.div>

                {/* Right - Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-8">
                    <h3 className="text-2xl font-display font-bold mb-8 text-center">Our Journey</h3>
                    <div className="space-y-6">
                      {milestones.map((milestone, index) => (
            <motion.div
                          key={milestone.title}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex gap-4 relative"
                        >
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                              <Rocket className="w-6 h-6 text-white" />
                            </div>
                            {index < milestones.length - 1 && (
                              <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-accent/30 mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <h4 className="font-display font-bold text-lg mb-1">{milestone.title}</h4>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Vision & Mission - Innovative 3D Split Design */}
          <section className="py-32 relative overflow-hidden" aria-label="Vision and Mission">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 bg-[length:200%_200%]"
              />
              <div className="absolute inset-0 grid-pattern opacity-10" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6">
                  OUR FOUNDATION
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Vision &{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                {/* Mission - Left Side with 3D Effect */}
                <motion.div
                  initial={{ opacity: 0, x: -100, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="group perspective-1000"
                >
                  <div className="relative h-full">
                    {/* 3D Card Container */}
                    <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden h-full transform-gpu group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.3)] transition-all duration-500">
                      {/* Animated Gradient Overlay */}
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Floating Particles */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-primary/30"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      <div className="relative z-10">
                        {/* Icon with Glow Effect */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-lg relative"
                        >
                          <Target className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-white" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-blue-600 blur-xl -z-10"
                          />
                        </motion.div>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                          Our Mission
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">
                          To deliver innovative technologies that make the drone industry safer, smarter, and more efficient.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                          We develop high-performance UAV systems and aerospace hardware, setting new benchmarks through continuous innovation and rigorous quality standards.
                        </p>
                        
                        {/* Decorative Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          viewport={{ once: true }}
                          className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-8"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Vision - Right Side with 3D Effect */}
                <motion.div
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group perspective-1000"
                >
                  <div className="relative h-full">
                    {/* 3D Card Container */}
                    <div className="relative bg-card border-2 border-accent/20 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden h-full transform-gpu group-hover:shadow-[0_30px_60px_rgba(6,182,212,0.3)] transition-all duration-500">
                      {/* Animated Gradient Overlay */}
                      <motion.div
                        animate={{
                          backgroundPosition: ["100% 100%", "0% 0%"],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Floating Particles */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-accent/30"
                          style={{
                            right: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      <div className="relative z-10">
                        {/* Icon with Glow Effect */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-2xl md:rounded-3xl bg-gradient-to-br from-accent to-cyan-500 flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-lg relative"
                        >
                          <Lightbulb className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-white" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent to-cyan-500 blur-xl -z-10"
                          />
                        </motion.div>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
                          Our Vision
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">
                          To be a global leader in UAV innovation, transforming industries and enhancing safety through cutting-edge aerial solutions.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                          We aim to be a trusted aerospace technology company with global presence, recognized worldwide for engineering excellence and commitment to "Make in India."
                        </p>
                        
                        {/* Decorative Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.7, duration: 0.8 }}
                          viewport={{ once: true }}
                          className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-8"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Company Values - Creative Grid with Stats */}
          <section className="py-32 relative overflow-hidden" aria-label="Company Values">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 mesh-gradient opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-semibold text-sm mb-6">
                  OUR VALUES
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  What{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Drives Us
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The core principles that guide everything we do
              </p>
            </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {companyValues.map((value, index) => (
            <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, rotateY: 5, transition: { duration: 0.3 } }}
                    className="group perspective-1000"
                  >
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float transform-gpu">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <value.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-4xl font-display font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {value.stat}
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {value.description}
                          {value.title === "Innovation" && (
                            <> Explore our <Link to="/services" className="text-primary hover:underline font-semibold">innovative services</Link>.</>
                          )}
                          {value.title === "Excellence" && (
                            <> View our <Link to="/products" className="text-primary hover:underline font-semibold">excellent products</Link>.</>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote Section - Ultra Creative Design */}
          <section className="py-32 relative overflow-hidden" aria-label="Company Quote">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                {/* Asymmetric Creative Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left Side - Large Decorative Quote Mark */}
                  <motion.div
                    initial={{ opacity: 0, x: -100, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 hidden lg:block"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[200px] md:text-[300px] font-display font-bold leading-none bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 bg-clip-text text-transparent select-none"
                      >
                        "
            </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 rounded-full border-4 border-primary/20"
                        />
                      </div>
          </div>
                  </motion.div>

                  {/* Center - Main Quote Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-9 relative"
                  >
                    <div className="relative bg-card/80 backdrop-blur-md border-2 border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      
                      {/* Floating Particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-primary/30"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.5, 1]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      <div className="relative z-10">
                        {/* Top Quote Icon - Mobile Visible */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          viewport={{ once: true }}
                          className="lg:hidden mb-8 flex justify-center"
                        >
                          <div className="relative">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                            >
                              <Quote className="w-12 h-12 text-white" />
                            </motion.div>
          <motion.div
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"
                            />
                          </div>
                        </motion.div>

                        {/* Quote Text with Creative Typography */}
                        <blockquote className="relative">
                          {/* Opening Quote Mark - Inline */}
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute -top-4 -left-4 text-6xl md:text-8xl font-display font-bold text-primary/20 leading-none hidden lg:block"
                          >
                            "
                          </motion.span>
                          
                          <motion.p
            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-6 relative z-10"
                          >
                            <span className="text-foreground">At Adiban Aviation, we're not just building drones — we're shaping the</span>{" "}
                            <motion.span
                              animate={{
                                backgroundPosition: ["0%", "100%", "0%"]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] inline-block"
                            >
                              future
                            </motion.span>{" "}
                            <span className="text-foreground">of unmanned aviation globally.</span>
                          </motion.p>

                          {/* Closing Quote Mark */}
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute -bottom-8 -right-4 text-6xl md:text-8xl font-display font-bold text-accent/20 leading-none rotate-180 hidden lg:block"
                          >
                            "
                          </motion.span>
                        </blockquote>

                        {/* Attribution with Enhanced Design */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-center lg:justify-start gap-4 mt-12 pt-8 border-t border-border/50"
                        >
                          <div className="relative">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
          >
                              <Award className="w-7 h-7 text-white" />
                            </motion.div>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 blur-md"
                            />
                          </div>
                          <div>
                            <div className="font-display font-bold text-xl text-foreground">Adiban Aviation</div>
                            <div className="text-sm text-muted-foreground">Leading Aerospace Innovation</div>
                          </div>
                        </motion.div>

                        {/* Decorative Accent Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                        />
                      </div>
                    </div>
          </motion.div>
        </div>
      </div>
            </div>
          </section>

          {/* CTA Section - Enhanced */}
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
                    JOIN OUR JOURNEY
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Partner
                  </span>{" "}
                  with Us?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Discover our innovative <Link to="/products" className="text-primary hover:underline font-semibold">products</Link>, explore our comprehensive <Link to="/services" className="text-primary hover:underline font-semibold">services</Link>, or get in touch to discuss how we can help bring your vision to life.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                      Explore Products
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

export default About;
