import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "Startup Incubation",
    description: "Successfully secured initial incubation support for the Hyperlocal Delivery Startup concept, moving into MVP development phase.",
    icon: <Rocket className="w-6 h-6 text-pink-500" />
  },
  {
    title: "Hackathon Finalist",
    description: "Developed the core prototype for the Smart Urban Decongestion System (SUDS) in a 48-hour national hackathon.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various React and Node.js open-source libraries, improving documentation and fixing bugs.",
    icon: <Star className="w-6 h-6 text-primary" />
  }
];

// Re-import rocket since it wasn't in the destructured list above
import { Rocket } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="relative py-20 z-10">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg">Key <span className="text-gradient">Milestones</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-dark border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
