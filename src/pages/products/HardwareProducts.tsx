import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Zap, Battery, Radio, Lightbulb } from "lucide-react";
import hardwareImage from "@/assets/hardware-tech.jpg";

const HardwareProducts = () => {
  const hardwareItems = [
    {
      icon: Cpu,
      name: "BEC (Battery Eliminator Circuit)",
      description: "Precision voltage regulation for stable power delivery to flight control systems",
    },
    {
      icon: Zap,
      name: "Power Module",
      description: "High-efficiency power distribution modules for reliable UAV operations",
    },
    {
      icon: Battery,
      name: "PDB (Power Distribution Board)",
      description: "Advanced power distribution boards with integrated current sensing",
    },
    {
      icon: Radio,
      name: "Servo Tester",
      description: "Precision testing equipment for servo motor validation and calibration",
    },
    {
      icon: Lightbulb,
      name: "Strobe Lights",
      description: "High-visibility aviation strobe lights for enhanced safety and compliance",
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
              Aerospace <span className="text-accent">Hardware</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Specialized aviation and electronic hardware components engineered to aerospace standards
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 rounded-xl overflow-hidden border border-border/40"
          >
            <img src={hardwareImage} alt="Hardware Components" className="w-full h-[400px] object-cover" />
          </motion.div>

          {/* Hardware Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {hardwareItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Engineering Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our hardware components are designed and manufactured to meet rigorous aerospace standards. 
              Each product undergoes extensive testing and quality control to ensure reliability in 
              mission-critical applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We utilize aerospace-grade materials and advanced manufacturing techniques to deliver 
              components that offer superior performance, durability, and consistency.
            </p>
            
            <h3 className="text-2xl font-display font-bold mb-4 mt-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Aerospace-grade component selection</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Rigorous quality control processes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Enhanced reliability and durability</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Compliance with aviation standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HardwareProducts;