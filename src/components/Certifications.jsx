import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const CERTS = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Coursera / IBM',
    date: 'Dec 2023',
    credentialId: 'IBM-FS-10293',
    link: '#'
  },
  {
    id: 2,
    title: 'MongoDB Node.js Developer Path',
    issuer: 'MongoDB University',
    date: 'Jan 2024',
    credentialId: 'M220JS-9482',
    link: '#'
  },
  {
    id: 3,
    title: 'React Native Specialization',
    issuer: 'Meta',
    date: 'Mar 2024',
    credentialId: 'META-RN-5541',
    link: '#'
  }
];

const FlipCard = ({ cert, idx }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      style={{ perspective: "1000px" }}
      className="w-full h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-2xl"
      >
        {/* Front of Card */}
        <div 
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center border-t border-t-white/20 shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
          <p className="text-secondary font-medium">{cert.issuer}</p>
        </div>

        {/* Back of Card */}
        <div 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30"
        >
          <ShieldCheck className="w-12 h-12 text-pink-500 mb-4 opacity-80" />
          <div className="text-[#cbd5e1] mb-2 font-mono text-sm uppercase tracking-widest">{cert.date}</div>
          <div className="text-white font-bold mb-6 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10">ID: {cert.credentialId}</div>
          
          <a href={cert.link} className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full transition-opacity font-medium text-white shadow-lg text-sm">
            <span>Verify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 z-10">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            <Award className="w-4 h-4" />
            Verified Achievements
          </div>
          <h2 className="heading-lg">Professional <span className="text-gradient">Certifications</span></h2>
          <p className="text-[#94a3b8] text-lg">
            Hover over the credentials to reveal verification details and certification IDs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CERTS.map((cert, idx) => (
            <FlipCard key={cert.id} cert={cert} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
