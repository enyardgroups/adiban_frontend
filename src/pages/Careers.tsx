import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Users, ArrowRight, Sparkles, Rocket, CheckCircle2, MapPin, Clock, Building2, GraduationCap, Mail, Phone, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSEO } from "@/hooks/useSEO";

type JobType = "Full Time" | "Part Time" | "Intern" | "Contract";
type WorkMode = "Onsite" | "Hybrid" | "Remote";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: JobType;
  workMode: WorkMode;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const Careers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "",
    resume: null as File | null,
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // SEO Optimization
  useSEO({
    title: "Careers - Adiban Aviation | Join Our Team | Aerospace & UAV Engineering Jobs",
    description: "Join Adiban Aviation - India's premier aerospace & defense technology company. Explore career opportunities in UAV engineering, embedded systems, firmware development, and aerospace design. Full-time, part-time, and internship positions available.",
    keywords: "Adiban Aviation careers, aerospace jobs India, UAV engineering jobs, drone engineer jobs, embedded systems jobs, aerospace careers, engineering jobs Villupuram, Adiban Aviation hiring",
    canonical: "https://adibanaviation.com/careers",
    ogImage: "https://adibanaviation.com/careers-og-image.jpg",
    ogType: "website"
  });

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Embedded System Engineer",
      department: "Engineering",
      type: "Full Time",
      workMode: "Onsite",
      location: "Villupuram, Tamil Nadu",
      experience: "2-5 years",
      description: "Design and develop embedded systems for UAV platforms. Work on flight controllers, sensor integration, and real-time systems.",
      requirements: [
        "Bachelor's/Master's in Electronics/Computer Engineering",
        "Experience with ARM microcontrollers",
        "Proficiency in C/C++",
        "Knowledge of RTOS",
        "Understanding of communication protocols"
      ],
      responsibilities: [
        "Design embedded firmware for flight control systems",
        "Integrate sensors and actuators",
        "Optimize system performance",
        "Conduct testing and validation"
      ]
    },
    {
      id: "2",
      title: "Firmware Engineer",
      department: "Engineering",
      type: "Full Time",
      workMode: "Hybrid",
      location: "Villupuram, Tamil Nadu",
      experience: "1-4 years",
      description: "Develop and maintain firmware for aerospace hardware components. Focus on reliability and performance optimization.",
      requirements: [
        "Degree in Electronics/Computer Science",
        "Strong C/C++ programming skills",
        "Experience with embedded systems",
        "Knowledge of hardware interfaces",
        "Debugging and testing expertise"
      ],
      responsibilities: [
        "Develop firmware for hardware modules",
        "Implement communication protocols",
        "Perform code reviews",
        "Maintain documentation"
      ]
    },
    {
      id: "3",
      title: "PCB Designer",
      department: "Hardware",
      type: "Full Time",
      workMode: "Onsite",
      location: "Villupuram, Tamil Nadu",
      experience: "2-6 years",
      description: "Design printed circuit boards for aerospace applications. Ensure compliance with industry standards and reliability requirements.",
      requirements: [
        "Degree in Electronics Engineering",
        "Proficiency in Altium/KiCad/Eagle",
        "Knowledge of PCB layout principles",
        "Understanding of EMI/EMC",
        "Experience with high-speed design"
      ],
      responsibilities: [
        "Design PCB layouts",
        "Component selection and placement",
        "Signal integrity analysis",
        "Generate manufacturing files"
      ]
    },
    {
      id: "4",
      title: "Full Stack Software Developer",
      department: "Software",
      type: "Full Time",
      workMode: "Hybrid",
      location: "Villupuram, Tamil Nadu",
      experience: "2-5 years",
      description: "Develop web applications and software solutions for UAV management systems. Work on both frontend and backend development.",
      requirements: [
        "Degree in Computer Science/Engineering",
        "Experience with React/Node.js",
        "Database design knowledge",
        "API development skills",
        "Version control (Git)"
      ],
      responsibilities: [
        "Develop web applications",
        "Design and implement APIs",
        "Database design and optimization",
        "Code testing and deployment"
      ]
    },
    {
      id: "5",
      title: "Drone Instructor",
      department: "Training",
      type: "Part Time",
      workMode: "Onsite",
      location: "Villupuram, Tamil Nadu",
      experience: "1-3 years",
      description: "Train individuals and organizations on drone operations, safety protocols, and flight techniques.",
      requirements: [
        "Drone pilot certification",
        "Teaching experience preferred",
        "Strong communication skills",
        "Knowledge of regulations",
        "Patience and clarity"
      ],
      responsibilities: [
        "Conduct training sessions",
        "Develop training materials",
        "Assess trainee progress",
        "Maintain safety standards"
      ]
    },
    {
      id: "6",
      title: "Drone Pilot",
      department: "Operations",
      type: "Full Time",
      workMode: "Onsite",
      location: "Villupuram, Tamil Nadu",
      experience: "1-3 years",
      description: "Operate UAV systems for testing, demonstrations, and field operations. Ensure safe and efficient flight operations.",
      requirements: [
        "Valid drone pilot license",
        "Flight experience",
        "Technical understanding",
        "Safety consciousness",
        "Physical fitness"
      ],
      responsibilities: [
        "Operate UAV systems",
        "Pre-flight inspections",
        "Mission planning",
        "Data collection"
      ]
    },
    {
      id: "7",
      title: "Drone Integration Engineer",
      department: "Engineering",
      type: "Full Time",
      workMode: "Onsite",
      location: "Villupuram, Tamil Nadu",
      experience: "2-5 years",
      description: "Integrate various subsystems into complete UAV platforms. Ensure seamless operation of all components.",
      requirements: [
        "Engineering degree",
        "Systems integration experience",
        "Problem-solving skills",
        "Testing knowledge",
        "Documentation skills"
      ],
      responsibilities: [
        "Integrate subsystems",
        "System testing",
        "Troubleshooting",
        "Documentation"
      ]
    },
    {
      id: "8",
      title: "Design Engineer",
      department: "Engineering",
      type: "Full Time",
      workMode: "Hybrid",
      location: "Villupuram, Tamil Nadu",
      experience: "1-4 years",
      description: "Design mechanical components and structures for UAV systems. Use CAD tools for design and analysis.",
      requirements: [
        "Mechanical Engineering degree",
        "CAD proficiency (SolidWorks/CATIA)",
        "Design principles knowledge",
        "Material selection expertise",
        "Analysis skills"
      ],
      responsibilities: [
        "Design components",
        "Create technical drawings",
        "Perform analysis",
        "Prototype development"
      ]
    },
    {
      id: "9",
      title: "FEA/CFD Analyst",
      department: "Engineering",
      type: "Full Time",
      workMode: "Hybrid",
      location: "Villupuram, Tamil Nadu",
      experience: "2-5 years",
      description: "Perform finite element analysis and computational fluid dynamics simulations for UAV design optimization.",
      requirements: [
        "Engineering degree",
        "FEA/CFD software experience",
        "Analysis expertise",
        "Problem-solving skills",
        "Report writing"
      ],
      responsibilities: [
        "Perform simulations",
        "Analyze results",
        "Optimize designs",
        "Generate reports"
      ]
    },
  ];

  const selectedJobData = jobOpenings.find(job => job.id === selectedJob);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Innovative Hero Section */}
        <section 
          ref={heroRef} 
          className="relative min-h-[80vh] flex items-center overflow-hidden pt-20"
          aria-label="Careers Hero"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 mesh-gradient"
              style={{ opacity }}
            />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          {/* Animated Shapes */}
          <motion.div 
            className="absolute top-1/4 left-10 w-24 h-24 border-4 border-primary/30 rounded-xl"
            animate={{ 
              rotate: [0, 360],
              y: [0, -40, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-20 w-40 h-40 border-4 border-accent/30 rounded-full"
            animate={{ 
              rotate: [360, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 backdrop-blur-sm mb-6"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Briefcase className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-base font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    JOIN OUR TEAM
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6">
                  <span className="block text-foreground">Shape the</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Future
                  </span>
                  <span className="block text-foreground">of Aviation</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"
                />
                
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Be part of the team shaping the future of unmanned aviation in India. Join us in building innovative aerospace solutions.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <main>
          {/* Why Join Us Section */}
          <section className="py-32 relative overflow-hidden" aria-label="Why Join Us">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Why Adiban Aviation?</h2>
                  </div>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      At Adiban Aviation, we foster a culture of <span className="text-foreground font-semibold">innovation, collaboration, and continuous learning</span>. Our team consists of passionate engineers and aviation enthusiasts working together to push the boundaries of drone technology.
                    </p>
                    <p>
                      We believe in <span className="text-foreground font-semibold">nurturing talent, encouraging creativity, and providing opportunities</span> for professional growth in a dynamic and challenging work environment. Join us to work on cutting-edge projects and make a real impact in the aerospace industry.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Job Openings Section */}
          <section className="py-32 relative bg-secondary/30 overflow-hidden" aria-label="Job Openings">
            <div className="absolute inset-0 diagonal-lines opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-sm mb-6">
                  OPEN POSITIONS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Current{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Openings
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore exciting career opportunities with us
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Job List */}
                <div className="space-y-4">
                  {jobOpenings.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedJob(job.id)}
                      className={`relative bg-card border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        selectedJob === job.id 
                          ? "border-primary/40 shadow-float" 
                          : "border-border hover:border-primary/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-semibold">
                              {job.type}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-semibold">
                              {job.workMode}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground font-semibold">
                              {job.department}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 text-primary transition-transform ${selectedJob === job.id ? "translate-x-2" : ""}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Job Details */}
                <div className="lg:sticky lg:top-24 h-fit">
                  {selectedJobData ? (
                    <motion.div
                      key={selectedJobData.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8"
                    >
                      <div className="mb-6">
                        <h3 className="text-3xl font-display font-bold mb-4">{selectedJobData.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-semibold">
                            {selectedJobData.type}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-semibold">
                            {selectedJobData.workMode}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-secondary border border-border text-sm text-muted-foreground font-semibold">
                            {selectedJobData.department}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {selectedJobData.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {selectedJobData.experience}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-display font-bold mb-2">Description</h4>
                          <p className="text-muted-foreground leading-relaxed">{selectedJobData.description}</p>
                        </div>

                        <div>
                          <h4 className="font-display font-bold mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {selectedJobData.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-display font-bold mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {selectedJobData.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 text-center"
                    >
                      <Briefcase className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">Select a position to view details</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Application Form Section */}
          <section className="py-32 relative overflow-hidden" aria-label="Application Form">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                      Apply{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Now
                      </span>
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below to submit your application
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="mb-2">Full Name *</Label>
                        <Input 
                          id="name" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="mobile" className="mb-2">Mobile Number *</Label>
                        <Input 
                          id="mobile" 
                          type="tel" 
                          required 
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="mb-2">Position Applied For *</Label>
                        <Select 
                          value={formData.role} 
                          onValueChange={(value) => setFormData({ ...formData, role: value })}
                          required
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {jobOpenings.map((job) => (
                              <SelectItem key={job.id} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="resume" className="mb-2">Upload Resume *</Label>
                      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                        <label htmlFor="resume" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-1">
                            {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                        </label>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> You can also email your resume directly to{" "}
                        <a href="mailto:contact@adibanaviation.in" className="text-primary hover:underline font-semibold">
                          contact@adibanaviation.in
                        </a>
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow font-display font-semibold text-lg py-7 rounded-2xl group"
                    >
                      Submit Application
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </form>
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
                  Don't See a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Perfect Match
                  </span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 font-display font-semibold text-lg px-10 py-7 rounded-2xl">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
