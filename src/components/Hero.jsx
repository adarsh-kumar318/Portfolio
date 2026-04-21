import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroModel from './canvas/HeroModel';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="section-container relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-primary mb-6 border border-primary/20 bg-primary/10">
            👋 Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 leading-tight">
            Hi, I'm <br/>
            <span className="text-gradient">Adarsh Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            MERN Stack Developer | CS Undergraduate
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Building real-world applications with AI and full-stack technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-blue-400 hover:text-blue-300">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="w-full h-full glass-panel rounded-full border-4 border-white/10 overflow-hidden relative z-10 flex items-center justify-center bg-dark/50 p-2">
              <HeroModel />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-4 top-10 glass-panel px-4 py-2 rounded-xl z-20 shadow-2xl flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">React</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-20 glass-panel px-4 py-2 rounded-xl z-20 shadow-2xl flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm font-medium">Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
