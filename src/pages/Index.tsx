import { motion } from "framer-motion";
import { ArrowRight, Plane, Cpu, Zap, Shield, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-aviation.jpg";
import hardwareImage from "@/assets/hardware-tech.jpg";
import uavImage from "@/assets/uav-flight.jpg";
import testRigs from "@/assets/test-rigs.png";

const Index = () => {
  const highlights = [
    { icon: Plane, title: "Indian OEM", description: "Aerospace & Defence Systems" },
    { icon: Shield, title: "Made in India", description: "Engineering Excellence" },
    { icon: Cpu, title: "Advanced R&D", description: "End-to-End Development" },
    { icon: Zap, title: "Rapid Prototyping", description: "In-House Manufacturing" },
    { icon: Globe, title: "Indigenisation", description: "Strong Focus on Local Production" },
    { icon: Target, title: "Trusted Partner", description: "Research, Defence & Innovation" },
  ];

  const products = [
    {
      title: "UAV Systems",
      description: "High-performance drones for FPV, Agriculture, and Logistics applications",
      image: uavImage,
      link: "/products/uav",
    },
    {
      title: "Test Rigs",
      description: "Precision testing solutions including Drone Gimbal Rigs and advanced test systems",
      image: testRigs,
      link: "/products/testrix",
    },
    {
      title: "Hardware",
      description: "Aerospace-grade components including BEC, Power Modules, and avionic systems",
      image: hardwareImage,
      link: "/products/hardware",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 diagonal-lines" />
        
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Advanced Aviation Technology" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-display font-semibold text-sm">
                MADE IN INDIA
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Shaping the Future of{" "}
              <span className="text-accent glow-text">Unmanned Aviation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Advanced aerospace & defense technology company developing high-performance drones and advanced UAV systems with precision engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold group">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 font-display font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Highlights */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Engineering <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining innovation, precision engineering, and regulatory expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 relative bg-card/30">
        <div className="absolute inset-0 diagonal-lines opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-accent">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dependable solutions designed for consistent and reliable performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={product.link}>
                  <div className="bg-card border border-border/40 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex items-center text-accent font-display font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Innovate with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the future of unmanned aviation. Explore our cutting-edge solutions and discover how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 font-display font-semibold">
                  View Careers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;