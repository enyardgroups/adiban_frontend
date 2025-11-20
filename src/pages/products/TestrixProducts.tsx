import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TestTube2, Gauge, CheckCircle } from "lucide-react";
import testRigsImage from "@/assets/test-rigs.png";

const TestrixProducts = () => {
  const features = [
    {
      icon: TestTube2,
      title: "Precision Testing",
      description: "High-accuracy test rigs for drone component validation and quality assurance",
    },
    {
      icon: Gauge,
      title: "Performance Analysis",
      description: "Comprehensive data collection and analysis for flight systems optimization",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring aerospace-grade reliability standards",
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
              Testrix <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced testing systems for precision validation and quality assurance
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 rounded-xl overflow-hidden border border-border/40 bg-card"
          >
            <img src={testRigsImage} alt="Test Rigs" className="w-full h-[400px] object-contain p-8" />
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Drone Gimbal Rig</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our flagship testing solution designed for comprehensive drone gimbal system validation. 
              This precision-engineered test rig allows for accurate assessment of gimbal performance, 
              stability, and control under various conditions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Features include multi-axis testing capabilities, real-time data acquisition, and 
              integration with advanced analysis software for detailed performance metrics.
            </p>
            
            <h3 className="text-2xl font-display font-bold mb-4 mt-8">Additional Test Systems</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Flight test systems for comprehensive UAV performance evaluation</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Avionics testing equipment for electronic systems validation</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Quality assurance tools for manufacturing process verification</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TestrixProducts;