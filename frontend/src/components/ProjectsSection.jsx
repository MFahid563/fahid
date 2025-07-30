import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const rawProjects = [
  
    {
    id: 1,
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio website built with modern UI/UX design principles.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: '#',
    image:'/images/projects/bakar-portfoilo.PNG'
  },
  
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'AI-powered chatbot integrated with a custom trained model using RAG architecture.',
    technologies: ['Python', 'React', 'Flask', 'FAISS', 'OpenAI API'],
    github: '#',
    live: '#',
    image: '/images/projects/chatbot.jpg'
  },

  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using Socket.io.',
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    github: '#',
    live: '#',
    image: '/images/projects/stackholder.jpg'
  },
  
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with React frontend, Node.js backend, and MongoDB database.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe API'],
    github: '#',
    live: '#'
  },
    {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with interactive charts and data visualization.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
    github: '#',
    live: '#',
    image: '/projects/stackholder.jpg'
  },
  

  {
    id: 6,
    title: 'Blog Platform',
    description: 'A markdown-supported blog platform with authentication and dashboard.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind', 'JWT'],
    github: '#',
    live: '#'
  }
];

const allProjects = rawProjects.map(project => ({
  ...project,
  image: project.image || `https://source.unsplash.com/random/600x400/?tech,${project.id}`
}));

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      repeat: Infinity,
      duration: 3 + Math.random() * 2,
      ease: 'easeInOut'
    }
  }
};

const ProjectsSection = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Featured Projects</span>
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-3 bg-rose-400/30 -rotate-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            A collection of my most innovative and technically challenging projects, each solving unique problems with creative solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-400/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-rose-100/60 dark:bg-rose-900/30 text-rose-700 dark:text-rose-100 rounded-full shadow-sm"
                      variants={floatAnimation}
                      animate="animate"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-rose-600 text-rose-600 dark:text-rose-400 font-medium rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAll ? 'M5 12h14' : 'M14 5l7 7m0 0l-7 7m7-7H3'} />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
