// src/components/HeroSection.js
import { useContext, Suspense } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';

const floatingTags = [
  '</>',
  '{}',
  '() => {}',
  '<div>',
  '/* */',
  'const',
  '!==',
  '===',
  'async/await'
];



const generateRandomStyle = () => ({
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  fontSize: `${Math.random() * 1.5 + 2}rem`,
  transform: `rotate(${Math.random() * 360}deg)`
});

const AnimatedTorus = () => {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, -10]}>
      <torusKnotGeometry args={[10, 3, 128, 16]} />
      <meshStandardMaterial color="#B76E79" wireframe />
    </mesh>
  );
};

const HeroSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const tagVariants = {
    animate: {
      x: [0, 20, -15, 10, 0],
      y: [0, -20, 10, -10, 0],
      rotate: [0, 15, -10, 20, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden dark:bg-gray-900"
      style={{ background: 'linear-gradient(180deg, #d7e2f4 0%, #f3f6fb 100%)' }}
    >
      <div className="absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedTorus />
            <Stars radius={100} depth={50} count={2000} factor={4} fade />
            <Sparkles count={100} speed={0.5} size={2} color="#E11D48" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingTags.map((tag, i) => (
          <motion.span
            key={i}
            className="absolute font-bold text-rose-300 opacity-20 select-none"
            style={generateRandomStyle()}
            variants={tagVariants}
            animate="animate"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
        >
          <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <motion.h4 className="text-lg md:text-xl font-medium text-rose-600 mb-4">
              Hello, I'm
            </motion.h4>
            <motion.h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-slate-900 mb-4">
              Muhammad Fahid
            </motion.h1>
            <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mb-6">
              Business & Web Developer
            </motion.h2>
            <motion.p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
              Delivering smart, scalable web solutions and growth-driven strategies to turn ideas into thriving digital businesses
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-rose-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border-2 border-rose-600 text-rose-600 font-medium rounded-lg transition-colors hover:bg-rose-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            <div className="flex mt-8 space-x-4">
              {[{ icon: <FiGithub size={24} />, url: '#' }, { icon: <FiLinkedin size={24} />, url: '#' }, { icon: <FiTwitter size={24} />, url: '#' }].map(
                (social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    className="text-slate-700 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full border-8 border-white dark:border-slate-800 shadow-xl overflow-hidden">
              <motion.img
                src="/images/me.jpg"
                alt="Muhammad Fahid - 3D Developer"
                className="w-full h-full object-cover rounded-full"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.06, rotate: [0, 1, -1, 0] }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
