import { motion } from 'framer-motion';
import { Target, Brain, Code2 } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            About Me
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Solutions</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#94a3b8] text-lg leading-relaxed">
            I am a full-stack developer with a robust command of the MERN architecture. I thrive at the intersection of complex problem-solving and modern web engineering.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-bl-full blur-[50px] pointer-events-none"></div>
            <h3 className="text-3xl font-bold text-white mb-6">MERN Stack & AI Specialization</h3>
            <p className="text-[#cbd5e1] leading-relaxed mb-6 text-lg">
              My engineering approach relies on the entire JavaScript ecosystem to deliver fast, highly-scalable software. By deeply utilizing React.js, Express, Node.js, and MongoDB, I have been able to construct full-featured platforms from the ground up.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed text-lg">
              Beyond traditional web apps, I actively integrate AI functionalities into my projects—empowering interfaces with intelligent data summarization, automated logic pipelines, and contextual awareness to drastically improve the user experience.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-6"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "MERN Stack Expertise",
                desc: "Proficient in building end-to-end architectures leveraging MongoDB, Express, React, and Node.js for scalable environments."
              },
              {
                icon: <Brain className="w-8 h-8 text-secondary" />,
                title: "AI-Based Project Focus",
                desc: "Integrating powerful LLMs and artificial intelligence APIs to build next-generation features and intelligent study engines."
              },
              {
                icon: <Target className="w-8 h-8 text-pink-500" />,
                title: "Problem Solving Mindset",
                desc: "A passionate dedication to breaking down highly complex logic issues into fast, optimize algorithms."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-panel p-6 rounded-2xl flex gap-6 items-start hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 cursor-default">
                <div className="p-4 rounded-xl bg-dark/50 border border-white/5 shrink-0 shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
