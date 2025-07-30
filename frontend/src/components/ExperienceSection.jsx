import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const experience = [
  {
    id: 1,
    role: 'Business Developer',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: [
      'Collaborated with clients to deliver web solutions aligned with business goals',
      'Acted as the link between tech teams and clients to ensure clear goals and smooth delivery.',
      'Performed market research and lead generation, converting prospects into loyal clients.'
    ]
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Innovations LLC',
    duration: '2018 - 2020',
    description: [
      'Developed and maintained multiple client projects using FULL stack',
      'Integrated third-party APIs including payment gateways and social media',
      'Improved code quality by implementing testing frameworks'
    ]
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Web Creations',
    duration: '2016 - 2018',
    description: [
      'Built responsive user interfaces with React.js',
      'Collaborated with designers to implement UI/UX designs',
      'Participated in code reviews and mentored junior developers'
    ]
  }
];

const education = [
  {
    id: 1,
    degree: 'Web Development Course',
    institution: 'Coursera',
    duration: '2014 - 2016',
    description: 'Specialized in Web Technologies and Distributed Systems'
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Science',
    institution: 'University of Engineering & Technology',
    duration: '2023-2027',
    description: 'Graduated with Honors'
  }
];

const ExperienceSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="experience"
      className="py-20 dark:bg-gray-900"
     
      style={{ backgroundColor: '#f8fafc' }}

    
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="relative pl-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-rose-500 border-4 border-white dark:border-gray-800"></div>
                  <motion.div 
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                    <h5 className="text-rose-500 dark:text-rose-400 font-medium mb-4">
                      {exp.company} <span className="mx-2">•</span> {exp.duration}
                    </h5>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="relative pl-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-rose-400 border-4 border-white dark:border-gray-800"></div>
                  <motion.div 
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <h5 className="text-rose-400 dark:text-rose-300 font-medium mb-4">
                      {edu.institution} <span className="mx-2">•</span> {edu.duration}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;