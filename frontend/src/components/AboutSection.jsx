import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const AboutSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-rose-600 to-rose-400 opacity-20 blur-xl"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl">
                <img 
                  src="/images/fa.jpg" 
                  alt="About Me" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-rose-400 rounded-xl bg-white dark:bg-slate-800 shadow-lg"
                whileHover={{ scale: 1.1 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Who am I?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I'm Muhammad Fahid, a Full Stack Web & Business Developer with 5+ years of experience turning ideas into high-impact digital solutions. I specialize in building powerful web platforms that drive real business results.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              My journey began in college, and since then, I've collaborated with startups and established companies to deliver high-quality, scalable web solutions tailored to real-world needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Name:', value: 'Muhammad Fhid' },
                { label: 'Email:', value: 'muhammadfahiduet@gmail.com' },
                { label: 'Experience:', value: '5+ Years' },
                { label: 'Location:', value: 'Lahore, Pakistan' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-rose-600 font-medium mr-2">{item.label}</span>
                  <span className="text-slate-700 dark:text-slate-300">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-rose-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;