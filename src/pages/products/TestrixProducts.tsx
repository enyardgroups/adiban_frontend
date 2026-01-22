import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TestTube2, Gauge, CheckCircle, Rocket, Award, Shield, Zap, ArrowRight, Target, Satellite, Battery, Radio, Settings, RotateCcw, GaugeCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import testRigsImage from "@/assets/testrigs.jpg";
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
    title: "Test Rigs - Adiban Aviation | GPS Test Module, Power Monitor, Battery Health Checker, Servo ESC Tester, Drone Gimbal Rig | Made in India",
    description: "Explore Adiban Aviation's Test Rigs solutions: GPS Test & Validation Module, Power Monitor Module, Battery Health Checker & RC Receiver Tester, Servo & ESC Tester, and Drone Gimbal Rig. Precision testing and validation for aerospace components.",
    keywords: "Test Rigs, GPS test module, power monitor module, battery health checker, RC receiver tester, servo ESC tester, drone gimbal rig, aerospace testing, UAV testing equipment, precision testing, Adiban Aviation test rigs, Indian testing solutions",
    canonical: "https://adibanaviation.com/products/testrix",
    ogImage: "https://adibanaviation.com/test-rigs-og-image.jpg",
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
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Standards Compliance", "Quality Validation", "Certification Support", "Documentation"]
    },
  ];

  const testSystems = [
    {
      icon: TestTube2,
      name: "Drone Gimbal Rig",
      label: "Test Rig",
      description: "The Drone Gimbal Rig is a safe, customisable and versatile test platform for FPV drones (up to 6-inch). From classrooms and training labs to hobby workshops and research centers, it helps users test, tune, and validate drones with confidence before real-world flights.",
      gradient: "from-yellow-500 to-orange-500",
      applications: [
        "Complete System Validation",
        "Training & Demonstrations",
        "Environmental Simulation",
        "Flight Controller & Firmware Testing",
        "Signal & Communication Checks",
        "Payload & Accessory Impact",
        "Maneuverability & Stability Testing",
        "Failsafe & Safety Verification"
      ]
    },
    {
      icon: Satellite,
      name: "GPS Test & Validation Module",
      label: "Tester Module",
      description: "Standalone test and diagnostic interface for UART-based GNSS receivers, designed to decode and process NMEA data and display key positioning, fix status, and signal quality parameters during integration, testing, and troubleshooting.",
      gradient: "from-blue-500 to-cyan-500",
      capabilities: [
        "UART Interface for GNSS Receivers (NMEA Input)",
        "Real-Time NMEA Parsing & Display of Position and Fix Data (Latitude, Longitude, Altitude, Fix Mode)",
        "Satellite & Signal Metrics Monitoring (Satellite Count, HDOP, Time)",
        "Flexible External Power Support (5V via USB or 3–6S Input via Buck Regulation)"
      ]
    },
    {
      icon: Zap,
      name: "Power Monitor Module",
      label: "Tester Module",
      description: "Integrated power monitoring and regulation module designed to measure electrical parameters while supplying regulated power to onboard electronics. The module supports wide battery input ranges and enables real-time visibility into system power health during integration and operation.",
      gradient: "from-cyan-500 to-blue-500",
      capabilities: [
        "Wide Input Voltage Support (2S–14S Battery Input)",
        "Direct Battery Pass-Through Output for External Loads",
        "Integrated Buck Regulation with Fixed 5V Output",
        "Real-Time Voltage & Current Monitoring with Onboard Display"
      ]
    },
    {
      icon: Battery,
      name: "Battery Health Checker & RC Receiver Tester",
      label: "Tester Module",
      description: "Integrated test and diagnostic module for evaluating battery health and validating RC receiver signals during system setup, integration, and troubleshooting. Designed to support both power and control verification in a single, standalone interface.",
      gradient: "from-blue-500 to-cyan-500",
      capabilities: [
        "Battery Cell & Pack Voltage Monitoring (Li-Po / Li-Ion up to 6S)",
        "Individual Cell Voltage Display for Health Assessment",
        "RC Receiver Signal Testing (PPM or up to 10 PWM Inputs)",
        "Standalone Display for Battery and RC Input Diagnostics"
      ]
    },
    {
      icon: Settings,
      name: "Servo & ESC Tester",
      label: "Tester Module",
      description: "Integrated test and calibration interface for validating servo actuators and electronic speed controllers during UAV assembly, integration, and maintenance workflows.",
      gradient: "from-blue-600 to-cyan-500",
      capabilities: [
        "Multi-Channel PWM Signal Generation",
        "ESC Calibration & Functional Verification",
        "Receiver Signal Pass-Through (PPM / PWM)",
        "Standalone, Portable Test Operation"
      ]
    },
    {
      icon: Rocket,
      name: "Propulsion System Tester",
      label: "Test Rig",
      description: "High-precision propulsion testing and performance analysis for UAV and advanced aerospace applications.",
      gradient: "from-purple-500 to-blue-500",
      capabilities: [
        "Propulsion System Testing",
        "Performance Analysis",
        "Thrust Measurement",
        "Aerospace Applications"
      ],
      comingSoon: true
    },
    {
      icon: RotateCcw,
      name: "Motorised Gimbal Rig",
      label: "Test Rig",
      description: "A precision motorised gimbal rig engineered for UAV and payload testing, delivering high-accuracy multi-axis stabilization and control. It ensures smooth, vibration-free operation for imaging, sensing, and surveillance missions across dynamic flight conditions.",
      gradient: "from-indigo-500 to-purple-500",
      capabilities: [
        "Multi-Axis Stabilization",
        "Vibration-Free Operation",
        "Imaging & Sensing Testing",
        "Dynamic Flight Condition Testing"
      ]
    },
    {
      icon: GaugeCircle,
      name: "Propeller Balancer",
      label: "Test Rig",
      description: "High-accuracy propeller balancer for UAV propulsion systems, enabling precise static and dynamic balance verification. Ensures smooth operation, reduced vibration, and reliable performance during flight testing.",
      gradient: "from-teal-500 to-cyan-500",
      capabilities: [
        "Static Balance Verification",
        "Dynamic Balance Verification",
        "Vibration Reduction",
        "Flight Testing Support"
      ],
      comingSoon: true
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
          aria-label="Test Rigs Hero"
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
                    TEST RIGS
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
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-border">
                  <motion.img 
                    src={testRigsImage} 
                    alt="Adiban Aviation Test Rigs - GPS Test Module, Power Monitor, Battery Health Checker, Servo ESC Tester, and Drone Gimbal Rig for Aerospace Testing"
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
          <section className="py-32 relative overflow-hidden" aria-label="Test Rigs Features">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testSystems.map((system, index) => (
                  <motion.div
                    key={system.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative bg-card border-2 border-border rounded-2xl p-8 h-full overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-float">
                      <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${system.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <system.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            {system.label && (
                              <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${
                                system.label === "Test Rig" 
                                  ? "bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-500" 
                                  : "bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-500"
                              }`}>
                                {system.label}
                              </span>
                            )}
                            {system.comingSoon && (
                              <span className="px-2 py-1 rounded-full text-[10px] font-display font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-500">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3">{system.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{system.description}</p>

                        {system.capabilities && (
                          <div className="space-y-2">
                            <p className="text-sm font-display font-semibold text-primary mb-2">Key Capabilities:</p>
                            {system.capabilities.map((capability, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs">
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{capability}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {system.applications && (
                          <div className="space-y-2">
                            <p className="text-sm font-display font-semibold text-primary mb-2">Applications:</p>
                            {system.applications.map((application, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs">
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{application}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="py-32 relative overflow-hidden" aria-label="Test Rigs Advantages">
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
                      The Drone Gimbal Rig is a safe, customisable and versatile test platform for FPV drones (up to 6-inch). From classrooms and training labs to hobby workshops and research centers, it helps users test, tune, and validate drones with confidence before real-world flights.
                    </p>
                    <p>
                      The <Link to="/products/hardware" className="text-primary hover:underline font-semibold">Drone Gimbal Rig</Link> is essential for <Link to="/products/uav" className="text-primary hover:underline font-semibold">UAV manufacturers</Link> and quality assurance teams who require precise validation of gimbal systems. Our testing solutions ensure that every component meets the highest standards before deployment in <Link to="/services" className="text-primary hover:underline font-semibold">mission-critical applications</Link>.
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
                  Our Test Rigs solutions ensure quality and reliability. <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> to learn more about our testing capabilities.
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
