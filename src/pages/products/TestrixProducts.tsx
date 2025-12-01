import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TestTube2, Gauge, CheckCircle, Rocket, Award, Shield, Zap, ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import testRigsImage from "@/assets/test-rigs.png";
import { useSEO } from "@/hooks/useSEO";

const TestrixProducts = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Testrix Solutions - Adiban Aviation | Drone Gimbal Rig & Testing Systems | Made in India",
    description: "Explore Adiban Aviation's Testrix testing solutions: Drone Gimbal Rig, Flight Test Systems, and Quality Assurance Tools. 99.99% accuracy, 1000+ tests performed. Precision validation for aerospace components.",
    keywords: "Testrix solutions, drone gimbal rig, flight test systems, quality assurance tools, aerospace testing, UAV testing equipment, drone testing rig, precision testing, Adiban Aviation testrix, Indian testing solutions",
    canonical: "https://adibanaviation.com/products/testrix",
    ogImage: "https://adibanaviation.com/testrix-og-image.jpg",
    ogType: "website"
  });

  const features = [
    {
      icon: TestTube2,
      title: "Precision Testing",
      description: "High-accuracy test rigs for drone component validation and quality assurance. Multi-axis testing capabilities with real-time data acquisition.",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Sub-millimeter Accuracy", "Multi-Axis Control", "Real-Time Monitoring", "Automated Testing"]
    },
    {
      icon: Gauge,
      title: "Performance Analysis",
      description: "Comprehensive data collection and analysis for flight systems optimization. Advanced analytics for performance metrics and system validation.",
      gradient: "from-cyan-500 to-blue-500",
      benefits: ["Data Logging", "Performance Metrics", "Trend Analysis", "Report Generation"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring aerospace-grade reliability standards. Compliance with international aviation testing requirements.",
      gradient: "from-purple-500 to-blue-500",
      benefits: ["Standards Compliance", "Quality Validation", "Certification Support", "Documentation"]
    },
  ];

  const testSystems = [
    {
      name: "Drone Gimbal Rig",
      description: "Flagship testing solution designed for comprehensive drone gimbal system validation. Precision-engineered for accurate assessment of gimbal performance, stability, and control under various conditions.",
      features: [
        "Multi-axis testing capabilities",
        "Real-time data acquisition",
        "Integration with analysis software",
        "Detailed performance metrics",
        "Environmental simulation"
      ]
    },
    {
      name: "Flight Test Systems",
      description: "Comprehensive UAV performance evaluation systems for flight testing and validation. Designed for both indoor and outdoor testing scenarios.",
      features: [
        "Flight parameter monitoring",
        "Autonomous flight testing",
        "Safety systems integration",
        "Data recording and analysis"
      ]
    },
    {
      name: "Avionics Testing Equipment",
      description: "Electronic systems validation equipment for avionics components. Ensures reliability and performance of critical electronic systems.",
      features: [
        "Circuit validation",
        "Signal integrity testing",
        "EMI/EMC compliance",
        "Environmental stress testing"
      ]
    },
    {
      name: "Quality Assurance Tools",
      description: "Manufacturing process verification tools for quality control. Ensures consistent production quality and compliance.",
      features: [
        "Process monitoring",
        "Quality metrics tracking",
        "Defect detection",
        "Statistical analysis"
      ]
    },
  ];

  const advantages = [
    {
      icon: Target,
      title: "99.99% Accuracy",
      description: "Precision testing with sub-millimeter accuracy for reliable validation"
    },
    {
      icon: Shield,
      title: "Aerospace Standards",
      description: "Compliant with international aviation testing and quality standards"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art testing equipment with real-time analysis capabilities"
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
          aria-label="Testrix Solutions Hero"
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
                    <TestTube2 className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    TESTRIX SOLUTIONS
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9]">
                  <span className="block text-foreground">Precision</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Testing
                  </span>
                  <span className="block text-foreground">Solutions</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Advanced testing systems for precision validation and quality assurance. <Link to="/about" className="text-primary hover:underline font-semibold">99.99% accuracy</Link> with <Link to="/products" className="text-primary hover:underline font-semibold">1000+ tests performed</Link>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <div className="text-2xl font-display font-bold text-primary">99.99%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <div className="text-2xl font-display font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Tests</div>
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
                <div className="relative rounded-3xl overflow-hidden bg-card border-2 border-border">
                  <motion.img 
                    src={testRigsImage} 
                    alt="Adiban Aviation Testrix Solutions - Drone Gimbal Rig and Precision Testing Equipment for Aerospace Components"
                    className="w-full h-auto rounded-3xl object-contain p-8"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Features Section */}
          <section className="py-32 relative overflow-hidden" aria-label="Testrix Features">
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
                  KEY FEATURES
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Advanced{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Capabilities
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive testing solutions for aerospace validation
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                        {/* Benefits */}
                        <div className="space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
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

          {/* Test Systems */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Test Systems">
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
                  TEST SYSTEMS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Comprehensive{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {testSystems.map((system, index) => (
                  <motion.div
                    key={system.name}
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
                        <h3 className="text-2xl font-display font-bold mb-4">{system.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{system.description}</p>

                        <div className="space-y-2">
                          {system.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
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

          {/* Advantages */}
          <section className="py-32 relative overflow-hidden" aria-label="Testrix Advantages">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
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

          {/* Product Details */}
          <section className="py-32 relative overflow-hidden" aria-label="Product Details">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
            
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
                    Drone Gimbal{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Rig
                    </span>
                  </h2>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Our flagship testing solution designed for comprehensive drone gimbal system validation. This precision-engineered test rig allows for accurate assessment of gimbal performance, stability, and control under various conditions. Features include multi-axis testing capabilities, real-time data acquisition, and integration with advanced analysis software for detailed performance metrics.
                    </p>
                    <p>
                      The <Link to="/products/hardware" className="text-primary hover:underline font-semibold">Testrix Drone Gimbal Rig</Link> is essential for <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV manufacturers</Link> and quality assurance teams who require precise validation of gimbal systems. Our testing solutions ensure that every component meets the highest standards before deployment in <Link to="/services" className="text-primary hover:underline font-semibold">mission-critical applications</Link>.
                    </p>
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
                  Need Precision{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Testing
                  </span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Our Testrix solutions ensure quality and reliability. <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> to learn more about our testing capabilities.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg px-10 py-7 rounded-2xl group">
                      Request Demo
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

export default TestrixProducts;
