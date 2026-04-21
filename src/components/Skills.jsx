import React, { useRef, useState } from 'react';
import { motion as framerMotion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float, Environment } from '@react-three/drei';
import { Layout, Server, Database, Code2 } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <Layout className="w-8 h-8 text-primary" />,
    skills: ['React', 'HTML', 'CSS', 'JS', 'Tailwind'],
    color: '#0ea5e9',
    position: [0, 2, 2]
  },
  {
    title: 'Backend',
    icon: <Server className="w-8 h-8 text-secondary" />,
    skills: ['Node.js', 'Express', 'REST APIs'],
    color: '#8b5cf6',
    position: [2, 0, -2]
  },
  {
    title: 'Database',
    icon: <Database className="w-8 h-8 text-pink-500" />,
    skills: ['MongoDB', 'SQL', 'Mongoose'],
    color: '#ec4899',
    position: [-2, 0, -2]
  },
  {
    title: 'Languages',
    icon: <Code2 className="w-8 h-8 text-green-500" />,
    skills: ['Java', 'C', 'JavaScript'],
    color: '#22c55e',
    position: [0, -2, 2]
  }
];

const SkillNode = ({ idx, category }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  // Floating orbiting magic
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Create a gentle orbit relative to their start positions
      const time = state.clock.elapsedTime;
      const radius = 3;
      const offset = idx * (Math.PI / 2);
      
      meshRef.current.position.x = Math.sin(time * 0.5 + offset) * radius;
      meshRef.current.position.z = Math.cos(time * 0.5 + offset) * radius;
      
      // Gentle bob up and down based on local index
      meshRef.current.position.y = Math.sin(time * 1 + offset) * 1.5;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color={category.color} 
          wireframe 
          emissive={category.color} 
          emissiveIntensity={hovered ? 0.8 : 0.2}
          transparent
          opacity={0.6}
        />
        
        {/* The 3D Expanding Card */}
        <Html center transform distanceFactor={5} zIndexRange={[100, 0]}>
          <div 
            className={`transition-all duration-300 ease-out bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer shadow-2xl overflow-hidden
              ${hovered ? 'w-48 h-48 opacity-100 scale-100' : 'w-20 h-20 opacity-80 scale-90'}
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={`transition-all duration-300 ${hovered ? 'mb-2 scale-75' : 'scale-100'}`}>
              {category.icon}
            </div>
            
            {hovered ? (
              <framerMotion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center w-full"
              >
                <h4 className="text-white font-bold text-sm mb-2 text-center">{category.title}</h4>
                <div className="flex flex-wrap justify-center gap-1">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-white/10 rounded-md text-[10px] text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </framerMotion.div>
            ) : (
              <span className="text-[10px] font-bold text-white mt-1 opacity-0 absolute">{category.title}</span>
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 z-10 min-h-[80vh] flex flex-col items-center">
      <div className="section-container w-full z-20 pointer-events-none mb-0 pb-0">
        <framerMotion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 pointer-events-auto">
            Technical Stack
          </div>
          <h2 className="heading-lg pointer-events-auto">3D Interactive <span className="text-gradient">Arsenal</span></h2>
          <p className="text-slate-400 text-lg pointer-events-auto">
            Hover over the orbiting spheres to explore my technological toolkit across different domains.
          </p>
        </framerMotion.div>
      </div>

      <div className="w-full flex-grow relative h-[600px] mt-[-50px]">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          
          {/* Central Anchor */}
          <Float speed={2} rotationIntensity={1}>
            <mesh>
              <octahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial color="#334155" wireframe emissive="#1e293b" />
            </mesh>
          </Float>

          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillNode key={idx} idx={idx} category={category} />
          ))}
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </section>
  );
}
