import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darker/50 backdrop-blur-md py-12 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Adarsh Kumar Logo" className="w-8 h-8 object-contain rounded-full shadow-md" />
          <span className="font-bold text-xl tracking-tight text-white">Adarsh<span className="text-gradient">.dev</span></span>
        </div>

        <p className="text-slate-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Adarsh Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/adarsh-kumar318" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-slate-500 hover:text-white hover:-translate-y-2 transition-all duration-300">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-kumar" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-slate-500 hover:text-blue-400 hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full text-slate-500 hover:text-sky-400 hover:-translate-y-2 transition-all duration-300">
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
