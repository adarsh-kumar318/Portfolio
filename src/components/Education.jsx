import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const ED_DATA = [
  {
    year: '2022 - Present',
    degree: 'B.Tech in Computer Science',
    institution: 'University Name', // Placeholder
    score: 'SGPA: 8.2',
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    desc: 'Focusing on core CS fundamentals, full-stack engineering, and AI/ML integrations.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    year: '2020 - 2022',
    degree: '12th Grade (Higher Secondary)',
    institution: 'High School Name', // Placeholder
    score: 'Percentage: 89%',
    icon: <BookOpen className="w-6 h-6 text-secondary" />,
    desc: 'Excelled in Mathematics and Computer Science, laying the foundation for software development.',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 z-10 overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            <Award className="w-4 h-4" />
            Academic Journey
          </div>
          <h2 className="heading-lg">Education <span className="text-gradient">Timeline</span></h2>
          <p className="text-[#94a3b8] text-lg">
            A chronological mapping of my academic progression.
          </p>
        </motion.div>

        {/* 3D Timeline Path Simulation */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: "1500px" }}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 rounded-full opacity-30 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>

          {ED_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, z: -100, rotateX: 20 }}
              whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative flex items-center mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-16 h-16 absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-darker rounded-full border-4 border-dark flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10">
                <div className={`p-2 rounded-full bg-gradient-to-br ${item.color} bg-opacity-20`}>
                  {item.icon}
                </div>
              </div>

              <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <motion.div 
                  whileHover={{ scale: 1.05, translateZ: 20 }}
                  className="glass-panel p-8 rounded-2xl relative group overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                  
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-bold tracking-widest text-[#cbd5e1] mb-4">
                    {item.year}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                  <div className="text-lg font-semibold text-primary mb-4">{item.institution}</div>
                  
                  <p className="text-[#94a3b8] leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-xl border border-white/10 w-full text-white font-bold text-lg shadow-inner">
                    {item.score}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
