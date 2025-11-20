import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Monitor, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Software = () => {
  const features = [
    {
      icon: Code,
      title: "Advanced Features",
      description: "State-of-the-art functionality designed for professional aviation applications",
    },
    {
      icon: Monitor,
      title: "Intuitive Interface",
      description: "User-friendly designs for seamless integration into your workflow",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Optimized for speed and reliability in mission-critical operations",
    },
    {
      icon: Database,
      title: "Technical Capabilities",
      description: "Comprehensive toolset for flight control, data analysis, and system management",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent">Software</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              In-house developed software solutions for advanced drone operations and aerospace applications
            </p>
          </motion.div>

          {/* Software Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Adiban Aviation Software Suite</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our proprietary software solutions are developed in-house to provide comprehensive control, 
              monitoring, and analysis capabilities for UAV systems. Built with cutting-edge technologies 
              and designed with aerospace standards in mind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ground control stations to flight planning and real-time telemetry, our software 
              ecosystem ensures maximum efficiency and safety in your operations.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-display font-bold mb-4">Interested in Our Software Solutions?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Request a demo or inquiry about our software capabilities and licensing options
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold">
                  Request Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 font-display font-semibold">
                  Make Inquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Software;