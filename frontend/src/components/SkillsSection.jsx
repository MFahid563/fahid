import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import {
  FaCode, FaDatabase, FaServer, FaTools, FaCloud,
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaAws, FaCube
} from 'react-icons/fa';
import {
  SiRedux, SiTypescript, SiMongodb, SiExpress, SiGraphql, SiDocker
} from 'react-icons/si';

const SkillSphere = ({ color }) => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="#E11D48" roughness={0.2} metalness={0.8} />
  </mesh>
);

const categorizedSkills = {
  '3D & Frontend': [
    { name: 'JavaScript', level: 95, icon: <FaJs className="text-yellow-400 text-xl" />, color: '#E11D48' },
    { name: 'React.js', level: 90, icon: <FaReact className="text-blue-400 text-xl" />, color: '#E11D48' },
    { name: 'Three.js', level: 85, icon: <FaCube className="text-gray-300 text-xl" />, color: '#E11D48' }
  ],
  'Backend & API': [
    { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-500 text-xl" />, color: '#E11D48' },
    { name: 'Express.js', level: 80, icon: <SiExpress className="text-gray-300 text-xl" />, color: '#E11D48' }
  ],
  'Database & Cloud': [
    { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-600 text-xl" />, color: '#E11D48' },
    { name: 'AWS', level: 55, icon: <FaAws className="text-orange-400 text-xl" />, color: '#E11D48' }
  ],
  'DevOps & Tools': [
    { name: 'Docker', level: 60, icon: <SiDocker className="text-blue-400 text-xl" />, color: '#E11D48' },
    { name: 'Git', level: 85, icon: <FaGit className="text-red-500 text-xl" />, color: '#E11D48' }
  ]
};

const icons = {
  '3D & Frontend': <FaCode className="text-rose-600 text-2xl" />,
  'Backend & API': <FaServer className="text-rose-600 text-2xl" />,
  'Database & Cloud': <FaDatabase className="text-rose-600 text-2xl" />,
  'DevOps & Tools': <FaTools className="text-rose-600 text-2xl" />
};

const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative group [perspective:1200px] w-24 h-24 mx-auto hover:shadow-xl hover:shadow-rose-300 dark:hover:shadow-rose-800 transition duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => controls.start({ rotateY: 180, scale: 1.05 })}
      onHoverEnd={() => controls.start({ rotateY: 0, scale: 1 })}
    >
      <motion.div
        className="relative w-full h-full"
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-md group-hover:bg-rose-100 dark:group-hover:bg-rose-900"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-12 h-12">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
              <SkillSphere color={skill.color} />
            </Canvas>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {skill.icon}
          </div>
        </div>

        <div
          className="absolute w-full h-full transform rotate-y-180 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center p-2 transition-all duration-500"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-[10px] font-bold text-slate-900 dark:text-white">{skill.name}</span>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-1">
            <motion.div
              className="bg-rose-600 h-1 rounded-full"
              style={{ width: `${skill.level}%` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <span className="text-[9px] mt-1 text-slate-700 dark:text-slate-200">{skill.level}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            <span className="inline-block relative">
              <span className="relative z-10">My Technical Expertise</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-rose-600 opacity-30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            As a Web and Business Developer, I build result-driven digital platforms that merge modern web technologies with smart business strategies to drive growth and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills], idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="12px"
              scale={1.03}
              transitionSpeed={2000}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              <motion.div
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-rose-300 dark:hover:shadow-rose-700 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-rose-600 rounded-lg text-white">
                    {icons[category]}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, i) => (
                    <SkillCard key={i} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;