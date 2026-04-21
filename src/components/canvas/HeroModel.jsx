import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment, Html, Box, Sphere } from '@react-three/drei';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const OrbitingTechIcon = ({ icon: Icon, color, radius, speed, yOffset }) => {
  const ref = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    angle.current += delta * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(angle.current) * radius;
      ref.current.position.z = Math.sin(angle.current) * radius;
      ref.current.position.y = yOffset + Math.sin(angle.current * 2) * 0.5;
    }
  });

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Box args={[0.6, 0.6, 0.1]} radius={0.05}>
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} transparent opacity={0.8} />
          <Html transform position={[0, 0, 0.06]} distanceFactor={3} zIndexRange={[100, 0]} center>
            <div className={`p-2 rounded-full flex items-center justify-center bg-dark/80 border border-white/10 backdrop-blur-md`} style={{ color }}>
              <Icon size={32} />
            </div>
          </Html>
        </Box>
      </Float>
    </group>
  );
};

const ProfileCard = () => {
  const cardRef = useRef();

  useFrame((state) => {
    // Gentle floating and subtle rotation
    cardRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={cardRef}>
      {/* 3D Glass Card */}
      <Box args={[3.5, 4.5, 0.1]} radius={0.2}>
        <meshPhysicalMaterial 
          color="#0f172a" 
          metalness={0.9} 
          roughness={0.1} 
          transparent 
          opacity={0.8}
          transmission={0.5}
          thickness={0.5}
        />
        <Html transform position={[0, 0, 0.06]} distanceFactor={4} zIndexRange={[100, 0]} center>
          <div className="w-[300px] h-[400px] bg-gradient-to-br from-darker/90 to-dark/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl" />
            <div className="w-32 h-32 rounded-full border-4 border-primary/30 p-1 mb-4 relative z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              {/* Profile Photo Placeholder */}
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <span className="text-4xl text-slate-400">AK</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white relative z-10">Adarsh Kumar</h3>
            <p className="text-primary font-medium mt-2 relative z-10">MERN Developer</p>
            <div className="mt-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full relative z-10">
              <p className="text-xs text-slate-300">CS Undergraduate</p>
            </div>
          </div>
        </Html>
      </Box>
    </group>
  );
};

const AbstractShapes = () => {
  const torusRef = useRef();
  const sphereRef = useRef();
  
  useFrame((state, delta) => {
    torusRef.current.rotation.x += delta * 0.2;
    torusRef.current.rotation.y += delta * 0.3;
    sphereRef.current.rotation.y -= delta * 0.1;
  });

  return (
    <group>
      {/* Dynamic Background Shapes */}
      <mesh ref={torusRef} position={[-2, -1, -2]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} wireframe />
      </mesh>
      <mesh ref={sphereRef} position={[2, 2, -3]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const HeroModel = () => {
  return (
    <Canvas
      className="w-full h-full cursor-grab active:cursor-grabbing"
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 2]} // Performance optimization
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Environment preset="city" />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
      
      <React.Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <ProfileCard />
        </Float>

        {/* Orbiting Technologies */}
        <OrbitingTechIcon icon={FaReact} color="#61DAFB" radius={3} speed={0.5} yOffset={1} />
        <OrbitingTechIcon icon={FaNodeJs} color="#339933" radius={3.5} speed={0.3} yOffset={-1} />
        <OrbitingTechIcon icon={SiMongodb} color="#47A248" radius={4} speed={0.4} yOffset={0} />

        <AbstractShapes />
      </React.Suspense>

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 2 - 0.1}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default HeroModel;
