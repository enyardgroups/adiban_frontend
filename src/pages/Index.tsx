import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plane, Zap, Shield, Globe, Sparkles, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-aviation.jpg";
import hardwareImage from "@/assets/hardware-tech.jpg";
import uavImage from "@/assets/uav-flight.jpg";
import testRigs from "@/assets/test-rigs.png";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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
      description: "100% Made in India excellence",
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
      title: "Testrix Solutions",
      description: "Precision testing & validation for mission-critical systems",
      image: testRigs,
      link: "/products/testrix",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Hardware Systems",
      description: "Aerospace-grade components & avionic solutions",
      image: hardwareImage,
      link: "/products/hardware",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 mesh-gradient"
          style={{ opacity }}
        />
        
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-display font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MADE IN INDIA
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.95]">
                Future of{" "}
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Unmanned Aviation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Pioneering aerospace & defence technology with high-performance UAV systems and precision engineering
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold group text-lg px-8 py-6">
                    Explore Innovation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-8 py-6">
                    Connect With Us
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: "10+", label: "Years Excellence" },
                  { value: "500+", label: "Projects Delivered" },
                  { value: "50+", label: "Expert Team" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden gradient-border shadow-2xl floating"
                style={{ scale }}
              >
                <img 
                  src={heroImage} 
                  alt="Advanced Aviation Technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 relative overflow-hidden">
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
              Combining innovation, precision engineering, and regulatory expertise to deliver world-class solutions
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
                  {/* Gradient Background on Hover */}
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

      {/* Products Section */}
      <section className="py-32 relative bg-secondary/30">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
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
              Cutting-edge solutions designed for exceptional performance and reliability
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
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                    {/* Content */}
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
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
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
              Partner with India's leading aerospace innovation company. Let's bring your vision to life with cutting-edge technology and unmatched expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
