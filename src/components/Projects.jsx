import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Gamepad2, BrainCircuit, Recycle, Sparkles, Target, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 'gamified',
    title: 'Gamified Learning Platform',
    subtitle: 'Interactive Education',
    description: 'A web-based platform that transforms traditional learning into an engaging experience using gamification techniques such as points, levels, leaderboards, and rewards. Users can track progress, compete with others, and stay motivated while learning.',
    impact: 'Increased student engagement by turning complex subjects into rewarding challenges, making continuous learning a habit rather than a chore.',
    imageIcon: <Gamepad2 className="w-12 h-12 text-primary" />,
    tech: ['React', 'Node.js', 'Firebase', 'MongoDB'],
    gradient: 'from-blue-600/20 to-cyan-500/10'
  },
  {
    id: 'ai-exam',
    title: 'AI Exam Note Generator',
    subtitle: 'Smart Study Engine',
    description: 'An AI-powered tool that generates concise, structured exam notes from user input or study material, helping students save time and improve revision efficiency. Features AI-based note summarization and topic-wise structured outputs.',
    impact: 'Saves hours of manual summarization for students, optimizing revision efficacy with distillation of high-yield exam material.',
    imageIcon: <BrainCircuit className="w-12 h-12 text-secondary" />,
    tech: ['OpenAI API', 'React', 'Express', 'MongoDB'],
    gradient: 'from-purple-600/20 to-pink-500/10'
  },
  {
    id: 'scrap',
    title: 'Scrap Management Website',
    subtitle: 'Eco-Logistics Platform',
    description: 'A modern digital platform enabling efficient scrap trading and waste management logistics. Connects local scrap collectors, recycling centers, and end-users in a unified, optimized marketplace.',
    impact: 'Promotes sustainable recycling economies by streamlining the scrap supply chain and reducing logistical friction for green enterprises.',
    imageIcon: <Recycle className="w-12 h-12 text-green-500" />,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-green-600/20 to-emerald-500/10'
  }
];

const ProjectCard = ({ project, idx, setSelectedId }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`project-container-${project.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={() => setSelectedId(project.id)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-panel w-[350px] md:w-[400px] h-[500px] rounded-[2rem] overflow-hidden flex-shrink-0 relative group boundary cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 z-0 pointer-events-none rounded-[2rem] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center`}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/50 font-bold tracking-widest uppercase">Click to Expand</span>
      </div>
      
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10 p-8 flex flex-col h-full pointer-events-none"
      >
        <div className="flex justify-between items-start mb-6">
          <motion.div layoutId={`icon-${project.id}`} className="p-4 bg-dark/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            {project.imageIcon}
          </motion.div>
        </div>

        <motion.div layoutId={`subtitle-${project.id}`} className="mb-2 text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          {project.subtitle}
        </motion.div>
        
        <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-white mb-4 drop-shadow-md">{project.title}</motion.h3>
        
        <p className="text-[#94a3b8] leading-relaxed mb-6 font-medium line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 3).map((tech, tIdx) => (
            <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#cbd5e1] backdrop-blur-md">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#cbd5e1] backdrop-blur-md">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const activeProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="relative py-20 z-10 overflow-hidden">
      <div className="section-container relative z-10 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Portfolio Showcase
          </div>
          <h2 className="heading-lg">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-[#94a3b8] text-lg">
            A Horizontal 3D Scroll Scene. Click any card to expand.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full overflow-x-auto pb-16 pt-8 px-6 md:px-12 hide-scrollbar pb-32" style={{ perspective: "1500px" }}>
        <div className="flex gap-8 w-max mx-auto px-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} setSelectedId={setSelectedId} />
          ))}
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedId && activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`project-container-${selectedId}`}
              className="glass-panel w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative flex flex-col cursor-default shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <motion.div layoutId={`icon-${selectedId}`} className="p-6 bg-dark/50 rounded-2xl border border-white/5 shadow-xl self-start">
                  {activeProject.imageIcon}
                </motion.div>
                
                <div>
                  <motion.div layoutId={`subtitle-${selectedId}`} className="mb-3 text-primary font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {activeProject.subtitle}
                  </motion.div>
                  <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl md:text-5xl font-bold text-white mb-4">{activeProject.title}</motion.h3>
                  
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-medium text-white shadow-lg">
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub Repo</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full transition-opacity font-medium text-white shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    Description
                  </h4>
                  <p className="text-[#cbd5e1] text-lg leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 text-white font-semibold mb-3 text-lg">
                    <Target className="w-5 h-5 text-primary" />
                    Impact & Problem Solving
                  </div>
                  <p className="text-[#94a3b8] leading-relaxed">
                    {activeProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-4 py-2 bg-dark border border-white/10 shadow-inner rounded-full text-sm font-medium text-[#cbd5e1]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
