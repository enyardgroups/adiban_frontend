import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Careers = () => {
  const jobOpenings = [
    "Embedded System Engineer",
    "Firmware Engineer",
    "PCB Designer",
    "Full Stack Software Developer",
    "Drone Instructor",
    "Drone Pilot",
    "Drone Integration Engineer",
    "Design Engineer",
    "FEA/CFD Analyst",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Be part of the team shaping the future of unmanned aviation in India
            </p>
          </motion.div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-display font-bold">Why Adiban Aviation?</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Adiban Aviation, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team consists of passionate engineers and aviation enthusiasts working together to push the 
              boundaries of drone technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in nurturing talent, encouraging creativity, and providing opportunities for professional 
              growth in a dynamic and challenging work environment.
            </p>
          </motion.div>

          {/* Current Openings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-display font-bold">Current Openings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                  className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-display font-semibold group-hover:text-accent transition-colors">
                    {job}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-card border border-border/40 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Submit Your Application</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="position">Position Applied For *</Label>
                  <Input id="position" required className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Cover Letter / Additional Information</Label>
                <Textarea id="message" rows={6} className="mt-2" />
              </div>

              <div>
                <Label htmlFor="resume">Resume / CV (Email to: contact@adibanaviation.in)</Label>
                <p className="text-sm text-muted-foreground mt-2">
                  Please email your resume along with this application to the email address above.
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold"
              >
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;