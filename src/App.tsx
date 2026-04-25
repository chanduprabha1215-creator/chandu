/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Github, 
  Linkedin, 
  Download,
  GraduationCap,
  Briefcase,
  Award,
  ChevronRight,
  Sparkles,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-1 bg-linear-to-r from-indigo-500 to-pink-500 mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    { name: "C", category: "programming", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
    { name: "Python", category: "programming", icon: <Terminal className="w-5 h-5 text-yellow-400" /> },
    { name: "Java", category: "programming", icon: <Cpu className="w-5 h-5 text-red-400" /> },
    { name: "HTML & CSS", category: "programming", icon: <Layers className="w-5 h-5 text-orange-400" /> },
    { name: "PHP", category: "programming", icon: <Code2 className="w-5 h-5 text-indigo-400" /> },
    { name: "Team Management", category: "soft", icon: <Zap className="w-5 h-5 text-emerald-400" /> },
    { name: "Leadership", category: "soft", icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
    { name: "Problem Solving", category: "soft", icon: <Zap className="w-5 h-5 text-cyan-400" /> },
  ];

  const education = [
    {
      title: "BCA",
      institution: "Vidya First Grade College, Tumkur",
      year: "2024",
      score: "75%",
      color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
    },
    {
      title: "PUC",
      institution: "Empire Government College, Tumkur",
      year: "2023",
      score: "77%",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "SSLC",
      institution: "Adarsha Vidyalaya, Gowribidanuru",
      year: "2021",
      score: "93%",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30"
    }
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter(s => s.category === activeTab);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Decorative Blobs */}
      <div className="colorful-blob w-[500px] h-[500px] bg-purple-600/20 top-[-250px] right-[-100px]" />
      <div className="colorful-blob w-[400px] h-[400px] bg-blue-600/20 bottom-[-50px] left-[-50px]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-zinc-950/20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold gradient-text"
        >
          CKM.
        </motion.div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-md hover:bg-white/10 transition-all font-medium">Contact Me</button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-[85vh] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative inline-block mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-[40px] blur-3xl opacity-30"></div>
              <div className="relative w-40 h-40 identity-mask flex items-center justify-center">
                <div className="text-4xl font-display font-black text-white/20">CKM</div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            >
              Chandana
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg mb-10"
            >
              BCA Graduate & Full-stack Developer specializing in building high-fidelity interactive digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
                Explore Work <ChevronRight className="w-5 h-5" />
              </button>
              <button className="p-4 bg-zinc-900 border border-white/5 rounded-2xl hover:bg-zinc-800 transition-colors">
                <Download className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "75%", label: "BCA Score", icon: <GraduationCap className="text-purple-400" /> },
                { title: "Working Project", label: "Tourism Guide Website", icon: <MapPin className="text-pink-400" /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="p-8 glass-card"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <SectionHeader 
            title="Professional Persona" 
            subtitle="My journey is driven by an urge to learn and a commitment to excellence."
          />
          <div className="grid md:grid-template-columns-[1.5fr_1fr] gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-indigo-400" /> Career Objective
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                A final year graduate who is passionate about learning and seeking corporate experience to apply the 
                skills learnt through educational knowledge and to improvise the skills into expertise goals. 
                Young and matured individual with developed skills and personal attributes that will support 
                the transition from education to full-time employment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Location", value: "Tumkur, Karnataka", icon: <MapPin className="w-4 h-4" /> },
                  { label: "Status", value: "Final Year Student", icon: <GraduationCap className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-zinc-500 text-xs uppercase tracking-wider flex items-center gap-1">
                      {item.icon} {item.label}
                    </span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden glass-card p-2"
            >
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center relative group">
                <div className="text-7xl font-black text-white/10 group-hover:text-white/40 transition-colors">CKM</div>
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-mono text-indigo-300 mb-2">// Strengths</p>
                  <div className="flex flex-wrap gap-2">
                    {["Self-Motivated", "Hard Worker", "Quick Learner"].map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <SectionHeader 
            title="Expertise" 
            subtitle="A technical toolkit spanning programming, web development, and soft leadership."
          />
          
          <div className="flex gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            {["all", "programming", "soft"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-white text-zinc-950" 
                    : "glass-card text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="glass-card p-6 flex items-center gap-4 group hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{skill.name}</h4>
                    <p className="text-xs text-zinc-500 capitalize">{skill.category} Skill</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Internship & Education Section */}
        <div className="grid lg:grid-cols-2 gap-24 py-24">
          <section id="experience">
            <SectionHeader title="Experience" />
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8 border-l-4 border-l-indigo-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Internship</h3>
                  <p className="text-indigo-400">Aikshetra Tech Solution Private Limited</p>
                </div>
                <div className="px-3 py-1 bg-indigo-500/10 rounded-full text-[10px] font-bold text-indigo-400 border border-indigo-500/20">
                  TRAINEE
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">Tumkur, Karnataka</p>
              <ul className="space-y-3">
                {["Working as a Intern", "Developing technical skills in real-world scenarios", "Domain focused learning"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-300">
                    <Zap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 glass-card p-8 bg-linear-to-br from-white/5 to-white/[0.02]"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-amber-400" /> Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Java & Python Completion</p>
                    <p className="text-xs text-zinc-500">Provided by Great Learning</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="education">
            <SectionHeader title="Education" />
            <div className="space-y-6 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-800">
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className={`absolute left-0 top-2 w-16 h-16 rounded-full border-4 border-zinc-950 z-10 flex items-center justify-center font-bold text-lg ${item.color.split(' ')[0]} ${item.color.split(' ')[1]}`}>
                    {item.score}
                  </div>
                  <div className="glass-card p-6 group-hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-zinc-400 text-sm mb-2">{item.institution}</p>
                    <div className="inline-block px-3 py-1 bg-zinc-800 rounded-lg text-xs font-mono text-zinc-300">
                      Class of {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>


        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="glass-card p-8 md:p-16 relative overflow-hidden">
            <div className="colorful-blob w-96 h-96 bg-indigo-500/20 top-[-100px] left-[-100px]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build <br /><span className="gradient-text">something great</span>.</h2>
                <p className="text-zinc-400 mb-10 text-lg">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <div className="space-y-6">
                  <a href="mailto:Chanduprabha1215@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Email Me</p>
                      <p className="font-semibold text-lg">Chanduprabha1215@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:8431873014" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Call Me</p>
                      <p className="font-semibold text-lg">+91 8431873014</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                      <p className="font-semibold text-lg text-zinc-200">Tumkur, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase">First Name</label>
                      <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase">Message</label>
                    <textarea rows={4} placeholder="Hi Chandana, I'd like to talk about..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full py-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Chandana K M. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:Chanduprabha1215@gmail.com" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors uppercase tracking-widest">Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
              <ChevronRight className="w-4 h-4 -rotate-90 group-hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
