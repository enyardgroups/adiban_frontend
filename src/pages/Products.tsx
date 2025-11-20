import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import uavImage from "@/assets/uav-flight.jpg";
import testRigs from "@/assets/test-rigs.png";
import hardwareImage from "@/assets/hardware-tech.jpg";

const Products = () => {
  const categories = [
    {
      title: "UAV Systems",
      slug: "uav",
      description: "Unmanned Aerial Vehicles designed for diverse applications",
      image: uavImage,
      subcategories: ["FPV Drones", "Agricultural UAVs", "Logistics Drones"],
    },
    {
      title: "Testrix Solutions",
      slug: "testrix",
      description: "Advanced testing systems and precision test rigs",
      image: testRigs,
      subcategories: ["Drone Gimbal Rig", "Flight Test Systems", "Quality Assurance Tools"],
    },
    {
      title: "Hardware",
      slug: "hardware",
      description: "Aerospace-grade electronic hardware and components",
      image: hardwareImage,
      subcategories: ["BEC", "Power Modules", "PDB", "Servo Testers", "Strobe Lights"],
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
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Designed to deliver consistent and reliable performance across diverse applications. Engineered with precision for smooth operation and long-term durability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="bg-card border border-border/40 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-3xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm font-display font-semibold text-accent mb-2">Product Lines:</p>
                      <ul className="space-y-1">
                        {category.subcategories.map((sub) => (
                          <li key={sub} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <Link to={`/products/${category.slug}`}>
                        <Button variant="outline" className="w-full border-accent/30 hover:bg-accent/10 font-display font-semibold group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 bg-card border border-border/40 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display font-bold mb-6 text-center">Product Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Our products are designed to deliver consistent and reliable performance across diverse applications. 
              Engineered with precision, they ensure smooth operation and long-term durability. Their user-friendly 
              designs make integration and usage effortless for any workflow. They combine innovation with practicality 
              to meet modern industry demands. Crafted with quality materials, our products stand as dependable solutions 
              for professionals.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;