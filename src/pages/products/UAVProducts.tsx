import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Wind, Wifi } from "lucide-react";
import uavImage from "@/assets/uav-flight.jpg";

const UAVProducts = () => {
  const uavTypes = [
    {
      icon: Wifi,
      name: "FPV Drones",
      description: "First-person view racing and freestyle drones with high-speed performance and agility",
    },
    {
      icon: Wind,
      name: "Agricultural UAVs",
      description: "Precision agriculture solutions for crop monitoring, spraying, and field analysis",
    },
    {
      icon: Plane,
      name: "Logistics Drones",
      description: "Heavy-lift cargo drones designed for efficient last-mile delivery and transportation",
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
              UAV <span className="text-accent">Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Unmanned Aerial Vehicles engineered for diverse applications with cutting-edge technology
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 rounded-xl overflow-hidden border border-border/40"
          >
            <img src={uavImage} alt="UAV Systems" className="w-full h-[400px] object-cover" />
          </motion.div>

          {/* UAV Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {uavTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <type.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{type.name}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Technical Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our UAV systems are built with aerospace-grade materials and cutting-edge avionics. Each platform 
              is designed to deliver exceptional performance, reliability, and safety across various operational 
              environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From advanced flight control systems to precision sensors and communication modules, our UAVs 
              integrate the latest technologies to meet the demanding requirements of modern applications.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UAVProducts;