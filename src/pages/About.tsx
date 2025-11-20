import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
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
              About <span className="text-accent">Adiban Aviation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the future of unmanned aviation in India
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Adiban Aviation Pvt. Ltd. is an emerging Aerospace & Defense technology company dedicated to developing high-performance drones and advanced UAV systems. We combine innovation, precision engineering, and regulatory expertise to deliver solutions that meet the highest standards of safety, reliability, and performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Guided by our vision to become a complete drone stack OEM, we specialize in UAV design, development, compliance documentation, and type certification assistance. Our multidisciplinary team brings together deep expertise in aerodynamics, avionics, propulsion, and systems integration — ensuring every product reflects engineering excellence and operational efficiency.
            </p>
          </motion.div>

          {/* Vision, Mission, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-card border border-border/40 rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be a global leader in UAV innovation and shaping the future of aerial solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-card border border-border/40 rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To deliver innovative technologies that make drone industry safer, smarter, and more efficient.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-card border border-border/40 rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Integrity, innovation, and excellence in everything we do.
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-8 md:p-12 text-center"
          >
            <Award className="h-12 w-12 text-accent mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display font-semibold mb-4">
              "At Adiban Aviation, we're not just building drones — we're shaping the future of unmanned aviation in India."
            </blockquote>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;