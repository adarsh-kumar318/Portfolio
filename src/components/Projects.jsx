import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Gamepad2, BrainCircuit, Recycle, Sparkles, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 'gamified',
    title: 'Gamified Learning Platform',
    subtitle: 'Interactive Education',
    description: 'A web-based platform that transforms traditional learning into an engaging experience using gamification techniques such as points, levels, leaderboards, and rewards.',
    impact: 'Increased student engagement by turning complex subjects into rewarding challenges.',
    imageIcon: <Gamepad2 className="w-12 h-12 text-primary" />,
    tech: ['React', 'Node.js', 'Firebase', 'MongoDB'],
    gradient: 'from-blue-600/20 to-cyan-500/10',
    link: 'https://gamified-learning-fawn.vercel.app/' // Real Live Link
  },
  {
    id: 'ai-exam',
    title: 'AI Exam Note Generator',
    subtitle: 'Smart Study Engine',
    description: 'An AI-powered tool that generates concise, structured exam notes from user input or study material, helping students save time and improve revision efficiency.',
    impact: 'Saves hours of manual summarization for students, optimizing revision efficacy.',
    imageIcon: <BrainCircuit className="w-12 h-12 text-secondary" />,
    tech: ['OpenAI API', 'React', 'Express', 'MongoDB'],
    gradient: 'from-purple-600/20 to-pink-500/10',
    link: 'https://examnotegenerator.vercel.app/' // Real Live Link
  },
  {
    id: 'scrap',
    title: 'Scrap Management Website',
    subtitle: 'Eco-Logistics Platform',
    description: 'A modern digital platform enabling efficient scrap trading and waste management logistics. Connects local scrap collectors, recycling centers, and end-users.',
    impact: 'Promotes sustainable recycling economies by streamlining the scrap supply chain.',
    imageIcon: <Recycle className="w-12 h-12 text-green-500" />,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-green-600/20 to-emerald-500/10',
    link: 'https://github.com/adarsh-kumar318' // Replace with your actual project link!
  }
];

const ProjectCard = ({ project, idx }) => {
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={() => window.open(project.link, '_blank')}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-panel w-[350px] md:w-[400px] h-[550px] rounded-[2rem] overflow-hidden flex-shrink-0 relative group boundary cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 z-0 pointer-events-none rounded-[2rem] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center`}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <ExternalLink className="w-8 h-8 text-white" />
          </div>
          <span className="text-white font-bold tracking-widest uppercase">Open Project</span>
        </div>
      </div>
      
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10 p-8 flex flex-col h-full pointer-events-none"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-dark/50 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            {project.imageIcon}
          </div>
          <FaGithub className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
        </div>

        <div className="mb-2 text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          {project.subtitle}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{project.title}</h3>
        
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
            A Horizontal 3D Scroll Scene. Click any card to launch the live project directly.
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto pb-16 pt-8 px-6 md:px-12 hide-scrollbar" style={{ perspective: "1500px" }}>
        <div className="flex gap-8 w-max mx-auto px-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
