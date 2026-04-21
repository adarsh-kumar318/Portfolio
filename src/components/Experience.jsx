import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    role: "Full Stack Developer (Project Build)",
    company: "SUDS Initiative",
    duration: "2023 - 2024",
    description: "Developed the Smart Urban Decongestion System. Engineered complex UI/UX components using Framer Motion and modern React practices. Integrated robust backend logic for gamified traffic solutions and analytics mapping."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="heading-lg">Professional <span className="text-gradient">Journey</span></h2>
          <p className="text-slate-400 text-lg">
            My track record of building and leading technical projects.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-8 h-8 bg-darker border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl relative group hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/5 whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
