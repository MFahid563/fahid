import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer id="contact" className="bg-white dark:bg-slate-800 pt-20 pb-10 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div 
            className="footer-about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent mb-4">Muhammad Fahid</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
             Expert strategies & insights on business development, full-stack web solutions, and digital transformation
            </p>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((link, i) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                >
                  <Link 
  to={link.toLowerCase()} 
  smooth={true}
  duration={500}
  spy={true}
  onSetActive={() => setActiveSection(link)}
  className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
>
  {link}
</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FiMapPin className="text-rose-600 dark:text-rose-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Lahore, Pakistan</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FiMail className="text-rose-600 dark:text-rose-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">muhammadfahiduet@gmail.com</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="text-rose-600 dark:text-rose-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">+92 3324552045</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FiGithub size={20} />, url: 'https://github.com/MFahid563' },
                { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/muhammad-fahid-752ab6339' },
                { icon: <FiTwitter size={20} />, url: '#' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  whileHover={{ y: -5, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-slate-200 dark:border-slate-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-300">
            &copy; {new Date().getFullYear()} Muhammad Fahid. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;